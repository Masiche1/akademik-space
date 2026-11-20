import type { Lesson } from "../../../types.ts";

export const lesson251: Lesson = {
  id: "cieibs-u1-lesson-1-1",
  code: "1-1",
  title: "Business Activity, Enterprise and Entrepreneurship",
  goal: "I CAN define business activity, enterprise and entrepreneurship and explain their roles.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: understanding business activity"],
  
  vocabulary: [
    { term: "Business activity", definition: "Process of producing and selling goods/services." },
    { term: "Enterprise", definition: "Organisation that produces/sells goods or services." },
    { term: "Entrepreneur", definition: "Person who starts and runs a business, taking risks." },
    { term: "Factors of production", definition: "Land, labour, capital, enterprise." },
    { term: "Added value", definition: "Increase in value from production process." },
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
          problem: "A farmer grows wheat, mills it into flour, sells to baker who makes bread. Where is value added?",
          solution: "Each stage adds value: wheat→flour (processing), flour→bread (baking). Total value = bread price - wheat cost.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-ba-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the factors of production?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Land, labour, capital, enterprise"
                    },
                    {
                              "id": "b",
                              "text": "Money, machines, materials, managers"
                    },
                    {
                              "id": "c",
                              "text": "Supply, demand, price, profit"
                    },
                    {
                              "id": "d",
                              "text": "Raw materials, finished goods, services, profits"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Factors of production",
                              "statement": "Land, labour, capital, enterprise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Four factors: land, labour, capital, enterprise.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Land, labour, capital, enterprise"
},
        },
        {
          id: "cieibs-u1-ba-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an entrepreneur?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Entrepreneur",
                              "statement": "Business starter taking risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Person who starts and runs a business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Takes financial risks, identifies opportunities.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Business starter taking risks"
},
        },
        {
          id: "cieibs-u1-ba-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is added value? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Added value",
                              "statement": "Value increase from production."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Added value = selling price - input costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: wood→furniture adds value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows production creates value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Value increase from production"
},
        },
        {
          id: "cieibs-u1-ba-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business activity, enterprise, entrepreneur, factors of production, added value, opportunity cost. (b) What are the four factors? (c) What is an entrepreneur? (d) What is added value? (e) What is opportunity cost? (f) Give an example of added value. (g) Why do entrepreneurs matter? (h) Explain how a bakery creates added value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Business fundamentals",
                              "statement": "Activity, enterprise, value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Land, labour, capital, enterprise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Business starter taking risks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Selling price minus input costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Next best alternative foregone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid added value example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Create jobs, innovate, drive growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Flour→bread adds value through baking.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Business activity and enterprise."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-ba-notes",
      title: "Business activity — notes",
      summary: "Business produces/sells goods/services. Factors: land, labour, capital, enterprise. Entrepreneurs take risks.",
      sections: [
        { heading: "Key idea", body: "Business activity transforms inputs into outputs, adding value." },
        { heading: "Entrepreneurs", body: "Identify opportunities, organise resources, take risks." },
      ],
    },
  ],
};
