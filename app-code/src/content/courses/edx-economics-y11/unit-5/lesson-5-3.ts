import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "ecn11-u2-lesson-5-3",
  code: "5-3",
  title: "Economic Development",
  goal: "I CAN explain development, its measures and challenges.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy"],
  vocabulary: [
    {
      term: "Developed country",
      definition: "High income, industrialised, good living standards.",
    },
    {
      term: "Developing country",
      definition: "Lower income, less industrialised.",
    },
    {
      term: "HDI",
      definition: "Human Development Index — health, education, income.",
    },
    {
      term: "Absolute poverty",
      definition: "Living below minimum survival needs.",
    },
    {
      term: "Sustainable development",
      definition: "Meeting needs without compromising future.",
    },
  ],
  concepts: [
    {
      id: "ecn11-u2-dev",
      title: "Measuring Development",
      skill: "Use different measures of development and their limitations.",
      lesson: {
        sections: [
          {
            heading: "Development measures",
            body: "**GDP per capita**: average income — simple but ignores distribution, non-market activity, environment. **HDI**: combines life expectancy, education, income — more holistic. **Poverty measures**: % below poverty line.\n\n**Other indicators**: literacy rate, infant mortality, access to clean water, gender equality, environmental sustainability. **Composite measures** better capture wellbeing than GDP alone.",
          },
          {
            heading: "Challenges to development",
            body: "**Poverty trap**: low income → low saving → low investment → low income. **Debt burden**: repayments crowd out spending. **Corruption**: resources misallocated. **Conflict**: destroys infrastructure. **Poor governance**: weak institutions.\n\n**Overcoming**: aid, investment, trade, debt relief, good governance, education.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country has high GDP but low HDI. Why?",
          solution:
            "Income not reaching population — inequality, poor health/education.",
        },
      },
      questions: [
        {
          id: "ecn11-u2-dev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does HDI measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only trade" },
              { id: "b", text: "Only population" },
              { id: "c", text: "Only income" },
              { id: "d", text: "Health, education and income" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Health+education+income.",
              },
            ],
            steps: [
              {
                reasoning: "HDI = three dimensions.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Health, education, income",
            commonErrors: ["GDP confused."],
          },
        },
        {
          id: "ecn11-u2-dev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is GDP per capita a limited measure of development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limitations",
                statement: "Averages hide inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Average hides inequality — some very poor.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ignores health, education, environment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ignores non-market activity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Hides inequality; ignores health, education, environment.",
            commonErrors: ["Perfect measure.", "Only income."],
          },
        },
        {
          id: "ecn11-u2-dev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the poverty trap.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty trap",
                statement: "Low income → low saving → low investment.",
              },
            ],
            steps: [
              {
                reasoning: "Low income → people can't save.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low saving → low investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low investment → low productivity → low income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cycle repeats — hard to escape.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Low income → low saving → low investment → stays poor.",
            commonErrors: ["No cycle.", "Instant escape."],
          },
        },
        {
          id: "ecn11-u2-dev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country has high foreign debt.",
          parts: [
            { label: "a", prompt: "Explain the debt problem.", marks: 3 },
            { label: "b", prompt: "Suggest two solutions.", marks: 3 },
            { label: "c", prompt: "Give one risk of each solution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt burden",
                statement: "Repayments crowd out development spending.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Debt repayments consume export earnings.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Less money for health, education, infrastructure.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Debt relief/forgiveness.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Export promotion/earn more foreign currency.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Debt relief may not recur; exports face competition.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) repayments crowd out spending (b) relief+exports (c) may recur/competition",
            commonErrors: ["No problem.", "No solutions."],
          },
        },
      ],
    },
    {
      id: "ecn11-u2-aid",
      title: "Aid and Development Policy",
      skill: "Evaluate aid effectiveness and development strategies.",
      lesson: {
        sections: [
          {
            heading: "Types of aid",
            body: "**Bilateral**: country-to-country — grants, loans, technical assistance. **Multilateral**: through organisations (World Bank, UN, IMF) — pooled resources. **NGO**: non-government — often targeted at specific needs.\n\n**Project aid**: specific projects (schools, hospitals). **Programme aid**: general budget support. **Emergency aid**: disaster relief.",
          },
          {
            heading: "Evaluating aid",
            body: "**Benefits**: fills resource gap, builds infrastructure, emergency relief, technical expertise. **Problems**: dependency, corruption, may not reach poor, tied aid (must buy donor goods), debt burden if loans.\n\n**Effectiveness depends on**: governance, targeting, sustainability, local ownership.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Should developing country accept loan aid or grant aid?",
          solution: "Grant better — no repayment burden; loan may worsen debt.",
        },
      },
      questions: [
        {
          id: "ecn11-u2-aid-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between bilateral and multilateral aid?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Bilateral = country-to-country; multilateral = through organisations",
              },
              { id: "b", text: "Bilateral is larger" },
              { id: "c", text: "Same thing" },
              { id: "d", text: "Multilateral is free" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aid types",
                statement: "Bilateral vs multilateral.",
              },
            ],
            steps: [
              {
                reasoning: "Bilateral = direct; multilateral = pooled.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Country vs pooled",
            commonErrors: ["Same confused."],
          },
        },
        {
          id: "ecn11-u2-aid-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two problems with aid effectiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid problems",
                statement: "Dependency, corruption, targeting.",
              },
            ],
            steps: [
              {
                reasoning: "Dependency — countries rely on aid.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Corruption — aid misused by officials.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May not reach poor — elite capture.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Dependency, corruption, poor targeting.",
            commonErrors: ["Only benefits.", "Only one."],
          },
        },
        {
          id: "ecn11-u2-aid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why loan aid may be problematic for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Loan aid",
                statement: "Repayment burden vs grant.",
              },
            ],
            steps: [
              {
                reasoning: "Must repay with interest.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Repayments consume export earnings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May worsen debt burden.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Grant aid has no repayment — better for poor countries.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Repayments consume resources; grants better.",
            commonErrors: ["All aid same.", "No drawback."],
          },
        },
        {
          id: "ecn11-u2-aid-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Developed countries debate whether to give more aid.",
          parts: [
            {
              label: "a",
              prompt: "Give two arguments for more aid.",
              marks: 4,
            },
            { label: "b", prompt: "Give two arguments against.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid debate",
                statement: "Humanitarian vs effectiveness.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Reduces poverty/suffering — humanitarian.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Builds infrastructure/education — development.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Aid may be wasted/corrupt.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Dependency — may not solve root causes.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) poverty+infrastructure (b) waste+dependency",
            commonErrors: ["One side only.", "No balance."],
          },
        },
      ],
    },
  ],
};
