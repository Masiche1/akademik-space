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
            { id: "a", text: "Sight" }, { id: "b", text: "Touch" }, { id: "c", text: "Taste" }, { id: "d", text: "Hearing" },
          ], correctChoiceId: "c" },
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
