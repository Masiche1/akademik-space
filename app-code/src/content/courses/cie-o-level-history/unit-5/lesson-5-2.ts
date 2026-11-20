import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "oleh-u5-lesson-5-2",
  code: "5-2",
  title: "The 1917 Revolutions and Civil War",
  goal: "I CAN explain the February and October revolutions and the Russian Civil War.",
  standards: ["2130/2147: Depth study — Russia 1905–41"],
  vocabulary: [
    {
      term: "February Revolution",
      definition: "1917 uprising overthrowing Tsar Nicholas II.",
    },
    {
      term: "Provisional Government",
      definition: "Temporary government after Tsar fell.",
    },
    {
      term: "Soviets",
      definition:
        "Workers' and soldiers' councils competing with Provisional Government.",
    },
    { term: "October Revolution", definition: "Bolshevik coup November 1917." },
    {
      term: "War Communism",
      definition: "Bolshevik policy seizing grain and nationalising industry.",
    },
    {
      term: "Red Army vs White Army",
      definition: "Bolshevik forces vs anti-Bolshevik coalition.",
    },
  ],
  concepts: [
    {
      id: "oleh-u5-1917",
      title: "1917: Two Revolutions",
      skill: "Explain the February and October revolutions.",
      lesson: {
        sections: [
          {
            heading: "February Revolution",
            body: "March 1917 (Feb Russian calendar): food riots in Petrograd, soldiers mutinied, workers struck. Tsar abdicated 15 March — Provisional Government formed (liberals/Mensheviks) alongside Soviets. Dual power — Provisional Government lacked control, Soviets had real support.",
          },
          {
            heading: "October Revolution",
            body: "Bolsheviks (Lenin) exploited Provisional Government's problems — continuing war (Kerensky offensive failed), economic collapse, land not distributed to peasants. 'Peace, Land, Bread' slogan. Coup 6–7 November 1917 — Winter Palace seized, Provisional Government overthrown. Sovnarkom (Council of People's Commissars) took power.",
          },
          {
            heading: "Bolshevik consolidation",
            body: "Decrees: peace (Brest-Litovsk March 1918 — Russia lost territory), land to peasants, workers' control. Cheka secret police. Constituent Assembly dissolved January 1918 — one-party state began. 'Dictatorship of the proletariat'.",
          },
        ],
        keyFormulas: [
          {
            name: "1917",
            statement:
              "February: Tsar falls→Provisional Gov+Soviets; October: Bolshevik coup→Sovnarkom.",
          },
        ],
        workedExample: {
          problem: "Why did the Bolsheviks succeed in October 1917?",
          solution:
            "Provisional Government failed — kept Russia in unpopular war, didn't give peasants land, economy collapsed; Bolsheviks offered Peace-Land-Bread and were organised.",
        },
      },
      questions: [
        {
          id: "oleh-u5-17-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happened in the February Revolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tsar Nicholas II abdicated" },
              { id: "b", text: "Bolsheviks took power" },
              { id: "c", text: "WWI ended" },
              { id: "d", text: "Civil war began" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "February Revolution",
                statement: "Tsar abdicated March 1917.",
              },
            ],
            steps: [
              { reasoning: "Tsar abdicated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Tsar Nicholas II abdicated",
            commonErrors: ["Confusing with October."],
          },
        },
        {
          id: "oleh-u5-17-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was 'dual power' in 1917?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dual power",
                statement: "Provisional Gov vs Soviets.",
              },
            ],
            steps: [
              {
                reasoning: "Provisional Government nominally ruled.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Soviets held real support/power.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Provisional Government nominally ruled while Soviets (workers'/soldiers' councils) held real popular support.",
            commonErrors: ["Thinking one government."],
          },
        },
        {
          id: "oleh-u5-17-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did the Bolsheviks succeed in October 1917?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "October success",
                statement: "Peace-Land-Bread+organisation+Gov failures.",
              },
            ],
            steps: [
              {
                reasoning: "Provisional Gov kept war going.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Peasants wanted land.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Bolsheviks organised/attractive slogans.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Provisional Government continued unpopular war and ignored land demands; Bolsheviks offered Peace-Land-Bread and were well organised.",
            commonErrors: ["Vague 'people supported them'."],
          },
        },
        {
          id: "oleh-u5-17-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "1917 revolutions.",
          parts: [
            { label: "a", prompt: "February Revolution causes?", marks: 3 },
            {
              label: "b",
              prompt: "Provisional Government problems?",
              marks: 3,
            },
            { label: "c", prompt: "October coup?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1917",
                statement: "Causes+Gov problems+coup+consolidation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Food shortages/hunger.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Mutinies/protests.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Tsar abdicates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Continued war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "No land reform.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Economic collapse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Winter Palace seized.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Nov 1917.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Sovnarkom formed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) February (b) Gov problems (c) October",
          },
        },
      ],
    },
    {
      id: "oleh-u5-civilwar",
      title: "Civil War and War Communism",
      skill: "Describe the Russian Civil War, War Communism and NEP.",
      lesson: {
        sections: [
          {
            heading: "Civil war 1918–21",
            body: "Anti-Bolshevik 'White' armies (supported by Britain, France, USA, Japan) vs Bolshevik 'Red' Army (Trotsky). War ravaged country — famine 1921 killed ~5 million. Reds won due to control of industrial centres, peasant support (land), better organisation. 'Reds' executed opponents; Cheka terror.",
          },
          {
            heading: "War Communism",
            body: "1918–21 policy: nationalised industry, grain requisitioning (forced seizure from peasants), ban on private trade, labour militarisation. Intended to supply Red Army — caused economic collapse, peasant resistance, famine. Kronstadt rebellion March 1921 — sailors (former Bolshevik supporters) revolted against it.",
          },
          {
            heading: "New Economic Policy",
            body: "NEP 1921 — partial retreat from communism: peasant free trade (tax in kind instead of requisition), small private business allowed, state kept 'commanding heights' (heavy industry, banks, foreign trade). Mixed economy — economic recovery but 'NEPmen' (private traders) angered purists.",
          },
        ],
        keyFormulas: [
          {
            name: "Civil war",
            statement:
              "Reds vs Whites; War Communism=famine; NEP=partial capitalism recovery.",
          },
        ],
        workedExample: {
          problem: "Why did the Bolsheviks introduce the NEP?",
          solution:
            "War Communism caused economic collapse, famine and Kronstadt rebellion — NEP relaxed controls to restore production while keeping state control of key sectors.",
        },
      },
      questions: [
        {
          id: "oleh-u5-cw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What were the 'Red' and 'White' armies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bolsheviks vs anti-Bolsheviks" },
              { id: "b", text: "USSR vs Germany" },
              { id: "c", text: "Army vs navy" },
              { id: "d", text: "Workers vs peasants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reds/Whites",
                statement: "Bolshevik vs anti-Bolshevik.",
              },
            ],
            steps: [
              {
                reasoning: "Bolsheviks vs opponents.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Bolsheviks vs anti-Bolsheviks",
            commonErrors: ["Thinking colour armies."],
          },
        },
        {
          id: "oleh-u5-cw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was War Communism?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "War Communism",
                statement: "Nationalisation+grain seizure+labour control.",
              },
            ],
            steps: [
              {
                reasoning: "Industry nationalised.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Grain requisitioned from peasants.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "1918–21 policy: nationalised industry, forced grain requisitioning, banned private trade — caused famine.",
            commonErrors: ["Confusing with NEP."],
          },
        },
        {
          id: "oleh-u5-cw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did the Bolsheviks win the Civil War?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Red victory",
                statement: "Control+organisation+peasant support.",
              },
            ],
            steps: [
              {
                reasoning: "Controlled industrial centres.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Peasant support (land promise).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Trotsky's organisation/terror.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Controlled industry/cities, promised land to peasants, Trotsky organised Red Army — Whites were divided and foreign-backed.",
            commonErrors: ["Blaming only military skill."],
          },
        },
        {
          id: "oleh-u5-cw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Civil war and economic policy.",
          parts: [
            { label: "a", prompt: "Reds vs Whites?", marks: 2 },
            { label: "b", prompt: "War Communism?", marks: 3 },
            { label: "c", prompt: "Why it failed?", marks: 2 },
            { label: "d", prompt: "NEP?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Civil war",
                statement: "Sides+WC+failure+NEP.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Reds=Bolsheviks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Whites=anti-Bolshevik+foreign.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Nationalisation/requisition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Labour militarisation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Famine result.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Economic collapse.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Kronstadt rebellion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Partial capitalism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Recovery/state kept heights.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) sides (b) War Communism (c) failure (d) NEP",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u5-5-2-notes",
      title: "1917 and civil war — notes",
      summary:
        "Two revolutions, Bolshevik power, Civil War, War Communism→NEP.",
      sections: [
        {
          heading: "1917",
          body: "February: Tsar falls→Provisional Gov+Soviets; October: Bolshevik coup→Sovnarkom; Cheka terror.",
        },
        {
          heading: "Civil war",
          body: "Reds beat Whites; War Communism=famine/Kronstadt; NEP=partial recovery.",
        },
      ],
    },
  ],
};
