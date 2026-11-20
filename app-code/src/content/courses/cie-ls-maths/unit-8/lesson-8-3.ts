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
              { id: "a", text: "$\\frac{1}{6}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$\\frac{1}{12}$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$10$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$60$" },
              { id: "d", text: "$15$" },
            ],
            correctChoiceId: "a",
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
