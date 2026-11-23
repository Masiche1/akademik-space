import type { Lesson } from "../../../types.ts";

export const exam22: Lesson = {
  id: "edxpg-u2-exam2",
  code: "2-X2",
  title: "Exam Practice 2: The United Kingdom",
  goal: "I CAN answer the united kingdom exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: The United Kingdom",
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
      id: "edxpg-u2-exam2-concept",
      title: "The United Kingdom — exam practice",
      skill: "Apply the united kingdom techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise the united kingdom in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for the united kingdom.",
          },
        ],
      },
      questions: [
        {
          id: "edxpg-u2-x2-q1",
          difficulty: "challenge",
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
          id: "edxpg-u2-x2-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the longest river in the UK?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "River Severn" },
              { id: "b", text: "River Thames" },
              { id: "c", text: "River Tyne" },
              { id: "d", text: "River Clyde" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "The UK",
                statement: "Severn is longest.",
              },
            ],
            steps: [
              { reasoning: "Severn is longest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** River Severn",
          },
        },
        {
          id: "edxpg-u2-x2-q3",
          difficulty: "core",
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
          id: "edxpg-u2-x2-q4",
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
          id: "edxpg-u2-x2-q5",
          difficulty: "foundation",
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
          id: "edxpg-u2-x2-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the longest river in the UK?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "River Severn" },
              { id: "b", text: "River Thames" },
              { id: "c", text: "River Tyne" },
              { id: "d", text: "River Clyde" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "The UK",
                statement: "Severn is longest.",
              },
            ],
            steps: [
              { reasoning: "Severn is longest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** River Severn",
          },
        },
        {
          id: "edxpg-u2-x2-q7",
          difficulty: "core",
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
          id: "edxpg-u2-x2-q8",
          difficulty: "challenge",
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
          id: "edxpg-u2-x2-q9",
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
      ],
    },
  ],
};
