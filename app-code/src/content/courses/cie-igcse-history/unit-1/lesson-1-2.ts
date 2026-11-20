import type { Lesson } from "../../../types.ts";

export const lesson332: Lesson = {
  id: "cieihis-u1-lesson-1-2",
  code: "1-2",
  title: "The Cold War: Crises and Confrontations",
  goal: "I CAN analyse key Cold War crises and their outcomes.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Cold War crises"],
  
  vocabulary: [
    { term: "Berlin Blockade", definition: "Soviet blockade of West Berlin 1948-49." },
    { term: "Berlin Airlift", definition: "US/UK air supply to West Berlin." },
    { term: "Cuban Missile Crisis", definition: "1962 confrontation over Soviet missiles in Cuba." },
    { term: "Nuclear weapons", definition: "Weapons of mass destruction." },
    { term: "Proxy war", definition: "Conflict between superpowers fought through allies." },
    { term: "Detente", definition: "Period of reduced Cold War tension." },
  ],
  concepts: [
    {
      id: "cieihis-u1-s2-crisis",
      title: "Cold War crises",
      skill: "Analyse key Cold War confrontations.",
      lesson: {
        sections: [
          {
            heading: "Berlin crises",
            body: "1948-49 Blockade: Soviets cut land access to West Berlin; Western powers airlifted supplies. 1961 Wall: divided Berlin, prevented East→West flight.",
          },
          {
            heading: "Cuban Missile Crisis",
            body: "1962: Soviets placed nuclear missiles in Cuba. US naval blockade demanded removal. 13 days of crisis — closest to nuclear war. Resolved by secret deal: missiles removed, US missiles removed from Turkey.",
          },
          {
            heading: "Proxy conflicts",
            body: "Korean War (1950-53), Vietnam War (1955-75), Afghanistan (1979-89) — superpowers supported opposing sides without direct conflict.",
          },
        ],
        keyFormulas: [
          { name: "Berlin Blockade", statement: "1948-49 airlift" },
          { name: "Cuban Crisis", statement: "1962 missile confrontation" },
          { name: "Proxy war", statement: "allied conflict" },
        ],
        workedExample: {
          problem: "Why was the Cuban Missile Crisis so dangerous?",
          solution: "Both sides had nuclear weapons — miscalculation could trigger nuclear war. 13 days brought world closest to apocalypse.",
        },
      },
      questions: [
        {
          id: "cieihis-u1-cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Berlin Blockade?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Soviet blockade of West Berlin 1948-49"
                    },
                    {
                              "id": "b",
                              "text": "A nuclear attack"
                    },
                    {
                              "id": "c",
                              "text": "A peace treaty"
                    },
                    {
                              "id": "d",
                              "text": "A trade agreement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Berlin Blockade",
                              "statement": "Soviet blockade."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviets cut land access to West Berlin.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Soviet blockade of West Berlin"
},
        },
        {
          id: "cieihis-u1-cr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Cuban Missile Crisis?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cuban Crisis",
                              "statement": "1962 missile confrontation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviets placed nuclear missiles in Cuba.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "US demanded removal — 13 days crisis.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1962 missile confrontation"
},
        },
        {
          id: "cieihis-u1-cr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was a proxy war? Give an example.",
          response: {
          "type": "open"
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
                              "reasoning": "Conflict between superpowers through allies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: Vietnam War, Korean War.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Avoided direct superpower conflict.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Allied conflict example"
},
        },
        {
          id: "cieihis-u1-cr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Berlin Blockade, Berlin Airlift, Cuban Missile Crisis, nuclear weapons, proxy war, detente. (b) What was the Berlin Blockade? (c) What was the Cuban Missile Crisis? (d) Why was it dangerous? (e) What was a proxy war? Give example. (f) What was detente? (g) How was Cuban Crisis resolved? (h) Evaluate whether the Cold War was truly 'cold'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cold War crises",
                              "statement": "Analysis, outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Soviet blockade 1948-49.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1962 missile confrontation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Nuclear war risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Allied conflict; Vietnam/Korea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Reduced tension period.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Missiles removed, secret deal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation — proxy wars were hot.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cold War crises and confrontations."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u1-cr-notes",
      title: "Cold War crises — notes",
      summary: "Berlin Blockade/Airlift, Cuban Missile Crisis, proxy wars (Korea, Vietnam, Afghanistan).",
      sections: [
        { heading: "Key idea", body: "Crises brought superpowers close to direct/nuclear conflict." },
        { heading: "Proxy wars", body: "Superpowers fought indirectly through allies — Korea, Vietnam, Afghanistan." },
      ],
    },
  ],
};
