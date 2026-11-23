import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edps2-u4-lesson-4-2",
  code: "4-2",
  title: "Variables and Measurement",
  goal: "I CAN identify and control variables and measure accurately.",
  standards: ["Working Scientifically"],
  vocabulary: [
    {
      term: "Independent variable",
      definition: "The thing you change on purpose.",
    },
    { term: "Dependent variable", definition: "What you measure or observe." },
    { term: "Controlled variable", definition: "Things you keep the same." },
    { term: "Measurement", definition: "A number showing size or amount." },
  ],
  concepts: [
    {
      id: "edps2-u4-vars",
      title: "Controlling variables",
      skill: "Identify and control all three types of variables.",
      lesson: {
        sections: [
          {
            heading: "Three types of variables",
            body: "Independent variable: what you change ('which paper towel'). Dependent variable: what you measure ('amount of water absorbed'). Controlled variables: what stays the same ('towel size, water amount, container'). If you don't control variables, results are meaningless.",
          },
          {
            heading: "Spotted problems",
            body: "Watch for hidden variables: 'Which toy car rolls furthest?' — if one car is heavier, that's a hidden variable. Change only the surface, use same car, same slope, same release. Fair tests need careful control.",
          },
        ],
        keyFormulas: [
          {
            name: "Variables",
            statement: "Change 1 + measure 1 + keep rest same",
          },
        ],
        workedExample: {
          problem:
            "Identify variables in: 'Does salt affect how fast ice melts?'",
          solution:
            "Change: salt amount. Measure: melting time. Keep same: ice size, water, temperature.",
        },
      },
      questions: [
        {
          id: "edps2-u4-va-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the dependent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What you change" },
              { id: "b", text: "What you measure" },
              { id: "c", text: "What you keep same" },
              { id: "d", text: "The question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependent variable",
                statement: "Measured result.",
              },
            ],
            steps: [
              {
                reasoning: "Dependent = what you observe/measure.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** What you measure",
            commonErrors: ["Confusing types."],
          },
        },
        {
          id: "edps2-u4-va-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'Does ramp angle affect car speed?', what do you keep the same?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ramp angle" },
              { id: "b", text: "The car, surface and release method" },
              { id: "c", text: "The speed" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Controlled variables",
                statement: "Keep same.",
              },
            ],
            steps: [
              {
                reasoning: "Only angle changes; car/surface/release same.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Car, surface, release",
            commonErrors: ["Changing too much."],
          },
        },
        {
          id: "edps2-u4-va-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the hidden variable: 'Which shoe makes you run fastest?' Student A wears trainers, Student B wears boots.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Hidden variables",
                statement: "Uncontrolled differences.",
              },
            ],
            steps: [
              {
                reasoning: "Different students = different fitness/ability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also different shoe types confound result.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fix: same student tests both shoes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Different students = hidden variable",
            commonErrors: ["Missing the student difference."],
          },
        },
        {
          id: "edps2-u4-va-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test for 'Does the type of surface affect how far a ball rolls?' List variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Variable control",
                statement: "All three types.",
              },
            ],
            steps: [
              { reasoning: "Change: surface type.", marks: 1, markCode: "M" },
              {
                reasoning: "Measure: rolling distance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Keep same: ball, release force, slope.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Surface changes; distance measured; ball/release/slope same",
            commonErrors: ["Missing controlled variables."],
          },
        },
      ],
    },
    {
      id: "edps2-u4-measure",
      title: "Accurate Measurement",
      skill: "Choose and use measuring tools correctly.",
      lesson: {
        sections: [
          {
            heading: "Choosing tools",
            body: "Match tool to measurement: ruler/tape measure for length (mm or cm), scales for mass (g or kg), measuring jug for volume (ml), thermometer for temperature (°C), timer/stopwatch for time (seconds). Choose the most precise tool available.",
          },
          {
            heading: "Reading measurements",
            body: "Read scales carefully: line up eye level with the measurement, check units, estimate to the nearest mark. Record units every time — '45 cm' not just '45'. If measuring multiple times, check consistency.",
          },
        ],
        keyFormulas: [
          { name: "Measurement", statement: "Right tool + eye level + units" },
        ],
        workedExample: {
          problem: "How do you measure temperature accurately?",
          solution:
            "Use a thermometer, wait for reading to settle, read at eye level, record in °C.",
        },
      },
      questions: [
        {
          id: "edps2-u4-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tool measures temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ruler" },
              { id: "b", text: "Thermometer" },
              { id: "c", text: "Scales" },
              { id: "d", text: "Measuring jug" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tools",
                statement: "Thermometer = temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Thermometer measures temperature.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Thermometer",
            commonErrors: ["Wrong tool."],
          },
        },
        {
          id: "edps2-u4-ms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why read measurements at eye level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's faster" },
              { id: "b", text: "To avoid parallax error" },
              { id: "c", text: "It looks professional" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Measurement accuracy",
                statement: "Eye level prevents error.",
              },
            ],
            steps: [
              {
                reasoning: "Angle causes wrong reading.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Avoid parallax error",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps2-u4-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You measure a pencil three times: 14.2cm, 14.3cm, 14.1cm. What does this tell you?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Consistency",
                statement: "Similar = reliable.",
              },
            ],
            steps: [
              {
                reasoning: "All close together (~14.2cm).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measurement is reliable/consistent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Could average or report range.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Consistent, reliable measurement",
            commonErrors: ["No interpretation."],
          },
        },
        {
          id: "edps2-u4-ms-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why should you always record units with measurements? Give an example of what could go wrong without them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Units", statement: "Units = meaning." },
            ],
            steps: [
              {
                reasoning: "Units tell what was measured.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: '45' could be cm, mm, inches — different meanings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Without units, data is ambiguous.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Units give meaning to numbers",
            commonErrors: ["No example."],
          },
        },
      ],
    },
    {
      id: "edps2-u4-analyse",
      title: "Analysing and Presenting Results",
      skill: "Organise results and identify patterns.",
      lesson: {
        sections: [
          {
            heading: "Organising data",
            body: "Use tables to organise results clearly: columns for each test, rows for each variable value. Add units to headings. If you repeated tests, add an 'average' column. Tables make patterns easy to spot.",
          },
          {
            heading: "Identifying patterns",
            body: "Look for: trends (as X increases, Y increases/decreases), anomalies (results that don't fit), comparisons (which is highest/lowest). Patterns are evidence — they answer your investigation question. State patterns clearly in your conclusion.",
          },
        ],
        keyFormulas: [
          {
            name: "Data analysis",
            statement: "Table + look for trends + anomalies",
          },
        ],
        workedExample: {
          problem:
            "Water added vs plant growth: 50ml→2cm, 100ml→5cm, 150ml→8cm. Pattern?",
          solution:
            "As water increases, growth increases — positive relationship.",
        },
      },
      questions: [
        {
          id: "edps2-u4-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an anomaly in results?",
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
              {
                kind: "definition",
                name: "Anomaly",
                statement: "Doesn't fit pattern.",
              },
            ],
            steps: [
              { reasoning: "Anomaly = odd one out.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Doesn't fit pattern",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps2-u4-an-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'trend' in data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single result" },
              { id: "b", text: "A pattern across results" },
              { id: "c", text: "An error" },
              { id: "d", text: "A measurement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trend", statement: "Pattern." },
            ],
            steps: [
              {
                reasoning: "Trend = consistent pattern.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Pattern across results",
            commonErrors: ["Confusing with anomaly."],
          },
        },
        {
          id: "edps2-u4-an-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results: ramp angle 10°→speed 5, 20°→speed 8, 30°→speed 12. Describe the trend.",
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
                reasoning: "As angle increases, speed increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive relationship/trend.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steeper angle → faster car",
            commonErrors: ["No trend identified."],
          },
        },
        {
          id: "edps2-u4-an-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In results 5, 6, 5, 20, 6 — what is the anomaly and why might it have happened?",
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
                reasoning: "20 is the anomaly — others are ~5-6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Possible causes: measurement error, different conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anomalies need explaining, not ignoring.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "20 is anomaly; possible error",
            commonErrors: ["Ignoring anomaly."],
          },
        },
      ],
    },
  ],
};
