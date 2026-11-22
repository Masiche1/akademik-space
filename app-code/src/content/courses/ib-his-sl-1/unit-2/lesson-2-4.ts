import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "his-u2-lesson-2-4",
  code: "2-4",
  title: "Stalinism and the Soviet Union",
  goal: "I CAN explain how Stalin consolidated power and analyse the human and economic costs of Soviet totalitarianism.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Five-Year Plans", definition: "Soviet economic programmes (from 1928) setting production targets for heavy industry and collectivisation." },
    { term: "Collectivization", definition: "Stalin's policy of merging private farms into collective farms (kolkhozy), enforced 1929–1934." },
    { term: "Holodomor", definition: "The Ukrainian famine of 1932–1933, partly caused by collectivisation policy; millions died." },
    { term: "Show trials", definition: "Staged public trials of supposed traitors (e.g. the Moscow Trials 1936–38) used to justify purges." },
    { term: "Gulag", definition: "System of Soviet labour camps (Glavnoe Upravlenie Lagerei) holding millions of prisoners." },
    { term: "Comintern", definition: "Communist International (1919–1943), the organisation coordinating communist parties worldwide under Soviet direction." },
  ],
  concepts: [
    {
      id: "his-u2-rise-of-stalin",
      title: "The rise of Stalin",
      skill: "Explain how Stalin won the power struggle after Lenin and evaluate the economic policies of the Five-Year Plans and collectivisation.",
      lesson: {
        sections: [
          {
            heading: "The power struggle",
            body: "After Lenin's death in 1924, **Stalin** outmanoeuvred rivals — Trotsky, Zinoviev and Kamenev — through control of the party apparatus, the position of General Secretary and skilful alliances. By 1929 he was undisputed leader. He abandoned Lenin's New Economic Policy and launched a drive to rapid industrialisation and the elimination of the kulaks (wealthier peasants).",
          },
          {
            heading: "Five-Year Plans and industrialisation",
            body: "The **First Five-Year Plan** (1928–32) set ambitious targets for heavy industry: steel, coal, electricity and machinery. Output rose dramatically but at huge human cost — long hours, shortages, and living standards fell for workers and consumers. The plans prioritised defence and heavy industry over consumer goods and agriculture.",
          },
          {
            heading: "Collectivisation and famine",
            body: "**Collectivisation** (from 1929) forced peasants onto collective farms and seized grain for urban and export needs. Resistance was met with deportations and violence; kulaks were 'liquidated as a class'. The policy caused catastrophic famines — most notoriously the **Holodomor** in Ukraine (1932–33), where millions starved, often amid deliberate state requisition.",
          },
        ],
        keyFormulas: [
          { name: "Power base", statement: "General Secretary + party apparatus → control of appointments and policy" },
          { name: "Plan logic", statement: "Heavy industry priority → industrial growth at cost of consumption/agriculture" },
          { name: "Collectivisation cost", statement: "Grain requisition → famine (Holodomor) + deportation of kulaks" },
        ],
        workedExample: {
          problem: "Explain one reason why Stalin was able to defeat his rivals after Lenin's death.",
          solution: "As General Secretary, Stalin controlled party appointments and organisation, allowing him to build a loyal network of supporters — an advantage Trotsky and the ideological rivals lacked.",
        },
      },
      questions: [
        {
          id: "his-u2-stq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Stalin's main institutional power base after Lenin's death was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The position of General Secretary of the Communist Party" },
              { id: "b", text: "The presidency of the USSR" },
              { id: "c", text: "The Comintern headquarters" },
              { id: "d", text: "Control of the Red Army" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Stalin's power base", statement: "General Secretary controlled party organisation and appointments." },
            ],
            steps: [
              { reasoning: "Stalin's power derived from his role as General Secretary, which controlled the party apparatus.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** General Secretary of the Communist Party",
            commonErrors: ["Assuming military command or formal state office was the key — party control mattered more."],
          },
        },
        {
          id: "his-u2-stq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two aims of Stalin's Five-Year Plans.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Five-Year Plans", statement: "Rapid heavy-industrial growth and state control of the economy." },
            ],
            steps: [
              { reasoning: "Rapid industrialisation: massive expansion of steel, coal, electricity and machinery to catch up with the West.", marks: 1, markCode: "M" },
              { reasoning: "Collectivisation of agriculture to supply grain and control the peasantry.", marks: 1, markCode: "M" },
              { reasoning: "Implicit defence/self-sufficiency: building heavy industry also prepared the USSR for war.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rapid heavy-industrial expansion and the collectivisation of agriculture, with defence benefits.",
            commonErrors: ["Listing achievements rather than aims of the plans."],
          },
        },
        {
          id: "his-u2-stq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the causes and consequences of the Holodomor famine of 1932–1933.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Holodomor", statement: "Collectivisation + grain requisition + state policy → mass starvation in Ukraine." },
            ],
            steps: [
              { reasoning: "Cause: collectivisation and grain quotas required the state to seize Ukrainian grain for cities and exports.", marks: 1, markCode: "M" },
              { reasoning: "Resistance to collectivisation and dekulakisation worsened rural conditions and reduced production.", marks: 1, markCode: "M" },
              { reasoning: "Consequences: millions starved; the famine also broke Ukrainian national resistance and consolidated Soviet control.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a man-made famine with demographic and political consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collectivisation and grain requisition caused the famine; millions died and Ukrainian resistance was crushed.",
            commonErrors: ["Treating the famine as purely natural or denying state responsibility."],
          },
        },
        {
          id: "his-u2-stq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the economic impact of the Five-Year Plans on the Soviet Union.",
          parts: [
            { label: "a", prompt: "Identify two sectors targeted by the First Five-Year Plan.", marks: 2 },
            { label: "b", prompt: "Explain how the plans transformed Soviet industry.", marks: 3 },
            { label: "c", prompt: "Evaluate the costs of rapid industrialisation for Soviet society.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plan impact", statement: "Industrial growth + consumer sacrifice + agricultural disruption = polarised outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "Heavy industry: steel, coal, electricity and machinery.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both sectors identified (or agriculture via collectivisation).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Production targets drove rapid expansion of heavy industry, especially in the Urals and new industrial cities.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State planning replaced market allocation, prioritising defence and capital goods.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "By the late 1930s the USSR had become a major industrial power.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Costs: shortages of consumer goods, long hours and falling living standards for workers and peasants.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Agriculture suffered through collectivisation, contributing to famine and rural impoverishment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: growth achieved but at severe human cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Heavy industry, agriculture. (b) Rapid industrial expansion via state planning. (c) Consumer deprivation and agricultural catastrophe.",
            commonErrors: ["One-sided answers ignoring the human costs of the plans."],
          },
        },
        {
          id: "his-u2-stq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Stalin's main rivals in the power struggle after Lenin's death included:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Churchill, Roosevelt and de Gaulle" },
              { id: "b", text: "Napoleon, Hitler and Mussolini" },
              { id: "c", text: "Trotsky, Zinoviev and Kamenev" },
              { id: "d", text: "Lenin, Marx and Engels" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Stalin's rivals", statement: "Trotsky, Zinoviev and Kamenev contested Stalin's rise to power." },
            ],
            steps: [
              { reasoning: "Trotsky, Zinoviev and Kamenev were Stalin's principal rivals within the party.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Trotsky, Zinoviev and Kamenev",
            commonErrors: ["Naming figures from other eras or countries."],
          },
        },
        {
          id: "his-u2-stq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'kulaks' were:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soviet factory workers" },
              { id: "b", text: "Members of the Red Army" },
              { id: "c", text: "Wealthier peasants targeted during collectivisation" },
              { id: "d", text: "Foreign diplomats in Moscow" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kulaks", statement: "Better-off peasants 'liquidated as a class' during collectivisation." },
            ],
            steps: [
              { reasoning: "Kulaks were prosperous peasants who resisted collectivisation and were deported or killed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Wealthier peasants targeted in collectivisation",
            commonErrors: ["Confusing kulaks with workers or soldiers."],
          },
        },
        {
          id: "his-u2-stq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The First Five-Year Plan was launched in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1936" },
              { id: "b", text: "1924" },
              { id: "c", text: "1917" },
              { id: "d", text: "1928" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "First Five-Year Plan", statement: "Launched 1928 to drive rapid heavy industrialisation." },
            ],
            steps: [
              { reasoning: "The First Five-Year Plan began in 1928.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1928",
            commonErrors: ["Confusing it with Lenin's death (1924) or the purges (1930s)."],
          },
        },
        {
          id: "his-u2-stq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Collectivisation' under Stalin meant:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Merging private farms into collective farms (kolkhozy)" },
              { id: "b", text: "Building collective housing" },
              { id: "c", text: "Nationalising all foreign trade" },
              { id: "d", text: "Sharing factory profits equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collectivisation", statement: "Forced merger of private farms into state-directed collective farms from 1929." },
            ],
            steps: [
              { reasoning: "Collectivisation consolidated peasant land into kolkhozy under state control.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Merging private farms into collective farms",
            commonErrors: ["Confusing it with industrial nationalisation."],
          },
        },
        {
          id: "his-u2-stq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why the Five-Year Plans prioritised heavy industry over consumer goods?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To satisfy peasant demands" },
              { id: "b", text: "To achieve rapid industrialisation and defence self-sufficiency at the expense of consumption" },
              { id: "c", text: "To raise living standards quickly" },
              { id: "d", text: "To imitate Western consumer economies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plan priorities", statement: "Heavy industry and defence took precedence over consumer goods and living standards." },
            ],
            steps: [
              { reasoning: "Stalin prioritised steel, coal and machinery to industrialise fast and prepare for war.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rapid industrialisation and defence self-sufficiency",
            commonErrors: ["Thinking the plans aimed at raising living standards."],
          },
        },
        {
          id: "his-u2-stq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) Lenin died; (b) the First Five-Year Plan began; (c) collectivisation was launched; (d) the Holodomor famine occurred.",
          response: { type: "numeric", parts: [{ label: "Lenin dies", answer: 1924 }, { label: "First Five-Year Plan", answer: 1928 }, { label: "Collectivisation begins", answer: 1929 }, { label: "Holodomor", answer: 1932 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Stalin chronology", statement: "1924 → 1928 → 1929 → 1932–33." },
            ],
            steps: [
              { reasoning: "Lenin died January 1924.", working: "1924", marks: 1, markCode: "M" },
              { reasoning: "First Five-Year Plan began 1928.", working: "1928", marks: 1, markCode: "M" },
              { reasoning: "Collectivisation launched 1929.", working: "1929", marks: 1, markCode: "M" },
              { reasoning: "Holodomor occurred 1932–33.", working: "1932", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1924; 1928; 1929; 1932",
            commonErrors: ["Confusing the plan's start with collectivisation's."],
          },
        },
        {
          id: "his-u2-stq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Lenin's death opened the power struggle; (b) the First Five-Year Plan began; (c) the Holodomor famine struck Ukraine.",
          response: { type: "numeric", parts: [{ label: "Lenin dies", answer: 1924 }, { label: "First Five-Year Plan", answer: 1928 }, { label: "Holodomor", answer: 1932 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Stalin chronology", statement: "1924 → 1928 → 1932." },
            ],
            steps: [
              { reasoning: "Lenin died 1924.", working: "1924", marks: 1, markCode: "M" },
              { reasoning: "First Plan began 1928.", working: "1928", marks: 1, markCode: "M" },
              { reasoning: "Holodomor was 1932–33.", working: "1932", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1924; 1928; 1932",
            commonErrors: ["Dating the famine to the wrong year."],
          },
        },
        {
          id: "his-u2-stq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): Lenin's death, the First Five-Year Plan, the launch of collectivisation, the Holodomor famine.",
          response: { type: "numeric", parts: [{ label: "Lenin dies", answer: 1 }, { label: "First Five-Year Plan", answer: 2 }, { label: "Collectivisation begins", answer: 3 }, { label: "Holodomor", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Stalin chronology", statement: "1924 → 1928 → 1929 → 1932." },
            ],
            steps: [
              { reasoning: "Lenin died 1924 — earliest.", working: "1924", marks: 1, markCode: "M" },
              { reasoning: "First Plan began 1928 — second.", working: "1928", marks: 1, markCode: "M" },
              { reasoning: "Collectivisation 1929 — third.", working: "1929", marks: 1, markCode: "M" },
              { reasoning: "Holodomor 1932 — latest.", working: "1932", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lenin 1, First Plan 2, collectivisation 3, Holodomor 4",
            commonErrors: ["Placing collectivisation before the First Plan."],
          },
        },
        {
          id: "his-u2-stq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the First Five-Year Plan concluded; (b) the Second Five-Year Plan began; (c) the year the Holodomor peaked.",
          response: { type: "numeric", parts: [{ label: "First Plan ends", answer: 1932 }, { label: "Second Plan begins", answer: 1933 }, { label: "Holodomor peak", answer: 1933 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Plan chronology", statement: "First Plan 1928–32; Second Plan 1933; Holodomor peaked 1933." },
            ],
            steps: [
              { reasoning: "First Plan ran 1928–1932.", working: "1932", marks: 1, markCode: "M" },
              { reasoning: "Second Plan began 1933.", working: "1933", marks: 1, markCode: "M" },
              { reasoning: "The Holodomor's worst year was 1933.", working: "1933", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1932; 1933; 1933",
            commonErrors: ["Confusing the First and Second Plan dates."],
          },
        },
        {
          id: "his-u2-stq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the duration of the First Five-Year Plan in years (1928–32); (b) the number of years between Lenin's death (1924) and collectivisation (1929); (c) between Stalin's consolidation (1929) and the Holodomor (1932).",
          response: { type: "numeric", parts: [{ label: "First Plan duration", answer: 4 }, { label: "Lenin to collectivisation", answer: 5 }, { label: "Consolidation to Holodomor", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract earlier year from later year." },
            ],
            steps: [
              { reasoning: "$1932 - 1928$.", working: "1932 - 1928 = 4", marks: 1, markCode: "M" },
              { reasoning: "$1929 - 1924$.", working: "1929 - 1924 = 5", marks: 1, markCode: "M" },
              { reasoning: "$1932 - 1929$.", working: "1932 - 1929 = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4; 5; 3 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u2-stq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how Stalin outmanoeuvred his rivals after Lenin's death.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stalin's rise", statement: "Party apparatus control + General Secretary role + alliances defeated rivals." },
            ],
            steps: [
              { reasoning: "As General Secretary, Stalin controlled party appointments and organisation.", marks: 1, markCode: "M" },
              { reasoning: "He built a loyal network of supporters while rivals (Trotsky, Zinoviev, Kamenev) were isolated.", marks: 1, markCode: "M" },
              { reasoning: "He formed temporary alliances then turned on them — using Lenin's legacy selectively.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: by 1929 Stalin was undisputed leader.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Party control + alliances + isolation of rivals made Stalin undisputed leader by 1929.",
            commonErrors: ["Attributing his rise to military command or personal charisma alone."],
          },
        },
        {
          id: "his-u2-stq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the economic impact of the Five-Year Plans on the Soviet Union.",
          parts: [
            { label: "a", prompt: "Identify two sectors targeted by the plans.", marks: 2 },
            { label: "b", prompt: "Explain how the plans transformed Soviet industry.", marks: 3 },
            { label: "c", prompt: "Evaluate the costs of rapid industrialisation for Soviet society.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plan impact", statement: "Industrial growth + consumer sacrifice + agricultural disruption = polarised outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: heavy industry (steel, coal, electricity) and agriculture via collectivisation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two sectors identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Production targets drove rapid expansion of heavy industry in new industrial regions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State planning replaced markets, prioritising defence and capital goods.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "By the late 1930s the USSR was a major industrial power.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Costs: shortages of consumer goods, long hours, falling living standards.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Agriculture suffered through collectivisation, causing famine and rural impoverishment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighs industrial achievement against human costs in judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Heavy industry, agriculture. (b) Rapid industrial expansion via state planning. (c) Consumer deprivation and agricultural catastrophe.",
            commonErrors: ["One-sided answers ignoring the human costs."],
          },
        },
      ],
    },
    {
      id: "his-u2-soviet-totalitarianism",
      title: "Totalitarian control",
      skill: "Explain how Stalin used purges, propaganda and the gulag to control society and analyse the Soviet system's impact on economy, minorities and foreign policy.",
      lesson: {
        sections: [
          {
            heading: "Purges, terror and show trials",
            body: "From 1934, Stalin launched the **Great Purge**: party members, military officers, intellectuals and ordinary citizens were arrested by the NKVD, tried in **show trials** (e.g. the Moscow Trials 1936–38) and executed or sent to the **gulag**. Millions died; the terror consolidated absolute control and destroyed potential opposition, including much of the Red Army's officer corps before WWII.",
          },
          {
            heading: "Propaganda, censorship and the command economy",
            body: "The state controlled information through censorship, propaganda (Stalin cult, arts under Socialist Realism) and education. The **command economy** directed all production through central planning; private enterprise was abolished. Women were mobilised into the workforce (especially during WWII) yet bore double burdens of work and family; minorities faced repression, deportations (e.g. Chechens, Crimean Tatars) and Russification.",
          },
          {
            heading: "Soviet foreign policy",
            body: "The USSR promoted world revolution through the **Comintern** and supported communist movements abroad. After WWII it dominated Eastern Europe as a superpower, but before the war Stalin signed the **Nazi-Soviet Pact** (1939) — a non-aggression treaty and secret protocol dividing Eastern Europe — which bought time before Germany invaded in 1941.",
          },
        ],
        keyFormulas: [
          { name: "Totalitarian toolkit", statement: "Purges + show trials + propaganda + gulag + censorship" },
          { name: "Command economy", statement: "Central planning replaces markets; state directs all production" },
          { name: "Foreign policy arc", statement: "Comintern revolutionary export → Nazi-Soviet Pact → superpower rivalry" },
        ],
        workedExample: {
          problem: "Explain one way in which show trials strengthened Stalin's control.",
          solution: "Staged confessions of 'traitors' in public trials discredited rivals, justified terror as defence of the revolution, and intimidated the population into conformity.",
        },
      },
      questions: [
        {
          id: "his-u2-svq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'gulag' was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soviet secret police organisation" },
              { id: "b", text: "Type of collective farm" },
              { id: "c", text: "Soviet five-year economic plan" },
              { id: "d", text: "System of labour camps holding millions of prisoners" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gulag", statement: "Soviet network of forced-labour camps." },
            ],
            steps: [
              { reasoning: "The gulag was the system of labour camps where purged prisoners performed forced labour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** System of labour camps",
            commonErrors: ["Confusing the gulag with the NKVD secret police."],
          },
        },
        {
          id: "his-u2-svq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two methods the Soviet state used to control information and dissent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Soviet control", statement: "Censorship, propaganda, show trials, terror and education." },
            ],
            steps: [
              { reasoning: "Censorship and propaganda: state control of media, arts (Socialist Realism) and a Stalin cult shaped public information.", marks: 1, markCode: "M" },
              { reasoning: "Terror: purges, NKVD surveillance, show trials and the gulag punished or intimidated dissenters.", marks: 1, markCode: "M" },
              { reasoning: "Education and indoctrination reinforced loyalty from an early age.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Censorship/propaganda and terror (purges, show trials, gulag), reinforced by education.",
            commonErrors: ["Listing economic policies rather than methods of social control."],
          },
        },
        {
          id: "his-u2-svq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the impact of the purges on Soviet society and the military.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purge impact", statement: "Eliminated opposition and talent; weakened military leadership before WWII." },
            ],
            steps: [
              { reasoning: "Society: millions were arrested, exiled or killed; fear paralysed independent thought and loyalty was demanded absolutely.", marks: 1, markCode: "M" },
              { reasoning: "Show trials provided public justification and demonstrated the regime's reach.", marks: 1, markCode: "M" },
              { reasoning: "Military: purge of the officer corps (1937–38) decapitated leadership, weakening the Red Army on the eve of war.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: totalitarian consolidation at the cost of human lives and military effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Society terrorised; military leadership destroyed — control achieved at severe cost.",
            commonErrors: ["Ignoring the purge's damage to the Red Army before 1941."],
          },
        },
        {
          id: "his-u2-svq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine Stalin's foreign policy between 1924 and 1941.",
          parts: [
            { label: "a", prompt: "Identify two instruments of Soviet foreign policy under Stalin.", marks: 2 },
            { label: "b", prompt: "Explain the role of the Comintern in promoting communism abroad.", marks: 3 },
            { label: "c", prompt: "Evaluate the Nazi-Soviet Pact of 1939.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Soviet foreign policy", statement: "Revolutionary export via Comintern + pragmatic pacts for state security." },
            ],
            steps: [
              { part: "a", reasoning: "Comintern and diplomatic/military pacts (e.g. with France, then Germany).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two instruments identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The Comintern coordinated communist parties worldwide, funding and directing them under Soviet control.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It aimed to spread revolution and extend Soviet influence through subversion and party discipline.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It also served Soviet state interests, subordinating foreign parties to Moscow's line.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Arguments for: bought time to rearm and avoided a two-front war after Western appeasement failed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Arguments against: enabled Hitler to invade Poland and western Europe; secret protocol divided Eastern Europe.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on whether the pact was prudent or disastrous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Comintern, pacts. (b) Directed world communist parties for Soviet ends. (c) Pragmatic buffer or enabler of Hitler's aggression — contested judgement.",
            commonErrors: ["Treating the pact as an alliance of equals rather than a cynical tactical move."],
          },
        },
        {
          id: "his-u2-svq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Moscow Trials (1936–38) were:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elections for the Supreme Soviet" },
              { id: "b", text: "Staged public trials of supposed traitors used to justify purges" },
              { id: "c", text: "Military parades celebrating Soviet victories" },
              { id: "d", text: "Diplomatic negotiations with the West" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Moscow Trials", statement: "Show trials producing public confessions to legitimise the Great Purge." },
            ],
            steps: [
              { reasoning: "The Moscow Trials were staged proceedings where defendants confessed to fabricated crimes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Staged trials justifying purges",
            commonErrors: ["Thinking they were genuine judicial proceedings."],
          },
        },
        {
          id: "his-u2-svq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The NKVD was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The propaganda ministry" },
              { id: "b", text: "The Soviet secret police responsible for arrests and repression" },
              { id: "c", text: "The Red Army high command" },
              { id: "d", text: "The Soviet economic planning agency" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NKVD", statement: "Soviet secret police conducting surveillance, arrests and repression." },
            ],
            steps: [
              { reasoning: "The NKVD was the secret police that arrested and processed purged citizens.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Soviet secret police",
            commonErrors: ["Confusing NKVD with the Comintern or Red Army."],
          },
        },
        {
          id: "his-u2-svq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Comintern was established to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organise the Red Army" },
              { id: "b", text: "Negotiate with capitalist powers" },
              { id: "c", text: "Trade between Soviet republics" },
              { id: "d", text: "Coordinate communist parties worldwide under Soviet direction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Comintern", statement: "Communist International (1919–1943) directing world communist parties under Moscow's control." },
            ],
            steps: [
              { reasoning: "The Comintern coordinated and directed communist parties across the world.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Coordinate world communist parties",
            commonErrors: ["Confusing it with an economic or military body."],
          },
        },
        {
          id: "his-u2-svq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Socialist Realism' was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Soviet economic policy" },
              { id: "b", text: "A type of collective farm" },
              { id: "c", text: "A military strategy" },
              { id: "d", text: "The state-prescribed artistic style glorifying workers and the revolution" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Socialist Realism", statement: "Official art doctrine depicting heroic workers and communist ideals." },
            ],
            steps: [
              { reasoning: "Socialist Realism was the mandated artistic style serving state propaganda.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** State-prescribed heroic art style",
            commonErrors: ["Confusing it with economic or military doctrines."],
          },
        },
        {
          id: "his-u2-svq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why the purges weakened the USSR before WWII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They improved relations with the West" },
              { id: "b", text: "They decapitated military leadership and created a climate of fear that paralysed initiative" },
              { id: "c", text: "They eliminated potential rivals and strengthened the army" },
              { id: "d", text: "They abolished the secret police" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purge impact", statement: "Purge of officers and terror weakened the military and society on the eve of war." },
            ],
            steps: [
              { reasoning: "The 1937–38 purge decapitated the Red Army's officer corps and bred caution and fear.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decapitated leadership and bred fear",
            commonErrors: ["Thinking purges strengthened the military."],
          },
        },
        {
          id: "his-u2-svq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) the Great Purge began; (b) the Moscow Trials occurred; (c) the Nazi-Soviet Pact was signed; (d) the Comintern was dissolved.",
          response: { type: "numeric", parts: [{ label: "Great Purge begins", answer: 1934 }, { label: "Moscow Trials", answer: 1936 }, { label: "Nazi-Soviet Pact", answer: 1939 }, { label: "Comintern dissolved", answer: 1943 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Soviet chronology", statement: "1934 → 1936 → 1939 → 1943." },
            ],
            steps: [
              { reasoning: "Great Purge began 1934.", working: "1934", marks: 1, markCode: "M" },
              { reasoning: "Moscow Trials ran 1936–38.", working: "1936", marks: 1, markCode: "M" },
              { reasoning: "Nazi-Soviet Pact August 1939.", working: "1939", marks: 1, markCode: "M" },
              { reasoning: "Comintern dissolved 1943.", working: "1943", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1934; 1936; 1939; 1943",
            commonErrors: ["Confusing purge and trial dates with the Pact."],
          },
        },
        {
          id: "his-u2-svq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Great Purge began; (b) the Nazi-Soviet Pact was signed; (c) the Comintern was dissolved.",
          response: { type: "numeric", parts: [{ label: "Great Purge begins", answer: 1934 }, { label: "Nazi-Soviet Pact", answer: 1939 }, { label: "Comintern dissolved", answer: 1943 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Soviet chronology", statement: "1934 → 1939 → 1943." },
            ],
            steps: [
              { reasoning: "Great Purge 1934.", working: "1934", marks: 1, markCode: "M" },
              { reasoning: "Nazi-Soviet Pact 1939.", working: "1939", marks: 1, markCode: "M" },
              { reasoning: "Comintern dissolved 1943.", working: "1943", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1934; 1939; 1943",
            commonErrors: ["Confusing the Pact year with the purge years."],
          },
        },
        {
          id: "his-u2-svq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): the founding of the Comintern, Stalin's consolidation as leader, the start of the Great Purge, the Nazi-Soviet Pact, the dissolution of the Comintern.",
          response: { type: "numeric", parts: [{ label: "Comintern founded", answer: 1 }, { label: "Stalin consolidated", answer: 2 }, { label: "Great Purge begins", answer: 3 }, { label: "Nazi-Soviet Pact", answer: 4 }, { label: "Comintern dissolved", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Soviet chronology", statement: "1919 → 1929 → 1934 → 1939 → 1943." },
            ],
            steps: [
              { reasoning: "Comintern founded 1919 — earliest.", working: "1919", marks: 1, markCode: "M" },
              { reasoning: "Stalin consolidated 1929 — second.", working: "1929", marks: 1, markCode: "M" },
              { reasoning: "Great Purge began 1934 — third.", working: "1934", marks: 1, markCode: "M" },
              { reasoning: "Nazi-Soviet Pact 1939 — fourth.", working: "1939", marks: 1, markCode: "M" },
              { reasoning: "Comintern dissolved 1943 — latest.", working: "1943", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Comintern 1, Stalin 2, Purge 3, Pact 4, Comintern dissolved 5",
            commonErrors: ["Placing the Pact before the Purge."],
          },
        },
        {
          id: "his-u2-svq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Comintern was founded; (b) it was dissolved; (c) the number of years it existed.",
          response: { type: "numeric", parts: [{ label: "Comintern founded", answer: 1919 }, { label: "Comintern dissolved", answer: 1943 }, { label: "Years in existence", answer: 24 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Comintern dates", statement: "Founded 1919, dissolved 1943 — 24 years." },
            ],
            steps: [
              { reasoning: "The Comintern was founded in 1919.", working: "1919", marks: 1, markCode: "M" },
              { reasoning: "It was dissolved in 1943.", working: "1943", marks: 1, markCode: "M" },
              { reasoning: "$1943 - 1919 = 24$ years.", working: "1943 - 1919 = 24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1919; 1943; 24 years",
            commonErrors: ["Arithmetic slips or wrong founding year."],
          },
        },
        {
          id: "his-u2-svq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between the Comintern's founding (1919) and dissolution (1943); (b) between the Great Purge's start (1934) and the Nazi-Soviet Pact (1939); (c) the number of years the Moscow Trials spanned (1936–38).",
          response: { type: "numeric", parts: [{ label: "Comintern lifespan", answer: 24 }, { label: "Purge to Pact", answer: 5 }, { label: "Moscow Trials span", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract earlier year from later year." },
            ],
            steps: [
              { reasoning: "$1943 - 1919$.", working: "1943 - 1919 = 24", marks: 1, markCode: "M" },
              { reasoning: "$1939 - 1934$.", working: "1939 - 1934 = 5", marks: 1, markCode: "M" },
              { reasoning: "$1938 - 1936$.", working: "1938 - 1936 = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24; 5; 3 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u2-svq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how show trials strengthened Stalin's control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Show trials", statement: "Staged confessions discredited rivals, justified terror and intimidated the population." },
            ],
            steps: [
              { reasoning: "Public confessions of 'traitors' discredited and destroyed rivals like Trotsky's associates.", marks: 1, markCode: "M" },
              { reasoning: "Trials justified terror as defence of the revolution against alleged plots.", marks: 1, markCode: "M" },
              { reasoning: "The spectacle intimidated citizens into conformity and self-censorship.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: show trials were a tool of psychological and political control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Staged confessions eliminated rivals, legitimised terror and intimidated the population.",
            commonErrors: ["Treating the trials as genuine judicial proceedings."],
          },
        },
        {
          id: "his-u2-svq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the impact of totalitarian control on Soviet society.",
          parts: [
            { label: "a", prompt: "Describe the methods used to control society and information.", marks: 3 },
            { label: "b", prompt: "Explain the impact of Soviet policies on minorities and women.", marks: 3 },
            { label: "c", prompt: "Evaluate Stalin's foreign policy arc from Comintern to Nazi-Soviet Pact.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Totalitarian society", statement: "Purges + censorship + command economy; repression of minorities; pragmatic foreign policy." },
            ],
            steps: [
              { part: "a", reasoning: "Censorship and propaganda: state control of media, arts (Socialist Realism), Stalin cult.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Terror: NKVD surveillance, purges, show trials, gulag.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Command economy: central planning replaced markets; education indoctrinated loyalty.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Minorities faced repression, deportations and Russification.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Women were mobilised into the workforce but bore double burdens of work and family.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ethnic minorities and 'enemies of the people' suffered disproportionately.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Comintern exported revolution; Nazi-Soviet Pact (1939) was pragmatic non-aggression that bought time.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: foreign policy shifted from ideological export to state security pragmatism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Censorship, terror, command economy. (b) Minorities deported; women double-burdened. (c) Revolutionary export → pragmatic pact.",
            commonErrors: ["Ignoring the human dimension of totalitarian control."],
          },
        },
      ],
    },
  ],
};
