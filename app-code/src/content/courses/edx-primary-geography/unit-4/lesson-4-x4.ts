import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edxpg-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Map Skills and Fieldwork",
  goal: "I CAN answer map skills and fieldwork exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Map Skills and Fieldwork",
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
      id: "edxpg-u4-exam4-concept",
      title: "Map Skills and Fieldwork — exam practice",
      skill:
        "Apply map skills and fieldwork techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise map skills and fieldwork in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for map skills and fieldwork.",
          },
        ],
      },
      questions: [
        {
          id: "edxpg-u4-x4-q1",
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
          id: "edxpg-u4-x4-q2",
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
          id: "edxpg-u4-x4-q3",
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
          id: "edxpg-u4-x4-q4",
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
          id: "edxpg-u4-x4-q5",
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
          id: "edxpg-u4-x4-q6",
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
          id: "edxpg-u4-x4-q7",
          difficulty: "challenge",
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
          id: "edxpg-u4-x4-q8",
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
          id: "edxpg-u4-x4-q9",
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
