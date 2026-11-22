import type { Lesson } from "../../../types.ts";

export const lesson331: Lesson = {
  id: "cieihis-u1-lesson-1-1",
  code: "1-1",
  title: "The Cold War: Origins and Superpower Rivalry",
  goal: "I CAN explain the causes and nature of the Cold War.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: The Cold War"],

  vocabulary: [
    {
      term: "Cold War",
      definition:
        "Ideological/political rivalry between USA and USSR without direct war.",
    },
    {
      term: "Capitalism",
      definition:
        "Economic system based on private ownership and free markets.",
    },
    {
      term: "Communism",
      definition:
        "Economic system based on state ownership and classless society.",
    },
    {
      term: "Containment",
      definition: "US policy to prevent spread of communism.",
    },
    {
      term: "Iron Curtain",
      definition: "Divide between Western and Eastern Europe.",
    },
    {
      term: "Truman Doctrine",
      definition: "US policy to support free peoples against communism.",
    },
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
          solution:
            "Ideological differences + post-war power vacuum + competing visions for Europe → mistrust and rivalry.",
        },
      },
      questions: [
        {
          id: "cieihis-u1-cw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Cold War?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A trade agreement",
              },
              {
                id: "b",
                text: "Ideological rivalry between USA and USSR without direct war",
              },
              {
                id: "c",
                text: "A peace treaty",
              },
              {
                id: "d",
                text: "A nuclear war",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cold War",
                statement: "USA-USSR rivalry.",
              },
            ],
            steps: [
              {
                reasoning: "Cold War = ideological rivalry without direct war.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "USA-USSR rivalry",
          },
        },
        {
          id: "cieihis-u1-cw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is containment?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Containment",
                statement: "Prevent communism spread.",
              },
            ],
            steps: [
              {
                reasoning: "US policy to prevent spread of communism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Truman Doctrine and Marshall Plan implemented this.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Prevent communism spread",
          },
        },
        {
          id: "cieihis-u1-cw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What were the ideological differences between USA and USSR?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ideological divide",
                statement: "Capitalism vs communism.",
              },
            ],
            steps: [
              {
                reasoning: "USA: capitalism, democracy, individual freedom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "USSR: communism, one-party state, collective ownership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fundamental incompatibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Capitalism vs communism",
          },
        },
        {
          id: "cieihis-u1-cw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Cold War, capitalism, communism, containment, Iron Curtain, Truman Doctrine. (b) What was the Cold War? (c) What is containment? (d) What were ideological differences? (e) What was the Iron Curtain? (f) What was the Truman Doctrine? (g) What was the Marshall Plan? (h) Explain why the Cold War began after WWII.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cold War",
                statement: "Origins, ideology.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) USA-USSR rivalry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Prevent communism spread.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Capitalism vs communism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Europe divide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Support free peoples policy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) US economic aid to Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Ideological differences + power vacuum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cold War origins and ideology.",
          },
        },
        {
          id: "cieihis-u1-cw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Iron Curtain?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The divide between Western and Eastern Europe",
              },
              {
                id: "b",
                text: "A US economic recovery plan",
              },
              {
                id: "c",
                text: "A Soviet space programme",
              },
              {
                id: "d",
                text: "A physical wall built across Europe",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iron Curtain",
                statement: "Europe divide.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Iron Curtain = ideological divide between Western and Eastern Europe.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** The divide between Western and Eastern Europe",
          },
        },
        {
          id: "cieihis-u1-cw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Second World War end, after which Cold War rivalry intensified?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1945,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "WWII end",
                statement: "1945.",
              },
            ],
            steps: [
              {
                reasoning:
                  "WWII ended in 1945, creating the post-war power vacuum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1945",
          },
        },
        {
          id: "cieihis-u1-cw-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Marshall Plan?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marshall Plan",
                statement: "US economic aid to Europe.",
              },
            ],
            steps: [
              {
                reasoning:
                  "US programme of economic aid to rebuild Western Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Aimed to strengthen capitalist economies and contain communism.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "US economic aid to rebuild Western Europe",
          },
        },
        {
          id: "cieihis-u1-cw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which superpower led the communist bloc in Eastern Europe after the Second World War?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "France",
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
                text: "USSR",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Soviet bloc",
                statement: "USSR dominance in Eastern Europe.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The USSR dominated Eastern Europe through communist satellite states.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** USSR",
          },
        },
        {
          id: "cieihis-u1-cw-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year was the Truman Doctrine announced? (b) In which year did the Marshall Plan begin?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1947,
              },
              {
                label: "b",
                answer: 1948,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Containment dates",
                statement: "1947-48.",
              },
            ],
            steps: [
              {
                reasoning: "Truman Doctrine announced in 1947.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Marshall Plan launched in 1948.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1947, b) 1948",
          },
        },
        {
          id: "cieihis-u1-cw-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which continent was divided by the Iron Curtain?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Europe",
              },
              {
                id: "b",
                text: "North America",
              },
              {
                id: "c",
                text: "Asia",
              },
              {
                id: "d",
                text: "Africa",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iron Curtain",
                statement: "Europe divide.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Iron Curtain divided Europe into Western and Eastern blocs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Europe",
          },
        },
        {
          id: "cieihis-u1-cw-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two reasons why the USA and USSR distrusted each other after the Second World War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cold War causes",
                statement: "Mistrust and rivalry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ideological incompatibility: capitalism versus communism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Post-war power vacuum: competing visions for the future of Europe and Germany.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each side feared the other's expansion, producing a self-reinforcing cycle of suspicion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ideology + competing visions for Europe",
          },
        },
        {
          id: "cieihis-u1-cw-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best describes the fundamental difference between capitalism and communism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Capitalism requires a one-party state",
              },
              {
                id: "b",
                text: "Both systems allow private ownership of the means of production",
              },
              {
                id: "c",
                text: "Capitalism relies on private ownership and free markets; communism relies on state ownership and collective control",
              },
              {
                id: "d",
                text: "Communism allows free multi-party elections",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capitalism vs communism",
                statement: "Private vs state ownership.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Capitalism = private ownership/free markets; communism = state ownership/collective control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** Capitalism relies on private ownership and free markets; communism relies on state ownership and collective control",
          },
        },
        {
          id: "cieihis-u1-cw-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year was NATO founded? (b) In which year was the Warsaw Pact formed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1949,
              },
              {
                label: "b",
                answer: 1955,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Military alliances",
                statement: "NATO 1949, Warsaw Pact 1955.",
              },
            ],
            steps: [
              {
                reasoning: "NATO was founded in 1949 by Western states.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The Warsaw Pact was formed in 1955 by the Soviet bloc.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1949, b) 1955",
          },
        },
        {
          id: "cieihis-u1-cw-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the view that ideological differences were the main cause of the Cold War.",
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
                  "Thesis: ideological divide between capitalism and communism created fundamental mistrust.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: incompatible systems, propaganda, rival blocs in Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: post-war power vacuum, Germany's division and other factors also drove rivalry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing ideology against structural causes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ideology was a major but not sole cause of the Cold War",
          },
        },
        {
          id: "cieihis-u1-cw-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Truman Doctrine?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A Soviet military defence alliance",
              },
              {
                id: "b",
                text: "A United Nations peacekeeping force",
              },
              {
                id: "c",
                text: "A US commitment to support free peoples against communism",
              },
              {
                id: "d",
                text: "A US programme of economic aid to Europe",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Truman Doctrine",
                statement: "Support free peoples policy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Truman Doctrine = US policy of supporting free peoples against communist aggression.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** A US commitment to support free peoples against communism",
          },
        },
        {
          id: "cieihis-u1-cw-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the division of Germany contributed to Cold War tensions.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Germany division",
                statement: "Cold War flashpoint.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Germany was divided into eastern and western occupation zones after 1945.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Separate East and West German states and the divided city of Berlin became focal points of rivalry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each side saw the other's Germany policy as expansionist, deepening confrontation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Divided Germany became the main Cold War flashpoint in Europe",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u1-cw-notes",
      title: "Cold War origins — notes",
      summary:
        "Cold War=USA vs USSR ideological rivalry. Capitalism vs communism. Containment policy.",
      sections: [
        {
          heading: "Key idea",
          body: "Fundamental ideological differences created decades of rivalry.",
        },
        {
          heading: "Iron Curtain",
          body: "Divided Europe into Western (US influence) and Eastern (Soviet) blocs.",
        },
      ],
    },
  ],
};
