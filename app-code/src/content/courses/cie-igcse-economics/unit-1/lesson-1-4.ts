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
                              "text": "No trade"
                    },
                    {
                              "id": "b",
                              "text": "Economy where decisions made by markets"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "Government controlled"
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "cieiec-u1-sy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which economic system are most decisions about what to produce made through supply and demand?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feudal economy"
                    },
                    {
                              "id": "b",
                              "text": "Subsistence economy"
                    },
                    {
                              "id": "c",
                              "text": "Planned economy"
                    },
                    {
                              "id": "d",
                              "text": "Market economy"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Market economy",
                              "statement": "Decisions by markets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Supply/demand decisions = market economy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Market economy"
},
        },
        {
          id: "cieiec-u1-sy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A government that owns most industries and sets production targets and prices is running a:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Free market economy"
                    },
                    {
                              "id": "b",
                              "text": "Partnership"
                    },
                    {
                              "id": "c",
                              "text": "Planned (command) economy"
                    },
                    {
                              "id": "d",
                              "text": "Monopoly"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Command economy",
                              "statement": "Government control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Government sets targets/prices = command economy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Planned (command) economy"
},
        },
        {
          id: "cieiec-u1-sy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a disadvantage of a pure market economy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Absence of market failure"
                    },
                    {
                              "id": "b",
                              "text": "Growing inequality of income and wealth"
                    },
                    {
                              "id": "c",
                              "text": "Perfect allocative efficiency"
                    },
                    {
                              "id": "d",
                              "text": "Guaranteed full employment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Market economy",
                              "statement": "Disadvantages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Markets can produce inequality and market failure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Growing inequality"
},
        },
        {
          id: "cieiec-u1-sy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Most modern economies are described as 'mixed' because they:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Have no government involvement"
                    },
                    {
                              "id": "b",
                              "text": "Ban all private firms"
                    },
                    {
                              "id": "c",
                              "text": "Combine market forces with government intervention"
                    },
                    {
                              "id": "d",
                              "text": "Only use quotas and tariffs"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mixed economy",
                              "statement": "Combination system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mixed = market + government intervention.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Market forces plus government intervention"
},
        },
        {
          id: "cieiec-u1-sy-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a market economy, consumers and firms make about 70% of economic decisions and the government makes about 30%. By how many percentage points do market decisions exceed government decisions?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 40,
                              "unit": "percentage points"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mixed economy",
                              "statement": "Market plus government decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "70% - 30% = 40 percentage points.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Difference is 40 percentage points.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "40 percentage points"
},
        },
        {
          id: "cieiec-u1-sy-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A government spends $60 billion but collects only $55 billion in taxes. What is the budget balance, defined as spending minus revenue, in billions of dollars?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 5,
                              "unit": "$ billion"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Budget balance",
                              "statement": "Spending minus revenue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "60 - 55 = 5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Budget balance = $5 billion deficit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5 billion"
},
        },
        {
          id: "cieiec-u1-sy-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In one year, output under a planned system was $200 billion and under a mixed system $500 billion. By how many billions of dollars was mixed-system output larger?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 300,
                              "unit": "$ billion"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Output",
                              "statement": "Total production of an economy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "500 - 200 = 300.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$300 billion"
},
        },
        {
          id: "cieiec-u1-sy-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Country X, the government directly controls 25% of production decisions and markets control the rest. What percentage of decisions are market-based?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 75,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mixed economy",
                              "statement": "Market plus government control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100% - 25% = 75%.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "75%"
},
        },
        {
          id: "cieiec-u1-sy-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two advantages of a planned economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Planned economy",
                              "statement": "Advantages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Can aim for equality and avoid unemployment (in theory).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Can direct resources to priority goals.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Equality and directed resources"
},
        },
        {
          id: "cieiec-u1-sy-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a pure market economy can lead to a large gap between rich and poor.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Market economy",
                              "statement": "Inequality outcome."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Income depends on market rewards which may be unequal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Wealth can be passed on and concentrated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "No redistribution mechanism without government.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Unequal market rewards, no redistribution"
},
        },
        {
          id: "cieiec-u1-sy-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways in which governments intervene in a mixed economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mixed economy",
                              "statement": "Government intervention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Provide public goods such as defence and health services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use taxes and subsidies to correct market failure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Redistribute income through welfare and progressive taxation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Public provision, taxes/subsidies, redistribution"
},
        },
        {
          id: "cieiec-u1-sy-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that mixed economies are 'the best of both worlds'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Mixed economy",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Market forces give efficiency, choice and innovation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Government intervention corrects inequality and market failure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "But intervention can be costly or inefficient (government failure).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balance depends on the degree and design of intervention.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: 'best' is too strong — depends on context.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Depends on context — not automatically best"
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
