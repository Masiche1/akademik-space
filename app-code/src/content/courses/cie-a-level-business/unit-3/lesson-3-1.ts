import type { Lesson } from "../../../types.ts";

export const lesson391: Lesson = {
  id: "ciealbus-u3-lesson-3-1",
  code: "3-1",
  title: "Strategic Management and Competitive Advantage",
  goal: "I CAN explain strategic management and sources of competitive advantage.",
  standards: ["Cambridge A Level Business 9707", "Paper 3: strategy"],
  
  vocabulary: [
    { term: "Strategic management", definition: "Long-term planning and decision-making." },
    { term: "Competitive advantage", definition: "Advantage over competitors." },
    { term: "Cost leadership", definition: "Competing on lowest costs." },
    { term: "Differentiation", definition: "Competing on unique features/quality." },
    { term: "Niche strategy", definition: "Focusing on narrow market segment." },
    { term: "SWOT analysis", definition: "Strengths, Weaknesses, Opportunities, Threats." },
  ],
  concepts: [
    {
      id: "ciealbus-u3-s1-strat",
      title: "Strategic management",
      skill: "Analyse competitive strategies.",
      lesson: {
        sections: [
          {
            heading: "Porter's generic strategies",
            body: "Cost leadership: lowest costs in industry. Differentiation: unique product/service. Focus: niche market — either cost or differentiation focus.",
          },
          {
            heading: "SWOT analysis",
            body: "Internal: strengths, weaknesses. External: opportunities, threats. Used to formulate strategy.",
          },
        ],
        keyFormulas: [
          { name: "Cost leadership", statement: "lowest costs" },
          { name: "Differentiation", statement: "unique features" },
          { name: "SWOT", statement: "Strengths, Weaknesses, Opportunities, Threats" },
        ],
        workedExample: {
          problem: "A company wants to compete in luxury market. Which strategy?",
          solution: "Differentiation focus — unique features, premium quality, target niche luxury segment.",
        },
      },
      questions: [
        {
          id: "ciealbus-u3-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is competitive advantage?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Advantage over competitors"
                    },
                    {
                              "id": "b",
                              "text": "A type of tax"
                    },
                    {
                              "id": "c",
                              "text": "A market structure"
                    },
                    {
                              "id": "d",
                              "text": "A business objective"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Competitive advantage",
                              "statement": "Edge over rivals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Competitive advantage = advantage over competitors.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Advantage over rivals"
},
        },
        {
          id: "ciealbus-u3-sm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is SWOT analysis?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SWOT",
                              "statement": "Strategic analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strengths, Weaknesses, Opportunities, Threats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Internal and external analysis.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "SWOT analysis"
},
        },
        {
          id: "ciealbus-u3-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare cost leadership and differentiation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Generic strategies",
                              "statement": "Cost vs differentiation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost leadership: lowest costs in industry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Differentiation: unique features/quality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both aim for competitive advantage.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cost vs differentiation"
},
        },
        {
          id: "ciealbus-u3-sm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define strategic management, competitive advantage, cost leadership, differentiation, niche strategy, SWOT. (b) What is strategic management? (c) What is competitive advantage? (d) What are Porter's generic strategies? (e) What is SWOT? (f) Compare cost leadership and differentiation. (g) What is niche strategy? (h) Evaluate which generic strategy suits a small business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Strategy",
                              "statement": "Competitive advantage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Long-term planning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Edge over rivals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Cost, differentiation, focus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) SWOT analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Cost vs differentiation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Niche market focus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Context-dependent evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Strategic management."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u3-sm-notes",
      title: "Strategy — notes",
      summary: "Porter: cost leadership, differentiation, focus. SWOT analyses internal/external factors.",
      sections: [
        { heading: "Key idea", body: "Sustainable competitive advantage requires consistent strategy execution." },
        { heading: "SWOT", body: "Internal strengths/weaknesses vs external opportunities/threats." },
      ],
    },
  ],
};
