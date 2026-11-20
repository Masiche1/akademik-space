import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "cieigeo-u2-lesson-2-2",
  code: "2-2",
  title: "Settlement and Urbanisation",
  goal: "I CAN describe settlement patterns and the urbanisation process.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: settlement"],
  
  vocabulary: [
    { term: "Settlement", definition: "Place where people live — village, town, city." },
    { term: "Urbanisation", definition: "Increasing proportion of population in urban areas." },
    { term: "Rural area", definition: "Countryside — low population density." },
    { term: "Urban area", definition: "Town/city — high population density." },
    { term: "Counter-urbanisation", definition: "Movement from urban to rural areas." },
    { term: "Settlement hierarchy", definition: "Ranking of settlements by size/function." },
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
          solution: "Rapid industrialisation + rural poverty → massive rural-urban migration without adequate planning.",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is urbanisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Increasing proportion of population in urban areas"
                    },
                    {
                              "id": "b",
                              "text": "Movement to countryside"
                    },
                    {
                              "id": "c",
                              "text": "A type of migration"
                    },
                    {
                              "id": "d",
                              "text": "A weather pattern"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Urbanisation",
                              "statement": "Rural→urban shift."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Urbanisation = increasing urban population share.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Increasing urban population"
},
        },
        {
          id: "cieigeo-u2-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is counter-urbanisation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Counter-urbanisation",
                              "statement": "Urban→rural movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Movement from urban to rural areas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Driven by retirement, housing costs, lifestyle.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Urban→rural movement"
},
        },
        {
          id: "cieigeo-u2-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What drives urbanisation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Urbanisation drivers",
                              "statement": "Push/pull factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pull: jobs, services, education in cities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Push: rural poverty, lack of opportunities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both factors interact.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Jobs/services pull, rural poverty push"
},
        },
        {
          id: "cieigeo-u2-st-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define settlement, urbanisation, rural area, urban area, counter-urbanisation, settlement hierarchy. (b) What is urbanisation? (c) What is counter-urbanisation? (d) What drives urbanisation? (e) What challenges do cities face? (f) What is a megacity? (g) What is a settlement hierarchy? (h) Evaluate whether urbanisation is beneficial or problematic.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Settlement",
                              "statement": "Urbanisation, patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Increasing urban population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Urban→rural movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Jobs, services, rural poverty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Housing, pollution, infrastructure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) >10 million people.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Settlement ranking by size/function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Settlement and urbanisation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-st-notes",
      title: "Settlement — notes",
      summary: "Urbanisation=rural→urban; counter-urbanisation=reverse. Driven by jobs/services vs rural poverty.",
      sections: [
        { heading: "Key idea", body: "Urbanisation concentrates people but creates challenges in housing/infrastructure." },
        { heading: "Patterns", body: "Nucleated, dispersed, linear settlements based on geography." },
      ],
    },
  ],
};
