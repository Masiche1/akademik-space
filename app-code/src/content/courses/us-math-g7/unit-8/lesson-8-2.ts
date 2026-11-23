import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "m7-u8-lesson-8-2",
  code: "8-2",
  title: "Probability: Theoretical and Experimental",
  goal: "I CAN calculate theoretical and experimental probability, and understand the relationship between them.",
  standards: ["7.SP.C.5", "7.SP.C.6", "7.SP.C.7", "7.SP.C.8"],
  vocabulary: [
    {
      term: "Probability",
      definition:
        "A number between $0$ and $1$ that measures the likelihood of an event occurring.",
    },
    {
      term: "Sample space",
      definition: "The set of all possible outcomes of an experiment.",
    },
    {
      term: "Event",
      definition:
        "A subset of the sample space; a specific outcome or combination of outcomes.",
    },
    {
      term: "Theoretical probability",
      definition:
        "Probability calculated using reasoning: $P(E) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$.",
    },
    {
      term: "Experimental probability",
      definition:
        "Probability estimated from actual trials: $P(E) = \\frac{\\text{favorable trials}}{\\text{total trials}}$.",
    },
    {
      term: "Complement",
      definition: "The event that an event does NOT occur: $P(E') = 1 - P(E)$.",
    },
  ],
  concepts: [
    {
      id: "m7-u8-theoretical-probability",
      title: "Theoretical probability",
      skill:
        "Calculate theoretical probability for simple and compound events.",
      lesson: {
        sections: [
          {
            heading: "Basic probability",
            body: "Probability ranges from $0$ (impossible) to $1$ (certain). $P(E) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$. For a fair die, $P(rolling\\ a\\ 3) = \\frac{1}{6}$; $P(rolling\\ an\\ even\\ number) = \\frac{3}{6} = \\frac{1}{2}$.",
          },
          {
            heading: "Sample spaces",
            body: "List all possible outcomes systematically. For two coins: $HH, HT, TH, TT$ (4 outcomes). For a die and coin: $6 \\times 2 = 12$ outcomes. For two dice: $6 \\times 6 = 36$ outcomes. Count favorable outcomes carefully.",
          },
          {
            heading: "Compound events",
            body: "For 'at least one' events, use complement: $P(\\text{at least one}) = 1 - P(\\text{none})$. For 'or' events with mutually exclusive outcomes, add probabilities. For independent events (like two coins), multiply probabilities.",
          },
        ],
        keyFormulas: [
          {
            name: "Probability",
            statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$",
          },
          { name: "Complement", statement: "$P(E') = 1 - P(E)$" },
          {
            name: "Independent events",
            statement: "$P(A \\text{ and } B) = P(A) \\times P(B)$",
          },
        ],
        workedExample: {
          problem:
            "What is the probability of rolling a sum of $7$ with two dice?",
          solution:
            "Favorable outcomes: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ = $6$ outcomes; total = $36$; $P = \\frac{6}{36} = \\frac{1}{6}$.",
        },
      },
      questions: [
        {
          id: "m7-u8-theoretical-probability-q1",
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
                name: "Probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Even numbers: $2, 4, 6$ = $3$ outcomes; total = $6$; $P = \\frac{3}{6} = \\frac{1}{2}$.",
                working: "\\frac{3}{6} = \\frac{1}{2}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $\\frac{1}{2}$",
            commonErrors: ["Counting odd numbers instead of even."],
          },
        },
        {
          id: "m7-u8-theoretical-probability-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the probability of flipping two coins and getting two heads?",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Independent events",
                statement: "$P(A \\text{ and } B) = P(A) \\times P(B)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sample space: $HH, HT, TH, TT$; favorable = $HH$ = $1$ outcome; $P = \\frac{1}{4} = 0.25$.",
                working: "\\frac{1}{4}",
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
            finalAnswer: "$\\frac{1}{4} = 0.25$",
            commonErrors: [
              "Using $\\frac{1}{2}$ instead of $\\frac{1}{4}$ (independent events).",
            ],
          },
        },
        {
          id: "m7-u8-theoretical-probability-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the probability of rolling a sum greater than $9$ with two dice?",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.1111 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counting outcomes",
                statement: "List all favorable outcomes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sums > 9: $10, 11, 12$; outcomes: $(4,6), (5,5), (5,6), (6,4), (6,5), (6,6)$ = $6$ outcomes.",
                working: "6\\text{ outcomes}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Total outcomes = $36$; $P = \\frac{6}{36} = \\frac{1}{6}$.",
                working: "\\frac{1}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\frac{1}{6} \\approx 0.167",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{6} \\approx 0.167$",
            commonErrors: ["Forgetting $(5,5)$ or double-counting."],
          },
        },
        {
          id: "m7-u8-theoretical-probability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Calculate the probability for each event.",
          parts: [
            {
              label: "a",
              prompt: "Rolling a multiple of 3 on a die",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Drawing a red card from a standard deck (26 red cards)",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Flipping a coin and rolling an even number",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Rolling a sum of 8 with two dice",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 0.3333 },
              { label: "(b)", answer: 0.5 },
              { label: "(c)", answer: 0.25 },
              { label: "(d)", answer: 0.1389 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$.",
              },
              {
                kind: "formula",
                name: "Independent events",
                statement: "Multiply probabilities for 'and' events.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Multiples of 3: $3, 6$ = $2$ outcomes; $P = \\frac{2}{6} = \\frac{1}{3}$.",
                working: "\\frac{1}{3}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Red cards = $26$; total = $52$; $P = \\frac{26}{52} = \\frac{1}{2}$.",
                working: "\\frac{1}{2}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$P(\\text{heads}) = \\frac{1}{2}$; $P(\\text{even}) = \\frac{1}{2}$; $P = \\frac{1}{4}$.",
                working: "\\frac{1}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "\\frac{1}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Sum 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$ = $5$ outcomes; $P = \\frac{5}{36}$.",
                working: "\\frac{5}{36}",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\frac{1}{3}$ (b) $\\frac{1}{2}$ (c) $\\frac{1}{4}$ (d) $\\frac{5}{36} \\approx 0.139$",
            commonErrors: [
              "In (d), missing $(4,4)$ or counting symmetric pairs twice.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u8-experimental-probability",
      title: "Experimental probability",
      skill:
        "Calculate experimental probability from trials and understand its relationship to theoretical probability.",
      lesson: {
        sections: [
          {
            heading: "Calculating experimental probability",
            body: "Experimental probability = favorable trials $\\div$ total trials. If you flip a coin $100$ times and get $55$ heads: $P(\\text{heads}) = \\frac{55}{100} = 0.55$. More trials give more reliable estimates.",
          },
          {
            heading: "Theoretical vs experimental",
            body: "Theoretical probability is exact; experimental is an estimate that approaches theoretical as trials increase. For a fair coin, theoretical $P(\\text{heads}) = 0.5$; experimental might be $0.48$ or $0.52$ depending on trials. With few trials, experimental can differ significantly.",
          },
          {
            heading: "When to use each",
            body: "Use theoretical when outcomes are equally likely and countable (dice, coins, cards). Use experimental when theoretical is unknown or outcomes are not equally likely (weather, sports, manufacturing defects). Experimental requires sufficient trials for reliability.",
          },
        ],
        keyFormulas: [
          {
            name: "Experimental probability",
            statement:
              "$P(E) = \\frac{\\text{favorable trials}}{\\text{total trials}}$",
          },
          {
            name: "Law of large numbers",
            statement: "Experimental approaches theoretical as trials increase",
          },
          {
            name: "Reliability",
            statement: "More trials = more reliable estimate",
          },
        ],
        workedExample: {
          problem:
            "A spinner is spun $200$ times and lands on red $87$ times. What is the experimental probability of landing on red?",
          solution: "$P(\\text{red}) = \\frac{87}{200} = 0.435$.",
        },
      },
      questions: [
        {
          id: "m7-u8-experimental-probability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A coin is flipped $50$ times and lands heads $28$ times. What is the experimental probability of heads?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.56$" },
              { id: "b", text: "$0.50$" },
              { id: "c", text: "$0.44$" },
              { id: "d", text: "$28$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Experimental probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(\\text{heads}) = \\frac{28}{50} = 0.56$.",
                working: "0.56",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $0.56$",
            commonErrors: ["Dividing by $28$ instead of $50$."],
          },
        },
        {
          id: "m7-u8-experimental-probability-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A die is rolled $60$ times and lands on $6$ fifteen times. What is the experimental probability of rolling a $6$?",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Experimental probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(6) = \\frac{15}{60} = 0.25$.",
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
            commonErrors: [
              "Using theoretical probability instead of experimental.",
            ],
          },
        },
        {
          id: "m7-u8-experimental-probability-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In $100$ trials, an event occurs $35$ times. What is the experimental probability? How does it compare to a theoretical probability of $0.30$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Experimental probability",
                statement: "$P(E) = \\frac{35}{100} = 0.35$.",
              },
              {
                kind: "property",
                name: "Law of large numbers",
                statement:
                  "Experimental approaches theoretical with more trials.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Experimental probability = $\\frac{35}{100} = 0.35$.",
                working: "0.35",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Theoretical = $0.30$; experimental ($0.35$) is slightly higher.",
                working: "0.35 > 0.30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "With $100$ trials, difference is reasonable; more trials would improve estimate.",
                working: "reasonable",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Experimental probability = $0.35$; slightly higher than theoretical $0.30$.",
            commonErrors: [
              "Expecting experimental to exactly equal theoretical.",
            ],
          },
        },
        {
          id: "m7-u8-experimental-probability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze each scenario.",
          parts: [
            {
              label: "a",
              prompt:
                "A spinner is spun $150$ times and lands on blue $45$ times. Find experimental probability of blue.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "If theoretical probability of blue is $0.25$, is the experimental result consistent? Explain.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "How many trials would you need to get a reliable estimate? Explain.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A coin is flipped $20$ times with $15$ heads. Is this evidence of a biased coin? Explain.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Probability", answer: 0.3 },
              { label: "(b) Consistent?", answer: 1 },
              { label: "(c) Reliable trials", answer: 0 },
              { label: "(d) Biased?", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Experimental probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$.",
              },
              {
                kind: "property",
                name: "Law of large numbers",
                statement: "More trials = better estimate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$P(\\text{blue}) = \\frac{45}{150} = 0.30$.",
                working: "0.30",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Theoretical = $0.25$; experimental = $0.30$; difference = $0.05$; with $150$ trials, this is reasonable variation.",
                working: "consistent",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State answer.",
                working: "yes",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Generally, $100+$ trials provide reasonable estimates; more is better.",
                working: "100+",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$15/20 = 0.75$ heads; with only $20$ trials, this could be chance; need more trials to determine bias.",
                working: "inconclusive",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $0.30$ (b) Yes, consistent (c) $100+$ trials (d) Inconclusive — need more trials",
            commonErrors: ["Drawing conclusions from too few trials."],
          },
        },
      ],
    },
    {
      id: "m7-u8-probability-applications",
      title: "Probability applications",
      skill:
        "Apply probability concepts to real-world situations including games, statistics, and decision-making.",
      lesson: {
        sections: [
          {
            heading: "Games and chance",
            body: "Probability helps analyze games: 'What is the chance of winning?' 'Is this game fair?' For board games, card games, and lotteries, calculate theoretical probabilities to assess fairness and expected outcomes.",
          },
          {
            heading: "Statistical prediction",
            body: "Experimental probability informs predictions: 'If $35\\%$ of items are defective, how many in a batch of $1000$?' Use experimental probability to estimate expected outcomes in real situations.",
          },
          {
            heading: "Decision-making",
            body: "Probability helps make informed decisions: insurance (probability of accident), investments (probability of profit), quality control (probability of defect). Always consider both probability and consequences.",
          },
        ],
        keyFormulas: [
          {
            name: "Expected value",
            statement:
              "$E = \\sum (\\text{outcome} \\times \\text{probability})$",
          },
          {
            name: "Fair game",
            statement: "Expected value = $0$ for all players",
          },
          {
            name: "Risk assessment",
            statement: "Consider probability and consequences",
          },
        ],
        workedExample: {
          problem:
            "A game costs $\\$5$ to play. You win $\\$12$ with probability $0.3$ and nothing otherwise. What is the expected value?",
          solution:
            "$E = 0.3(12) + 0.7(0) - 5 = 3.6 - 5 = -1.4$. Expected loss of $\\$1.40$ per game.",
        },
      },
      questions: [
        {
          id: "m7-u8-probability-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has $5$ red and $15$ blue marbles. What is the probability of drawing a red marble?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{4}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$\\frac{3}{4}$" },
              { id: "d", text: "$\\frac{1}{20}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Red = $5$, total = $20$; $P = \\frac{5}{20} = \\frac{1}{4}$.",
                working: "\\frac{5}{20} = \\frac{1}{4}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $\\frac{1}{4}$",
            commonErrors: ["Using $5/15$ instead of $5/20$."],
          },
        },
        {
          id: "m7-u8-probability-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a quality control test, $2\\%$ of products are defective. In a batch of $500$ products, how many are expected to be defective?",
          response: {
            type: "numeric",
            parts: [{ label: "Expected defective", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expected value",
                statement: "Expected = probability $\\times$ total.",
              },
            ],
            steps: [
              {
                reasoning: "Expected defective = $0.02 \\times 500 = 10$.",
                working: "10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$ products",
            commonErrors: ["Using $2$ instead of $0.02$."],
          },
        },
        {
          id: "m7-u8-probability-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A raffle has $1000$ tickets and $10$ prizes. If you buy $5$ tickets, what is the probability of winning at least one prize? (Assume each ticket is equally likely)",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.0499 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$.",
              },
              {
                kind: "skill",
                name: "At least one",
                statement: "Use complement: $1 - P(\\text{none})$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(\\text{win with one ticket}) = \\frac{10}{1000} = 0.01$; $P(\\text{no win}) = 0.99$.",
                working: "0.99",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For $5$ tickets (assuming independence): $P(\\text{at least one}) = 1 - 0.99^5 = 1 - 0.951 = 0.049$.",
                working: "1 - 0.951 = 0.049",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "0.049 \\approx 4.9\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\approx 0.049$ or $4.9\\%$",
            commonErrors: ["Adding probabilities instead of using complement."],
          },
        },
        {
          id: "m7-u8-probability-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze each scenario.",
          parts: [
            {
              label: "a",
              prompt:
                "A game costs $\\$10$ to play. You win $\\$25$ with probability $0.2$ and nothing otherwise. What is the expected value?",
              marks: 2,
            },
            { label: "b", prompt: "Is this game fair? Explain.", marks: 2 },
            {
              label: "c",
              prompt:
                "If you play $100$ times, what is the expected total loss?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What price would make the game fair?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Expected value ($)", answer: -5 },
              { label: "(b) Fair?", answer: 0 },
              { label: "(c) Expected loss ($)", answer: 500 },
              { label: "(d) Fair price ($)", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement:
                  "$E = \\sum (\\text{outcome} \\times \\text{probability})$.",
              },
              {
                kind: "definition",
                name: "Fair game",
                statement: "Expected value = $0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$E = 0.2(25) + 0.8(0) - 10 = 5 - 10 = -5$.",
                working: "-5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Expected value is $-5$, not $0$; game is not fair (house edge).",
                working: "not fair",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Expected loss per game = $5$; over $100$ games = $500$.",
                working: "500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "500",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "For fair game: cost = $0.2 \\times 25 = 5$; price = $\\$5$.",
                working: "\\$5",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $-5$ (b) Not fair (c) $500$ (d) $\\$5$",
            commonErrors: ["Not subtracting cost in expected value."],
          },
        },
      ],
    },
    {
      id: "m7-u8-probability-simulation",
      title: "Probability simulation and modeling",
      skill:
        "Use simulation to model probability situations and verify theoretical results.",
      lesson: {
        sections: [
          {
            heading: "Simulation methods",
            body: "Simulate probability using random number generators, dice, coins, or computer simulations. For 'probability of rolling sum > 9 with two dice', simulate by rolling two dice many times and counting. Simulation approximates theoretical probability.",
          },
          {
            heading: "When simulation helps",
            body: "Simulation is useful when: (1) theoretical calculation is complex (multiple events), (2) outcomes are not equally likely, (3) you want to verify theoretical results, (4) modeling real-world situations with many variables.",
          },
          {
            heading: "Designing simulations",
            body: "To design a simulation: (1) identify the experiment, (2) determine how to represent outcomes, (3) decide number of trials, (4) collect and analyze data, (5) compare to theoretical probability.",
          },
        ],
        keyFormulas: [
          {
            name: "Simulation",
            statement: "Use random trials to estimate probability",
          },
          { name: "Trials", statement: "More trials = better approximation" },
          {
            name: "Comparison",
            statement: "Experimental should approach theoretical",
          },
        ],
        workedExample: {
          problem:
            "Simulate flipping a coin 100 times using random numbers 0-9 (even = heads, odd = tails). Estimate P(heads).",
          solution:
            "Generate 100 random digits; count even digits; P(heads) ≈ (even count)/100 ≈ 0.5.",
        },
      },
      questions: [
        {
          id: "m7-u8-probability-simulation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method is best for estimating the probability of a complex event with many variables?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Theoretical calculation" },
              { id: "b", text: "Simulation" },
              { id: "c", text: "Guessing" },
              { id: "d", text: "Ignoring variables" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Simulation",
                statement: "Best for complex probability situations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Simulation handles complexity that theoretical calculation cannot easily address.",
                working: "simulation",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Simulation",
            commonErrors: [
              "Trying to calculate theoretically when simulation is easier.",
            ],
          },
        },
        {
          id: "m7-u8-probability-simulation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a simulation of 500 trials, an event occurred 120 times. What is the experimental probability?",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Experimental probability",
                statement: "$P(E) = \\frac{120}{500} = 0.24$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(E) = \\frac{120}{500} = 0.24$.",
                working: "0.24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "0.24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.24$",
            commonErrors: ["Dividing by $120$ instead of $500$."],
          },
        },
        {
          id: "m7-u8-probability-simulation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A simulation gives experimental probability $0.48$ for an event, while theoretical probability is $0.50$. Is this consistent? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Law of large numbers",
                statement:
                  "Experimental approaches theoretical with more trials.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Difference = $0.50 - 0.48 = 0.02$; small difference.",
                working: "0.02",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "With sufficient trials, experimental should be close to theoretical.",
                working: "close",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Yes, $0.48$ is consistent with $0.50$ (within reasonable variation).",
                working: "consistent",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Yes, consistent — difference of $0.02$ is within expected variation.",
            commonErrors: ["Expecting exact match."],
          },
        },
        {
          id: "m7-u8-probability-simulation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a simulation for each scenario.",
          parts: [
            {
              label: "a",
              prompt: "Estimate probability of rolling sum > 9 with two dice",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Estimate probability of drawing 2 red cards from a deck without replacement",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Estimate probability of at least one head in 3 coin flips",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Estimate probability of a spinner landing on any of 3 colors equally",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Simulation design",
                statement:
                  "Identify experiment, represent outcomes, run trials, analyze.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Roll two dice 1000 times; count sums > 9; P = count/1000 ≈ 0.167.",
                working: "simulate dice",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Draw 2 cards 1000 times; count both red; P = count/1000 ≈ 0.245.",
                working: "simulate cards",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Flip 3 coins 1000 times; count at least one head; P = count/1000 ≈ 0.875.",
                working: "simulate coins",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Spin spinner 1000 times; count each color; P = count/1000 ≈ 0.333 each.",
                working: "simulate spinner",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Design simulations with sufficient trials; compare to theoretical probability.",
            commonErrors: [
              "Too few trials; not recording data systematically.",
            ],
          },
        },
      ],
    },
  ],
};
