import type { Lesson } from "../../../types.ts";

export const lesson393: Lesson = {
  id: "ciealbus-u3-lesson-3-3",
  code: "3-3",
  title: "Business Ethics and Social Responsibility",
  goal: "I CAN explain ethical issues and corporate social responsibility.",
  standards: ["Cambridge A Level Business 9707", "Paper 3: ethics"],

  vocabulary: [
    {
      term: "Business ethics",
      definition: "Moral principles guiding business behaviour.",
    },
    {
      term: "Corporate social responsibility (CSR)",
      definition: "Business responsibility to society/environment.",
    },
    {
      term: "Stakeholder theory",
      definition: "Business should consider all stakeholders.",
    },
    {
      term: "Ethical dilemma",
      definition: "Situation requiring choice between competing values.",
    },
    {
      term: "Sustainability",
      definition: "Meeting present needs without compromising future.",
    },
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
          problem:
            "A company can cut costs by using cheaper but polluting suppliers. Ethical issues?",
          solution:
            "Environmental damage vs profit. CSR suggests sustainable suppliers. Short-term savings vs long-term reputation/regulatory risk.",
        },
      },
      questions: [
        {
          id: "ciealbus-u3-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is business ethics?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A business objective",
              },
              {
                id: "b",
                text: "A market structure",
              },
              {
                id: "c",
                text: "Moral principles guiding business behaviour",
              },
              {
                id: "d",
                text: "A type of tax",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethics",
                statement: "Moral principles.",
              },
            ],
            steps: [
              {
                reasoning: "Ethics = moral principles for business.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Moral principles",
          },
        },
        {
          id: "ciealbus-u3-et-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is CSR?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSR",
                statement: "Social responsibility.",
              },
            ],
            steps: [
              {
                reasoning: "Business responsibility to society/environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Triple bottom line: people, planet, profit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Social responsibility",
          },
        },
        {
          id: "ciealbus-u3-et-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is an ethical dilemma in business? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dilemma",
                statement: "Competing values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Situation requiring choice between competing values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: profit vs employee welfare.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No easy 'right' answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Competing values example",
          },
        },
        {
          id: "ciealbus-u3-et-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business ethics, CSR, stakeholder theory, ethical dilemma, sustainability, triple bottom line. (b) What is business ethics? (c) What is CSR? (d) What is stakeholder theory? (e) What is an ethical dilemma? Give example. (f) What is sustainability? (g) What is triple bottom line? (h) Evaluate whether businesses should prioritise ethics over profit.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ethics",
                statement: "CSR, dilemmas.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Moral principles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Social responsibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) All stakeholders matter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Competing values example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Future needs preserved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) People, planet, profit.",
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
          id: "ciealbus-u3-et-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The utilitarian approach to business ethics judges actions by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "whether they produce the greatest good for the greatest number",
              },
              {
                id: "b",
                text: "whether they follow fixed rules",
              },
              {
                id: "c",
                text: "whether they please shareholders",
              },
              {
                id: "d",
                text: "whether they maximise profit",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Utilitarianism",
                statement: "Greatest good for greatest number.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Utilitarianism evaluates actions by their outcomes — the choice that produces the greatest overall benefit is the ethical one.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** whether they produce the greatest good for the greatest number",
          },
        },
        {
          id: "ciealbus-u3-et-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A company surveys 200 potential employees. 150 say a firm's ethical reputation matters when choosing an employer. (a) Calculate the percentage who prioritise ethics. (b) Calculate how many did not prioritise ethics.",
          parts: [
            { label: "a", prompt: "Percentage prioritising ethics", marks: 1 },
            { label: "b", prompt: "Number not prioritising ethics", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75, unit: "%" },
              { label: "b", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey analysis",
                statement: "Percentage = part / total × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Percentage = 150 / 200 × 100 = 75%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Not prioritising = 200 - 150 = 50.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = 75%; b = 50",
          },
        },
        {
          id: "ciealbus-u3-et-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is stakeholder theory?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder theory",
                statement: "All stakeholders matter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stakeholder theory says a business should consider the interests of all groups affected by its decisions, not just shareholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stakeholders include employees, customers, suppliers, the local community and the environment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Businesses should consider all affected stakeholders",
          },
        },
        {
          id: "ciealbus-u3-et-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'triple bottom line' refers to balancing:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "production, productivity and profit",
              },
              {
                id: "b",
                text: "planning, production and profit",
              },
              {
                id: "c",
                text: "price, place and promotion",
              },
              {
                id: "d",
                text: "people, planet and profit",
              },
            ],
            correctChoiceId: "d",
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
                  "The triple bottom line measures performance on social (people), environmental (planet) and economic (profit) dimensions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** people, planet and profit",
          },
        },
        {
          id: "ciealbus-u3-et-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A firm's total CSR budget is $4 million, of which $2 million goes to environmental programmes and $1 million to community projects. (a) Calculate the environmental share of the budget. (b) Calculate the community share. (c) State one benefit to the business of CSR spending.",
          parts: [
            { label: "a", prompt: "Environmental share (%)", marks: 1 },
            { label: "b", prompt: "Community share (%)", marks: 1 },
            { label: "c", prompt: "One benefit of CSR", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50, unit: "%" },
              { label: "b", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "CSR allocation",
                statement: "Share = amount / total budget × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Environmental share = 2 / 4 × 100 = 50%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Community share = 1 / 4 × 100 = 25%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Any valid benefit: improved reputation, customer loyalty, employee retention or reduced regulatory risk.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "a = 50%; b = 25%; c = reputation / loyalty / retention",
          },
        },
        {
          id: "ciealbus-u3-et-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two benefits to a business of adopting corporate social responsibility practices.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "CSR benefits",
                statement: "Reputation, loyalty, retention.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CSR builds a positive reputation and brand image, which can attract customers and command premium prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can improve employee motivation and retention, as staff prefer to work for responsible employers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Responsible practices reduce the risk of fines, boycotts and damage to long-term stakeholder relationships.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reputation gains, employee retention and reduced risk",
          },
        },
        {
          id: "ciealbus-u3-et-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A firm discovers that a cheaper supplier uses child labour, but switching to an ethical supplier would raise costs by 20%. This situation is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "an ethical dilemma",
              },
              {
                id: "b",
                text: "a financial ratio",
              },
              {
                id: "c",
                text: "a routine purchasing decision",
              },
              {
                id: "d",
                text: "a marketing strategy",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethical dilemma",
                statement: "Competing values requiring choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choosing between lower costs (profit) and ethical sourcing (social responsibility) is a classic ethical dilemma with no easy answer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** an ethical dilemma",
          },
        },
        {
          id: "ciealbus-u3-et-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A firm can save $600,000 a year by using a supplier that occasionally pollutes. If caught, it faces a fine of $2,000,000, and the probability of being caught is 30% per year. (a) Calculate the expected annual fine. (b) Calculate the expected net benefit of using the polluting supplier. (c) State whether the expected net benefit is positive, answering 1 for yes and 0 for no.",
          parts: [
            { label: "a", prompt: "Expected annual fine", marks: 1 },
            { label: "b", prompt: "Expected net benefit", marks: 1 },
            {
              label: "c",
              prompt: "Is net benefit positive? (1 = yes, 0 = no)",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 600000, unit: "$" },
              { label: "b", answer: 0, unit: "$" },
              { label: "c", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expected value and ethics",
                statement: "Expected fine = probability × penalty.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Expected fine = 0.30 × 2000000 = 600000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Expected net benefit = 600000 saving - 600000 expected fine = 0.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Net benefit is zero, not positive — answer 0.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Even at zero expected financial gain, ethical and reputational costs favour switching to a clean supplier.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = $600000; b = $0; c = 0",
          },
        },
        {
          id: "ciealbus-u3-et-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which ethical framework judges actions by whether they are done from a sense of duty, regardless of consequences?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Utilitarianism",
              },
              {
                id: "b",
                text: "Stakeholder theory",
              },
              {
                id: "c",
                text: "Virtue ethics",
              },
              {
                id: "d",
                text: "Deontology",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deontology",
                statement: "Duty-based ethics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deontology holds that actions are right or wrong based on adherence to rules and duty, not on their outcomes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Deontology",
          },
        },
        {
          id: "ciealbus-u3-et-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A firm donates $0.50 to charity for every unit it sells, and it sells 2,000,000 units a year. (a) Calculate the total annual donation. (b) If sales rise by 20%, calculate the new total donation.",
          parts: [
            { label: "a", prompt: "Total annual donation", marks: 1 },
            { label: "b", prompt: "New donation after 20% rise", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000000, unit: "$" },
              { label: "b", answer: 1200000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "CSR cost calculation",
                statement: "Donation = per-unit amount × units sold.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Donation = 0.50 × 2000000 = $1,000,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "New units = 2400000; donation = 0.50 × 2400000 = $1,200,000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $1000000; b = $1200000",
          },
        },
        {
          id: "ciealbus-u3-et-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is most likely to be a long-term benefit of a firm's strong CSR record?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "exemption from all taxes",
              },
              {
                id: "b",
                text: "guaranteed higher profits every year",
              },
              {
                id: "c",
                text: "protection from all competition",
              },
              {
                id: "d",
                text: "enhanced reputation and customer loyalty",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "CSR long-term benefits",
                statement: "Reputation builds loyalty and trust.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A strong CSR record builds trust and loyalty over time, though it does not guarantee profits or immunity from competition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** enhanced reputation and customer loyalty",
          },
        },
        {
          id: "ciealbus-u3-et-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain what is meant by an ethical dilemma in business. (b) Give one example of an ethical dilemma and how it might be resolved. (c) Explain two ways CSR can benefit a business. (d) Evaluate whether businesses have an ethical obligation beyond making profit.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ethics evaluation",
                statement: "Balancing profit and moral responsibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) An ethical dilemma is a situation where competing values — typically profit versus social or environmental responsibility — cannot both be satisfied.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Example: cheap but polluting suppliers. Resolution: weigh short-term cost savings against long-term reputation, regulation and stakeholder harm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) CSR benefits: enhanced reputation and customer loyalty; improved employee motivation and retention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Obligation depends on stakeholder theory — businesses affect employees, communities and the environment, so responsibility extends beyond profit.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) Overall judgement: businesses have some obligation, but the balance with profit depends on context and cost of compliance.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Businesses face ethical dilemmas; CSR obligations beyond profit are context-dependent",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u3-et-notes",
      title: "Ethics — notes",
      summary:
        "Ethics=moral principles. CSR=people/planet/profit. Dilemmas require balancing competing values.",
      sections: [
        {
          heading: "Key idea",
          body: "Ethical business builds reputation but may sacrifice short-term profit.",
        },
        {
          heading: "Frameworks",
          body: "Utilitarianism, deontology, virtue ethics guide decisions.",
        },
      ],
    },
  ],
};
