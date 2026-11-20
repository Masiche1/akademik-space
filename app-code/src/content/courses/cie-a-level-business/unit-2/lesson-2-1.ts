import type { Lesson } from "../../../types.ts";

export const lesson381: Lesson = {
  id: "ciealbus-u2-lesson-2-1",
  code: "2-1",
  title: "Business Growth and Development",
  goal: "I CAN explain organic and external growth strategies.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: business growth"],
  
  vocabulary: [
    { term: "Organic growth", definition: "Growth through internal expansion." },
    { term: "External growth", definition: "Growth through mergers/acquisitions." },
    { term: "Merger", definition: "Two businesses combine to form new entity." },
    { term: "Acquisition", definition: "One business buys another." },
    { term: "Takeover", definition: "Acquisition against target's wishes." },
    { term: "Synergy", definition: "Combined value greater than sum of parts." },
  ],
  concepts: [
    {
      id: "ciealbus-u2-s1-grow",
      title: "Business growth",
      skill: "Analyse growth strategies and implications.",
      lesson: {
        sections: [
          {
            heading: "Organic growth",
            body: "Internal expansion: new products, markets, increased production. Slower but maintains control, less risky. Limited by internal resources.",
          },
          {
            heading: "External growth",
            body: "Mergers: two firms combine (horizontal, vertical, conglomerate). Acquisitions: buy existing business. Faster access to markets/resources but integration challenges, higher risk.",
          },
          {
            heading: "Growth implications",
            body: "Economies of scale vs diseconomies of scale. Increased market power but potential loss of control. Cultural integration issues.",
          },
        ],
        keyFormulas: [
          { name: "Organic", statement: "internal expansion" },
          { name: "External", statement: "mergers/acquisitions" },
          { name: "Synergy", statement: "1+1>2" },
        ],
        workedExample: {
          problem: "Why might a business prefer organic over external growth?",
          solution: "Maintains control, less risky, no integration issues, but slower growth and limited by internal resources.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is organic growth?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Growth through internal expansion"
                    },
                    {
                              "id": "b",
                              "text": "Mergers"
                    },
                    {
                              "id": "c",
                              "text": "Acquisitions"
                    },
                    {
                              "id": "d",
                              "text": "Takeovers"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organic growth",
                              "statement": "Internal expansion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organic = internal expansion.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Internal expansion"
},
        },
        {
          id: "ciealbus-u2-gr-q2",
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
                              "statement": "Business combination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two businesses combine to form new entity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Often mutual agreement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Business combination"
},
        },
        {
          id: "ciealbus-u2-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is synergy? Why does it matter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synergy",
                              "statement": "Combined value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combined value greater than sum of parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Justifies mergers/acquisitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "May not always materialise.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1+1>2 value"
},
        },
        {
          id: "ciealbus-u2-gr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define organic growth, external growth, merger, acquisition, takeover, synergy. (b) What is organic growth? (c) What is a merger? (d) What is an acquisition? (e) What is synergy? (f) Compare organic vs external growth. (g) Why might merger fail? (h) Evaluate best growth strategy for different situations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Growth",
                              "statement": "Strategies, implications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Internal expansion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Business combination.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Buying another business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1+1>2 value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Organic slower/safer vs external faster/riskier.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Integration issues, culture clash.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Context-dependent evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Business growth strategies."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-gr-notes",
      title: "Growth — notes",
      summary: "Organic=internal; external=mergers/acquisitions. Synergy drives M&A but integration is hard.",
      sections: [
        { heading: "Key idea", body: "Growth strategy depends on resources, risk tolerance, market conditions." },
        { heading: "Challenges", body: "External growth faster but integration/culture issues common." },
      ],
    },
  ],
};
