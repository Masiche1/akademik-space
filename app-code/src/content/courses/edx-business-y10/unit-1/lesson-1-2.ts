import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ebz10-u1-lesson-1-2",
  code: "1-2",
  title: "Types of Business and Enterprise",
  goal: "I CAN identify business types and explain enterprise in different sectors.",
  standards: ["Edexcel IGCSE Business 4BS0 — Enterprise"],
  vocabulary: [
    {
      term: "Primary sector",
      definition: "Businesses extracting raw materials — farming, mining.",
    },
    {
      term: "Secondary sector",
      definition: "Businesses manufacturing goods — factories.",
    },
    {
      term: "Tertiary sector",
      definition: "Businesses providing services — retail, banking.",
    },
    {
      term: "Public sector",
      definition: "Businesses owned and run by the government.",
    },
    {
      term: "Private sector",
      definition: "Businesses owned by individuals or shareholders.",
    },
  ],
  concepts: [
    {
      id: "ebz10-u1-sectors",
      title: "Business Sectors",
      skill:
        "Distinguish primary, secondary, tertiary and public/private sectors.",
      lesson: {
        sections: [
          {
            heading: "Production sectors",
            body: "**Primary**: extract raw materials — farming, fishing, mining, forestry. Small share of employment but essential inputs.\n**Secondary**: manufacture goods — factories turning raw materials into products. Declining in developed economies as services grow.\n**Tertiary**: provide services — shops, banks, schools, hospitals, transport. Largest employer in developed countries.\n**Quaternary**: knowledge-based services — IT, research, education, media. Growing rapidly.",
          },
          {
            heading: "Ownership sectors",
            body: "**Private sector**: owned by individuals, partners or shareholders — most businesses. Aim: profit.\n**Public sector**: owned by government — NHS, schools, utilities. Aim: service provision, may not be profitable.\n**Third sector**: charities, social enterprises — aim: social or environmental goals rather than profit.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A farmer grows wheat, a miller turns it into flour, a bakery makes bread, a supermarket sells it. Which sectors?",
          solution:
            "Farm = primary, mill/bakery = secondary, supermarket = tertiary.",
        },
      },
      questions: [
        {
          id: "ebz10-u1-sectors-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sector does a supermarket belong to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Secondary" },
              { id: "b", text: "Quaternary" },
              { id: "c", text: "Primary" },
              { id: "d", text: "Tertiary" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tertiary sector",
                statement: "Service businesses — retail, banking, education.",
              },
            ],
            steps: [
              {
                reasoning: "Supermarket provides a service — tertiary.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Tertiary",
            commonErrors: ["Primary/secondary confused."],
          },
        },
        {
          id: "ebz10-u1-sectors-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the tertiary sector employs most people in developed countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sector shift",
                statement:
                  "As economies develop, services replace manufacturing as main employer.",
              },
            ],
            steps: [
              {
                reasoning: "Manufacturing becomes more automated/efficient.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "People move to service jobs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Higher incomes → more demand for services.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Automation reduces factory jobs; rising incomes increase service demand.",
            commonErrors: ["No reason given.", "Opposite claim."],
          },
        },
        {
          id: "ebz10-u1-sectors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the objectives of a private business and a public sector organisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Public vs private",
                statement: "Profit vs service provision.",
              },
            ],
            steps: [
              {
                reasoning: "Private aims for profit for owners/shareholders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Private accountable to customers and investors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Public aims to provide service regardless of profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Public accountable to government/taxpayers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Private = profit; public = service provision, different accountability.",
            commonErrors: [
              "Same objectives assumed.",
              "No accountability link.",
            ],
          },
        },
        {
          id: "ebz10-u1-sectors-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country is moving from an agriculture-based economy to a service-based economy.",
          parts: [
            {
              label: "a",
              prompt:
                "Name the three production sectors and give an example of each.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why employment shifts from primary to tertiary.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "State one problem this shift could cause.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economic development",
                statement: "Sectors evolve as economies develop.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Primary (farming), secondary (manufacturing), tertiary (services).",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) One example each.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Productivity rises in farming/manufacturing.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Fewer workers needed → move to services.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Rising incomes increase demand for services.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Rural unemployment / skills mismatch.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) primary/secondary/tertiary (b) productivity+income shift (c) rural unemployment",
            commonErrors: ["Missing example.", "No problem."],
          },
        },
      ],
    },
    {
      id: "ebz10-u1-types",
      title: "Forms of Business Organisation",
      skill:
        "Distinguish sole traders, partnerships, companies and franchises.",
      lesson: {
        sections: [
          {
            heading: "Small business forms",
            body: "**Sole trader**: one owner — simple to set up, keeps all profit, unlimited liability. Common for small businesses.\n**Partnership**: two or more owners share profits, skills and liabilities — still unlimited liability unless LLP.\n**Private limited company (Ltd)**: shareholders own shares; limited liability protects personal assets; more formal accounts required.\n**Public limited company (PLC)**: shares sold on stock exchange; can raise large capital; heavily regulated.",
          },
          {
            heading: "Franchises and social enterprises",
            body: "**Franchise**: business buys right to trade under an established brand — gets proven model and support, pays fees/royalties. Examples: McDonald's, Subway.\n\n**Social enterprise**: trades for social/environmental aims — profits reinvested into the mission. **Cooperative**: owned and run by members for mutual benefit — e.g., farmer co-ops, credit unions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Two friends open a café together, sharing profits and debts equally. What form?",
          solution: "Partnership — two owners sharing profits and liabilities.",
        },
      },
      questions: [
        {
          id: "ebz10-u1-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'limited liability' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company can only sell limited products" },
              {
                id: "b",
                text: "Owners' liability is limited to their investment",
              },
              { id: "c", text: "Business has limited staff" },
              {
                id: "d",
                text: "Owners can lose personal assets if business fails",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limited liability",
                statement:
                  "Owners risk only their investment, not personal assets.",
              },
            ],
            steps: [
              {
                reasoning: "Liability limited to investment.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Risk limited to investment",
            commonErrors: ["Unlimited liability confused."],
          },
        },
        {
          id: "ebz10-u1-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of a sole trader over a limited company.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Sole trader advantages",
                statement: "Simple, cheap, full control, all profit.",
              },
            ],
            steps: [
              {
                reasoning: "Easy and cheap to set up.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Owner keeps all profits and makes all decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less paperwork/administration.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Simple setup, full control/profit, less admin.",
            commonErrors: ["Company advantages listed.", "Vague."],
          },
        },
        {
          id: "ebz10-u1-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might an entrepreneur choose a franchise rather than start from scratch?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Franchise",
                statement: "Established brand + proven model reduces risk.",
              },
            ],
            steps: [
              {
                reasoning: "Recognised brand attracts customers immediately.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Proven business model reduces uncertainty.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Franchisor provides training and support.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But must pay fees/royalties and follow rules.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Brand recognition, proven model, support — at cost of fees/control.",
            commonErrors: ["No trade-off.", "Only advantages."],
          },
        },
        {
          id: "ebz10-u1-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Four friends want to start a bakery business.",
          parts: [
            {
              label: "a",
              prompt: "Compare sole trader vs partnership for this business.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Suggest why they might choose a private limited company instead.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Business forms",
                statement: "Control vs risk vs capital trade-offs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Sole trader: only one can own — others would be employees.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Partnership: share profits, skills, decisions, unlimited liability.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Limited company: limited liability protects personal assets.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Can issue shares to raise capital, easier to grow.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) sole=one owner vs partnership=shared (b) Ltd=limited liability+capital",
            commonErrors: ["No comparison.", "Wrong form."],
          },
        },
      ],
    },
  ],
};
