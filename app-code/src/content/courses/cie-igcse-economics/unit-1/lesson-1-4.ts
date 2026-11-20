import type { Lesson } from "../../../types.ts";

export const lesson274: Lesson = {
  id: "cieiec-u1-lesson-1-4",
  code: "1-4",
  title: "Economic Systems",
  goal: "I CAN compare market, planned and mixed economic systems.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 2: economic systems"],
  
  vocabulary: [
    { term: "Market economy", definition: "Economy where decisions made by markets." },
    { term: "Planned economy", definition: "Economy where government controls decisions." },
    { term: "Mixed economy", definition: "Combination of market and planned." },
    { term: "Free market", definition: "Minimal government intervention." },
    { term: "Command economy", definition: "Government controls production/allocation." },
    { term: "Price mechanism", definition: "Supply/demand determines prices." },
  ],
  concepts: [
    {
      id: "cieiec-u1-s4-sys",
      title: "Economic systems",
      skill: "Compare different economic systems.",
      lesson: {
        sections: [
          {
            heading: "Market economy",
            body: "Decisions by supply/demand. Pros: efficiency, innovation, consumer choice. Cons: inequality, market failure, instability.",
          },
          {
            heading: "Planned economy",
            body: "Government controls production/allocation. Pros: equality, no unemployment (theoretically). Cons: inefficiency, lack of innovation, shortages.",
          },
          {
            heading: "Mixed economy",
            body: "Most countries use mixed systems — market forces with government intervention for equity/stability.",
          },
        ],
        keyFormulas: [
          { name: "Market", statement: "supply/demand decisions" },
          { name: "Planned", statement: "government control" },
          { name: "Mixed", statement: "combination" },
        ],
        workedExample: {
          problem: "Why do most countries have mixed economies?",
          solution: "Pure market causes inequality/failure; pure planned causes inefficiency. Mixed balances efficiency with equity.",
        },
      },
      questions: [
        {
          id: "cieiec-u1-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a market economy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Economy where decisions made by markets"
                    },
                    {
                              "id": "b",
                              "text": "Government controlled"
                    },
                    {
                              "id": "c",
                              "text": "No trade"
                    },
                    {
                              "id": "d",
                              "text": "A type of tax"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Market economy",
                              "statement": "Market decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Market economy = supply/demand decisions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Market decisions"
},
        },
        {
          id: "cieiec-u1-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a planned economy?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Planned economy",
                              "statement": "Government control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Government controls production/allocation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. former Soviet Union, North Korea.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Government control"
},
        },
        {
          id: "cieiec-u1-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a mixed economy? Why is it common?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mixed economy",
                              "statement": "Combination system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combination of market and planned.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balances efficiency with equity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Most countries use mixed systems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Market + government intervention"
},
        },
        {
          id: "cieiec-u1-sy-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define market economy, planned economy, mixed economy, free market, command economy, price mechanism. (b) What is a market economy? (c) What is a planned economy? (d) What is a mixed economy? (e) What are advantages of market economy? (f) What are disadvantages of planned economy? (g) Why do most countries use mixed economies? (h) Compare market vs planned economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Economic systems",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Market decisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Government control.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Combination system.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Efficiency, innovation, choice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Inefficiency, shortages, no innovation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Balances efficiency with equity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid comparison.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Economic systems comparison."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u1-sy-notes",
      title: "Economic systems — notes",
      summary: "Market=efficiency; planned=equality; mixed=balance. Most countries use mixed systems.",
      sections: [
        { heading: "Key idea", body: "No pure system is perfect — mixed economies balance competing goals." },
        { heading: "Price mechanism", body: "Supply/demand determines prices in market economies." },
      ],
    },
  ],
};
