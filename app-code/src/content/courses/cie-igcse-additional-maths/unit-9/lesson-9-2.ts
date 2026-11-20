import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ciam-u9-lesson-9-2",
  code: "9-2",
  title: "Combinations",
  goal: "I CAN calculate combinations and solve counting problems.",
  standards: ["Cambridge IGCSE Additional Mathematics 0606: permutations and combinations"],
  vocabulary: [
    { term: "Combination", definition: "Selection where ORDER does NOT matter." },
    { term: "nCr", definition: "Number of ways to choose r of n items: $\\frac{n!}{r!(n-r)!}$." },
    { term: "Pascal's triangle", definition: "Triangle giving binomial coefficients $\\binom{n}{r}$." },
    { term: "Choosing vs arranging", definition: "Combinations count groups; permutations count orders." },
  ],
  concepts: [
    {
      id: "ciam-u9-s2-combinations",
      title: "Combinations and counting problems",
      skill: "Use nCr for selections and solve multi-stage counting problems.",
      lesson: {
        sections: [
          {
            heading: "Combinations",
            body: "Choosing r of n distinct objects where order doesn't matter: $^nC_r = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$. Symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$. E.g. choosing 3 of 8 committee members: $\\binom{8}{3} = 56$.",
          },
          {
            heading: "Counting principle and mixed problems",
            body: "For independent choices multiply; for 'or' cases add. Mixed problems: decide whether order matters first — committees, groups, hands of cards are combinations; rankings, arrangements, passwords are permutations. 'At least one' often uses complement: $1 - P(\\text{none})$.",
          },
        ],
        keyFormulas: [
          { name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$" },
          { name: "Symmetry", statement: "$\\binom{n}{r} = \\binom{n}{n-r}$" },
          { name: "Counting", statement: "Multiply for AND, add for OR" },
        ],
        workedExample: {
          problem: "How many ways can a committee of 3 be chosen from 7 people?",
          solution: "$\\binom{7}{3} = \\frac{7!}{3!4!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$.",
        },
      },
      questions: [
        {
          id: "ciam-u9-cb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $^5C_2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" }, { id: "b", text: "20" }, { id: "c", text: "25" }, { id: "d", text: "15" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$." }],
            steps: [{ reasoning: "$^5C_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$.", marks: 1, markCode: "A" }],
            finalAnswer: "10",
          },
        },
        {
          id: "ciam-u9-cb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A committee of 4 is chosen from 9 people. How many possible committees?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Combination", statement: "Order doesn't matter ⇒ nCr." }],
            steps: [
              { reasoning: "$\\binom{9}{4} = \\frac{9!}{4!5!} = \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 126$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 126.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "126",
          },
        },
        {
          id: "ciam-u9-cb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "From 5 boys and 4 girls, in how many ways can a team of 2 boys and 2 girls be chosen?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication", statement: "Choose boys × choose girls." }],
            steps: [
              { reasoning: "Boys: $\\binom{5}{2} = 10$; girls: $\\binom{4}{2} = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 10 \\times 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "ciam-u9-cb-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How many 4-digit numbers can be formed from digits 1–9 with no repeats? Is this a permutation or combination problem?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Permutations", statement: "Order matters ⇒ nPr." }],
            steps: [
              { reasoning: "Order matters (numbers differ by arrangement) ⇒ permutation.", marks: 1, markCode: "M" },
              { reasoning: "$^9P_4 = \\frac{9!}{5!} = 9 \\times 8 \\times 7 \\times 6 = 3024$.", marks: 1, markCode: "M" },
              { reasoning: "No division by 4! since order matters.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3024.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3024",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciam-u9-cb-notes",
      title: "Combinations — revision notes",
      summary: "nCr for selections; multiply independent choices.",
      sections: [
        { heading: "nCr", body: "$\\frac{n!}{r!(n-r)!}$; symmetry $\\binom{n}{r}=\\binom{n}{n-r}$." },
        { heading: "Strategy", body: "Order matters? → permutation. Group/committee? → combination. Multiply stages; add alternatives." },
      ],
    },
  ],
};
