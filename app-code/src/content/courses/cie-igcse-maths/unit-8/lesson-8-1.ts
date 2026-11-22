import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ciem-u8-lesson-8-1",
  code: "8-1",
  title: "Probability Basics",
  goal: "I CAN calculate probabilities of single events, use sample spaces, and apply the rules for mutually exclusive and exhaustive events.",
  standards: ["0580 8.1", "0580 8.2"],
  vocabulary: [
    { term: "Probability", definition: "A number between $0$ and $1$ measuring likelihood; $P(E)=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$ for equally likely events." },
    { term: "Sample space", definition: "The set of all possible outcomes." },
    { term: "Mutually exclusive", definition: "Events that cannot happen together; $P(A\\text{ or }B)=P(A)+P(B)$." },
    { term: "Exhaustive events", definition: "Events covering all possibilities; probabilities sum to $1$." },
    { term: "Complement", definition: "$P(A')=1-P(A)$ — probability the event does NOT happen." },
  ],
  concepts: [
    {
      id: "ciem-u8-probability-basics",
      title: "Single-event probability",
      skill: "Calculate probabilities from sample spaces and apply addition rules.",
      lesson: {
        sections: [
          {
            heading: "Basic probability",
            body: "For equally likely outcomes: $P(E)=\\frac{\\text{number of favourable outcomes}}{\\text{total number of outcomes}}$. Probability is always between $0$ (impossible) and $1$ (certain).",
          },
          {
            heading: "Mutually exclusive events",
            body: "If $A$ and $B$ cannot both occur: $P(A\\cup B)=P(A)+P(B)$. For exhaustive mutually exclusive events, the probabilities sum to $1$.",
          },
          {
            heading: "Complement rule",
            body: "$P(\\text{not }A)=1-P(A)$. Often quicker: 'at least one' or 'not all' questions use the complement.",
          },
        ],
        keyFormulas: [
          { name: "Probability", statement: "$P(E)=\\frac{\\text{favourable}}{\\text{total}}$" },
          { name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)$ for mutually exclusive" },
          { name: "Complement", statement: "$P(A')=1-P(A)$" },
        ],
        workedExample: {
          problem: "A bag has 4 red, 3 blue, 2 green balls. Find $P(\\text{red or blue})$.",
          solution: "Mutually exclusive: $P=\\frac{4}{9}+\\frac{3}{9}=\\frac{7}{9}$.",
        },
      },
      questions: [
        {
          id: "ciem-u8-probability-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair die is rolled. What is $P(\\text{rolling a 6})$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac15$" },
              { id: "b", text: "$\\frac16$" },
              { id: "c", text: "$\\frac{1}{36}$" },
              { id: "d", text: "$\\frac56$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Probability", statement: "$P(E)=\\frac{\\text{favourable}}{\\text{total}}$" },
            ],
            steps: [
              { reasoning: "One favourable outcome out of six.", working: "\\frac16", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac16$",
            commonErrors: ["Writing $\\frac16$ of $6$ or $\\frac1{36}$."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag contains 5 red, 4 blue and 1 green marble. Find $P(\\text{not green})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.9 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complement", statement: "$P(A')=1-P(A)$" },
            ],
            steps: [
              { reasoning: "Non-green marbles: $5+4=9$ out of $10$.", working: "P(\\text{not green})=\\frac{9}{10}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "=0.9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.9$ or $\\frac9{10}$",
            commonErrors: ["Finding $P(\\text{green})=\\frac1{10}$ and stopping."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two fair dice are rolled and the scores added. Find $P(\\text{total} > 9)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sample space", statement: "36 equally likely outcomes for two dice." },
            ],
            steps: [
              { reasoning: "List outcomes with total $>9$: $(4,6),(5,5),(5,6),(6,4),(6,5),(6,6)$ — 6 outcomes.", working: "6\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "Total outcomes $=6\\times6=36$.", working: "36", marks: 1, markCode: "M" },
              { reasoning: "Form the probability.", working: "\\frac{6}{36}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac16$",
            commonErrors: ["Missing $(5,5)$ or counting $(6,6)$ twice."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bag contains 3 red, 5 blue and 2 green counters. Two counters are drawn **without replacement**.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{both red})$.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{one red and one blue})$.", marks: 4 },
            { label: "c", prompt: "Find $P(\\text{at least one green})$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Without replacement", statement: "Probabilities change after the first draw." },
              { kind: "formula", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$" },
            ],
            steps: [
              { part: "a", reasoning: "First red: $\\frac{3}{10}$; second red given first red: $\\frac{2}{9}$.", working: "\\frac{3}{10}\\times\\frac{2}{9}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply.", working: "=\\frac{6}{90}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "=\\frac1{15}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two orders: red then blue, or blue then red.", working: "\\frac{3}{10}\\times\\frac{5}{9}+\\frac{5}{10}\\times\\frac{3}{9}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate each term.", working: "=\\frac{15}{90}+\\frac{15}{90}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add.", working: "=\\frac{30}{90}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\frac13", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(\\text{no green})=\\frac{8}{10}\\times\\frac{7}{9}=\\frac{56}{90}$.", working: "\\frac{8}{10}\\times\\frac{7}{9}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complement: $1-\\frac{56}{90}=\\frac{34}{90}=\\frac{17}{45}$.", working: "=\\frac{17}{45}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac1{15}$ (b) $\\frac13$ (c) $\\frac{17}{45}$",
            commonErrors: ["In (b) forgetting the second order (blue then red).", "In (c) computing $P(\\text{green})$ instead of 'at least one'."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag contains 8 red and 2 blue balls. One ball is drawn at random. What is $P(\\text{blue})$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{12}$" },
              { id: "b", text: "$\\frac25$" },
              { id: "c", text: "$\\frac15$" },
              { id: "d", text: "$\\frac45$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Probability", statement: "$P(E)=\\frac{\\text{favourable}}{\\text{total}}$" },
            ],
            steps: [
              { reasoning: "Blue balls $=2$ out of $10$ total.", working: "\\frac{2}{10}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac15$",
            commonErrors: ["Using $\\frac28$ instead of $\\frac{2}{10}$."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following cannot be a probability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.75$" },
              { id: "b", text: "$-0.2$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Probability range", statement: "$0 \\le P(E) \\le 1$." },
            ],
            steps: [
              { reasoning: "Probabilities cannot be negative.", working: "-0.2<0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-0.2$",
            commonErrors: ["Thinking $1$ is not allowed — certainty has probability $1$."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Events $A$ and $B$ are mutually exclusive. Which statement must be true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P(A')=P(A)$" },
              { id: "b", text: "$P(A\\cap B)=0$" },
              { id: "c", text: "$P(A\\cap B)=P(A)P(B)$" },
              { id: "d", text: "$P(A\\cup B)=0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mutually exclusive", statement: "Cannot occur together, so the intersection is empty." },
            ],
            steps: [
              { reasoning: "Mutually exclusive means no overlap.", working: "P(A\\cap B)=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $P(A\\cap B)=0$",
            commonErrors: ["Confusing mutually exclusive with independent."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fair die is rolled. What is $P(\\text{even or a multiple of }3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac56$" },
              { id: "b", text: "$\\frac12$" },
              { id: "c", text: "$\\frac23$" },
              { id: "d", text: "$\\frac13$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sample space", statement: "List outcomes: even $\\{2,4,6\\}$, multiple of 3 $\\{3,6\\}$; union $\\{2,3,4,6\\}$ — 4 outcomes." },
            ],
            steps: [
              { reasoning: "Favourable outcomes $=4$ out of $6$.", working: "\\frac46", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac23$",
            commonErrors: ["Adding $\\frac12+\\frac13$ without removing the overlap at 6."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two fair coins are tossed. What is $P(\\text{at least one head})$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac14$" },
              { id: "b", text: "$\\frac34$" },
              { id: "c", text: "$\\frac12$" },
              { id: "d", text: "$1$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})=1-\\frac14$" },
            ],
            steps: [
              { reasoning: "Only TT fails; $P(TT)=\\frac14$, so answer $=\\frac34$.", working: "1-\\frac14=\\frac34", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac34$",
            commonErrors: ["Counting HH, HT, TH but missing that TT is the only failure."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If $P(A)=0.35$, what is $P(A')$ where $A'$ is 'not $A$'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0.35$" },
              { id: "c", text: "$0.65$" },
              { id: "d", text: "$-0.35$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complement", statement: "$P(A')=1-P(A)$" },
            ],
            steps: [
              { reasoning: "Complement rule.", working: "1-0.35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.65$",
            commonErrors: ["Giving $P(A)$ again."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner is equally likely to land on $1, 2, 3, 4$ or $5$. Find $P(\\text{prime number})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Probability", statement: "$P(E)=\\frac{\\text{favourable}}{\\text{total}}$" },
            ],
            steps: [
              { reasoning: "Primes on the spinner: $2, 3, 5$ — 3 outcomes.", working: "\\frac35", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.6$ or $\\frac35$",
            commonErrors: ["Including $1$ as a prime."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bag has 12 counters: 5 red, 4 blue and 3 green. One counter is drawn at random. Find $P(\\text{blue or green})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.5833, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "Mutually exclusive colours: add the probabilities." },
            ],
            steps: [
              { reasoning: "Blue or green $=4+3=7$ favourable counters.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "Form the probability.", working: "\\frac{7}{12}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state.", working: "\\approx0.583", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac7{12}\\approx0.583$",
            commonErrors: ["Multiplying $\\frac4{12}\\times\\frac3{12}$ instead of adding."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Three fair coins are tossed. Find $P(\\text{exactly two heads})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.375 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sample space", statement: "$2^3=8$ equally likely outcomes." },
            ],
            steps: [
              { reasoning: "Exactly two heads: HHT, HTH, THH — 3 outcomes.", working: "3\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "Form the probability.", working: "\\frac38", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac38$ or $0.375$",
            commonErrors: ["Counting only HHT and forgetting the other orders."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A biased coin has $P(H)=0.4$. It is tossed 250 times. Find the expected number of heads.",
          response: { type: "numeric", parts: [{ label: "Expected", answer: 100 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected frequency", statement: "$n\\times P(E)$" },
            ],
            steps: [
              { reasoning: "Apply expected frequency.", working: "250\\times0.4", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=100", marks: 1, markCode: "M" },
              { reasoning: "Interpret as an average over many trials.", marks: 1, markCode: "M" },
              { reasoning: "State the expectation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ heads",
            commonErrors: ["Using $P(H)=0.5$ instead of the biased value."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two fair coins are tossed. List all outcomes in the sample space and find $P(\\text{at most one tail})$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sample space", statement: "List outcomes systematically: HH, HT, TH, TT." },
            ],
            steps: [
              { reasoning: "Sample space has 4 equally likely outcomes: HH, HT, TH, TT.", working: "4\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "'At most one tail' excludes only TT.", working: "HH,HT,TH", marks: 1, markCode: "M" },
              { reasoning: "Form the probability.", working: "\\frac34", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sample space $\\{HH,HT,TH,TT\\}$; $P(\\text{at most one tail})=\\frac34$",
            commonErrors: ["Listing HH, HT, TH, TT but counting 'at most one tail' as 4/4."],
          },
        },
        {
          id: "ciem-u8-probability-basics-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bag contains 7 red and 3 blue counters. Two counters are drawn **without replacement**.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{both red})$.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{exactly one red})$.", marks: 3 },
            { label: "c", prompt: "Find $P(\\text{at least one blue})$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Without replacement", statement: "Second-draw probabilities use remaining counts." },
              { kind: "formula", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$" },
            ],
            steps: [
              { part: "a", reasoning: "First red $\\frac7{10}$; second red given first red $\\frac69$.", working: "\\frac7{10}\\times\\frac69", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply and simplify.", working: "=\\frac{42}{90}=\\frac7{15}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two orders: red then blue, or blue then red.", working: "2\\times\\frac7{10}\\times\\frac39", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=\\frac{42}{90}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", working: "=\\frac7{15}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(\\text{no blue})=P(\\text{both red})=\\frac7{15}$.", working: "\\frac7{15}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complement: $1-\\frac7{15}$.", working: "=\\frac8{15}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac7{15}$ (b) $\\frac7{15}$ (c) $\\frac8{15}$",
            commonErrors: ["In (b) forgetting to double for the two orders.", "In (c) computing $P(\\text{blue})$ for a single draw."],
          },
        },
      ],
    },
    {
      id: "ciem-u8-probability-trees",
      title: "Probability trees",
      skill: "Draw and use probability trees for sequential events, with and without replacement.",
      lesson: {
        sections: [
          {
            heading: "Tree diagrams",
            body: "A tree diagram shows all outcomes of sequential events. Branch probabilities multiply along a path; add the probabilities of all paths giving the required outcome.",
          },
          {
            heading: "With and without replacement",
            body: "With replacement: probabilities on second branches are unchanged. Without replacement: the denominator decreases by 1 and favourable counts may change. Read the question carefully.",
          },
          {
            heading: "Conditional branches",
            body: "Second-branch probabilities are conditional: $P(\\text{2nd red}\\,|\\,\\text{1st red})=\\frac{\\text{remaining red}}{\\text{remaining total}}$.",
          },
        ],
        keyFormulas: [
          { name: "Path probability", statement: "Multiply along branches" },
          { name: "Total probability", statement: "Add relevant paths" },
        ],
        workedExample: {
          problem: "A coin is tossed twice. Find $P(\\text{exactly one head})$.",
          solution: "Paths HT and TH: $\\frac12\\times\\frac12+\\frac12\\times\\frac12=\\frac14+\\frac14=\\frac12$.",
        },
      },
      questions: [
        {
          id: "ciem-u8-probability-trees-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a probability tree, how do you find the probability of a complete path?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Average the branch probabilities" },
              { id: "b", text: "Multiply the branch probabilities" },
              { id: "c", text: "Add the branch probabilities" },
              { id: "d", text: "Subtract the branch probabilities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tree rule", statement: "Path probabilities multiply." },
            ],
            steps: [
              { reasoning: "Recall the multiplication rule for sequential events.", working: "\\text{multiply}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Multiply",
            commonErrors: ["Adding branch probabilities along a path."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A biased coin has $P(H)=\\frac13$. It is tossed twice. Find $P(\\text{exactly one head})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.4444, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tree paths", statement: "Paths HT and TH." },
            ],
            steps: [
              { reasoning: "$P(HT)=\\frac13\\times\\frac23=\\frac29$; $P(TH)=\\frac23\\times\\frac13=\\frac29$.", working: "\\frac29+\\frac29", marks: 1, markCode: "M" },
              { reasoning: "Add the two paths.", working: "=\\frac49", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac49$",
            commonErrors: ["Only counting one order."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bag has 4 red and 6 blue counters. Two are drawn without replacement. Find $P(\\text{same colour})$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Without replacement", statement: "Second-draw probabilities use remaining counts." },
            ],
            steps: [
              { reasoning: "$P(RR)=\\frac4{10}\\times\\frac3{9}=\\frac{12}{90}$; $P(BB)=\\frac6{10}\\times\\frac5{9}=\\frac{30}{90}$.", working: "\\frac{12}{90}+\\frac{30}{90}", marks: 1, markCode: "M" },
              { reasoning: "Add for 'same colour'.", working: "=\\frac{42}{90}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac7{15}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac7{15}$",
            commonErrors: ["Using $\\frac4{10}\\times\\frac4{10}$ (with replacement)."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A spinner has sectors labelled 1, 2, 3 with probabilities $\\frac12$, $\\frac13$, $\\frac16$. It is spun twice.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{both spins give the same number})$.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{total} > 3)$.", marks: 4 },
            { label: "c", prompt: "Find $P(\\text{at least one spin gives }1)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tree with unequal probabilities", statement: "Each path uses the product of its branch probabilities." },
              { kind: "formula", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$" },
            ],
            steps: [
              { part: "a", reasoning: "$P(11)=\\frac14$, $P(22)=\\frac19$, $P(33)=\\frac1{36}$.", working: "\\frac14+\\frac19+\\frac1{36}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Common denominator $36$.", working: "=\\frac9{36}+\\frac4{36}+\\frac1{36}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add.", working: "=\\frac{14}{36}=\\frac7{18}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Outcomes with total $>3$: $(1,3),(2,2),(2,3),(3,2),(3,3)$ — plus $(1,?)$ no: $(1,3)=4$ ✓, $(2,2)=4$ ✓, $(2,3)=5$, $(3,1)=4$, $(3,2)=5$, $(3,3)=6$. List: $(1,3),(2,2),(3,1),(2,3),(3,2),(3,3)$.", working: "6\\text{ paths}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sum their path probabilities.", working: "\\frac12\\cdot\\frac16+\\frac13\\cdot\\frac13+\\frac16\\cdot\\frac12+\\frac13\\cdot\\frac16+\\frac16\\cdot\\frac13+\\frac16\\cdot\\frac16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate: $\\frac1{12}+\\frac1{9}+\\frac1{12}+\\frac1{18}+\\frac1{18}+\\frac1{36}$.", working: "=\\frac{3+4+3+2+2+1}{36}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sum $=\\frac{15}{36}=\\frac5{12}$.", working: "=\\frac5{12}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(\\text{no 1})=\\frac12\\times\\frac12=\\frac14$ (only 2s and 3s).", working: "\\frac12\\times\\frac12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complement: $1-\\frac14=\\frac34$.", working: "=\\frac34", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac7{18}$ (b) $\\frac5{12}$ (c) $\\frac34$",
            commonErrors: ["In (b) missing symmetric paths like $(3,1)$.", "In (c) adding $P(1)$ twice instead of using complement."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two counters are drawn from a bag **with replacement**. Compared with the first draw, the probabilities on the second set of branches are",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Larger, because there are fewer counters" },
              { id: "b", text: "Smaller, because the total decreases" },
              { id: "c", text: "The same, because the counter is replaced" },
              { id: "d", text: "Zero for the colour first drawn" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "With replacement", statement: "Replacement restores the original counts, so second-draw probabilities are unchanged." },
            ],
            steps: [
              { reasoning: "With replacement the bag returns to its original state after each draw.", working: "\\text{unchanged}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The same — replacement keeps the probabilities constant",
            commonErrors: ["Assuming the second draw always has a smaller denominator (that is without replacement)."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag contains 3 red and 2 blue counters. Two counters are drawn **with replacement**. Find $P(\\text{both blue})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.16 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "With replacement", statement: "Second-draw probabilities are unchanged." },
            ],
            steps: [
              { reasoning: "Multiply along the BB path.", working: "\\frac25\\times\\frac25", marks: 1, markCode: "M" },
              { reasoning: "Compute and state.", working: "=\\frac4{25}=0.16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac4{25}$ or $0.16$",
            commonErrors: ["Using $\\frac25\\times\\frac14$ as if drawing without replacement."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The probabilities at the ends of all the complete paths of a probability tree should",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sum to $0$" },
              { id: "b", text: "All be equal" },
              { id: "c", text: "Sum to $1$" },
              { id: "d", text: "Sum to the number of branches" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exhaustive tree", statement: "All complete paths are mutually exclusive and exhaustive, so their probabilities sum to $1$." },
            ],
            steps: [
              { reasoning: "The final path probabilities form a complete probability distribution.", working: "\\sum=1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sum to $1$",
            commonErrors: ["Forgetting that the tree covers every possible outcome."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A biased coin has $P(H)=0.2$. It is tossed twice. Find $P(\\text{exactly one head})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.32 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tree paths", statement: "Paths HT and TH." },
            ],
            steps: [
              { reasoning: "$P(HT)=0.2\\times0.8=0.16$ and $P(TH)=0.8\\times0.2=0.16$.", working: "0.16+0.16", marks: 1, markCode: "M" },
              { reasoning: "Add the two paths.", working: "=0.32", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.32$",
            commonErrors: ["Using $P(H)=0.5$ instead of the biased value $0.2$."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A bag has 5 red and 5 blue counters. Two are drawn without replacement. What is $P(\\text{same colour})$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac12$" },
              { id: "b", text: "$\\frac59$" },
              { id: "c", text: "$\\frac49$" },
              { id: "d", text: "$\\frac14$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Without replacement", statement: "Second-draw probabilities use remaining counts." },
            ],
            steps: [
              { reasoning: "$P(RR)+P(BB)=\\frac5{10}\\times\\frac49+\\frac5{10}\\times\\frac49=\\frac{40}{90}=\\frac49$.", working: "\\frac49", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\frac49$",
            commonErrors: ["Using with-replacement probabilities and getting $\\frac12$."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has 4 red and 6 blue counters. The first counter drawn is red and is **not** replaced. What is the probability the second counter is also red?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac25$" },
              { id: "b", text: "$\\frac13$" },
              { id: "c", text: "$\\frac4{10}$" },
              { id: "d", text: "$\\frac49$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conditional branch", statement: "After one red is removed, $3$ red remain out of $9$ counters." },
            ],
            steps: [
              { reasoning: "Remaining red $=3$, remaining total $=9$.", working: "\\frac39=\\frac13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac13$",
            commonErrors: ["Keeping $\\frac4{10}$ from the first draw."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "A fair coin is tossed three times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sample space", statement: "$2^3=8$ equally likely outcomes." },
            ],
            steps: [
              { reasoning: "List the sample space: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.", working: "8\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "Exactly two heads: HHT, HTH, THH — 3 outcomes.", working: "3\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "Form the probability.", working: "\\frac38", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P(\\text{exactly two heads})=\\frac38$",
            commonErrors: ["Listing only one ordering of two heads and one tail."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A spinner lands on $1$, $2$ or $3$ with probabilities $\\frac12$, $\\frac13$ and $\\frac16$ respectively. It is spun twice. Find $P(\\text{the product of the two numbers is even})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.5556, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complement", statement: "$P(\\text{even product})=1-P(\\text{both odd})$" },
            ],
            steps: [
              { reasoning: "Product is odd only when both spins give 1 or 3. Paths: $(1,1),(1,3),(3,1),(3,3)$.", working: "\\frac12\\times\\frac12+\\frac12\\times\\frac16+\\frac16\\times\\frac12+\\frac16\\times\\frac16", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\frac14+\\frac1{12}+\\frac1{12}+\\frac1{36}$.", working: "=\\frac9{36}+\\frac3{36}+\\frac3{36}+\\frac1{36}=\\frac{16}{36}=\\frac49", marks: 1, markCode: "M" },
              { reasoning: "Apply the complement.", working: "1-\\frac49", marks: 1, markCode: "M" },
              { reasoning: "Compute and state.", working: "=\\frac59\\approx0.556", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac59$ or $\\approx0.556$",
            commonErrors: ["Using $\\frac23\\times\\frac23$ for both-odd — that treats 'odd' as a single outcome rather than summing the four paths."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q13",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bag has 2 red and 3 blue counters. Two counters are drawn **without replacement**.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{both counters are the same colour})$.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{at least one red})$.", marks: 3 },
            { label: "c", prompt: "Explain why the second-branch probabilities have denominator $4$ rather than $5$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Without replacement", statement: "Second-draw probabilities use remaining counts." },
              { kind: "formula", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$" },
            ],
            steps: [
              { part: "a", reasoning: "$P(RR)=\\frac25\\times\\frac14=\\frac2{20}=\\frac1{10}$; $P(BB)=\\frac35\\times\\frac24=\\frac6{20}=\\frac3{10}$.", working: "\\frac1{10}+\\frac3{10}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add for 'same colour'.", working: "=\\frac4{10}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify and state.", working: "=\\frac25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(\\text{no red})=P(BB)=\\frac3{10}$.", working: "\\frac35\\times\\frac24", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply the complement.", working: "1-\\frac3{10}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", working: "=\\frac7{10}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State that the first counter is not returned to the bag.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain the total drops from $5$ to $4$ counters for the second draw.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude the second-branch probabilities are conditional on the first draw.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac25$ (b) $\\frac7{10}$ (c) one counter is removed, leaving $4$",
            commonErrors: ["In (b) adding $P(RB)$ and $P(BR)$ separately and making an arithmetic slip — the complement is quicker."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Events $A$ and $B$ are independent. Which expression gives $P(A\\text{ and }B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1-P(A)P(B)$" },
              { id: "b", text: "$P(A)+P(B)$" },
              { id: "c", text: "$P(A)\\times P(B)$" },
              { id: "d", text: "$P(A)-P(B)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent events", statement: "For independent events, $P(A\\cap B)=P(A)\\times P(B)$." },
            ],
            steps: [
              { reasoning: "Independence means probabilities multiply along the path.", working: "P(A)\\times P(B)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $P(A)\\times P(B)$",
            commonErrors: ["Adding probabilities — that is for mutually exclusive 'or' events."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bag has 6 red and 4 blue counters. Two counters are drawn **with replacement**. Find $P(\\text{exactly one red})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.48 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tree paths", statement: "Paths RB and BR." },
            ],
            steps: [
              { reasoning: "$P(RB)=\\frac6{10}\\times\\frac4{10}=\\frac{24}{100}$; $P(BR)=\\frac4{10}\\times\\frac6{10}=\\frac{24}{100}$.", working: "\\frac{24}{100}+\\frac{24}{100}", marks: 1, markCode: "M" },
              { reasoning: "Add the two paths.", working: "=\\frac{48}{100}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.48$ or $\\frac{12}{25}$",
            commonErrors: ["Counting only one order (RB or BR)."],
          },
        },
        {
          id: "ciem-u8-probability-trees-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Three fair coins are tossed.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{all three coins show the same face})$.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{exactly one head})$.", marks: 3 },
            { label: "c", prompt: "Find $P(\\text{at least two heads})$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sample space", statement: "$2^3=8$ equally likely outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "All same: HHH and TTT — 2 outcomes.", working: "2\\text{ outcomes}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Form the probability.", working: "\\frac28", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify and state.", working: "=\\frac14", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exactly one head: HTT, THT, TTH — 3 outcomes.", working: "3\\text{ outcomes}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Form and state the probability.", working: "\\frac38", marks: 2, markCode: "A" },
              { part: "c", reasoning: "At least two heads: HHH, HHT, HTH, THH — 4 outcomes.", working: "4\\text{ outcomes}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Form and state the probability.", working: "\\frac48=\\frac12", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac14$ (b) $\\frac38$ (c) $\\frac12$",
            commonErrors: ["In (c) counting only HHH and forgetting the three two-head outcomes."],
          },
        },
      ],
    },
    {
      id: "ciem-u8-probability-problems",
      title: "Probability problem solving",
      skill: "Solve multi-step probability problems using complements, sample spaces and conditional reasoning.",
      lesson: {
        sections: [
          {
            heading: "Strategy",
            body: "1. Identify whether events are independent or dependent.\n2. For 'at least one' questions, use the complement $1-P(\\text{none})$.\n3. For combined outcomes, list the sample space or draw a tree.\n4. Check answers are between $0$ and $1$ and probabilities of exhaustive events sum to $1$.",
          },
          {
            heading: "Expected frequency",
            body: "Expected number of occurrences $=n\\times P(E)$ where $n$ is the number of trials. Useful for 'how many times in $n$ trials' questions.",
          },
          {
            heading: "Venn-style reasoning",
            body: "For two events $A$ and $B$: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. 'Or' includes the overlap, so subtract it once.",
          },
        ],
        keyFormulas: [
          { name: "Expected frequency", statement: "$n\\times P(E)$" },
          { name: "Addition with overlap", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
        ],
        workedExample: {
          problem: "$P(A)=0.4$, $P(B)=0.5$, $P(A\\cap B)=0.2$. Find $P(A\\cup B)$.",
          solution: "$0.4+0.5-0.2=0.7$.",
        },
      },
      questions: [
        {
          id: "ciem-u8-probability-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$P(A)=0.3$ and $P(B)=0.4$ with $P(A\\cap B)=0.1$. Find $P(A\\cup B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.8$" },
              { id: "b", text: "$0.5$" },
              { id: "c", text: "$0.7$" },
              { id: "d", text: "$0.6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
            ],
            steps: [
              { reasoning: "Add and subtract the overlap.", working: "0.3+0.4-0.1=0.6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.6$",
            commonErrors: ["Not subtracting $P(A\\cap B)$."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A fair die is rolled 60 times. Find the expected number of sixes.",
          response: { type: "numeric", parts: [{ label: "Expected", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected frequency", statement: "$n\\times P(E)$" },
            ],
            steps: [
              { reasoning: "Apply expected frequency.", working: "60\\times\\frac16", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=10", marks: 1, markCode: "M" },
              { reasoning: "State the expectation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ sixes",
            commonErrors: ["Multiplying by $60^2$ or using $P=\\frac15$."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a class, $P(\\text{likes maths})=0.6$ and $P(\\text{likes science})=0.5$. Given $P(\\text{likes both})=0.3$, find $P(\\text{likes neither})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=0.6+0.5-0.3=0.8$" },
              { kind: "formula", name: "Complement", statement: "$P(\\text{neither})=1-0.8$" },
            ],
            steps: [
              { reasoning: "Find $P(\\text{at least one})$.", working: "0.6+0.5-0.3=0.8", marks: 1, markCode: "M" },
              { reasoning: "Apply complement.", working: "1-0.8", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=0.2", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.2$",
            commonErrors: ["Adding $0.6+0.5$ without subtracting overlap (gives $0.0$ after complement — impossible, a red flag)."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bag contains 4 red and 6 blue balls. Ball $X$ is drawn and replaced, then ball $Y$ is drawn. Separately, two balls are drawn without replacement.",
          parts: [
            { label: "a", prompt: "With replacement: find $P(\\text{both red})$.", marks: 2 },
            { label: "b", prompt: "Without replacement: find $P(\\text{both red})$.", marks: 3 },
            { label: "c", prompt: "Without replacement: find $P(\\text{at least one blue})$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "With vs without replacement", statement: "Replacement keeps probabilities constant; without it they change." },
              { kind: "formula", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$" },
            ],
            steps: [
              { part: "a", reasoning: "Independent draws: $\\frac4{10}\\times\\frac4{10}$.", working: "=\\frac{16}{100}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "=\\frac4{25}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Without replacement: $\\frac4{10}\\times\\frac3{9}$.", working: "=\\frac{12}{90}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\frac2{15}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(\\text{no blue})=P(\\text{both red})=\\frac4{10}\\times\\frac3{9}=\\frac2{15}$.", working: "\\frac2{15}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complement: $1-\\frac2{15}$.", working: "=\\frac{13}{15}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac4{25}$ (b) $\\frac2{15}$ (c) $\\frac{13}{15}$",
            commonErrors: ["In (c) computing $P(\\text{blue})$ paths separately and forgetting to include mixed outcomes — complement is quicker."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Events $A$ and $B$ are mutually exclusive with $P(A)=0.5$ and $P(B)=0.3$. Find $P(A\\cup B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.15$" },
              { id: "b", text: "$0.2$" },
              { id: "c", text: "$0.65$" },
              { id: "d", text: "$0.8$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "Mutually exclusive events: $P(A\\cup B)=P(A)+P(B)$." },
            ],
            steps: [
              { reasoning: "No overlap to subtract, so add.", working: "0.5+0.3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.8$",
            commonErrors: ["Subtracting the overlap anyway (there is none)."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An event has probability $0.2$. It is repeated in $150$ independent trials. Find the expected number of occurrences.",
          response: { type: "numeric", parts: [{ label: "Expected", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected frequency", statement: "$n\\times P(E)$" },
            ],
            steps: [
              { reasoning: "Apply expected frequency.", working: "150\\times0.2", marks: 1, markCode: "M" },
              { reasoning: "Compute and state.", working: "=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ occurrences",
            commonErrors: ["Multiplying by $150^2$ or using the complement probability."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For 'at least one' probability questions, the quickest method is usually",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiply all probabilities together" },
              { id: "b", text: "List every possible outcome" },
              { id: "c", text: "Add all the probabilities" },
              { id: "d", text: "Use the complement: $1-P(\\text{none})$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$" },
            ],
            steps: [
              { reasoning: "The complement of 'at least one' is 'none', which is usually a single path.", working: "1-P(\\text{none})", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Use the complement",
            commonErrors: ["Listing all 'at least one' cases individually when the complement is far quicker."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "$P(A)=0.6$, $P(B)=0.5$ and $P(A\\cap B)=0.3$. Find $P(\\text{neither }A\\text{ nor }B)$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
              { kind: "formula", name: "Complement", statement: "$P(\\text{neither})=1-P(A\\cup B)$" },
            ],
            steps: [
              { reasoning: "Find $P(A\\cup B)$.", working: "0.6+0.5-0.3=0.8", marks: 1, markCode: "M" },
              { reasoning: "Apply the complement.", working: "1-0.8", marks: 1, markCode: "M" },
              { reasoning: "Compute and state.", working: "=0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.2$",
            commonErrors: ["Adding $0.6+0.5$ without subtracting the overlap."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$P(A)=0.4$, $P(B)=0.5$ and $P(A\\cap B)=0.2$. What is $P(\\text{neither }A\\text{ nor }B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.4$" },
              { id: "b", text: "$0.3$" },
              { id: "c", text: "$0.2$" },
              { id: "d", text: "$0.1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=0.4+0.5-0.2=0.7$" },
              { kind: "formula", name: "Complement", statement: "$P(\\text{neither})=1-0.7=0.3$" },
            ],
            steps: [
              { reasoning: "Union $=0.7$, so neither $=1-0.7=0.3$.", working: "1-0.7=0.3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $0.3$",
            commonErrors: ["Forgetting to subtract $P(A\\cap B)$ when finding the union."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a class of $40$ students, $25$ play football, $20$ play tennis and $10$ play both. Find the probability that a randomly chosen student plays neither sport.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.125 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
            ],
            steps: [
              { reasoning: "Number playing at least one sport: $25+20-10=35$.", working: "35", marks: 1, markCode: "M" },
              { reasoning: "Number playing neither: $40-35=5$.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Form the probability.", working: "\\frac5{40}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac18$ or $0.125$",
            commonErrors: ["Adding $25+20+10$ for the union and getting a number larger than the class."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The expected number of times an event occurs in $n$ trials is given by",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{P(E)}{n}$" },
              { id: "b", text: "$n\\times P(E)$" },
              { id: "c", text: "$\\frac{n}{P(E)}$" },
              { id: "d", text: "$n+P(E)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected frequency", statement: "$n\\times P(E)$" },
            ],
            steps: [
              { reasoning: "Expected frequency scales the probability by the number of trials.", working: "n\\times P(E)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $n\\times P(E)$",
            commonErrors: ["Dividing by $n$ instead of multiplying."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q12",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "$P(A)=0.7$, $P(B)=0.5$ and $P(A\\cup B)=0.9$.",
          parts: [
            { label: "a", prompt: "Find $P(A\\cap B)$.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{neither }A\\text{ nor }B)$.", marks: 2 },
            { label: "c", prompt: "Determine whether $A$ and $B$ are independent, showing your working.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
              { kind: "formula", name: "Complement", statement: "$P(\\text{neither})=1-P(A\\cup B)$" },
              { kind: "definition", name: "Independent events", statement: "$P(A\\cap B)=P(A)\\times P(B)$ if independent." },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange the addition rule.", working: "P(A\\cap B)=0.7+0.5-0.9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute.", working: "=0.3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the complement.", working: "1-0.9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compute $P(A)\\times P(B)$.", working: "0.7\\times0.5=0.35", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare with $P(A\\cap B)=0.3$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: $0.35\\neq0.3$, so the events are not independent.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the conclusion explicitly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.3$ (b) $0.1$ (c) not independent, since $P(A)P(B)=0.35\\neq0.3=P(A\\cap B)$",
            commonErrors: ["In (a) adding instead of subtracting the overlap."],
            examinerNote: "Part (c) requires both the comparison and the conclusion — a bare 'not independent' without working earns at most 1 mark.",
          },
        },
        {
          id: "ciem-u8-probability-problems-q13",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A biased coin has $P(H)=0.35$. It is tossed $600$ times.",
          parts: [
            { label: "a", prompt: "Find the expected number of heads.", marks: 3 },
            { label: "b", prompt: "Find the expected number of tails.", marks: 2 },
            { label: "c", prompt: "Explain why the actual number of heads in 600 tosses may differ from your answer to part (a).", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected frequency", statement: "$n\\times P(E)$" },
              { kind: "formula", name: "Complement", statement: "$P(T)=1-0.35=0.65$" },
            ],
            steps: [
              { part: "a", reasoning: "Apply expected frequency.", working: "600\\times0.35", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute.", working: "=210", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the expectation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(T)=1-0.35=0.65$; expected tails $=600\\times0.65$.", working: "600\\times0.65=390", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the expectation (or note $600-210=390$).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State that expectation is a long-run average, not a guarantee for one set of trials.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain that each toss is random, so results fluctuate around the mean.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude the actual count need not equal $210$ exactly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Note that over many sets of 600 tosses the average approaches $210$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $210$ heads (b) $390$ tails (c) expectation is an average — random variation means the actual count varies",
            commonErrors: ["In (b) using $P(T)=0.35$ instead of the complement."],
            examinerNote: "Part (c) is a conceptual question — 'it is random' alone earns at most 1 mark without reference to long-run averages.",
          },
        },
        {
          id: "ciem-u8-probability-problems-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$P(A)=0.7$, $P(A\\cup B)=0.8$ and $P(A\\cap B)=0.4$. Find $P(B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0.4$" },
              { id: "c", text: "$0.6$" },
              { id: "d", text: "$0.9$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
            ],
            steps: [
              { reasoning: "Rearrange: $P(B)=0.8-0.7+0.4$.", working: "0.8-0.7+0.4=0.5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $0.5$",
            commonErrors: ["Computing $0.8-0.7-0.4=-0.3$ — the overlap must be added back."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A survey of $200$ students finds $P(\\text{likes maths})=0.55$, $P(\\text{likes science})=0.45$ and $P(\\text{likes both})=0.25$.",
          parts: [
            { label: "a", prompt: "Find the probability that a student likes at least one of the two subjects.", marks: 3 },
            { label: "b", prompt: "Find the probability that a student likes neither subject.", marks: 2 },
            { label: "c", prompt: "Find the expected number of the $200$ students who like neither subject.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
              { kind: "formula", name: "Complement", statement: "$P(\\text{neither})=1-P(A\\cup B)$" },
              { kind: "formula", name: "Expected frequency", statement: "$n\\times P(E)$" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the addition rule.", working: "0.55+0.45-0.25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute.", working: "=0.75", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the complement.", working: "1-0.75", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", working: "=0.25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply expected frequency with $n=200$.", working: "200\\times0.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=50", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Interpret as the expected (average) count.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the expectation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.75$ (b) $0.25$ (c) $50$ students",
            commonErrors: ["In (a) adding $0.55+0.45$ without subtracting the overlap $0.25$."],
          },
        },
        {
          id: "ciem-u8-probability-problems-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two independent events have $P(A)=0.25$ and $P(B)=0.35$. Find $P(A\\cup B)$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.5125 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
              { kind: "formula", name: "Independent events", statement: "Independent: $P(A\\cap B)=P(A)\\times P(B)$" },
            ],
            steps: [
              { reasoning: "Find the overlap using independence.", working: "P(A\\cap B)=0.25\\times0.35=0.0875", marks: 1, markCode: "M" },
              { reasoning: "Apply the addition rule.", working: "0.25+0.35-0.0875", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=0.5125", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5125$",
            commonErrors: ["Assuming independence means $P(A\\cup B)=P(A)+P(B)=0.6$ — the overlap must still be subtracted."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u8-probability-notes",
      title: "Probability — revision notes",
      summary: "Single events, trees, complements and multi-step probability problems.",
      sections: [
        {
          heading: "Core rules",
          body: "$P(E)=\\frac{\\text{favourable}}{\\text{total}}$; mutually exclusive: add; complement: $1-P(A)$; overlap: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
        },
        {
          heading: "Trees",
          body: "Multiply along paths, add across paths. Without replacement changes second-branch probabilities.",
        },
        {
          heading: "Exam technique",
          body: "- 'At least one' → complement.\n- Expected frequency $=n\\times P$.\n- Check probabilities sum to 1 for exhaustive events.",
        },
      ],
    },
  ],
};
