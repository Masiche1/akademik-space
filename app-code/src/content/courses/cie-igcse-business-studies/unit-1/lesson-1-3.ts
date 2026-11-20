import type { Lesson } from "../../../types.ts";

export const lesson253: Lesson = {
  id: "cieibs-u1-lesson-1-3",
  code: "1-3",
  title: "Business Objectives and Stakeholders",
  goal: "I CAN explain business objectives and identify stakeholder interests.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: objectives and stakeholders"],
  
  vocabulary: [
    { term: "Business objective", definition: "Goal the business aims to achieve." },
    { term: "Profit maximisation", definition: "Maximising profit as primary objective." },
    { term: "Market share", definition: "Proportion of market controlled by business." },
    { term: "Survival", definition: "Staying in business as primary objective." },
    { term: "Stakeholder", definition: "Person/group affected by business decisions." },
    { term: "Shareholder", definition: "Owner of company shares — stakeholder." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s3-obj",
      title: "Objectives and stakeholders",
      skill: "Understand business goals and stakeholder interests.",
      lesson: {
        sections: [
          {
            heading: "Business objectives",
            body: "Profit maximisation: highest profit. Survival: stay in business (especially small firms/new ventures). Market share: dominate market. Growth: expand size/reach. Social objectives: ethical/environmental goals.",
          },
          {
            heading: "Stakeholders",
            body: "Owners/shareholders want profit/dividends. Employees want job security/wages. Customers want quality/price. Suppliers want payment. Government wants tax/jobs. Local community wants employment/environment.",
          },
        ],
        keyFormulas: [
          { name: "Profit max", statement: "highest profit objective" },
          { name: "Survival", statement: "stay in business" },
          { name: "Stakeholders", statement: "owners, employees, customers, suppliers, government, community" },
        ],
        workedExample: {
          problem: "A company wants to increase prices but customers complain. How do stakeholders conflict?",
          solution: "Shareholders want profit (higher prices OK); customers want low prices (object); employees may fear losing customers/jobs.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-obj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a business objective?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Goal the business aims to achieve"
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
                              "name": "Business objective",
                              "statement": "Business goal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Objective = what business aims to achieve.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Business goal"
},
        },
        {
          id: "cieibs-u1-obj-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name three stakeholders.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stakeholders",
                              "statement": "Affected parties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three valid stakeholders (e.g. owners, employees, customers).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All correctly identified.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Three stakeholders"
},
        },
        {
          id: "cieibs-u1-obj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is profit maximisation? When might survival be more important?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Objectives",
                              "statement": "Profit vs survival."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Profit maximisation = highest possible profit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Survival important for new/small businesses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Survival precedes profit in early stages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Profit vs survival objectives"
},
        },
        {
          id: "cieibs-u1-obj-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business objective, profit maximisation, market share, survival, stakeholder, shareholder. (b) What is profit maximisation? (c) What is market share? (d) What is survival? (e) Name four stakeholders. (f) What do shareholders want? (g) What do employees want? (h) Explain stakeholder conflict in a business decision.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Objectives/stakeholders",
                              "statement": "Goals and interests."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Highest profit objective.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Market proportion controlled.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Staying in business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Four valid stakeholders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Profit/dividends.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Job security/wages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid stakeholder conflict explanation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Business objectives and stakeholders."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-obj-notes",
      title: "Objectives — notes",
      summary: "Objectives: profit max, survival, market share, growth, social. Stakeholders have conflicting interests.",
      sections: [
        { heading: "Key idea", body: "Businesses balance competing stakeholder needs while pursuing objectives." },
        { heading: "Conflict", body: "Shareholders want profit; employees want security; customers want low prices." },
      ],
    },
  ],
};
