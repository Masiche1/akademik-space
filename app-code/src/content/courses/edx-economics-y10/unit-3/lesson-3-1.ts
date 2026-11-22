import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ecn10-u3-lesson-3-1",
  code: "3-1",
  title: "Government Spending and Taxation",
  goal: "I CAN explain how government spending and taxation affect the economy.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Government and the Economy"],
  vocabulary: [
    {
      term: "Fiscal policy",
      definition: "Government spending and taxation decisions.",
    },
    {
      term: "Progressive tax",
      definition: "Higher earners pay higher % — income tax.",
    },
    {
      term: "Regressive tax",
      definition: "Lower earners pay higher % — VAT, excise.",
    },
    {
      term: "Government spending",
      definition: "Public services, infrastructure, transfers.",
    },
    {
      term: "Budget deficit",
      definition: "Government spending exceeds tax revenue.",
    },
  ],
  concepts: [
    {
      id: "ecn10-u3-fiscal",
      title: "Fiscal Policy",
      skill:
        "Understand government spending, taxation and their economic effects.",
      lesson: {
        sections: [
          {
            heading: "Government spending",
            body: "**Public services**: healthcare, education, defence, infrastructure. **Transfer payments**: welfare, pensions, unemployment benefits — redistribute income. **Government investment**: capital projects — roads, schools, hospitals.\n\n**Effects**: increases aggregate demand, creates jobs, provides public goods. **Costs**: funded by taxes or borrowing — may crowd out private spending.",
          },
          {
            heading: "Taxation",
            body: "**Progressive**: higher % for higher earners — income tax, corporation tax on profits. **Regressive**: same % for all or higher % for lower earners — VAT, fuel duty. **Purpose**: raise revenue, redistribute income, influence behaviour (sin taxes).\n\n**Effects**: reduces disposable income, affects incentives, changes relative prices. **Tax incidence**: who actually bears the burden — may differ from who pays.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Government increases income tax on high earners. Effect on inequality?",
          solution:
            "Reduces inequality — takes more from rich, funds services for all.",
        },
      },
      questions: [
        {
          id: "ecn10-u3-fiscal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a progressive tax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher earners pay higher percentage" },
              { id: "b", text: "Tax on imports" },
              { id: "c", text: "Same rate for everyone" },
              { id: "d", text: "Tax on companies only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Progressive tax",
                statement: "Higher % for higher earners.",
              },
            ],
            steps: [
              {
                reasoning: "Progressive = higher earners pay more %.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Higher earners pay more",
            commonErrors: ["Regressive confused."],
          },
        },
        {
          id: "ecn10-u3-fiscal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two purposes of government spending.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gov spending",
                statement: "Public services, transfers, investment.",
              },
            ],
            steps: [
              {
                reasoning: "Provide public services — healthcare, education.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Redistribute income — welfare payments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Invest in infrastructure — roads, schools.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Public services, redistribution, infrastructure.",
            commonErrors: ["Only one.", "Wrong purpose."],
          },
        },
        {
          id: "ecn10-u3-fiscal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why VAT is considered regressive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Regressive tax",
                statement: "Same % but hits poorer harder.",
              },
            ],
            steps: [
              {
                reasoning: "VAT same % for everyone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Poor spend larger % of income on goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rich spend smaller % — VAT is smaller burden.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "So effectively regressive — poorer pay more proportionally.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Same % but poorer spend larger income share — effectively regressive.",
            commonErrors: ["Progressive confused.", "No income link."],
          },
        },
        {
          id: "ecn10-u3-fiscal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government runs a budget deficit of £50bn.",
          parts: [
            { label: "a", prompt: "What is a budget deficit?", marks: 3 },
            { label: "b", prompt: "How is it funded?", marks: 3 },
            {
              label: "c",
              prompt: "Give one advantage and one disadvantage.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Budget deficit",
                statement: "Spending > revenue — borrow or print.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Government spending exceeds tax revenue.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) £50bn gap to fill.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Borrowing — government bonds/gilt-edged.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) May also print money (inflationary).",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Advantage: funds services/stimulus. Disadvantage: debt burden.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) spending>revenue (b) borrowing (c) stimulus vs debt",
            commonErrors: ["Wrong definition.", "No funding."],
          },
        },
      ],
    },
    {
      id: "ecn10-u3-monetary",
      title: "Monetary Policy and Supply-Side",
      skill:
        "Understand interest rates, monetary policy and supply-side measures.",
      lesson: {
        sections: [
          {
            heading: "Monetary policy",
            body: "**Central bank** sets **interest rates** — cost of borrowing. **High rates**: reduce borrowing/spending, control inflation, but slow growth. **Low rates**: encourage borrowing/spending, boost growth, but inflation risk.\n\n**Quantitative easing**: central bank creates money to buy assets — injects liquidity when rates near zero.",
          },
          {
            heading: "Supply-side policy",
            body: "**Supply-side** = increase productive capacity — long-term growth. **Measures**: education/training (skilled labour), deregulation (easier business), privatisation (efficiency), labour market flexibility, infrastructure investment, lower taxes on enterprise.\n\n**Benefits**: sustainable growth, lower inflation, more jobs. **Drawbacks**: time lag, costs, may increase inequality.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Inflation is 5%, target is 2%. What should central bank do?",
          solution:
            "Raise interest rates — reduce borrowing/spending to control inflation.",
        },
      },
      questions: [
        {
          id: "ecn10-u3-monetary-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the central bank use to control inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interest rates" },
              { id: "b", text: "Minimum wage" },
              { id: "c", text: "Import tariffs" },
              { id: "d", text: "Government spending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monetary policy",
                statement: "Central bank uses interest rates.",
              },
            ],
            steps: [
              {
                reasoning: "Interest rates = monetary policy tool.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Interest rates",
            commonErrors: ["Fiscal confused."],
          },
        },
        {
          id: "ecn10-u3-monetary-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do high interest rates reduce inflation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rates",
                statement: "Reduce borrowing → less spending → less demand.",
              },
            ],
            steps: [
              {
                reasoning: "Borrowing becomes more expensive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumers/businesses spend less.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower demand → lower prices → less inflation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "High rates → less borrowing/spending → less demand → less inflation.",
            commonErrors: ["Wrong direction.", "No mechanism."],
          },
        },
        {
          id: "ecn10-u3-monetary-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what supply-side policies aim to achieve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply-side",
                statement: "Increase productive capacity.",
              },
            ],
            steps: [
              {
                reasoning: "Increase productive capacity — more output.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Long-term economic growth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower inflation — more supply = lower prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More jobs — higher employment.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Increase capacity → growth, lower inflation, more jobs.",
            commonErrors: ["Demand-side confused.", "No aims."],
          },
        },
        {
          id: "ecn10-u3-monetary-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Economy has 8% inflation and slow growth.",
          parts: [
            {
              label: "a",
              prompt: "What monetary policy would help inflation?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What supply-side policy would help growth?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain the conflict between the two aims.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy conflict",
                statement: "Inflation control vs growth.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Raise interest rates — reduce spending.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Controls demand → less inflation.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Education/training — skilled workforce.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Infrastructure investment — more capacity.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) High rates slow growth; supply-side takes time.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) raise rates (b) education/infrastructure (c) conflict: rates slow growth",
            commonErrors: ["Same policy.", "No conflict."],
          },
        },
      ],
    },
  ],
};
