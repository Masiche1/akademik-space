import type { Lesson } from "../../../types.ts";

export const lesson393: Lesson = {
  id: "ciealbus-u3-lesson-3-3",
  code: "3-3",
  title: "Business Ethics and Social Responsibility",
  goal: "I CAN explain ethical issues and corporate social responsibility.",
  standards: ["Cambridge A Level Business 9707", "Paper 3: ethics"],
  
  vocabulary: [
    { term: "Business ethics", definition: "Moral principles guiding business behaviour." },
    { term: "Corporate social responsibility (CSR)", definition: "Business responsibility to society/environment." },
    { term: "Stakeholder theory", definition: "Business should consider all stakeholders." },
    { term: "Ethical dilemma", definition: "Situation requiring choice between competing values." },
    { term: "Sustainability", definition: "Meeting present needs without compromising future." },
    { term: "Triple bottom line", definition: "People, planet, profit." },
  ],
  concepts: [
    {
      id: "ciealbus-u3-s3-eth",
      title: "Ethics and CSR",
      skill: "Evaluate ethical business decisions.",
      lesson: {
        sections: [
          {
            heading: "Business ethics",
            body: "Ethical frameworks: utilitarianism (greatest good), deontology (duty), virtue ethics (character). Businesses face dilemmas: profit vs ethics, short vs long-term.",
          },
          {
            heading: "CSR",
            body: "Triple bottom line: people (social), planet (environmental), profit (economic). CSR can build reputation, attract customers, retain employees but may increase costs.",
          },
        ],
        keyFormulas: [
          { name: "Ethics", statement: "moral principles" },
          { name: "CSR", statement: "social responsibility" },
          { name: "Triple bottom line", statement: "people, planet, profit" },
        ],
        workedExample: {
          problem: "A company can cut costs by using cheaper but polluting suppliers. Ethical issues?",
          solution: "Environmental damage vs profit. CSR suggests sustainable suppliers. Short-term savings vs long-term reputation/regulatory risk.",
        },
      },
      questions: [
        {
          id: "ciealbus-u3-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is business ethics?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moral principles guiding business behaviour"
                    },
                    {
                              "id": "b",
                              "text": "A type of tax"
                    },
                    {
                              "id": "c",
                              "text": "A market structure"
                    },
                    {
                              "id": "d",
                              "text": "A business objective"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ethics",
                              "statement": "Moral principles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethics = moral principles for business.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Moral principles"
},
        },
        {
          id: "ciealbus-u3-et-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is CSR?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CSR",
                              "statement": "Social responsibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Business responsibility to society/environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Triple bottom line: people, planet, profit.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Social responsibility"
},
        },
        {
          id: "ciealbus-u3-et-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is an ethical dilemma in business? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dilemma",
                              "statement": "Competing values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Situation requiring choice between competing values.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: profit vs employee welfare.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "No easy 'right' answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Competing values example"
},
        },
        {
          id: "ciealbus-u3-et-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business ethics, CSR, stakeholder theory, ethical dilemma, sustainability, triple bottom line. (b) What is business ethics? (c) What is CSR? (d) What is stakeholder theory? (e) What is an ethical dilemma? Give example. (f) What is sustainability? (g) What is triple bottom line? (h) Evaluate whether businesses should prioritise ethics over profit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ethics",
                              "statement": "CSR, dilemmas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Moral principles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Social responsibility.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) All stakeholders matter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Competing values example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Future needs preserved.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) People, planet, profit.",
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
      id: "ciealbus-u3-et-notes",
      title: "Ethics — notes",
      summary: "Ethics=moral principles. CSR=people/planet/profit. Dilemmas require balancing competing values.",
      sections: [
        { heading: "Key idea", body: "Ethical business builds reputation but may sacrifice short-term profit." },
        { heading: "Frameworks", body: "Utilitarianism, deontology, virtue ethics guide decisions." },
      ],
    },
  ],
};
