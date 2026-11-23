import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edxpc-u5-lesson-5-2",
  code: "5.2",
  title: "Algorithms: Sequencing, Selection and Iteration",
  goal: "I can algorithms: Sequencing, Selection and Iteration with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Programming and Computational Thinking",
  ],
  vocabulary: [
    {
      term: "Algorithm",
      definition: "A step-by-step set of instructions to solve a problem.",
    },
    {
      term: "Decomposition",
      definition: "Breaking a complex problem into smaller parts.",
    },
    {
      term: "Data",
      definition: "Information in a form a computer can process.",
    },
    {
      term: "Hardware",
      definition: "The physical parts of a computer system.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u5-lesson-5-2-c1",
      title: "Algorithms: Sequencing, Selection and Iteration — part 1",
      skill:
        "Apply algorithms: sequencing, selection and iteration skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore algorithms: sequencing, selection and iteration as part of programming and computational thinking. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
          },
          {
            heading: "How to succeed",
            body: "Read each question carefully. For maths, show your working and give exact answers. For English, write in full sentences with accurate punctuation. For science and other subjects, use key vocabulary and explain your ideas clearly.",
          },
        ],
        keyFormulas: [
          {
            name: "Key idea",
            statement:
              "Apply the main methods and facts for algorithms: sequencing, selection and iteration.",
          },
        ],
      },
      questions: [
        {
          id: "edxpc-u5-l2c1q1",
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
          id: "edxpc-u5-l2c1q2",
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
          id: "edxpc-u5-l2c1q3",
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
          id: "edxpc-u5-l2c1q4",
          difficulty: "challenge",
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
          id: "edxpc-u5-l2c1q5",
          difficulty: "challenge",
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
    {
      id: "edxpc-u5-lesson-5-2-c2",
      title: "Algorithms: Sequencing, Selection and Iteration — part 2",
      skill:
        "Apply algorithms: sequencing, selection and iteration skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore algorithms: sequencing, selection and iteration as part of programming and computational thinking. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
          },
          {
            heading: "How to succeed",
            body: "Read each question carefully. For maths, show your working and give exact answers. For English, write in full sentences with accurate punctuation. For science and other subjects, use key vocabulary and explain your ideas clearly.",
          },
        ],
        keyFormulas: [
          {
            name: "Key idea",
            statement:
              "Apply the main methods and facts for algorithms: sequencing, selection and iteration.",
          },
        ],
      },
      questions: [
        {
          id: "edxpc-u5-l2c2q1",
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
          id: "edxpc-u5-l2c2q2",
          difficulty: "foundation",
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
          id: "edxpc-u5-l2c2q3",
          difficulty: "challenge",
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
          id: "edxpc-u5-l2c2q4",
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
          id: "edxpc-u5-l2c2q5",
          difficulty: "challenge",
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
      ],
    },
  ],
};
