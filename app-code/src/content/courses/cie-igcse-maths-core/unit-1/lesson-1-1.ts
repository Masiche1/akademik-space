import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cimg-u1-lesson-1-1",
  code: "1-1",
  title: "Number Types and Operations",
  goal: "I CAN identify number types and apply BIDMAS.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: number"],
  vocabulary: [
    { term: "Integer", definition: "A whole number, positive, negative or zero." },
    { term: "Rational", definition: "A number that can be written as a fraction." },
    { term: "Irrational", definition: "A number that cannot be written as a simple fraction, like $\\pi$ or $\\sqrt{2}$." },
    { term: "Prime", definition: "A number with exactly two factors." },
    { term: "BIDMAS", definition: "Order of operations: Brackets, Indices, Division/Multiplication, Addition/Subtraction." },
  ],
  concepts: [
    {
      id: "cimg-u1-s1-types",
      title: "Types of number",
      skill: "Classify numbers at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Number sets",
            body: "Natural numbers $1, 2, 3, \\ldots$; integers add negatives and zero; rational numbers can be fractions ($\\frac{1}{2}$, $0.75$); irrational numbers cannot ($\\pi$, $\\sqrt{2}$).",
          },
          {
            heading: "Primes and factors",
            body: "Prime numbers have exactly two factors. Every number can be written as a product of primes (prime factorisation): $60 = 2^2 \\times 3 \\times 5$.",
          },
        ],
        keyFormulas: [
          { name: "Prime factorisation", statement: "$60 = 2^2 \\times 3 \\times 5$" },
        ],
        workedExample: {
          problem: "Is $0.333\\ldots$ rational or irrational?",
          solution: "Rational — it equals $\\frac{1}{3}$, which is a fraction.",
        },
      },
      questions: [
        {
          id: "cimg-u1-s1-ty-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a prime number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "21" },
            { id: "b", text: "15" },
            { id: "c", text: "9" },
            { id: "d", text: "17" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prime", statement: "Exactly two factors." }],
            steps: [{ reasoning: "17 has only factors 1 and 17.", marks: 1, markCode: "B" }],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u1-s1-ty-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 84 as a product of prime factors.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Prime factorisation", statement: "Divide by primes." }],
            steps: [
              { reasoning: "$84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$.", marks: 1, markCode: "M" },
              { reasoning: "$2^2 \\times 3 \\times 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2^2 \\times 3 \\times 7$",
          },
        },
        {
          id: "cimg-u1-s1-ty-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is $\\sqrt{16}$ rational or irrational? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rational", statement: "Can be written as fraction." }],
            steps: [
              { reasoning: "$\\sqrt{16} = 4$, which is an integer.", marks: 1, markCode: "M" },
              { reasoning: "Integers are rational.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rational, since $\\sqrt{16} = 4$",
          },
        },
        {
          id: "cimg-u1-s1-ty-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the highest common factor (HCF) and lowest common multiple (LCM) of 24 and 36.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "HCF and LCM", statement: "Use prime factors." }],
            steps: [
              { reasoning: "$24 = 2^3 \\times 3$; $36 = 2^2 \\times 3^2$.", marks: 1, markCode: "M" },
              { reasoning: "HCF takes lowest powers: $2^2 \\times 3 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "LCM takes highest powers: $2^3 \\times 3^2 = 72$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HCF = 12, LCM = 72",
          },
        },
        {
          id: "cimg-u1-s1-ty-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these numbers is irrational?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pi$" },
            { id: "b", text: "$\\sqrt{9}$" },
            { id: "c", text: "$\\frac{2}{3}$" },
            { id: "d", text: "$0.5$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Irrational", statement: "Cannot be written as a fraction." }],
            steps: [{ reasoning: "$\\pi$ cannot be written as a fraction; the others can.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\pi$",
          },
        },
        {
          id: "cimg-u1-s1-ty-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 90 as a product of prime factors.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Prime factorisation", statement: "Divide by primes." }],
            steps: [
              { reasoning: "$90 = 2 \\times 45 = 2 \\times 3 \\times 15 = 2 \\times 3 \\times 3 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "$2 \\times 3^2 \\times 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2 \\times 3^2 \\times 5$",
          },
        },
        {
          id: "cimg-u1-s1-ty-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a rational number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sqrt{5}$" },
            { id: "b", text: "$\\sqrt{2}$" },
            { id: "c", text: "$0.333\\ldots$" },
            { id: "d", text: "$\\pi$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rational", statement: "Can be written as a fraction." }],
            steps: [{ reasoning: "$0.333\\ldots = \\frac{1}{3}$, which is a fraction.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.333\\ldots$",
          },
        },
        {
          id: "cimg-u1-s1-ty-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the highest common factor (HCF) and lowest common multiple (LCM) of 40 and 60.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "HCF and LCM", statement: "Use prime factors." }],
            steps: [
              { reasoning: "$40 = 2^3 \\times 5$; $60 = 2^2 \\times 3 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "HCF $= 2^2 \\times 5 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "LCM $= 2^3 \\times 3 \\times 5 = 120$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HCF = 20, LCM = 120",
          },
        },
        {
          id: "cimg-u1-s1-ty-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a factor of 48?",
          response: { type: "mcq", choices: [
            { id: "a", text: "16" },
            { id: "b", text: "14" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Factor", statement: "Divides exactly." }],
            steps: [{ reasoning: "$48 \\div 16 = 3$ exactly; the others do not divide 48.", marks: 1, markCode: "A" }],
            finalAnswer: "16",
          },
        },
        {
          id: "cimg-u1-s1-ty-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the largest prime factor of 84?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Prime factorisation", statement: "Factorise then pick largest prime." }],
            steps: [
              { reasoning: "$84 = 2^2 \\times 3 \\times 7$.", marks: 1, markCode: "M" },
              { reasoning: "Largest prime factor is 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cimg-u1-s1-ty-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write 252 as a product of prime factors.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Prime factorisation", statement: "Divide by primes." }],
            steps: [
              { reasoning: "$252 = 2 \\times 126 = 2 \\times 2 \\times 63 = 2^2 \\times 3^2 \\times 7$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $4 \\times 9 \\times 7 = 252$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2^2 \\times 3^2 \\times 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2^2 \\times 3^2 \\times 7$",
          },
        },
        {
          id: "cimg-u1-s1-ty-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an integer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{3}{2}$" },
            { id: "b", text: "$0.5$" },
            { id: "c", text: "$\\sqrt{3}$" },
            { id: "d", text: "$-4$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Integer", statement: "Whole number, positive, negative or zero." }],
            steps: [{ reasoning: "$-4$ is a whole number; the others are not.", marks: 1, markCode: "A" }],
            finalAnswer: "$-4$",
          },
        },
        {
          id: "cimg-u1-s1-ty-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the lowest common multiple (LCM) of 15 and 20.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "LCM", statement: "Use prime factors or list multiples." }],
            steps: [
              { reasoning: "$15 = 3 \\times 5$; $20 = 2^2 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "LCM $= 2^2 \\times 3 \\times 5 = 60$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "cimg-u1-s1-ty-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the highest common factor (HCF) of 36 and 54.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "HCF", statement: "Take lowest powers of shared primes." }],
            steps: [
              { reasoning: "$36 = 2^2 \\times 3^2$; $54 = 2 \\times 3^3$.", marks: 1, markCode: "M" },
              { reasoning: "Shared primes: $2^1 \\times 3^2$.", marks: 1, markCode: "M" },
              { reasoning: "HCF $= 2 \\times 9 = 18$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
          },
        },
        {
          id: "cimg-u1-s1-ty-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many prime numbers are there between 20 and 30?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "3" },
            { id: "d", text: "2" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prime", statement: "Exactly two factors." }],
            steps: [{ reasoning: "Primes are 23 and 29 — that's 2.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cimg-u1-s1-ty-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "A number has prime factorisation $2^3 \\times 3 \\times 5^2$. Write down the number.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Prime factorisation", statement: "Multiply the prime powers." }],
            steps: [
              { reasoning: "$2^3 = 8$; $5^2 = 25$.", marks: 1, markCode: "M" },
              { reasoning: "$8 \\times 3 \\times 25$.", marks: 1, markCode: "M" },
              { reasoning: "Number $= 600$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "600",
          },
        },
      ],
    },
    {
      id: "cimg-u1-s1-bidmas",
      title: "Order of operations",
      skill: "Apply BIDMAS correctly at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "BIDMAS",
            body: "Brackets first, then Indices, then Division/Multiplication (left to right), then Addition/Subtraction (left to right). Example: $3 + 4 \\times 2 = 3 + 8 = 11$, not 14.",
          },
          {
            heading: "Common errors",
            body: "Multiplication does not always come before division — they're the same level, work left to right. Same for addition and subtraction.",
          },
        ],
        keyFormulas: [
          { name: "BIDMAS", statement: "Brackets → Indices → Div/Mult → Add/Sub" },
        ],
        workedExample: {
          problem: "Work out $20 - 3 \\times 4 + 6 \\div 2$.",
          solution: "$3 \\times 4 = 12$; $6 \\div 2 = 3$; $20 - 12 + 3 = 11$.",
        },
      },
      questions: [
        {
          id: "cimg-u1-s1-bi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $5 + 3 \\times 4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "32" },
            { id: "b", text: "12" },
            { id: "c", text: "17" },
            { id: "d", text: "20" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Multiplication before addition." }],
            steps: [{ reasoning: "$3 \\times 4 = 12$; $5 + 12 = 17$.", marks: 1, markCode: "A" }],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u1-s1-bi-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $(8 - 3) \\times 4 + 6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 26 }] },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Brackets first." }],
            steps: [
              { reasoning: "$8 - 3 = 5$; $5 \\times 4 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "$20 + 6 = 26$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26",
          },
        },
        {
          id: "cimg-u1-s1-bi-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $2^3 + 4 \\times 5 - 10 \\div 2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 23 }] },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Indices before mult/div." }],
            steps: [
              { reasoning: "$2^3 = 8$; $4 \\times 5 = 20$; $10 \\div 2 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$8 + 20 - 5 = 23$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 23.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23",
          },
        },
        {
          id: "cimg-u1-s1-bi-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $\\frac{(12 - 4) \\times 3 + 10}{2}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Numerator first, then divide." }],
            steps: [
              { reasoning: "$12 - 4 = 8$; $8 \\times 3 = 24$; $24 + 10 = 34$.", marks: 1, markCode: "M" },
              { reasoning: "$34 \\div 2 = 17$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u1-s1-bi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $12 \\div 3 + 2 \\times 5$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" },
            { id: "b", text: "22" },
            { id: "c", text: "14" },
            { id: "d", text: "34" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Division and multiplication before addition." }],
            steps: [{ reasoning: "$12 \\div 3 = 4$; $2 \\times 5 = 10$; $4 + 10 = 14$.", marks: 1, markCode: "A" }],
            finalAnswer: "14",
          },
        },
        {
          id: "cimg-u1-s1-bi-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $3 + 4 \\times (6 - 2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 19 }] },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Brackets, then multiplication, then addition." }],
            steps: [
              { reasoning: "$6 - 2 = 4$; $4 \\times 4 = 16$.", marks: 1, markCode: "M" },
              { reasoning: "$3 + 16 = 19$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "19",
          },
        },
        {
          id: "cimg-u1-s1-bi-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $50 - 8 \\div 4 \\times 3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 44 }] },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Division and multiplication left to right." }],
            steps: [
              { reasoning: "$8 \\div 4 = 2$; $2 \\times 3 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "$50 - 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 44.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "44",
          },
        },
        {
          id: "cimg-u1-s1-bi-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out $2^3 + 3^2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "17" },
            { id: "b", text: "25" },
            { id: "c", text: "14" },
            { id: "d", text: "13" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Indices before addition." }],
            steps: [{ reasoning: "$2^3 = 8$; $3^2 = 9$; $8 + 9 = 17$.", marks: 1, markCode: "A" }],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u1-s1-bi-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $(18 - 6) \\div 2 + 5^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 31 }] },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Brackets, indices, division, addition." }],
            steps: [
              { reasoning: "$18 - 6 = 12$; $12 \\div 2 = 6$; $5^2 = 25$.", marks: 1, markCode: "M" },
              { reasoning: "$6 + 25$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 31.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "31",
          },
        },
        {
          id: "cimg-u1-s1-bi-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $24 \\div (3 + 5) \\times 4 + 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Brackets first, then left to right." }],
            steps: [
              { reasoning: "$3 + 5 = 8$; $24 \\div 8 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "$3 \\times 4 = 12$; $12 + 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 19.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "19",
          },
        },
        {
          id: "cimg-u1-s1-bi-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Work out $2(3 + 4)^2 - 10$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "88" },
            { id: "b", text: "78" },
            { id: "c", text: "68" },
            { id: "d", text: "58" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Bracket, index, multiply, subtract." }],
            steps: [
              { reasoning: "$3 + 4 = 7$; $7^2 = 49$; $2 \\times 49 = 98$.", marks: 1, markCode: "M" },
              { reasoning: "$98 - 10 = 88$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "88",
          },
        },
        {
          id: "cimg-u1-s1-bi-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out $36 \\div 4 + 2^3 \\times 5 - 7$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 42 }] },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Indices, then multiplication/division left to right, then addition/subtraction." }],
            steps: [
              { reasoning: "$2^3 = 8$; $36 \\div 4 = 9$; $8 \\times 5 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "$9 + 40 - 7$.", marks: 1, markCode: "M" },
              { reasoning: "$49 - 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 42.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "42",
          },
        },
        {
          id: "cimg-u1-s1-bi-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $15 - 3 \\times 4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "48" },
            { id: "b", text: "12" },
            { id: "c", text: "27" },
            { id: "d", text: "3" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Multiplication before subtraction." }],
            steps: [{ reasoning: "$3 \\times 4 = 12$; $15 - 12 = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cimg-u1-s1-bi-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $7 \\times (10 - 4) - 9$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "25" },
            { id: "b", text: "39" },
            { id: "c", text: "33" },
            { id: "d", text: "43" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Brackets, then multiplication, then subtraction." }],
            steps: [{ reasoning: "$10 - 4 = 6$; $7 \\times 6 = 42$; $42 - 9 = 33$.", marks: 1, markCode: "A" }],
            finalAnswer: "33",
          },
        },
        {
          id: "cimg-u1-s1-bi-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Insert one pair of brackets into $2 + 3 \\times 4$ to make the answer 20.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Brackets change the order." }],
            steps: [
              { reasoning: "Without brackets: $2 + 12 = 14$.", marks: 1, markCode: "M" },
              { reasoning: "$(2 + 3) \\times 4 = 5 \\times 4 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(2 + 3) \\times 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2 + 3) \\times 4$",
          },
        },
        {
          id: "cimg-u1-s1-bi-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out $5^2 + 3 \\times (8 - 2)^2 \\div 6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 43 }] },
          markscheme: {
            principles: [{ kind: "law", name: "BIDMAS", statement: "Brackets, indices, multiplication/division left to right, addition." }],
            steps: [
              { reasoning: "$8 - 2 = 6$; $6^2 = 36$; $5^2 = 25$.", marks: 1, markCode: "M" },
              { reasoning: "$3 \\times 36 = 108$; $108 \\div 6 = 18$.", marks: 1, markCode: "M" },
              { reasoning: "$25 + 18$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 43.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "43",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u1-s1-number-notes",
      title: "Number types and BIDMAS — revision notes",
      summary: "Number sets, primes, HCF/LCM, order of operations.",
      sections: [
        { heading: "Number types", body: "Integers, rationals ($\\frac{a}{b}$), irrationals ($\\pi$, $\\sqrt{2}$). Primes have two factors; use prime factorisation for HCF/LCM." },
        { heading: "BIDMAS", body: "Brackets → Indices → Division/Multiplication → Addition/Subtraction. Same-level operations go left to right." },
      ],
    },
  ],
};
