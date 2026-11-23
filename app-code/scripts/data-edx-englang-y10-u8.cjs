const SPEECH = {
  title: "Excerpt from a class presentation",
  author: "Year 10 student",
  source: "Spoken Language practice transcript",
  text: "Good morning everyone. Today I want to talk about something most of us use every day but never really think about: our school library.\n\nNow, I know what you're thinking — 'books, shhh, due dates.' But stay with me. Last month I counted: 214 students borrowed zero books. Zero. And yet the library was full every lunch. Full of people doing homework, meeting friends, and — and this is the part that surprised me — asking the librarian for help with essays.\n\nSo the library isn't dying. It's changing. And honestly? I think that's rather exciting.",
};

const TOP4 = [
  { level: "Level 3", marks: "4", descriptor: "Clear, developed comment with relevant application and terminology." },
  { level: "Level 2", marks: "2-3", descriptor: "Some understanding with partial application." },
  { level: "Level 1", marks: "1", descriptor: "Simple, limited comment." },
];

const U8 = [
  {
    file: "lesson-8-1.ts", exportName: "lesson81",
    lesson: {
      id: "el10-u8-lesson-8-1", code: "8-1",
      title: "Planning a Presentation",
      goal: "I CAN plan a spoken presentation with a clear purpose, audience awareness and effective structure.",
      standards: ["4EA1 Spoken Language Endorsement", "4EA1 AO1", "4EA1 AO3", "4EA1 AO5"],
      vocabulary: [
        { term: "Purpose", definition: "What the presentation is meant to achieve — to inform, persuade, entertain or argue." },
        { term: "Audience", definition: "The people listening; their age, knowledge and expectations shape everything you say." },
        { term: "Signposting", definition: "Verbal cues that tell listeners where you are: 'first', 'now', 'finally'." },
        { term: "Register", definition: "The level of formality of language — casual for friends, formal for officials." },
        { term: "Rhetorical question", definition: "A question asked for effect, not expecting an answer." },
        { term: "Hook", definition: "An opening designed to grab attention immediately." },
      ],
      concepts: [
        {
          id: "el10-u8-purpose-audience",
          title: "Purpose, audience and structure",
          skill: "Plan a presentation's purpose, analyse the audience and organise its structure.",
          sections: [
            { heading: "Start with purpose and audience", body: "Before writing anything, answer two questions: **what is this presentation for?** (to inform, persuade, entertain, argue) and **who is listening?** A talk to Year 7 about library habits needs different language, examples and tone from the same topic to the school governors. Audience awareness is the single biggest factor in a successful presentation." },
            { heading: "Structuring a presentation", body: "A spoken text needs a clear arc: **hook** (grab attention), **orientation** (what you'll cover), **development** (two or three points, each signposted), **conclusion** (summarise and end strongly). Unlike essays, listeners cannot re-read — so each point must be announced ('The second thing I noticed was...') and each section must feel complete before you move on." },
            { heading: "Signposting and pacing", body: "Listeners rely on **signposts** to follow you: 'first', 'now', 'by contrast', 'finally'. Plan transitions deliberately. Also plan pauses: a silence before a key point lets it land. A presentation of five to seven minutes usually supports three main points — more and the audience loses the thread." },
          ],
          keyFormulas: [
            { name: "Purpose", statement: "Inform, persuade, entertain or argue — decide before you plan." },
            { name: "Structure", statement: "Hook → orientation → signposted points → strong conclusion." },
            { name: "Signposting", statement: "Verbal cues ('first', 'now', 'finally') that guide listeners." },
          ],
          workedExample: {
            problem: "Plan the structure for a five-minute presentation arguing that the school library should stay open at lunch.",
            solution: "Purpose: persuade. Audience: students and staff. Structure: (1) Hook — '214 students borrowed zero books last month' (surprising statistic). (2) Orientation — 'the library isn't dying, it's changing'. (3) Point 1 — evidence of new uses (homework, essays). (4) Point 2 — what closing would lose. (5) Conclusion — reopen, reframed as a community hub. Each point signposted; ~60 seconds each.",
          },
          questions: [
            {
              id: "el10-u8-purpose-audience-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "What is the first question you should answer when planning a presentation?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "What font should the slides use?" },
                  { id: "b", text: "What is the presentation's purpose?" },
                  { id: "c", text: "How long is the average word?" },
                  { id: "d", text: "What time does it start?" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Purpose", statement: "Every presentation begins with its intended effect." }],
                steps: [{ reasoning: "Purpose determines content, tone and structure.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** What its purpose is.",
              },
            },
            {
              id: "el10-u8-purpose-audience-q2",
              difficulty: "foundation", totalMarks: 2,
              stem: "Give two ways a presentation to Year 7 students should differ from the same presentation to school governors.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Audience awareness", statement: "Language, examples and tone adapt to listeners." }],
                steps: [
                  { reasoning: "Language/register: simpler, more informal words for Year 7; more formal, precise terms for governors.", marks: 1, markCode: "AO5" },
                  { reasoning: "Examples and tone: relatable, vivid examples for students; evidence, data and implications for governors.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Simpler, informal language and relatable examples for Year 7; formal register, evidence and strategic implications for governors.",
              },
            },
            {
              id: "el10-u8-purpose-audience-q3",
              difficulty: "core", totalMarks: 3,
              stem: "Explain why 'signposting' matters more in a spoken presentation than in a written essay.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Signposting", statement: "Listeners cannot re-read, so they need verbal directions." }],
                steps: [
                  { reasoning: "Listeners cannot flick back; they need to know where they are.", marks: 1, markCode: "AO3" },
                  { reasoning: "Signposts ('first', 'now', 'finally') mark structure in real time.", marks: 1, markCode: "AO3" },
                  { reasoning: "They also give the audience moments to absorb each point.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Listeners cannot re-read, so verbal signposts orient them in real time, mark each point and give them moments to absorb.",
              },
            },
            {
              id: "el10-u8-purpose-audience-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "A student plans a six-minute presentation on plastic pollution with nine main points. Identify three problems with this plan and suggest improvements.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Pacing and selection", statement: "Too many points overwhelm listeners; select and prioritise." }],
                steps: [
                  { reasoning: "Nine points cannot each get meaningful time — roughly 40 seconds each, too shallow.", marks: 2, markCode: "AO3" },
                  { reasoning: "Listeners lose the thread without signposted groupings.", marks: 1, markCode: "AO5" },
                  { reasoning: "Improvement: select three strongest points, group related ideas, signpost each.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Nine points are too many for six minutes — each gets ~40 seconds and listeners lose the thread; group into three signposted points instead.",
                commonErrors: ["Listing problems without improvements."],
              },
            },
            {
              id: "el10-u8-purpose-audience-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Plan the structure of a five-minute presentation arguing that your school should start a lunchtime gardening club. Include purpose, audience, hook, points and conclusion.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Presentation planning", statement: "Purpose + audience → hook → signposted points → conclusion." },
                  { kind: "technique", name: "Hook", statement: "An opening statistic, question or image grabs attention." },
                ],
                steps: [
                  { reasoning: "Purpose and audience identified: persuade students/staff; appropriate register.", marks: 2, markCode: "AO5" },
                  { reasoning: "Hook planned (e.g. 'Our school throws away enough food for a garden').", marks: 1, markCode: "AO5" },
                  { reasoning: "Two or three signposted points (food waste, wellbeing, skill-building) with evidence.", marks: 2, markCode: "AO3" },
                  { reasoning: "Clear conclusion with a call to action.", marks: 2, markCode: "AO3" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Complete, audience-aware plan with hook, signposted points and strong conclusion." },
                  { level: "Level 2", marks: "4-6", descriptor: "Workable plan missing one element such as the hook or signposts." },
                  { level: "Level 1", marks: "1-3", descriptor: "Partial plan or topic list." },
                ],
                finalAnswer: "Purpose: persuade; audience: students/staff. Hook on food waste; three signposted points (waste, wellbeing, skills); conclusion calling for action.",
                commonErrors: ["Planning content without audience awareness.", "No hook or weak conclusion."],
              },
            },
            {
              id: "el10-u8-purpose-audience-q6",
              difficulty: "challenge", totalMarks: 12,
              stem: "Read the scenario and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "State the purpose and audience for the library presentation described in the transcript.", marks: 4 },
                { label: "b", prompt: "Identify the hook and the two signposts used in the transcript.", marks: 4 },
                { label: "c", prompt: "Explain how the speaker adapts the presentation to the audience and purpose.", marks: 4 },
              ],
              response: { type: "open" },
              extract: SPEECH,
              markscheme: {
                principles: [
                  { kind: "skill", name: "Purpose and audience", statement: "Adaptation to listeners is the core of effective speaking." },
                  { kind: "technique", name: "Hook and signposts", statement: "Opening devices and verbal cues structure a speech." },
                ],
                steps: [
                  { part: "a", reasoning: "Purpose: to argue/inform that the library is changing, not dying — likely to persuade listeners of its value.", marks: 2, markCode: "AO5" },
                  { part: "a", reasoning: "Audience: classmates — informal, relatable framing ('I know what you're thinking').", marks: 2, markCode: "AO5" },
                  { part: "b", reasoning: "Hook: the surprising statistic '214 students borrowed zero books'.", evidence: "214 students borrowed zero books", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Signposts/orientation: 'stay with me', 'the part that surprised me', 'that's rather exciting'.", marks: 2, markCode: "AO1" },
                  { part: "c", reasoning: "Contractions, direct address and imagined objections ('books, shhh, due dates') suit classmates.", marks: 2, markCode: "AO5" },
                  { part: "c", reasoning: "Evidence is gathered personally ('I counted'), making it credible and audience-appropriate.", marks: 2, markCode: "AO5" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) Purpose: persuade/inform about the library's changing role; audience: classmates. (b) Hook: the 'zero books' statistic; signposts: 'stay with me', 'the part that surprised me'. (c) Informal register, direct address, imagined audience objections and first-hand evidence suit the peer audience and persuasive purpose.",
                commonErrors: ["(a) Missing the persuasive purpose.", "(b) Confusing hook with signpost."],
              },
            },
          ],
        },
        {
          id: "el10-u8-speech-language",
          title: "Language and register for speech",
          skill: "Choose vocabulary, rhetorical devices and register appropriate to a spoken presentation.",
          sections: [
            { heading: "Spoken versus written language", body: "Speech is heard once, so it needs shorter sentences, concrete nouns and verbal signposts. Avoid dense subordinate clauses and unexplained jargon. Repetition is your friend: key phrases can be repeated for emphasis in a way that would feel heavy in an essay. Direct address — 'you', 'we', 'our' — builds inclusion." },
            { heading: "Rhetorical devices for speeches", body: "Speeches thrive on **rhetorical questions** ('And is that acceptable?'), **triads** ('faster, cheaper, better'), **repetition** ('We said we would. We did not.'), **contrast** ('They promised change; we got concrete.') and **direct address**. These devices exist to be heard — rhythm matters as much as meaning." },
            { heading: "Register and tone", body: "Match register to audience: informal for peers ('loads of', 'honestly'), formal for officials. Tone should match purpose — passionate for persuasion, measured for information. Read your sentences aloud during planning: if you stumble, the audience will too." },
          ],
          keyFormulas: [
            { name: "Register", statement: "Formality level matched to audience — informal, neutral or formal." },
            { name: "Rhetorical question", statement: "A question asked for effect that prompts listeners to think, not answer." },
            { name: "Triad", statement: "A group of three for rhythm and memorability — 'faster, cheaper, better'." },
          ],
          workedExample: {
            problem: "Improve this written-style sentence for a speech: 'The utilisation of single-use plastics by the institution necessitates immediate reconsideration.'",
            solution: "Spoken version: 'We use throwaway plastic every single day — and we need to stop.' Shorter clauses, concrete 'plastic', direct 'we', repetition of 'single/stop'. Same meaning, but it can be heard and felt.",
          },
          questions: [
            {
              id: "el10-u8-speech-language-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "Which sentence is most appropriate for a spoken presentation to classmates?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The utilisation of resources necessitates reconsideration." },
                  { id: "b", text: "We need to talk about what we're doing with our stuff." },
                  { id: "c", text: "Notwithstanding aforementioned factors, conclusions remain indeterminate." },
                  { id: "d", text: "One must perambulate circumspectly whilst endeavouring to ascertain." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Spoken register", statement: "Speech needs short, concrete, direct sentences." }],
                steps: [{ reasoning: "Option (b) is short, concrete and direct — hearable once.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** 'We need to talk about what we're doing with our stuff.'",
              },
            },
            {
              id: "el10-u8-speech-language-q2",
              difficulty: "foundation", totalMarks: 2,
              stem: "Give two reasons why repetition is more effective in a speech than in an essay.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Repetition in speech", statement: "Listeners cannot re-read, so repetition reinforces key ideas." }],
                steps: [
                  { reasoning: "Listeners hear once; repetition ensures the key phrase is not missed.", marks: 1, markCode: "AO5" },
                  { reasoning: "Rhythm and emphasis make repeated phrases memorable.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Listeners cannot re-read, so repetition ensures key ideas land and adds rhythm and emphasis.",
              },
            },
            {
              id: "el10-u8-speech-language-q3",
              difficulty: "core", totalMarks: 3,
              stem: "Rewrite this sentence as speech for Year 7 listeners, using a rhetorical question and direct address: 'Students should reduce their use of disposable water bottles.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Rhetorical devices", statement: "Questions and direct address engage listeners." }],
                steps: [
                  { reasoning: "Direct address: 'you' or 'we' — e.g. 'How many of you bought a water bottle this week?'", marks: 1, markCode: "AO5" },
                  { reasoning: "Concrete, spoken phrasing — 'throwaway bottles' rather than 'disposable water bottles'.", marks: 1, markCode: "AO5" },
                  { reasoning: "Clear, hearable sentence a listener can follow once.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Model: 'How many bottles did you throw away this week? We buy them, we use them once, and we bin them — let's stop.'",
              },
            },
            {
              id: "el10-u8-speech-language-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "Compare the effect of these two openings for a persuasive speech and explain which is stronger for a live audience: (A) 'It is a well-documented fact that adolescent sleep deprivation correlates with diminished cognitive performance.' (B) 'Last night, most of you got about six hours' sleep. Six. And tomorrow you've got tests.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Audience engagement", statement: "Concrete, direct openings engage listeners; abstract ones do not." }],
                steps: [
                  { reasoning: "(A) is written-register: nominalised, impersonal, hard to hear once.", marks: 2, markCode: "AO5" },
                  { reasoning: "(B) uses direct address, a concrete statistic, repetition ('Six.') and stakes ('tests').", marks: 2, markCode: "AO5" },
                  { reasoning: "(B) is stronger for a live audience because it is hearable, personal and urgent.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "(B) is stronger: direct address, a concrete personal statistic, repetition and immediate stakes engage a live audience; (A) is impersonal written-style language.",
                commonErrors: ["Choosing (A) for sounding 'sophisticated'."],
              },
            },
            {
              id: "el10-u8-speech-language-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Write a 60-second spoken introduction (about 120 words) for a presentation arguing that homework should be reduced. Use at least two rhetorical devices.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Rhetorical devices", statement: "Triads, repetition, rhetorical questions and direct address engage listeners." },
                  { kind: "skill", name: "Spoken style", statement: "Short sentences, concrete language, spoken register." },
                ],
                steps: [
                  { reasoning: "Opening hook addressing the audience directly.", marks: 2, markCode: "AO5" },
                  { reasoning: "Two rhetorical devices used effectively (e.g. rhetorical question, repetition, triad).", marks: 2, markCode: "AO5" },
                  { reasoning: "Clear persuasive purpose signposted; spoken-style sentences.", marks: 2, markCode: "AO3" },
                  { reasoning: "Appropriate length and register for a live audience.", marks: 1, markCode: "AO5" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Engaging, audience-aware spoken introduction with effective rhetorical devices." },
                  { level: "Level 2", marks: "4-6", descriptor: "Workable introduction with some devices or audience awareness." },
                  { level: "Level 1", marks: "1-3", descriptor: "Limited or written-style opening." },
                ],
                finalAnswer: "A ~120-word spoken introduction with a hook, two rhetorical devices, clear persuasive purpose and informal register.",
                commonErrors: ["Written-style density.", "Devices used mechanically without effect."],
              },
            },
            {
              id: "el10-u8-speech-language-q6",
              difficulty: "challenge", totalMarks: 12,
              extract: SPEECH,
              stem: "Read the presentation excerpt and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify the register used and give two features that show it.", marks: 4 },
                { label: "b", prompt: "Find two rhetorical or spoken devices used and explain their effect.", marks: 4 },
                { label: "c", prompt: "How does the speaker's language adapt the presentation to its audience? Support your answer with reference to the text.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Register and devices", statement: "Spoken language adapts to audience through register and rhetorical devices." },
                  { kind: "technique", name: "Direct address and statistics", statement: "'You', 'we' and concrete figures engage listeners." },
                ],
                steps: [
                  { part: "a", reasoning: "Informal register suited to classmates.", marks: 1, markCode: "AO5" },
                  { part: "a", reasoning: "Features: contractions ('what you're thinking'), colloquial 'stayed with me', imagined audience voice.", marks: 3, markCode: "AO5" },
                  { part: "b", reasoning: "Direct address / imagined objection: 'I know what you're thinking — books, shhh, due dates'.", evidence: "books, shhh, due dates", marks: 2, markCode: "AO5" },
                  { part: "b", reasoning: "Repetition and emphasis: 'Full of people... Full of'; statistic '214... Zero. And yet'.", evidence: "Zero. And yet", marks: 2, markCode: "AO5" },
                  { part: "c", reasoning: "Peer audience addressed as 'you'/'we'; topic made personal through 'I counted'.", marks: 2, markCode: "AO5" },
                  { part: "c", reasoning: "Anticipates and voices listeners' objections, then reframes ('rather exciting') to persuade.", marks: 2, markCode: "AO5" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) Informal register: contractions, colloquialisms, imagined audience voice. (b) Imagined objection 'books, shhh, due dates'; emphatic repetition and the 'Zero' statistic. (c) Direct address, first-hand evidence and anticipating objections adapt the speech to classmates and its persuasive purpose.",
                commonErrors: ["(a) Not linking features to audience.", "(b) Naming devices without effect."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u8-planning-notes", title: "Planning presentations — notes",
      summary: "Purpose and audience first; hook, signposted points, strong conclusion. Speech needs short sentences, repetition and rhetorical devices.",
      sections: [
        { heading: "Plan", body: "Purpose → audience → hook → points → conclusion; signpost every move." },
        { heading: "Language", body: "Short sentences, direct address, repetition, rhetorical questions; read aloud to test." },
      ],
    },
  },
  {
    file: "lesson-8-2.ts", exportName: "lesson82",
    lesson: {
      id: "el10-u8-lesson-8-2", code: "8-2",
      title: "Delivering a Presentation",
      goal: "I CAN deliver a presentation confidently using voice, pace, body language and response skills.",
      standards: ["4EA1 Spoken Language Endorsement", "4EA1 AO1", "4EA1 AO5"],
      vocabulary: [
        { term: "Projection", definition: "Speaking loudly and clearly enough for the whole room to hear." },
        { term: "Pace", definition: "The speed of delivery; slower for key points, varied to hold attention." },
        { term: "Pause", definition: "A deliberate silence that lets a point land or marks a transition." },
        { term: "Eye contact", definition: "Looking at listeners to engage them and gauge understanding." },
        { term: "Open posture", definition: "Standing upright and facing the audience, signalling confidence." },
        { term: "Clarification", definition: "Asking a listener to repeat or explain a question before answering." },
      ],
      concepts: [
        {
          id: "el10-u8-delivery-technique",
          title: "Voice, pace and body language",
          skill: "Use vocal and physical techniques to deliver a presentation effectively.",
          sections: [
            { heading: "Voice and pace", body: "**Project** so the back row hears you; vary pitch and volume to avoid monotone. Control **pace**: slower for key points, slightly faster for familiar material, and pause before and after important statements. A pause is not dead air — it is emphasis. Breathe before you start; nervous speakers rush." },
            { heading: "Body language", body: "Stand with **open posture**, feet planted, facing the audience. Use **eye contact** by sweeping the room rather than staring at one person or your notes. Gestures should be purposeful — open hands for inclusion, a pointed finger for emphasis — and none at all is better than fidgeting. Move with intention; pacing randomly signals nerves." },
            { heading: "Managing nerves", body: "Nerves are normal; channel them. Prepare thoroughly, practise aloud, arrive early, and remember the audience wants you to succeed. If you lose your place, pause, breathe, and continue from your last signpost rather than apologising repeatedly." },
          ],
          keyFormulas: [
            { name: "Projection", statement: "Speak loudly and clearly enough for every listener." },
            { name: "Pace and pause", statement: "Slow for key points; pause before and after them." },
            { name: "Eye contact", statement: "Sweep the room; hold each section of the audience briefly." },
          ],
          workedExample: {
            problem: "A speaker rushes through their final point and is inaudible at the back. Diagnose and fix.",
            solution: "Problems: no projection, rushed pace, no pause before the key point. Fixes: breathe and project to the back row; slow down for the final point; pause before stating it so it lands; use a deliberate gesture and eye contact with the back of the room.",
          },
          questions: [
            {
              id: "el10-u8-delivery-technique-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "What does 'projection' mean in presentation delivery?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Showing slides on a projector" },
                  { id: "b", text: "Speaking loudly and clearly enough for everyone to hear" },
                  { id: "c", text: "Memorising your script perfectly" },
                  { id: "d", text: "Standing very still" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Projection", statement: "Vocal volume and clarity reaching every listener." }],
                steps: [{ reasoning: "Projection is about being heard by the whole room.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** Speaking loudly and clearly enough for everyone.",
              },
            },
            {
              id: "el10-u8-delivery-technique-q2",
              difficulty: "foundation", totalMarks: 2,
              stem: "Give two reasons a deliberate pause improves a presentation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Pause", statement: "Silence marks emphasis and lets points land." }],
                steps: [
                  { reasoning: "It lets a key point sink in before you move on.", marks: 1, markCode: "AO5" },
                  { reasoning: "It signals a transition or builds anticipation.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "A pause lets key points land and signals transitions or builds anticipation.",
              },
            },
            {
              id: "el10-u8-delivery-technique-q3",
              difficulty: "core", totalMarks: 3,
              stem: "Explain three ways eye contact improves a presentation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Eye contact", statement: "Visual engagement connects speaker and audience." }],
                steps: [
                  { reasoning: "It engages listeners, making them feel addressed.", marks: 1, markCode: "AO5" },
                  { reasoning: "It lets you gauge understanding and adjust.", marks: 1, markCode: "AO5" },
                  { reasoning: "Sweeping the room includes everyone; staring at notes excludes them.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Eye contact engages listeners, lets you gauge understanding and — when swept across the room — includes everyone.",
              },
            },
            {
              id: "el10-u8-delivery-technique-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "A speaker delivers a well-planned presentation but speaks too fast, looks at their notes constantly, and stands rigidly behind the desk. Explain how each problem affects the audience and how to fix it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Delivery diagnosis", statement: "Vocal and physical habits directly shape audience reception." }],
                steps: [
                  { reasoning: "Too fast: listeners cannot absorb; fix by slowing for key points and pausing.", marks: 2, markCode: "AO5" },
                  { reasoning: "Constant note-reading: loses audience and sounds unprepared; fix with signposted memory triggers and eye contact.", marks: 2, markCode: "AO5" },
                  { reasoning: "Rigid behind desk: signals nervousness and blocks presence; fix with open posture and purposeful movement.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Rushing loses comprehension; note-reading loses engagement; rigidity signals nerves. Fix with paced delivery, pauses, eye contact and open posture.",
                commonErrors: ["Listing fixes without explaining audience effect."],
              },
            },
            {
              id: "el10-u8-delivery-technique-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Write delivery notes for yourself for the final 60 seconds of a persuasive presentation. Include pace, pause, eye contact, gesture and voice.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Delivery planning", statement: "Rehearse not just words but how they will be delivered." },
                  { kind: "technique", name: "Vocal and physical emphasis", statement: "Slow, pause, gesture and eye contact make the ending land." },
                ],
                steps: [
                  { reasoning: "Pace plan: slow deliberately for the final point.", marks: 1, markCode: "AO5" },
                  { reasoning: "Pause before the key statement and after it.", marks: 2, markCode: "AO5" },
                  { reasoning: "Eye contact with different sections of the room.", marks: 1, markCode: "AO5" },
                  { reasoning: "Gesture and voice: open gesture, projected final line, firm tone.", marks: 2, markCode: "AO5" },
                  { reasoning: "Overall notes are specific and actionable, not generic ('be confident').", marks: 1, markCode: "AO5" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Specific, actionable delivery notes covering all five elements." },
                  { level: "Level 2", marks: "4-6", descriptor: "Covers most elements with some detail." },
                  { level: "Level 1", marks: "1-3", descriptor: "Generic or incomplete notes." },
                ],
                finalAnswer: "Specific notes: slow the final point, pause before and after the key line, sweep eye contact, open gesture, projected firm final line.",
                commonErrors: ["Generic advice like 'speak clearly'."],
              },
            },
            {
              id: "el10-u8-delivery-technique-q6",
              difficulty: "challenge", totalMarks: 12,
              stem: "A speaker is delivering a presentation and encounters three moments: (1) they lose their place, (2) someone at the back cannot hear them, (3) a listener looks confused. Answer the questions that follow.",
              parts: [
                { label: "a", prompt: "What should the speaker do when they lose their place?", marks: 4 },
                { label: "b", prompt: "What should the speaker do about the listener who cannot hear?", marks: 4 },
                { label: "c", prompt: "What should the speaker do when a listener looks confused?", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Recovery techniques", statement: "Composure under difficulty is part of effective delivery." },
                  { kind: "technique", name: "Audience feedback", statement: "Reading the room lets you adapt in real time." },
                ],
                steps: [
                  { part: "a", reasoning: "Pause calmly, breathe, find the last signpost and continue.", marks: 2, markCode: "AO5" },
                  { part: "a", reasoning: "Avoid repeated apologies; resume confidently.", marks: 2, markCode: "AO5" },
                  { part: "b", reasoning: "Project more, slow slightly, articulate key words.", marks: 2, markCode: "AO5" },
                  { part: "b", reasoning: "Move toward the back or reposition; repeat the point clearly.", marks: 2, markCode: "AO5" },
                  { part: "c", reasoning: "Slow down, repeat or rephrase the point in simpler terms.", marks: 2, markCode: "AO5" },
                  { part: "c", reasoning: "Check understanding ('Does that make sense?') or use an example.", marks: 2, markCode: "AO5" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) Pause, breathe, resume from the last signpost without repeated apology. (b) Project, slow, articulate, reposition, repeat the point. (c) Slow, rephrase simply, check understanding or give an example.",
                commonErrors: ["Panicking or over-apologising.", "Ignoring non-verbal feedback."],
              },
            },
          ],
        },
        {
          id: "el10-u8-qa-skills",
          title: "Responding to questions and discussion",
          skill: "Handle questions, contribute to discussion and evaluate performance effectively.",
          sections: [
            { heading: "Handling questions", body: "Listen to the whole question before answering. If unsure of a term, ask for **clarification** ('Do you mean X or Y?'). Answer directly, then expand. If you do not know, say so honestly and offer to follow up — bluffing damages credibility. For hostile or off-topic questions, acknowledge briefly and steer back: 'That's interesting; my focus today was...'." },
            { heading: "Contributing to discussion", body: "Good discussion contributions **build** on others ('Building on what Amara said...'), **disagree respectfully** ('I see it differently because...'), and **evidence** points ('In the text, the writer...'). Keep contributions concise; a discussion is not a series of mini-speeches. Ask questions as well as answering them." },
            { heading: "Evaluating performance", body: "Evaluation means judging against criteria: purpose met? audience adapted? structure clear? delivery effective? Be specific — 'the pace was too fast in the middle' beats 'it was okay'. Peer evaluation should be honest but constructive, always suggesting an improvement alongside a criticism." },
          ],
          keyFormulas: [
            { name: "Clarification", statement: "Ask the listener to repeat or define before answering." },
            { name: "Building", statement: "Contributions that extend others' points strengthen discussion." },
            { name: "Criteria-based evaluation", statement: "Judge against purpose, audience, structure and delivery." },
          ],
          workedExample: {
            problem: "A speaker is asked 'But isn't homework actually good for you?' after arguing homework should be reduced. How should they respond?",
            solution: "Acknowledge the point, clarify if needed, then answer with evidence: 'Fair point — some homework consolidates learning. My argument is about quantity and quality: the issue isn't homework itself but excessive, repetitive tasks that displace sleep and wellbeing.' This concedes partially while holding the position.",
          },
          questions: [
            {
              id: "el10-u8-qa-skills-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "What should you do first when asked a question you are unsure about?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Bluff confidently" },
                  { id: "b", text: "Ask the questioner to clarify or repeat" },
                  { id: "c", text: "Change the subject immediately" },
                  { id: "d", text: "Say nothing" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Clarification", statement: "Ensure you understand the question before answering." }],
                steps: [{ reasoning: "Clarifying prevents answering the wrong question.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** Ask for clarification or a repeat.",
              },
            },
            {
              id: "el10-u8-qa-skills-q2",
              difficulty: "foundation", totalMarks: 2,
              stem: "Give two features of a strong discussion contribution.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Discussion skills", statement: "Contributions should build, evidence and stay concise." }],
                steps: [
                  { reasoning: "Builds on others' points or disagrees respectfully with reasoning.", marks: 1, markCode: "AO5" },
                  { reasoning: "Supported by evidence and kept concise.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Building on or respectfully challenging others' points, supported by evidence and kept concise.",
              },
            },
            {
              id: "el10-u8-qa-skills-q3",
              difficulty: "core", totalMarks: 3,
              stem: "A speaker does not know the answer to a question. What is the most credible response, and why?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Honesty in Q&A", statement: "Credibility is preserved by honesty plus a follow-up offer." }],
                steps: [
                  { reasoning: "Admit not knowing directly rather than bluffing.", marks: 1, markCode: "AO5" },
                  { reasoning: "Offer to find out or follow up after the session.", marks: 1, markCode: "AO5" },
                  { reasoning: "Optionally relate it to what you do know to stay helpful.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Say honestly that you don't know, offer to follow up, and if possible connect it to what you do know — honesty preserves credibility.",
              },
            },
            {
              id: "el10-u8-qa-skills-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "During a discussion, a classmate makes a point you disagree with. Explain how to disagree respectfully and effectively.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Respectful disagreement", statement: "Challenge ideas, not people; give reasons." }],
                steps: [
                  { reasoning: "Acknowledge the point first ('That's a fair point, but...').", marks: 2, markCode: "AO5" },
                  { reasoning: "Give reasoning or evidence for your view ('I see it differently because...').", marks: 2, markCode: "AO5" },
                  { reasoning: "Keep it about the idea, not the person; invite response.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Acknowledge their point, disagree with reasons or evidence ('I see it differently because...'), keep it about the idea and invite response.",
                commonErrors: ["Personal attacks or dismissive language."],
              },
            },
            {
              id: "el10-u8-qa-skills-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Write peer feedback for a classmate's presentation. It should include one strength, one improvement and one specific suggestion, judged against purpose, audience, structure and delivery.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Peer evaluation", statement: "Feedback judges against criteria and suggests improvements." },
                  { kind: "skill", name: "Constructive criticism", statement: "Honest but supportive; always pair criticism with a suggestion." },
                ],
                steps: [
                  { reasoning: "Specific strength linked to a criterion (e.g. 'Your hook statistic grabbed attention immediately').", marks: 2, markCode: "AO5" },
                  { reasoning: "Specific improvement ('The middle section lost pace; three points were rushed').", marks: 2, markCode: "AO5" },
                  { reasoning: "Actionable suggestion ('Slow down and pause before your final point').", marks: 2, markCode: "AO5" },
                  { reasoning: "Tone is constructive, not harsh.", marks: 1, markCode: "AO5" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Balanced, criteria-based feedback with specific strength, improvement and suggestion." },
                  { level: "Level 2", marks: "4-6", descriptor: "Feedback covers most elements but may be less specific." },
                  { level: "Level 1", marks: "1-3", descriptor: "Vague or one-sided feedback." },
                ],
                finalAnswer: "Specific strength (e.g. effective hook), specific improvement (e.g. rushed middle), actionable suggestion (e.g. pause before the final point) — judged against criteria constructively.",
                commonErrors: ["Vague praise or criticism.", "Only negative or only positive feedback."],
              },
            },
            {
              id: "el10-u8-qa-skills-q6",
              difficulty: "challenge", totalMarks: 12,
              stem: "During a presentation Q&A, three situations occur. Answer the questions that follow.",
              parts: [
                { label: "a", prompt: "A listener asks a question using a term you are unsure they mean. What do you do?", marks: 4 },
                { label: "b", prompt: "A listener challenges your main argument. How do you respond?", marks: 4 },
                { label: "c", prompt: "After the presentation, how do you evaluate your own performance against the criteria of purpose, audience, structure and delivery?", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Q&A handling", statement: "Clarify, answer honestly and engage challenges with evidence." },
                  { kind: "skill", name: "Self-evaluation", statement: "Judge performance against explicit criteria." },
                ],
                steps: [
                  { part: "a", reasoning: "Ask for clarification: 'Do you mean X or Y?' before answering.", marks: 2, markCode: "AO5" },
                  { part: "a", reasoning: "Ensures you answer the intended question.", marks: 2, markCode: "AO5" },
                  { part: "b", reasoning: "Acknowledge the challenge respectfully.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "Respond with reasoning or evidence; concede partially if valid.", marks: 2, markCode: "AO5" },
                  { part: "b", reasoning: "Hold your position where the evidence supports it.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Assess each criterion specifically: purpose met, audience adapted, structure clear, delivery effective.", marks: 2, markCode: "AO5" },
                  { part: "c", reasoning: "Identify one strength and one improvement for next time.", marks: 2, markCode: "AO5" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) Ask for clarification before answering. (b) Acknowledge, respond with evidence, concede where valid, hold position where supported. (c) Assess purpose, audience, structure and delivery specifically; note one strength and one improvement.",
                commonErrors: ["Answering without clarifying.", "Becoming defensive under challenge.", "Vague self-evaluation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u8-delivery-notes", title: "Delivery and Q&A — notes",
      summary: "Project, pace, pause, eye contact and open posture deliver the words; clarification, honesty and evidence handle questions.",
      sections: [
        { heading: "Delivery", body: "Voice reaches the back; pace varies; pauses emphasise; eyes engage; posture signals confidence." },
        { heading: "Q&A", body: "Clarify unclear questions, answer honestly, challenge ideas not people, evaluate against criteria." },
      ],
    },
  },
  {
    file: "lesson-8-3.ts", exportName: "lesson83",
    lesson: {
      id: "el10-u8-lesson-8-3", code: "8-3",
      title: "The Non-Examined Assessment",
      goal: "I CAN approach the Component 3 assignment and produce well-edited coursework responding to texts.",
      standards: ["4EA1 Component 3", "4EA1 AO1", "4EA1 AO3", "4EA1 AO4"],
      vocabulary: [
        { term: "Non-examined assessment", definition: "Coursework completed outside exam conditions — Component 3 of 4EA1." },
        { term: "Anthology", definition: "The Pearson Edexcel English anthology containing the set texts for the course." },
        { term: "Assignment task", definition: "The specific question or prompt the coursework must answer." },
        { term: "Selection", definition: "Choosing only the most relevant material from the texts for your answer." },
        { term: "Drafting", definition: "Writing an early version to be reviewed and improved." },
        { term: "Editing", definition: "Improving structure, evidence, accuracy and style before submission." },
      ],
      concepts: [
        {
          id: "el10-u8-coursework-assignment",
          title: "The Component 3 assignment",
          skill: "Understand and approach the non-examined assessment responding to anthology texts.",
          sections: [
            { heading: "What Component 3 involves", body: "Component 3 is the **non-examined assessment**: a coursework assignment completed in controlled conditions at school, worth 40% of the qualification. Candidates respond to texts from **Part 2 of the anthology** (poetry and prose fiction studied during the course). Unlike Paper 2's exam questions, you have time to plan, draft and edit — but the marking criteria reward the same skills: understanding, analysis and effective organisation." },
            { heading: "Reading the task", body: "Underline every word of the assignment question. Identify: how many texts must you cover? what aspect (language, structure, perspective, comparison)? what form should the answer take? Plan before writing: note each text's relevant methods, then decide your argument. The best coursework has a clear, arguable line through it — not a survey of everything you know." },
            { heading: "Using anthology texts", body: "Because these are texts you have studied, you can select your evidence carefully rather than relying on memory under pressure. Re-read your notes and mark the moments that serve your argument. Quote precisely and briefly; embed quotations in analytical sentences; and keep returning to the question's exact focus throughout." },
          ],
          keyFormulas: [
            { name: "Component 3", statement: "Non-examined assessment on anthology Part 2 texts; controlled conditions at school." },
            { name: "Task analysis", statement: "Underline the question; note text count, aspect and required form." },
            { name: "Arguable line", statement: "A clear thesis your evidence will prove, not a survey of everything." },
          ],
          workedExample: {
            problem: "An assignment asks: 'Compare how two anthology writers present conflict.' How do you approach it?",
            solution: "Step 1: choose the two texts and note each writer's methods for presenting conflict (imagery, dialogue, structure). Step 2: form an arguable line — e.g. 'Writer A dramatises conflict through dialogue while Writer B compresses it into violent imagery.' Step 3: gather three paired pieces of evidence. Step 4: draft point-by-point. Step 5: edit for embedded quotations and SPAG accuracy.",
          },
          questions: [
            {
              id: "el10-u8-coursework-assignment-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "Which texts does the Component 3 non-examined assessment draw on?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Unseen texts provided on the day" },
                  { id: "b", text: "Texts from Part 2 of the Pearson Edexcel anthology" },
                  { id: "c", text: "Only your own creative writing" },
                  { id: "d", text: "Newspaper articles" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Component 3", statement: "Non-examined assessment on anthology Part 2 texts." }],
                steps: [{ reasoning: "Component 3 uses the studied anthology texts.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** Part 2 of the anthology.",
              },
            },
            {
              id: "el10-u8-coursework-assignment-q2",
              difficulty: "foundation", totalMarks: 2,
              stem: "Give two advantages coursework has over a timed exam for this kind of analysis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Coursework advantages", statement: "Time allows planning, drafting and editing." }],
                steps: [
                  { reasoning: "Time to re-read texts and select the best evidence.", marks: 1, markCode: "AO3" },
                  { reasoning: "Ability to draft and edit for accuracy and structure.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Time to re-read and select evidence, plus drafting and editing for accuracy and structure.",
              },
            },
            {
              id: "el10-u8-coursework-assignment-q3",
              difficulty: "core", totalMarks: 3,
              stem: "An assignment asks you to 'analyse how a writer presents a character'. Explain three steps you should take before writing your first draft.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Task analysis", statement: "Decode the question before planning." }],
                steps: [
                  { reasoning: "Underline key words: 'analyse', 'presents', 'character' — know what is required.", marks: 1, markCode: "AO3" },
                  { reasoning: "Re-read the text and mark moments where the character is presented.", marks: 1, markCode: "AO1" },
                  { reasoning: "Form an arguable line about how the writer presents the character.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Decode the question's demands, re-read and mark presentation moments, then form a clear arguable line before drafting.",
              },
            },
            {
              id: "el10-u8-coursework-assignment-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "A student plans to write about 'everything interesting' in two anthology poems for an assignment on writers' perspectives. Identify three problems with this plan and suggest improvements.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Focus and selection", statement: "Coursework rewards a clear line, not a survey." }],
                steps: [
                  { reasoning: "'Everything interesting' has no arguable line — the answer will lack focus.", marks: 2, markCode: "AO3" },
                  { reasoning: "It ignores the question's aspect (perspectives); methods must serve that focus.", marks: 1, markCode: "AO3" },
                  { reasoning: "Improvement: choose one aspect of perspective (e.g. attitudes to loss) and select evidence that proves it.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "No focus, ignores the question's aspect, and will read as a survey; narrow to one aspect of perspective and select evidence that proves an arguable line.",
                commonErrors: ["Listing problems without improvements."],
              },
            },
            {
              id: "el10-u8-coursework-assignment-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Plan a coursework assignment response to: 'Compare how two anthology writers use language to create mood.' Include your text choices, arguable line, evidence plan and structure.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Coursework planning", statement: "Choose texts, form a line, plan paired evidence and structure." },
                  { kind: "technique", name: "Language and mood", statement: "Analyse word choice, imagery and sound for atmospheric effect." },
                ],
                steps: [
                  { reasoning: "Two suitable anthology texts chosen with different mood-creating methods.", marks: 2, markCode: "AO1" },
                  { reasoning: "Arguable line formed (e.g. 'Writer A builds mood through imagery while Writer B uses sound and pace').", marks: 2, markCode: "AO3" },
                  { reasoning: "Three paired evidence points planned (language features from each text).", marks: 2, markCode: "AO3" },
                  { reasoning: "Point-by-point structure planned with embedded quotations.", marks: 1, markCode: "AO3" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Complete plan: texts, arguable line, paired evidence and clear structure." },
                  { level: "Level 2", marks: "4-6", descriptor: "Workable plan missing one element." },
                  { level: "Level 1", marks: "1-3", descriptor: "Partial or unfocused plan." },
                ],
                finalAnswer: "Choose two texts with contrasting mood methods, form a line comparing language choices, plan three paired evidence points, structure point-by-point with embedded quotes.",
                commonErrors: ["Choosing texts without contrasting methods.", "Planning evidence that does not serve the line."],
              },
            },
            {
              id: "el10-u8-coursework-assignment-q6",
              difficulty: "challenge", totalMarks: 12,
              stem: "You have been given this assignment: 'Analyse how ONE anthology writer presents a sense of place.' Answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Which anthology text would you choose and why? Give two reasons.", marks: 4 },
                { label: "b", prompt: "State your arguable line about how the writer presents place.", marks: 4 },
                { label: "c", prompt: "Outline your essay structure, naming the methods you will analyse and where your evidence will come from.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Text selection", statement: "Choose a text rich enough in methods for the question." },
                  { kind: "skill", name: "Arguable line", statement: "A clear, defensible thesis about the writer's methods." },
                ],
                steps: [
                  { part: "a", reasoning: "Suitable text chosen with rich place-presentation methods.", marks: 2, markCode: "AO1" },
                  { part: "a", reasoning: "Two reasons given (e.g. strong imagery, structural movement through place).", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Clear arguable line about the writer's methods for place.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Line is specific and defensible, not a topic statement.", marks: 2, markCode: "AO3" },
                  { part: "c", reasoning: "Logical structure (introduction, method paragraphs, conclusion).", marks: 2, markCode: "AO3" },
                  { part: "c", reasoning: "Methods named and linked to specific evidence locations.", marks: 2, markCode: "AO3" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) A text rich in place-methods with two justified reasons. (b) A specific, defensible line on the writer's methods. (c) A structured plan naming methods and their evidence locations.",
                commonErrors: ["(a) Choosing a text without justification.", "(b) Stating a topic rather than an argument."],
              },
            },
          ],
        },
        {
          id: "el10-u8-editing-presenting",
          title: "Editing and presenting coursework",
          skill: "Draft, edit and present coursework to a high standard of accuracy and structure.",
          sections: [
            { heading: "The drafting process", body: "Never submit a first draft. Write freely first, then **revise** for content (does every paragraph serve the question?), then **edit** for accuracy (SPAG, quotations, paragraphing), then **proofread** for slips. Leave time between drafts so you can read with fresh eyes. Read your work aloud — awkward sentences reveal themselves." },
            { heading: "Checking against criteria", body: "Before submitting, check your work against the assessment objectives: Does it show clear understanding (AO1)? Does it analyse methods (AO2)? Is it organised and comparative where required (AO3)? Is it accurate in spelling, punctuation and grammar (AO4)? A quick self-check against these catches most lost marks." },
            { heading: "Presenting the final piece", body: "Follow all presentation requirements exactly: word count, formatting, quotation conventions (single quotation marks for quotations within your own writing), and any required cover information. Keep a backup copy. Submit early — last-minute technical problems are the most common avoidable disaster." },
          ],
          keyFormulas: [
            { name: "Revise-edit-proofread", statement: "Content first, then accuracy, then final slips — in separate passes." },
            { name: "AO self-check", statement: "Check understanding, analysis, organisation and accuracy before submitting." },
            { name: "Quotation conventions", statement: "Single quotes for embedded quotations; cite accurately." },
          ],
          workedExample: {
            problem: "A student has a first draft of their assignment. Describe the editing process they should follow.",
            solution: "Day 1: read for content — does every paragraph answer the question? Cut or merge weak paragraphs. Day 2: edit for accuracy — check quotations are accurate and embedded, SPAG errors, paragraphing. Day 3: proofread aloud for slips. Final: check word count, formatting, quotation marks and AO coverage before submitting early.",
          },
          questions: [
            {
              id: "el10-u8-editing-presenting-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "What is the correct order of the writing process?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Proofread, draft, edit" },
                  { id: "b", text: "Draft, revise for content, edit for accuracy, proofread" },
                  { id: "c", text: "Edit, draft, submit" },
                  { id: "d", text: "Submit, then draft" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Writing process", statement: "Content before accuracy before slips." }],
                steps: [{ reasoning: "Revise content first, then edit accuracy, then proofread.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** Draft → revise → edit → proofread.",
              },
            },
            {
              id: "el10-u8-editing-presenting-q2",
              difficulty: "foundation", totalMarks: 2,
              stem: "Give two reasons to leave time between drafting and editing.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Fresh eyes", statement: "Distance reveals errors familiarity hides." }],
                steps: [
                  { reasoning: "Fresh eyes spot errors you have become blind to.", marks: 1, markCode: "AO4" },
                  { reasoning: "Time allows re-reading against the question and criteria.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Distance reveals hidden errors and gives time to re-check against the question and criteria.",
              },
            },
            {
              id: "el10-u8-editing-presenting-q3",
              difficulty: "core", totalMarks: 3,
              stem: "Explain three things to check when proofreading a coursework essay.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Proofreading", statement: "Final pass catches slips and conventions." }],
                steps: [
                  { reasoning: "Spelling, punctuation and grammar slips.", marks: 1, markCode: "AO4" },
                  { reasoning: "Quotation accuracy and conventions (single quotes, correct citation).", marks: 1, markCode: "AO4" },
                  { reasoning: "Formatting requirements: word count, paragraphing, title/cover details.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "SPAG slips, quotation accuracy and conventions, and formatting/word-count requirements.",
              },
            },
            {
              id: "el10-u8-editing-presenting-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "A student submits coursework with beautiful analysis but twelve spelling errors, two misquoted lines and no conclusion. Explain the impact of each problem and how to avoid it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Accuracy's impact", statement: "Presentation and accuracy affect how analysis is received." }],
                steps: [
                  { reasoning: "Spelling errors undermine credibility and lose AO4 marks despite good analysis.", marks: 2, markCode: "AO4" },
                  { reasoning: "Misquotations show unreliable evidence — a serious analytical flaw.", marks: 2, markCode: "AO4" },
                  { reasoning: "No conclusion leaves the argument unfinished; avoid by planning structure and editing for completeness.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Spelling errors cost AO4 marks and credibility; misquotes undermine evidence; no conclusion leaves the argument incomplete — all avoidable by systematic editing.",
                commonErrors: ["Ignoring accuracy because analysis is strong."],
              },
            },
            {
              id: "el10-u8-editing-presenting-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Create a pre-submission checklist for coursework covering content, accuracy and presentation. Include at least six specific checks.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Pre-submission checklist", statement: "Systematic checks catch content, accuracy and presentation issues." },
                  { kind: "technique", name: "AO self-check", statement: "Verify understanding, analysis, organisation and accuracy." },
                ],
                steps: [
                  { reasoning: "Content checks: every paragraph answers the question; arguable line is clear.", marks: 2, markCode: "AO3" },
                  { reasoning: "Evidence checks: quotations accurate, embedded and analysed.", marks: 2, markCode: "AO1" },
                  { reasoning: "Accuracy checks: SPAG proofread, read aloud for slips.", marks: 2, markCode: "AO4" },
                  { reasoning: "Presentation checks: word count, formatting, conventions, backup copy, early submission.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Comprehensive checklist covering content, evidence, accuracy and presentation." },
                  { level: "Level 2", marks: "4-6", descriptor: "Checklist covering most areas." },
                  { level: "Level 1", marks: "1-3", descriptor: "Partial checklist." },
                ],
                finalAnswer: "Checklist covering: question focus, arguable line, accurate embedded quotations, SPAG proofread, AO coverage, word count/formatting/conventions, backup and early submission.",
                commonErrors: ["Only checking spelling; missing content and presentation."],
              },
            },
            {
              id: "el10-u8-editing-presenting-q6",
              difficulty: "challenge", totalMarks: 12,
              stem: "A student has completed a first draft of their Component 3 assignment. Answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Describe the revision pass they should do first and what they are looking for.", marks: 4 },
                { label: "b", prompt: "Describe the editing pass for accuracy and what specific checks it includes.", marks: 4 },
                { label: "c", prompt: "List the final presentation checks before submission.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Revision", statement: "Check content and structure before surface accuracy." },
                  { kind: "skill", name: "Editing and proofreading", statement: "Accuracy and conventions come last but matter most for AO4." },
                ],
                steps: [
                  { part: "a", reasoning: "Revision for content: does every paragraph serve the question and arguable line?", marks: 2, markCode: "AO3" },
                  { part: "a", reasoning: "Check structure, paragraphing and whether evidence is sufficient and relevant.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Editing for accuracy: quotation accuracy, embedded correctly, single quotes.", marks: 2, markCode: "AO4" },
                  { part: "b", reasoning: "SPAG check: spelling, punctuation, grammar; read aloud for slips.", marks: 2, markCode: "AO4" },
                  { part: "c", reasoning: "Word count, formatting, title/cover, conventions followed.", marks: 2, markCode: "AO4" },
                  { part: "c", reasoning: "Backup copy made, submitted early, final read-through done.", marks: 2, markCode: "AO4" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) Revise for content: question focus, arguable line, structure, evidence sufficiency. (b) Edit for accuracy: quotations, SPAG, read aloud. (c) Final checks: word count, formatting, conventions, backup, early submission.",
                commonErrors: ["Doing surface edits before content revision.", "Skipping final presentation checks."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u8-coursework-notes", title: "Non-examined assessment — notes",
      summary: "Component 3 uses anthology texts in controlled conditions. Decode the task, form an arguable line, draft, revise, edit, proofread, submit early.",
      sections: [
        { heading: "The task", body: "Underline the question; note text count, aspect and form. Choose texts with contrasting methods." },
        { heading: "The process", body: "Draft freely → revise content → edit accuracy → proofread → check AO coverage → submit early." },
      ],
    },
  },
];

module.exports = U8;
