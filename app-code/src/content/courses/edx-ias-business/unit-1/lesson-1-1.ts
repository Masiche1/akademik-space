import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "eiasbiz-u1-lesson-1-1",
  code: "1-1",
  title: "Business Objectives and Types",
  goal: "I CAN explain business objectives and classify business types.",
  standards: ["Edexcel IAS Business WBP01 Unit 1 — Business Activity"],
  vocabulary: [
    {
      term: "Business objective",
      definition:
        "Long-term aim guiding decisions — e.g., profit maximisation, growth, market share.",
    },
    {
      term: "Primary sector",
      definition: "Extraction of raw materials — agriculture, mining, fishing.",
    },
    {
      term: "Secondary sector",
      definition:
        "Manufacturing and construction — turning raw materials into products.",
    },
    {
      term: "Tertiary sector",
      definition: "Services — retail, banking, education, healthcare.",
    },
    {
      term: "Private sector",
      definition:
        "Businesses owned by individuals/shareholders, profit-driven.",
    },
    {
      term: "Public sector",
      definition: "Government-owned organisations providing public services.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u1-objectives",
      title: "Business Objectives",
      skill: "Identify and evaluate common business objectives.",
      lesson: {
        sections: [
          {
            heading: "Common objectives",
            body: "**Profit maximisation**: achieve highest possible profit — classic economic objective. **Growth**: increase size — revenue, employees, market share. **Survival**: remain trading during difficult times. **Market share**: dominate a market segment. **Social objectives**: ethical trading, environmental responsibility, employee welfare.\n\n**Conflicts**: profit vs growth (growth needs investment); short-term profit vs long-term sustainability; shareholder returns vs stakeholder interests.",
          },
          {
            heading: "Evaluating objectives",
            body: "Objectives depend on business type: sole traders may prioritise income; PLCs face shareholder pressure for returns; public sector focuses on service quality. **Stakeholder influence**: different groups pull objectives in different directions — e.g., workers want job security, owners want profit.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A startup reinvests all profit into expansion rather than paying dividends. Which objective?",
          solution:
            "Growth — prioritising size over short-term profit distribution.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-obj-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a business objective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A long-term aim guiding decisions" },
              { id: "b", text: "A legal requirement" },
              { id: "c", text: "A marketing tactic" },
              { id: "d", text: "A daily task" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business objective",
                statement: "Long-term aim.",
              },
            ],
            steps: [
              {
                reasoning: "Objective = long-term aim.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Long-term aim",
            commonErrors: ["Task confused."],
          },
        },
        {
          id: "eiasbiz-u1-obj-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of business objectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objectives",
                statement: "Profit, growth, survival, share.",
              },
            ],
            steps: [
              {
                reasoning: "Profit maximisation or growth.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Survival or market share.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Social objectives — ethics, environment.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Profit, growth, survival, share, social.",
            commonErrors: ["Only one.", "Not objectives."],
          },
        },
        {
          id: "eiasbiz-u1-obj-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one conflict between business objectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objective conflict",
                statement: "Trade-offs exist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Growth requires investment — reduces short-term profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Profit vs market share — price cuts gain share but cut margin.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Short-term vs long-term — cutting R&D boosts profit now, harms future.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example needed for full marks.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Growth vs profit, or short-term vs long-term.",
            commonErrors: ["No conflict.", "No example."],
          },
        },
        {
          id: "eiasbiz-u1-obj-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A family business wants to expand internationally.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two objectives this serves.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Identify one conflict with existing objectives.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest how to manage the conflict.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objective evaluation",
                statement: "Expansion trade-offs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Growth — larger market, revenue.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Market share — global presence.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Profit — economies of scale.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Short-term profit — expansion costs money.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Control — family values vs corporate growth.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Phased expansion — gradual investment.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning:
                  "(c) Balance — protect core business while expanding.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) growth+share (b) profit cost (c) phased approach",
            commonErrors: ["No conflict.", "No management."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u1-types",
      title: "Business Types and Sectors",
      skill: "Classify businesses by sector, ownership and size.",
      lesson: {
        sections: [
          {
            heading: "Sectors",
            body: "**Primary**: raw materials — farms, mines, fisheries. **Secondary**: manufacturing — factories, construction. **Tertiary**: services — shops, banks, schools. **Quaternary**: knowledge-based — research, IT, consulting (emerging).\n\n**Sector shift**: developed economies move from primary→tertiary over time — deindustrialisation.",
          },
          {
            heading: "Ownership and size",
            body: "**Sole trader**: one owner — simple, unlimited liability. **Partnership**: 2+ owners — shared risk/profit. **Ltd**: limited liability — shareholders. **PLC**: public limited — shares on stock exchange.\n\n**Size**: micro (<10 employees), small (<50), medium (<250), large.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A farmer selling wheat — which sector?",
          solution: "Primary — extracts raw material.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sector does a car manufacturer belong to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Secondary" },
              { id: "b", text: "Primary" },
              { id: "c", text: "Tertiary" },
              { id: "d", text: "Quaternary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary sector",
                statement: "Manufacturing.",
              },
            ],
            steps: [
              {
                reasoning: "Manufacturing = secondary.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Secondary",
            commonErrors: ["Primary confused."],
          },
        },
        {
          id: "eiasbiz-u1-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between a sole trader and a partnership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Sole trader vs partnership",
                statement: "Ownership and liability.",
              },
            ],
            steps: [
              {
                reasoning: "Sole trader: one owner; partnership: 2+ owners.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Partnership shares profit/loss and workload.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both have unlimited liability typically.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Ownership count, profit sharing.",
            commonErrors: ["Same thing.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u1-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business might choose limited company status.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limited liability",
                statement: "Personal assets protected.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Limited liability — shareholders risk only investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easier to raise capital — sell shares.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Separate legal identity — business can own property, contract.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Drawback: more regulation, accounts must be published.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Liability protection + capital raising; more regulation.",
            commonErrors: ["No benefit.", "No drawback."],
          },
        },
        {
          id: "eiasbiz-u1-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare sole trader, partnership and limited company for a new catering business.",
          parts: [
            { label: "a", prompt: "Give one advantage of each.", marks: 3 },
            { label: "b", prompt: "Give one disadvantage of each.", marks: 3 },
            {
              label: "c",
              prompt: "Recommend one with justification.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Business forms",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Sole trader: simple setup; partnership: shared skills; ltd: limited liability.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Sole trader: unlimited liability; partnership: disagreements; ltd: regulation/cost.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Any justified choice — e.g., partnership for shared skills.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) simplicity/sharing/liability (b) liability/disputes/regulation (c) justified",
            commonErrors: ["No comparison.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u1-stakeholders",
      title: "Stakeholders and Influence",
      skill: "Identify stakeholders and analyse their influence.",
      lesson: {
        sections: [
          {
            heading: "Stakeholder groups",
            body: "**Internal**: owners/shareholders, managers, employees. **External**: customers, suppliers, government, local community, pressure groups, competitors.\n\n**Stakeholder objectives differ**: owners want profit; employees want job security and pay; customers want quality/price; government wants tax and jobs; community wants environmental/social responsibility.",
          },
          {
            heading: "Influence and conflict",
            body: "Stakeholders influence through: ownership (shareholders vote), contracts (suppliers/customers), regulation (government), collective action (unions, pressure groups).\n\n**Conflict example**: shareholders want dividends; employees want wage rises — both compete for profit. **Balancing**: successful businesses manage competing demands.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A factory pollutes a river. Which stakeholders object?",
          solution:
            "Local community, environmental groups, government/regulators.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-stake-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a stakeholder?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Any group affected by or affecting the business",
              },
              { id: "b", text: "Only employees" },
              { id: "c", text: "Only customers" },
              { id: "d", text: "Only shareholders" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Affected by/affecting business.",
              },
            ],
            steps: [
              {
                reasoning: "Stakeholder = any interested party.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Any interested party",
            commonErrors: ["Shareholders only."],
          },
        },
        {
          id: "eiasbiz-u1-stake-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two internal and two external stakeholders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholders",
                statement: "Internal vs external.",
              },
            ],
            steps: [
              {
                reasoning: "Internal: owners, employees, managers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "External: customers, suppliers, government.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correctly classified.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "Internal: owners/employees; external: customers/suppliers.",
            commonErrors: ["All internal.", "Wrong examples."],
          },
        },
        {
          id: "eiasbiz-u1-stake-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how different stakeholders can have conflicting objectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder conflict",
                statement: "Competing demands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shareholders want dividends; employees want higher wages.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Customers want lower prices; suppliers want higher prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Government wants tax/jobs; community wants environment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Business must prioritise/balance demands.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Different groups want different things — conflict inevitable.",
            commonErrors: ["No conflict.", "No example."],
          },
        },
        {
          id: "eiasbiz-u1-stake-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A mining company plans to expand near a town.",
          parts: [
            {
              label: "a",
              prompt: "Identify four stakeholders affected.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain one concern each might have.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder analysis",
                statement: "Multiple perspectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Shareholders, employees, local community, government.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Also environmental groups, suppliers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Shareholders: profit; employees: jobs; community: environment/jobs; government: tax/regulation.",
                marks: 4,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 4 stakeholders (b) concerns each",
            commonErrors: ["Only owners.", "No concerns."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u1-external",
      title: "External Influences",
      skill: "Analyse how external factors affect businesses.",
      lesson: {
        sections: [
          {
            heading: "External factors (PESTLE)",
            body: "**Political**: government policy, stability, trade agreements. **Economic**: growth, inflation, interest rates, exchange rates, unemployment. **Social**: demographics, lifestyle, education, health. **Technological**: innovation, automation, digital disruption. **Legal**: employment law, consumer protection, health & safety. **Environmental**: climate change, sustainability, pollution regulations.\n\n**Each can be opportunity or threat** — depends on business and adaptation.",
          },
          {
            heading: "Impact examples",
            body: "**Economic**: recession reduces demand; strong currency hurts exports. **Technological**: automation cuts costs but loses jobs; e-commerce disrupts retailers. **Legal**: minimum wage raises costs; GDPR affects data handling. **Environmental**: carbon taxes raise costs; green demand creates markets.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Interest rates rise sharply. Effect on businesses?",
          solution: "Higher borrowing costs, reduced consumer spending.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-ext-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does PESTLE stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "People, Energy, Society, Tech, Law, Env" },
              {
                id: "b",
                text: "Political, Economic, Social, Technological, Legal, Environmental",
              },
              { id: "c", text: "Plan, Execute, Study, Test, Learn, Evaluate" },
              { id: "d", text: "Profit, Expense, Sales, Tax, Law, Env" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PESTLE",
                statement: "Six external factors.",
              },
            ],
            steps: [
              {
                reasoning: "PESTLE = six categories.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Political→Environmental",
            commonErrors: ["Wrong letters."],
          },
        },
        {
          id: "eiasbiz-u1-ext-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example of an economic external influence on business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economic influences",
                statement: "Growth, inflation, rates.",
              },
            ],
            steps: [
              {
                reasoning: "Economic growth — more demand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inflation — rising costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Interest rates — borrowing costs/consumer spending.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Growth, inflation, interest rates.",
            commonErrors: ["Not economic.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u1-ext-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how technological change can both help and harm a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology",
                statement: "Opportunity + threat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Help: automation cuts costs, e-commerce reaches customers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Help: new products/services possible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Harm: disrupts existing business model.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Harm: job losses, need to retrain.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Efficiency gains vs disruption/job losses.",
            commonErrors: ["Only benefit.", "Only harm."],
          },
        },
        {
          id: "eiasbiz-u1-ext-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A traditional retailer faces rising rents, online competition and changing consumer habits.",
          parts: [
            {
              label: "a",
              prompt: "Identify two external influences at work.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two adaptive strategies.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "External adaptation",
                statement: "Respond to forces.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Economic — rising rents increase costs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Technological/social — online shopping, changing habits.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Develop online presence — click-and-collect.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Differentiate — experience, service, niche products.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) costs+tech shift (b) online+differentiate",
            commonErrors: ["No influences.", "No adaptation."],
          },
        },
      ],
    },
  ],
};
