import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "oleh-u4-lesson-4-3",
  code: "4-3",
  title: "Home Fronts, USA and the Armistice",
  goal: "I CAN describe home front experiences, US entry and the end of WWI.",
  standards: ["2130/2147: Depth study — The First World War 1914–18"],
  vocabulary: [
    {
      term: "Total war",
      definition: "War mobilising entire society and economy.",
    },
    {
      term: "DORA",
      definition: "UK Defence of the Realm Act — wartime powers.",
    },
    {
      term: "Unrestricted submarine warfare",
      definition: "U-boats sinking ships without warning.",
    },
    {
      term: "Zimmermann Telegram",
      definition: "German message proposing Mexico attack USA.",
    },
    {
      term: "Armistice",
      definition: "Ceasefire agreement ending fighting (11 Nov 1918).",
    },
    {
      term: "Treaty of Versailles",
      definition: "Peace treaty formally ending war with Germany (1919).",
    },
  ],
  concepts: [
    {
      id: "oleh-u4-homefront",
      title: "Home Fronts and Total War",
      skill: "Describe how civilian life changed during WWI.",
      lesson: {
        sections: [
          {
            heading: "Total war mobilisation",
            body: "Governments took control of economies — rationing, price controls, conscription (UK conscription 1916). Women replaced men in factories, farms, transport — 'munitionettes' built shells. Propaganda campaigns boosted morale and demonised enemy.",
          },
          {
            heading: "Civilian suffering",
            body: "Blockades caused hunger (Germany 'turnip winter' 1916–17). Bombing of cities (Zeppelins, Gotha bombers). Spanish flu 1918–19 killed ~50 million worldwide — worse than war deaths. DORA gave UK government sweeping wartime powers.",
          },
          {
            heading: "Russia's exit",
            body: "Russia suffered huge losses; 1917 revolutions overthrew Tsar then brought Bolsheviks to power. Treaty of Brest-Litovsk (March 1918) took Russia out of war — freed German troops for western offensive.",
          },
        ],
        keyFormulas: [
          {
            name: "Home front",
            statement:
              "Total war: rationing+conscription+women workers+propaganda; blockade suffering; Russia exits 1918.",
          },
        ],
        workedExample: {
          problem: "How did total war change civilian life?",
          solution:
            "Economies mobilised — rationing, conscription, women in industry, propaganda; civilians suffered blockade hunger and bombing.",
        },
      },
      questions: [
        {
          id: "oleh-u4-hf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was 'total war'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "War mobilising entire society and economy" },
              { id: "b", text: "War only between armies" },
              { id: "c", text: "Nuclear war" },
              { id: "d", text: "War with no casualties" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Total war",
                statement: "Whole society mobilised.",
              },
            ],
            steps: [
              {
                reasoning: "Society+economy mobilised.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** War mobilising entire society and economy",
            commonErrors: ["Confusing with conventional war."],
          },
        },
        {
          id: "oleh-u4-hf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How did women's roles change in WWI?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Women in war",
                statement: "Replaced men in factories/farms.",
              },
            ],
            steps: [
              {
                reasoning: "Worked in factories/munitions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Also farms/transport/nursing.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Women took men's jobs in factories (munitions), farms, transport and nursing — 'munitionettes'.",
            commonErrors: ["Saying women stayed home."],
          },
        },
        {
          id: "oleh-u4-hf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did Russia leave WWI in 1918?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Russia exit",
                statement: "Revolutions → Bolsheviks → Brest-Litovsk.",
              },
            ],
            steps: [
              {
                reasoning: "Huge casualties/hardship.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "1917 revolutions overthrew Tsar.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Bolsheviks signed Brest-Litovsk.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Revolutions brought Bolsheviks to power; they signed Brest-Litovsk to end the war Russia couldn't sustain.",
            commonErrors: ["Blaming only military defeat."],
          },
        },
        {
          id: "oleh-u4-hf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Home front and total war.",
          parts: [
            { label: "a", prompt: "Total war definition?", marks: 1 },
            { label: "b", prompt: "Mobilisation measures?", marks: 3 },
            { label: "c", prompt: "Civilian suffering?", marks: 3 },
            { label: "d", prompt: "Russia's exit?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Home front",
                statement: "Definition+mobilisation+suffering+Russia.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Society+economy mobilised.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Rationing/conscription.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Women workers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Propaganda.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Blockade hunger.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Bombing cities.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Spanish flu.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "1917 revolutions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Brest-Litovsk.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) total war (b) mobilise (c) suffering (d) Russia",
          },
        },
      ],
    },
    {
      id: "oleh-u4-usa",
      title: "American Entry and Armistice",
      skill: "Explain why the USA entered WWI and how the war ended.",
      lesson: {
        sections: [
          {
            heading: "US entry",
            body: "USA initially neutral — trade with Allies, loans, but public opposed entry. Unrestricted submarine warfare sank US ships; Zimmermann Telegram (1917) proposed Mexico attack USA. USA declared war April 1917 — 'war to make the world safe for democracy'.",
          },
          {
            heading: "1918 offensives and collapse",
            body: "Russia's exit freed German troops — Spring Offensive March 1918 nearly broke through but exhausted them. US troops ('doughboys') arrived fresh — Allied Hundred Days Offensive (Aug–Nov 1918) pushed Germans back. Bulgaria/Austria-Hungary/Ottoman Empire collapsed. Germany's allies surrendered; Kaiser abdicated Nov 1918.",
          },
          {
            heading: "Armistice",
            body: "Armistice signed 11 November 1918 (11th hour, 11th day, 11th month) — fighting stopped on Western Front. ~10 million military dead, ~20 million wounded/civilian dead; empires destroyed (German, Austro-Hungarian, Ottoman, Russian); Versailles 1919 imposed peace terms.",
          },
        ],
        keyFormulas: [
          {
            name: "USA/armistice",
            statement:
              "U-boats+Zimmermann→USA enters; Spring Offensive fails→Hundred Days→armistice Nov 11 1918.",
          },
        ],
        workedExample: {
          problem: "Why did Germany lose WWI in 1918?",
          solution:
            "Exhausted by failed Spring Offensive, US fresh troops, collapsing allies — couldn't sustain war, Kaiser abdicated, armistice signed.",
        },
      },
      questions: [
        {
          id: "oleh-u4-ua-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did the USA enter WWI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "April 1917" },
              { id: "b", text: "August 1914" },
              { id: "c", text: "November 1918" },
              { id: "d", text: "June 1916" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "US entry",
                statement: "April 1917.",
              },
            ],
            steps: [{ reasoning: "April 1917.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** April 1917",
            commonErrors: ["Confusing with armistice."],
          },
        },
        {
          id: "oleh-u4-ua-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two reasons the USA entered WWI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "US entry reasons",
                statement: "U-boats+Zimmermann+democracy.",
              },
            ],
            steps: [
              { reasoning: "Any two reasons.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Unrestricted submarine warfare, Zimmermann Telegram, 'war for democracy', Allied loans/trade.",
            commonErrors: ["Only one reason."],
          },
        },
        {
          id: "oleh-u4-ua-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did Germany collapse in late 1918?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "German collapse",
                statement: "Exhaustion+US troops+allies collapsing.",
              },
            ],
            steps: [
              {
                reasoning: "Spring Offensive exhausted army.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "US fresh troops joined.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Allies surrendering; Kaiser abdicates.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Failed offensive exhausted Germany; US troops arrived; allies collapsed; Kaiser abdicated → armistice.",
            commonErrors: ["Blaming single battle."],
          },
        },
        {
          id: "oleh-u4-ua-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "USA and armistice.",
          parts: [
            { label: "a", prompt: "US entry reasons?", marks: 3 },
            { label: "b", prompt: "1918 offensives?", marks: 2 },
            { label: "c", prompt: "German collapse?", marks: 2 },
            { label: "d", prompt: "Armistice terms?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "USA/armistice",
                statement: "Entry+offensives+collapse+armistice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "U-boats/Zimmermann.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Democracy/loans.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "April 1917.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Spring Offensive failed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Hundred Days succeeded.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Exhaustion+US troops.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Kaiser abdicates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "11 Nov 1918 ceasefire.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Casualties/empire collapse.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) entry (b) offensives (c) collapse (d) armistice",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u4-4-3-notes",
      title: "Home front and armistice — notes",
      summary: "Total war, women's roles, US entry, 1918 collapse, armistice.",
      sections: [
        {
          heading: "Home front",
          body: "Rationing+conscription+women workers+propaganda; blockade suffering; Russia exits via Brest-Litovsk.",
        },
        {
          heading: "End",
          body: "U-boats+Zimmermann→USA enters; Spring Offensive fails→Hundred Days→armistice Nov 11 1918.",
        },
      ],
    },
  ],
};
