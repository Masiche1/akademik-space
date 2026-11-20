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
                              "text": "Movement for African unity"
                    },
                    {
                              "id": "b",
                              "text": "A type of government"
                    },
                    {
                              "id": "c",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "d",
                              "text": "A colonial system"
                    }
          ],
          "correctChoiceId": "a"
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
