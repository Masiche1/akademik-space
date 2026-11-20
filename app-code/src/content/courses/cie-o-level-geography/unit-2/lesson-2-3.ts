import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "oleg-u2-lesson-2-3",
  code: "2-3",
  title: "Tourism and Globalisation",
  goal: "I CAN describe tourism types, impacts and globalisation processes.",
  standards: ["2217: Human geography — tourism and globalisation"],
  vocabulary: [
    {
      term: "Tourism",
      definition: "Travel for leisure, business or other purposes.",
    },
    {
      term: "Mass tourism",
      definition: "Large-scale tourism to popular destinations.",
    },
    {
      term: "Ecotourism",
      definition: "Responsible travel to natural areas conserving environment.",
    },
    {
      term: "Globalisation",
      definition:
        "Increasing interconnectedness of world economies and cultures.",
    },
    {
      term: "TNC",
      definition:
        "Transnational corporation — company operating in multiple countries.",
    },
    {
      term: "Cultural diffusion",
      definition: "Spread of cultural traits between societies.",
    },
  ],
  concepts: [
    {
      id: "oleg-u2-tourism",
      title: "Tourism",
      skill: "Describe tourism types and their impacts.",
      lesson: {
        sections: [
          {
            heading: "Types of tourism",
            body: "Mass tourism: large numbers to popular destinations — beaches, cities. Ecotourism: nature-based, environmentally responsible. Cultural tourism: heritage sites, museums. Adventure tourism: extreme activities. Medical tourism: healthcare abroad.",
          },
          {
            heading: "Tourism impacts",
            body: "Positive: jobs, income, infrastructure, cultural exchange. Negative: overcrowding, pollution, cultural commodification, environmental damage. Seasonal nature creates boom-bust cycles.",
          },
          {
            heading: "Managing tourism",
            body: "Sustainable tourism: balancing economic benefits with environmental/cultural protection. Limits on visitor numbers, eco-certification, community involvement, diversification of economy.",
          },
        ],
        keyFormulas: [
          {
            name: "Tourism",
            statement:
              "Mass/ecotourism/cultural; Impacts=jobs+income vs pollution+damage.",
          },
        ],
        workedExample: {
          problem: "How can tourism benefit a developing country?",
          solution:
            "Foreign exchange earnings, jobs in services, infrastructure development — but must manage environmental/social impacts.",
        },
      },
      questions: [
        {
          id: "oleg-u2-to-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ecotourism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Responsible travel to natural areas conserving environment",
              },
              { id: "b", text: "Large-scale beach tourism" },
              { id: "c", text: "Business travel" },
              { id: "d", text: "Medical travel" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecotourism",
                statement: "Responsible nature travel.",
              },
            ],
            steps: [
              {
                reasoning: "Ecotourism = responsible nature.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Responsible nature travel",
            commonErrors: ["Confusing with mass tourism."],
          },
        },
        {
          id: "oleg-u2-to-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two positive impacts of tourism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tourism positive",
                statement: "Jobs, income, infrastructure, exchange.",
              },
            ],
            steps: [
              { reasoning: "Any two positives.", marks: 1, markCode: "AO1" },
              { reasoning: "Explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Jobs, income, infrastructure, cultural exchange.",
            commonErrors: ["Only negative impacts."],
          },
        },
        {
          id: "oleg-u2-to-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate mass tourism's impact on a destination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mass tourism",
                statement: "Economic benefits vs environmental/social costs.",
              },
            ],
            steps: [
              {
                reasoning: "Economic benefits: jobs, income.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Environmental costs: pollution, damage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Social costs: overcrowding, commodification.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Benefits=jobs/income; costs=pollution/overcrowding.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "oleg-u2-to-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Tourism.",
          parts: [
            { label: "a", prompt: "Define ecotourism.", marks: 1 },
            { label: "b", prompt: "Two positive impacts?", marks: 2 },
            { label: "c", prompt: "Two negative impacts?", marks: 2 },
            { label: "d", prompt: "How manage sustainable tourism?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tourism",
                statement: "Definitions+impacts+management.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Responsible nature travel.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two positives.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Any two negatives.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Limits/eco-certification.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Community involvement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Diversification.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear management.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) ecotourism (b) positives (c) negatives (d) sustainable management",
          },
        },
      ],
    },
    {
      id: "oleg-u2-globalisation",
      title: "Globalisation",
      skill: "Explain globalisation processes and their impacts.",
      lesson: {
        sections: [
          {
            heading: "Globalisation drivers",
            body: "Technology: internet, transport, communication. Trade: removal of barriers, free trade agreements. TNCs: companies operating globally — McDonald's, Nike. Cultural exchange: media, migration, tourism.",
          },
          {
            heading: "Impacts",
            body: "Positive: economic growth, access to goods/services, cultural exchange, job creation. Negative: exploitation of workers, environmental damage, cultural homogenisation, inequality between countries.",
          },
          {
            heading: "Cultural diffusion",
            body: "Spread of cultural traits — food, music, fashion, language. Can enrich cultures or cause 'McDonaldisation' — loss of local diversity. Hybrid cultures emerge from mixing.",
          },
        ],
        keyFormulas: [
          {
            name: "Globalisation",
            statement:
              "Drivers=tech+trade+TNCs; Impacts=growth vs exploitation.",
          },
        ],
        workedExample: {
          problem: "How does globalisation affect local cultures?",
          solution:
            "Cultural diffusion spreads ideas but may homogenise — local traditions compete with global brands.",
        },
      },
      questions: [
        {
          id: "oleg-u2-gl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a TNC?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company operating in multiple countries" },
              { id: "b", text: "National company" },
              { id: "c", text: "Government organisation" },
              { id: "d", text: "Local business" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TNC",
                statement: "Multi-country company.",
              },
            ],
            steps: [
              {
                reasoning: "TNC = multiple countries.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Multi-country company",
            commonErrors: ["Confusing with national firm."],
          },
        },
        {
          id: "oleg-u2-gl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two drivers of globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation drivers",
                statement: "Technology, trade, TNCs, migration.",
              },
            ],
            steps: [
              { reasoning: "Any two drivers.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Technology, trade, TNCs, migration.",
            commonErrors: ["Saying 'weather'."],
          },
        },
        {
          id: "oleg-u2-gl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate globalisation's impact on developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation impact",
                statement: "Growth opportunities vs exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "Positive: jobs, investment, market access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Negative: exploitation, dependency, inequality.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Mixed effects.", marks: 1, markCode: "AO2" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Opportunities=jobs/markets; risks=exploitation/dependency.",
            commonErrors: ["One-sided view."],
          },
        },
        {
          id: "oleg-u2-gl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Globalisation.",
          parts: [
            { label: "a", prompt: "Define TNC.", marks: 1 },
            { label: "b", prompt: "Two drivers?", marks: 2 },
            { label: "c", prompt: "Two positive impacts?", marks: 2 },
            { label: "d", prompt: "Two negative impacts?", marks: 2 },
            { label: "e", prompt: "Cultural diffusion?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation",
                statement: "Definitions+drivers+impacts+cultural.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Multi-country company.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two drivers.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Any two positives.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Any two negatives.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "e",
                reasoning: "Spread of cultural traits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Can enrich/homogenise.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) TNC (b) drivers (c) positives (d) negatives (e) cultural diffusion",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u2-2-3-notes",
      title: "Tourism and globalisation — notes",
      summary:
        "Tourism types/impacts; globalisation drivers and cultural diffusion.",
      sections: [
        {
          heading: "Tourism",
          body: "Mass/ecotourism/cultural; impacts=jobs+income vs pollution+damage; sustainable management needed.",
        },
        {
          heading: "Globalisation",
          body: "Drivers=tech+trade+TNCs; impacts=growth vs exploitation; cultural diffusion spreads traits.",
        },
      ],
    },
  ],
};
