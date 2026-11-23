import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "aphg-u1-lesson-1-2",
  code: "1-2",
  title: "Migration Patterns",
  goal: "I CAN explain push-pull factors, migration types, and barriers.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Push factors", definition: "Conditions driving people away — war, poverty, persecution, environmental degradation." },
    { term: "Pull factors", definition: "Conditions attracting migrants — jobs, safety, family reunification, better living standards." },
    { term: "Refugee", definition: "Person fleeing persecution/war — protected under international law." },
    { term: "Asylum seeker", definition: "Person seeking protection from persecution — awaiting refugee status determination." },
    { term: "Remittances", definition: "Money sent by migrants to families in home countries — major economic flow." },
    { term: "Brain drain", definition: "Emigration of skilled professionals — loss of human capital for origin countries." },
  ],
  concepts: [
    {
      id: "aphg-u1-migration-patterns",
      title: "Why people move",
      skill: "Analyze migration drivers and consequences.",
      lesson: {
        sections: [
          {
            heading: "Migration drivers",
            body: "Push factors (war, poverty, persecution, climate change) force departure; pull factors (jobs, safety, family) attract; intervening obstacles (distance, cost, borders, policies) shape flows.",
          },
          {
            heading: "Consequences",
            body: "Remittances support origin economies; brain drain harms development; diasporas maintain cultural ties; receiving countries gain labor but face integration challenges.",
          },
        ],
        keyFormulas: [
          { name: "Migration decision", statement: "Push + Pull vs. Intervening obstacles" },
          { name: "Remittances", statement: "Migrants → home countries (>$500B/year globally)" },
        ],
        workedExample: {
          problem: "Why do refugees differ from economic migrants?",
          solution: "Refugees flee persecution/war (protected by international law, cannot be returned); economic migrants seek better opportunities voluntarily (can be deported). Both are 'migrants' but legal status differs fundamentally.",
        },
      },
      questions: [
        {
          id: "aphg-u1-migration-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Push factors in migration are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "conditions attracting migrants"
                    },
                    {
                              "id": "b",
                              "text": "conditions driving people away from home"
                    },
                    {
                              "id": "c",
                              "text": "border policies"
                    },
                    {
                              "id": "d",
                              "text": "family ties"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Push factors",
                              "statement": "Conditions driving emigration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push factors drive people away — war, poverty, persecution, environmental disasters; they 'push' migrants from origin countries.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Conditions driving emigration",
          "commonErrors": [
                    "Confusing with pull factors (attracting)."
          ]
},
        },
        {
          id: "aphg-u1-migration-patterns-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Remittances are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "taxes on migrants"
                    },
                    {
                              "id": "b",
                              "text": "money sent by migrants to families in home countries"
                    },
                    {
                              "id": "c",
                              "text": "foreign aid"
                    },
                    {
                              "id": "d",
                              "text": "investment in host countries"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Remittances",
                              "statement": "Migrants' financial transfers home."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Remittances are funds sent by migrants to families in origin countries — exceeding $500 billion annually, often exceeding foreign aid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They support household consumption, education, and investment in origin countries.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Money sent home",
          "commonErrors": [
                    "Confusing with foreign aid or foreign direct investment."
          ]
},
        },
        {
          id: "aphg-u1-migration-patterns-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 1 million migrants send an average of $5,000 per year home, total remittances equal how many billions? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Billions",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multiply",
                              "statement": "$1{,}000{,}000 \\times 5{,}000 = 5 \\times 10^9 = 5$ billion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1 \\text{ million} \\times \\$5{,}000 = \\$5 \\text{ billion}$ annually.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Unit errors — result is billions not millions."
          ]
},
        },
        {
          id: "aphg-u1-migration-patterns-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between push and pull factors in migration, with examples of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Push-pull model",
                              "statement": "Drivers of migration."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Distinguish factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push factors drive emigration: war (Syria), poverty (Central America), persecution (Rohingya), environmental degradation (climate refugees) — conditions making home unlivable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Pull factors attract immigration: jobs (US, Germany), safety (refugees to Europe), family reunification, higher living standards — conditions making destination attractive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Most migration involves both — push makes leaving necessary, pull determines destination.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Push drives away; pull attracts — most migration involves both",
          "commonErrors": [
                    "Treating as separate — they interact in migration decisions."
          ]
},
        },
        {
          id: "aphg-u1-migration-patterns-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the impact of brain drain on developing countries. Who benefits and who loses?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Brain drain",
                              "statement": "Skilled emigration effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Origin countries lose: doctors, engineers, teachers emigrate — reducing human capital for development; training costs are borne by origin but benefits accrue to destination.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Destination countries gain: skilled labor fills shortages; migrants send remittances back; some return with skills ('brain gain' or 'brain circulation').",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counterarguments: remittances may exceed lost productivity; return migration brings skills; diaspora networks facilitate trade and investment.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: brain drain is net negative for origin countries' development but benefits individuals and destination economies — policy should encourage return and circular migration.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Brain drain harms origin development despite remittance benefits",
          "commonErrors": [
                    "One-sided — both costs and benefits exist."
          ]
},
        },
      ],
    },
  ],
};
