import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "langa-u5-lesson-5-2",
  code: "5-2",
  title: "Sustaining Comparison and Evaluation",
  goal: "I CAN sustain a comparative argument across a full essay, integrating evaluation and maintaining balance.",
  standards: ["Comparative writing", "Evaluation", "Sustained argument"],
  vocabulary: [
    { term: "Sustained argument", definition: "An argument maintained across multiple paragraphs without losing thread or balance." },
    { term: "Thread", definition: "The central line of reasoning that runs through the whole essay." },
    { term: "Recapitulation", definition: "Briefly restating a point to connect it to a new one — keeps the thread visible." },
    { term: "Escalation", definition: "Moving from surface analysis to deeper significance — the essay's vertical movement." },
    { term: "Synthesis", definition: "Drawing the comparison together into a final judgement in the conclusion." },
    { term: "Counterpoint", definition: "Acknowledging a limitation or alternative reading — strengthens rather than weakens the argument." },
  ],
  concepts: [
    {
      id: "langa-u5-thread",
      title: "The comparative thread",
      skill: "Maintain a single comparative thread across multiple paragraphs, using recapitulation and escalation.",
      lesson: {
        sections: [
          {
            heading: "The thread problem",
            body: "A comparative essay fails when it becomes a series of disconnected comparisons. The **thread** is the central claim — 'the texts diverge on whether loss is place or force' — that every paragraph must serve. Each paragraph should advance the thread, not just add another point.",
          },
          {
            heading: "Recapitulation",
            body: "**Recapitulation** briefly restates where the argument has been: 'Having established that both figure grief through metaphor, we can now ask what kind of metaphor each chooses.' This keeps the reader oriented and shows the essay's cumulative logic.",
          },
          {
            heading: "Escalation",
            body: "A strong essay **escalates**: it moves from surface features (imagery, diction) to deeper structures (theme, context, ideology). The final paragraphs should be more significant than the first — the comparison should deepen, not just continue.",
          },
        ],
        keyFormulas: [
          { name: "Thread test", statement: "Does every paragraph advance the central comparative claim?" },
          { name: "Escalation check", statement: "Do later paragraphs reach deeper significance than earlier ones?" },
        ],
        workedExample: {
          problem: "Your essay has three paragraphs on imagery, two on structure, one on theme. Is the thread maintained?",
          solution: "Only if each paragraph advances the central claim. If the imagery paragraphs are about different poems separately, the thread is broken. Each should pair the texts on the same point and build toward the thesis.",
        },
      },
      questions: [
        {
          id: "langa-u5-tq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'thread' of a comparative essay is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The list of texts being compared" },
              { id: "b", text: "The central line of reasoning every paragraph serves" },
              { id: "c", text: "The introduction's first sentence" },
              { id: "d", text: "The conclusion's final word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative thread", statement: "The central claim every paragraph advances." },
            ],
            steps: [
              { reasoning: "The thread is the sustained line of reasoning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The central line of reasoning",
          },
        },
        {
          id: "langa-u5-tq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'escalation' matters in a comparative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Escalation", statement: "Later paragraphs should reach deeper significance than earlier ones." },
            ],
            steps: [
              { reasoning: "Without escalation, the essay is a list — each paragraph equally weighted, no cumulative depth.", marks: 1, markCode: "M" },
              { reasoning: "Escalation creates momentum: surface analysis (imagery) builds toward deeper structures (theme, context, ideology).",
              marks: 1, markCode: "M" },
              { reasoning: "The conclusion can then synthesise the accumulated depth rather than summarising disconnected points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Escalation gives the essay vertical movement — from surface to depth — so the conclusion resolves accumulated significance.",
            commonErrors: ["Paragraphs that are all equally shallow or equally deep without progression."],
          },
        },
        {
          id: "langa-u5-tq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Confessions",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: 'I have lied about this before.'\n\nTEXT B: 'I have never lied. I have only ever told the truth badly.'",
          },
          stem: "Write a comparative paragraph analysing how these two openings handle truth and self-knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated comparison", statement: "Point + paired evidence + comparative analysis." },
            ],
            steps: [
              { reasoning: "Point: both openings confess to a problem with truth, but diverge on whether the problem is deception or incompetence.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: A's 'I have lied' (active deception) versus B's 'told the truth badly' (failed honesty) — paired quotations.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: A's narrator admits moral failure — lying is a choice; B's narrator admits cognitive failure — truth-telling is a skill he lacks. The distinction is between guilt and inadequacy.", marks: 1, markCode: "M" },
              { reasoning: "Significance: A's confession invites distrust; B's invites sympathy — the same genre (confession) produces opposite reader relationships through a single word ('lied' vs 'badly').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Point: deception vs incompetence. Evidence: 'lied' vs 'told the truth badly'. Analysis: guilt vs inadequacy — same genre, opposite reader relationships.",
            commonErrors: ["Treating both as 'confessions' without analysing the different kinds of failure."],
          },
        },
        {
          id: "langa-u5-tq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a sustained comparative paragraph sequence (3 paragraphs) on the following paired texts, maintaining thread and escalation.",
          extract: {
            title: "Two Gardens",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: The garden was her life's work — twenty years of roses, each one named for a child she had lost. She watered them every morning at six, before the sun was up, before the neighbours woke.\n\nTEXT B: The garden was a negotiation — every plant a compromise between what she wanted and what the soil would give. She learned to love the negotiate, not the victory.",
          },
          parts: [
            { label: "a", prompt: "Paragraph 1: compare the gardens' relationship to time.", marks: 3 },
            { label: "b", prompt: "Paragraph 2: compare the gardens' relationship to loss or limitation.", marks: 3 },
            { label: "c", prompt: "Paragraph 3: synthesise — what do the gardens reveal about each woman's philosophy?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustained comparison", statement: "Thread + escalation + synthesis across multiple paragraphs." },
            ],
            steps: [
              { part: "a", reasoning: "P1 point: A's garden is built on accumulated time ('twenty years'); B's garden is built on ongoing negotiation — time as inheritance versus time as process.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evidence: 'twenty years of roses' (A) versus 'every plant a compromise' (B) — paired quotations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Analysis: A's time is memorial — the garden preserves the dead; B's time is experimental — the garden adapts to the present.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P2 point: A's garden is shaped by loss (roses 'named for a child she had lost'); B's garden is shaped by limitation (soil 'would give').", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence: 'each one named for a child she had lost' (A) versus 'what she wanted and what the soil would give' (B) — paired quotations.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Analysis: A's loss is personal and permanent — the garden is a memorial; B's limitation is natural and negotiable — the garden is a dialogue.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "P3 synthesis: A's philosophy is preservation — meaning through accumulation and memory; B's philosophy is adaptation — meaning through negotiation and acceptance.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The comparison reveals two models of cultivation: the garden as archive versus the garden as conversation — both are acts of care, but oriented differently in time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P1 time: inheritance vs process. P2 loss: memorial vs negotiation. P3 synthesis: preservation vs adaptation — garden as archive vs conversation.",
            commonErrors: ["Paragraphs that drift from the thread; no synthesis paragraph."],
          },
        },
        {
          id: "langa-u5-tq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A strong comparative 'thread' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every paragraph makes a different comparison unrelated to the others" },
              { id: "b", text: "Every paragraph advances the same central comparative claim" },
              { id: "c", text: "The essay mentions both texts in every sentence" },
              { id: "d", text: "The introduction repeats in each paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative thread", statement: "The central claim every paragraph serves." },
            ],
            steps: [
              { reasoning: "The thread is the sustained line of reasoning — each paragraph must advance it, not just add a point.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Every paragraph advances the central claim",
          },
        },
        {
          id: "langa-u5-tq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Recapitulation' in an essay means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating the introduction word for word" },
              { id: "b", text: "Briefly restating where the argument has been to connect it to the next point" },
              { id: "c", text: "Summarising both texts at the end" },
              { id: "d", text: "Adding a new quotation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recapitulation", statement: "Restating prior ground keeps the reader oriented and shows cumulative logic." },
            ],
            steps: [
              { reasoning: "Recapitulation briefly restates the argument's position to bridge into the next point.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Restating prior ground to bridge forward",
          },
        },
        {
          id: "langa-u5-tq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sign most clearly indicates a broken comparative thread?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The essay uses quotations from both texts" },
              { id: "b", text: "Each paragraph compares a different aspect with no connection to the central claim" },
              { id: "c", text: "The conclusion mentions the thesis" },
              { id: "d", text: "The essay has five paragraphs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thread test", statement: "Does every paragraph advance the central comparative claim?" },
            ],
            steps: [
              { reasoning: "A broken thread shows as disconnected comparisons — each paragraph a separate exercise unrelated to the thesis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Disconnected comparisons",
          },
        },
        {
          id: "langa-u5-tq8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Escalation' in a comparative essay refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using more difficult vocabulary in later paragraphs" },
              { id: "b", text: "Moving from surface analysis to deeper significance as the essay progresses" },
              { id: "c", text: "Making the paragraphs progressively longer" },
              { id: "d", text: "Introducing a third text at the end" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Escalation", statement: "Vertical movement from surface features to deeper structures." },
            ],
            steps: [
              { reasoning: "Escalation is the essay's deepening — from imagery and diction toward theme, context and ideology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Surface to deeper significance",
          },
        },
        {
          id: "langa-u5-tq9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence performs recapitulation before a new point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Having shown that both texts figure loss through metaphor, we can now ask what each metaphor makes loss do." },
              { id: "b", text: "Now we turn to Text B." },
              { id: "c", text: "This is a completely new topic." },
              { id: "d", text: "As mentioned earlier, both texts are interesting." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recapitulation", statement: "Restates established ground and pivots to the next analytical step." },
            ],
            steps: [
              { reasoning: "Choice (a) restates what has been established ('both figure loss through metaphor') and pivots to the next question ('what each metaphor makes loss do').", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Restates ground and pivots forward",
          },
        },
        {
          id: "langa-u5-tq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An essay's three paragraphs cover imagery, then character, then theme. What does this sequencing achieve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — order is irrelevant" },
              { id: "b", text: "It escalates from surface technique toward deeper significance" },
              { id: "c", text: "It summarises Text A before Text B" },
              { id: "d", text: "It repeats the same point three times" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Escalation", statement: "Ordering surface-to-depth gives the essay cumulative significance." },
            ],
            steps: [
              { reasoning: "Imagery (surface) → character (mid-level) → theme (deep) is a classic escalation — significance accumulates.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Escalation from surface to depth",
          },
        },
        {
          id: "langa-u5-tq11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain why recapitulation is necessary in a sustained comparative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recapitulation", statement: "Restating prior ground keeps the reader oriented and shows cumulative logic." },
            ],
            steps: [
              { reasoning: "Without recapitulation, paragraphs feel like disconnected episodes — the reader must reconstruct the argument's progress unaided.", marks: 1, markCode: "M" },
              { reasoning: "Recapitulation makes the cumulative logic visible: 'Having established X, we can now ask Y' shows each paragraph building on the last.", marks: 1, markCode: "M" },
              { reasoning: "It also keeps the thread audible — the reader is reminded what the central claim is before the next point extends it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recapitulation orients the reader, displays cumulative logic, and keeps the thread audible between paragraphs.",
            commonErrors: ["Recapitulating by repeating whole paragraphs rather than one bridging sentence."],
          },
        },
        {
          id: "langa-u5-tq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "An essay on two poems about migration has this paragraph plan: P1 images of departure in Poem A; P2 structure of Poem B; P3 themes of both poems; P4 a biographical note on Poem A's author. Identify where the thread breaks and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thread test", statement: "Every paragraph must advance the central comparative claim." },
            ],
            steps: [
              { reasoning: "P1 breaks the thread immediately — it analyses Poem A alone, so no comparison is performed.", marks: 1, markCode: "M" },
              { reasoning: "P2 also singles out one text (Poem B's structure) rather than pairing both on the same point.", marks: 1, markCode: "M" },
              { reasoning: "P4 abandons comparison entirely — biography is context, not comparative analysis, and serves only one text.", marks: 1, markCode: "M" },
              { reasoning: "Only P3 attempts a shared point; the fix is to rewrite P1, P2 and P4 as paired comparisons on points of comparison (departure imagery, structural treatment of journey, significance of migration).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P1, P2 and P4 break the thread — they treat texts separately or abandon comparison; each must pair both texts on a shared point.",
            commonErrors: ["Identifying imbalance but not the broken thread — the issue is lack of pairing, not just uneven coverage."],
          },
        },
        {
          id: "langa-u5-tq13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a recapitulation sentence that bridges from a paragraph on imagery to a new paragraph on structure, for an essay comparing two poems about exile.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recapitulation", statement: "Bridge sentence restates established ground and pivots to the next point." },
            ],
            steps: [
              { reasoning: "Restate the established point compactly: both poems figure exile through concrete imagery — one through landscapes, one through bodies.", marks: 1, markCode: "M" },
              { reasoning: "Pivot to the new point: having established how each text images exile, we can now ask how each organises the experience formally.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'Having seen how both poems image exile — A through landscapes, B through bodies — we can now ask how each structures the experience of displacement.'", marks: 1, markCode: "M" },
              { reasoning: "The sentence must do both jobs: compress prior ground and announce the next question, keeping the thread audible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Having seen how both poems image exile, we can now ask how each structures displacement' — recap plus pivot.",
            commonErrors: ["Writing a transition that only announces the new topic without restating the old ground."],
          },
        },
        {
          id: "langa-u5-tq14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how 'escalation' differs from mere 'coverage' in a comparative essay, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Escalation", statement: "Later paragraphs must reach deeper significance, not just cover more features." },
            ],
            steps: [
              { reasoning: "Coverage adds points — imagery, then diction, then structure — each equally weighted, no cumulative depth.", marks: 1, markCode: "M" },
              { reasoning: "Escalation organises points by significance — imagery first (how texts look), theme last (what the look means).", marks: 1, markCode: "M" },
              { reasoning: "Example: comparing two poems on war — coverage lists devices; escalation moves from battlefield imagery to the poems' divergent views of heroism to what each implies about the ethics of remembrance.", marks: 1, markCode: "M" },
              { reasoning: "Escalated essays let the conclusion synthesise accumulated depth; covered essays leave the conclusion to summarise disconnected points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Coverage lists features at one level; escalation arranges them so later paragraphs reach deeper significance — imagery → theme → ethics.",
            commonErrors: ["Confusing a long essay with an escalating one."],
          },
        },
        {
          id: "langa-u5-tq15",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two Departures",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The platform emptied slowly —\none bag at a time,\neach leaving a shape\nin the shape of someone.\n\nPOEM B: The platform emptied all at once —\na sound like a held breath\nfinally let go.",
          },
          stem: "Write three topic sentences for an essay comparing these poems that maintain a single thread and escalate from surface to depth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thread and escalation", statement: "Topic sentences must pair both texts on shared points ordered surface-to-depth." },
            ],
            steps: [
              { reasoning: "P1 (surface — pacing/diction): both poems render the emptying platform, but diverge on tempo — 'slowly, one bag at a time' versus 'all at once'.", marks: 1, markCode: "M" },
              { reasoning: "P2 (mid-level — imagery): A figures absence as residual shape ('a shape / in the shape of someone'); B figures it as released breath — presence versus release.", marks: 1, markCode: "M" },
              { reasoning: "P3 (deep — meaning): the poems diverge on what departure leaves — A mourns the trace, B celebrates the release; departure as lingering versus departure as freedom.", marks: 1, markCode: "M" },
              { reasoning: "Each sentence pairs both texts on the same point — no single-text paragraphs.", marks: 1, markCode: "M" },
              { reasoning: "The sequence escalates: tempo → imagery → significance — each point deeper than the last.", marks: 1, markCode: "M" },
              { reasoning: "All three sentences serve one comparative claim (departure as trace vs release), keeping the thread visible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P1 tempo, P2 imagery of absence, P3 meaning of departure — paired, escalating, single-threaded.",
            commonErrors: ["Topic sentences that cover different aspects without ordering by depth."],
          },
        },
        {
          id: "langa-u5-tq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Two Houses",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: The house remembered everything — which stair creaked, which window stuck, which floorboard announced a stranger. She moved through it the way a hand reads Braille.\nTEXT B: The house remembered nothing — every wall freshly painted, every door newly hung. She moved through it the way a stranger reads a map.",
          },
          stem: "Plan a sustained comparative essay on these extracts across three paragraphs.",
          parts: [
            { label: "a", prompt: "Write the comparative thesis and first topic sentence (surface features).", marks: 3 },
            { label: "b", prompt: "Write the second topic sentence (mid-level: character or voice).", marks: 2 },
            { label: "c", prompt: "Write the third topic sentence (deep: theme or significance) with a recapitulation bridge.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustained comparison", statement: "Thread + escalation + recapitulation across the essay." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis example: 'Both extracts figure a house as a memory system — but where A's house remembers and B's forgets, they diverge on whether habitation is recognition or exploration.'", marks: 2, markCode: "A" },
              { part: "a", reasoning: "P1 topic sentence: surface features — A's 'creaked', 'stuck', 'announced' versus B's 'freshly painted', 'newly hung' — worn versus new surfaces.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "P2 topic sentence: the inhabitants' relationship to the house — A reads it 'the way a hand reads Braille' (knowledge as intimacy); B reads it 'the way a stranger reads a map' (knowledge as navigation).", marks: 2, markCode: "M" },
              { part: "c", reasoning: "P3 recapitulation bridge: 'Having seen how each house surfaces its history — or erases it — we can ask what kind of dwelling each woman has made.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "P3 topic sentence: significance — A's house makes her a native; B's makes her a guest; the texts diverge on whether home is inheritance or arrival.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The sequence escalates surface → relationship → significance, all serving the thesis — thread and escalation maintained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thesis: house as memory — recognition vs exploration. P1 surfaces, P2 reading styles, P3 native vs guest — escalated, bridged.",
            commonErrors: ["Paragraphs that analyse the houses separately; no escalation in depth."],
          },
        },
      ],
    },
    {
      id: "langa-u5-counterpoint",
      title: "Counterpoint and qualification",
      skill: "Acknowledge limitations and alternative readings to strengthen comparative arguments.",
      lesson: {
        sections: [
          {
            heading: "Why counterpoint strengthens",
            body: "A comparative essay that acknowledges its own limits is **more** convincing, not less. **Counterpoint** — 'while A's metaphor is more sustained, it is also more conventional' — shows the reader that the argument has been tested, not assumed.",
          },
          {
            heading: "Types of qualification",
            body: "**Limitation** — what the text cannot do or does not do. **Alternative reading** — a defensible interpretation the essay acknowledges but does not adopt. **Scope** — the limits of the comparison itself ('this comparison holds for the extracts but may not extend to the whole works').",
          },
          {
            heading: "Placement",
            body: "Counterpoint can appear in any paragraph — 'although B's image is simpler, its simplicity is the point' — or in the conclusion as a final qualification. Distributed counterpoints keep the essay honest throughout.",
          },
        ],
        keyFormulas: [
          { name: "Counterpoint formula", statement: "Claim + 'although/while' + qualification = strengthened argument" },
          { name: "Qualification types", statement: "Limitation + alternative reading + scope" },
        ],
        workedExample: {
          problem: "Your essay argues Text A is more powerful than Text B. How do you strengthen it?",
          solution: "Add counterpoint: 'A's sustained metaphor is more powerful, although B's brevity achieves a starkness A cannot match — the comparison is not about superiority but about different kinds of power.'",
        },
      },
      questions: [
        {
          id: "langa-u5-cq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Counterpoint' in comparative writing refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A point against the thesis" },
              { id: "b", text: "Acknowledging a limitation or alternative reading" },
              { id: "c", text: "A summary of both texts" },
              { id: "d", text: "A new topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint", statement: "Acknowledging limits strengthens rather than weakens." },
            ],
            steps: [
              { reasoning: "Counterpoint acknowledges limitations or alternatives — it strengthens the argument.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Acknowledging a limitation",
          },
        },
        {
          id: "langa-u5-cq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why acknowledging limitations makes a comparative argument more convincing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualification", statement: "Tested arguments are more credible than assumed ones." },
            ],
            steps: [
              { reasoning: "A one-sided argument seems naive — the reader wonders what was ignored.", marks: 1, markCode: "M" },
              { reasoning: "Acknowledging limitations shows the argument has been tested — 'although X, Y still holds' demonstrates rigour.", marks: 1, markCode: "M" },
              { reasoning: "Counterpoint also pre-empts objections — the reader's potential disagreement is already addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Counterpoint demonstrates rigour — the argument has been tested, not assumed — and pre-empts objections.",
            commonErrors: ["Avoiding counterpoint for fear of weakening the argument."],
          },
        },
        {
          id: "langa-u5-cq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Doors (reprise)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The door was neither open nor closed.\nShe stood before it for an hour,\nher hand on the handle,\nfeeling the wood's cool indifference.\n\nPOEM B: The door opened before she touched it.\n'Come in,' said the house.\n'Sit down. Stay.'",
          },
          stem: "Write a comparative paragraph that argues one poem is more effective, while acknowledging the other's strength.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualified comparison", statement: "Judgement + paired evidence + counterpoint." },
            ],
            steps: [
              { reasoning: "Point: Poem A is more psychologically complex — the undecidable door enacts the anxiety of choice itself.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: 'neither open nor closed', 'her hand on the handle', 'cool indifference' — the poem sustains ambiguity through concrete detail.", marks: 1, markCode: "M" },
              { reasoning: "Counterpoint: Poem B is more dramatically direct — 'Come in. Sit down. Stay.' — its imperatives create a different kind of power: the house's voice is unmistakable.", marks: 1, markCode: "M" },
              { reasoning: "Synthesis: A's power is psychological (the door as internal state); B's power is dramatic (the door as external force) — the poems offer different kinds of threshold, and 'better' depends on which effect is valued.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Point: A more psychologically complex. Evidence: undecidable door, hand on handle. Counterpoint: B more dramatically direct. Synthesis: different kinds of power.",
            commonErrors: ["Arguing one poem is simply better without acknowledging the other's distinct achievement."],
          },
        },
        {
          id: "langa-u5-cq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a comparative paragraph sequence (2 paragraphs) on the following paired texts, incorporating counterpoint in each.",
          extract: {
            title: "Two Crossings (reprise)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\nI cross it anyway.\nThe toll is one memory\nat a time.\n\nPOEM B: The old road ended\nat the river's edge.\nWe built a ferry instead —\ntwo planks and a rope.\nMy father called it progress.\nI call it a rope\nthat will hold until it doesn't.",
          },
          parts: [
            { label: "a", prompt: "Paragraph 1: compare the poems' treatments of change, with counterpoint.", marks: 4 },
            { label: "b", prompt: "Paragraph 2: compare the poems' treatments of risk, with counterpoint.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualified comparison", statement: "Point + paired evidence + analysis + counterpoint, balanced." },
            ],
            steps: [
              { part: "a", reasoning: "P1 point: A treats change as concealed continuity ('a different bridge, they say'); B treats change as visible improvisation ('we built a ferry instead').", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evidence: 'the carpenters insist / it is the same' (A) versus 'We built a ferry instead' (B) — paired quotations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Analysis: A's change is denied — the bridge is 'the same' despite being different; B's change is owned — the ferry is openly a replacement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Counterpoint: A's denial is psychologically realistic — people do insist on continuity; B's openness is perhaps naively optimistic — 'progress' may be the father's self-deception.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "P2 point: A's risk is internal ('the toll is one memory at a time'); B's risk is external ('a rope / that will hold until it doesn't').", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence: 'one memory / at a time' (A) versus 'a rope / that will hold until it doesn't' (B) — paired quotations.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Analysis: A's danger is cumulative and invisible — memory erodes without notice; B's danger is immediate and visible — the rope may fail at any moment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Counterpoint: A's internal risk may be more insidious (you don't notice the toll until it's too late); B's external risk is at least honest — the rope's fragility is acknowledged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P1 change: concealed continuity vs visible improvisation — with counterpoints on denial and optimism. P2 risk: internal erosion vs external fragility — with counterpoints on insidiousness and honesty.",
            commonErrors: ["One-sided comparison; counterpoint that undermines rather than strengthens."],
          },
        },
        {
          id: "langa-u5-cq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'limitation' as a type of counterpoint refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What the text cannot do or does not do" },
              { id: "b", text: "The essay's word limit" },
              { id: "c", text: "A grammatical error" },
              { id: "d", text: "The author's nationality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint types", statement: "Limitation = what the text cannot or does not do." },
            ],
            steps: [
              { reasoning: "A limitation identifies a capability or feature the text lacks — acknowledging it tests the argument.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** What the text cannot or does not do",
          },
        },
        {
          id: "langa-u5-cq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Scope' as a qualification means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The limits of the comparison itself" },
              { id: "b", text: "The number of texts compared" },
              { id: "c", text: "The essay's paragraph count" },
              { id: "d", text: "The difficulty of the vocabulary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint types", statement: "Scope = the limits of the comparison's applicability." },
            ],
            steps: [
              { reasoning: "Scope acknowledges where the comparison holds and where it may not extend — e.g. extracts versus whole works.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The limits of the comparison",
          },
        },
        {
          id: "langa-u5-cq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence best performs counterpoint within a comparative argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Text A is better than Text B in every way." },
              { id: "b", text: "Although B's image is simpler, its simplicity is precisely the point." },
              { id: "c", text: "Text B is not worth discussing." },
              { id: "d", text: "Both texts are equally good." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint", statement: "Claim + qualification = strengthened argument." },
            ],
            steps: [
              { reasoning: "Choice (b) concedes B's apparent weakness ('simpler') and reframes it as achievement ('the point') — classic counterpoint.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Concedes a limitation and reframes it",
          },
        },
        {
          id: "langa-u5-cq8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An 'alternative reading' as counterpoint means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rejecting the essay's own thesis" },
              { id: "b", text: "Acknowledging a defensible interpretation the essay does not adopt" },
              { id: "c", text: "Reading the text aloud" },
              { id: "d", text: "Summarising the plot" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint types", statement: "Alternative reading = a defensible interpretation acknowledged but not adopted." },
            ],
            steps: [
              { reasoning: "An alternative reading concedes that another interpretation exists — the essay acknowledges but does not adopt it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A defensible reading acknowledged but not adopted",
          },
        },
        {
          id: "langa-u5-cq9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where can counterpoint most effectively appear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only in the conclusion" },
              { id: "b", text: "Only in the introduction" },
              { id: "c", text: "In any paragraph, or distributed throughout, as well as in the conclusion" },
              { id: "d", text: "Only in footnotes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint placement", statement: "Counterpoint can appear in any paragraph and is strongest when distributed." },
            ],
            steps: [
              { reasoning: "Counterpoint is flexible — 'although/while' clauses can qualify any claim — and distributed use keeps the essay honest throughout.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Any paragraph; strongest when distributed",
          },
        },
        {
          id: "langa-u5-cq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A writer argues 'Text A's sustained metaphor is more powerful than Text B's brief image.' Which revision adds effective counterpoint?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding 'and Text B is boring'" },
              { id: "b", text: "Adding 'although B's brevity achieves a starkness A's elaboration cannot match'" },
              { id: "c", text: "Adding 'Text B uses a different metaphor'" },
              { id: "d", text: "Adding 'this is my opinion'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint formula", statement: "Claim + 'although/while' + qualification = strengthened argument." },
            ],
            steps: [
              { reasoning: "Effective counterpoint concedes a genuine strength in the other text — 'brevity achieves a starkness' — testing the claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Concedes B's distinct achievement",
          },
        },
        {
          id: "langa-u5-cq11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the three types of qualification used as counterpoint: limitation, alternative reading and scope.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualification types", statement: "Limitation + alternative reading + scope = tested argument." },
            ],
            steps: [
              { reasoning: "Limitation: what the text cannot do or does not do — e.g. 'A's metaphor, though sustained, never breaks its single frame.'", marks: 1, markCode: "M" },
              { reasoning: "Alternative reading: a defensible interpretation the essay acknowledges but does not adopt — e.g. 'B's simplicity could be read as failure rather than choice.'", marks: 1, markCode: "M" },
              { reasoning: "Scope: the limits of the comparison — e.g. 'this holds for the extracts but may not extend to the whole works.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limitation = what text lacks; alternative reading = conceded interpretation; scope = limits of the comparison.",
            commonErrors: ["Treating all three as the same move — they qualify different things."],
          },
        },
        {
          id: "langa-u5-cq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student writes: 'Text A's ending is more powerful because it is ambiguous.' Strengthen this claim with counterpoint, explaining your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint", statement: "Acknowledge the other text's distinct achievement to test the claim." },
            ],
            steps: [
              { reasoning: "Identify what Text B's ending might achieve that ambiguity cannot — e.g. decisiveness, emotional release, moral clarity.", marks: 1, markCode: "M" },
              { reasoning: "Draft the qualification: 'A's ambiguous ending is more powerful because it withholds resolution, although B's decisive ending achieves an emotional finality that ambiguity cannot deliver.'", marks: 1, markCode: "M" },
              { reasoning: "The counterpoint concedes a real strength (finality) without abandoning the claim (ambiguity's distinct power).", marks: 1, markCode: "M" },
              { reasoning: "The strengthened claim now acknowledges that 'power' takes different forms — the argument is tested, not assumed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add 'although B's decisiveness achieves a finality ambiguity cannot' — claim tested, not assumed.",
            commonErrors: ["Adding a counterpoint that actually agrees with the claim or is obviously false."],
          },
        },
        {
          id: "langa-u5-cq13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a sentence acknowledging a 'scope' limitation for a comparison based only on two extracts from longer poems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scope qualification", statement: "Acknowledge where the comparison holds and where it may not extend." },
            ],
            steps: [
              { reasoning: "Identify what the extracts can show — e.g. the poems' treatment of thresholds in these passages.", marks: 1, markCode: "M" },
              { reasoning: "Identify what they cannot show — e.g. whether the divergence holds across the whole poems or is a feature of these extracts only.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'This comparison holds for the extracts, though the poems' full arcs may complicate or reverse the divergence these passages stage.'", marks: 1, markCode: "M" },
              { reasoning: "Scope qualification protects the argument from overreach — it claims only what the evidence supports.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'This holds for the extracts, though the full poems may complicate the divergence' — claim limited to evidence.",
            commonErrors: ["Scope statements that undermine the entire argument rather than qualifying its reach."],
          },
        },
        {
          id: "langa-u5-cq14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a counterpoint that undermines the thesis is weaker than one that strengthens it, and rewrite this weak counterpoint: 'Text A is more powerful, although Text B is also good.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterpoint quality", statement: "Counterpoint should test the claim, not collapse it." },
            ],
            steps: [
              { reasoning: "'Although B is also good' is empty — it concedes nothing specific and could apply to any comparison.", marks: 1, markCode: "M" },
              { reasoning: "A strengthening counterpoint names a specific achievement in B that complicates but does not defeat the claim about A.", marks: 1, markCode: "M" },
              { reasoning: "Revised example: 'A's sustained metaphor is more powerful because it sustains a single figure to the end, although B's abrupt ending achieves a shock that A's gradualism cannot match.'", marks: 1, markCode: "M" },
              { reasoning: "The revision names B's distinct power (shock) while preserving A's claim (sustained figuration) — the argument is sharpened, not blurred.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific, complicating counterpoint strengthens; vague praise weakens. 'B's abrupt ending achieves a shock A cannot' tests the claim.",
            commonErrors: ["Counterpoints that are generic ('B is also good') or that concede the thesis entirely."],
          },
        },
        {
          id: "langa-u5-cq15",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two Beginnings",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: The story begins with a door. Not a metaphorical door — an actual door, oak, iron hinges, a knocker shaped like a fist. Before anything else happens, we understand that this house expects to be entered on its own terms.\n\nTEXT B: The story begins with a window. Not a metaphorical window — an actual window, cracked, painted shut, a curtain that has never been drawn. Before anything else happens, we understand that this house was built to be looked at, not entered.",
          },
          stem: "Write a comparative paragraph arguing that Text A's opening is more effective, while acknowledging Text B's distinct achievement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualified comparison", statement: "Judgement + paired evidence + counterpoint." },
            ],
            steps: [
              { reasoning: "Point: A's opening is more narratively generative — the door implies an entrance, a host, a transaction; it sets up expectation.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: 'an actual door, oak, iron hinges, a knocker shaped like a fist' — concrete detail that implies ritual and force.", marks: 1, markCode: "M" },
              { reasoning: "Counterpoint: B's window achieves a different power — 'painted shut', 'never been drawn' creates a mystery of exclusion that the door's invitation cannot match; B's house is more enigmatic.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: A's door creates a contract (entry will be negotiated); B's window creates a prohibition (entry is impossible) — different narrative engines.", marks: 1, markCode: "M" },
              { reasoning: "Synthesis: A's opening is more effective for generating plot; B's is more effective for generating atmosphere — 'better' depends on what the opening is for.", marks: 1, markCode: "A" },
              { reasoning: "The paragraph maintains balance — each text receives paired evidence before the judgement.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Point: A more generative. Evidence: door's contract vs window's prohibition. Counterpoint: B more enigmatic. Synthesis: plot vs atmosphere.",
            commonErrors: ["Arguing A is simply better without naming B's distinct achievement."],
          },
        },
        {
          id: "langa-u5-cq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Two Farewells",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: She waved until the train was a dot —\nthen kept waving,\nat the dot,\nat the empty track.\n\nPOEM B: She waved once,\nthen turned back to the house —\nthe kettle already singing.",
          },
          stem: "Write two comparative paragraphs on these poems, each incorporating a different type of counterpoint.",
          parts: [
            { label: "a", prompt: "Paragraph 1: compare the poems' treatments of time, with a limitation counterpoint.", marks: 4 },
            { label: "b", prompt: "Paragraph 2: compare the poems' treatments of domesticity, with an alternative-reading counterpoint.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualified comparison", statement: "Point + paired evidence + analysis + counterpoint, balanced." },
            ],
            steps: [
              { part: "a", reasoning: "P1 point: A stretches time — the wave continues past its object ('at the dot, / at the empty track'); B compresses it — 'waved once, / then turned back'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evidence: 'then kept waving' versus 'waved once' — paired temporal details.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Analysis: A's farewell is prolonged — grief outlasts the visible; B's is efficient — life resumes immediately.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Limitation counterpoint: A's dilation risks sentimentality — the poem cannot show what the prolonged wave achieves; B's compression risks coldness — it cannot show what is lost.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "P2 point: A's world contracts to the track; B's world reasserts itself — 'the kettle already singing' returns domesticity instantly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence: 'the empty track' versus 'the kettle already singing' — paired images of what each world contains.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Analysis: A's domestic space is evacuated by grief; B's is restored by routine — the poems diverge on whether home is a place to return to or a place emptied.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Alternative-reading counterpoint: B's quick return could be read not as resilience but as repression — the kettle singing may be a refusal to grieve; A's prolonged wave could be read as inability to let go rather than devotion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P1 time: dilation vs compression — limitation: sentimentality vs coldness. P2 domesticity: evacuation vs restoration — alternative readings: repression vs devotion.",
            commonErrors: ["Same counterpoint type repeated; counterpoints that merely restate the claim."],
          },
        },
      ],
    },
  ],
};
