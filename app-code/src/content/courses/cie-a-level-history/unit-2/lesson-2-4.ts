import type { Lesson } from "../../../types.ts";

export const lesson624: Lesson = {
  id: "ciealhis-u2-lesson-2-4",
  code: "2-4",
  title: "African Independence and Post-Colonial Africa",
  goal: "I CAN explain African independence movements and post-colonial challenges.",
  standards: ["Cambridge A Level History 9489", "Paper 2: Africa"],
  
  vocabulary: [
    { term: "Pan-Africanism", definition: "Movement for African unity." },
    { term: "OAU", definition: "Organisation of African Unity." },
    { term: "Apartheid", definition: "Racial segregation in South Africa." },
    { term: "Biafra", definition: "Secessionist state in Nigeria." },
    { term: "Rwanda genocide", definition: "1994 mass killing of Tutsis." },
    { term: "AU", definition: "African Union — successor to OAU." },
  ],
  concepts: [
    {
      id: "ciealhis-u2-s4-africa",
      title: "Post-colonial Africa",
      skill: "Analyse African independence and challenges.",
      lesson: {
        sections: [
          {
            heading: "Independence wave",
            body: "1950s-60s: most African countries gained independence. Leaders: Nkrumah (Ghana), Nyerere (Tanzania), Kenyatta (Kenya). Pan-Africanism promoted unity.",
          },
          {
            heading: "Post-colonial challenges",
            body: "Artificial borders → ethnic conflicts. Economic dependence on former colonial powers. Corruption, coups, weak institutions. Apartheid in South Africa until 1994.",
          },
          {
            heading: "Contemporary issues",
            body: "Rwanda genocide 1994. Resource conflicts (blood diamonds, oil). AIDS pandemic. African Union promoting development.",
          },
        ],
        keyFormulas: [
          { name: "Pan-Africanism", statement: "African unity" },
          { name: "OAU", statement: "1963-2002" },
          { name: "Rwanda", statement: "1994 genocide" },
        ],
        workedExample: {
          problem: "Why have some African countries struggled after independence?",
          solution: "Artificial borders created ethnic tensions, economic dependence on former colonial powers, weak institutions, corruption.",
        },
      },
      questions: [
        {
          id: "ciealhis-u2-af-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Pan-Africanism?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A colonial system"
                    },
                    {
                              "id": "b",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "c",
                              "text": "Movement for African unity"
                    },
                    {
                              "id": "d",
                              "text": "A type of government"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pan-Africanism",
                              "statement": "African unity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pan-Africanism = African unity movement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "African unity movement"
},
        },
        {
          id: "ciealhis-u2-af-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the OAU?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OAU",
                              "statement": "African unity org."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organisation of African Unity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Founded 1963, replaced by AU 2002.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "African unity organization"
},
        },
        {
          id: "ciealhis-u2-af-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What were the challenges facing post-colonial Africa?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Post-colonial",
                              "statement": "Challenges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Artificial borders → ethnic conflicts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Economic dependence on former powers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Corruption, coups, weak institutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Borders, dependence, corruption"
},
        },
        {
          id: "ciealhis-u2-af-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Pan-Africanism, OAU, Apartheid, Biafra, Rwanda genocide, AU. (b) What was Pan-Africanism? (c) What was OAU? (d) What challenges faced post-colonial Africa? (e) What was Rwanda genocide? (f) What was Biafra? (g) What is AU? (h) Evaluate whether African independence movements achieved their goals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Post-colonial Africa",
                              "statement": "Challenges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) African unity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1963-2002 org.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Borders, dependence, corruption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1994 mass killing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Nigerian secessionist state.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) AU successor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Political success, economic mixed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Post-colonial Africa analysis."
},
        },
        {
          id: "ciealhis-u2-af-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which was the first sub-Saharan African country to gain independence?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Kenya"
                    },
                    {
                              "id": "b",
                              "text": "Algeria"
                    },
                    {
                              "id": "c",
                              "text": "Nigeria"
                    },
                    {
                              "id": "d",
                              "text": "Ghana"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Ghana",
                              "statement": "1957 first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ghana became independent in 1957, first sub-Saharan state.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Ghana"
},
        },
        {
          id: "ciealhis-u2-af-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Ghana gain independence?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1957
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Independence",
                              "statement": "1957."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ghana gained independence in 1957 under Nkrumah.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1957"
},
        },
        {
          id: "ciealhis-u2-af-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how artificial colonial borders contributed to ethnic conflict in post-colonial Africa.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Borders",
                              "statement": "Ethnic divisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Colonial powers drew borders ignoring ethnic groups.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This split communities and forced rivals together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: persistent ethnic tension and conflict.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Borders ignored ethnic groups, creating lasting tensions"
},
        },
        {
          id: "ciealhis-u2-af-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pan-Africanism primarily promoted:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cold War alliances"
                    },
                    {
                              "id": "b",
                              "text": "African unity and solidarity"
                    },
                    {
                              "id": "c",
                              "text": "Racial segregation"
                    },
                    {
                              "id": "d",
                              "text": "Colonial trade agreements"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pan-Africanism",
                              "statement": "African unity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pan-Africanism promoted African unity and solidarity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** African unity and solidarity"
},
        },
        {
          id: "ciealhis-u2-af-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did South Africa hold its first multiracial elections, ending apartheid?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1994
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Apartheid end",
                              "statement": "1994."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "South Africa's first all-race elections were held in 1994.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1994"
},
        },
        {
          id: "ciealhis-u2-af-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Biafra was:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A political party in Ghana"
                    },
                    {
                              "id": "b",
                              "text": "A trade union in South Africa"
                    },
                    {
                              "id": "c",
                              "text": "An ethnic group in Kenya"
                    },
                    {
                              "id": "d",
                              "text": "A secessionist state in Nigeria"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biafra",
                              "statement": "Nigerian secession."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biafra was the secessionist Igbo state in Nigeria (1967-70).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Secessionist state in Nigeria"
},
        },
        {
          id: "ciealhis-u2-af-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Organisation of African Unity (OAU) founded?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1963
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "OAU",
                              "statement": "1963-2002."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The OAU was founded in 1963.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1963"
},
        },
        {
          id: "ciealhis-u2-af-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The OAU was replaced by which organisation in 2002?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "European Union"
                    },
                    {
                              "id": "b",
                              "text": "African Union"
                    },
                    {
                              "id": "c",
                              "text": "NATO"
                    },
                    {
                              "id": "d",
                              "text": "Commonwealth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "AU",
                              "statement": "OAU successor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The African Union replaced the OAU in 2002.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** African Union"
},
        },
        {
          id: "ciealhis-u2-af-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse why post-colonial African economies remained dependent on former colonial powers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Dependence",
                              "statement": "Economic legacy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Colonial economies built to export raw materials to Europe.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Little industrial base or diversification after independence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Former powers retained trade and investment advantages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: continued neocolonial economic ties.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Raw-material economies, weak industry, retained colonial trade ties"
},
        },
        {
          id: "ciealhis-u2-af-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which factor best explains the frequency of coups d'état in post-colonial Africa?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Strong democratic traditions"
                    },
                    {
                              "id": "b",
                              "text": "Abundant oil wealth"
                    },
                    {
                              "id": "c",
                              "text": "High literacy rates"
                    },
                    {
                              "id": "d",
                              "text": "Weak institutions combined with ethnic and economic instability"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Coups",
                              "statement": "Weak institutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Coups exploited weak institutions, ethnic divisions and economic hardship.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(d)** Weak institutions and instability"
},
        },
        {
          id: "ciealhis-u2-af-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The OAU operated from 1963 until it was replaced by the AU in 2002. How many years did it exist?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 39
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "OAU duration",
                              "statement": "1963-2002."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2002 - 1963 = 39 years.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "39"
},
        },
        {
          id: "ciealhis-u2-af-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether the African Union has been more successful than the OAU.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "AU vs OAU",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AU has broader mandate: development, peacekeeping, human rights.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "OAU achieved unity rhetoric but limited practical action.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AU faces similar funding and sovereignty constraints.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: marginally more effective but challenges remain.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "AU broader mandate but faces similar constraints"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u2-af-notes",
      title: "Post-colonial Africa — notes",
      summary: "Independence wave 1950s-60s. Challenges: borders, dependence, corruption.",
      sections: [
        { heading: "Key idea", body: "Independence achieved but development remains challenging." },
        { heading: "Contemporary", body: "Rwanda genocide, resource conflicts, AIDS pandemic." },
      ],
    },
  ],
};
