import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "his-u2-lesson-2-2",
  code: "2-2",
  title: "Expansion and the Road to War",
  goal: "I CAN describe the expansionist policies of Japan, Italy and Germany in the 1930s and analyse the events that led to the outbreak of WWII.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "Lebensraum", definition: "'Living space' — Nazi ideology demanding territorial expansion in Eastern Europe for German settlement." },
    { term: "Anschluss", definition: "The annexation of Austria by Germany in 1938." },
    { term: "Munich Agreement", definition: "1938 pact letting Hitler annex the Sudetenland from Czechoslovakia; 'peace for our time' — Chamberlain." },
    { term: "Non-Aggression Pact", definition: "August 1939 treaty between Nazi Germany and Soviet Russia, freeing Hitler to attack Poland." },
    { term: "Phoney War", definition: "The quiet period (Sept 1939–May 1940) after Poland's fall before the Western offensive." },
    { term: "Blitzkrieg", definition: "'Lightning war' — German tactic of rapid armoured and air attacks; conquered Poland, France and the Low Countries quickly." },
  ],
  concepts: [
    {
      id: "his-u2-expansion",
      title: "Expansionism in the 1930s",
      skill: "Describe Japanese, Italian and German expansion before 1939 and evaluate why the democracies failed to stop it.",
      lesson: {
        sections: [
          {
            heading: "Japanese expansion",
            body: "Japan sought resources and empire in Asia: invaded Manchuria (1931), created puppet Manchukuo, then launched full war on China (1937 — Marco Polo Bridge incident). The Rape of Nanking (1937–38) killed hundreds of thousands of civilians. Japan withdrew from the League of Nations in 1933.",
          },
          {
            heading: "Italian and German expansion",
            body: "Italy invaded Ethiopia (1935) and Albania (1939); Germany remilitarised the Rhineland (1936), annexed Austria (Anschluss, 1938), took the Sudetenland (Munich, 1938), then seized all of Czechoslovakia (March 1939) — proving appeasement had failed.",
          },
          {
            heading: "Why expansion succeeded",
            body: "Democracies were militarily unprepared, divided (Britain wanted colonies, France feared Germany, USSR feared both), and unwilling to fight over distant peoples. The League was paralyzed. Each concession (Manchuria, Rhineland, Sudetenland) emboldened the next aggression.",
          },
        ],
        keyFormulas: [
          { name: "Expansion timeline", statement: "Manchuria 1931 → Ethiopia 1935 → Rhineland 1936 → Austria 1938 → Czechoslovakia 1939" },
          { name: "Appeasement failure", statement: "Each concession removed deterrent and invited more demands" },
        ],
        workedExample: {
          problem: "Why did the Munich Agreement fail to prevent war?",
          solution: "It satisfied only part of Hitler's demands; within six months he seized the rest of Czechoslovakia, demonstrating that concessions could not satisfy expansionist aims and destroying the credibility of guarantees.",
        },
      },
      questions: [
        {
          id: "his-u2-exq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Anschluss (1938) refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Germany's annexation of Austria" },
              { id: "b", text: "The Munich Agreement" },
              { id: "c", text: "Japan's invasion of China" },
              { id: "d", text: "Italy's invasion of Ethiopia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Anschluss", statement: "German annexation of Austria, March 1938." },
            ],
            steps: [
              { reasoning: "Anschluss was the annexation of Austria.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Annexation of Austria",
            commonErrors: ["Confusing with Czechoslovakia/Sudetenland."],
          },
        },
        {
          id: "his-u2-exq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two reasons why Japan expanded into China in the 1930s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Japanese expansion motives", statement: "Resources, markets, empire-building, militarist ideology." },
            ],
            steps: [
              { reasoning: "Resource needs: Japan lacked oil, steel and rubber — China offered them.", marks: 1, markCode: "M" },
              { reasoning: "Strategic ambition: Japan sought a 'Greater East Asia Co-Prosperity Sphere' under its leadership.", marks: 1, markCode: "M" },
              { reasoning: "Domestic politics: militarists used external aggression to build support and control the government.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resources and imperial ambition; militarists used war for domestic control.",
            commonErrors: ["Treating expansion as purely economic."],
          },
        },
        {
          id: "his-u2-exq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why collective security failed to stop aggression in the 1930s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collective security failure", statement: "League powerless, democracies unprepared and divided." },
            ],
            steps: [
              { reasoning: "The League lacked enforcement mechanisms and US backing; members prioritised national interests.", marks: 1, markCode: "M" },
              { reasoning: "Sanctions (e.g. on Italy) were too weak and inconsistently applied.", marks: 1, markCode: "M" },
              { reasoning: "Britain and France were militarily unprepared and feared provoking Germany.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: without credible deterrence, aggressors faced no consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak League + unprepared/divided democracies = no deterrence.",
            commonErrors: ["Blaming only appeasement — deeper structural weaknesses mattered."],
          },
        },
        {
          id: "his-u2-exq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the events from Munich (1938) to the outbreak of war (1939).",
          parts: [
            { label: "a", prompt: "Describe what happened at Munich and its immediate aftermath.", marks: 3 },
            { label: "b", prompt: "Explain the Nazi-Soviet Pact and its significance.", marks: 3 },
            { label: "c", prompt: "Analyse why Britain and France declared war on Germany in September 1939.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Road to war", statement: "Munich failed → guarantees → invasion of Poland → declarations." },
            ],
            steps: [
              { part: "a", reasoning: "Munich Agreement (Sept 1938): Hitler got Sudetenland; Chamberlain declared 'peace for our time'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Within months Hitler seized the rest of Czechoslovakia (March 1939), proving the limits of appeasement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Britain and France guaranteed Poland's independence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "August 1939 pact: Hitler and Stalin agreed non-aggression and secretly divided Poland.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It freed Germany from a two-front war and showed ideological enemies could cooperate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It removed the last deterrent to attacking Poland.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Germany invaded Poland 1 Sept 1939 using blitzkrieg tactics.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Britain and France honoured the Polish guarantee and declared war 3 Sept 1939.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Munich → Czechoslovakia seized → Poland guaranteed. (b) Pact freed Hitler. (c) Poland invaded → declarations.",
            commonErrors: ["Thinking the pact caused the war — Poland's invasion did."],
          },
        },
        {
          id: "his-u2-exq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Manchukuo was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A League of Nations mandate" },
              { id: "b", text: "A Chinese nationalist party" },
              { id: "c", text: "A Japanese puppet state created in Manchuria" },
              { id: "d", text: "A Japanese colony in Korea" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Manchukuo", statement: "Japan's puppet state established in Manchuria after the 1931 invasion." },
            ],
            steps: [
              { reasoning: "Manchukuo was the puppet regime Japan installed in Manchuria.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Japanese puppet state in Manchuria",
            commonErrors: ["Confusing it with Korea or a League mandate."],
          },
        },
        {
          id: "his-u2-exq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Rape of Nanking' (1937–38) refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A famine caused by Japanese occupation" },
              { id: "b", text: "A naval battle in the Pacific" },
              { id: "c", text: "The massacre of hundreds of thousands of Chinese civilians by Japanese forces" },
              { id: "d", text: "A diplomatic treaty between Japan and China" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Rape of Nanking", statement: "Massacre of civilians in Nanking after Japan's 1937 invasion of China." },
            ],
            steps: [
              { reasoning: "Japanese troops massacred civilians on a huge scale in Nanking.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Massacre of Chinese civilians",
            commonErrors: ["Confusing it with a battle or diplomatic event."],
          },
        },
        {
          id: "his-u2-exq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Phoney War' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first months of fighting on the Western Front" },
              { id: "b", text: "The war in the Pacific" },
              { id: "c", text: "The propaganda battle between the blocs" },
              { id: "d", text: "The quiet period after Poland's fall (Sept 1939–May 1940) before the Western offensive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phoney War", statement: "Period of little fighting on the Western Front after Poland fell, before the 1940 offensives." },
            ],
            steps: [
              { reasoning: "The Phoney War was the lull between Poland's fall and the Western campaign.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Quiet period after Poland's fall",
            commonErrors: ["Confusing it with active combat on the Western Front."],
          },
        },
        {
          id: "his-u2-exq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Lebensraum' was the Nazi demand for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic self-sufficiency" },
              { id: "b", text: "An alliance with Japan" },
              { id: "c", text: "Colonies in Africa" },
              { id: "d", text: "Living space for German settlement in Eastern Europe" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lebensraum", statement: "Nazi ideology demanding territory in Eastern Europe for German expansion." },
            ],
            steps: [
              { reasoning: "Lebensraum meant 'living space' — Eastern territory for German settlement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Territory in Eastern Europe",
            commonErrors: ["Confusing it with economic autarky or colonial demands."],
          },
        },
        {
          id: "his-u2-exq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why the democracies failed to stop 1930s aggression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They were militarily prepared and united" },
              { id: "b", text: "The aggressors were militarily weak" },
              { id: "c", text: "They were unprepared, divided in interests, and the League lacked enforcement" },
              { id: "d", text: "The USSR effectively policed the world" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Failure to stop aggression", statement: "Unprepared militaries + divided interests + weak League = no deterrent." },
            ],
            steps: [
              { reasoning: "Britain and France were unprepared and divided; the League could not enforce decisions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Unprepared, divided democracies with a weak League",
            commonErrors: ["Blaming only appeasement — deeper weaknesses mattered."],
          },
        },
        {
          id: "his-u2-exq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event of 1930s expansion: (a) Japan invaded Manchuria; (b) Italy invaded Ethiopia; (c) Germany remilitarised the Rhineland; (d) Germany seized the rest of Czechoslovakia.",
          response: { type: "numeric", parts: [{ label: "Japan invades Manchuria", answer: 1931 }, { label: "Italy invades Ethiopia", answer: 1935 }, { label: "Rhineland remilitarised", answer: 1936 }, { label: "Czechoslovakia seized", answer: 1939 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Expansion chronology", statement: "1931 → 1935 → 1936 → 1939." },
            ],
            steps: [
              { reasoning: "Manchuria 1931.", working: "1931", marks: 1, markCode: "M" },
              { reasoning: "Ethiopia 1935.", working: "1935", marks: 1, markCode: "M" },
              { reasoning: "Rhineland 1936.", working: "1936", marks: 1, markCode: "M" },
              { reasoning: "Rest of Czechoslovakia seized March 1939.", working: "1939", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1931; 1935; 1936; 1939",
            commonErrors: ["Confusing Munich (1938) with the full seizure (1939)."],
          },
        },
        {
          id: "his-u2-exq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Marco Polo Bridge incident began Japan's full war on China; (b) the Anschluss; (c) Germany seized the remainder of Czechoslovakia.",
          response: { type: "numeric", parts: [{ label: "Marco Polo Bridge incident", answer: 1937 }, { label: "Anschluss", answer: 1938 }, { label: "Czechoslovakia fully seized", answer: 1939 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Expansion chronology", statement: "1937 → 1938 → 1939." },
            ],
            steps: [
              { reasoning: "Marco Polo Bridge incident was 1937.", working: "1937", marks: 1, markCode: "M" },
              { reasoning: "Anschluss was March 1938.", working: "1938", marks: 1, markCode: "M" },
              { reasoning: "Rest of Czechoslovakia seized March 1939.", working: "1939", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1937; 1938; 1939",
            commonErrors: ["Confusing the Sudetenland cession (1938) with full seizure (1939)."],
          },
        },
        {
          id: "his-u2-exq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these expansion events from earliest to latest (1 = earliest): Japan invades Manchuria, Italy invades Ethiopia, Germany remilitarises the Rhineland, Japan launches full war on China, Germany seizes all of Czechoslovakia.",
          response: { type: "numeric", parts: [{ label: "Manchuria", answer: 1 }, { label: "Ethiopia", answer: 2 }, { label: "Rhineland", answer: 3 }, { label: "War on China", answer: 4 }, { label: "Czechoslovakia seized", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Expansion chronology", statement: "1931 → 1935 → 1936 → 1937 → 1939." },
            ],
            steps: [
              { reasoning: "Manchuria 1931 — earliest.", working: "1931", marks: 1, markCode: "M" },
              { reasoning: "Ethiopia 1935 — second.", working: "1935", marks: 1, markCode: "M" },
              { reasoning: "Rhineland 1936 — third.", working: "1936", marks: 1, markCode: "M" },
              { reasoning: "China war 1937 — fourth.", working: "1937", marks: 1, markCode: "M" },
              { reasoning: "Czechoslovakia 1939 — latest.", working: "1939", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Manchuria 1, Ethiopia 2, Rhineland 3, China 4, Czechoslovakia 5",
            commonErrors: ["Placing the China war before the Rhineland."],
          },
        },
        {
          id: "his-u2-exq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Japan withdrew from the League of Nations; (b) Italy invaded Albania; (c) Germany invaded Poland.",
          response: { type: "numeric", parts: [{ label: "Japan leaves League", answer: 1933 }, { label: "Italy invades Albania", answer: 1939 }, { label: "Germany invades Poland", answer: 1939 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Expansion chronology", statement: "Japan leaves League 1933; Albania and Poland 1939." },
            ],
            steps: [
              { reasoning: "Japan withdrew from the League in 1933.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "Italy invaded Albania in April 1939.", working: "1939", marks: 1, markCode: "M" },
              { reasoning: "Germany invaded Poland 1 September 1939.", working: "1939", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1933; 1939; 1939",
            commonErrors: ["Confusing Albania's invasion with Ethiopia's."],
          },
        },
        {
          id: "his-u2-exq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years from the Rhineland remilitarisation (1936) to the Anschluss (1938); (b) from Japan's Manchuria invasion (1931) to the seizure of Czechoslovakia (1939); (c) between Italy's Ethiopia invasion (1935) and its Albania invasion (1939).",
          response: { type: "numeric", parts: [{ label: "Rhineland to Anschluss", answer: 2 }, { label: "Manchuria to Czechoslovakia", answer: 8 }, { label: "Ethiopia to Albania", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract earlier year from later year." },
            ],
            steps: [
              { reasoning: "$1938 - 1936$.", working: "1938 - 1936 = 2", marks: 1, markCode: "M" },
              { reasoning: "$1939 - 1931$.", working: "1939 - 1931 = 8", marks: 1, markCode: "M" },
              { reasoning: "$1939 - 1935$.", working: "1939 - 1935 = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2; 8; 4 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u2-exq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why each concession to aggressors in the 1930s emboldened further demands.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appeasement spiral", statement: "Each unchecked aggression removed deterrence and signalled weakness." },
            ],
            steps: [
              { reasoning: "Each concession (Manchuria, Rhineland, Sudetenland) went unpunished — showing democracies would not fight.", marks: 1, markCode: "M" },
              { reasoning: "Aggressors learned that demands could be made incrementally without consequence.", marks: 1, markCode: "M" },
              { reasoning: "Guarantees lost credibility — e.g. the pledge to defend Czechoslovakia was abandoned at Munich.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: concessions created a spiral of escalating demands.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unchecked aggression taught aggressors that demands could escalate without resistance.",
            commonErrors: ["Treating each concession as isolated rather than cumulative."],
          },
        },
        {
          id: "his-u2-exq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the events from Munich (1938) to the outbreak of war (1939).",
          parts: [
            { label: "a", prompt: "Describe what happened at Munich and its immediate aftermath.", marks: 3 },
            { label: "b", prompt: "Explain the Nazi-Soviet Pact and its significance.", marks: 3 },
            { label: "c", prompt: "Analyse why Britain and France declared war in September 1939.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Road to war 1938–39", statement: "Munich failed → guarantees → Poland invasion → declarations." },
            ],
            steps: [
              { part: "a", reasoning: "Munich Agreement (Sept 1938): Hitler gained Sudetenland; Chamberlain declared 'peace for our time'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Within months Hitler seized the rest of Czechoslovakia (March 1939), proving appeasement failed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Britain and France then guaranteed Poland's independence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "August 1939 pact: Hitler and Stalin agreed non-aggression and secretly divided Poland.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It freed Germany from a two-front war — removed the last deterrent to attacking Poland.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Showed ideological enemies could cooperate pragmatically.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Germany invaded Poland 1 September 1939 using blitzkrieg tactics.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Britain and France honoured the Polish guarantee and declared war 3 September 1939.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Munich → Czechoslovakia seized → Poland guaranteed. (b) Pact freed Hitler. (c) Poland invaded → declarations.",
            commonErrors: ["Thinking the pact itself caused the war — the invasion of Poland did."],
          },
        },
      ],
    },
    {
      id: "his-u2-wwii-course",
      title: "World War II: Major Campaigns",
      skill: "Describe the main theatres and turning points of WWII, including the Holocaust and the war's end.",
      lesson: {
        sections: [
          {
            heading: "Early Axis victories (1939–1941)",
            body: "Germany conquered Poland (Sept 1939), Denmark, Norway, the Low Countries and France (May–June 1940) via blitzkrieg; Britain survived the Blitz. Italy joined in 1940; Germany invaded the USSR (June 1941) and Japan attacked Pearl Harbor (Dec 1941), bringing in the USA.",
          },
          {
            heading: "Turning points",
            body: "The Holocaust: Nazi Germany systematically murdered ~6 million Jews plus Roma, disabled and others — industrialised genocide in extermination camps. Turning points: Soviet victory at Stalingrad (1942–43), Allied victory at El Alamein (1942), D-Day landings in Normandy (June 1944), and US island-hopping in the Pacific. The atomic bombs on Hiroshima and Nagasaki (Aug 1945) ended the war.",
          },
          {
            heading: "End and aftermath",
            body: "Germany surrendered May 1945; Japan August 1945. ~60 million dead — the deadliest conflict in history. The Holocaust's revelation led to the Nuremberg Trials and the Genocide Convention; the UN was founded (1945); Europe was divided into Cold War blocs.",
          },
        ],
        keyFormulas: [
          { name: "Key turning points", statement: "Stalingrad, El Alamein, D-Day, atomic bombs" },
          { name: "Holocaust", statement: "~6 million Jews + others murdered systematically" },
        ],
        workedExample: {
          problem: "Why is Stalingrad considered the turning point of the war in Europe?",
          solution: "The Soviet victory (Feb 1943) destroyed Germany's eastern army, ended its advance and shifted the strategic initiative permanently to the Allies — Germany never recovered.",
        },
      },
      questions: [
        {
          id: "his-u2-wq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Blitzkrieg is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guerrilla tactics" },
              { id: "b", text: "Rapid armoured and air assault" },
              { id: "c", text: "A naval blockade" },
              { id: "d", text: "Trench warfare" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blitzkrieg", statement: "'Lightning war' — fast combined-arms attack." },
            ],
            steps: [
              { reasoning: "Blitzkrieg = rapid armour + air power assault.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rapid armoured/air assault",
            commonErrors: ["Confusing with WWI trench warfare."],
          },
        },
        {
          id: "his-u2-wq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State two consequences of the Holocaust.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Holocaust consequences", statement: "Genocide precedent, international law, Jewish state." },
            ],
            steps: [
              { reasoning: "~6 million Jews murdered — the largest genocide in history.", marks: 1, markCode: "M" },
              { reasoning: "Led to Nuremberg Trials, Genocide Convention and 'never again' principles.", marks: 1, markCode: "M" },
              { reasoning: "Support for a Jewish homeland → Israel's creation (1948).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass murder; legal precedents; Israel's creation.",
            commonErrors: ["Describing only the event, not consequences."],
          },
        },
        {
          id: "his-u2-wq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the war became truly global after December 1941.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Global war", statement: "Pearl Harbor brought USA in; war spanned Europe, Asia, Pacific, Africa." },
            ],
            steps: [
              { reasoning: "Japan's attack on Pearl Harbor (7 Dec 1941) brought the USA into the war.", marks: 1, markCode: "M" },
              { reasoning: "The USA's industrial and military power made victory possible for the Allies.", marks: 1, markCode: "M" },
              { reasoning: "Fighting occurred across Europe, North Africa, the USSR, Asia and the Pacific simultaneously.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: became a world war of unprecedented scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "US entry + global theatres = true world war.",
            commonErrors: ["Treating WWII as only a European conflict."],
          },
        },
        {
          id: "his-u2-wq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the significance of the atomic bombings of Japan (August 1945).",
          parts: [
            { label: "a", prompt: "Describe the events of August 1945.", marks: 2 },
            { label: "b", prompt: "Explain the military arguments for using the bombs.", marks: 3 },
            { label: "c", prompt: "Evaluate the humanitarian and long-term consequences.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Atomic bombings", statement: "Military necessity vs humanitarian catastrophe." },
            ],
            steps: [
              { part: "a", reasoning: "US dropped atomic bombs on Hiroshima (6 Aug) and Nagasaki (9 Aug) 1945; Japan surrendered 15 Aug.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "~200,000 dead immediately, many more from radiation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Argued to avoid a land invasion of Japan estimated to cost millions of lives.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Demonstrated power to deter Soviet expansion — geopolitical motive.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Some historians argue Japan was already near surrender.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Humanitarian: unprecedented civilian destruction and radiation suffering.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Long-term: nuclear age began; arms race followed; survivors (hibakusha) suffered lifelong effects.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: ended war quickly but opened nuclear dangers — moral and strategic debate continues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Hiroshima/Nagasaki → surrender. (b) Avoid invasion + deter USSR. (c) Civilian catastrophe + nuclear age.",
            commonErrors: ["One-sided account ignoring either military or humanitarian dimensions."],
          },
        },
        {
          id: "his-u2-wq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'D-Day' (June 1944) refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Soviet victory at Stalingrad" },
              { id: "b", text: "The atomic bombing of Hiroshima" },
              { id: "c", text: "The fall of Berlin" },
              { id: "d", text: "The Allied landings in Normandy, France" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "D-Day", statement: "6 June 1944 Allied amphibious landings in Normandy opened the Western Front." },
            ],
            steps: [
              { reasoning: "D-Day was the Normandy invasion that began the liberation of Western Europe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Allied landings in Normandy",
            commonErrors: ["Confusing it with other 1944–45 events."],
          },
        },
        {
          id: "his-u2-wq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Holocaust is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A naval blockade of Germany" },
              { id: "b", text: "A single battle in Eastern Europe" },
              { id: "c", text: "The systematic genocide of ~6 million Jews and other victims by Nazi Germany" },
              { id: "d", text: "A diplomatic treaty ending the war" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Holocaust", statement: "Nazi Germany's systematic murder of ~6 million Jews plus Roma, disabled and others." },
            ],
            steps: [
              { reasoning: "The Holocaust was state-directed genocide carried out in extermination camps and elsewhere.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Systematic genocide by Nazi Germany",
            commonErrors: ["Treating it as a battlefield event rather than genocide."],
          },
        },
        {
          id: "his-u2-wq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Battle of Stalingrad (1942–43) is considered a turning point because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Destroyed Germany's eastern army and shifted the strategic initiative to the Allies" },
              { id: "b", text: "Brought the USA into the war" },
              { id: "c", text: "Was Germany's first defeat on the Eastern Front" },
              { id: "d", text: "Ended the war in the Pacific" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Stalingrad", statement: "Soviet victory (Feb 1943) destroyed Germany's eastern forces — the war's turning point in Europe." },
            ],
            steps: [
              { reasoning: "Stalingrad destroyed Germany's eastern army and Germany never recovered the initiative.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Destroyed Germany's eastern army, shifted initiative",
            commonErrors: ["Thinking it was Germany's first Eastern Front defeat."],
          },
        },
        {
          id: "his-u2-wq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The atomic bombs in August 1945 were dropped on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tokyo and Osaka" },
              { id: "b", text: "Berlin and Munich" },
              { id: "c", text: "Pearl Harbor and Manila" },
              { id: "d", text: "Hiroshima and Nagasaki" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Atomic bombings", statement: "Hiroshima 6 August and Nagasaki 9 August 1945." },
            ],
            steps: [
              { reasoning: "The bombs fell on Hiroshima (6 Aug) and Nagasaki (9 Aug) 1945.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hiroshima and Nagasaki",
            commonErrors: ["Confusing the targets with other Japanese cities."],
          },
        },
        {
          id: "his-u2-wq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why WWII became a 'total war'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economies, societies and civilians were fully mobilised for victory — including bombing of cities" },
              { id: "b", text: "It lasted only one year" },
              { id: "c", text: "It was fought only by naval powers" },
              { id: "d", text: "Only soldiers fought; civilians were unaffected" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Total war", statement: "All resources and society mobilised; civilians became targets." },
            ],
            steps: [
              { reasoning: "Total war meant economies, propaganda and civilians were all committed to the war effort.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Full mobilisation of economies and societies",
            commonErrors: ["Treating WWII as a limited military conflict."],
          },
        },
        {
          id: "his-u2-wq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) Germany invaded the USSR; (b) Japan attacked Pearl Harbor; (c) Germany surrendered; (d) Japan surrendered.",
          response: { type: "numeric", parts: [{ label: "Germany invades USSR", answer: 1941 }, { label: "Pearl Harbor", answer: 1941 }, { label: "Germany surrenders", answer: 1945 }, { label: "Japan surrenders", answer: 1945 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "WWII chronology", statement: "1941 invasions; 1945 surrenders." },
            ],
            steps: [
              { reasoning: "Germany invaded the USSR in June 1941.", working: "1941", marks: 1, markCode: "M" },
              { reasoning: "Pearl Harbor was December 1941.", working: "1941", marks: 1, markCode: "M" },
              { reasoning: "Germany surrendered May 1945.", working: "1945", marks: 1, markCode: "M" },
              { reasoning: "Japan surrendered August 1945.", working: "1945", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1941; 1941; 1945; 1945",
            commonErrors: ["Confusing the two surrender dates within 1945."],
          },
        },
        {
          id: "his-u2-wq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the attack on Pearl Harbor; (b) the end of the Battle of Stalingrad; (c) the D-Day landings.",
          response: { type: "numeric", parts: [{ label: "Pearl Harbor", answer: 1941 }, { label: "Stalingrad ends", answer: 1943 }, { label: "D-Day", answer: 1944 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "WWII chronology", statement: "1941 → 1943 → 1944." },
            ],
            steps: [
              { reasoning: "Pearl Harbor December 1941.", working: "1941", marks: 1, markCode: "M" },
              { reasoning: "Stalingrad ended February 1943.", working: "1943", marks: 1, markCode: "M" },
              { reasoning: "D-Day June 1944.", working: "1944", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1941; 1943; 1944",
            commonErrors: ["Dating Stalingrad to 1942 or 1944."],
          },
        },
        {
          id: "his-u2-wq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these turning points from earliest to latest (1 = earliest): the attack on Pearl Harbor, the Battle of El Alamein, the end of Stalingrad, the D-Day landings, the atomic bombings.",
          response: { type: "numeric", parts: [{ label: "Pearl Harbor", answer: 1 }, { label: "El Alamein", answer: 2 }, { label: "Stalingrad ends", answer: 3 }, { label: "D-Day", answer: 4 }, { label: "Atomic bombings", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "WWII turning points", statement: "1941 → 1942 → 1943 → 1944 → 1945." },
            ],
            steps: [
              { reasoning: "Pearl Harbor Dec 1941 — earliest.", working: "1941-12", marks: 1, markCode: "M" },
              { reasoning: "El Alamein Oct–Nov 1942 — second.", working: "1942", marks: 1, markCode: "M" },
              { reasoning: "Stalingrad ended Feb 1943 — third.", working: "1943-02", marks: 1, markCode: "M" },
              { reasoning: "D-Day June 1944 — fourth.", working: "1944-06", marks: 1, markCode: "M" },
              { reasoning: "Atomic bombings Aug 1945 — latest.", working: "1945-08", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pearl Harbor 1, El Alamein 2, Stalingrad 3, D-Day 4, atomic bombs 5",
            commonErrors: ["Placing El Alamein after Stalingrad."],
          },
        },
        {
          id: "his-u2-wq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Germany invaded Poland; (b) France fell to Germany; (c) Japan attacked Pearl Harbor.",
          response: { type: "numeric", parts: [{ label: "Germany invades Poland", answer: 1939 }, { label: "France falls", answer: 1940 }, { label: "Pearl Harbor", answer: 1941 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "WWII early course", statement: "1939 → 1940 → 1941." },
            ],
            steps: [
              { reasoning: "Germany invaded Poland September 1939.", working: "1939", marks: 1, markCode: "M" },
              { reasoning: "France fell in June 1940.", working: "1940", marks: 1, markCode: "M" },
              { reasoning: "Pearl Harbor December 1941.", working: "1941", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1939; 1940; 1941",
            commonErrors: ["Confusing France's fall with the later invasion of Russia."],
          },
        },
        {
          id: "his-u2-wq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the total duration of WWII in years (1939–1945); (b) the number of years between US entry (1941) and the war's end (1945); (c) the number of atomic bombs dropped on Japan.",
          response: { type: "numeric", parts: [{ label: "WWII duration", answer: 6 }, { label: "US entry to end", answer: 4 }, { label: "Atomic bombs dropped", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract years for intervals; count bombs dropped (Hiroshima and Nagasaki)." },
            ],
            steps: [
              { reasoning: "$1945 - 1939$.", working: "1945 - 1939 = 6", marks: 1, markCode: "M" },
              { reasoning: "$1945 - 1941$.", working: "1945 - 1941 = 4", marks: 1, markCode: "M" },
              { reasoning: "Two bombs: Hiroshima and Nagasaki.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 years; 4 years; 2 bombs",
            commonErrors: ["Including both Germany's and Japan's surrenders inconsistently."],
          },
        },
        {
          id: "his-u2-wq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the Battle of Stalingrad is considered the turning point of WWII in Europe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stalingrad", statement: "Soviet victory destroyed Germany's eastern army and ended its strategic initiative." },
            ],
            steps: [
              { reasoning: "The Soviet victory (Feb 1943) annihilated Germany's Sixth Army and elite forces.", marks: 1, markCode: "M" },
              { reasoning: "Germany never recovered its advance — the initiative passed permanently to the Allies.", marks: 1, markCode: "M" },
              { reasoning: "It demonstrated the USSR's capacity to defeat Germany, boosting Allied morale.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the war in Europe became one of German retreat thereafter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Destroyed Germany's eastern army; initiative passed to Allies permanently.",
            commonErrors: ["Treating it as just another battle rather than the strategic turning point."],
          },
        },
        {
          id: "his-u2-wq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the major turning points of World War II.",
          parts: [
            { label: "a", prompt: "Identify two key turning points of the war.", marks: 2 },
            { label: "b", prompt: "Explain the significance of Stalingrad.", marks: 3 },
            { label: "c", prompt: "Evaluate the impact of the atomic bombings on the war's end and on the post-war world.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "WWII turning points", statement: "Stalingrad, El Alamein, D-Day, atomic bombs — each shifted the balance." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: Stalingrad (1943), El Alamein (1942), D-Day (1944), Pearl Harbor (1941).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two turning points identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Destroyed Germany's eastern army and ended its advance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shifted strategic initiative permanently to the Allies.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Proved Soviet resilience — Germany never recovered in the East.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Ended the Pacific war quickly but at huge civilian cost.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Began the nuclear age — arms race and deterrence followed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs military necessity against humanitarian and strategic consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Stalingrad, El Alamein, D-Day. (b) Destroyed eastern army, shifted initiative. (c) Ended war; began nuclear age.",
            commonErrors: ["Ignoring the long-term nuclear consequences."],
          },
        },
      ],
    },
  ],
};
