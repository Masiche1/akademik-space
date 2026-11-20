import type { Lesson } from "../../../types.ts";

export const lesson262: Lesson = {
  id: "cieibs-u2-lesson-2-2",
  code: "2-2",
  title: "Globalisation and Multinational Corporations",
  goal: "I CAN explain globalisation and the role of multinational corporations.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: globalisation"],
  
  vocabulary: [
    { term: "Globalisation", definition: "Increasing interconnectedness of world economies." },
    { term: "Multinational corporation (MNC)", definition: "Company operating in multiple countries." },
    { term: "Offshoring", definition: "Moving production to lower-cost countries." },
    { term: "Outsourcing", definition: "Contracting work to external providers." },
    { term: "Free trade", definition: "Trade without tariffs/quotas between countries." },
    { term: "Trade bloc", definition: "Group of countries with trade agreements." },
  ],
  concepts: [
    {
      id: "cieibs-u2-s2-glob",
      title: "Globalisation",
      skill: "Understand globalisation and MNCs.",
      lesson: {
        sections: [
          {
            heading: "Globalisation",
            body: "Increased international trade, investment, communication. Driven by technology, transport improvements, trade agreements. Creates opportunities (new markets, cheaper inputs) and challenges (competition, cultural impact).",
          },
          {
            heading: "MNCs",
            body: "Large companies operating globally: Apple, Samsung, Coca-Cola. Benefits: jobs, investment, technology transfer. Concerns: tax avoidance, exploitation, environmental impact, cultural homogenisation.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world economic interconnectedness" },
          { name: "MNC", statement: "multi-country operations" },
        ],
        workedExample: {
          problem: "A factory moves production from UK to Vietnam. What is this and what are implications?",
          solution: "Offshoring — lower labour costs but job losses in UK, potential exploitation concerns, cheaper products for consumers.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-gq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is globalisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Increasing interconnectedness of world economies"
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
                              "name": "Globalisation",
                              "statement": "World economic integration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalisation = increasing world economic interconnectedness.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "World economic integration"
},
        },
        {
          id: "cieibs-u2-gq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a multinational corporation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MNC",
                              "statement": "Multi-country company."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Company operating in multiple countries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. Apple, Samsung, Coca-Cola.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Multi-country company"
},
        },
        {
          id: "cieibs-u2-gq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is offshoring? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Offshoring",
                              "statement": "Production relocation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Moving production to lower-cost countries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: manufacturing moved to Asia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Driven by lower labour costs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Production relocation"
},
        },
        {
          id: "cieibs-u2-gq-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define globalisation, MNC, offshoring, outsourcing, free trade, trade bloc. (b) What is globalisation? (c) What is an MNC? Give an example. (d) What is offshoring? (e) What is outsourcing? (f) What is free trade? (g) What is a trade bloc? (h) Evaluate benefits and drawbacks of globalisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Globalisation",
                              "statement": "MNCs, trade, impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) World economic integration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Multi-country company; valid example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Production relocation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Contracting to external providers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Trade without tariffs/quotas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Country group with trade agreements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Globalisation and MNCs."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-gq-notes",
      title: "Globalisation — notes",
      summary: "Globalisation=world economic integration. MNCs=multi-country companies. Offshoring=production relocation.",
      sections: [
        { heading: "Key idea", body: "Globalisation creates opportunities (markets, cheap inputs) and challenges (competition, exploitation)." },
        { heading: "MNCs", body: "Large global companies — bring investment but also concerns about power and ethics." },
      ],
    },
  ],
};
