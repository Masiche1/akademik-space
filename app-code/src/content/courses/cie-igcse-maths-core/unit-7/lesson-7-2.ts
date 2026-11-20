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
