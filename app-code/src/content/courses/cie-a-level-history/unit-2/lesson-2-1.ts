import type { Lesson } from "../../../types.ts";

export const lesson621: Lesson = {
  id: "ciealhis-u2-lesson-2-1",
  code: "2-1",
  title: "Decolonisation and Independence Movements",
  goal: "I CAN explain decolonisation processes and key independence movements.",
  standards: ["Cambridge A Level History 9489", "Paper 2: decolonisation"],
  
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
      id: "ciealhis-u2-s1-decol",
      title: "Decolonisation",
      skill: "Analyse independence movements.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "WWII weakened European powers. Nationalist movements strengthened. Cold War pressure. UN support for self-determination. Economic exploitation resentment.",
          },
          {
            heading: "Key examples",
            body: "India 1947 (Gandhi's non-violence), Ghana 1957 (Nkrumah), Algeria 1962 (war), Vietnam 1954/1975. Most African countries independent by 1960s-70s.",
          },
          {
            heading: "Challenges",
            body: "Neocolonialism — economic dependence continues. Artificial borders create ethnic conflicts. Poverty, corruption, lack of infrastructure.",
          },
        ],
        keyFormulas: [
          { name: "Decolonisation", statement: "independence process" },
          { name: "India", statement: "1947" },
          { name: "Ghana", statement: "1957" },
        ],
        workedExample: {
          problem: "Why did decolonisation accelerate after WWII?",
          solution: "European powers weakened + nationalist movements strengthened + Cold War pressure + UN support.",
        },
      },
      questions: [
        {
          id: "ciealhis-u2-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is decolonisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of war"
                    },
                    {
                              "id": "b",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "c",
                              "text": "Process of colonies gaining independence"
                    },
                    {
                              "id": "d",
                              "text": "A natural disaster"
                    }
          ],
          "correctChoiceId": "c"
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
          id: "ciealhis-u2-dc-q2",
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
          id: "ciealhis-u2-dc-q3",
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
                              "statement": "Drivers."
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
          id: "ciealhis-u2-dc-q4",
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
                              "reasoning": "(h) Political success, economic mixed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Decolonisation analysis."
},
        },
        {
          id: "ciealhis-u2-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method was most closely associated with Mahatma Gandhi's campaign in India?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Armed guerrilla warfare" },
              { id: "b", text: "Non-violent resistance and civil disobedience" },
              { id: "c", text: "International military intervention" },
              { id: "d", text: "Negotiated transfer without public mobilisation" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Indian independence", statement: "Gandhi's non-violence." }
            ],
            steps: [
              { reasoning: "Gandhi led mass campaigns based on peaceful resistance.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** Non-violent resistance and civil disobedience"
          }
        },
        {
          id: "ciealhis-u2-dc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did India and Pakistan become independent?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1947 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "India", statement: "Independent in 1947." }
            ],
            steps: [
              { reasoning: "British India was partitioned and independence achieved in 1947.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1947"
          }
        },
        {
          id: "ciealhis-u2-dc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why was Ghana's independence in 1957 historically significant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was achieved entirely without nationalist mobilisation" },
              { id: "b", text: "It ended colonial rule in all of Africa" },
              { id: "c", text: "It created the first African currency union" },
              { id: "d", text: "It was the first sub-Saharan African colony to gain independence" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Ghana 1957", statement: "First sub-Saharan independence." }
            ],
            steps: [
              { reasoning: "Ghana's independence encouraged wider decolonisation in Africa.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** It was the first sub-Saharan African colony to gain independence"
          }
        },
        {
          id: "ciealhis-u2-dc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did Ghana gain independence?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1957 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ghana", statement: "Independent in 1957." }
            ],
            steps: [
              { reasoning: "Ghana became independent under Nkrumah in 1957.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1957"
          }
        },
        {
          id: "ciealhis-u2-dc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why decolonisation accelerated after the Second World War.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Decolonisation causes", statement: "Post-war drivers." }
            ],
            steps: [
              { reasoning: "European powers were economically and militarily weakened by war.", marks: 1, markCode: "M" },
              { reasoning: "Nationalist movements gained organisation, legitimacy and popular support.", marks: 1, markCode: "M" },
              { reasoning: "Cold War rivalry and UN support for self-determination increased pressure.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "War weakness, nationalism and international pressure"
          }
        },
        {
          id: "ciealhis-u2-dc-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What was the main purpose of the Bandung Conference in 1955?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To divide Africa into colonial spheres" },
              { id: "b", text: "To negotiate a permanent peace treaty in Europe" },
              { id: "c", text: "To promote cooperation among newly independent Asian and African states" },
              { id: "d", text: "To create the North Atlantic Treaty Organization" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Bandung Conference", statement: "Asian-African cooperation." }
            ],
            steps: [
              { reasoning: "The conference asserted the political voice of non-aligned nations.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** To promote cooperation among newly independent Asian and African states"
          }
        },
        {
          id: "ciealhis-u2-dc-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Bandung Conference held?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1955 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bandung Conference", statement: "1955 meeting." }
            ],
            steps: [
              { reasoning: "Asian and African states met at Bandung in 1955.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1955"
          }
        },
        {
          id: "ciealhis-u2-dc-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the independence processes in India, Ghana and Algeria.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Independence movements", statement: "Different methods." }
            ],
            steps: [
              { reasoning: "India used large-scale non-violent mobilisation and negotiation.", marks: 1, markCode: "M" },
              { reasoning: "Ghana combined nationalist organisation with relatively peaceful transfer of power.", marks: 1, markCode: "M" },
              { reasoning: "Algeria required prolonged armed struggle against French colonial rule.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Methods ranged from non-violence to war"
          }
        },
        {
          id: "ciealhis-u2-dc-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In which year did Algeria gain independence from France?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1957" },
              { id: "b", text: "1947" },
              { id: "c", text: "1975" },
              { id: "d", text: "1962" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Algerian independence", statement: "1962." }
            ],
            steps: [
              { reasoning: "Algeria won independence after a long war in 1962.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** 1962"
          }
        },
        {
          id: "ciealhis-u2-dc-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain two major challenges faced by newly independent states after decolonisation.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Post-colonial challenges", statement: "Development obstacles." }
            ],
            steps: [
              { reasoning: "Artificial colonial borders often created ethnic and territorial conflicts.", marks: 1, markCode: "M" },
              { reasoning: "Economic dependence, weak institutions and corruption limited development.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Borders and economic dependence"
          }
        },
        {
          id: "ciealhis-u2-dc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best defines neocolonialism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A legal system inherited unchanged from Europe" },
              { id: "b", text: "Continued economic and political influence by former colonial powers after independence" },
              { id: "c", text: "A return to direct colonial administration" },
              { id: "d", text: "The peaceful transfer of sovereignty" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neocolonialism", statement: "Economic control after independence." }
            ],
            steps: [
              { reasoning: "Political independence could coexist with continuing dependence.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** Continued economic and political influence by former colonial powers after independence"
          }
        },
        {
          id: "ciealhis-u2-dc-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate whether decolonisation was a success for former colonies.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Balanced judgement." }
            ],
            steps: [
              { reasoning: "It ended formal colonial rule and created sovereign states.", marks: 1, markCode: "M" },
              { reasoning: "Economic dependence, weak institutions and conflict often limited real autonomy.", marks: 1, markCode: "M" },
              { reasoning: "A strong answer distinguishes political success from economic development.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Politically successful but economically mixed"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u2-dc-notes",
      title: "Decolonisation — notes",
      summary: "WWII weakened Europe + nationalism → independence wave. Challenges persist.",
      sections: [
        { heading: "Key idea", body: "Political independence achieved but economic dependence often continued." },
        { heading: "Examples", body: "India 1947, Ghana 1957, Algeria 1962, most Africa by 1960s-70s." },
      ],
    },
  ],
};
