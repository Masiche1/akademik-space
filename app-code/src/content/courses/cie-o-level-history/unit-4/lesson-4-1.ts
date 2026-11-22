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
              { id: "b", text: "Atomic" },
              { id: "c", text: "Armistice" },
              { id: "d", text: "Atlantic" },
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
        {
          id: "oleh-u4-mn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'M' in MAIN stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monarchy" },
              { id: "b", text: "Modernism" },
              { id: "c", text: "Militarism" },
              { id: "d", text: "Mobilisation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MAIN",
                statement: "Militarism, Alliances, Imperialism, Nationalism.",
              },
            ],
            steps: [{ reasoning: "M = Militarism.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Militarism",
            commonErrors: ["Confusing with mobilisation."],
          },
        },
        {
          id: "oleh-u4-mn-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which alliance included Austria-Hungary before 1914?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Central Powers only" },
              { id: "b", text: "The Triple Alliance" },
              { id: "c", text: "The League of Nations" },
              { id: "d", text: "The Triple Entente" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple Alliance",
                statement: "Germany, Austria-Hungary and Italy.",
              },
            ],
            steps: [
              { reasoning: "Austria-Hungary was in the Triple Alliance.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The Triple Alliance",
            commonErrors: ["Confusing the two alliance blocs."],
          },
        },
        {
          id: "oleh-u4-mn-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which event best illustrates imperial rivalry before WWI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The signing of the Treaty of Brest-Litovsk" },
              { id: "b", text: "The formation of the Duma" },
              { id: "c", text: "The Battle of Jutland" },
              { id: "d", text: "The Moroccan crises of 1905 and 1911" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Imperial rivalry",
                statement: "Colonial disputes created tension.",
              },
            ],
            steps: [
              { reasoning: "Morocco was disputed between France and Germany.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The Moroccan crises of 1905 and 1911",
            commonErrors: ["Choosing an event after 1914."],
          },
        },
        {
          id: "oleh-u4-mn-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pan-Slavism most directly threatened which power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Austria-Hungary" },
              { id: "b", text: "The Ottoman Empire" },
              { id: "c", text: "Britain" },
              { id: "d", text: "Italy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pan-Slavism",
                statement: "Slavic self-determination threatened Austria-Hungary.",
              },
            ],
            steps: [
              { reasoning: "Slavic nationalism challenged the multi-ethnic empire.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Austria-Hungary",
            commonErrors: ["Confusing nationalism with imperialism."],
          },
        },
        {
          id: "oleh-u4-mn-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which interpretation suggests European leaders unintentionally stumbled into war?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total war model" },
              { id: "b", text: "The Fischer thesis" },
              { id: "c", text: "The 'sleepwalkers' view" },
              { id: "d", text: "The appeasement view" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Historians' debate",
                statement: "Some argue leaders stumbled into war.",
              },
            ],
            steps: [
              { reasoning: "Sleepwalkers implies unintentional escalation.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The 'sleepwalkers' view",
            commonErrors: ["Confusing it with the Fischer thesis."],
          },
        },
        {
          id: "oleh-u4-mn-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which country was NOT in the Triple Entente?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Russia" },
              { id: "b", text: "Austria-Hungary" },
              { id: "c", text: "France" },
              { id: "d", text: "Britain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple Entente",
                statement: "France, Russia and Britain.",
              },
            ],
            steps: [
              { reasoning: "Austria-Hungary belonged to the Triple Alliance.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Austria-Hungary",
            commonErrors: ["Mixing the alliance systems."],
          },
        },
        {
          id: "oleh-u4-mn-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did World War I begin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1914 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Outbreak of WWI",
                statement: "General war began in 1914.",
              },
            ],
            steps: [{ reasoning: "War declarations followed July 1914.", marks: 1, markCode: "AO1" }],
            finalAnswer: "1914",
          },
        },
        {
          id: "oleh-u4-mn-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many powers formed the Triple Entente?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple Entente",
                statement: "France, Russia and Britain.",
              },
            ],
            steps: [{ reasoning: "France, Russia and Britain made three powers.", marks: 1, markCode: "AO1" }],
            finalAnswer: "3",
          },
        },
        {
          id: "oleh-u4-mn-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many Moroccan crises are usually named as examples of imperial rivalry?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Moroccan crises",
                statement: "1905 and 1911 disputes over Morocco.",
              },
            ],
            steps: [{ reasoning: "The crises occurred in 1905 and 1911.", marks: 1, markCode: "AO1" }],
            finalAnswer: "2",
          },
        },
        {
          id: "oleh-u4-mn-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the second Moroccan crisis occur?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1911 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Moroccan crisis",
                statement: "The second crisis occurred in 1911.",
              },
            ],
            steps: [{ reasoning: "The Agadir crisis took place in 1911.", marks: 1, markCode: "AO1" }],
            finalAnswer: "1911",
          },
        },
        {
          id: "oleh-u4-mn-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was HMS Dreadnought launched, intensifying the naval arms race?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1906 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Dreadnought race",
                statement: "Britain launched HMS Dreadnought in 1906.",
              },
            ],
            steps: [{ reasoning: "The battleship was launched in 1906.", marks: 1, markCode: "AO1" }],
            finalAnswer: "1906",
          },
        },
        {
          id: "oleh-u4-mn-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the Fischer thesis with the 'sleepwalkers' interpretation of the causes of WWI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Historians' debate",
                statement: "Deliberate German war aims vs unintentional escalation.",
              },
            ],
            steps: [
              {
                reasoning: "Fischer argued Germany sought war deliberately.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sleepwalkers stressed miscalculation and accidents.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both link MAIN causes to escalation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Fischer blamed deliberate German ambitions; sleepwalkers emphasised shared misjudgements — both see structural causes turning crisis into war.",
            commonErrors: ["Describing only one interpretation."],
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
              { id: "a", text: "King George V" },
              { id: "b", text: "Tsar Nicholas II" },
              { id: "c", text: "Kaiser Wilhelm II" },
              { id: "d", text: "Archduke Franz Ferdinand" },
            ],
            correctChoiceId: "d",
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
        {
          id: "oleh-u4-jc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On what date was Archduke Franz Ferdinand assassinated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11 November 1918" },
              { id: "b", text: "4 August 1914" },
              { id: "c", text: "1 January 1915" },
              { id: "d", text: "28 June 1914" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Sarajevo",
                statement: "Assassination on 28 June 1914.",
              },
            ],
            steps: [
              { reasoning: "The Sarajevo shooting was 28 June 1914.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 28 June 1914",
            commonErrors: ["Confusing with later war dates."],
          },
        },
        {
          id: "oleh-u4-jc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who shot Archduke Franz Ferdinand in Sarajevo?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vladimir Lenin" },
              { id: "b", text: "Kaiser Wilhelm II" },
              { id: "c", text: "Tsar Nicholas II" },
              { id: "d", text: "Gavrilo Princip" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Sarajevo assassin",
                statement: "Gavrilo Princip was a Serbian nationalist.",
              },
            ],
            steps: [
              { reasoning: "Princip carried out the assassination.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Gavrilo Princip",
            commonErrors: ["Choosing a political leader rather than assassin."],
          },
        },
        {
          id: "oleh-u4-jc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did Austria-Hungary send to Serbia in July 1914?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A deliberately harsh ultimatum" },
              { id: "b", text: "A request for Russian mediation" },
              { id: "c", text: "A declaration of neutrality" },
              { id: "d", text: "An offer of alliance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "July Crisis",
                statement: "The ultimatum was designed to provoke Serbia.",
              },
            ],
            steps: [
              { reasoning: "Austria-Hungary issued a harsh ultimatum.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A deliberately harsh ultimatum",
            commonErrors: ["Thinking Serbia rejected every term."],
          },
        },
        {
          id: "oleh-u4-jc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was Germany's 'blank cheque' to Austria-Hungary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unconditional support in a war with Serbia" },
              { id: "b", text: "Permission to join the Triple Entente" },
              { id: "c", text: "A promise to remain neutral" },
              { id: "d", text: "Financial aid for colonial expansion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blank cheque",
                statement: "Unconditional German support for Austria-Hungary.",
              },
            ],
            steps: [
              { reasoning: "Germany backed Austria-Hungary whatever happened.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Unconditional support in a war with Serbia",
            commonErrors: ["Thinking it applied to Russia."],
          },
        },
        {
          id: "oleh-u4-jc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why did Britain declare war on Germany in August 1914?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Germany attacked British colonies" },
              { id: "b", text: "Germany invaded neutral Belgium" },
              { id: "c", text: "The USA asked Britain to join" },
              { id: "d", text: "Russia declared war on Britain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "British entry",
                statement: "Belgium's invasion triggered Britain's commitment.",
              },
            ],
            steps: [
              { reasoning: "Britain honoured its guarantee of Belgian neutrality.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Germany invaded neutral Belgium",
            commonErrors: ["Confusing Belgian neutrality with the Entente."],
          },
        },
        {
          id: "oleh-u4-jc-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why did Italy initially remain neutral in 1914?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Italy had no army" },
              { id: "b", text: "Italy joined the war immediately" },
              { id: "c", text: "Britain blocked Italian ports" },
              { id: "d", text: "The Triple Alliance was defensive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Italian neutrality",
                statement: "Italy argued the alliance did not require war.",
              },
            ],
            steps: [
              { reasoning: "Italy claimed its alliance obligations were defensive.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The Triple Alliance was defensive",
            commonErrors: ["Thinking Italy was absent from the alliance."],
          },
        },
        {
          id: "oleh-u4-jc-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was Franz Ferdinand assassinated?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1914 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Sarajevo",
                statement: "The assassination occurred in 1914.",
              },
            ],
            steps: [{ reasoning: "The crisis began in June 1914.", marks: 1, markCode: "AO1" }],
            finalAnswer: "1914",
          },
        },
        {
          id: "oleh-u4-jc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many days passed between the Sarajevo assassination on 28 June and Austria-Hungary's declaration of war on 28 July?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "July Crisis",
                statement: "Austria-Hungary declared war on 28 July 1914.",
              },
            ],
            steps: [{ reasoning: "28 June to 28 July is 30 days.", marks: 1, markCode: "AO1" }],
            finalAnswer: "30",
          },
        },
        {
          id: "oleh-u4-jc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "On which day of July did Austria-Hungary issue its ultimatum to Serbia?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "July Crisis",
                statement: "The ultimatum was issued on 23 July.",
              },
            ],
            steps: [{ reasoning: "The ultimatum date was 23 July 1914.", marks: 1, markCode: "AO1" }],
            finalAnswer: "23",
          },
        },
        {
          id: "oleh-u4-jc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "On which day of August did Britain declare war on Germany?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "British entry",
                statement: "Britain declared war on 4 August.",
              },
            ],
            steps: [{ reasoning: "The declaration was on 4 August 1914.", marks: 1, markCode: "AO1" }],
            finalAnswer: "4",
          },
        },
        {
          id: "oleh-u4-jc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which month did the Battle of the Marne stop the German advance?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Battle of the Marne",
                statement: "The battle occurred in September 1914.",
              },
            ],
            steps: [{ reasoning: "September is month 9 of the year.", marks: 1, markCode: "AO1" }],
            finalAnswer: "9",
          },
        },
        {
          id: "oleh-u4-jc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Schlieffen Plan failed and how this contributed to stalemate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Schlieffen Plan",
                statement: "Fast victory in France was required before Russia mobilised.",
              },
            ],
            steps: [
              {
                reasoning: "Germany aimed to defeat France quickly through Belgium.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "The Marne stopped the advance in September 1914.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both sides dug trenches along the Western Front.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear link to stalemate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "The plan expected a rapid French defeat, but the Marne halted the advance; entrenched positions then produced stalemate.",
            commonErrors: ["Saying the plan succeeded initially."],
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
