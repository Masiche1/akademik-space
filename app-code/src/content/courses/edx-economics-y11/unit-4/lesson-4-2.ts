import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ecn11-u1-lesson-1-2",
  code: "1-2",
  title: "Aggregate Demand and Supply",
  goal: "I CAN explain AD/AS curves and their determinants.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Macroeconomics"],
  vocabulary: [
    {
      term: "Aggregate demand (AD)",
      definition: "Total spending in economy — C+I+G+X−M.",
    },
    {
      term: "Aggregate supply (AS)",
      definition: "Total output economy can produce.",
    },
    {
      term: "Short-run AS",
      definition: "AS with fixed wages/prices — slopes upward.",
    },
    { term: "Long-run AS", definition: "AS at full capacity — vertical." },
    {
      term: "Multiplier effect",
      definition: "Initial spending → larger total impact.",
    },
  ],
  concepts: [
    {
      id: "ecn11-u1-ad",
      title: "Aggregate Demand",
      skill: "Understand AD components and shifters.",
      lesson: {
        sections: [
          {
            heading: "AD components",
            body: "**C**onsumption: household spending — income, confidence, interest rates. **I**nvestment: business spending — interest rates, confidence, technology. **G**overnment: public spending — fiscal policy. **X−M**: net exports — exchange rates, global demand.\n\n**AD shifters**: interest rates (lower = more borrowing/spending), consumer confidence, government policy, exchange rates, global economy.",
          },
          {
            heading: "AD/AS equilibrium",
            body: "**Equilibrium**: AD = AS — determines price level and output. **AD shift right**: more spending → higher output + prices. **AD shift left**: less spending → lower output + prices (recession).\n\n**Multiplier**: initial injection → workers spend wages → more income → more spending — total impact > initial amount. **Example**: £1bn investment → £1.5bn total income.",
          },
        ],
        keyFormulas: [{ name: "AD", statement: "C + I + G + (X − M)." }],
        workedExample: {
          problem: "Government increases spending by £10bn. AD effect?",
          solution: "AD shifts right — more output and possibly higher prices.",
        },
      },
      questions: [
        {
          id: "ecn11-u1-ad-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the components of aggregate demand?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only consumption" },
              { id: "b", text: "Only exports" },
              { id: "c", text: "C + I + G + (X−M)" },
              { id: "d", text: "Only government spending" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "AD", statement: "C+I+G+X−M." },
            ],
            steps: [
              {
                reasoning: "AD = all spending components.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** C+I+G+X−M",
            commonErrors: ["One component only."],
          },
        },
        {
          id: "ecn11-u1-ad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do lower interest rates affect aggregate demand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rates",
                statement: "Lower rates → more borrowing/spending.",
              },
            ],
            steps: [
              {
                reasoning: "Borrowing cheaper — mortgages, business loans.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumers spend more, businesses invest more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "AD increases — shifts right.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Lower rates → more C+I → AD shifts right.",
            commonErrors: ["Wrong direction.", "No mechanism."],
          },
        },
        {
          id: "ecn11-u1-ad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the multiplier effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplier",
                statement: "Spending → income → more spending.",
              },
            ],
            steps: [
              {
                reasoning: "Initial injection → firm earns more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Workers get wages → spend on goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More spending → more income → cycle continues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total impact > initial injection.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Spending cycles through economy — total impact exceeds initial amount.",
            commonErrors: ["No cycle.", "1:1 assumed."],
          },
        },
        {
          id: "ecn11-u1-ad-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Central bank cuts interest rates to boost growth.",
          parts: [
            {
              label: "a",
              prompt: "Explain how this affects AD components.",
              marks: 4,
            },
            { label: "b", prompt: "Explain potential downside.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monetary policy",
                statement: "Lower rates stimulate demand but risk inflation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Cheaper mortgages → more C.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Cheaper business loans → more I.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) If economy at full capacity → demand-pull inflation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Asset bubbles — house prices rise.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) more C+I→AD up (b) inflation/bubbles risk",
            commonErrors: ["Only benefits.", "No downside."],
          },
        },
      ],
    },
    {
      id: "ecn11-u1-as",
      title: "Aggregate Supply",
      skill: "Distinguish short-run and long-run AS and their determinants.",
      lesson: {
        sections: [
          {
            heading: "Short-run AS",
            body: "**SRAS** slopes upward — as price level rises, firms produce more (wages/prices sticky). **Determinants**: input prices (wages, raw materials), technology, productivity, taxes/subsidies.\n\n**Shift right** = more output at each price level — lower costs or better technology. **Shift left** = less output.",
          },
          {
            heading: "Long-run AS",
            body: "**LRAS** vertical at full employment — economy's maximum sustainable output. **Determinants**: capital stock, labour force, technology, institutions.\n\n**Economic growth** = LRAS shifts right — more productive capacity. **At full capacity**: AD increase → only prices rise, no more output — inflation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Wages rise across economy. SRAS effect?",
          solution:
            "SRAS shifts left — higher costs → less output at each price.",
        },
      },
      questions: [
        {
          id: "ecn11-u1-as-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why does short-run AS slope upward?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand is infinite" },
              { id: "b", text: "Government controls output" },
              {
                id: "c",
                text: "Wages/prices sticky — firms produce more at higher prices",
              },
              { id: "d", text: "Wages and prices are flexible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SRAS",
                statement: "Sticky prices → upward slope.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sticky wages → firms produce more at higher prices.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Sticky prices",
            commonErrors: ["Flexible assumed."],
          },
        },
        {
          id: "ecn11-u1-as-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What determines long-run aggregate supply?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LRAS",
                statement: "Capital, labour, technology, institutions.",
              },
            ],
            steps: [
              {
                reasoning: "Capital stock — machinery, infrastructure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Labour force — size, skills.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technology and institutions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Capital, labour, technology, institutions.",
            commonErrors: ["Only one.", "SRAS confused."],
          },
        },
        {
          id: "ecn11-u1-as-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what happens when AD increases at full employment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Full capacity",
                statement: "AD > capacity → only prices rise.",
              },
            ],
            steps: [
              {
                reasoning: "At full employment — LRAS vertical.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "AD increase → can't produce more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Only price level rises — demand-pull inflation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No increase in real output.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Full capacity → AD rise → only inflation, no more output.",
            commonErrors: ["More output.", "Deflation."],
          },
        },
        {
          id: "ecn11-u1-as-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government invests heavily in education and infrastructure.",
          parts: [
            { label: "a", prompt: "Effect on short-run AS?", marks: 3 },
            { label: "b", prompt: "Effect on long-run AS?", marks: 3 },
            { label: "c", prompt: "Explain difference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply-side investment",
                statement: "Builds capacity for long-term growth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) May not affect SRAS immediately — capacity takes time.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Some short-term stimulus possible.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) LRAS shifts right — more skilled labour, infrastructure.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Higher productive capacity → sustainable growth.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) SRAS = short-term output; LRAS = long-term capacity.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) limited short-term (b) LRAS right=capacity up (c) SRAS vs LRAS",
            commonErrors: ["Same effect.", "No distinction."],
          },
        },
      ],
    },
  ],
};
