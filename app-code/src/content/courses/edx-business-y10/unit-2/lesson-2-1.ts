import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ebz10-u2-lesson-2-1",
  code: "2-1",
  title: "Marketing and Market Research",
  goal: "I CAN explain marketing and the market research process.",
  standards: ["Edexcel IGCSE Business 4BS0 — Marketing"],
  vocabulary: [
    {
      term: "Marketing",
      definition: "Identifying and satisfying customer needs for profit.",
    },
    {
      term: "Market research",
      definition: "Gathering information about customers and markets.",
    },
    {
      term: "Primary research",
      definition: "New data collected directly — surveys, interviews.",
    },
    {
      term: "Secondary research",
      definition: "Existing data — reports, websites, competitors.",
    },
    {
      term: "Target market",
      definition: "Specific group of customers a business aims to serve.",
    },
  ],
  concepts: [
    {
      id: "ebz10-u2-marketing",
      title: "What is Marketing?",
      skill: "Understand the marketing concept and its importance.",
      lesson: {
        sections: [
          {
            heading: "The marketing concept",
            body: "**Marketing** = identifying customer needs and satisfying them profitably. It's not just selling — it's understanding what customers want and delivering it.\n\n**Marketing mix (4Ps)**: **Product** (what you sell), **Price** (how much), **Place** (where/how sold), **Promotion** (how customers find out). All four must work together.",
          },
          {
            heading: "Why marketing matters",
            body: 'Without marketing, businesses don\'t know what customers want, where to sell, or how to compete. Good marketing: increases sales, builds brand loyalty, reduces risk of failure, identifies new opportunities.\n\n**Marketing vs selling**: selling focuses on the product ("sell what you make"); marketing focuses on the customer ("make what they want to buy").',
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A bakery makes cakes but nobody buys them. What marketing question should they ask first?",
          solution:
            "What do customers actually want? — market research before production.",
        },
      },
      questions: [
        {
          id: "ebz10-u2-marketing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the marketing concept focus on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The owner's preferences" },
              { id: "b", text: "The customer's needs" },
              { id: "c", text: "The product the business makes" },
              { id: "d", text: "The price only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marketing concept",
                statement: "Identify and satisfy customer needs profitably.",
              },
            ],
            steps: [
              {
                reasoning: "Marketing focuses on customer needs.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Customer needs",
            commonErrors: ["Product-focused confused."],
          },
        },
        {
          id: "ebz10-u2-marketing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four Ps of the marketing mix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "4Ps",
                statement: "Product, Price, Place, Promotion.",
              },
            ],
            steps: [
              { reasoning: "Product and Price.", marks: 1, markCode: "AO1" },
              { reasoning: "Place and Promotion.", marks: 1, markCode: "AO1" },
              {
                reasoning: "All four must work together.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Product, Price, Place, Promotion.",
            commonErrors: ["Missing one.", "Wrong terms."],
          },
        },
        {
          id: "ebz10-u2-marketing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between 'selling' and 'marketing'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Selling vs marketing",
                statement: "Product-focused vs customer-focused.",
              },
            ],
            steps: [
              {
                reasoning: 'Selling = "sell what you make" — product focus.',
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  'Marketing = "make what they want" — customer focus.',
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Selling starts after production; marketing starts before.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Marketing includes research, development, all 4Ps.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Selling is product-focused; marketing is customer-focused and starts earlier.",
            commonErrors: ["Same thing assumed.", "No timing link."],
          },
        },
        {
          id: "ebz10-u2-marketing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A new smartphone app has been developed but has few users.",
          parts: [
            {
              label: "a",
              prompt: "Explain two possible marketing problems.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two marketing solutions.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketing diagnosis",
                statement: "Identify which P is failing, then fix it.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Product problem — app doesn't meet user needs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Promotion problem — users don't know it exists.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Improve product based on user feedback.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Promote via social media/ads to target users.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) product/promotion problems (b) improve product/promote to target",
            commonErrors: ["No diagnosis.", "No solution."],
          },
        },
      ],
    },
    {
      id: "ebz10-u2-research",
      title: "Market Research Methods",
      skill: "Distinguish primary and secondary research and evaluate methods.",
      lesson: {
        sections: [
          {
            heading: "Primary research",
            body: "**Questionnaires**: written questions to large samples — cheap, wide reach, but may get low response rates. **Interviews**: face-to-face or phone — detailed answers, but time-consuming and interviewer bias. **Observation**: watch customer behaviour — reveals real actions, but no reasons why.\n\n**Strengths**: specific, up-to-date, tailored to your questions. **Weaknesses**: expensive, time-consuming, small samples.",
          },
          {
            heading: "Secondary research",
            body: "**Government statistics**: census, economic data — reliable, free, but may be outdated. **Market reports**: industry analyses — detailed, but expensive. **Competitor websites**: pricing, products — free, but may be incomplete. **Social media**: trends, reviews — cheap, but biased sample.\n\n**Strengths**: quick, cheap, large datasets. **Weaknesses**: may not answer your specific questions, may be outdated or biased.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A business wants to know if customers would buy a new product. Which research type?",
          solution:
            "Primary — questionnaires/surveys directly ask potential customers.",
        },
      },
      questions: [
        {
          id: "ebz10-u2-research-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is primary market research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading competitor websites" },
              { id: "b", text: "Guessing customer preferences" },
              { id: "c", text: "Collecting new data directly" },
              { id: "d", text: "Using existing data" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary research",
                statement: "New data collected directly from customers.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = new data collected directly.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** New data directly",
            commonErrors: ["Secondary confused."],
          },
        },
        {
          id: "ebz10-u2-research-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one advantage and one disadvantage of questionnaires.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Questionnaire evaluation",
                statement: "Wide reach but low response rates.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: cheap, reaches many people.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Disadvantage: low response rate / may not answer honestly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantage: can't ask follow-up questions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Cheap/wide reach; low response/dishonest answers.",
            commonErrors: ["Only one side.", "Vague."],
          },
        },
        {
          id: "ebz10-u2-research-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business might use both primary and secondary research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research combination",
                statement:
                  "Secondary gives context; primary gives specific answers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secondary research is cheap and quick for background.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Primary research answers specific questions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Together they give complete picture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Secondary can guide primary questions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Secondary = cheap context; primary = specific answers — complement each other.",
            commonErrors: ["Only one type.", "No synergy."],
          },
        },
        {
          id: "ebz10-u2-research-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A restaurant chain wants to expand to a new city.",
          parts: [
            {
              label: "a",
              prompt:
                "Suggest two secondary research sources and what they'd reveal.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Suggest two primary research methods and what they'd reveal.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research planning",
                statement: "Secondary for context, primary for specifics.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Census data — population, income levels.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Competitor analysis — existing restaurants, prices.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Questionnaires — local food preferences.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Observation — footfall at similar venues.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) census+competitors (b) questionnaires+observation",
            commonErrors: ["Wrong research type.", "No purpose."],
          },
        },
      ],
    },
  ],
};
