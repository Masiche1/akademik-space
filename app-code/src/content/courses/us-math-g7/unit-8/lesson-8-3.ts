import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "m7-u8-lesson-8-3",
  code: "8-3",
  title: "Probability Distributions and Expected Value",
  goal: "I CAN construct and interpret probability distributions, and calculate expected value for decision-making.",
  standards: ["7.SP.C.5", "7.SP.C.6", "7.SP.C.7", "7.SP.C.8"],
  vocabulary: [
    {
      term: "Probability distribution",
      definition:
        "A table or graph showing all possible outcomes and their probabilities.",
    },
    {
      term: "Expected value",
      definition:
        "The long-run average outcome, calculated as sum of (outcome × probability).",
    },
    {
      term: "Fair game",
      definition: "A game where expected value equals zero for all players.",
    },
    {
      term: "Unfair game",
      definition:
        "A game with nonzero expected value; one player has advantage.",
    },
    {
      term: "Risk",
      definition:
        "The variability or uncertainty in outcomes; higher risk often means higher potential reward.",
    },
    {
      term: "Decision analysis",
      definition:
        "Using probability and expected value to make informed choices.",
    },
  ],
  concepts: [
    {
      id: "m7-u8-probability-distributions",
      title: "Probability distributions",
      skill:
        "Construct and interpret probability distributions for discrete random variables.",
      lesson: {
        sections: [
          {
            heading: "Building a distribution",
            body: "List all possible outcomes, calculate probability for each, and verify probabilities sum to $1$. For two coins: $P(HH) = 0.25$, $P(HT) = 0.25$, $P(TH) = 0.25$, $P(TT) = 0.25$. For a spinner with 4 equal sections: each has $P = 0.25$.",
          },
          {
            heading: "Interpreting distributions",
            body: "A probability distribution shows how likely each outcome is. For a game paying $\\$10$ with $P = 0.3$, $\\$5$ with $P = 0.5$, $\\$0$ with $P = 0.2$: most likely outcome is $\\$5$ (50% chance). The distribution reveals the 'shape' of possible results.",
          },
          {
            heading: "Expected value from distribution",
            body: "Expected value = sum of (value × probability) for all outcomes. For the game above: $E = 10(0.3) + 5(0.5) + 0(0.2) = 3 + 2.5 + 0 = 5.5$. The expected value is $\\$5.50$ per game.",
          },
        ],
        keyFormulas: [
          {
            name: "Probability distribution",
            statement: "Table of outcomes and probabilities; sum = $1$",
          },
          {
            name: "Expected value",
            statement: "$E = \\sum (x_i \\times P(x_i))$",
          },
          { name: "Fair game", statement: "$E = 0$" },
        ],
        workedExample: {
          problem:
            "A game pays $\\$8$ with probability $0.25$, $\\$4$ with probability $0.5$, and $\\$0$ with probability $0.25$. Find the expected value.",
          solution: "$E = 8(0.25) + 4(0.5) + 0(0.25) = 2 + 2 + 0 = 4$.",
        },
      },
      questions: [
        {
          id: "m7-u8-probability-distributions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a probability distribution, what must the sum of all probabilities equal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$100$" },
              { id: "d", text: "Any number" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Probability distribution",
                statement: "Probabilities sum to $1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "All possible outcomes must account for 100% of probability = $1$.",
                working: "1",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $1$",
            commonErrors: ["Thinking sum can be any number."],
          },
        },
        {
          id: "m7-u8-probability-distributions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A game pays $\\$6$ with probability $0.4$, $\\$3$ with probability $0.4$, and $\\$0$ with probability $0.2$. What is the expected value?",
          response: {
            type: "numeric",
            parts: [{ label: "Expected value ($)", answer: 3.6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$E = \\sum (x \\times P(x))$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$E = 6(0.4) + 3(0.4) + 0(0.2) = 2.4 + 1.2 + 0 = 3.6$.",
                working: "3.6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "3.60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3.60$",
            commonErrors: [
              "Adding probabilities instead of multiplying by values.",
            ],
          },
        },
        {
          id: "m7-u8-probability-distributions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spinner has 4 equal sections labeled $1, 2, 3, 4$. What is the expected value of one spin?",
          response: {
            type: "numeric",
            parts: [{ label: "Expected value", answer: 2.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$E = \\sum (x \\times P(x))$; each $P = 0.25$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each outcome has $P = 0.25$; values are $1, 2, 3, 4$.",
                working: "P = 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$E = 1(0.25) + 2(0.25) + 3(0.25) + 4(0.25) = 0.25 + 0.5 + 0.75 + 1 = 2.5$.",
                working: "2.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "2.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.5$",
            commonErrors: ["Forgetting to multiply by probability."],
          },
        },
        {
          id: "m7-u8-probability-distributions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Construct a probability distribution and find expected value for each scenario.",
          parts: [
            {
              label: "a",
              prompt:
                "A game pays $\\$10$ with $P = 0.2$, $\\$5$ with $P = 0.5$, $\\$0$ with $P = 0.3$",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A spinner pays $\\$8, \\$6, \\$4, \\$2$ with equal probability",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A die game pays $\\$12$ for rolling 6, $\\$6$ for rolling 5, $\\$0$ otherwise",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Two coins are flipped; you win $\\$4$ for two heads, $\\$1$ for one head, $\\$0$ for two tails",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Expected value ($)", answer: 4.5 },
              { label: "(b) Expected value ($)", answer: 5 },
              { label: "(c) Expected value ($)", answer: 3 },
              { label: "(d) Expected value ($)", answer: 1.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$E = \\sum (x \\times P(x))$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$E = 10(0.2) + 5(0.5) + 0(0.3) = 2 + 2.5 + 0 = 4.5$.",
                working: "4.5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each $P = 0.25$; $E = 8(0.25) + 6(0.25) + 4(0.25) + 2(0.25) = 2 + 1.5 + 1 + 0.5 = 5$.",
                working: "5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$P(6) = \\frac{1}{6}$, $P(5) = \\frac{1}{6}$, $P(\\text{other}) = \\frac{4}{6}$; $E = 12(\\frac{1}{6}) + 6(\\frac{1}{6}) + 0 = 2 + 1 = 3$.",
                working: "3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$P(HH) = 0.25$, $P(\\text{one H}) = 0.5$, $P(TT) = 0.25$; $E = 4(0.25) + 1(0.5) + 0(0.25) = 1 + 0.5 = 1.5$.",
                working: "1.5",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $4.50$ (b) $5$ (c) $3$ (d) $1.5$",
            commonErrors: ["In (a), arithmetic error."],
          },
        },
      ],
    },
    {
      id: "m7-u8-expected-value",
      title: "Expected value and decision-making",
      skill:
        "Use expected value to analyze games, make decisions, and understand risk.",
      lesson: {
        sections: [
          {
            heading: "Expected value concept",
            body: "Expected value = long-run average outcome. For a game paying $\\$10$ with $P = 0.2$, $\\$0$ otherwise: $E = 10(0.2) + 0(0.8) = 2$. Over many games, average winnings = $\\$2$ per game. Expected value helps predict long-term outcomes.",
          },
          {
            heading: "Fair vs unfair games",
            body: "Fair game: expected value = $0$ for all players (no advantage). Unfair game: expected value ≠ $0$; house or one player has advantage. For a fair game, the cost to play should equal expected winnings. If cost > expected value, game is unfair (bad for player).",
          },
          {
            heading: "Decision analysis",
            body: "Use expected value to compare options: 'Should I buy insurance?' Compare expected cost of insurance vs expected loss without insurance. 'Which investment has better expected return?' Compare expected values, considering risk. Higher expected value doesn't always mean better — consider risk tolerance.",
          },
        ],
        keyFormulas: [
          { name: "Expected value", statement: "$E = \\sum (x \\times P(x))$" },
          { name: "Fair game", statement: "$E = 0$" },
          {
            name: "Net expected value",
            statement: "$E_{net} = E_{winnings} - \\text{cost}$",
          },
        ],
        workedExample: {
          problem:
            "A lottery ticket costs $\\$2$. You win $\\$100$ with probability $0.01$ and nothing otherwise. What is the expected value?",
          solution:
            "$E = 100(0.01) + 0(0.99) - 2 = 1 - 2 = -1$. Expected loss of $\\$1$ per ticket.",
        },
      },
      questions: [
        {
          id: "m7-u8-expected-value-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does expected value represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The most likely outcome" },
              { id: "b", text: "The long-run average outcome" },
              { id: "c", text: "The maximum possible outcome" },
              { id: "d", text: "The minimum possible outcome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expected value",
                statement: "Long-run average outcome.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Expected value is the average over many trials, not a single outcome.",
                working: "long-run average",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The long-run average outcome",
            commonErrors: ["Confusing with most likely outcome."],
          },
        },
        {
          id: "m7-u8-expected-value-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A game costs $\\$5$ to play. You win $\\$20$ with probability $0.25$ and nothing otherwise. What is the net expected value?",
          response: {
            type: "numeric",
            parts: [{ label: "Net EV ($)", answer: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$E = 20(0.25) + 0(0.75) - 5 = 5 - 5 = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Winnings EV = $20(0.25) = 5$; net = $5 - 5 = 0$.",
                working: "0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0$ (fair game)",
            commonErrors: ["Forgetting to subtract cost."],
          },
        },
        {
          id: "m7-u8-expected-value-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A game pays $\\$50$ with probability $0.1$, $\\$10$ with probability $0.4$, and $\\$0$ with probability $0.5$. If it costs $\\$8$ to play, should you play? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement:
                  "$E = 50(0.1) + 10(0.4) + 0(0.5) = 5 + 4 + 0 = 9$; net = $9 - 8 = 1$.",
              },
            ],
            steps: [
              {
                reasoning: "Gross EV = $9$; net EV = $9 - 8 = 1$.",
                working: "1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive expected value means favorable long-term.",
                working: "positive",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Yes, play — positive EV of $\\$1$ per game on average.",
                working: "yes",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Yes, because net expected value is positive ($\\$1$).",
            commonErrors: ["Not subtracting cost."],
          },
        },
        {
          id: "m7-u8-expected-value-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze each game.",
          parts: [
            {
              label: "a",
              prompt:
                "Game A: costs $\\$10$, wins $\\$30$ with $P = 0.3$, $\\$0$ otherwise. Find net EV.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Game B: costs $\\$5$, wins $\\$12$ with $P = 0.4$, $\\$0$ otherwise. Find net EV.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Which game has better expected value for the player?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If you play Game A 100 times, what is expected total profit/loss?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Net EV ($)", answer: -1 },
              { label: "(b) Net EV ($)", answer: -0.2 },
              { label: "(c) Better game", answer: 1 },
              { label: "(d) Total ($)", answer: -100 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$E = \\sum (x \\times P(x)) - \\text{cost}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$E = 30(0.3) + 0(0.7) - 10 = 9 - 10 = -1$.",
                working: "-1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$E = 12(0.4) + 0(0.6) - 5 = 4.8 - 5 = -0.2$.",
                working: "-0.2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Game B has less negative EV ($-0.2 > -1$), so B is better.",
                working: "B",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Expected loss per game = $1$; over $100$ games = $100$ loss.",
                working: "-100",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $-1$ (b) $-0.2$ (c) Game B (d) $-100$ (loss)",
            commonErrors: [
              "Choosing higher gross EV without considering cost.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u8-probability-modeling",
      title: "Probability modeling",
      skill:
        "Use probability models to represent real-world situations and make predictions.",
      lesson: {
        sections: [
          {
            heading: "Modeling approach",
            body: "To model a situation probabilistically: (1) identify all possible outcomes, (2) determine probabilities, (3) construct distribution, (4) calculate expected value or probabilities of interest, (5) interpret results.",
          },
          {
            heading: "Real-world applications",
            body: "Insurance: model accident probability and cost. Weather: model rain probability for planning. Sports: model game outcomes for predictions. Manufacturing: model defect rates for quality control. Business: model sales for inventory planning.",
          },
          {
            heading: "Limitations",
            body: "Models assume outcomes are independent and probabilities are accurate. Real-world situations may have dependencies (weather affects sales) or uncertain probabilities. Always validate models with real data.",
          },
        ],
        keyFormulas: [
          {
            name: "Model",
            statement: "Mathematical representation of uncertain situation",
          },
          {
            name: "Assumptions",
            statement: "Independence, known probabilities",
          },
          {
            name: "Validation",
            statement: "Compare model predictions to actual data",
          },
        ],
        workedExample: {
          problem:
            "A company estimates $5\\%$ of products are defective. In a shipment of $200$ products, how many defects are expected?",
          solution: "Expected defects = $0.05 \\times 200 = 10$.",
        },
      },
      questions: [
        {
          id: "m7-u8-probability-modeling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a probability model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A physical model" },
              {
                id: "b",
                text: "A mathematical representation of uncertain outcomes",
              },
              { id: "c", text: "A computer program" },
              { id: "d", text: "A graph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probability model",
                statement: "Mathematical representation of outcomes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Probability model represents possible outcomes and their probabilities mathematically.",
                working: "mathematical",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** A mathematical representation of uncertain outcomes",
            commonErrors: ["Confusing with physical or computer models."],
          },
        },
        {
          id: "m7-u8-probability-modeling-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A weather forecast says $70\\%$ chance of rain. What does this mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probability",
                statement: "Likelihood of rain = $0.70$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$70\\%$ means probability of rain = $0.70$ (70% likely).",
                working: "0.70",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Does not guarantee rain; represents likelihood based on similar conditions.",
                working: "likelihood",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "70% chance of rain means 70% probability of rain occurring.",
            commonErrors: ["Thinking it guarantees rain."],
          },
        },
        {
          id: "m7-u8-probability-modeling-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A factory produces $1000$ items daily with $2\\%$ defect rate. How many defective items are expected per day? Per week (5 days)?",
          response: {
            type: "numeric",
            parts: [{ label: "Daily defects", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "Expected = probability × total.",
              },
            ],
            steps: [
              {
                reasoning: "Daily defects = $0.02 \\times 1000 = 20$.",
                working: "20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weekly = $20 \\times 5 = 100$ defects.",
                working: "100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answers.",
                working: "20\\text{ daily}, 100\\text{ weekly}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$ per day, $100$ per week",
            commonErrors: ["Using $2$ instead of $0.02$."],
          },
        },
        {
          id: "m7-u8-probability-modeling-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Model and analyze each scenario.",
          parts: [
            {
              label: "a",
              prompt:
                "A store estimates $10\\%$ of customers return items. In $500$ customers, how many returns expected?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A sports team wins $60\\%$ of games. In $25$ games, how many wins expected?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "An investment has $40\\%$ chance of $20\\%$ gain and $60\\%$ chance of $10\\%$ loss. Find expected return.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "What assumption does the investment model make? Is it realistic?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Expected returns", answer: 50 },
              { label: "(b) Expected wins", answer: 15 },
              { label: "(c) Expected return (%)", answer: 2 },
              { label: "(d) Assumption valid?", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expected value",
                statement: "$E = \\sum (x \\times P(x))$.",
              },
              {
                kind: "skill",
                name: "Model assumptions",
                statement: "Identify and evaluate assumptions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Expected returns = $0.10 \\times 500 = 50$.",
                working: "50",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Expected wins = $0.60 \\times 25 = 15$.",
                working: "15",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$E = 0.4(20\\%) + 0.6(-10\\%) = 8\\% - 6\\% = 2\\%$.",
                working: "2\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Model assumes only two outcomes; real investments have more possibilities; assumption is oversimplified.",
                working: "oversimplified",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $50$ (b) $15$ (c) $2\\%$ (d) Oversimplified — real investments have more outcomes",
            commonErrors: ["Not considering model limitations."],
          },
        },
      ],
    },
  ],
};
