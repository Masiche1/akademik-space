import type { Lesson } from "../../../types.ts";

export const lesson522: Lesson = {
  id: "ciealgeo-u2-lesson-2-2",
  code: "2-2",
  title: "Population and Migration",
  goal: "I CAN explain population dynamics, migration patterns and impacts.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: human"],
  
  vocabulary: [
    { term: "Demographic transition model", definition: "Stages of population change." },
    { term: "Push factors", definition: "Reasons for leaving place of origin." },
    { term: "Pull factors", definition: "Reasons for moving to destination." },
    { term: "Refugee", definition: "Person fleeing persecution/war." },
    { term: "Economic migrant", definition: "Person moving for better opportunities." },
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
          solution: "Push: rural poverty, few jobs. Pull: urban jobs, better services, higher wages.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u2-pop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the demographic transition model?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stages of population change"
                    },
                    {
                              "id": "b",
                              "text": "A type of migration"
                    },
                    {
                              "id": "c",
                              "text": "A climate model"
                    },
                    {
                              "id": "d",
                              "text": "A development index"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DTM",
                              "statement": "Population stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DTM = population change stages.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Population stages"
},
        },
        {
          id: "ciealgeo-u2-pop-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are push and pull factors?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Push/pull",
                              "statement": "Migration factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push: reasons for leaving.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pull: reasons for moving to.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Leaving vs moving to"
},
        },
        {
          id: "ciealgeo-u2-pop-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a refugee and an economic migrant?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Refugee vs migrant",
                              "statement": "Migration types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Refugee: fleeing persecution/war.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Economic migrant: seeking better opportunities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different legal status/protection.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Forced vs voluntary"
},
        },
        {
          id: "ciealgeo-u2-pop-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define DTM, push factors, pull factors, refugee, economic migrant, remittances. (b) What is DTM? (c) What are push/pull factors? (d) What is a refugee? (e) What is economic migrant? (f) What are migration impacts on origin? (g) What are impacts on destination? (h) Evaluate whether migration benefits or harms sending countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Population/migration",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Population stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Leaving vs moving to.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Fleeing persecution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Seeking opportunities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Brain drain, remittances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Labour, diversity, pressure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Population and migration."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u2-pop-notes",
      title: "Population/migration — notes",
      summary: "DTM stages population change. Push/pull factors drive migration. Remittances significant.",
      sections: [
        { heading: "Key idea", body: "Migration driven by economic, social, political factors." },
        { heading: "Impacts", body: "Origin loses workers but gains remittances; destination gains labour but faces pressures." },
      ],
    },
  ],
};
