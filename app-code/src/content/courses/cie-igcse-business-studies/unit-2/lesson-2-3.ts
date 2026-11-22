import type { Lesson } from "../../../types.ts";

export const lesson263: Lesson = {
  id: "cieibs-u2-lesson-2-3",
  code: "2-3",
  title: "Business Ethics and Corporate Social Responsibility",
  goal: "I CAN explain ethical issues, CSR and stakeholder responsibilities.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 2: ethics and CSR",
  ],

  vocabulary: [
    {
      term: "Business ethics",
      definition: "Principles of right and wrong in business.",
    },
    {
      term: "Corporate social responsibility (CSR)",
      definition: "Business responsibility to society/environment.",
    },
    {
      term: "Fair trade",
      definition: "Trade ensuring fair prices/conditions for producers.",
    },
    {
      term: "Sustainability",
      definition: "Meeting present needs without compromising future.",
    },
    {
      term: "Ethical consumerism",
      definition: "Buying based on ethical considerations.",
    },
    { term: "Triple bottom line", definition: "People, planet, profit." },
  ],
  concepts: [
    {
      id: "cieibs-u2-s3-eth",
      title: "Ethics and CSR",
      skill: "Understand ethical business practices.",
      lesson: {
        sections: [
          {
            heading: "Business ethics",
            body: "Ethical issues: fair wages, safe working conditions, environmental responsibility, honest advertising, anti-corruption. Unethical practices: exploitation, pollution, misleading claims, tax avoidance.",
          },
          {
            heading: "CSR",
            body: "Businesses have responsibilities beyond profit: to employees (fair treatment), customers (quality/safety), environment (sustainability), community (employment/support). Triple bottom line: people, planet, profit.",
          },
        ],
        keyFormulas: [
          { name: "Ethics", statement: "right/wrong principles" },
          { name: "CSR", statement: "responsibility beyond profit" },
          { name: "Triple bottom line", statement: "people, planet, profit" },
        ],
        workedExample: {
          problem:
            "A clothing company uses sweatshop labour. What are the ethical issues?",
          solution:
            "Exploitation of workers, unsafe conditions, unfair wages — violates business ethics. CSR would require fair treatment and safe conditions.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-eth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is corporate social responsibility?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of tax",
              },
              {
                id: "b",
                text: "Business responsibility to society/environment",
              },
              {
                id: "c",
                text: "A marketing strategy",
              },
              {
                id: "d",
                text: "A legal requirement",
              },
            ],
            correctChoiceId: "b",
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
                reasoning:
                  "CSR = responsibility beyond profit to society/environment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Social/environmental responsibility",
          },
        },
        {
          id: "cieibs-u2-eth-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the triple bottom line?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple bottom line",
                statement: "People, planet, profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People (social), planet (environmental), profit (economic).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Three dimensions of sustainability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "People, planet, profit",
          },
        },
        {
          id: "cieibs-u2-eth-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is fair trade? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fair trade",
                statement: "Fair producer conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trade ensuring fair prices/conditions for producers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: fair trade coffee/chocolate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supports sustainable livelihoods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fair producer conditions",
          },
        },
        {
          id: "cieibs-u2-eth-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business ethics, CSR, fair trade, sustainability, ethical consumerism, triple bottom line. (b) What is business ethics? (c) What is CSR? (d) What is fair trade? (e) What is the triple bottom line? (f) Give an ethical business issue. (g) Give an unethical business practice. (h) Evaluate whether businesses should prioritise ethics over profit.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ethics/CSR",
                statement: "Ethical practices, responsibility.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Right/wrong principles in business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Responsibility beyond profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Fair producer conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) People, planet, profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Valid ethical issue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid unethical practice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business ethics and CSR.",
          },
        },
        {
          id: "cieibs-u2-eth-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is corporate social responsibility (CSR)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paying shareholders dividends" },
              { id: "b", text: "Maximising profit above all else" },
              { id: "c", text: "Following only legal minimums" },
              {
                id: "d",
                text: "A business's responsibility to society and the environment beyond profit",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSR",
                statement:
                  "Responsibility to society and environment beyond profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CSR covers employees, customers, environment and community.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Responsibility beyond profit",
          },
        },
        {
          id: "cieibs-u2-eth-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'triple bottom line' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profit, price, promotion" },
              { id: "b", text: "Pay, profit, purchases" },
              { id: "c", text: "People, planet, profit" },
              { id: "d", text: "Production, people, property" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple bottom line",
                statement: "People, planet, profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The three Ps of social, environmental and financial performance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "People, planet, profit",
          },
        },
        {
          id: "cieibs-u2-eth-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fair trade coffee sells at a base price of $10 per kg plus a 20% fair trade premium. (a) Calculate the fair trade price per kg. (b) Calculate the revenue from selling 500 kg.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12, unit: "$/kg" },
              { label: "b", answer: 6000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fair trade premium",
                statement: "Price = base x (1 + premium rate).",
              },
            ],
            steps: [
              {
                reasoning: "Price = 10 x 1.20 = $12 per kg.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revenue = 12 x 500 = $6,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $12/kg, b) $6,000",
          },
        },
        {
          id: "cieibs-u2-eth-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of unethical business practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unethical practices",
                statement: "Violations of right/wrong principles in business.",
              },
            ],
            steps: [
              {
                reasoning: "E.g. exploitation of workers or unsafe conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "E.g. misleading advertising, pollution or tax avoidance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Any two valid unethical practices",
          },
        },
        {
          id: "cieibs-u2-eth-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ethical consumerism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shopping only online" },
              { id: "b", text: "Buying only the cheapest products" },
              { id: "c", text: "Buying in bulk to save money" },
              {
                id: "d",
                text: "Making purchasing decisions based on ethical considerations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethical consumerism",
                statement: "Buying based on ethical considerations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consumers choose products aligned with their values.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Buying based on ethical considerations",
          },
        },
        {
          id: "cieibs-u2-eth-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A factory produces 1,000 units emitting 5 kg of CO2 each. (a) Calculate total emissions. (b) If a new process cuts emissions by 30%, calculate the new total emissions.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5000, unit: "kg CO2" },
              { label: "b", answer: 3500, unit: "kg CO2" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Emissions calculation",
                statement: "Total = units x per-unit emissions.",
              },
            ],
            steps: [
              {
                reasoning: "Total = 1000 x 5 = 5,000 kg CO2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New total = 5000 x 0.70 = 3,500 kg CO2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 5,000 kg, b) 3,500 kg",
          },
        },
        {
          id: "cieibs-u2-eth-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by sustainability in business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability",
                statement:
                  "Meeting present needs without compromising future ones.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Using resources in a way that does not exhaust them for future generations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g. renewable energy or reducing waste/pollution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Meeting present needs without harming future ones",
          },
        },
        {
          id: "cieibs-u2-eth-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an unethical practice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Misleading advertising claims" },
              { id: "b", text: "Honest product descriptions" },
              { id: "c", text: "Paying fair wages" },
              { id: "d", text: "Recycling waste" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unethical practice",
                statement: "Dishonest or harmful business behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Misleading claims deceive customers — clearly unethical.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Misleading advertising claims",
          },
        },
        {
          id: "cieibs-u2-eth-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A living wage is set at $12 per hour for 160 hours per month. (a) Calculate the monthly living wage. (b) Calculate the annual living wage.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1920, unit: "$" },
              { label: "b", answer: 23040, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Wage calculation",
                statement: "Wage = rate x hours; annual = monthly x 12.",
              },
            ],
            steps: [
              {
                reasoning: "Monthly = 12 x 160 = $1,920.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Annual = 1920 x 12 = $23,040.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $1,920, b) $23,040",
          },
        },
        {
          id: "cieibs-u2-eth-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether a fast-fashion company should adopt fair trade and sustainable sourcing, considering costs and reputation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "CSR evaluation",
                statement:
                  "Weigh ethical gains against cost and competitiveness.",
              },
            ],
            steps: [
              {
                reasoning: "Higher sourcing costs may reduce profit margins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improved reputation and appeal to ethical consumers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reduced risk of scandals and regulation; worker welfare gains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justified conclusion on balance of costs and benefits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Higher costs vs reputation and risk reduction — judgement required",
          },
        },
        {
          id: "cieibs-u2-eth-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does fair trade aim to ensure for producers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum company profits" },
              { id: "b", text: "Free products for consumers" },
              { id: "c", text: "The lowest possible prices" },
              { id: "d", text: "Fair prices and decent working conditions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fair trade",
                statement:
                  "Trade ensuring fair prices and conditions for producers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fair trade guarantees producers reasonable returns.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fair prices and decent working conditions",
          },
        },
        {
          id: "cieibs-u2-eth-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define business ethics, CSR, fair trade, sustainability, ethical consumerism, triple bottom line. (b) What is CSR? (c) What is the triple bottom line? (d) Give two examples of unethical practices. (e) A product costs $25 with a 15% fair trade premium. Calculate the fair trade price. (f) Explain two benefits of CSR for a business. (g) Explain one ethical issue in supply chains. (h) Evaluate whether ethical behaviour always benefits a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ethics and CSR",
                statement: "Concepts and evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Responsibility to society/environment beyond profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) People, planet, profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Any two valid unethical practices.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "(e) 25 x 1.15 = $28.75.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "(f) Reputation, customer loyalty, reduced risk — any two valid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) E.g. sweatshop labour, unsafe conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced judgement — costs vs benefits of ethics.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ethics, CSR concepts and evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-eth-notes",
      title: "Ethics/CSR — notes",
      summary:
        "Ethics=right/wrong; CSR=responsibility beyond profit; triple bottom line=people/planet/profit.",
      sections: [
        {
          heading: "Key idea",
          body: "Ethical businesses balance profit with social/environmental responsibility.",
        },
        {
          heading: "Fair trade",
          body: "Ensures fair prices and conditions for producers in developing countries.",
        },
      ],
    },
  ],
};
