import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "oleh-u4-lesson-4-1",
  code: "4-1",
  title: "Causes of the First World War",
  goal: "I CAN explain the MAIN causes of WWI using the acronym and analyse historians' interpretations.",
  standards: ["2130/2147: Depth study — The First World War 1914–18"],
  vocabulary: [
    {
      term: "MAIN",
      definition: "Militarism, Alliances, Imperialism, Nationalism.",
    },
    { term: "Triple Entente", definition: "France, Russia, Britain alliance." },
    {
      term: "Triple Alliance",
      definition: "Germany, Austria-Hungary, Italy alliance.",
    },
    {
      term: "Schlieffen Plan",
      definition: "German plan to defeat France quickly via Belgium.",
    },
    {
      term: "July Crisis",
      definition: "Chain of events July 1914 leading to war.",
    },
    {
      term: "Blank cheque",
      definition: "Germany's unconditional support for Austria-Hungary.",
    },
  ],
  concepts: [
    {
      id: "oleh-u4-main",
      title: "MAIN causes of WWI",
      skill:
        "Explain militarism, alliances, imperialism and nationalism as causes.",
      lesson: {
        sections: [
          {
            heading: "Militarism and alliances",
            body: "Arms race — European powers built huge armies/navies (Dreadnought race Britain-Germany). Alliances: Triple Alliance (Germany, Austria-Hungary, Italy) vs Triple Entente (France, Russia, Britain) — created chain reaction where local conflict became general war.",
          },
          {
            heading: "Imperialism and nationalism",
            body: "Imperial rivalry — competition for colonies caused tension (Moroccan crises 1905/1911, Balkan disputes). Nationalism — ethnic groups wanted self-determination (Pan-Slavism in Balkans vs Austria-Hungary); great power nationalism fuelled rivalry and arms spending.",
          },
          {
            heading: "Historians' debate",
            body: "Fischer thesis: Germany deliberately sought war. 'Sleepwalkers' view: leaders stumbled into war unintentionally. Shared responsibility view: all powers contributed. Key question for essay: was war inevitable or avoidable?",
          },
        ],
        keyFormulas: [
          {
            name: "MAIN",
            statement:
              "Militarism+Alliances+Imperialism+Nationalism → arms race→alliance system→war.",
          },
        ],
        workedExample: {
          problem: "How did alliances turn a Balkan crisis into world war?",
          solution:
            "Austria-Hungary attacked Serbia → Russia mobilised to defend Serbia → Germany declared war on Russia/France → Britain joined via Belgium — alliance system escalated local conflict to global war.",
        },
      },
      questions: [
        {
          id: "oleh-u4-mn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'A' in MAIN stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliances" },
              { id: "b", text: "Armistice" },
              { id: "c", text: "Atlantic" },
              { id: "d", text: "Atomic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MAIN",
                statement: "Militarism, Alliances, Imperialism, Nationalism.",
              },
            ],
            steps: [{ reasoning: "A = Alliances.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Alliances",
            commonErrors: ["Confusing with militarism."],
          },
        },
        {
          id: "oleh-u4-mn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What were the two alliance systems before WWI?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alliance systems",
                statement: "Triple Alliance vs Triple Entente.",
              },
            ],
            steps: [
              {
                reasoning: "Triple Alliance: Germany, Austria-Hungary, Italy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Triple Entente: France, Russia, Britain.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Triple Alliance (Germany/Austria-Hungary/Italy) vs Triple Entente (France/Russia/Britain).",
            commonErrors: ["Only naming one side."],
          },
        },
        {
          id: "oleh-u4-mn-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how militarism contributed to WWI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Militarism",
                statement: "Arms race made war more likely.",
              },
            ],
            steps: [
              {
                reasoning: "Massive arms spending/race.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Military plans ready for war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Created suspicion/hostility.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Arms race created suspicion and prepared militaries for war — made conflict more likely and harder to avoid.",
            commonErrors: ["Only listing weapons."],
          },
        },
        {
          id: "oleh-u4-mn-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "MAIN causes.",
          parts: [
            { label: "a", prompt: "Militarism?", marks: 2 },
            { label: "b", prompt: "Alliances?", marks: 2 },
            { label: "c", prompt: "Imperialism?", marks: 2 },
            { label: "d", prompt: "Nationalism?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MAIN",
                statement: "All four causes explained.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Arms race.", marks: 1, markCode: "AO1" },
              {
                part: "a",
                reasoning: "War plans ready.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Two alliance systems.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Chain reaction effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Colonial rivalry.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Crisis examples.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Great power nationalism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Ethnic nationalism Balkans.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Tension built.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) militarism (b) alliances (c) imperialism (d) nationalism",
          },
        },
      ],
    },
    {
      id: "oleh-u4-july-crisis",
      title: "The July Crisis and Outbreak",
      skill: "Describe the events of June–August 1914 that led to war.",
      lesson: {
        sections: [
          {
            heading: "Assassination and ultimatum",
            body: "28 June 1914: Archduke Franz Ferdinand assassinated in Sarajevo by Gavrilo Princip (Serbian nationalist). Austria-Hungary issued ultimatum to Serbia (23 July) — deliberately harsh to provoke war. Serbia accepted most terms; Austria-Hungary declared war 28 July.",
          },
          {
            heading: "Escalation",
            body: "Russia mobilised to defend Serbia. Germany gave Austria-Hungary 'blank cheque' then declared war on Russia (1 Aug) and France (3 Aug) — implemented Schlieffen Plan through Belgium. Britain declared war on Germany 4 August after Belgium invaded. Italy stayed neutral (Triple Alliance was defensive).",
          },
          {
            heading: "Schlieffen Plan",
            body: "German strategy: defeat France fast via neutral Belgium, then turn east to Russia. Failed — Battle of Marne (Sept 1914) stopped advance; war became stalemate/trench warfare on Western Front.",
          },
        ],
        keyFormulas: [
          {
            name: "July Crisis",
            statement:
              "Assassination→ultimatum→mobilisation→declarations→Schlieffen fails→stalemate.",
          },
        ],
        workedExample: {
          problem: "Why did a Balkan assassination become a world war?",
          solution:
            "Alliance system + mobilisation timetables + blank cheque + Schlieffen Plan — each power's response triggered the next, escalating to general war.",
        },
      },
      questions: [
        {
          id: "oleh-u4-jc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who was assassinated in Sarajevo in 1914?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Archduke Franz Ferdinand" },
              { id: "b", text: "Tsar Nicholas II" },
              { id: "c", text: "Kaiser Wilhelm II" },
              { id: "d", text: "King George V" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sarajevo",
                statement: "Franz Ferdinand assassinated June 1914.",
              },
            ],
            steps: [
              { reasoning: "Franz Ferdinand.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Archduke Franz Ferdinand",
            commonErrors: ["Confusing with other royals."],
          },
        },
        {
          id: "oleh-u4-jc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Schlieffen Plan?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Schlieffen Plan",
                statement: "Defeat France fast via Belgium.",
              },
            ],
            steps: [
              {
                reasoning: "Attack France via Belgium.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Then turn east to Russia.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "German plan to defeat France quickly through neutral Belgium before turning to fight Russia.",
            commonErrors: ["Thinking it targeted Britain."],
          },
        },
        {
          id: "oleh-u4-jc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the July Crisis escalated into world war.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Escalation",
                statement: "Chain of alliances and mobilisations.",
              },
            ],
            steps: [
              {
                reasoning: "Assassination→A-H ultimatum.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Russia mobilised; Germany declared war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Schlieffen→Belgium→Britain joins.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear chain explained.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Assassination triggered ultimatum; mobilisations and alliance commitments pulled in all major powers within weeks.",
            commonErrors: ["Only describing assassination."],
          },
        },
        {
          id: "oleh-u4-jc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Outbreak of WWI.",
          parts: [
            { label: "a", prompt: "Sarajevo assassination?", marks: 2 },
            { label: "b", prompt: "Ultimatum and war declarations?", marks: 3 },
            { label: "c", prompt: "Schlieffen Plan?", marks: 2 },
            { label: "d", prompt: "Why world war?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Outbreak",
                statement: "Trigger+escalation+plan+world war.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Franz Ferdinand killed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "By Serbian nationalist.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "A-H ultimatum to Serbia.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Russia mobilised; Germany declared.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Britain joined via Belgium.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Defeat France via Belgium.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Failed at Marne.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Alliance system.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Mobilisation chain.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) Sarajevo (b) escalation (c) Schlieffen (d) world war",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u4-4-1-notes",
      title: "WWI causes — notes",
      summary: "MAIN causes, July Crisis, Schlieffen Plan, outbreak of war.",
      sections: [
        {
          heading: "Causes",
          body: "MAIN: Militarism, Alliances, Imperialism, Nationalism; arms race and alliance blocs.",
        },
        {
          heading: "Outbreak",
          body: "Sarajevo→ultimatum→mobilisation→declarations; Schlieffen failed→stalemate.",
        },
      ],
    },
  ],
};
