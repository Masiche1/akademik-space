import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "oleh-u5-lesson-5-1",
  code: "5-1",
  title: "Russia under the Tsars and WWI",
  goal: "I CAN explain the causes of the 1905 Revolution and Russia's problems in WWI.",
  standards: ["2130/2147: Depth study — Russia 1905–41"],
  vocabulary: [
    { term: "Tsar", definition: "Emperor of Russia — autocratic ruler." },
    {
      term: "1905 Revolution",
      definition: "Uprising forcing Tsar Nicholas II to concede reforms.",
    },
    {
      term: "Duma",
      definition: "Parliament created after 1905, with limited powers.",
    },
    {
      term: "Bloody Sunday",
      definition: "Jan 1905 massacre of peaceful protesters.",
    },
    {
      term: "Russification",
      definition: "Policy forcing Russian culture/language on minorities.",
    },
    {
      term: "October Manifesto",
      definition: "1905 decree granting civil liberties and Duma.",
    },
  ],
  concepts: [
    {
      id: "oleh-u5-tsar-problems",
      title: "Tsarist Russia's problems",
      skill:
        "Describe political, social and economic problems under the Tsars.",
      lesson: {
        sections: [
          {
            heading: "Political autocracy",
            body: "Tsar Nicholas II ruled absolutely — no real parliament, secret police (Okhrana), censorship. Dumas created after 1905 but Tsar could dismiss them — 'fundamental laws' kept autocracy. Political parties banned or exiled.",
          },
          {
            heading: "Social and economic conditions",
            body: "Peasants (majority) poor, land-hungry, burdened by redemption payments. Workers in factories — long hours, low pay, dangerous conditions. Growing cities lacked housing/sanitation. Middle class wanted reform; minorities oppressed by Russification.",
          },
          {
            heading: "WWI impact",
            body: "Russia entered WWI 1914 — poorly equipped army suffered huge defeats (Tannenberg 1914, Masurian Lakes). ~1.7 million dead by 1917. Food shortages in cities, inflation, transport breakdown. Tsar took personal command 1915 — blamed for defeats. Morale collapsed.",
          },
        ],
        keyFormulas: [
          {
            name: "Tsar problems",
            statement:
              "Autocracy+peasant poverty+worker misery+WWI defeats/hunger→revolution.",
          },
        ],
        workedExample: {
          problem: "Why did WWI weaken the Tsar's regime?",
          solution:
            "Military defeats blamed on Tsar, food shortages in cities, inflation, transport collapse — regime lost legitimacy.",
        },
      },
      questions: [
        {
          id: "oleh-u5-tp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Bloody Sunday?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1917 revolution start" },
              { id: "b", text: "1905 massacre of peaceful protesters" },
              { id: "c", text: "WWI battle" },
              { id: "d", text: "Tsar's coronation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bloody Sunday",
                statement: "Jan 1905 massacre.",
              },
            ],
            steps: [
              {
                reasoning: "1905 protest massacre.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 1905 massacre of peaceful protesters",
            commonErrors: ["Confusing with 1917."],
          },
        },
        {
          id: "oleh-u5-tp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Duma?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Duma",
                statement: "Limited parliament after 1905.",
              },
            ],
            steps: [
              {
                reasoning: "Parliament created 1905.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Limited powers — Tsar could dismiss.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Limited parliament created after 1905 — Tsar could dissolve it, real power stayed with autocracy.",
            commonErrors: ["Thinking it was powerful."],
          },
        },
        {
          id: "oleh-u5-tp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why WWI weakened the Tsar's regime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WWI impact",
                statement: "Defeats+hunger+Tsar blamed.",
              },
            ],
            steps: [
              {
                reasoning: "Military defeats (Tannenberg).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Food shortages/inflation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Tsar took command — blamed.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Defeats, food shortages, inflation, transport collapse — all blamed on Tsar who took personal command.",
            commonErrors: ["Blaming only one factor."],
          },
        },
        {
          id: "oleh-u5-tp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Tsarist Russia's problems.",
          parts: [
            { label: "a", prompt: "Political system?", marks: 2 },
            { label: "b", prompt: "Peasant problems?", marks: 2 },
            { label: "c", prompt: "Worker problems?", marks: 2 },
            { label: "d", prompt: "WWI impact?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tsar problems",
                statement: "Autocracy+peasants+workers+WWI.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Absolute autocracy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Duma limited/dismissable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Land-hungry/poor.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Redemption payments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Long hours/low pay.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Dangerous conditions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Defeats/hunger.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Tsar blamed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Morale collapsed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) autocracy (b) peasants (c) workers (d) WWI",
          },
        },
        {
          id: "oleh-u5-tp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Okhrana?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An elected parliament" },
              { id: "b", text: "The Tsar's secret police" },
              { id: "c", text: "A peasant commune" },
              { id: "d", text: "A railway network" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Okhrana",
                statement: "Tsarist secret police enforcing autocracy.",
              },
            ],
            steps: [
              { reasoning: "Secret police of the Tsar.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The Tsar's secret police",
            commonErrors: ["Confusing with the Duma."],
          },
        },
        {
          id: "oleh-u5-tp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Russification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Returning land to peasants" },
              { id: "b", text: "Building railways across Russia" },
              { id: "c", text: "Expelling foreign armies" },
              { id: "d", text: "Forcing Russian culture and language on minorities" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Russification",
                statement: "Policy imposing Russian culture/language on minorities.",
              },
            ],
            steps: [
              {
                reasoning: "Imposed Russian culture/language.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Forcing Russian culture and language on minorities",
            commonErrors: ["Thinking it was economic policy."],
          },
        },
        {
          id: "oleh-u5-tp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What were the 'fundamental laws' of Tsarist Russia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The constitution of the Soviet Union" },
              { id: "b", text: "Laws granting peasants full land ownership" },
              { id: "c", text: "Laws that kept ultimate power with the Tsar despite the Duma" },
              { id: "d", text: "Rules for the Red Army in WWI" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fundamental laws",
                statement: "Laws preserving Tsar's autocracy over the Duma.",
              },
            ],
            steps: [
              {
                reasoning: "Preserved autocracy after 1905.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Laws that kept ultimate power with the Tsar despite the Duma",
            commonErrors: ["Thinking they limited the Tsar."],
          },
        },
        {
          id: "oleh-u5-tp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which group was burdened by 'redemption payments' under the Tsars?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Army officers" },
              { id: "b", text: "Factory owners" },
              { id: "c", text: "Foreign investors" },
              { id: "d", text: "Peasants" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Redemption payments",
                statement: "Payments peasants owed for land after emancipation.",
              },
            ],
            steps: [
              { reasoning: "Peasants paid for land.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Peasants",
            commonErrors: ["Confusing with factory workers."],
          },
        },
        {
          id: "oleh-u5-tp-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did the breakdown of Russia's transport system during WWI worsen hunger in cities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All railway workers joined the army" },
              { id: "b", text: "Peasants refused to sell any food" },
              { id: "c", text: "Germany stopped all grain imports" },
              { id: "d", text: "Food could not be moved from farms to urban areas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WWI food crisis",
                statement: "Transport collapse blocked food supplies.",
              },
            ],
            steps: [
              {
                reasoning: "Transport failure → urban shortages.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Food could not be moved from farms to urban areas",
            commonErrors: ["Blaming only enemy action."],
          },
        },
        {
          id: "oleh-u5-tp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Russia enter the First World War?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1914 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Russia in WWI",
                statement: "Russia entered WWI in 1914.",
              },
            ],
            steps: [
              { reasoning: "Russia joined the war in 1914.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1914",
          },
        },
        {
          id: "oleh-u5-tp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give the year of each event: (a) Russia's defeat at Tannenberg and the Masurian Lakes; (b) Tsar Nicholas II took personal command of the army.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1914 },
              { label: "b", answer: 1915 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "WWI defeats",
                statement: "Defeats 1914; Tsar assumed command 1915.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Defeats occurred in 1914.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Tsar took command in 1915.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 1914; (b) 1915",
          },
        },
        {
          id: "oleh-u5-tp-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Approximately how many Russian soldiers had been killed by 1917?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1700000, tolerance: 100000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "WWI casualties",
                statement: "Around 1.7 million Russian dead by 1917.",
              },
            ],
            steps: [
              {
                reasoning: "Huge casualties mounted through 1914–17.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "About 1700000",
          },
        },
        {
          id: "oleh-u5-tp-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the October Manifesto issued?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1905 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "October Manifesto",
                statement: "Issued in October 1905.",
              },
            ],
            steps: [
              { reasoning: "Manifesto was 1905.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1905",
          },
        },
        {
          id: "oleh-u5-tp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two problems faced by peasants under the Tsars.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peasant problems",
                statement: "Poverty+land hunger+payments.",
              },
            ],
            steps: [
              {
                reasoning: "Most peasants were poor and land-hungry.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Burdened by redemption payments after emancipation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Peasants were poor, wanted more land, and paid redemption payments — breeding resentment.",
            commonErrors: ["Listing only one problem."],
          },
        },
        {
          id: "oleh-u5-tp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Tsar's decision to take personal command of the army in 1915 weakened his regime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tsar blamed",
                statement: "Defeats+blame+lost legitimacy.",
              },
            ],
            steps: [
              {
                reasoning: "Military defeats continued after he took command.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Public blamed the Tsar personally for failures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Regime lost legitimacy and morale collapsed.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Defeats were now blamed directly on Nicholas II, so his personal command destroyed his reputation and the regime's legitimacy.",
            commonErrors: ["Saying it improved the war effort."],
          },
        },
        {
          id: "oleh-u5-tp-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Tsarist Russia's weaknesses.",
          parts: [
            { label: "a", prompt: "How did the Tsar restrict political life?", marks: 3 },
            { label: "b", prompt: "What conditions did factory workers face?", marks: 3 },
            { label: "c", prompt: "How did WWI change attitudes towards the Tsar?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tsar problems",
                statement: "Autocracy+workers+WWI blame.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Absolute rule; no real parliament.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Okhrana/censorship suppressed dissent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Duma could be dismissed via fundamental laws.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Long hours and low pay.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Dangerous working conditions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Poor urban housing and sanitation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Defeats and shortages blamed on Tsar.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Tsar took personal command 1915.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Morale collapsed; legitimacy lost.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) autocracy (b) worker misery (c) WWI blame",
          },
        },
      ],
    },
    {
      id: "oleh-u5-1905",
      title: "The 1905 Revolution",
      skill:
        "Describe the causes, events and consequences of the 1905 Revolution.",
      lesson: {
        sections: [
          {
            heading: "Causes and outbreak",
            body: "Long-term grievances + WWI? No — 1905: defeat in Russo-Japanese War (1905), economic hardship, 'Bloody Sunday' Jan 1905 (peaceful petitioners shot by troops outside Winter Palace). Protests spread — strikes, mutinies (Potemkin), peasant uprisings.",
          },
          {
            heading: "October Manifesto",
            body: "Tsar issued October Manifesto — promised civil liberties, elected Duma, legal political parties. Split opposition: liberals (Octobrists) accepted; socialists/Lenin's Bolsheviks rejected as insufficient. Tsar later clawed back powers via 'fundamental laws'.",
          },
          {
            heading: "Consequences",
            body: "First Duma elected 1906 — dissolved when it demanded real reform. Stolypin's reforms — break up peasant communes, create private farmers; suppressed revolution with 'necktie' executions. 1905 showed regime could survive but stayed weak — set stage for 1917.",
          },
        ],
        keyFormulas: [
          {
            name: "1905",
            statement:
              "War defeat+Bloody Sunday→protests→October Manifesto→limited Duma→repression.",
          },
        ],
        workedExample: {
          problem: "Why did the 1905 Revolution fail to overthrow the Tsar?",
          solution:
            "October Manifesto split opposition — liberals accepted reforms, socialists lacked organisation/mass support; Tsar used army to suppress, then limited Duma powers.",
        },
      },
      questions: [
        {
          id: "oleh-u5-05-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What triggered the 1905 Revolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bolshevik coup" },
              { id: "b", text: "WWI declaration" },
              { id: "c", text: "Bloody Sunday massacre" },
              { id: "d", text: "Tsar's abdication" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "1905 trigger",
                statement: "Bloody Sunday Jan 1905.",
              },
            ],
            steps: [{ reasoning: "Bloody Sunday.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Bloody Sunday massacre",
            commonErrors: ["Confusing with 1917."],
          },
        },
        {
          id: "oleh-u5-05-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What did the October Manifesto promise?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "October Manifesto",
                statement: "Civil liberties+Duma+parties.",
              },
            ],
            steps: [
              { reasoning: "Civil liberties.", marks: 1, markCode: "AO1" },
              { reasoning: "Elected Duma/parties.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Civil liberties, elected Duma, legal political parties — but Tsar kept real power.",
            commonErrors: ["Thinking full democracy."],
          },
        },
        {
          id: "oleh-u5-05-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did the 1905 Revolution fail?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1905 failure",
                statement: "Opposition split+army loyal+Tsar clawed back.",
              },
            ],
            steps: [
              {
                reasoning: "Manifesto split opposition.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Army stayed loyal.", marks: 1, markCode: "AO1" },
              { reasoning: "Duma powers limited.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "October Manifesto divided opposition; army remained loyal; Tsar limited Duma — revolution survived but regime persisted.",
            commonErrors: ["Saying it succeeded."],
          },
        },
        {
          id: "oleh-u5-05-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "1905 Revolution.",
          parts: [
            { label: "a", prompt: "Causes?", marks: 3 },
            { label: "b", prompt: "Bloody Sunday?", marks: 2 },
            { label: "c", prompt: "October Manifesto?", marks: 2 },
            { label: "d", prompt: "Why it failed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1905",
                statement: "Causes+trigger+manifesto+failure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "War defeat/hardship.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Economic problems.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Autocracy grievances.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Jan 1905 massacre.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Sparked protests.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Civil liberties+Duma.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Limited by fundamental laws.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Opposition split.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Army loyal; Duma limited.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) causes (b) trigger (c) manifesto (d) failure",
          },
        },
        {
          id: "oleh-u5-05-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which event helped trigger the 1905 Revolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Russia's defeat in the Russo-Japanese War" },
              { id: "b", text: "Stalin's rise to power" },
              { id: "c", text: "The Five-Year Plans" },
              { id: "d", text: "The October Revolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "1905 causes",
                statement: "War defeat, hardship and Bloody Sunday.",
              },
            ],
            steps: [
              {
                reasoning: "Defeat in 1905 war fuelled unrest.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Russia's defeat in the Russo-Japanese War",
            commonErrors: ["Confusing with WWI."],
          },
        },
        {
          id: "oleh-u5-05-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Potemkin mutiny?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A battle in WWI" },
              { id: "b", text: "The Tsar's coronation ceremony" },
              { id: "c", text: "A peasant land riot" },
              { id: "d", text: "A mutiny by Russian sailors in 1905" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Potemkin mutiny",
                statement: "Sailors' mutiny during 1905 unrest.",
              },
            ],
            steps: [
              { reasoning: "Naval mutiny in 1905.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A mutiny by Russian sailors in 1905",
            commonErrors: ["Confusing with army mutinies of 1917."],
          },
        },
        {
          id: "oleh-u5-05-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which group accepted the October Manifesto and became known as the Octobrists?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Foreign governments" },
              { id: "b", text: "Peasant rebels" },
              { id: "c", text: "Bolshevik revolutionaries" },
              { id: "d", text: "Liberals who accepted limited reform" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Octobrists",
                statement: "Liberals accepting the Manifesto.",
              },
            ],
            steps: [
              {
                reasoning: "Liberals split from socialists over Manifesto.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Liberals who accepted limited reform",
            commonErrors: ["Thinking socialists accepted it."],
          },
        },
        {
          id: "oleh-u5-05-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did Stolypin's 'necktie' executions refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shooting protesters in the streets" },
              { id: "b", text: "Hanging revolutionaries with a noose" },
              { id: "c", text: "Dismissing the Duma" },
              { id: "d", text: "Arresting factory workers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Stolypin's repression",
                statement: "'Necktie' = noose used on revolutionaries.",
              },
            ],
            steps: [
              {
                reasoning: "Stolypin used hanging to suppress revolt.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Hanging revolutionaries with a noose",
            commonErrors: ["Thinking it meant executions generally."],
          },
        },
        {
          id: "oleh-u5-05-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What happened to the First Duma elected in 1906?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ruled Russia until 1917" },
              { id: "b", text: "It was dissolved after demanding real reform" },
              { id: "c", text: "It immediately overthrew the Tsar" },
              { id: "d", text: "It was never elected" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "First Duma",
                statement: "Dissolved 1906 for demanding reform.",
              },
            ],
            steps: [
              {
                reasoning: "Tsar dissolved the First Duma.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** It was dissolved after demanding real reform",
            commonErrors: ["Thinking the Duma held real power."],
          },
        },
        {
          id: "oleh-u5-05-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Bloody Sunday take place?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1905 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Bloody Sunday",
                statement: "January 1905 massacre.",
              },
            ],
            steps: [
              { reasoning: "Bloody Sunday was January 1905.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1905",
          },
        },
        {
          id: "oleh-u5-05-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give the year of each event: (a) the October Manifesto was issued; (b) the First Duma was elected.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1905 },
              { label: "b", answer: 1906 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "1905–06 timeline",
                statement: "Manifesto 1905; First Duma 1906.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Manifesto issued 1905.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "First Duma elected 1906.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 1905; (b) 1906",
          },
        },
        {
          id: "oleh-u5-05-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many main groups did the October Manifesto split the opposition into?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Opposition split",
                statement: "Liberals (Octobrists) vs socialists.",
              },
            ],
            steps: [
              {
                reasoning: "Liberals accepted; socialists rejected — two sides.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "oleh-u5-05-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Russia lose the war against Japan?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1905 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Russo-Japanese War",
                statement: "Russian defeat in 1905.",
              },
            ],
            steps: [
              { reasoning: "Defeat contributed to 1905 unrest.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1905",
          },
        },
        {
          id: "oleh-u5-05-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two ways the October Manifesto divided the opposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Opposition split",
                statement: "Liberals accept; socialists reject.",
              },
            ],
            steps: [
              {
                reasoning: "Liberals became Octobrists accepting limited reform.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Socialists/Bolsheviks saw it as insufficient and continued revolution.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Liberals accepted the Manifesto as Octobrists while socialists rejected it as too limited — weakening united opposition.",
            commonErrors: ["Saying all opposition supported it."],
          },
        },
        {
          id: "oleh-u5-05-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the Tsar weakened the Duma after 1905.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Duma limited",
                statement: "Dissolved+fundamental laws+weak powers.",
              },
            ],
            steps: [
              {
                reasoning: "Tsar dissolved First Duma when it demanded reform.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "'Fundamental laws' preserved Tsar's supremacy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Duma could not control government or ministers.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "The Duma was dissolved for demanding reform and 'fundamental laws' kept real power with the Tsar, making it toothless.",
            commonErrors: ["Claiming the Duma ruled Russia."],
          },
        },
        {
          id: "oleh-u5-05-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The 1905 Revolution and its aftermath.",
          parts: [
            { label: "a", prompt: "Why did unrest erupt in 1905?", marks: 3 },
            { label: "b", prompt: "What did the October Manifesto offer?", marks: 2 },
            { label: "c", prompt: "How did Stolypin deal with revolutionaries?", marks: 2 },
            { label: "d", prompt: "Why did the regime survive 1905?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1905 aftermath",
                statement: "Unrest+manifesto+repression+survival.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Defeat in Russo-Japanese War.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Economic hardship and poverty.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Bloody Sunday massacre.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Civil liberties, elected Duma, legal parties.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Tsar kept real power via fundamental laws.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "'Necktie' executions of revolutionaries.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Arrested strikers and suppressed protests.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Opposition split over Manifesto.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Army stayed loyal; repression worked.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) unrest (b) manifesto (c) repression (d) survival",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u5-5-1-notes",
      title: "Tsars and 1905 — notes",
      summary:
        "Autocracy problems, WWI impact, 1905 Revolution causes/events/failure.",
      sections: [
        {
          heading: "Problems",
          body: "Autocracy; peasant poverty; worker misery; WWI defeats+hunger→regime weak.",
        },
        {
          heading: "1905",
          body: "Bloody Sunday→protests→October Manifesto→limited Duma→repression; regime survived but weakened.",
        },
      ],
    },
  ],
};
