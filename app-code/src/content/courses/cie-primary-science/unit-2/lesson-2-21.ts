import type { Lesson } from "../../../types.ts";

export const lesson221: Lesson = {
  id: "cips-u2-lesson-2-21",
  code: "2-21",
  title: "Stage 4 — Working Scientifically: Planning and Analysing",
  goal: "I CAN plan a fair test by identifying variables, record results in a table and draw a conclusion from evidence.",
  standards: ["Cambridge Primary Science 0097 Stage 4: working scientifically",
  "Cambridge Primary Science 0097 framework substrands: 4TWSm, 4TWSp, 4TWSc, 4TWSa"],
  stage: 4,
  vocabulary: [
    { term: "Variable", definition: "Something that can change in an investigation." },
    { term: "Independent variable", definition: "The one thing you deliberately change." },
    { term: "Dependent variable", definition: "What you measure or observe — it responds to the change." },
    { term: "Control variable", definition: "Things kept the same so the test is fair." },
    { term: "Fair test", definition: "Only the independent variable changes; everything else is controlled." },
    { term: "Conclusion", definition: "What the results show, linked to the question asked." },
  ],
  concepts: [
    {
      id: "cips-u2-s21-investigate",
      title: "Planning fair tests and analysing results",
      skill: "Identify variables, design a fair test, record data systematically and conclude at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Planning a fair test",
            body: "Start with a question, e.g. 'Does the amount of water affect how fast a plant grows?' Choose ONE independent variable to change (water amount). Decide what you will measure (growth height = dependent variable). List control variables to keep the same (light, soil, temperature, pot size). Predict what you expect to happen before testing.",
          },
          {
            heading: "Recording and analysing",
            body: "Use a table with columns for the independent variable and the measured results; repeat each test at least twice for reliability. Look for patterns: does growth increase as water increases? A conclusion must answer the original question and refer to the evidence — 'Plants given more water grew taller, so water amount affects growth' — not just describe numbers.",
          },
        ],
        keyFormulas: [
          { name: "Fair test", statement: "change one variable; control the rest" },
          { name: "Conclusion", statement: "answer the question + cite the evidence" },
        ],
        workedExample: {
          problem: "Investigate whether paper towel brand affects how much water it absorbs. Plan the test and say what a conclusion might look like.",
          solution: "Independent: towel brand. Dependent: water absorbed (ml). Controls: towel size, water amount, soaking time. Repeat twice. Conclusion example: 'Brand A absorbed more water than Brand B, so brand affects absorption.'",
        },
      },
      questions: [
        {
          id: "cips-u2-ws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an investigation of 'Does fertiliser make plants grow taller?', what is the independent variable?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Amount of fertiliser" }, { id: "b", text: "Plant height" }, { id: "c", text: "Amount of sunlight" }, { id: "d", text: "Pot size" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Independent variable", statement: "The factor deliberately changed." }],
            steps: [{ reasoning: "Fertiliser amount is what is changed.", marks: 1, markCode: "M" }],
            finalAnswer: "Amount of fertiliser",
          },
        },
        {
          id: "cips-u2-ws-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two control variables for an investigation into how surface texture affects the distance a toy car travels.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Control variables", statement: "Kept constant for fairness." }],
            steps: [
              { reasoning: "e.g. same ramp height.", marks: 1, markCode: "M" },
              { reasoning: "e.g. same car and same push force.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. ramp height, car, push force",
          },
        },
        {
          id: "cips-u2-ws-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results: ice cube melts in 4 min at 20°C, 2 min at 30°C, 1 min at 40°C. State a conclusion that answers 'Does temperature affect melting time?'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conclusion", statement: "Answer the question + cite evidence." }],
            steps: [
              { reasoning: "Higher temperature → faster melting (4→2→1 min).", marks: 1, markCode: "M" },
              { reasoning: "Link to question: temperature does affect melting time.", marks: 1, markCode: "M" },
              { reasoning: "Full conclusion sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — as temperature rises from 20°C to 40°C, melting time falls from 4 to 1 minute.",
          },
        },
        {
          id: "cips-u2-ws-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Plan a fair test for: 'Does the width of a ramp affect how far a marble rolls?' (a) State the question's independent and dependent variables. (b) List three control variables. (c) Describe how you would record results in a table. (d) Give an example conclusion. (e) Why should you repeat each test? (f) What would make the test unfair? Show scientific reasoning throughout.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fair-test planning", statement: "Variables, controls, recording, conclusion, reliability." }],
            steps: [
              { reasoning: "(a) Independent: ramp width; dependent: distance rolled.", marks: 1, markCode: "M" },
              { reasoning: "(b) Three controls: ramp height, marble, release point/force.", marks: 1, markCode: "M" },
              { reasoning: "(c) Table: ramp width column + distance column, one row per trial.", marks: 1, markCode: "M" },
              { reasoning: "(d) Example conclusion linking width to distance.", marks: 1, markCode: "M" },
              { reasoning: "(e) Repeats improve reliability/check for anomalies.", marks: 1, markCode: "M" },
              { reasoning: "(f) Unfair if height or marble changes too.", marks: 1, markCode: "M" },
              { reasoning: "Reasoning references variables and fairness.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "IV=ramp width, DV=distance; controls=height/marble/release; table+repeats+linked conclusion; unfair if other variables change.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-ws-notes",
      title: "Planning and analysing — notes",
      summary: "Change ONE variable, control the rest. Record in a table, repeat trials, conclude by answering the question with evidence.",
      sections: [
        { heading: "Variables", body: "Independent = what you change; dependent = what you measure; controls = what stays the same." },
        { heading: "Conclusions", body: "Always link back to the question and cite the pattern in the data." },
      ],
    },
  ],
};
