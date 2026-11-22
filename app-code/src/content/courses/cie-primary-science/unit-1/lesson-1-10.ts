import type { Lesson } from "../../../types.ts";

export const lesson110: Lesson = {
  id: "cips-u1-lesson-1-10",
  code: "1-10",
  title: "Stage 2 — Working Scientifically: Observing and Comparing",
  goal: "I CAN observe carefully, compare objects and record what I find.",
  standards: ["Cambridge Primary Science 0097 Stage 2: working scientifically",
  "Cambridge Primary Science 0097 framework substrands: 2TWSp, 2TWSc, 2TWSa, 2TWSm"],
  stage: 2,
  vocabulary: [
    { term: "Observation", definition: "Noticing details using your senses." },
    { term: "Compare", definition: "Find how things are the same or different." },
    { term: "Measure", definition: "Find out size, length or amount with a tool." },
    { term: "Record", definition: "Write or draw what you found." },
    { term: "Predict", definition: "Guess what will happen before testing." },
  ],
  concepts: [
    {
      id: "cips-u1-s10-observing",
      title: "Observing, comparing and recording",
      skill: "Make careful observations, compare objects and record findings at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Observing and comparing",
            body: "Good scientists observe carefully — look, listen, touch (safely), smell (never taste unknown things!). Compare objects by finding similarities and differences: same colour? different size? heavier or lighter? Use simple tools like rulers, scales and magnifying glasses to measure rather than guess.",
          },
          {
            heading: "Recording and predicting",
            body: "Record findings clearly — drawings, words, or simple tables. Before an investigation, make a prediction: 'I think the bigger magnet will pick up more paperclips.' Then test it and compare your result to the prediction — being wrong is fine, it teaches you something.",
          },
        ],
        keyFormulas: [
          { name: "Observation", statement: "look, listen, touch safely — never taste unknowns" },
          { name: "Compare", statement: "same? different? bigger? smaller?" },
        ],
        workedExample: {
          problem: "Compare two leaves — how would you describe them?",
          solution: "Leaf A is bigger, darker green, with jagged edges; Leaf B is smaller, lighter, smooth edges.",
        },
      },
      questions: [
        {
          id: "cips-u1-os-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense should you NEVER use to test an unknown substance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Taste" },
            { id: "b", text: "Hearing" },
            { id: "c", text: "Touch" },
            { id: "d", text: "Sight" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Safety", statement: "Never taste unknown substances." }],
            steps: [{ reasoning: "Tasting unknowns is dangerous.", marks: 1, markCode: "A" }],
            finalAnswer: "Taste",
          },
        },
        {
          id: "cips-u1-os-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does it mean to 'compare' two objects?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Compare", statement: "Find similarities and differences." }],
            steps: [
              { reasoning: "Find how they are the same and different.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Find similarities and differences",
          },
        },
        {
          id: "cips-u1-os-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do scientists make predictions before testing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Predicting", statement: "Guess before testing, then compare." }],
            steps: [
              { reasoning: "Predictions use what you already know.", marks: 1, markCode: "M" },
              { reasoning: "Comparing result to prediction tests your idea.", marks: 1, markCode: "M" },
              { reasoning: "Even wrong predictions teach something.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "To test an idea against what actually happens",
          },
        },
        {
          id: "cips-u1-os-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "You have two magnets. Describe a fair investigation to find which is stronger, including: prediction, what you keep the same, what you change, and how you'll record results.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning investigations", statement: "Predict, control variables, record." }],
            steps: [
              { reasoning: "Prediction stated (e.g. 'bigger magnet stronger').", marks: 1, markCode: "M" },
              { reasoning: "Same: paperclips, surface, method.", marks: 1, markCode: "M" },
              { reasoning: "Changed: only the magnet.", marks: 1, markCode: "M" },
              { reasoning: "Count paperclips picked up by each.", marks: 1, markCode: "M" },
              { reasoning: "Repeat test for reliability.", marks: 1, markCode: "M" },
              { reasoning: "Record in table/drawing.", marks: 1, markCode: "M" },
              { reasoning: "Compare results to prediction.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion drawn from evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Predict → same paperclips/surface → change magnet → count pickups → repeat → record → compare",
          },
        },
        {
          id: "cips-u1-os-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an observation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Noticing details using your senses" },
            { id: "b", text: "A type of experiment" },
            { id: "c", text: "A guess before testing" },
            { id: "d", text: "A tool for measuring" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Observation", statement: "Noticing details using your senses." }],
            steps: [{ reasoning: "An observation uses the senses to notice details.", marks: 1, markCode: "A" }],
            finalAnswer: "Noticing details using your senses",
          },
        },
        {
          id: "cips-u1-os-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways you could record what you find in an investigation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Record", statement: "Write or draw what you found." }],
            steps: [
              { reasoning: "Any two of: drawings, words, tables, numbers.", marks: 1, markCode: "M" },
              { reasoning: "Both methods clear and suitable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. a drawing and a table",
          },
        },
        {
          id: "cips-u1-os-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which tool would you use to measure the length of a pencil?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Thermometer" },
            { id: "b", text: "Clock" },
            { id: "c", text: "Ruler" },
            { id: "d", text: "Magnifying glass" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Measure", statement: "Find size, length or amount with a tool." }],
            steps: [{ reasoning: "A ruler measures length.", marks: 1, markCode: "A" }],
            finalAnswer: "Ruler",
          },
        },
        {
          id: "cips-u1-os-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Scientists can use sight, hearing, safe touch and smell to observe. How many senses is that in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "senses" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Observation", statement: "Observe using safe senses." }],
            steps: [{ reasoning: "Sight, hearing, touch and smell = 4 senses.", marks: 1, markCode: "M" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u1-os-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it better to measure an object with a tool instead of just guessing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Measuring", statement: "Tools give accurate results." }],
            steps: [
              { reasoning: "Tools give accurate, reliable measurements.", marks: 1, markCode: "M" },
              { reasoning: "Guesses can be wrong and cannot be compared fairly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Measurements are accurate and can be compared",
          },
        },
        {
          id: "cips-u1-os-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should you do BEFORE you carry out a test?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Make a prediction" },
            { id: "b", text: "Write the conclusion" },
            { id: "c", text: "Throw away the results" },
            { id: "d", text: "Change everything at once" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Predicting", statement: "Guess what will happen before testing." }],
            steps: [{ reasoning: "You predict before testing, then compare results.", marks: 1, markCode: "A" }],
            finalAnswer: "Make a prediction",
          },
        },
        {
          id: "cips-u1-os-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You have two stones. Describe how you would compare them fairly and what you would record.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing objects", statement: "Find similarities and differences using measurements." }],
            steps: [
              { reasoning: "Measure size, mass, colour or texture of each stone.", marks: 1, markCode: "M" },
              { reasoning: "Record results in a table or drawing.", marks: 1, markCode: "M" },
              { reasoning: "State similarities and differences, e.g. one is heavier.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Measure both, record in a table, state same/different",
          },
        },
        {
          id: "cips-u1-os-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You test a magnet three times and it picks up 12, 14 and 13 paperclips. How many paperclips did it pick up altogether?",
          response: { type: "numeric", parts: [{ label: "a", answer: 39, unit: "paperclips" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeating tests", statement: "Repeat to check results are reliable." }],
            steps: [
              { reasoning: "$12 + 14 + 13 = 39$.", marks: 1, markCode: "M" },
              { reasoning: "Total is 39 paperclips.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "39 paperclips",
          },
        },
        {
          id: "cips-u1-os-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tool helps you see the details of very tiny objects?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A scale" },
            { id: "b", text: "A clock" },
            { id: "c", text: "A magnifying glass" },
            { id: "d", text: "A ruler" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Measure", statement: "Use simple tools like rulers, scales and magnifying glasses." }],
            steps: [{ reasoning: "A magnifying glass makes tiny things look bigger.", marks: 1, markCode: "A" }],
            finalAnswer: "A magnifying glass",
          },
        },
        {
          id: "cips-u1-os-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do scientists repeat an investigation more than once?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeating tests", statement: "Repeats check the result is reliable." }],
            steps: [
              { reasoning: "Repeating checks the first result was not a mistake.", marks: 1, markCode: "M" },
              { reasoning: "Similar results show the finding is reliable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "To check the result is reliable",
          },
        },
        {
          id: "cips-u1-os-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A prediction is...",
          response: { type: "mcq", choices: [
            { id: "a", text: "A guess about what will happen before testing" },
            { id: "b", text: "The result after testing" },
            { id: "c", text: "A type of record" },
            { id: "d", text: "A tool for measuring" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Predict", statement: "Guess what will happen before testing." }],
            steps: [{ reasoning: "A prediction is made before the test is carried out.", marks: 1, markCode: "A" }],
            finalAnswer: "A guess before testing",
          },
        },
        {
          id: "cips-u1-os-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how you would compare two leaves and record your findings clearly.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Observing and recording", statement: "Compare details and record clearly." }],
            steps: [
              { reasoning: "Observe both leaves — size, colour, shape, edges.", marks: 1, markCode: "M" },
              { reasoning: "Record with a drawing or words/labels.", marks: 1, markCode: "M" },
              { reasoning: "State similarities and differences between the leaves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Observe details, draw or write them down, compare same/different",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-os-notes",
      title: "Observing scientifically — notes",
      summary: "Observe with senses (never taste unknowns); compare; predict then test; record.",
      sections: [
        { heading: "Observing", body: "Use all safe senses; measure with tools rather than guess." },
        { heading: "Investigating", body: "Predict → keep variables same → change one → record → compare." },
      ],
    },
  ],
};
