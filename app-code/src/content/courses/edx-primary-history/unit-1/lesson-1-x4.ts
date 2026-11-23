import type { Lesson } from "../../../types.ts";

export const exam14: Lesson = {
  id: "edxph-u1-exam4",
  code: "1-X4",
  title: "Exam Practice 4: Time and Chronology",
  goal: "I CAN answer time and chronology exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Time and Chronology",
  ],

  vocabulary: [
    {
      term: "Timeline",
      definition: "A way of showing events in the order they happened.",
    },
    {
      term: "Primary source",
      definition: "Evidence created at the time being studied.",
    },
    {
      term: "Chronology",
      definition: "The arrangement of events in time order.",
    },
    {
      term: "Enquiry",
      definition:
        "Asking and answering questions about the past using evidence.",
    },
  ],
  concepts: [
    {
      id: "edxph-u1-exam4-concept",
      title: "Time and Chronology — exam practice",
      skill: "Apply time and chronology techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise time and chronology in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for time and chronology.",
          },
        ],
      },
      questions: [
        {
          id: "edxph-u1-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which period came first: Roman Britain or Victorian era?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Roman Britain" },
              { id: "b", text: "Victorian era" },
              { id: "c", text: "They overlapped" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chronology",
                statement: "Romans ~43-410AD, Victorians 1837-1901.",
              },
            ],
            steps: [
              {
                reasoning: "Romans ~43-410AD, Victorians 1837-1901.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Roman Britain",
          },
        },
        {
          id: "edxph-u1-x4-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who was Henry VIII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Tudor king who had six wives" },
              { id: "b", text: "A Roman emperor" },
              { id: "c", text: "A Victorian prime minister" },
              { id: "d", text: "A medieval knight" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "British history",
                statement: "Henry VIII = Tudor king.",
              },
            ],
            steps: [
              {
                reasoning: "Henry VIII = Tudor king.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** A Tudor king who had six wives",
          },
        },
        {
          id: "edxph-u1-x4-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where was Machu Picchu built?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peru" },
              { id: "b", text: "Egypt" },
              { id: "c", text: "Rome" },
              { id: "d", text: "China" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "World history",
                statement: "Machu Picchu = Inca, Peru.",
              },
            ],
            steps: [
              {
                reasoning: "Machu Picchu = Inca, Peru.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Peru",
          },
        },
        {
          id: "edxph-u1-x4-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is a primary source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Created at the time being studied" },
              { id: "b", text: "Written later" },
              { id: "c", text: "A textbook" },
              { id: "d", text: "A film" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Historical enquiry",
                statement: "Primary = contemporary.",
              },
            ],
            steps: [
              { reasoning: "Primary = contemporary.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Created at the time being studied",
          },
        },
        {
          id: "edxph-u1-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'BC' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Before Christ" },
              { id: "b", text: "British Columbia" },
              { id: "c", text: "Before Common Era only" },
              { id: "d", text: "By Christ" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chronology",
                statement: "BC = Before Christ.",
              },
            ],
            steps: [
              { reasoning: "BC = Before Christ.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Before Christ",
          },
        },
        {
          id: "edxph-u1-x4-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who was Henry VIII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Tudor king who had six wives" },
              { id: "b", text: "A Roman emperor" },
              { id: "c", text: "A Victorian prime minister" },
              { id: "d", text: "A medieval knight" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "British history",
                statement: "Henry VIII = Tudor king.",
              },
            ],
            steps: [
              {
                reasoning: "Henry VIII = Tudor king.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** A Tudor king who had six wives",
          },
        },
        {
          id: "edxph-u1-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What were the Romans known for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Roads, aqueducts and law" },
              { id: "b", text: "Pyramids" },
              { id: "c", text: "Printing" },
              { id: "d", text: "Computers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "World history",
                statement: "Roman engineering.",
              },
            ],
            steps: [
              { reasoning: "Roman engineering.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Roads, aqueducts and law",
          },
        },
      ],
    },
  ],
};
