import type { Lesson } from "../../../types.ts";

export const lesson334: Lesson = {
  id: "cieihis-u1-lesson-1-4",
  code: "1-4",
  title: "The Cold War: End of the Cold War",
  goal: "I CAN explain the causes and consequences of the Cold War's end.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: end of Cold War"],

  vocabulary: [
    { term: "Glasnost", definition: "Soviet policy of openness/transparency." },
    { term: "Perestroika", definition: "Soviet policy of restructuring." },
    {
      term: "Reunification",
      definition: "East and West Germany joining again.",
    },
    { term: "Soviet collapse", definition: "Dissolution of USSR 1991." },
    {
      term: "Fall of Berlin Wall",
      definition: "1989 event symbolising Cold War end.",
    },
    { term: "Eastern bloc", definition: "Soviet-aligned countries." },
  ],
  concepts: [
    {
      id: "cieihis-u1-s4-end",
      title: "End of Cold War",
      skill: "Understand Cold War collapse causes.",
      lesson: {
        sections: [
          {
            heading: "Gorbachev reforms",
            body: "1985: Gorbachev became Soviet leader. Glasnost (openness) and perestroika (restructuring) aimed to reform system but unleashed forces he couldn't control.",
          },
          {
            heading: "Collapse",
            body: "1989: Berlin Wall fell, Eastern European revolutions. 1991: Soviet Union dissolved. Causes: economic stagnation, military burden, nationalism, reform failures.",
          },
        ],
        keyFormulas: [
          { name: "Glasnost", statement: "openness" },
          { name: "Perestroika", statement: "restructuring" },
          { name: "1991", statement: "USSR dissolved" },
        ],
        workedExample: {
          problem: "Why did the Soviet Union collapse in 1991?",
          solution:
            "Economic stagnation + military spending + nationalism + failed reforms → system collapse.",
        },
      },
      questions: [
        {
          id: "cieihis-u1-end-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was glasnost?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A peace treaty",
              },
              {
                id: "b",
                text: "Soviet policy of openness",
              },
              {
                id: "c",
                text: "An economic plan",
              },
              {
                id: "d",
                text: "A military strategy",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glasnost",
                statement: "Openness policy.",
              },
            ],
            steps: [
              {
                reasoning: "Glasnost = Soviet openness/transparency.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Openness policy",
          },
        },
        {
          id: "cieihis-u1-end-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was perestroika?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perestroika",
                statement: "Restructuring policy.",
              },
            ],
            steps: [
              {
                reasoning: "Soviet policy of restructuring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Aimed to reform economic/political system.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Restructuring policy",
          },
        },
        {
          id: "cieihis-u1-end-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did the Cold War end?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cold War end",
                statement: "Collapse causes.",
              },
            ],
            steps: [
              {
                reasoning: "Soviet economic stagnation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Military spending burden.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nationalism + reform failures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Economic + military + nationalism",
          },
        },
        {
          id: "cieihis-u1-end-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define glasnost, perestroika, reunification, Soviet collapse, Berlin Wall, Eastern bloc. (b) What was glasnost? (c) What was perestroika? (d) When did Berlin Wall fall? (e) When did USSR dissolve? (f) What caused Soviet collapse? (g) What was the significance of 1989? (h) Evaluate whether Gorbachev intended to end the Cold War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cold War end",
                statement: "Causes, consequences.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Openness policy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Restructuring policy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) 1989.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) 1991.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Economic stagnation, military burden, nationalism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Symbolised Cold War end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "End of Cold War.",
          },
        },
        {
          id: "cieihis-u1-end-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who became Soviet leader in 1985 and introduced glasnost and perestroika?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Khrushchev",
              },
              {
                id: "b",
                text: "Gorbachev",
              },
              {
                id: "c",
                text: "Yeltsin",
              },
              {
                id: "d",
                text: "Brezhnev",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gorbachev",
                statement: "1985 Soviet leader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mikhail Gorbachev became Soviet leader in 1985 and launched glasnost and perestroika.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Gorbachev",
          },
        },
        {
          id: "cieihis-u1-end-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Soviet Union dissolve?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1991,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "USSR dissolution",
                statement: "1991.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Soviet Union dissolved in 1991 after failed reforms and republican independence movements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1991",
          },
        },
        {
          id: "cieihis-u1-end-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain two consequences of the end of the Cold War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cold War consequences",
                statement: "Post-Cold War world.",
              },
            ],
            steps: [
              {
                reasoning:
                  "End of the bipolar world and US unipolar dominance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rise of nationalism and new regional conflicts in the 1990s.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "End of bipolarity + new conflicts",
          },
        },
        {
          id: "cieihis-u1-end-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which Gorbachev policy aimed to restructure the Soviet economic and political system?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Glasnost",
              },
              {
                id: "b",
                text: "Comecon",
              },
              {
                id: "c",
                text: "Perestroika",
              },
              {
                id: "d",
                text: "Detente",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perestroika",
                statement: "Restructuring policy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Perestroika was Gorbachev's policy of restructuring the Soviet system.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Perestroika",
          },
        },
        {
          id: "cieihis-u1-end-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did Gorbachev become Soviet leader? (b) In which year did the revolutions in Eastern Europe occur?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1985,
              },
              {
                label: "b",
                answer: 1989,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Reform dates",
                statement: "1985-89.",
              },
            ],
            steps: [
              {
                reasoning: "Gorbachev became Soviet leader in 1985.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Eastern European revolutions swept the bloc in 1989.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1985, b) 1989",
          },
        },
        {
          id: "cieihis-u1-end-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following was NOT a cause of the collapse of the Soviet Union?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The burden of military spending",
              },
              {
                id: "b",
                text: "Successful economic reform",
              },
              {
                id: "c",
                text: "Economic stagnation",
              },
              {
                id: "d",
                text: "Rising nationalism in the republics",
              },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collapse causes",
                statement: "Economic and political failure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The USSR collapsed because of stagnation, military burden and nationalism — reforms failed rather than succeeded.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Successful economic reform",
          },
        },
        {
          id: "cieihis-u1-end-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two reasons why Gorbachev's reforms contributed to the collapse of the Soviet Union.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reform backfire",
                statement: "Glasnost and perestroika effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glasnost allowed criticism of the system and exposed its failures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Perestroika destabilised the economy and weakened central control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reforms released forces — nationalism and demands for independence — that Gorbachev could not contain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Glasnost exposed flaws; perestroika weakened control",
          },
        },
        {
          id: "cieihis-u1-end-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains why the Cold War ended between 1989 and 1991?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A direct military victory by the USA over the USSR",
              },
              {
                id: "b",
                text: "A negotiated peace treaty signed by both superpowers",
              },
              {
                id: "c",
                text: "Economic failure and reform policies that unleashed uncontrollable change",
              },
              {
                id: "d",
                text: "The spread of nuclear weapons forcing disarmament",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "End of Cold War",
                statement: "Collapse causes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Cold War ended through Soviet economic failure and Gorbachev's reforms, which released forces leading to collapse — not through direct war or treaty.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Economic failure and reform policies that unleashed uncontrollable change",
          },
        },
        {
          id: "cieihis-u1-end-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year was the Berlin Wall built? (b) In which year did Germany reunify?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1961,
              },
              {
                label: "b",
                answer: 1990,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Berlin Wall dates",
                statement: "1961-1990.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Berlin Wall was built in 1961 to stop East Germans fleeing west.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Germany officially reunified in 1990 after the Wall fell in 1989.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1961, b) 1990",
          },
        },
        {
          id: "cieihis-u1-end-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the view that Gorbachev's reforms were the main cause of the end of the Cold War.",
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
                  "Thesis: glasnost and perestroika released forces — criticism, nationalism, economic disruption — that destroyed the Soviet system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: Wall fell 1989, Eastern bloc collapsed, USSR dissolved 1991 after reforms began.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: deeper causes — economic stagnation, military burden, nationalism — meant the system was already failing; reform was the trigger not the root cause.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing reform as catalyst against long-term structural decline.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reforms were the trigger but structural decline was the deeper cause",
          },
        },
        {
          id: "cieihis-u1-end-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did the fall of the Berlin Wall in 1989 symbolise?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The reunification of Vietnam",
              },
              {
                id: "b",
                text: "The end of the Cold War",
              },
              {
                id: "c",
                text: "The founding of NATO",
              },
              {
                id: "d",
                text: "The start of a nuclear war",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Wall",
                statement: "Cold War end symbol.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The fall of the Berlin Wall symbolised the end of the Cold War and the collapse of communist Eastern Europe.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** The end of the Cold War",
          },
        },
        {
          id: "cieihis-u1-end-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how nationalism contributed to the collapse of the Soviet Union.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nationalism",
                statement: "Republic independence movements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-Russian republics developed national identities and demands for independence under glasnost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Republics such as the Baltics and Ukraine declared independence, breaking central control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Nationalist movements made the continued existence of a single Soviet state impossible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Republic nationalism broke up the Soviet state",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u1-end-notes",
      title: "Cold War end — notes",
      summary:
        "Gorbachev reforms→uncontrolled change→1989 wall falls→1991 USSR dissolves. Causes: economy, military, nationalism.",
      sections: [
        {
          heading: "Key idea",
          body: "Reform attempts unleashed forces that destroyed the Soviet system.",
        },
        {
          heading: "Consequences",
          body: "End of bipolar world, rise of US unipolarity, new conflicts.",
        },
      ],
    },
  ],
};
