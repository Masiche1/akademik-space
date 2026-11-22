import type { Lesson } from "../../../types.ts";

export const lesson623: Lesson = {
  id: "ciealhis-u2-lesson-2-3",
  code: "2-3",
  title: "Middle East Conflicts",
  goal: "I CAN explain Arab-Israeli conflict, causes and key events.",
  standards: ["Cambridge A Level History 9489", "Paper 2: Middle East"],
  
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
      id: "ciealhis-u2-s3-me",
      title: "Middle East",
      skill: "Analyse Arab-Israeli conflict.",
      lesson: {
        sections: [
          {
            heading: "Origins",
            body: "Zionism movement for Jewish homeland. 1948 Israel declared → Arab-Israeli war. Palestinians displaced — refugee crisis. UN partition plan.",
          },
          {
            heading: "Key conflicts",
            body: "1967 Six-Day War: Israel captured West Bank, Gaza, Golan, Sinai. 1973 Yom Kippur War. Oslo Accords 1993. Intifadas — Palestinian uprisings.",
          },
          {
            heading: "Ongoing issues",
            body: "Settlements, refugees, Jerusalem status, security, water, regional powers.",
          },
        ],
        keyFormulas: [
          { name: "Israel", statement: "1948" },
          { name: "Six-Day War", statement: "1967" },
          { name: "Oslo", statement: "1993" },
        ],
        workedExample: {
          problem: "Why is Middle East conflict difficult to resolve?",
          solution: "Competing claims to land, historical grievances, religious significance, regional politics, security concerns.",
        },
      },
      questions: [
        {
          id: "ciealhis-u2-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When was Israel established?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1967"
                    },
                    {
                              "id": "b",
                              "text": "1918"
                    },
                    {
                              "id": "c",
                              "text": "1948"
                    },
                    {
                              "id": "d",
                              "text": "1993"
                    }
          ],
          "correctChoiceId": "c"
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
          id: "ciealhis-u2-me-q2",
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
          id: "ciealhis-u2-me-q3",
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
                              "statement": "Jewish homeland."
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
          id: "ciealhis-u2-me-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Israel, Palestine, Zionism, Six-Day War, Oslo Accords, intifada. (b) When was Israel established? (c) What was Six-Day War? (d) What is Zionism? (e) What were Oslo Accords? (f) What is intifada? (g) What are key issues? (h) Evaluate prospects for peace.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Middle East",
                              "statement": "Conflict."
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
                              "reasoning": "(d) Jewish homeland.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1993 peace.",
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
                              "reasoning": "(h) Complex, unlikely soon.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Middle East conflict."
},
        },
        {
          id: "ciealhis-u2-me-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did the UN partition plan of 1947 propose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Separate Jewish and Arab states in Palestine" },
              { id: "b", text: "Transfer of Palestine to Egypt" },
              { id: "c", text: "British rule over Palestine indefinitely" },
              { id: "d", text: "A single unified Palestinian state" }
            ],
            correctChoiceId: "a"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "UN partition", statement: "1947 proposal." }
            ],
            steps: [
              { reasoning: "The plan attempted to divide Palestine into two states.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** Separate Jewish and Arab states in Palestine"
          }
        },
        {
          id: "ciealhis-u2-me-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the State of Israel declared?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1948 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Israel", statement: "Declared in 1948." }
            ],
            steps: [
              { reasoning: "Israel declared independence on 14 May 1948.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1948"
          }
        },
        {
          id: "ciealhis-u2-me-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which territories did Israel capture during the Six-Day War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iraq and Saudi Arabia" },
              { id: "b", text: "Only the Gaza Strip" },
              { id: "c", text: "The West Bank, Gaza, the Golan Heights and Sinai" },
              { id: "d", text: "Lebanon and Jordan entirely" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Six-Day War", statement: "Territorial gains." }
            ],
            steps: [
              { reasoning: "Israel's victory greatly expanded the territory under its control.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(c)** The West Bank, Gaza, the Golan Heights and Sinai"
          }
        },
        {
          id: "ciealhis-u2-me-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the Yom Kippur War occur?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1973 }]
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Yom Kippur War", statement: "1973 conflict." }
            ],
            steps: [
              { reasoning: "Arab states attacked Israel in October 1973.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1973"
          }
        },
        {
          id: "ciealhis-u2-me-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the establishment of Israel created a refugee crisis.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Palestinian refugees", statement: "Displacement." }
            ],
            steps: [
              { reasoning: "War and displacement forced hundreds of thousands of Palestinians from their homes.", marks: 1, markCode: "M" },
              { reasoning: "Many fled to neighbouring states and refugee camps.", marks: 1, markCode: "M" },
              { reasoning: "The right of return became a central unresolved issue.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "War displacement created a lasting refugee problem"
          }
        },
        {
          id: "ciealhis-u2-me-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What was the main purpose of the Oslo Accords in 1993?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To end all Jewish settlement in the West Bank" },
              { id: "b", text: "To begin a negotiated peace process between Israel and the PLO" },
              { id: "c", text: "To place Jerusalem under UN administration" },
              { id: "d", text: "To establish a unified Arab state" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Oslo Accords", statement: "1993 peace process." }
            ],
            steps: [
              { reasoning: "Oslo created limited Palestinian autonomy and mutual recognition.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(b)** To begin a negotiated peace process between Israel and the PLO"
          }
        },
        {
          id: "ciealhis-u2-me-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year were the Oslo Accords signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1993 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oslo Accords", statement: "1993 agreement." }
            ],
            steps: [
              { reasoning: "The accords were signed in Oslo in 1993.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1993"
          }
        },
        {
          id: "ciealhis-u2-me-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the Six-Day War and the Yom Kippur War in terms of outcome and significance.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "1967 and 1973 wars", statement: "Different outcomes." }
            ],
            steps: [
              { reasoning: "Israel won decisively in 1967 and expanded its occupied territories.", marks: 1, markCode: "M" },
              { reasoning: "The 1973 war showed Arab states could challenge Israel militarily but ended without a decisive winner.", marks: 1, markCode: "M" },
              { reasoning: "Together they shaped later diplomacy, including peace talks and territorial disputes.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "1967 transformed territory; 1973 changed perceptions"
          }
        },
        {
          id: "ciealhis-u2-me-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is an intifada?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A regional economic organisation" },
              { id: "b", text: "An Israeli military reserve system" },
              { id: "c", text: "A type of peace negotiation" },
              { id: "d", text: "A Palestinian uprising against Israeli control" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intifada", statement: "Palestinian uprising." }
            ],
            steps: [
              { reasoning: "Intifadas expressed Palestinian resistance through protests and violence.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(d)** A Palestinian uprising against Israeli control"
          }
        },
        {
          id: "ciealhis-u2-me-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain two ongoing issues that make the Arab-Israeli conflict difficult to resolve.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Middle East issues", statement: "Core disputes." }
            ],
            steps: [
              { reasoning: "Competing claims to territory, especially the West Bank, Gaza and Jerusalem, remain central.", marks: 1, markCode: "M" },
              { reasoning: "Security concerns, refugees, settlements and regional politics deepen mistrust.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Territory and security disputes"
          }
        },
        {
          id: "ciealhis-u2-me-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is the status of Jerusalem especially contentious?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has religious significance to Jews, Christians and Muslims and is claimed by both sides" },
              { id: "b", text: "It was ruled exclusively by Egypt until 1967" },
              { id: "c", text: "It is the largest city in Africa" },
              { id: "d", text: "It contains no holy sites" }
            ],
            correctChoiceId: "a"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Jerusalem", statement: "Religious and political dispute." }
            ],
            steps: [
              { reasoning: "Jerusalem combines sacred importance with competing sovereignty claims.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** It has religious significance to Jews, Christians and Muslims and is claimed by both sides"
          }
        },
        {
          id: "ciealhis-u2-me-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate the prospects for a lasting peace agreement in the Middle East.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Balanced judgement." }
            ],
            steps: [
              { reasoning: "Negotiated agreements show that compromise is possible.", marks: 1, markCode: "M" },
              { reasoning: "Territorial, religious and security disputes remain deeply entrenched.", marks: 1, markCode: "M" },
              { reasoning: "A strong answer weighs diplomatic progress against structural obstacles.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Possible but difficult due to entrenched disputes"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u2-me-notes",
      title: "Middle East — notes",
      summary: "Zionism→Israel 1948→wars. Six-Day 1967, Oslo 1993. Complex ongoing conflict.",
      sections: [
        { heading: "Key idea", body: "Competing national/religious claims create intractable conflict." },
        { heading: "Key events", body: "1948 Israel, 1967 Six-Day, 1993 Oslo, intifadas." },
      ],
    },
  ],
};
