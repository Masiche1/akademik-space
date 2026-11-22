import type { Lesson, MarkPrinciple, MarkStep, Question } from "../../../types.ts";

type Difficulty = Question["difficulty"];
type PrincipleKind = MarkPrinciple["kind"];
type StepCode = MarkStep["markCode"];

const makePrinciple = (
  kind: PrincipleKind,
  name: string,
  statement: string,
): MarkPrinciple => ({ kind, name, statement });

const makeSteps = (steps: [string, number, StepCode][]): MarkStep[] =>
  steps.map(([reasoning, marks, markCode]) => ({ reasoning, marks, markCode }));

const makeNumericParts = (parts: [string, number, string?][]) =>
  parts.map(([label, answer, unit]) => ({
    label,
    answer,
    ...(unit === undefined ? {} : { unit }),
  }));

type MarkedQuestion = {
  id: string;
  d: Difficulty;
  s: string;
  steps: [string, number, StepCode][];
  p: [string, string];
  f: string;
  k?: PrincipleKind;
  e?: string;
};

const MCQ_SPECIAL = /all of the (above|these)|none of the (above|these)|none of these|\b[abcd]\s+and\s+[abcd]\b/i;
const mcqSeed = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
};
const mcqOrder = (texts: readonly string[], seed: string): number[] | null => {
  if (texts.some((t) => MCQ_SPECIAL.test(t))) return null;
  let a = mcqSeed(seed);
  const rnd = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = texts.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.every((v, i) => v === i) && order.length > 1 ? [order[1], order[0], ...order.slice(2)] : order;
};

const mcqQ = (q: {
  id: string;
  d: Difficulty;
  s: string;
  c: [string, string, string, string];
  a: number;
  p: [string, string];
  r: string;
  f: string;
  k?: PrincipleKind;
  e?: string;
}): Question => {
  const __o = mcqOrder(q.c, q.id);
  const __c = __o ? __o.map((i) => q.c[i]) : q.c;
  const __a = __o ? __o.indexOf(q.a) : q.a;
  return {
  id: q.id,
  difficulty: q.d,
  totalMarks: 1,
  stem: q.s,
  response: {
    type: "mcq",
    choices: __c.map((text, index) => ({
      id: String.fromCharCode(97 + index),
      text,
    })),
    correctChoiceId: String.fromCharCode(97 + __a),
  },
  markscheme: {
    principles: [makePrinciple(q.k ?? "definition", q.p[0], q.p[1])],
    steps: [{ reasoning: q.r, marks: 1, markCode: "A" }],
    finalAnswer: q.f,
    ...(q.e ? { commonErrors: [q.e] } : {}),
  },
  };
};

const numQ = (
  q: MarkedQuestion & { parts: [string, number, string?][] },
): Question => ({
  id: q.id,
  difficulty: q.d,
  totalMarks: q.steps.reduce((sum, [, marks]) => sum + marks, 0),
  stem: q.s,
  response: { type: "numeric", parts: makeNumericParts(q.parts) },
  markscheme: {
    principles: [makePrinciple(q.k ?? "skill", q.p[0], q.p[1])],
    steps: makeSteps(q.steps),
    finalAnswer: q.f,
    ...(q.e ? { commonErrors: [q.e] } : {}),
  },
});

const openQ = (q: MarkedQuestion): Question => ({
  id: q.id,
  difficulty: q.d,
  totalMarks: q.steps.reduce((sum, [, marks]) => sum + marks, 0),
  stem: q.s,
  response: { type: "open" },
  markscheme: {
    principles: [makePrinciple(q.k ?? "definition", q.p[0], q.p[1])],
    steps: makeSteps(q.steps),
    finalAnswer: q.f,
    ...(q.e ? { commonErrors: [q.e] } : {}),
  },
});

