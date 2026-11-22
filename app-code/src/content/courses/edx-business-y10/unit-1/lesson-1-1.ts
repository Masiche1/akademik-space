import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ebz10-u1-lesson-1-1",
  code: "1-1",
  title: "Enterprise and Business Objectives",
  goal: "I CAN explain enterprise, entrepreneurship and business objectives.",
  standards: [
    "Edexcel IGCSE Business 4BS0 — Enterprise and Business Objectives",
  ],
  vocabulary: [
    {
      term: "Enterprise",
      definition: "The activity of starting and running a business.",
    },
    {
      term: "Entrepreneur",
      definition: "A person who takes risks to start and run a business.",
    },
    {
      term: "Business objective",
      definition: "A target the business aims to achieve.",
    },
    {
      term: "Enterprise culture",
      definition: "Environment encouraging innovation and risk-taking.",
    },
  ],
  concepts: [
    {
      id: "ebz10-u1-enterprise",
      title: "Enterprise and Entrepreneurship",
      skill: "Understand what enterprise is and the role of entrepreneurs.",
      lesson: {
        sections: [
          {
            heading: "What is enterprise?",
            body: "**Enterprise** is the activity of identifying opportunities and using resources to create goods/services for profit. **Entrepreneurs** spot gaps in the market, take risks, organise resources and drive innovation.\n\n**Why enterprise matters**: creates jobs, drives economic growth, brings new products to market, encourages competition. Governments support enterprise through grants, training and enterprise programmes.",
          },
          {
            heading: "Characteristics of entrepreneurs",
            body: "Entrepreneurs are typically **innovative** (new ideas/products), **risk-taking** (invest own money/time), **organised** (plan and coordinate), **persistent** (keep trying despite setbacks), **opportunistic** (spot market gaps).\n\n**Enterprise culture**: businesses that encourage creativity and calculated risk-taking tend to innovate more. Failure is seen as a learning opportunity, not a disgrace.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A student notices local shops don't sell vegan snacks. They borrow money, make snacks and sell at markets. Is this enterprise?",
          solution:
            "Yes — identified an opportunity, used resources, took a risk to create goods for profit.",
        },
      },
      questions: [
        {
          id: "ebz10-u1-enterprise-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an entrepreneur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A business owner who avoids risk" },
              { id: "b", text: "A government official" },
              { id: "c", text: "A bank manager" },
              {
                id: "d",
                text: "A person who takes risks to start and run a business",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entrepreneur",
                statement:
                  "Person who takes risks to start and run a business.",
              },
            ],
            steps: [
              {
                reasoning: "Entrepreneur = risk-taker and business founder.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Risk-taking business founder",
            commonErrors: ["Risk-avoider confused."],
          },
        },
        {
          id: "ebz10-u1-enterprise-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three benefits of enterprise to an economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enterprise benefits",
                statement: "Jobs, growth, innovation, competition.",
              },
            ],
            steps: [
              {
                reasoning: "Creates jobs and employment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Drives economic growth and innovation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increases competition and consumer choice.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Jobs, economic growth, innovation, competition.",
            commonErrors: ["Only one benefit.", "Vague answers."],
          },
        },
        {
          id: "ebz10-u1-enterprise-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why entrepreneurs are described as 'opportunistic'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Opportunism",
                statement: "Spotting unmet needs or market gaps.",
              },
            ],
            steps: [
              {
                reasoning: "Identify gaps in the market.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Recognise unmet customer needs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Act quickly to fill those gaps.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: vegan snacks gap → new business.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "They spot unmet needs and act on market gaps quickly.",
            commonErrors: ["Luck assumed.", "No market link."],
          },
        },
        {
          id: "ebz10-u1-enterprise-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A friend wants to start a business making handmade candles.",
          parts: [
            {
              label: "a",
              prompt: "Explain what makes this 'enterprise'.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Identify two risks your friend would face.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest one way to reduce the risks.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enterprise evaluation",
                statement:
                  "Opportunity + risk + resources = enterprise activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Identifies candle market, uses resources, aims for profit.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Takes personal risk to create products.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Financial risk — may lose invested money.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Market risk — may not sell enough.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Time risk — may fail and lose time.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Test market first / start small.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) opportunity+risk+profit (b) financial/market/time risk (c) test market first",
            commonErrors: ["No risks.", "No mitigation."],
          },
        },
      ],
    },
    {
      id: "ebz10-u1-objectives",
      title: "Business Objectives",
      skill: "Understand common business objectives and their conflicts.",
      lesson: {
        sections: [
          {
            heading: "Common objectives",
            body: "**Profit maximisation**: earn the highest possible profit. **Growth**: increase sales, market share, or size. **Survival**: stay in business during difficult times. **Market share**: dominate a particular market. **Social objectives**: ethical trading, environmental responsibility.\n\n**Why objectives matter**: they guide decisions — pricing, investment, expansion. Different stakeholders may want different objectives.",
          },
          {
            heading: "Conflicts between objectives",
            body: "**Profit vs growth**: expanding costs money short-term, reducing profit. **Profit vs social**: ethical sourcing costs more. **Short-term vs long-term**: cutting costs now may hurt quality later.\n\n**Stakeholder influence**: shareholders want profit, employees want job security, customers want quality, government wants compliance. Businesses must balance competing demands.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A business wants to maximise profit but also improve working conditions. Explain the conflict.",
          solution:
            "Higher wages improve conditions but reduce profit — objectives conflict.",
        },
      },
      questions: [
        {
          id: "ebz10-u1-objectives-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is a business objective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of staff meetings" },
              { id: "b", text: "Profit maximisation" },
              { id: "c", text: "Office location" },
              { id: "d", text: "The colour of the logo" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business objective",
                statement:
                  "Target the business aims to achieve — e.g., profit, growth.",
              },
            ],
            steps: [
              {
                reasoning: "Profit maximisation is an objective.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Profit maximisation",
            commonErrors: ["Operational detail confused."],
          },
        },
        {
          id: "ebz10-u1-objectives-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why business objectives may conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objective conflicts",
                statement: "Different goals compete for limited resources.",
              },
            ],
            steps: [
              {
                reasoning: "Limited resources — can't do everything.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Short-term vs long-term trade-offs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stakeholders want different outcomes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Limited resources, short vs long-term, stakeholder demands.",
            commonErrors: ["No conflict explained.", "Single reason only."],
          },
        },
        {
          id: "ebz10-u1-objectives-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A business has profit maximisation as its main objective. Explain one advantage and one disadvantage of this objective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profit maximisation",
                statement:
                  "Focuses on highest possible profit — but may neglect other goals.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: clear focus, rewards shareholders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advantage: motivates efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantage: may neglect growth, staff, ethics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantage: short-term focus may harm long-term.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Advantage: clear focus/rewards. Disadvantage: neglects other objectives.",
            commonErrors: ["Only one side.", "No reasoning."],
          },
        },
        {
          id: "ebz10-u1-objectives-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A clothing company must choose between two objectives.",
          parts: [
            {
              label: "a",
              prompt: "Describe what 'market share growth' means.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe what 'profit maximisation' means.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why the company can't achieve both fully.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objective comparison",
                statement: "Growth needs investment; profit needs efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Increase share of total market sales.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Requires marketing, expansion, lower prices.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Highest possible profit in given period.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Requires cost control, pricing power.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Growth costs money short-term — reduces profit.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) market share growth needs investment (b) profit needs efficiency (c) conflict — growth costs reduce profit",
            commonErrors: ["Same objective.", "No conflict."],
          },
        },
      ],
    },
  ],
};
