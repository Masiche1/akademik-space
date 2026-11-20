import type { Lesson } from "../../../types.ts";

export const lesson315: Lesson = {
  id: "cieigeo-u2-lesson-2-5",
  code: "2-5",
  title: "Migration and Population Dynamics",
  goal: "I CAN explain migration types, causes and impacts.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: migration"],
  
  vocabulary: [
    { term: "Migration", definition: "Movement of people between areas." },
    { term: "Emigration", definition: "Leaving one's country." },
    { term: "Immigration", definition: "Moving into a country." },
    { term: "Push factors", definition: "Reasons for leaving." },
    { term: "Pull factors", definition: "Reasons for moving to destination." },
    { term: "Refugee", definition: "Person forced to flee due to persecution/conflict." },
  ],
  concepts: [
    {
      id: "cieigeo-u2-s5-mig",
      title: "Migration",
      skill: "Understand migration causes and impacts.",
      lesson: {
        sections: [
          {
            heading: "Migration types",
            body: "Internal (within country), international (between countries), forced (refugees), economic (work), retirement, family reunion.",
          },
          {
            heading: "Push/pull factors",
            body: "Push: poverty, conflict, unemployment, persecution. Pull: jobs, higher wages, safety, better services, family.",
          },
          {
            heading: "Impacts",
            body: "Sending country: brain drain, remittances. Receiving country: labour supply, cultural diversity, pressure on services/housing.",
          },
        ],
        keyFormulas: [
          { name: "Push", statement: "reasons for leaving" },
          { name: "Pull", statement: "reasons for moving" },
          { name: "Refugee", statement: "forced to flee" },
        ],
        workedExample: {
          problem: "A person moves from rural village to city for work. What type of migration?",
          solution: "Internal economic migration — push (rural poverty) + pull (urban jobs).",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-mg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is migration?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Movement of people between areas"
                    },
                    {
                              "id": "b",
                              "text": "Movement of goods"
                    },
                    {
                              "id": "c",
                              "text": "A weather pattern"
                    },
                    {
                              "id": "d",
                              "text": "A landform"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Migration",
                              "statement": "People movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Migration = movement of people.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "People movement"
},
        },
        {
          id: "cieigeo-u2-mg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between push and pull factors?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Push/pull",
                              "statement": "Leave vs attract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push = reasons for leaving.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pull = reasons for moving to destination.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Leave vs attract"
},
        },
        {
          id: "cieigeo-u2-mg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are impacts of migration on the sending country?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Migration impacts",
                              "statement": "Sending country effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Brain drain — loss of skilled workers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Remittances — money sent back.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduced population pressure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Brain drain, remittances"
},
        },
        {
          id: "cieigeo-u2-mg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define migration, emigration, immigration, push factors, pull factors, refugee. (b) What is migration? (c) What is emigration? (d) What are push factors? Give 2 examples. (e) What are pull factors? Give 2 examples. (f) What is a refugee? (g) What are impacts on sending country? (h) Evaluate whether migration benefits or harms economies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Migration",
                              "statement": "Types, causes, impacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) People movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Leaving one's country.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two valid push examples.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Two valid pull examples.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Forced to flee persecution/conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Brain drain, remittances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Migration causes and impacts."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-mg-notes",
      title: "Migration — notes",
      summary: "Push=leave reasons; pull=attract reasons. Impacts: brain drain, remittances, labour supply.",
      sections: [
        { heading: "Key idea", body: "Migration driven by economic, social, political factors." },
        { heading: "Impacts", body: "Both sending and receiving countries affected — mixed outcomes." },
      ],
    },
  ],
};
