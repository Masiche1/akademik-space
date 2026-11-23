import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edps2-u4-lesson-4-1",
  code: "4-1",
  title: "Planning Investigations",
  goal: "I CAN plan an investigation with a clear question and fair test.",
  standards: ["Working Scientifically"],
  vocabulary: [
    {
      term: "Investigation",
      definition: "A careful scientific study to answer a question.",
    },
    { term: "Question", definition: "What you want to find out." },
    {
      term: "Hypothesis",
      definition: "Your predicted answer to the question.",
    },
    {
      term: "Variable",
      definition: "Something that can change in an experiment.",
    },
  ],
  concepts: [
    {
      id: "edps2-u4-plan",
      title: "Planning an investigation",
      skill: "Turn a question into a testable investigation.",
      lesson: {
        sections: [
          {
            heading: "Question to test",
            body: "Good investigations start with a clear question: 'Which material is the best insulator?' Not 'Is insulation good?' — that's too vague. Your question tells you what to measure and what to keep the same.",
          },
          {
            heading: "Variables",
            body: "There are three types: the variable you CHANGE (independent), what you MEASURE (dependent), and what you KEEP THE SAME (controlled). For 'Does temperature affect how fast ice melts?': change = temperature, measure = melting time, keep same = ice size, container.",
          },
        ],
        keyFormulas: [
          {
            name: "Investigation",
            statement: "Question + change 1 thing + measure + keep rest same",
          },
        ],
        workedExample: {
          problem: "Turn 'Do plants like water?' into a testable question.",
          solution: "'Does the amount of water affect how much a plant grows?'",
        },
      },
      questions: [
        {
          id: "edps2-u4-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should an investigation question be?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very vague" },
              { id: "b", text: "Clear and testable" },
              { id: "c", text: "Impossible to answer" },
              { id: "d", text: "Very long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Investigation",
                statement: "Testable question.",
              },
            ],
            steps: [
              {
                reasoning: "Clear questions can be tested.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Clear and testable",
            commonErrors: ["Vague question."],
          },
        },
        {
          id: "edps2-u4-pl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'Does light affect plant growth?', what do you change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plant type" },
              { id: "b", text: "The amount of light" },
              { id: "c", text: "The soil" },
              { id: "d", text: "The pot" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Variable", statement: "Light amount." },
            ],
            steps: [
              {
                reasoning: "Light is the thing being tested.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Amount of light",
            commonErrors: ["Wrong variable."],
          },
        },
        {
          id: "edps2-u4-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a testable investigation question about which paper is strongest.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Testable question",
                statement: "Clear + measurable.",
              },
            ],
            steps: [
              {
                reasoning: "Names the variable: paper type.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Names what's measured: strength/weight held.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Testable paper strength question",
            commonErrors: ["Vague or untestable."],
          },
        },
        {
          id: "edps2-u4-pl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between the variable you change and what you measure. Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Variables",
                statement: "Change vs measure.",
              },
            ],
            steps: [
              {
                reasoning: "Change = what you manipulate (e.g., water amount).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measure = what you observe (e.g., plant height).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear example.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Change input, measure output",
            commonErrors: ["Confused variables."],
          },
        },
      ],
    },
    {
      id: "edps2-u4-method",
      title: "Method and Equipment",
      skill: "Write clear method steps and choose equipment.",
      lesson: {
        sections: [
          {
            heading: "Writing a method",
            body: "A method lists steps in order: what you need, what you do first, second, third. Be specific: 'Measure 100 ml of water' not 'add some water'. Someone else should be able to follow your method exactly.",
          },
          {
            heading: "Choosing equipment",
            body: "Choose tools that measure what you need: rulers for length, scales for mass, measuring jugs for volume, timers for time, thermometers for temperature. Safety equipment: goggles, gloves. List everything before you start.",
          },
        ],
        keyFormulas: [
          {
            name: "Method",
            statement: "Steps in order + specific measurements",
          },
        ],
        workedExample: {
          problem:
            "Write the first step for testing which material insulates best.",
          solution:
            "Wrap each cup in a different material (foil, bubble wrap, newspaper) and secure with tape.",
        },
      },
      questions: [
        {
          id: "edps2-u4-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a method include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the result" },
              { id: "b", text: "Steps in order" },
              { id: "c", text: "Your opinion" },
              { id: "d", text: "A story" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Method", statement: "Ordered steps." },
            ],
            steps: [
              {
                reasoning: "Method = procedure steps.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Steps in order",
            commonErrors: ["Missing steps."],
          },
        },
        {
          id: "edps2-u4-me-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which tool measures mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ruler" },
              { id: "b", text: "Scales" },
              { id: "c", text: "Measuring jug" },
              { id: "d", text: "Thermometer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equipment",
                statement: "Scales = mass.",
              },
            ],
            steps: [
              {
                reasoning: "Scales measure mass/weight.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Scales",
            commonErrors: ["Wrong tool."],
          },
        },
        {
          id: "edps2-u4-me-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this method step: 'Add some water to the plant.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Specific method",
                statement: "Exact amounts.",
              },
            ],
            steps: [
              {
                reasoning: "Specifies amount: 'Add 100 ml of water'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Specifies when/how: 'once daily'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear, repeatable instruction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Add 100 ml water daily",
            commonErrors: ["Still vague."],
          },
        },
        {
          id: "edps2-u4-me-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "List equipment needed for: 'Which surface makes a ball bounce highest?' Explain each choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equipment choice",
                statement: "Tools + reasons.",
              },
            ],
            steps: [
              {
                reasoning: "Ball, surfaces (carpet, tile, grass).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ruler to measure bounce height.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasons linked to measurements.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Equipment with reasons",
            commonErrors: ["No reasons."],
          },
        },
      ],
    },
    {
      id: "edps2-u4-data",
      title: "Recording and Analysing Data",
      skill: "Record results accurately and spot patterns.",
      lesson: {
        sections: [
          {
            heading: "Accurate recording",
            body: "Record every measurement as you take it — don't rely on memory. Use tables with column headings: test, result 1, result 2, average. Repeat tests to check reliability. Note anything unusual that happens during the investigation.",
          },
          {
            heading: "Analysing results",
            body: "Look for patterns: which is highest/lowest? Is there a trend? Calculate averages if you repeated tests. Compare results to your prediction. A pattern in data is evidence — use it to answer your question.",
          },
        ],
        keyFormulas: [
          { name: "Data", statement: "Record as you go + look for patterns" },
        ],
        workedExample: {
          problem:
            "Bounce heights: carpet 20cm, tile 45cm, grass 15cm. What's the pattern?",
          solution:
            "Tile is highest, grass lowest — hard surfaces bounce higher than soft.",
        },
      },
      questions: [
        {
          id: "edps2-u4-da-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should you record measurements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the end from memory" },
              { id: "b", text: "As you take them" },
              { id: "c", text: "Never" },
              { id: "d", text: "Only if you remember" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Recording", statement: "Immediately." },
            ],
            steps: [
              {
                reasoning: "Record immediately for accuracy.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** As you take them",
            commonErrors: ["Relying on memory."],
          },
        },
        {
          id: "edps2-u4-da-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why repeat a test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To waste time" },
              { id: "b", text: "To check results are reliable" },
              { id: "c", text: "Because it's fun" },
              { id: "d", text: "To confuse results" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliability",
                statement: "Repeats check consistency.",
              },
            ],
            steps: [
              {
                reasoning: "Repeats show if results are consistent.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Check reliability",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps2-u4-da-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results: trial 1 = 30cm, trial 2 = 34cm, trial 3 = 32cm. What is the pattern and average?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data analysis",
                statement: "Average + pattern.",
              },
            ],
            steps: [
              {
                reasoning: "Average = (30+34+32)/3 = 32cm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Results are consistent around 32.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Average 32cm, consistent",
            commonErrors: ["No average or pattern."],
          },
        },
        {
          id: "edps2-u4-da-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your results show fabric insulates best, but you only tested once. Is your conclusion reliable? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliability",
                statement: "Single test = uncertain.",
              },
            ],
            steps: [
              {
                reasoning: "One test might be a fluke.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Repeats would confirm.", marks: 1, markCode: "M" },
              {
                reasoning: "Conclusion is suggestive but not certain.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Suggestive but needs repeats",
            commonErrors: ["Treating as certain."],
          },
        },
      ],
    },
    {
      id: "edps2-u4-evaluate",
      title: "Evaluating Investigations",
      skill: "Judge if an investigation was fair and suggest improvements.",
      lesson: {
        sections: [
          {
            heading: "Checking fairness",
            body: "After testing, ask: Did I change only one thing? Did I keep everything else the same? Did I measure accurately? Were there any problems? If two things changed, results are unreliable — you can't tell which caused the outcome.",
          },
          {
            heading: "Improving investigations",
            body: "Good scientists improve their work: repeat tests, use more precise tools, control more variables, test edge cases. 'If I did it again, I would...' shows scientific thinking — every investigation can be better.",
          },
        ],
        keyFormulas: [
          {
            name: "Evaluation",
            statement: "Fair? + reliable? + improvements?",
          },
        ],
        workedExample: {
          problem:
            "You tested plant growth but one plant got more sunlight. Fair?",
          solution:
            "Unfair — two variables changed (plant type + light). Can't isolate cause.",
        },
      },
      questions: [
        {
          id: "edps2-u4-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes an investigation unreliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing one variable" },
              { id: "b", text: "Changing two or more variables" },
              { id: "c", text: "Recording results" },
              { id: "d", text: "Making a prediction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliability",
                statement: "Multiple variables = unreliable.",
              },
            ],
            steps: [
              {
                reasoning: "Can't isolate cause with 2+ changes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Multiple variables",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps2-u4-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'reliable' mean in science?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fast" },
              { id: "b", text: "Consistent and trustworthy" },
              { id: "c", text: "Expensive" },
              { id: "d", text: "Complicated" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliable",
                statement: "Consistent.",
              },
            ],
            steps: [
              {
                reasoning: "Reliable = repeatable results.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Consistent/trustworthy",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps2-u4-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Suggest two improvements to an investigation that tested which ball bounces highest.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Improvement",
                statement: "Two valid suggestions.",
              },
            ],
            steps: [
              {
                reasoning: "Repeat test for reliability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use ruler for precise measurement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Control more variables (same drop height).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two valid improvements",
            commonErrors: ["Generic or unsafe."],
          },
        },
        {
          id: "edps2-u4-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why scientists repeat investigations even when they get the 'right' answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliability",
                statement: "Confirm + check anomalies.",
              },
            ],
            steps: [
              {
                reasoning: "Confirm result isn't a fluke.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check for anomalies or errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds confidence in conclusions.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Confirm + check errors",
            commonErrors: ["One-time testing."],
          },
        },
      ],
    },
  ],
};
