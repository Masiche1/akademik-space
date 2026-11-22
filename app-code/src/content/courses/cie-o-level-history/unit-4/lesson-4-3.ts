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
              { id: "a", text: "Nuclear war" },
              { id: "b", text: "War mobilising entire society and economy" },
              { id: "c", text: "War only between armies" },
              { id: "d", text: "War with no casualties" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** War mobilising entire society and economy",
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
        {
          id: "oleh-u4-hf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was DORA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A peace treaty" },
              { id: "b", text: "UK Defence of the Realm Act — wartime powers" },
              { id: "c", text: "A German naval weapon" },
              { id: "d", text: "A propaganda film" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DORA",
                statement: "Defence of the Realm Act — UK wartime powers.",
              },
            ],
            steps: [
              {
                reasoning: "DORA gave sweeping wartime powers.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** UK Defence of the Realm Act — wartime powers",
            commonErrors: ["Confusing with other acts."],
          },
        },
        {
          id: "oleh-u4-hf-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What caused Germany's 'turnip winter' of 1916–17?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Naval blockade starving the country of food" },
              { id: "b", text: "Failed harvests alone" },
              { id: "c", text: "Allied invasion" },
              { id: "d", text: "A volcanic eruption" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Turnip winter",
                statement: "Blockade caused severe hunger in Germany.",
              },
            ],
            steps: [
              {
                reasoning: "Blockade cut food supplies.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Naval blockade starving the country of food",
            commonErrors: ["Blaming weather/famine only."],
          },
        },
        {
          id: "oleh-u4-hf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was conscription introduced in Britain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1916 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conscription",
                statement: "UK conscription introduced 1916.",
              },
            ],
            steps: [
              { reasoning: "Conscription began 1916.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1916",
          },
        },
        {
          id: "oleh-u4-hf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was unrestricted submarine warfare?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unrestricted submarine warfare",
                statement: "U-boats sinking ships without warning.",
              },
            ],
            steps: [
              {
                reasoning: "U-boats sank ships without warning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Targeted all shipping incl. neutral/US vessels.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "German U-boats sinking ships without warning — including neutral and American vessels.",
            commonErrors: ["Confusing with surface warfare."],
          },
        },
        {
          id: "oleh-u4-hf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the Spanish flu?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A peace treaty provision" },
              { id: "b", text: "A naval battle" },
              { id: "c", text: "A propaganda campaign" },
              { id: "d", text: "1918-19 pandemic that killed ~50 million worldwide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spanish flu",
                statement: "1918-19 pandemic, ~50m deaths.",
              },
            ],
            steps: [
              {
                reasoning: "Pandemic killed ~50 million.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** 1918-19 pandemic that killed ~50 million worldwide",
            commonErrors: ["Underestimating deaths."],
          },
        },
        {
          id: "oleh-u4-hf-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain two ways propaganda affected the home front in WWI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Propaganda",
                statement: "Boosted morale; demonised enemy.",
              },
            ],
            steps: [
              {
                reasoning: "Campaigns boosted morale and recruitment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Demonised the enemy; encouraged sacrifice.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Propaganda boosted morale/recruitment and demonised the enemy to encourage sacrifice.",
            commonErrors: ["Only one effect."],
          },
        },
        {
          id: "oleh-u4-hf-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Treaty of Brest-Litovsk signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1918 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brest-Litovsk",
                statement: "Signed March 1918.",
              },
            ],
            steps: [
              { reasoning: "Brest-Litovsk March 1918.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1918",
          },
        },
        {
          id: "oleh-u4-hf-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did 'munitionettes' do in WWI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drove tanks" },
              { id: "b", text: "Worked as spies" },
              { id: "c", text: "Served as nurses at the front" },
              { id: "d", text: "Built shells and munitions in factories" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Munitions workers",
                statement: "Women building shells in factories.",
              },
            ],
            steps: [
              {
                reasoning: "Munitions workers built shells.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Built shells and munitions in factories",
            commonErrors: ["Confusing with combat roles."],
          },
        },
        {
          id: "oleh-u4-hf-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did Russia sign the Treaty of Brest-Litovsk?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Tsar ordered it" },
              { id: "b", text: "Russia had won the war" },
              { id: "c", text: "The new Bolshevik government wanted to exit the war" },
              { id: "d", text: "Germany offered Russia colonies" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Brest-Litovsk",
                statement: "Bolsheviks ended Russian involvement.",
              },
            ],
            steps: [
              {
                reasoning: "Bolsheviks wanted out of the war.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** The new Bolshevik government wanted to exit the war",
            commonErrors: ["Thinking Russia won."],
          },
        },
        {
          id: "oleh-u4-hf-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Home front and total war.",
          parts: [
            { label: "a", prompt: "Total war definition?", marks: 1 },
            { label: "b", prompt: "Mobilisation measures?", marks: 2 },
            { label: "c", prompt: "Civilian suffering?", marks: 2 },
            { label: "d", prompt: "Russia's exit?", marks: 1 },
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
                reasoning: "Whole society/economy mobilised.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Rationing, conscription, women workers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Propaganda campaigns.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Blockade hunger, bombing, Spanish flu.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct examples.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "1917 revolutions → Brest-Litovsk.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) total war (b) mobilisation (c) suffering (d) Russia",
          },
        },
        {
          id: "oleh-u4-hf-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many people (in millions) did the Spanish flu kill?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, tolerance: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spanish flu",
                statement: "Killed ~50 million.",
              },
            ],
            steps: [
              {
                reasoning: "~50 million deaths worldwide.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "50",
          },
        },
        {
          id: "oleh-u4-hf-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how total war changed civilian life in WWI.",
          parts: [
            { label: "a", prompt: "What was total war?", marks: 1 },
            { label: "b", prompt: "Mobilisation measures?", marks: 2 },
            { label: "c", prompt: "Women's changing roles?", marks: 2 },
            { label: "d", prompt: "Civilian suffering?", marks: 2 },
            { label: "e", prompt: "Russia's exit?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Total war",
                statement: "Mobilisation+women+suffering+Russia.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Society+economy mobilised for war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Rationing/conscription/price controls.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Propaganda and government control (DORA).",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Women replaced men in factories/farms/transport.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "'Munitions girls' built shells.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Blockade hunger; bombing; Spanish flu.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Turnip winter in Germany.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "1917 revolutions; Bolsheviks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Brest-Litovsk March 1918 freed German troops.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) total war (b) mobilisation (c) women (d) suffering (e) Russia",
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
              { id: "a", text: "August 1914" },
              { id: "b", text: "April 1917" },
              { id: "c", text: "November 1918" },
              { id: "d", text: "June 1916" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** April 1917",
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
        {
          id: "oleh-u4-ua-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Zimmermann Telegram?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "German message proposing Mexico attack the USA" },
              { id: "b", text: "A British naval code" },
              { id: "c", text: "A treaty with Japan" },
              { id: "d", text: "A US declaration of war" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zimmermann Telegram",
                statement: "1917 German proposal re: Mexico.",
              },
            ],
            steps: [
              {
                reasoning: "Proposed Mexico attack USA.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** German message proposing Mexico attack the USA",
            commonErrors: ["Confusing with submarine warfare."],
          },
        },
        {
          id: "oleh-u4-ua-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What were American soldiers in WWI nicknamed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tommy" },
              { id: "b", text: "Doughboys" },
              { id: "c", text: "Huns" },
              { id: "d", text: "Poilus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Doughboys",
                statement: "Nickname for US soldiers.",
              },
            ],
            steps: [
              {
                reasoning: "US troops called doughboys.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Doughboys",
            commonErrors: ["Confusing with British 'Tommy'."],
          },
        },
        {
          id: "oleh-u4-ua-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the armistice ending WWI signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1918 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Armistice",
                statement: "Signed 11 November 1918.",
              },
            ],
            steps: [
              { reasoning: "Armistice Nov 1918.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1918",
          },
        },
        {
          id: "oleh-u4-ua-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Hundred Days Offensive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hundred Days",
                statement: "Aug-Nov 1918 Allied offensive.",
              },
            ],
            steps: [
              {
                reasoning: "Allied offensive Aug-Nov 1918.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Pushed Germans back; forced armistice.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Allied offensive August-September 1918 that pushed German forces back and led to the armistice.",
            commonErrors: ["Confusing with Spring Offensive."],
          },
        },
        {
          id: "oleh-u4-ua-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened to Kaiser Wilhelm II in November 1918?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He was assassinated" },
              { id: "b", text: "He led the army to victory" },
              { id: "c", text: "He abdicated" },
              { id: "d", text: "He became president" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kaiser abdication",
                statement: "Wilhelm II abdicated Nov 1918.",
              },
            ],
            steps: [
              {
                reasoning: "Kaiser abdicated as collapse loomed.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** He abdicated",
            commonErrors: ["Wrong outcome."],
          },
        },
        {
          id: "oleh-u4-ua-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why did Germany's Spring Offensive of 1918 fail?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spring Offensive",
                statement: "Nearly broke through but exhausted Germany.",
              },
            ],
            steps: [
              {
                reasoning: "Initial gains but overextended.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Exhausted troops/supplies; fresh US troops arrived.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Offensive gained ground but exhausted Germany; fresh US troops enabled Allied counterattack.",
            commonErrors: ["Saying it was a total failure immediately."],
          },
        },
        {
          id: "oleh-u4-ua-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the German Spring Offensive take place?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1918 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spring Offensive",
                statement: "March 1918.",
              },
            ],
            steps: [
              {
                reasoning: "Spring Offensive March 1918.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1918",
          },
        },
        {
          id: "oleh-u4-ua-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened to Germany's allies in late 1918?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They won the war" },
              { id: "b", text: "Bulgaria, Austria-Hungary and the Ottoman Empire collapsed" },
              { id: "c", text: "They joined the Allies" },
              { id: "d", text: "They invaded France" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allied collapse",
                statement: "Central Powers empires collapsed 1918.",
              },
            ],
            steps: [
              {
                reasoning: "Central Powers empires collapsed.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Bulgaria, Austria-Hungary and the Ottoman Empire collapsed",
            commonErrors: ["Confusing alliances."],
          },
        },
        {
          id: "oleh-u4-ua-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On which date was the WWI armistice signed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11 November 1919" },
              { id: "b", text: "11 November 1918" },
              { id: "c", text: "4 July 1918" },
              { id: "d", text: "1 September 1939" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Armistice",
                statement: "11 November 1918.",
              },
            ],
            steps: [
              {
                reasoning: "Armistice 11 Nov 1918.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** 11 November 1918",
            commonErrors: ["Confusing with other dates."],
          },
        },
        {
          id: "oleh-u4-ua-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "USA and the armistice.",
          parts: [
            { label: "a", prompt: "US entry reasons?", marks: 2 },
            { label: "b", prompt: "1918 offensives?", marks: 2 },
            { label: "c", prompt: "German collapse?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "USA/armistice",
                statement: "Entry+offensives+collapse.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "U-boats/Zimmermann/democracy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "April 1917 entry.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Spring Offensive failed; Hundred Days succeeded.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Fresh US troops decisive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Exhaustion; allies collapsing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Kaiser abdicated Nov 1918.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) entry (b) offensives (c) collapse",
          },
        },
        {
          id: "oleh-u4-ua-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many military personnel died in WWI (in millions)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, tolerance: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WWI deaths",
                statement: "~10 million military dead.",
              },
            ],
            steps: [
              {
                reasoning: "About 10 million military dead.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "oleh-u4-ua-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how WWI ended in 1918.",
          parts: [
            { label: "a", prompt: "US entry reasons?", marks: 2 },
            { label: "b", prompt: "1918 offensives?", marks: 2 },
            { label: "c", prompt: "German collapse?", marks: 2 },
            { label: "d", prompt: "Armistice and consequences?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "End of WWI",
                statement: "Entry+offensives+collapse+armistice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "U-boats/Zimmermann → USA enters April 1917.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Fresh US troops decisive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Spring Offensive failed March 1918.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Hundred Days Offensive Aug-Nov.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Exhaustion+allies collapsing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Kaiser abdicates; Germany can't continue.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Armistice 11 Nov 1918 ceasefire.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Empires destroyed; ~10m+ dead.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Versailles 1919 set peace terms.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) US entry (b) offensives (c) collapse (d) armistice/consequences",
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
