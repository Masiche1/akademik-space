import type { Lesson } from "../../../types.ts";

export const lesson265: Lesson = {
  id: "cieibs-u2-lesson-2-5",
  code: "2-5",
  title: "Small Businesses and Entrepreneurs",
  goal: "I CAN describe small business characteristics, challenges and support.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 2: small businesses",
  ],

  vocabulary: [
    {
      term: "Small business",
      definition: "Business with limited size/employees.",
    },
    {
      term: "Entrepreneurship",
      definition: "Starting and running new businesses.",
    },
    {
      term: "Business plan",
      definition: "Document outlining business strategy.",
    },
    { term: "Startup", definition: "Newly established business." },
    {
      term: "Growth barrier",
      definition: "Obstacle preventing business expansion.",
    },
    {
      term: "Support network",
      definition: "Resources helping small businesses.",
    },
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
          {
            name: "Growth barriers",
            statement: "finance, skills, market access",
          },
        ],
        workedExample: {
          problem: "Why do most small businesses fail in first 5 years?",
          solution:
            "Insufficient capital, poor planning, competition, cash flow problems, lack of experience.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a small business?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of tax",
              },
              {
                id: "b",
                text: "A multinational company",
              },
              {
                id: "c",
                text: "A government agency",
              },
              {
                id: "d",
                text: "Business with limited size/employees",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Small business",
                statement: "Limited size.",
              },
            ],
            steps: [
              {
                reasoning: "Small business = limited size/employees.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Limited size business",
          },
        },
        {
          id: "cieibs-u2-sm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a business plan?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business plan",
                statement: "Business strategy document.",
              },
            ],
            steps: [
              {
                reasoning: "Document outlining business strategy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used for planning and securing finance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Business strategy document",
          },
        },
        {
          id: "cieibs-u2-sm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are advantages of small businesses?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Small business advantages",
                statement: "Flexibility, relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Flexibility, close customer relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower overheads, quick decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Personal service, local knowledge.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Flexibility, relationships, lower costs",
          },
        },
        {
          id: "cieibs-u2-sm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define small business, entrepreneurship, business plan, startup, growth barrier, support network. (b) What is a small business? (c) What is a business plan? (d) What is entrepreneurship? (e) Give 3 advantages of small businesses. (f) Give 3 challenges of small businesses. (g) What support helps small businesses? (h) Design a support strategy for a new restaurant.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Small businesses",
                statement: "Characteristics, challenges, support.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Limited size/employees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Business strategy document.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Starting/running new businesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Three valid advantages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Three valid challenges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Grants, incubators, mentoring, training.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid support strategy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Small businesses and entrepreneurs.",
          },
        },
        {
          id: "cieibs-u2-sm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an advantage of being a small business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unlimited access to finance" },
              { id: "b", text: "Access to large-scale economies" },
              { id: "c", text: "Dominance of the market" },
              { id: "d", text: "Flexibility and quick decision-making" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Small business advantages",
                statement:
                  "Flexibility, close customer links, lower overheads, quick decisions.",
              },
            ],
            steps: [
              {
                reasoning: "Small size allows fast, flexible decisions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Flexibility and quick decision-making",
          },
        },
        {
          id: "cieibs-u2-sm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a common growth barrier for small businesses?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too many customers" },
              { id: "b", text: "Too much capital" },
              { id: "c", text: "Excess economies of scale" },
              { id: "d", text: "Difficulty accessing finance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Growth barriers",
                statement: "Finance, skills, market access, regulation.",
              },
            ],
            steps: [
              {
                reasoning: "Limited finance is a classic barrier to expansion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Difficulty accessing finance",
          },
        },
        {
          id: "cieibs-u2-sm-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 100 startups, 60 survive their first year and 42 are still trading after two years. (a) What percentage survive the first year? (b) What percentage of the original 100 survive to year two?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60, unit: "%" },
              { label: "b", answer: 42, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survival rates",
                statement: "Survival % = survivors / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Year 1 survival = 60/100 x 100 = 60%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Year 2 survival = 42/100 x 100 = 42%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 60%, b) 42%",
          },
        },
        {
          id: "cieibs-u2-sm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two challenges faced by small businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Small business challenges",
                statement:
                  "Limited capital, no economies of scale, vulnerability to competition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Limited capital makes expansion and survival difficult.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lack of economies of scale means higher unit costs than rivals.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Limited capital; no economies of scale",
          },
        },
        {
          id: "cieibs-u2-sm-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a business plan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To advertise the business" },
              {
                id: "b",
                text: "To outline the business strategy and secure finance",
              },
              { id: "c", text: "To replace accounting records" },
              { id: "d", text: "To record past sales only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business plan",
                statement:
                  "Document outlining business strategy, often needed for finance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plans guide the business and convince lenders/investors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Outline strategy and secure finance",
          },
        },
        {
          id: "cieibs-u2-sm-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A small firm has sales of $30,000 in a local market worth $600,000. (a) Calculate its market share. (b) If it targets 8% of the market, what sales would that require?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "%" },
              { label: "b", answer: 48000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Market share",
                statement:
                  "Share = firm sales / market x 100; target sales = share x market.",
              },
            ],
            steps: [
              {
                reasoning: "Share = 30000/600000 x 100 = 5%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Target sales = 0.08 x 600000 = $48,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 5%, b) $48,000",
          },
        },
        {
          id: "cieibs-u2-sm-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two ways business incubators and mentoring support small businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Support network",
                statement: "Incubators, mentoring, training for small firms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Incubators provide low-cost premises and shared services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mentors give experience and guidance to new entrepreneurs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Premises/resources; expert guidance",
          },
        },
        {
          id: "cieibs-u2-sm-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an entrepreneur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A person who invests in shares" },
              { id: "b", text: "A person who starts and runs a new business" },
              { id: "c", text: "A bank manager" },
              { id: "d", text: "A government business advisor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entrepreneurship",
                statement: "Starting and running new businesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Entrepreneurs identify opportunities and create ventures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Person who starts and runs a new business",
          },
        },
        {
          id: "cieibs-u2-sm-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A startup has fixed costs of $3,000, price $15 and variable cost $10 per unit. (a) Calculate its break-even point. (b) Calculate profit at 1,000 units sold.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 600, unit: "units" },
              { label: "b", answer: 2000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BEP and profit",
                statement: "BEP = FC / (P - VC); profit = revenue - costs.",
              },
            ],
            steps: [
              {
                reasoning: "BEP = 3000 / (15 - 10) = 600 units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Revenue = 1000 x 15 = $15,000; costs = 3000 + 1000 x 10 = $13,000; profit = $2,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 600 units, b) $2,000",
          },
        },
        {
          id: "cieibs-u2-sm-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the strategy of a small business focusing on a niche market rather than competing broadly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Niche strategy",
                statement: "Focus on specialist segment vs broad competition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Niche allows premium pricing and less direct competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds loyal customer base and expertise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk: small market limits growth; vulnerable if demand shifts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justified conclusion on suitability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Niche = less competition but limited market — judgement required",
          },
        },
        {
          id: "cieibs-u2-sm-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of support for small businesses?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A government grant" },
              { id: "b", text: "Stricter competition rules" },
              { id: "c", text: "A monopoly licence" },
              { id: "d", text: "A higher tax rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Support network",
                statement: "Grants, incubators, mentoring, training.",
              },
            ],
            steps: [
              {
                reasoning: "Grants provide financial support to small firms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A government grant",
          },
        },
        {
          id: "cieibs-u2-sm-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define small business, entrepreneurship, business plan, startup, growth barrier, support network. (b) What is entrepreneurship? (c) What is a business plan? (d) Give two advantages of small businesses. (e) Give two challenges small businesses face. (f) Of 200 startups, 130 survive year one — calculate the survival rate. (g) Explain one way incubators help small businesses. (h) Evaluate why most small businesses fail within five years.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Small businesses",
                statement: "Characteristics, barriers, support.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Starting and running new businesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Document outlining business strategy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Flexibility, close customer relationships, lower overheads.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Limited capital, no economies of scale, competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Survival = 130/200 x 100 = 65%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Premises, resources, mentoring, networking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Insufficient capital, poor planning, cash flow — balanced explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Small business dynamics and failure evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-sm-notes",
      title: "Small businesses — notes",
      summary:
        "Small businesses: flexible but vulnerable. Challenges: finance, scale, competition. Support: grants, mentoring, training.",
      sections: [
        {
          heading: "Key idea",
          body: "Small businesses drive innovation and employment but face significant challenges.",
        },
        {
          heading: "Growth",
          body: "Successful small businesses find niches, innovate, and scale carefully.",
        },
      ],
    },
  ],
};
