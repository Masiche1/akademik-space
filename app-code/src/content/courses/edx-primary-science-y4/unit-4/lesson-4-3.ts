import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edps4-u4-lesson-4-3",
  code: "4-3",
  title: "Consolidating Science Skills",
  goal: "I CAN apply all enquiry skills in a complete investigation.",
  standards: ["Working Scientifically"],
  vocabulary: [
    { term: "Investigation", definition: "A planned scientific enquiry." },
    {
      term: "Conclusion",
      definition: "Answer to the question based on evidence.",
    },
    { term: "Evaluation", definition: "Assessment of investigation quality." },
    {
      term: "Scientific method",
      definition: "The systematic approach to enquiry.",
    },
  ],
  concepts: [
    {
      id: "edps4-u4-complete",
      title: "Complete investigation",
      skill: "Apply all enquiry skills in a full investigation.",
      lesson: {
        sections: [
          {
            heading: "Putting it all together",
            body: "A complete investigation uses all skills: question, hypothesis, plan variables, control CVs, choose equipment, record data, analyse patterns, conclude with evidence, evaluate quality. Each step builds on the last — skipping steps weakens your science.",
          },
          {
            heading: "Reviewing skills",
            body: "Check: Can you identify variables? Spot unfair tests? Choose displays? Write conclusions? Evaluate fairly? These skills work across all science topics — living things, materials, physical processes, Earth and space.",
          },
        ],
        keyFormulas: [
          {
            name: "Complete investigation",
            statement: "All enquiry skills together",
          },
        ],
        workedExample: {
          problem:
            "Plan a complete investigation: 'Does the type of liquid affect how fast it freezes?'",
          solution:
            "Question + hypothesis + variables (liquid type changes, freeze time measured) + method + data table + conclusion + evaluation.",
        },
      },
      questions: [
        {
          id: "edps4-u4-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the FIRST step of an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Test" },
              { id: "b", text: "Question" },
              { id: "c", text: "Conclude" },
              { id: "d", text: "Record" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "Question first.",
              },
            ],
            steps: [
              {
                reasoning: "Everything starts with a question.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Question",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps4-u4-cp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which skill comes LAST in an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question" },
              { id: "b", text: "Test" },
              { id: "c", text: "Evaluate" },
              { id: "d", text: "Record" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "Evaluate last.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation comes after conclusion.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Evaluate",
            commonErrors: ["Wrong step."],
          },
        },
        {
          id: "edps4-u4-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the 8 steps of the scientific method in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "All steps.",
              },
            ],
            steps: [
              { reasoning: "Question + hypothesis.", marks: 1, markCode: "M" },
              { reasoning: "Plan + test + record.", marks: 1, markCode: "M" },
              {
                reasoning: "Analyse + conclude + evaluate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8 steps in order",
            commonErrors: ["Missing steps."],
          },
        },
        {
          id: "edps4-u4-cp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a complete investigation plan for 'Does the type of material affect how much weight it can hold?' Include all variables, method and evaluation criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Complete plan",
                statement: "All elements.",
              },
            ],
            steps: [
              {
                reasoning: "Question + hypothesis stated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Variables identified and controlled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method + data table + evaluation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete investigation plan",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
    {
      id: "edps4-u4-skills",
      title: "Science Skills Across Topics",
      skill: "Apply enquiry skills to all science topics.",
      lesson: {
        sections: [
          {
            heading: "Universal enquiry skills",
            body: "The same enquiry skills apply across all science topics: living things, materials, physical processes, Earth and space. Whether testing which material is strongest, which liquid freezes fastest, or which circuit works best — question, predict, plan, test, record, analyse, conclude, evaluate.",
          },
          {
            heading: "Connecting topics",
            body: "Science topics connect: forces affect movement, electricity powers circuits, light enables vision, materials have properties. Understanding these connections helps you see science as a coherent subject, not isolated facts.",
          },
        ],
        keyFormulas: [
          {
            name: "Enquiry skills",
            statement: "Apply across all science topics",
          },
        ],
        workedExample: {
          problem:
            "How would you investigate 'Does the type of battery affect how long a torch lasts?'",
          solution:
            "IV=battery type, DV=torch time, CVs=same torch, same bulb, same starting charge.",
        },
      },
      questions: [
        {
          id: "edps4-u4-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enquiry skill applies to ALL science topics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only measuring" },
              { id: "b", text: "Fair testing and variables" },
              { id: "c", text: "Only recording" },
              { id: "d", text: "Only concluding" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Enquiry skills",
                statement: "Universal.",
              },
            ],
            steps: [
              {
                reasoning: "Fair testing applies everywhere.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Fair testing",
            commonErrors: ["Topic-specific thinking."],
          },
        },
        {
          id: "edps4-u4-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do science topics connect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They don't" },
              {
                id: "b",
                text: "Forces affect movement, electricity powers circuits",
              },
              { id: "c", text: "Only in labs" },
              { id: "d", text: "Only in books" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Topic connections",
                statement: "Science is coherent.",
              },
            ],
            steps: [
              { reasoning: "Topics interconnect.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Topics connect",
            commonErrors: ["Isolated thinking."],
          },
        },
        {
          id: "edps4-u4-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how enquiry skills help you understand science topics better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Enquiry skills",
                statement: "Deepen understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Testing ideas confirms or challenges understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measurement provides evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Active learning > passive reading.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Active testing deepens understanding",
            commonErrors: ["No clear link."],
          },
        },
        {
          id: "edps4-u4-sp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an investigation to test 'Does the type of surface affect how far a ball rolls?' Include all variables and method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Complete investigation",
                statement: "All elements.",
              },
            ],
            steps: [
              {
                reasoning: "Question + hypothesis stated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Variables: surface type=IV, distance=DV, same ball/force.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method + data table + conclusion criteria.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete investigation plan",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
    {
      id: "edps4-u4-real",
      title: "Science in Context",
      skill: "Apply enquiry skills to real-world problems.",
      lesson: {
        sections: [
          {
            heading: "Everyday applications",
            body: "Enquiry skills apply everywhere: cooking (why does bread rise?), sport (why do balls bounce?), medicine (testing treatments), weather forecasting, engineering. The same skills — question, predict, test, measure, analyse — work in all contexts.",
          },
          {
            heading: "Evaluating claims",
            body: "Enquiry skills help you evaluate claims critically: 'Does this supplement work?' 'Which phone has the best battery?' Look for evidence, check for fair testing, consider limitations. Scientific thinking helps you make informed decisions.",
          },
        ],
        keyFormulas: [
          {
            name: "Real-world enquiry",
            statement: "Apply skills to everyday problems",
          },
        ],
        workedExample: {
          problem:
            "How would you evaluate a claim that 'this plant food makes plants grow 50% faster'?",
          solution:
            "Look for evidence, check if tests were fair, consider who conducted the research.",
        },
      },
      questions: [
        {
          id: "edps4-u4-rw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an everyday example of scientific enquiry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only in labs" },
              { id: "b", text: "Cooking and testing recipes" },
              { id: "c", text: "Only in textbooks" },
              { id: "d", text: "Only in space" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Everyday science",
                statement: "Science is everywhere.",
              },
            ],
            steps: [
              {
                reasoning: "Cooking involves testing.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Cooking",
            commonErrors: ["Only lab thinking."],
          },
        },
        {
          id: "edps4-u4-rw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do enquiry skills help evaluate claims?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They don't" },
              { id: "b", text: "Look for evidence and check fairness" },
              { id: "c", text: "Only in labs" },
              { id: "d", text: "Only for scientists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Critical evaluation",
                statement: "Check evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Enquiry skills evaluate claims.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Check evidence",
            commonErrors: ["Believing everything."],
          },
        },
        {
          id: "edps4-u4-rw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How is weather forecasting an example of scientific enquiry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Real-world enquiry",
                statement: "Data + prediction.",
              },
            ],
            steps: [
              {
                reasoning: "Collects data (temperature, pressure).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyses patterns to predict.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Uses scientific method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Data + prediction",
            commonErrors: ["No enquiry link."],
          },
        },
        {
          id: "edps4-u4-rw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how scientific enquiry skills help in everyday problem-solving. Give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Enquiry skills",
                statement: "Question + test + analyse.",
              },
            ],
            steps: [
              {
                reasoning: "Example: fixing a bike — test solutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: choosing products — compare data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enquiry skills apply broadly.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Two everyday examples",
            commonErrors: ["Only one example."],
          },
        },
      ],
    },
  ],
};
