import type { Lesson } from "../../../types.ts";

export const lesson273: Lesson = {
  id: "cieiec-u1-lesson-1-3",
  code: "1-3",
  title: "Specialisation and Division of Labour",
  goal: "I CAN explain specialisation, division of labour and their benefits.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 2: specialisation"],
  
  vocabulary: [
    { term: "Specialisation", definition: "Focusing on producing specific goods/services." },
    { term: "Division of labour", definition: "Breaking production into specialised tasks." },
    { term: "Absolute advantage", definition: "Producing more output with same inputs." },
    { term: "Comparative advantage", definition: "Lower opportunity cost of production." },
    { term: "Productivity", definition: "Output per unit of input." },
    { term: "Efficiency", definition: "Using resources effectively." },
  ],
  concepts: [
    {
      id: "cieiec-u1-s3-spec",
      title: "Specialisation",
      skill: "Understand specialisation and its benefits.",
      lesson: {
        sections: [
          {
            heading: "Specialisation",
            body: "Countries/workers specialise in what they do best. Absolute advantage: produce more with same inputs. Comparative advantage: lower opportunity cost — enables trade benefits even if one country is better at everything.",
          },
          {
            heading: "Division of labour",
            body: "Breaking production into specialised tasks (Adam Smith's pin factory). Benefits: increased productivity, skill development, time savings. Drawbacks: boring work, interdependence, unemployment risk.",
          },
        ],
        keyFormulas: [
          { name: "Absolute advantage", statement: "more output, same inputs" },
          { name: "Comparative advantage", statement: "lower opportunity cost" },
          { name: "Division of labour", statement: "specialised tasks" },
        ],
        workedExample: {
          problem: "Country A can produce 100 cars OR 50 computers. Country B can produce 80 cars OR 40 computers. Who has absolute advantage? Who should specialise?",
          solution: "A has absolute advantage in both. But B has lower opportunity cost in one — both benefit from specialisation based on comparative advantage.",
        },
      },
      questions: [
        {
          id: "cieiec-u1-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is specialisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of tax"
                    },
                    {
                              "id": "b",
                              "text": "A market structure"
                    },
                    {
                              "id": "c",
                              "text": "Focusing on producing specific goods/services"
                    },
                    {
                              "id": "d",
                              "text": "Producing everything"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specialisation",
                              "statement": "Focusing on specific products."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specialisation = focusing on specific goods/services.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Focusing on specific products"
},
        },
        {
          id: "cieiec-u1-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is comparative advantage?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comparative advantage",
                              "statement": "Lower opportunity cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lower opportunity cost of production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables trade benefits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Lower opportunity cost"
},
        },
        {
          id: "cieiec-u1-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are benefits of the division of labour?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Division of labour",
                              "statement": "Benefits and drawbacks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Increased productivity, skill development.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Time savings, efficiency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Drawbacks: boring work, interdependence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Productivity, skills, efficiency"
},
        },
        {
          id: "cieiec-u1-sp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define specialisation, division of labour, absolute advantage, comparative advantage, productivity, efficiency. (b) What is specialisation? (c) What is division of labour? (d) What is absolute advantage? (e) What is comparative advantage? (f) What are benefits of specialisation? (g) What are drawbacks of division of labour? (h) Explain why countries specialise and trade.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Specialisation",
                              "statement": "Advantages, trade."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Focusing on specific products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Specialised tasks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) More output, same inputs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Lower opportunity cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Efficiency, quality, lower costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Boring, interdependence, unemployment risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Comparative advantage enables mutual benefit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Specialisation and trade."
},
        },
        {
          id: "cieiec-u1-sp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A worker spends all their time producing only one type of product. This is an example of:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Specialisation"
                    },
                    {
                              "id": "b",
                              "text": "Inflation"
                    },
                    {
                              "id": "c",
                              "text": "Substitution"
                    },
                    {
                              "id": "d",
                              "text": "Diversification"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specialisation",
                              "statement": "Focusing on one product."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Producing only one product = specialisation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Specialisation"
},
        },
        {
          id: "cieiec-u1-sp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Using the same inputs, Country A can produce more of both goods than Country B. Country A has:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A trade deficit"
                    },
                    {
                              "id": "b",
                              "text": "No advantage in either good"
                    },
                    {
                              "id": "c",
                              "text": "Comparative advantage only"
                    },
                    {
                              "id": "d",
                              "text": "Absolute advantage in both goods"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Absolute advantage",
                              "statement": "More output, same inputs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More output with same inputs = absolute advantage in both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Absolute advantage in both goods"
},
        },
        {
          id: "cieiec-u1-sp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a benefit of the division of labour?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An equal distribution of income"
                    },
                    {
                              "id": "b",
                              "text": "Increased productivity"
                    },
                    {
                              "id": "c",
                              "text": "Guaranteed higher wages"
                    },
                    {
                              "id": "d",
                              "text": "No need for skills"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Division of labour",
                              "statement": "Specialised tasks raise productivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specialised tasks raise productivity; wages/income not guaranteed.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Increased productivity"
},
        },
        {
          id: "cieiec-u1-sp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country should specialise in producing the good for which it has:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More workers than rivals"
                    },
                    {
                              "id": "b",
                              "text": "A higher absolute cost"
                    },
                    {
                              "id": "c",
                              "text": "A higher price"
                    },
                    {
                              "id": "d",
                              "text": "A lower opportunity cost"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comparative advantage",
                              "statement": "Lower opportunity cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specialisation based on comparative advantage = lower opportunity cost.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "A lower opportunity cost"
},
        },
        {
          id: "cieiec-u1-sp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Country A can produce 100 cars or 50 computers using all its resources. What is the opportunity cost, in cars, of producing one computer?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 2,
                              "unit": "cars"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Opportunity cost",
                              "statement": "Next best alternative forgone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Giving up 100 cars to make 50 computers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Opportunity cost per computer = 100 / 50 = 2 cars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2 cars"
},
        },
        {
          id: "cieiec-u1-sp-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A factory produces 200 units per worker per day with specialisation, compared with 100 units without it. What is the percentage increase in productivity?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 100,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Productivity",
                              "statement": "Output per unit of input."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Increase = (200 - 100) / 100 x 100%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Percentage increase = 100%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "100%"
},
        },
        {
          id: "cieiec-u1-sp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Adam Smith's pin factory, one worker can produce about 20 pins per day working alone but around 4,800 pins per day in a specialised team. How many more pins does the specialised worker produce per day?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 4780,
                              "unit": "pins"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Division of labour",
                              "statement": "Specialised tasks raise output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4800 - 20 = 4780 more pins per day.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "4,780 pins"
},
        },
        {
          id: "cieiec-u1-sp-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two benefits of specialisation for a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Specialisation",
                              "statement": "Benefits to firms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher productivity / lower costs per unit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Workers develop skills; quality may improve.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Efficiency and skill development"
},
        },
        {
          id: "cieiec-u1-sp-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why two countries can both gain from trade even if one has an absolute advantage in producing everything.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative advantage",
                              "statement": "Trade gains from opportunity costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Absolute advantage does not determine trade gains.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each country has a different lower opportunity cost in some good.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Specialising by comparative advantage raises total output for both.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Comparative advantage enables mutual gains"
},
        },
        {
          id: "cieiec-u1-sp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two drawbacks of the division of labour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Division of labour",
                              "statement": "Drawbacks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Work becomes boring / repetitive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Workers become interdependent; unemployment risk if demand falls.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Boring work and interdependence"
},
        },
        {
          id: "cieiec-u1-sp-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A farmer switches from growing many different crops to specialising in wheat. Explain two ways this could raise efficiency.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Specialisation",
                              "statement": "Efficiency gains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Farmer develops expertise in wheat production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Can invest in specialised equipment for wheat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Higher output per unit of input = greater productivity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Skill, investment, higher productivity"
},
        },
        {
          id: "cieiec-u1-sp-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that specialisation always benefits workers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Specialisation",
                              "statement": "Benefits vs drawbacks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefits: higher productivity, skill development, possibly higher wages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Drawbacks: repetitive work, deskilling, dependence on one industry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unemployment risk if demand for the specialised product falls.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interdependence makes workers vulnerable to shocks.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: benefits depend on context — not guaranteed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Not always — benefits depend on context"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u1-sp-notes",
      title: "Specialisation — notes",
      summary: "Specialisation=focusing on strengths. Comparative advantage=lower opportunity cost enables trade.",
      sections: [
        { heading: "Key idea", body: "Specialisation increases efficiency and enables mutually beneficial trade." },
        { heading: "Division of labour", body: "Breaking tasks into specialised steps boosts productivity but can be monotonous." },
      ],
    },
  ],
};
