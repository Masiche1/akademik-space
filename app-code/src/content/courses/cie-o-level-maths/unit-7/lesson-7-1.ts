import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "olm-u7-lesson-7-1",
  code: "7-1",
  title: "Probability",
  goal: "I CAN calculate probabilities of simple and combined events.",
  standards: ["4024: probability"],
  vocabulary: [
    { term: "Probability", definition: "Likelihood of event: $P(E)=\\frac{\\text{favourable}}{\\text{total}}$." },
    { term: "Mutually exclusive", definition: "Events that cannot both happen." },
    { term: "Independent", definition: "One event doesn't affect the other." },
    { term: "Sample space", definition: "All possible outcomes." },
  ],
  concepts: [
    {
      id: "olm-u7-s1-basic",
      title: "Basic probability",
      skill: "Calculate simple probabilities at O Level.",
      lesson: {
        sections: [
          { heading: "The basics", body: "Probability ranges from 0 (impossible) to 1 (certain). For equally likely outcomes, $P(E)=\\frac{\\text{number favourable}}{\\text{total outcomes}}$. Probabilities of all outcomes sum to 1 — useful for finding missing probabilities. $P(\\text{not }E)=1-P(E)$ — the complement rule saves time when 'not' is easier to count." },
          { heading: "Counting outcomes", body: "List the sample space systematically: for two coins {HH, HT, TH, TT}; for dice pairs make a grid. 'At least one' problems are often easiest via complement: $P(\\text{at least one})=1-P(\\text{none})$. Always check whether outcomes are equally likely — biased coins/dice change everything." },
        ],
        keyFormulas: [
          { name: "Probability", statement: "$P(E)=\\frac{\\text{favourable}}{\\text{total}}$" },
          { name: "Complement", statement: "$P(E')=1-P(E)$" },
        ],
        workedExample: { problem: "A bag has 3 red, 5 blue balls. Find P(red).", solution: "$P(\\text{red})=\\frac{3}{8}=0.375$." },
      },
      questions: [
        {
          id: "olm-u7-s1-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The probability of an impossible event is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" }, { id: "b", text: "1" }, { id: "c", text: "0.5" }, { id: "d", text: "Depends" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Probability scale", statement: "0 to 1." }], steps: [{ reasoning: "Impossible → 0.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "olm-u7-s1-ba-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A die is rolled. Find P(rolling a 6).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Probability", statement: "Favourable/total." }], steps: [
            { reasoning: "$P=\\frac16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac16$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac16$" },
        },
        {
          id: "olm-u7-s1-ba-q3", difficulty: "core", totalMarks: 3,
          stem: "A bag has 4 green and 6 yellow counters. Find P(not green).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complement", statement: "$1-P(E)$." }], steps: [
            { reasoning: "$P(\\text{green})=\\frac{4}{10}=0.4$ → $P(\\text{not green})=1-0.4=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "Or directly $\\frac{6}{10}=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.6.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.6" },
        },
        {
          id: "olm-u7-s1-ba-q4", difficulty: "core", totalMarks: 4,
          stem: "Two coins are tossed. Find P(at least one head).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complement", statement: "At least one = 1 - none." }], steps: [
            { reasoning: "Sample space: HH, HT, TH, TT (4 equally likely).", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{no heads})=P(TT)=\\frac14$ → $P(\\text{at least one})=\\frac34$.", marks: 1, markCode: "M" },
            { reasoning: "Or count directly: HH, HT, TH = 3 of 4 → $\\frac34$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac34$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac34$" },
        },
      ],
    },
    {
      id: "olm-u7-s1-combined",
      title: "Combined events",
      skill: "Calculate probabilities of combined events at O Level.",
      lesson: {
        sections: [
          { heading: "AND and OR", body: "For independent events: $P(A\\text{ and }B)=P(A)\\times P(B)$ — e.g. two dice, P(6 then 6) = $\\frac16\\times\\frac16=\\frac1{36}$. For mutually exclusive events: $P(A\\text{ or }B)=P(A)+P(B)$. If events aren't independent or mutually exclusive, draw a tree diagram or use the general addition rule carefully." },
          { heading: "Tree diagrams", body: "Tree diagrams organise multi-stage probabilities. Branch probabilities multiply along paths; add probabilities of all paths giving the required outcome. Always check: does the second stage depend on the first (sampling without replacement)? If yes, probabilities change — e.g. drawing two sweets without replacement." },
        ],
        keyFormulas: [
          { name: "Independent AND", statement: "$P(A)\\times P(B)$" },
          { name: "Mutually exclusive OR", statement: "$P(A)+P(B)$" },
        ],
        workedExample: { problem: "A bag has 2 red, 3 blue. Two balls drawn without replacement. Find P(both red).", solution: "$P=\\frac{2}{5}\\times\\frac{1}{4}=\\frac{2}{20}=\\frac1{10}$." },
      },
      questions: [
        {
          id: "olm-u7-s1-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For independent events, P(A and B) = …",
          response: { type: "mcq", choices: [
            { id: "a", text: "$P(A)\\times P(B)$" }, { id: "b", text: "$P(A)+P(B)$" }, { id: "c", text: "$P(A)-P(B)$" }, { id: "d", text: "$P(A)/P(B)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "AND rule", statement: "Multiply for independent." }], steps: [{ reasoning: "Standard rule.", marks: 1, markCode: "A" }], finalAnswer: "$P(A)\\times P(B)$" },
        },
        {
          id: "olm-u7-s1-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A fair coin is tossed twice. Find P(two heads).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Independent", statement: "Multiply." }], steps: [
            { reasoning: "$P=\\frac12\\times\\frac12=\\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac14$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "olm-u7-s1-co-q3", difficulty: "core", totalMarks: 3,
          stem: "A bag has 3 red, 2 blue. One ball drawn. Find P(red or blue).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Mutually exclusive OR", statement: "Add." }], steps: [
            { reasoning: "$P(\\text{red})=\\frac35$, $P(\\text{blue})=\\frac25$.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac35+\\frac25=1$ (certain — all balls are red or blue).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u7-s1-co-q4", difficulty: "core", totalMarks: 4,
          stem: "A bag has 4 red, 6 blue. Two balls drawn without replacement. Find P(both blue).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Without replacement", statement: "Probabilities change." }], steps: [
            { reasoning: "First blue: $\\frac{6}{10}=\\frac35$; second blue: $\\frac{5}{9}$.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac35\\times\\frac59=\\frac{15}{45}=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "Verified: without replacement, second draw has 5 blue of 9 left ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u7-s1-prob-notes", title: "Probability — notes", summary: "Basic and combined events.",
      sections: [
        { heading: "Rules", body: "$P(E)=\\text{fav}/\\text{total}$; complement $1-P$; independent AND multiply; exclusive OR add." },
        { heading: "Pitfalls", body: "Without replacement changes probabilities; 'at least one' via complement; list sample space for multi-stage." },
      ] },
  ],
};
