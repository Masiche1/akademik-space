import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "langa-u5-lesson-5-1",
  code: "5-1",
  title: "Structuring Comparative Arguments",
  goal: "I CAN structure a comparative essay with a comparative thesis, integrated paragraphs and a balanced conclusion.",
  standards: ["Comparative writing", "Essay structure", "Argument"],
  vocabulary: [
    { term: "Comparative thesis", definition: "A claim about the relationship between two texts — not just a shared topic." },
    { term: "Integrated paragraph", definition: "A paragraph that discusses both texts on the same point before advancing." },
    { term: "Point of comparison", definition: "A specific aspect (theme, technique, structure) on which both texts are analysed." },
    { term: "Convergence", definition: "Where texts reach similar conclusions through different means." },
    { term: "Divergence", definition: "Where texts reach different conclusions about the same theme." },
    { term: "Comparative conclusion", definition: "A final judgement on how the texts relate — resolving the comparison, not summarising both." },
  ],
  concepts: [
    {
      id: "langa-u5-structure",
      title: "Comparative essay structure",
      skill: "Organise a comparative essay so that each paragraph integrates both texts on a shared point of comparison.",
      lesson: {
        sections: [
          {
            heading: "The comparative thesis",
            body: "The thesis must be **comparative** — it claims something about the relationship between texts, not just a shared topic. 'Both poems are about grief' is not a thesis; 'the first figures grief as enclosure, the second as weather — one makes loss a place, the other a force' is.",
          },
          {
            heading: "Integrated paragraphs",
            body: "Each body paragraph should be built around a **point of comparison**: a theme, technique or structural feature. Within the paragraph, discuss Text A's treatment, then Text B's — 'where A does X, B does Y'. The paragraph's topic sentence should name the point of comparison, not just one text.",
          },
          {
            heading: "Ordering the argument",
            body: "Sequence paragraphs to build a cumulative comparative argument: from surface features (imagery, diction) to deeper structures (theme, context), or from convergence to divergence. The essay should feel like one sustained comparison, not alternating summaries.",
          },
        ],
        keyFormulas: [
          { name: "Comparative thesis test", statement: "Does it claim a relationship between texts, not just a shared topic?" },
          { name: "Paragraph formula", statement: "Point of comparison + Text A treatment + Text B treatment + comparative analysis" },
        ],
        workedExample: {
          problem: "Structure a comparative essay on two poems about grief: one figures it as a house, the other as weather.",
          solution: "Thesis: 'Both poems figure grief through extended metaphor, but diverge fundamentally — one makes loss a place to inhabit, the other a force to endure.' P1: the metaphors themselves (house vs weather). P2: the speaker's agency (trapped vs exposed). P3: the endings (no doors vs leaves when it leaves). Conclusion: grief as condition vs event.",
        },
      },
      questions: [
        {
          id: "langa-u5-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a comparative thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both poems are about grief." },
              { id: "b", text: "The first figures grief as a house, the second as weather — loss as place versus loss as force." },
              { id: "c", text: "The poems use different metaphors." },
              { id: "d", text: "Both poems are short." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative thesis", statement: "Claims a relationship between texts, not just a shared topic." },
            ],
            steps: [
              { reasoning: "Option (b) claims a specific comparative relationship — enclosure vs force.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The comparative thesis",
          },
        },
        {
          id: "langa-u5-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'integrated paragraphs' are essential in comparative writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated paragraphs", statement: "Each paragraph addresses both texts on the same point — the comparison is performed, not implied." },
            ],
            steps: [
              { reasoning: "Separate paragraphs for each text produce two essays, not one comparison — the reader must do the work.", marks: 1, markCode: "M" },
              { reasoning: "Integrated paragraphs make the relationship visible: 'where A does X, B does Y' shows convergence or divergence in real time.", marks: 1, markCode: "M" },
              { reasoning: "Integration also ensures balance — each text gets attention at each stage, preventing one from dominating.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Integrated paragraphs perform the comparison explicitly — paired evidence, visible relationships, balanced treatment.",
            commonErrors: ["Writing alternating paragraphs that never actually compare."],
          },
        },
        {
          id: "langa-u5-q3",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "Two Doors",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The door was neither open nor closed.\nShe stood before it for an hour,\nher hand on the handle,\nfeeling the wood's cool indifference.\n\nPOEM B: The door opened before she touched it.\n'Come in,' said the house.\n'Sit down. Stay.'",
          },
          stem: "Write a comparative thesis and outline three integrated paragraph topic sentences for an essay on these poems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative essay planning", statement: "Thesis + integrated topic sentences." },
            ],
            steps: [
              { reasoning: "Thesis example: 'Both poems figure a threshold as a test of agency — but where the first makes the door indifferent, the second makes it welcoming; the poems diverge on whether thresholds wait for us or invite us.'", marks: 2, markCode: "A" },
              { reasoning: "P1 topic sentence: the door's agency — A's 'cool indifference' versus B's 'opened before she touched it' — passivity versus invitation.", marks: 1, markCode: "M" },
              { reasoning: "P2 topic sentence: the speaker's response — A's 'hand on the handle' (touching without acting) versus B's being told 'Come in' (receiving instruction).", marks: 1, markCode: "M" },
              { reasoning: "P3 topic sentence: the endings — A's unresolved standoff versus B's imperative 'Stay' — open question versus closed command.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Thesis: threshold as test of agency — indifferent vs welcoming. P1 door's agency, P2 speaker's response, P3 endings.",
            commonErrors: ["Topic sentences that analyse each poem separately without pairing."],
          },
        },
        {
          id: "langa-u5-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write the introduction and conclusion of a comparative essay on the following paired texts (you may outline the body paragraphs).",
          extract: {
            title: "Two Crossings (reprise)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\nI cross it anyway.\nThe toll is one memory\nat a time.\n\nPOEM B: The old road ended\nat the river's edge.\nWe built a ferry instead —\ntwo planks and a rope.\nMy father called it progress.\nI call it a rope\nthat will hold until it doesn't.",
          },
          parts: [
            { label: "a", prompt: "Write the introduction (3-4 sentences ending with a comparative thesis).", marks: 3 },
            { label: "b", prompt: "Outline three integrated body paragraph topic sentences.", marks: 3 },
            { label: "c", prompt: "Write the conclusion (2-3 sentences resolving the comparison).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative essay architecture", statement: "Introduction with thesis + integrated paragraphs + resolving conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Introduction example: 'Both poems treat crossing a river as a problem of continuity — but where the first restores a bridge and the second builds a ferry, they diverge on what crossing costs. I will argue that both make crossing necessary but disagree fundamentally about its price.'", marks: 3, markCode: "A" },
              { part: "b", reasoning: "P1: the solutions — A's restored bridge (impersonal, official) versus B's improvised ferry (communal, fragile).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P2: attitudes to change — A's carpenters 'insist' sameness; B's father 'calls it progress' — denial versus celebration.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P3: the cost — A's 'toll is one memory at a time' (internal, cumulative) versus B's 'rope that will hold until it doesn't' (external, precarious).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion example: 'The poems converge on crossing as necessary but diverge on its cost — A makes it a debt paid in memory, B makes it a rope that may fail; together they suggest that every crossing is both a continuation and a risk.'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Intro: continuity problem, divergent costs. P1 solutions, P2 attitudes, P3 costs. Conclusion: crossing as both continuation and risk.",
            commonErrors: ["Introduction that summarises both poems; conclusion that repeats rather than resolves."],
          },
        },
        {
          id: "langa-u5-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'point of comparison' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The title chosen for the essay" },
              { id: "b", text: "A shared aspect, such as a theme or technique, on which both texts are analysed" },
              { id: "c", text: "The number of paragraphs in the essay" },
              { id: "d", text: "The author's biographical background" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Point of comparison", statement: "A specific shared aspect on which both texts are analysed." },
            ],
            steps: [
              { reasoning: "A point of comparison is the shared aspect — theme, technique or structure — that pairs the texts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A shared aspect both texts are analysed on",
          },
        },
        {
          id: "langa-u5-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sequence of paragraphs best builds a cumulative comparative argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Imagery, then structure, then theme and context" },
              { id: "b", text: "All of Text A's features, then all of Text B's" },
              { id: "c", text: "Paragraphs in the order the texts were published" },
              { id: "d", text: "Whatever idea occurs to the writer first" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ordering the argument", statement: "Sequence from surface features to deeper structures so significance accumulates." },
            ],
            steps: [
              { reasoning: "A cumulative argument moves from surface features to deeper structures — imagery to theme to context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Surface to depth",
          },
        },
        {
          id: "langa-u5-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'Both poems are about grief' not a comparative thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it is grammatically incorrect" },
              { id: "b", text: "Because it states a shared topic rather than claiming a relationship between the texts" },
              { id: "c", text: "Because it names only one poem" },
              { id: "d", text: "Because it is too long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative thesis", statement: "Must claim a relationship between texts, not just a shared topic." },
            ],
            steps: [
              { reasoning: "A comparative thesis claims how the texts relate — convergence, divergence, different means to similar ends.", marks: 1, markCode: "M" },
              { reasoning: "'Both poems are about grief' only states a shared topic, so choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shared topic, not relationship",
          },
        },
        {
          id: "langa-u5-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The topic sentence of an integrated paragraph should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Name the point of comparison covering both texts" },
              { id: "b", text: "Name only Text A's main idea" },
              { id: "c", text: "Repeat the essay's introduction verbatim" },
              { id: "d", text: "Quote the most famous line from either text" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated paragraph", statement: "Topic sentence names the shared point of comparison, not one text." },
            ],
            steps: [
              { reasoning: "An integrated paragraph is organised around a shared point of comparison, so its topic sentence must name that point.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Names the point of comparison",
          },
        },
        {
          id: "langa-u5-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Convergence' in comparative writing means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Texts reach similar conclusions through different means" },
              { id: "b", text: "Texts are identical in every respect" },
              { id: "c", text: "Texts reach opposite conclusions about the same theme" },
              { id: "d", text: "Texts are written in the same genre" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Convergence", statement: "Similar conclusions reached through different means." },
            ],
            steps: [
              { reasoning: "Convergence means the texts arrive at similar conclusions by different routes — different means, similar ends.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Similar conclusions, different means",
          },
        },
        {
          id: "langa-u5-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A draft essay analyses Text A in four full paragraphs and Text B in a single concluding sentence. The most important structural problem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It lacks a comparative thesis" },
              { id: "b", text: "It is imbalanced — Text B is never analysed at each point of comparison" },
              { id: "c", text: "It uses too many quotations" },
              { id: "d", text: "Its conclusion is too short" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balance", statement: "Each text must receive equal analytical depth at each point of comparison." },
            ],
            steps: [
              { reasoning: "Analysing one text in four paragraphs and the other in one sentence breaks the pairing that makes comparison possible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct — the essay is imbalanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Imbalance — Text B is not analysed",
          },
        },
        {
          id: "langa-u5-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Rewrite this topic sentence so it names a point of comparison covering both texts: 'Poem A uses an extended metaphor of a house.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Point of comparison", statement: "A topic sentence must pair both texts on the same aspect." },
            ],
            steps: [
              { reasoning: "Identify the shared aspect: both poems use an extended metaphor to figure loss — the house in Poem A and whatever figure Poem B uses.", marks: 1, markCode: "M" },
              { reasoning: "Draft a paired sentence, for example: 'Both poems extend a single metaphor to figure loss — Poem A makes it a house to inhabit, Poem B makes it weather to endure.'", marks: 1, markCode: "M" },
              { reasoning: "The rewrite names the point of comparison (extended metaphor of loss) and covers both texts, so it earns full marks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both poems extend a single metaphor to figure loss — A a house, B weather.",
            commonErrors: ["Adding a sentence about Poem B without integrating it into the same point."],
          },
        },
        {
          id: "langa-u5-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "You must compare two texts on the theme of freedom in five paragraphs. Explain how you would sequence them so the argument escalates from surface features to deeper significance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ordering the argument", statement: "Sequence paragraphs so significance accumulates from surface to depth." },
            ],
            steps: [
              { reasoning: "P1: imagery and diction — how each text figures freedom concretely (e.g. open doors versus open skies).", marks: 1, markCode: "M" },
              { reasoning: "P2: structure and form — how each text's organisation enacts freedom or its limits (stanzas, pacing, endings).", marks: 1, markCode: "M" },
              { reasoning: "P3: character and voice — what freedom costs or enables for each speaker.", marks: 1, markCode: "M" },
              { reasoning: "P4–P5: theme, context and ideology — what each text's treatment of freedom implies about power, society or the self; the deepest paragraphs carry the thesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Surface (imagery/diction) → form/structure → character/voice → theme/context/ideology — significance accumulates toward the thesis.",
            commonErrors: ["Sequencing by whichever text is being discussed rather than by depth of point."],
          },
        },
        {
          id: "langa-u5-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish 'convergence' from 'divergence' in comparative writing, and give one example of each that could appear in an essay comparing two texts on freedom.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Convergence and divergence", statement: "Similar conclusions through different means versus different conclusions on the same theme." },
            ],
            steps: [
              { reasoning: "Convergence: both texts reach a similar conclusion through different means — e.g. both end with an open door, one literal, one metaphorical.", marks: 1, markCode: "M" },
              { reasoning: "Divergence: both texts address the same theme but reach different conclusions — e.g. one figures freedom as escape, the other as responsibility.", marks: 1, markCode: "M" },
              { reasoning: "The essay's comparative thesis should claim which relationship holds — convergence, divergence, or both at different levels.", marks: 1, markCode: "M" },
              { reasoning: "Examples must be comparative — each names both texts' treatments, not a feature of one text alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Convergence = similar ends through different means; divergence = different ends on the same theme. Thesis claims the relationship.",
            commonErrors: ["Describing one text's feature without pairing it with the other."],
          },
        },
        {
          id: "langa-u5-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "You are given two texts: a political speech celebrating a leader's vision and a poem that quietly questions authority. Write a comparative thesis and three point-of-comparison topic sentences for an essay on how the texts treat power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative essay planning", statement: "Thesis claims a relationship; topic sentences each name a shared point of comparison." },
            ],
            steps: [
              { reasoning: "Thesis example: 'Both texts treat power as something performed rather than possessed — the speech through public ritual, the poem through private doubt; they converge on power's theatricality but diverge on whether it persuades or isolates.'", marks: 2, markCode: "A" },
              { reasoning: "P1 topic sentence: language and register — the speech's elevated public rhetoric versus the poem's intimate, questioning voice.", marks: 1, markCode: "M" },
              { reasoning: "P2 topic sentence: imagery of power — the speech's monumental symbols versus the poem's small, domestic images of authority.", marks: 1, markCode: "M" },
              { reasoning: "P3 topic sentence: the speaker's stance — the speech's confident address versus the poem's sceptical interiority.", marks: 1, markCode: "M" },
              { reasoning: "Each topic sentence names a shared aspect and covers both texts; together they build toward the thesis.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Thesis: power as performance — converge on theatricality, diverge on effect. P1 register, P2 imagery, P3 speaker stance.",
            commonErrors: ["Topic sentences that plan to summarise each text separately."],
          },
        },
        {
          id: "langa-u5-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Two Inheritances",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: The house came with a letter — her grandmother's handwriting, forty years old, explaining which drawer held the silver and which tree marked the boundary. Reading it, she felt her grandmother standing beside her, pointing.\n\nTEXT B: The house came with a debt — the roof, the boiler, a list of repairs her grandfather never finished. Reading the list, she felt her grandfather's absence like a weight she had agreed to carry.",
          },
          stem: "Plan a comparative essay on these extracts.",
          parts: [
            { label: "a", prompt: "Write a comparative thesis (2-3 sentences).", marks: 3 },
            { label: "b", prompt: "Write three integrated paragraph topic sentences.", marks: 3 },
            { label: "c", prompt: "Write a comparative conclusion (2-3 sentences).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative essay architecture", statement: "Thesis + integrated topic sentences + resolving conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis example: 'Both extracts figure inheritance as communication across generations — but where A's letter guides and orients, B's list burdens and imprisons; the texts converge on inheritance as voice and diverge on whether that voice helps or weighs.'", marks: 3, markCode: "A" },
              { part: "b", reasoning: "P1: the form of inheritance — A's letter (narrative, guidance) versus B's list (inventory, obligation).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P2: the grandmother's presence versus the grandfather's absence — 'standing beside her, pointing' versus 'absence like a weight'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P3: agency — A's reader is guided; B's reader is assigned debt — inheritance as map versus inheritance as burden.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion example: 'The extracts converge on inheritance as an act of communication between generations but diverge on its direction — A's letter points forward, B's list pulls downward; together they ask whether what we inherit is a guide or a weight.'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Thesis: inheritance as cross-generational communication — guide vs burden. P1 form, P2 presence/absence, P3 agency. Conclusion resolves toward guide or weight.",
            commonErrors: ["Thesis that lists topics ('both about houses'); topic sentences without pairing."],
          },
        },
        {
          id: "langa-u5-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Two Journeys",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: We left before the light —\nthe road unspooling like thread\nbehind us. Every mile\nmade the leaving easier\nand the arriving harder.\n\nPOEM B: We left at noon,\nwhen the shadows were shortest.\nThe road was a straight line\nto a place we had already left\nin our heads.",
          },
          stem: "Outline a complete comparative essay on these poems, including introduction, body and conclusion.",
          parts: [
            { label: "a", prompt: "Write the introduction ending in a comparative thesis.", marks: 3 },
            { label: "b", prompt: "Write three integrated body paragraph topic sentences.", marks: 3 },
            { label: "c", prompt: "Write the conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Full essay structure", statement: "Introduction with thesis + integrated paragraphs + resolving conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Introduction example: 'Both poems stage a departure, but where A leaves before dawn and B leaves at noon, they diverge on what departure costs. I will argue that A makes leaving a process of ambivalence while B makes it a fait accompli — one journey is unfinished, the other already over.'", marks: 3, markCode: "A" },
              { part: "b", reasoning: "P1: timing — 'before the light' (liminal, uncertain) versus 'at noon' (full light, decisive) — departure as threshold versus departure as execution.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P2: the road's imagery — A's 'unspooling like thread' (departure as unraveling, irreversible) versus B's 'straight line' (departure as fixed course, already decided).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P3: psychological state — A's ambivalence ('leaving easier / arriving harder') versus B's pre-departure ('already left / in our heads').", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion example: 'The poems converge on departure as transformation but diverge on its timing — A's leaving is gradual and ambivalent, B's is sudden and complete; together they suggest that journeys end before they begin, in different ways.'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Intro: departure, ambivalence vs fait accompli. P1 timing, P2 road imagery, P3 psychology. Conclusion: journeys end before they begin.",
            commonErrors: ["Introduction that summarises both poems; conclusion that repeats the thesis without resolving."],
          },
        },
      ],
    },
    {
      id: "langa-u5-sustaining",
      title: "Sustaining comparison and evaluation",
      skill: "Maintain balanced treatment and evaluative judgement throughout a comparative essay.",
      lesson: {
        sections: [
          {
            heading: "The balance problem",
            body: "The most common failure in comparative writing is **imbalance** — Text A gets three developed paragraphs, Text B gets one sentence. Balance is not about equal length but **equal analytical depth**: each text should be analysed with the same rigour at each point of comparison.",
          },
          {
            heading: "Sustaining evaluation",
            body: "Evaluation should be **distributed** — not saved for the conclusion. Each paragraph can include a mini-judgement: 'A's metaphor is more sustained, but B's is more surprising.' This keeps the essay evaluative throughout, not just descriptive.",
          },
          {
            heading: "Transitions that compare",
            body: "Use transitions that make the comparison audible: 'where the first compresses, the second expands', 'similarly', 'by contrast', 'more significantly'. These signal that the essay is arguing a relationship, not listing features.",
          },
        ],
        keyFormulas: [
          { name: "Balance check", statement: "Equal analytical depth at each point, not equal length" },
          { name: "Distributed evaluation", statement: "Mini-judgements in each paragraph, not just the conclusion" },
        ],
        workedExample: {
          problem: "Your comparative essay gives Text A four paragraphs and Text B one. How do you fix it?",
          solution: "Restructure: each paragraph should pair A and B on the same point. If A has four points, B needs four paired treatments — or cut A's points to three and give B three. Balance through integration, not addition.",
        },
      },
      questions: [
        {
          id: "langa-u5-sq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Balance' in comparative writing means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal word count for each text" },
              { id: "b", text: "Equal analytical depth at each point of comparison" },
              { id: "c", text: "Avoiding all judgement" },
              { id: "d", text: "Using the same examples" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative balance", statement: "Equal analytical rigour, not equal length." },
            ],
            steps: [
              { reasoning: "Balance is about analytical depth at each comparison point.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Equal analytical depth",
          },
        },
        {
          id: "langa-u5-sq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why evaluation should be distributed throughout a comparative essay rather than saved for the conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Distributed evaluation", statement: "Mini-judgements in each paragraph keep the essay evaluative throughout." },
            ],
            steps: [
              { reasoning: "Conclusion-only evaluation makes the body paragraphs descriptive — the essay reports rather than argues.", marks: 1, markCode: "M" },
              { reasoning: "Distributed mini-judgements ('A's metaphor is more sustained, but B's is more surprising') keep the comparison evaluative at every stage.", marks: 1, markCode: "M" },
              { reasoning: "The conclusion can then synthesise the accumulated judgements rather than introduce them for the first time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Distributed evaluation keeps each paragraph argumentative; the conclusion synthesises rather than introduces judgement.",
            commonErrors: ["Saving all evaluation for the final paragraph."],
          },
        },
        {
          id: "langa-u5-sq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Mornings (reprise)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.\n\nPOEM B: Morning came like a letter\nI had been expecting\nfor years —\nand opening it, I found\nonly my own handwriting.",
          },
          stem: "Write one integrated paragraph comparing these poems, ensuring balanced treatment and a mini-evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated paragraph", statement: "Point + paired evidence + comparative analysis + mini-evaluation." },
            ],
            steps: [
              { reasoning: "Point: both poems personify morning as an agent, but diverge on whether that agency is coercive or communicative.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: A's 'iron gate' and 'debt I never agreed to pay' versus B's 'like a letter' and 'my own handwriting' — paired quotations.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: A's morning imposes obligation; B's morning delivers a message — but the message is self-authored, suggesting morning as mirror rather than messenger.", marks: 1, markCode: "M" },
              { reasoning: "Mini-evaluation: B's conceit is more intricate (the letter that contains only oneself) but A's is more economically devastating — the debt metaphor requires no unpacking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Point: coercive vs communicative agency. Evidence: iron gate/debt vs letter/handwriting. Analysis: obligation vs self-mirror. Evaluation: B intricate, A devastating.",
            commonErrors: ["Paragraph that analyses one poem then the other without pairing; no evaluative element."],
          },
        },
        {
          id: "langa-u5-sq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write two integrated comparative paragraphs on the following paired texts, each with balanced treatment and a mini-evaluation.",
          extract: {
            title: "Two Waits (reprise)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: I have been waiting\nsince the house was built.\nThe door knows my footsteps\nbetter than my name.\n\nPOEM B: Waiting is a skill\nlike any other —\nyou learn the weight\nof an hour that does not end.",
          },
          parts: [
            { label: "a", prompt: "Paragraph 1: compare the poems' treatments of time.", marks: 4 },
            { label: "b", prompt: "Paragraph 2: compare the poems' treatments of the self.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated comparative paragraphs", statement: "Point + paired evidence + analysis + mini-evaluation, balanced across texts." },
            ],
            steps: [
              { part: "a", reasoning: "Point: A figures time as cosmic duration ('since the house was built'); B figures it as measurable endurance ('an hour that does not end').", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evidence: 'since the house was built' (A) versus 'you learn the weight / of an hour' (B) — paired quotations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Analysis: A's waiting is existential — time as fate; B's waiting is practical — time as unit of discipline.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mini-evaluation: A's hyperbole is more devastating; B's precision is more humane — one makes waiting tragic, the other makes it survivable.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Point: A's self is erased by waiting ('the door knows my footsteps / better than my name'); B's self is trained by waiting ('a skill / like any other').", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence: 'better than my name' (A) versus 'you learn the weight' (B) — paired quotations.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Analysis: A's waiting dehumanises — identity reduced to habit; B's waiting develops — the self is strengthened by endurance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mini-evaluation: A's image is more haunting (the door knows you better than you know yourself); B's is more empowering (waiting as agency). The poems offer opposite models of the waiting self.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P1 time: cosmic fate vs measurable discipline. P2 self: erased habit vs trained skill. Both balanced with mini-evaluations.",
            commonErrors: ["Uneven treatment; paragraphs without evaluative elements."],
          },
        },
        {
          id: "langa-u5-sq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An essay gives Text A two developed paragraphs and Text B one sentence per paragraph. The best fix is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add more quotations from Text B" },
              { id: "b", text: "Develop Text B's treatment to the same analytical depth as Text A's at each point" },
              { id: "c", text: "Remove Text A's paragraphs" },
              { id: "d", text: "Move all of Text B's material into the conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balance", statement: "Fix imbalance by equalising analytical depth, not by padding." },
            ],
            steps: [
              { reasoning: "Balance requires equal analytical rigour at each point of comparison — Text B needs developed analysis, not just more words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Equal analytical depth for Text B",
          },
        },
        {
          id: "langa-u5-sq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is a 'mini-evaluation' within a comparative paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both poems use imagery." },
              { id: "b", text: "A's metaphor is more sustained, though B's brevity achieves a starkness A cannot match." },
              { id: "c", text: "The poems were written in different centuries." },
              { id: "d", text: "In conclusion, both poems are interesting." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Distributed evaluation", statement: "A mini-judgement weighs the texts' relative achievements within a paragraph." },
            ],
            steps: [
              { reasoning: "A mini-evaluation makes a comparative judgement — 'more sustained' versus 'starkness A cannot match' — weighing both texts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A comparative judgement within the paragraph",
          },
        },
        {
          id: "langa-u5-sq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is distributed evaluation stronger than conclusion-only evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the essay longer" },
              { id: "b", text: "It keeps every paragraph argumentative rather than merely descriptive" },
              { id: "c", text: "It allows the conclusion to be shorter" },
              { id: "d", text: "It avoids using evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Distributed evaluation", statement: "Judgement throughout keeps the essay evaluative at every stage." },
            ],
            steps: [
              { reasoning: "Conclusion-only judgement leaves the body descriptive — distributed evaluation makes each paragraph argue.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Every paragraph stays argumentative",
          },
        },
        {
          id: "langa-u5-sq8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which transition best signals a comparative relationship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Furthermore" },
              { id: "b", text: "By contrast" },
              { id: "c", text: "In addition" },
              { id: "d", text: "Similarly to what was said" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative transitions", statement: "Transitions should make the relationship between texts audible." },
            ],
            steps: [
              { reasoning: "'By contrast' explicitly signals divergence; 'where A does X, B does Y' performs the comparison.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** By contrast",
          },
        },
        {
          id: "langa-u5-sq9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph analyses Text A's imagery in four sentences and Text B's in one. Which revision restores balance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Move Text B's sentence to the introduction" },
              { id: "b", text: "Pair the evidence — discuss A's image, then B's corresponding image, then analyse the relationship" },
              { id: "c", text: "Delete Text A's extra sentences" },
              { id: "d", text: "Add a third text for comparison" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balance", statement: "Pair evidence at each point so both texts receive equal analytical depth." },
            ],
            steps: [
              { reasoning: "Balance is restored by pairing — A's image beside B's corresponding image — not by relocating or deleting material.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pair the evidence at the same point",
          },
        },
        {
          id: "langa-u5-sq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which description best characterises an essay that is 'evaluative throughout'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It judges only in the final paragraph" },
              { id: "b", text: "It contains a mini-judgement in most paragraphs, weighing the texts' relative achievements" },
              { id: "c", text: "It avoids all descriptive analysis" },
              { id: "d", text: "It repeats the thesis in every paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Distributed evaluation", statement: "Evaluative throughout = mini-judgements distributed across paragraphs." },
            ],
            steps: [
              { reasoning: "An evaluative essay weighs the texts at each stage — 'more sustained, though less surprising' — rather than saving judgement for the end.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mini-judgements distributed across paragraphs",
          },
        },
        {
          id: "langa-u5-sq11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the difference between 'equal length' and 'equal analytical depth' in comparative balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative balance", statement: "Balance is measured by analytical rigour at each point, not word count." },
            ],
            steps: [
              { reasoning: "Equal length counts words; a text can get many words of summary while the other gets few words of analysis — length is not balance.", marks: 1, markCode: "M" },
              { reasoning: "Equal analytical depth means each text is analysed with the same rigour at each point of comparison — paired evidence, paired analysis.", marks: 1, markCode: "M" },
              { reasoning: "One text may legitimately receive more words if its treatment is more complex, provided the analysis is equally rigorous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Length is quantitative; depth is qualitative — balance means equal analytical rigour at each comparison point.",
            commonErrors: ["Assuming balance means cutting Text A to match Text B's brevity."],
          },
        },
        {
          id: "langa-u5-sq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "This sentence analyses only one text: 'Text A's extended metaphor of the house creates a claustrophobic effect.' Revise it into a balanced comparative sentence and explain your changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated comparison", statement: "Pair evidence and analysis so both texts are treated at the same point." },
            ],
            steps: [
              { reasoning: "Identify Text A's point: the house metaphor creates enclosure — a confined space the speaker cannot leave.", marks: 1, markCode: "M" },
              { reasoning: "Find Text B's corresponding treatment — e.g. weather as an open but inescapable force — and pair it: 'where A's house encloses, B's weather exposes'.", marks: 1, markCode: "M" },
              { reasoning: "Revised example: 'A's house metaphor encloses grief in walls she cannot pass, whereas B's weather metaphor exposes her to a force she cannot control — enclosure versus exposure.'", marks: 1, markCode: "M" },
              { reasoning: "The revision pairs evidence and names the relationship (enclosure vs exposure), restoring balance and making the comparison audible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pair A's enclosure with B's exposure: 'A's house encloses; B's weather exposes' — balanced, comparative, evaluative.",
            commonErrors: ["Appending a clause about Text B that does not correspond to the same analytical point."],
          },
        },
        {
          id: "langa-u5-sq13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a mini-evaluation comparing how two texts handle endings: one ends with an open door, the other with a closed window.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mini-evaluation", statement: "Weigh both texts' relative achievements on the same point within a sentence or two." },
            ],
            steps: [
              { reasoning: "Identify what each ending achieves: the open door suggests possibility and agency; the closed window suggests finality and exclusion.", marks: 1, markCode: "M" },
              { reasoning: "Weigh them comparatively: the door's openness is more generative but less resolved; the window's closure is more decisive but forecloses hope.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'The open door offers the reader agency but withholds resolution; the closed window resolves decisively at the cost of possibility — A's ending invites continuation, B's concludes.'", marks: 1, markCode: "M" },
              { reasoning: "A strong mini-evaluation names both achievements and the trade-off between them, not just a preference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Door = agency without resolution; window = resolution without possibility — weigh the trade-off, not just preference.",
            commonErrors: ["Writing 'A is better' without naming what each ending achieves."],
          },
        },
        {
          id: "langa-u5-sq14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Improve these transitions so they make the comparison audible: 'Poem A uses a house metaphor. Poem B uses a weather metaphor. The house is confining. The weather is changeable.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative transitions", statement: "Transitions should signal the relationship — convergence, divergence, contrast — between paired points." },
            ],
            steps: [
              { reasoning: "Replace additive transitions with relational ones: 'where A confines, B exposes'; 'similarly'; 'more significantly'.", marks: 1, markCode: "M" },
              { reasoning: "Example revision: 'Where Poem A figures grief as a house — confining, habitable, inescapable — Poem B figures it as weather: open, mobile, inescapable in a different way.'", marks: 1, markCode: "M" },
              { reasoning: "The revision makes divergence audible — both are inescapable, but one is spatial and the other elemental.", marks: 1, markCode: "M" },
              { reasoning: "The key is that transitions carry analytical content: they name the relationship, not just sequence the sentences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use 'where A does X, B does Y' and contrastive transitions that name the relationship between paired points.",
            commonErrors: ["Using transitions like 'then' or 'also' that sequence without comparing."],
          },
        },
        {
          id: "langa-u5-sq15",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two Evenings",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: She kept the evening like a candle — trimmed, watched, never allowed to gutter. Every ritual of dusk was observed: the lamps in order, the curtains drawn at six, the radio lowered to a murmur.\nTEXT B: She let the evening happen to her — dinner unfinished, curtains open to the street, the television arguing with itself in the next room. Nothing was scheduled; everything was survived.",
          },
          stem: "Write one integrated comparative paragraph analysing how these extracts portray two different relationships with the end of day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated paragraph", statement: "Point + paired evidence + comparative analysis + mini-evaluation, balanced." },
            ],
            steps: [
              { reasoning: "Point: both extracts ritualise the evening, but diverge on whether ritual is control or surrender — A manages the dark, B endures it.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: 'kept the evening like a candle' and 'lamps in order' (A) versus 'let the evening happen to her' and 'nothing was scheduled' (B).", marks: 1, markCode: "M" },
              { reasoning: "Analysis: A's rituals are preservative — order holds back chaos; B's chaos is honest — the evening is survived rather than mastered. Both are strategies for facing the dark.", marks: 1, markCode: "M" },
              { reasoning: "Mini-evaluation: A's discipline is more dignified but more fragile — one guttering candle undoes it; B's surrender is less admirable but more resilient — she cannot be disappointed by order she never kept.", marks: 2, markCode: "A" },
              { reasoning: "Treatment is balanced — each extract receives paired evidence and analysis at the same depth.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Point: ritual as control vs surrender. Evidence: candle/lamps vs unscheduled evening. Analysis: preservation vs honest endurance. Evaluation: A dignified but fragile, B less admirable but resilient.",
            commonErrors: ["Analysing one extract fully before the other; no evaluative element."],
          },
        },
        {
          id: "langa-u5-sq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Two Letters",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: The letter arrived on a Tuesday, in an envelope so thick it must have held more than paper. Inside were instructions — which bus, which platform, which door to knock on twice.\n\nTEXT B: The letter arrived on a Tuesday, in an envelope so thin it could have held a leaf. Inside were questions — where she had been, what she had seen, whether she was still the person he remembered.",
          },
          stem: "Write two integrated comparative paragraphs on these extracts, each with balanced treatment and a mini-evaluation.",
          parts: [
            { label: "a", prompt: "Paragraph 1: compare the letters' forms — what each physically and structurally is.", marks: 4 },
            { label: "b", prompt: "Paragraph 2: compare what each letter asks of its reader.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated comparative paragraphs", statement: "Point + paired evidence + analysis + mini-evaluation, balanced across texts." },
            ],
            steps: [
              { part: "a", reasoning: "P1 point: both letters arrive identically — same day, same envelope shape — but diverge in weight: A's is thick with instructions, B's thin with questions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evidence: 'so thick it must have held more than paper' versus 'so thin it could have held a leaf' — paired physical details.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Analysis: the envelope's weight enacts its content — A's letter is an instrument (directions), B's is a breath (questions); form anticipates function.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mini-evaluation: A's thickness is more commanding but more coercive; B's thinness is more vulnerable but more honest — one letter controls, the other asks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "P2 point: A's letter directs ('which bus, which platform, which door to knock on twice'); B's letter interrogates ('where she had been, what she had seen').", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence: the imperative lists in A versus the interrogative list in B — paired structures that enact the letters' purposes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Analysis: A's reader is positioned as a body to be moved; B's reader is positioned as a self to be known — the letters differ in what they presuppose about the person addressed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mini-evaluation: A's instructions are more efficient but more depersonalising; B's questions are less decisive but restore agency — control versus recognition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P1 form: instrument vs breath — control vs vulnerability. P2 demand: direction vs interrogation — moved body vs known self.",
            commonErrors: ["Uneven treatment across the two paragraphs; missing mini-evaluations."],
          },
        },
      ],
    },
  ],
};
