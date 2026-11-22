import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "eiasbiz-u1-lesson-1-3",
  code: "1-3",
  title: "Business Ethics and Social Responsibility",
  goal: "I CAN evaluate ethical issues and corporate social responsibility.",
  standards: ["Edexcel IAS Business WBP01 Unit 1 — Business Activity"],
  vocabulary: [
    {
      term: "Business ethics",
      definition: "Moral principles guiding business behaviour.",
    },
    {
      term: "Corporate social responsibility (CSR)",
      definition:
        "Business responsibility for social and environmental impacts.",
    },
    {
      term: "Fair trade",
      definition: "Trade giving producers fair prices and working conditions.",
    },
    {
      term: "Triple bottom line",
      definition: "Measuring profit, people and planet.",
    },
    {
      term: "Greenwashing",
      definition: "False claims of environmental responsibility.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u1-ethics",
      title: "Business Ethics",
      skill: "Identify ethical issues and evaluate responses.",
      lesson: {
        sections: [
          {
            heading: "Ethical issues",
            body: "**Fair treatment**: wages, working conditions, discrimination. **Honesty**: accurate advertising, truthful financial reporting. **Environment**: pollution, waste, sustainability. **Product safety**: dangerous goods, testing. **Data/privacy**: customer information protection.\n\n**Ethical frameworks**: utilitarian (greatest good), deontological (duty/rules), virtue ethics (character). **Codes of conduct**: formal rules businesses adopt.",
          },
          {
            heading: "Consequences of unethical behaviour",
            body: "**Legal**: fines, prosecution, lawsuits. **Reputation**: lost customers, boycotts, negative publicity. **Financial**: compensation costs, lost contracts. **Employee**: low morale, staff leaving.\n\n**Example**: VW emissions scandal — fines billions, reputation destroyed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Company advertises 'all natural' but uses chemicals. Issue?",
          solution: "Dishonest advertising — unethical and possibly illegal.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is business ethics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Following laws only" },
              { id: "b", text: "Moral principles guiding business behaviour" },
              { id: "c", text: "Making maximum profit" },
              { id: "d", text: "Marketing strategy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business ethics",
                statement: "Moral principles.",
              },
            ],
            steps: [
              {
                reasoning: "Ethics = moral principles.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Moral principles",
            commonErrors: ["Law confused."],
          },
        },
        {
          id: "eiasbiz-u1-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of unethical business practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unethical practices",
                statement: "Dishonesty, exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "False advertising — misleading claims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Exploiting workers — low pay, unsafe conditions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Environmental damage — pollution, waste.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "False ads, worker exploitation, pollution.",
            commonErrors: ["Legal issues only.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u1-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two consequences of unethical business behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethics consequences",
                statement: "Legal, reputational, financial.",
              },
            ],
            steps: [
              {
                reasoning: "Legal — fines, lawsuits, prosecution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reputation — lost customers, boycotts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Financial — compensation, lost contracts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Staff — low morale, high turnover.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Fines, reputation loss, financial damage.",
            commonErrors: ["No consequences.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u1-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A fashion brand discovers its supplier uses child labour.",
          parts: [
            { label: "a", prompt: "Identify the ethical issue.", marks: 3 },
            { label: "b", prompt: "Suggest two responses.", marks: 3 },
            {
              label: "c",
              prompt: "Evaluate CSR vs profit priority.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical dilemma",
                statement: "Profit vs responsibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Exploitation — child labour violates ethics/law.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Brand reputation at risk.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Terminate supplier contract.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Require ethical audit/certification.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) CSR costs short-term but protects long-term reputation.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) exploitation (b) terminate/audit (c) long-term view",
            commonErrors: ["Ignore issue.", "No evaluation."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u1-csr",
      title: "Corporate Social Responsibility",
      skill: "Evaluate CSR strategies and their business impact.",
      lesson: {
        sections: [
          {
            heading: "CSR dimensions",
            body: "**Economic**: profit, jobs, taxes — sustainable business. **Social**: employee welfare, community investment, diversity, human rights. **Environmental**: pollution reduction, sustainable sourcing, carbon footprint, waste management.\n\n**Triple bottom line**: profit + people + planet — measure all three.",
          },
          {
            heading: "CSR approaches",
            body: "**Philanthropy**: donations, charity work — costs money, good PR. **Integration**: CSR embedded in operations — sustainable sourcing, ethical supply chains. **Shared value**: CSR activities that also benefit business — e.g., energy efficiency saves costs.\n\n**Greenwashing**: claiming CSR without substance — unethical, damages trust.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Company funds school in local community. CSR type?",
          solution: "Social/philanthropic CSR.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-csr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is CSR?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Following regulations" },
              { id: "b", text: "Marketing strategy" },
              { id: "c", text: "Making maximum profit" },
              {
                id: "d",
                text: "Responsibility for social and environmental impacts",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSR",
                statement: "Social/environmental responsibility.",
              },
            ],
            steps: [
              {
                reasoning: "CSR = broader responsibility.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Social/environmental responsibility",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasbiz-u1-csr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of CSR activities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CSR activities",
                statement: "Environment, community, employees.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Environmental — reduce waste, sustainable sourcing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social — community investment, employee welfare.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ethical — fair trade, human rights.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Environment, community, ethics.",
            commonErrors: ["Only one.", "Not CSR."],
          },
        },
        {
          id: "eiasbiz-u1-csr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the triple bottom line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple bottom line",
                statement: "Profit+people+planet.",
              },
            ],
            steps: [
              {
                reasoning: "Economic — profit, financial performance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social — employee welfare, community.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Environmental — sustainability, pollution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "All three measured, not just profit.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Measure profit, people and planet.",
            commonErrors: ["Profit only.", "No dimensions."],
          },
        },
        {
          id: "eiasbiz-u1-csr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate whether CSR benefits or harms business performance.",
          parts: [
            {
              label: "a",
              prompt: "Give two arguments it benefits business.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Give two arguments it harms business.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CSR evaluation",
                statement: "Long-term vs short-term.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Reputation — attracts customers, investors.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Efficiency — energy saving reduces costs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Costs — reduces short-term profit.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Greenwashing risk — accusations if insincere.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) reputation+efficiency (b) costs+greenwashing",
            commonErrors: ["One side.", "No balance."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u1-global",
      title: "International Business",
      skill: "Explain globalisation, trade and multinational challenges.",
      lesson: {
        sections: [
          {
            heading: "Globalisation",
            body: "**Globalisation**: increasing interconnectedness of world economies — trade, investment, technology, culture. **Drivers**: transport/communication tech, trade liberalisation, multinational corporations.\n\n**Benefits**: larger markets, economies of scale, technology transfer, cheaper goods. **Costs**: job losses in developed countries, exploitation in developing, environmental damage, cultural homogenisation.",
          },
          {
            heading: "International challenges",
            body: "**Exchange rates**: currency fluctuations affect prices/profits. **Trade barriers**: tariffs, quotas, regulations. **Cultural differences**: language, customs, business practices. **Political risk**: instability, nationalisation, corruption.\n\n**Multinationals**: companies operating in multiple countries — benefits host countries (jobs, investment) but may exploit cheap labour.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "UK exporter faces strong pound. Effect?",
          solution: "Exports more expensive — less competitive.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-glob-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is globalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Climate change" },
              { id: "b", text: "International travel" },
              {
                id: "c",
                text: "Increasing interconnectedness of world economies",
              },
              { id: "d", text: "Population growth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "Interconnected economies.",
              },
            ],
            steps: [
              {
                reasoning: "Globalisation = economic integration.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Interconnected economies",
            commonErrors: ["Travel confused."],
          },
        },
        {
          id: "eiasbiz-u1-glob-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of globalisation for businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation benefits",
                statement: "Markets, scale, tech.",
              },
            ],
            steps: [
              {
                reasoning: "Access to larger international markets.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Economies of scale — bigger production.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technology and knowledge transfer.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Markets, scale, technology.",
            commonErrors: ["Only costs.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u1-glob-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two challenges for businesses operating internationally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "International challenges",
                statement: "Currency, culture, politics.",
              },
            ],
            steps: [
              {
                reasoning: "Exchange rate risk — currency fluctuations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cultural differences — language, customs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Trade barriers — tariffs, regulations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Political risk — instability, nationalisation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Currency, culture, trade barriers, politics.",
            commonErrors: ["Only benefits.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u1-glob-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate whether globalisation benefits developing countries.",
          parts: [
            { label: "a", prompt: "Give two benefits.", marks: 4 },
            { label: "b", prompt: "Give two drawbacks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation evaluation",
                statement: "Opportunity vs exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Foreign investment — jobs, capital.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Export markets — sell goods globally.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Exploitation — cheap labour, sweatshops.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Dependency — reliant on foreign capital.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) investment+markets (b) exploitation+dependency",
            commonErrors: ["One side.", "No evaluation."],
          },
        },
      ],
    },
  ],
};
