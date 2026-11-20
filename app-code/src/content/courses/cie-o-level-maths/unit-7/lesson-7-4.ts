import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "olm-u7-lesson-7-4",
  code: "7-4",
  title: "Tree Diagrams",
  goal: "I CAN use tree diagrams to calculate probabilities of multi-stage events.",
  standards: ["4024: probability"],
  vocabulary: [
    { term: "Tree diagram", definition: "Branching diagram showing all outcomes of multi-stage events." },
    { term: "Branch", definition: "One possible outcome at a stage." },
    { term: "Path probability", definition: "Product of branch probabilities along a path." },
    { term: "With/without replacement", definition: "Whether items return to the pool between draws." },
  ],
  concepts: [
    {
      id: "olm-u7-s4-tree",
      title: "Building tree diagrams",
      skill: "Construct and read tree diagrams at O Level.",
      lesson: {
        sections: [
          { heading: "Structure", body: "A tree diagram shows each stage as a set of branches. First-stage branches sum to 1; second-stage branches (conditional on first) also sum to 1 at each node. Multiply probabilities along each complete path to get that path's probability; add path probabilities for the required outcome. All complete paths sum to 1 — a built-in check." },
          { heading: "With and without replacement", body: "'With replacement' means probabilities stay the same at each stage (independent). 'Without replacement' means the pool shrinks — second-stage probabilities differ. Always read the question carefully: 'two sweets are taken' usually means without replacement. Draw the tree with actual numbers, not just labels." },
        ],
        keyFormulas: [
          { name: "Path probability", statement: "Product along branches" },
          { name: "Total", statement: "Sum of all paths = 1" },
        ],
        workedExample: { problem: "Bag: 3 red, 2 blue. Two drawn without replacement. P(both red)?", solution: "Path R-R: $\\frac35\\times\\frac24=\\frac{6}{20}=\\frac3{10}$." },
      },
      questions: [
        {
          id: "olm-u7-s4-tr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a tree diagram, the probabilities on branches from one node sum to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" }, { id: "b", text: "0" }, { id: "c", text: "Depends" }, { id: "d", text: "Number of branches" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Branches", statement: "Sum to 1." }], steps: [{ reasoning: "All outcomes at a stage sum to 1.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olm-u7-s4-tr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A coin is tossed twice. Draw the tree and find P(two heads).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tree", statement: "HH path." }], steps: [
            { reasoning: "HH path: $\\frac12\\times\\frac12=\\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac14$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "olm-u7-s4-tr-q3", difficulty: "core", totalMarks: 3,
          stem: "Bag has 4 red, 6 blue. Two drawn without replacement. Find P(one red, one blue).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two paths", statement: "RB + BR." }], steps: [
            { reasoning: "RB: $\\frac4{10}\\times\\frac6{9}=\\frac{24}{90}$; BR: $\\frac6{10}\\times\\frac4{9}=\\frac{24}{90}$.", marks: 1, markCode: "M" },
            { reasoning: "Total: $\\frac{48}{90}=\\frac8{15}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac8{15}$ ($\\approx0.533$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac8{15}$" },
        },
        {
          id: "olm-u7-s4-tr-q4", difficulty: "core", totalMarks: 4,
          stem: "A bag has 5 red, 3 blue. Two drawn without replacement. Find P(at least one blue).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complement via tree", statement: "1 - P(both red)." }], steps: [
            { reasoning: "RR: $\\frac58\\times\\frac47=\\frac{20}{56}=\\frac5{14}$.", marks: 1, markCode: "M" },
            { reasoning: "P(at least one blue) $=1-\\frac5{14}=\\frac9{14}$.", marks: 1, markCode: "M" },
            { reasoning: "Or: RB+BR+BB paths sum to same.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac9{14}$ ($\\approx0.643$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac9{14}$" },
        },
      ],
    },
    {
      id: "olm-u7-s4-conditional",
      title: "Conditional probability",
      skill: "Calculate conditional probabilities at O Level.",
      lesson: {
        sections: [
          { heading: "Conditional probability", body: "$P(A|B)=\\frac{P(A\\cap B)}{P(B)}$ — probability of A given B has happened. The condition changes the sample space: only outcomes in B are possible. From a tree diagram, conditional probabilities appear on second-stage branches directly. From a two-way table, divide the cell by the condition's marginal total." },
          { heading: "Independence", body: "Events are independent if $P(A|B)=P(A)$ — knowing B doesn't change A's probability. For independent events $P(A\\cap B)=P(A)\\times P(B)$. Test for independence by checking this equality; if it fails, events are dependent and you must use conditional probability carefully." },
        ],
        keyFormulas: [
          { name: "Conditional", statement: "$P(A|B)=\\frac{P(A\\cap B)}{P(B)}$" },
          { name: "Independent", statement: "$P(A\\cap B)=P(A)P(B)$" },
        ],
        workedExample: { problem: "P(A)=0.4, P(B)=0.5, P(A∩B)=0.2. Are A and B independent?", solution: "$P(A)P(B)=0.2=P(A\\cap B)$ → independent." },
      },
      questions: [
        {
          id: "olm-u7-s4-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$P(A|B)$ means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Probability of A given B occurred" }, { id: "b", text: "Probability of B given A" }, { id: "c", text: "Probability of A and B" }, { id: "d", text: "Probability of A or B" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Conditional", statement: "A given B." }], steps: [{ reasoning: "Standard notation.", marks: 1, markCode: "A" }], finalAnswer: "P(A given B)" },
        },
        {
          id: "olm-u7-s4-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "$P(A)=0.3, P(B)=0.4, P(A∩B)=0.12$. Are they independent?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Independence test", statement: "$P(A)P(B)=P(A\\cap B)$?" }], steps: [
            { reasoning: "$0.3\\times0.4=0.12=P(A\\cap B)$ → independent.", marks: 1, markCode: "M" },
            { reasoning: "Answer: yes.", marks: 1, markCode: "A" },
          ], finalAnswer: "Yes" },
        },
        {
          id: "olm-u7-s4-co-q3", difficulty: "core", totalMarks: 3,
          stem: "$P(A)=0.6, P(B)=0.5, P(A∩B)=0.2$. Find $P(A|B)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Conditional", statement: "$P(A\\cap B)/P(B)$." }], steps: [
            { reasoning: "$P(A|B)=\\frac{0.2}{0.5}=0.4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.4.", marks: 1, markCode: "M" },
            { reasoning: "Note: $P(A|B)=0.4\\neq P(A)=0.6$ → dependent.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.4" },
        },
        {
          id: "olm-u7-s4-co-q4", difficulty: "core", totalMarks: 4,
          stem: "Two dice rolled. Find P(sum=7 | first die shows 3).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional dice", statement: "Restrict sample space." }], steps: [
            { reasoning: "Given first die =3, second die must be 4 for sum 7.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac16$ (only one of 6 outcomes for second die).", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac16$.", marks: 1, markCode: "M" },
            { reasoning: "Check via formula: $P(\\text{sum7}\\cap\\text{first3})=\\frac1{36}$, $P(\\text{first3})=\\frac16$ → $\\frac{1/36}{1/6}=\\frac16$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac16$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u7-s4-tree-notes", title: "Tree diagrams & conditional probability — notes", summary: "Multi-stage probability.",
      sections: [
        { heading: "Trees", body: "Multiply along paths, add paths; branches sum to 1; without replacement changes stage-2 probs." },
        { heading: "Conditional", body: "$P(A|B)=P(A\\cap B)/P(B)$; independent iff $P(A\\cap B)=P(A)P(B)$." },
      ] },
  ],
};
