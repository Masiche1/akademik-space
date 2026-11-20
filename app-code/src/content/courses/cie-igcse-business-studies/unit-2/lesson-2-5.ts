import type { Lesson } from "../../../types.ts";

export const lesson265: Lesson = {
  id: "cieibs-u2-lesson-2-5",
  code: "2-5",
  title: "Small Businesses and Entrepreneurs",
  goal: "I CAN describe small business characteristics, challenges and support.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: small businesses"],
  
  vocabulary: [
    { term: "Small business", definition: "Business with limited size/employees." },
    { term: "Entrepreneurship", definition: "Starting and running new businesses." },
    { term: "Business plan", definition: "Document outlining business strategy." },
    { term: "Startup", definition: "Newly established business." },
    { term: "Growth barrier", definition: "Obstacle preventing business expansion." },
    { term: "Support network", definition: "Resources helping small businesses." },
  ],
  concepts: [
    {
      id: "cieibs-u2-s5-small",
      title: "Small businesses",
      skill: "Understand small business dynamics.",
      lesson: {
        sections: [
          {
            heading: "Small business characteristics",
            body: "Advantages: flexibility, close customer relationships, lower overheads, quick decisions. Challenges: limited capital, lack of economies of scale, vulnerability to competition, difficulty accessing finance.",
          },
          {
            heading: "Support and growth",
            body: "Support: government grants, business incubators, mentoring, training. Growth barriers: finance, skills, market access, regulation. Successful small businesses innovate and find niches.",
          },
        ],
        keyFormulas: [
          { name: "Small business", statement: "limited size/employees" },
          { name: "Growth barriers", statement: "finance, skills, market access" },
        ],
        workedExample: {
          problem: "Why do most small businesses fail in first 5 years?",
          solution: "Insufficient capital, poor planning, competition, cash flow problems, lack of experience.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a small business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Business with limited size/employees"
                    },
                    {
                              "id": "b",
                              "text": "A multinational company"
                    },
                    {
                              "id": "c",
                              "text": "A government agency"
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
                              "name": "Small business",
                              "statement": "Limited size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Small business = limited size/employees.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Limited size business"
},
        },
        {
          id: "cieibs-u2-sm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a business plan?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Business plan",
                              "statement": "Business strategy document."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Document outlining business strategy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used for planning and securing finance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Business strategy document"
},
        },
        {
          id: "cieibs-u2-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are advantages of small businesses?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Small business advantages",
                              "statement": "Flexibility, relationships."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flexibility, close customer relationships.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lower overheads, quick decisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Personal service, local knowledge.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Flexibility, relationships, lower costs"
},
        },
        {
          id: "cieibs-u2-sm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define small business, entrepreneurship, business plan, startup, growth barrier, support network. (b) What is a small business? (c) What is a business plan? (d) What is entrepreneurship? (e) Give 3 advantages of small businesses. (f) Give 3 challenges of small businesses. (g) What support helps small businesses? (h) Design a support strategy for a new restaurant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Small businesses",
                              "statement": "Characteristics, challenges, support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Limited size/employees.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Business strategy document.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Starting/running new businesses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three valid advantages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three valid challenges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Grants, incubators, mentoring, training.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid support strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Small businesses and entrepreneurs."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-sm-notes",
      title: "Small businesses — notes",
      summary: "Small businesses: flexible but vulnerable. Challenges: finance, scale, competition. Support: grants, mentoring, training.",
      sections: [
        { heading: "Key idea", body: "Small businesses drive innovation and employment but face significant challenges." },
        { heading: "Growth", body: "Successful small businesses find niches, innovate, and scale carefully." },
      ],
    },
  ],
};
