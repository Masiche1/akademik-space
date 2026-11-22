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
          solution:
            "Competing claims to land, historical grievances, religious significance, regional politics, security concerns.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When was Israel established?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "1993",
              },
              {
                id: "b",
                text: "1948",
              },
              {
                id: "c",
                text: "1918",
              },
              {
                id: "d",
                text: "1967",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Israel",
                statement: "1948 establishment.",
              },
            ],
            steps: [
              {
                reasoning: "Israel declared 1948.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1948",
          },
        },
        {
          id: "cieihis-u2-me-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Six-Day War?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Six-Day War",
                statement: "1967 conflict.",
              },
            ],
            steps: [
              {
                reasoning: "1967 Israel-Arab war.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Israel captured West Bank, Gaza, Golan, Sinai.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1967 Israel-Arab war",
          },
        },
        {
          id: "cieihis-u2-me-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is Zionism?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zionism",
                statement: "Jewish homeland movement.",
              },
            ],
            steps: [
              {
                reasoning: "Movement for Jewish homeland in Palestine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Led to Israel's establishment 1948.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Created conflict with Arabs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Jewish homeland movement",
          },
        },
        {
          id: "cieihis-u2-me-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Israel, Palestine, Zionism, Six-Day War, Oslo Accords, intifada. (b) When was Israel established? (c) What was Six-Day War? (d) What is Zionism? (e) What were Oslo Accords? (f) What is intifada? (g) What are key issues in conflict? (h) Evaluate prospects for peace.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Middle East",
                statement: "Conflict, causes.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 1948.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 1967 war.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Jewish homeland movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) 1993 peace agreement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Palestinian uprising.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Settlements, refugees, Jerusalem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Middle East conflict.",
          },
        },
        {
          id: "cieihis-u2-me-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did the UN partition plan of 1947 propose for Palestine?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "British continued control of Palestine indefinitely",
              },
              {
                id: "b",
                text: "Division of Palestine into separate Jewish and Arab states",
              },
              {
                id: "c",
                text: "A joint Jewish-Arab federation under Ottoman rule",
              },
              {
                id: "d",
                text: "Immediate Jewish exile from Palestine",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UN partition plan",
                statement: "1947 Palestine division.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The UN partition plan of 1947 proposed dividing Palestine into separate Jewish and Arab states.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Division of Palestine into separate Jewish and Arab states",
          },
        },
        {
          id: "cieihis-u2-me-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year were the Oslo Accords signed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1993,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Oslo Accords",
                statement: "1993.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Oslo Accords were signed in 1993, granting limited Palestinian autonomy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1993",
          },
        },
        {
          id: "cieihis-u2-me-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Yom Kippur War?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Yom Kippur War",
                statement: "1973 conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 1973 war in which Egypt and Syria attacked Israel on the Jewish holy day of Yom Kippur.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It aimed to recover territory lost in the Six-Day War and ended in stalemate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1973 Arab-Israeli war",
          },
        },
        {
          id: "cieihis-u2-me-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the main territorial result of the Six-Day War of 1967?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Palestine was divided into three states",
              },
              {
                id: "b",
                text: "Arab states captured all of Israel",
              },
              {
                id: "c",
                text: "Israel captured the West Bank, Gaza, Golan Heights and Sinai",
              },
              {
                id: "d",
                text: "The borders returned to their 1948 positions",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Six-Day War",
                statement: "1967 territorial gains.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Israel's victory in 1967 captured the West Bank, Gaza Strip, Golan Heights and Sinai Peninsula.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** Israel captured the West Bank, Gaza, Golan Heights and Sinai",
          },
        },
        {
          id: "cieihis-u2-me-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year was the state of Israel established? (b) In which year was the Six-Day War fought?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1948,
              },
              {
                label: "b",
                answer: 1967,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Conflict dates",
                statement: "1948-67.",
              },
            ],
            steps: [
              {
                reasoning: "Israel was established in 1948.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The Six-Day War was fought in 1967.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1948, b) 1967",
          },
        },
        {
          id: "cieihis-u2-me-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was an intifada?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An Arab League trade agreement",
              },
              {
                id: "b",
                text: "A Palestinian uprising against Israeli occupation",
              },
              {
                id: "c",
                text: "A UN peacekeeping mission",
              },
              {
                id: "d",
                text: "An Israeli military offensive",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intifada",
                statement: "Palestinian uprising.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An intifada was a Palestinian uprising, notably in 1987 and 2000, against Israeli occupation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** A Palestinian uprising against Israeli occupation",
          },
        },
        {
          id: "cieihis-u2-me-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two reasons why the Arab-Israeli conflict is so difficult to resolve.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conflict intractability",
                statement: "Peace obstacles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Competing claims to the same land — both peoples have historical and religious connections to Palestine/Israel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The 1948 war created a Palestinian refugee crisis and deep historical grievances on both sides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Security concerns, settlements, water resources and regional politics further complicate any settlement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Land claims + refugees + security concerns",
          },
        },
        {
          id: "cieihis-u2-me-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains the origin of the Arab-Israeli conflict?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Competing national claims to Palestine, the 1948 war and the resulting Palestinian displacement",
              },
              {
                id: "b",
                text: "Disagreement over oil prices in the Middle East",
              },
              {
                id: "c",
                text: "A trade dispute between Egypt and Israel",
              },
              {
                id: "d",
                text: "A Cold War arms race between the USA and USSR",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conflict origins",
                statement: "1948 displacement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The conflict arose from competing Jewish and Arab claims to Palestine, the 1948 war and the displacement of Palestinians.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Competing national claims to Palestine, the 1948 war and the resulting Palestinian displacement",
          },
        },
        {
          id: "cieihis-u2-me-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year was the Yom Kippur War fought? (b) In which year did Israel capture the West Bank during the Six-Day War?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1973,
              },
              {
                label: "b",
                answer: 1967,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "War dates",
                statement: "1967-73.",
              },
            ],
            steps: [
              {
                reasoning: "The Yom Kippur War was fought in 1973.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Israel captured the West Bank in 1967 during the Six-Day War.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1973, b) 1967",
          },
        },
        {
          id: "cieihis-u2-me-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess whether the Oslo Accords of 1993 represented a breakthrough or a failure.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Assessment",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis: Oslo was a breakthrough in that it was the first direct agreement between Israel and the PLO granting limited Palestinian autonomy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: mutual recognition, creation of the Palestinian Authority and a framework for further negotiation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: core issues — borders, Jerusalem, refugees, settlements — were left unresolved, and violence resumed, so final peace was not achieved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing the diplomatic breakthrough against its limited and ultimately unfulfilled scope.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Oslo was a breakthrough that failed to deliver final peace",
          },
        },
        {
          id: "cieihis-u2-me-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Zionism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A UN peacekeeping force",
              },
              {
                id: "b",
                text: "A policy of Israeli settlements",
              },
              {
                id: "c",
                text: "An Arab nationalist movement",
              },
              {
                id: "d",
                text: "A movement for a Jewish homeland in Palestine",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zionism",
                statement: "Jewish homeland movement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Zionism was the movement advocating a Jewish homeland in Palestine, leading to Israel's establishment in 1948.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(d)** A movement for a Jewish homeland in Palestine",
          },
        },
        {
          id: "cieihis-u2-me-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the status of Jerusalem remains a major obstacle to peace in the Middle East.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Jerusalem issue",
                statement: "Peace obstacle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Jerusalem is sacred to Judaism, Christianity and Islam, giving it profound religious significance for both sides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both Israel and the Palestinians claim Jerusalem as their capital, making sovereignty a core disputed issue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Any compromise on Jerusalem risks domestic political backlash on both sides, making agreement extremely difficult.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Religious significance + competing claims + political risk",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-me-notes",
      title: "Middle East — notes",
      summary:
        "Zionism→Israel 1948→Arab-Israeli wars. Six-Day War 1967, Oslo 1993. Complex ongoing conflict.",
      sections: [
        {
          heading: "Key idea",
          body: "Competing national/religious claims create intractable conflict.",
        },
        {
          heading: "Key events",
          body: "1948 Israel, 1967 Six-Day, 1993 Oslo, intifadas.",
        },
      ],
    },
  ],
};
