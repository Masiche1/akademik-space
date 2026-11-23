import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpm1-u4-lesson-4-3",
  code: "4-3",
  title: "Data Handling and Investigation",
  goal: "I CAN collect, record and interpret simple data.",
  standards: ["Year 1 Data handling"],
  vocabulary: [
    { term: "Data", definition: "Information collected about things." },
    { term: "Tally chart", definition: "A chart for counting using marks." },
    { term: "Pictogram", definition: "A chart using pictures to show data." },
    { term: "Survey", definition: "Asking questions to collect data." },
  ],
  concepts: [
    {
      id: "edpm1-u4-data",
      title: "Collecting and Recording Data",
      skill: "Use tally charts and pictograms to record information.",
      lesson: {
        sections: [
          {
            heading: "Tally charts",
            body: "A tally chart counts things quickly. Make a mark (|) for each one you count. Every fifth mark, draw a line through the four — this makes counting easier. At the end, count the groups of five and any extra marks to get the total.",
          },
          {
            heading: "Pictograms",
            body: "A pictogram uses pictures or symbols instead of numbers — one picture might mean 1, or might mean 5 (check the key!). Each row shows a category and how many symbols it has. Pictograms make data easy to compare at a glance.",
          },
        ],
        keyFormulas: [
          {
            name: "Tally",
            statement: "Each mark = 1; every 5th crosses through",
          },
        ],
        workedExample: {
          problem: "In a tally chart, a row shows . How many is that?",
          solution: "10 — two groups of 5.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a tally chart used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drawing pictures" },
              { id: "b", text: "Counting things" },
              { id: "c", text: "Writing stories" },
              { id: "d", text: "Making maps" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tally chart",
                statement: "Counting tool.",
              },
            ],
            steps: [
              { reasoning: "Tally = counting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Counting",
            commonErrors: ["Wrong use."],
          },
        },
        {
          id: "edpm1-u4-data-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a pictogram, one star might represent how many?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always 1" },
              { id: "b", text: "Always 5" },
              { id: "c", text: "Depends on the key" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pictograms",
                statement: "Check the key.",
              },
            ],
            steps: [
              { reasoning: "Key tells the value.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(c)** Depends on key",
            commonErrors: ["Assumed value."],
          },
        },
        {
          id: "edpm1-u4-data-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You count favourite fruits: apple , apple , banana , banana . Which fruit is most popular?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data interpretation",
                statement: "Compare totals.",
              },
            ],
            steps: [
              {
                reasoning: "Apples = 10, bananas = 5.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Apples have more.", marks: 1, markCode: "M" },
              { reasoning: "Answer: apple.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Apple",
            commonErrors: ["Wrong comparison."],
          },
        },
        {
          id: "edpm1-u4-data-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a tally chart to find out your class's favourite colour. Explain how you would collect and present the data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data collection",
                statement: "Plan + collect + present.",
              },
            ],
            steps: [
              {
                reasoning: "Decide colours to include.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ask each person and tally answers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Present in tally chart or pictogram with key.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Colours+tally+present",
            commonErrors: ["No method."],
          },
        },
      ],
    },
    {
      id: "edpm1-u4-investigate",
      title: "Simple Investigations",
      skill: "Plan and carry out simple scientific-style investigations.",
      lesson: {
        sections: [
          {
            heading: "Asking questions",
            body: "Maths investigations ask questions like 'Which container holds more?' or 'What happens when I double the number?' You predict an answer (a hypothesis), test it, record results, and see if your prediction was right.",
          },
          {
            heading: "Fair testing",
            body: "A fair test changes only one thing at a time. To see which cup holds more, use same-size cups and same liquid — only change the cup shape. Record what you did and what happened so someone else could repeat it.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Investigate: does a longer ramp make a toy car go faster?",
          solution:
            "Change only ramp length; keep car and ramp surface the same; time the car.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-inv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A proven fact" },
              { id: "b", text: "A prediction you test" },
              { id: "c", text: "A type of data" },
              { id: "d", text: "A result" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothesis",
                statement: "Testable prediction.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothesis = prediction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Prediction",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpm1-u4-inv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a fair test, how many things should you change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All of them" },
              { id: "b", text: "Only one" },
              { id: "c", text: "Two" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fair test",
                statement: "One variable.",
              },
            ],
            steps: [
              { reasoning: "One variable = fair.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** One",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edpm1-u4-inv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Plan an investigation: 'Does a bigger cup hold more water?' What will you keep the same and what will you change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Investigation planning",
                statement: "Control variables.",
              },
            ],
            steps: [
              { reasoning: "Change cup size only.", marks: 1, markCode: "M" },
              {
                reasoning: "Keep liquid type and pouring method same.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measure water in each cup.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Change size; keep rest same",
            commonErrors: ["No variables identified."],
          },
        },
        {
          id: "edpm1-u4-inv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You predict a long ramp makes cars go faster. After testing, cars went slower on the long ramp. Explain what this means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Results vs prediction",
                statement: "Prediction can be wrong.",
              },
            ],
            steps: [
              { reasoning: "Prediction was wrong.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Long ramp = slower cars (perhaps more friction or height).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Results matter more than predictions — that's science.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Prediction wrong; results rule",
            commonErrors: ["Ignoring results."],
          },
        },
      ],
    },
    {
      id: "edpm1-u4-summary",
      title: "Year 1 Maths Summary",
      skill: "Review all Year 1 maths skills.",
      lesson: {
        sections: [
          {
            heading: "Number skills",
            body: "Count to 100, place value (tens and ones), add and subtract within 20, number bonds, multiply and divide with 2, 5 and 10 tables, halves and quarters, odd and even.",
          },
          {
            heading: "Other skills",
            body: "Shapes (2D and 3D), position and direction, measure (length, height, mass), time, money, patterns, data handling and problem solving. Practise regularly to build fluency.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "List the main Year 1 maths topics.",
          solution:
            "Number, fractions, shape, measure, time, money, patterns, data.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-sum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the highest number Year 1 students count to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "50" },
              { id: "c", text: "100" },
              { id: "d", text: "1000" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Year 1 range",
                statement: "Count to 100.",
              },
            ],
            steps: [{ reasoning: "100 = range.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 100",
            commonErrors: ["Wrong number."],
          },
        },
        {
          id: "edpm1-u4-sum-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which times tables does Year 1 focus on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3, 4, 6" },
              { id: "b", text: "2, 5, 10" },
              { id: "c", text: "7, 8, 9" },
              { id: "d", text: "11, 12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Year 1 tables",
                statement: "2, 5, 10.",
              },
            ],
            steps: [{ reasoning: "2, 5, 10.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 2, 5, 10",
            commonErrors: ["Wrong tables."],
          },
        },
        {
          id: "edpm1-u4-sum-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three topics covered in Year 1 maths.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Year 1 coverage",
                statement: "Number, shape, measure, etc.",
              },
            ],
            steps: [
              {
                reasoning: "Topic 1, e.g. number and place value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Topic 2, e.g. fractions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Topic 3, e.g. shape or measure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. number+fractions+shape",
            commonErrors: ["Wrong topics."],
          },
        },
        {
          id: "edpm1-u4-sum-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it important to check your answers in maths? Explain with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Checking",
                statement: "Catches mistakes.",
              },
            ],
            steps: [
              {
                reasoning: "Checking catches errors before finishing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — 20 - 8 = 28 is impossible; correct is 12.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds confidence and accuracy.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Catches errors+example+confidence",
            commonErrors: ["No example."],
          },
        },
      ],
    },
  ],
};
