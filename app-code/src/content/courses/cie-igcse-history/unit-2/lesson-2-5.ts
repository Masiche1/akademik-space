import type { Lesson } from "../../../types.ts";

export const lesson345: Lesson = {
  id: "cieihis-u2-lesson-2-5",
  code: "2-5",
  title: "The Middle East Conflict",
  goal: "I CAN explain the Arab-Israeli conflict and its causes.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Middle East"],
  
  vocabulary: [
    { term: "Israel", definition: "Jewish state established 1948." },
    { term: "Palestine", definition: "Arab homeland/territory." },
    { term: "Zionism", definition: "Movement for Jewish homeland." },
    { term: "Six-Day War", definition: "1967 Israel-Arab conflict." },
    { term: "Oslo Accords", definition: "1993 peace agreement." },
    { term: "Intifada", definition: "Palestinian uprising." },
  ],
  concepts: [
    {
      id: "cieihis-u2-s5-me",
      title: "Middle East conflict",
      skill: "Understand Arab-Israeli conflict.",
      lesson: {
        sections: [
          {
            heading: "Origins",
            body: "Zionism movement for Jewish homeland. 1948 Israel declared → Arab-Israeli war. Palestinians displaced — refugee crisis. UN partition plan.",
          },
          {
            heading: "Key conflicts",
            body: "1967 Six-Day War: Israel captured West Bank, Gaza, Golan Heights, Sinai. 1973 Yom Kippur War. Oslo Accords 1993 — limited autonomy. Intifadas — Palestinian uprisings.",
          },
          {
            heading: "Ongoing issues",
            body: "Settlements, refugees, Jerusalem status, security, water resources, regional powers.",
          },
        ],
        keyFormulas: [
          { name: "Israel", statement: "1948 Jewish state" },
          { name: "Six-Day War", statement: "1967" },
          { name: "Oslo", statement: "1993 peace" },
        ],
        workedExample: {
          problem: "Why is the Middle East conflict so difficult to resolve?",
          solution: "Competing claims to land, historical grievances, religious significance, regional politics, security concerns.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When was Israel established?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1948"
                    },
                    {
                              "id": "b",
                              "text": "1967"
                    },
                    {
                              "id": "c",
                              "text": "1993"
                    },
                    {
                              "id": "d",
                              "text": "1918"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Israel",
                              "statement": "1948 establishment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Israel declared 1948.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1948"
},
        },
        {
          id: "cieihis-u2-me-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Six-Day War?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Six-Day War",
                              "statement": "1967 conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1967 Israel-Arab war.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Israel captured West Bank, Gaza, Golan, Sinai.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1967 Israel-Arab war"
},
        },
        {
          id: "cieihis-u2-me-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is Zionism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Zionism",
                              "statement": "Jewish homeland movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Movement for Jewish homeland in Palestine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Led to Israel's establishment 1948.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Created conflict with Arabs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Jewish homeland movement"
},
        },
        {
          id: "cieihis-u2-me-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Israel, Palestine, Zionism, Six-Day War, Oslo Accords, intifada. (b) When was Israel established? (c) What was Six-Day War? (d) What is Zionism? (e) What were Oslo Accords? (f) What is intifada? (g) What are key issues in conflict? (h) Evaluate prospects for peace.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Middle East",
                              "statement": "Conflict, causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 1948.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1967 war.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Jewish homeland movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1993 peace agreement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Palestinian uprising.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Settlements, refugees, Jerusalem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Middle East conflict."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-me-notes",
      title: "Middle East — notes",
      summary: "Zionism→Israel 1948→Arab-Israeli wars. Six-Day War 1967, Oslo 1993. Complex ongoing conflict.",
      sections: [
        { heading: "Key idea", body: "Competing national/religious claims create intractable conflict." },
        { heading: "Key events", body: "1948 Israel, 1967 Six-Day, 1993 Oslo, intifadas." },
      ],
    },
  ],
};
