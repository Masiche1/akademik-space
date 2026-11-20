import type { Lesson } from "../../../types.ts";

export const lesson373: Lesson = {
  id: "ciealbus-u1-lesson-1-3",
  code: "1-3",
  title: "External Influences on Business",
  goal: "I CAN analyse economic, social, technological, environmental, political and legal influences.",
  standards: ["Cambridge A Level Business 9707", "Paper 1: external influences"],
  
  vocabulary: [
    { term: "Economic influence", definition: "GDP, inflation, interest rates, exchange rates affecting business." },
    { term: "Social influence", definition: "Demographics, lifestyle changes, consumer trends." },
    { term: "Technological influence", definition: "New technologies, automation, digitalisation." },
    { term: "Environmental influence", definition: "Climate change, sustainability, regulations." },
    { term: "Political/legal influence", definition: "Government policies, laws, regulations." },
    { term: "PESTLE analysis", definition: "Framework for analysing external influences." },
  ],
  concepts: [
    {
      id: "ciealbus-u1-s3-ext",
      title: "External influences",
      skill: "Analyse PESTLE factors affecting business.",
      lesson: {
        sections: [
          {
            heading: "PESTLE framework",
            body: "Political: government stability, policies. Economic: growth, inflation, interest rates. Social: demographics, trends. Technological: innovation, automation. Legal: laws, regulations. Environmental: climate, sustainability.",
          },
          {
            heading: "Impact analysis",
            body: "Each factor can create opportunities or threats. Businesses must monitor and adapt. Some factors beyond control — need contingency planning.",
          },
        ],
        keyFormulas: [
          { name: "PESTLE", statement: "Political, Economic, Social, Technological, Legal, Environmental" },
          { name: "External", statement: "factors beyond business control" },
        ],
        workedExample: {
          problem: "How does rising interest rate affect a business?",
          solution: "Higher borrowing costs, reduced consumer spending, increased mortgage payments → lower demand for discretionary goods.",
        },
      },
      questions: [
        {
          id: "ciealbus-u1-ext-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PESTLE stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Political, Economic, Social, Technological, Legal, Environmental"
                    },
                    {
                              "id": "b",
                              "text": "Profit, Expense, Sales, Tax, Legal, Economic"
                    },
                    {
                              "id": "c",
                              "text": "Planning, Execution, Strategy, Tactics, Leadership, Evaluation"
                    },
                    {
                              "id": "d",
                              "text": "Production, Efficiency, Sales, Technology, Logistics, Economics"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PESTLE",
                              "statement": "External analysis framework."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PESTLE = Political, Economic, Social, Technological, Legal, Environmental.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "PESTLE framework"
},
        },
        {
          id: "ciealbus-u1-ext-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are external influences on business?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "External influences",
                              "statement": "Beyond control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Factors beyond business control.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Economic, social, technological, environmental, political, legal.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Beyond control factors"
},
        },
        {
          id: "ciealbus-u1-ext-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does technology affect business?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Technological influence",
                              "statement": "Innovation impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "New technologies create opportunities/threats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Automation, digitalisation, e-commerce.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Must adapt or risk obsolescence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Innovation impact"
},
        },
        {
          id: "ciealbus-u1-ext-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define PESTLE, economic influence, social influence, technological influence, environmental influence, political/legal influence. (b) What is PESTLE? (c) What are external influences? (d) How does economic influence affect business? (e) How does technology affect business? (f) How does environmental influence affect business? (g) How does legal influence affect business? (h) Evaluate whether businesses can control external influences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "External influences",
                              "statement": "PESTLE analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) PESTLE framework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Beyond control factors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) GDP, inflation, interest rates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Innovation, automation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Climate, sustainability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Laws, regulations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Limited control — adapt strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "External influences analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u1-ext-notes",
      title: "External influences — notes",
      summary: "PESTLE=Political, Economic, Social, Technological, Legal, Environmental. Monitor and adapt.",
      sections: [
        { heading: "Key idea", body: "External factors create opportunities and threats — businesses must monitor and respond." },
        { heading: "Adaptation", body: "Cannot control external environment but can adapt strategy." },
      ],
    },
  ],
};
