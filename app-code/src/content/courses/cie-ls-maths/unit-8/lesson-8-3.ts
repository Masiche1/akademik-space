import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "cilm-u8-lesson-8-3",
  code: "8-3",
  title: "Probability basics",
  goal: "I CAN calculate simple probabilities and use probability scales.",
  standards: ["0862 Statistics: probability"],
  vocabulary: [
    { term: "Probability", definition: "Chance of an event occurring, expressed as a fraction, decimal or percentage." },
    { term: "Sample space", definition: "All possible outcomes of an experiment." },
    { term: "Event", definition: "A specific outcome or set of outcomes of interest." },
    { term: "Certain", definition: "Probability $=1$ — will definitely happen." },
    { term: "Impossible", definition: "Probability $=0$ — cannot happen." },
    { term: "Equally likely", definition: "Each outcome has the same probability." },
  ],
  concepts: [
    {
      id: "cilm-u8-probability",
      title: "Calculating probability",
      skill: "Find probabilities as fractions/decimals/percentages; identify impossible and certain events.",
      lesson: {
        sections: [
          {
            heading: "The formula",
            body: "$P(\\text{event}) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$\n\nCoin: $P(\\text{heads}) = \\frac{1}{2}$. Die: $P(\\text{6}) = \\frac{1}{6}$.",
          },
          {
            heading: "Probability scale",
            body: "$0$ = impossible; $0.5$ = even chance; $1$ = certain. Probabilities always between $0$ and $1$ inclusive.",
          },
          {
            heading: "Counting outcomes",
            body: "List or count carefully. Two coins: 4 outcomes (HH, HT, TH, TT); $P(\\text{one head}) = \\frac{2}{4}=\\frac{1}{2}$ — HT and TH are DIFFERENT outcomes.",
          },
        ],
        keyFormulas: [
          { name: "Probability", statement: "$P = \\frac{\\text{favourable}}{\\text{total}}$; range $0 \\le P \\le 1$." },
        ],
        workedExample: {
          problem: "A bag has 3 red, 5 blue, 2 green counters. Find $P(\\text{blue})$.",
          solution: "$P(\\text{blue}) = \\frac{5}{10} = \\frac{1}{2}$.",
        },
      },
      questions: [
        {
          id: "cilm-u8-prob-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the probability of rolling a 6 on a fair die?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{3}$" },
              { id: "b", text: "$\\frac{1}{6}$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$\\frac{1}{12}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Probability", statement: "$P(6)=\\frac{1}{6}$ — one favourable of six outcomes." },
            ],
            steps: [
              { reasoning: "One face shows 6 out of 6 faces → $\\frac{1}{6}$.", working: "1/6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{6}$",
            commonErrors: ["Choosing (c) — probability can't exceed 1."],
          },
        },
        {
          id: "cilm-u8-prob-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner has 8 equal sections: 3 red, 3 blue, 2 green. Find $P(\\text{red})$ as a fraction and decimal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Probability", statement: "$P(\\text{red})=\\frac{3}{8}=0.375$." },
            ],
            steps: [
              { reasoning: "$P = \\frac{3}{8}$.", working: "3/8", marks: 1, markCode: "M" },
              { reasoning: "$=0.375$.", working: "0.375", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8} = 0.375$",
            commonErrors: ["$\\frac{3}{3+3+2}=\\frac{3}{8}$ — total is all sections."],
          },
        },
        {
          id: "cilm-u8-prob-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two coins are tossed. List all outcomes and find $P(\\text{exactly one head})$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sample space", statement: "HH, HT, TH, TT — 4 outcomes; one head = HT, TH → $\\frac{2}{4}=\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "Outcomes: HH, HT, TH, TT.", working: "4\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "Exactly one head: HT and TH → 2 outcomes.", working: "HT,TH", marks: 1, markCode: "M" },
              { reasoning: "$P = \\frac{2}{4} = \\frac{1}{2}$.", working: "1/2", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P = \\frac{1}{2}$ (outcomes HH, HT, TH, TT)",
            commonErrors: ["Counting HT=TH — they are distinct outcomes."],
          },
        },
        {
          id: "cilm-u8-prob-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bag contains 4 red, 6 blue counters. One is drawn, replaced, then another drawn.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{red on first draw})$.", marks: 2 },
            { label: "b", prompt: "Find $P(\\text{blue on first draw})$.", marks: 1 },
            { label: "c", prompt: "Since the first is replaced, find $P(\\text{red on second draw})$.", marks: 2 },
            { label: "d", prompt: "Find $P(\\text{two reds})$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Probability with replacement", statement: "Independent draws: multiply probabilities." },
            ],
            steps: [
              { part: "a", reasoning: "$P(\\text{red}) = \\frac{4}{10} = \\frac{2}{5}$.", working: "2/5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(\\text{blue}) = \\frac{6}{10} = \\frac{3}{5}$.", working: "3/5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Replacement → same as first: $\\frac{2}{5}$.", working: "2/5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Independence noted.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$P(\\text{RR}) = \\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}$.", working: "4/25", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiplication correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$\\frac{4}{25}$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{2}{5}$ (b) $\\frac{3}{5}$ (c) $\\frac{2}{5}$ (d) $\\frac{4}{25}$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Product correct.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) adding probabilities — independent events multiply."],
          },
        },
        {
          id: "cilm-u8-prob-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the probability of rolling an EVEN number on a fair die?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{3}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$\\frac{1}{2}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Probability", statement: "Even numbers $2,4,6$ → $3$ of $6$ → $\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "Three even faces out of six → $\\frac{3}{6}=\\frac{1}{2}$.", working: "3/6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: ["Choosing (a) — that's one face, not three."],
          },
        },
        {
          id: "cilm-u8-prob-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bag has $5$ red and $5$ blue counters. Find $P(\\text{red})$.",
          response: { type: "numeric", parts: [{ label: "probability", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Probability", statement: "$P(\\text{red}) = \\frac{5}{10} = \\frac{1}{2} = 0.5$." },
            ],
            steps: [
              { reasoning: "$\\frac{5}{10} = 0.5$.", working: "0.5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["$\\frac{5}{5}$ — denominator is total counters."],
          },
        },
        {
          id: "cilm-u8-prob-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner has 10 equal sections numbered $1$–$10$. Find $P(\\text{a number greater than } 7)$ as a fraction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Probability", statement: "Numbers $8,9,10$ → $3$ of $10$ → $\\frac{3}{10}$." },
            ],
            steps: [
              { reasoning: "Favourable: $8, 9, 10$ — three outcomes.", working: "8,9,10", marks: 1, markCode: "M" },
              { reasoning: "$P = \\frac{3}{10}$.", working: "3/10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{10}$",
            commonErrors: ["Including 7 — 'greater than 7' excludes 7."],
          },
        },
        {
          id: "cilm-u8-prob-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is IMPOSSIBLE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rolling a 6 on a fair die" },
              { id: "b", text: "Rolling a 7 on a fair die" },
              { id: "c", text: "A coin landing heads" },
              { id: "d", text: "Rolling a 5 on a fair die" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Impossible event", statement: "$P = 0$ — cannot happen." },
            ],
            steps: [
              { reasoning: "A die has faces 1–6; 7 cannot occur → impossible.", working: "7\\text{ impossible}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Rolling a 7 on a fair die",
            commonErrors: ["Confusing unlikely with impossible."],
          },
        },
        {
          id: "cilm-u8-prob-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag contains only red counters. If one is drawn at random, the probability it is red is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "Cannot be found" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Certain event", statement: "All outcomes red → $P(\\text{red}) = 1$." },
            ],
            steps: [
              { reasoning: "Every counter is red → certain → $P = 1$.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $1$",
            commonErrors: ["Choosing (a) — 0 is for impossible events."],
          },
        },
        {
          id: "cilm-u8-prob-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A fair die is rolled once. Find $P(\\text{a prime number})$, giving your answer as a fraction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting outcomes", statement: "Primes on die: $2,3,5$ → $\\frac{3}{6}=\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "Prime faces: $2, 3, 5$ (note: 1 is not prime).", working: "2,3,5", marks: 1, markCode: "M" },
              { reasoning: "$P = \\frac{3}{6}$.", working: "3/6", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{2}$.", working: "1/2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{2}$",
            commonErrors: ["Including 1 as prime → $\\frac{4}{6}$."],
          },
        },
        {
          id: "cilm-u8-prob-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The probability of an event is always between...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$ and $1$" },
              { id: "b", text: "$-1$ and $1$" },
              { id: "c", text: "$0$ and $100$" },
              { id: "d", text: "$1$ and $10$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Probability range", statement: "$0 \\le P \\le 1$." },
            ],
            steps: [
              { reasoning: "Probabilities lie between 0 and 1 inclusive.", working: "0\\le P\\le1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0$ and $1$",
            commonErrors: ["Thinking probabilities can exceed 1."],
          },
        },
        {
          id: "cilm-u8-prob-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner lands on blue with probability $\\frac{2}{5}$. What is the probability it does NOT land on blue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complement", statement: "$P(\\text{not blue}) = 1 - \\frac{2}{5} = \\frac{3}{5}$." },
            ],
            steps: [
              { reasoning: "$1 - \\frac{2}{5} = \\frac{3}{5}$.", working: "3/5", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{3}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{5}$",
            commonErrors: ["Answering $\\frac{2}{5}$ again — 'not' means complement."],
          },
        },
        {
          id: "cilm-u8-prob-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two coins are tossed. The outcomes HT and TH are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different outcomes" },
              { id: "b", text: "Equally likely as HH" },
              { id: "c", text: "The same outcome" },
              { id: "d", text: "Impossible outcomes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sample space", statement: "Order matters: HT ≠ TH — they are distinct outcomes." },
            ],
            steps: [
              { reasoning: "HT and TH are different ordered outcomes.", working: "distinct", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Different outcomes",
            commonErrors: ["Merging HT and TH as one outcome."],
          },
        },
        {
          id: "cilm-u8-prob-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bag contains $4$ red, $6$ blue counters. One counter is drawn at random.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{red})$.", marks: 2 },
            { label: "b", prompt: "Find $P(\\text{blue})$.", marks: 2 },
            { label: "c", prompt: "Find $P(\\text{red or blue})$ and explain your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Probability", statement: "$P = \\frac{favourable}{total}$; probabilities sum to 1." },
            ],
            steps: [
              { part: "a", reasoning: "$P(\\text{red}) = \\frac{4}{10} = \\frac{2}{5}$.", working: "2/5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(\\text{blue}) = \\frac{6}{10} = \\frac{3}{5}$.", working: "3/5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Every counter is red or blue → $P = 1$ (certain).", working: "1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explanation correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{2}{5}$ (b) $\\frac{3}{5}$ (c) $1$ — certain event",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
            ],
            commonErrors: ["In (c) adding $\\frac{2}{5}+\\frac{3}{5}$ and stopping at unsimplified or doubting it equals 1."],
          },
        },
        {
          id: "cilm-u8-prob-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A biased coin has $P(\\text{heads}) = 0.7$. What is $P(\\text{tails})$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.7$" },
              { id: "b", text: "$1.7$" },
              { id: "c", text: "$0.3$" },
              { id: "d", text: "$0.5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complement", statement: "$P(\\text{tails}) = 1 - 0.7 = 0.3$." },
            ],
            steps: [
              { reasoning: "$1 - 0.7 = 0.3$.", working: "0.3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0.3$",
            commonErrors: ["Assuming fair coin $0.5$ — coin is biased."],
          },
        },
        {
          id: "cilm-u8-prob-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A number cube (die) has faces numbered $1$–$6$. Find $P(\\text{a number less than } 4)$, giving your answer as a decimal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Probability", statement: "Numbers $1,2,3$ → $\\frac{3}{6} = 0.5$." },
            ],
            steps: [
              { reasoning: "Favourable: $1, 2, 3$ — three of six.", working: "3/6", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{3}{6} = 0.5$.", working: "0.5", marks: 1, markCode: "M" },
              { reasoning: "$0.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["Including 4 — 'less than 4' excludes 4."],
          },
        },
      ],
    },
    {
      id: "cilm-u8-expectation",
      title: "Expectation and experimental probability",
      skill: "Calculate expected frequency and compare theoretical vs experimental probability.",
      lesson: {
        sections: [
          {
            heading: "Expected frequency",
            body: "$\\text{Expected} = P \\times \\text{number of trials}$.\n\nDie rolled 60 times: $P(6)=\\frac{1}{6}$ → expected $=60\\times\\frac{1}{6}=10$ sixes.",
          },
          {
            heading: "Experimental probability",
            body: "$P_{exp} = \\frac{\\text{times event occurred}}{\\text{total trials}}$. Approaches theoretical value with more trials.",
          },
          {
            heading: "Comparing",
            body: "Experimental results vary — more trials give closer match to theory. Small samples can be misleading.",
          },
        ],
        keyFormulas: [
          { name: "Expected frequency", statement: "$E = P \\times n$ trials." },
        ],
        workedExample: {
          problem: "A coin is tossed 100 times and lands heads 47 times. Find experimental probability and compare with theoretical.",
          solution: "$P_{exp}=\\frac{47}{100}=0.47$ vs theoretical $0.5$ — close, within expected variation.",
        },
      },
      questions: [
        {
          id: "cilm-u8-exp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A die is rolled 60 times. What is the expected number of sixes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expectation", statement: "$60 \\times \\frac{1}{6} = 10$." },
            ],
            steps: [
              { reasoning: "$E = 60 \\times \\frac{1}{6} = 10$ sixes.", working: "60\\times1/6=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $10$",
            commonErrors: ["Choosing (b) — that's probability as count, not expected frequency."],
          },
        },
        {
          id: "cilm-u8-exp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A coin lands heads 23 times in 50 tosses. Find the experimental probability of heads.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Experimental probability", statement: "$P_{exp}=\\frac{23}{50}=0.46$." },
            ],
            steps: [
              { reasoning: "$\\frac{23}{50} = 0.46$.", working: "0.46", marks: 1, markCode: "M" },
              { reasoning: "$P_{exp}=0.46$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.46$",
            commonErrors: ["$\\frac{50}{23}$ — experimental probability is successes/total."],
          },
        },
        {
          id: "cilm-u8-exp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A biased coin has $P(\\text{heads})=0.6$. It is tossed 200 times. Find expected heads and tails.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Expectation", statement: "Heads: $200\\times0.6=120$; tails: $200\\times0.4=80$." },
            ],
            steps: [
              { reasoning: "Heads: $0.6 \\times 200 = 120$.", working: "120", marks: 1, markCode: "M" },
              { reasoning: "Tails: $0.4 \\times 200 = 80$.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "Both expected values.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120$ heads, $80$ tails",
            commonErrors: ["Assuming $P(\\text{tails})=0.6$ too — probabilities must sum to 1."],
          },
        },
        {
          id: "cilm-u8-exp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student rolls a die 120 times and records the results.",
          parts: [
            { label: "a", prompt: "Find expected frequency of each number.", marks: 2 },
            { label: "b", prompt: "She gets twenty 6s. Find experimental probability of 6.", marks: 2 },
            { label: "c", prompt: "Compare experimental with theoretical probability.", marks: 2 },
            { label: "d", prompt: "Explain why results might differ from theory.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theoretical vs experimental", statement: "Expected $=P\\times n$; experimental varies around theoretical." },
            ],
            steps: [
              { part: "a", reasoning: "$120\\times\\frac{1}{6}=20$ each.", working: "20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P_{exp}=\\frac{20}{120}=\\frac{1}{6}\\approx0.167$.", working: "1/6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Experimental $\\frac{1}{6}$ equals theoretical $\\frac{1}{6}$ — very close match.", working: "\\text{match}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Comparison correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Random variation; small samples deviate; die may not be perfectly fair; chance effects.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasons given.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20$ each (b) $\\frac{1}{6}$ (c) matches theory exactly (d) random variation, finite trials",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Compared.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'the die is biased' without evidence — variation is expected."],
          },
        },
        {
          id: "cilm-u8-exp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A coin is tossed $80$ times. What is the expected number of heads?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$80$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expectation", statement: "$E = 80 \\times 0.5 = 40$." },
            ],
            steps: [
              { reasoning: "$80 \\times \\frac{1}{2} = 40$ heads.", working: "80\\times0.5=40", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $40$",
            commonErrors: ["Choosing (b) — that's all tosses, not expected heads."],
          },
        },
        {
          id: "cilm-u8-exp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A spinner has $P(\\text{win}) = \\frac{1}{4}$. In $200$ spins, what is the expected number of wins?",
          response: { type: "numeric", parts: [{ label: "expected wins", answer: 50 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expectation", statement: "$E = \\frac{1}{4} \\times 200 = 50$." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{4} \\times 200 = 50$.", working: "50", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$50$",
            commonErrors: ["$200$ — forgot to multiply by probability."],
          },
        },
        {
          id: "cilm-u8-exp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A die is rolled $90$ times. Find the expected number of times a $6$ appears.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expectation", statement: "$E = 90 \\times \\frac{1}{6} = 15$." },
            ],
            steps: [
              { reasoning: "$90 \\times \\frac{1}{6} = 15$.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "$15$ sixes expected.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$",
            commonErrors: ["$6$ — confused probability with count."],
          },
        },
        {
          id: "cilm-u8-exp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Experimental probability is calculated as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ always" },
              { id: "b", text: "$\\frac{\\text{total trials}}{\\text{times event occurred}}$" },
              { id: "c", text: "$\\frac{\\text{times event occurred}}{\\text{total trials}}$" },
              { id: "d", text: "$\\frac{\\text{favourable}}{\\text{total}}$ only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Experimental probability", statement: "$P_{exp} = \\frac{\\text{occurrences}}{\\text{trials}}$." },
            ],
            steps: [
              { reasoning: "Occurrences over trials.", working: "occ/trials", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{\\text{times event occurred}}{\\text{total trials}}$",
            commonErrors: ["Inverting the fraction."],
          },
        },
        {
          id: "cilm-u8-exp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A biased coin has $P(\\text{heads}) = 0.6$ and is tossed $150$ times. What is the expected number of tails?",
          response: { type: "numeric", parts: [{ label: "expected tails", answer: 60 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Expectation", statement: "$P(\\text{tails}) = 0.4$; $E = 150 \\times 0.4 = 60$." },
            ],
            steps: [
              { reasoning: "Tails probability $= 1 - 0.6 = 0.4$; $150 \\times 0.4 = 60$.", working: "60", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$60$",
            commonErrors: ["Using $0.6$ for tails — probabilities must sum to 1."],
          },
        },
        {
          id: "cilm-u8-exp-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A biased die has $P(6) = \\frac{1}{3}$. It is rolled $120$ times. Find the expected number of sixes and the expected number of non-sixes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Expectation", statement: "Sixes: $120\\times\\frac{1}{3}=40$; non-sixes: $120\\times\\frac{2}{3}=80$." },
            ],
            steps: [
              { reasoning: "Sixes: $120 \\times \\frac{1}{3} = 40$.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "Non-sixes: $120 \\times \\frac{2}{3} = 80$ (or $120-40$).", working: "80", marks: 1, markCode: "M" },
              { reasoning: "$40$ sixes, $80$ non-sixes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ sixes, $80$ non-sixes",
            commonErrors: ["Using $\\frac{1}{6}$ for a biased die — use given probability."],
          },
        },
        {
          id: "cilm-u8-exp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As the number of trials increases, experimental probability tends to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Get closer to theoretical probability" },
              { id: "b", text: "Stay exactly constant" },
              { id: "c", text: "Move away from theoretical probability" },
              { id: "d", text: "Become impossible" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Law of large numbers", statement: "More trials → experimental results approach theoretical value." },
            ],
            steps: [
              { reasoning: "Large samples converge to theory.", working: "converge", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Get closer to theoretical probability",
            commonErrors: ["Thinking small samples are more reliable."],
          },
        },
        {
          id: "cilm-u8-exp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A coin lands heads $31$ times in $60$ tosses. Find the experimental probability of heads.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Experimental probability", statement: "$P_{exp} = \\frac{31}{60} \\approx 0.517$." },
            ],
            steps: [
              { reasoning: "$\\frac{31}{60} \\approx 0.517$ (or leave as fraction).", working: "31/60", marks: 1, markCode: "M" },
              { reasoning: "$P_{exp} \\approx 0.52$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{31}{60} \\approx 0.52$",
            commonErrors: ["$\\frac{60}{31}$ — inverted fraction."],
          },
        },
        {
          id: "cilm-u8-exp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A die is rolled $600$ times. What is the expected number of times a $3$ appears?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$600$" },
              { id: "b", text: "$50$" },
              { id: "c", text: "$100$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expectation", statement: "$E = 600 \\times \\frac{1}{6} = 100$." },
            ],
            steps: [
              { reasoning: "$600 \\times \\frac{1}{6} = 100$.", working: "100", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $100$",
            commonErrors: ["Choosing (a) — used wrong fraction."],
          },
        },
        {
          id: "cilm-u8-exp-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bag has $3$ red and $7$ blue counters. One is drawn, recorded, then replaced. This is repeated $200$ times.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{red})$ for a single draw.", marks: 2 },
            { label: "b", prompt: "Find the expected number of red draws in $200$ trials.", marks: 2 },
            { label: "c", prompt: "If $72$ red draws are recorded, find the experimental probability of red.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theoretical vs experimental", statement: "$P=\\frac{3}{10}$; $E=60$; experimental $=\\frac{72}{200}=0.36$." },
            ],
            steps: [
              { part: "a", reasoning: "$P(\\text{red}) = \\frac{3}{10}$.", working: "3/10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$E = 200 \\times \\frac{3}{10} = 60$.", working: "60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P_{exp} = \\frac{72}{200} = 0.36$.", working: "0.36", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{3}{10}$ (b) $60$ (c) $0.36$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (b) multiplying by $72$ instead of theoretical probability."],
          },
        },
        {
          id: "cilm-u8-exp-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In $500$ tosses of a coin, heads appeared $255$ times. The experimental probability of heads is closest to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.02$" },
              { id: "b", text: "$0.75$" },
              { id: "c", text: "$0.25$" },
              { id: "d", text: "$0.51$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Experimental probability", statement: "$\\frac{255}{500} = 0.51$." },
            ],
            steps: [
              { reasoning: "$255 \\div 500 = 0.51$ — close to theoretical $0.5$.", working: "0.51", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0.51$",
            commonErrors: ["Choosing (d) — probability cannot exceed 1."],
          },
        },
        {
          id: "cilm-u8-exp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why experimental probability might NOT equal theoretical probability, even for a fair coin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Random variation", statement: "Finite trials → random fluctuation around theoretical value." },
            ],
            steps: [
              { reasoning: "Random chance means actual results vary from expected in any finite number of trials.", working: "variation", marks: 1, markCode: "M" },
              { reasoning: "Small samples show bigger deviations; only large samples converge.", working: "sample size", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random variation in finite trials; small samples deviate more; results approach theory only with many trials.",
            commonErrors: ["Claiming the coin is biased — deviation is expected by chance."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u8-probability-notes",
      title: "Probability — revision notes",
      summary: "Simple probability, sample spaces, expectation, experimental vs theoretical.",
      sections: [
        {
          heading: "Basics",
          body: "$P=\\frac{\\text{favourable}}{\\text{total}}$, always $0\\le P\\le1$. List outcomes carefully — HT and TH are different. Probabilities of all outcomes sum to 1.",
        },
        {
          heading: "Expectation",
          body: "$E=P\\times n$. Experimental $=\\frac{\\text{occurrences}}{\\text{trials}}$ approaches theory with more trials.",
        },
      ],
    },
  ],
};
