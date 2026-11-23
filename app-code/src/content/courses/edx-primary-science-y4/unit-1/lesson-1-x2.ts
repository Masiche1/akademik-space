import type { Lesson } from "../../../types.ts";

export const exam12: Lesson = {
  id: "edps4-u1-exam2",
  code: "1-X2",
  title: "Exam Practice 2: Living Things: Diets, Food Webs and Seasons",
  goal: "I CAN answer living things: diets, food webs and seasons exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Living Things: Diets, Food Webs and Seasons",
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
      id: "edps4-u1-exam2-concept",
      title: "Living Things: Diets, Food Webs and Seasons — exam practice",
      skill:
        "Apply living things: diets, food webs and seasons techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise living things: diets, food webs and seasons in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for living things: diets, food webs and seasons.",
          },
        ],
      },
      questions: [
        {
          id: "edps4-u1-x2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do you measure in a fair test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dependent variable" },
              { id: "b", text: "The controlled variable" },
              { id: "c", text: "The hypothesis" },
              { id: "d", text: "The equipment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "DV is measured.",
              },
            ],
            steps: [{ reasoning: "DV is measured.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The dependent variable",
          },
        },
        {
          id: "edps4-u1-x2-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a habitat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The natural home where an organism lives" },
              { id: "b", text: "A cage" },
              { id: "c", text: "A garden" },
              { id: "d", text: "A food type" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living things",
                statement: "Habitat = natural home.",
              },
            ],
            steps: [
              { reasoning: "Habitat = natural home.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The natural home where an organism lives",
          },
        },
        {
          id: "edps4-u1-x2-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'dissolve' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solid disappears into liquid" },
              { id: "b", text: "Solid melts" },
              { id: "c", text: "Liquid freezes" },
              { id: "d", text: "Gas escapes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Materials",
                statement: "Dissolving = solid → solution.",
              },
            ],
            steps: [
              {
                reasoning: "Dissolving = solid → solution.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Solid disappears into liquid",
          },
        },
        {
          id: "edps4-u1-x2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is friction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A force that slows moving surfaces" },
              { id: "b", text: "A push" },
              { id: "c", text: "A pull" },
              { id: "d", text: "A magnet" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical processes",
                statement: "Friction opposes motion.",
              },
            ],
            steps: [
              {
                reasoning: "Friction opposes motion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** A force that slows moving surfaces",
          },
        },
        {
          id: "edps4-u1-x2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes day and night?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth spinning on its axis" },
              { id: "b", text: "The Sun moving" },
              { id: "c", text: "Clouds covering" },
              { id: "d", text: "The Moon blocking" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth and space",
                statement: "Rotation causes day/night.",
              },
            ],
            steps: [
              {
                reasoning: "Rotation causes day/night.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Earth spinning on its axis",
          },
        },
        {
          id: "edps4-u1-x2-q6",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What do you measure in a fair test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dependent variable" },
              { id: "b", text: "The controlled variable" },
              { id: "c", text: "The hypothesis" },
              { id: "d", text: "The equipment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "DV is measured.",
              },
            ],
            steps: [{ reasoning: "DV is measured.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The dependent variable",
          },
        },
        {
          id: "edps4-u1-x2-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is an adaptation for cold climates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "thick fur" },
              { id: "b", text: "thin skin" },
              { id: "c", text: "large ears" },
              { id: "d", text: "bright colours" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living things",
                statement: "Thick fur insulates.",
              },
            ],
            steps: [
              { reasoning: "Thick fur insulates.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** thick fur",
          },
        },
        {
          id: "edps4-u1-x2-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a reversible change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melting chocolate" },
              { id: "b", text: "Burning paper" },
              { id: "c", text: "Cooking an egg" },
              { id: "d", text: "Rusting iron" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Materials",
                statement: "Melting can be reversed by cooling.",
              },
            ],
            steps: [
              {
                reasoning: "Melting can be reversed by cooling.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Melting chocolate",
          },
        },
        {
          id: "edps4-u1-x2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is friction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A force that slows moving surfaces" },
              { id: "b", text: "A push" },
              { id: "c", text: "A pull" },
              { id: "d", text: "A magnet" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical processes",
                statement: "Friction opposes motion.",
              },
            ],
            steps: [
              {
                reasoning: "Friction opposes motion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** A force that slows moving surfaces",
          },
        },
      ],
    },
  ],
};
