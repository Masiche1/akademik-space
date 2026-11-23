import type { Lesson } from "../../../types.ts";

export const exam34: Lesson = {
  id: "edxph-u3-exam4",
  code: "3-X4",
  title: "Exam Practice 4: British History",
  goal: "I CAN answer british history exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: British History",
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
      id: "edxph-u3-exam4-concept",
      title: "British History — exam practice",
      skill: "Apply british history techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise british history in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement: "Apply the main methods and facts for british history.",
          },
        ],
      },
      questions: [
        {
          id: "edxph-u3-x4-q1",
          difficulty: "foundation",
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
          id: "edxph-u3-x4-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened in 1066?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Norman Conquest" },
              { id: "b", text: "The Black Death" },
              { id: "c", text: "World War I" },
              { id: "d", text: "The Industrial Revolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "British history",
                statement: "1066 = Hastings.",
              },
            ],
            steps: [{ reasoning: "1066 = Hastings.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The Norman Conquest",
          },
        },
        {
          id: "edxph-u3-x4-q3",
          difficulty: "foundation",
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
          id: "edxph-u3-x4-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why might sources disagree?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different perspectives or bias" },
              { id: "b", text: "They never disagree" },
              { id: "c", text: "They are always wrong" },
              { id: "d", text: "They are copies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Historical enquiry",
                statement: "Bias/perspective causes disagreement.",
              },
            ],
            steps: [
              {
                reasoning: "Bias/perspective causes disagreement.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Different perspectives or bias",
          },
        },
        {
          id: "edxph-u3-x4-q5",
          difficulty: "foundation",
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
          id: "edxph-u3-x4-q6",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What happened in 1066?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Norman Conquest" },
              { id: "b", text: "The Black Death" },
              { id: "c", text: "World War I" },
              { id: "d", text: "The Industrial Revolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "British history",
                statement: "1066 = Hastings.",
              },
            ],
            steps: [{ reasoning: "1066 = Hastings.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The Norman Conquest",
          },
        },
        {
          id: "edxph-u3-x4-q7",
          difficulty: "foundation",
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
