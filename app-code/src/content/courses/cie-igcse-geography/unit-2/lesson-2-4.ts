import type { Lesson } from "../../../types.ts";

export const lesson314: Lesson = {
  id: "cieigeo-u2-lesson-2-4",
  code: "2-4",
  title: "Globalisation and TNCs",
  goal: "I CAN explain globalisation and the role of transnational corporations.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: globalisation"],
  
  vocabulary: [
    { term: "Globalisation", definition: "Increasing interconnectedness of world economies/societies." },
    { term: "Transnational corporation (TNC)", definition: "Company operating in multiple countries." },
    { term: "Outsourcing", definition: "Contracting production/services to external providers." },
    { term: "Free trade", definition: "Trade without government restrictions." },
    { term: "Cultural diffusion", definition: "Spread of cultural practices between societies." },
    { term: "Economic integration", definition: "Countries linking economies through trade/investment." },
  ],
  concepts: [
    {
      id: "cieigeo-u2-s4-glob",
      title: "Globalisation",
      skill: "Understand globalisation and TNC impacts.",
      lesson: {
        sections: [
          {
            heading: "Globalisation",
            body: "Increased international trade, investment, communication, migration. Driven by technology, transport, trade agreements. Creates opportunities and challenges.",
          },
          {
            heading: "TNCs",
            body: "Large companies operating globally: Apple, Nike, Coca-Cola. Benefits: jobs, investment, technology transfer. Concerns: exploitation, environmental damage, tax avoidance, cultural homogenisation.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world economic integration" },
          { name: "TNC", statement: "multi-country company" },
        ],
        workedExample: {
          problem: "A TNC builds a factory in a developing country. What are the impacts?",
          solution: "Positive: jobs, investment, skills. Negative: exploitation, environmental damage, profit repatriation.",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-gb-q1",
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
                              "text": "A type of migration"
                    },
                    {
                              "id": "c",
                              "text": "A weather pattern"
                    },
                    {
                              "id": "d",
                              "text": "A landform"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Globalisation",
                              "statement": "World integration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalisation = increasing world interconnectedness.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "World economic integration"
},
        },
        {
          id: "cieigeo-u2-gb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a transnational corporation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "TNC",
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
                              "reasoning": "e.g. Apple, Nike, Coca-Cola.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Multi-country company"
},
        },
        {
          id: "cieigeo-u2-gb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are benefits of TNCs for developing countries?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "TNC benefits",
                              "statement": "Positive impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Jobs, investment, technology transfer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Skills development, infrastructure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Economic growth stimulation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Jobs, investment, technology"
},
        },
        {
          id: "cieigeo-u2-gb-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define globalisation, TNC, outsourcing, free trade, cultural diffusion, economic integration. (b) What is globalisation? (c) What is a TNC? Give an example. (d) What are benefits of TNCs? (e) What are drawbacks of TNCs? (f) What is outsourcing? (g) What drives globalisation? (h) Evaluate whether globalisation benefits all countries equally.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Globalisation",
                              "statement": "TNCs, impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) World integration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Multi-country company; valid example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Jobs, investment, technology.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Exploitation, environmental damage, profit repatriation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Contracting to external providers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Technology, transport, trade agreements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Globalisation and TNCs."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-gb-notes",
      title: "Globalisation — notes",
      summary: "Globalisation=world integration. TNCs bring investment/jobs but also exploitation/environmental concerns.",
      sections: [
        { heading: "Key idea", body: "Globalisation creates winners and losers — benefits unevenly distributed." },
        { heading: "TNCs", body: "Large companies drive globalisation but raise ethical concerns." },
      ],
    },
  ],
};
