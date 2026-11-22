import type { Lesson } from "../../../types.ts";

export const lesson257: Lesson = {
  id: "cieibs-u1-lesson-1-7",
  code: "1-7",
  title: "Market Research and Marketing",
  goal: "I CAN explain market research methods and the marketing mix.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: marketing"],

  vocabulary: [
    {
      term: "Market research",
      definition: "Gathering information about markets/customers.",
    },
    { term: "Primary research", definition: "New data collected directly." },
    { term: "Secondary research", definition: "Using existing data." },
    { term: "Marketing mix", definition: "Product, price, place, promotion." },
    {
      term: "Target market",
      definition: "Specific customer group business aims to serve.",
    },
    { term: "Market segmentation", definition: "Dividing market into groups." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s7-mkt",
      title: "Market research and marketing",
      skill: "Understand research methods and marketing mix.",
      lesson: {
        sections: [
          {
            heading: "Market research",
            body: "Primary: questionnaires, interviews, observations, experiments — new data. Secondary: government statistics, reports, competitor data — existing data. Both inform marketing decisions.",
          },
          {
            heading: "Marketing mix",
            body: "Product: features/quality. Price: pricing strategy. Place: distribution channels. Promotion: advertising/PR. Target market: specific customer segment. Segmentation: divide market by age, income, location, lifestyle.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "new data collected" },
          { name: "Secondary", statement: "existing data used" },
          { name: "4Ps", statement: "product, price, place, promotion" },
        ],
        workedExample: {
          problem:
            "A new coffee shop wants to understand its market. What research should it do?",
          solution:
            "Primary: survey potential customers, observe foot traffic. Secondary: local demographics, competitor analysis.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-mr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is market research?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A legal requirement",
              },
              {
                id: "b",
                text: "Selling products",
              },
              {
                id: "c",
                text: "Gathering information about markets/customers",
              },
              {
                id: "d",
                text: "A type of tax",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Market research",
                statement: "Market information gathering.",
              },
            ],
            steps: [
              {
                reasoning: "Research = gathering market/customer info.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Market information gathering",
          },
        },
        {
          id: "cieibs-u1-mr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the marketing mix?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marketing mix",
                statement: "4Ps.",
              },
            ],
            steps: [
              {
                reasoning: "Product, price, place, promotion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Four elements of marketing strategy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Product, price, place, promotion",
          },
        },
        {
          id: "cieibs-u1-mr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare primary and secondary research.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research types",
                statement: "Primary vs secondary.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = new data collected directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Secondary = existing data used.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Primary more expensive but tailored; secondary cheaper but less specific.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "New vs existing data",
          },
        },
        {
          id: "cieibs-u1-mr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define market research, primary research, secondary research, marketing mix, target market, market segmentation. (b) What is market research? (c) What is primary research? Give 2 examples. (d) What is secondary research? Give 2 examples. (e) What is the marketing mix? (f) What are the 4Ps? (g) What is market segmentation? (h) Design a marketing plan for a new bakery.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Marketing",
                statement: "Research, mix, segmentation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Market information gathering.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) New data; questionnaires, interviews.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Existing data; government stats, reports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Product, price, place, promotion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Four Ps correctly identified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Dividing market into groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid marketing plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Market research and marketing.",
          },
        },
        {
          id: "cieibs-u1-mr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of primary market research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reviewing published industry data" },
              { id: "b", text: "Conducting a customer questionnaire" },
              { id: "c", text: "Using a competitor's annual report" },
              { id: "d", text: "Reading government statistics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary research",
                statement: "New data collected directly by the business.",
              },
            ],
            steps: [
              {
                reasoning: "A questionnaire collects new data first-hand.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Customer questionnaire",
          },
        },
        {
          id: "cieibs-u1-mr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of secondary market research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using government census data" },
              { id: "b", text: "Running a focus group" },
              { id: "c", text: "Interviewing shoppers in a mall" },
              { id: "d", text: "Observing customer behaviour in-store" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary research",
                statement: "Using existing data collected by others.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Census data already exists and was collected by government.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Government census data",
          },
        },
        {
          id: "cieibs-u1-mr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business sends 400 questionnaires and receives 300 completed responses. (a) Calculate the response rate. (b) If 60% of respondents said they would buy the product, how many respondents is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75, unit: "%" },
              { label: "b", answer: 180, unit: "respondents" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey analysis",
                statement: "Response rate = responses / sent x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Response rate = 300 / 400 x 100 = 75%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive respondents = 0.6 x 300 = 180.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 75%, b) 180 respondents",
          },
        },
        {
          id: "cieibs-u1-mr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by market segmentation and give one basis for dividing a market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Market segmentation",
                statement: "Dividing a market into distinct customer groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Segmentation splits the market into groups with shared characteristics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bases include age, income, location or lifestyle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Dividing market into groups, e.g. by age or income",
          },
        },
        {
          id: "cieibs-u1-mr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set correctly lists the four elements of the marketing mix?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Production, pricing, placement, publicity" },
              { id: "b", text: "Product, profit, people, packaging" },
              { id: "c", text: "Price, profit, promotion, people" },
              { id: "d", text: "Product, price, place, promotion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marketing mix",
                statement: "Product, price, place, promotion.",
              },
            ],
            steps: [
              {
                reasoning: "The 4Ps are product, price, place, promotion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Product, price, place, promotion",
          },
        },
        {
          id: "cieibs-u1-mr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A town's market for gym memberships is estimated at 5,000 people. A new gym targets the 20-35 age group, estimated at 1,200 people. (a) What is the target segment as a percentage of the market? (b) If the gym aims for 25% of its segment, how many members is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 24, unit: "%" },
              { label: "b", answer: 300, unit: "members" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Segmentation maths",
                statement: "Segment share = segment / market x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Segment share = 1200 / 5000 x 100 = 24%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Target members = 0.25 x 1200 = 300.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 24%, b) 300 members",
          },
        },
        {
          id: "cieibs-u1-mr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare primary and secondary market research, giving one advantage and one disadvantage of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Primary vs secondary",
                statement: "New specific data vs cheap existing data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary: tailored, specific data but costly and time-consuming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Primary disadvantage: expense and slow collection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Secondary: cheap and fast but may be outdated or irrelevant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Primary = specific but costly; secondary = cheap but possibly outdated",
          },
        },
        {
          id: "cieibs-u1-mr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a target market?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total market for a product" },
              { id: "b", text: "A market with no competitors" },
              { id: "c", text: "The cheapest market to enter" },
              {
                id: "d",
                text: "The specific customer group a business aims to serve",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Target market",
                statement:
                  "Specific customer group the business aims to serve.",
              },
            ],
            steps: [
              {
                reasoning: "Businesses focus marketing on a defined segment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Specific customer group aimed at",
          },
        },
        {
          id: "cieibs-u1-mr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A company has annual revenue of $400,000 and spends $32,000 on advertising. (a) What percentage of revenue is spent on promotion? (b) If it wants promotion to be 12% of revenue instead, how much should it spend?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "%" },
              { label: "b", answer: 48000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Promotion budget",
                statement: "Promotion % = spend / revenue x 100.",
              },
            ],
            steps: [
              {
                reasoning: "32000 / 400000 x 100 = 8%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Target spend = 0.12 x 400000 = $48,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 8%, b) $48,000",
          },
        },
        {
          id: "cieibs-u1-mr-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A new coffee shop must decide on its marketing mix. Suggest one decision for each of the four Ps and justify how each targets its chosen customer segment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Marketing mix",
                statement:
                  "Coordinate product, price, place, promotion for target market.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Product: e.g. premium coffee matching target tastes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Price: set to what segment will pay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Place: location accessible to target customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Promotion: channels reaching the segment — justified choices.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Four justified 4P decisions linked to target segment",
          },
        },
        {
          id: "cieibs-u1-mr-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an element of 'promotion' in the marketing mix?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choosing a supplier" },
              { id: "b", text: "Hiring staff" },
              { id: "c", text: "Setting the price" },
              { id: "d", text: "Advertising" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Promotion",
                statement: "Advertising, PR and sales promotion.",
              },
            ],
            steps: [
              {
                reasoning: "Advertising communicates with customers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Advertising",
          },
        },
        {
          id: "cieibs-u1-mr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define market research, primary research, secondary research, marketing mix, target market, market segmentation. (b) What is primary research? Give two examples. (c) What is secondary research? Give one example. (d) What are the four Ps? (e) A firm sends 500 questionnaires and gets 400 replies. Calculate the response rate. (f) If 45% of replies are positive, how many is that? (g) Explain one advantage of primary research. (h) Evaluate why a business should identify a target market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Market research and marketing",
                statement: "Research, 4Ps, segmentation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) New data collected directly; e.g. questionnaires, interviews.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Existing data; e.g. government statistics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Product, price, place, promotion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Response rate = 400/500 x 100 = 80%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Positive replies = 0.45 x 400 = 180.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Data is specific and tailored to the business's needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Focuses resources and marketing on likely buyers — reasoned judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Research methods, marketing mix and segmentation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-mr-notes",
      title: "Marketing — notes",
      summary:
        "Research=primary(new)/secondary(existing). Marketing mix=4Ps. Segmentation=target specific groups.",
      sections: [
        {
          heading: "Key idea",
          body: "Marketing mix coordinates product, price, place, promotion for target market.",
        },
        {
          heading: "Segmentation",
          body: "Divide market by demographics, psychographics, behaviour.",
        },
      ],
    },
  ],
};
