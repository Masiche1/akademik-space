import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "eias-econ-u2-lesson-2-3",
  code: "2-3",
  title: "Inequality and Poverty",
  goal: "I CAN distinguish absolute and relative poverty and analyse inequality causes.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 2 — Market Failure"],
  vocabulary: [
    {
      term: "Absolute poverty",
      definition: "Lacking basic necessities — food, shelter, clean water.",
    },
    {
      term: "Relative poverty",
      definition: "Income below a threshold relative to society's average.",
    },
    {
      term: "Income inequality",
      definition: "Uneven distribution of income across population.",
    },
    {
      term: "Gini coefficient",
      definition:
        "Measure of income inequality — 0 perfect equality, 1 perfect inequality.",
    },
    {
      term: "Poverty trap",
      definition:
        "Poverty perpetuated by low income → low investment → low income.",
    },
    {
      term: "Wealth",
      definition: "Stock of assets owned — property, savings, investments.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u2-poverty",
      title: "Absolute and Relative Poverty",
      skill: "Distinguish poverty types and measure inequality.",
      lesson: {
        sections: [
          {
            heading: "Poverty types",
            body: "**Absolute poverty**: can't meet basic survival needs — UN measures ~$2.15/day. **Relative poverty**: income below % of national median — varies by country. UK threshold ~60% of median income.\n\n**Wealth vs income**: income = flow (per year); wealth = stock (assets). Wealth inequality typically greater than income inequality.",
          },
          {
            heading: "Measuring inequality",
            body: "**Gini coefficient**: 0 = perfect equality, 1 = one person has all. **Lorenz curve**: graph of cumulative income share vs population share — further from diagonal = more inequality.\n\n**Causes of inequality**: unequal education/skills, inheritance, discrimination, technological change favouring skilled workers, regressive taxation.",
          },
        ],
        keyFormulas: [
          {
            name: "Gini coefficient",
            statement: "0 = perfect equality, 1 = perfect inequality.",
          },
        ],
        workedExample: {
          problem:
            "Country A: Gini 0.25; Country B: Gini 0.45. Which is more unequal?",
          solution: "B — higher Gini = more inequality.",
        },
      },
      questions: [
        {
          id: "eias-econ-u2-pov-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is relative poverty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No income" },
              { id: "b", text: "Homelessness" },
              { id: "c", text: "Lacking basic necessities" },
              { id: "d", text: "Income below society's average threshold" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative poverty",
                statement: "Below median.",
              },
            ],
            steps: [
              {
                reasoning: "Relative = below societal standard.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Below average",
            commonErrors: ["Absolute confused."],
          },
        },
        {
          id: "eias-econ-u2-pov-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of income inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality causes",
                statement: "Multiple factors.",
              },
            ],
            steps: [
              {
                reasoning: "Unequal education — skilled workers earn more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inheritance — wealth passed down.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technology — automation favours skilled labour.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Education, inheritance, technology.",
            commonErrors: ["Only one.", "Wrong cause."],
          },
        },
        {
          id: "eias-econ-u2-pov-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what a Gini coefficient of 0.7 indicates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gini interpretation",
                statement: "High = unequal.",
              },
            ],
            steps: [
              {
                reasoning: "0.7 is high — close to 1 (perfect inequality).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Very uneven income distribution — few rich, many poor.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Compare: Nordic countries ~0.25-0.28, US ~0.39-0.41.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May indicate need for redistribution policies.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "High inequality — near-perfect concentration.",
            commonErrors: ["Equal.", "Low Gini."],
          },
        },
        {
          id: "eias-econ-u2-pov-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country has rising inequality alongside economic growth.",
          parts: [
            { label: "a", prompt: "Explain two possible causes.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two policies to reduce inequality.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality policy",
                statement: "Causes + remedies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Skill-biased technical change — automation favours educated.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Globalisation — jobs move to low-wage countries.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Progressive taxation + transfers — redistribute income.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Education/training — improve skills, raise earning power.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) tech+globalisation (b) tax+education",
            commonErrors: ["No cause.", "No policy."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u2-povertytrap",
      title: "Poverty Traps and Redistribution",
      skill: "Explain poverty traps and evaluate redistribution policies.",
      lesson: {
        sections: [
          {
            heading: "Poverty traps",
            body: "**Cycle**: low income → can't afford education/health → low skills → low income. **Intergenerational**: poverty passed to children — lack of resources limits opportunities. **Breaking the trap**: external intervention needed — education, healthcare, cash transfers.\n\n**Examples**: child labour (income vs school), malnutrition (health vs productivity), debt (interest vs investment).",
          },
          {
            heading: "Redistribution policies",
            body: "**Progressive taxation**: higher rates on higher incomes. **Cash transfers**: welfare payments, child benefit. **In-kind provision**: free healthcare, education. **Minimum wage**: legal wage floor.\n\n**Evaluation**: reduces inequality but may reduce work incentives (dependency), costs taxpayers, may not reach intended groups efficiently.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Child works instead of attending school due to family poverty. Trap type?",
          solution: "Intergenerational poverty trap.",
        },
      },
      questions: [
        {
          id: "eias-econ-u2-pt-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a poverty trap?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government poverty" },
              { id: "b", text: "Self-perpetuating cycle of poverty" },
              { id: "c", text: "Temporary poverty" },
              { id: "d", text: "Wealth inequality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poverty trap",
                statement: "Self-reinforcing.",
              },
            ],
            steps: [
              {
                reasoning: "Poverty trap = cycle perpetuates.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Self-perpetuating",
            commonErrors: ["Temporary confused."],
          },
        },
        {
          id: "eias-econ-u2-pt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways poverty perpetuates across generations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intergenerational poverty",
                statement: "Cycle.",
              },
            ],
            steps: [
              {
                reasoning: "Children miss education — work instead of school.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Poor health/nutrition — affects development.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low skills → low-paying jobs → same poverty.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Education, health, skills cycle.",
            commonErrors: ["Only one.", "Wealth."],
          },
        },
        {
          id: "eias-econ-u2-pt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one drawback of cash transfers as poverty reduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transfer drawbacks",
                statement: "Incentives.",
              },
            ],
            steps: [
              {
                reasoning: "May reduce work incentive — dependency trap.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Recipients may spend on non-essentials — alcohol, gambling.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Administrative cost — targeting and monitoring expensive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May not reach intended groups — leaks to non-poor.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Dependency, misuse, cost, targeting.",
            commonErrors: ["Perfect policy.", "No drawback."],
          },
        },
        {
          id: "eias-econ-u2-pt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country wants to break its poverty cycle.",
          parts: [
            { label: "a", prompt: "Suggest two interventions.", marks: 4 },
            {
              label: "b",
              prompt: "Explain why they work long-term.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty breaking",
                statement: "Invest in people.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Universal primary education — build human capital.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Healthcare access — improve productivity, reduce disease.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Education raises skills → higher wages → break cycle.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Health improves productivity → income growth.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) education+health (b) human capital",
            commonErrors: ["Cash only.", "No long-term."],
          },
        },
      ],
    },
  ],
};
