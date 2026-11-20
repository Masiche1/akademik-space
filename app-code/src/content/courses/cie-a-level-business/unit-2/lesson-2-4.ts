import type { Lesson } from "../../../types.ts";

export const lesson384: Lesson = {
  id: "ciealbus-u2-lesson-2-4",
  code: "2-4",
  title: "Market Structures",
  goal: "I CAN compare perfect competition, monopoly, oligopoly and monopolistic competition.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: market structures"],
  
  vocabulary: [
    { term: "Perfect competition", definition: "Many sellers, identical products, no barriers." },
    { term: "Monopoly", definition: "Single seller dominates market." },
    { term: "Oligopoly", definition: "Few large firms dominate market." },
    { term: "Monopolistic competition", definition: "Many firms, differentiated products." },
    { term: "Barriers to entry", definition: "Obstacles preventing new firms entering market." },
    { term: "Price elasticity of demand", definition: "Responsiveness of demand to price changes." },
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
          { name: "Perfect competition", statement: "many firms, identical products" },
          { name: "Monopoly", statement: "single seller" },
          { name: "Oligopoly", statement: "few firms" },
        ],
        workedExample: {
          problem: "Why do telecom companies avoid price wars?",
          solution: "Oligopoly — few dominant firms are interdependent. Price war would reduce profits for all. Collusion or tacit agreement more profitable.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a monopoly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single seller dominates market"
                    },
                    {
                              "id": "b",
                              "text": "Many sellers"
                    },
                    {
                              "id": "c",
                              "text": "Few sellers"
                    },
                    {
                              "id": "d",
                              "text": "Identical products"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monopoly",
                              "statement": "Single seller."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Monopoly = single seller dominates market.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Single seller"
},
        },
        {
          id: "ciealbus-u2-ms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an oligopoly? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oligopoly",
                              "statement": "Few dominant firms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Few large firms dominate market.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: airlines, telecoms.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Few dominant firms example"
},
        },
        {
          id: "ciealbus-u2-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are barriers to entry? Why do they matter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Barriers",
                              "statement": "Entry obstacles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Obstacles preventing new firms entering market.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: economies of scale, patents, brand loyalty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protect existing firms from competition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Entry obstacles"
},
        },
        {
          id: "ciealbus-u2-ms-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perfect competition, monopoly, oligopoly, monopolistic competition, barriers to entry, price elasticity. (b) What is perfect competition? (c) What is a monopoly? (d) What is an oligopoly? (e) What is monopolistic competition? (f) Compare monopoly and oligopoly. (g) Why do oligopolies avoid price wars? (h) Evaluate whether competition benefits consumers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Market structures",
                              "statement": "Comparison, implications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Many firms, identical products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Single seller.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Few dominant firms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Many firms, differentiated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Monopoly single vs oligopoly few.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Interdependence, mutual destruction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation — competition vs efficiency.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Market structures."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-ms-notes",
      title: "Market structures — notes",
      summary: "Perfect competition→monopolistic→oligopoly→monopoly spectrum. Barriers determine structure.",
      sections: [
        { heading: "Key idea", body: "Market structure affects pricing power, efficiency, consumer welfare." },
        { heading: "Oligopoly", body: "Interdependence means strategic behaviour — collusion, price leadership." },
      ],
    },
  ],
};
