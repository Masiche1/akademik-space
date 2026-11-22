import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "olam-u9-lesson-9-2",
  code: "9-2",
  title: "Combinations",
  goal: "I CAN calculate combinations and solve counting problems.",
  standards: ["Cambridge O Level Additional Mathematics 4037: permutations and combinations"],
  vocabulary: [
    { term: "Combination", definition: "Selection where ORDER does NOT matter." },
    { term: "nCr", definition: "Number of ways to choose r of n items: $\\frac{n!}{r!(n-r)!}$." },
    { term: "Pascal's triangle", definition: "Triangle giving binomial coefficients $\\binom{n}{r}$." },
    { term: "Choosing vs arranging", definition: "Combinations count groups; permutations count orders." },
  ],
  concepts: [
    {
      id: "olam-u9-s2-combinations",
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
          id: "olam-u9-cb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $^5C_2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "15" },
            { id: "b", text: "25" },
            { id: "c", text: "10" },
            { id: "d", text: "20" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$." }],
            steps: [{ reasoning: "$^5C_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$.", marks: 1, markCode: "A" }],
            finalAnswer: "10",
          },
        },
        {
          id: "olam-u9-cb-q2",
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
          id: "olam-u9-cb-q3",
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
          id: "olam-u9-cb-q4",
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
        {
          id: "olam-u9-cb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $^6C_2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "30" },
            { id: "b", text: "15" },
            { id: "c", text: "36" },
            { id: "d", text: "12" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$." }],
            steps: [{ reasoning: "$^6C_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$.", marks: 1, markCode: "A" }],
            finalAnswer: "15",
          },
        },
        {
          id: "olam-u9-cb-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $^7C_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 35 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$." }],
            steps: [
              { reasoning: "$^7C_3 = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 35.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35",
          },
        },
        {
          id: "olam-u9-cb-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "$^{10}C_8$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "90" },
            { id: "b", text: "45" },
            { id: "c", text: "2025" },
            { id: "d", text: "720" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Symmetry", statement: "$\\binom{n}{r}=\\binom{n}{n-r}$." }],
            steps: [{ reasoning: "$^{10}C_8 = ^{10}C_2 = \\frac{10\\times9}{2} = 45$.", marks: 1, markCode: "A" }],
            finalAnswer: "45",
          },
        },
        {
          id: "olam-u9-cb-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "In how many ways can a committee of 5 be chosen from 12 people?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Combination", statement: "Order doesn't matter ⇒ nCr." }],
            steps: [
              { reasoning: "$\\binom{12}{5} = \\frac{12!}{5!\\,7!} = \\frac{12\\times11\\times10\\times9\\times8}{120}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{95040}{120} = 792$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 792.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "792",
          },
        },
        {
          id: "olam-u9-cb-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many ways can 2 books be chosen from a shelf of 8 different books?",
          response: { type: "numeric", parts: [{ label: "a", answer: 28 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "Selection, not arrangement." }],
            steps: [
              { reasoning: "$\\binom{8}{2} = \\frac{8\\times7}{2} = 28$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 28.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "olam-u9-cb-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choosing 3 marbles from a bag where order does NOT matter uses…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Permutations" },
            { id: "b", text: "Factorials only" },
            { id: "c", text: "Combinations" },
            { id: "d", text: "Addition" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Combination", statement: "Order doesn't matter." }],
            steps: [{ reasoning: "Order irrelevant ⇒ combination $^nC_r$.", marks: 1, markCode: "A" }],
            finalAnswer: "Combinations",
          },
        },
        {
          id: "olam-u9-cb-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "From 6 boys and 5 girls, in how many ways can a team of 3 boys and 2 girls be chosen?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication", statement: "Choose boys × choose girls." }],
            steps: [
              { reasoning: "Boys: $\\binom{6}{3} = 20$; girls: $\\binom{5}{2} = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 20 \\times 10 = 200$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 200.", marks: 1, markCode: "M" },
              { reasoning: "Independent choices multiply.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200",
          },
        },
        {
          id: "olam-u9-cb-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $^8C_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 56 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$." }],
            steps: [
              { reasoning: "$^8C_3 = \\frac{8\\times7\\times6}{3\\times2\\times1} = \\frac{336}{6} = 56$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 56.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "56",
          },
        },
        {
          id: "olam-u9-cb-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is equal to $^6C_4$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$^6C_1$" },
            { id: "b", text: "$^6C_5$" },
            { id: "c", text: "$^6C_2$" },
            { id: "d", text: "$^4C_2$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Symmetry", statement: "$\\binom{6}{4}=\\binom{6}{2}$." }],
            steps: [{ reasoning: "$6-4=2$ so $^6C_4=^6C_2=15$.", marks: 1, markCode: "A" }],
            finalAnswer: "$^6C_2$",
          },
        },
        {
          id: "olam-u9-cb-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "From 7 men and 5 women, in how many ways can a committee of 2 men and 2 women be chosen?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication", statement: "Choose men × choose women." }],
            steps: [
              { reasoning: "Men: $\\binom{7}{2} = 21$; women: $\\binom{5}{2} = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 21 \\times 10 = 210$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 210.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "210",
          },
        },
        {
          id: "olam-u9-cb-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $^{10}C_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$." }],
            steps: [
              { reasoning: "$^{10}C_3 = \\frac{10\\times9\\times8}{3\\times2\\times1} = \\frac{720}{6} = 120$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 120.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120",
          },
        },
        {
          id: "olam-u9-cb-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A committee of 5 is chosen from 12 people. In how many of these committees is a particular person, say Alice, included?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conditioned choice", statement: "Fix Alice, choose remaining 4 from 11." }],
            steps: [
              { reasoning: "Alice is fixed in; choose 4 more from the other 11: $\\binom{11}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\binom{11}{4} = \\frac{11\\times10\\times9\\times8}{24} = \\frac{7920}{24} = 330$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 330.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\binom{12}{5}=792$ total; fraction with Alice $=\\frac{5}{12}$; $792\\times\\frac{5}{12}=330$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "330",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olam-u9-cb-notes",
      title: "Combinations — revision notes",
      summary: "nCr for selections; multiply independent choices.",
      sections: [
        { heading: "nCr", body: "$\\frac{n!}{r!(n-r)!}$; symmetry $\\binom{n}{r}=\\binom{n}{n-r}$." },
        { heading: "Strategy", body: "Order matters? → permutation. Group/committee? → combination. Multiply stages; add alternatives." },
      ],
    },
  ],
};
