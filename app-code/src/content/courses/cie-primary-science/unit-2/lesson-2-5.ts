import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "cips-u2-lesson-2-5",
  code: "2-5",
  title: "Stage 5 — States of Matter and Dissolving",
  goal: "I CAN describe solids, liquids and gases and explain dissolving.",
  standards: ["Cambridge Primary Science 0097 Stage 5: materials",
  "Cambridge Primary Science 0097 framework substrands: 5Cc, 5Cm"],
  stage: 5,
  vocabulary: [
    { term: "Solid", definition: "Matter with fixed shape and volume." },
    { term: "Liquid", definition: "Matter with fixed volume that takes the container's shape." },
    { term: "Gas", definition: "Matter that spreads to fill any space." },
    { term: "Dissolving", definition: "When a solid disappears into a liquid to make a solution." },
    { term: "Solute and solvent", definition: "The dissolved solid (solute) and the liquid it dissolves in (solvent)." },
  ],
  concepts: [
    {
      id: "cips-u2-s5-matter",
      title: "States of matter and solutions",
      skill: "Describe the three states and explain dissolving at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "Solids keep their own shape and volume (ice, rock). Liquids keep their volume but take the shape of their container (water, milk). Gases spread out to fill all available space (air, steam). Heating or cooling can change a substance from one state to another — melting, freezing, evaporating, condensing.",
          },
          {
            heading: "Dissolving",
            body: "When salt dissolves in water, the solid breaks into tiny particles spread through the liquid — a solution. The salt is the solute, the water is the solvent. The solution looks clear but still contains the dissolved substance, which can be recovered by evaporating the water.",
          },
        ],
        keyFormulas: [
          { name: "States", statement: "Solid: fixed shape+volume; liquid: fixed volume; gas: fills space" },
          { name: "Solution", statement: "solute + solvent = solution" },
        ],
        workedExample: {
          problem: "What happens when sugar is stirred into warm water?",
          solution: "The sugar dissolves — it spreads through the water as tiny particles, making a clear solution.",
        },
      },
      questions: [
        {
          id: "cips-u2-mm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state of matter fills all available space?",
          response: { type: "mcq", choices: [
            { id: "a", text: "None" },
            { id: "b", text: "Liquid" },
            { id: "c", text: "Solid" },
            { id: "d", text: "Gas" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Gas", statement: "Gas spreads to fill any space." }],
            steps: [{ reasoning: "Gases expand to fill containers.", marks: 1, markCode: "A" }],
            finalAnswer: "Gas",
          },
        },
        {
          id: "cips-u2-mm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the solute and solvent when salt dissolves in water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solute and solvent", statement: "Dissolved solid = solute; liquid = solvent." }],
            steps: [
              { reasoning: "Salt is the solute.", marks: 1, markCode: "M" },
              { reasoning: "Water is the solvent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solute: salt; solvent: water",
          },
        },
        {
          id: "cips-u2-mm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between melting and dissolving?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Melting vs dissolving", statement: "Melting = state change by heat; dissolving = solid into liquid." }],
            steps: [
              { reasoning: "Melting changes solid to liquid by heating — no solvent needed.", marks: 1, markCode: "M" },
              { reasoning: "Dissolving spreads a solid through a liquid to make a solution.", marks: 1, markCode: "M" },
              { reasoning: "Answer contrasts both clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Melting = heat changes state; dissolving = solid spreads in liquid",
          },
        },
        {
          id: "cips-u2-mm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How could you recover the salt from salty water? Name the process.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaporation", statement: "Heat the solution; water evaporates leaving solute." }],
            steps: [
              { reasoning: "Heat the solution gently.", marks: 1, markCode: "M" },
              { reasoning: "Water evaporates as gas.", marks: 1, markCode: "M" },
              { reasoning: "Salt crystals remain — process is evaporation.", marks: 1, markCode: "M" },
              { reasoning: "Answer: evaporate the water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporate the water to recover the salt",
          },
        },
        {
          id: "cips-u2-mm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state of matter keeps its own shape?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Liquid" },
            { id: "b", text: "Gas" },
            { id: "c", text: "Solid" },
            { id: "d", text: "None of them" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solid", statement: "Fixed shape and volume." }],
            steps: [{ reasoning: "Solids keep their own shape.", marks: 1, markCode: "A" }],
            finalAnswer: "Solid",
          },
        },
        {
          id: "cips-u2-mm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A liquid keeps its volume but takes the shape of what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Its container" },
            { id: "b", text: "The room" },
            { id: "c", text: "Nothing" },
            { id: "d", text: "Its own shape" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Liquid", statement: "Takes container's shape, fixed volume." }],
            steps: [{ reasoning: "Liquids take the shape of their container.", marks: 1, markCode: "A" }],
            finalAnswer: "Its container",
          },
        },
        {
          id: "cips-u2-mm-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many states of matter are there?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "states" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "States", statement: "Solid, liquid, gas." }],
            steps: [{ reasoning: "There are 3 states.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-mm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You dissolve sugar in 3 glasses of water. In one glass the sugar does not fully dissolve. How many glasses contain a complete solution?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "glasses" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Dissolving", statement: "Full dissolve = solution." }],
            steps: [
              { reasoning: "$3 - 1 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "2 glasses have complete solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-mm-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens when ice is heated?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It melts into water" },
            { id: "b", text: "Nothing" },
            { id: "c", text: "It freezes" },
            { id: "d", text: "It becomes a gas instantly" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Melting", statement: "Solid → liquid by heating." }],
            steps: [{ reasoning: "Heating ice melts it into water.", marks: 1, markCode: "A" }],
            finalAnswer: "It melts into water",
          },
        },
        {
          id: "cips-u2-mm-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three states of matter and one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "States", statement: "Solid, liquid, gas." }],
            steps: [
              { reasoning: "Solid example (e.g. ice), liquid (e.g. water), gas (e.g. air).", marks: 1, markCode: "M" },
              { reasoning: "All three named correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. ice, water, air",
          },
        },
        {
          id: "cips-u2-mm-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a gas spreads out to fill a room while a liquid stays at the bottom of a glass.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "States", statement: "Gas fills space; liquid has fixed volume." }],
            steps: [
              { reasoning: "Gas particles spread freely and fill all available space.", marks: 1, markCode: "M" },
              { reasoning: "A liquid has a fixed volume and only takes the container's shape.", marks: 1, markCode: "M" },
              { reasoning: "So gas fills the room; liquid stays at the bottom of the glass.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas particles spread freely; liquid keeps fixed volume",
          },
        },
        {
          id: "cips-u2-mm-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the solution sugar + water, which is the solvent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Neither" },
            { id: "b", text: "The water" },
            { id: "c", text: "The sugar" },
            { id: "d", text: "Both equally" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solvent", statement: "The liquid that dissolves." }],
            steps: [{ reasoning: "Water is the solvent.", marks: 1, markCode: "A" }],
            finalAnswer: "The water",
          },
        },
        {
          id: "cips-u2-mm-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A block of ice melts into water, then the water boils into steam. How many state changes occur?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "changes" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "State changes", statement: "Count each change." }],
            steps: [
              { reasoning: "Melting (solid→liquid) and boiling (liquid→gas).", marks: 1, markCode: "M" },
              { reasoning: "Total = 2 changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-mm-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why can you recover salt from salty water by evaporating it, but you cannot recover it by filtering?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaporation vs filtering", statement: "Dissolved solid passes through filter but not evaporation." }],
            steps: [
              { reasoning: "Dissolved salt is spread through the water as tiny particles.", marks: 1, markCode: "M" },
              { reasoning: "A filter cannot catch particles that small — they pass through.", marks: 1, markCode: "M" },
              { reasoning: "Evaporating removes the water, leaving salt crystals behind.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Salt passes through filter; evaporation leaves crystals",
          },
        },
        {
          id: "cips-u2-mm-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a GAS at room temperature?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rock" },
            { id: "b", text: "Air" },
            { id: "c", text: "Water" },
            { id: "d", text: "Ice" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Gas", statement: "Air is a gas at room temperature." }],
            steps: [{ reasoning: "Air is a gas; the others are solid or liquid.", marks: 1, markCode: "A" }],
            finalAnswer: "Air",
          },
        },
        {
          id: "cips-u2-mm-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the three states of matter and describe each briefly. (b) Give one example of each. (c) Define solute and solvent. (d) What happens when sugar dissolves in water? (e) How is dissolving different from melting? (f) How can you recover dissolved salt? Name the process. (g) Why does a gas fill a whole room? (h) Describe the journey of water: ice → water → steam.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "States of matter", statement: "Integrated Stage 5 states and dissolving answer." }],
            steps: [
              { reasoning: "(a) Solid=fixed shape+volume; liquid=fixed volume, container shape; gas=fills space.", marks: 1, markCode: "M" },
              { reasoning: "(b) e.g. ice, water, air.", marks: 1, markCode: "M" },
              { reasoning: "(c) Solute=dissolved solid; solvent=the liquid.", marks: 1, markCode: "M" },
              { reasoning: "(d) Breaks into tiny particles spread through water — a solution.", marks: 1, markCode: "M" },
              { reasoning: "(e) Melting=state change by heat; dissolving=solid spreads in liquid.", marks: 1, markCode: "M" },
              { reasoning: "(f) Evaporate the water — salt crystals remain.", marks: 1, markCode: "M" },
              { reasoning: "(g) Gas particles move freely and fill all space.", marks: 1, markCode: "M" },
              { reasoning: "(h) Ice melts (heating), water evaporates/boils (more heating), steam condenses to repeat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "States, examples, solute/solvent, dissolving, melting vs dissolving, evaporation, gas spreading, state changes.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-mm-notes",
      title: "States of matter — revision notes",
      summary: "Solid fixed; liquid fixed volume; gas fills space; dissolve → solution.",
      sections: [
        { heading: "States", body: "Heat: solid→liquid→gas; cool reverses. Liquid takes container shape only." },
        { heading: "Dissolving", body: "Solute + solvent = solution; evaporate solvent to recover solute." },
      ],
    },
  ],
};
