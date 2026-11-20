import type { Lesson } from "../../../types.ts";

export const lesson333: Lesson = {
  id: "cieihis-u1-lesson-1-3",
  code: "1-3",
  title: "The Cold War: Arms Race and Detente",
  goal: "I CAN explain the nuclear arms race and periods of detente.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: arms race"],
  
  vocabulary: [
    { term: "Arms race", definition: "Competition between superpowers to build weapons." },
    { term: "Nuclear arsenal", definition: "Stockpile of nuclear weapons." },
    { term: "Mutually Assured Destruction (MAD)", definition: "Doctrine that nuclear war would destroy both sides." },
    { term: "SALT", definition: "Strategic Arms Limitation Talks." },
    { term: "START", definition: "Strategic Arms Reduction Treaty." },
    { term: "Détente", definition: "Period of improved relations." },
  ],
  concepts: [
    {
      id: "cieihis-u1-s3-arms",
      title: "Arms race and detente",
      skill: "Understand nuclear competition and diplomacy.",
      lesson: {
        sections: [
          {
            heading: "Arms race",
            body: "Both superpowers built massive nuclear arsenals. US: hydrogen bomb 1952, ICBMs. USSR: first satellite 1957, ICBMs. MAD doctrine deterred direct war.",
          },
          {
            heading: "Detente",
            body: "1960s-70s: reduced tension through diplomacy. SALT I (1972), SALT II (1979) limited weapons. Helsinki Accords (1975) recognised European borders. But Afghanistan invasion (1979) ended detente.",
          },
        ],
        keyFormulas: [
          { name: "Arms race", statement: "nuclear competition" },
          { name: "MAD", statement: "mutual destruction" },
          { name: "Detente", statement: "improved relations" },
        ],
        workedExample: {
          problem: "Why did MAD prevent direct nuclear war?",
          solution: "Both sides knew nuclear war would destroy both — deterrence through mutual vulnerability.",
        },
      },
      questions: [
        {
          id: "cieihis-u1-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the arms race?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Competition between superpowers to build weapons"
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
          id: "cieihis-u1-ar-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is Mutually Assured Destruction?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MAD",
                              "statement": "Mutual destruction doctrine."
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
          id: "cieihis-u1-ar-q3",
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
                              "reasoning": "1960s-70s: SALT treaties, Helsinki Accords.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ended by Afghanistan invasion 1979.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Improved relations period"
},
        },
        {
          id: "cieihis-u1-ar-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define arms race, nuclear arsenal, MAD, SALT, START, detente. (b) What was the arms race? (c) What is MAD? (d) What was SALT? (e) What was detente? (f) What ended detente? (g) How did nuclear weapons affect Cold War? (h) Evaluate whether nuclear weapons prevented or prolonged the Cold War.",
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
                              "reasoning": "(c) Mutual destruction doctrine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Strategic Arms Limitation Talks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Improved relations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Afghanistan invasion 1979.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Deterred direct war, fuelled proxy wars.",
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
      id: "cieihis-u1-ar-notes",
      title: "Arms race — notes",
      summary: "Arms race=nuclear competition. MAD=deterred direct war. Detente=1960s-70s improved relations.",
      sections: [
        { heading: "Key idea", body: "Nuclear weapons created stalemate — no direct war but proxy conflicts continued." },
        { heading: "Detente", body: "Diplomatic efforts reduced tension but didn't end rivalry." },
      ],
    },
  ],
};
