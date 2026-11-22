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
              { id: "a", text: "Soviet secret police" },
              { id: "b", text: "Factory workers" },
              { id: "c", text: "Bolshevik leaders" },
              {
                id: "d",
                text: "Wealthier peasants targeted in collectivisation",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "oleh-u5-sr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Lenin die, beginning the power struggle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1917" },
              { id: "b", text: "1929" },
              { id: "c", text: "1933" },
              { id: "d", text: "1924" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Lenin's death",
                statement: "Lenin died in 1924.",
              },
            ],
            steps: [
              {
                reasoning: "Power struggle followed Lenin's 1924 death.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 1924",
            commonErrors: ["Confusing with the October Revolution year."],
          },
        },
        {
          id: "oleh-u5-sr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Trotsky's rival policy to Stalin's 'socialism in one country'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'War Communism'" },
              { id: "b", text: "'Great Leap Forward'" },
              { id: "c", text: "'New Economic Policy'" },
              { id: "d", text: "'Permanent revolution'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Permanent revolution",
                statement: "Trotsky's alternative to Stalin's policy.",
              },
            ],
            steps: [
              {
                reasoning: "Trotsky favoured spreading revolution abroad.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 'Permanent revolution'",
            commonErrors: ["Choosing NEP — an economic policy."],
          },
        },
        {
          id: "oleh-u5-sr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was Gosplan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of collective farm" },
              { id: "b", text: "A kulak resistance organisation" },
              { id: "c", text: "The Soviet state planning body that set Five-Year Plan targets" },
              { id: "d", text: "The Red Army general staff" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gosplan",
                statement: "State planning commission for targets.",
              },
            ],
            steps: [
              {
                reasoning: "Gosplan planned industrial targets.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The Soviet state planning body that set Five-Year Plan targets",
            commonErrors: ["Confusing with kolkhoz."],
          },
        },
        {
          id: "oleh-u5-sr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who were the Stakhanovites?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bolshevik party officials" },
              { id: "b", text: "Members of the secret police" },
              { id: "c", text: "Record-breaking workers rewarded for exceeding targets" },
              { id: "d", text: "Peasants sent to labour camps" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakhanovites",
                statement: "Workers exceeding production targets.",
              },
            ],
            steps: [
              {
                reasoning: "Named after record worker Stakhanov.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Record-breaking workers rewarded for exceeding targets",
            commonErrors: ["Thinking they were officials."],
          },
        },
        {
          id: "oleh-u5-sr-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What did the Five-Year Plans neglect in favour of heavy industry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electricity generation" },
              { id: "b", text: "Steel production" },
              { id: "c", text: "Consumer goods for ordinary people" },
              { id: "d", text: "Coal mining" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Plan costs",
                statement: "Consumer goods neglected for heavy industry.",
              },
            ],
            steps: [
              {
                reasoning: "Priority was steel/coal/power not goods.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Consumer goods for ordinary people",
            commonErrors: ["Thinking all sectors grew equally."],
          },
        },
        {
          id: "oleh-u5-sr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the first Five-Year Plan begin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1928 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Five-Year Plans",
                statement: "Plans began in 1928.",
              },
            ],
            steps: [
              { reasoning: "Industrialisation launched 1928.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1928",
          },
        },
        {
          id: "oleh-u5-sr-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give the year of each phase: (a) collectivisation of agriculture ended; (b) the Second Five-Year Plan ended.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1933 },
              { label: "b", answer: 1937 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Plan dates",
                statement: "Collectivisation 1928–33; Second Plan ended 1937.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Collectivisation ended 1933.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Second Plan ran to 1937.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 1933; (b) 1937",
          },
        },
        {
          id: "oleh-u5-sr-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Approximately how many kulaks were deported or executed during dekulakisation?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1800000, tolerance: 100000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Dekulakisation",
                statement: "About 1.8 million kulaks deported/executed.",
              },
            ],
            steps: [
              {
                reasoning: "Kulak persecution was massive.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "About 1800000",
          },
        },
        {
          id: "oleh-u5-sr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the famine caused by collectivisation peak (the 'Holodomor')?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1932, tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Holodomor",
                statement: "Famine struck Ukraine 1932–33.",
              },
            ],
            steps: [
              {
                reasoning: "Worst famine year was 1932.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1932",
            commonErrors: ["Confusing with the 1921 famine."],
          },
        },
        {
          id: "oleh-u5-sr-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two aims of the Five-Year Plans.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plan aims",
                statement: "Rapid industrialisation+self-sufficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Rapid industrialisation — steel, coal, electricity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Make USSR a self-sufficient military/industrial power.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "To industrialise rapidly and make the USSR economically and militarily self-sufficient.",
            commonErrors: ["Focusing only on consumer goods."],
          },
        },
        {
          id: "oleh-u5-sr-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why collectivisation caused famine in 1928–33.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collectivisation famine",
                statement: "Grain seizure+disruption+kulak resistance.",
              },
            ],
            steps: [
              {
                reasoning: "Grain was requisitioned for cities/industry/export.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Kulak resistance and slaughtered livestock cut output.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Collective farms were inefficient at first.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Grain was seized for export/industry while kulak resistance and livestock slaughter reduced output — famine killed millions including in Ukraine.",
            commonErrors: ["Blaming only natural causes."],
          },
        },
        {
          id: "oleh-u5-sr-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Stalin's economic transformation.",
          parts: [
            { label: "a", prompt: "What was 'socialism in one country'?", marks: 2 },
            { label: "b", prompt: "What happened to the kulaks?", marks: 3 },
            { label: "c", prompt: "What did the Five-Year Plans achieve?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stalin economy",
                statement: "Ideology+dekulakisation+industrial gains.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Stalin's policy: build socialism in USSR alone.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Contrasted with Trotsky's 'permanent revolution'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Wealthy peasants targeted and deported/executed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "About 1.8 million affected by dekulakisation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Resistance contributed to famine.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Rapid growth in steel, coal, electricity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "USSR became a major industrial power.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Consumer goods and living standards neglected.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Weighed judgement on costs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) ideology (b) kulaks (c) industrialisation",
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
              { id: "b", text: "Lenin's death" },
              { id: "c", text: "German invasion" },
              { id: "d", text: "Trotsky's return" },
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
        {
          id: "oleh-u5-pu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who was Sergei Kirov?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A White Army general" },
              { id: "b", text: "A Gulag camp commandant" },
              { id: "c", text: "A senior Soviet official whose murder triggered the Great Purge" },
              { id: "d", text: "The head of the NKVD" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Kirov",
                statement: "Murdered December 1934.",
              },
            ],
            steps: [
              {
                reasoning: "Kirov's assassination launched the purge.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A senior Soviet official whose murder triggered the Great Purge",
            commonErrors: ["Confusing with Trotsky."],
          },
        },
        {
          id: "oleh-u5-pu-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organisation ran the terror during the Great Purge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The NKVD secret police" },
              { id: "b", text: "The Cheka's predecessor only" },
              { id: "c", text: "The Duma" },
              { id: "d", text: "The Red Army" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NKVD",
                statement: "Soviet secret police running the terror.",
              },
            ],
            steps: [
              { reasoning: "NKVD organised purges and camps.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The NKVD secret police",
            commonErrors: ["Confusing with Cheka (earlier police)."],
          },
        },
        {
          id: "oleh-u5-pu-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the 'cult of personality' under Stalin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A workers' movement" },
              { id: "b", text: "A religion worshipping Lenin" },
              { id: "c", text: "Free elections for party posts" },
              { id: "d", text: "Propaganda glorifying Stalin as 'Father of Nations'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cult of personality",
                statement: "Propaganda glorifying Stalin.",
              },
            ],
            steps: [
              {
                reasoning: "Portraits/history rewritten to exalt Stalin.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Propaganda glorifying Stalin as 'Father of Nations'",
            commonErrors: ["Thinking it was a genuine popular movement."],
          },
        },
        {
          id: "oleh-u5-pu-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened to experienced Soviet military officers during the purges?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They were arrested and executed, weakening the army" },
              { id: "b", text: "Nothing — the military was exempt" },
              { id: "c", text: "They were sent to fight in the civil war" },
              { id: "d", text: "They were promoted to command the Red Army" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Military purge",
                statement: "Officers like Tukhachevsky removed.",
              },
            ],
            steps: [
              {
                reasoning: "Purge removed experienced leadership before WWII.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** They were arrested and executed, weakening the army",
            commonErrors: ["Thinking the army was spared."],
          },
        },
        {
          id: "oleh-u5-pu-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In which month and year was Kirov assassinated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "June 1941" },
              { id: "b", text: "March 1917" },
              { id: "c", text: "December 1934" },
              { id: "d", text: "January 1928" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Kirov murder",
                statement: "Assassinated December 1934.",
              },
            ],
            steps: [
              {
                reasoning: "Assassination possibly staged by Stalin.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** December 1934",
            commonErrors: ["Confusing with other dates."],
          },
        },
        {
          id: "oleh-u5-pu-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately how many people were executed during the Great Purge?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 750000, tolerance: 50000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Purge executions",
                statement: "Around 750,000 executed; millions to Gulag.",
              },
            ],
            steps: [
              {
                reasoning: "Mass executions followed show trials.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "About 750000",
          },
        },
        {
          id: "oleh-u5-pu-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Approximately how many people died in the USSR under Stalin overall (famine, purges, war)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20000000, tolerance: 1000000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Stalin's death toll",
                statement: "Around 20 million deaths overall.",
              },
            ],
            steps: [
              {
                reasoning: "Famine, purges and war combined.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "About 20000000",
          },
        },
        {
          id: "oleh-u5-pu-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give the year of each event: (a) Kirov was assassinated; (b) the Great Purge period ended.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1934 },
              { label: "b", answer: 1938 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Purge dates",
                statement: "Purge ran 1934–38.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Kirov killed 1934.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Terror wound down by 1938.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 1934; (b) 1938",
          },
        },
        {
          id: "oleh-u5-pu-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many leading Old Bolsheviks were named in the Moscow show trials?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Show trial defendants",
                statement: "Zinoviev, Kamenev and Bukharin.",
              },
            ],
            steps: [
              {
                reasoning: "Three famous Old Bolsheviks tried.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "oleh-u5-pu-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two features of Stalin's cult of personality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cult of personality",
                statement: "Propaganda+history rewriting+education.",
              },
            ],
            steps: [
              {
                reasoning: "Portraits everywhere; Stalin called 'Father of Nations'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "History rewritten; Lenin's role diminished; education praised Stalin.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Stalin was glorified through portraits and propaganda while history was rewritten to diminish Lenin and exalt Stalin's genius.",
            commonErrors: ["Listing only one feature."],
          },
        },
        {
          id: "oleh-u5-pu-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why purging experienced military officers weakened the USSR before WWII.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Military purge cost",
                statement: "Leadership lost before German invasion.",
              },
            ],
            steps: [
              {
                reasoning: "Stalin feared disloyalty among officers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Experienced commanders (e.g. Tukhachevsky) executed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Officer corps left inexperienced and demoralised.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Removing experienced officers left the Red Army leaderless and inexperienced just before the German invasion of 1941.",
            commonErrors: ["Saying the purge strengthened the military."],
          },
        },
        {
          id: "oleh-u5-pu-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Great Purge and Stalin's image.",
          parts: [
            { label: "a", prompt: "What happened at the show trials?", marks: 3 },
            { label: "b", prompt: "What was the Gulag?", marks: 3 },
            { label: "c", prompt: "How did Stalin's propaganda work?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Purge machinery",
                statement: "Trials+camps+propaganda.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Public staged trials of Old Bolsheviks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Confessions extracted under torture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Defendants executed after spectacle.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "System of forced-labour camps.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Millions sent there; many died.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Used for 'enemies of the people'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Cult of personality — 'Father of Nations'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "History rewritten; Lenin's role diminished.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "NKVD informers made society fearful.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) trials (b) Gulag (c) propaganda",
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
