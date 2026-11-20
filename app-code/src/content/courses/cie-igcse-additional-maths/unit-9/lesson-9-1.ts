import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ciam-u9-lesson-9-1",
  code: "9-1",
  title: "Permutations",
  goal: "I CAN calculate permutations of distinct and repeated items.",
  standards: ["Cambridge IGCSE Additional Mathematics 0606: permutations and combinations"],
  vocabulary: [
    { term: "Permutation", definition: "Arrangement where ORDER matters." },
    { term: "nPr", definition: "Number of ways to arrange r of n distinct items: $\\frac{n!}{(n-r)!}$." },
    { term: "Factorial", definition: "$n! = n \\times (n-1) \\times \\cdots \\times 1$." },
    { term: "Repeated items", definition: "Identical items reduce distinct arrangements." },
  ],
  concepts: [
    {
      id: "ciam-u9-s1-permutations",
      title: "Permutations",
      skill: "Calculate arrangements where order matters.",
      lesson: {
        sections: [
          {
            heading: "Basic permutations",
            body: "Arranging n distinct objects: $n!$ ways. Arranging r of n objects (order matters): $^nP_r = \\frac{n!}{(n-r)!}$. E.g. arranging 3 of 5 books on a shelf: $^5P_3 = \\frac{5!}{2!} = 60$.",
          },
          {
            heading: "Repeated items",
            body: "With repeated items, divide by the factorials of the repeat counts: arrangements of MISSISSIPPI's letters $= \\frac{11!}{4! \\times 4! \\times 2!}$. Circular permutations of n distinct objects $= (n-1)!$ (rotations are identical).",
          },
        ],
        keyFormulas: [
          { name: "nPr", statement: "$\\frac{n!}{(n-r)!}$" },
          { name: "All n", statement: "$n!$" },
          { name: "Circular", statement: "$(n-1)!$" },
          { name: "Repeats", statement: "$\\frac{n!}{r_1!\\,r_2!\\cdots}$" },
        ],
        workedExample: {
          problem: "How many ways can 4 different books be arranged on a shelf?",
          solution: "$4! = 24$ ways.",
        },
      },
      questions: [
        {
          id: "ciam-u9-pm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many ways can 3 distinct books be arranged on a shelf?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" }, { id: "b", text: "3" }, { id: "c", text: "9" }, { id: "d", text: "27" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "n!", statement: "3! = 6." }],
            steps: [{ reasoning: "$3! = 3 \\times 2 \\times 1 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "ciam-u9-pm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $^5P_2$ (ways to arrange 2 of 5 distinct objects).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "$\\frac{n!}{(n-r)!}$." }],
            steps: [
              { reasoning: "$^5P_2 = \\frac{5!}{3!} = 5 \\times 4 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "ciam-u9-pm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many distinct arrangements are there of the letters in LEVEL?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Repeated items", statement: "$\\frac{n!}{r_1!r_2!\\cdots}$." }],
            steps: [
              { reasoning: "5 letters; E appears twice: $\\frac{5!}{2!}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{120}{2} = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "ciam-u9-pm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "In how many ways can 6 people be seated around a circular table?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Circular permutation", statement: "$(n-1)!$." }],
            steps: [
              { reasoning: "Rotations count as the same arrangement.", marks: 1, markCode: "M" },
              { reasoning: "Fix one person; arrange remaining 5: $5!$.", marks: 1, markCode: "M" },
              { reasoning: "$= 120$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 120.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120",
          },
        },
        {
          id: "ciam-u9-pm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many ways can 4 distinct flags be arranged in a row?",
          response: { type: "mcq", choices: [
            { id: "a", text: "24" }, { id: "b", text: "12" }, { id: "c", text: "16" }, { id: "d", text: "8" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "n!", statement: "4! = 4 × 3 × 2 × 1." }],
            steps: [{ reasoning: "$4! = 24$.", marks: 1, markCode: "A" }],
            finalAnswer: "24",
          },
        },
        {
          id: "ciam-u9-pm-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $^6P_2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "$\\frac{n!}{(n-r)!}$." }],
            steps: [
              { reasoning: "$^6P_2 = \\frac{6!}{4!} = 6 \\times 5 = 30$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "ciam-u9-pm-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many distinct arrangements are there of the letters in BANANA?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Repeated items", statement: "$\\frac{n!}{r_1!r_2!\\cdots}$." }],
            steps: [
              { reasoning: "6 letters; A appears 3 times, N twice: $\\frac{6!}{3! \\times 2!}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{720}{12} = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "ciam-u9-pm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In how many ways can 5 people be seated around a circular table?",
          response: { type: "mcq", choices: [
            { id: "a", text: "120" }, { id: "b", text: "24" }, { id: "c", text: "25" }, { id: "d", text: "5" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Circular permutation", statement: "$(n-1)!$." }],
            steps: [{ reasoning: "$(5-1)! = 4! = 24$.", marks: 1, markCode: "A" }],
            finalAnswer: "24",
          },
        },
        {
          id: "ciam-u9-pm-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $^7P_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 210 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "$\\frac{n!}{(n-r)!}$." }],
            steps: [
              { reasoning: "$^7P_3 = \\frac{7!}{4!} = 7 \\times 6 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "$= 210$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 210.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "210",
          },
        },
        {
          id: "ciam-u9-pm-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many distinct arrangements are there of the letters in SUCCESS?",
          response: { type: "numeric", parts: [{ label: "a", answer: 420 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Repeated items", statement: "$\\frac{n!}{r_1!r_2!\\cdots}$." }],
            steps: [
              { reasoning: "7 letters; S ×3, C ×2: $\\frac{7!}{3! \\times 2!}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{5040}{12} = 420$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 420.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "420",
          },
        },
        {
          id: "ciam-u9-pm-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In how many ways can 5 different books be arranged on a shelf?",
          response: { type: "mcq", choices: [
            { id: "a", text: "120" }, { id: "b", text: "25" }, { id: "c", text: "10" }, { id: "d", text: "20" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "n!", statement: "5! arrangements." }],
            steps: [{ reasoning: "$5! = 120$.", marks: 1, markCode: "A" }],
            finalAnswer: "120",
          },
        },
        {
          id: "ciam-u9-pm-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How many distinct arrangements are there of the letters in MISSISSIPPI?",
          response: { type: "numeric", parts: [{ label: "a", answer: 34650 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Repeated items", statement: "$\\frac{11!}{4!\\,4!\\,2!}$." }],
            steps: [
              { reasoning: "11 letters; I ×4, S ×4, P ×2: $\\frac{11!}{4! \\times 4! \\times 2!}$.", marks: 1, markCode: "M" },
              { reasoning: "$11! = 39916800$; denominator $= 24 \\times 24 \\times 2 = 1152$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{39916800}{1152} = 34650$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 34650.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "34650",
          },
        },
        {
          id: "ciam-u9-pm-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In how many ways can gold, silver and bronze medals be awarded to 8 athletes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "56" }, { id: "b", text: "336" }, { id: "c", text: "512" }, { id: "d", text: "720" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "Order matters: $^8P_3$." }],
            steps: [{ reasoning: "$^8P_3 = 8 \\times 7 \\times 6 = 336$.", marks: 1, markCode: "A" }],
            finalAnswer: "336",
          },
        },
        {
          id: "ciam-u9-pm-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Five people line up in a row. In how many arrangements do A and B sit next to each other?",
          response: { type: "mcq", choices: [
            { id: "a", text: "48" }, { id: "b", text: "120" }, { id: "c", text: "240" }, { id: "d", text: "96" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Block method", statement: "Treat the pair as one unit." }],
            steps: [{ reasoning: "Treat AB as a block: $4! \\times 2! = 24 \\times 2 = 48$.", marks: 1, markCode: "A" }],
            finalAnswer: "48",
          },
        },
        {
          id: "ciam-u9-pm-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Six people are to be seated around a circular table. In how many ways can they be seated if two particular people must sit together?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular + block", statement: "Treat the pair as one unit, then arrange circularly." }],
            steps: [
              { reasoning: "Treat the two people as a single block.", marks: 1, markCode: "M" },
              { reasoning: "Now 5 units around a circle: $(5 - 1)! = 4! = 24$ arrangements.", marks: 1, markCode: "M" },
              { reasoning: "The two people can swap within the block: $\\times 2!$.", marks: 1, markCode: "M" },
              { reasoning: "$24 \\times 2 = 48$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 48.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "48",
          },
        },
        {
          id: "ciam-u9-pm-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $^{10}P_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 720 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "$\\frac{n!}{(n-r)!}$." }],
            steps: [
              { reasoning: "$^{10}P_3 = \\frac{10!}{7!} = 10 \\times 9 \\times 8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 720.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "720",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciam-u9-pm-notes",
      title: "Permutations — revision notes",
      summary: "Order matters: n!, nPr, repeats ÷r!, circular (n−1)!.",
      sections: [
        { heading: "Formulas", body: "$n!$ all; $^nP_r = \\frac{n!}{(n-r)!}$; repeats divide by $r!$ each; circular $(n-1)!$." },
        { heading: "Key idea", body: "Permutation = arrangement where swapping two items gives a DIFFERENT arrangement." },
      ],
    },
  ],
};
