import type { Lesson } from "../../../types.ts";

export const lesson254: Lesson = {
  id: "cieibs-u1-lesson-1-4",
  code: "1-4",
  title: "Business Growth and Size",
  goal: "I CAN explain internal and external growth and measure business size.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: growth and size"],
  
  vocabulary: [
    { term: "Internal growth", definition: "Business expands using its own resources." },
    { term: "External growth", definition: "Business grows by merging with or acquiring others." },
    { term: "Merger", definition: "Two businesses combine into one." },
    { term: "Takeover", definition: "One business buys control of another." },
    { term: "Economies of scale", definition: "Cost advantages from increased size." },
    { term: "Turnover", definition: "Total revenue from sales." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s4-grow",
      title: "Business growth",
      skill: "Understand growth strategies and measurement.",
      lesson: {
        sections: [
          {
            heading: "Growth methods",
            body: "Internal: organic growth through reinvested profits, new products, markets. External: merger (combine equals), takeover (acquire control), franchise (license business model).",
          },
          {
            heading: "Measuring size",
            body: "Turnover (revenue), number of employees, market share, profit. Economies of scale: bulk buying discounts, spreading fixed costs, specialisation — larger businesses can be more efficient.",
          },
        ],
        keyFormulas: [
          { name: "Internal growth", statement: "organic expansion" },
          { name: "External growth", statement: "merger/takeover/franchise" },
          { name: "Size measures", statement: "turnover, employees, market share, profit" },
        ],
        workedExample: {
          problem: "A small bakery opens a second location using profits. What type of growth?",
          solution: "Internal growth — expanding using own resources without merging with another business.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is internal growth?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Business expands using its own resources"
                    },
                    {
                              "id": "b",
                              "text": "Business merges with another"
                    },
                    {
                              "id": "c",
                              "text": "Business is sold"
                    },
                    {
                              "id": "d",
                              "text": "Business closes"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal growth",
                              "statement": "Organic expansion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internal = organic growth using own resources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Organic expansion"
},
        },
        {
          id: "cieibs-u1-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a merger?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Merger",
                              "statement": "Two businesses combine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two businesses combine into one.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Typically similar-sized companies.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Two businesses combine"
},
        },
        {
          id: "cieibs-u1-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are economies of scale? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Economies of scale",
                              "statement": "Cost advantages from size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost advantages from increased size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: bulk buying discounts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Larger firms can be more efficient.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cost advantages from size"
},
        },
        {
          id: "cieibs-u1-gr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define internal growth, external growth, merger, takeover, economies of scale, turnover. (b) What is internal growth? (c) What is external growth? (d) What is a merger? (e) What is a takeover? (f) What are economies of scale? (g) How measure business size? (h) Evaluate merger vs organic growth for a small business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Business growth",
                              "statement": "Methods, measurement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Organic expansion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Mergers/takeovers/franchises.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two businesses combine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) One buys control of another.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Cost advantages from size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Turnover, employees, market share, profit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation with reasoning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Business growth methods and measurement."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-gr-notes",
      title: "Growth — notes",
      summary: "Internal=organic; external=merger/takeover. Size measured by turnover, employees, market share. Economies of scale reduce costs.",
      sections: [
        { heading: "Key idea", body: "Growth strategies depend on business goals, resources and market conditions." },
        { heading: "Economies of scale", body: "Larger businesses achieve lower unit costs through efficiency." },
      ],
    },
  ],
};
