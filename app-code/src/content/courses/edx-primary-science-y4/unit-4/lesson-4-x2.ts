import type { Lesson } from "../../../types.ts";

export const exam42: Lesson = {
  id: "edps4-u4-exam2",
  code: "4-X2",
  title: "Exam Practice 2: Scientific Enquiry and Investigation",
  goal: "I CAN answer scientific enquiry and investigation exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Scientific Enquiry and Investigation",
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
      id: "edps4-u4-exam2-concept",
      title: "Scientific Enquiry and Investigation — exam practice",
      skill:
        "Apply scientific enquiry and investigation techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise scientific enquiry and investigation in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for scientific enquiry and investigation.",
          },
        ],
      },
      questions: [
        {
          id: "edps4-u4-x2-q1",
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
          id: "edps4-u4-x2-q2",
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
          id: "edps4-u4-x2-q3",
          difficulty: "core",
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
          id: "edps4-u4-x2-q4",
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
          id: "edps4-u4-x2-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is weather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Day-to-day conditions like rain and wind" },
              { id: "b", text: "The climate" },
              { id: "c", text: "The seasons" },
              { id: "d", text: "The temperature only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth and space",
                statement: "Weather = short-term conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Weather = short-term conditions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Day-to-day conditions like rain and wind",
          },
        },
        {
          id: "edps4-u4-x2-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a fair test, what do you change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the independent variable" },
              { id: "b", text: "Everything" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Two variables at once" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "One variable only.",
              },
            ],
            steps: [
              { reasoning: "One variable only.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Only the independent variable",
          },
        },
        {
          id: "edps4-u4-x2-q7",
          difficulty: "core",
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
          id: "edps4-u4-x2-q8",
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
          id: "edps4-u4-x2-q9",
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
      ],
    },
  ],
};
