import type { Lesson } from "../../../types.ts";

export const exam31: Lesson = {
  id: "edps1-u3-exam1",
  code: "3-X1",
  title: "Exam Practice 1: Seasons, Plants and Everyday Science",
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
      id: "edps1-u3-exam1-concept",
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
          id: "edps1-u3-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which tool measures how long something is?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ruler" },
              { id: "b", text: "scales" },
              { id: "c", text: "thermometer" },
              { id: "d", text: "magnifying glass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Rulers measure length.",
              },
            ],
            steps: [
              { reasoning: "Rulers measure length.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** ruler",
          },
        },
        {
          id: "edps1-u3-x1-q2",
          difficulty: "core",
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
          id: "edps1-u3-x1-q3",
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
          id: "edps1-u3-x1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which material lets light through?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "glass" },
              { id: "b", text: "wood" },
              { id: "c", text: "metal" },
              { id: "d", text: "brick" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical processes",
                statement: "Glass is transparent.",
              },
            ],
            steps: [
              { reasoning: "Glass is transparent.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** glass",
          },
        },
        {
          id: "edps1-u3-x1-q5",
          difficulty: "challenge",
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
          id: "edps1-u3-x1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tool measures how long something is?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ruler" },
              { id: "b", text: "scales" },
              { id: "c", text: "thermometer" },
              { id: "d", text: "magnifying glass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Rulers measure length.",
              },
            ],
            steps: [
              { reasoning: "Rulers measure length.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** ruler",
          },
        },
        {
          id: "edps1-u3-x1-q7",
          difficulty: "core",
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
          id: "edps1-u3-x1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens when ice warms up?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It melts into water" },
              { id: "b", text: "It freezes harder" },
              { id: "c", text: "It evaporates" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Materials",
                statement: "Melting = solid → liquid.",
              },
            ],
            steps: [
              {
                reasoning: "Melting = solid → liquid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** It melts into water",
          },
        },
        {
          id: "edps1-u3-x1-q9",
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
          id: "edps1-u3-x1-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do we call the planet we live on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth" },
              { id: "b", text: "Mars" },
              { id: "c", text: "the Moon" },
              { id: "d", text: "Sun" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth and space",
                statement: "We live on Earth.",
              },
            ],
            steps: [
              { reasoning: "We live on Earth.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Earth",
          },
        },
      ],
    },
  ],
};
