import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ecn10-u3-lesson-3-2",
  code: "3-2",
  title: "Unemployment and Inflation",
  goal: "I CAN explain unemployment types and inflation causes.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The UK Economy"],
  vocabulary: [
    {
      term: "Unemployment",
      definition: "People willing and able to work but without jobs.",
    },
    {
      term: "Frictional unemployment",
      definition: "Between jobs — searching for work.",
    },
    {
      term: "Structural unemployment",
      definition: "Skills/location mismatch — industry decline.",
    },
    {
      term: "Demand-deficient unemployment",
      definition: "Recession — not enough demand for labour.",
    },
    { term: "Inflation", definition: "Sustained rise in general price level." },
  ],
  concepts: [
    {
      id: "ecn10-u3-unemployment",
      title: "Unemployment",
      skill: "Distinguish unemployment types and causes.",
      lesson: {
        sections: [
          {
            heading: "Types of unemployment",
            body: "**Frictional**: between jobs — normal, short-term, searching for better match. **Structural**: industry decline, automation, skills mismatch — long-term, needs retraining. **Demand-deficient (cyclical)**: recession — firms cut jobs due to low demand. **Seasonal**: tourism, farming — varies by season.\n\n**Measurement**: unemployment rate = unemployed ÷ labour force × 100. **Natural rate**: frictional + structural — always present.",
          },
          {
            heading: "Costs of unemployment",
            body: "**Individual**: lost income, stress, skill loss. **Government**: lost tax revenue, higher welfare spending. **Economy**: wasted resources, lower output, social problems.\n\n**Policies**: demand-side (fiscal/monetary stimulus), supply-side (training, flexibility), labour market (minimum wage, benefits).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Coal mine closes — miners lose jobs permanently. Type of unemployment?",
          solution: "Structural — industry decline, skills don't transfer.",
        },
      },
      questions: [
        {
          id: "ecn10-u3-unemployment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is structural unemployment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seasonal work" },
              { id: "b", text: "Recession-related" },
              {
                id: "c",
                text: "Skills/location mismatch from industry decline",
              },
              { id: "d", text: "Between jobs searching" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural unemployment",
                statement: "Mismatch — skills, location, industry decline.",
              },
            ],
            steps: [
              {
                reasoning: "Structural = skills/location mismatch.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Skills/location mismatch",
            commonErrors: ["Frictional confused."],
          },
        },
        {
          id: "ecn10-u3-unemployment-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two costs of unemployment to the economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unemployment costs",
                statement: "Lost output, tax revenue, welfare.",
              },
            ],
            steps: [
              {
                reasoning: "Lost output — wasted labour/resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lost tax revenue + higher welfare spending.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social problems — poverty, crime.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Lost output, tax revenue, welfare costs, social problems.",
            commonErrors: ["Only individual cost.", "Only one."],
          },
        },
        {
          id: "ecn10-u3-unemployment-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between frictional and structural unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Unemployment types",
                statement: "Temporary vs long-term mismatch.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frictional: between jobs, searching for match — short-term.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Structural: skills/location mismatch — long-term.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Frictional normal part of labour market.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Structural needs retraining/mobility.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Frictional = temporary search; structural = long-term mismatch.",
            commonErrors: ["Same type.", "No duration link."],
          },
        },
        {
          id: "ecn10-u3-unemployment-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Unemployment rises from 4% to 8% during a recession.",
          parts: [
            {
              label: "a",
              prompt: "What type of unemployment is this likely to be?",
              marks: 3,
            },
            { label: "b", prompt: "Explain why.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest two policies to reduce it.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyclical unemployment",
                statement: "Recession → demand falls → jobs lost.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Demand-deficient (cyclical) unemployment.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Caused by recession/low demand.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Firms cut jobs when demand falls.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Not skills mismatch — temporary.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Fiscal stimulus / monetary easing.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) demand-deficient (b) recession cuts demand (c) stimulus/easing",
            commonErrors: ["Structural assumed.", "No policy."],
          },
        },
      ],
    },
    {
      id: "ecn10-u3-inflation",
      title: "Inflation",
      skill: "Understand inflation causes, measurement and effects.",
      lesson: {
        sections: [
          {
            heading: "Measuring inflation",
            body: "**CPI** (Consumer Price Index): basket of goods/services — measures average price change. **Inflation rate** = % change in CPI year-on-year. **Target**: central banks aim ~2%.\n\n**Demand-pull inflation**: too much demand chasing limited supply — economy at full capacity. **Cost-push inflation**: rising costs (wages, imports, energy) pushed into prices. **Built-in inflation**: wage-price spiral — workers demand higher wages → firms raise prices → workers demand more.",
          },
          {
            heading: "Effects of inflation",
            body: "**Costs**: erodes purchasing power, uncertainty, menu costs, shoe-leather costs, hurts savers on fixed incomes, can harm competitiveness. **Benefits**: mild inflation can stimulate spending, reduce real debt burden, avoid deflation.\n\n**Hyperinflation**: extremely high inflation — destroys currency value, economic chaos.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "CPI rises from 100 to 105 in a year. Inflation rate?",
          solution: "(105−100)/100 × 100 = 5%.",
        },
      },
      questions: [
        {
          id: "ecn10-u3-inflation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the CPI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company Profit Index" },
              { id: "b", text: "Central Policy Index" },
              { id: "c", text: "Consumer Price Index — measures inflation" },
              { id: "d", text: "Cost of Production Index" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CPI",
                statement: "Consumer Price Index — inflation measure.",
              },
            ],
            steps: [
              {
                reasoning: "CPI = Consumer Price Index.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Consumer Price Index",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "ecn10-u3-inflation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain demand-pull inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand-pull",
                statement: "Too much demand → prices rise.",
              },
            ],
            steps: [
              {
                reasoning: "Aggregate demand exceeds supply capacity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Firms raise prices to ration scarce goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Often occurs at full employment.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Demand exceeds supply capacity → firms raise prices.",
            commonErrors: ["Cost-push confused.", "No mechanism."],
          },
        },
        {
          id: "ecn10-u3-inflation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one cost of inflation to consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation costs",
                statement: "Erodes purchasing power.",
              },
            ],
            steps: [
              {
                reasoning: "Prices rise — same money buys less.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Erodes real wages/savings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Uncertainty — hard to plan.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hurts fixed-income groups — pensioners.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Purchasing power falls — savers/pensioners hurt, uncertainty.",
            commonErrors: ["No consumer impact.", "Only one cost."],
          },
        },
        {
          id: "ecn10-u3-inflation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Economy at full employment, government increases spending.",
          parts: [
            { label: "a", prompt: "What type of inflation likely?", marks: 3 },
            { label: "b", prompt: "Explain the mechanism.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest one policy to control it.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand-pull at full capacity",
                statement: "Full employment + more demand = inflation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Demand-pull inflation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) At full capacity — can't produce more.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) More spending → more demand → prices rise.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Firms raise prices to ration.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Raise interest rates / reduce spending.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) demand-pull (b) full capacity+more demand→prices (c) raise rates",
            commonErrors: ["Cost-push.", "No mechanism."],
          },
        },
      ],
    },
  ],
};
