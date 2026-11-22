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

export const lesson93: Lesson = {
  id: "cial-b-u9-lesson-9-3",
  code: "9-3",
  title: "GM Organisms and Bioethics",
  goal: "I CAN evaluate GM organisms, gene therapy and ethical issues in biotechnology.",
  standards: ["9700: Biotechnology — applications and ethics"],
  vocabulary: [
    {
      term: "Transgenic organism",
      definition: "Organism containing foreign DNA.",
    },
    {
      term: "Gene therapy",
      definition: "Treating disease by inserting functional genes.",
    },
    {
      term: "Somatic gene therapy",
      definition: "Gene therapy on body cells — effects not inherited.",
    },
    {
      term: "Germ-line gene therapy",
      definition: "Gene therapy on gametes/embryo — inherited by offspring.",
    },
    {
      term: "Biosafety",
      definition: "Measures preventing harm from GM organisms.",
    },
    {
      term: "Bioethics",
      definition: "Ethical issues raised by biological technology.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u9-gm",
      title: "GM organisms",
      skill: "Describe GM organism production and evaluate risks and benefits.",
      lesson: {
        sections: [
          {
            heading: "Producing transgenic organisms",
            body: "Plants: Agrobacterium tumefaciens transfers T-DNA, or gene gun/biolistics. Animals: microinjection of DNA into fertilised eggs. Microorganisms: plasmid transformation. Desired trait expressed in offspring.",
          },
          {
            heading: "GM applications",
            body: "Crops: Bt cotton (insect toxin), herbicide-resistant soy, golden rice (vitamin A). Animals: pharming (milk with drugs), disease-resistant livestock. Microbes: insulin, enzymes, biofuels.",
          },
          {
            heading: "Risks and evaluation",
            body: "Concerns: gene flow to wild relatives, effects on non-target species, biodiversity loss, corporate control of seeds, allergenicity. Benefits: higher yields feeding growing populations, reduced pesticide use. Regulation and risk assessment needed.",
          },
        ],
        keyFormulas: [
          {
            name: "GM organisms",
            statement:
              "Agrobacterium/microinjection/plasmids; benefits vs gene-flow/allergy risks.",
          },
        ],
        workedExample: {
          problem: "How is Bt cotton made?",
          solution:
            "Bacterial gene for insecticidal toxin inserted into cotton plant — pests die when feeding, reducing pesticide need.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-gm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a transgenic organism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organism containing foreign DNA" },
              { id: "b", text: "Organism grown in tissue culture" },
              { id: "c", text: "Cloned animal" },
              { id: "d", text: "Hybrid offspring" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transgenic",
                statement: "Contains foreign DNA.",
              },
            ],
            steps: [
              {
                reasoning: "Transgenic = foreign DNA.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Organism containing foreign DNA",
            commonErrors: ["Confusing with hybrid."],
          },
        },
        {
          id: "cial-b-u9-gm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is foreign DNA introduced into plants?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plant transformation",
                statement: "Agrobacterium or gene gun.",
              },
            ],
            steps: [
              { reasoning: "Agrobacterium T-DNA.", marks: 1, markCode: "M" },
              { reasoning: "Or biolistics/gene gun.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Agrobacterium tumefaciens or gene gun/biolistics.",
            commonErrors: ["Saying microinjection."],
          },
        },
        {
          id: "cial-b-u9-gm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the benefits and risks of GM crops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GM evaluation",
                statement: "Yield vs gene-flow/allergy risks.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: yield/pest resistance.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Risk: gene flow.", marks: 1, markCode: "M" },
              {
                reasoning: "Risk: biodiversity/allergy.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Real benefits but ecological and control risks require regulation.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cial-b-u9-gm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "GM organisms.",
          parts: [
            { label: "a", prompt: "Define transgenic organism.", marks: 1 },
            { label: "b", prompt: "Plant transformation methods?", marks: 2 },
            { label: "c", prompt: "Three GM applications?", marks: 3 },
            { label: "d", prompt: "Main risks?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GM",
                statement: "Definition+methods+apps+risks.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Foreign DNA.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Agrobacterium.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Gene gun.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Any three applications.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gene flow.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Biodiversity/allergy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Corporate control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) definition (b) methods (c) apps (d) risks",
          },
        },
        mcqQ({
          id: "cial-b-u9-gm-q5", d: "foundation",
          s: "What makes an organism transgenic?",
          c: ["It contains DNA from another species", "It is cloned by SCNT", "It is sterile", "It grows only in soil"], a: 0,
          p: ["Transgenic organism", "Transgenic organisms carry foreign DNA."],
          r: "A transgenic organism contains introduced foreign DNA.",
          f: "**(a)** It contains DNA from another species", e: "Confusing transgenic with cloned or hybrid.",
        }),
        mcqQ({
          id: "cial-b-u9-gm-q6", d: "core",
          s: "Which bacterium is commonly used to transfer genes into plants?",
          c: ["Agrobacterium tumefaciens", "Escherichia coli only", "Rhizobium", "Lactobacillus"], a: 0,
          p: ["Plant transformation", "Agrobacterium transfers T-DNA into plant cells."],
          r: "Agrobacterium tumefaciens naturally transfers DNA to plants.",
          f: "**(a)** Agrobacterium tumefaciens", e: "Choosing a non-vector bacterium.",
        }),
        mcqQ({
          id: "cial-b-u9-gm-q7", d: "challenge",
          s: "What does the 'gene gun' or biolistics method do?",
          c: ["Shoots DNA-coated particles directly into cells", "Uses a virus to infect humans", "Crosses two plant species by hand", "Selects seeds by weight"], a: 0,
          p: ["Biolistics", "DNA-coated microparticles are fired into plant cells."],
          r: "Biolistics delivers DNA by shooting coated particles into cells.",
          f: "**(a)** Shoots DNA-coated particles directly into cells", e: "Describing Agrobacterium or animal microinjection.",
        }),
        mcqQ({
          id: "cial-b-u9-gm-q8", d: "core",
          s: "What is the purpose of Bt cotton?",
          c: ["Produce an insecticidal toxin to reduce pest damage", "Increase human vitamin A", "Store more nitrogen", "Prevent all diseases"], a: 0,
          p: ["Bt cotton", "Bt cotton expresses a bacterial toxin harmful to insect pests."],
          r: "Bt cotton produces an insect toxin that reduces pesticide need.",
          f: "**(a)** Produce an insecticidal toxin to reduce pest damage", e: "Assigning a golden-rice function to cotton.",
        }),
        mcqQ({
          id: "cial-b-u9-gm-q9", d: "foundation",
          s: "What is the main nutritional aim of golden rice?",
          c: ["Increase vitamin A content", "Increase protein only", "Remove all allergens", "Make seeds sterile"], a: 0,
          p: ["Golden rice", "Golden rice is engineered to produce beta-carotene/vitamin A."],
          r: "Golden rice is designed to provide vitamin A.",
          f: "**(a)** Increase vitamin A content", e: "Choosing an unrelated crop trait.",
        }),
        mcqQ({
          id: "cial-b-u9-gm-q10", d: "challenge",
          s: "What is 'gene flow' in the context of GM crops?",
          c: ["Transfer of transgenes to wild relatives or other crops", "Movement of water downhill", "Transport of pollen by bees only", "Loss of soil fertility"], a: 0,
          p: ["Gene flow", "Transgenes may spread through pollen to relatives."],
          r: "Gene flow can move GM traits into wild or non-target populations.",
          f: "**(a)** Transfer of transgenes to wild relatives or other crops", e: "Confusing gene flow with nutrient runoff.",
        }),
        numQ({
          id: "cial-b-u9-gm-q11", d: "core",
          s: "A transformation experiment uses $1000$ plant explants and successfully transforms $35$. What is the transformation efficiency?",
          parts: [["a", 3.5, "%"]],
          steps: [
            ["Efficiency = transformed explants divided by total explants times $100$.", 1, "M"],
            ["$(35 / 1000) \\times 100 = 3.5\\%$.", 1, "A"],
          ],
          p: ["Transformation efficiency", "Transformed count divided by total count."],
          f: "$3.5\\%$", e: "Reporting $0.035$ as a percent or $35\\%$.",
        }),
        numQ({
          id: "cial-b-u9-gm-q12", d: "core",
          s: "A conventional field requires $2$ pesticide sprays per season. A Bt crop reduces pesticide use by $75\\%$. How many sprays are still needed?",
          parts: [["a", 0.5, "sprays"]],
          steps: [
            ["Remaining sprays = $25\\%$ of $2$ after a $75\\%$ reduction.", 1, "M"],
            ["$0.25 \\times 2 = 0.5$ sprays.", 1, "A"],
          ],
          p: ["Pesticide reduction", "Apply percentage reduction to baseline use."],
          f: "$0.5$ sprays per season", e: "Calculating the $75\\%$ reduction instead of remainder.",
        }),
        numQ({
          id: "cial-b-u9-gm-q13", d: "challenge",
          s: "GM pollen can disperse up to $500\\ \\mathrm{m}$. A buffer zone should be at least twice the maximum dispersal distance. What minimum buffer width is required?",
          parts: [["a", 1000, "m"]],
          steps: [
            ["Buffer width = $2 \\times 500\\ \\mathrm{m}$.", 1, "M"],
            ["Minimum buffer = $1000\\ \\mathrm{m}$.", 1, "A"],
          ],
          p: ["Isolation distance", "Double the maximum pollen dispersal distance."],
          f: "$1000\\ \\mathrm{m}$", e: "Using $500\\ \\mathrm{m}$ as the buffer.",
        }),
        numQ({
          id: "cial-b-u9-gm-q14", d: "core",
          s: "A conventional crop yields $3.0\\ \\mathrm{t\\ ha^{-1}}$ and a GM variety yields $4.2\\ \\mathrm{t\\ ha^{-1}}$. By what percentage does yield increase?",
          parts: [["a", 40, "%"]],
          steps: [
            ["Increase = $4.2 - 3.0 = 1.2\\ \\mathrm{t\\ ha^{-1}}$.", 1, "M"],
            ["Percentage = $(1.2 / 3.0) \\times 100 = 40\\%$.", 1, "A"],
          ],
          p: ["Yield increase", "Increase divided by original yield."],
          f: "$40\\%$ yield increase", e: "Dividing by $4.2$ instead of $3.0$.",
        }),
        numQ({
          id: "cial-b-u9-gm-q15", d: "challenge",
          s: "A seed lot contains $200$ seeds and $180$ are viable. What percentage is viable?",
          parts: [["a", 90, "%"]],
          steps: [
            ["Viable percentage = viable seeds divided by total seeds times $100$.", 1, "M"],
            ["$(180 / 200) \\times 100 = 90\\%$.", 1, "A"],
          ],
          p: ["Seed viability", "Viable count divided by total count."],
          f: "$90\\%$ viable", e: "Reporting $10\\%$ non-viable seeds.",
        }),
        openQ({
          id: "cial-b-u9-gm-q16", d: "challenge",
          s: "Evaluate the benefits and ecological risks of growing GM crops.",
          steps: [
            ["Benefits include higher yields, pest resistance and reduced pesticide use.", 1, "M"],
            ["GM crops may help food security and vitamin enhancement.", 1, "M"],
            ["Risks include gene flow to wild relatives, effects on non-target species and biodiversity loss.", 1, "M"],
            ["A balanced judgement supports regulation, monitoring and risk assessment.", 1, "R"],
          ],
          p: ["GM evaluation", "Benefits versus gene-flow, biodiversity and control risks."],
          f: "GM crops offer yield and pesticide benefits but require regulation for gene flow and ecological risks.",
          e: "Giving only benefits or only risks.",
        }),
      ],
    },
    {
      id: "cial-b-u9-ethics",
      title: "Gene Therapy and Bioethics",
      skill:
        "Describe gene therapy types and evaluate ethical issues in biotechnology.",
      lesson: {
        sections: [
          {
            heading: "Gene therapy",
            body: "Somatic: insert functional gene into body cells — treats disease in patient only, not inherited. Germ-line: modify gametes/embryo — changes inherited by offspring (currently banned in most countries). Vectors: viruses (retrovirus, adenovirus) deliver genes.",
          },
          {
            heading: "Ethical issues",
            body: "Germ-line therapy: designer babies, unknown long-term effects, eugenics concerns. Cloning: identity, dignity, animal welfare. Stem cells: embryo destruction vs medical benefits. GM: 'playing God', environmental release. Patenting genes: corporate ownership of life.",
          },
          {
            heading: "Regulation",
            body: "Most countries regulate biotechnology — risk assessments, containment, bans on germ-line modification and human reproductive cloning. Ethical guidelines balance benefits against risks.",
          },
        ],
        keyFormulas: [
          {
            name: "Bioethics",
            statement:
              "Somatic=safe/not inherited; Germ-line=inherited/controversial; regulation balances.",
          },
        ],
        workedExample: {
          problem: "Why is germ-line gene therapy controversial?",
          solution:
            "Changes are heritable — affects future generations, raises designer baby and eugenics concerns.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between somatic and germ-line gene therapy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Somatic not inherited; germ-line inherited" },
              { id: "b", text: "No difference" },
              { id: "c", text: "Somatic is banned; germ-line allowed" },
              { id: "d", text: "Somatic uses viruses; germ-line doesn't" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gene therapy types",
                statement: "Inherited vs not.",
              },
            ],
            steps: [
              { reasoning: "Somatic vs germ-line.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Somatic not inherited; germ-line inherited",
            commonErrors: ["Reversed understanding."],
          },
        },
        {
          id: "cial-b-u9-et-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ethical concerns about cloning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cloning ethics",
                statement: "Identity/dignity/welfare.",
              },
            ],
            steps: [
              { reasoning: "Any two concerns.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identity/dignity issues, animal welfare, low success rates.",
            commonErrors: ["Only one concern."],
          },
        },
        {
          id: "cial-b-u9-et-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the ethics of germ-line gene therapy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Germ-line ethics",
                statement: "Benefits vs heritable risks.",
              },
            ],
            steps: [
              {
                reasoning: "Could eliminate disease heritably.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Designer baby/eugenics concerns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unknown long-term effects.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Could prevent disease but raises serious ethical concerns — currently banned.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cial-b-u9-et-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Bioethics.",
          parts: [
            { label: "a", prompt: "Somatic vs germ-line?", marks: 2 },
            { label: "b", prompt: "Vectors for gene therapy?", marks: 2 },
            { label: "c", prompt: "Three ethical issues?", marks: 3 },
            { label: "d", prompt: "How is biotechnology regulated?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bioethics",
                statement: "Types+vectors+issues+regulation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Inherited vs not.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Viruses as vectors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Retro/adenovirus.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Any three issues.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explained.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Risk assessments/bans.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Balance benefits/risks.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) types (b) vectors (c) issues (d) regulation",
          },
        },
        mcqQ({
          id: "cial-b-u9-et-q5", d: "foundation",
          s: "Which feature defines somatic gene therapy?",
          c: ["It changes body cells without altering gametes", "It modifies every descendant", "It always uses germ cells", "It is inherited by offspring"], a: 0,
          p: ["Somatic gene therapy", "Somatic changes affect only the treated individual."],
          r: "Somatic gene therapy targets body cells and is not inherited.",
          f: "**(a)** It changes body cells without altering gametes", e: "Confusing it with germ-line therapy.",
        }),
        mcqQ({
          id: "cial-b-u9-et-q6", d: "core",
          s: "Why is germ-line gene therapy controversial?",
          c: ["Changes may be inherited by future generations", "It cannot treat disease", "It uses only plant cells", "It requires no consent"], a: 0,
          p: ["Germ-line ethics", "Germ-line changes affect descendants and raise eugenics concerns."],
          r: "Because germ-line changes are heritable, they affect future generations.",
          f: "**(a)** Changes may be inherited by future generations", e: "Treating it like a routine somatic treatment.",
        }),
        mcqQ({
          id: "cial-b-u9-et-q7", d: "challenge",
          s: "What role do viral vectors play in gene therapy?",
          c: ["They deliver therapeutic genes into target cells", "They destroy all immune cells", "They produce hormones", "They clone whole organisms"], a: 0,
          p: ["Viral vectors", "Modified viruses transfer genes into cells."],
          r: "Viral vectors are used to deliver functional genes to target cells.",
          f: "**(a)** They deliver therapeutic genes into target cells", e: "Attributing vector function to cloning or immunity only.",
        }),
        mcqQ({
          id: "cial-b-u9-et-q8", d: "core",
          s: "Which concern is associated with 'designer babies'?",
          c: ["Selection of embryo traits for non-medical enhancement", "Loss of all genetic disease", "Increased biodiversity", "Removal of all pathogens"], a: 0,
          p: ["Designer babies", "Non-therapeutic trait selection raises ethical concerns."],
          r: "Designer babies imply selecting embryos for desired traits beyond disease prevention.",
          f: "**(a)** Selection of embryo traits for non-medical enhancement", e: "Confusing therapeutic screening with enhancement.",
        }),
        mcqQ({
          id: "cial-b-u9-et-q9", d: "foundation",
          s: "What is bioethics?",
          c: ["The study of ethical issues raised by biological technology", "A type of microscope", "A farming method", "A measure of biodiversity"], a: 0,
          p: ["Bioethics", "Bioethics examines moral issues in biology and medicine."],
          r: "Bioethics concerns moral questions raised by biological technologies.",
          f: "**(a)** The study of ethical issues raised by biological technology", e: "Choosing an unrelated scientific term.",
        }),
        mcqQ({
          id: "cial-b-u9-et-q10", d: "challenge",
          s: "What is the main purpose of regulation in biotechnology?",
          c: ["To balance benefits against risks to people and ecosystems", "To maximise corporate profit", "To ban all medical research", "To remove ethical review"], a: 0,
          p: ["Biotechnology regulation", "Regulation assesses risks and sets limits."],
          r: "Regulation aims to permit beneficial uses while controlling risks.",
          f: "**(a)** To balance benefits against risks to people and ecosystems", e: "Assuming regulation exists only for profit.",
        }),
        numQ({
          id: "cial-b-u9-et-q11", d: "core",
          s: "A parent carries one modified allele at a locus and one unmodified allele. What is the probability that a child inherits the modified allele?",
          parts: [["a", 0.5, "probability"]],
          steps: [
            ["A heterozygous parent transmits the modified allele half the time.", 1, "M"],
            ["Probability = $0.5$.", 1, "A"],
          ],
          p: ["Allele inheritance", "One of two alleles is passed to each child."],
          f: "$0.5$ or $50\\%$", e: "Assuming all children must inherit it.",
        }),
        numQ({
          id: "cial-b-u9-et-q12", d: "core",
          s: "In a survey of $300$ respondents, $180$ support somatic gene therapy. What percentage support it?",
          parts: [["a", 60, "%"]],
          steps: [
            ["Support percentage = supporters divided by total respondents times $100$.", 1, "M"],
            ["$(180 / 300) \\times 100 = 60\\%$.", 1, "A"],
          ],
          p: ["Survey percentage", "Count in category divided by total."],
          f: "$60\\%$", e: "Using $120$ opponents as the numerator.",
        }),
        numQ({
          id: "cial-b-u9-et-q13", d: "core",
          s: "Risk-assessment scores for a gene-therapy protocol are $2$, $3$, $4$ and $5$. What is the total risk score?",
          parts: [["a", 14, "points"]],
          steps: [
            ["Total risk = sum of all category scores.", 1, "M"],
            ["$2 + 3 + 4 + 5 = 14$ points.", 1, "A"],
          ],
          p: ["Risk score", "Add all assessed risk values."],
          f: "$14$ points", e: "Averaging instead of summing.",
        }),
        numQ({
          id: "cial-b-u9-et-q14", d: "challenge",
          s: "A regulatory review identifies germ-line modification of human embryos and human reproductive cloning as prohibited practices. How many prohibited practices are named?",
          parts: [["a", 2, "practices"]],
          steps: [
            ["Count the prohibited practices listed.", 1, "M"],
            ["There are $2$ practices.", 1, "A"],
          ],
          p: ["Prohibited practices", "Count explicitly banned applications."],
          f: "$2$ prohibited practices", e: "Including somatic therapy as prohibited.",
        }),
        numQ({
          id: "cial-b-u9-et-q15", d: "challenge",
          s: "A heterozygous germ-line modification has a $0.5$ probability of transmission to each child. What is the probability that all $4$ children inherit it?",
          parts: [["a", 0.0625, "probability"]],
          steps: [
            ["Transmission events are independent, so multiply probabilities.", 1, "M"],
            ["$0.5^4 = 0.0625$.", 1, "A"],
          ],
          p: ["Independent inheritance", "Multiply probabilities for independent events."],
          f: "$0.0625$", e: "Adding probabilities instead of multiplying.",
        }),
        openQ({
          id: "cial-b-u9-et-q16", d: "challenge",
          s: "Evaluate the ethics of germ-line gene therapy, considering medical benefits, heritability and regulation.",
          steps: [
            ["It could prevent serious inherited diseases in future generations.", 1, "M"],
            ["Because changes are heritable, it affects people who cannot consent.", 1, "M"],
            ["It raises designer-baby and eugenics concerns plus unknown long-term effects.", 1, "M"],
            ["Most regulation therefore bans or heavily restricts germ-line modification.", 1, "R"],
          ],
          p: ["Germ-line evaluation", "Benefits, consent, heritability and bans."],
          f: "Potential disease prevention is outweighed by heritable ethical risks; most countries ban it.",
          e: "One-sided argument without regulation or consent issues.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u9-gm-ethics",
      title: "GM and bioethics — revision notes",
      summary:
        "Transgenic organisms, gene therapy types, ethical issues, regulation.",
      sections: [
        {
          heading: "GM/gene therapy",
          body: "Agrobacterium/microinjection; somatic=safe, germ-line=inherited; viral vectors.",
        },
        {
          heading: "Ethics",
          body: "Designer babies, cloning concerns, embryo destruction, gene patents; regulation bans germ-line/human cloning.",
        },
      ],
    },
  ],
};
