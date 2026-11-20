import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "ciecs-u4-lesson-4-4",
  code: "4-4",
  title: "Paper 1 and Paper 2 Exam Technique",
  goal: "I CAN apply exam strategy to both IGCSE Computer Science papers.",
  standards: [
    "Cambridge IGCSE Computer Science 0478",
    "Exam technique: Papers 1 and 2",
  ],
  vocabulary: [
    {
      term: "Paper 1",
      definition: "Theory exam — multiple choice and structured questions.",
    },
    { term: "Paper 2", definition: "Problem-solving and programming exam." },
    {
      term: "Structured question",
      definition: "Multi-part question testing linked concepts.",
    },
    {
      term: "Mark allocation",
      definition: "Marks per part indicating expected answer depth.",
    },
    {
      term: "Revision cycle",
      definition: "Topic review → practice questions → weak-area focus.",
    },
  ],
  concepts: [
    {
      id: "ciecs-u4-s4-exam",
      title: "Exam technique for both papers",
      skill: "Apply strategy to Paper 1 theory and Paper 2 programming.",
      lesson: {
        sections: [
          {
            heading: "Paper 1 strategy",
            body: "Multiple-choice: eliminate obviously wrong options first, then verify. Structured questions: answer in order, match depth to marks (1 mark = one fact; 4+ marks = explained points). Definitions must be precise — 'a computer that...' answers lose marks.",
          },
          {
            heading: "Paper 2 strategy",
            body: "Read the whole task before coding. Write pseudocode for complex tasks to secure method marks. Check indentation in Python answers. Leave time to trace your code against the sample data given in the question.",
          },
        ],
        keyFormulas: [
          {
            name: "Marks = depth",
            statement: "1 mark = fact; 4+ marks = explained points",
          },
          {
            name: "Paper 2 order",
            statement: "read all → pseudocode → code → trace",
          },
        ],
        workedExample: {
          problem:
            "A 4-mark question asks 'Explain two benefits of encryption'.",
          solution:
            "Two points, each with a because-reason: confidentiality (only key holders read data) and integrity (tampering detectable).",
        },
      },
      questions: [
        {
          id: "ciecs-u4-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A Paper 1 question is worth 4 marks and asks you to 'explain' a concept. How many points should you aim for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One sentence" },
              { id: "b", text: "Two explained points" },
              { id: "c", text: "A list of ten facts" },
              { id: "d", text: "Whatever fits" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Marks = depth",
                statement: "Match answer depth to marks.",
              },
            ],
            steps: [
              {
                reasoning: "4 marks ≈ two explained points with reasons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two explained points",
          },
        },
        {
          id: "ciecs-u4-ex-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you write pseudocode before Python code in a complex Paper 2 task?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pseudocode first",
                statement: "Secures method marks before syntax.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pseudocode shows the algorithm design earns method marks even if code has errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It separates logic from syntax — easier to debug the design first.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Secures method marks and separates logic from syntax",
          },
        },
        {
          id: "ciecs-u4-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A Paper 1 MCQ asks about 'the main function of an operating system'. Two options look plausible. Describe your elimination strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "MCQ strategy",
                statement: "Eliminate then verify.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Eliminate options that describe hardware or application software functions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check remaining options against the OS definition: manages hardware and software resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pick the option matching resource management, not just 'running programs'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Eliminate wrong-category options, then verify against the precise definition",
          },
        },
        {
          id: "ciecs-u4-ex-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a revision strategy for IGCSE CS 0478 covering both papers in the final two weeks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Revision cycle",
                statement: "Diagnose → review → practice → re-diagnose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Week 1: diagnostic past papers to find weak topics in each paper.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Review weak theory topics for Paper 1 and weak programming patterns for Paper 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Daily timed practice: MCQs + one programming task per day.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Final days: full past papers under exam conditions, then targeted review of remaining errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Diagnose → targeted review → daily timed practice → exam-condition past papers",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u4-exam-notes",
      title: "Exam technique — revision notes",
      summary:
        "Marks=depth, MCQ elimination, pseudocode first, revision cycle.",
      sections: [
        {
          heading: "Key skills",
          body: "Match answer depth to marks; eliminate then verify MCQs; pseudocode before code; trace your code before finishing.",
        },
        {
          heading: "Exam tips",
          body: "Paper 1: definitions must be precise. Paper 2: leave 5 minutes to trace your program against given sample data.",
        },
      ],
    },
  ],
};
