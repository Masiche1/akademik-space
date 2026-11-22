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
                              "text": "A trade agreement"
                    },
                    {
                              "id": "c",
                              "text": "A peace treaty"
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
        {
          id: "ciealhis-u1-ar-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did SALT stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Superpower Arms Limitation Treaty" },
              { id: "b", text: "Soviet-American Leadership Treaty" },
              { id: "c", text: "Strategic Arms Limitation Talks" },
              { id: "d", text: "Security and Arms Limitation Talks" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SALT", statement: "Strategic Arms Limitation Talks." }
            ],
            steps: [
              { reasoning: "SALT was the superpower arms-control negotiation.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** Strategic Arms Limitation Talks"
          }
        },
        {
          id: "ciealhis-u1-ar-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Cuban Missile Crisis occur?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1962 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cuban Missile Crisis", statement: "1962 confrontation." }
            ],
            steps: [
              { reasoning: "The crisis took place in October 1962.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1962"
          }
        },
        {
          id: "ciealhis-u1-ar-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why did the United States impose a naval blockade during the Cuban Missile Crisis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To prevent Soviet missiles reaching Cuba" },
              { id: "b", text: "To force an immediate invasion of Cuba" },
              { id: "c", text: "To remove all American missiles from Turkey" },
              { id: "d", text: "To blockade Soviet trade with Europe" }
            ],
            correctChoiceId: "a"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cuban Missile Crisis", statement: "US containment response." }
            ],
            steps: [
              { reasoning: "The quarantine aimed to stop further missile deliveries.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** To prevent Soviet missiles reaching Cuba"
          }
        },
        {
          id: "ciealhis-u1-ar-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Helsinki Accords signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1975 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Helsinki Accords", statement: "1975 agreement." }
            ],
            steps: [
              { reasoning: "The Helsinki Accords were signed in 1975.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1975"
          }
        },
        {
          id: "ciealhis-u1-ar-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how MAD helped to stabilise the Cold War while still creating danger.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "MAD", statement: "Mutual destruction deters direct attack." }
            ],
            steps: [
              { reasoning: "Both superpowers knew nuclear war would destroy them, so direct conflict was deterred.", marks: 1, markCode: "M" },
              { reasoning: "The same balance made limited crises and proxy wars dangerous because escalation remained possible.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "MAD deterred direct war but increased crisis risk"
          }
        },
        {
          id: "ciealhis-u1-ar-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which event most clearly brought detente to an end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Korean War armistice in 1953" },
              { id: "b", text: "The fall of the Berlin Wall in 1989" },
              { id: "c", text: "The Soviet invasion of Afghanistan in 1979" },
              { id: "d", text: "The signing of SALT I in 1972" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "End of detente", statement: "Afghanistan 1979." }
            ],
            steps: [
              { reasoning: "The 1979 invasion revived US-Soviet hostility and sanctions.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** The Soviet invasion of Afghanistan in 1979"
          }
        },
        {
          id: "ciealhis-u1-ar-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many days did the Cuban Missile Crisis last?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 13 }]
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cuban Missile Crisis", statement: "13 days." }
            ],
            steps: [
              { reasoning: "The confrontation lasted thirteen days.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "13"
          }
        },
        {
          id: "ciealhis-u1-ar-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the methods and outcomes of the SALT negotiations with the Cuban Missile Crisis.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Crisis versus negotiation", statement: "Confrontation and diplomacy." }
            ],
            steps: [
              { reasoning: "The missile crisis used coercive bargaining and nearly caused nuclear war.", marks: 1, markCode: "M" },
              { reasoning: "SALT used formal negotiation to limit weapons and reduce risk.", marks: 1, markCode: "M" },
              { reasoning: "Both showed that communication and compromise could manage rivalry.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Crisis raised risk; SALT reduced it"
          }
        },
        {
          id: "ciealhis-u1-ar-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best explains why detente did not end the Cold War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It abolished all nuclear weapons immediately" },
              { id: "b", text: "It ended proxy wars in every region" },
              { id: "c", text: "It managed rivalry without removing ideological or geopolitical competition" },
              { id: "d", text: "It created a permanent military alliance between the superpowers" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of detente", statement: "Managed, not resolved." }
            ],
            steps: [
              { reasoning: "Detente reduced tension but did not remove the rivalry.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** It managed rivalry without removing ideological or geopolitical competition"
          }
        },
        {
          id: "ciealhis-u1-ar-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define a proxy war and give one Cold War example.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proxy war", statement: "Conflict through allies." }
            ],
            steps: [
              { reasoning: "Superpowers support rival states or movements instead of fighting directly.", marks: 1, markCode: "M" },
              { reasoning: "Acceptable examples include Korea, Vietnam or Afghanistan.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Indirect superpower conflict, for example Vietnam"
          }
        },
        {
          id: "ciealhis-u1-ar-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which judgement is most defensible about the arms race?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It had no effect on Cold War strategy" },
              { id: "b", text: "It ended once the Soviet Union tested one weapon" },
              { id: "c", text: "It made direct nuclear war inevitable" },
              { id: "d", text: "It prevented direct superpower war but intensified insecurity and proxy conflict" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Arms race judgement", statement: "Deterrence with insecurity." }
            ],
            steps: [
              { reasoning: "Arsenal growth deterred direct attack but made limited conflict riskier.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** It prevented direct superpower war but intensified insecurity and proxy conflict"
          }
        },
        {
          id: "ciealhis-u1-ar-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate whether nuclear weapons prevented or prolonged the Cold War.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Balanced judgement." }
            ],
            steps: [
              { reasoning: "Nuclear deterrence helped prevent direct US-Soviet war.", marks: 1, markCode: "M" },
              { reasoning: "Arsenal competition and brinkmanship prolonged tension and encouraged proxy conflicts.", marks: 1, markCode: "M" },
              { reasoning: "A balanced judgement recognises deterrence and risk.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Both prevented direct war and prolonged rivalry"
          }
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
