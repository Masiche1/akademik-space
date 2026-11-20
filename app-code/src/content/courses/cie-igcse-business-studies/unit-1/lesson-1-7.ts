import type { Lesson } from "../../../types.ts";

export const lesson257: Lesson = {
  id: "cieibs-u1-lesson-1-7",
  code: "1-7",
  title: "Market Research and Marketing",
  goal: "I CAN explain market research methods and the marketing mix.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: marketing"],
  
  vocabulary: [
    { term: "Market research", definition: "Gathering information about markets/customers." },
    { term: "Primary research", definition: "New data collected directly." },
    { term: "Secondary research", definition: "Using existing data." },
    { term: "Marketing mix", definition: "Product, price, place, promotion." },
    { term: "Target market", definition: "Specific customer group business aims to serve." },
    { term: "Market segmentation", definition: "Dividing market into groups." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s7-mkt",
      title: "Market research and marketing",
      skill: "Understand research methods and marketing mix.",
      lesson: {
        sections: [
          {
            heading: "Market research",
            body: "Primary: questionnaires, interviews, observations, experiments — new data. Secondary: government statistics, reports, competitor data — existing data. Both inform marketing decisions.",
          },
          {
            heading: "Marketing mix",
            body: "Product: features/quality. Price: pricing strategy. Place: distribution channels. Promotion: advertising/PR. Target market: specific customer segment. Segmentation: divide market by age, income, location, lifestyle.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "new data collected" },
          { name: "Secondary", statement: "existing data used" },
          { name: "4Ps", statement: "product, price, place, promotion" },
        ],
        workedExample: {
          problem: "A new coffee shop wants to understand its market. What research should it do?",
          solution: "Primary: survey potential customers, observe foot traffic. Secondary: local demographics, competitor analysis.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-mr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is market research?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gathering information about markets/customers"
                    },
                    {
                              "id": "b",
                              "text": "Selling products"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
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
                              "name": "Market research",
                              "statement": "Market information gathering."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research = gathering market/customer info.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Market information gathering"
},
        },
        {
          id: "cieibs-u1-mr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the marketing mix?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Marketing mix",
                              "statement": "4Ps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Product, price, place, promotion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Four elements of marketing strategy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Product, price, place, promotion"
},
        },
        {
          id: "cieibs-u1-mr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare primary and secondary research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research types",
                              "statement": "Primary vs secondary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary = new data collected directly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Secondary = existing data used.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Primary more expensive but tailored; secondary cheaper but less specific.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "New vs existing data"
},
        },
        {
          id: "cieibs-u1-mr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define market research, primary research, secondary research, marketing mix, target market, market segmentation. (b) What is market research? (c) What is primary research? Give 2 examples. (d) What is secondary research? Give 2 examples. (e) What is the marketing mix? (f) What are the 4Ps? (g) What is market segmentation? (h) Design a marketing plan for a new bakery.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Marketing",
                              "statement": "Research, mix, segmentation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Market information gathering.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) New data; questionnaires, interviews.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Existing data; government stats, reports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Product, price, place, promotion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Four Ps correctly identified.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Dividing market into groups.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid marketing plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Market research and marketing."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-mr-notes",
      title: "Marketing — notes",
      summary: "Research=primary(new)/secondary(existing). Marketing mix=4Ps. Segmentation=target specific groups.",
      sections: [
        { heading: "Key idea", body: "Marketing mix coordinates product, price, place, promotion for target market." },
        { heading: "Segmentation", body: "Divide market by demographics, psychographics, behaviour." },
      ],
    },
  ],
};
