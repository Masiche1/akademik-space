import type { Lesson } from "../../../types.ts";

export const exam34: Lesson = {
  id: "edps2-u3-exam4",
  code: "3-X4",
  title: "Exam Practice 4: Forces, Light, Sound and Seasons",
  goal: "I CAN answer forces, light, sound and seasons exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Forces, Light, Sound and Seasons",
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
      id: "edps2-u3-exam4-concept",
      title: "Forces, Light, Sound and Seasons — exam practice",
      skill:
        "Apply forces, light, sound and seasons techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise forces, light, sound and seasons in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for forces, light, sound and seasons.",
          },
        ],
      },
      questions: [
        {
          id: "edps2-u3-x4-q1",
          difficulty: "core",
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
          id: "edps2-u3-x4-q2",
          difficulty: "challenge",
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
          id: "edps2-u3-x4-q3",
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
          id: "edps2-u3-x4-q4",
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
          id: "edps2-u3-x4-q5",
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
          id: "edps2-u3-x4-q6",
          difficulty: "core",
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
          id: "edps2-u3-x4-q7",
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
          id: "edps2-u3-x4-q8",
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
          id: "edps2-u3-x4-q9",
          difficulty: "challenge",
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
          id: "edps2-u3-x4-q10",
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
      ],
    },
  ],
};
