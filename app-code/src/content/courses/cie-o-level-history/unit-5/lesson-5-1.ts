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
              { id: "a", text: "1905 massacre of peaceful protesters" },
              { id: "b", text: "1917 revolution start" },
              { id: "c", text: "WWI battle" },
              { id: "d", text: "Tsar's coronation" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Bloody Sunday massacre" },
              { id: "b", text: "WWI declaration" },
              { id: "c", text: "Tsar's abdication" },
              { id: "d", text: "Bolshevik coup" },
            ],
            correctChoiceId: "a",
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
