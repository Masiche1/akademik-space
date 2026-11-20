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
                              "text": "Focusing on producing specific goods/services"
                    },
                    {
                              "id": "b",
                              "text": "Producing everything"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "A market structure"
                    }
          ],
          "correctChoiceId": "a"
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
