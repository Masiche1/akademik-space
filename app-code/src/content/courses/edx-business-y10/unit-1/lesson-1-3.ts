import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ebz10-u1-lesson-1-3",
  code: "1-3",
  title: "Stakeholders and Social Responsibility",
  goal: "I CAN identify stakeholders and explain social responsibility.",
  standards: [
    "Edexcel IGCSE Business 4BS0 — Enterprise and Business Objectives",
  ],
  vocabulary: [
    {
      term: "Stakeholder",
      definition: "Anyone affected by or able to affect a business.",
    },
    {
      term: "Shareholder",
      definition: "Owner of shares in a company — expects profit/dividends.",
    },
    {
      term: "Corporate social responsibility (CSR)",
      definition: "Business responsibility for social/environmental impact.",
    },
    {
      term: "Ethical trading",
      definition: "Fair treatment of workers and suppliers.",
    },
  ],
  concepts: [
    {
      id: "ebz10-u1-stakeholders",
      title: "Stakeholders",
      skill: "Identify stakeholders and their different objectives.",
      lesson: {
        sections: [
          {
            heading: "Internal stakeholders",
            body: "**Owners/shareholders**: want profit, growth, dividends. **Managers**: want performance targets met, job security. **Employees**: want wages, conditions, job security, training. **All internal** — directly involved in running the business.",
          },
          {
            heading: "External stakeholders",
            body: "**Customers**: want quality, value, service. **Suppliers**: want payment on time, long-term contracts. **Government**: wants tax, jobs, legal compliance. **Local community**: wants jobs, minimal pollution. **Pressure groups**: want ethical/environmental behaviour.\n\n**Conflicts**: shareholders want max profit → may cut wages (bad for employees) or raise prices (bad for customers). Businesses must balance all interests.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A factory pollutes a river. Who are affected stakeholders?",
          solution:
            "Local community (pollution), government (environmental law), pressure groups, customers (reputation).",
        },
      },
      questions: [
        {
          id: "ebz10-u1-stakeholders-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is an internal stakeholder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Employee" },
              { id: "b", text: "Supplier" },
              { id: "c", text: "Government" },
              { id: "d", text: "Customer" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal stakeholder",
                statement:
                  "Directly involved in running the business — owners, managers, employees.",
              },
            ],
            steps: [
              {
                reasoning: "Employees are internal stakeholders.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Employee",
            commonErrors: ["External confused."],
          },
        },
        {
          id: "ebz10-u1-stakeholders-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two objectives that shareholders and employees might disagree on.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder conflict",
                statement: "Different stakeholders want different outcomes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shareholders want max profit; employees want higher wages.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Shareholders may want cost cuts; employees want job security.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both valid but conflicting.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Profit vs wages; cost cuts vs job security.",
            commonErrors: ["Same objectives assumed.", "Only one conflict."],
          },
        },
        {
          id: "ebz10-u1-stakeholders-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business must consider all stakeholders, not just shareholders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder balance",
                statement:
                  "All stakeholders affect and are affected by the business.",
              },
            ],
            steps: [
              {
                reasoning: "Employees produce the goods/services.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Customers buy the products — bad treatment loses sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Suppliers provide inputs — bad treatment disrupts supply.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Government can fine/close business for non-compliance.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "All stakeholders affect business success — ignoring them causes problems.",
            commonErrors: ["Shareholders only.", "No consequences."],
          },
        },
        {
          id: "ebz10-u1-stakeholders-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A fast-food chain is criticised for unhealthy food and plastic waste.",
          parts: [
            {
              label: "a",
              prompt: "Identify three stakeholders affected.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain what each stakeholder wants from the business.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest one way the business could respond.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder response",
                statement: "Balance stakeholder needs through CSR actions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Customers, local community, pressure groups (any three).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Third stakeholder identified.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Customers want healthier options.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Community/pressure groups want less plastic.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Shareholders want continued profit.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Offer healthier menu / use recyclable packaging.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) customers/community/pressure groups (b) health/plastic/profit (c) healthier menu/recyclable packaging",
            commonErrors: ["Missing stakeholder.", "No action."],
          },
        },
      ],
    },
    {
      id: "ebz10-u1-csr",
      title: "Corporate Social Responsibility",
      skill: "Understand CSR and ethical business practices.",
      lesson: {
        sections: [
          {
            heading: "What is CSR?",
            body: "**CSR** = businesses taking responsibility for their impact on society and environment — beyond just profit. Includes: fair treatment of workers, environmental protection, ethical sourcing, community investment, honest marketing.\n\n**Why businesses do CSR**: improves reputation, attracts customers/investors, motivates staff, meets legal requirements, future-proofs against regulation.",
          },
          {
            heading: "Ethical issues",
            body: "**Fair trade**: paying suppliers fair prices, ensuring workers' rights. **Environmental**: reducing waste, carbon emissions, sustainable sourcing. **Marketing ethics**: honest advertising, not targeting vulnerable groups. **Labour**: safe conditions, fair wages, no child labour.\n\n**CSR vs profit**: sometimes costs more short-term but builds long-term reputation. Bad CSR → boycotts, fines, damage to brand.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A clothing brand discovers its supplier uses child labour. What should it do?",
          solution:
            "Stop sourcing, investigate, implement ethical sourcing policy, audit suppliers regularly.",
        },
      },
      questions: [
        {
          id: "ebz10-u1-csr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does CSR stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Corporate Social Responsibility" },
              { id: "b", text: "Customer Service Rating" },
              { id: "c", text: "Cost Saving Reduction" },
              { id: "d", text: "Company Share Returns" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSR",
                statement:
                  "Corporate Social Responsibility — responsibility for social/environmental impact.",
              },
            ],
            steps: [
              {
                reasoning: "CSR = Corporate Social Responsibility.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Corporate Social Responsibility",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "ebz10-u1-csr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why a business might invest in CSR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CSR benefits",
                statement:
                  "Reputation, customers, staff motivation, legal compliance.",
              },
            ],
            steps: [
              {
                reasoning: "Improves reputation and attracts customers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Motivates staff and improves recruitment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Meets legal requirements, avoids fines.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Reputation, customer attraction, staff motivation, compliance.",
            commonErrors: ["Only cost mentioned.", "No business benefit."],
          },
        },
        {
          id: "ebz10-u1-csr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the potential conflict between CSR and profit maximisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CSR vs profit",
                statement: "Ethical practices often cost more short-term.",
              },
            ],
            steps: [
              {
                reasoning: "Fair wages, ethical sourcing cost more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Environmental measures require investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Short-term profit reduced.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But long-term reputation may increase profits.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "CSR costs more short-term but builds long-term reputation/profit.",
            commonErrors: ["No conflict.", "Only one side."],
          },
        },
        {
          id: "ebz10-u1-csr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A chocolate company is accused of using child labour on farms.",
          parts: [
            { label: "a", prompt: "Identify the ethical issue.", marks: 2 },
            {
              label: "b",
              prompt: "Explain the impact on stakeholders.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest three actions the company could take.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical response",
                statement:
                  "Investigate, remediate, implement ethical sourcing.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Child labour — violation of workers' rights.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Customers lose trust, sales may fall.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Workers exploited — harm to children.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Shareholders lose value, reputation damage.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Investigate/suspend supplier, audit farms, implement fair trade.",
                marks: 3,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) child labour (b) customers/workers/shareholders harmed (c) investigate+audit+fair trade",
            commonErrors: ["No investigation.", "No stakeholder impact."],
          },
        },
      ],
    },
  ],
};
