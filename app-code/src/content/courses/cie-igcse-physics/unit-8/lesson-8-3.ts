import type { Lesson } from "../../../types.ts";

export const lessonp83: Lesson = {
  id: "ciep-u8-lesson-8-3",
  code: "8-3",
  title: "Thermal Expansion and Insulation",
  goal: "I CAN explain thermal expansion and describe insulation methods.",
  standards: ["0655 8.3"],
  vocabulary: [
    { term: "Thermal expansion", definition: "Materials expand when heated." },
    { term: "Linear expansion", definition: "Length increase with temperature." },
    { term: "Expansion gap", definition: "Space left for thermal expansion (bridges)." },
    { term: "Bimetallic strip", definition: "Two metals bonded — bends when heated." },
    { term: "Insulation", definition: "Reducing heat transfer to/from object." },
    { term: "Vacuum flask", definition: "Insulated container minimizing all heat transfer." },
    { term: "Conductor", definition: "Material allowing easy heat flow." },
    { term: "Insulator", definition: "Material resisting heat flow." },
  ],
  concepts: [
    {
      id: "ciep-u8-expansion",
      title: "Thermal expansion",
      skill: "Explain expansion and its applications/problems.",
      lesson: {
        sections: [
          {
            heading: "Expansion",
            body: "Heating → particles vibrate more → average spacing increases → expansion.\n\n- Solids: linear expansion\n- Liquids/gases: volume expansion\n- Metals expand most",
          },
          {
            heading: "Applications",
            body: "- Bimetallic strips: thermostats, fire alarms\n- Expansion joints in bridges/buildings\n- Thermometers (mercury/alcohol expand)",
          },
          {
            heading: "Problems",
            body: "Unchecked expansion → buckling, cracks, broken rails.\n\nSolutions: expansion gaps, flexible joints, correct material choice.",
          },
        ],
        keyFormulas: [
          { name: "Expansion", statement: "$\\Delta L = \\alpha L \\Delta T$" },
        ],
        workedExample: {
          problem: "Why do bridges have gaps?",
          solution: "Allow for thermal expansion in summer — prevent buckling.",
        },
      },
      questions: [
        {
          id: "ciep-u8-expansion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to most materials when heated?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Contract" }, { id: "b", text: "Expand" }, { id: "c", text: "No change" }, { id: "d", text: "Melt" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Expansion", statement: "Heat → expand." }],
            steps: [{ reasoning: "Recall.", working: "\\text{expand}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Expand",
            commonErrors: ["Water ice anomaly exception."],
          },
        },
        {
          id: "ciep-u8-expansion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a bimetallic strip used for?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Bimetal", statement: "Thermostats/alarms." }],
            steps: [
              { reasoning: "Bends when heated.", marks: 1, markCode: "M" },
              { reasoning: "Used in thermostats.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two metals with different expansion rates — bends when heated, used in thermostats and fire alarms.",
            commonErrors: ["Not explaining mechanism."],
          },
        },
        {
          id: "ciep-u8-expansion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why expansion gaps are needed in bridges.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Expansion", statement: "Allow expansion without stress." }],
            steps: [
              { reasoning: "Bridge expands in heat.", marks: 1, markCode: "M" },
              { reasoning: "Gap prevents buckling.", marks: 1, markCode: "M" },
              { reasoning: "Safety reason.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bridges expand when heated — expansion gaps allow this without causing buckling or structural damage.",
            commonErrors: ["Not mentioning safety."],
          },
        },
        {
          id: "ciep-u8-expansion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain thermal expansion and applications.",
          parts: [
            { label: "a", prompt: "Why materials expand.", marks: 3 },
            { label: "b", prompt: "Bimetallic strip.", marks: 3 },
            { label: "c", prompt: "Expansion problems and solutions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Expansion", statement: "Particle spacing increases; bimetal bends; gaps needed." }],
            steps: [
              { part: "a", reasoning: "Particles vibrate more.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Average spacing increases.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two metals different rates.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Bends on heating.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Applications.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Buckling/cracks.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gaps/flexible joints.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) particle spacing (b) bimetal bends (c) gaps prevent buckling",
            commonErrors: ["In (b) wrong bend direction."],
          },
        },
      ],
    },
    {
      id: "ciep-u8-insulation",
      title: "Insulation and applications",
      skill: "Describe insulation methods and vacuum flask design.",
      lesson: {
        sections: [
          {
            heading: "Insulation types",
            body: "- **Fibreglass/foam**: traps air → reduces conduction\n- **Reflective surfaces**: shiny surfaces reduce radiation\n- **Vacuum**: eliminates conduction and convection",
          },
          {
            heading: "Vacuum flask",
            body: "Double-walled glass with vacuum between:\n- Vacuum stops conduction/convection\n- Silvered surfaces reflect radiation\n- Cork/plastic stopper reduces conduction\n\nKeeps drinks hot or cold.",
          },
          {
            heading: "Building insulation",
            body: "- Loft/wall insulation: fibreglass\n- Double glazing: air gap reduces conduction\n- Draught excluders: reduce convection",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does vacuum flask have silvered surfaces?",
          solution: "Reflects infrared radiation — prevents heat loss by radiation.",
        },
      },
      questions: [
        {
          id: "ciep-u8-insulation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a vacuum flask use to prevent heat transfer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Conductor" }, { id: "b", text: "Vacuum" }, { id: "c", text: "Air" }, { id: "d", text: "Water" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Flask", statement: "Vacuum prevents conduction/convection." }],
            steps: [{ reasoning: "Recall.", working: "\\text{vacuum}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Vacuum",
            commonErrors: ["Air conducts too much."],
          },
        },
        {
          id: "ciep-u8-insulation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are silvered surfaces used in vacuum flasks?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Flask", statement: "Reflects radiation." }],
            steps: [
              { reasoning: "Reflects IR.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Silvered surfaces reflect infrared radiation, preventing heat loss by radiation.",
            commonErrors: ["Not linking to radiation."],
          },
        },
        {
          id: "ciep-u8-insulation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how double glazing reduces heat loss.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Glazing", statement: "Air gap reduces conduction." }],
            steps: [
              { reasoning: "Two panes with air gap.", marks: 1, markCode: "M" },
              { reasoning: "Air is poor conductor.", marks: 1, markCode: "M" },
              { reasoning: "Less heat transfer.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two glass panes with trapped air — air is a poor conductor so less heat conducts through, while still allowing light.",
            commonErrors: ["Not mentioning air gap."],
          },
        },
        {
          id: "ciep-u8-insulation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe insulation methods and vacuum flask.",
          parts: [
            { label: "a", prompt: "Types of insulation.", marks: 3 },
            { label: "b", prompt: "Vacuum flask design.", marks: 3 },
            { label: "c", prompt: "Building insulation example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Insulation", statement: "Trap air/reflect/vacuum; flask design." }],
            steps: [
              { part: "a", reasoning: "Fibreglass/air traps.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reflective surfaces.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Double wall vacuum.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Silvered surfaces.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Double glazing.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Loft insulation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) air traps/reflective (b) vacuum+silvered (c) glazing/loft",
            commonErrors: ["In (b) missing vacuum."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u8-expansion-insulation-notes",
      title: "Thermal expansion and insulation — revision notes",
      summary: "Expansion, bimetal strips, vacuum flask, insulation.",
      sections: [
        {
          heading: "Key facts",
          body: "Heat→expansion. Bimetal bends. Expansion gaps in bridges. Vacuum flask: vacuum+silvered. Double glazing: air gap.",
        },
        {
          heading: "Exam technique",
          body: "- Air is poor conductor — traps work.\n- Silvered surfaces reflect radiation.\n- Vacuum stops conduction AND convection.",
        },
      ],
    },
  ],
};
