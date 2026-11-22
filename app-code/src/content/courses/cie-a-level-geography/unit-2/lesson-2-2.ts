import type { Lesson } from "../../../types.ts";

export const lesson522: Lesson = {
  id: "ciealgeo-u2-lesson-2-2",
  code: "2-2",
  title: "Population and Migration",
  goal: "I CAN explain population dynamics, migration patterns and impacts.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: human"],

  vocabulary: [
    {
      term: "Demographic transition model",
      definition: "Stages of population change.",
    },
    {
      term: "Push factors",
      definition: "Reasons for leaving place of origin.",
    },
    { term: "Pull factors", definition: "Reasons for moving to destination." },
    { term: "Refugee", definition: "Person fleeing persecution/war." },
    {
      term: "Economic migrant",
      definition: "Person moving for better opportunities.",
    },
    { term: "Remittances", definition: "Money sent by migrants to home." },
  ],
  concepts: [
    {
      id: "ciealgeo-u2-s2-pop",
      title: "Population and migration",
      skill: "Analyse population dynamics and migration.",
      lesson: {
        sections: [
          {
            heading: "Demographic transition",
            body: "Stage 1: high birth/death. Stage 2: death rate falls. Stage 3: birth rate falls. Stage 4: low birth/death. Stage 5: declining population.",
          },
          {
            heading: "Migration types",
            body: "Internal vs international. Forced vs voluntary. Economic vs political refugees. Brain drain vs brain gain.",
          },
          {
            heading: "Impacts",
            body: "Origin: loss of workers, brain drain, remittances. Destination: labour supply, cultural diversity, pressure on services. Remittances significant income source.",
          },
        ],
        keyFormulas: [
          { name: "DTM", statement: "population stages" },
          { name: "Push/pull", statement: "migration factors" },
          { name: "Remittances", statement: "migrant money" },
        ],
        workedExample: {
          problem: "Why do workers migrate from rural to urban areas?",
          solution:
            "Push: rural poverty, few jobs. Pull: urban jobs, better services, higher wages.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u2-pop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the demographic transition model?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Stages of population change",
              },
              {
                id: "b",
                text: "A climate model",
              },
              {
                id: "c",
                text: "A type of migration",
              },
              {
                id: "d",
                text: "A development index",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DTM",
                statement: "Population stages.",
              },
            ],
            steps: [
              {
                reasoning: "DTM = population change stages.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Population stages",
          },
        },
        {
          id: "ciealgeo-u2-pop-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are push and pull factors?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Push/pull",
                statement: "Migration factors.",
              },
            ],
            steps: [
              {
                reasoning: "Push: reasons for leaving.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pull: reasons for moving to.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Leaving vs moving to",
          },
        },
        {
          id: "ciealgeo-u2-pop-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a refugee and an economic migrant?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refugee vs migrant",
                statement: "Migration types.",
              },
            ],
            steps: [
              {
                reasoning: "Refugee: fleeing persecution/war.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Economic migrant: seeking better opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different legal status/protection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Forced vs voluntary",
          },
        },
        {
          id: "ciealgeo-u2-pop-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define DTM, push factors, pull factors, refugee, economic migrant, remittances. (b) What is DTM? (c) What are push/pull factors? (d) What is a refugee? (e) What is economic migrant? (f) What are migration impacts on origin? (g) What are impacts on destination? (h) Evaluate whether migration benefits or harms sending countries.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Population/migration",
                statement: "Analysis.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Population stages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Leaving vs moving to.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Fleeing persecution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Seeking opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Brain drain, remittances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Labour, diversity, pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Population and migration.",
          },
        },
        {
          id: "ciealgeo-u2-pop-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In stage 2 of the demographic transition model, the main change is a fall in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Birth rate" },
              { id: "b", text: "Migration rate" },
              { id: "c", text: "Death rate" },
              { id: "d", text: "Life expectancy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "DTM stage 2", statement: "Death rates fall while birth rates remain high." },
            ],
            steps: [{ reasoning: "Improved sanitation and medicine reduce mortality first.", marks: 1, markCode: "M" }],
            finalAnswer: "Death rate",
          },
        },
        {
          id: "ciealgeo-u2-pop-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has a birth rate of 25 per 1000 and a death rate of 10 per 1000. (a) What is the natural increase per 1000 population? (b) For a population of 100,000, how many people does this natural increase represent?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15, unit: "per 1000" },
              { label: "b", answer: 1500, unit: "people" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Natural increase", statement: "Birth rate minus death rate gives natural increase." },
            ],
            steps: [
              { part: "a", reasoning: "25 - 10 = 15 per 1000.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "15 / 1000 x 100000 = 1500 people.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 15 per 1000; b) 1500 people",
            commonErrors: ["Adding birth and death rates."],
          },
        },
        {
          id: "ciealgeo-u2-pop-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Internal migration is movement:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Across an international border" },
              { id: "b", text: "Only by aircraft" },
              { id: "c", text: "For a holiday only" },
              { id: "d", text: "Within the same country" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Internal migration", statement: "Movement within a country." },
            ],
            steps: [{ reasoning: "Internal migration does not cross a national border.", marks: 1, markCode: "M" }],
            finalAnswer: "Within the same country",
          },
        },
        {
          id: "ciealgeo-u2-pop-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how push and pull factors interact in rural-to-urban migration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Push-pull migration", statement: "Migration reflects conditions at origin and opportunities at destination." },
            ],
            steps: [
              { reasoning: "Rural push factors include poverty, unemployment and poor services.", marks: 1, markCode: "M" },
              { reasoning: "Urban pull factors include jobs, higher wages and services.", marks: 1, markCode: "M" },
              { reasoning: "The balance of factors determines the volume and direction of migration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rural disadvantages push people while urban opportunities pull them, driving rural-urban migration.",
            commonErrors: ["Listing factors without explaining interaction."],
          },
        },
        {
          id: "ciealgeo-u2-pop-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Brain drain refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rise in birth rate" },
              { id: "b", text: "The emigration of skilled and educated workers" },
              { id: "c", text: "A type of refugee camp" },
              { id: "d", text: "Movement from city to countryside" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Brain drain", statement: "Loss of skilled labour through emigration." },
            ],
            steps: [{ reasoning: "Brain drain reduces the skilled workforce in the origin country.", marks: 1, markCode: "M" }],
            finalAnswer: "Emigration of skilled workers.",
          },
        },
        {
          id: "ciealgeo-u2-pop-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In one year, a country receives 120,000 immigrants and 80,000 emigrants. (a) What is net migration? (b) If the mid-year population is 2 million, what is net migration as a percentage of population?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40000, unit: "people" },
              { label: "b", answer: 2, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Net migration", statement: "Net migration = immigration minus emigration." },
            ],
            steps: [
              { part: "a", reasoning: "120000 - 80000 = 40000 people.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "40000 / 2000000 x 100 = 2%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 40000; b) 2%",
            commonErrors: ["Adding immigration and emigration."],
          },
        },
        {
          id: "ciealgeo-u2-pop-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the costs and benefits of international labour migration for a sending country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Migration impacts", statement: "Migration creates both losses and gains for origin countries." },
            ],
            steps: [
              { reasoning: "Losses include reduced labour supply and brain drain.", marks: 1, markCode: "M" },
              { reasoning: "Gains include remittances and skills/knowledge returned by migrants.", marks: 1, markCode: "M" },
              { reasoning: "Effects vary by migrant skill, destination and duration.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion weighs net benefits against structural losses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Migration can relieve unemployment and provide remittances but may drain skilled workers; net impact is context-dependent.",
            commonErrors: ["One-sided impact assessment."],
          },
        },
        {
          id: "ciealgeo-u2-pop-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A refugee is primarily distinguished from an economic migrant by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always travelling by air" },
              { id: "b", text: "Having no family" },
              { id: "c", text: "Moving only within one country" },
              { id: "d", text: "Fleeing persecution or conflict rather than mainly seeking work" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Refugee", statement: "A person fleeing persecution, war or serious harm." },
            ],
            steps: [{ reasoning: "Refugee status relates to forced displacement and protection needs.", marks: 1, markCode: "M" }],
            finalAnswer: "Forced flight from persecution or conflict.",
          },
        },
        {
          id: "ciealgeo-u2-pop-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country receives $300 million in remittances from 200,000 migrants abroad. (a) What is the average remittance per migrant? (b) If GDP is $6 billion, what percentage of GDP do remittances represent?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1500, unit: "USD" },
              { label: "b", answer: 5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Remittances", statement: "Divide total remittances by migrants, then by GDP for percentage." },
            ],
            steps: [
              { part: "a", reasoning: "300000000 / 200000 = 1500 USD.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "300000000 / 6000000000 x 100 = 5%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 1500 USD; b) 5%",
            commonErrors: ["Using GDP rather than migrants for the first calculation."],
          },
        },
        {
          id: "ciealgeo-u2-pop-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In stage 5 of the demographic transition model, population is likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decline because deaths exceed births" },
              { id: "b", text: "Grow fastest" },
              { id: "c", text: "Double every decade" },
              { id: "d", text: "Remain unchanged forever" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "DTM stage 5", statement: "Low birth and death rates can produce natural decrease." },
            ],
            steps: [{ reasoning: "When deaths exceed births, population falls.", marks: 1, markCode: "M" }],
            finalAnswer: "Decline through natural decrease.",
          },
        },
        {
          id: "ciealgeo-u2-pop-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that migration policy can reduce development gaps between countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Migration policy", statement: "Policy affects who moves, who benefits and how labour markets adjust." },
            ],
            steps: [
              { reasoning: "Skilled migration can transfer knowledge and remittances.", marks: 1, markCode: "M" },
              { reasoning: "Restricting movement may protect local workers but reduce opportunities.", marks: 1, markCode: "M" },
              { reasoning: "Destination countries may gain labour but face integration pressures.", marks: 1, markCode: "A" },
              { reasoning: "Sending countries may lose workers despite remittance gains.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion recognises trade-offs rather than a universal answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Migration policy can redistribute benefits but also create losses; effectiveness depends on context and design.",
            commonErrors: ["Assuming more migration always reduces inequality."],
          },
        },
        {
          id: "ciealgeo-u2-pop-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways migration can create cultural diversity in a destination country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cultural diversity", statement: "Migrants introduce languages, traditions, foods and social practices." },
            ],
            steps: [
              { reasoning: "Migrants bring languages, religions and cultural traditions.", marks: 1, markCode: "M" },
              { reasoning: "Contact between groups can create new cultural expressions and tolerance.", marks: 1, markCode: "M" },
              { reasoning: "This diversity may also generate tension if integration is poorly managed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Migrants introduce new languages, traditions and practices; interaction can enrich or challenge society.",
            commonErrors: ["Mentioning only economic effects."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u2-pop-notes",
      title: "Population/migration — notes",
      summary:
        "DTM stages population change. Push/pull factors drive migration. Remittances significant.",
      sections: [
        {
          heading: "Key idea",
          body: "Migration driven by economic, social, political factors.",
        },
        {
          heading: "Impacts",
          body: "Origin loses workers but gains remittances; destination gains labour but faces pressures.",
        },
      ],
    },
  ],
};
