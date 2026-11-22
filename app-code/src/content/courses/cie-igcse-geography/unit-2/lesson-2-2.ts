import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "cieigeo-u2-lesson-2-2",
  code: "2-2",
  title: "Settlement and Urbanisation",
  goal: "I CAN describe settlement patterns and the urbanisation process.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: settlement"],

  vocabulary: [
    {
      term: "Settlement",
      definition: "Place where people live — village, town, city.",
    },
    {
      term: "Urbanisation",
      definition: "Increasing proportion of population in urban areas.",
    },
    { term: "Rural area", definition: "Countryside — low population density." },
    { term: "Urban area", definition: "Town/city — high population density." },
    {
      term: "Counter-urbanisation",
      definition: "Movement from urban to rural areas.",
    },
    {
      term: "Settlement hierarchy",
      definition: "Ranking of settlements by size/function.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u2-s2-set",
      title: "Settlement and urbanisation",
      skill: "Understand settlement patterns and urban growth.",
      lesson: {
        sections: [
          {
            heading: "Settlement patterns",
            body: "Nucleated (clustered), dispersed (spread out), linear (along route). Influenced by water, transport, defence, resources.",
          },
          {
            heading: "Urbanisation",
            body: "Rural→urban migration driven by jobs, services, education. Most rapid in developing countries. Creates megacities (>10 million). Challenges: housing, pollution, infrastructure.",
          },
          {
            heading: "Counter-urbanisation",
            body: "Movement back to rural areas — retirement, cheaper housing, telecommuting, quality of life.",
          },
        ],
        keyFormulas: [
          { name: "Urbanisation", statement: "rural→urban shift" },
          { name: "Counter-urbanisation", statement: "urban→rural" },
          { name: "Megacity", statement: ">10 million people" },
        ],
        workedExample: {
          problem: "Why are most megacities in developing countries?",
          solution:
            "Rapid industrialisation + rural poverty → massive rural-urban migration without adequate planning.",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is urbanisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Movement to countryside",
              },
              {
                id: "b",
                text: "A type of migration",
              },
              {
                id: "c",
                text: "A weather pattern",
              },
              {
                id: "d",
                text: "Increasing proportion of population in urban areas",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urbanisation",
                statement: "Rural→urban shift.",
              },
            ],
            steps: [
              {
                reasoning: "Urbanisation = increasing urban population share.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Increasing urban population",
          },
        },
        {
          id: "cieigeo-u2-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is counter-urbanisation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-urbanisation",
                statement: "Urban→rural movement.",
              },
            ],
            steps: [
              {
                reasoning: "Movement from urban to rural areas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Driven by retirement, housing costs, lifestyle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Urban→rural movement",
          },
        },
        {
          id: "cieigeo-u2-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What drives urbanisation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Urbanisation drivers",
                statement: "Push/pull factors.",
              },
            ],
            steps: [
              {
                reasoning: "Pull: jobs, services, education in cities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Push: rural poverty, lack of opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both factors interact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Jobs/services pull, rural poverty push",
          },
        },
        {
          id: "cieigeo-u2-st-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define settlement, urbanisation, rural area, urban area, counter-urbanisation, settlement hierarchy. (b) What is urbanisation? (c) What is counter-urbanisation? (d) What drives urbanisation? (e) What challenges do cities face? (f) What is a megacity? (g) What is a settlement hierarchy? (h) Evaluate whether urbanisation is beneficial or problematic.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Settlement",
                statement: "Urbanisation, patterns.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Increasing urban population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Urban→rural movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Jobs, services, rural poverty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Housing, pollution, infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) >10 million people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Settlement ranking by size/function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Settlement and urbanisation.",
          },
        },
        {
          id: "cieigeo-u2-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Urbanisation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The construction of a new road" },
              { id: "b", text: "Movement of people from cities to villages" },
              { id: "c", text: "A fall in total population" },
              {
                id: "d",
                text: "A rise in the proportion of people living in urban areas",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urbanisation",
                statement: "Increasing urban share of population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Urbanisation concerns the proportion living in towns and cities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Rise in urban population share",
          },
        },
        {
          id: "cieigeo-u2-st-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country has 12 million people, of whom 7.2 million live in urban areas. Calculate the urban population as a percentage of the total.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Part ÷ whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "7.2 ÷ 12 x 100 = 60%.",
                working: "7.2 / 12 \\times 100 = 60",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "cieigeo-u2-st-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two rural settlement patterns and describe each briefly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Settlement patterns",
                statement: "Nucleated, dispersed and linear arrangements.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of nucleated, dispersed or linear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each is described correctly, e.g. clustered, spread out or along a route.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "e.g. nucleated (clustered) and linear (along a route)",
          },
        },
        {
          id: "cieigeo-u2-st-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Counter-urbanisation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of international migration" },
              { id: "b", text: "Movement from urban areas to rural areas" },
              { id: "c", text: "Movement from countryside to towns" },
              { id: "d", text: "Rapid growth of cities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-urbanisation",
                statement: "Urban-to-rural movement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It is the reverse direction of rural-urban migration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Urban-to-rural movement",
          },
        },
        {
          id: "cieigeo-u2-st-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A town grows from 80 000 to 120 000 people. (a) Calculate the absolute increase. (b) Calculate the percentage increase.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Absolute increase (people)",
                answer: 40000,
                unit: "people",
              },
              { label: "(b) Percentage increase (%)", answer: 50, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Growth",
                statement: "Increase = new - old; % = increase ÷ old x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 120 000 - 80 000 = 40 000 people.",
                working: "120000 - 80000 = 40000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 40 000 ÷ 80 000 x 100 = 50%.",
                working: "40000 / 80000 \\times 100 = 50",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 40 000 (b) 50%",
          },
        },
        {
          id: "cieigeo-u2-st-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the push and pull factors that drive rural-urban migration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Migration drivers",
                statement:
                  "Push factors drive people away; pull factors attract them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Push factors include rural poverty, unemployment and poor services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pull factors include urban jobs, education, healthcare and entertainment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The combination of push and pull encourages movement to cities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rural push factors and urban pull factors drive migration",
          },
        },
        {
          id: "cieigeo-u2-st-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A megacity is a city with a population greater than:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 million" },
              { id: "b", text: "5 million" },
              { id: "c", text: "10 million" },
              { id: "d", text: "100 million" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Megacity",
                statement: "City with more than 10 million people.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The threshold is greater than 10 million residents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10 million",
          },
        },
        {
          id: "cieigeo-u2-st-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain four challenges created by rapid urbanisation in developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urban challenges",
                statement: "Growth can exceed service provision.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Housing demand exceeds supply, creating slums and overcrowding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Transport and infrastructure struggle to keep pace with growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pressure on water, sanitation, health and education services increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pollution, unemployment and crime may rise in dense urban areas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Housing, infrastructure, services and pollution challenges",
          },
        },
        {
          id: "cieigeo-u2-st-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A region has 18 million urban residents and 12 million rural residents. (a) Calculate total population. (b) Calculate the urban percentage.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Total population (millions)",
                answer: 30,
                unit: "million",
              },
              { label: "(b) Urban population (%)", answer: 60, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Urban ÷ total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 18 + 12 = 30 million.",
                working: "18 + 12 = 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 18 ÷ 30 x 100 = 60%.",
                working: "18 / 30 \\times 100 = 60",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 30 million (b) 60%",
          },
        },
        {
          id: "cieigeo-u2-st-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the benefits and problems of counter-urbanisation for rural areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Counter-urbanisation",
                statement: "Urban-to-rural movement has mixed effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits include new residents, skills, spending and demand for rural services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Retirees may support local economies and community life.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Problems include pressure on housing, transport and services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: effects depend on planning and whether migrants integrate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Counter-urbanisation can revive or strain rural areas",
          },
        },
        {
          id: "cieigeo-u2-st-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the best explanation for the concentration of megacities in developing countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Counter-urbanisation is impossible" },
              { id: "b", text: "Megacities only form where climate is cold" },
              {
                id: "c",
                text: "Developing countries have no rural populations",
              },
              {
                id: "d",
                text: "Rapid industrialisation and rural-urban migration outpace planning",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Megacity growth",
                statement:
                  "Migration and weak planning create very large cities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Jobs pull migrants while infrastructure cannot keep pace.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Rapid migration outpaces planning",
          },
        },
        {
          id: "cieigeo-u2-st-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define urbanisation and counter-urbanisation. (b) Name three settlement patterns. (c) Give two pull factors for rural-urban migration. (d) Give two push factors. (e) State the megacity threshold. (f) Explain two challenges of rapid urbanisation. (g) Explain two effects of counter-urbanisation. (h) Evaluate whether urbanisation is generally beneficial or problematic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Settlement",
                statement: "Patterns, urbanisation and impacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Urbanisation = rising urban share; counter-urbanisation = urban-to-rural movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Nucleated, dispersed and linear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) e.g. jobs and education in cities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) e.g. rural poverty and lack of services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) More than 10 million people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) e.g. housing shortages and overloaded infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) e.g. new residents and spending, but pressure on rural services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced judgement: benefits of services/jobs versus planning and inequality problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Settlement patterns and urbanisation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-st-notes",
      title: "Settlement — notes",
      summary:
        "Urbanisation=rural→urban; counter-urbanisation=reverse. Driven by jobs/services vs rural poverty.",
      sections: [
        {
          heading: "Key idea",
          body: "Urbanisation concentrates people but creates challenges in housing/infrastructure.",
        },
        {
          heading: "Patterns",
          body: "Nucleated, dispersed, linear settlements based on geography.",
        },
      ],
    },
  ],
};
