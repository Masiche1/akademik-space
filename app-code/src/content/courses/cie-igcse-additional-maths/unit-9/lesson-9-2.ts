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
            { id: "a", text: "20" },
            { id: "b", text: "10" },
            { id: "c", text: "15" },
            { id: "d", text: "25" },
          ], correctChoiceId: "b" },
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
        {
          id: "ciam-u9-cb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $^6C_3$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "15" },
            { id: "b", text: "40" },
            { id: "c", text: "120" },
            { id: "d", text: "20" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$." }],
            steps: [{ reasoning: "$^6C_3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$.", marks: 1, markCode: "A" }],
            finalAnswer: "20",
          },
        },
        {
          id: "ciam-u9-cb-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $^7C_2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 21 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "$\\frac{n!}{r!(n-r)!}$." }],
            steps: [
              { reasoning: "$^7C_2 = \\frac{7 \\times 6}{2 \\times 1} = 21$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 21.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "21",
          },
        },
        {
          id: "ciam-u9-cb-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression is equal to $^6C_4$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$^5C_4$" },
            { id: "b", text: "$^4C_6$" },
            { id: "c", text: "$^6C_2$" },
            { id: "d", text: "$^6C_3$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Symmetry", statement: "$\\binom{n}{r} = \\binom{n}{n-r}$." }],
            steps: [{ reasoning: "$^6C_4 = ^6C_{6-4} = ^6C_2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$^6C_2$",
          },
        },
        {
          id: "ciam-u9-cb-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In how many ways can a committee of 3 be chosen from 8 people?",
          response: { type: "mcq", choices: [
            { id: "a", text: "336" },
            { id: "b", text: "512" },
            { id: "c", text: "56" },
            { id: "d", text: "24" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "nCr", statement: "Order doesn't matter ⇒ nCr." }],
            steps: [{ reasoning: "$\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$.", marks: 1, markCode: "A" }],
            finalAnswer: "56",
          },
        },
        {
          id: "ciam-u9-cb-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "From 6 men and 5 women, in how many ways can a team of 3 men and 2 women be chosen?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication", statement: "Choose men × choose women." }],
            steps: [
              { reasoning: "Men: $\\binom{6}{3} = 20$; women: $\\binom{5}{2} = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 20 \\times 10 = 200$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 200.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200",
          },
        },
        {
          id: "ciam-u9-cb-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A committee of 5 is chosen from 9 people. Choosing 5 members is equivalent to choosing how many people to leave out?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "$-4$" },
            { id: "c", text: "14" },
            { id: "d", text: "5" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Symmetry", statement: "$^9C_5 = ^9C_4$." }],
            steps: [{ reasoning: "$^9C_5 = ^9C_{9-5} = ^9C_4$ ⇒ leave out 4.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "ciam-u9-cb-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many ways can a selection of 3 fruits be made from 4 apples and 5 oranges?",
          response: { type: "mcq", choices: [
            { id: "a", text: "30" },
            { id: "b", text: "80" },
            { id: "c", text: "60" },
            { id: "d", text: "40" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cases", statement: "Add the possible splits." }],
            steps: [{ reasoning: "$\\binom{4}{2}\\binom{5}{1} + \\binom{4}{1}\\binom{5}{2} + \\binom{5}{3} = 30 + 40 + 10 = 80$.", marks: 1, markCode: "A" }],
            finalAnswer: "80",
          },
        },
        {
          id: "ciam-u9-cb-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A committee of 5 is chosen from 8 men and 7 women. In how many ways can it be chosen so that it includes at least 2 women?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cases", statement: "Add cases by number of women." }],
            steps: [
              { reasoning: "Cases: 2, 3, 4 or 5 women chosen.", marks: 1, markCode: "M" },
              { reasoning: "$\\binom{7}{2}\\binom{8}{3} + \\binom{7}{3}\\binom{8}{2} + \\binom{7}{4}\\binom{8}{1} + \\binom{7}{5}\\binom{8}{0}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 21 \\times 56 + 35 \\times 28 + 35 \\times 8 + 21 \\times 1 = 1176 + 980 + 280 + 21$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2457.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2457",
          },
        },
        {
          id: "ciam-u9-cb-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "3 balls are chosen from 5 red and 4 blue balls. How many selections contain at least one red ball?",
          response: { type: "mcq", choices: [
            { id: "a", text: "76" },
            { id: "b", text: "80" },
            { id: "c", text: "84" },
            { id: "d", text: "20" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "Total − none." }],
            steps: [{ reasoning: "$\\binom{9}{3} - \\binom{4}{3} = 84 - 4 = 80$.", marks: 1, markCode: "A" }],
            finalAnswer: "80",
          },
        },
        {
          id: "ciam-u9-cb-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In how many ways can a team of 4 be chosen from 10 people if 2 particular people must both be included in the team?",
          response: { type: "numeric", parts: [{ label: "a", answer: 28 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Forced members", statement: "Fix the two, choose the rest." }],
            steps: [
              { reasoning: "The 2 are included; choose remaining 2 from 8: $\\binom{8}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{8 \\times 7}{2} = 28$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 28.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "ciam-u9-cb-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In how many ways can 12 students be divided into two groups of 6?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Indistinguishable groups", statement: "Divide by 2! since the groups are unlabeled." }],
            steps: [
              { reasoning: "Choose first group: $\\binom{12}{6} = 924$.", marks: 1, markCode: "M" },
              { reasoning: "Each division counted twice (groups are interchangeable).", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{924}{2} = 462$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 462.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "462",
          },
        },
        {
          id: "ciam-u9-cb-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "From 7 boys and 5 girls, in how many ways can a team of 6 be chosen with more boys than girls?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cases", statement: "Add cases by boy/girl split." }],
            steps: [
              { reasoning: "Possible splits (b,g): (6,0), (5,1), (4,2) — need b > g and b+g = 6.", marks: 1, markCode: "M" },
              { reasoning: "$\\binom{7}{6}\\binom{5}{0} + \\binom{7}{5}\\binom{5}{1} + \\binom{7}{4}\\binom{5}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 7 \\times 1 + 21 \\times 5 + 35 \\times 10 = 7 + 105 + 350$.", marks: 1, markCode: "M" },
              { reasoning: "Sum $= 462$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 462.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "462",
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
