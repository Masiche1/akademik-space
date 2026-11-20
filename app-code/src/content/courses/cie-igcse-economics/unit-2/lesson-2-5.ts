import type { Lesson } from "../../../types.ts";

export const lesson285: Lesson = {
  id: "cieiec-u2-lesson-2-5",
  code: "2-5",
  title: "Macroeconomic Objectives and Policies",
  goal: "I CAN explain macroeconomic objectives and fiscal/monetary policy.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 6: macroeconomic policy"],
  
  vocabulary: [
    { term: "Macroeconomic objectives", definition: "Economic goals: growth, low unemployment, low inflation, balance of payments." },
    { term: "Fiscal policy", definition: "Government spending and taxation." },
    { term: "Monetary policy", definition: "Central bank control of money supply/interest rates." },
    { term: "Contractionary policy", definition: "Policy reducing AD." },
    { term: "Expansionary policy", definition: "Policy increasing AD." },
    { term: "Interest rate", definition: "Cost of borrowing — monetary policy tool." },
  ],
  concepts: [
    {
      id: "cieiec-u2-s5-pol",
      title: "Macroeconomic policy",
      skill: "Understand policy tools and objectives.",
      lesson: {
        sections: [
          {
            heading: "Macroeconomic objectives",
            body: "Sustainable economic growth, low unemployment, low and stable inflation, balance of payments equilibrium, equitable distribution.",
          },
          {
            heading: "Fiscal policy",
            body: "Government spending ↑ or taxes ↓ = expansionary (boost AD). Government spending ↓ or taxes ↑ = contractionary (reduce AD).",
          },
          {
            heading: "Monetary policy",
            body: "Interest rates ↑ = contractionary (reduce borrowing/spending). Interest rates ↓ = expansionary (encourage borrowing/spending). Quantitative easing = increase money supply.",
          },
        ],
        keyFormulas: [
          { name: "Fiscal expansionary", statement: "spending↑ or taxes↓" },
          { name: "Monetary expansionary", statement: "interest rates↓" },
          { name: "Objectives", statement: "growth, employment, inflation, BOP" },
        ],
        workedExample: {
          problem: "Economy in recession with high unemployment. What policies could help?",
          solution: "Expansionary fiscal (increase spending, cut taxes) + expansionary monetary (lower interest rates) to boost AD.",
        },
      },
      questions: [
        {
          id: "cieiec-u2-pol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is fiscal policy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Government spending and taxation"
                    },
                    {
                              "id": "b",
                              "text": "Central bank policy"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "A market structure"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fiscal policy",
                              "statement": "Spending/taxation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fiscal = government spending and taxation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Government spending and taxation"
},
        },
        {
          id: "cieiec-u2-pol-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is monetary policy?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monetary policy",
                              "statement": "Money supply/interest rates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Central bank control of money supply/interest rates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Main tool: interest rates.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Money supply/interest rates"
},
        },
        {
          id: "cieiec-u2-pol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does expansionary monetary policy work?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Expansionary monetary",
                              "statement": "Lower interest rates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lower interest rates encourage borrowing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increases consumption and investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Boosts aggregate demand.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lower rates → more borrowing → higher AD"
},
        },
        {
          id: "cieiec-u2-pol-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define macroeconomic objectives, fiscal policy, monetary policy, contractionary, expansionary, interest rate. (b) What are macroeconomic objectives? (c) What is fiscal policy? (d) What is monetary policy? (e) What is expansionary fiscal policy? (f) What is contractionary monetary policy? (g) How do policies affect AD? (h) Evaluate fiscal vs monetary policy effectiveness.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Macroeconomic policy",
                              "statement": "Objectives, tools."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Growth, employment, inflation, BOP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Government spending/taxation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Money supply/interest rates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Spending↑ or taxes↓.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Interest rates↑.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Shift AD right/left.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Macroeconomic policy."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u2-pol-notes",
      title: "Macroeconomic policy — notes",
      summary: "Objectives: growth, employment, low inflation, BOP. Fiscal=spending/taxes; monetary=interest rates/money supply.",
      sections: [
        { heading: "Key idea", body: "Policies shift AD to achieve macroeconomic objectives." },
        { heading: "Trade-offs", body: "Policies may achieve one objective but worsen another (e.g. growth vs inflation)." },
      ],
    },
  ],
};
