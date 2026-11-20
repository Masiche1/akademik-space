import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "cips-u1-lesson-1-4",
  code: "1-4",
  title: "Stage 3 — Working Scientifically",
  goal: "I CAN ask questions, make observations and follow simple investigations.",
  standards: ["Cambridge Primary Science 0097 Stage 3: working scientifically",
  "Cambridge Primary Science 0097 framework substrands: 3TWSm, 3TWSp, 3TWSc, 3TWSa"],
  stage: 3,
  vocabulary: [
    { term: "Observation", definition: "Using your senses to notice details." },
    { term: "Prediction", definition: "A guess about what will happen, with a reason." },
    { term: "Fair test", definition: "Changing only one thing and keeping everything else the same." },
    { term: "Variable", definition: "Something that can change in an investigation." },
    { term: "Evidence", definition: "Observations and measurements that support a conclusion." },
  ],
  concepts: [
    {
      id: "cips-u1-s4-scientific",
      title: "Asking questions and investigating",
      skill: "Plan and carry out simple scientific investigations at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Questions and predictions",
            body: "Scientists ask 'why' and 'how' questions, then predict answers with reasons. Predictions can be right or wrong — either way they guide the investigation.",
          },
          {
            heading: "Fair tests and evidence",
            body: "In a fair test you change ONE variable and keep the rest the same. Record observations carefully and repeat to check reliability. Conclusions must be supported by evidence.",
          },
        ],
        keyFormulas: [
          { name: "Fair test", statement: "One variable changes; all else stays same" },
        ],
        workedExample: {
          problem: "Does a plant grow better in sun or shade? What is the fair test?",
          solution: "Two identical plants, same water and soil; only light differs. Measure growth over two weeks.",
        },
      },
      questions: [
        {
          id: "cips-u1-ws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a prediction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A guess about what will happen" }, { id: "b", text: "A proven fact" }, { id: "c", text: "A measurement" }, { id: "d", text: "A question" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prediction", statement: "Educated guess before testing." }],
            steps: [{ reasoning: "A prediction is a guess with a reason, tested later.", marks: 1, markCode: "A" }],
            finalAnswer: "A guess about what will happen",
          },
        },
        {
          id: "cips-u1-ws-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a fair test about ice melting, what should stay the same?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair test", statement: "Only one variable changes." }],
            steps: [
              { reasoning: "Everything except the variable being tested (e.g. size of ice, container, room temperature).", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All other conditions",
          },
        },
        {
          id: "cips-u1-ws-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You test which paper towel absorbs the most water. Name the variable you change and one you keep the same.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Variables", statement: "Identify independent and controlled." }],
            steps: [
              { reasoning: "Change: type/brand of paper towel.", marks: 1, markCode: "M" },
              { reasoning: "Keep same: amount of water, size of towel, time.", marks: 1, markCode: "M" },
              { reasoning: "Both identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Change towel type; keep water amount/time same",
          },
        },
        {
          id: "cips-u1-ws-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why should you repeat an experiment and record results carefully?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Reliability", statement: "Repeats check the result is real." }],
            steps: [
              { reasoning: "One result might be a fluke or mistake.", marks: 1, markCode: "M" },
              { reasoning: "Repeats show the pattern is consistent.", marks: 1, markCode: "M" },
              { reasoning: "Careful records = trustworthy evidence.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "For reliable, trustworthy results",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-ws-notes",
      title: "Working scientifically — revision notes",
      summary: "Questions → predictions → fair tests → evidence.",
      sections: [
        { heading: "Process", body: "Ask why/how; predict with reasons; test fairly; conclude from evidence." },
        { heading: "Fair test", body: "Change ONE variable; keep everything else the same; repeat for reliability." },
      ],
    },
  ],
};
