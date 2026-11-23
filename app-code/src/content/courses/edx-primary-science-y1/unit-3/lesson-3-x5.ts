import type { Lesson } from "../../../types.ts";

export const exam35: Lesson = {
  id: "edps1-u3-exam5",
  code: "3-X5",
  title: "Exam Practice 5: Seasons, Plants and Everyday Science",
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
      id: "edps1-u3-exam5-concept",
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
          id: "edps1-u3-x5-q1",
          difficulty: "core",
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
          id: "edps1-u3-x5-q2",
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
          id: "edps1-u3-x5-q3",
          difficulty: "foundation",
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
          id: "edps1-u3-x5-q4",
          difficulty: "challenge",
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
          id: "edps1-u3-x5-q5",
          difficulty: "foundation",
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
          id: "edps1-u3-x5-q6",
          difficulty: "core",
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
          id: "edps1-u3-x5-q7",
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
          id: "edps1-u3-x5-q8",
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
      ],
    },
  ],
};
