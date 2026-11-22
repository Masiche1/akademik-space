import type { Lesson } from "../../../types.ts";

export const lesson431: Lesson = {
  id: "ciealecon-u3-lesson-3-1",
  code: "3-1",
  title: "International Trade Theory",
  goal: "I CAN explain comparative advantage, absolute advantage and trade gains.",
  standards: ["Cambridge A Level Economics 9708", "Paper 3: international"],
  
  vocabulary: [
    { term: "Absolute advantage", definition: "Ability to produce more with same resources." },
    { term: "Comparative advantage", definition: "Lower opportunity cost of production." },
    { term: "Terms of trade", definition: "Ratio of export prices to import prices." },
    { term: "Free trade", definition: "Unrestricted international trade." },
    { term: "Protectionism", definition: "Policies restricting free trade." },
    { term: "Trade creation", definition: "New trade from lower barriers." },
  ],
  concepts: [
    {
      id: "ciealecon-u3-s1-trade",
      title: "Trade theory",
      skill: "Analyse gains from trade.",
      lesson: {
        sections: [
          {
            heading: "Absolute advantage",
            body: "Country can produce more output with same inputs. Ricardo showed trade beneficial even without absolute advantage.",
          },
          {
            heading: "Comparative advantage",
            body: "Country has lower opportunity cost. Specialisation and trade → both countries gain. Basis for free trade arguments.",
          },
          {
            heading: "Terms of trade",
            body: "Ratio of export prices to import prices. Improving terms = exports rise faster than imports. Affects national income.",
          },
        ],
        keyFormulas: [
          { name: "Absolute advantage", statement: "more output, same inputs" },
          { name: "Comparative advantage", statement: "lower opportunity cost" },
          { name: "Terms of trade", statement: "export/import price ratio" },
        ],
        workedExample: {
          problem: "Country A: 10 wheat OR 5 cars. Country B: 8 wheat OR 4 cars. Who has comparative advantage in wheat?",
          solution: "A: 1 car = 2 wheat. B: 1 car = 2 wheat. Equal opportunity cost — no comparative advantage in wheat. Check cars: A: 1 wheat = 0.5 cars. B: 1 wheat = 0.5 cars. Identical — no gains from trade.",
        },
      },
      questions: [
        {
          id: "ciealecon-u3-ta-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is comparative advantage?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More output with same inputs"
                    },
                    {
                              "id": "b",
                              "text": "Largest economy"
                    },
                    {
                              "id": "c",
                              "text": "Highest productivity"
                    },
                    {
                              "id": "d",
                              "text": "Lower opportunity cost of production"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comparative advantage",
                              "statement": "Lower opportunity cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comparative = lower opportunity cost.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Lower opportunity cost"
},
        },
        {
          id: "ciealecon-u3-ta-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is absolute advantage?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Absolute advantage",
                              "statement": "More output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ability to produce more with same resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Doesn't guarantee trade benefits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "More output same inputs"
},
        },
        {
          id: "ciealecon-u3-ta-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does trade benefit both countries even without absolute advantage?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Trade gains",
                              "statement": "Comparative advantage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comparative advantage → specialisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both countries gain from trade.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increased total output/consumption.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Specialisation gains"
},
        },
        {
          id: "ciealecon-u3-ta-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define absolute advantage, comparative advantage, terms of trade, free trade, protectionism, trade creation. (b) What is absolute advantage? (c) What is comparative advantage? (d) What are terms of trade? (e) Why does trade benefit both countries? (f) What is protectionism? (g) What is trade creation? (h) Evaluate whether free trade always benefits all countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Trade theory",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) More output same inputs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Lower opportunity cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Export/import price ratio.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Comparative advantage gains.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Trade restrictions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) New trade from lower barriers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Winners/losers — not always equal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "International trade theory."
},
        },
        {
          id: "ciealecon-u3-ta-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Country A can produce 10 units of wheat or 4 units of cars with the same resources. Country B can produce 8 units of wheat or 4 units of cars. Which country has a comparative advantage in wheat?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Country A"
                    },
                    {
                              "id": "b",
                              "text": "Neither — only absolute advantage matters"
                    },
                    {
                              "id": "c",
                              "text": "Country B"
                    },
                    {
                              "id": "d",
                              "text": "Both have equal comparative advantage"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comparative advantage",
                              "statement": "Lower opportunity cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A's opportunity cost of wheat is 0.4 cars vs B's 0.5 cars — lower cost gives comparative advantage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Country A"
},
        },
        {
          id: "ciealecon-u3-ta-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "With its resources, a country can produce either 20 units of coffee or 10 units of tea. What is the opportunity cost of producing one unit of coffee, measured in units of tea?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 0.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Opportunity cost",
                              "statement": "Output forgone per unit gained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 coffee OR 10 tea → 1 coffee = 10/20 = 0.5 tea.",
                              "working": "10 / 20 = 0.5",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0.5 units of tea"
},
        },
        {
          id: "ciealecon-u3-ta-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between absolute advantage and comparative advantage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Absolute vs comparative",
                              "statement": "Output vs opportunity cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Absolute advantage: produce more output with same resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Comparative advantage: lower opportunity cost of production.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Absolute = more output same inputs; comparative = lower opportunity cost."
},
        },
        {
          id: "ciealecon-u3-ta-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country's terms of trade are calculated as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Price of exports divided by price of imports"
                    },
                    {
                              "id": "b",
                              "text": "Nominal GDP divided by real GDP"
                    },
                    {
                              "id": "c",
                              "text": "Total export revenue minus total import expenditure"
                    },
                    {
                              "id": "d",
                              "text": "Quantity of exports divided by quantity of imports"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Terms of trade",
                              "statement": "Export/import price ratio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Terms of trade = export prices / import prices.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Export price index / import price index"
},
        },
        {
          id: "ciealecon-u3-ta-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Country X's export price index rises from 100 to 120 while its import price index stays at 100. If the initial terms of trade index was 100, calculate the new terms of trade index.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 120
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Terms of trade index",
                              "statement": "(Export prices / Import prices) x 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ToT = (120 / 100) x 100 = 120.",
                              "working": "(120 / 100) x 100 = 120",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Terms of trade improved from 100 to 120.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "120"
},
        },
        {
          id: "ciealecon-u3-ta-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain, using the theory of comparative advantage, why specialisation and trade can raise total world output.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Gains from trade",
                              "statement": "Specialisation by comparative advantage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each country produces the good with its lower opportunity cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade occurs at terms between the two opportunity costs, so both gain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "World output rises — both countries can consume beyond their own PPC.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Specialisation by comparative advantage raises world output and consumption."
},
        },
        {
          id: "ciealecon-u3-ta-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ricardo's model of comparative advantage assumes:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Constant opportunity costs (linear PPCs)"
                    },
                    {
                              "id": "b",
                              "text": "Government control of trade"
                    },
                    {
                              "id": "c",
                              "text": "Increasing returns to scale in all industries"
                    },
                    {
                              "id": "d",
                              "text": "Transport costs that rise with distance"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Ricardo assumptions",
                              "statement": "Constant opportunity costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ricardo assumes constant opportunity costs — PPCs are straight lines.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Constant opportunity costs"
},
        },
        {
          id: "ciealecon-u3-ta-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that free trade is always beneficial for all countries involved.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Free trade evaluation",
                              "statement": "Gains vs distribution costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specialisation by comparative advantage creates gains for all.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adjustment costs fall on specific sectors/workers — gains may not be evenly shared.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strategic concerns: infant industries, dumping, national security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interdependence and retaliation risks if partners defect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced judgement: generally beneficial but not universally or evenly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Free trade raises total welfare but benefits are unevenly distributed and strategic exceptions exist."
},
        },
        {
          id: "ciealecon-u3-ta-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Country A can produce 60 cars or 30 trucks with its resources. What is the opportunity cost of one truck, measured in cars?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Opportunity cost",
                              "statement": "Output forgone per unit gained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OC of truck = cars forgone / trucks gained = 60/30.",
                              "working": "60 / 30 = 2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each truck costs 2 cars of output.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2 cars"
},
        },
        {
          id: "ciealecon-u3-ta-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An improvement in a country's terms of trade means that:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tariffs on imports have increased"
                    },
                    {
                              "id": "b",
                              "text": "The country is importing more than it exports"
                    },
                    {
                              "id": "c",
                              "text": "The currency has depreciated"
                    },
                    {
                              "id": "d",
                              "text": "Export prices have risen relative to import prices"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Terms of trade",
                              "statement": "Export/import price ratio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improvement = export prices rise relative to import prices.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Export prices rise relative to import prices"
},
        },
        {
          id: "ciealecon-u3-ta-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Trade creation' refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A surplus on the current account"
                    },
                    {
                              "id": "b",
                              "text": "The relocation of firms abroad"
                    },
                    {
                              "id": "c",
                              "text": "New trade flows generated when lower barriers make imports cheaper and more competitive"
                    },
                    {
                              "id": "d",
                              "text": "A government ban on imports"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trade creation",
                              "statement": "New trade from lower barriers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lower barriers → cheaper imports → new trade flows.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "New trade from lower barriers"
},
        },
        {
          id: "ciealecon-u3-ta-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the main assumptions of Ricardo's model of comparative advantage and assess their realism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Ricardo realism",
                              "statement": "Simplifying assumptions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key assumptions: constant opportunity costs, no transport costs, perfect competition, labour as only factor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "These simplify the model so opportunity costs are constant — PPCs are straight lines.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Critique: real economies have increasing opportunity costs, transport costs, imperfect competition and many factors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Despite unrealistic assumptions, the core insight about opportunity cost remains valid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Ricardo's assumptions are unrealistic but the comparative advantage insight holds."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u3-ta-notes",
      title: "Trade theory — notes",
      summary: "Comparative advantage → specialisation → mutual gains. Free trade vs protectionism debate.",
      sections: [
        { heading: "Key idea", body: "Trade based on comparative advantage benefits all participants." },
        { heading: "Reality", body: "Not all countries benefit equally — distribution matters." },
      ],
    },
  ],
};
