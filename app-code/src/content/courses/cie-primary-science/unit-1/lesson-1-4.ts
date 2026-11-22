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
            { id: "a", text: "A proven fact" },
            { id: "b", text: "A question" },
            { id: "c", text: "A guess about what will happen" },
            { id: "d", text: "A measurement" },
          ], correctChoiceId: "c" },
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
        {
          id: "cips-u1-ws-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a variable in an investigation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A conclusion" },
            { id: "b", text: "A type of question" },
            { id: "c", text: "A measuring tool" },
            { id: "d", text: "Something that can change" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Variable", statement: "Something that can change." }],
            steps: [{ reasoning: "A variable is something that can change in an investigation.", marks: 1, markCode: "A" }],
            finalAnswer: "Something that can change",
          },
        },
        {
          id: "cips-u1-ws-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a scientist do BEFORE carrying out a test?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Throw away the results" },
            { id: "b", text: "Write the conclusion" },
            { id: "c", text: "Change everything at once" },
            { id: "d", text: "Make a prediction" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prediction", statement: "Guess what will happen before testing." }],
            steps: [{ reasoning: "You predict first, then compare results.", marks: 1, markCode: "A" }],
            finalAnswer: "Make a prediction",
          },
        },
        {
          id: "cips-u1-ws-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a fair test, how many variables should you change at once?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1, unit: "variable" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair test", statement: "Only one variable changes." }],
            steps: [{ reasoning: "A fair test changes only 1 variable.", marks: 1, markCode: "M" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cips-u1-ws-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 5 paper towel brands. 3 absorb more water than the others and 2 absorb less. What is the total number of brands tested?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "brands" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Investigations", statement: "Total = all items tested." }],
            steps: [
              { reasoning: "$3 + 2 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Total brands tested = 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u1-ws-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is evidence in a scientific investigation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A drawing with no labels" },
            { id: "b", text: "A guess with no reason" },
            { id: "c", text: "A random opinion" },
            { id: "d", text: "Observations and measurements that support a conclusion" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evidence", statement: "Observations and measurements supporting conclusions." }],
            steps: [{ reasoning: "Evidence supports conclusions.", marks: 1, markCode: "A" }],
            finalAnswer: "Observations and measurements supporting conclusions",
          },
        },
        {
          id: "cips-u1-ws-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways scientists use their senses in an investigation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Observation", statement: "Using senses to notice details." }],
            steps: [
              { reasoning: "First sense use (e.g. sight to see colour/size).", marks: 1, markCode: "M" },
              { reasoning: "Second sense use (e.g. hearing sounds, smell smells).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. sight and hearing",
          },
        },
        {
          id: "cips-u1-ws-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student tests 'which ball bounces highest' but uses a different-sized ball each time AND drops them from different heights. Explain what is wrong with this test.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair test", statement: "Only one variable should change." }],
            steps: [
              { reasoning: "Two things change: ball size and drop height.", marks: 1, markCode: "M" },
              { reasoning: "You cannot tell which caused the result — not a fair test.", marks: 1, markCode: "M" },
              { reasoning: "Fix: use same type of ball and same drop height; change only one thing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two variables changed — not a fair test",
          },
        },
        {
          id: "cips-u1-ws-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What should you do if your results do NOT match your prediction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Report honestly and discuss why" },
            { id: "b", text: "Hide the results" },
            { id: "c", text: "Stop investigating forever" },
            { id: "d", text: "Change the results to match" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Investigations", statement: "Honest reporting is key." }],
            steps: [{ reasoning: "Report honestly; unexpected results are still useful evidence.", marks: 1, markCode: "A" }],
            finalAnswer: "Report honestly and discuss",
          },
        },
        {
          id: "cips-u1-ws-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In three repeats of a test, a magnet picks up 8, 9 and 8 paperclips. What is the total number of paperclips picked up?",
          response: { type: "numeric", parts: [{ label: "a", answer: 25, unit: "paperclips" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeating tests", statement: "Add all repeats for total." }],
            steps: [
              { reasoning: "$8 + 9 + 8 = 25$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 25 paperclips.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25",
          },
        },
        {
          id: "cips-u1-ws-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a prediction can be 'wrong' but still useful in a scientific investigation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prediction", statement: "A guess tested by investigation." }],
            steps: [
              { reasoning: "A prediction gives something to compare results against.", marks: 1, markCode: "M" },
              { reasoning: "If results differ, you learn something new about the topic.", marks: 1, markCode: "M" },
              { reasoning: "Either way the investigation produces useful evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wrong predictions still guide and teach",
          },
        },
        {
          id: "cips-u1-ws-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an investigation 'does temperature affect how fast ice melts', what is the variable being changed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The time of day" },
            { id: "b", text: "The colour of the bowl" },
            { id: "c", text: "The size of the ice" },
            { id: "d", text: "The temperature" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Variables", statement: "The changed variable is what you test." }],
            steps: [{ reasoning: "Temperature is the variable being tested.", marks: 1, markCode: "A" }],
            finalAnswer: "The temperature",
          },
        },
        {
          id: "cips-u1-ws-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define prediction, variable and fair test. (b) You test 'which paper towel absorbs most water' — name the variable you change and two you keep the same. (c) Why repeat an experiment? (d) What is evidence? (e) A student changes two things at once — why is this wrong? (f) What should you do if results don't match your prediction? (g) Name two ways to record results carefully. (h) Write a conclusion supported by evidence for the paper towel test.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Working scientifically", statement: "Integrated enquiry skills answer." }],
            steps: [
              { reasoning: "(a) Prediction=guess before test; variable=can change; fair test=one variable changes.", marks: 1, markCode: "M" },
              { reasoning: "(b) Change: towel type; keep same: water amount, time/size.", marks: 1, markCode: "M" },
              { reasoning: "(c) To check results are reliable/not a fluke.", marks: 1, markCode: "M" },
              { reasoning: "(d) Observations and measurements supporting conclusions.", marks: 1, markCode: "M" },
              { reasoning: "(e) Cannot tell which variable caused the result.", marks: 1, markCode: "M" },
              { reasoning: "(f) Report honestly and discuss why.", marks: 1, markCode: "M" },
              { reasoning: "(g) Tables, drawings, numbers with units.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. 'Brand X absorbed most water in all repeats, so it is best.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Definitions, variables, repeating, evidence, one-variable rule, honest reporting, recording, conclusion.",
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
