import type { Lesson } from "../../../types.ts";

export const lesson612: Lesson = {
  id: "ciealhis-u1-lesson-1-2",
  code: "1-2",
  title: "Cold War: Arms Race and Detente",
  goal: "I CAN explain the nuclear arms race, crises and detente.",
  standards: ["Cambridge A Level History 9489", "Paper 1: Cold War"],
  
  vocabulary: [
    { term: "Arms race", definition: "Competition to build nuclear weapons." },
    { term: "MAD", definition: "Mutually Assured Destruction." },
    { term: "Cuban Missile Crisis", definition: "1962 confrontation over Soviet missiles." },
    { term: "SALT", definition: "Strategic Arms Limitation Talks." },
    { term: "Detente", definition: "Period of reduced tension." },
    { term: "Proxy war", definition: "Conflict through allies." },
  ],
  concepts: [
    {
      id: "ciealhis-u1-s2-arms",
      title: "Arms race and detente",
      skill: "Analyse nuclear competition and diplomacy.",
      lesson: {
        sections: [
          {
            heading: "Arms race",
            body: "Both superpowers built massive nuclear arsenals. US: hydrogen bomb, ICBMs. USSR: first satellite, ICBMs. MAD doctrine deterred direct war.",
          },
          {
            heading: "Cuban Missile Crisis",
            body: "1962: Soviets placed nuclear missiles in Cuba. US naval blockade. 13 days — closest to nuclear war. Resolved by secret deal.",
          },
          {
            heading: "Detente",
            body: "1960s-70s: reduced tension. SALT I/II limited weapons. Helsinki Accords 1975. Ended by Afghanistan invasion 1979.",
          },
        ],
        keyFormulas: [
          { name: "Arms race", statement: "nuclear competition" },
          { name: "MAD", statement: "mutual destruction" },
          { name: "Detente", statement: "reduced tension" },
        ],
        workedExample: {
          problem: "Why was Cuban Missile Crisis the closest to nuclear war?",
          solution: "Both sides had nuclear weapons, missiles in Cuba threatened US directly, 13 days of brinkmanship.",
        },
      },
      questions: [
        {
          id: "ciealhis-u1-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the arms race?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Competition to build nuclear weapons"
                    },
                    {
                              "id": "b",
                              "text": "A peace treaty"
                    },
                    {
                              "id": "c",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "d",
                              "text": "A type of war"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Arms race",
                              "statement": "Weapons competition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arms race = superpower weapons competition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Weapons competition"
},
        },
        {
          id: "ciealhis-u1-ar-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is MAD?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MAD",
                              "statement": "Mutual destruction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nuclear war would destroy both sides.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Deterred direct conflict.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mutual destruction doctrine"
},
        },
        {
          id: "ciealhis-u1-ar-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was detente?",
          response: {
          "type": "open"
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
                              "reasoning": "Period of improved US-Soviet relations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "1960s-70s: SALT treaties, Helsinki.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ended by Afghanistan 1979.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Improved relations period"
},
        },
        {
          id: "ciealhis-u1-ar-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define arms race, MAD, Cuban Missile Crisis, SALT, detente, proxy war. (b) What was arms race? (c) What is MAD? (d) What was Cuban Crisis? (e) What was detente? (f) What ended detente? (g) How did nuclear weapons affect Cold War? (h) Evaluate whether nuclear weapons prevented or prolonged Cold War.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Arms race",
                              "statement": "Nuclear competition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Weapons competition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Mutual destruction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1962 confrontation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Improved relations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Afghanistan 1979.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Deterred direct war, fuelled proxy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Arms race and detente."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u1-ar-notes",
      title: "Arms race — notes",
      summary: "Nuclear competition, MAD deterrence, Cuban Crisis, detente period.",
      sections: [
        { heading: "Key idea", body: "Nuclear weapons created stalemate — no direct war but proxy conflicts." },
        { heading: "Detente", body: "Diplomatic efforts reduced tension but didn't end rivalry." },
      ],
    },
  ],
};
