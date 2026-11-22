import type { Lesson } from "../../../types.ts";

export const lesson332: Lesson = {
  id: "cieihis-u1-lesson-1-2",
  code: "1-2",
  title: "The Cold War: Crises and Confrontations",
  goal: "I CAN analyse key Cold War crises and their outcomes.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Cold War crises"],

  vocabulary: [
    {
      term: "Berlin Blockade",
      definition: "Soviet blockade of West Berlin 1948-49.",
    },
    { term: "Berlin Airlift", definition: "US/UK air supply to West Berlin." },
    {
      term: "Cuban Missile Crisis",
      definition: "1962 confrontation over Soviet missiles in Cuba.",
    },
    { term: "Nuclear weapons", definition: "Weapons of mass destruction." },
    {
      term: "Proxy war",
      definition: "Conflict between superpowers fought through allies.",
    },
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
          solution:
            "Both sides had nuclear weapons — miscalculation could trigger nuclear war. 13 days brought world closest to apocalypse.",
        },
      },
      questions: [
        {
          id: "cieihis-u1-cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Berlin Blockade?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A peace treaty",
              },
              {
                id: "b",
                text: "Soviet blockade of West Berlin 1948-49",
              },
              {
                id: "c",
                text: "A trade agreement",
              },
              {
                id: "d",
                text: "A nuclear attack",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Blockade",
                statement: "Soviet blockade.",
              },
            ],
            steps: [
              {
                reasoning: "Soviets cut land access to West Berlin.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Soviet blockade of West Berlin",
          },
        },
        {
          id: "cieihis-u1-cr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Cuban Missile Crisis?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cuban Crisis",
                statement: "1962 missile confrontation.",
              },
            ],
            steps: [
              {
                reasoning: "Soviets placed nuclear missiles in Cuba.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "US demanded removal — 13 days crisis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1962 missile confrontation",
          },
        },
        {
          id: "cieihis-u1-cr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was a proxy war? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proxy war",
                statement: "Allied conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Conflict between superpowers through allies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: Vietnam War, Korean War.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Avoided direct superpower conflict.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Allied conflict example",
          },
        },
        {
          id: "cieihis-u1-cr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Berlin Blockade, Berlin Airlift, Cuban Missile Crisis, nuclear weapons, proxy war, detente. (b) What was the Berlin Blockade? (c) What was the Cuban Missile Crisis? (d) Why was it dangerous? (e) What was a proxy war? Give example. (f) What was detente? (g) How was Cuban Crisis resolved? (h) Evaluate whether the Cold War was truly 'cold'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cold War crises",
                statement: "Analysis, outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Soviet blockade 1948-49.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 1962 missile confrontation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Nuclear war risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Allied conflict; Vietnam/Korea.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Reduced tension period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Missiles removed, secret deal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation — proxy wars were hot.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cold War crises and confrontations.",
          },
        },
        {
          id: "cieihis-u1-cr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How long did the Cuban Missile Crisis last?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "13 years",
              },
              {
                id: "b",
                text: "13 days",
              },
              {
                id: "c",
                text: "13 months",
              },
              {
                id: "d",
                text: "13 weeks",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cuban Missile Crisis",
                statement: "13 days.",
              },
            ],
            steps: [
              {
                reasoning: "The crisis lasted 13 days in October 1962.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** 13 days",
          },
        },
        {
          id: "cieihis-u1-cr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) In which year was the Berlin Wall built? (b) In which year did the Cuban Missile Crisis occur?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1961,
              },
              {
                label: "b",
                answer: 1962,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cold War crisis dates",
                statement: "1961-62.",
              },
            ],
            steps: [
              {
                reasoning: "The Berlin Wall was built in 1961.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The Cuban Missile Crisis occurred in 1962.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1961, b) 1962",
          },
        },
        {
          id: "cieihis-u1-cr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Berlin Airlift?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Airlift",
                statement: "Air supply to West Berlin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Western powers supplied West Berlin by air after the Soviet land blockade of 1948.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It kept West Berlin alive without provoking direct war.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "US/UK air supply to West Berlin during the blockade",
          },
        },
        {
          id: "cieihis-u1-cr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which superpower secretly placed nuclear missiles in Cuba in 1962?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "France",
              },
              {
                id: "b",
                text: "USSR",
              },
              {
                id: "c",
                text: "China",
              },
              {
                id: "d",
                text: "USA",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cuban Missile Crisis",
                statement: "Soviet missiles in Cuba.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The USSR placed nuclear missiles in Cuba, provoking the crisis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** USSR",
          },
        },
        {
          id: "cieihis-u1-cr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did the Korean War begin? (b) In which year did it end with an armistice?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1950,
              },
              {
                label: "b",
                answer: 1953,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Korean War",
                statement: "1950-53.",
              },
            ],
            steps: [
              {
                reasoning: "The Korean War began in 1950.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "An armistice ended the fighting in 1953.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1950, b) 1953",
          },
        },
        {
          id: "cieihis-u1-cr-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following was NOT a proxy conflict between the superpowers?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cuban Missile Crisis",
              },
              {
                id: "b",
                text: "Korean War",
              },
              {
                id: "c",
                text: "Vietnam War",
              },
              {
                id: "d",
                text: "Afghanistan War (1979-89)",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proxy war",
                statement: "Allied conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Cuban Missile Crisis was a direct confrontation, not a proxy war fought through allies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Cuban Missile Crisis",
          },
        },
        {
          id: "cieihis-u1-cr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Cuban Missile Crisis was resolved.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cuban crisis resolution",
                statement: "Secret deal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The USSR agreed to remove its nuclear missiles from Cuba.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The USA secretly agreed to remove its missiles from Turkey.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A US naval blockade/quarantine and back-channel diplomacy avoided nuclear war.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Missiles removed from Cuba in exchange for US missiles leaving Turkey",
          },
        },
        {
          id: "cieihis-u1-cr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What ended the Berlin Blockade in 1949?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The fall of the Berlin Wall",
              },
              {
                id: "b",
                text: "A nuclear strike on Berlin",
              },
              {
                id: "c",
                text: "The success of the airlift and Soviet lifting of the blockade",
              },
              {
                id: "d",
                text: "The reunification of Germany",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Berlin Blockade",
                statement: "1948-49 airlift.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The airlift sustained West Berlin until the Soviets lifted the blockade in May 1949.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** The success of the airlift and Soviet lifting of the blockade",
          },
        },
        {
          id: "cieihis-u1-cr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did the Vietnam War end? (b) In which year did the Soviet Union invade Afghanistan?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1975,
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
                name: "Proxy war dates",
                statement: "1975, 1979.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Vietnam War ended in 1975 with the fall of Saigon.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The USSR invaded Afghanistan in 1979, ending detente.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1975, b) 1979",
          },
        },
        {
          id: "cieihis-u1-cr-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether the Cuban Missile Crisis made a nuclear war more or less likely.",
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
                  "It brought the superpowers closer to nuclear war than any other event.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "However, it demonstrated the danger of brinkmanship and led to the Moscow-Washington hotline and arms control talks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both sides learned to communicate directly and avoid miscalculation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement: risk was high but resolution reduced long-term danger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High short-term risk but produced mechanisms that reduced nuclear danger",
          },
        },
        {
          id: "cieihis-u1-cr-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'detente' describe?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The division of Germany",
              },
              {
                id: "b",
                text: "A period of direct war between the superpowers",
              },
              {
                id: "c",
                text: "A period of reduced Cold War tension",
              },
              {
                id: "d",
                text: "A nuclear weapons treaty",
              },
            ],
            correctChoiceId: "c",
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
                reasoning:
                  "Detente was a period of improved relations and reduced tension between the superpowers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** A period of reduced Cold War tension",
          },
        },
        {
          id: "cieihis-u1-cr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the superpowers preferred proxy wars to direct conflict.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proxy wars",
                statement: "Indirect conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nuclear weapons made direct war between the superpowers suicidal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Proxy wars allowed each side to contest influence through allies without direct confrontation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They kept the Cold War 'cold' while still expanding spheres of influence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Nuclear deterrence made direct war too risky",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u1-cr-notes",
      title: "Cold War crises — notes",
      summary:
        "Berlin Blockade/Airlift, Cuban Missile Crisis, proxy wars (Korea, Vietnam, Afghanistan).",
      sections: [
        {
          heading: "Key idea",
          body: "Crises brought superpowers close to direct/nuclear conflict.",
        },
        {
          heading: "Proxy wars",
          body: "Superpowers fought indirectly through allies — Korea, Vietnam, Afghanistan.",
        },
      ],
    },
  ],
};
