import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpe1-u4-lesson-4-1",
  code: "4-1",
  title: "Story Structure: Beginning, Middle and End",
  goal: "I CAN talk about the beginning, middle and end of a story.",
  standards: ["Year 1 Reading"],
  vocabulary: [
    {
      term: "Beginning",
      definition: "Where the story starts and characters are introduced.",
    },
    { term: "Middle", definition: "The main events and problem in the story." },
    {
      term: "End",
      definition: "How the story finishes and problems are solved.",
    },
    { term: "Retell", definition: "Tell a story again in your own words." },
  ],
  concepts: [
    {
      id: "edpe1-u4-storyparts",
      title: "Parts of a story",
      skill: "Identify beginning, middle and end in stories.",
      lesson: {
        sections: [
          {
            heading: "Beginning, middle, end",
            body: "Every story has three parts. The beginning introduces characters and setting. The middle has the main events and a problem. The end solves the problem. Knowing the parts helps you understand and retell stories.",
          },
          {
            heading: "Retelling stories",
            body: "To retell a story, say what happens in order: first (beginning), then (middle), finally (end). Use words like 'first', 'then', 'next', 'finally' to show the order.",
          },
        ],
        keyFormulas: [
          { name: "Story order", statement: "Beginning → Middle → End" },
        ],
        workedExample: {
          problem:
            "Retell: 'Red Riding Hood leaves home, meets wolf, wolf eats grandma, hunter saves them.'",
          solution:
            "First Red Riding Hood leaves home. Then she meets the wolf. Next the wolf tricks her. Finally the hunter saves them.",
        },
      },
      questions: [
        {
          id: "edpe1-u4-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a story introduces the characters?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beginning" },
              { id: "b", text: "Middle" },
              { id: "c", text: "End" },
              { id: "d", text: "Problem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Story parts",
                statement: "Beginning introduces characters.",
              },
            ],
            steps: [
              {
                reasoning: "Characters are introduced at the start.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Beginning",
            commonErrors: ["Confusing middle and end."],
          },
        },
        {
          id: "edpe1-u4-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What usually happens in the middle of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The problem is solved" },
              { id: "b", text: "The main events and problem happen" },
              { id: "c", text: "The story ends" },
              { id: "d", text: "Nothing happens" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Story parts",
                statement: "Middle has events and problem.",
              },
            ],
            steps: [
              {
                reasoning: "Main events and the problem are in the middle.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Main events and problem",
            commonErrors: ["Thinking the end has the problem."],
          },
        },
        {
          id: "edpe1-u4-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these in order: (a) The prince kisses the frog. (b) A frog asks for help. (c) The frog turns into a prince.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequencing",
                statement: "Order: b, a, c.",
              },
            ],
            steps: [
              {
                reasoning: "First the frog asks for help.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then the prince kisses the frog.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Finally the frog turns into a prince.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b, a, c",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpe1-u4-sp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Tell the beginning, middle and end of 'The Three Little Pigs'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story structure",
                statement: "Beginning, middle, end identified.",
              },
            ],
            steps: [
              {
                reasoning: "Beginning: three pigs build houses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Middle: wolf blows down straw and stick houses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "End: brick house survives; wolf runs away.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Pigs build → wolf attacks → brick house wins",
            commonErrors: ["Missing parts."],
          },
        },
      ],
    },
    {
      id: "edpe1-u4-reading",
      title: "Answering Questions About Stories",
      skill: "Find answers in the text and use evidence.",
      lesson: {
        sections: [
          {
            heading: "Finding answers",
            body: "To answer questions about a story, look back at the text. Who? What? Where? When? Why? Answers are often in the words themselves. Point to or say the words that give the answer.",
          },
          {
            heading: "Using evidence",
            body: "Good answers use the story's words. If asked 'What did Sam eat?', find the sentence about Sam eating. Say the answer and point to the words that prove it.",
          },
        ],
        keyFormulas: [
          { name: "Question words", statement: "Who, what, where, when, why" },
        ],
        workedExample: {
          problem:
            "Story: 'Tom has a red bike.' Question: What colour is Tom's bike?",
          solution: "Red. The story says 'Tom has a red bike.'",
        },
      },
      questions: [
        {
          id: "edpe1-u4-rq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Story: 'The dog ran to the park.' Where did the dog run?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Home" },
              { id: "b", text: "The park" },
              { id: "c", text: "School" },
              { id: "d", text: "The shop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Finding answers",
                statement: "Answer is in the text.",
              },
            ],
            steps: [
              {
                reasoning: "The story says the dog ran to the park.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The park",
            commonErrors: ["Guessing instead of reading."],
          },
        },
        {
          id: "edpe1-u4-rq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Story: 'Anna wore a blue hat.' What did Anna wear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A red coat" },
              { id: "b", text: "A blue hat" },
              { id: "c", text: "A green scarf" },
              { id: "d", text: "A yellow dress" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Finding answers",
                statement: "Blue hat is in the text.",
              },
            ],
            steps: [
              {
                reasoning: "The story says Anna wore a blue hat.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A blue hat",
            commonErrors: ["Not using the text."],
          },
        },
        {
          id: "edpe1-u4-rq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Story: 'Ben lost his ball in the garden.' What happened to Ben's ball?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Finding answers",
                statement: "Ball was lost in the garden.",
              },
            ],
            steps: [
              {
                reasoning: "Find the sentence about the ball.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Ben lost his ball.", marks: 1, markCode: "M" },
              {
                reasoning: "It was lost in the garden.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "He lost it in the garden",
            commonErrors: ["Incomplete answer."],
          },
        },
        {
          id: "edpe1-u4-rq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Story: 'Mia found a cat under the table. It was grey and small.' Answer two questions: What colour was the cat? Where was it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Finding answers",
                statement: "Grey; under the table.",
              },
            ],
            steps: [
              {
                reasoning: "Colour: grey — from 'It was grey'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Place: under the table — from 'found a cat under the table'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both answers with evidence.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Grey; under the table",
            commonErrors: ["Missing one answer."],
          },
        },
      ],
    },
  ],
};