export const lesson811: Lesson = {
  id: "cial-b-u8-lesson-8-1",
  code: "8-1",
  title: "Biodiversity and classification",
  goal: "I CAN describe levels of classification, binomial nomenclature and methods of classifying organisms.",
  standards: ["9700 16.1: biodiversity and classification"],
  vocabulary: [
    { term: "Biodiversity", definition: "Variety of life — species richness and evenness in an area." },
    { term: "Species", definition: "Group of organisms that can interbreed to produce fertile offspring." },
    { term: "Binomial nomenclature", definition: "Two-part scientific name: Genus species (italicised)." },
    { term: "Taxonomy", definition: "Science of naming and classifying organisms." },
    { term: "Dichotomous key", definition: "Tool using paired statements to identify organisms." },
    { term: "Phylogeny", definition: "Evolutionary history/relationships between species." },
  ],
  concepts: [
    {
      id: "cial-b-u8-classification",
      title: "Classification systems",
      skill: "Use taxonomic ranks, binomial names and dichotomous keys.",
      lesson: {
        sections: [
          {
            heading: "Taxonomic hierarchy",
            body: "Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species. Each level groups organisms by shared features; species is the most specific. Humans: Animalia, Chordata, Mammalia, Primates, Hominidae, Homo, sapiens.",
          },
          {
            heading: "Binomial nomenclature",
            body: "Linnaean system: two Latin names — Genus (capitalised) + species (lowercase), italicised or underlined: *Homo sapiens*. Universal, avoids confusion of common names. Named after discoverer sometimes (e.g. *Rosa*).",
          },
          {
            heading: "Dichotomous keys and phylogeny",
            body: "Dichotomous key: series of either/or statements leading to identification. Modern classification (cladistics/phylogenetics) groups by evolutionary relatedness — DNA/protein evidence. Five-kingdom system: Prokaryotae, Protoctista, Fungi, Plantae, Animalia.",
          },
        ],
        keyFormulas: [
          { name: "Hierarchy", statement: "Domain→Kingdom→Phylum→Class→Order→Family→Genus→Species" },
          { name: "Binomial", statement: "Genus species (italicised, e.g. Homo sapiens)" },
        ],
        workedExample: {
          problem: "Write the binomial name for humans and list three taxonomic ranks.",
          solution: "*Homo sapiens*. Ranks: Kingdom Animalia, Phylum Chordata, Class Mammalia.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of taxonomic ranks from broadest to most specific?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phylum → Kingdom → Class → Order → Family → Genus → Species" },
              { id: "b", text: "Species → Genus → Family → Order → Class → Phylum → Kingdom" },
              { id: "c", text: "Kingdom → Phylum → Class → Order → Family → Genus → Species" },
              { id: "d", text: "Class → Kingdom → Phylum → Order → Family → Genus → Species" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Taxonomy", statement: "Kingdom broadest → species most specific." }],
            steps: [{ reasoning: "Correct order: Kingdom→...→Species.", marks: 1, markCode: "A" }],
            finalAnswer: "Kingdom→Phylum→Class→Order→Family→Genus→Species",
          },
        },
        {
          id: "cial-b-u8-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is binomial nomenclature? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Binomial", statement: "Genus + species, two Latin names." }],
            steps: [
              { reasoning: "Two-part name: Genus (capital) + species (lowercase), italicised.", marks: 1, markCode: "M" },
              { reasoning: "Example: *Homo sapiens* or *Felis catus*.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genus species e.g. Homo sapiens",
          },
        },
        {
          id: "cial-b-u8-cl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a dichotomous key is used to identify an organism.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dichotomous key", statement: "Paired statements progressively narrow identification." }],
            steps: [
              { reasoning: "Series of paired either/or statements.", marks: 1, markCode: "M" },
              { reasoning: "Each choice leads to next pair until identification.", marks: 1, markCode: "M" },
              { reasoning: "Used for plants, insects, etc. — simple and systematic.", marks: 1, markCode: "M" },
              { reasoning: "Correct procedure described.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Paired statements → identification",
          },
        },
        {
          id: "cial-b-u8-cl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Classification.",
          parts: [
            { label: "a", prompt: "List the taxonomic ranks in order.", marks: 3 },
            { label: "b", prompt: "What is binomial nomenclature? Give an example.", marks: 2 },
            { label: "c", prompt: "What is a dichotomous key?", marks: 2 },
            { label: "d", prompt: "Why is *Homo sapiens* written in italics?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Taxonomy", statement: "Ranks, binomial names, keys." }],
            steps: [
              { part: "a", reasoning: "Kingdom, Phylum, Class, Order, Family, Genus, Species.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All seven in correct order.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Domain may precede Kingdom.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Genus + species two-part Latin name.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example given.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Series of paired statements leading to ID.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Italicised to show scientific name convention.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Distinguishes from common names.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 7 ranks (b) Genus species (c) paired statements (d) scientific convention",
          },
        },
        mcqQ({
          id: "cial-b-u8-cl-q5", d: "foundation",
          s: "Which taxonomic rank is the most specific?",
          c: ["Kingdom", "Genus", "Species", "Family"], a: 2,
          p: ["Taxonomic ranks", "Species is the lowest and most specific rank."],
          r: "Species is the most specific rank in the hierarchy.",
          f: "**(c)** Species", e: "Choosing a broader rank.",
        }),
        mcqQ({
          id: "cial-b-u8-cl-q6", d: "core",
          s: "Which is the correctly written binomial name?",
          c: ["homo sapiens", "Homo Sapiens", "Homo sapiens", "HOMOSAPIENS"], a: 2,
          p: ["Binomial nomenclature", "Genus is capitalised, species lowercase, name italicised."],
          r: "Binomial names use a capitalised genus and lowercase species name.",
          f: "**(c)** Homo sapiens", e: "Using wrong capitalisation or formatting.",
        }),
        mcqQ({
          id: "cial-b-u8-cl-q7", d: "challenge",
          s: "What is the defining feature of a dichotomous key?",
          c: ["It lists organisms alphabetically", "It uses paired either/or statements to narrow identification", "It assigns every organism a number", "It uses DNA sequencing only"], a: 1,
          p: ["Dichotomous key", "Each step offers two contrasting choices."],
          r: "A dichotomous key uses successive paired statements to identify an organism.",
          f: "**(b)** It uses paired either/or statements to narrow identification", e: "Describing a field guide or phylogenetic tree.",
        }),
        mcqQ({
          id: "cial-b-u8-cl-q8", d: "core",
          s: "Which is one of the five kingdoms in the traditional five-kingdom system?",
          c: ["Fungi", "Virus", "Viroid", "Prion"], a: 0,
          p: ["Five kingdoms", "The five kingdoms include Prokaryotae, Protoctista, Fungi, Plantae and Animalia."],
          r: "Fungi is one of the five kingdoms.",
          f: "**(a)** Fungi", e: "Naming non-cellular agents rather than kingdoms.",
        }),
        mcqQ({
          id: "cial-b-u8-cl-q9", d: "foundation",
          s: "Which statement best defines a species?",
          c: ["Any group living in the same habitat", "Any organism with the same colour", "A group unable to breed", "A group that can interbreed to produce fertile offspring"], a: 3,
          p: ["Species", "Species are defined by interbreeding and fertile offspring."],
          r: "A species is a group capable of producing fertile offspring by interbreeding.",
          f: "**(d)** A group that can interbreed to produce fertile offspring", e: "Using habitat or appearance alone.",
        }),
        mcqQ({
          id: "cial-b-u8-cl-q10", d: "challenge",
          s: "What does phylogeny show?",
          c: ["Geographic distribution only", "Body size relationships", "Evolutionary relatedness between groups", "Number of chromosomes only"], a: 2,
          p: ["Phylogeny", "Phylogenetic trees represent evolutionary history."],
          r: "Phylogeny describes evolutionary relationships among organisms.",
          f: "**(c)** Evolutionary relatedness between groups", e: "Confusing phylogeny with ecology or morphology alone.",
        }),
        numQ({
          id: "cial-b-u8-cl-q11", d: "foundation",
          s: "In the hierarchy Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species, how many ranks are there?",
          parts: [["a", 8, "ranks"]],
          steps: [
            ["Count the listed ranks from Domain to Species.", 1, "M"],
            ["There are $8$ ranks.", 1, "A"],
          ],
          p: ["Rank count", "Count all taxonomic levels including Domain."],
          f: "$8$ ranks", e: "Omitting Domain and giving $7$.",
        }),
        numQ({
          id: "cial-b-u8-cl-q12", d: "core",
          s: "Two species share Kingdom, Phylum, Class, Order, Family and Genus but not Species. What percentage of the eight ranks do they share?",
          parts: [["a", 75, "%"]],
          steps: [
            ["Shared ranks = Kingdom through Genus = $6$ ranks.", 1, "M"],
            ["Percentage = $(6 / 8) \\times 100 = 75\\%$.", 1, "A"],
          ],
          p: ["Shared ranks", "Shared ranks divided by total ranks."],
          f: "$75\\%$", e: "Counting Species as shared.",
        }),
        numQ({
          id: "cial-b-u8-cl-q13", d: "core",
          s: "How many taxonomic ranks lie between Phylum and Species in the eight-rank hierarchy?",
          parts: [["a", 4, "ranks"]],
          steps: [
            ["Ranks between are Class, Order, Family and Genus.", 1, "M"],
            ["That gives $4$ intermediate ranks.", 1, "A"],
          ],
          p: ["Intermediate ranks", "Count levels strictly between Phylum and Species."],
          f: "$4$ ranks", e: "Including Phylum or Species in the count.",
        }),
        numQ({
          id: "cial-b-u8-cl-q14", d: "challenge",
          s: "A sample contains $10$, $5$ and $5$ individuals of three species. Using Simpson's index $\\sum n(n-1) / N(N-1)$, calculate the index.",
          parts: [["a", 0.342, "index"]],
          steps: [
            ["Numerator = $10(9) + 5(4) + 5(4) = 130$.", 1, "M"],
            ["Denominator = $20(19) = 380$, so index = $130 / 380 = 0.342$.", 1, "A"],
          ],
          p: ["Simpson's index", "Sum n(n-1) divided by N(N-1)."],
          f: "$0.342$", e: "Forgetting to subtract $1$ in each term.",
        }),
        numQ({
          id: "cial-b-u8-cl-q15", d: "core",
          s: "Four quadrats record $3$, $5$, $2$ and $4$ individuals. What is the total number of individuals recorded?",
          parts: [["a", 14, "individuals"]],
          steps: [
            ["Total = sum of quadrat counts.", 1, "M"],
            ["$3 + 5 + 2 + 4 = 14$ individuals.", 1, "A"],
          ],
          p: ["Population count", "Add all sampled individuals."],
          f: "$14$ individuals", e: "Counting quadrats instead of individuals.",
        }),
        openQ({
          id: "cial-b-u8-cl-q16", d: "challenge",
          s: "Explain why binomial nomenclature and dichotomous keys are both useful classification tools.",
          steps: [
            ["Binomial names give every species a unique, internationally understood name.", 1, "M"],
            ["They avoid confusion caused by different common names.", 1, "M"],
            ["Dichotomous keys use paired observable characters to identify unknown organisms.", 1, "M"],
            ["Together they support consistent naming and identification.", 1, "A"],
          ],
          p: ["Classification tools", "Universal naming plus stepwise identification."],
          f: "Binomial names standardise identity; dichotomous keys identify organisms by paired characters.",
          e: "Describing only one tool.",
        }),
      ],
    },
    {
      id: "cial-b-u8-biodiversity",
      title: "Biodiversity and conservation",
      skill: "Explain biodiversity measurement and threats to biodiversity.",
      lesson: {
        sections: [
          {
            heading: "Measuring biodiversity",
            body: "Species richness = number of different species; species evenness = relative abundance. Simpson's index combines both (higher = more diverse). Genetic diversity within species also matters. Hotspots: high diversity + high threat.",
          },
          {
            heading: "Threats",
            body: "Habitat destruction (deforestation, urbanisation), pollution, overexploitation (overfishing, poaching), invasive species, climate change. Loss of habitat → loss of species → loss of ecosystem services.",
          },
          {
            heading: "Conservation",
            body: "In situ: protected areas (national parks, reserves), sustainable management. Ex situ: zoos, botanical gardens, seed banks, captive breeding. CITES regulates trade in endangered species. Sustainable development balances use and protection.",
          },
        ],
        keyFormulas: [
          { name: "Species richness", statement: "Number of different species in an area" },
          { name: "Threats", statement: "Habitat loss, pollution, overexploitation, invasives, climate change" },
        ],
        workedExample: {
          problem: "Why is tropical rainforest biodiversity higher than tundra?",
          solution: "Stable warm climate, high productivity, complex habitats support more species — but it's also more threatened by deforestation.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-bd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'species richness' measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genetic variety within one species" },
              { id: "b", text: "Size of the largest species" },
              { id: "c", text: "Total number of organisms" },
              { id: "d", text: "Number of different species in an area" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Species richness", statement: "Count of different species." }],
            steps: [{ reasoning: "Richness = number of species present.", marks: 1, markCode: "A" }],
            finalAnswer: "Number of species",
          },
        },
        {
          id: "cial-b-u8-bd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two threats to biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Threats", statement: "Habitat loss, pollution, overexploitation, invasives, climate change." }],
            steps: [
              { reasoning: "Any two valid threats.", marks: 1, markCode: "A" },
              { reasoning: "Two correct threats named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Habitat loss, pollution, overexploitation, etc.",
          },
        },
        {
          id: "cial-b-u8-bd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between in situ and ex situ conservation with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conservation", statement: "In situ=on-site; ex situ=off-site." }],
            steps: [
              { reasoning: "In situ: protect in natural habitat (national parks, reserves).", marks: 1, markCode: "M" },
              { reasoning: "Ex situ: outside natural habitat (zoos, seed banks, captive breeding).", marks: 1, markCode: "M" },
              { reasoning: "In situ preserves whole ecosystem; ex situ protects species directly.", marks: 1, markCode: "M" },
              { reasoning: "Both correctly distinguished with examples.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "In situ=habitat; ex situ=off-site",
          },
        },
        {
          id: "cial-b-u8-bd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Biodiversity and conservation.",
          parts: [
            { label: "a", prompt: "Define species richness and species evenness.", marks: 2 },
            { label: "b", prompt: "Name three threats to biodiversity.", marks: 3 },
            { label: "c", prompt: "Distinguish in situ and ex situ conservation.", marks: 2 },
            { label: "d", prompt: "Why is habitat destruction the biggest threat?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Biodiversity", statement: "Richness+evenness; threats; conservation strategies." }],
            steps: [
              { part: "a", reasoning: "Richness=number of species; evenness=relative abundance.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Any three: habitat loss, pollution, overexploitation, invasives, climate change.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Three valid threats.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bonus correct threat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In situ=protect in place; ex situ=off-site.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Examples given.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Destroys habitats → species lose homes → extinction cascade.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Affects whole ecosystems and food webs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) richness/evenness (b) 3 threats (c) in/ex situ (d) habitat loss cascade",
          },
        },
        mcqQ({
          id: "cial-b-u8-bd-q5", d: "foundation",
          s: "What does genetic diversity measure?",
          c: ["Variation in alleles within a species", "Number of species in a habitat", "Total ecosystem area", "Number of trophic levels"], a: 0,
          p: ["Genetic diversity", "Genetic diversity is variation within a gene pool."],
          r: "Genetic diversity refers to allele variation within species.",
          f: "**(a)** Variation in alleles within a species", e: "Confusing it with species diversity.",
        }),
        mcqQ({
          id: "cial-b-u8-bd-q6", d: "core",
          s: "What makes a biodiversity hotspot?",
          c: ["High species diversity and high threat of loss", "Low rainfall only", "Few species but large area", "No human activity"], a: 0,
          p: ["Biodiversity hotspot", "Hotspots combine rich diversity with high threat."],
          r: "Hotspots are regions with exceptional diversity under threat.",
          f: "**(a)** High species diversity and high threat of loss", e: "Using only one criterion.",
        }),
        mcqQ({
          id: "cial-b-u8-bd-q7", d: "challenge",
          s: "Why can an invasive species threaten biodiversity?",
          c: ["It may outcompete native species or lack natural predators", "It always increases soil nutrients", "It cannot reproduce", "It only eats dead matter"], a: 0,
          p: ["Invasive species", "Introduced species can disrupt communities and food webs."],
          r: "Invasive species may outcompete natives or exploit resources without predators.",
          f: "**(a)** It may outcompete native species or lack natural predators", e: "Assuming introduced species are always harmless.",
        }),
        mcqQ({
          id: "cial-b-u8-bd-q8", d: "core",
          s: "Which is an example of ex situ conservation?",
          c: ["A seed bank storing crop seeds", "A national park", "A marine reserve", "Sustainable forestry"], a: 0,
          p: ["Ex situ conservation", "Ex situ protects species away from natural habitat."],
          r: "Seed banks conserve genetic material outside natural habitats.",
          f: "**(a)** A seed bank storing crop seeds", e: "Choosing an in situ protected area.",
        }),
        mcqQ({
          id: "cial-b-u8-bd-q9", d: "foundation",
          s: "What does species evenness describe?",
          c: ["The relative abundance of species", "The total number of species", "The size of habitat", "The age of the community"], a: 0,
          p: ["Species evenness", "Evenness describes how equally abundant species are."],
          r: "Evenness measures how evenly individuals are distributed among species.",
          f: "**(a)** The relative abundance of species", e: "Confusing evenness with richness.",
        }),
        mcqQ({
          id: "cial-b-u8-bd-q10", d: "challenge",
          s: "What is the principle of sustainable development in conservation?",
          c: ["Meeting present needs without compromising future generations", "Stopping all resource use", "Protecting only rare species", "Maximising short-term profit"], a: 0,
          p: ["Sustainable development", "It balances present use with future resource protection."],
          r: "Sustainable development uses resources responsibly for current and future needs.",
          f: "**(a)** Meeting present needs without compromising future generations", e: "Choosing an extreme no-use position.",
        }),
        numQ({
          id: "cial-b-u8-bd-q11", d: "foundation",
          s: "Site A has $8$ species and Site B has $14$ species. By how many species is Site B richer?",
          parts: [["a", 6, "species"]],
          steps: [
            ["Difference = Site B richness minus Site A richness.", 1, "M"],
            ["$14 - 8 = 6$ species.", 1, "A"],
          ],
          p: ["Species-richness difference", "Subtract the smaller richness from the larger."],
          f: "$6$ more species", e: "Adding the two richness values.",
        }),
        numQ({
          id: "cial-b-u8-bd-q12", d: "core",
          s: "A community has two species with $10$ individuals each. Using Simpson's index $\\sum n(n-1) / N(N-1)$, calculate the index.",
          parts: [["a", 0.474, "index"]],
          steps: [
            ["Numerator = $10(9) + 10(9) = 180$.", 1, "M"],
            ["Denominator = $20(19) = 380$, so index = $180 / 380 = 0.474$.", 1, "A"],
          ],
          p: ["Simpson's index", "Sum n(n-1) divided by N(N-1)."],
          f: "$0.474$", e: "Using $N^2$ instead of $N(N-1)$.",
        }),
        numQ({
          id: "cial-b-u8-bd-q13", d: "core",
          s: "A community of $200$ individuals contains species proportions $0.5$, $0.3$ and $0.2$. How many individuals belong to the most abundant species?",
          parts: [["a", 100, "individuals"]],
          steps: [
            ["Most abundant proportion = $0.5$.", 1, "M"],
            ["$0.5 \\times 200 = 100$ individuals.", 1, "A"],
          ],
          p: ["Dominant species count", "Largest proportion times total individuals."],
          f: "$100$ individuals", e: "Using the smallest proportion.",
        }),
        numQ({
          id: "cial-b-u8-bd-q14", d: "challenge",
          s: "A reserve protects $250$ of $1000$ plant species recorded in a region. What percentage of the region's plant species are protected?",
          parts: [["a", 25, "%"]],
          steps: [
            ["Protected percentage = protected species divided by total species times $100$.", 1, "M"],
            ["$(250 / 1000) \\times 100 = 25\\%$.", 1, "A"],
          ],
          p: ["Protected percentage", "Protected count divided by total count."],
          f: "$25\\%$", e: "Using $750$ unprotected species.",
        }),
        numQ({
          id: "cial-b-u8-bd-q15", d: "challenge",
          s: "Threat scores for a habitat are habitat loss $5$, pollution $3$, overexploitation $4$ and climate change $2$. What is the total threat score?",
          parts: [["a", 14, "points"]],
          steps: [
            ["Total = sum of all threat scores.", 1, "M"],
            ["$5 + 3 + 4 + 2 = 14$ points.", 1, "A"],
          ],
          p: ["Threat score", "Add all listed threat values."],
          f: "$14$ points", e: "Missing one threat category.",
        }),
        openQ({
          id: "cial-b-u8-bd-q16", d: "challenge",
          s: "Compare in situ and ex situ conservation, giving one advantage and one limitation of each.",
          steps: [
            ["In situ conservation protects species within their natural habitat.", 1, "M"],
            ["It preserves whole ecosystems but may be vulnerable to habitat threats.", 1, "M"],
            ["Ex situ conservation protects species outside natural habitats, such as zoos or seed banks.", 1, "M"],
            ["It can safeguard rare species directly but may not preserve ecosystems or require costly management.", 1, "A"],
          ],
          p: ["Conservation comparison", "Location, ecosystem preservation and management trade-offs."],
          f: "In situ protects ecosystems in place; ex situ protects species off-site but less ecosystem context.",
          e: "Giving examples without comparison or limitations.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u8-biodiversity-notes",
      title: "Biodiversity and classification — revision notes",
      summary: "Taxonomy, binomial nomenclature, biodiversity measurement and conservation.",
      sections: [
        {
          heading: "Classification",
          body: "Ranks: Kingdom→Phylum→Class→Order→Family→Genus→Species. Binomial name = Genus + species italicised (*Homo sapiens*). Dichotomous keys use paired statements. Modern classification uses evolutionary relationships (cladistics).",
        },
        {
          heading: "Biodiversity",
          body: "Species richness = number of species; evenness = abundance distribution. Threats: habitat destruction, pollution, overexploitation, invasive species, climate change. Conservation: in situ (protected areas) vs ex situ (zoos, seed banks).",
        },
        {
          heading: "Exam checklist",
          body: "For classification questions use the correct rank order. For biodiversity distinguish richness from evenness — they're different measures.",
        },
      ],
    },
  ],
};
