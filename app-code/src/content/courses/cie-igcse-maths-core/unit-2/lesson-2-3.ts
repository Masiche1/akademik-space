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
            { id: "a", text: "15" },
            { id: "b", text: "12" },
            { id: "c", text: "14" },
            { id: "d", text: "13" },
          ], correctChoiceId: "c" },
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
        {
          id: "cimg-u2-s3-se-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the next term in $9, 13, 17$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "22" },
            { id: "b", text: "24" },
            { id: "c", text: "20" },
            { id: "d", text: "21" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sequences", statement: "Add common difference." }],
            steps: [{ reasoning: "Difference is 4; $17 + 4 = 21$.", marks: 1, markCode: "A" }],
            finalAnswer: "21",
          },
        },
        {
          id: "cimg-u2-s3-se-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 5th term of $2, 4, 6, 8$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "9" },
            { id: "b", text: "10" },
            { id: "c", text: "12" },
            { id: "d", text: "8" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sequences", statement: "Continue the pattern." }],
            steps: [{ reasoning: "Sequence is even numbers: 5th term $= 10$.", marks: 1, markCode: "A" }],
            finalAnswer: "10",
          },
        },
        {
          id: "cimg-u2-s3-se-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the nth term of $3, 6, 9, 12$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3n$" },
            { id: "b", text: "$6n$" },
            { id: "c", text: "$n + 3$" },
            { id: "d", text: "$3n + 3$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Nth term", statement: "Multiples of 3." }],
            steps: [{ reasoning: "Each term is $3 \\times$ position: $3n$.", marks: 1, markCode: "A" }],
            finalAnswer: "$3n$",
          },
        },
        {
          id: "cimg-u2-s3-se-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "The nth term of a sequence is $5n + 3$. Find the 12th term.",
          response: { type: "numeric", parts: [{ label: "a", answer: 63 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Nth term", statement: "Substitute $n = 12$." }],
            steps: [
              { reasoning: "12th term $= 5 \\times 12 + 3$.", marks: 1, markCode: "M" },
              { reasoning: "$= 60 + 3 = 63$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 63.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "63",
          },
        },
        {
          id: "cimg-u2-s3-se-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the nth term of $10, 7, 4, 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Nth term", statement: "$an + b$ method; difference can be negative." }],
            steps: [
              { reasoning: "Common difference $= -3$, so $a = -3$.", marks: 1, markCode: "M" },
              { reasoning: "First term: $-3 \\times 1 + b = 10$ → $b = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Nth term: $-3n + 13$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3n + 13$",
          },
        },
        {
          id: "cimg-u2-s3-se-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the nth term of $2, 6, 12, 20$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic sequence", statement: "Constant second difference." }],
            steps: [
              { reasoning: "Differences: $4, 6, 8$; second differences all $2$, so quadratic starting with $n^2$.", marks: 1, markCode: "M" },
              { reasoning: "$n^2$ gives $1, 4, 9, 16$ — differences of $1$.", marks: 1, markCode: "M" },
              { reasoning: "Try $n^2 + n$: $2, 6, 12, 20$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Nth term: $n^2 + n$ (or $n(n+1)$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n^2 + n$",
          },
        },
        {
          id: "cimg-u2-s3-se-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the common difference of $3, 9, 15, 21$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sequences", statement: "Subtract consecutive terms." }],
            steps: [
              { reasoning: "$9 - 3 = 6$ (and all other differences are 6).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cimg-u2-s3-se-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the nth term of $5, 8, 13, 20$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic sequence", statement: "Differences of differences." }],
            steps: [
              { reasoning: "Differences: $3, 5, 7$; second differences all $2$, so coefficient of $n^2$ is $1$.", marks: 1, markCode: "M" },
              { reasoning: "$n^2$ gives $1, 4, 9, 16$; need $5, 8, 13, 20$ — difference $4$ each time.", marks: 1, markCode: "M" },
              { reasoning: "Nth term: $n^2 + 4$. Check $n = 3$: $9 + 4 = 13$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: $n^2 + 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n^2 + 4$",
          },
        },
        {
          id: "cimg-u2-s3-se-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these sequences is quadratic?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2, 5, 8, 11$" },
            { id: "b", text: "$5, 10, 15, 20$" },
            { id: "c", text: "$3, 6, 9, 12$" },
            { id: "d", text: "$1, 4, 9, 16$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic sequence", statement: "Constant second difference." }],
            steps: [{ reasoning: "$1, 4, 9, 16$ has differences $3, 5, 7$ and constant second difference $2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1, 4, 9, 16$",
          },
        },
        {
          id: "cimg-u2-s3-se-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the nth term of $3, 7, 15, 27$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic sequence", statement: "Second difference is 4, so $2n^2 + bn + c$." }],
            steps: [
              { reasoning: "Differences: $4, 8, 12$; second differences all $4$ → start with $2n^2$.", marks: 1, markCode: "M" },
              { reasoning: "$2n^2$ gives $2, 8, 18, 32$; subtract $-1, 1, -3, -5$ pattern → try $2n^2 - 2n + 3$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $n=1$: $2 - 2 + 3 = 3$; $n=2$: $8 - 4 + 3 = 7$; $n=3$: $18 - 6 + 3 = 15$; $n=4$: $32 - 8 + 3 = 27$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2n^2 - 2n + 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2n^2 - 2n + 3$",
          },
        },
        {
          id: "cimg-u2-s3-se-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The nth term of a sequence is $3n^2 - 1$. Find the term when $n = 5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 74 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Nth term", statement: "Substitute $n = 5$." }],
            steps: [
              { reasoning: "Term $= 3 \\times 5^2 - 1 = 3 \\times 25 - 1$.", marks: 1, markCode: "M" },
              { reasoning: "$= 75 - 1 = 74$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 74.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "74",
          },
        },
        {
          id: "cimg-u2-s3-se-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "The nth term of a sequence is $2n - 1$. Find the 50th term.",
          response: { type: "numeric", parts: [{ label: "a", answer: 99 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Nth term", statement: "Substitute $n = 50$." }],
            steps: [
              { reasoning: "50th term $= 2 \\times 50 - 1 = 100 - 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 99.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "99",
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
            { id: "a", text: "1" },
            { id: "b", text: "12" },
            { id: "c", text: "9" },
            { id: "d", text: "7" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u2-s3-fn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x) = x^2$, what is $f(4)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "8" },
            { id: "c", text: "4" },
            { id: "d", text: "16" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Substitute input." }],
            steps: [{ reasoning: "$f(4) = 4^2 = 16$.", marks: 1, markCode: "A" }],
            finalAnswer: "16",
          },
        },
        {
          id: "cimg-u2-s3-fn-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $f(x) = 5x + 2$, find $f(3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Substitute then evaluate." }],
            steps: [
              { reasoning: "$f(3) = 5 \\times 3 + 2 = 15 + 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u2-s3-fn-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x) = 2x - 3$, what is $f(0)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "$-1$" },
            { id: "c", text: "3" },
            { id: "d", text: "$-3$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Substitute $x = 0$." }],
            steps: [{ reasoning: "$f(0) = 2 \\times 0 - 3 = -3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-3$",
          },
        },
        {
          id: "cimg-u2-s3-fn-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x) = x^2 - 3$, find $f(4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Square before subtracting." }],
            steps: [
              { reasoning: "$f(4) = 4^2 - 3 = 16 - 3 = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "cimg-u2-s3-fn-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "If $f(x) = 3x - 1$ and $g(x) = x + 4$, find $f(g(2))$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite functions", statement: "Apply $g$ first, then $f$." }],
            steps: [
              { reasoning: "$g(2) = 2 + 4 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "$f(g(2)) = f(6) = 3 \\times 6 - 1 = 17$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u2-s3-fn-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $f(x) = x^2$, find $f(5) - f(3)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "34" },
            { id: "b", text: "4" },
            { id: "c", text: "2" },
            { id: "d", text: "16" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Evaluate each, then subtract." }],
            steps: [{ reasoning: "$25 - 9 = 16$.", marks: 1, markCode: "A" }],
            finalAnswer: "16",
          },
        },
        {
          id: "cimg-u2-s3-fn-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "If $f(x) = 2x + 3$, find the value of $x$ for which $f(x) = 11$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Set the rule equal to the output and solve." }],
            steps: [
              { reasoning: "$2x + 3 = 11$.", marks: 1, markCode: "M" },
              { reasoning: "$2x = 8$ → $x = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
          },
        },
        {
          id: "cimg-u2-s3-fn-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x) = x^2 + x$, find $f(3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Substitute $x = 3$." }],
            steps: [
              { reasoning: "$f(3) = 3^2 + 3 = 9 + 3 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cimg-u2-s3-fn-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "If $f(x) = 2x - 1$ and $g(x) = x^2$, find $fg(3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite functions", statement: "Apply $g$ first, then $f$." }],
            steps: [
              { reasoning: "$g(3) = 3^2 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "$fg(3) = f(9) = 2 \\times 9 - 1 = 17$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.", marks: 1, markCode: "M" },
              { reasoning: "Note order matters: this is $f(g(3))$, not $g(f(3))$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u2-s3-fn-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If $f(x) = 3x - 2$, what is $f(10)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "30" },
            { id: "b", text: "32" },
            { id: "c", text: "8" },
            { id: "d", text: "28" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Substitute $x = 10$." }],
            steps: [{ reasoning: "$f(10) = 3 \\times 10 - 2 = 28$.", marks: 1, markCode: "A" }],
            finalAnswer: "28",
          },
        },
        {
          id: "cimg-u2-s3-fn-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "If $f(x) = x^2 - 2x$, find $f(-3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Substitute $x = -3$ carefully." }],
            steps: [
              { reasoning: "$f(-3) = (-3)^2 - 2 \\times (-3)$.", marks: 1, markCode: "M" },
              { reasoning: "$= 9 + 6$.", marks: 1, markCode: "M" },
              { reasoning: "$= 15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cimg-u2-s3-fn-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $h(x) = 4 - x$, find $h(7)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Substitute $x = 7$." }],
            steps: [
              { reasoning: "$h(7) = 4 - 7 = -3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-3",
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
