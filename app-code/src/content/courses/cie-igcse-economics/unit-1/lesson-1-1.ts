import type { Lesson } from "../../../types.ts";

export const lesson271: Lesson = {
  id: "cieiec-u1-lesson-1-1",
  code: "1-1",
  title: "The Economic Problem: Scarcity and Choice",
  goal: "I CAN explain scarcity, opportunity cost and the economic problem.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 2: understanding economic problems"],
  
  vocabulary: [
    { term: "Economics", definition: "Study of how societies allocate scarce resources." },
    { term: "Scarcity", definition: "Limited resources vs unlimited wants." },
    { term: "Economic problem", definition: "How to allocate scarce resources among unlimited wants." },
    { term: "Opportunity cost", definition: "Next best alternative foregone." },
    { term: "Needs", definition: "Essential for survival." },
    { term: "Wants", definition: "Desires beyond basic needs." },
  ],
  concepts: [
    {
      id: "cieiec-u1-s1-scarce",
      title: "Scarcity and choice",
      skill: "Understand the fundamental economic problem.",
      lesson: {
        sections: [
          {
            heading: "The economic problem",
            body: "Resources are scarce but wants are unlimited. Every choice involves opportunity cost — what you give up. Economics studies how societies make these choices.",
          },
          {
            heading: "Needs vs wants",
            body: "Needs: food, shelter, clothing — essential. Wants: desires that improve quality of life. Scarcity means we can't satisfy all wants — must prioritise.",
          },
        ],
        keyFormulas: [
          { name: "Economic problem", statement: "scarce resources, unlimited wants" },
          { name: "Opportunity cost", statement: "next best alternative" },
        ],
        workedExample: {
          problem: "You have $10 and want to buy either a book or a movie ticket. You choose the book. What is the opportunity cost?",
          solution: "Opportunity cost = the movie ticket you gave up — the next best alternative.",
        },
      },
      questions: [
        {
          id: "cieiec-u1-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the economic problem?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Too much money"
                    },
                    {
                              "id": "b",
                              "text": "Too many workers"
                    },
                    {
                              "id": "c",
                              "text": "Too much production"
                    },
                    {
                              "id": "d",
                              "text": "Scarce resources vs unlimited wants"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Economic problem",
                              "statement": "Scarcity vs wants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scarce resources can't satisfy unlimited wants.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Scarcity vs unlimited wants"
},
        },
        {
          id: "cieiec-u1-sc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is opportunity cost?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Opportunity cost",
                              "statement": "Next best alternative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Next best alternative foregone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Every choice has opportunity cost.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Next best alternative foregone"
},
        },
        {
          id: "cieiec-u1-sc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You spend $50 on a concert ticket instead of saving for a laptop. What is the opportunity cost?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Opportunity cost",
                              "statement": "Applying concept."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify the choice made.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identify the alternative foregone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Opportunity cost = $50 not saved for laptop.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$50 not saved for laptop"
},
        },
        {
          id: "cieiec-u1-sc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define economics, scarcity, economic problem, opportunity cost, needs, wants. (b) What is the economic problem? (c) What is opportunity cost? (d) What are needs? Give 3 examples. (e) What are wants? Give 3 examples. (f) Why can't we satisfy all wants? (g) Give an example of opportunity cost. (h) Explain why choice is necessary.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Scarcity",
                              "statement": "Economic problem, opportunity cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Scarce resources vs unlimited wants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Next best alternative.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three valid needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three valid wants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Resources are limited.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid opportunity cost example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Choice necessary due to scarcity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Scarcity and the economic problem."
},
        },
        {
          id: "cieiec-u1-sc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a need rather than a want?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "A cinema ticket" },
              { "id": "b", "text": "Clean drinking water" },
              { "id": "c", "text": "A designer handbag" },
              { "id": "d", "text": "A new smartphone" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Needs", "statement": "Essential for survival." }
            ],
            "steps": [
              { "reasoning": "Needs are essential for survival; clean water qualifies while the others are wants.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** Clean drinking water"
          }
        },
        {
          id: "cieiec-u1-sc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student has one free evening and can either revise for a test or watch a film. If she chooses to revise, the opportunity cost is:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "The time spent revising" },
              { "id": "b", "text": "The cost of the film ticket" },
              { "id": "c", "text": "Nothing, because revision is free" },
              { "id": "d", "text": "The benefit of having watched the film" }
            ],
            "correctChoiceId": "d"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Opportunity cost", "statement": "Next best alternative foregone." }
            ],
            "steps": [
              { "reasoning": "The next best alternative to revising is watching the film; its benefit is foregone.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** The benefit of having watched the film"
          }
        },
        {
          id: "cieiec-u1-sc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which situation best illustrates scarcity?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "A bakery has more bread than customers want to buy" },
              { "id": "b", "text": "A country has limited farmland but unlimited wants for food" },
              { "id": "c", "text": "A government has a surplus budget" },
              { "id": "d", "text": "A shop gives away free samples to shoppers" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Scarcity", "statement": "Limited resources versus unlimited wants." }
            ],
            "steps": [
              { "reasoning": "Scarcity means limited resources cannot satisfy unlimited wants.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** Limited farmland with unlimited wants for food"
          }
        },
        {
          id: "cieiec-u1-sc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Jamal spends his entire $20 allowance on a video game instead of a book. The opportunity cost of his choice is:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "The game he now owns" },
              { "id": "b", "text": "Nothing, because money is not a resource" },
              { "id": "c", "text": "The book he could have bought" },
              { "id": "d", "text": "The $20 he spent" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Opportunity cost", "statement": "Next best alternative foregone." }
            ],
            "steps": [
              { "reasoning": "The book is the next best alternative to the game and is foregone.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** The book he could have bought"
          }
        },
        {
          id: "cieiec-u1-sc-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A government must choose between building a hospital or a new motorway with its limited budget. The opportunity cost of building the hospital is:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "The motorway that could have been built instead" },
              { "id": "b", "text": "The doctors who work in it" },
              { "id": "c", "text": "The money spent on building it" },
              { "id": "d", "text": "The tax revenue used to pay for it" }
            ],
            "correctChoiceId": "a"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Opportunity cost", "statement": "Next best alternative foregone." }
            ],
            "steps": [
              { "reasoning": "The next best alternative to the hospital is the motorway; giving it up is the cost of the choice.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** The motorway that could have been built instead"
          }
        },
        {
          id: "cieiec-u1-sc-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about needs, wants and scarcity is correct?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Scarcity means not all wants can be satisfied" },
              { "id": "b", "text": "Needs are unlimited while wants are limited" },
              { "id": "c", "text": "All wants are essential for survival" },
              { "id": "d", "text": "Opportunity cost applies only to wants" }
            ],
            "aorrectChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Economic problem", "statement": "Scarce resources, unlimited wants." }
            ],
            "steps": [
              { "reasoning": "Because resources are scarce relative to unlimited wants, choices must be made.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(c)** Scarcity means not all wants can be satisfied"
          }
        },
        {
          id: "cieiec-u1-sc-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ben can spend his entire $60 allowance on either a bicycle helmet or a backpack. He chooses the helmet. What is the opportunity cost of his choice, in dollars?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 60, "unit": "$" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Opportunity cost", "statement": "Value of the next best alternative foregone." }
            ],
            "steps": [
              { "reasoning": "The next best alternative is the backpack, worth the full $60 allowance.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Opportunity cost = $60"
          }
        },
        {
          id: "cieiec-u1-sc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student has 10 free hours before an exam. She could earn $15 per hour at a part-time job but chooses to spend all 10 hours revising instead. What is the opportunity cost of her choice in dollars?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 150, "unit": "$" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Opportunity cost", "statement": "Applying concept to earnings foregone." }
            ],
            "steps": [
              { "reasoning": "The next best alternative is working: 10 hours × $15 = $150 of earnings foregone.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Opportunity cost = $150"
          }
        },
        {
          id: "cieiec-u1-sc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A farmer has 20 hectares of land. Wheat earns $4,000 per hectare per year while barley earns $2,500 per hectare. He plants all 20 hectares with wheat. What is the opportunity cost of this choice in dollars per year?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 50000, "unit": "$" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Opportunity cost", "statement": "Applying concept to farm output." }
            ],
            "steps": [
              { "reasoning": "The next best alternative is barley on all 20 hectares: 20 × $2,500 = $50,000 foregone.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Opportunity cost = $50,000 per year"
          }
        },
        {
          id: "cieiec-u1-sc-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "With her $100 budget, Priya can buy either 5 units of good X at $20 each or 4 units of good Y at $25 each. She chooses to buy 5 units of X. What is the opportunity cost of her choice in units of good Y?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 4, "unit": "units" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Opportunity cost", "statement": "Applying concept across goods." }
            ],
            "steps": [
              { "reasoning": "The $100 spent on X could have bought 4 units of Y; those 4 units are foregone.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Opportunity cost = 4 units of Y"
          }
        },
        {
          id: "cieiec-u1-sc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An economy can produce either 100 tonnes of rice or 50 tonnes of wheat using all of its resources. It chooses to produce 100 tonnes of rice. What is the opportunity cost of this choice in tonnes of wheat?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 50, "unit": "tonnes" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Opportunity cost", "statement": "Applying concept to national output." }
            ],
            "steps": [
              { "reasoning": "Producing all rice means giving up all 50 tonnes of wheat, the next best alternative use of resources.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Opportunity cost = 50 tonnes of wheat"
          }
        },
        {
          id: "cieiec-u1-sc-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain, with examples, why scarcity forces individuals and governments to make choices. Define opportunity cost.",
          response: {
            "type": "open"
          },
          markscheme: {
            "principles": [
              { "kind": "technique", "name": "Scarcity", "statement": "Scarcity forces choice; opportunity cost measures the trade-off." }
            ],
            "steps": [
              { "reasoning": "Resources are limited while wants are unlimited, so not everything can be produced or consumed.", "marks": 1, "markCode": "M" },
              { "reasoning": "Because not all wants can be satisfied, individuals and governments must choose between alternatives.", "marks": 1, "markCode": "M" },
              { "reasoning": "Opportunity cost is the next best alternative foregone when a choice is made.", "marks": 1, "markCode": "M" },
              { "reasoning": "Valid example, e.g. choosing to spend money on a concert ticket means the saving or other purchase foregone.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Scarcity forces choice; opportunity cost is the next best alternative foregone."
          }
        }
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u1-sc-notes",
      title: "Scarcity — notes",
      summary: "Economic problem: scarce resources vs unlimited wants. Every choice has opportunity cost.",
      sections: [
        { heading: "Key idea", body: "Scarcity forces choices — economics studies how we allocate resources." },
        { heading: "Opportunity cost", body: "The cost of a choice is what you give up — the next best alternative." },
      ],
    },
  ],
};
