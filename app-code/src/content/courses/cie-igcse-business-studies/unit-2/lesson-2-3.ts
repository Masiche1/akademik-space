import type { Lesson } from "../../../types.ts";

export const lesson263: Lesson = {
  id: "cieibs-u2-lesson-2-3",
  code: "2-3",
  title: "Business Ethics and Corporate Social Responsibility",
  goal: "I CAN explain ethical issues, CSR and stakeholder responsibilities.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: ethics and CSR"],
  
  vocabulary: [
    { term: "Business ethics", definition: "Principles of right and wrong in business." },
    { term: "Corporate social responsibility (CSR)", definition: "Business responsibility to society/environment." },
    { term: "Fair trade", definition: "Trade ensuring fair prices/conditions for producers." },
    { term: "Sustainability", definition: "Meeting present needs without compromising future." },
    { term: "Ethical consumerism", definition: "Buying based on ethical considerations." },
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
          problem: "A clothing company uses sweatshop labour. What are the ethical issues?",
          solution: "Exploitation of workers, unsafe conditions, unfair wages — violates business ethics. CSR would require fair treatment and safe conditions.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-eth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is corporate social responsibility?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Business responsibility to society/environment"
                    },
                    {
                              "id": "b",
                              "text": "A type of tax"
                    },
                    {
                              "id": "c",
                              "text": "A marketing strategy"
                    },
                    {
                              "id": "d",
                              "text": "A legal requirement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CSR",
                              "statement": "Social/environmental responsibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CSR = responsibility beyond profit to society/environment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Social/environmental responsibility"
},
        },
        {
          id: "cieibs-u2-eth-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the triple bottom line?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Triple bottom line",
                              "statement": "People, planet, profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "People (social), planet (environmental), profit (economic).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Three dimensions of sustainability.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "People, planet, profit"
},
        },
        {
          id: "cieibs-u2-eth-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is fair trade? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fair trade",
                              "statement": "Fair producer conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trade ensuring fair prices/conditions for producers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: fair trade coffee/chocolate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Supports sustainable livelihoods.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Fair producer conditions"
},
        },
        {
          id: "cieibs-u2-eth-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business ethics, CSR, fair trade, sustainability, ethical consumerism, triple bottom line. (b) What is business ethics? (c) What is CSR? (d) What is fair trade? (e) What is the triple bottom line? (f) Give an ethical business issue. (g) Give an unethical business practice. (h) Evaluate whether businesses should prioritise ethics over profit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ethics/CSR",
                              "statement": "Ethical practices, responsibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Right/wrong principles in business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Responsibility beyond profit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Fair producer conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) People, planet, profit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid ethical issue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid unethical practice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Business ethics and CSR."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-eth-notes",
      title: "Ethics/CSR — notes",
      summary: "Ethics=right/wrong; CSR=responsibility beyond profit; triple bottom line=people/planet/profit.",
      sections: [
        { heading: "Key idea", body: "Ethical businesses balance profit with social/environmental responsibility." },
        { heading: "Fair trade", body: "Ensures fair prices and conditions for producers in developing countries." },
      ],
    },
  ],
};
