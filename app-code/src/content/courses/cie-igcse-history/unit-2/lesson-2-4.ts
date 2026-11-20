import type { Lesson } from "../../../types.ts";

export const lesson344: Lesson = {
  id: "cieihis-u2-lesson-2-4",
  code: "2-4",
  title: "Decolonisation and Independence Movements",
  goal: "I CAN explain decolonisation and independence movements in Africa and Asia.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: decolonisation"],
  
  vocabulary: [
    { term: "Decolonisation", definition: "Process of colonies gaining independence." },
    { term: "Nationalism", definition: "Desire for self-determination." },
    { term: "Colonialism", definition: "Control of one country by another." },
    { term: "Imperialism", definition: "Extending power through colonisation." },
    { term: "Neocolonialism", definition: "Economic control after political independence." },
    { term: "Bandung Conference", definition: "1955 meeting of Asian/African nations." },
  ],
  concepts: [
    {
      id: "cieihis-u2-s4-decol",
      title: "Decolonisation",
      skill: "Understand independence movements.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "WWII weakened European powers. Nationalist movements gained strength. Cold War pressure. UN support for self-determination. Economic exploitation resentment.",
          },
          {
            heading: "Key examples",
            body: "India 1947 (Gandhi's non-violence), Ghana 1957 (Nkrumah), Algeria 1962 (war of independence), Vietnam 1954/1975. Most African countries independent by 1960s-70s.",
          },
          {
            heading: "Challenges",
            body: "Neocolonialism — economic dependence continues. Artificial borders create ethnic conflicts. Poverty, corruption, lack of infrastructure.",
          },
        ],
        keyFormulas: [
          { name: "Decolonisation", statement: "independence process" },
          { name: "India", statement: "1947 independence" },
          { name: "Ghana", statement: "1957 first sub-Saharan" },
        ],
        workedExample: {
          problem: "Why did decolonisation accelerate after WWII?",
          solution: "European powers weakened + nationalist movements strengthened + Cold War pressure + UN support.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is decolonisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Process of colonies gaining independence"
                    },
                    {
                              "id": "b",
                              "text": "A type of war"
                    },
                    {
                              "id": "c",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "d",
                              "text": "A natural disaster"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Decolonisation",
                              "statement": "Independence process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decolonisation = colonies gaining independence.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Independence process"
},
        },
        {
          id: "cieihis-u2-dc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is neocolonialism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neocolonialism",
                              "statement": "Economic control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economic control after political independence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Former colonies dependent on former rulers.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Economic control after independence"
},
        },
        {
          id: "cieihis-u2-dc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What caused decolonisation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decolonisation causes",
                              "statement": "Independence drivers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WWII weakened European powers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Nationalist movements strengthened.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cold War + UN support.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "WWII weakness + nationalism"
},
        },
        {
          id: "cieihis-u2-dc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define decolonisation, nationalism, colonialism, imperialism, neocolonialism, Bandung Conference. (b) What is decolonisation? (c) What is neocolonialism? (d) What caused decolonisation? (e) When did India gain independence? (f) When did Ghana gain independence? (g) What challenges do post-colonial states face? (h) Evaluate whether decolonisation was successful.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Decolonisation",
                              "statement": "Causes, examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Independence process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Economic control.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) WWII weakness + nationalism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1947.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 1957.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Neocolonialism, borders, poverty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Decolonisation and independence."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-dc-notes",
      title: "Decolonisation — notes",
      summary: "WWII weakened Europe + nationalism → independence wave. Challenges: neocolonialism, borders, poverty.",
      sections: [
        { heading: "Key idea", body: "Political independence achieved but economic dependence often continued." },
        { heading: "Examples", body: "India 1947, Ghana 1957, Algeria 1962, most Africa by 1960s-70s." },
      ],
    },
  ],
};
