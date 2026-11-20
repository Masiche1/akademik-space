import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "oleh-u5-lesson-5-3",
  code: "5-3",
  title: "Stalin's USSR",
  goal: "I CAN describe Stalin's rise, the Five-Year Plans, purges and evaluate his rule.",
  standards: ["2130/2147: Depth study — Russia 1905–41"],
  vocabulary: [
    { term: "Stalin", definition: "Soviet leader 1924–1953 — 'man of steel'." },
    {
      term: "Five-Year Plans",
      definition: "Soviet industrialisation programmes starting 1928.",
    },
    {
      term: "Collectivisation",
      definition: "Forcing peasants into collective farms.",
    },
    {
      term: "Kulaks",
      definition: "Wealthier peasants targeted during collectivisation.",
    },
    {
      term: "Great Purge",
      definition: "1930s terror campaign against 'enemies of the people'.",
    },
    { term: "Gulag", definition: "Soviet forced-labour camp system." },
  ],
  concepts: [
    {
      id: "oleh-u5-stalin-rise",
      title: "Stalin's Rise to Power",
      skill: "Explain how Stalin defeated rivals and consolidated power.",
      lesson: {
        sections: [
          {
            heading: "Power struggle",
            body: "Lenin died 1924. Stalin outmanoeuvred Trotsky (exiled 1929) and rivals (Zinoviev, Kamenev) using party organisation — General Secretary controlled appointments. 'Socialism in one country' vs Trotsky's 'permanent revolution' — Stalin's policy won support.",
          },
          {
            heading: "Collectivisation",
            body: "1928–33: peasants forced into collective farms (kolkhozes). Kulaks (wealthy peasants) resisted — dekulakisation: ~1.8 million deported/executed. Grain requisitioned for cities/industry/export. Livestock slaughtered — 1928–33 famine killed ~5 million (Ukraine 'Holodomor').",
          },
          {
            heading: "Industrialisation",
            body: "Five-Year Plans from 1928 — rapid industrialisation: steel, coal, electricity, heavy industry. Gosplan set targets; Stakhanovite movement rewarded record workers. Second Plan 1933–37 continued. USSR became industrial power but consumer goods neglected.",
          },
        ],
        keyFormulas: [
          {
            name: "Stalin rise",
            statement:
              "Outmanoeuvred Trotsky→collectivisation (famine)→Five-Year Plans industrialisation.",
          },
        ],
        workedExample: {
          problem: "How did Stalin defeat Trotsky?",
          solution:
            "Controlled party appointments as General Secretary, promoted 'socialism in one country' over Trotsky's 'permanent revolution', built alliances — Trotsky exiled 1929.",
        },
      },
      questions: [
        {
          id: "oleh-u5-sr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who were the kulaks?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Wealthier peasants targeted in collectivisation",
              },
              { id: "b", text: "Soviet secret police" },
              { id: "c", text: "Factory workers" },
              { id: "d", text: "Bolshevik leaders" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kulaks",
                statement: "Wealthy peasants persecuted.",
              },
            ],
            steps: [
              { reasoning: "Wealthy peasants.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "**(a)** Wealthier peasants targeted in collectivisation",
            commonErrors: ["Confusing with workers."],
          },
        },
        {
          id: "oleh-u5-sr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was collectivisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collectivisation",
                statement: "Forcing peasants into collective farms.",
              },
            ],
            steps: [
              {
                reasoning: "Peasants forced into kolkhozes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Grain requisitioned for state.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "1928–33 policy forcing peasants into collective farms, grain seized for industrialisation — caused famine.",
            commonErrors: ["Thinking voluntary."],
          },
        },
        {
          id: "oleh-u5-sr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How did Stalin defeat Trotsky?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Power struggle",
                statement: "Party control+ideology+alliances.",
              },
            ],
            steps: [
              {
                reasoning: "Controlled party appointments.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Promoted 'socialism in one country'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Built alliances vs Trotsky.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "As General Secretary controlled appointments; promoted 'socialism in one country' vs Trotsky's 'permanent revolution'; allied with rivals — Trotsky exiled 1929.",
            commonErrors: ["Vague 'Stalin was stronger'."],
          },
        },
        {
          id: "oleh-u5-sr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Stalin's rise and economic policy.",
          parts: [
            { label: "a", prompt: "Power struggle?", marks: 3 },
            { label: "b", prompt: "Collectivisation?", marks: 3 },
            { label: "c", prompt: "Five-Year Plans?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stalin rise",
                statement: "Power+collectivisation+plans+results.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "General Secretary control.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Socialism in one country.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Trotsky exiled.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Peasants forced into farms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Kulaks persecuted.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Famine resulted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Industrialisation targets.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Steel/coal/electricity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Rapid growth.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) power (b) collectivisation (c) plans",
          },
        },
      ],
    },
    {
      id: "oleh-u5-purges",
      title: "The Purges and Terror",
      skill:
        "Describe the Great Purge, show trials and evaluate Stalin's rule.",
      lesson: {
        sections: [
          {
            heading: "Great Purge 1934–38",
            body: "After Kirov's murder (Dec 1934 — possibly staged), Stalin launched terror against 'enemies of the people'. Show trials of Old Bolsheviks (Zinoviev, Kamenev, Bukharin) — confessed under torture, executed. ~750,000 executed, millions sent to Gulag labour camps. Purged military officers weakened USSR before WWII.",
          },
          {
            heading: "Cult of personality",
            body: "Stalin propaganda — portraits everywhere, 'Father of Nations', history rewritten (Lenin's role diminished). Education emphasised Stalin's genius. NKVD secret police ran terror — informers everywhere, neighbours denounced each other.",
          },
          {
            heading: "Evaluation",
            body: "Achieved: rapid industrialisation, defeated Germany WWII, superpower status. Costs: ~20 million deaths (famine, purges, war), terror society, suppressed freedoms, inefficient agriculture. Debate: necessary evil for modernisation vs criminal dictatorship.",
          },
        ],
        keyFormulas: [
          {
            name: "Purges",
            statement:
              "Kirov murder→show trials→mass executions+Gulag; cult of personality; industrial gains vs terror costs.",
          },
        ],
        workedExample: {
          problem: "Why did Stalin purge the military before WWII?",
          solution:
            "Fearing disloyalty, he removed experienced officers (Tukhachevsky etc.) — weakened Soviet military just before German invasion 1941.",
        },
      },
      questions: [
        {
          id: "oleh-u5-pu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What triggered the Great Purge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assassination of Sergei Kirov" },
              { id: "b", text: "German invasion" },
              { id: "c", text: "Trotsky's return" },
              { id: "d", text: "Lenin's death" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Great Purge trigger",
                statement: "Kirov murder Dec 1934.",
              },
            ],
            steps: [
              { reasoning: "Kirov assassination.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Assassination of Sergei Kirov",
            commonErrors: ["Confusing with other events."],
          },
        },
        {
          id: "oleh-u5-pu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What were show trials?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Show trials",
                statement: "Staged trials of 'enemies'.",
              },
            ],
            steps: [
              { reasoning: "Public staged trials.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Confessions under torture; executions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Staged public trials of Old Bolsheviks — forced confessions, propaganda spectacle, then execution.",
            commonErrors: ["Thinking fair trials."],
          },
        },
        {
          id: "oleh-u5-pu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Stalin's rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stalin evaluation",
                statement: "Industrialisation vs terror costs.",
              },
            ],
            steps: [
              {
                reasoning: "Achievement: industrialisation/superpower.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cost: ~20m deaths/terror.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Weighed judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Mixed — achieved rapid industrialisation and superpower status but at cost of millions of deaths and a terror society.",
            commonErrors: ["One-sided judgement."],
          },
        },
        {
          id: "oleh-u5-pu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Purges and Stalin's rule.",
          parts: [
            { label: "a", prompt: "Great Purge causes?", marks: 3 },
            { label: "b", prompt: "Show trials?", marks: 2 },
            { label: "c", prompt: "Gulag/cult?", marks: 2 },
            { label: "d", prompt: "Evaluation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Purges",
                statement: "Causes+trials+camps+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Kirov murder.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "'Enemies of people'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Consolidate power.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Staged public trials.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Forced confessions/executions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Gulag labour camps.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Cult of personality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Gains vs costs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Weighed judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) causes (b) trials (c) camps (d) evaluation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u5-5-3-notes",
      title: "Stalin's USSR — notes",
      summary: "Rise to power, Five-Year Plans, purges, evaluation.",
      sections: [
        {
          heading: "Rise/economy",
          body: "Defeated Trotsky; collectivisation→famine; Five-Year Plans→industrialisation.",
        },
        {
          heading: "Terror",
          body: "Great Purge→show trials→Gulag; cult of personality; gains vs ~20m deaths debate.",
        },
      ],
    },
  ],
};
