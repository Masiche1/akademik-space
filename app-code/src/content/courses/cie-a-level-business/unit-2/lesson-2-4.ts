import type { Lesson } from "../../../types.ts";

export const lesson384: Lesson = {
  id: "ciealbus-u2-lesson-2-4",
  code: "2-4",
  title: "Market Structures",
  goal: "I CAN compare perfect competition, monopoly, oligopoly and monopolistic competition.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: market structures"],

  vocabulary: [
    {
      term: "Perfect competition",
      definition: "Many sellers, identical products, no barriers.",
    },
    { term: "Monopoly", definition: "Single seller dominates market." },
    { term: "Oligopoly", definition: "Few large firms dominate market." },
    {
      term: "Monopolistic competition",
      definition: "Many firms, differentiated products.",
    },
    {
      term: "Barriers to entry",
      definition: "Obstacles preventing new firms entering market.",
    },
    {
      term: "Price elasticity of demand",
      definition: "Responsiveness of demand to price changes.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u2-s4-mkt",
      title: "Market structures",
      skill: "Compare market structures and implications.",
      lesson: {
        sections: [
          {
            heading: "Perfect competition",
            body: "Many firms, identical products, no barriers. Firms are price takers. Normal profit only in long run. Rare in reality.",
          },
          {
            heading: "Monopoly",
            body: "Single seller, high barriers. Price maker. Can earn supernormal profit. May reduce consumer welfare through higher prices.",
          },
          {
            heading: "Oligopoly",
            body: "Few dominant firms (airlines, telecoms). Interdependent — each considers rivals' reactions. Collusion possible. High barriers.",
          },
          {
            heading: "Monopolistic competition",
            body: "Many firms, differentiated products. Some price power but limited. Normal profit in long run.",
          },
        ],
        keyFormulas: [
          {
            name: "Perfect competition",
            statement: "many firms, identical products",
          },
          { name: "Monopoly", statement: "single seller" },
          { name: "Oligopoly", statement: "few firms" },
        ],
        workedExample: {
          problem: "Why do telecom companies avoid price wars?",
          solution:
            "Oligopoly — few dominant firms are interdependent. Price war would reduce profits for all. Collusion or tacit agreement more profitable.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a monopoly?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Few sellers",
              },
              {
                id: "b",
                text: "Many sellers",
              },
              {
                id: "c",
                text: "Single seller dominates market",
              },
              {
                id: "d",
                text: "Identical products",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monopoly",
                statement: "Single seller.",
              },
            ],
            steps: [
              {
                reasoning: "Monopoly = single seller dominates market.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Single seller",
          },
        },
        {
          id: "ciealbus-u2-ms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an oligopoly? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oligopoly",
                statement: "Few dominant firms.",
              },
            ],
            steps: [
              {
                reasoning: "Few large firms dominate market.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: airlines, telecoms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Few dominant firms example",
          },
        },
        {
          id: "ciealbus-u2-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are barriers to entry? Why do they matter?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Barriers",
                statement: "Entry obstacles.",
              },
            ],
            steps: [
              {
                reasoning: "Obstacles preventing new firms entering market.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples: economies of scale, patents, brand loyalty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protect existing firms from competition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Entry obstacles",
          },
        },
        {
          id: "ciealbus-u2-ms-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perfect competition, monopoly, oligopoly, monopolistic competition, barriers to entry, price elasticity. (b) What is perfect competition? (c) What is a monopoly? (d) What is an oligopoly? (e) What is monopolistic competition? (f) Compare monopoly and oligopoly. (g) Why do oligopolies avoid price wars? (h) Evaluate whether competition benefits consumers.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Market structures",
                statement: "Comparison, implications.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Many firms, identical products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Single seller.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Few dominant firms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Many firms, differentiated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Monopoly single vs oligopoly few.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Interdependence, mutual destruction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced evaluation — competition vs efficiency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Market structures.",
          },
        },
        {
          id: "ciealbus-u2-ms-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a perfectly competitive market, firms are best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "price makers",
              },
              {
                id: "b",
                text: "price takers",
              },
              {
                id: "c",
                text: "monopolists",
              },
              {
                id: "d",
                text: "cartels",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perfect competition",
                statement: "Firms accept the market price.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With many firms selling identical products, no single firm can influence price — they are price takers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** price takers",
          },
        },
        {
          id: "ciealbus-u2-ms-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The price of a product rises from $10 to $12 and quantity demanded falls from 5,000 to 4,000 units. (a) Calculate the percentage change in price. (b) Calculate the percentage change in quantity demanded.",
          parts: [
            { label: "a", prompt: "Percentage change in price", marks: 1 },
            {
              label: "b",
              prompt: "Percentage change in quantity demanded",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "%" },
              { label: "b", answer: -20, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage change",
                statement: "(New - old) / old × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Price change = (12 - 10) / 10 × 100 = 20%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Quantity change = (4000 - 5000) / 5000 × 100 = -20%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = 20%; b = -20%",
          },
        },
        {
          id: "ciealbus-u2-ms-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is price elasticity of demand, and what does a value of -2 indicate?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PED",
                statement: "Responsiveness of demand to price.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PED measures how responsive quantity demanded is to a change in price.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A value of -2 means demand is elastic — a 1% price rise causes a 2% fall in quantity demanded.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Responsiveness of demand; -2 means elastic demand",
          },
        },
        {
          id: "ciealbus-u2-ms-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which market structure typically has the highest barriers to entry?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Contestable market",
              },
              {
                id: "b",
                text: "Monopolistic competition",
              },
              {
                id: "c",
                text: "Monopoly",
              },
              {
                id: "d",
                text: "Perfect competition",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Barriers to entry",
                statement: "Highest in monopoly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A monopoly is sustained by strong barriers — patents, economies of scale, control of resources — keeping rivals out.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Monopoly",
          },
        },
        {
          id: "ciealbus-u2-ms-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Four firms dominate a market with shares of 30%, 25%, 20% and 15%. (a) Calculate the four-firm concentration ratio (CR4). (b) Calculate the combined share of all remaining firms. (c) State whether this market is best described as an oligopoly.",
          parts: [
            { label: "a", prompt: "CR4 (%)", marks: 1 },
            { label: "b", prompt: "Share of remaining firms (%)", marks: 1 },
            { label: "c", prompt: "Is this an oligopoly?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 90, unit: "%" },
              { label: "b", answer: 10, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Concentration ratio",
                statement: "CR4 = sum of top four firms' market shares.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "CR4 = 30 + 25 + 20 + 15 = 90%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Remaining share = 100 - 90 = 10%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Yes — a few dominant firms holding 90% of the market is characteristic of an oligopoly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = 90%; b = 10%; c = yes, oligopoly",
          },
        },
        {
          id: "ciealbus-u2-ms-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why firms in an oligopoly are said to be interdependent.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Oligopoly interdependence",
                statement: "Each firm's decisions affect rivals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With only a few dominant firms, each firm's pricing and output decisions materially affect market outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rivals are likely to react — a price cut may trigger retaliation, so firms must anticipate competitors' responses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This mutual dependence encourages collusion, price leadership or non-price competition rather than price wars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Each firm's actions affect and are affected by rivals",
          },
        },
        {
          id: "ciealbus-u2-ms-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of the following is a defining feature of monopolistic competition?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Identical products",
              },
              {
                id: "b",
                text: "No barriers to entry or exit",
              },
              {
                id: "c",
                text: "Differentiated products",
              },
              {
                id: "d",
                text: "A single seller",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monopolistic competition",
                statement: "Many firms, differentiated products.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monopolistic competition combines many firms with product differentiation, giving each some price-making power.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Differentiated products",
          },
        },
        {
          id: "ciealbus-u2-ms-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A firm sells 8,000 units at $25 each with a unit cost of $18. (a) Calculate total revenue. (b) Calculate total profit. (c) If the firm cuts price to $22.50 and sells 9,000 units instead, calculate the new total profit, answering with two steps: new unit profit then new total profit.",
          parts: [
            { label: "a", prompt: "Total revenue", marks: 1 },
            { label: "b", prompt: "Total profit", marks: 1 },
            {
              label: "c",
              prompt: "New total profit after price cut",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200000, unit: "$" },
              { label: "b", answer: 56000, unit: "$" },
              { label: "c", answer: 40500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revenue and profit",
                statement:
                  "Revenue = price × quantity; profit = revenue - costs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Total revenue = 25 × 8000 = 200000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Profit = (25 - 18) × 8000 = 7 × 8000 = 56000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "New unit profit = 22.50 - 18 = 4.50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "New total profit = 4.50 × 9000 = 40500 — lower than before, so the price cut reduced profit despite higher volume.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = $200000; b = $56000; c = $40500",
          },
        },
        {
          id: "ciealbus-u2-ms-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Barriers to entry are generally lowest in which market structure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Perfect competition",
              },
              {
                id: "b",
                text: "Oligopoly",
              },
              {
                id: "c",
                text: "Monopolistic competition",
              },
              {
                id: "d",
                text: "Monopoly",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Barriers to entry",
                statement:
                  "Lowest where products are identical and many firms compete.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In perfect competition there are no barriers — identical products and free entry/exit mean new firms can enter freely.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Perfect competition",
          },
        },
        {
          id: "ciealbus-u2-ms-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A product's price rises from $20 to $22 while quantity demanded falls from 3,000 to 2,700 units. (a) Calculate the percentage change in quantity demanded. (b) Calculate the price elasticity of demand.",
          parts: [
            {
              label: "a",
              prompt: "Percentage change in quantity demanded",
              marks: 1,
            },
            { label: "b", prompt: "Price elasticity of demand", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -10, unit: "%" },
              { label: "b", answer: -1, unit: "" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "PED calculation",
                statement: "PED = % change in quantity / % change in price.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Quantity change = (2700 - 3000) / 3000 × 100 = -10%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Price change = (22 - 20) / 20 × 100 = 10%; PED = -10 / 10 = -1 (unit elastic).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = -10%; b = -1",
          },
        },
        {
          id: "ciealbus-u2-ms-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the long run, firms in perfect competition earn only normal profit because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "demand is perfectly inelastic",
              },
              {
                id: "b",
                text: "the government caps prices",
              },
              {
                id: "c",
                text: "firms cannot differentiate products",
              },
              {
                id: "d",
                text: "free entry and exit erode any supernormal profit",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Long-run equilibrium",
                statement: "Free entry drives profit to normal level.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Supernormal profit attracts new entrants, increasing supply and pushing price down until only normal profit remains.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** free entry and exit erode any supernormal profit",
          },
        },
        {
          id: "ciealbus-u2-ms-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain how a monopoly might exploit its market power to harm consumers. (b) Explain two potential benefits a monopoly might bring. (c) Describe one way governments regulate monopolies. (d) Evaluate whether a monopoly is always harmful to consumers.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Monopoly evaluation",
                statement:
                  "Market power can raise prices but may also fund efficiency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) A monopolist is a price maker — it can restrict output and charge higher prices than under competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Possible benefits: economies of scale lowering unit costs, and retained profits funding research and development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Regulation, e.g. price caps, competition policy or nationalisation, can limit monopoly power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Harm depends on whether the monopoly exploits its power — contestable markets and regulation may keep prices close to competitive levels.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) Overall judgement: not always harmful — efficiency gains may offset higher prices if the firm does not abuse dominance.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Monopolies can harm consumers through higher prices but may also deliver efficiency",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-ms-notes",
      title: "Market structures — notes",
      summary:
        "Perfect competition→monopolistic→oligopoly→monopoly spectrum. Barriers determine structure.",
      sections: [
        {
          heading: "Key idea",
          body: "Market structure affects pricing power, efficiency, consumer welfare.",
        },
        {
          heading: "Oligopoly",
          body: "Interdependence means strategic behaviour — collusion, price leadership.",
        },
      ],
    },
  ],
};
