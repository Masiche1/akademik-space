import type { Lesson } from "../../../types.ts";

export const exam34: Lesson = {
  id: "edps1-u3-exam4",
  code: "3-X4",
  title: "Exam Practice 4: Seasons, Plants and Everyday Science",
  goal: "I CAN answer seasons, plants and everyday science exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Seasons, Plants and Everyday Science",
  ],

  vocabulary: [
    {
      term: "Fair test",
      definition: "An investigation where only one variable is changed.",
    },
    {
      term: "Independent variable",
      definition: "The thing you deliberately change in an investigation.",
    },
    {
      term: "Dependent variable",
      definition: "The thing you measure or observe as a result.",
    },
    {
      term: "Conclusion",
      definition: "What the results show, linked back to the question.",
    },
  ],
  concepts: [
    {
      id: "edps1-u3-exam4-concept",
      title: "Seasons, Plants and Everyday Science — exam practice",
      skill:
        "Apply seasons, plants and everyday science techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise seasons, plants and everyday science in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for seasons, plants and everyday science.",
          },
        ],
      },
      questions: [
        {
          id: "edps1-u3-x4-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Think about safety" },
              { id: "b", text: "Start immediately" },
              { id: "c", text: "Guess the answer" },
              { id: "d", text: "Leave equipment everywhere" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Safety first.",
              },
            ],
            steps: [{ reasoning: "Safety first.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Think about safety",
          },
        },
        {
          id: "edps1-u3-x4-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a living thing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "dog" },
              { id: "b", text: "rock" },
              { id: "c", text: "chair" },
              { id: "d", text: "cloud" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living things",
                statement: "Dogs grow, eat and reproduce.",
              },
            ],
            steps: [
              {
                reasoning: "Dogs grow, eat and reproduce.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** dog",
          },
        },
        {
          id: "edps1-u3-x4-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which material is waterproof?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "plastic" },
              { id: "b", text: "paper" },
              { id: "c", text: "cloth" },
              { id: "d", text: "sponge" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Materials",
                statement: "Plastic doesn't absorb water.",
              },
            ],
            steps: [
              {
                reasoning: "Plastic doesn't absorb water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** plastic",
          },
        },
        {
          id: "edps1-u3-x4-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What force pulls things towards the ground?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "gravity" },
              { id: "b", text: "magnetism" },
              { id: "c", text: "friction" },
              { id: "d", text: "upthrust" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical processes",
                statement: "Gravity pulls down.",
              },
            ],
            steps: [
              { reasoning: "Gravity pulls down.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** gravity",
          },
        },
        {
          id: "edps1-u3-x4-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What gives us light and heat during the day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the Sun" },
              { id: "b", text: "the Moon" },
              { id: "c", text: "stars" },
              { id: "d", text: "clouds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth and space",
                statement: "The Sun is our star.",
              },
            ],
            steps: [
              { reasoning: "The Sun is our star.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** the Sun",
          },
        },
        {
          id: "edps1-u3-x4-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Think about safety" },
              { id: "b", text: "Start immediately" },
              { id: "c", text: "Guess the answer" },
              { id: "d", text: "Leave equipment everywhere" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Safety first.",
              },
            ],
            steps: [{ reasoning: "Safety first.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Think about safety",
          },
        },
        {
          id: "edps1-u3-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What do plants need to grow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "light, water and air" },
              { id: "b", text: "only soil" },
              { id: "c", text: "only light" },
              { id: "d", text: "nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living things",
                statement: "Plants need light, water, air and nutrients.",
              },
            ],
            steps: [
              {
                reasoning: "Plants need light, water, air and nutrients.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** light, water and air",
          },
        },
        {
          id: "edps1-u3-x4-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which material is waterproof?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "plastic" },
              { id: "b", text: "paper" },
              { id: "c", text: "cloth" },
              { id: "d", text: "sponge" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Materials",
                statement: "Plastic doesn't absorb water.",
              },
            ],
            steps: [
              {
                reasoning: "Plastic doesn't absorb water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** plastic",
          },
        },
        {
          id: "edps1-u3-x4-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What force pulls things towards the ground?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "gravity" },
              { id: "b", text: "magnetism" },
              { id: "c", text: "friction" },
              { id: "d", text: "upthrust" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical processes",
                statement: "Gravity pulls down.",
              },
            ],
            steps: [
              { reasoning: "Gravity pulls down.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** gravity",
          },
        },
        {
          id: "edps1-u3-x4-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What gives us light and heat during the day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the Sun" },
              { id: "b", text: "the Moon" },
              { id: "c", text: "stars" },
              { id: "d", text: "clouds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth and space",
                statement: "The Sun is our star.",
              },
            ],
            steps: [
              { reasoning: "The Sun is our star.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** the Sun",
          },
        },
      ],
    },
  ],
};
