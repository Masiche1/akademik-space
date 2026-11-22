import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "cilgp-u1-lesson-1-5",
  code: "1-5",
  title: "Reflection and Personal Action",
  goal: "I CAN reflect on my learning and plan personal action on global issues.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Reflection",
    "Cambridge Global Perspectives skills: reflection",
  ],

  vocabulary: [
    {
      term: "Reflection",
      definition: "Thinking about experiences to learn from them.",
    },
    { term: "Action plan", definition: "Steps to take to address an issue." },
    { term: "Agency", definition: "Ability to influence change." },
    {
      term: "Sustainability",
      definition: "Meeting needs without harming future.",
    },
    {
      term: "Empathy",
      definition: "Understanding others' feelings/perspectives.",
    },
    {
      term: "Accountability",
      definition: "Taking responsibility for actions.",
    },
  ],
  concepts: [
    {
      id: "cilgp-u1-s5-refl",
      title: "Reflection and action",
      skill:
        "Reflect critically and plan meaningful action at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Critical reflection",
            body: "Reflection asks: What did I learn? What assumptions did I challenge? How has my thinking changed? What could I do differently? It's not just 'what happened' but 'what does it mean'.",
          },
          {
            heading: "Personal action",
            body: "Action plans should be realistic: what specifically will you do, by when, and how will you measure impact? Small consistent actions beat grand gestures.",
          },
        ],
        keyFormulas: [
          {
            name: "Reflection",
            statement: "what happened → what it means → what changes",
          },
          {
            name: "Action plan",
            statement: "specific + realistic + measurable",
          },
        ],
        workedExample: {
          problem:
            "After researching plastic pollution, write a personal action plan.",
          solution:
            "This month: carry reusable bottle + bag. This term: start school recycling club. Measure: count single-use items avoided weekly.",
        },
      },
      questions: [
        {
          id: "cilgp-u1-rf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is reflection in Global Perspectives?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Writing a summary",
              },
              {
                id: "b",
                text: "Thinking about experiences to learn from them",
              },
              {
                id: "c",
                text: "Copying notes",
              },
              {
                id: "d",
                text: "Looking in a mirror",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement: "Learning from experience.",
              },
            ],
            steps: [
              {
                reasoning: "Reflection = deeper thinking about experience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Learning from experience",
          },
        },
        {
          id: "cilgp-u1-rf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes a good action plan? Give two features.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Action plan",
                statement: "Specific, realistic, measurable.",
              },
            ],
            steps: [
              {
                reasoning: "Specific steps with timeline.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Realistic + measurable impact.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Specific + realistic + measurable",
          },
        },
        {
          id: "cilgp-u1-rf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between 'what happened' and 'what it means' in reflection?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection depth",
                statement: "Event vs meaning.",
              },
            ],
            steps: [
              {
                reasoning: "'What happened' = description of event.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "'What it means' = interpretation/learning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deep reflection goes beyond description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Description vs interpretation",
          },
        },
        {
          id: "cilgp-u1-rf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reflection, action plan, agency, sustainability, empathy, accountability. (b) Why is reflection important in GP? (c) What questions does critical reflection ask? (d) What makes an action plan realistic? (e) Give an example of small sustainable action. (f) What is empathy in global issues? (g) How do you measure action impact? (h) Write a reflection + action plan after researching 'food waste'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reflection",
                statement: "Learning and action.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Deepens learning, changes thinking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) What learned/assumptions challenged/changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Achievable steps + resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid small action example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Understanding others' perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Metrics/counts/observable change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid reflection + action plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reflection and personal action planning.",
          },
        },
        {
          id: "cilgp-u1-rf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an action plan?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of presentation",
              },
              {
                id: "b",
                text: "A research survey",
              },
              {
                id: "c",
                text: "Specific steps to take to address an issue",
              },
              {
                id: "d",
                text: "A list of sources",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Action plan",
                statement: "Steps to address an issue.",
              },
            ],
            steps: [
              {
                reasoning: "Action plans turn learning into concrete steps.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Specific steps to address an issue",
          },
        },
        {
          id: "cilgp-u1-rf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student writes an action plan with 5 steps to be completed over 5 weeks. If one step is done each week, how many steps remain after 3 weeks?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Remaining work",
                statement: "Total minus completed.",
              },
            ],
            steps: [
              {
                reasoning: "3 steps done, 5 - 3 = 2 remaining.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilgp-u1-rf-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one question that critical reflection should ask, and explain why it matters.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Critical reflection",
                statement: "Deep questions about learning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. 'What assumptions did I challenge?' — goes beyond description.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It matters because it changes thinking and future action.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "e.g. 'What will I do differently?' — drives improvement",
          },
        },
        {
          id: "cilgp-u1-rf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'agency' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of evidence",
              },
              {
                id: "b",
                text: "A research tool",
              },
              {
                id: "c",
                text: "The ability to influence change",
              },
              {
                id: "d",
                text: "A government department",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agency",
                statement: "Power to act.",
              },
            ],
            steps: [
              {
                reasoning: "Agency = capacity to make a difference.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Ability to influence change",
          },
        },
        {
          id: "cilgp-u1-rf-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student uses 10 single-use bottles per week and switches to a reusable bottle for 6 of them. Over one week, how many disposable bottles are avoided?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
                unit: "bottles",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Impact measurement",
                statement: "Baseline minus new usage.",
              },
            ],
            steps: [
              {
                reasoning:
                  "10 total, 6 replaced by reusable = 6 disposable avoided.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 6 bottles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6 bottles",
          },
        },
        {
          id: "cilgp-u1-rf-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a short reflection on how your thinking about poverty changed after researching it. Include what you used to think, what you think now, and why.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Critical reflection",
                statement: "Before/after thinking with reasons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "States previous assumption, e.g. poverty is personal failure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "States new understanding, e.g. structural causes matter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains what evidence changed the view.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Before/after reflection with evidence",
          },
        },
        {
          id: "cilgp-u1-rf-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are 'small consistent actions' often better than 'grand gestures' in addressing global issues?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They are easier to announce",
              },
              {
                id: "b",
                text: "They are sustainable habits that can be maintained long-term",
              },
              {
                id: "c",
                text: "They always solve the problem instantly",
              },
              {
                id: "d",
                text: "They require no planning",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Personal action",
                statement: "Consistency beats intensity.",
              },
            ],
            steps: [
              {
                reasoning: "Small habits persist; grand gestures fade.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sustainable habits last longer",
          },
        },
        {
          id: "cilgp-u1-rf-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An action plan has 3 actions, each taking 20 minutes per week. How many total minutes per week does the plan require?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 60,
                unit: "minutes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Total time",
                statement: "Per-action time x number of actions.",
              },
            ],
            steps: [
              {
                reasoning: "20 x 3 = 60 minutes per week.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 60 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60 minutes",
          },
        },
        {
          id: "cilgp-u1-rf-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "This action plan is weak: 'I will help the environment somehow.' Rewrite it as a strong action plan.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Action plan quality",
                statement: "Specific, realistic, measurable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies vagueness: no specific action, timeline or measure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adds a specific action, e.g. 'carry a reusable bottle to school 4 days a week'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adds timeline and measurement, e.g. 'for one term; count bottles saved weekly'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific action + timeline + measure",
          },
        },
        {
          id: "cilgp-u1-rf-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is an example of a measurable impact of a personal action?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'I thought about it a lot'",
              },
              {
                id: "b",
                text: "'I recycled 12 bottles this week'",
              },
              {
                id: "c",
                text: "'I feel more eco-friendly now'",
              },
              {
                id: "d",
                text: "'I tried to do better'",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Measurable impact",
                statement: "Countable/observable results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Counting items gives measurable data; feelings do not.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "'I recycled 12 bottles this week'",
          },
        },
        {
          id: "cilgp-u1-rf-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A household produces 8 kg of waste per week. After starting a composting plan, waste drops to 5 kg per week. What is the percentage reduction?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 37.5,
                unit: "%",
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage change",
                statement: "(Old - new) / old x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Reduction = 8 - 5 = 3 kg.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "3 / 8 = 0.375.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.375 x 100 = 37.5% reduction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "37.5%",
          },
        },
        {
          id: "cilgp-u1-rf-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "After researching 'food waste', write: (a) one reflection on what you learned, (b) one assumption you challenged, (c) one realistic action you will take, (d) how you will measure its impact.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reflection and action",
                statement: "Learning + challenge + action + measure.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Valid specific learning about food waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Challenged assumption, e.g. 'waste is only a household problem'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Realistic action, e.g. plan weekly meals to use leftovers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Measurable impact, e.g. weigh food waste weekly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reflection, challenged assumption, action and measure",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-rf-notes",
      title: "Reflection — notes",
      summary:
        "Reflect on learning and challenge assumptions; plan specific, measurable personal actions.",
      sections: [
        {
          heading: "Key idea",
          body: "Reflection turns experience into learning.",
        },
        {
          heading: "Action",
          body: "Small consistent actions > grand gestures.",
        },
      ],
    },
  ],
};
