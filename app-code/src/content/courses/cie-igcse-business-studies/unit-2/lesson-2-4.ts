import type { Lesson } from "../../../types.ts";

export const lesson264: Lesson = {
  id: "cieibs-u2-lesson-2-4",
  code: "2-4",
  title: "Government Influence on Business",
  goal: "I CAN explain how government policies affect business activity.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: government influence"],
  
  vocabulary: [
    { term: "Government policy", definition: "Government decisions affecting business." },
    { term: "Taxation", definition: "Government revenue from businesses/individuals." },
    { term: "Subsidy", definition: "Government financial support to businesses." },
    { term: "Regulation", definition: "Government rules controlling business." },
    { term: "Minimum wage", definition: "Legal minimum hourly pay." },
    { term: "Competition policy", definition: "Rules preventing unfair business practices." },
  ],
  concepts: [
    {
      id: "cieibs-u2-s4-gov",
      title: "Government influence",
      skill: "Understand government-business relationships.",
      lesson: {
        sections: [
          {
            heading: "Government tools",
            body: "Taxation: income tax, corporation tax, VAT — raises revenue, affects behaviour. Subsidies: support specific industries. Regulation: health/safety, employment, environmental rules. Competition policy: prevent monopolies.",
          },
          {
            heading: "Impact on business",
            body: "Government policies create opportunities (subsidies, infrastructure) and constraints (taxes, regulations). Businesses must comply with legal requirements.",
          },
        ],
        keyFormulas: [
          { name: "Taxation", statement: "government revenue" },
          { name: "Subsidy", statement: "government support" },
          { name: "Regulation", statement: "government rules" },
        ],
        workedExample: {
          problem: "How does a minimum wage affect a restaurant business?",
          solution: "Increases labour costs but may improve employee retention/motivation. Business must comply with legal requirement.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-gov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a subsidy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Government financial support to businesses"
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
                              "name": "Subsidy",
                              "statement": "Government support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subsidy = government financial support.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Government support"
},
        },
        {
          id: "cieibs-u2-gov-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is regulation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Regulation",
                              "statement": "Government rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Government rules controlling business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. health/safety, employment, environmental.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Government rules"
},
        },
        {
          id: "cieibs-u2-gov-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does taxation affect business?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Taxation",
                              "statement": "Tax impact on business."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reduces profit/income available to business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "May affect pricing and investment decisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different taxes have different impacts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tax impact on business"
},
        },
        {
          id: "cieibs-u2-gov-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define government policy, taxation, subsidy, regulation, minimum wage, competition policy. (b) What is a subsidy? (c) What is regulation? (d) What is taxation? (e) Give 3 examples of government tools. (f) How does taxation affect business? (g) How does regulation affect business? (h) Evaluate whether government should support small businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Government influence",
                              "statement": "Policies, tools, impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Government financial support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Government rules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Government revenue tool.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three valid tools.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Reduces profit, affects decisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Adds compliance costs, protects stakeholders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Government influence on business."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-gov-notes",
      title: "Government influence — notes",
      summary: "Government tools: taxation, subsidies, regulation, competition policy. Policies create opportunities and constraints.",
      sections: [
        { heading: "Key idea", body: "Government balances economic growth with social/environmental protection." },
        { heading: "Regulation", body: "Rules protect workers, consumers, environment but add compliance costs." },
      ],
    },
  ],
};
