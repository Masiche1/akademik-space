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
            { id: "a", text: "6" },
            { id: "b", text: "3" },
            { id: "c", text: "27" },
            { id: "d", text: "9" },
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
        {
          id: "olam-u9-pm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many ways can 5 distinct flags be arranged in a row?",
          response: { type: "mcq", choices: [
            { id: "a", text: "120" },
            { id: "b", text: "10" },
            { id: "c", text: "60" },
            { id: "d", text: "25" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "n!", statement: "5! arrangements." }],
            steps: [{ reasoning: "$5! = 120$.", marks: 1, markCode: "A" }],
            finalAnswer: "120",
          },
        },
        {
          id: "olam-u9-pm-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $^4P_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 24 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "$\\frac{n!}{(n-r)!}$." }],
            steps: [
              { reasoning: "$^4P_3 = \\frac{4!}{1!} = 4 \\times 3 \\times 2 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "olam-u9-pm-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In how many ways can 3 of 6 different books be arranged on a shelf?",
          response: { type: "mcq", choices: [
            { id: "a", text: "216" },
            { id: "b", text: "720" },
            { id: "c", text: "120" },
            { id: "d", text: "20" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "Order matters ⇒ $^nP_r$." }],
            steps: [
              { reasoning: "$^6P_3 = \\frac{6!}{3!} = 6 \\times 5 \\times 4 = 120$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 120.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120",
          },
        },
        {
          id: "olam-u9-pm-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many distinct arrangements are there of the letters in BANANA?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Repeated items", statement: "$\\frac{n!}{r_1!r_2!\\cdots}$." }],
            steps: [
              { reasoning: "6 letters; A appears 3 times, N appears 2 times.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{6!}{3!\\,2!} = \\frac{720}{12}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "olam-u9-pm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In how many ways can 5 people be seated around a round table?",
          response: { type: "mcq", choices: [
            { id: "a", text: "120" },
            { id: "b", text: "24" },
            { id: "c", text: "25" },
            { id: "d", text: "60" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Circular permutation", statement: "$(n-1)!$." }],
            steps: [
              { reasoning: "Circular ⇒ $(5-1)! = 4! = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "olam-u9-pm-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the number of distinct arrangements of the letters in STATISTICS.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50400 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Repeated items", statement: "$\\frac{n!}{r_1!r_2!\\cdots}$." }],
            steps: [
              { reasoning: "10 letters: S×3, T×3, I×2, A×1, C×1.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{10!}{3!\\,3!\\,2!} = \\frac{3628800}{72}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50400.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50400",
          },
        },
        {
          id: "olam-u9-pm-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "A president, a secretary and a treasurer are to be chosen from 8 committee members, each holding a different post. In how many ways can this be done?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "Distinct posts ⇒ order matters." }],
            steps: [
              { reasoning: "Order matters (posts are distinct) ⇒ permutation.", marks: 1, markCode: "M" },
              { reasoning: "$^8P_3 = \\frac{8!}{5!} = 8 \\times 7 \\times 6$.", marks: 1, markCode: "M" },
              { reasoning: "$= 336$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 336.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "336",
          },
        },
        {
          id: "olam-u9-pm-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How many distinct arrangements are there of the letters in MISSISSIPPI?",
          response: { type: "numeric", parts: [{ label: "a", answer: 34650 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Repeated items", statement: "$\\frac{n!}{r_1!r_2!\\cdots}$." }],
            steps: [
              { reasoning: "11 letters: I×4, S×4, P×2, M×1.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{11!}{4!\\,4!\\,2!} = \\frac{39916800}{1152}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 34650$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 34650.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "34650",
          },
        },
        {
          id: "olam-u9-pm-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In how many ways can 4 boys and 3 girls be seated in a row if boys and girls must alternate?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cases", statement: "Two patterns: BGBGBGB or GBGBGBG." }],
            steps: [
              { reasoning: "Only two seating patterns are possible.", marks: 1, markCode: "M" },
              { reasoning: "Each pattern: arrange 4 boys ($4!$) and 3 girls ($3!$): $4! \\times 3! = 144$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 2 \\times 144$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 288.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "288",
          },
        },
        {
          id: "olam-u9-pm-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many ways can 4 people be arranged in a line?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "16" },
            { id: "c", text: "12" },
            { id: "d", text: "24" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "n!", statement: "4! arrangements." }],
            steps: [{ reasoning: "$4! = 24$.", marks: 1, markCode: "A" }],
            finalAnswer: "24",
          },
        },
        {
          id: "olam-u9-pm-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $^7P_4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 840 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "nPr", statement: "$\\frac{n!}{(n-r)!}$." }],
            steps: [
              { reasoning: "$^7P_4 = \\frac{7!}{3!} = 7 \\times 6 \\times 5 \\times 4$.", marks: 1, markCode: "M" },
              { reasoning: "$= 840$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 840.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "840",
          },
        },
        {
          id: "olam-u9-pm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How many 5-digit numbers can be formed using the digits 1 to 7 without repetition if each number must be even?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Restricted position", statement: "Fix the units digit first." }],
            steps: [
              { reasoning: "Even units digit: 3 choices (2, 4 or 6).", marks: 1, markCode: "M" },
              { reasoning: "Arrange remaining 4 digits from the other 6: $^6P_4 = 6 \\times 5 \\times 4 \\times 3 = 360$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 3 \\times 360$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1080.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1080",
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
