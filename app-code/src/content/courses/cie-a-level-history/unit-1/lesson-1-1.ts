import type { Lesson } from "../../../types.ts";

export const lesson611: Lesson = {
  id: "ciealhis-u1-lesson-1-1",
  code: "1-1",
  title: "Cold War: Origins and Early Confrontation",
  goal: "I CAN explain the causes and early developments of the Cold War.",
  standards: ["Cambridge A Level History 9489", "Paper 1: Cold War"],
  
  vocabulary: [
    { term: "Cold War", definition: "Ideological rivalry between USA and USSR without direct war." },
    { term: "Containment", definition: "US policy to prevent communism spread." },
    { term: "Truman Doctrine", definition: "US policy to support free peoples against communism." },
    { term: "Marshall Plan", definition: "US economic aid to rebuild Europe." },
    { term: "Iron Curtain", definition: "Divide between Western and Eastern Europe." },
    { term: "Berlin Blockade", definition: "Soviet blockade of West Berlin 1948-49." },
  ],
  concepts: [
    {
      id: "ciealhis-u1-s1-origin",
      title: "Cold War origins",
      skill: "Analyse Cold War causes and early crises.",
      lesson: {
        sections: [
          {
            heading: "Post-WWII settlement",
            body: "Potsdam Conference divided Germany. Eastern Europe under Soviet influence. Iron Curtain separated blocs. US Marshall Plan vs Soviet Comecon.",
          },
          {
            heading: "Early confrontations",
            body: "Berlin Blockade 1948-49: Soviets cut land access; Western airlift. 1949: NATO formed, USSR tested atomic bomb. Chinese revolution 1949 extended communist bloc.",
          },
        ],
        keyFormulas: [
          { name: "Cold War", statement: "USA vs USSR" },
          { name: "Containment", statement: "prevent communism" },
          { name: "Berlin Blockade", statement: "1948-49" },
        ],
        workedExample: {
          problem: "Why did the Cold War begin after WWII?",
          solution: "Ideological incompatibility + post-war power vacuum + competing visions for Europe → mistrust and rivalry.",
        },
      },
      questions: [
        {
          id: "ciealhis-u1-cw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Cold War?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "b",
                              "text": "Ideological rivalry between USA and USSR"
                    },
                    {
                              "id": "c",
                              "text": "A peace treaty"
                    },
                    {
                              "id": "d",
                              "text": "A nuclear war"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cold War",
                              "statement": "USA-USSR rivalry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cold War = ideological rivalry without direct war.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "USA-USSR rivalry"
},
        },
        {
          id: "ciealhis-u1-cw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was containment?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Containment",
                              "statement": "Prevent communism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US policy to prevent spread of communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Truman Doctrine implemented this.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Prevent communism spread"
},
        },
        {
          id: "ciealhis-u1-cw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What were the ideological differences between USA and USSR?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ideology",
                              "statement": "Capitalism vs communism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "USA: capitalism, democracy, individual freedom.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "USSR: communism, one-party state, collective ownership.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fundamental incompatibility.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Capitalism vs communism"
},
        },
        {
          id: "ciealhis-u1-cw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Cold War, containment, Truman Doctrine, Marshall Plan, Iron Curtain, Berlin Blockade. (b) What was Cold War? (c) What was containment? (d) What were ideological differences? (e) What was Berlin Blockade? (f) What was Marshall Plan? (g) What was Iron Curtain? (h) Explain why Cold War began after WWII.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cold War origins",
                              "statement": "Causes, early crises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) USA-USSR rivalry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Prevent communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Capitalism vs communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1948-49 blockade.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) US economic aid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Europe divide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Ideology + power vacuum.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cold War origins."
},
        },
        {
          id: "ciealhis-u1-cw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which conference agreed the post-war settlement of Germany and Europe in 1945?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The Versailles Conference"
                    },
                    {
                              "id": "b",
                              "text": "The Yalta Conference"
                    },
                    {
                              "id": "c",
                              "text": "The Tehran Conference"
                    },
                    {
                              "id": "d",
                              "text": "The Potsdam Conference"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Potsdam",
                              "statement": "Post-war settlement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Potsdam agreed the settlement of Germany and Europe.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** The Potsdam Conference"
},
        },
        {
          id: "ciealhis-u1-cw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In what year was NATO founded?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1949
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "NATO",
                              "statement": "1949 founding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NATO was founded in 1949.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1949"
},
        },
        {
          id: "ciealhis-u1-cw-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In what year did the USSR test its first atomic bomb?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1949
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Soviet bomb",
                              "statement": "1949 test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "USSR tested its first atomic bomb in 1949.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1949"
},
        },
        {
          id: "ciealhis-u1-cw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the main purpose of the Truman Doctrine?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To divide Germany into occupation zones"
                    },
                    {
                              "id": "b",
                              "text": "To provide military and economic aid to countries resisting communism"
                    },
                    {
                              "id": "c",
                              "text": "To provide economic aid to rebuild Europe"
                    },
                    {
                              "id": "d",
                              "text": "To form a military alliance in Western Europe"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Truman Doctrine",
                              "statement": "Aid to resist communism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Truman Doctrine aided countries resisting communism — containment in action.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Aid to countries resisting communism"
},
        },
        {
          id: "ciealhis-u1-cw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In what year did the Berlin Blockade begin?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1948
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Berlin Blockade",
                              "statement": "1948 start."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviets cut land access to West Berlin in 1948.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1948"
},
        },
        {
          id: "ciealhis-u1-cw-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did Churchill mean by the 'Iron Curtain'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The divide between Western Europe and Soviet-controlled Eastern Europe"
                    },
                    {
                              "id": "b",
                              "text": "The border between NATO and the Warsaw Pact"
                    },
                    {
                              "id": "c",
                              "text": "A Soviet trade embargo on the West"
                    },
                    {
                              "id": "d",
                              "text": "A physical wall built across Berlin"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Iron Curtain",
                              "statement": "East-West divide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iron Curtain described the ideological and physical divide in Europe.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** The East-West European divide"
},
        },
        {
          id: "ciealhis-u1-cw-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In what year was the People's Republic of China founded after the communist victory?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1949
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chinese revolution",
                              "statement": "1949 victory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The People's Republic of China was founded in 1949.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1949"
},
        },
        {
          id: "ciealhis-u1-cw-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two reasons why relations between the USA and the USSR deteriorated after 1945.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cold War origins",
                              "statement": "Deterioration causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ideological incompatibility: capitalism/democracy vs communism/one-party state.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Power vacuum and competing visions for the control of Europe.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "US actions such as the Marshall Plan and NATO vs Soviet actions such as the Berlin Blockade and Comecon.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Mutual suspicion and security fears fuelled an arms and influence race.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Ideology, power vacuum, competing actions, mutual suspicion"
},
        },
        {
          id: "ciealhis-u1-cw-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who was the US president who announced the policy of containment in 1947?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Franklin Roosevelt"
                    },
                    {
                              "id": "b",
                              "text": "Dwight Eisenhower"
                    },
                    {
                              "id": "c",
                              "text": "John Kennedy"
                    },
                    {
                              "id": "d",
                              "text": "Harry Truman"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Truman",
                              "statement": "Containment president."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Truman announced containment via the Truman Doctrine in 1947.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Harry Truman"
},
        },
        {
          id: "ciealhis-u1-cw-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In what year was the Truman Doctrine announced?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1947
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Truman Doctrine",
                              "statement": "1947 announcement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Truman Doctrine was announced in 1947.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1947"
},
        },
        {
          id: "ciealhis-u1-cw-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following was NOT a member of the Warsaw Pact?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hungary"
                    },
                    {
                              "id": "b",
                              "text": "Poland"
                    },
                    {
                              "id": "c",
                              "text": "Yugoslavia"
                    },
                    {
                              "id": "d",
                              "text": "Czechoslovakia"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Warsaw Pact",
                              "statement": "Soviet bloc members."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Yugoslavia under Tito pursued an independent communist path and was not a Warsaw Pact member.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Yugoslavia"
},
        },
        {
          id: "ciealhis-u1-cw-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In what year were atomic bombs first used in warfare?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1945
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Atomic weapons",
                              "statement": "1945 use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Atomic bombs were dropped on Hiroshima and Nagasaki in 1945.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1945"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u1-cw-notes",
      title: "Cold War origins — notes",
      summary: "Ideological divide + power vacuum → rivalry. Berlin Blockade first crisis.",
      sections: [
        { heading: "Key idea", body: "Post-WWII settlement created conditions for Cold War." },
        { heading: "Early crises", body: "Berlin Blockade 1948-49 showed superpower confrontation." },
      ],
    },
  ],
};
