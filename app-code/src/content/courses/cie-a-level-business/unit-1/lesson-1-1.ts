import type { Lesson } from "../../../types.ts";

export const lesson371: Lesson = {
  id: "ciealbus-u1-lesson-1-1",
  code: "1-1",
  title: "Business Objectives and Stakeholders",
  goal: "I CAN explain business objectives and analyse stakeholder interests.",
  standards: ["Cambridge A Level Business 9707", "Paper 1: business activity"],

  vocabulary: [
    {
      term: "Profit maximisation",
      definition: "Objective of achieving highest possible profit.",
    },
    {
      term: "Sales revenue maximisation",
      definition: "Objective of achieving highest possible revenue.",
    },
    {
      term: "Market share",
      definition: "Percentage of market controlled by business.",
    },
    {
      term: "Social enterprise",
      definition: "Business prioritising social/environmental aims.",
    },
    {
      term: "Stakeholder",
      definition: "Any group/person affected by business decisions.",
    },
    {
      term: "Conflict of objectives",
      definition: "When different objectives cannot all be achieved.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u1-s1-obj",
      title: "Business objectives",
      skill: "Analyse business aims and stakeholder conflicts.",
      lesson: {
        sections: [
          {
            heading: "Profit-based objectives",
            body: "Profit maximisation assumes perfect knowledge and rationality — unrealistic. Sales revenue maximisation: achieves highest turnover but may sacrifice profit. Market share: long-term survival strategy.",
          },
          {
            heading: "Non-profit objectives",
            body: "Social enterprises balance profit with social/environmental aims. Survival is primary objective for small/new businesses. Growth objectives: organic (internal) vs external (mergers/acquisitions).",
          },
          {
            heading: "Stakeholder analysis",
            body: "Owners want profit; employees want job security/wages; customers want quality/low prices; suppliers want reliable payment; government wants tax/jobs; local community wants environmental responsibility.",
          },
        ],
        keyFormulas: [
          { name: "Profit max", statement: "highest possible profit" },
          { name: "Revenue max", statement: "highest possible turnover" },
          {
            name: "Stakeholders",
            statement:
              "owners, employees, customers, suppliers, government, community",
          },
        ],
        workedExample: {
          problem:
            "A business wants to maximise profit but employees demand higher wages. How to resolve?",
          solution:
            "Conflict of objectives — higher wages reduce profit. Business must balance stakeholder interests, possibly through productivity gains or accepting lower profit margin.",
        },
      },
      questions: [
        {
          id: "ciealbus-u1-ob-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is profit maximisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Social aims",
              },
              {
                id: "b",
                text: "Largest market share",
              },
              {
                id: "c",
                text: "Highest revenue",
              },
              {
                id: "d",
                text: "Objective of achieving highest possible profit",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Profit maximisation",
                statement: "Highest profit objective.",
              },
            ],
            steps: [
              {
                reasoning: "Profit maximisation = highest possible profit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Highest possible profit",
          },
        },
        {
          id: "ciealbus-u1-ob-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who are stakeholders? Give three examples.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Affected by business.",
              },
            ],
            steps: [
              {
                reasoning: "Any group/person affected by business decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples: owners, employees, customers, suppliers, government, community.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Affected parties",
          },
        },
        {
          id: "ciealbus-u1-ob-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a conflict of objectives? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict",
                statement: "Incompatible objectives.",
              },
            ],
            steps: [
              {
                reasoning: "When different objectives cannot all be achieved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: profit vs employee wages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Requires prioritisation/balancing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Incompatible objectives example",
          },
        },
        {
          id: "ciealbus-u1-ob-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define profit maximisation, sales revenue maximisation, market share, social enterprise, stakeholder, conflict of objectives. (b) What is profit maximisation? (c) What is sales revenue maximisation? (d) What is a social enterprise? (e) Who are stakeholders? Give three. (f) What is conflict of objectives? Give example. (g) Why might profit maximisation be unrealistic? (h) Evaluate whether businesses should prioritise profit or social aims.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Objectives",
                statement: "Analysis, stakeholders.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Highest profit objective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Highest turnover objective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Social/environmental aims.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Owners, employees, customers etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Incompatible objectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Assumes perfect knowledge/rationality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business objectives and stakeholders.",
          },
        },
        {
          id: "ciealbus-u1-ob-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which business objective involves achieving the highest possible level of sales revenue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sales revenue maximisation" },
              { id: "b", text: "Market share growth" },
              { id: "c", text: "Profit maximisation" },
              { id: "d", text: "Survival" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sales revenue maximisation",
                statement: "Highest possible turnover objective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sales revenue maximisation = highest possible turnover.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sales revenue maximisation",
          },
        },
        {
          id: "ciealbus-u1-ob-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stakeholder is most likely to want job security and fair wages?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Suppliers" },
              { id: "b", text: "Government" },
              { id: "c", text: "Customers" },
              { id: "d", text: "Employees" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder interests",
                statement: "Employees want security and wages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Employees want job security, fair wages and good conditions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Employees",
          },
        },
        {
          id: "ciealbus-u1-ob-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A business that puts social and environmental aims ahead of profit is called a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "social enterprise" },
              { id: "b", text: "monopoly" },
              { id: "c", text: "franchise" },
              { id: "d", text: "public limited company" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social enterprise",
                statement: "Prioritises social/environmental aims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social enterprises balance profit with social/environmental aims.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Social enterprise",
          },
        },
        {
          id: "ciealbus-u1-ob-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of a conflict of objectives?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paying higher wages reducing profit" },
              {
                id: "b",
                text: "Hiring more staff and raising wages simultaneously",
              },
              { id: "c", text: "Growth through new markets and expansion" },
              { id: "d", text: "Marketing and sales working together" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict of objectives",
                statement: "Objectives that cannot all be achieved.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher wages raise costs and reduce profit — the two objectives conflict.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Higher wages reducing profit",
          },
        },
        {
          id: "ciealbus-u1-ob-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A business has revenue of £120,000 and total costs of £95,000. (a) Calculate its profit. (b) If revenue rises to £140,000 with costs unchanged, calculate the new profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25000, unit: "£" },
              { label: "b", answer: 45000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit",
                statement: "Profit = revenue - total costs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profit = revenue - costs.",
                working: "120000 - 95000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Same formula with new revenue.",
                working: "140000 - 95000",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£25,000 and £45,000",
          },
        },
        {
          id: "ciealbus-u1-ob-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The total market is worth £40 million. Firm A has sales of £8 million and Firm B has sales of £6 million. (a) Calculate Firm A's market share. (b) Calculate Firm B's market share.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "%" },
              { label: "b", answer: 15, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Market share",
                statement:
                  "Market share = firm sales / total market sales × 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Market share = firm sales / total market.",
                working: "\\frac{8}{40} \\times 100",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Same formula for Firm B.",
                working: "\\frac{6}{40} \\times 100",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "20% and 15%",
          },
        },
        {
          id: "ciealbus-u1-ob-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain why survival might be the main objective of a small or new business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Survival objective",
                statement: "Staying in business is the priority.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Small/new businesses face uncertainty and limited resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Survival must come before growth or profit maximisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Survival is the priority for uncertain small businesses.",
          },
        },
        {
          id: "ciealbus-u1-ob-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a conflict of objectives can arise between a business's owners and its customers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict of objectives",
                statement: "Stakeholder aims that cannot all be met.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Owners typically want higher prices/margins to maximise profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Customers want lower prices and better quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The business must balance the two — a genuine conflict.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Owners want profit; customers want low prices — a conflict to balance.",
          },
        },
        {
          id: "ciealbus-u1-ob-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A firm pursuing sales revenue maximisation may...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "automatically become a social enterprise" },
              { id: "b", text: "ignore the interests of all stakeholders" },
              { id: "c", text: "always maximise profit at the same time" },
              {
                id: "d",
                text: "produce beyond the profit-maximising level, possibly lowering profit",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sales revenue maximisation",
                statement: "Highest turnover, may sacrifice profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revenue maximisation can push output beyond the profit-maximising point.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Output beyond profit-maximising level, lowering profit",
          },
        },
        {
          id: "ciealbus-u1-ob-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate whether a business should prioritise survival over long-term growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Objective prioritisation",
                statement: "Survival vs growth trade-off.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For small/new businesses survival is essential — failure means exit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But ignoring growth may lose market position and competitiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement depends on stage, resources and market conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Context-dependent — survival first for vulnerable firms, growth where feasible.",
          },
        },
        {
          id: "ciealbus-u1-ob-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A business has revenue of £200,000 and total costs of £150,000. (a) Calculate its profit. (b) Calculate its profit margin as a percentage of revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50000, unit: "£" },
              { label: "b", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit",
                statement: "Profit = revenue - costs.",
              },
              {
                kind: "formula",
                name: "Profit margin",
                statement: "Profit margin = profit / revenue × 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profit = revenue - costs.",
                working: "200000 - 150000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Profit margin = profit / revenue.",
                working: "\\frac{50000}{200000} \\times 100",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£50,000 and 25%",
          },
        },
        {
          id: "ciealbus-u1-ob-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using examples, evaluate the view that businesses should always aim to maximise profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Weigh profit aims against other objectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Profit maximisation rewards owners and signals efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it ignores stakeholders — employees, customers, community.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Assumes perfect knowledge and rationality — unrealistic.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: profit matters but 'always' is too strong — balance needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Balanced evaluation — profit important but not always the sole aim.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u1-ob-notes",
      title: "Objectives — notes",
      summary:
        "Profit max vs revenue max vs social aims. Stakeholders have competing interests → conflicts.",
      sections: [
        {
          heading: "Key idea",
          body: "Business objectives must balance competing stakeholder interests.",
        },
        {
          heading: "Conflicts",
          body: "Profit vs wages, growth vs stability, short vs long-term aims.",
        },
      ],
    },
  ],
};
