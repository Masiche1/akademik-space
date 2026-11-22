import type { Lesson } from "../../../types.ts";

export const lesson333: Lesson = {
  id: "cieihis-u1-lesson-1-3",
  code: "1-3",
  title: "The Cold War: Arms Race and Detente",
  goal: "I CAN explain the nuclear arms race and periods of detente.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: arms race"],

  vocabulary: [
    {
      term: "Arms race",
      definition: "Competition between superpowers to build weapons.",
    },
    { term: "Nuclear arsenal", definition: "Stockpile of nuclear weapons." },
    {
      term: "Mutually Assured Destruction (MAD)",
      definition: "Doctrine that nuclear war would destroy both sides.",
    },
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
          solution:
            "Both sides knew nuclear war would destroy both — deterrence through mutual vulnerability.",
        },
      },
      questions: [
        {
          id: "cieihis-u1-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the arms race?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A trade agreement",
              },
              {
                id: "b",
                text: "Competition between superpowers to build weapons",
              },
              {
                id: "c",
                text: "A peace treaty",
              },
              {
                id: "d",
                text: "A type of war",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Arms race",
                statement: "Weapons competition.",
              },
            ],
            steps: [
              {
                reasoning: "Arms race = superpower weapons competition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Weapons competition",
          },
        },
        {
          id: "cieihis-u1-ar-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is Mutually Assured Destruction?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MAD",
                statement: "Mutual destruction doctrine.",
              },
            ],
            steps: [
              {
                reasoning: "Nuclear war would destroy both sides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deterred direct conflict.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Mutual destruction doctrine",
          },
        },
        {
          id: "cieihis-u1-ar-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was detente?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Detente",
                statement: "Reduced tension.",
              },
            ],
            steps: [
              {
                reasoning: "Period of improved US-Soviet relations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1960s-70s: SALT treaties, Helsinki Accords.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ended by Afghanistan invasion 1979.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Improved relations period",
          },
        },
        {
          id: "cieihis-u1-ar-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define arms race, nuclear arsenal, MAD, SALT, START, detente. (b) What was the arms race? (c) What is MAD? (d) What was SALT? (e) What was detente? (f) What ended detente? (g) How did nuclear weapons affect Cold War? (h) Evaluate whether nuclear weapons prevented or prolonged the Cold War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Arms race",
                statement: "Nuclear competition.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Weapons competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Mutual destruction doctrine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Strategic Arms Limitation Talks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Improved relations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Afghanistan invasion 1979.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Deterred direct war, fuelled proxy wars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Arms race and detente.",
          },
        },
        {
          id: "cieihis-u1-ar-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was SALT?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Strategic Arms Limitation Talks",
              },
              {
                id: "b",
                text: "A type of nuclear weapon",
              },
              {
                id: "c",
                text: "A Soviet space programme",
              },
              {
                id: "d",
                text: "A peace treaty ending WWII",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SALT",
                statement: "Strategic Arms Limitation Talks.",
              },
            ],
            steps: [
              {
                reasoning: "SALT = talks to limit strategic nuclear weapons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Strategic Arms Limitation Talks",
          },
        },
        {
          id: "cieihis-u1-ar-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) In which year did the USSR launch Sputnik, the first artificial satellite? (b) In which year did the USA test its first hydrogen bomb?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1957,
              },
              {
                label: "b",
                answer: 1952,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Technology race",
                statement: "1952, 1957.",
              },
            ],
            steps: [
              {
                reasoning: "The USSR launched Sputnik 1 in 1957.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The USA tested its first hydrogen bomb in 1952.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1957, b) 1952",
          },
        },
        {
          id: "cieihis-u1-ar-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was SALT?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SALT",
                statement: "Strategic Arms Limitation Talks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "US-Soviet negotiations to limit strategic nuclear arsenals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Produced SALT I (1972) and SALT II (1979) treaties.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "US-Soviet talks to limit nuclear weapons",
          },
        },
        {
          id: "cieihis-u1-ar-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What event ended the period of detente?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The Cuban Missile Crisis",
              },
              {
                id: "b",
                text: "The Soviet invasion of Afghanistan in 1979",
              },
              {
                id: "c",
                text: "The signing of SALT I",
              },
              {
                id: "d",
                text: "The fall of the Berlin Wall",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "End of detente",
                statement: "Afghanistan 1979.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Soviet invasion of Afghanistan in 1979 caused the USA to abandon detente.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** The Soviet invasion of Afghanistan in 1979",
          },
        },
        {
          id: "cieihis-u1-ar-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year was SALT I signed? (b) In which year was SALT II signed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1972,
              },
              {
                label: "b",
                answer: 1979,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "SALT treaties",
                statement: "1972, 1979.",
              },
            ],
            steps: [
              {
                reasoning: "SALT I was signed in 1972.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "SALT II was signed in 1979 but never ratified by the US Senate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1972, b) 1979",
          },
        },
        {
          id: "cieihis-u1-ar-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the main purpose of the Helsinki Accords (1975)?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To create a unified German state",
              },
              {
                id: "b",
                text: "To ban all nuclear weapons",
              },
              {
                id: "c",
                text: "To recognise existing European borders and commit to human rights",
              },
              {
                id: "d",
                text: "To end the Vietnam War",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Helsinki Accords",
                statement: "1975 border recognition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Helsinki Accords recognised post-war European borders and included human rights commitments.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** To recognise existing European borders and commit to human rights",
          },
        },
        {
          id: "cieihis-u1-ar-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Mutually Assured Destruction acted as a deterrent.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "MAD deterrence",
                statement: "Mutual vulnerability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both superpowers possessed enough nuclear weapons to destroy the other completely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Any nuclear attack would be met with a devastating retaliatory strike.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The certainty of mutual annihilation made direct nuclear war irrational, deterring attack.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fear of mutual annihilation deterred nuclear war",
          },
        },
        {
          id: "cieihis-u1-ar-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which country tested its first atomic bomb in 1949?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "USSR",
              },
              {
                id: "b",
                text: "USA",
              },
              {
                id: "c",
                text: "Britain",
              },
              {
                id: "d",
                text: "Germany",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Nuclear programme",
                statement: "USSR first test 1949.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The USSR tested its first atomic bomb in 1949, ending the US monopoly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** USSR",
          },
        },
        {
          id: "cieihis-u1-ar-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did the USSR test its first atomic bomb? (b) In which year was SALT I signed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1949,
              },
              {
                label: "b",
                answer: 1972,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Arms control dates",
                statement: "1949, 1972.",
              },
            ],
            steps: [
              {
                reasoning: "The USSR's first atomic test was in 1949.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "SALT I was signed in 1972.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1949, b) 1972",
          },
        },
        {
          id: "cieihis-u1-ar-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether arms control treaties reduced the threat of nuclear war.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Assessment",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SALT I and II limited the growth of nuclear arsenals and set verification rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The Partial Test Ban Treaty (1963) and Non-Proliferation Treaty (1968) also reduced danger.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "However, both sides modernised weapons (ICBMs, MIRVs) and verification was imperfect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement: treaties slowed but did not end the nuclear arms race.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Arms control reduced but did not eliminate the nuclear threat",
          },
        },
        {
          id: "cieihis-u1-ar-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did both superpowers continue the arms race even during detente?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because each feared falling behind militarily if it disarmed unilaterally",
              },
              {
                id: "b",
                text: "Because they trusted each other completely",
              },
              {
                id: "c",
                text: "Because nuclear weapons were cheap to produce",
              },
              {
                id: "d",
                text: "Because the UN required it",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Arms race logic",
                statement: "Security dilemma.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mutual distrust meant each side feared the other would gain an advantage if it disarmed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Because each feared falling behind militarily if it disarmed unilaterally",
          },
        },
        {
          id: "cieihis-u1-ar-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the significance of the Helsinki Accords (1975).",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Helsinki Accords",
                statement: "1975 agreement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Western states formally recognised the post-war borders of Eastern Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Signatories committed to human rights and fundamental freedoms, which later undermined communist regimes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It symbolised detente but also gave dissidents a weapon against Soviet control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Recognised borders but human rights clauses weakened communist legitimacy",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u1-ar-notes",
      title: "Arms race — notes",
      summary:
        "Arms race=nuclear competition. MAD=deterred direct war. Detente=1960s-70s improved relations.",
      sections: [
        {
          heading: "Key idea",
          body: "Nuclear weapons created stalemate — no direct war but proxy conflicts continued.",
        },
        {
          heading: "Detente",
          body: "Diplomatic efforts reduced tension but didn't end rivalry.",
        },
      ],
    },
  ],
};
