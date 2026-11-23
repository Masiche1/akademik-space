import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edps3-u4-lesson-4-1",
  code: "4-1",
  title: "Asking Scientific Questions",
  goal: "I CAN turn observations into testable scientific questions.",
  standards: ["Working Scientifically"],
  vocabulary: [
    {
      term: "Scientific question",
      definition: "A question that can be tested with evidence.",
    },
    {
      term: "Observation",
      definition: "Something noticed that sparks a question.",
    },
    {
      term: "Investigation",
      definition: "A planned way to answer a question.",
    },
    { term: "Variable", definition: "Something that can change in a test." },
  ],
  concepts: [
    {
      id: "edps3-u4-questions",
      title: "Forming testable questions",
      skill: "Turn observations into questions you can investigate.",
      lesson: {
        sections: [
          {
            heading: "From observation to question",
            body: "Scientists notice things and ask 'why?' or 'what if?' 'Leaves fall in autumn — why?' becomes 'What triggers leaf colour change?' Good questions are specific and testable, not vague like 'Why is nature beautiful?'",
          },
          {
            heading: "Testable vs untestable",
            body: "Testable: 'Does salt dissolve faster in hot or cold water?' Untestable: 'Which is better, cats or dogs?' (opinion). Testable questions name what you'll change and what you'll measure — they can be answered with evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Testable question",
            statement: "Names what changes + what you measure",
          },
        ],
        workedExample: {
          problem:
            "Turn 'Ice melts faster on the pavement' into a testable question.",
          solution: "'Does the surface temperature affect how fast ice melts?'",
        },
      },
      questions: [
        {
          id: "edps3-u4-q1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a scientific question testable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's about feelings" },
              { id: "b", text: "It can be answered with evidence" },
              { id: "c", text: "It's very long" },
              { id: "d", text: "It's a yes/no question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Testable",
                statement: "Evidence-based.",
              },
            ],
            steps: [
              {
                reasoning: "Testable = can measure/observe.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Answered with evidence",
            commonErrors: ["Opinion questions."],
          },
        },
        {
          id: "edps3-u4-q1-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a testable scientific question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are dogs cuter than cats?" },
              { id: "b", text: "Does light intensity affect plant growth?" },
              { id: "c", text: "Why is the sky blue?" },
              { id: "d", text: "Is summer the best season?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Testable questions",
                statement: "Measurable.",
              },
            ],
            steps: [
              {
                reasoning: "Light intensity and growth are measurable.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Light vs plant growth",
            commonErrors: ["Opinion-based."],
          },
        },
        {
          id: "edps3-u4-q1-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite as a testable question: 'Plants seem to grow better near windows.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Testable question",
                statement: "Variables named.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies variables: light/window position vs growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Forms question: 'Does light exposure affect plant growth?'",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear, testable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Does light exposure affect plant growth?",
            commonErrors: ["Still vague."],
          },
        },
        {
          id: "edps3-u4-q1-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'Which is the best material for a raincoat?' is harder to test than 'Which material absorbs the most water?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Testable questions",
                statement: "Measurable vs subjective.",
              },
            ],
            steps: [
              {
                reasoning: "'Best' is subjective — depends on criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "'Absorbs most water' is measurable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Testable questions need measurable outcomes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Subjective vs measurable",
            commonErrors: ["Not explaining 'best'."],
          },
        },
      ],
    },
    {
      id: "edps3-u4-planning",
      title: "Planning Fair Tests",
      skill: "Design investigations with controlled variables.",
      lesson: {
        sections: [
          {
            heading: "Designing fair tests",
            body: "A fair test changes ONE variable (independent), measures ONE outcome (dependent), and keeps everything else the same (controlled). List all variables before starting. Repeat tests for reliability. Predict first — 'I think X will happen because...'",
          },
          {
            heading: "Common pitfalls",
            body: "Unfair tests change multiple things: testing which paper towel is best while also changing water amount. Or forgetting controls: different plants get different light. Check your plan: 'Did I only change what I meant to?'",
          },
        ],
        keyFormulas: [
          {
            name: "Fair test",
            statement: "1 change + 1 measure + rest same + repeats",
          },
        ],
        workedExample: {
          problem: "Plan: Does temperature affect how fast sugar dissolves?",
          solution:
            "Change: water temperature. Measure: dissolving time. Same: sugar amount, water volume, stirring.",
        },
      },
      questions: [
        {
          id: "edps3-u4-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many variables should you change in a fair test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One" },
              { id: "b", text: "Two" },
              { id: "c", text: "Three" },
              { id: "d", text: "As many as possible" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Fair test", statement: "One variable." },
            ],
            steps: [
              { reasoning: "One change = fair test.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** One",
            commonErrors: ["Multiple changes."],
          },
        },
        {
          id: "edps3-u4-pl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'Does salt affect ice melting?', what do you measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The salt amount" },
              { id: "b", text: "The melting time" },
              { id: "c", text: "The ice colour" },
              { id: "d", text: "The water temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dependent variable",
                statement: "What you measure.",
              },
            ],
            steps: [
              {
                reasoning: "Measure the outcome: time to melt.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Melting time",
            commonErrors: ["Confusing variables."],
          },
        },
        {
          id: "edps3-u4-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the unfair test: (a) Same car, different ramps. (b) Different cars, same ramp. (c) Same ramp angle, different surfaces.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fair test",
                statement: "One variable only.",
              },
            ],
            steps: [
              {
                reasoning: "(a) and (c) change one thing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) changes car AND possibly other factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) is unfair if cars differ in more than one way.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(b) — different cars = hidden variables",
            commonErrors: ["Wrong identification."],
          },
        },
        {
          id: "edps3-u4-pl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a fair test: 'Does the amount of sunlight affect how fast a plant grows?' List variables and controls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Investigation plan",
                statement: "Variables + controls.",
              },
            ],
            steps: [
              {
                reasoning: "Change: sunlight amount.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measure: growth (height).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same: plant type, soil, water, pot size.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Sunlight changes; growth measured; all else same",
            commonErrors: ["Missing controls."],
          },
        },
      ],
    },
    {
      id: "edps3-u4-data",
      title: "Recording and Analysing Data",
      skill: "Record results accurately and identify patterns.",
      lesson: {
        sections: [
          {
            heading: "Accurate data collection",
            body: "Record results as you go — don't rely on memory. Use tables with clear headings. Repeat measurements and calculate averages if needed. Note anomalies (odd results) and possible causes. Label units every time.",
          },
          {
            heading: "Finding patterns",
            body: "Look for: trends (as X increases, Y increases/decreases), comparisons (which is highest/lowest), anomalies. Patterns answer your question. 'As temperature increased, dissolving time decreased' is a clear pattern — use it in your conclusion.",
          },
        ],
        keyFormulas: [
          {
            name: "Data analysis",
            statement: "Record + repeat + find patterns",
          },
        ],
        workedExample: {
          problem: "Results: 20°C→60s, 40°C→45s, 60°C→30s, 80°C→15s. Pattern?",
          solution:
            "Higher temperature = faster dissolving — negative relationship.",
        },
      },
      questions: [
        {
          id: "edps3-u4-da-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why repeat measurements in an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To waste time" },
              { id: "b", text: "To check reliability" },
              { id: "c", text: "To confuse results" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Reliability",
                statement: "Repeats confirm.",
              },
            ],
            steps: [
              {
                reasoning: "Repeats check consistency.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Check reliability",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps3-u4-da-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an 'anomaly' in data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A normal result" },
              { id: "b", text: "A result that doesn't fit the pattern" },
              { id: "c", text: "The average" },
              { id: "d", text: "The question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "Odd result." },
            ],
            steps: [
              { reasoning: "Anomaly = doesn't fit.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Doesn't fit pattern",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps3-u4-da-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results: light 2hrs→growth 3cm, 4hrs→5cm, 6hrs→8cm. Describe the trend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Trend analysis",
                statement: "Positive relationship.",
              },
            ],
            steps: [
              {
                reasoning: "More light = more growth.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Positive correlation.", marks: 1, markCode: "M" },
              { reasoning: "Clear pattern stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More light → more growth",
            commonErrors: ["No trend."],
          },
        },
        {
          id: "edps3-u4-da-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In results 10, 11, 10, 45, 12 — what is the anomaly and what might explain it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Anomaly analysis",
                statement: "Identify + explain.",
              },
            ],
            steps: [
              {
                reasoning: "45 is the anomaly — others ~10-12.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Possible: measurement error, different conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anomalies should be noted and explained.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "45 is anomaly; possible error",
            commonErrors: ["Ignoring anomaly."],
          },
        },
      ],
    },
    {
      id: "edps3-u4-conclusion",
      title: "Conclusions and Evaluation",
      skill: "Draw conclusions and evaluate investigation quality.",
      lesson: {
        sections: [
          {
            heading: "Writing conclusions",
            body: "A good conclusion answers the question directly, cites evidence, and links to prediction. 'The fabric insulator kept ice longest (60min vs 45, 30), so it is the best insulator. My prediction was correct.' If results were unexpected, explain honestly.",
          },
          {
            heading: "Evaluating investigations",
            body: "Ask: Was it fair? Were variables controlled? Were measurements accurate? Were tests repeated? What could be improved? 'If I did it again, I would repeat more times and use a digital timer.' Evaluation shows scientific maturity.",
          },
        ],
        keyFormulas: [
          {
            name: "Conclusion",
            statement: "Answer + evidence + prediction + improvements",
          },
        ],
        workedExample: {
          problem:
            "Write a conclusion: 'Which material is the best conductor of heat?' Metal won (fastest heating).",
          solution:
            "Metal is the best conductor — it heated fastest in my test, matching my prediction.",
        },
      },
      questions: [
        {
          id: "edps3-u4-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a conclusion include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only your opinion" },
              { id: "b", text: "Answer + evidence" },
              { id: "c", text: "The question" },
              { id: "d", text: "Equipment list" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement: "Answer + evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Conclusion = answer backed by data.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Answer + evidence",
            commonErrors: ["Opinion only."],
          },
        },
        {
          id: "edps3-u4-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'evaluating' an investigation mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating it" },
              { id: "b", text: "Judging its quality and fairness" },
              { id: "c", text: "Writing it up" },
              { id: "d", text: "Presenting results" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Judge quality.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluate = assess fairness/reliability.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Judge quality",
            commonErrors: ["Confusing with conclusion."],
          },
        },
        {
          id: "edps3-u4-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a conclusion for: 'Does surface type affect ball bounce?' Results: carpet 20cm, tile 45cm, grass 15cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement: "Answer + data.",
              },
            ],
            steps: [
              {
                reasoning: "States tile bounces highest.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cites numbers.", marks: 1, markCode: "M" },
              {
                reasoning: "Pattern explained (hard vs soft).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tile bounces highest (45cm)",
            commonErrors: ["No data."],
          },
        },
        {
          id: "edps3-u4-co-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Suggest two improvements to an investigation and explain why they'd help.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Improvements + reasons.",
              },
            ],
            steps: [
              {
                reasoning: "Repeat tests for reliability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use precise tools for accuracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasons linked to better data.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Two improvements with reasons",
            commonErrors: ["No reasons."],
          },
        },
      ],
    },
  ],
};
