import type { Lesson } from "../../../types.ts";

export const exam13: Lesson = {
  id: "edxpg-u1-exam3",
  code: "1-X3",
  title: "Exam Practice 3: Maps and Local Area",
  goal: "I CAN answer maps and local area exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Maps and Local Area",
  ],

  vocabulary: [
    {
      term: "Map",
      definition: "A representation of an area showing features and positions.",
    },
    { term: "Compass", definition: "A tool that shows direction." },
    {
      term: "Settlement",
      definition: "A place where people live, from a hamlet to a city.",
    },
    {
      term: "Weather",
      definition: "The day-to-day conditions of the atmosphere.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u1-exam3-concept",
      title: "Maps and Local Area — exam practice",
      skill: "Apply maps and local area techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise maps and local area in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for maps and local area.",
          },
        ],
      },
      questions: [
        {
          id: "edxpg-u1-x3-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a compass used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finding direction" },
              { id: "b", text: "Measuring distance" },
              { id: "c", text: "Drawing maps" },
              { id: "d", text: "Taking photos" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Map skills",
                statement: "Compass = direction.",
              },
            ],
            steps: [
              { reasoning: "Compass = direction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Finding direction",
          },
        },
        {
          id: "edxpg-u1-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a UK city?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liverpool" },
              { id: "b", text: "Paris" },
              { id: "c", text: "Berlin" },
              { id: "d", text: "Madrid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "The UK",
                statement: "Liverpool is in England.",
              },
            ],
            steps: [
              {
                reasoning: "Liverpool is in England.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Liverpool",
          },
        },
        {
          id: "edxpg-u1-x3-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a volcano?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A mountain that can erupt with lava" },
              { id: "b", text: "A river" },
              { id: "c", text: "A forest" },
              { id: "d", text: "A lake" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical geography",
                statement: "Volcano = erupting mountain.",
              },
            ],
            steps: [
              {
                reasoning: "Volcano = erupting mountain.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** A mountain that can erupt with lava",
          },
        },
        {
          id: "edxpg-u1-x3-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a rural area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Countryside with few buildings" },
              { id: "b", text: "A city centre" },
              { id: "c", text: "A shopping centre" },
              { id: "d", text: "An airport" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human geography",
                statement: "Rural = countryside.",
              },
            ],
            steps: [
              { reasoning: "Rural = countryside.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Countryside with few buildings",
          },
        },
        {
          id: "edxpg-u1-x3-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a compass used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finding direction" },
              { id: "b", text: "Measuring distance" },
              { id: "c", text: "Drawing maps" },
              { id: "d", text: "Taking photos" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Map skills",
                statement: "Compass = direction.",
              },
            ],
            steps: [
              { reasoning: "Compass = direction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Finding direction",
          },
        },
        {
          id: "edxpg-u1-x3-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a UK city?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liverpool" },
              { id: "b", text: "Paris" },
              { id: "c", text: "Berlin" },
              { id: "d", text: "Madrid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "The UK",
                statement: "Liverpool is in England.",
              },
            ],
            steps: [
              {
                reasoning: "Liverpool is in England.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Liverpool",
          },
        },
        {
          id: "edxpg-u1-x3-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a volcano?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A mountain that can erupt with lava" },
              { id: "b", text: "A river" },
              { id: "c", text: "A forest" },
              { id: "d", text: "A lake" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical geography",
                statement: "Volcano = erupting mountain.",
              },
            ],
            steps: [
              {
                reasoning: "Volcano = erupting mountain.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** A mountain that can erupt with lava",
          },
        },
        {
          id: "edxpg-u1-x3-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is land use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How land is used: housing, farming, industry" },
              { id: "b", text: "Owning land" },
              { id: "c", text: "Building land" },
              { id: "d", text: "Buying land" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human geography",
                statement: "Land use = purpose of land.",
              },
            ],
            steps: [
              {
                reasoning: "Land use = purpose of land.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** How land is used: housing, farming, industry",
          },
        },
        {
          id: "edxpg-u1-x3-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is a compass used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finding direction" },
              { id: "b", text: "Measuring distance" },
              { id: "c", text: "Drawing maps" },
              { id: "d", text: "Taking photos" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Map skills",
                statement: "Compass = direction.",
              },
            ],
            steps: [
              { reasoning: "Compass = direction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Finding direction",
          },
        },
      ],
    },
  ],
};
