import type { Lesson } from "../../../types.ts";

export const lesson155: Lesson = {
  id: "ciealc-u4-lesson-4-5",
  code: "4-5",
  title: "Programming Project: Design and Evaluation",
  goal: "I CAN design, implement and evaluate a programming project.",
  standards: [
    "Cambridge A Level Computer Science 9618: project",
    "9618 Paper 2",
  ],

  vocabulary: [
    {
      term: "Project",
      definition: "Extended programming task for assessment.",
    },
    {
      term: "Specification",
      definition: "Requirements defining what program must do.",
    },
    { term: "Testing", definition: "Verifying program works correctly." },
    {
      term: "Evaluation",
      definition: "Assessing how well program meets requirements.",
    },
    {
      term: "Documentation",
      definition: "Comments, user guides explaining code.",
    },
    {
      term: "Maintenance",
      definition: "Updating/fixing program after release.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u4-s5-proj",
      title: "Programming project",
      skill: "Design and evaluate programming projects.",
      lesson: {
        sections: [
          {
            heading: "Project lifecycle",
            body: "Design: requirements, specifications. Implement: code development. Test: verify functionality. Evaluate: assess against requirements. Maintain: update and fix.",
          },
          {
            heading: "Evaluation criteria",
            body: "Does it meet all requirements? Is code readable? Are edge cases handled? Is it efficient? Is it user-friendly? Documentation adequate?",
          },
        ],
        keyFormulas: [
          {
            name: "Lifecycle",
            statement: "design→implement→test→evaluate→maintain",
          },
          {
            name: "Evaluation",
            statement: "requirements, readability, efficiency, usability",
          },
        ],
        workedExample: {
          problem: "Design a student grade calculator project.",
          solution:
            "Requirements: input scores, calculate average, output grade. Implement: functions for input, calculation, output. Test: various score combinations. Evaluate: meets all requirements?",
        },
      },
      questions: [
        {
          id: "ciealc-u4-pj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a programming project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of hardware",
              },
              {
                id: "b",
                text: "A programming language",
              },
              {
                id: "c",
                text: "Extended programming task for assessment",
              },
              {
                id: "d",
                text: "A network protocol",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Project",
                statement: "Extended programming task.",
              },
            ],
            steps: [
              {
                reasoning: "Project = substantial programming assignment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Extended programming task",
          },
        },
        {
          id: "ciealc-u4-pj-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the stages of the project lifecycle?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Project lifecycle",
                statement: "Design→implement→test→evaluate→maintain.",
              },
            ],
            steps: [
              {
                reasoning: "Design, implement, test, evaluate, maintain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All five stages correct.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Design→implement→test→evaluate→maintain",
          },
        },
        {
          id: "ciealc-u4-pj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What should you test in a programming project?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Testing",
                statement: "Verify functionality.",
              },
            ],
            steps: [
              {
                reasoning: "Test normal cases and edge cases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify all requirements met.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check error handling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Normal cases, edge cases, requirements",
          },
        },
        {
          id: "ciealc-u4-pj-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define project, specification, testing, evaluation, documentation, maintenance. (b) What is the project lifecycle? (c) What is a specification? (d) What is testing? (e) What is evaluation? (f) What is documentation? (g) Why maintain software? (h) Design a project for a school library system.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project",
                statement: "Design, implementation, evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Design→implement→test→evaluate→maintain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Requirements defining program.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Verifying correctness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Assessing against requirements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Comments, guides explaining code.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Fix bugs, add features, adapt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid library system project.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Programming project lifecycle.",
          },
        },
        {
          id: "ciealc-u4-pj-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a specification in a programming project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a backup copy of the source code" },
              { id: "b", text: "the final printed output of the program" },
              {
                id: "c",
                text: "the requirements defining what the program must do",
              },
              { id: "d", text: "a list of the computer's hardware parts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specification",
                statement: "Requirements defining what the program must do.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The specification states the requirements the finished program must satisfy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "requirements defining what the program must do",
          },
        },
        {
          id: "ciealc-u4-pj-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of documentation in a programming project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "to make the program run faster" },
              { id: "b", text: "to remove all bugs from the program" },
              {
                id: "c",
                text: "to explain the code and program to users and maintainers",
              },
              { id: "d", text: "to compress the source code files" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Documentation",
                statement:
                  "Comments and guides that explain the code and program.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Documentation (comments, user guides) explains how the program works to users and future maintainers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "to explain the code and program to users and maintainers",
          },
        },
        {
          id: "ciealc-u4-pj-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best example of an edge case that should be tested?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "typing the same valid input twice in a row" },
              {
                id: "b",
                text: "running the program on the developer's own computer",
              },
              {
                id: "c",
                text: "entering an empty list or a score of zero when the program expects positive values",
              },
              { id: "d", text: "pressing the Enter key once at startup" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Edge case",
                statement:
                  "An unusual or boundary input that may expose faults.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Edge cases are boundary or unusual inputs, such as empty data or zero values, that can cause errors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "entering an empty list or a score of zero",
          },
        },
        {
          id: "ciealc-u4-pj-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement best describes the difference between testing and evaluation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "testing happens only after release; evaluation happens only before release",
              },
              {
                id: "b",
                text: "they are identical activities with different names",
              },
              {
                id: "c",
                text: "testing checks the program works correctly against requirements; evaluation judges how well it meets those requirements overall",
              },
              {
                id: "d",
                text: "testing is done by users; evaluation is done by the compiler",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Testing vs evaluation",
                statement:
                  "Testing verifies correctness; evaluation assesses quality against criteria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Testing verifies that the program produces correct results, while evaluation assesses overall quality such as readability, efficiency and usability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "testing checks correctness; evaluation judges overall quality",
          },
        },
        {
          id: "ciealc-u4-pj-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A project meets all of its functional requirements, but the code uses meaningless variable names and has no comments. Which evaluation criterion is most clearly failed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "processing speed" },
              { id: "b", text: "code readability" },
              { id: "c", text: "output correctness" },
              { id: "d", text: "requirement coverage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation criteria",
                statement:
                  "Requirements, readability, efficiency, usability and documentation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Meaningless names and missing comments show the code fails the readability criterion even though it meets functional requirements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "code readability",
          },
        },
        {
          id: "ciealc-u4-pj-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "After release, users report a fault in the date-handling code and request a new summary report feature. These two activities are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "documentation and specification" },
              { id: "b", text: "testing and evaluation" },
              { id: "c", text: "design and implementation" },
              {
                id: "d",
                text: "corrective maintenance and adaptive (enhancement) maintenance",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maintenance",
                statement:
                  "Updating and fixing software after release: corrective and adaptive/enhancement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fixing the fault is corrective maintenance; adding the new report feature is adaptive or enhancement maintenance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "corrective maintenance and adaptive maintenance",
          },
        },
        {
          id: "ciealc-u4-pj-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A specification lists 7 requirements. After testing, 6 are fully satisfied. How many requirements remain unmet? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Requirement coverage",
                statement: "Unmet requirements = total minus satisfied.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "7 - 6 = 1 requirement remains unmet.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciealc-u4-pj-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A program has 4 functions. Each function needs 2 normal test cases and 1 error test case. (a) How many normal test cases are required? (b) How many test cases are required in total? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Test case count",
                statement: "Normal cases plus error cases per function.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "4 \\times 2 = 8 normal test cases.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "4 \\times (2 + 1) = 12 test cases in total.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "8 normal cases; 12 total cases",
          },
        },
        {
          id: "ciealc-u4-pj-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Testing a program takes 25 minutes per test run and 6 test runs are planned. A further 30 minutes is needed to prepare the test data. (a) How many minutes are needed for the test runs alone? (b) What is the total testing time in minutes? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 150 },
              { label: "b", answer: 180 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Testing time",
                statement: "Test runs plus test data preparation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "25 \\times 6 = 150 minutes for the test runs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "150 + 30 = 180 minutes total testing time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "150 minutes; 180 minutes",
          },
        },
        {
          id: "ciealc-u4-pj-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "During evaluation a project is assessed against 5 criteria: requirements, readability, efficiency, usability and documentation. The program fully meets 4 criteria and partly meets 1. (a) What percentage of the criteria are fully met? (b) If each fully met criterion is worth 20 marks out of 100, what total score does the program achieve? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80 },
              { label: "b", answer: 80 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evaluation score",
                statement: "Percentage and marks from criteria fully met.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "\\frac{4}{5} \\times 100 = 80 percent of criteria fully met.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "4 \\times 20 = 80 marks out of 100.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "80 percent; 80 marks",
          },
        },
        {
          id: "ciealc-u4-pj-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student must design a program to record attendance at school clubs. Outline the main stages of the project lifecycle and describe what should happen at each stage.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project lifecycle",
                statement: "Design, implement, test, evaluate, maintain.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Design: produce a specification of requirements for recording club attendance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Implement and test: write the code and verify it with normal and edge-case inputs such as duplicate or missing entries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate and maintain: check the program meets all requirements and document it; afterwards fix faults and add features such as new club lists.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Design, implement, test, evaluate and maintain, with a brief description of each stage.",
          },
        },
        {
          id: "ciealc-u4-pj-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain what is meant by a specification. (b) Describe two types of testing that should be carried out and why. (c) Discuss how a completed program should be evaluated before release. (d) Explain why documentation and maintenance are important after release.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project quality",
                statement:
                  "Specification, testing, evaluation, documentation and maintenance ensure a successful project.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) A specification is the set of requirements defining what the program must do; it guides design and evaluation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Normal-case testing verifies typical inputs work correctly; edge-case testing checks boundary or unusual inputs; error testing verifies invalid inputs are handled. Any two with reasons accepted.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Evaluation checks the program against the specification and criteria such as readability, efficiency, usability and documentation, identifying strengths and weaknesses before release.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) Documentation helps users and maintainers understand the program; maintenance fixes faults and adds features so the program remains useful after release.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Specification, testing types, evaluation and post-release documentation and maintenance.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-pj-notes",
      title: "Project — notes",
      summary:
        "Project lifecycle: design→implement→test→evaluate→maintain. Test thoroughly, document well.",
      sections: [
        {
          heading: "Key idea",
          body: "Good projects meet requirements, are tested thoroughly, well documented.",
        },
        {
          heading: "Evaluation",
          body: "Does it work? Is it efficient? Is it maintainable?",
        },
      ],
    },
  ],
};
