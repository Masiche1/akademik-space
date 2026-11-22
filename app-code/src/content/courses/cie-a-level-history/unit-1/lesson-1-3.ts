import type { Lesson } from "../../../types.ts";

export const lesson613: Lesson = {
  id: "ciealhis-u1-lesson-1-3",
  code: "1-3",
  title: "Cold War: Proxy Conflicts",
  goal: "I CAN explain superpower involvement in Korean, Vietnam and Afghan wars.",
  standards: ["Cambridge A Level History 9489", "Paper 1: proxy wars"],
  
  vocabulary: [
    { term: "Korean War", definition: "1950-53 conflict in Korea." },
    { term: "Vietnam War", definition: "1955-75 conflict in Vietnam." },
    { term: "Soviet-Afghan War", definition: "1979-89 conflict in Afghanistan." },
    { term: "Domino theory", definition: "US fear of communism spread." },
    { term: "Viet Cong", definition: "South Vietnamese communist guerrillas." },
    { term: "Mujahedeen", definition: "Afghan resistance fighters." },
  ],
  concepts: [
    {
      id: "ciealhis-u1-s3-proxy",
      title: "Proxy conflicts",
      skill: "Analyse superpower involvement in regional wars.",
      lesson: {
        sections: [
          {
            heading: "Korean War",
            body: "1950-53: North (Soviet/Chinese backed) vs South (US backed). Stalemate at 38th parallel. Demonstrated Cold War proxy conflict.",
          },
          {
            heading: "Vietnam War",
            body: "1955-75: US supported South against North/Viet Cong. Domino theory drove intervention. US defeat led to Vietnam syndrome.",
          },
          {
            heading: "Soviet-Afghan War",
            body: "1979-89: USSR invaded to support communist government. US/China/Pakistan backed mujahedeen. Soviet withdrawal contributed to collapse.",
          },
        ],
        keyFormulas: [
          { name: "Korean War", statement: "1950-53" },
          { name: "Vietnam", statement: "1955-75" },
          { name: "Afghanistan", statement: "1979-89" },
        ],
        workedExample: {
          problem: "Why did the US struggle in Vietnam despite military superiority?",
          solution: "Guerrilla tactics + difficult terrain + lack of local support + political constraints → conventional tactics failed.",
        },
      },
      questions: [
        {
          id: "ciealhis-u1-px-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Korean War?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A peace treaty"
                    },
                    {
                              "id": "b",
                              "text": "1950-53 conflict in Korea"
                    },
                    {
                              "id": "c",
                              "text": "A natural disaster"
                    },
                    {
                              "id": "d",
                              "text": "A trade war"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Korean War",
                              "statement": "1950-53 conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Korean War = North vs South conflict.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1950-53 conflict"
},
        },
        {
          id: "ciealhis-u1-px-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the domino theory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Domino theory",
                              "statement": "Communism spread fear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US belief that if one country fell, neighbours would follow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Justified US intervention in Vietnam.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Communism spread fear"
},
        },
        {
          id: "ciealhis-u1-px-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did the US lose the Vietnam War?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vietnam defeat",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Guerrilla tactics + terrain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lack of local support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Domestic opposition, political constraints.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Guerrilla + terrain + opposition"
},
        },
        {
          id: "ciealhis-u1-px-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Korean War, Vietnam War, Soviet-Afghan War, domino theory, Viet Cong, mujahedeen. (b) What was Korean War? (c) What was Vietnam War? (d) What was Soviet-Afghan War? (e) What was domino theory? (f) Why did US lose Vietnam? (g) What was Vietnam syndrome? (h) Evaluate whether proxy wars achieved superpower objectives.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Proxy wars",
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
                              "reasoning": "(b) 1950-53 Korea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1955-75 Vietnam.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1979-89 Afghanistan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Communism spread fear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Guerrilla + terrain + opposition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) US military reluctance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Mixed results — costly and inconclusive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Proxy conflict analysis."
},
        },
        {
          id: "ciealhis-u1-px-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which powers supported the opposing sides in the Korean War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The United States backed both sides" },
              { id: "b", text: "The USSR and China backed the North; the United States backed the South" },
              { id: "c", text: "Britain and France controlled the peninsula" },
              { id: "d", text: "No external powers became involved" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Korean War", statement: "Cold War proxy conflict." }
            ],
            steps: [
              { reasoning: "External support made Korea a proxy war.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** The USSR and China backed the North; the United States backed the South"
          }
        },
        {
          id: "ciealhis-u1-px-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Korean War begin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1950 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Korean War", statement: "1950-1953." }
            ],
            steps: [
              { reasoning: "North Korea invaded South Korea in 1950.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1950"
          }
        },
        {
          id: "ciealhis-u1-px-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who were the Viet Cong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "French colonial administrators" },
              { id: "b", text: "South Vietnamese communist guerrillas supported by the North" },
              { id: "c", text: "South Vietnamese government troops" },
              { id: "d", text: "American military advisers in Saigon" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Viet Cong", statement: "Communist guerrillas." }
            ],
            steps: [
              { reasoning: "The Viet Cong fought against the US-backed South Vietnamese government.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** South Vietnamese communist guerrillas supported by the North"
          }
        },
        {
          id: "ciealhis-u1-px-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the Vietnam War end?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1975 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vietnam War", statement: "1955-1975." }
            ],
            steps: [
              { reasoning: "Saigon fell and the war ended in 1975.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1975"
          }
        },
        {
          id: "ciealhis-u1-px-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the Korean War ended in stalemate rather than victory for either side.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Korean stalemate", statement: "Armistice outcome." }
            ],
            steps: [
              { reasoning: "Neither side could achieve decisive victory after Chinese intervention and UN/US resistance.", marks: 1, markCode: "M" },
              { reasoning: "The 1953 armistice roughly preserved the division near the 38th parallel.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Military and political stalemate"
          }
        },
        {
          id: "ciealhis-u1-px-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did the Soviet Union invade Afghanistan in 1979?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To stop the United States invading Iran" },
              { id: "b", text: "To support the pro-Soviet Afghan government against insurgency" },
              { id: "c", text: "To annex Afghanistan as a Soviet republic" },
              { id: "d", text: "To secure access to oil fields in the Persian Gulf" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Soviet-Afghan War", statement: "Support for communist government." }
            ],
            steps: [
              { reasoning: "Moscow sought to preserve its influence over the Afghan regime.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** To support the pro-Soviet Afghan government against insurgency"
          }
        },
        {
          id: "ciealhis-u1-px-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Soviet Union withdraw from Afghanistan?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1989 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Soviet-Afghan War", statement: "1979-1989." }
            ],
            steps: [
              { reasoning: "Soviet forces completed their withdrawal in 1989.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1989"
          }
        },
        {
          id: "ciealhis-u1-px-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the role of external powers in the Korean and Vietnam Wars.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Proxy war comparison", statement: "Different levels of intervention." }
            ],
            steps: [
              { reasoning: "In Korea, external powers provided major military support but avoided direct superpower combat.", marks: 1, markCode: "M" },
              { reasoning: "In Vietnam, the United States deployed large conventional forces and sustained bombing campaigns.", marks: 1, markCode: "M" },
              { reasoning: "Both conflicts showed limits of superpower power when local conditions resisted them.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Vietnam saw deeper US commitment than Korea"
          }
        },
        {
          id: "ciealhis-u1-px-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best explains the impact of the domino theory on US policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It led directly to the creation of the United Nations" },
              { id: "b", text: "It made the United States support colonial powers indefinitely" },
              { id: "c", text: "It justified intervention to prevent the spread of communism" },
              { id: "d", text: "It encouraged the United States to ignore Asia" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Domino theory", statement: "Containment rationale." }
            ],
            steps: [
              { reasoning: "The theory framed Vietnam as part of a wider communist expansion.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** It justified intervention to prevent the spread of communism"
          }
        },
        {
          id: "ciealhis-u1-px-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was Vietnam syndrome and why did it matter?",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vietnam syndrome", statement: "Post-war reluctance." }
            ],
            steps: [
              { reasoning: "It described public and political reluctance to support overseas military intervention.", marks: 1, markCode: "M" },
              { reasoning: "It constrained later US foreign policy after Vietnam.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Reluctance to intervene abroad"
          }
        },
        {
          id: "ciealhis-u1-px-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which group received substantial external support during the Soviet-Afghan War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Soviet conscripts, backed by India" },
              { id: "b", text: "The Afghan royal family, backed by Britain" },
              { id: "c", text: "The Iranian army, backed by the United Nations" },
              { id: "d", text: "The mujahedeen, backed by the United States, China and Pakistan" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Soviet-Afghan War", statement: "Mujahedeen support." }
            ],
            steps: [
              { reasoning: "Anti-Soviet fighters received weapons and funds from several powers.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** The mujahedeen, backed by the United States, China and Pakistan"
          }
        },
        {
          id: "ciealhis-u1-px-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate whether proxy wars achieved the superpowers' strategic objectives.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Balanced judgement." }
            ],
            steps: [
              { reasoning: "They sometimes contained rivals, as in Korea, without direct superpower war.", marks: 1, markCode: "M" },
              { reasoning: "They failed to produce clear victories, especially in Vietnam and Afghanistan.", marks: 1, markCode: "M" },
              { reasoning: "They imposed heavy human and economic costs while outcomes remained contested.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Mixed results; costly and often inconclusive"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u1-px-notes",
      title: "Proxy wars — notes",
      summary: "Korea, Vietnam, Afghanistan — superpowers fought through allies.",
      sections: [
        { heading: "Key idea", body: "Proxy wars avoided direct conflict but were costly and often inconclusive." },
        { heading: "Vietnam", body: "US defeat led to Vietnam syndrome — reluctance for future interventions." },
      ],
    },
  ],
};
