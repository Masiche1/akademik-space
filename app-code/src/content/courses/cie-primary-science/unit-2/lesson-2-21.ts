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
            { id: "a", text: "Amount of sunlight" },
            { id: "b", text: "Amount of fertiliser" },
            { id: "c", text: "Pot size" },
            { id: "d", text: "Plant height" },
          ], correctChoiceId: "b" },
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
        {
          id: "cips-u2-ws-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an investigation 'Does light affect plant growth?', what is the dependent variable?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plant growth/height" },
            { id: "b", text: "Amount of light" },
            { id: "c", text: "Type of plant" },
            { id: "d", text: "Pot size" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dependent variable", statement: "What you measure." }],
            steps: [{ reasoning: "Plant growth is what is measured.", marks: 1, markCode: "M" }],
            finalAnswer: "Plant growth/height",
          },
        },
        {
          id: "cips-u2-ws-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a test 'fair'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Guessing the answer" },
            { id: "b", text: "Changing many variables" },
            { id: "c", text: "Using no table" },
            { id: "d", text: "Changing only one variable while controlling the rest" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair test", statement: "One variable changed; rest controlled." }],
            steps: [{ reasoning: "A fair test changes one variable and controls the rest.", marks: 1, markCode: "A" }],
            finalAnswer: "Only one variable changes; rest controlled",
          },
        },
        {
          id: "cips-u2-ws-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many types of variables are there: independent, dependent, control?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "types" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Variables", statement: "Independent, dependent, control." }],
            steps: [{ reasoning: "There are 3 variable types.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-ws-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An investigation tests 5 water amounts. Results: 3 trials each. How many total measurements were recorded?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "measurements" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Recording data", statement: "Multiply trials by amounts." }],
            steps: [
              { reasoning: "$5 \\times 3 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "15 measurements recorded.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cips-u2-ws-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you repeat each test at least twice?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To use more equipment" },
            { id: "b", text: "To improve reliability and check for anomalies" },
            { id: "c", text: "It doesn't matter" },
            { id: "d", text: "To finish faster" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reliability", statement: "Repeats check consistency." }],
            steps: [{ reasoning: "Repeats improve reliability and reveal anomalies.", marks: 1, markCode: "A" }],
            finalAnswer: "Improve reliability and check for anomalies",
          },
        },
        {
          id: "cips-u2-ws-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three variable types and what each means.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Variables", statement: "Independent, dependent, control." }],
            steps: [
              { reasoning: "Independent = what you change; dependent = what you measure; control = what stays same.", marks: 1, markCode: "M" },
              { reasoning: "All three named with meanings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "IV=change, DV=measure, controls=constant",
          },
        },
        {
          id: "cips-u2-ws-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results: more fertiliser → taller plants. State a conclusion answering 'Does fertiliser affect plant height?'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conclusion", statement: "Answer question + cite evidence." }],
            steps: [
              { reasoning: "Identify pattern: more fertiliser = taller.", marks: 1, markCode: "M" },
              { reasoning: "Link to question: fertiliser does affect height.", marks: 1, markCode: "M" },
              { reasoning: "Full conclusion sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — more fertiliser produced taller plants",
          },
        },
        {
          id: "cips-u2-ws-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a test, BOTH light and water amounts are changed together. Is this a fair test?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No — more than one variable changed" },
            { id: "b", text: "Yes if you repeat it" },
            { id: "c", text: "Yes" },
            { id: "d", text: "Only if you use a table" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair test", statement: "Only one variable changes." }],
            steps: [{ reasoning: "Changing two variables makes it unfair — can't tell which caused the result.", marks: 1, markCode: "A" }],
            finalAnswer: "No — more than one variable changed",
          },
        },
        {
          id: "cips-u2-ws-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trial results: plant heights 10 cm, 12 cm, 11 cm for the same water amount. What is the average height?",
          response: { type: "numeric", parts: [{ label: "a", answer: 11, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Data analysis", statement: "Mean = sum ÷ count." }],
            steps: [
              { reasoning: "$(10 + 12 + 11) \\div 3 = 33 \\div 3 = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Average = 11 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "cips-u2-ws-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a conclusion must answer the original question, not just describe the data.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conclusion", statement: "Answer question + evidence." }],
            steps: [
              { reasoning: "Data alone doesn't tell the reader what it means.", marks: 1, markCode: "M" },
              { reasoning: "A conclusion links the pattern back to the question asked.", marks: 1, markCode: "M" },
              { reasoning: "So it gives a clear yes/no or explanation answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conclusion must link evidence to the question",
          },
        },
        {
          id: "cips-u2-ws-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should you do BEFORE running an investigation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Throw away data" },
            { id: "b", text: "Make a prediction" },
            { id: "c", text: "Write the conclusion" },
            { id: "d", text: "Change everything" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning", statement: "Predict before testing." }],
            steps: [{ reasoning: "You should make a prediction before testing.", marks: 1, markCode: "A" }],
            finalAnswer: "Make a prediction",
          },
        },
        {
          id: "cips-u2-ws-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define independent, dependent and control variables. (b) For 'Does ramp height affect marble distance?', name IV and DV. (c) List three control variables. (d) How should results be recorded? (e) Why repeat trials? (f) Give an example conclusion. (g) What makes a test unfair? (h) Why predict before testing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning and analysing", statement: "Integrated Stage 4 working scientifically answer." }],
            steps: [
              { reasoning: "(a) IV=change; DV=measure; controls=constant.", marks: 1, markCode: "M" },
              { reasoning: "(b) IV=ramp height; DV=distance marble rolls.", marks: 1, markCode: "M" },
              { reasoning: "(c) e.g. marble, ramp width, release point.", marks: 1, markCode: "M" },
              { reasoning: "(d) Table: height column + distance column, one row per trial.", marks: 1, markCode: "M" },
              { reasoning: "(e) Improve reliability, check anomalies.", marks: 1, markCode: "M" },
              { reasoning: "(f) e.g. 'Higher ramp made marble roll further.'", marks: 1, markCode: "M" },
              { reasoning: "(g) Changing more than one variable.", marks: 1, markCode: "M" },
              { reasoning: "(h) Prediction states expected result to compare against.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Variable defs, IV/DV, controls, table, repeats, conclusion, unfair factors, prediction purpose.",
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
