import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "olam-u9-lesson-9-1",
  code: "9-1",
  title: "Permutations",
  goal: "I CAN calculate permutations of distinct and repeated items.",
  standards: ["Cambridge O Level Additional Mathematics 4037: permutations and combinations"],
  vocabulary: [
    { term: "Permutation", definition: "Arrangement where ORDER matters." },
    { term: "nPr", definition: "Number of ways to arrange r of n distinct items: $\\frac{n!}{(n-r)!}$." },
    { term: "Factorial", definition: "$n! = n \\times (n-1) \\times \\cdots \\times 1$." },
    { term: "Repeated items", definition: "Identical items reduce distinct arrangements." },
  ],
  concepts: [
    {
      id: "olam-u9-s1-permutations",
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
          id: "olam-u9-pm-q1",
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
          id: "olam-u9-pm-q2",
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
          id: "olam-u9-pm-q3",
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
          id: "olam-u9-pm-q4",
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
      ],
    },
  ],
  notes: [
    {
      id: "olam-u9-pm-notes",
      title: "Permutations — revision notes",
      summary: "Order matters: n!, nPr, repeats ÷r!, circular (n−1)!.",
      sections: [
        { heading: "Formulas", body: "$n!$ all; $^nP_r = \\frac{n!}{(n-r)!}$; repeats divide by $r!$ each; circular $(n-1)!$." },
        { heading: "Key idea", body: "Permutation = arrangement where swapping two items gives a DIFFERENT arrangement." },
      ],
    },
  ],
};
