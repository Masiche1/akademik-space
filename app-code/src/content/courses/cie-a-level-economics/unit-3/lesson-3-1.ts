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
                              "text": "Lower opportunity cost of production"
                    },
                    {
                              "id": "b",
                              "text": "More output with same inputs"
                    },
                    {
                              "id": "c",
                              "text": "Highest productivity"
                    },
                    {
                              "id": "d",
                              "text": "Largest economy"
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
