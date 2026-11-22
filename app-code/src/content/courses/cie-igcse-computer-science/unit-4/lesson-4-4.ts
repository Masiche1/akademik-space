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
              { id: "b", text: "A list of ten facts" },
              { id: "c", text: "Whatever fits" },
              { id: "d", text: "Two explained points" },
            ],
            correctChoiceId: "d",
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
        {
          id: "ciecs-u4-ex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Paper 2, what should you do FIRST when you receive a programming task?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Check the clock" },
              { id: "b", text: "Read and understand the whole task" },
              { id: "c", text: "Write the hardest part first" },
              { id: "d", text: "Start typing code immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Paper 2 order",
                statement: "Read all → pseudocode → code → trace.",
              },
            ],
            steps: [
              {
                reasoning: "Reading the full task first prevents building the wrong solution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Read and understand the whole task",
          },
        },
        {
          id: "ciecs-u4-ex-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the best use of your final 5 minutes in a Paper 2 programming question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rewrite the whole program neatly" },
              { id: "b", text: "Move on to another question" },
              { id: "c", text: "Trace your code against the sample data and check indentation" },
              { id: "d", text: "Add more features" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Check before finish",
                statement: "Trace code and verify indentation.",
              },
            ],
            steps: [
              {
                reasoning: "Tracing against given sample data catches logic slips; indentation errors break Python.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "These checks protect marks already earned rather than risking new errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Trace your code against the sample data and check indentation",
          },
        },
        {
          id: "ciecs-u4-ex-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why matching the depth of your answer to the mark allocation matters, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Marks = depth",
                statement: "Marks indicate expected answer depth.",
              },
            ],
            steps: [
              {
                reasoning: "1-mark questions need one fact only; extra padding does not earn more.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher-mark questions need multiple explained points, e.g. 4 marks ≈ two points with reasons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: 'one benefit of encryption' at 1 mark vs 'explain two benefits' at 4 marks needs depth and justification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Match depth to marks: 1 mark = fact, 4+ marks = explained points",
          },
        },
        {
          id: "ciecs-u4-ex-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A structured question has parts marked 2, 4 and 6. What is the total number of marks?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mark allocation",
                statement: "Total marks = sum of part marks.",
              },
            ],
            steps: [
              {
                reasoning: "2 + 4 + 6 = 12 marks total.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "ciecs-u4-ex-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'eliminate then verify' mean when answering multiple-choice questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skip all MCQs" },
              { id: "b", text: "Guess first, then check the answer" },
              { id: "c", text: "Answer every question randomly" },
              { id: "d", text: "Remove obviously wrong options, then verify the remaining ones" },
            ],
            correctChoiceId: "d",
          },
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
                reasoning: "Removing clearly wrong options narrows the choice before careful verification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Remove obviously wrong options, then verify the remaining ones",
          },
        },
        {
          id: "ciecs-u4-ex-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe a three-step revision cycle for preparing theory topics for Paper 1.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Revision cycle",
                statement: "Diagnose → review → practice.",
              },
            ],
            steps: [
              {
                reasoning: "Step 1: review the topic and identify gaps (diagnose).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Step 2: study/revise the weak areas and key definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Step 3: test with past-paper questions and review errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Diagnose gaps → revise weak areas → practice and review errors",
          },
        },
        {
          id: "ciecs-u4-ex-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You finish a Paper 2 programming task with 8 minutes left. Outline exactly what you should do in that time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Time management",
                statement: "Reserve time to check, not to rewrite.",
              },
            ],
            steps: [
              {
                reasoning: "Trace the program line by line against the sample data given in the question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check every indented block belongs to the correct loop or if statement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify outputs match what the question requires, e.g. format and order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fix only confirmed errors; avoid risky last-minute rewrites.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Trace against sample data → check indentation → verify output → fix confirmed errors only",
          },
        },
        {
          id: "ciecs-u4-ex-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do vague definitions like 'a computer that does things' lose marks in Paper 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are too short to count" },
              { id: "b", text: "Paper 1 does not test definitions" },
              { id: "c", text: "They use the wrong language" },
              { id: "d", text: "They are not precise enough to show understanding" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Precise definitions",
                statement: "Definitions must state the essential function.",
              },
            ],
            steps: [
              {
                reasoning: "Examiner markschemes require specific, accurate statements of what something does.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** They are not precise enough to show understanding",
          },
        },
        {
          id: "ciecs-u4-ex-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student always answers the hardest questions first in Paper 1 and often runs out of time. Explain the problem with this approach and recommend a better strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Time management",
                statement: "Secure marks in order; hardest-first risks unfinished easy marks.",
              },
            ],
            steps: [
              {
                reasoning: "Problem: difficult questions consume time, leaving easy marks unanswered at the end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Problem: running out of time means later questions get no attempt at all.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strategy: answer questions in order or by confidence, securing marks steadily.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strategy: flag difficult questions, return to them with remaining time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hardest-first risks unanswered easy marks; answer in order, flag and return",
          },
        },
        {
          id: "ciecs-u4-ex-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is checking indentation especially important in Python answers for Paper 2?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the code look neat" },
              { id: "b", text: "It is not important" },
              { id: "c", text: "Python uses indentation to define code blocks" },
              { id: "d", text: "Examiners only award marks for neat code" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indentation",
                statement: "Defines block membership in Python.",
              },
            ],
            steps: [
              {
                reasoning: "Wrong indentation changes which statements belong to a loop or if block — it can break the program's logic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Python uses indentation to define code blocks",
          },
        },
        {
          id: "ciecs-u4-ex-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A past paper section has 25 multiple-choice questions worth 1 mark each and one programming question worth 15 marks. What percentage of the total marks are from the MCQs?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 62.5, tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mark weighting",
                statement: "Percentage = part marks / total marks × 100.",
              },
            ],
            steps: [
              {
                reasoning: "MCQ marks = 25 × 1 = 25; total = 25 + 15 = 40.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "25 / 40 × 100 = 62.5%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "62.5%",
          },
        },
        {
          id: "ciecs-u4-ex-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the most effective way to use official mark schemes when reviewing your past-paper answers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy the model answers into your notes" },
              { id: "b", text: "Memorise the mark scheme word for word" },
              { id: "c", text: "Compare your answer point-by-point to see which marks you missed and why" },
              { id: "d", text: "Ignore them — they only help examiners" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mark scheme review",
                statement: "Identify missed points and the reasons for them.",
              },
            ],
            steps: [
              {
                reasoning: "Point-by-point comparison reveals exactly which knowledge or technique cost marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Compare your answer point-by-point to see which marks you missed and why",
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
