import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cieids-u2-lesson-2-2",
  code: "2-2",
  title: "Aid and debt",
  goal: "I CAN explain the role of aid and debt in development and evaluate their effectiveness.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 2: Development strategies",
  ],
  vocabulary: [
    {
      term: "Aid",
      definition:
        "Resources transferred from rich to poor countries — grants, loans, food, technical help.",
    },
    {
      term: "ODA",
      definition:
        "Official Development Assistance — government aid targeting development.",
    },
    {
      term: "Debt",
      definition: "Money borrowed that must be repaid with interest.",
    },
    {
      term: "Debt relief",
      definition: "Cancellation or reduction of a country's debts.",
    },
    {
      term: "Tied aid",
      definition:
        "Aid requiring the recipient to spend it on goods/services from the donor country.",
    },
    {
      term: "Sustainable development",
      definition:
        "Meeting present needs without compromising future generations' ability to meet theirs.",
    },
  ],
  concepts: [
    {
      id: "cieids-u2-aiddebt",
      title: "Aid, debt and development",
      skill:
        "Evaluate the roles of aid and debt relief in promoting development.",
      lesson: {
        sections: [
          {
            heading: "Types and purposes of aid",
            body: "**ODA** includes grants (no repayment), loans (repayable) and in-kind aid (food, medicine). Aid funds infrastructure, health, education and emergency relief. **Tied aid** must be spent on donor-country goods — boosting donor exports but often inefficient for recipients. **Conditional aid** requires policy changes (e.g. privatisation) that may not suit local needs.",
          },
          {
            heading: "The debt problem",
            body: "Many developing countries borrowed heavily in the 1970s-80s but couldn't repay when commodity prices fell and interest rates rose — creating a **debt crisis**. Debt payments consume resources needed for health, education and investment. **Debt relief** (e.g. HIPC initiative) cancels debts of the poorest countries, freeing funds for development — but critics argue it rewards bad governance.",
          },
          {
            heading: "Does aid work?",
            body: "Aid can be **effective** — vaccination campaigns, school building, disaster relief save lives and build capacity. But it can also be **ineffective** — corrupt governments embezzle funds, tied aid wastes resources on unsuitable projects, and aid dependence can undermine local production. Evidence suggests aid works best when targeted at governance, health and education in stable environments.",
          },
        ],
        keyFormulas: [
          {
            name: "Aid forms",
            statement:
              "Grants + loans + in-kind; tied or untied; conditional or not",
          },
          {
            name: "Debt trap",
            statement:
              "Borrow → can't repay → debt service crowds out development spending",
          },
        ],
        workedExample: {
          problem:
            "A country spends 30% of its budget on debt interest. What is the opportunity cost?",
          solution:
            "That 30% could fund health clinics, schools or infrastructure — debt service crowds out development spending, slowing progress.",
        },
      },
      questions: [
        {
          id: "cieids-u2-ad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tied aid is aid that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is given as a grant with no strings" },
              {
                id: "b",
                text: "Must be spent on goods/services from the donor country",
              },
              { id: "c", text: "Requires political reforms" },
              { id: "d", text: "Is only food aid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tied aid",
                statement:
                  "Aid conditional on purchasing from the donor country.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tied aid benefits donor exporters but may be inefficient for recipients who could buy cheaper elsewhere.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Must be spent on donor-country goods/services.",
            commonErrors: [
              "Confusing tied aid with conditional aid (policy conditions).",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a heavy debt burden can prevent development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt trap",
                statement:
                  "Debt service crowds out development spending and deters investment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest and principal payments consume a large share of government revenue and export earnings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Money that could fund health, education and infrastructure is diverted to creditors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High debt also deters new investment and keeps countries dependent on further borrowing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Debt payments crowd out development spending and trap countries in a cycle of borrowing.",
            commonErrors: [
              "Saying debt is always bad — productive borrowing can help; unmanageable debt is the problem.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of how aid can support development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Aid contributions",
                statement:
                  "Health, education, infrastructure and emergency relief.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Health aid: vaccination campaigns, clinics and medicines reduce disease and improve life expectancy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Education/infrastructure: building schools, training teachers and funding roads enables long-term development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Emergency relief: food aid in famines saves lives immediately, though it is short-term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Health programmes, education/infrastructure and emergency relief.",
            commonErrors: [
              "Only mentioning emergency relief without development-oriented aid.",
            ],
          },
        },
        {
          id: "cieids-u2-ad-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that aid is essential for developing countries.",
          parts: [
            {
              label: "a",
              prompt: "Give two arguments that aid is necessary.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate arguments that aid can be ineffective or harmful.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Aid debate",
                statement:
                  "Life-saving resource transfer vs dependency, corruption and inefficiency.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Poor countries lack capital for health, education and infrastructure — aid fills the gap.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Emergency aid prevents famine and disease — immediate life-saving that markets cannot provide.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Technical assistance transfers skills and knowledge poor countries lack.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Ineffective: corruption embezzles funds; tied aid wastes money on unsuitable donor goods.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Harmful: aid dependence can undermine local production and create reliance.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: aid is necessary but not sufficient — effectiveness depends on governance, targeting and accountability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Fills resource gaps, saves lives, transfers skills. (b) Corruption, tied aid, dependency — works only with good governance.",
            commonErrors: [
              "One-sided verdict on aid without weighing conditions.",
            ],
          },
        },
      ],
    },
  ],
};
