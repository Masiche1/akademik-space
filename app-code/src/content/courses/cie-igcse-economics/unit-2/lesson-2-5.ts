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
                              "text": "Central bank policy"
                    },
                    {
                              "id": "b",
                              "text": "Government spending and taxation"
                    },
                    {
                              "id": "c",
                              "text": "A market structure"
                    },
                    {
                              "id": "d",
                              "text": "A type of tax"
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "cieiec-u2-pol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fiscal policy refers to the government's control of:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Government spending and taxation"
                    },
                    {
                              "id": "b",
                              "text": "Interest rates and money supply"
                    },
                    {
                              "id": "c",
                              "text": "Wage levels directly"
                    },
                    {
                              "id": "d",
                              "text": "Exchange rates only"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fiscal policy",
                              "statement": "Spending and taxation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fiscal policy = government spending and taxes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Government spending and taxation"
},
        },
        {
          id: "cieiec-u2-pol-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Contractionary monetary policy typically involves:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cutting taxes"
                    },
                    {
                              "id": "b",
                              "text": "Increasing government spending"
                    },
                    {
                              "id": "c",
                              "text": "Lowering interest rates"
                    },
                    {
                              "id": "d",
                              "text": "Raising interest rates"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Contractionary policy",
                              "statement": "Reduces AD."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher interest rates reduce borrowing/spending = contractionary.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Raising interest rates"
},
        },
        {
          id: "cieiec-u2-pol-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an expansionary fiscal policy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Raising taxes"
                    },
                    {
                              "id": "b",
                              "text": "Selling government bonds"
                    },
                    {
                              "id": "c",
                              "text": "Cutting taxes"
                    },
                    {
                              "id": "d",
                              "text": "Reducing government spending"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Expansionary fiscal policy",
                              "statement": "Spending up or taxes down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tax cuts leave consumers more income -> AD rises.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cutting taxes"
},
        },
        {
          id: "cieiec-u2-pol-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Quantitative easing is a monetary policy tool used to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Increase the money supply"
                    },
                    {
                              "id": "b",
                              "text": "Increase taxes"
                    },
                    {
                              "id": "c",
                              "text": "Decrease the money supply"
                    },
                    {
                              "id": "d",
                              "text": "Raise interest rates"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quantitative easing",
                              "statement": "Increase money supply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "QE injects money into the economy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Increase the money supply"
},
        },
        {
          id: "cieiec-u2-pol-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A government cuts taxes by $10 billion and raises spending by $15 billion. What is the total size of the fiscal stimulus, in billions of dollars?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 25,
                              "unit": "$ billion"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Expansionary fiscal policy",
                              "statement": "Spending up or taxes down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stimulus = 10 + 15 = 25.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total stimulus = $25 billion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$25 billion"
},
        },
        {
          id: "cieiec-u2-pol-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Interest rates rise from 2% to 3.5%. By how many percentage points do they rise?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1.5,
                              "unit": "percentage points"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Interest rate",
                              "statement": "Cost of borrowing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3.5 - 2 = 1.5 percentage points.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1.5 percentage points"
},
        },
        {
          id: "cieiec-u2-pol-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A government earns revenue of $80 billion and spends $95 billion. What is the budget balance (revenue minus spending) in billions of dollars?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": -15,
                              "unit": "$ billion"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Budget balance",
                              "statement": "Revenue minus spending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "80 - 95 = -15.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Budget deficit of $15 billion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "-$15 billion (deficit)"
},
        },
        {
          id: "cieiec-u2-pol-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define monetary policy and name one of its main tools.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monetary policy",
                              "statement": "Central bank control of money/interest rates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Control of money supply and interest rates by central bank.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tool: interest rates or quantitative easing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Interest rates / money supply control"
},
        },
        {
          id: "cieiec-u2-pol-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how expansionary monetary policy can increase aggregate demand.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Monetary policy",
                              "statement": "Transmission to AD."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Central bank lowers interest rates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Borrowing becomes cheaper -> consumption and investment rise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Higher C and I shift AD to the right.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lower rates -> more C,I -> AD up"
},
        },
        {
          id: "cieiec-u2-pol-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two limitations of using interest rates to control inflation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Monetary policy",
                              "statement": "Limitations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Time lags — effects take months to work through.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "High rates may cause unemployment/recession.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "May not work if inflation is cost-push (supply side).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lags, unemployment, cost-push limits"
},
        },
        {
          id: "cieiec-u2-pol-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between expansionary and contractionary fiscal policy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fiscal policy",
                              "statement": "Spending and taxation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expansionary: spending up or taxes down -> AD rises.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Contractionary: spending down or taxes up -> AD falls.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used respectively to boost or cool the economy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Expansionary=AD up; contractionary=AD down"
},
        },
        {
          id: "cieiec-u2-pol-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether monetary or fiscal policy is more effective at reducing unemployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Macroeconomic policy",
                              "statement": "Policy comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fiscal: direct spending creates jobs quickly but may raise deficits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Monetary: cheaper borrowing stimulates demand but works with lags.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both may cause inflation if overused near full capacity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Effectiveness depends on economic conditions and transmission.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: often used together; neither is universally superior.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Context-dependent; often combined"
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
