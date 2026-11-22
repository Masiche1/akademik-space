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
            { id: "a", text: "Number of branches" },
            { id: "b", text: "1" },
            { id: "c", text: "0" },
            { id: "d", text: "Depends" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u7-s4-tr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a tree diagram, the probabilities of all complete paths sum to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.5" },
            { id: "b", text: "Depends on stages" },
            { id: "c", text: "1" },
            { id: "d", text: "Number of paths" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Total probability", statement: "All paths sum to 1." }], steps: [{ reasoning: "Built-in check.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olm-u7-s4-tr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A fair coin is tossed twice. Find P(exactly one head).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Two paths", statement: "HT + TH." }], steps: [
            { reasoning: "$\\frac14+\\frac14=\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac12$ (0.5).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac12$" },
        },
        {
          id: "olm-u7-s4-tr-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A fair die is rolled twice. Find P(both rolls are even).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Independent stages", statement: "Multiply path probabilities." }], steps: [
            { reasoning: "$\\frac12\\times\\frac12=\\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac14$ (0.25).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "olm-u7-s4-tr-q8", difficulty: "core", totalMarks: 2,
          stem: "Drawing two sweets from a bag 'without replacement' means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The first sweet is not returned, so stage-2 probabilities differ" },
            { id: "b", text: "The bag is refilled" },
            { id: "c", text: "Only one sweet is drawn" },
            { id: "d", text: "The probabilities stay the same" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Without replacement", statement: "Pool shrinks." }], steps: [
            { reasoning: "First sweet removed → denominators change.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "First sweet not returned" },
        },
        {
          id: "olm-u7-s4-tr-q9", difficulty: "core", totalMarks: 3,
          stem: "A bag contains 2 red and 3 blue counters. Two are drawn without replacement. Find P(both are the same colour).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two paths", statement: "RR + BB." }], steps: [
            { reasoning: "RR: $\\frac25\\times\\frac14=\\frac1{10}$; BB: $\\frac35\\times\\frac24=\\frac3{10}$.", marks: 1, markCode: "M" },
            { reasoning: "Total $=\\frac{4}{10}=\\frac25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac25$ (0.4).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac25$" },
        },
        {
          id: "olm-u7-s4-tr-q10", difficulty: "core", totalMarks: 3,
          stem: "A bag has 5 white and 5 black balls. Two are drawn without replacement. Find P(one white and one black).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two paths", statement: "WB + BW." }], steps: [
            { reasoning: "WB: $\\frac{5}{10}\\times\\frac{5}{9}=\\frac{25}{90}$; BW same $=\\frac{25}{90}$.", marks: 1, markCode: "M" },
            { reasoning: "Total $=\\frac{50}{90}=\\frac59$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac59$ ($\\approx0.556$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac59$" },
        },
        {
          id: "olm-u7-s4-tr-q11", difficulty: "core", totalMarks: 3,
          stem: "A coin is tossed and a fair die rolled. Find P(head and an even number).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Independent events", statement: "Multiply." }], steps: [
            { reasoning: "$\\frac12\\times\\frac12=\\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac14$ (0.25).", marks: 1, markCode: "M" },
            { reasoning: "Check: all paths sum to 1 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "olm-u7-s4-tr-q12", difficulty: "challenge", totalMarks: 2,
          stem: "For draws without replacement, the second-stage branch probabilities…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Are always identical" },
            { id: "b", text: "Are all zero" },
            { id: "c", text: "Usually differ from the first stage" },
            { id: "d", text: "Sum to 2" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Without replacement", statement: "Pool changes." }], steps: [
            { reasoning: "Removing an item changes remaining probabilities.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Usually differ" },
        },
        {
          id: "olm-u7-s4-tr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A bag has 4 red and 6 blue counters. Two are drawn without replacement. Find P(at least one red).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complement", statement: "1 − P(both blue)." }], steps: [
            { reasoning: "BB: $\\frac6{10}\\times\\frac59=\\frac{30}{90}=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "P(at least one red) $=1-\\frac13=\\frac23$.", marks: 1, markCode: "M" },
            { reasoning: "Check via paths: RB+BR+RR $=\\frac{24+24+12}{90}=\\frac{60}{90}=\\frac23$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac23$ ($\\approx0.667$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac23$" },
        },
        {
          id: "olm-u7-s4-tr-q14", difficulty: "challenge", totalMarks: 2,
          stem: "A fair coin is tossed three times. P(at least one tail) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac12$" },
            { id: "b", text: "$\\frac78$" },
            { id: "c", text: "$\\frac38$" },
            { id: "d", text: "$\\frac18$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Complement", statement: "1 − P(HHH)." }], steps: [
            { reasoning: "$1-\\frac18=\\frac78$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $\\frac78$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac78$" },
        },
        {
          id: "olm-u7-s4-tr-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A bag has 3 green and 7 yellow counters. Two are drawn without replacement. Find P(both green), correct to 4 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.0667, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "technique", name: "Path probability", statement: "GG path." }], steps: [
            { reasoning: "$\\frac3{10}\\times\\frac29=\\frac6{90}=\\frac1{15}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx0.0667$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac1{15}\\approx0.0667$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac1{15}$" },
        },
        {
          id: "olm-u7-s4-tr-q16", difficulty: "challenge", totalMarks: 3,
          stem: "A bag has 6 red and 4 blue counters. Two are drawn without replacement. Find P(the two counters are different colours), correct to 3 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.533, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "technique", name: "Two paths", statement: "RB + BR." }], steps: [
            { reasoning: "RB: $\\frac6{10}\\times\\frac49=\\frac{24}{90}$; BR: $\\frac4{10}\\times\\frac69=\\frac{24}{90}$.", marks: 1, markCode: "M" },
            { reasoning: "Total $=\\frac{48}{90}=\\frac8{15}\\approx0.533$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac8{15}\\approx0.533$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac8{15}$" },
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
        {
          id: "olm-u7-s4-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$P(A|B)$ is defined as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{P(A\\cap B)}{P(B)}$" },
            { id: "b", text: "$\\frac{P(A)}{P(B)}$" },
            { id: "c", text: "$P(A)+P(B)$" },
            { id: "d", text: "$P(A)\\times P(B)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Conditional", statement: "Intersection over condition." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{P(A\\cap B)}{P(B)}$" },
        },
        {
          id: "olm-u7-s4-co-q6", difficulty: "foundation", totalMarks: 2,
          stem: "$P(A)=0.5$, $P(B)=0.4$, $P(A\\cap B)=0.2$. Find $P(A|B)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Conditional", statement: "$P(A\\cap B)/P(B)$." }], steps: [
            { reasoning: "$P(A|B)=\\frac{0.2}{0.4}=0.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.5" },
        },
        {
          id: "olm-u7-s4-co-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Events A and B are independent with $P(A)=0.4$ and $P(B)=0.25$. Find $P(A\\cap B)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.1 }] },
          markscheme: { principles: [{ kind: "formula", name: "Independent", statement: "$P(A)P(B)$." }], steps: [
            { reasoning: "$P(A\\cap B)=0.4\\times0.25=0.1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.1.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.1" },
        },
        {
          id: "olm-u7-s4-co-q8", difficulty: "core", totalMarks: 2,
          stem: "If $P(A|B)=P(A)$, then events A and B are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Impossible" },
            { id: "b", text: "Mutually exclusive" },
            { id: "c", text: "Certain" },
            { id: "d", text: "Independent" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Independence", statement: "Condition doesn't change probability." }], steps: [
            { reasoning: "This is the test for independence.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: independent.", marks: 1, markCode: "A" },
          ], finalAnswer: "Independent" },
        },
        {
          id: "olm-u7-s4-co-q9", difficulty: "core", totalMarks: 3,
          stem: "In a class of 50, 30 are boys and 20 are girls. 15 boys and 12 girls like maths. Find P(a student likes maths | the student is a boy).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional", statement: "Restrict to boys." }], steps: [
            { reasoning: "Among boys: $\\frac{15}{30}=0.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.5.", marks: 1, markCode: "M" },
            { reasoning: "Girls' data irrelevant given condition ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.5" },
        },
        {
          id: "olm-u7-s4-co-q10", difficulty: "core", totalMarks: 3,
          stem: "Two fair dice are rolled. Find P(the sum is greater than 8 | the first die shows 4).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional dice", statement: "Fix first die." }], steps: [
            { reasoning: "First die = 4; sum > 8 needs second die 5 or 6.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac26=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac13$ ($\\approx0.333$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olm-u7-s4-co-q11", difficulty: "core", totalMarks: 3,
          stem: "$P(A)=0.7$, $P(B)=0.5$, $P(A\\cap B)=0.35$. Find $P(A|B)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.7 }] },
          markscheme: { principles: [{ kind: "formula", name: "Conditional", statement: "$P(A\\cap B)/P(B)$." }], steps: [
            { reasoning: "$P(A|B)=\\frac{0.35}{0.5}=0.7$.", marks: 1, markCode: "M" },
            { reasoning: "$=P(A)$ → independent.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.7.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.7" },
        },
        {
          id: "olm-u7-s4-co-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Two cards are drawn from a pack without replacement. The events 'first is an ace' and 'second is an ace' are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Impossible" },
            { id: "b", text: "Dependent" },
            { id: "c", text: "Mutually exclusive" },
            { id: "d", text: "Independent" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Dependence", statement: "Without replacement." }], steps: [
            { reasoning: "First ace removed → second probability changes.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: dependent.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dependent" },
        },
        {
          id: "olm-u7-s4-co-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A bag has 5 red and 5 blue counters. Two are drawn without replacement. Find P(the second is red | the first is red).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional without replacement", statement: "Reduced pool." }], steps: [
            { reasoning: "Given first red: 4 red remain of 9 total.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac49$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac49$ ($\\approx0.444$).", marks: 1, markCode: "M" },
            { reasoning: "Check via formula: $P(RR)=\\frac5{10}\\times\\frac49=\\frac29$; $\\frac{2/9}{1/2}=\\frac49$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac49$" },
        },
        {
          id: "olm-u7-s4-co-q14", difficulty: "challenge", totalMarks: 4,
          stem: "$P(A)=0.4$, $P(B|A)=0.5$, $P(B)=0.45$. Find $P(A|B)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse conditional", statement: "Find intersection first." }], steps: [
            { reasoning: "$P(A\\cap B)=P(B|A)P(A)=0.5\\times0.4=0.2$.", marks: 1, markCode: "M" },
            { reasoning: "$P(A|B)=\\frac{0.2}{0.45}=\\frac{4}{9}\\approx0.444$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac49$ ($\\approx0.444$).", marks: 1, markCode: "M" },
            { reasoning: "Check: $P(A)P(B)=0.18\\neq0.2$ → dependent ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac49$" },
        },
        {
          id: "olm-u7-s4-co-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A card is drawn at random from a standard pack. Find P(it is a king | it is a face card), correct to 3 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.333, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conditional probability", statement: "Restrict to face cards." }], steps: [
            { reasoning: "4 kings among 12 face cards: $\\frac4{12}=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx0.333$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac13$ ($\\approx0.333$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olm-u7-s4-co-q16", difficulty: "challenge", totalMarks: 3,
          stem: "$P(A)=0.5$, $P(B)=0.6$, $P(A\\cap B)=0.4$. Find $P(A|B)$ and state whether A and B are independent.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.667, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "formula", name: "Conditional", statement: "$P(A\\cap B)/P(B)$." }], steps: [
            { reasoning: "$P(A|B)=\\frac{0.4}{0.6}=0.667$.", marks: 1, markCode: "M" },
            { reasoning: "$P(A)P(B)=0.3\\neq0.4$ → dependent.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0.667$, dependent.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.667, dependent" },
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
