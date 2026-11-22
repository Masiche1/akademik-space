import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cimg-u7-lesson-7-2",
  code: "7-2",
  title: "Tree Diagrams and Conditional Probability",
  goal: "I CAN use tree diagrams and conditional probability for multi-stage events.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: probability trees"],
  vocabulary: [
    { term: "Tree diagram", definition: "Branching diagram showing sequential outcomes." },
    { term: "Conditional probability", definition: "Probability given that another event has occurred." },
    { term: "Without replacement", definition: "Item not returned, changing later probabilities." },
    { term: "With replacement", definition: "Item returned, probabilities stay the same." },
  ],
  concepts: [
    {
      id: "cimg-u7-s2-trees",
      title: "Tree diagrams and conditional probability",
      skill: "Calculate multi-stage probabilities with tree diagrams.",
      lesson: {
        sections: [
          {
            heading: "Drawing tree diagrams",
            body: "A tree diagram shows each stage's outcomes as branches. First-stage probabilities sum to 1; second-stage probabilities (per branch) also sum to 1. Multiply along branches to get joint probabilities; add across branches for the same final outcome. Always check that first-stage probabilities total 1.",
          },
          {
            heading: "Without replacement",
            body: "When items are not returned, probabilities change: e.g. two reds from a bag of 3 red and 2 blue — first $\\frac{3}{5}$, then $\\frac{2}{4}$, giving $\\frac{3}{5}\\times\\frac{2}{4}=\\frac{3}{10}$. With replacement, probabilities repeat. 'At least one' is often fastest via $1 - P(\\text{none})$.",
          },
        ],
        keyFormulas: [
          { name: "Joint probability", statement: "$P(A)\\times P(B\\mid A)$" },
          { name: "Total probability", statement: "Sum of branch products" },
        ],
        workedExample: {
          problem: "A bag has 3 red and 2 blue balls. Two are drawn without replacement. Find P(both red).",
          solution: "$P = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$.",
        },
      },
      questions: [
        {
          id: "cimg-u7-s2-tr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A fair coin is tossed twice. Find P(head then tail).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tree/independent", statement: "Multiply along branches." }],
            steps: [
              { reasoning: "$P(HT) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1}{4}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{4}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A bag has 4 red and 6 blue balls. Two are drawn without replacement. Find P(both blue).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Without replacement", statement: "Denominator decreases." }],
            steps: [
              { reasoning: "First blue: $\\frac{6}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "Second blue: $\\frac{5}{9}$.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\frac{6}{10}\\times\\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{3}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two coins are tossed. Find P(at least one head).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(\\text{none})$." }],
            steps: [
              { reasoning: "$P(\\text{no head}) = P(TT) = \\frac{1}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{at least one H}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{4}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{4}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A bag has 5 red and 3 blue balls. Two are drawn WITH replacement. Find P(one red and one blue, in any order).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "With replacement", statement: "Probabilities repeat; add both orders." }],
            steps: [
              { reasoning: "$P(RB) = \\frac{5}{8}\\times\\frac{3}{8} = \\frac{15}{64}$.", marks: 1, markCode: "M" },
              { reasoning: "$P(BR) = \\frac{3}{8}\\times\\frac{5}{8} = \\frac{15}{64}$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\frac{15}{64}+\\frac{15}{64} = \\frac{30}{64} = \\frac{15}{32}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{15}{32}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{15}{32}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has 2 red and 3 blue balls. Two are drawn without replacement. What is P(both blue)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{3}{10}$" },
            { id: "b", text: "$\\frac{2}{5}$" },
            { id: "c", text: "$\\frac{3}{25}$" },
            { id: "d", text: "$\\frac{1}{4}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Without replacement", statement: "Denominator decreases." }],
            steps: [{ reasoning: "$P = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{3}{10}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two fair coins are tossed. What is P(two tails)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{2}$" },
            { id: "b", text: "$\\frac{1}{4}$" },
            { id: "c", text: "$\\frac{1}{3}$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Independent events", statement: "Multiply along branches." }],
            steps: [{ reasoning: "$P(TT) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{4}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bag has 5 red and 5 blue balls. Two are drawn WITH replacement. Find P(both red).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "With replacement", statement: "Probabilities repeat." }],
            steps: [
              { reasoning: "$P(RR) = \\frac{5}{10} \\times \\frac{5}{10} = \\frac{1}{4} = 0.25$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.25",
          },
        },
        {
          id: "cimg-u7-s2-tr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bag has 3 red and 2 blue balls. Two are drawn without replacement. What is P(at least one red)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{9}{10}$" },
            { id: "b", text: "$\\frac{7}{10}$" },
            { id: "c", text: "$\\frac{3}{10}$" },
            { id: "d", text: "$\\frac{1}{10}$" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(\\text{both blue})$." }],
            steps: [{ reasoning: "$P(\\text{BB}) = \\frac{2}{5}\\times\\frac{1}{4} = \\frac{1}{10}$, so $P(\\text{at least one R}) = \\frac{9}{10}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{9}{10}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Three fair coins are tossed. Find P(at least one head).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(\\text{none})$." }],
            steps: [
              { reasoning: "$P(\\text{TTT}) = \\frac{1}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{at least one H}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{7}{8}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{8}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 3 green and 2 yellow balls. Two are drawn without replacement. Find P(both green).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Without replacement", statement: "Denominator decreases." }],
            steps: [
              { reasoning: "$P = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10} = 0.3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.3",
          },
        },
        {
          id: "cimg-u7-s2-tr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bag has 4 red and 4 blue balls. Two are drawn without replacement. What is P(one of each colour)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{3}{7}$" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "$\\frac{4}{7}$" },
            { id: "d", text: "$\\frac{1}{4}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Without replacement", statement: "Add both orders." }],
            steps: [{ reasoning: "$P = \\frac{4}{8}\\times\\frac{4}{7} + \\frac{4}{8}\\times\\frac{4}{7} = \\frac{16}{56}+\\frac{16}{56} = \\frac{4}{7}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{4}{7}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bag has 3 red and 2 blue balls. Two are drawn without replacement. Find P(exactly one red).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Without replacement", statement: "Add both orders." }],
            steps: [
              { reasoning: "$P(RB) = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "$P(BR) = \\frac{2}{5} \\times \\frac{3}{4} = \\frac{3}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\frac{3}{10} + \\frac{3}{10} = \\frac{6}{10} = \\frac{3}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{5}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A fair die is rolled and, if the number is even, a fair coin is tossed. Find P(even number and head).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sequential events", statement: "Multiply along branches." }],
            steps: [
              { reasoning: "$P(\\text{even}) = \\frac{1}{2}$ and $P(\\text{head}) = \\frac{1}{2}$; $P = \\frac{1}{4} = 0.25$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.25",
          },
        },
        {
          id: "cimg-u7-s2-tr-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bag has 2 green and 3 yellow balls. Two are drawn without replacement. Find P(at least one green).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(\\text{both yellow})$." }],
            steps: [
              { reasoning: "$P(YY) = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{at least one G}) = 1 - \\frac{3}{10} = \\frac{7}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{7}{10}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{10}$",
          },
        },
        {
          id: "cimg-u7-s2-tr-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Three fair coins are tossed. Find P(exactly one head).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.375 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sample space", statement: "Count favourable sequences." }],
            steps: [
              { reasoning: "Favourable: HTT, THT, TTH — 3 of 8 outcomes.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\frac{3}{8} = 0.375$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.375.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.375",
          },
        },
        {
          id: "cimg-u7-s2-tr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two independent spinners are spun. Spinner A wins with probability 0.3 and spinner B wins with probability 0.5. Find P(at least one spinner wins).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(\\text{both lose})$." }],
            steps: [
              { reasoning: "$P(A \\text{ loses}) = 0.7$ and $P(B \\text{ loses}) = 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{both lose}) = 0.7 \\times 0.5 = 0.35$.", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{at least one wins}) = 1 - 0.35 = 0.65$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.65.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.65",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u7-s2-tree-notes",
      title: "Tree diagrams — revision notes",
      summary: "Branch probabilities, multiply along, add across.",
      sections: [
        { heading: "Trees", body: "Multiply along branches; add same-outcome branches. Check first-stage sums to 1." },
        { heading: "Replacement", body: "Without: denominator shrinks. 'At least one': use $1-P(\\text{none})$." },
      ],
    },
  ],
};
