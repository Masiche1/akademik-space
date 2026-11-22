import type { Lesson } from "../../../types.ts";

export const lesson253: Lesson = {
  id: "cieibs-u1-lesson-1-3",
  code: "1-3",
  title: "Business Objectives and Stakeholders",
  goal: "I CAN explain business objectives and identify stakeholder interests.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 1: objectives and stakeholders",
  ],

  vocabulary: [
    {
      term: "Business objective",
      definition: "Goal the business aims to achieve.",
    },
    {
      term: "Profit maximisation",
      definition: "Maximising profit as primary objective.",
    },
    {
      term: "Market share",
      definition: "Proportion of market controlled by business.",
    },
    {
      term: "Survival",
      definition: "Staying in business as primary objective.",
    },
    {
      term: "Stakeholder",
      definition: "Person/group affected by business decisions.",
    },
    {
      term: "Shareholder",
      definition: "Owner of company shares — stakeholder.",
    },
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
          {
            name: "Stakeholders",
            statement:
              "owners, employees, customers, suppliers, government, community",
          },
        ],
        workedExample: {
          problem:
            "A company wants to increase prices but customers complain. How do stakeholders conflict?",
          solution:
            "Shareholders want profit (higher prices OK); customers want low prices (object); employees may fear losing customers/jobs.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-obj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a business objective?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A legal requirement",
              },
              {
                id: "b",
                text: "A type of tax",
              },
              {
                id: "c",
                text: "Goal the business aims to achieve",
              },
              {
                id: "d",
                text: "A marketing strategy",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business objective",
                statement: "Business goal.",
              },
            ],
            steps: [
              {
                reasoning: "Objective = what business aims to achieve.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Business goal",
          },
        },
        {
          id: "cieibs-u1-obj-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name three stakeholders.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholders",
                statement: "Affected parties.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Three valid stakeholders (e.g. owners, employees, customers).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All correctly identified.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Three stakeholders",
          },
        },
        {
          id: "cieibs-u1-obj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is profit maximisation? When might survival be more important?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Objectives",
                statement: "Profit vs survival.",
              },
            ],
            steps: [
              {
                reasoning: "Profit maximisation = highest possible profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Survival important for new/small businesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Survival precedes profit in early stages.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Profit vs survival objectives",
          },
        },
        {
          id: "cieibs-u1-obj-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business objective, profit maximisation, market share, survival, stakeholder, shareholder. (b) What is profit maximisation? (c) What is market share? (d) What is survival? (e) Name four stakeholders. (f) What do shareholders want? (g) What do employees want? (h) Explain stakeholder conflict in a business decision.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Objectives/stakeholders",
                statement: "Goals and interests.",
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
                reasoning: "(c) Market proportion controlled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Staying in business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Four valid stakeholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Profit/dividends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Job security/wages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid stakeholder conflict explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business objectives and stakeholders.",
          },
        },
        {
          id: "cieibs-u1-obj-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is profit maximisation as a business objective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making just enough profit to survive" },
              { id: "b", text: "Reducing prices to gain customers" },
              { id: "c", text: "Sharing all profit with employees" },
              {
                id: "d",
                text: "Achieving the highest possible level of profit",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Profit maximisation",
                statement: "Maximising profit as the primary objective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Profit maximisation means achieving the highest possible profit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(d)** Achieving the highest possible level of profit",
          },
        },
        {
          id: "cieibs-u1-obj-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who is a stakeholder in a business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the owners of the business" },
              { id: "b", text: "Only the government" },
              {
                id: "c",
                text: "Any person or group affected by the business's decisions",
              },
              { id: "d", text: "Only the customers who buy the products" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Person or group affected by business decisions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stakeholders include owners, employees, customers, suppliers, government and community.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** Any person or group affected by the business's decisions",
          },
        },
        {
          id: "cieibs-u1-obj-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A firm sells 2000 units in a total market of 8000 units. Calculate its market share.",
          response: {
            type: "numeric",
            parts: [{ label: "market share", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Market share",
                statement:
                  "Market share = firm sales / total market sales x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Market share = (2000 / 8000) x 100.",
                working: "2000 / 8000 = 0.25; 0.25 x 100 = 25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Market share = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cieibs-u1-obj-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why 'survival' may be the main objective of a small or new business.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Survival objective",
                statement:
                  "Staying in business is the priority in early stages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New and small businesses face uncertainty; staying in business comes before maximising profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only once survival is secured can growth and profit objectives be pursued.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Survival comes first for new/small firms because failure ends all other objectives",
          },
        },
        {
          id: "cieibs-u1-obj-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do customers typically want from a business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fewer competitors" },
              { id: "b", text: "The highest possible prices" },
              { id: "c", text: "The business to make a loss" },
              { id: "d", text: "Quality products at low prices" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Customer interest",
                statement: "Quality and value for money.",
              },
            ],
            steps: [
              {
                reasoning: "Customers want good quality at competitive prices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Quality products at low prices",
          },
        },
        {
          id: "cieibs-u1-obj-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business has revenue of 50,000 dollars and net profit of 5,000 dollars. Calculate its net profit margin.",
          response: {
            type: "numeric",
            parts: [{ label: "profit margin", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profit margin",
                statement: "Profit margin = profit / revenue x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Profit margin = (5000 / 50000) x 100 = 10%.",
                working: "5000 / 50000 = 0.1; 0.1 x 100 = 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net profit margin = 10%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10%",
          },
        },
        {
          id: "cieibs-u1-obj-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A supermarket chain has 15% of a market worth 40,000 dollars in sales. Calculate the chain's sales revenue.",
          response: {
            type: "numeric",
            parts: [{ label: "revenue", answer: 6000, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Market share",
                statement: "Firm sales = market share% x total market sales.",
              },
            ],
            steps: [
              {
                reasoning: "Sales = 15% of 40,000 = 0.15 x 40,000.",
                working: "0.15 x 40000 = 6000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revenue = 6000 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6000 dollars",
          },
        },
        {
          id: "cieibs-u1-obj-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm wants to double its market share from 10% to 20% in a market of 50,000 units. Calculate the increase in units sold needed.",
          response: {
            type: "numeric",
            parts: [{ label: "extra units", answer: 5000, unit: "units" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Market share",
                statement: "Units = market share% x total market units.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Current sales = 10% of 50,000 = 5000; target = 20% = 10,000.",
                working: "10000 - 5000 = 5000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increase needed = 5000 units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5000 units",
          },
        },
        {
          id: "cieibs-u1-obj-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which stakeholder is most likely to want the business to create more jobs in the local area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Suppliers of raw materials" },
              { id: "b", text: "Competitors" },
              { id: "c", text: "Shareholders" },
              { id: "d", text: "Local community" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Local community",
                statement: "Wants employment and a clean environment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The local community benefits from jobs created by the business.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Local community",
          },
        },
        {
          id: "cieibs-u1-obj-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A business decides to raise prices to increase profit. Which pair of stakeholders is most likely to be in conflict?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shareholders and customers" },
              { id: "b", text: "Government and local community" },
              { id: "c", text: "Shareholders and employees" },
              { id: "d", text: "Customers and suppliers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stakeholder conflict",
                statement: "Different stakeholders have different interests.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shareholders want higher profits; customers want lower prices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Shareholders and customers",
          },
        },
        {
          id: "cieibs-u1-obj-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best describes how a business should balance stakeholder interests?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Prioritise short-term profit over every other consideration",
              },
              {
                id: "b",
                text: "Consider the interests of all stakeholders while pursuing its objectives",
              },
              { id: "c", text: "Ignore all stakeholders except shareholders" },
              {
                id: "d",
                text: "Let the government decide all business objectives",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stakeholder balance",
                statement:
                  "Weigh competing stakeholder interests against objectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Successful businesses balance stakeholder needs with their objectives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Consider the interests of all stakeholders while pursuing its objectives",
          },
        },
        {
          id: "cieibs-u1-obj-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A company has revenue of 120,000 dollars and net profit of 9,600 dollars. Calculate (a) net profit margin and (b) the profit if revenue rises to 150,000 dollars while the margin stays the same.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "%" },
              { label: "b", answer: 12000, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profit margin",
                statement:
                  "Profit margin = profit / revenue x 100; profit = margin% x revenue.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Margin = (9600 / 120000) x 100 = 8%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) New profit = 8% of 150,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New profit = 12,000 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 8%, (b) 12,000 dollars",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-obj-notes",
      title: "Objectives — notes",
      summary:
        "Objectives: profit max, survival, market share, growth, social. Stakeholders have conflicting interests.",
      sections: [
        {
          heading: "Key idea",
          body: "Businesses balance competing stakeholder needs while pursuing objectives.",
        },
        {
          heading: "Conflict",
          body: "Shareholders want profit; employees want security; customers want low prices.",
        },
      ],
    },
  ],
};
