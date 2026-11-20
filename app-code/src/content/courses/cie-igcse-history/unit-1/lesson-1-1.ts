import type { Lesson } from "../../../types.ts";

export const lesson331: Lesson = {
  id: "cieihis-u1-lesson-1-1",
  code: "1-1",
  title: "The Cold War: Origins and Superpower Rivalry",
  goal: "I CAN explain the causes and nature of the Cold War.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: The Cold War"],
  
  vocabulary: [
    { term: "Cold War", definition: "Ideological/political rivalry between USA and USSR without direct war." },
    { term: "Capitalism", definition: "Economic system based on private ownership and free markets." },
    { term: "Communism", definition: "Economic system based on state ownership and classless society." },
    { term: "Containment", definition: "US policy to prevent spread of communism." },
    { term: "Iron Curtain", definition: "Divide between Western and Eastern Europe." },
    { term: "Truman Doctrine", definition: "US policy to support free peoples against communism." },
  ],
  concepts: [
    {
      id: "cieihis-u1-s1-cold",
      title: "Cold War origins",
      skill: "Understand Cold War causes and ideology.",
      lesson: {
        sections: [
          {
            heading: "Ideological divide",
            body: "USA: capitalism, democracy, individual freedom. USSR: communism, one-party state, collective ownership. Fundamental incompatibility created tension.",
          },
          {
            heading: "Post-WWII settlement",
            body: "Germany divided into East/West. Eastern Europe under Soviet influence. Iron Curtain separated ideologically opposed blocs. US Marshall Plan vs Soviet Comecon.",
          },
        ],
        keyFormulas: [
          { name: "Cold War", statement: "USA vs USSR rivalry" },
          { name: "Containment", statement: "prevent communism spread" },
          { name: "Iron Curtain", statement: "Europe divide" },
        ],
        workedExample: {
          problem: "Why did the Cold War start after WWII?",
          solution: "Ideological differences + post-war power vacuum + competing visions for Europe → mistrust and rivalry.",
        },
      },
      questions: [
        {
          id: "cieihis-u1-cw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Cold War?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ideological rivalry between USA and USSR without direct war"
                    },
                    {
                              "id": "b",
                              "text": "A nuclear war"
                    },
                    {
                              "id": "c",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "d",
                              "text": "A peace treaty"
                    }
          ],
          "correctChoiceId": "a"
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
          id: "cieihis-u1-cw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is containment?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Containment",
                              "statement": "Prevent communism spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US policy to prevent spread of communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Truman Doctrine and Marshall Plan implemented this.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Prevent communism spread"
},
        },
        {
          id: "cieihis-u1-cw-q3",
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
                              "name": "Ideological divide",
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
          id: "cieihis-u1-cw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Cold War, capitalism, communism, containment, Iron Curtain, Truman Doctrine. (b) What was the Cold War? (c) What is containment? (d) What were ideological differences? (e) What was the Iron Curtain? (f) What was the Truman Doctrine? (g) What was the Marshall Plan? (h) Explain why the Cold War began after WWII.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cold War",
                              "statement": "Origins, ideology."
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
                              "reasoning": "(c) Prevent communism spread.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Capitalism vs communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Europe divide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Support free peoples policy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) US economic aid to Europe.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Ideological differences + power vacuum.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cold War origins and ideology."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u1-cw-notes",
      title: "Cold War origins — notes",
      summary: "Cold War=USA vs USSR ideological rivalry. Capitalism vs communism. Containment policy.",
      sections: [
        { heading: "Key idea", body: "Fundamental ideological differences created decades of rivalry." },
        { heading: "Iron Curtain", body: "Divided Europe into Western (US influence) and Eastern (Soviet) blocs." },
      ],
    },
  ],
};
