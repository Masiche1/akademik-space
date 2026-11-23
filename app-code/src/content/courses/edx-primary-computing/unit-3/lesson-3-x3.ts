import type { Lesson } from "../../../types.ts";

export const exam33: Lesson = {
  id: "edxpc-u3-exam3",
  code: "3-X3",
  title: "Exam Practice 3: Data and Information",
  goal: "I CAN answer data and information exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Data and Information",
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
      id: "edxpc-u3-exam3-concept",
      title: "Data and Information — exam practice",
      skill: "Apply data and information techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise data and information in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for data and information.",
          },
        ],
      },
      questions: [
        {
          id: "edxpc-u3-x3-q1",
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
          id: "edxpc-u3-x3-q2",
          difficulty: "core",
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
          id: "edxpc-u3-x3-q3",
          difficulty: "challenge",
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
          id: "edxpc-u3-x3-q4",
          difficulty: "core",
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
          id: "edxpc-u3-x3-q5",
          difficulty: "core",
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
          id: "edxpc-u3-x3-q6",
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
          id: "edxpc-u3-x3-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is an input device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mouse" },
              { id: "b", text: "monitor" },
              { id: "c", text: "speaker" },
              { id: "d", text: "printer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hardware",
                statement: "Mouse sends data in.",
              },
            ],
            steps: [
              { reasoning: "Mouse sends data in.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** mouse",
          },
        },
        {
          id: "edxpc-u3-x3-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What should you do with personal information online?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keep it private" },
              { id: "b", text: "Share everywhere" },
              { id: "c", text: "Post publicly" },
              { id: "d", text: "Send to strangers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Online safety",
                statement: "Privacy matters.",
              },
            ],
            steps: [{ reasoning: "Privacy matters.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Keep it private",
          },
        },
        {
          id: "edxpc-u3-x3-q9",
          difficulty: "foundation",
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
      ],
    },
  ],
};
