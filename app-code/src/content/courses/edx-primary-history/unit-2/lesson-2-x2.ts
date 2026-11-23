import type { Lesson } from "../../../types.ts";

export const exam22: Lesson = {
  id: "edxph-u2-exam2",
  code: "2-X2",
  title: "Exam Practice 2: Early Humans and Ancient Civilisations",
  goal: "I CAN answer early humans and ancient civilisations exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Early Humans and Ancient Civilisations",
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
      id: "edxph-u2-exam2-concept",
      title: "Early Humans and Ancient Civilisations — exam practice",
      skill:
        "Apply early humans and ancient civilisations techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise early humans and ancient civilisations in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for early humans and ancient civilisations.",
          },
        ],
      },
      questions: [
        {
          id: "edxph-u2-x2-q1",
          difficulty: "core",
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
          id: "edxph-u2-x2-q2",
          difficulty: "foundation",
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
          id: "edxph-u2-x2-q3",
          difficulty: "challenge",
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
          id: "edxph-u2-x2-q4",
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
          id: "edxph-u2-x2-q5",
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
          id: "edxph-u2-x2-q6",
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
          id: "edxph-u2-x2-q7",
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
          id: "edxph-u2-x2-q8",
          difficulty: "foundation",
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
          id: "edxph-u2-x2-q9",
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
      ],
    },
  ],
};
