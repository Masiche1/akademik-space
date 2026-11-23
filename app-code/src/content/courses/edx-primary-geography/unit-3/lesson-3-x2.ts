import type { Lesson } from "../../../types.ts";

export const exam32: Lesson = {
  id: "edxpg-u3-exam2",
  code: "3-X2",
  title: "Exam Practice 2: The Wider World",
  goal: "I CAN answer the wider world exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: The Wider World",
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
      id: "edxpg-u3-exam2-concept",
      title: "The Wider World — exam practice",
      skill: "Apply the wider world techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise the wider world in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement: "Apply the main methods and facts for the wider world.",
          },
        ],
      },
      questions: [
        {
          id: "edxpg-u3-x2-q1",
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
          id: "edxpg-u3-x2-q2",
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
          id: "edxpg-u3-x2-q3",
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
          id: "edxpg-u3-x2-q4",
          difficulty: "challenge",
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
          id: "edxpg-u3-x2-q5",
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
          id: "edxpg-u3-x2-q6",
          difficulty: "core",
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
          id: "edxpg-u3-x2-q7",
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
          id: "edxpg-u3-x2-q8",
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
          id: "edxpg-u3-x2-q9",
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
      ],
    },
  ],
};
