import type { Lesson } from "../../../types.ts";

export const lesson1112: Lesson = {
  id: "olchem-u11-lesson-11-2",
  code: "11-2",
  title: "Flame Tests and Qualitative Analysis",
  goal: "I CAN identify metal ions by flame colour and describe systematic qualitative analysis.",
  standards: ["5070 11.2"],
  vocabulary: [
    { term: "Flame test", definition: "Identifying metal ions by characteristic flame colours." },
    { term: "Nichrome wire", definition: "Inert wire used to hold samples in flame tests." },
    { term: "Qualitative analysis", definition: "Systematic scheme identifying ions in unknown mixture." },
    { term: "Confirmatory test", definition: "Second test confirming ion identity after initial grouping." },
    { term: "Group reagent", definition: "Reagent separating ions into groups (e.g. NaOH, HCl)." },
    { term: "Precipitate", definition: "Insoluble solid formed when ions react." },
    { term: "Sodium ions", definition: "Na⁺ gives persistent golden-yellow flame." },
    { term: "Potassium ions", definition: "K⁺ gives lilac flame (masked by Na⁺)." },
  ],
  concepts: [
    {
      id: "olchem-u11-flame-tests",
      title: "Flame tests",
      skill: "Identify metal cations by flame colour.",
      lesson: {
        sections: [
          {
            heading: "Flame colours",
            body: "| Ion | Flame colour |\n|---|---|\n| Li⁺ | red |\n| Na⁺ | golden yellow |\n| K⁺ | lilac |\n| Ca²⁺ | orange-red (brick) |\n| Cu²⁺ | blue-green |\n| Ba²⁺ | green |",
          },
          {
            heading: "Method",
            body: "Clean nichrome wire in HCl → dip in sample → hold in blue Bunsen flame → observe colour. Sodium masks other colours — view through blue cobalt glass for K⁺.",
          },
          {
            heading: "Limitations",
            body: "Only works for metal cations; mixtures can confuse colours; some colours similar (Ca vs Li).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A compound gives a lilac flame. Which ion is present?",
          solution: "Potassium (K⁺) — lilac is characteristic of K⁺.",
        },
      },
      questions: [
        {
          id: "olchem-u11-flame-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What flame colour does sodium give?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Red" }, { id: "b", text: "Golden yellow" }, { id: "c", text: "Lilac" }, { id: "d", text: "Green" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Na⁺ flame", statement: "Golden yellow." }],
            steps: [{ reasoning: "Recall.", working: "\\text{yellow}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Golden yellow",
            commonErrors: ["Confusing with K⁺ lilac."],
          },
        },
        {
          id: "olchem-u11-flame-tests-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is blue cobalt glass used in potassium flame tests?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cobalt glass", statement: "Filters yellow Na⁺ light." }],
            steps: [
              { reasoning: "Blocks sodium yellow.", marks: 1, markCode: "M" },
              { reasoning: "Reveals lilac K⁺.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blue cobalt glass absorbs the intense yellow light from sodium impurities, allowing the lilac potassium colour to be seen clearly.",
            commonErrors: ["Saying 'makes flame blue' — it filters light."],
          },
        },
        {
          id: "olchem-u11-flame-tests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how to perform a flame test.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Flame test", statement: "Clean wire→sample→flame→observe." }],
            steps: [
              { reasoning: "Clean nichrome wire in HCl.", marks: 1, markCode: "M" },
              { reasoning: "Dip in sample.", marks: 1, markCode: "M" },
              { reasoning: "Hold in Bunsen flame.", marks: 1, markCode: "M" },
              { reasoning: "Record colour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clean nichrome wire in hydrochloric acid → dip in sample → hold in blue Bunsen flame → observe and record flame colour.",
            commonErrors: ["Not cleaning wire first — contamination."],
          },
        },
        {
          id: "olchem-u11-flame-tests-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe flame tests and their limitations.",
          parts: [
            { label: "a", prompt: "List three flame colours.", marks: 3 },
            { label: "b", prompt: "Describe the method.", marks: 3 },
            { label: "c", prompt: "State two limitations.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Flame test", statement: "Metal ions give characteristic colours." }],
            steps: [
              { part: "a", reasoning: "Any three correct colours.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct ion-colour pairs.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Clean wire.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dip+flame+observe.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only metal cations.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mixtures/Na masking.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) any 3 colours (b) clean→dip→flame (c) cations only/mixtures",
            commonErrors: ["In (a) wrong colour-ion pairs."],
          },
        },
      ],
    },
    {
      id: "olchem-u11-qualitative",
      title: "Qualitative analysis scheme",
      skill: "Describe systematic identification of cations and anions.",
      lesson: {
        sections: [
          {
            heading: "Cation analysis",
            body: "Add NaOH(aq):\n- Group I: Al³⁺, Zn²⁺, Pb²⁺ → white ppt, dissolves in excess (Al, Zn)\n- Group II: Cu²⁺ → blue ppt; Fe²⁺ → green; Fe³⁺ → orange\n- Group III: Ca²⁺, Mg²⁺ → white ppt insoluble",
          },
          {
            heading: "Anion analysis",
            body: "- Cl⁻: HNO₃ + AgNO₃ → white ppt AgCl\n- SO₄²⁻: BaCl₂ → white ppt BaSO₄ (insoluble in HCl)\n- CO₃²⁻: acid → effervescence CO₂ (limewater cloudy)",
          },
          {
            heading: "Confirmatory tests",
            body: "Initial group → specific reagent confirms. E.g. white ppt + NaOH could be Al/Zn/Pb — add more NaOH: Al/Zn dissolve, Pb doesn't.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A white precipitate forms with NaOH but dissolves in excess NaOH. Which ions possible?",
          solution: "Al³⁺ or Zn²⁺ — both form white hydroxide precipitates soluble in excess NaOH (amphoteric).",
        },
      },
      questions: [
        {
          id: "olchem-u11-qualitative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What reagent tests for chloride ions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "BaCl₂" }, { id: "b", text: "AgNO₃" }, { id: "c", text: "NaOH" }, { id: "d", text: "Limewater" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cl⁻ test", statement: "AgNO₃ → white AgCl." }],
            steps: [{ reasoning: "Recall.", working: "\\text{AgNO}_3", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** AgNO₃",
            commonErrors: ["BaCl₂ tests SO₄²⁻."],
          },
        },
        {
          id: "olchem-u11-qualitative-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What colour precipitate does Cu²⁺ give with NaOH?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Cu²⁺ test", statement: "Blue precipitate." }],
            steps: [
              { reasoning: "Blue ppt.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blue precipitate of Cu(OH)₂.",
            commonErrors: ["Saying 'white' — that's Al/Zn/Pb."],
          },
        },
        {
          id: "olchem-u11-qualitative-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A solution gives white precipitate with NaOH that dissolves in excess. Identify possible ions and how to distinguish.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Qualitative", statement: "Al/Zn amphoteric; Pb not." }],
            steps: [
              { reasoning: "Al³⁺ or Zn²⁺ possible.", marks: 1, markCode: "M" },
              { reasoning: "Pb²⁺ also white but insoluble in excess.", marks: 1, markCode: "M" },
              { reasoning: "Distinguish by other tests/flame.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Al³⁺ or Zn²⁺ (both dissolve in excess NaOH); Pb²⁺ gives white ppt insoluble in excess — distinguish further with confirmatory tests or flame test.",
            commonErrors: ["Forgetting Pb²⁺ also gives white ppt."],
          },
        },
        {
          id: "olchem-u11-qualitative-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to identify an unknown cation using NaOH.",
          parts: [
            { label: "a", prompt: "Describe initial test.", marks: 3 },
            { label: "b", prompt: "Describe colour observations.", marks: 3 },
            { label: "c", prompt: "Describe confirmatory step.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cation analysis", statement: "NaOH → precipitate colour/group." }],
            steps: [
              { part: "a", reasoning: "Add NaOH(aq) dropwise.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Observe precipitate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add excess NaOH.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Blue=Cu²⁺, green=Fe²⁺, orange=Fe³⁺.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "White=Al/Zn/Pb.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct colours.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "White ppt + excess NaOH.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Dissolves=Al/Zn; insoluble=Pb.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Further tests confirm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) NaOH dropwise→excess (b) colour ID (c) excess NaOH dissolves Al/Zn",
            commonErrors: ["In (b) missing Fe colours."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u11-tests-notes",
      title: "Flame tests and qualitative analysis — revision notes",
      summary: "Flame colours, NaOH cation analysis, anion confirmatory tests.",
      sections: [
        {
          heading: "Key facts",
          body: "Flames: Li red, Na yellow, K lilac, Ca brick-red, Cu blue-green. NaOH: Cu²⁺blue, Fe²⁺green, Fe³⁺orange, Al/Zn/Pb white. Cl⁻+AgNO₃→white AgCl; SO₄²⁻+BaCl₂→white BaSO₄.",
        },
        {
          heading: "Exam technique",
          body: "- Cobalt glass for K⁺ (Na masks).\n- White ppt + excess NaOH: dissolves=Al/Zn, stays=Pb.\n- Always add confirmatory reagent.",
        },
      ],
    },
  ],
};
