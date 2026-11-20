import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cimg-u2-lesson-2-3",
  code: "2-3",
  title: "Sequences and Functions",
  goal: "I CAN find sequence rules and understand function notation.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: sequences"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers following a pattern." },
    { term: "Term", definition: "A number in a sequence." },
    { term: "nth term", definition: "A formula giving any term in the sequence." },
    { term: "Function", definition: "A rule that maps inputs to outputs." },
    { term: "Domain", definition: "The set of input values." },
  ],
  concepts: [
    {
      id: "cimg-u2-s3-sequences",
      title: "Number sequences",
      skill: "Find patterns and nth terms at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Finding patterns",
            body: "Look at differences between terms. Constant difference → linear sequence ($+3$ each time). Increasing differences → quadratic. Try $an^2 + bn + c$ for quadratic sequences.",
          },
          {
            heading: "Nth term",
            body: "For linear sequences $an + b$: find $a$ from the common difference, then $b$ from the first term. Sequence $5, 8, 11, 14$: difference 3, so $3n + 2$.",
          },
        ],
        keyFormulas: [
          { name: "Nth term", statement: "$a_n = an + b$" },
        ],
        workedExample: {
          problem: "Find the nth term of $4, 7, 10, 13$.",
          solution: "Common difference 3; first term 4 = $3 \\times 1 + 1$, so $3n + 1$.",
        },
      },
      questions: [
        {
          id: "cimg-u2-s3-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the next term in $2, 5, 8, 11$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "13" }, { id: "b", text: "14" }, { id: "c", text: "12" }, { id: "d", text: "15" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sequences", statement: "Add common difference." }],
            steps: [{ reasoning: "Difference is 3; $11 + 3 = 14$.", marks: 1, markCode: "A" }],
            finalAnswer: "14",
          },
        },
        {
          id: "cimg-u2-s3-se-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the 10th term of $3, 7, 11, 15$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 39 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Nth term", statement: "Find rule then substitute." }],
            steps: [
              { reasoning: "Difference 4; nth term $= 4n - 1$.", marks: 1, markCode: "M" },
              { reasoning: "10th term $= 4 \\times 10 - 1 = 39$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "39",
          },
        },
        {
          id: "cimg-u2-s3-se-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the nth term of $7, 12, 17, 22$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Nth term", statement: "$an + b$ method." }],
            steps: [
              { reasoning: "Common difference 5, so $a = 5$.", marks: 1, markCode: "M" },
              { reasoning: "First term $5 \\times 1 + b = 7$ → $b = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Nth term: $5n + 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5n + 2$",
          },
        },
        {
          id: "cimg-u2-s3-se-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the nth term of $1, 4, 9, 16$ and use it to find the 20th term.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic sequence", statement: "Differences of differences." }],
            steps: [
              { reasoning: "Differences: $3, 5, 7$ — second differences all 2, so quadratic with $n^2$.", marks: 1, markCode: "M" },
              { reasoning: "$n^2$ gives $1, 4, 9, 16$ — nth term is $n^2$.", marks: 1, markCode: "M" },
              { reasoning: "20th term $= 20^2 = 400$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: nth term $= n^2$, 20th term $= 400$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n^2$; 400",
          },
        },
      ],
    },
    {
      id: "cimg-u2-s3-functions",
      title: "Functions",
      skill: "Understand function notation and evaluate functions.",
      lesson: {
        sections: [
          {
            heading: "Function notation",
            body: "$f(x) = 3x + 1$ means the function $f$ takes input $x$ and outputs $3x + 1$. $f(2) = 3 \\times 2 + 1 = 7$.",
          },
          {
            heading: "Composite functions",
            body: "$fg(x)$ means apply $g$ first, then $f$. If $f(x) = x + 2$ and $g(x) = 3x$, then $fg(x) = f(3x) = 3x + 2$.",
          },
        ],
        keyFormulas: [
          { name: "Function", statement: "$f(x) = $ rule for output" },
        ],
        workedExample: {
          problem: "If $f(x) = 2x - 3$, find $f(5)$.",
          solution: "$f(5) = 2 \\times 5 - 3 = 7$.",
        },
      },
      questions: [
        {
          id: "cimg-u2-s3-fn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x) = x + 4$, what is $f(3)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" }, { id: "b", text: "12" }, { id: "c", text: "1" }, { id: "d", text: "9" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Substitute input." }],
            steps: [{ reasoning: "$f(3) = 3 + 4 = 7$.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cimg-u2-s3-fn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $g(x) = 3x - 1$, find $g(4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Evaluate." }],
            steps: [
              { reasoning: "$g(4) = 3 \\times 4 - 1 = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 11.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "cimg-u2-s3-fn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "If $f(x) = 2x + 5$, find $f(3) - f(1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Evaluate each then subtract." }],
            steps: [
              { reasoning: "$f(3) = 11$; $f(1) = 7$.", marks: 1, markCode: "M" },
              { reasoning: "$11 - 7 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cimg-u2-s3-fn-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: ".",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite functions", statement: "Apply g then f." }],
            steps: [
              { reasoning: "$g(5) = 5 - 2 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "$fg(5) = f(3) = 3^2 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u2-s3-seq-notes",
      title: "Sequences and functions — revision notes",
      summary: "Nth term, function notation, composite functions.",
      sections: [
        { heading: "Sequences", body: "Linear: constant difference → $an + b$. Quadratic: constant second difference → $an^2 + bn + c$." },
        { heading: "Functions", body: "$f(x)$ means output for input $x$. $fg(x)$ = apply $g$ first, then $f$." },
      ],
    },
  ],
};
