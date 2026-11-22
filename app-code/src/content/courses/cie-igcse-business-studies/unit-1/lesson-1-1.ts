import type { Lesson } from "../../../types.ts";

export const lesson251: Lesson = {
  id: "cieibs-u1-lesson-1-1",
  code: "1-1",
  title: "Business Activity, Enterprise and Entrepreneurship",
  goal: "I CAN define business activity, enterprise and entrepreneurship and explain their roles.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 1: understanding business activity",
  ],

  vocabulary: [
    {
      term: "Business activity",
      definition: "Process of producing and selling goods/services.",
    },
    {
      term: "Enterprise",
      definition: "Organisation that produces/sells goods or services.",
    },
    {
      term: "Entrepreneur",
      definition: "Person who starts and runs a business, taking risks.",
    },
    {
      term: "Factors of production",
      definition: "Land, labour, capital, enterprise.",
    },
    {
      term: "Added value",
      definition: "Increase in value from production process.",
    },
    { term: "Opportunity cost", definition: "Next best alternative foregone." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s1-ent",
      title: "Business activity and enterprise",
      skill: "Understand business fundamentals at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Business activity",
            body: "Business activity involves producing goods/services to satisfy needs/wants. Factors of production: land (natural resources), labour (human effort), capital (money/machinery), enterprise (entrepreneurship). Added value = selling price minus cost of inputs.",
          },
          {
            heading: "Enterprise and entrepreneurship",
            body: "Enterprise = business organisation. Entrepreneur = person who identifies opportunities, takes risks, organises resources. Entrepreneurs drive innovation, create jobs, contribute to economic growth.",
          },
        ],
        keyFormulas: [
          { name: "Factors", statement: "land, labour, capital, enterprise" },
          { name: "Added value", statement: "selling price - input costs" },
          { name: "Opportunity cost", statement: "next best alternative" },
        ],
        workedExample: {
          problem:
            "A farmer grows wheat, mills it into flour, sells to baker who makes bread. Where is value added?",
          solution:
            "Each stage adds value: wheat→flour (processing), flour→bread (baking). Total value = bread price - wheat cost.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-ba-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the factors of production?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Supply, demand, price, profit",
              },
              {
                id: "b",
                text: "Raw materials, finished goods, services, profits",
              },
              {
                id: "c",
                text: "Land, labour, capital, enterprise",
              },
              {
                id: "d",
                text: "Money, machines, materials, managers",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Factors of production",
                statement: "Land, labour, capital, enterprise.",
              },
            ],
            steps: [
              {
                reasoning: "Four factors: land, labour, capital, enterprise.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Land, labour, capital, enterprise",
          },
        },
        {
          id: "cieibs-u1-ba-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an entrepreneur?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entrepreneur",
                statement: "Business starter taking risks.",
              },
            ],
            steps: [
              {
                reasoning: "Person who starts and runs a business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Takes financial risks, identifies opportunities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Business starter taking risks",
          },
        },
        {
          id: "cieibs-u1-ba-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is added value? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Added value",
                statement: "Value increase from production.",
              },
            ],
            steps: [
              {
                reasoning: "Added value = selling price - input costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: wood→furniture adds value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows production creates value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Value increase from production",
          },
        },
        {
          id: "cieibs-u1-ba-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business activity, enterprise, entrepreneur, factors of production, added value, opportunity cost. (b) What are the four factors? (c) What is an entrepreneur? (d) What is added value? (e) What is opportunity cost? (f) Give an example of added value. (g) Why do entrepreneurs matter? (h) Explain how a bakery creates added value.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Business fundamentals",
                statement: "Activity, enterprise, value.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Land, labour, capital, enterprise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Business starter taking risks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Selling price minus input costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Next best alternative foregone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Valid added value example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Create jobs, innovate, drive growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Flour→bread adds value through baking.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business activity and enterprise.",
          },
        },
        {
          id: "cieibs-u1-ba-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A farmer owns the land, hires workers, buys a tractor and organises all the farm's activities. Which factor of production does the farmer represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capital" },
              { id: "b", text: "Enterprise" },
              { id: "c", text: "Labour" },
              { id: "d", text: "Land" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Factors of production",
                statement: "Land, labour, capital, enterprise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Organising resources and taking risks is enterprise.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Enterprise",
          },
        },
        {
          id: "cieibs-u1-ba-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following best defines added value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The price at which a product is finally sold" },
              {
                id: "b",
                text: "The total cost of raw materials used in production",
              },
              { id: "c", text: "The profit earned by a business in one year" },
              {
                id: "d",
                text: "The increase in value created during the production process",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Added value",
                statement: "Selling price minus input costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Added value is the increase in value from production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(d)** The increase in value created during the production process",
          },
        },
        {
          id: "cieibs-u1-ba-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A carpenter buys wood for 40 dollars and sells a finished chair for 120 dollars. Calculate the added value created.",
          response: {
            type: "numeric",
            parts: [{ label: "added value", answer: 80, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Added value",
                statement: "Added value = selling price - input costs.",
              },
            ],
            steps: [
              {
                reasoning: "Added value = 120 - 40.",
                working: "120 - 40 = 80",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Added value = 80 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80 dollars",
          },
        },
        {
          id: "cieibs-u1-ba-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by opportunity cost and give one example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity cost",
                statement: "Next best alternative foregone.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Opportunity cost is the next best alternative given up when a choice is made.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valid example, e.g. spending money on a course instead of a holiday.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The next best alternative foregone when making a choice",
          },
        },
        {
          id: "cieibs-u1-ba-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A business uses inputs costing 300 dollars to produce goods sold for 500 dollars. What is the added value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "800 dollars" },
              { id: "b", text: "500 dollars" },
              { id: "c", text: "200 dollars" },
              { id: "d", text: "300 dollars" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Added value",
                statement: "Added value = selling price - input costs.",
              },
            ],
            steps: [
              {
                reasoning: "Added value = 500 - 300 = 200 dollars.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** 200 dollars",
          },
        },
        {
          id: "cieibs-u1-ba-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm sells 500 units at 8 dollars each. Its total costs are 3000 dollars. Calculate (a) revenue and (b) profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4000, unit: "dollars" },
              { label: "b", answer: 1000, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revenue and profit",
                statement:
                  "Revenue = price x quantity; profit = revenue - total costs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Revenue = 500 x 8 = 4000 dollars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Profit = 4000 - 3000 = 1000 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 4000 dollars, (b) 1000 dollars",
          },
        },
        {
          id: "cieibs-u1-ba-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A business spends 200 dollars on inputs and sells its output for 350 dollars. Calculate the added value created.",
          response: {
            type: "numeric",
            parts: [{ label: "added value", answer: 150, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Added value",
                statement: "Added value = selling price - input costs.",
              },
            ],
            steps: [
              {
                reasoning: "Added value = 350 - 200.",
                working: "350 - 200 = 150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Added value = 150 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "150 dollars",
          },
        },
        {
          id: "cieibs-u1-ba-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm has revenue of 8000 dollars and total costs of 6500 dollars. Calculate its profit.",
          response: {
            type: "numeric",
            parts: [{ label: "profit", answer: 1500, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profit",
                statement: "Profit = revenue - total costs.",
              },
            ],
            steps: [
              {
                reasoning: "Profit = 8000 - 6500.",
                working: "8000 - 6500 = 1500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit = 1500 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1500 dollars",
          },
        },
        {
          id: "cieibs-u1-ba-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is the best example of opportunity cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The price of raw materials" },
              {
                id: "b",
                text: "The holiday a student gives up to study for an exam",
              },
              { id: "c", text: "The wages paid to staff" },
              { id: "d", text: "The rent paid for a shop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity cost",
                statement: "Next best alternative foregone.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Giving up the holiday is the next best alternative foregone.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** The holiday a student gives up to study for an exam",
          },
        },
        {
          id: "cieibs-u1-ba-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is enterprise considered important for economic growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removes all business risks" },
              {
                id: "b",
                text: "It creates jobs, drives innovation and organises the other factors of production",
              },
              {
                id: "c",
                text: "It guarantees every business will make a profit",
              },
              { id: "d", text: "It allows businesses to avoid paying taxes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enterprise",
                statement:
                  "Organising resources, taking risks, creating jobs and innovation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Entrepreneurs create jobs, innovate and drive growth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** It creates jobs, drives innovation and organises the other factors of production",
          },
        },
        {
          id: "cieibs-u1-ba-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A shareholder argues that 'profit maximisation is the only true objective of a business.' Which statement best evaluates this view?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is wrong because businesses never aim to make a profit",
              },
              {
                id: "b",
                text: "It is correct because shareholders are the only stakeholders",
              },
              {
                id: "c",
                text: "It is correct because all businesses must make a profit to survive",
              },
              {
                id: "d",
                text: "It is partly correct, but businesses may also pursue survival, growth, market share or social objectives",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Business objectives",
                statement:
                  "Profit, survival, growth, market share, social aims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Businesses pursue multiple objectives, not only profit maximisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** It is partly correct, but businesses may also pursue survival, growth, market share or social objectives",
          },
        },
        {
          id: "cieibs-u1-ba-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A business sells 200 units at 15 dollars each. Fixed costs are 1200 dollars and variable cost is 9 dollars per unit. Calculate (a) total costs and (b) profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3000, unit: "dollars" },
              { label: "b", answer: 0, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Costs and profit",
                statement:
                  "Total costs = fixed + variable; profit = revenue - total costs.",
              },
            ],
            steps: [
              {
                reasoning: "Revenue = 200 x 15 = 3000 dollars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(a) Total costs = 1200 + (200 x 9) = 3000 dollars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Profit = 3000 - 3000 = 0 dollars — the business breaks even.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 3000 dollars, (b) 0 dollars (break-even)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-ba-notes",
      title: "Business activity — notes",
      summary:
        "Business produces/sells goods/services. Factors: land, labour, capital, enterprise. Entrepreneurs take risks.",
      sections: [
        {
          heading: "Key idea",
          body: "Business activity transforms inputs into outputs, adding value.",
        },
        {
          heading: "Entrepreneurs",
          body: "Identify opportunities, organise resources, take risks.",
        },
      ],
    },
  ],
};
