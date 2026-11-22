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
              { id: "a", text: "Large-scale beach tourism" },
              {
                id: "b",
                text: "Responsible travel to natural areas conserving environment",
              },
              { id: "c", text: "Medical travel" },
              { id: "d", text: "Business travel" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Responsible nature travel",
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
        { id: "oleg-u2-to-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Mass tourism is best described as...",
          response: { type: "mcq", choices: [ { id: "a", text: "small eco-friendly trips" }, { id: "b", text: "domestic holidays only" }, { id: "c", text: "business travel only" }, { id: "d", text: "large numbers of visitors to popular destinations" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Mass tourism", statement: "Large-scale tourism to popular places." } ], steps: [ { reasoning: "Mass tourism means many visitors to popular sites.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** large numbers of visitors to popular destinations", commonErrors: ["Confusing with ecotourism."] } },
        { id: "oleg-u2-to-q6", difficulty: "core", totalMarks: 2,
          stem: "Visitor numbers rise from 2 million to 2.6 million. Calculate the percentage increase.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 30, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage change", statement: "Change/original x 100." } ], steps: [ { reasoning: "(2.6 - 2.0) / 2.0 x 100 = 30%.", marks: 2, markCode: "AO1" } ], finalAnswer: "30 %", commonErrors: ["Wrong denominator."] } },
        { id: "oleg-u2-to-q7", difficulty: "core", totalMarks: 1,
          stem: "Cultural tourism mainly focuses on...",
          response: { type: "mcq", choices: [ { id: "a", text: "heritage sites, museums and traditions" }, { id: "b", text: "medical treatment" }, { id: "c", text: "beaches only" }, { id: "d", text: "extreme sports" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Cultural tourism", statement: "Visits to heritage and cultural attractions." } ], steps: [ { reasoning: "Cultural tourism visits heritage and traditions.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** heritage sites, museums and traditions", commonErrors: ["Confusing with adventure tourism."] } },
        { id: "oleg-u2-to-q8", difficulty: "core", totalMarks: 2,
          stem: "A resort earns 500 000 dollars per year from 20 000 tourists. Calculate average revenue per tourist.",
          response: { type: "numeric", parts: [ { label: "Revenue", answer: 25, unit: "dollars" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Average", statement: "Total / number of units." } ], steps: [ { reasoning: "500 000 / 20 000 = 25 dollars.", marks: 2, markCode: "AO1" } ], finalAnswer: "25 dollars", commonErrors: ["Multiplying instead of dividing."] } },
        { id: "oleg-u2-to-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain two negative impacts of mass tourism on a destination.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Tourism impacts", statement: "Mass tourism can damage environment and culture." } ], steps: [ { reasoning: "Name two impacts such as overcrowding or pollution.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how each is caused by tourism.", marks: 1, markCode: "AO2" }, { reasoning: "Link to environmental or social damage.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude clearly.", marks: 1, markCode: "AO3" } ], finalAnswer: "Overcrowding and pollution result when visitor numbers exceed infrastructure and environmental capacity.", commonErrors: ["Only listing positives."] } },
        { id: "oleg-u2-to-q10", difficulty: "core", totalMarks: 1,
          stem: "Sustainable tourism aims to...",
          response: { type: "mcq", choices: [ { id: "a", text: "maximise visitor numbers at any cost" }, { id: "b", text: "balance economic benefit with environmental and cultural protection" }, { id: "c", text: "ban all tourists" }, { id: "d", text: "ignore local communities" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Sustainable tourism", statement: "Balance economic, environmental and social goals." } ], steps: [ { reasoning: "Sustainable tourism balances benefits and protection.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** balance economic benefit with environmental and cultural protection", commonErrors: ["Thinking it means no tourism."] } },
        { id: "oleg-u2-to-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A destination can safely host 5 000 visitors per day. On one day 6 500 visitors arrive. Calculate the excess number.",
          response: { type: "numeric", parts: [ { label: "Excess", answer: 1500, unit: "visitors" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Carrying capacity", statement: "Excess = actual - capacity." } ], steps: [ { reasoning: "6 500 - 5 000 = 1 500 visitors.", marks: 2, markCode: "AO1" } ], finalAnswer: "1500 visitors", commonErrors: ["Adding instead of subtracting."] } },
        { id: "oleg-u2-to-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Seasonal tourism can create a 'boom-bust' economy because...",
          response: { type: "mcq", choices: [ { id: "a", text: "jobs and income fall sharply in the off-season" }, { id: "b", text: "prices never change" }, { id: "c", text: "infrastructure is unused" }, { id: "d", text: "tourists visit all year equally" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "principle", name: "Seasonality", statement: "Tourism demand varies by season, affecting employment." } ], steps: [ { reasoning: "Off-season demand falls, reducing jobs and income.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** jobs and income fall sharply in the off-season", commonErrors: ["Ignoring seasonal variation."] } },
        { id: "oleg-u2-to-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate how a developing country can gain benefits from tourism while reducing its negative impacts.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Sustainable tourism", statement: "Management can keep benefits while limiting damage." } ], steps: [ { reasoning: "State economic benefits such as jobs and foreign exchange.", marks: 1, markCode: "AO1" }, { reasoning: "State environmental/social risks.", marks: 1, markCode: "AO1" }, { reasoning: "Suggest management such as limits or community involvement.", marks: 1, markCode: "AO2" }, { reasoning: "Reach a balanced judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "Tourism can bring jobs and income, but limits, eco-certification and community involvement reduce environmental damage.", commonErrors: ["One-sided answer."] } },
        { id: "oleg-u2-to-q14", difficulty: "core", totalMarks: 1,
          stem: "Which tourism type involves travel for medical treatment abroad?",
          response: { type: "mcq", choices: [ { id: "a", text: "Cultural tourism" }, { id: "b", text: "Mass tourism" }, { id: "c", text: "Medical tourism" }, { id: "d", text: "Ecotourism" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Medical tourism", statement: "Travel for healthcare services." } ], steps: [ { reasoning: "Medical tourism is travel for treatment.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** Medical tourism", commonErrors: ["Confusing tourism types."] } },
        { id: "oleg-u2-to-q15", difficulty: "core", totalMarks: 2,
          stem: "In a survey of 200 tourists, 60% say they would return. Calculate how many tourists that is.",
          response: { type: "numeric", parts: [ { label: "Tourists", answer: 120, unit: "people" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage of total", statement: "Part = percentage x total." } ], steps: [ { reasoning: "0.60 x 200 = 120 people.", marks: 2, markCode: "AO1" } ], finalAnswer: "120 people", commonErrors: ["Using 60 as a count."] } },
        { id: "oleg-u2-to-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Ecotourism is best described as...",
          response: { type: "mcq", choices: [ { id: "a", text: "shopping tourism" }, { id: "b", text: "large hotel resorts" }, { id: "c", text: "business conferences" }, { id: "d", text: "responsible travel to natural areas that conserves the environment" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Ecotourism", statement: "Nature-based travel with conservation aim." } ], steps: [ { reasoning: "Ecotourism is responsible nature travel.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** responsible travel to natural areas that conserves the environment", commonErrors: ["Confusing with mass tourism."] } },
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
              { id: "b", text: "Government organisation" },
              { id: "c", text: "Local business" },
              { id: "d", text: "National company" },
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
        { id: "oleg-u2-gl-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Globalisation refers to...",
          response: { type: "mcq", choices: [ { id: "a", text: "reducing trade" }, { id: "b", text: "closing national borders" }, { id: "c", text: "isolating countries" }, { id: "d", text: "increasing interconnectedness of world economies and cultures" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Globalisation", statement: "Growing links between economies and cultures." } ], steps: [ { reasoning: "Globalisation increases worldwide connection.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** increasing interconnectedness of world economies and cultures", commonErrors: ["Opposite meaning."] } },
        { id: "oleg-u2-gl-q6", difficulty: "core", totalMarks: 2,
          stem: "A TNC invests 300 million dollars in a country and creates 6 000 jobs. Calculate investment per job created.",
          response: { type: "numeric", parts: [ { label: "Investment per job", answer: 50000, unit: "dollars" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Per unit", statement: "Total / number of units." } ], steps: [ { reasoning: "300 000 000 / 6 000 = 50 000 dollars.", marks: 2, markCode: "AO1" } ], finalAnswer: "50 000 dollars", commonErrors: ["Dividing in the wrong direction."] } },
        { id: "oleg-u2-gl-q7", difficulty: "core", totalMarks: 1,
          stem: "A key driver of globalisation is...",
          response: { type: "mcq", choices: [ { id: "a", text: "improved transport, communication and technology" }, { id: "b", text: "higher tariffs" }, { id: "c", text: "less internet" }, { id: "d", text: "fewer ports" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "principle", name: "Globalisation drivers", statement: "Technology and trade connect places." } ], steps: [ { reasoning: "Technology and transport reduce distance and cost.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** improved transport, communication and technology", commonErrors: ["Choosing a barrier to globalisation."] } },
        { id: "oleg-u2-gl-q8", difficulty: "core", totalMarks: 2,
          stem: "A country's exports rise from 80 billion to 100 billion dollars. Calculate the percentage increase.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 25, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage change", statement: "Change/original x 100." } ], steps: [ { reasoning: "(100 - 80) / 80 x 100 = 25%.", marks: 2, markCode: "AO1" } ], finalAnswer: "25 %", commonErrors: ["Using new value as base."] } },
        { id: "oleg-u2-gl-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain two ways cultural diffusion occurs through globalisation.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Cultural diffusion", statement: "Traits spread via media, migration and trade." } ], steps: [ { reasoning: "Name channels such as media, migration or tourism.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how traits spread between societies.", marks: 1, markCode: "AO2" }, { reasoning: "Mention enrichment or homogenisation.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude clearly.", marks: 1, markCode: "AO3" } ], finalAnswer: "Media, migration and tourism spread food, music and ideas, enriching or homogenising cultures.", commonErrors: ["Only naming one channel."] } },
        { id: "oleg-u2-gl-q10", difficulty: "core", totalMarks: 1,
          stem: "'McDonaldisation' refers to...",
          response: { type: "mcq", choices: [ { id: "a", text: "banning fast food" }, { id: "b", text: "reducing trade" }, { id: "c", text: "increased local diversity" }, { id: "d", text: "global brands making cultures more similar" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Homogenisation", statement: "Global brands can reduce cultural diversity." } ], steps: [ { reasoning: "Global brands can make cultures more similar.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** global brands making cultures more similar", commonErrors: ["Thinking it increases diversity."] } },
        { id: "oleg-u2-gl-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A TNC owns 75% of a factory. If the factory is worth 40 million dollars, calculate the TNC's share value.",
          response: { type: "numeric", parts: [ { label: "Share", answer: 30, unit: "million dollars" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage of total", statement: "Part = percentage x total." } ], steps: [ { reasoning: "0.75 x 40 = 30 million dollars.", marks: 2, markCode: "AO1" } ], finalAnswer: "30 million dollars", commonErrors: ["Using 0.75 as dollars not percent."] } },
        { id: "oleg-u2-gl-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which is a negative impact of globalisation for some countries?",
          response: { type: "mcq", choices: [ { id: "a", text: "job creation in some sectors" }, { id: "b", text: "access to more goods" }, { id: "c", text: "exploitation of cheap labour and inequality" }, { id: "d", text: "cultural exchange" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "principle", name: "Globalisation impacts", statement: "Globalisation can create inequality and exploitation." } ], steps: [ { reasoning: "Cheap labour and inequality are negative effects.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** exploitation of cheap labour and inequality", commonErrors: ["Choosing only positive effects."] } },
        { id: "oleg-u2-gl-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the impact of globalisation on developing countries.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Globalisation impacts", statement: "Opportunities and risks coexist." } ], steps: [ { reasoning: "Give two positive effects such as investment and market access.", marks: 1, markCode: "AO1" }, { reasoning: "Give two negative effects such as dependency or exploitation.", marks: 1, markCode: "AO1" }, { reasoning: "Explain why effects vary by country.", marks: 1, markCode: "AO2" }, { reasoning: "Reach a balanced judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "Globalisation can bring jobs and markets but also dependency, exploitation and inequality.", commonErrors: ["One-sided evaluation."] } },
        { id: "oleg-u2-gl-q14", difficulty: "core", totalMarks: 1,
          stem: "Free trade agreements mainly aim to...",
          response: { type: "mcq", choices: [ { id: "a", text: "close borders" }, { id: "b", text: "increase tariffs" }, { id: "c", text: "ban imports" }, { id: "d", text: "reduce barriers to trade between countries" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Free trade", statement: "Agreements lower trade barriers." } ], steps: [ { reasoning: "Free trade reduces tariffs and barriers.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** reduce barriers to trade between countries", commonErrors: ["Confusing with protectionism."] } },
        { id: "oleg-u2-gl-q15", difficulty: "core", totalMarks: 2,
          stem: "A company employs 2 000 local workers after globalising. Before, it employed 500. Calculate the percentage increase in jobs.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 300, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage change", statement: "Change/original x 100." } ], steps: [ { reasoning: "(2 000 - 500) / 500 x 100 = 300%.", marks: 2, markCode: "AO1" } ], finalAnswer: "300 %", commonErrors: ["Dividing by new total."] } },
        { id: "oleg-u2-gl-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Cultural diffusion is the spread of...",
          response: { type: "mcq", choices: [ { id: "a", text: "climate zones" }, { id: "b", text: "cultural traits between societies" }, { id: "c", text: "population density" }, { id: "d", text: "tectonic plates" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Cultural diffusion", statement: "Spread of cultural traits." } ], steps: [ { reasoning: "Cultural diffusion spreads traits like food and music.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** cultural traits between societies", commonErrors: ["Confusing with physical diffusion."] } },
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
