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
              { id: "a", text: "Civil war began" },
              { id: "b", text: "Tsar Nicholas II abdicated" },
              { id: "c", text: "Bolsheviks took power" },
              { id: "d", text: "WWI ended" },
            ],
            correctChoiceId: "b",
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
        {
          id: "oleh-u5-17-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Provisional Government?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The White Army command" },
              { id: "b", text: "The Bolshevik government after October 1917" },
              { id: "c", text: "The temporary government formed after the Tsar fell" },
              { id: "d", text: "The Tsar's personal council" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Provisional Government",
                statement: "Temporary government after Tsar's abdication.",
              },
            ],
            steps: [
              {
                reasoning: "Formed March 1917 after abdication.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The temporary government formed after the Tsar fell",
            commonErrors: ["Confusing with Sovnarkom."],
          },
        },
        {
          id: "oleh-u5-17-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Sovnarkom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The workers' council in Petrograd" },
              { id: "b", text: "The secret police force" },
              { id: "c", text: "The Council of People's Commissars — Bolshevik government" },
              { id: "d", text: "The Red Army leadership" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sovnarkom",
                statement: "Bolshevik Council of People's Commissars.",
              },
            ],
            steps: [
              {
                reasoning: "Bolshevik government formed November 1917.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The Council of People's Commissars — Bolshevik government",
            commonErrors: ["Confusing with the Soviets."],
          },
        },
        {
          id: "oleh-u5-17-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which slogan best summed up Bolshevik promises in 1917?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Workers of the world, unite!'" },
              { id: "b", text: "'God, Tsar, Fatherland'" },
              { id: "c", text: "'Liberty, Equality, Fraternity'" },
              { id: "d", text: "'Peace, Land, Bread'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Peace-Land-Bread",
                statement: "Bolshevik slogan of 1917.",
              },
            ],
            steps: [
              {
                reasoning: "Addressed war, peasants and hunger.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 'Peace, Land, Bread'",
            commonErrors: ["Choosing a generic revolutionary slogan."],
          },
        },
        {
          id: "oleh-u5-17-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why was the Kerensky offensive a failure for the Provisional Government?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It continued the unpopular war and was militarily defeated" },
              { id: "b", text: "It dissolved the Soviets" },
              { id: "c", text: "It ended the war too quickly" },
              { id: "d", text: "It gave land to the Bolsheviks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Kerensky offensive",
                statement: "Failed offensive kept war going.",
              },
            ],
            steps: [
              {
                reasoning: "Continuing war damaged government credibility.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** It continued the unpopular war and was militarily defeated",
            commonErrors: ["Saying it achieved peace."],
          },
        },
        {
          id: "oleh-u5-17-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When was the Constituent Assembly dissolved?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "January 1918" },
              { id: "b", text: "December 1920" },
              { id: "c", text: "March 1917" },
              { id: "d", text: "November 1917" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "One-party state",
                statement: "Assembly dissolved January 1918.",
              },
            ],
            steps: [
              {
                reasoning: "Bolsheviks ended multi-party hopes in Jan 1918.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** January 1918",
            commonErrors: ["Confusing with the October coup date."],
          },
        },
        {
          id: "oleh-u5-17-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the February Revolution occur?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1917 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "1917 revolutions",
                statement: "February and October revolutions in 1917.",
              },
            ],
            steps: [
              { reasoning: "Tsar abdicated in 1917.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1917",
          },
        },
        {
          id: "oleh-u5-17-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give the date of the Tsar's abdication: (a) day of the month; (b) month number (March = 3).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Abdication date",
                statement: "Nicholas II abdicated 15 March 1917.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Abdication was 15 March.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Month was March.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "15 March",
          },
        },
        {
          id: "oleh-u5-17-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the Bolsheviks seize power in the October coup?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1917 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "October Revolution",
                statement: "Bolshevik coup November 1917.",
              },
            ],
            steps: [
              { reasoning: "Coup took place in 1917.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1917",
          },
        },
        {
          id: "oleh-u5-17-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In which year was the Treaty of Brest-Litovsk signed, taking Russia out of WWI?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1918 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Brest-Litovsk",
                statement: "Peace treaty signed March 1918.",
              },
            ],
            steps: [
              {
                reasoning: "Treaty ended Russia's war participation in 1918.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1918",
          },
        },
        {
          id: "oleh-u5-17-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two problems faced by the Provisional Government.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PG problems",
                statement: "War+no land+economy.",
              },
            ],
            steps: [
              {
                reasoning: "It continued Russia's participation in the unpopular war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It refused to give peasants land and faced economic collapse.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Kept Russia in the war, ignored peasant land demands, and presided over economic collapse.",
            commonErrors: ["Listing only one problem."],
          },
        },
        {
          id: "oleh-u5-17-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how 'dual power' weakened the Provisional Government.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dual power",
                statement: "Two centres of authority confused government.",
              },
            ],
            steps: [
              {
                reasoning: "Provisional Government nominally ruled.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Soviets held real popular support and authority.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Government could not command obedience without Soviets.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Two rival centres of authority meant the Provisional Government lacked real control while the Soviets commanded loyalty.",
            commonErrors: ["Thinking dual power strengthened government."],
          },
        },
        {
          id: "oleh-u5-17-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The 1917 revolutions and Bolshevik consolidation.",
          parts: [
            { label: "a", prompt: "What triggered the February Revolution?", marks: 3 },
            { label: "b", prompt: "Why did the Bolsheviks attract support?", marks: 3 },
            { label: "c", prompt: "How did the Bolsheviks consolidate power?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1917 consolidation",
                statement: "Trigger+Bolshevik appeal+decrees.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Food riots in Petrograd.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Soldiers mutinied and workers struck.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Tsar abdicated 15 March.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "'Peace, Land, Bread' slogan.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Well organised party.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Provisional Government's failures pushed support.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Decrees on peace, land, workers' control.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Cheka secret police suppressed opposition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Dissolved Constituent Assembly — one-party state.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) trigger (b) appeal (c) consolidation",
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
              { id: "a", text: "Workers vs peasants" },
              { id: "b", text: "USSR vs Germany" },
              { id: "c", text: "Bolsheviks vs anti-Bolsheviks" },
              { id: "d", text: "Army vs navy" },
            ],
            correctChoiceId: "c",
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
        {
          id: "oleh-u5-cw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who commanded the Red Army during the Civil War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vladimir Lenin" },
              { id: "b", text: "Kerensky" },
              { id: "c", text: "Leon Trotsky" },
              { id: "d", text: "Joseph Stalin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Red Army commander",
                statement: "Trotsky organised the Red Army.",
              },
            ],
            steps: [
              { reasoning: "Trotsky led the Reds.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Leon Trotsky",
            commonErrors: ["Thinking Lenin commanded armies."],
          },
        },
        {
          id: "oleh-u5-cw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which foreign powers supported the White armies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Germany and Austria" },
              { id: "b", text: "Italy and Spain" },
              { id: "c", text: "Britain, France, the USA and Japan" },
              { id: "d", text: "No foreign powers were involved" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "White support",
                statement: "Whites backed by Britain, France, USA, Japan.",
              },
            ],
            steps: [
              {
                reasoning: "Allied/interventionist powers aided Whites.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Britain, France, the USA and Japan",
            commonErrors: ["Forgetting Japan intervened."],
          },
        },
        {
          id: "oleh-u5-cw-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When was the New Economic Policy (NEP) introduced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1917" },
              { id: "b", text: "1928" },
              { id: "c", text: "1921" },
              { id: "d", text: "1933" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NEP",
                statement: "NEP began in 1921.",
              },
            ],
            steps: [
              { reasoning: "NEP followed War Communism's failure.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 1921",
            commonErrors: ["Confusing with Five-Year Plans."],
          },
        },
        {
          id: "oleh-u5-cw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Under the NEP, what did the state keep under its control as the 'commanding heights'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small shops and markets" },
              { id: "b", text: "The entire railway system was sold" },
              { id: "c", text: "All peasant farms" },
              { id: "d", text: "Heavy industry, banks and foreign trade" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Commanding heights",
                statement: "State kept heavy industry/banks/trade.",
              },
            ],
            steps: [
              {
                reasoning: "State retained key economic sectors.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Heavy industry, banks and foreign trade",
            commonErrors: ["Thinking everything was private."],
          },
        },
        {
          id: "oleh-u5-cw-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did the sailors at Kronstadt rebel in March 1921?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They demanded NEP be ended" },
              { id: "b", text: "They wanted the Tsar restored" },
              { id: "c", text: "They refused to fight the Whites" },
              { id: "d", text: "They opposed War Communism and demanded reform" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Kronstadt rebellion",
                statement: "Sailors rebelled against War Communism.",
              },
            ],
            steps: [
              {
                reasoning: "Former supporters turned against policy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** They opposed War Communism and demanded reform",
            commonErrors: ["Thinking it was a White uprising."],
          },
        },
        {
          id: "oleh-u5-cw-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Russian Civil War end?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1921 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Civil war dates",
                statement: "Civil war ran 1918–1921.",
              },
            ],
            steps: [
              { reasoning: "Reds won by 1921.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1921",
          },
        },
        {
          id: "oleh-u5-cw-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Approximately how many people died in the 1921 famine?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5000000, tolerance: 500000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "1921 famine",
                statement: "Famine killed about 5 million.",
              },
            ],
            steps: [
              {
                reasoning: "War Communism plus war caused mass famine.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "About 5000000",
          },
        },
        {
          id: "oleh-u5-cw-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give the year each policy was introduced: (a) War Communism; (b) the New Economic Policy.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1918 },
              { label: "b", answer: 1921 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Economic policy dates",
                statement: "War Communism 1918; NEP 1921.",
              },
            ],
            steps: [
              { part: "a", reasoning: "War Communism began 1918.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "NEP introduced 1921.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 1918; (b) 1921",
          },
        },
        {
          id: "oleh-u5-cw-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Russian Civil War begin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1918 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Civil war start",
                statement: "Civil war broke out in 1918.",
              },
            ],
            steps: [
              { reasoning: "Anti-Bolshevik forces rose in 1918.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1918",
          },
        },
        {
          id: "oleh-u5-cw-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two features of War Communism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "War Communism",
                statement: "Nationalisation+requisition+labour control.",
              },
            ],
            steps: [
              {
                reasoning: "Industry nationalised and private trade banned.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Grain forcibly requisitioned from peasants; labour militarised.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Industry was nationalised, grain was seized from peasants, private trade was banned and labour was militarised.",
            commonErrors: ["Confusing with the NEP."],
          },
        },
        {
          id: "oleh-u5-cw-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why War Communism failed and was replaced.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "War Communism failure",
                statement: "Collapse+famine+Kronstadt.",
              },
            ],
            steps: [
              {
                reasoning: "Forced grain seizure caused economic collapse.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Peasant resistance and 1921 famine resulted.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Kronstadt rebellion showed even supporters opposed it.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "It wrecked the economy, caused famine and provoked the Kronstadt rebellion, forcing Lenin to introduce the NEP in 1921.",
            commonErrors: ["Saying it was a success."],
          },
        },
        {
          id: "oleh-u5-cw-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Civil War and its economic consequences.",
          parts: [
            { label: "a", prompt: "Why did the Reds win the Civil War?", marks: 3 },
            { label: "b", prompt: "What did War Communism involve?", marks: 3 },
            { label: "c", prompt: "How did the NEP differ from War Communism?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Civil war outcomes",
                statement: "Red victory+WC+NEP contrast.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Controlled industrial centres and cities.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Peasant support via land promises.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Trotsky's organisation and Whites' disunity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Industry nationalised; trade banned.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Grain requisitioned from peasants.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Labour militarisation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Allowed small private business and peasant trade.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Tax in kind instead of requisitioning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "State kept 'commanding heights' only.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) victory (b) War Communism (c) NEP difference",
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
