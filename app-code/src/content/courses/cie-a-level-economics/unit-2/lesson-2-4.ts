import type { Lesson } from "../../../types.ts";

export const lesson424: Lesson = {
  id: "ciealecon-u2-lesson-2-4",
  code: "2-4",
  title: "Macroeconomic Policies",
  goal: "I CAN explain fiscal, monetary and supply-side policies.",
  standards: ["Cambridge A Level Economics 9708", "Paper 2: policy"],
  
  vocabulary: [
    { term: "Fiscal policy", definition: "Government spending and taxation." },
    { term: "Monetary policy", definition: "Central bank interest rates and money supply." },
    { term: "Supply-side policy", definition: "Policies to increase productive capacity." },
    { term: "Expansionary policy", definition: "Policy to increase AD/growth." },
    { term: "Contractionary policy", definition: "Policy to reduce AD/inflation." },
    { term: "Policy conflict", definition: "When objectives cannot all be achieved." },
  ],
  concepts: [
    {
      id: "ciealecon-u2-s4-pol",
      title: "Macroeconomic policies",
      skill: "Evaluate policy effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Fiscal policy",
            body: "Expansionary: increase G, cut T → AD↑. Contractionary: reduce G, raise T → AD↓. Affects budget deficit/surplus. Crowding out possible.",
          },
          {
            heading: "Monetary policy",
            body: "Interest rates: ↑ reduces borrowing/spending → AD↓, controls inflation. ↓ stimulates economy. Quantitative easing in extreme cases.",
          },
          {
            heading: "Supply-side",
            body: "Increase LRAS: education/training, deregulation, privatisation, tax incentives, infrastructure. Long-term growth but slow effects.",
          },
        ],
        keyFormulas: [
          { name: "Fiscal", statement: "G and T" },
          { name: "Monetary", statement: "interest rates" },
          { name: "Supply-side", statement: "LRAS increase" },
        ],
        workedExample: {
          problem: "High inflation + recession. Which policies conflict?",
          solution: "Contractionary fiscal/monetary reduces inflation but worsens recession. Supply-side can help long-term but slow. Policy conflict exists.",
        },
      },
      questions: [
        {
          id: "ciealecon-u2-pol-q1",
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
                              "text": "Interest rates"
                    },
                    {
                              "id": "c",
                              "text": "Money supply"
                    },
                    {
                              "id": "d",
                              "text": "Trade policy"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fiscal policy",
                              "statement": "G and T."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fiscal = government spending + taxation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Government spending/taxation"
},
        },
        {
          id: "ciealecon-u2-pol-q2",
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
                              "statement": "Interest rates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Central bank interest rates and money supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used to control inflation and growth.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Interest rates/money supply"
},
        },
        {
          id: "ciealecon-u2-pol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is supply-side policy? Give examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Supply-side",
                              "statement": "LRAS increase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Policies to increase productive capacity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Education, deregulation, privatisation, infrastructure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Long-term growth focus.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "LRAS increase examples"
},
        },
        {
          id: "ciealecon-u2-pol-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define fiscal policy, monetary policy, supply-side policy, expansionary, contractionary, policy conflict. (b) What is fiscal policy? (c) What is monetary policy? (d) What is supply-side? (e) What is expansionary policy? (f) What is contractionary? (g) What is policy conflict? (h) Evaluate which policy is most effective for long-term growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Policies",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) G and T.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Interest rates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) LRAS increase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Increase AD.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Reduce AD.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Conflicting objectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Supply-side best for long-term.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Macroeconomic policies."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u2-pol-notes",
      title: "Policies — notes",
      summary: "Fiscal=G+T. Monetary=interest rates. Supply-side=LRAS. Conflicts common.",
      sections: [
        { heading: "Key idea", body: "Demand policies affect short-run; supply-side affects long-run growth." },
        { heading: "Trade-offs", body: "Inflation vs unemployment, growth vs stability conflicts." },
      ],
    },
  ],
};
