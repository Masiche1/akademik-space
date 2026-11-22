import type { Lesson } from "../../../types.ts";

export const lesson391: Lesson = {
  id: "ciealbus-u3-lesson-3-1",
  code: "3-1",
  title: "Strategic Management and Competitive Advantage",
  goal: "I CAN explain strategic management and sources of competitive advantage.",
  standards: ["Cambridge A Level Business 9707", "Paper 3: strategy"],

  vocabulary: [
    {
      term: "Strategic management",
      definition: "Long-term planning and decision-making.",
    },
    {
      term: "Competitive advantage",
      definition: "Advantage over competitors.",
    },
    { term: "Cost leadership", definition: "Competing on lowest costs." },
    {
      term: "Differentiation",
      definition: "Competing on unique features/quality.",
    },
    {
      term: "Niche strategy",
      definition: "Focusing on narrow market segment.",
    },
    {
      term: "SWOT analysis",
      definition: "Strengths, Weaknesses, Opportunities, Threats.",
    },
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
          {
            name: "SWOT",
            statement: "Strengths, Weaknesses, Opportunities, Threats",
          },
        ],
        workedExample: {
          problem:
            "A company wants to compete in luxury market. Which strategy?",
          solution:
            "Differentiation focus — unique features, premium quality, target niche luxury segment.",
        },
      },
      questions: [
        {
          id: "ciealbus-u3-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is competitive advantage?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A business objective",
              },
              {
                id: "b",
                text: "A market structure",
              },
              {
                id: "c",
                text: "Advantage over competitors",
              },
              {
                id: "d",
                text: "A type of tax",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Competitive advantage",
                statement: "Edge over rivals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Competitive advantage = advantage over competitors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Advantage over rivals",
          },
        },
        {
          id: "ciealbus-u3-sm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is SWOT analysis?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SWOT",
                statement: "Strategic analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Strengths, Weaknesses, Opportunities, Threats.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Internal and external analysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "SWOT analysis",
          },
        },
        {
          id: "ciealbus-u3-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare cost leadership and differentiation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Generic strategies",
                statement: "Cost vs differentiation.",
              },
            ],
            steps: [
              {
                reasoning: "Cost leadership: lowest costs in industry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Differentiation: unique features/quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both aim for competitive advantage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cost vs differentiation",
          },
        },
        {
          id: "ciealbus-u3-sm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define strategic management, competitive advantage, cost leadership, differentiation, niche strategy, SWOT. (b) What is strategic management? (c) What is competitive advantage? (d) What are Porter's generic strategies? (e) What is SWOT? (f) Compare cost leadership and differentiation. (g) What is niche strategy? (h) Evaluate which generic strategy suits a small business.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Strategy",
                statement: "Competitive advantage.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Long-term planning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Edge over rivals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Cost, differentiation, focus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) SWOT analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Cost vs differentiation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Niche market focus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Context-dependent evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Strategic management.",
          },
        },
        {
          id: "ciealbus-u3-sm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Porter's cost leadership strategy involves competing on the basis of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "premium brand image",
              },
              {
                id: "b",
                text: "lowest costs in the industry",
              },
              {
                id: "c",
                text: "unique product features",
              },
              {
                id: "d",
                text: "niche market focus",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cost leadership",
                statement: "Lowest costs in industry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cost leadership means becoming the lowest-cost producer so the firm can charge lower prices or earn higher margins.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** lowest costs in the industry",
          },
        },
        {
          id: "ciealbus-u3-sm-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a market of 200,000 units, Firm A sells 50,000 and Firm B sells 30,000. (a) Calculate Firm A's market share. (b) Calculate the combined market share of Firms A and B.",
          parts: [
            { label: "a", prompt: "Firm A market share (%)", marks: 1 },
            { label: "b", prompt: "Combined share of A and B (%)", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25, unit: "%" },
              { label: "b", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Market share",
                statement: "Firm sales / total market sales × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Firm A share = 50000 / 200000 × 100 = 25%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Combined = (50000 + 30000) / 200000 × 100 = 40%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = 25%; b = 40%",
          },
        },
        {
          id: "ciealbus-u3-sm-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a niche strategy?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Focus strategy",
                statement: "Niche market focus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A niche (focus) strategy targets a narrow, specialised segment of the market.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The firm can pursue either cost focus or differentiation focus within that segment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Focusing on a narrow market segment",
          },
        },
        {
          id: "ciealbus-u3-sm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a SWOT analysis, the letter 'T' stands for:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Threats",
              },
              {
                id: "b",
                text: "Targets",
              },
              {
                id: "c",
                text: "Trends",
              },
              {
                id: "d",
                text: "Tactics",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SWOT",
                statement: "Strengths, Weaknesses, Opportunities, Threats.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SWOT = Strengths, Weaknesses, Opportunities, Threats.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Threats",
          },
        },
        {
          id: "ciealbus-u3-sm-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Strategy X earns a unit profit of $4 on 100,000 units; Strategy Y earns a unit profit of $6 on 60,000 units. (a) Calculate the unit profit of Strategy X. (b) Calculate the total profit of Strategy X. (c) Calculate the total profit of Strategy Y.",
          parts: [
            { label: "a", prompt: "Unit profit of X", marks: 1 },
            { label: "b", prompt: "Total profit of X", marks: 1 },
            { label: "c", prompt: "Total profit of Y", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4, unit: "$" },
              { label: "b", answer: 400000, unit: "$" },
              { label: "c", answer: 360000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Strategy evaluation",
                statement: "Compare total profit, not just unit profit.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Unit profit of X = price - cost = given as $4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Total profit X = 4 × 100000 = 400000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Total profit Y = 6 × 60000 = 360000 — so X is more profitable overall despite lower unit profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = $4; b = $400000; c = $360000",
          },
        },
        {
          id: "ciealbus-u3-sm-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a firm pursuing a differentiation strategy might be able to charge premium prices.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Differentiation",
                statement: "Unique features create price-making power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differentiation makes the product or service perceived as unique through quality, design, brand or service.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Uniqueness reduces direct competition, giving the firm some price-making power over consumers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Customers who value the unique features are less price-sensitive, so the firm can charge premiums.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Uniqueness reduces price sensitivity, allowing premium pricing",
          },
        },
        {
          id: "ciealbus-u3-sm-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A firm tries to be both the lowest-cost producer and the most differentiated, but achieves neither. Porter describes this position as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "monopoly power",
              },
              {
                id: "b",
                text: "cost leadership",
              },
              {
                id: "c",
                text: "differentiation focus",
              },
              {
                id: "d",
                text: "stuck in the middle",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Generic strategies",
                statement: "Failing both strategies leaves firm uncompetitive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Porter warns that firms which pursue neither cost leadership nor differentiation end up 'stuck in the middle' with no competitive advantage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** stuck in the middle",
          },
        },
        {
          id: "ciealbus-u3-sm-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cost-leadership firm sells 80,000 units at $20 each with unit costs of $12. (a) Calculate profit per unit. (b) Calculate total profit. (c) If a rival forces the firm to cut price to $19, calculate the new total profit, showing new unit profit then new total profit.",
          parts: [
            { label: "a", prompt: "Profit per unit", marks: 1 },
            { label: "b", prompt: "Total profit", marks: 1 },
            { label: "c", prompt: "New total profit at $19 price", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "$" },
              { label: "b", answer: 640000, unit: "$" },
              { label: "c", answer: 560000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cost leadership profit",
                statement: "Low cost supports price competition.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Unit profit = 20 - 12 = 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Total profit = 8 × 80000 = 640000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "New unit profit = 19 - 12 = 7.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "New total profit = 7 × 80000 = 560000 — the cost advantage still leaves a profit margin.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = $8; b = $640000; c = $560000",
          },
        },
        {
          id: "ciealbus-u3-sm-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In SWOT analysis, opportunities and threats are classified as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "internal factors",
              },
              {
                id: "b",
                text: "external factors",
              },
              {
                id: "c",
                text: "financial factors",
              },
              {
                id: "d",
                text: "controllable factors",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SWOT",
                statement: "Internal vs external factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Opportunities and threats come from the external environment; strengths and weaknesses are internal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** external factors",
          },
        },
        {
          id: "ciealbus-u3-sm-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A market contains 2,000,000 potential customers and a niche strategy targets 5% of them. (a) Calculate the target market size. (b) If the total market grows by 10%, calculate the new target market size.",
          parts: [
            { label: "a", prompt: "Target market size", marks: 1 },
            { label: "b", prompt: "New target size after growth", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100000 },
              { label: "b", answer: 110000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Niche sizing",
                statement: "Target segment = percentage of total market.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Target = 5% × 2000000 = 100000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "New market = 2200000; target = 5% × 2200000 = 110000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = 100000; b = 110000",
          },
        },
        {
          id: "ciealbus-u3-sm-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of the following is most likely to appear as a strength in a SWOT analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Stricter government regulations",
              },
              {
                id: "b",
                text: "A strong, well-known brand reputation",
              },
              {
                id: "c",
                text: "New competitors entering the market",
              },
              {
                id: "d",
                text: "Rising interest rates",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "SWOT classification",
                statement: "Strengths are internal advantages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A strong brand is an internal advantage — the other options are external threats or neutral factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** A strong, well-known brand reputation",
          },
        },
        {
          id: "ciealbus-u3-sm-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain two reasons a small business might struggle to pursue cost leadership. (b) Explain why a small business might be well suited to a niche strategy. (c) Identify one risk of the differentiation strategy. (d) Evaluate which of Porter's generic strategies best suits a small business entering a competitive market.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Generic strategy choice",
                statement: "Strategy must fit firm size and resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Small firms lack economies of scale, so they cannot match large rivals' unit costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Small firms can serve a narrow segment with specialised products where large firms have no interest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Differentiation risk: rivals may imitate the product, or customers may not value the difference enough to pay more.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) A niche/focus strategy is usually most suitable — it avoids head-on cost competition with large firms.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) Overall judgement: the best strategy depends on resources, market position and the firm's ability to sustain the chosen advantage.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Niche/focus strategies suit small firms; cost leadership needs scale",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u3-sm-notes",
      title: "Strategy — notes",
      summary:
        "Porter: cost leadership, differentiation, focus. SWOT analyses internal/external factors.",
      sections: [
        {
          heading: "Key idea",
          body: "Sustainable competitive advantage requires consistent strategy execution.",
        },
        {
          heading: "SWOT",
          body: "Internal strengths/weaknesses vs external opportunities/threats.",
        },
      ],
    },
  ],
};
