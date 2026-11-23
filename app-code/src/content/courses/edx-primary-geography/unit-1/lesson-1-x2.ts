import type { Lesson } from "../../../types.ts";

export const exam12: Lesson = {
  id: "edxpg-u1-exam2",
  code: "1-X2",
  title: "Exam Practice 2: Maps and Local Area",
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
      id: "edxpg-u1-exam2-concept",
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
          id: "edxpg-u1-x2-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do map symbols represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Features like schools or rivers" },
              { id: "b", text: "Colours only" },
              { id: "c", text: "Prices" },
              { id: "d", text: "Times" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Map skills",
                statement: "Symbols = features.",
              },
            ],
            steps: [
              { reasoning: "Symbols = features.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Features like schools or rivers",
          },
        },
        {
          id: "edxpg-u1-x2-q2",
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
          id: "edxpg-u1-x2-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is erosion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wearing away of land by water/wind" },
              { id: "b", text: "Building land" },
              { id: "c", text: "Planting trees" },
              { id: "d", text: "Making rivers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical geography",
                statement: "Erosion = wearing away.",
              },
            ],
            steps: [
              { reasoning: "Erosion = wearing away.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Wearing away of land by water/wind",
          },
        },
        {
          id: "edxpg-u1-x2-q4",
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
          id: "edxpg-u1-x2-q5",
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
        {
          id: "edxpg-u1-x2-q6",
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
          id: "edxpg-u1-x2-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is erosion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wearing away of land by water/wind" },
              { id: "b", text: "Building land" },
              { id: "c", text: "Planting trees" },
              { id: "d", text: "Making rivers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical geography",
                statement: "Erosion = wearing away.",
              },
            ],
            steps: [
              { reasoning: "Erosion = wearing away.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Wearing away of land by water/wind",
          },
        },
        {
          id: "edxpg-u1-x2-q8",
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
          id: "edxpg-u1-x2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do map symbols represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Features like schools or rivers" },
              { id: "b", text: "Colours only" },
              { id: "c", text: "Prices" },
              { id: "d", text: "Times" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Map skills",
                statement: "Symbols = features.",
              },
            ],
            steps: [
              { reasoning: "Symbols = features.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Features like schools or rivers",
          },
        },
      ],
    },
  ],
};
