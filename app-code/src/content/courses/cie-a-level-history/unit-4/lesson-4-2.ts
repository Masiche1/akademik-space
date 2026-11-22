import type { Lesson } from "../../../types.ts";

export const lesson642: Lesson = {
  id: "ciealhis-u4-lesson-4-2",
  code: "4-2",
  title: "Cold War: Comparative Analysis",
  goal: "I CAN compare and contrast superpower strategies and outcomes.",
  standards: ["Cambridge A Level History 9489", "Paper 1: analysis"],
  
  vocabulary: [
    { term: "Containment", definition: "US policy to prevent communism." },
    { term: "Expansionism", definition: "Soviet policy to spread communism." },
    { term: "Detente", definition: "Period of reduced tension." },
    { term: "Proxy war", definition: "Conflict through allies." },
    { term: "Arms race", definition: "Nuclear weapons competition." },
    { term: "Spheres of influence", definition: "Areas controlled by superpowers." },
  ],
  concepts: [
    {
      id: "ciealhis-u4-s2-comp",
      title: "Comparative analysis",
      skill: "Compare superpower strategies.",
      lesson: {
        sections: [
          {
            heading: "US strategy",
            body: "Containment: prevent communism spread. Marshall Plan: economic aid. NATO: military alliance. Nuclear deterrence: MAD doctrine.",
          },
          {
            heading: "Soviet strategy",
            body: "Expansionism: spread communism. Comecon: economic bloc. Warsaw Pact: military alliance. Proxy support: Korea, Vietnam, Afghanistan.",
          },
        ],
        keyFormulas: [
          { name: "US", statement: "containment" },
          { name: "USSR", statement: "expansionism" },
          { name: "Proxy", statement: "allied conflict" },
        ],
        workedExample: {
          problem: "Compare US and Soviet approaches to Cold War.",
          solution: "US: containment, economic aid, alliances. USSR: expansion, military support, proxy wars. Both avoided direct conflict.",
        },
      },
      questions: [
        {
          id: "ciealhis-u4-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was US containment policy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "b",
                              "text": "Spread communism"
                    },
                    {
                              "id": "c",
                              "text": "Prevent communism spread"
                    },
                    {
                              "id": "d",
                              "text": "A military alliance"
                    }
          ],
          "correctChoiceId": "c"
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
                              "reasoning": "Containment = prevent communism spread.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Prevent communism"
},
        },
        {
          id: "ciealhis-u4-comp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was Soviet expansionism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Expansionism",
                              "statement": "Communism spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviet policy to spread communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Through military, political, economic means.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Communism spread"
},
        },
        {
          id: "ciealhis-u4-comp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare US and Soviet Cold War strategies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Strategies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US: containment, economic aid, NATO.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "USSR: expansion, Warsaw Pact, proxies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both avoided direct war.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Containment vs expansion"
},
        },
        {
          id: "ciealhis-u4-comp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define containment, expansionism, detente, proxy war, arms race, spheres of influence. (b) What was containment? (c) What was expansionism? (d) What was detente? (e) What was proxy war? (f) What was arms race? (g) What were spheres of influence? (h) Evaluate which superpower 'won' the Cold War.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Comparison",
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
                              "reasoning": "(b) Prevent communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Spread communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Reduced tension.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Allied conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Nuclear competition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Controlled areas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) USSR collapsed — US strategic victory.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cold War comparative analysis."
},
        },
        {
          id: "ciealhis-u4-comp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Marshall Plan?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A trade embargo on the USSR"
                    },
                    {
                              "id": "b",
                              "text": "A nuclear arms treaty"
                    },
                    {
                              "id": "c",
                              "text": "US economic aid to rebuild Western Europe"
                    },
                    {
                              "id": "d",
                              "text": "A Soviet military alliance"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Marshall Plan",
                              "statement": "US economic aid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Marshall Plan provided US economic aid to rebuild Western Europe.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** US economic aid to rebuild Europe"
},
        },
        {
          id: "ciealhis-u4-comp-q6",
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
                              "reasoning": "NATO was founded in 1949 as a Western military alliance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1949"
},
        },
        {
          id: "ciealhis-u4-comp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare the roles of NATO and the Warsaw Pact.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Alliances",
                              "statement": "NATO vs Warsaw Pact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NATO was the Western military alliance led by the USA; the Warsaw Pact was the Soviet-bloc military alliance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both were collective defence alliances that institutionalised the Cold War division of Europe.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Western vs Soviet-bloc collective defence alliances"
},
        },
        {
          id: "ciealhis-u4-comp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a proxy war?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A naval blockade of enemy ports"
                    },
                    {
                              "id": "b",
                              "text": "A conflict fought through allied third parties or client states"
                    },
                    {
                              "id": "c",
                              "text": "A war fought directly between the superpowers"
                    },
                    {
                              "id": "d",
                              "text": "A diplomatic summit between leaders"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Proxy war",
                              "statement": "Allied conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A proxy war is fought through allies or client states rather than direct superpower combat.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Conflict fought through allies"
},
        },
        {
          id: "ciealhis-u4-comp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In what year was the Warsaw Pact established?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1955
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Warsaw Pact",
                              "statement": "1955 founding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Warsaw Pact was established in 1955 as the Soviet-bloc military alliance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1955"
},
        },
        {
          id: "ciealhis-u4-comp-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare US and Soviet approaches to the arms race, including the MAD doctrine and proxy support.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Arms race",
                              "statement": "Nuclear competition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US approach: massive nuclear and conventional buildup justified by containment and deterrence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Soviet approach: matched US arsenals to maintain parity and project superpower status.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "MAD doctrine made direct war suicidal for both sides, channelling rivalry into proxy conflicts.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Both used proxy support — US in Korea/Vietnam, USSR in Afghanistan — to avoid direct confrontation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Deterrence parity drove rivalry into proxy wars"
},
        },
        {
          id: "ciealhis-u4-comp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which US programme provided economic aid to rebuild Western Europe?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The Marshall Plan"
                    },
                    {
                              "id": "b",
                              "text": "The Berlin Blockade"
                    },
                    {
                              "id": "c",
                              "text": "The Warsaw Pact"
                    },
                    {
                              "id": "d",
                              "text": "The Comecon"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Marshall Plan",
                              "statement": "Economic aid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Marshall Plan provided US economic aid to rebuild Western Europe.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** The Marshall Plan"
},
        },
        {
          id: "ciealhis-u4-comp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following was a Soviet proxy intervention?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The formation of NATO in 1949"
                    },
                    {
                              "id": "b",
                              "text": "The Soviet invasion of Afghanistan in 1979"
                    },
                    {
                              "id": "c",
                              "text": "The Berlin airlift"
                    },
                    {
                              "id": "d",
                              "text": "The Marshall Plan"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Proxy support",
                              "statement": "Soviet interventions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The 1979 invasion of Afghanistan was a Soviet proxy intervention supporting a communist government.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** The Soviet invasion of Afghanistan in 1979"
},
        },
        {
          id: "ciealhis-u4-comp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In what year did the Berlin Wall fall, symbolising the end of the Cold War division of Europe?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1989
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Berlin Wall",
                              "statement": "1989 fall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Berlin Wall fell in 1989, marking the end of the divided Europe of the Cold War.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1989"
},
        },
        {
          id: "ciealhis-u4-comp-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best describes detente?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An intensification of the nuclear arms race"
                    },
                    {
                              "id": "b",
                              "text": "A period of reduced tension and negotiation between the superpowers"
                    },
                    {
                              "id": "c",
                              "text": "A proxy war in Asia"
                    },
                    {
                              "id": "d",
                              "text": "Soviet expansion into Europe"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Detente",
                              "statement": "Reduced tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Detente was a period of reduced tension and increased negotiation between the superpowers.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Reduced tension and negotiation"
},
        },
        {
          id: "ciealhis-u4-comp-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In what year did the Soviet Union invade Afghanistan?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1979
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Afghanistan War",
                              "statement": "1979 invasion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The USSR invaded Afghanistan in 1979 to support the communist government.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1979"
},
        },
        {
          id: "ciealhis-u4-comp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the USSR 'lost' the Cold War, considering economic, military and political factors.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Cold War outcome."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economic: the USSR could not sustain military spending alongside failing economic reforms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Military: the arms race and Afghanistan drained resources without decisive gains.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Political: loss of Eastern European satellites and nationalist pressures undermined the bloc.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "However, US policies such as containment and alliance-building actively contributed to the outcome.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Economic strain, military overstretch and bloc collapse ended USSR power"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u4-comp-notes",
      title: "Comparison — notes",
      summary: "US containment vs USSR expansion. Both used proxies and alliances.",
      sections: [
        { heading: "Key idea", body: "Superpower strategies shaped Cold War outcomes." },
        { heading: "Outcome", body: "US strategic victory — USSR collapsed." },
      ],
    },
  ],
};
