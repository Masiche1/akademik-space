import type { Lesson } from "../../../types.ts";

export const lesson282: Lesson = {
  id: "cieiec-u2-lesson-2-2",
  code: "2-2",
  title: "Market Structures",
  goal: "I CAN compare perfect competition, monopoly, oligopoly and monopolistic competition.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 4: market structures"],
  
  vocabulary: [
    { term: "Perfect competition", definition: "Many firms, identical products, free entry." },
    { term: "Monopoly", definition: "Single seller of unique product." },
    { term: "Oligopoly", definition: "Few large firms dominate market." },
    { term: "Monopolistic competition", definition: "Many firms, differentiated products." },
    { term: "Barriers to entry", definition: "Obstacles preventing new firms entering market." },
    { term: "Price maker", definition: "Firm that can set its own price." },
  ],
  concepts: [
    {
      id: "cieiec-u2-s2-mkt",
      title: "Market structures",
      skill: "Compare different market structures.",
      lesson: {
        sections: [
          {
            heading: "Perfect competition",
            body: "Many firms, identical products, free entry/exit. Firms are price takers — no market power. Efficient but unrealistic.",
          },
          {
            heading: "Monopoly",
            body: "Single seller, unique product, high barriers to entry. Price maker — can set prices. May exploit consumers but may invest in R&D.",
          },
          {
            heading: "Oligopoly",
            body: "Few large firms (e.g. airlines, telecoms). Interdependent — one firm's actions affect others. Collusion possible. Kinked demand curve.",
          },
          {
            heading: "Monopolistic competition",
            body: "Many firms, differentiated products (e.g. restaurants, clothing). Some market power through differentiation. Free entry/exit.",
          },
        ],
        keyFormulas: [
          { name: "Perfect competition", statement: "many firms, identical products" },
          { name: "Monopoly", statement: "single seller, barriers" },
          { name: "Oligopoly", statement: "few firms, interdependent" },
          { name: "Monopolistic", statement: "many firms, differentiated" },
        ],
        workedExample: {
          problem: "A market has 5 large firms controlling 90% of sales. What structure is this?",
          solution: "Oligopoly — few firms dominate, interdependent pricing.",
        },
      },
      questions: [
        {
          id: "cieiec-u2-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a monopoly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single seller of unique product"
                    },
                    {
                              "id": "b",
                              "text": "Many sellers"
                    },
                    {
                              "id": "c",
                              "text": "Free market"
                    },
                    {
                              "id": "d",
                              "text": "Perfect competition"
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
                              "reasoning": "Monopoly = single seller of unique product.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Single seller"
},
        },
        {
          id: "cieiec-u2-ms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an oligopoly?",
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
                              "reasoning": "e.g. airlines, telecoms — interdependent.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Few dominant firms"
},
        },
        {
          id: "cieiec-u2-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare perfect competition and monopoly.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Market comparison",
                              "statement": "Structure comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perfect: many firms, identical products, price takers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Monopoly: single firm, unique product, price maker.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Monopoly has barriers to entry; perfect has free entry.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Many vs single seller"
},
        },
        {
          id: "cieiec-u2-ms-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perfect competition, monopoly, oligopoly, monopolistic competition, barriers to entry, price maker. (b) What is perfect competition? (c) What is monopoly? (d) What is oligopoly? (e) What is monopolistic competition? (f) What are barriers to entry? (g) Give an example of each structure. (h) Evaluate whether monopoly is always bad for consumers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Market structures",
                              "statement": "Comparison and evaluation."
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
                              "reasoning": "(c) Single seller, unique product.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Few dominant firms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Many firms, differentiated products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Obstacles to entry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid examples for each.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Market structures comparison."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u2-ms-notes",
      title: "Market structures — notes",
      summary: "Perfect=many identical; monopoly=single unique; oligopoly=few dominant; monopolistic=many differentiated.",
      sections: [
        { heading: "Key idea", body: "Market structure determines firm behaviour, pricing power and efficiency." },
        { heading: "Barriers", body: "High barriers protect monopolies/oligopolies from competition." },
      ],
    },
  ],
};
