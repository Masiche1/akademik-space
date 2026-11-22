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
                              "text": "Trade policy"
                    },
                    {
                              "id": "b",
                              "text": "Interest rates"
                    },
                    {
                              "id": "c",
                              "text": "Government spending and taxation"
                    },
                    {
                              "id": "d",
                              "text": "Money supply"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "ciealecon-u2-pol-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An expansionary fiscal policy involves",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "printing more money directly" },
            { "id": "b", "text": "reducing government spending and raising taxes" },
            { "id": "c", "text": "raising interest rates" },
            { "id": "d", "text": "increasing government spending or cutting taxes" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Expansionary fiscal policy", "statement": "Higher G or lower T to raise AD." } ],
          "steps": [ { "reasoning": "Expansionary fiscal policy stimulates demand by increasing government spending or reducing taxation.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(d)** increasing government spending or cutting taxes"
},
        },
        {
          id: "ciealecon-u2-pol-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Contractionary monetary policy typically involves",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "lowering tariffs on imports" },
            { "id": "b", "text": "cutting taxes to boost demand" },
            { "id": "c", "text": "raising interest rates to reduce borrowing and spending" },
            { "id": "d", "text": "increasing government spending" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Contractionary monetary policy", "statement": "Higher interest rates to reduce AD." } ],
          "steps": [ { "reasoning": "Raising interest rates discourages borrowing and encourages saving, reducing consumption and investment.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(c)** raising interest rates to reduce borrowing and spending"
},
        },
        {
          id: "ciealecon-u2-pol-q7", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is a supply-side policy?",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "Increasing government spending on transfer payments" },
            { "id": "b", "text": "Raising interest rates" },
            { "id": "c", "text": "Increasing the rate of income tax" },
            { "id": "d", "text": "Government-funded vocational training schemes" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Supply-side policy", "statement": "Raises productive capacity / LRAS." } ],
          "steps": [ { "reasoning": "Training improves labour productivity and shifts LRAS right; the other options are demand-side or fiscal measures.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(d)** Government-funded vocational training schemes"
},
        },
        {
          id: "ciealecon-u2-pol-q8", difficulty: "core", totalMarks: 1,
          stem: "Crowding out occurs when",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "exports replace imports" },
            { "id": "b", "text": "private firms take over government services" },
            { "id": "c", "text": "government borrowing pushes up interest rates and reduces private investment" },
            { "id": "d", "text": "households save more than they invest" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Crowding out", "statement": "Government borrowing displaces private investment." } ],
          "steps": [ { "reasoning": "When government borrowing raises interest rates, private investment falls — partly offsetting the fiscal stimulus.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(c)** government borrowing pushes up interest rates and reduces private investment"
},
        },
        {
          id: "ciealecon-u2-pol-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Quantitative easing is most likely to be used when",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "inflation is very high" },
            { "id": "b", "text": "interest rates are near zero and conventional monetary policy has limited effect" },
            { "id": "c", "text": "the economy is at full employment" },
            { "id": "d", "text": "interest rates are very high" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Quantitative easing", "statement": "Central bank asset purchases when rates are near zero." } ],
          "steps": [ { "reasoning": "QE involves buying assets to inject money when interest rates cannot be cut further — an unconventional policy for deep recessions.", "marks": 1, "markCode": "A" } ],
          "finalAnswer": "**(b)** interest rates are near zero and conventional monetary policy has limited effect"
},
        },
        {
          id: "ciealecon-u2-pol-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Government spending is $120bn and tax revenue is $100bn. Calculate the budget deficit.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 20 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Budget balance", "statement": "Deficit = G - T." } ],
          "steps": [ { "reasoning": "120 - 100 = 20.", "working": "120 - 100 = 20", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "$20bn"
},
        },
        {
          id: "ciealecon-u2-pol-q11", difficulty: "core", totalMarks: 1,
          stem: "The central bank cuts its interest rate from 5% to 0.5%. Calculate the change in percentage points.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 4.5 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Rate change", "statement": "Difference in percentage points." } ],
          "steps": [ { "reasoning": "5 - 0.5 = 4.5 percentage points.", "working": "5 - 0.5 = 4.5", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "4.5 percentage points"
},
        },
        {
          id: "ciealecon-u2-pol-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Income tax is levied at 20% of income and national income is $200bn. Calculate total tax revenue (ignoring other taxes).",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 40 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Tax revenue", "statement": "Tax rate x tax base." } ],
          "steps": [ { "reasoning": "0.20 x 200 = 40.", "working": "0.2 x 200 = 40", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "$40bn"
},
        },
        {
          id: "ciealecon-u2-pol-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Explain how monetary policy can be used to control inflation.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Monetary policy", "statement": "Interest rates reduce AD." } ],
          "steps": [
            { "reasoning": "The central bank raises interest rates, increasing the cost of borrowing and encouraging saving.", "marks": 1, "markCode": "M" },
            { "reasoning": "Consumption and investment fall, shifting AD left, which reduces the pressure on prices and lowers inflation.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "Higher interest rates cut C and I, shifting AD left and reducing inflation."
},
        },
        {
          id: "ciealecon-u2-pol-q14", difficulty: "core", totalMarks: 3,
          stem: "Explain two supply-side policies and how they affect long-run aggregate supply.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Supply-side policies", "statement": "Increase LRAS via productivity." } ],
          "steps": [
            { "reasoning": "E.g. education and training improve labour skills and productivity; deregulation reduces business costs and encourages enterprise.", "marks": 1, "markCode": "M" },
            { "reasoning": "Other examples include privatisation, labour market flexibility, infrastructure investment and lower corporation tax.", "marks": 1, "markCode": "M" },
            { "reasoning": "These policies raise productive capacity, shifting LRAS right and enabling higher long-run growth without inflation.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Training/deregulation raise productivity → LRAS shifts right → sustainable growth."
},
        },
        {
          id: "ciealecon-u2-pol-q15", difficulty: "core", totalMarks: 6,
          stem: "Answer the following on macroeconomic policy.",
          parts: [
            { "label": "a", "prompt": "Distinguish between fiscal and monetary policy.", "marks": 2 },
            { "label": "b", "prompt": "Explain what is meant by an automatic stabiliser, giving one example.", "marks": 2 },
            { "label": "c", "prompt": "Explain one limitation of supply-side policies.", "marks": 2 }
          ],
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Macroeconomic policy", "statement": "Fiscal, monetary, stabilisers, supply-side." } ],
          "steps": [
            { "reasoning": "Fiscal policy uses government spending and taxation; monetary policy uses interest rates and money supply by the central bank.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "Fiscal is government-controlled while monetary is central bank-controlled.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "Automatic stabilisers are policies that operate without new government action — e.g. progressive income tax and unemployment benefits.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "In a recession tax receipts fall and benefit payments rise automatically, cushioning the fall in income.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "Supply-side policies take a long time to work and may be costly, with benefits uncertain.", "marks": 1, "markCode": "M", "part": "c" },
            { "reasoning": "E.g. training schemes have time lags, and deregulation may not raise productivity as expected.", "marks": 1, "markCode": "A", "part": "c" }
          ],
          "finalAnswer": "Fiscal = G and T; monetary = interest rates; automatic stabilisers cushion cycles; supply-side is slow."
},
        },
        {
          id: "ciealecon-u2-pol-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the use of supply-side policies versus demand-side policies for achieving long-term economic growth.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Growth policies", "statement": "Demand vs supply-side for growth." } ],
          "steps": [
            { "reasoning": "Supply-side policies raise LRAS, increasing potential output and allowing growth without demand-pull inflation — the best long-term solution.", "marks": 1, "markCode": "M" },
            { "reasoning": "However they take years to show results and may be politically difficult or costly.", "marks": 1, "markCode": "M" },
            { "reasoning": "Demand-side stimulus raises AD quickly but, if the economy is near capacity, mainly causes inflation rather than sustainable growth.", "marks": 1, "markCode": "M" },
            { "reasoning": "Demand management can still help by closing a negative output gap during a recession.", "marks": 1, "markCode": "M" },
            { "reasoning": "Supply-side policies may increase inequality or face resistance (e.g. labour deregulation, privatisation).", "marks": 1, "markCode": "M" },
            { "reasoning": "Overall, supply-side policies offer more sustainable long-term growth despite slower results.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Supply-side policies are better for sustainable long-term growth; demand-side stimulus is quicker but risks inflation.",
          "commonErrors": ["One-sided evaluation ignoring trade-offs."]
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
