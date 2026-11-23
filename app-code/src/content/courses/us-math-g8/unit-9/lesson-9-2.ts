import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "m8-u9-lesson-9-2",
  code: "9-2",
  title: "Probability Deep Dive",
  goal: "I CAN calculate probabilities of simple, compound, and complementary events, and use probability to make predictions.",
  standards: ["8.SP.A.5", "8.SP.A.6", "8.SP.A.7", "8.SP.A.8"],
  vocabulary: [
    {
      term: "Probability",
      definition: "The likelihood of an event occurring, from 0 to 1.",
    },
    {
      term: "Sample space",
      definition: "All possible outcomes of an experiment.",
    },
    { term: "Event", definition: "A specific outcome or set of outcomes." },
    {
      term: "Complement",
      definition: "The event that an event does NOT occur.",
    },
    {
      term: "Independent events",
      definition: "Events where one does not affect the other.",
    },
    {
      term: "Compound event",
      definition: "An event combining two or more events.",
    },
  ],
  concepts: [
    {
      id: "m8-u9-basic-probability",
      title: "Basic probability",
      skill:
        "Calculate probability of simple events using $P(E) = \\frac{\\text{favorable}}{\\text{total}}$.",
      lesson: {
        sections: [
          {
            heading: "Probability formula",
            body: "$P(E) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$. For a fair die: $P(\\text{even}) = \\frac{3}{6} = 0.5$.",
          },
          {
            heading: "Impossible and certain",
            body: "$P = 0$ for impossible events; $P = 1$ for certain events. $P(\\text{rolling 7 on a die}) = 0$; $P(\\text{rolling 1-6}) = 1$.",
          },
          {
            heading: "Complement",
            body: "$P(E') = 1 - P(E)$. If $P(\\text{rain}) = 0.3$, then $P(\\text{no rain}) = 0.7$.",
          },
        ],
        keyFormulas: [
          {
            name: "Basic",
            statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$",
          },
          { name: "Complement", statement: "$P(E') = 1 - P(E)$" },
          { name: "Range", statement: "$0 \\leq P(E) \\leq 1$" },
        ],
        workedExample: {
          problem:
            "Find probability of rolling a number greater than 4 on a fair die.",
          solution: "$P = \\frac{2}{6} = \\frac{1}{3}$.",
        },
      },
      questions: [
        {
          id: "m8-u9-basic-probability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the probability of rolling an even number on a fair die?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$\\frac{2}{3}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Basic probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Even numbers: 2,4,6 → $\\frac{3}{6} = \\frac{1}{2}$.",
                evidence: "1/2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\frac{1}{2}$",
            commonErrors: ["Counting wrong outcomes."],
          },
        },
        {
          id: "m8-u9-basic-probability-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $P(\\text{rain}) = 0.4$, what is $P(\\text{no rain})$?",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Complement",
                statement: "$P(E') = 1 - P(E)$",
              },
            ],
            steps: [
              {
                reasoning: "$P(\\text{no rain}) = 1 - 0.4 = 0.6$.",
                working: "0.6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "0.6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.6$",
            commonErrors: ["Not using complement."],
          },
        },
        {
          id: "m8-u9-basic-probability-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find probabilities for each event.",
          parts: [
            { label: "a", prompt: "Rolling a 5 on a die", marks: 1 },
            { label: "b", prompt: "Rolling a number greater than 4", marks: 1 },
            { label: "c", prompt: "Rolling an impossible number", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Basic probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$P = \\frac{1}{6}$.",
                evidence: "1/6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P = \\frac{2}{6} = \\frac{1}{3}$.",
                evidence: "1/3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$P = 0$ (impossible).",
                evidence: "0",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $\\frac{1}{6}$ (b) $\\frac{1}{3}$ (c) $0$",
            commonErrors: ["In (c), not recognizing impossible event."],
          },
        },
        {
          id: "m8-u9-basic-probability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Find probabilities for each event.",
          parts: [
            { label: "a", prompt: "Rolling a prime number on a die", marks: 2 },
            { label: "b", prompt: "Rolling a number less than 3", marks: 2 },
            {
              label: "c",
              prompt: "If $P(A) = 0.3$ and $P(B) = 0.5$, find $P(A')$",
              marks: 2,
            },
            {
              label: "d",
              prompt: "If $P(\\text{heads}) = 0.5$, find $P(\\text{tails})$",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Probability", answer: 0.5 },
              { label: "(b) Probability", answer: 0.33 },
              { label: "(c) Probability", answer: 0.7 },
              { label: "(d) Probability", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Basic probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$",
              },
              {
                kind: "formula",
                name: "Complement",
                statement: "$P(E') = 1 - P(E)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Primes: 2,3,5 → $\\frac{3}{6} = \\frac{1}{2}$.",
                working: "1/2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Numbers < 3: 1,2 → $\\frac{2}{6} = \\frac{1}{3}$.",
                working: "1/3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$P(A') = 1 - 0.3 = 0.7$.",
                working: "0.7",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$P(\\text{tails}) = 1 - 0.5 = 0.5$.",
                working: "0.5",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\frac{1}{2}$ (b) $\\frac{1}{3}$ (c) $0.7$ (d) $0.5$",
            commonErrors: ["In (a), not recognizing prime numbers."],
          },
        },
      ],
    },
    {
      id: "m8-u9-compound-probability",
      title: "Compound probability",
      skill:
        "Calculate probabilities of compound events using addition and multiplication rules.",
      lesson: {
        sections: [
          {
            heading: "Addition rule",
            body: "For mutually exclusive events: $P(A \\text{ or } B) = P(A) + P(B)$. For events that can both occur: $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$.",
          },
          {
            heading: "Multiplication rule",
            body: "For independent events: $P(A \\text{ and } B) = P(A) \\times P(B)$. For dependent events: $P(A \\text{ and } B) = P(A) \\times P(B|A)$.",
          },
          {
            heading: "Independent vs dependent",
            body: "Independent: coin flips, dice rolls (one doesn't affect other). Dependent: drawing cards without replacement (first draw affects second).",
          },
        ],
        keyFormulas: [
          {
            name: "Addition",
            statement: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
          },
          {
            name: "Multiplication",
            statement: "$P(A \\cap B) = P(A) \\times P(B)$ (independent)",
          },
          {
            name: "Mutually exclusive",
            statement: "Cannot both occur → $P(A \\cap B) = 0$",
          },
        ],
        workedExample: {
          problem: "Find probability of rolling even OR rolling 5 on a die.",
          solution:
            "$P(\\text{even}) = \\frac{1}{2}$, $P(5) = \\frac{1}{6}$, mutually exclusive → $P = \\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$.",
        },
      },
      questions: [
        {
          id: "m8-u9-compound-probability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the probability of rolling even OR rolling 5 on a fair die?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{3}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$\\frac{5}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Addition rule",
                statement:
                  "$P(A \\cup B) = P(A) + P(B)$ for mutually exclusive.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$.",
                evidence: "2/3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\frac{2}{3}$",
            commonErrors: ["Not recognizing mutually exclusive."],
          },
        },
        {
          id: "m8-u9-compound-probability-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the probability of flipping heads twice in a row?",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Multiplication rule",
                statement:
                  "$P(A \\cap B) = P(A) \\times P(B)$ for independent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(\\text{heads}) = 0.5$; $P(\\text{heads twice}) = 0.5 \\times 0.5 = 0.25$.",
                working: "0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "0.25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.25$",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "m8-u9-compound-probability-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find probabilities for each event.",
          parts: [
            { label: "a", prompt: "Rolling even OR rolling 3", marks: 1 },
            { label: "b", prompt: "Flipping heads twice", marks: 1 },
            { label: "c", prompt: "Rolling even AND rolling 6", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Addition rule",
                statement: "For 'or' events.",
              },
              {
                kind: "formula",
                name: "Multiplication rule",
                statement: "For 'and' events.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$.",
                evidence: "2/3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$0.5 \\times 0.5 = 0.25$.",
                evidence: "0.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Rolling 6 is even → $P(\\text{even} \\cap 6) = P(6) = \\frac{1}{6}$.",
                evidence: "1/6",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $\\frac{2}{3}$ (b) $0.25$ (c) $\\frac{1}{6}$",
            commonErrors: ["In (c), not recognizing overlap."],
          },
        },
        {
          id: "m8-u9-compound-probability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Find probabilities for each event.",
          parts: [
            { label: "a", prompt: "Rolling even OR rolling 2", marks: 2 },
            { label: "b", prompt: "Flipping heads OR tails", marks: 2 },
            { label: "c", prompt: "Rolling 3 AND rolling 4", marks: 2 },
            {
              label: "d",
              prompt: "Drawing two aces from deck (with replacement)",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Probability", answer: 0.5 },
              { label: "(b) Probability", answer: 1 },
              { label: "(c) Probability", answer: 0 },
              { label: "(d) Probability", answer: 0.006 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Addition rule",
                statement: "For 'or' events.",
              },
              {
                kind: "formula",
                name: "Multiplication rule",
                statement: "For 'and' events.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Rolling 2 is even → $P(\\text{even} \\cup 2) = P(\\text{even}) = \\frac{1}{2}$.",
                working: "1/2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P(\\text{heads or tails}) = 1$ (certain).",
                working: "1",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Cannot roll 3 and 4 simultaneously → $P = 0$.",
                working: "0",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "$P(\\text{ace}) = \\frac{4}{52} = \\frac{1}{13}$; $P(\\text{two aces}) = (\\frac{1}{13})^2 = \\frac{1}{169} \\approx 0.006$.",
                working: "1/169",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\frac{1}{2}$ (b) $1$ (c) $0$ (d) $\\frac{1}{169} \\approx 0.006$",
            commonErrors: ["In (a), not recognizing overlap."],
          },
        },
      ],
    },
    {
      id: "m8-u9-probability-applications",
      title: "Probability applications",
      skill: "Apply probability to real-world scenarios and make predictions.",
      lesson: {
        sections: [
          {
            heading: "Real-world probability",
            body: "Probability is used in weather forecasting, sports analytics, insurance, gambling, and scientific experiments. Understanding probability helps make informed decisions.",
          },
          {
            heading: "Expected value",
            body: "Expected value = sum of (probability × value) for all outcomes. For a game paying $\\$10$ with $P = 0.1$ and $0$ otherwise: $EV = 0.1(10) + 0.9(0) = \\$1$.",
          },
          {
            heading: "Long-term predictions",
            body: "Over many trials, actual results approach theoretical probability. If $P(\\text{heads}) = 0.5$, in 1000 flips expect ~500 heads.",
          },
        ],
        keyFormulas: [
          {
            name: "Expected value",
            statement: "$EV = \\sum P(x_i) \\cdot x_i$",
          },
          {
            name: "Law of large numbers",
            statement: "Long-term frequency → probability",
          },
          {
            name: "Applications",
            statement: "Weather, sports, insurance, science",
          },
        ],
        workedExample: {
          problem:
            "A raffle has 100 tickets, one winner gets $\\$500$. What is expected value per ticket?",
          solution: "$EV = \\frac{1}{100}(500) = \\$5$.",
        },
      },
      questions: [
        {
          id: "m8-u9-probability-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does expected value represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Average outcome over many trials" },
              { id: "b", text: "Most likely outcome" },
              { id: "c", text: "Maximum possible outcome" },
              { id: "d", text: "Minimum possible outcome" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expected value",
                statement: "Average outcome.",
              },
            ],
            steps: [
              {
                reasoning: "Expected value = average outcome over many trials.",
                evidence: "average",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Average outcome over many trials",
            commonErrors: ["Confusing with most likely outcome."],
          },
        },
        {
          id: "m8-u9-probability-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A game pays $\\$20$ with probability $0.1$ and $0$ otherwise. What is expected value?",
          response: {
            type: "numeric",
            parts: [{ label: "EV ($)", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$EV = \\sum P(x_i) \\cdot x_i$",
              },
            ],
            steps: [
              {
                reasoning: "$EV = 0.1(20) + 0.9(0) = \\$2$.",
                working: "2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$2$",
            commonErrors: ["Not weighting by probability."],
          },
        },
        {
          id: "m8-u9-probability-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A raffle: 200 tickets, one winner gets $\\$1000$. EV per ticket?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "If $P(\\text{win}) = 0.05$ and prize is $\\$50$, EV?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "In 1000 coin flips, expected heads?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$EV = \\sum P(x_i) \\cdot x_i$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$EV = \\frac{1}{200}(1000) = \\$5$.",
                evidence: "5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$EV = 0.05(50) = \\$2.50$.",
                evidence: "2.50",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Expected heads = $1000 \\times 0.5 = 500$.",
                evidence: "500",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $\\$5$ (b) $\\$2.50$ (c) $500$",
            commonErrors: ["In (c), not multiplying by probability."],
          },
        },
        {
          id: "m8-u9-probability-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A lottery ticket costs $\\$2$ and pays $\\$100$ with $P = 0.01$. Is it fair?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Expected value of the lottery ticket?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "If you buy 100 tickets, expected total winnings?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why might people still buy lottery tickets?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$EV = \\sum P(x_i) \\cdot x_i$",
              },
              {
                kind: "skill",
                name: "Decision making",
                statement: "EV vs cost.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Not fair: EV = $\\$1$ < cost $\\$2$.",
                evidence: "not fair",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$EV = 0.01(100) + 0.99(0) = \\$1$.",
                evidence: "1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$100 \\times \\$1 = \\$100$ expected winnings.",
                evidence: "100",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Entertainment, hope, small chance of big win, social pressure.",
                evidence: "reasons",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Not fair (b) $\\$1$ (c) $\\$100$ (d) Entertainment/hope",
            commonErrors: ["In (a), not comparing EV to cost."],
          },
        },
      ],
    },
  ],
};
