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
                              "text": "Many sellers"
                    },
                    {
                              "id": "b",
                              "text": "Perfect competition"
                    },
                    {
                              "id": "c",
                              "text": "Free market"
                    },
                    {
                              "id": "d",
                              "text": "Single seller of unique product"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "cieiec-u2-ms-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A market with many small firms selling identical products and free entry and exit is an example of:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Perfect competition"
                    },
                    {
                              "id": "b",
                              "text": "Monopsony"
                    },
                    {
                              "id": "c",
                              "text": "Monopoly"
                    },
                    {
                              "id": "d",
                              "text": "Oligopoly"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Perfect competition",
                              "statement": "Many firms, identical products."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Many firms + identical products + free entry = perfect competition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Perfect competition"
},
        },
        {
          id: "cieiec-u2-ms-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "High barriers to entry, such as patents or huge capital requirements, are most associated with:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A competitive market"
                    },
                    {
                              "id": "b",
                              "text": "Perfect competition"
                    },
                    {
                              "id": "c",
                              "text": "Monopoly"
                    },
                    {
                              "id": "d",
                              "text": "Monopolistic competition"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Barriers to entry",
                              "statement": "Obstacles preventing new firms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Barriers protect incumbents, especially monopolists.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Monopoly"
},
        },
        {
          id: "cieiec-u2-ms-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an oligopoly, firms must consider the reactions of rivals when setting price. This is called:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Consumer sovereignty"
                    },
                    {
                              "id": "b",
                              "text": "Price taking"
                    },
                    {
                              "id": "c",
                              "text": "Interdependence"
                    },
                    {
                              "id": "d",
                              "text": "Allocative efficiency"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oligopoly",
                              "statement": "Few firms, interdependent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Few dominant firms = interdependent decisions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Interdependence"
},
        },
        {
          id: "cieiec-u2-ms-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Monopolistic competition differs from perfect competition because firms sell:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Differentiated products"
                    },
                    {
                              "id": "b",
                              "text": "No products"
                    },
                    {
                              "id": "c",
                              "text": "Only one product"
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
                              "name": "Monopolistic competition",
                              "statement": "Many firms, differentiated products."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Differentiation gives small market power.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Differentiated products"
},
        },
        {
          id: "cieiec-u2-ms-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Collusion (firms agreeing on prices or output) is most likely to occur in:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A contestable market"
                    },
                    {
                              "id": "b",
                              "text": "A perfectly competitive market"
                    },
                    {
                              "id": "c",
                              "text": "An oligopoly"
                    },
                    {
                              "id": "d",
                              "text": "Perfect competition"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Oligopoly",
                              "statement": "Interdependence enables collusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Few firms can coordinate = collusion likely in oligopoly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "An oligopoly"
},
        },
        {
          id: "cieiec-u2-ms-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Four large firms together control 95% of a market's sales. What percentage of sales do all the remaining firms control?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 5,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Market share",
                              "statement": "Proportion of total sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100% - 95% = 5%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Remaining firms hold 5%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5%"
},
        },
        {
          id: "cieiec-u2-ms-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A monopolist raises price from $5 to $6 and sales fall from 1,000 to 800 units. By how many units do sales fall?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 200,
                              "unit": "units"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monopoly",
                              "statement": "Single seller with market power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1000 - 800 = 200.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sales fall by 200 units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "200 units"
},
        },
        {
          id: "cieiec-u2-ms-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In an oligopoly, three firms hold market shares of 40%, 35% and 25%. What percentage of the market do the two largest firms control together?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 75,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Market share",
                              "statement": "Proportion of total sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "40% + 35% = 75%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Two largest firms control 75%.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "This concentration confirms oligopoly structure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "75%"
},
        },
        {
          id: "cieiec-u2-ms-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two barriers to entry that can protect a monopoly from competition.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Barriers to entry",
                              "statement": "Protection for incumbents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Patents or legal protection give exclusive rights.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Huge capital requirements or economies of scale deter entrants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Control of resources or strong brand loyalty.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Patents, capital, scale, brand loyalty"
},
        },
        {
          id: "cieiec-u2-ms-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why firms in an oligopoly must consider how rivals will react when changing price.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Oligopoly",
                              "statement": "Interdependence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Few firms mean each holds a large market share.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "One firm's price change affects rivals' sales significantly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rivals may retaliate (price war) or follow the change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Large shares make rival reactions crucial"
},
        },
        {
          id: "cieiec-u2-ms-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare monopolistic competition with perfect competition.",
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
                              "reasoning": "Both have many firms and free entry/exit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Monopolistic competition sells differentiated products; perfect sells identical.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Differentiation gives monopolistic firms slight price-making power.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Many firms both; differentiation differs"
},
        },
        {
          id: "cieiec-u2-ms-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether monopoly power always harms consumers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Monopoly",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Harm: higher prices, restricted output, possible exploitation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefit: supernormal profits may fund R&D and innovation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefit: economies of scale can lower costs for consumers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Regulation (competition policy) can limit abuses.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: not always — depends on conduct and alternatives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Not always — depends on conduct"
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
