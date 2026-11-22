import type { Lesson } from "../../../types.ts";

export const lesson381: Lesson = {
  id: "ciealbus-u2-lesson-2-1",
  code: "2-1",
  title: "Business Growth and Development",
  goal: "I CAN explain organic and external growth strategies.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: business growth"],

  vocabulary: [
    {
      term: "Organic growth",
      definition: "Growth through internal expansion.",
    },
    {
      term: "External growth",
      definition: "Growth through mergers/acquisitions.",
    },
    {
      term: "Merger",
      definition: "Two businesses combine to form new entity.",
    },
    { term: "Acquisition", definition: "One business buys another." },
    { term: "Takeover", definition: "Acquisition against target's wishes." },
    {
      term: "Synergy",
      definition: "Combined value greater than sum of parts.",
    },
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
          solution:
            "Maintains control, less risky, no integration issues, but slower growth and limited by internal resources.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is organic growth?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Takeovers",
              },
              {
                id: "b",
                text: "Acquisitions",
              },
              {
                id: "c",
                text: "Growth through internal expansion",
              },
              {
                id: "d",
                text: "Mergers",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organic growth",
                statement: "Internal expansion.",
              },
            ],
            steps: [
              {
                reasoning: "Organic = internal expansion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Internal expansion",
          },
        },
        {
          id: "ciealbus-u2-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a merger?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Merger",
                statement: "Business combination.",
              },
            ],
            steps: [
              {
                reasoning: "Two businesses combine to form new entity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Often mutual agreement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Business combination",
          },
        },
        {
          id: "ciealbus-u2-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is synergy? Why does it matter?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synergy",
                statement: "Combined value.",
              },
            ],
            steps: [
              {
                reasoning: "Combined value greater than sum of parts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justifies mergers/acquisitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May not always materialise.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1+1>2 value",
          },
        },
        {
          id: "ciealbus-u2-gr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define organic growth, external growth, merger, acquisition, takeover, synergy. (b) What is organic growth? (c) What is a merger? (d) What is an acquisition? (e) What is synergy? (f) Compare organic vs external growth. (g) Why might merger fail? (h) Evaluate best growth strategy for different situations.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Growth",
                statement: "Strategies, implications.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Internal expansion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Business combination.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Buying another business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) 1+1>2 value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Organic slower/safer vs external faster/riskier.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Integration issues, culture clash.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Context-dependent evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business growth strategies.",
          },
        },
        {
          id: "ciealbus-u2-gr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two companies of similar size agree to combine to form a single new business. This is called a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "takeover" },
              { id: "b", text: "acquisition" },
              { id: "c", text: "franchise" },
              { id: "d", text: "merger" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Merger",
                statement:
                  "Two businesses combine to form a new entity, usually by agreement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A merger is a combination of two firms into a new entity, typically agreed mutually.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Merger",
          },
        },
        {
          id: "ciealbus-u2-gr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "One business buys and takes control of another business. This is called an...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "organic growth" },
              { id: "b", text: "liquidation" },
              { id: "c", text: "acquisition" },
              { id: "d", text: "divestment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acquisition",
                statement: "One business buys another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An acquisition is where one firm buys another and takes control of it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Acquisition",
          },
        },
        {
          id: "ciealbus-u2-gr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two rival supermarket chains merge. This is an example of which type of merger?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vertical merger" },
              { id: "b", text: "Horizontal merger" },
              { id: "c", text: "Conglomerate merger" },
              { id: "d", text: "Reverse merger" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Horizontal merger",
                statement:
                  "Combination of firms at the same stage of production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rival firms in the same market merging is a horizontal merger.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Horizontal merger",
          },
        },
        {
          id: "ciealbus-u2-gr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A car manufacturer buys a tyre company that supplies it. What is the main benefit of this vertical integration?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It guarantees supply of inputs and control over the supply chain",
              },
              { id: "b", text: "It guarantees supernormal profit forever" },
              { id: "c", text: "It allows the firm to avoid all taxes" },
              { id: "d", text: "It removes the need for any marketing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vertical integration",
                statement: "Control of different stages of the supply chain.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Owning a supplier secures inputs and gives control over the supply chain.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Guaranteed supply and supply-chain control",
          },
        },
        {
          id: "ciealbus-u2-gr-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Firm A has revenue of £2 million and profit of £200,000. Firm B has revenue of £1 million and profit of £100,000. (a) Calculate the combined revenue after a merger. (b) Calculate the combined profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3000000, unit: "£" },
              { label: "b", answer: 300000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combined totals",
                statement: "Combined figure = Firm A figure + Firm B figure.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Revenue = 2000000 + 1000000.",
                working: "2000000 + 1000000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Profit = 200000 + 100000.",
                working: "200000 + 100000",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£3,000,000 and £300,000",
          },
        },
        {
          id: "ciealbus-u2-gr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two firms with combined profit of £300,000 merge. After integration, expected profit is £360,000. (a) Calculate the expected synergy. (b) Calculate synergy as a percentage of the pre-merger combined profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60000, unit: "£" },
              { label: "b", answer: 20, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Synergy",
                statement: "Synergy = combined value - sum of separate values.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Synergy = 360000 - 300000.",
                working: "360000 - 300000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Synergy % = synergy / pre-merger profit x 100.",
                working: "\\frac{60000}{300000} \\times 100",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£60,000 and 20%",
          },
        },
        {
          id: "ciealbus-u2-gr-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain two ways a business can achieve organic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organic growth",
                statement: "Internal expansion using own resources.",
              },
            ],
            steps: [
              {
                reasoning: "Develop new products or enter new markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increase output/capacity using retained profits or borrowing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "New products/markets and increased internal capacity.",
          },
        },
        {
          id: "ciealbus-u2-gr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a merger, an acquisition and a takeover.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "External growth types",
                statement: "Merger, acquisition, takeover.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Merger: two firms combine into a new entity, usually by mutual agreement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acquisition: one firm buys another and takes control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Takeover: an acquisition pursued against the target's wishes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Merger = agreed combination; acquisition = purchase; takeover = hostile acquisition.",
          },
        },
        {
          id: "ciealbus-u2-gr-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the most common reason why mergers and acquisitions fail to deliver expected benefits?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Integration problems, especially culture clashes between the firms",
              },
              { id: "b", text: "Mergers always reduce market share" },
              { id: "c", text: "Regulators always block them" },
              { id: "d", text: "Synergy is mathematically impossible" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "M&A failure",
                statement: "Integration and culture clash are key risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poor integration and incompatible cultures are the main reasons M&A underperform.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Integration problems and culture clashes",
          },
        },
        {
          id: "ciealbus-u2-gr-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate whether organic growth is more suitable than external growth for a small family business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Growth evaluation",
                statement: "Organic vs external for small firms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Organic growth preserves family control and avoids risky integration issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it is slower and limited by internal resources and retained profits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: organic suits cautious small firms; external may be needed for rapid scale.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Organic preserves control but is slower — depends on ambitions and resources.",
          },
        },
        {
          id: "ciealbus-u2-gr-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A firm produces 10,000 units at a total cost of £50,000, and later 25,000 units at a total cost of £100,000. (a) Calculate the average cost per unit at 10,000 units. (b) Calculate the average cost per unit at 25,000 units.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "£" },
              { label: "b", answer: 4, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Average cost",
                statement: "Average cost = total cost / output.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Average cost = 50000 / 10000.",
                working: "50000 \\div 10000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Average cost = 100000 / 25000.",
                working: "100000 \\div 25000",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£5 and £4 per unit",
          },
        },
        {
          id: "ciealbus-u2-gr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using examples, evaluate whether business growth always benefits a firm's stakeholders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Weigh growth benefits against stakeholder costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: owners gain profit and value; employees may gain jobs and promotion; customers may gain choice and lower prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Costs: jobs can be lost through mergers and automation; communities may suffer if firms relocate; customers may face less choice if competition falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Growth can create diseconomies of scale and integration failures that destroy value.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: growth is not automatically beneficial — outcomes depend on how it is achieved and managed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth benefits some stakeholders but can harm others — not automatic.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-gr-notes",
      title: "Growth — notes",
      summary:
        "Organic=internal; external=mergers/acquisitions. Synergy drives M&A but integration is hard.",
      sections: [
        {
          heading: "Key idea",
          body: "Growth strategy depends on resources, risk tolerance, market conditions.",
        },
        {
          heading: "Challenges",
          body: "External growth faster but integration/culture issues common.",
        },
      ],
    },
  ],
};
