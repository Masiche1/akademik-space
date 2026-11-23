import type { Lesson } from "../../../types.ts";

export const exam12: Lesson = {
  id: "edxpc-u1-exam2",
  code: "1-X2",
  title: "Exam Practice 2: Digital Literacy",
  goal: "I CAN answer digital literacy exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Digital Literacy",
  ],

  vocabulary: [
    {
      term: "Algorithm",
      definition: "A step-by-step set of instructions to solve a problem.",
    },
    {
      term: "Data",
      definition: "Information in a form a computer can process.",
    },
    {
      term: "Hardware",
      definition: "The physical parts of a computer system.",
    },
    { term: "Software", definition: "The programs that run on a computer." },
  ],
  concepts: [
    {
      id: "edxpc-u1-exam2-concept",
      title: "Digital Literacy — exam practice",
      skill: "Apply digital literacy techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise digital literacy in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement: "Apply the main methods and facts for digital literacy.",
          },
        ],
      },
      questions: [
        {
          id: "edxpc-u1-x2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a loop in programming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeats instructions" },
              { id: "b", text: "Stops the program" },
              { id: "c", text: "Deletes data" },
              { id: "d", text: "Draws pictures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Computational thinking",
                statement: "Loop = repeat.",
              },
            ],
            steps: [{ reasoning: "Loop = repeat.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Repeats instructions",
          },
        },
        {
          id: "edxpc-u1-x2-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'filter' do to data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shows only matching items" },
              { id: "b", text: "Deletes all data" },
              { id: "c", text: "Sorts alphabetically" },
              { id: "d", text: "Prints data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Filter = select subset.",
              },
            ],
            steps: [
              { reasoning: "Filter = select subset.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Shows only matching items",
          },
        },
        {
          id: "edxpc-u1-x2-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is software?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Programs that run on a computer" },
              { id: "b", text: "The physical parts" },
              { id: "c", text: "A cable" },
              { id: "d", text: "A screen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hardware",
                statement: "Software = programs.",
              },
            ],
            steps: [
              { reasoning: "Software = programs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Programs that run on a computer",
          },
        },
        {
          id: "edxpc-u1-x2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cyberbullying?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bullying using technology" },
              { id: "b", text: "A type of game" },
              { id: "c", text: "A computer virus" },
              { id: "d", text: "Online shopping" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Online safety",
                statement: "Cyberbullying = online harassment.",
              },
            ],
            steps: [
              {
                reasoning: "Cyberbullying = online harassment.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Bullying using technology",
          },
        },
        {
          id: "edxpc-u1-x2-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is debugging?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finding and fixing errors" },
              { id: "b", text: "Writing code fast" },
              { id: "c", text: "Deleting programs" },
              { id: "d", text: "Making computers faster" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Computational thinking",
                statement: "Debug = fix errors.",
              },
            ],
            steps: [
              { reasoning: "Debug = fix errors.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Finding and fixing errors",
          },
        },
        {
          id: "edxpc-u1-x2-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a database?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An organised collection of data" },
              { id: "b", text: "A computer game" },
              { id: "c", text: "A type of cable" },
              { id: "d", text: "A screen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Database = organised data.",
              },
            ],
            steps: [
              {
                reasoning: "Database = organised data.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** An organised collection of data",
          },
        },
        {
          id: "edxpc-u1-x2-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is software?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Programs that run on a computer" },
              { id: "b", text: "The physical parts" },
              { id: "c", text: "A cable" },
              { id: "d", text: "A screen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hardware",
                statement: "Software = programs.",
              },
            ],
            steps: [
              { reasoning: "Software = programs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Programs that run on a computer",
          },
        },
        {
          id: "edxpc-u1-x2-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cyberbullying?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bullying using technology" },
              { id: "b", text: "A type of game" },
              { id: "c", text: "A computer virus" },
              { id: "d", text: "Online shopping" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Online safety",
                statement: "Cyberbullying = online harassment.",
              },
            ],
            steps: [
              {
                reasoning: "Cyberbullying = online harassment.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Bullying using technology",
          },
        },
        {
          id: "edxpc-u1-x2-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a loop in programming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeats instructions" },
              { id: "b", text: "Stops the program" },
              { id: "c", text: "Deletes data" },
              { id: "d", text: "Draws pictures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Computational thinking",
                statement: "Loop = repeat.",
              },
            ],
            steps: [{ reasoning: "Loop = repeat.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Repeats instructions",
          },
        },
      ],
    },
  ],
};
