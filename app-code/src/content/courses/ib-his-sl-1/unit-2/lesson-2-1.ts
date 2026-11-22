import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "his-u2-lesson-2-1",
  code: "2-1",
  title: "The Interwar Period and the Rise of Fascism",
  goal: "I CAN explain the weaknesses of the post-WWI order, analyse the causes of fascism's rise in Italy and Germany, and evaluate the failure of appeasement.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    { term: "Interwar period", definition: "The years between WWI (1918) and WWII (1939), marked by economic instability and political extremism." },
    { term: "Weimar Republic", definition: "Germany's democratic government (1919–1933), weakened by hyperinflation, the Great Depression and political violence." },
    { term: "Fascism", definition: "Ultranationalist, authoritarian movement led by a single party and dictator; anti-communist and expansionist." },
    { term: "Mussolini", definition: "Italian fascist leader who seized power in 1922 ('March on Rome') and built a one-party dictatorship." },
    { term: "Hitler", definition: "German Nazi leader appointed chancellor in 1933; established totalitarian rule, expanded aggressively, and launched WWII." },
    { term: "Appeasement", definition: "Policy of conceding demands to avoid conflict; associated with Chamberlain's Munich Agreement (1938) on Czechoslovakia." },
  ],
  concepts: [
    {
      id: "his-u2-interwar-crisis",
      title: "The fragile post-war order",
      skill: "Explain how the Treaty of Versailles, economic crisis and political extremism undermined democracy in the interwar period.",
      lesson: {
        sections: [
          {
            heading: "The Paris Peace Settlement",
            body: "The Treaty of Versailles (1919) created the League of Nations but imposed harsh terms on Germany and created new states without self-determination (e.g. Yugoslavia's mixed populations). Self-determination was inconsistently applied — promising in Europe but denied to colonies. The settlement failed to reconcile losers and was never enforced effectively.",
          },
          {
            heading: "Economic crisis and extremism",
            body: "The Great Depression (1929) devastated economies worldwide. In Germany, hyperinflation (1923) and then mass unemployment (1930s) destroyed confidence in the Weimar Republic. Both communists and fascists gained support; moderate parties collapsed. Democracy appeared to fail where economic hardship was greatest.",
          },
          {
            heading: "The failure of collective security",
            body: "The League of Nations lacked enforcement power and US membership. Japan invaded Manchuria (1931) and Italy invaded Ethiopia (1935) with little consequence. Germany rearmed openly (1935), remilitarised the Rhineland (1936) and annexed Austria (1938) — each unchecked.",
          },
        ],
        keyFormulas: [
          { name: "Versailles flaws", statement: "Harsh terms + inconsistent self-determination + weak League" },
          { name: "Depression impact", statement: "Mass unemployment → collapse of moderate parties → extremism" },
        ],
        workedExample: {
          problem: "Why did democracy collapse in Germany but survive in Britain during the Depression?",
          solution: "Germany's democracy was already weakened by Versailles stigma, hyperinflation trauma and proportional-representation fragmentation; Britain's institutions were older and more stable, and it avoided reparations and invasion fears.",
        },
      },
      questions: [
        {
          id: "his-u2-icq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Great Depression began with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Wall Street Crash of 1929" },
              { id: "b", text: "The Spanish Civil War" },
              { id: "c", text: "The Treaty of Versailles" },
              { id: "d", text: "The Russian Revolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Great Depression", statement: "Triggered by the 1929 Wall Street Crash and banking failures." },
            ],
            steps: [
              { reasoning: "The Depression began with the Wall Street Crash of October 1929.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Wall Street Crash 1929",
            commonErrors: ["Dating it to WWI or the Treaty."],
          },
        },
        {
          id: "his-u2-icq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two weaknesses of the League of Nations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "League weaknesses", statement: "No US, no enforcement power, unanimity requirement." },
            ],
            steps: [
              { reasoning: "The USA never joined, depriving the League of its strongest economic and military power.", marks: 1, markCode: "M" },
              { reasoning: "It had no standing army and required unanimous decisions — aggression went unpunished.", marks: 1, markCode: "M" },
              { reasoning: "Member states prioritised national interests over collective security.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No US membership and no enforcement mechanism.",
            commonErrors: ["Describing its aims rather than its failures."],
          },
        },
        {
          id: "his-u2-icq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the Weimar Republic was vulnerable to extremist takeover.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Weimar vulnerability", statement: "Versailles stigma, economic crises, proportional representation fragmentation." },
            ],
            steps: [
              { reasoning: "The 'stab-in-the-back' myth blamed republicans for defeat, undermining legitimacy.", marks: 1, markCode: "M" },
              { reasoning: "Hyperinflation (1923) and Depression unemployment destroyed middle-class confidence.", marks: 1, markCode: "M" },
              { reasoning: "Proportional representation produced weak coalition governments unable to act decisively.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: democracy lacked defenders when crisis hit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Legitimacy crisis + economic collapse + fragmented parliament.",
            commonErrors: ["Blaming only Hitler — structural weaknesses mattered."],
          },
        },
        {
          id: "his-u2-icq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the policy of appeasement and its consequences.",
          parts: [
            { label: "a", prompt: "Define appeasement and give one example.", marks: 2 },
            { label: "b", prompt: "Explain the arguments for and against appeasement in the 1930s.", marks: 3 },
            { label: "c", prompt: "Evaluate whether appeasement caused or merely delayed WWII.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appeasement debate", statement: "For: buy time, avoid war, public opinion; Against: rewards aggression, weakens deterrence." },
            ],
            steps: [
              { part: "a", reasoning: "Appeasement = conceding demands to avoid conflict; example Munich Agreement 1938 on Czechoslovakia.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clearly defined with example.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "For: public feared another war; Britain needed rearmament time; some saw Versailles as too harsh.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Against: it rewarded aggression, destroyed credibility of guarantees (e.g. to Czechoslovakia).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced arguments presented.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Delayed: Hitler used the time to rearm; Munich showed democracies would not fight.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Caused? Debate — structural aggression made war likely regardless.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluative conclusion on causation vs delay.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Munich 1938. (b) For: time/public opinion; Against: rewards aggression. (c) Delayed war and weakened deterrence; structural causes remained.",
            commonErrors: ["One-sided judgement on appeasement."],
          },
        },
        {
          id: "his-u2-icq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Wall Street Crash that triggered the Great Depression occurred in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1933" },
              { id: "b", text: "1919" },
              { id: "c", text: "1923" },
              { id: "d", text: "1929" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Wall Street Crash", statement: "October 1929 crash triggered the Great Depression." },
            ],
            steps: [
              { reasoning: "The crash occurred in October 1929.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 1929",
            commonErrors: ["Confusing it with the Treaty of Versailles (1919) or Hitler's rise (1933)."],
          },
        },
        {
          id: "his-u2-icq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'stab-in-the-back' myth claimed that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Versailles was never signed" },
              { id: "b", text: "Communists poisoned German soldiers" },
              { id: "c", text: "Germany won WWI but politicians betrayed the army" },
              { id: "d", text: "The Allies invaded Germany first" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Stab-in-the-back myth", statement: "False claim that the undefeated army was betrayed by politicians at home." },
            ],
            steps: [
              { reasoning: "The myth held that Germany's military was not defeated but betrayed by civilians and politicians.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Army unbeaten; politicians betrayed it",
            commonErrors: ["Treating the myth as factual rather than propaganda."],
          },
        },
        {
          id: "his-u2-icq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Japan invaded Manchuria in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1935" },
              { id: "b", text: "1929" },
              { id: "c", text: "1937" },
              { id: "d", text: "1931" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Manchuria invasion", statement: "Japan seized Manchuria in 1931 and created puppet Manchukuo." },
            ],
            steps: [
              { reasoning: "The invasion of Manchuria occurred in September 1931.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 1931",
            commonErrors: ["Confusing it with the 1937 invasion of China proper."],
          },
        },
        {
          id: "his-u2-icq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Italy's invasion of Ethiopia in 1935 demonstrated that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Collective security was failing — the League's sanctions were weak and inconsistently applied" },
              { id: "b", text: "Ethiopia was militarily superior to Italy" },
              { id: "c", text: "Italy withdrew from the League immediately" },
              { id: "d", text: "The League of Nations could effectively enforce sanctions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Ethiopia invasion", statement: "League sanctions against Italy were too weak — collective security failing." },
            ],
            steps: [
              { reasoning: "The League imposed limited sanctions that did not stop the invasion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Collective security failing",
            commonErrors: ["Thinking the League successfully stopped the invasion."],
          },
        },
        {
          id: "his-u2-icq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why democracy collapsed in Germany but survived in Britain during the Depression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Germany was invaded by foreign powers" },
              { id: "b", text: "Germany's democracy was already weakened by Versailles stigma, hyperinflation trauma and proportional-representation fragmentation" },
              { id: "c", text: "Britain had no extremist parties" },
              { id: "d", text: "Britain's economy was unaffected by the Depression" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Weimar vs Britain", statement: "Germany's democracy was structurally fragile; Britain's institutions were older and more stable." },
            ],
            steps: [
              { reasoning: "Germany suffered Versailles stigma, hyperinflation and coalition paralysis that Britain avoided.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Germany's democracy was already structurally fragile",
            commonErrors: ["Attributing the difference only to Hitler's personality."],
          },
        },
        {
          id: "his-u2-icq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) German hyperinflation peaked; (b) Hitler was appointed chancellor; (c) Germany remilitarised the Rhineland; (d) the Munich Agreement was signed.",
          response: { type: "numeric", parts: [{ label: "Hyperinflation peak", answer: 1923 }, { label: "Hitler becomes chancellor", answer: 1933 }, { label: "Rhineland remilitarised", answer: 1936 }, { label: "Munich Agreement", answer: 1938 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Interwar chronology", statement: "1923 → 1933 → 1936 → 1938." },
            ],
            steps: [
              { reasoning: "Hyperinflation peaked in 1923.", working: "1923", marks: 1, markCode: "M" },
              { reasoning: "Hitler became chancellor in January 1933.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "Rhineland remilitarised in 1936.", working: "1936", marks: 1, markCode: "M" },
              { reasoning: "Munich Agreement signed September 1938.", working: "1938", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1923; 1933; 1936; 1938",
            commonErrors: ["Confusing the Rhineland (1936) and Anschluss/Munich (1938) dates."],
          },
        },
        {
          id: "his-u2-icq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the peak of German hyperinflation; (b) Hitler's appointment as chancellor; (c) the Munich Agreement.",
          response: { type: "numeric", parts: [{ label: "Hyperinflation peak", answer: 1923 }, { label: "Hitler chancellor", answer: 1933 }, { label: "Munich Agreement", answer: 1938 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Interwar chronology", statement: "1923 → 1933 → 1938." },
            ],
            steps: [
              { reasoning: "Hyperinflation peaked in 1923.", working: "1923", marks: 1, markCode: "M" },
              { reasoning: "Hitler became chancellor in 1933.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "Munich was signed in 1938.", working: "1938", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1923; 1933; 1938",
            commonErrors: ["Dating Hitler's rise to 1938 instead of 1933."],
          },
        },
        {
          id: "his-u2-icq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): the Treaty of Versailles, the peak of German hyperinflation, the Wall Street Crash, Hitler becomes chancellor, the Munich Agreement.",
          response: { type: "numeric", parts: [{ label: "Treaty of Versailles", answer: 1 }, { label: "Hyperinflation peak", answer: 2 }, { label: "Wall Street Crash", answer: 3 }, { label: "Hitler becomes chancellor", answer: 4 }, { label: "Munich Agreement", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Interwar chronology", statement: "1919 → 1923 → 1929 → 1933 → 1938." },
            ],
            steps: [
              { reasoning: "Versailles 1919 — earliest.", working: "1919", marks: 1, markCode: "M" },
              { reasoning: "Hyperinflation 1923 — second.", working: "1923", marks: 1, markCode: "M" },
              { reasoning: "Crash 1929 — third.", working: "1929", marks: 1, markCode: "M" },
              { reasoning: "Hitler chancellor 1933 — fourth.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "Munich 1938 — latest.", working: "1938", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Versailles 1, hyperinflation 2, Crash 3, Hitler 4, Munich 5",
            commonErrors: ["Placing the Crash before hyperinflation."],
          },
        },
        {
          id: "his-u2-icq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event of 1930s aggression: (a) Japan invaded Manchuria; (b) Italy invaded Ethiopia; (c) Germany remilitarised the Rhineland.",
          response: { type: "numeric", parts: [{ label: "Japan invades Manchuria", answer: 1931 }, { label: "Italy invades Ethiopia", answer: 1935 }, { label: "Rhineland remilitarised", answer: 1936 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "1930s aggression", statement: "1931 → 1935 → 1936." },
            ],
            steps: [
              { reasoning: "Japan invaded Manchuria in 1931.", working: "1931", marks: 1, markCode: "M" },
              { reasoning: "Italy invaded Ethiopia in 1935.", working: "1935", marks: 1, markCode: "M" },
              { reasoning: "Germany remilitarised the Rhineland in 1936.", working: "1936", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1931; 1935; 1936",
            commonErrors: ["Swapping the Ethiopia and Rhineland dates."],
          },
        },
        {
          id: "his-u2-icq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years from the Treaty of Versailles (1919) to the Wall Street Crash (1929); (b) from the Crash to Hitler's appointment (1933); (c) from Japan's invasion of Manchuria (1931) to the Anschluss (1938).",
          response: { type: "numeric", parts: [{ label: "Versailles to Crash", answer: 10 }, { label: "Crash to Hitler", answer: 4 }, { label: "Manchuria to Anschluss", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract earlier year from later year." },
            ],
            steps: [
              { reasoning: "$1929 - 1919$.", working: "1929 - 1919 = 10", marks: 1, markCode: "M" },
              { reasoning: "$1933 - 1929$.", working: "1933 - 1929 = 4", marks: 1, markCode: "M" },
              { reasoning: "$1938 - 1931$.", working: "1938 - 1931 = 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10; 4; 7 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u2-icq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the Great Depression strengthened extremist parties in Europe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Depression and extremism", statement: "Mass unemployment and hardship destroyed confidence in moderate parties." },
            ],
            steps: [
              { reasoning: "Mass unemployment and poverty discredited mainstream democratic parties.", marks: 1, markCode: "M" },
              { reasoning: "Extremists offered simple scapegoats (Jews, communists, Versailles) and strong leadership.", marks: 1, markCode: "M" },
              { reasoning: "Propaganda and paramilitary violence intimidated opponents and attracted the desperate.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: economic crisis created the conditions for fascist and communist gains.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unemployment and hardship destroyed faith in moderates; extremism offered scapegoats and strongmen.",
            commonErrors: ["Blaming extremism on ideology alone, ignoring economic context."],
          },
        },
        {
          id: "his-u2-icq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the failure of collective security in the 1930s.",
          parts: [
            { label: "a", prompt: "Describe two weaknesses of the League of Nations.", marks: 2 },
            { label: "b", prompt: "Explain how Japan's invasion of Manchuria and Italy's invasion of Ethiopia exposed these weaknesses.", marks: 3 },
            { label: "c", prompt: "Evaluate whether appeasement or deeper structural weakness was more responsible for the failure.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collective security failure", statement: "League powerless + unprepared democracies = aggression unchecked." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: no US membership, no standing army, unanimity requirement, national interests over collective good.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Manchuria (1931): League condemned but imposed no effective sanctions — Japan withdrew 1933.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ethiopia (1935): limited sanctions excluded oil; Italy conquered anyway.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both cases showed aggressors faced no credible deterrent.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Appeasement rewarded aggression but was a symptom of deeper weakness.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Structural causes: League design flaws, unprepared militaries, Great Depression nationalism.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs appeasement policy against systemic failure in judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) No US, no enforcement. (b) Manchuria and Ethiopia showed sanctions toothless. (c) Structural weakness primary; appeasement a symptom.",
            commonErrors: ["Blaming only appeasement and ignoring League/structural flaws."],
          },
        },
      ],
    },
    {
      id: "his-u2-fascism",
      title: "Fascism in Italy and Germany",
      skill: "Explain how Mussolini and Hitler seized power and describe the characteristics of their regimes.",
      lesson: {
        sections: [
          {
            heading: "Mussolini's Italy",
            body: "Post-WWI Italy faced unemployment, inflation and fear of communism. Mussolini's Fascist Party (founded 1919) used squadristi violence and propaganda. The 'March on Rome' (1922) was largely theatrical — the king invited Mussolini to form government. He then dismantled democracy: single party, secret police (OVRA), corporatist economy, and imperial aggression (Ethiopia 1935, Albania 1939).",
          },
          {
            heading: "Hitler's seizure of power",
            body: "Hitler's NSDAP exploited Depression misery: propaganda, rallies and scapegoating (Jews, communists, Versailles 'stab-in-back'). Appointed chancellor January 1933; used the Reichstag Fire to suspend civil liberties, then the Enabling Act to rule by decree. Totalitarian control: Gestapo, concentration camps, propaganda minister Goebbels, Hitler Youth, and the Nuremberg racial laws (1935).",
          },
          {
            heading: "Characteristics of fascist regimes",
            body: "Ultranationalism, one-party dictatorship, leader cult, suppression of opposition, militarism, state control of economy (corporatism), anti-communism, and (in Germany) racial antisemitism. Both regimes censored culture and education; both prepared for war.",
          },
        ],
        keyFormulas: [
          { name: "Italian path", statement: "Squad violence + March on Rome 1922 → legal dictatorship" },
          { name: "German path", statement: "Chancellor 1933 → Enabling Act → totalitarian rule" },
        ],
        workedExample: {
          problem: "Explain how Hitler used legal mechanisms to destroy democracy.",
          solution: "After the Reichstag Fire he invoked emergency powers to suspend civil liberties; the Enabling Act (March 1933) then let him pass laws without parliament — democracy was dismantled through its own constitutional procedures.",
        },
      },
      questions: [
        {
          id: "his-u2-fq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Mussolini became Prime Minister of Italy in 1922 through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A military coup by the army" },
              { id: "b", text: "The king inviting him after the March on Rome" },
              { id: "c", text: "Winning a democratic election" },
              { id: "d", text: "Parliamentary vote of no confidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "March on Rome", statement: "King Victor Emmanuel III invited Mussolini to form government in October 1922." },
            ],
            steps: [
              { reasoning: "Mussolini was appointed, not elected — the king yielded to fascist pressure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** King invited him",
            commonErrors: ["Thinking he won an election — he exploited elite willingness to use him."],
          },
        },
        {
          id: "his-u2-fq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two methods Hitler used to consolidate power after January 1933.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Nazi consolidation", statement: "Emergency decrees, Enabling Act, terror, propaganda." },
            ],
            steps: [
              { reasoning: "Legal: Reichstag Fire Decree suspended civil liberties; Enabling Act allowed rule by decree.", marks: 1, markCode: "M" },
              { reasoning: "Terror: SA and SS suppressed opposition; Night of Long Knives (1934) eliminated rivals.", marks: 1, markCode: "M" },
              { reasoning: "Propaganda and Gleichschaltung (coordination) brought institutions under party control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emergency decrees + Enabling Act; SA terror; propaganda/coordination.",
            commonErrors: ["Describing only propaganda, ignoring legal mechanisms."],
          },
        },
        {
          id: "his-u2-fq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare the ways Mussolini and Hitler came to power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seizure comparison", statement: "Mussolini: elite invitation; Hitler: legal appointment exploited then dismantled." },
            ],
            steps: [
              { reasoning: "Mussolini used squad violence and a theatrical march, then was invited by the king.", marks: 1, markCode: "M" },
              { reasoning: "Hitler was appointed chancellor legally, then used the Enabling Act to eliminate democracy.", marks: 1, markCode: "M" },
              { reasoning: "Both exploited post-war grievances, economic crisis and elite complicity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: different paths, similar authoritarian results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mussolini invited by king; Hitler legally appointed then consolidated — both exploited crisis.",
            commonErrors: ["Assuming both came to power identically."],
          },
        },
        {
          id: "his-u2-fq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the features of Nazi Germany as a totalitarian state.",
          parts: [
            { label: "a", prompt: "Describe the role of propaganda and the leader cult.", marks: 3 },
            { label: "b", prompt: "Explain how the regime controlled political opposition.", marks: 3 },
            { label: "c", prompt: "Evaluate the significance of racial policy (antisemitism) in Nazi ideology.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Totalitarian features", statement: "Propaganda, terror, one-party rule, racial ideology." },
            ],
            steps: [
              { part: "a", reasoning: "Goebbels' propaganda ministry controlled media, rallies and arts.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hitler portrayed as infallible saviour; Nuremberg rallies staged loyalty.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Youth indoctrinated via Hitler Youth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gestapo surveillance, concentration camps, and Gleichschaltung eliminated opposition.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All parties except NSDAP banned; judiciary and civil service purged (1933–34).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Terror created self-censorship — citizens policed themselves.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Antisemitism central to Nazi racial ideology — Jews blamed for Germany's problems.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Nuremberg Laws (1935) institutionalised persecution, escalating to genocide.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Propaganda + Hitler cult + youth indoctrination. (b) Gestapo, camps, party monopoly. (c) Antisemitism core to ideology → Nuremberg Laws → genocide.",
            commonErrors: ["Treating Nazi antisemitism as incidental rather than central."],
          },
        },
        {
          id: "his-u2-fq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'March on Rome' (1922) resulted in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The abolition of the monarchy" },
              { id: "b", text: "A military coup by the Italian army" },
              { id: "c", text: "Mussolini winning a general election" },
              { id: "d", text: "King Victor Emmanuel III inviting Mussolini to form government" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "March on Rome", statement: "The king legally appointed Mussolini — fascists did not seize power by force." },
            ],
            steps: [
              { reasoning: "Mussolini was invited by the king to form a government in October 1922.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** King invited Mussolini to govern",
            commonErrors: ["Thinking fascists seized power by armed coup."],
          },
        },
        {
          id: "his-u2-fq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Enabling Act (March 1933) allowed Hitler to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Declare war on France" },
              { id: "b", text: "Pass laws without parliament — rule by decree" },
              { id: "c", text: "Join the League of Nations" },
              { id: "d", text: "Abolish the presidency" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Enabling Act", statement: "Let Hitler govern by decree, bypassing the Reichstag — legal destruction of democracy." },
            ],
            steps: [
              { reasoning: "The Enabling Act let Hitler issue laws without parliamentary approval.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rule by decree without parliament",
            commonErrors: ["Confusing it with the Reichstag Fire Decree or the Night of Long Knives."],
          },
        },
        {
          id: "his-u2-fq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Gestapo was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The SS paramilitary guard" },
              { id: "b", text: "The Hitler Youth organisation" },
              { id: "c", text: "The Nazi propaganda ministry" },
              { id: "d", text: "The Nazi secret police" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gestapo", statement: "Geheime Staatspolizei — Nazi secret police conducting surveillance and terror." },
            ],
            steps: [
              { reasoning: "The Gestapo was the secret state police responsible for surveillance and repression.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Nazi secret police",
            commonErrors: ["Confusing Gestapo with the SS or propaganda ministry."],
          },
        },
        {
          id: "his-u2-fq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Gleichschaltung' meant:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Coordination' — bringing all institutions under Nazi party control" },
              { id: "b", text: "The policy of Lebensraum expansion" },
              { id: "c", text: "The Night of Long Knives purge" },
              { id: "d", text: "The Nuremberg racial laws" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gleichschaltung", statement: "Nazi 'coordination' of all institutions — media, courts, unions, parties — under party control." },
            ],
            steps: [
              { reasoning: "Gleichschaltung synchronised German institutions with Nazi ideology and control.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Coordination of institutions under Nazi control",
            commonErrors: ["Confusing it with the purge or racial laws."],
          },
        },
        {
          id: "his-u2-fq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which feature best distinguishes fascist regimes from democracies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They held regular competitive elections" },
              { id: "b", text: "They protected freedom of the press" },
              { id: "c", text: "One-party dictatorship, leader cult and suppression of opposition" },
              { id: "d", text: "They relied on independent judiciaries" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fascist features", statement: "Ultranationalism, one-party rule, leader cult, terror and state economic control." },
            ],
            steps: [
              { reasoning: "Fascist regimes abolished democracy: single party, dictator cult and suppression of dissent.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** One-party dictatorship and leader cult",
            commonErrors: ["Attributing democratic features to fascist regimes."],
          },
        },
        {
          id: "his-u2-fq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) the Fascist Party was founded; (b) the March on Rome; (c) the Enabling Act passed; (d) the Nuremberg Laws enacted.",
          response: { type: "numeric", parts: [{ label: "Fascist Party founded", answer: 1919 }, { label: "March on Rome", answer: 1922 }, { label: "Enabling Act", answer: 1933 }, { label: "Nuremberg Laws", answer: 1935 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Fascist chronology", statement: "1919 → 1922 → 1933 → 1935." },
            ],
            steps: [
              { reasoning: "The Fascist Party was founded in 1919.", working: "1919", marks: 1, markCode: "M" },
              { reasoning: "March on Rome was October 1922.", working: "1922", marks: 1, markCode: "M" },
              { reasoning: "Enabling Act passed March 1933.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "Nuremberg Laws enacted 1935.", working: "1935", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1919; 1922; 1933; 1935",
            commonErrors: ["Confusing party founding with the March on Rome."],
          },
        },
        {
          id: "his-u2-fq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the March on Rome; (b) Hitler became chancellor; (c) the Nuremberg racial laws.",
          response: { type: "numeric", parts: [{ label: "March on Rome", answer: 1922 }, { label: "Hitler chancellor", answer: 1933 }, { label: "Nuremberg Laws", answer: 1935 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Fascist chronology", statement: "1922 → 1933 → 1935." },
            ],
            steps: [
              { reasoning: "March on Rome was 1922.", working: "1922", marks: 1, markCode: "M" },
              { reasoning: "Hitler became chancellor in 1933.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "Nuremberg Laws were enacted in 1935.", working: "1935", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1922; 1933; 1935",
            commonErrors: ["Confusing Italian and German dates."],
          },
        },
        {
          id: "his-u2-fq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): the founding of the Fascist Party, the March on Rome, Hitler becomes chancellor, the Nuremberg Laws, Italy invades Albania.",
          response: { type: "numeric", parts: [{ label: "Fascist Party founded", answer: 1 }, { label: "March on Rome", answer: 2 }, { label: "Hitler becomes chancellor", answer: 3 }, { label: "Nuremberg Laws", answer: 4 }, { label: "Italy invades Albania", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Fascist chronology", statement: "1919 → 1922 → 1933 → 1935 → 1939." },
            ],
            steps: [
              { reasoning: "Party founded 1919 — earliest.", working: "1919", marks: 1, markCode: "M" },
              { reasoning: "March on Rome 1922 — second.", working: "1922", marks: 1, markCode: "M" },
              { reasoning: "Hitler chancellor 1933 — third.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "Nuremberg Laws 1935 — fourth.", working: "1935", marks: 1, markCode: "M" },
              { reasoning: "Albania invasion 1939 — latest.", working: "1939", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Party 1, March on Rome 2, Hitler 3, Nuremberg 4, Albania 5",
            commonErrors: ["Placing the Nuremberg Laws before Hitler's appointment."],
          },
        },
        {
          id: "his-u2-fq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Enabling Act passed; (b) the Night of the Long Knives; (c) Italy invaded Ethiopia.",
          response: { type: "numeric", parts: [{ label: "Enabling Act", answer: 1933 }, { label: "Night of the Long Knives", answer: 1934 }, { label: "Italy invades Ethiopia", answer: 1935 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Nazi chronology", statement: "Enabling Act 1933; Long Knives 1934; Ethiopia 1935." },
            ],
            steps: [
              { reasoning: "Enabling Act passed March 1933.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "Night of the Long Knives was June 1934.", working: "1934", marks: 1, markCode: "M" },
              { reasoning: "Italy invaded Ethiopia in 1935.", working: "1935", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1933; 1934; 1935",
            commonErrors: ["Swapping the Long Knives and Ethiopia dates."],
          },
        },
        {
          id: "his-u2-fq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years from the March on Rome (1922) to Hitler's appointment (1933); (b) from Hitler's appointment to the Nuremberg Laws (1935); (c) the number of years fascism ruled Italy from the March on Rome to the invasion of Albania (1939).",
          response: { type: "numeric", parts: [{ label: "March on Rome to Hitler", answer: 11 }, { label: "Hitler to Nuremberg", answer: 2 }, { label: "Fascist rule to Albania", answer: 17 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract earlier year from later year." },
            ],
            steps: [
              { reasoning: "$1933 - 1922$.", working: "1933 - 1922 = 11", marks: 1, markCode: "M" },
              { reasoning: "$1935 - 1933$.", working: "1935 - 1933 = 2", marks: 1, markCode: "M" },
              { reasoning: "$1939 - 1922$.", working: "1939 - 1922 = 17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11; 2; 17 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u2-fq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how Hitler used legal mechanisms to destroy democracy in Germany.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Legal destruction of democracy", statement: "Emergency decrees and the Enabling Act dismantled parliament through constitutional means." },
            ],
            steps: [
              { reasoning: "After the Reichstag Fire (Feb 1933), emergency decrees suspended civil liberties.", marks: 1, markCode: "M" },
              { reasoning: "The Enabling Act (March 1933) let Hitler pass laws without parliament — rule by decree.", marks: 1, markCode: "M" },
              { reasoning: "Other parties were banned and institutions 'coordinated' under Nazi control.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: democracy was dismantled through its own legal procedures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reichstag Fire decree + Enabling Act allowed Hitler to govern by decree and ban opposition — legal dismantling of democracy.",
            commonErrors: ["Describing only violence and ignoring the legal mechanisms."],
          },
        },
        {
          id: "his-u2-fq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the characteristics of fascist regimes in Italy and Germany.",
          parts: [
            { label: "a", prompt: "Describe how Mussolini and Hitler each seized power.", marks: 3 },
            { label: "b", prompt: "Explain the tools of totalitarian control used by both regimes.", marks: 3 },
            { label: "c", prompt: "Evaluate the similarities and differences between Italian fascism and German Nazism.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fascist regimes", statement: "Different paths to power; shared tools of totalitarian control; German racial ideology distinctive." },
            ],
            steps: [
              { part: "a", reasoning: "Mussolini: squad violence + March on Rome (1922) → king invited him.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hitler: legal appointment as chancellor (1933) → Enabling Act → totalitarian rule.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both exploited post-war grievances, economic crisis and elite complicity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Propaganda and leader cult: Mussolini's image and Hitler's Nuremberg rallies.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Terror: OVRA in Italy, Gestapo/SS and camps in Germany.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "One-party rule, censorship, youth indoctrination and state economic control.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Similarities: ultranationalism, dictatorship, anti-communism, militarism.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Difference: German racial antisemitism was central; Italian fascism was less racialised — also different seizure paths.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mussolini invited by king; Hitler legally appointed then consolidated. (b) Propaganda, terror, one-party rule. (c) Similar totalitarianism; Nazism uniquely racial.",
            commonErrors: ["Treating the two regimes as identical or ignoring their different paths to power."],
          },
        },
      ],
    },
  ],
};
