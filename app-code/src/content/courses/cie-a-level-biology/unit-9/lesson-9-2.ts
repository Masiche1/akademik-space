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

export const lesson92: Lesson = {
  id: "cial-b-u9-lesson-9-2",
  code: "9-2",
  title: "Cloning and Stem Cells",
  goal: "I CAN describe cloning techniques and stem cell types and uses.",
  standards: ["9700: Biotechnology — cloning and stem cells"],
  vocabulary: [
    {
      term: "Stem cell",
      definition: "Unspecialised cell that can divide and differentiate.",
    },
    {
      term: "Totipotent",
      definition: "Can form any cell type including extraembryonic tissues.",
    },
    {
      term: "Pluripotent",
      definition: "Can form any cell type of the body but not extraembryonic.",
    },
    {
      term: "Multipotent",
      definition: "Can form a limited range of related cell types.",
    },
    {
      term: "Embryonic stem cells",
      definition: "Pluripotent cells from early embryo (blastocyst).",
    },
    {
      term: "iPS cells",
      definition:
        "Induced pluripotent stem cells reprogrammed from body cells.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u9-cloning",
      title: "Cloning techniques",
      skill: "Describe reproductive and therapeutic cloning.",
      lesson: {
        sections: [
          {
            heading: "Reproductive cloning (SCNT)",
            body: "Somatic cell nuclear transfer: remove nucleus from egg cell, insert nucleus from adult donor cell, stimulate division → embryo genetically identical to donor. Dolly the sheep (1996) proved adult nuclei can be reprogrammed. Produces a genetic copy, not identical in environment/experience.",
          },
          {
            heading: "Therapeutic cloning",
            body: "SCNT creates embryo → harvest embryonic stem cells matched to patient → grow replacement tissues/organs. Avoids immune rejection since cells are patient's own. Ethical concerns about embryo destruction.",
          },
          {
            heading: "Plant cloning",
            body: "Tissue culture: explant from parent plant grown on agar with hormones → identical clones. Used for desirable varieties (crop plants, orchids). Much simpler and widely accepted.",
          },
        ],
        keyFormulas: [
          {
            name: "Cloning",
            statement:
              "SCNT=reproductive/therapeutic; Tissue culture=plant cloning.",
          },
        ],
        workedExample: {
          problem:
            "How does therapeutic cloning differ from reproductive cloning?",
          solution:
            "Both use SCNT, but therapeutic harvesting stem cells for tissue repair; reproductive implants embryo to produce offspring.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Dolly the sheep an example of?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gene therapy" },
              { id: "b", text: "PCR amplification" },
              { id: "c", text: "Tissue culture" },
              { id: "d", text: "Reproductive cloning via SCNT" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dolly", statement: "SCNT clone." },
            ],
            steps: [{ reasoning: "Dolly = SCNT.", marks: 1, markCode: "M" }],
            finalAnswer: "**(d)** Reproductive cloning via SCNT",
            commonErrors: ["Confusing with other techniques."],
          },
        },
        {
          id: "cial-b-u9-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish reproductive from therapeutic cloning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cloning types",
                statement: "Offspring vs tissue repair.",
              },
            ],
            steps: [
              {
                reasoning: "Reproductive: produces offspring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therapeutic: harvests stem cells.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reproductive makes offspring; therapeutic makes matched stem cells for repair.",
            commonErrors: ["Using interchangeably."],
          },
        },
        {
          id: "cial-b-u9-cl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline the SCNT procedure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SCNT",
                statement: "Enucleate→insert nucleus→stimulate.",
              },
            ],
            steps: [
              { reasoning: "Remove egg nucleus.", marks: 1, markCode: "M" },
              { reasoning: "Insert donor nucleus.", marks: 1, markCode: "M" },
              {
                reasoning: "Stimulate cell division.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Implant/develop embryo.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Enucleate egg → insert donor nucleus → stimulate → develop.",
            commonErrors: ["Missing enucleation step."],
          },
        },
        {
          id: "cial-b-u9-cl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cloning.",
          parts: [
            { label: "a", prompt: "What is SCNT?", marks: 2 },
            { label: "b", prompt: "Reproductive vs therapeutic?", marks: 3 },
            { label: "c", prompt: "How are plants cloned?", marks: 2 },
            { label: "d", prompt: "Limitations of cloning?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloning",
                statement: "SCNT+types+plants+limits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Nuclear transfer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Adult nucleus → egg.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Offspring vs stem cells.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Immune match benefit.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Tissue culture.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Identical clones.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Low success rate/abnormalities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Ethical concerns.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) SCNT (b) types (c) plants (d) limits",
          },
        },
        mcqQ({
          id: "cial-b-u9-cl-q5", d: "foundation",
          s: "In SCNT, what is removed from the egg cell before the donor nucleus is inserted?",
          c: ["The egg nucleus", "The cell membrane", "All cytoplasm", "The mitochondria only"], a: 0,
          p: ["SCNT", "The recipient egg is enucleated before nuclear transfer."],
          r: "SCNT removes the egg nucleus so the donor nucleus can direct development.",
          f: "**(a)** The egg nucleus", e: "Removing the wrong cell component.",
        }),
        mcqQ({
          id: "cial-b-u9-cl-q6", d: "core",
          s: "What distinguishes therapeutic cloning from reproductive cloning?",
          c: ["Therapeutic cloning harvests stem cells for repair rather than producing offspring", "Therapeutic cloning uses plant cells", "Reproductive cloning never uses SCNT", "Therapeutic cloning always creates a whole animal"], a: 0,
          p: ["Cloning types", "Both may use SCNT but differ in purpose."],
          r: "Therapeutic cloning aims to derive matched stem cells, not to implant an embryo for birth.",
          f: "**(a)** Therapeutic cloning harvests stem cells for repair rather than producing offspring", e: "Treating the two applications as identical.",
        }),
        mcqQ({
          id: "cial-b-u9-cl-q7", d: "challenge",
          s: "What did Dolly the sheep demonstrate about adult cell nuclei?",
          c: ["An adult nucleus can be reprogrammed to direct development", "Adult nuclei cannot divide", "Cloning requires two donor nuclei", "All clones are phenotypically identical"], a: 0,
          p: ["Dolly", "SCNT showed an adult somatic nucleus can produce a viable clone."],
          r: "Dolly proved that an adult donor nucleus could be reprogrammed in an egg cell.",
          f: "**(a)** An adult nucleus can be reprogrammed to direct development", e: "Denying nuclear reprogramming or claiming environment is copied.",
        }),
        mcqQ({
          id: "cial-b-u9-cl-q8", d: "core",
          s: "How are many desirable plants cloned commercially?",
          c: ["Tissue culture of explants on nutrient agar", "SCNT using egg cells", "Fertilising ovules only", "Seed dispersal by wind"], a: 0,
          p: ["Plant cloning", "Tissue culture produces genetically identical plantlets."],
          r: "Plant tissue culture grows explants into clones on agar with hormones.",
          f: "**(a)** Tissue culture of explants on nutrient agar", e: "Using animal SCNT for plants.",
        }),
        mcqQ({
          id: "cial-b-u9-cl-q9", d: "foundation",
          s: "What does 'clone' mean in genetics?",
          c: ["Organism genetically identical to its parent or donor", "Organism with maximum variation", "Hybrid offspring", "Sterile offspring only"], a: 0,
          p: ["Clone", "Clones share the same nuclear genome."],
          r: "A clone is genetically identical at the nuclear DNA level.",
          f: "**(a)** Organism genetically identical to its parent or donor", e: "Confusing clones with hybrids.",
        }),
        mcqQ({
          id: "cial-b-u9-cl-q10", d: "challenge",
          s: "Why can therapeutic cloning reduce immune rejection compared with unrelated transplants?",
          c: ["Stem cells can be genetically matched to the patient", "It uses donor organs from animals only", "It removes all immune cells", "It changes the patient's blood type permanently"], a: 0,
          p: ["Therapeutic cloning advantage", "Patient-matched cells reduce immune mismatch."],
          r: "SCNT-derived cells can share the patient's genome, reducing rejection risk.",
          f: "**(a)** Stem cells can be genetically matched to the patient", e: "Claiming immune rejection is impossible.",
        }),
        numQ({
          id: "cial-b-u9-cl-q11", d: "core",
          s: "An SCNT programme attempts $200$ transfers and produces $4$ viable cloned embryos. What is the success rate?",
          parts: [["a", 2, "%"]],
          steps: [
            ["Success rate = successful transfers divided by total attempts times $100$.", 1, "M"],
            ["$(4 / 200) \\times 100 = 2\\%$.", 1, "A"],
          ],
          p: ["SCNT success rate", "Successful clones divided by attempts."],
          f: "$2\\%$", e: "Reporting $0.02$ as a percentage or $98\\%$ failure.",
        }),
        numQ({
          id: "cial-b-u9-cl-q12", d: "core",
          s: "A sheep donor nucleus contains $38$ chromosomes. How many chromosomes will the clone have if development succeeds?",
          parts: [["a", 38, "chromosomes"]],
          steps: [
            ["The clone receives the donor nucleus unchanged.", 1, "M"],
            ["Chromosome number = $38$.", 1, "A"],
          ],
          p: ["Clone chromosome number", "Donor nuclear genome is copied."],
          f: "$38$ chromosomes", e: "Doubling to $76$ as in fertilisation.",
        }),
        numQ({
          id: "cial-b-u9-cl-q13", d: "foundation",
          s: "Fifty plant explants are cultured and $80\\%$ produce rooted clones. How many clones are produced?",
          parts: [["a", 40, "clones"]],
          steps: [
            ["Successful explants = $80\\%$ of $50$.", 1, "M"],
            ["$0.80 \\times 50 = 40$ clones.", 1, "A"],
          ],
          p: ["Tissue-culture yield", "Percentage of explants that form clones."],
          f: "$40$ clones", e: "Using $20\\%$ instead of $80\\%$.",
        }),
        numQ({
          id: "cial-b-u9-cl-q14", d: "challenge",
          s: "A tissue-culture batch contains $100$ explants and $35$ produce viable plantlets. What percentage are successful?",
          parts: [["a", 35, "%"]],
          steps: [
            ["Success percentage = successful explants divided by total times $100$.", 1, "M"],
            ["$(35 / 100) \\times 100 = 35\\%$.", 1, "A"],
          ],
          p: ["Explant success", "Successes divided by total explants."],
          f: "$35\\%$", e: "Reporting $0.35$ without converting to percent.",
        }),
        numQ({
          id: "cial-b-u9-cl-q15", d: "challenge",
          s: "A reprogramming experiment starts with $1000$ adult cells and $2.5\\%$ become induced pluripotent stem-cell lines. How many iPS lines are produced?",
          parts: [["a", 25, "lines"]],
          steps: [
            ["iPS lines = $2.5\\%$ of $1000$ cells.", 1, "M"],
            ["$0.025 \\times 1000 = 25$ lines.", 1, "A"],
          ],
          p: ["Reprogramming efficiency", "Percentage of starting cells converted."],
          f: "$25$ iPS lines", e: "Treating $2.5\\%$ as $25$ lines per cell.",
        }),
        openQ({
          id: "cial-b-u9-cl-q16", d: "challenge",
          s: "Outline the steps of somatic cell nuclear transfer and state one limitation of cloning.",
          steps: [
            ["Remove the nucleus from an unfertilised egg cell.", 1, "M"],
            ["Insert the nucleus from a donor somatic cell.", 1, "M"],
            ["Stimulate the reconstructed cell to divide and form an embryo.", 1, "M"],
            ["A limitation is low success rate, developmental abnormalities or ethical concerns.", 1, "A"],
          ],
          p: ["SCNT outline", "Enucleation, donor nucleus, stimulation and limitations."],
          f: "Enucleate egg → insert donor nucleus → stimulate division; limitation: low efficiency/abnormalities/ethics.",
          e: "Omitting enucleation or naming no limitation.",
        }),
      ],
    },
    {
      id: "cial-b-u9-stem-cells",
      title: "Stem Cells",
      skill: "Describe stem cell types, potency and therapeutic uses.",
      lesson: {
        sections: [
          {
            heading: "Potency levels",
            body: "Totipotent: forms all cell types incl. placenta (zygote, early blastomeres). Pluripotent: forms any body cell but not placenta (embryonic stem cells). Multipotent: limited range (haematopoietic → blood cells). Unipotent: one cell type.",
          },
          {
            heading: "Sources and uses",
            body: "Embryonic stem cells: from blastocyst inner cell mass — pluripotent, controversial. Adult stem cells: from bone marrow etc. — multipotent, limited. iPS cells: reprogrammed adult cells to pluripotent — avoids embryo use.",
          },
          {
            heading: "Therapeutic applications",
            body: "Treat blood disorders (leukaemia via bone marrow transplant), burns (skin grafts), Parkinson's (dopamine neurons), spinal cord injury, diabetes (insulin cells). Challenges: directing differentiation, tumour risk, immune rejection.",
          },
        ],
        keyFormulas: [
          {
            name: "Stem cells",
            statement:
              "Totipotent>pluripotent>multipotent>unipotent; uses=transplants/regeneration.",
          },
        ],
        workedExample: {
          problem: "Why are iPS cells ethically attractive?",
          solution:
            "They are pluripotent like embryonic stem cells but made from adult cells — no embryo destruction.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stem cells are pluripotent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sperm cells" },
              { id: "b", text: "Embryonic stem cells" },
              { id: "c", text: "Haematopoietic stem cells" },
              { id: "d", text: "Skin stem cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pluripotent",
                statement: "Embryonic stem cells.",
              },
            ],
            steps: [
              { reasoning: "ESCs are pluripotent.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Embryonic stem cells",
            commonErrors: ["Choosing adult stem cells."],
          },
        },
        {
          id: "cial-b-u9-sc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are iPS cells?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "iPS",
                statement: "Reprogrammed adult cells.",
              },
            ],
            steps: [
              {
                reasoning: "Adult cells reprogrammed.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Become pluripotent.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Induced pluripotent stem cells — adult cells reprogrammed to pluripotency.",
            commonErrors: ["Confusing with ESCs."],
          },
        },
        {
          id: "cial-b-u9-sc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare embryonic and adult stem cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stem cell types",
                statement: "Pluripotent vs multipotent.",
              },
            ],
            steps: [
              {
                reasoning: "ESC: pluripotent, embryo source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adult: multipotent, body tissue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different differentiation range.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "ESCs pluripotent from embryo; adult stem cells multipotent from body tissues.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "cial-b-u9-sc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Stem cells.",
          parts: [
            { label: "a", prompt: "Define stem cell.", marks: 1 },
            { label: "b", prompt: "Potency levels?", marks: 3 },
            { label: "c", prompt: "Sources of stem cells?", marks: 2 },
            { label: "d", prompt: "Therapeutic uses?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stem cells",
                statement: "Definition+potency+sources+uses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Unspecialised, divides/differentiates.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Totipotent/pluripotent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Multipotent/unipotent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Range explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Embryo/adult/iPS.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct sources.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Any two uses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct examples.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Challenges noted.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) definition (b) potency (c) sources (d) uses",
          },
        },
        mcqQ({
          id: "cial-b-u9-sc-q5", d: "foundation",
          s: "Which statement best defines a stem cell?",
          c: ["An unspecialised cell that can divide and differentiate", "A fully specialised muscle cell", "A red blood cell", "A gamete"], a: 0,
          p: ["Stem cell", "Stem cells are unspecialised and can differentiate."],
          r: "Stem cells remain unspecialised and can divide into specialised cells.",
          f: "**(a)** An unspecialised cell that can divide and differentiate", e: "Choosing differentiated cells.",
        }),
        mcqQ({
          id: "cial-b-u9-sc-q6", d: "core",
          s: "Which cells are totipotent?",
          c: ["Early zygote and early blastomeres", "Adult skin cells", "Haematopoietic stem cells", "Neuron progenitors only"], a: 0,
          p: ["Totipotency", "Totipotent cells can form all cell types including extraembryonic tissues."],
          r: "Totipotent cells can form every cell type and supporting tissues.",
          f: "**(a)** Early zygote and early blastomeres", e: "Choosing multipotent adult stem cells.",
        }),
        mcqQ({
          id: "cial-b-u9-sc-q7", d: "challenge",
          s: "Where are embryonic stem cells obtained?",
          c: ["Inner cell mass of a blastocyst", "Adult bone marrow only", "Skin surface", "Sperm tail"], a: 0,
          p: ["Embryonic stem cells", "ESCs are derived from the blastocyst inner cell mass."],
          r: "Embryonic stem cells come from the inner cell mass of a blastocyst.",
          f: "**(a)** Inner cell mass of a blastocyst", e: "Naming an adult stem-cell source.",
        }),
        mcqQ({
          id: "cial-b-u9-sc-q8", d: "core",
          s: "Which is an example of a multipotent stem cell?",
          c: ["Haematopoietic stem cell producing blood cells", "Zygote forming a whole embryo", "ESC forming any body cell", "A mature neuron"], a: 0,
          p: ["Multipotency", "Multipotent cells form a limited set of related cell types."],
          r: "Haematopoietic stem cells can produce several blood-cell types.",
          f: "**(a)** Haematopoietic stem cell producing blood cells", e: "Choosing totipotent or pluripotent cells.",
        }),
        mcqQ({
          id: "cial-b-u9-sc-q9", d: "foundation",
          s: "What are iPS cells?",
          c: ["Adult cells reprogrammed to a pluripotent state", "Cells taken directly from an embryo", "Cloned whole animals", "Gametes induced in vitro"], a: 0,
          p: ["iPS cells", "Induced pluripotent stem cells are reprogrammed adult cells."],
          r: "iPS cells are adult cells genetically reprogrammed to pluripotency.",
          f: "**(a)** Adult cells reprogrammed to a pluripotent state", e: "Confusing them with embryonic stem cells.",
        }),
        mcqQ({
          id: "cial-b-u9-sc-q10", d: "challenge",
          s: "What is a major technical challenge in stem-cell therapy?",
          c: ["Directing differentiation and avoiding tumour formation", "Finding a nucleus to transfer", "Producing pollen", "Measuring body temperature"], a: 0,
          p: ["Stem-cell therapy", "Controlling differentiation and safety is difficult."],
          r: "Therapies must control differentiation while avoiding tumours and immune rejection.",
          f: "**(a)** Directing differentiation and avoiding tumour formation", e: "Naming an unrelated biotechnology step.",
        }),
        numQ({
          id: "cial-b-u9-sc-q11", d: "foundation",
          s: "A potency hierarchy lists totipotent, pluripotent, multipotent and unipotent cells. How many potency levels are named?",
          parts: [["a", 4, "levels"]],
          steps: [
            ["Count the listed potency categories.", 1, "M"],
            ["There are $4$ levels.", 1, "A"],
          ],
          p: ["Potency levels", "Count categories from totipotent to unipotent."],
          f: "$4$ potency levels", e: "Omitting unipotent cells.",
        }),
        numQ({
          id: "cial-b-u9-sc-q12", d: "core",
          s: "A culture contains $1000$ embryonic stem cells and $60\\%$ are induced to become neurons. How many neurons are produced?",
          parts: [["a", 600, "neurons"]],
          steps: [
            ["Neurons = $60\\%$ of $1000$ cells.", 1, "M"],
            ["$0.60 \\times 1000 = 600$ neurons.", 1, "A"],
          ],
          p: ["Differentiation yield", "Percentage of stem cells differentiated."],
          f: "$600$ neurons", e: "Using $40\\%$ instead of $60\\%$.",
        }),
        numQ({
          id: "cial-b-u9-sc-q13", d: "challenge",
          s: "A transplant requires $2 \\times 10^8$ stem cells per kilogram and the patient has a mass of $70\\ \\mathrm{kg}$. Calculate the total cells required.",
          parts: [["a", 14000000000, "cells"]],
          steps: [
            ["Total cells = cells per kg multiplied by mass.", 1, "M"],
            ["$(2 \\times 10^8) \\times 70 = 1.4 \\times 10^{10}$ cells.", 1, "A"],
          ],
          p: ["Cell dose", "Dose per kilogram times body mass."],
          f: "$1.4 \\times 10^{10}$ cells", e: "Multiplying by $7$ instead of $70$.",
        }),
        numQ({
          id: "cial-b-u9-sc-q14", d: "challenge",
          s: "Starting with $500$ skin cells, $4\\%$ are successfully reprogrammed into iPS cells. How many iPS cells are obtained?",
          parts: [["a", 20, "cells"]],
          steps: [
            ["iPS cells = $4\\%$ of $500$.", 1, "M"],
            ["$0.04 \\times 500 = 20$ cells.", 1, "A"],
          ],
          p: ["iPS yield", "Reprogramming percentage of starting cells."],
          f: "$20$ iPS cells", e: "Using $40\\%$ instead of $4\\%$.",
        }),
        numQ({
          id: "cial-b-u9-sc-q15", d: "challenge",
          s: "Stem cells divide every $12$ hours. How many divisions occur in $72$ hours?",
          parts: [["a", 6, "divisions"]],
          steps: [
            ["Divisions = elapsed time divided by division interval.", 1, "M"],
            ["$72 / 12 = 6$ divisions.", 1, "A"],
          ],
          p: ["Division count", "Time divided by cell-cycle interval."],
          f: "$6$ divisions", e: "Reporting $72$ as the number of divisions.",
        }),
        openQ({
          id: "cial-b-u9-sc-q16", d: "challenge",
          s: "Compare embryonic, adult and induced pluripotent stem cells in terms of source, potency and main advantage or concern.",
          steps: [
            ["Embryonic stem cells come from the blastocyst inner cell mass and are pluripotent.", 1, "M"],
            ["Adult stem cells come from body tissues and are usually multipotent.", 1, "M"],
            ["iPS cells are reprogrammed adult cells that become pluripotent without using embryos.", 1, "M"],
            ["ESCs raise embryo-destruction concerns; adult cells are limited; iPS combine pluripotency with patient matching.", 1, "A"],
          ],
          p: ["Stem-cell comparison", "Source, potency and ethical/technical trade-offs."],
          f: "ESC=pluripotent embryo; adult=multipotent tissue; iPS=reprogrammed pluripotent adult cells.",
          e: "Describing only one stem-cell type.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u9-clone-stem",
      title: "Cloning and stem cells — revision notes",
      summary: "SCNT, therapeutic cloning, stem cell potency, iPS cells.",
      sections: [
        {
          heading: "Cloning",
          body: "SCNT: enucleate egg + donor nucleus. Reproductive=offspring; therapeutic=stem cells; plants=tissue culture.",
        },
        {
          heading: "Stem cells",
          body: "Totipotent>pluripotent>multipotent. ESCs vs adult vs iPS. Uses: transplants, regeneration, disease models.",
        },
      ],
    },
  ],
};
