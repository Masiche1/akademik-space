import type { Lesson } from "../../../types.ts";

export const exam14: Lesson = {
  id: "edps2-u1-exam4",
  code: "1-X4",
  title: "Exam Practice 4: Living Things",
  goal: "I CAN answer living things exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Living Things",
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
      id: "edps2-u1-exam4-concept",
      title: "Living Things — exam practice",
      skill: "Apply living things techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise living things in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement: "Apply the main methods and facts for living things.",
          },
        ],
      },
      questions: [
        {
          id: "edps2-u1-x4-q1",
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
          id: "edps2-u1-x4-q2",
          difficulty: "foundation",
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
          id: "edps2-u1-x4-q3",
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
          id: "edps2-u1-x4-q4",
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
          id: "edps2-u1-x4-q5",
          difficulty: "challenge",
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
        {
          id: "edps2-u1-x4-q6",
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
          id: "edps2-u1-x4-q7",
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
          id: "edps2-u1-x4-q8",
          difficulty: "foundation",
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
          id: "edps2-u1-x4-q9",
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
          id: "edps2-u1-x4-q10",
          difficulty: "challenge",
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
