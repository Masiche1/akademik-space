const REGEN = {
  title: "Regeneration",
  author: "A. Whitfield",
  source: "Estate Poems (fictional anthology)",
  lineNumbers: true,
  text: "The cranes stood over the old parade ground\nlike herons fishing in a drained estate.\nWhere children once played chasing a red ball,\nnow glass and steel rehearsed their debate.\n\nThe new residents would never know the names\nof streets the planners' drawings had erased.\nTheir balconies faced a vista of progress;\ntheir windows overlooked a different place.\n\nAnd yet, at dusk, when windows lit one by one,\nthe buildings breathed a warmth that mimicked home.\nPerhaps a city is only ever houses —\neach one a small defiance of the stone.",
};

const PARADE = {
  title: "The Old Parade",
  author: "R. Salter",
  source: "Harbour Stories (fictional anthology)",
  text: "For years the parade had stood empty, its shopfronts like blind eyes. Then the developers came, and by spring the scaffolding wore a new face. The old residents gathered at the gate, watching men in hi-vis lift paving slabs one by one. 'It is not the same,' said Mr. Delacroix, though he could not say what had been lost. The builder smiled and said everything was being improved. Behind them, the demolished cinema's name still showed on a brick, pale as a scar.",
};

const FERRY = {
  title: "The Last Ferry",
  author: "J. Hartley",
  source: "Harbour Poems (fictional anthology)",
  lineNumbers: true,
  text: "The ferry slid beneath the fading light,\nits engine coughing like an old man's lungs.\nThe last few passengers leaned to watch\nas harbour lights came up like stray dogs' eyes.\n\nThe captain knew the channel by its moods —\nthis bend where shoals had taken trawlers down,\nthis curve where tides had torn the hull of '78.\nHe steered by memory. Memory was sound.\n\nBelow, the water swallowed all the day:\ncries of the gulls, the clink of coins, the rain\nof rust from hulls the harbour could not hold.\nHe crossed, and paid the dark his quiet fee.",
};

const TOP4 = [
  { level: "Level 3", marks: "4", descriptor: "Clear, developed comment with well-chosen evidence and relevant terminology." },
  { level: "Level 2", marks: "2-3", descriptor: "Some understanding and some relevant references; analysis partial." },
  { level: "Level 1", marks: "1", descriptor: "Simple, limited comment; feature-spotting or paraphrase." },
];

const L7 = [
  {
    file: "lesson-7-1.ts", exportName: "lesson71",
    lesson: {
      id: "el10-u7-lesson-7-1", code: "7-1",
      title: "Writers' Viewpoints and Perspectives",
      goal: "I CAN identify how writers reveal their perspectives and compare viewpoints across texts.",
      standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
      vocabulary: [
        { term: "Perspective", definition: "The writer's or speaker's attitude, position or way of seeing events." },
        { term: "Viewpoint", definition: "The angle from which events or people are presented." },
        { term: "Explicit viewpoint", definition: "An attitude stated openly through direct comment or judgement." },
        { term: "Implicit viewpoint", definition: "An attitude suggested through word choice, imagery and selection of detail." },
        { term: "Tone", definition: "The writer's attitude towards the subject, for example nostalgic, critical or admiring." },
        { term: "Focalisation", definition: "Whose eyes the reader sees events through, and what that character notices or misunderstands." },
        { term: "Bias", definition: "A slant in presentation that favours one interpretation over another." },
      ],
      concepts: [
        {
          id: "el10-u7-perspective-reveal",
          title: "How writers reveal perspective",
          skill: "Explain how word choice, tone and selection of detail reveal a writer's perspective.",
          sections: [
            { heading: "What is a perspective?", body: "Every text presents events from someone's angle. The writer may state their view directly (explicit) or let it emerge through the details they choose (implicit). A poem about a rebuilt estate might call the cranes 'herons' rather than 'machines', quietly suggesting grace rather than industry. Reading for perspective means asking: what does this writer want me to think, and how do they make me think it?" },
            { heading: "Language that reveals viewpoint", body: "Writers reveal perspective through **word choice** (loaded adjectives such as 'bland' or 'sterile'), **imagery** (comparing new buildings to something cold or artificial), **selection of detail** (noticing a scar-like name on a brick rather than the new flats), and **tone** (nostalgic, angry, admiring). Even the verbs matter: 'rehearsed their debate' makes architecture sound performative rather than sincere." },
            { heading: "Reading between the lines", body: "Implicit perspective is often strongest. In 'Regeneration', the poet never says the new estate is bad, yet the final stanza turns ambivalent: 'Perhaps a city is only ever houses'. Train yourself to separate what the text **says** from what it **implies**, and to quote the exact words that carry the attitude." },
          ],
          keyFormulas: [
            { name: "Perspective", statement: "The writer's angle on events — explicit (stated) or implicit (implied through method)." },
            { name: "Tone", statement: "The attitude conveyed by the writing, such as nostalgic, critical or hopeful." },
            { name: "Loaded language", statement: "Words with emotional colouring, for example 'scar', 'rehearsed', 'erased'." },
          ],
          workedExample: {
            problem: "How does the poet of 'Regeneration' reveal a perspective on urban change?",
            solution: "The perspective is ambivalent — neither wholly hostile nor wholly celebratory. Negative-sounding choices include 'drained estate', 'rehearsed their debate' and streets 'erased', which frame regeneration as loss. Yet the final stanza softens: the buildings 'breathed a warmth' and 'each one a small defiance of the stone' suggests hope. The perspective emerges through imagery and tone rather than direct statement.",
          },
          questions: [
            {
              id: "el10-u7-perspective-reveal-q1",
              difficulty: "foundation", totalMarks: 1,
              extract: REGEN,
              stem: "In 'Regeneration', what does the phrase 'rehearsed their debate' most suggest about the new buildings?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "They are noisy and still under construction" },
                  { id: "b", text: "They look impressive but feel artificial and unfeeling" },
                  { id: "c", text: "The builders are arguing about their design" },
                  { id: "d", text: "They have been criticised in the press" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "technique", name: "Personification", statement: "Giving buildings the human act of debate makes them seem performative and artificial." }],
                steps: [{ reasoning: "'Rehearsed' implies performance rather than sincerity; the buildings seem impressive but lifeless.", evidence: "rehearsed their debate", marks: 1, markCode: "AO2" }],
                finalAnswer: "**(b)** The buildings seem impressive but artificial and unfeeling.",
                commonErrors: ["Choosing (a), a literal reading that ignores the metaphor."],
              },
            },
            {
              id: "el10-u7-perspective-reveal-q2",
              difficulty: "foundation", totalMarks: 2,
              extract: REGEN,
              stem: "Explain the effect of the simile 'like herons fishing in a drained estate' in lines 1-2.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Simile and imagery", statement: "A comparison that creates a vivid picture and attitude." }],
                steps: [
                  { reasoning: "The cranes are compared to herons, elegant birds fishing — graceful predators.", evidence: "like herons fishing", marks: 1, markCode: "AO2" },
                  { reasoning: "'Drained estate' makes the old neighbourhood feel emptied and lifeless, so the image is both beautiful and threatening.", evidence: "a drained estate", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The simile makes the cranes seem graceful yet predatory, hovering over an emptied landscape, creating an uneasy beauty.",
              },
            },
            {
              id: "el10-u7-perspective-reveal-q3",
              difficulty: "core", totalMarks: 3,
              extract: REGEN,
              stem: "How does the poet present the old residents' feelings about regeneration in lines 9-11?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Selection of detail", statement: "What a writer chooses to notice reveals attitude." }],
                steps: [
                  { reasoning: "The new residents 'would never know the names' — the poet highlights cultural loss rather than physical change.", evidence: "never know the names", marks: 1, markCode: "AO1" },
                  { reasoning: "'A vista of progress' is faintly ironic; the view is reduced to a slogan.", evidence: "a vista of progress", marks: 1, markCode: "AO2" },
                  { reasoning: "'A different place' suggests alienation — they now live somewhere unrecognisable.", evidence: "a different place", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poet presents the residents as disconnected: they lose the names of streets, see only 'progress', and live in 'a different place', implying alienation and loss.",
              },
            },
            {
              id: "el10-u7-perspective-reveal-q4",
              difficulty: "challenge", totalMarks: 5,
              extract: REGEN,
              stem: "How does the tone of 'Regeneration' change between the first stanza and the final stanza?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Tone shift", statement: "A change in attitude across a text shapes the reader's response." }],
                steps: [
                  { reasoning: "Stanza one is menacing and elegiac: 'drained estate', predatory herons, and play 'erased'.", evidence: "a drained estate", marks: 2, markCode: "AO2" },
                  { reasoning: "Stanza two turns ironic and detached: 'progress' and 'a different place' sound hollow.", evidence: "a vista of progress", marks: 2, markCode: "AO2" },
                  { reasoning: "The final stanza softens into ambivalence — warmth 'mimicked home' and 'defiance of the stone' suggest cautious hope.", evidence: "a small defiance of the stone", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The tone moves from elegiac menace, through ironic detachment, to a guarded ambivalence in which new homes may offer a small 'defiance' against loss.",
                commonErrors: ["Describing each stanza without identifying the shift in attitude."],
              },
            },
            {
              id: "el10-u7-perspective-reveal-q5",
              difficulty: "challenge", totalMarks: 7,
              extract: REGEN,
              stem: "How does the poet use language and imagery to present regeneration? Support your answer with detailed reference to the poem.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Imagery", statement: "Comparisons and sensory detail convey the poet's attitude." },
                  { kind: "context", name: "Urban regeneration", statement: "Redevelopment often displaces communities and erases local history." },
                ],
                steps: [
                  { reasoning: "The crane-as-heron simile makes construction beautiful yet threatening — 'fishing' in a 'drained' landscape.", evidence: "like herons fishing in a drained estate", marks: 2, markCode: "AO2" },
                  { reasoning: "'Rehearsed their debate' personifies the buildings as performers, making progress feel staged and insincere.", evidence: "rehearsed their debate", marks: 2, markCode: "AO2" },
                  { reasoning: "Erasure imagery — names 'erased', streets 'the planners' drawings had erased' — presents regeneration as cultural loss.", evidence: "the planners' drawings had erased", marks: 1, markCode: "AO2" },
                  { reasoning: "The final stanza's warmth and 'defiance of the stone' complicate the view: change may bring shelter as well as loss.", evidence: "a small defiance of the stone", marks: 2, markCode: "AO2" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Perceptive analysis of language and imagery with integrated evidence and a clear sense of the ambivalent perspective." },
                  { level: "Level 2", marks: "4-6", descriptor: "Thorough analysis with well-chosen evidence; effects explained clearly." },
                  { level: "Level 1", marks: "1-3", descriptor: "Some comment on imagery with limited explanation of effect." },
                ],
                finalAnswer: "The poet presents regeneration as both beautiful and destructive: graceful heron-cranes and personified 'debate' give change menace, erasure imagery shows cultural loss, yet the final stanza's warmth and 'defiance' suggest guarded hope.",
                commonErrors: ["One-sided reading that ignores the ambivalent ending.", "Technique-spotting without explaining effect."],
              },
            },
            {
              id: "el10-u7-perspective-reveal-q6",
              difficulty: "challenge", totalMarks: 12,
              extract: REGEN,
              stem: "Read 'Regeneration' and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify two images in the poem that show how the neighbourhood has physically changed.", marks: 4 },
                { label: "b", prompt: "Explain how the tone of the final stanza differs from the tone of the first.", marks: 4 },
                { label: "c", prompt: "How does the poet present regeneration overall? Support your answer with detailed reference to the poem.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Imagery", statement: "Physical images show change: cranes, glass and steel replacing playing children." },
                  { kind: "context", name: "Community and place", statement: "Regeneration raises questions about belonging and memory." },
                ],
                steps: [
                  { part: "a", reasoning: "Crane image: 'cranes... like herons fishing in a drained estate' — construction over emptied land.", evidence: "like herons fishing in a drained estate", marks: 2, markCode: "AO1" },
                  { part: "a", reasoning: "Replacement image: 'glass and steel rehearsed their debate' replaces the 'red ball' of children's play.", evidence: "glass and steel rehearsed their debate", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Stanza one is menacing: predatory cranes, 'drained' estate, lost play.", evidence: "a drained estate", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Final stanza is softer: 'warmth that mimicked home', 'small defiance of the stone' — guarded hope.", evidence: "a small defiance of the stone", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Regeneration is presented ambivalently: beautiful ('herons') yet threatening ('rehearsed').", evidence: "rehearsed their debate", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Loss is emphasised through erasure of names and 'a different place'.", evidence: "never know the names", marks: 2, markCode: "AO2" },
                ],
                levels: [
                  { part: "a", level: "Level 3", marks: "4", descriptor: "Two accurate, well-supported images." },
                  { part: "a", level: "Level 2", marks: "2-3", descriptor: "One or two images partly supported." },
                  { part: "a", level: "Level 1", marks: "1", descriptor: "Simple, limited comment." },
                  { part: "b", level: "Level 3", marks: "4", descriptor: "Clear explanation of the tone shift with evidence." },
                  { part: "b", level: "Level 2", marks: "2-3", descriptor: "Some comment on tone with some evidence." },
                  { part: "b", level: "Level 1", marks: "1", descriptor: "Simple, limited comment." },
                  { part: "c", level: "Level 3", marks: "4", descriptor: "Perceptive account of the ambivalent perspective with integrated evidence." },
                  { part: "c", level: "Level 2", marks: "2-3", descriptor: "Clear account with some evidence." },
                  { part: "c", level: "Level 1", marks: "1", descriptor: "Simple, limited comment." },
                ],
                finalAnswer: "(a) Cranes like herons over a drained estate; glass and steel replacing children's play. (b) Stanza one is menacing and elegiac; the final stanza softens into guarded hope with 'warmth' and 'defiance'. (c) Regeneration is ambivalent — graceful yet threatening imagery of change balanced against erasure and loss, resolved in cautious hope.",
                commonErrors: ["Quoting without explaining what the image shows.", "Ignoring the tonal shift in (b)."],
              },
            },
          ],
        },
        {
          id: "el10-u7-compare-perspectives",
          title: "Comparing writers' perspectives",
          skill: "Compare how two writers present different perspectives on the same subject.",
          sections: [
            { heading: "Why writers differ", body: "Two writers on the same subject — here, urban regeneration — can present sharply different perspectives. The poet works in compressed, figurative language; the prose writer uses scene, dialogue and detail. Comparing perspectives means identifying each writer's **attitude**, then showing how their **methods** create it." },
            { heading: "Comparing ideas, methods and effects", body: "Compare at three levels: **ideas** (what each says about change), **methods** (imagery versus dialogue and setting), and **effects** (how each makes the reader feel). In 'The Old Parade', Mr. Delacroix's 'It is not the same' is explicit and colloquial; in 'Regeneration', loss is implicit in 'names... erased'. Different methods, related ideas." },
            { heading: "Linking the texts", body: "Always make explicit links: 'Whereas the poet uses...', 'Similarly/By contrast, the prose writer...'. The strongest answers show that differences in form produce differences in perspective — a poem's compression intensifies feeling, while prose can build a scene." },
          ],
          keyFormulas: [
            { name: "Comparison", statement: "Identify each writer's idea, then compare methods and effects using linking connectives." },
            { name: "Explicit vs implicit", statement: "Dialogue states views openly; imagery implies them through selection of detail." },
          ],
          workedExample: {
            problem: "Compare how the poet and the prose writer present the old community in 'Regeneration' and 'The Old Parade'.",
            solution: "Both mourn loss, but differently. The poet shows the old community indirectly — residents who 'never know the names' of erased streets, inhabitants of 'a different place'. The prose writer gives them a voice: old residents 'gathered at the gate' and Mr. Delacroix says 'It is not the same', though he 'could not say what had been lost' — feeling exceeds words. The poem's perspective is elegiac and abstract; the prose is social and conversational.",
          },
          questions: [
            {
              id: "el10-u7-compare-perspectives-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "When comparing two texts on the same subject, what should your answer always make explicit?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Which text is longer" },
                  { id: "b", text: "Links between the writers' ideas, methods and effects" },
                  { id: "c", text: "Which writer was more famous" },
                  { id: "d", text: "The publication dates of both texts" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Comparative writing", statement: "Comparison requires explicit links between texts." }],
                steps: [{ reasoning: "A comparative answer links ideas, methods and effects across texts.", marks: 1, markCode: "AO3" }],
                finalAnswer: "**(b)** Links between the writers' ideas, methods and effects.",
              },
            },
            {
              id: "el10-u7-compare-perspectives-q2",
              difficulty: "foundation", totalMarks: 2,
              extract: PARADE,
              stem: "How does the prose writer present Mr. Delacroix's viewpoint about the regeneration?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Dialogue", statement: "Direct speech states a viewpoint openly." }],
                steps: [
                  { reasoning: "His spoken words give his view directly: 'It is not the same'.", evidence: "It is not the same", marks: 1, markCode: "AO1" },
                  { reasoning: "The narration qualifies it — he 'could not say what had been lost' — showing the feeling is real but inarticulate.", evidence: "could not say what had been lost", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Mr. Delacroix states his loss openly in dialogue but cannot articulate it, so his perspective is felt rather than explained.",
              },
            },
            {
              id: "el10-u7-compare-perspectives-q3",
              difficulty: "core", totalMarks: 3,
              stem: "Both 'Regeneration' and 'The Old Parade' present regeneration. State one similarity in their perspective on the subject.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Comparing ideas", statement: "Find the shared attitude beneath different methods." }],
                steps: [
                  { reasoning: "Both present regeneration as involving loss as well as gain.", marks: 1, markCode: "AO3" },
                  { reasoning: "Evidence from the poem: erased names, 'a different place'; from prose: 'It is not the same'.", marks: 1, markCode: "AO3" },
                  { reasoning: "Both are ambivalent rather than wholly celebratory.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Both texts are ambivalent: they acknowledge change and improvement while mourning the loss of the old community.",
              },
            },
            {
              id: "el10-u7-compare-perspectives-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "How do the attitudes towards regeneration differ between 'Regeneration' and 'The Old Parade'?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Attitude", statement: "Different methods produce different shades of perspective." }],
                steps: [
                  { reasoning: "The poem's attitude is contemplative and elegiac — compressed imagery of cranes, erasure and 'defiance of the stone'.", marks: 2, markCode: "AO2" },
                  { reasoning: "The prose is social and conversational: a gathered crowd, a builder's polite 'everything was being improved'.", marks: 2, markCode: "AO2" },
                  { reasoning: "The poem resolves into cautious hope; the prose ends on an image of the scar-like name — loss remains unresolved.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poem is elegiac yet ambivalent, ending in guarded hope; the prose is grounded in community dialogue and ends on unresolved loss, like a 'scar' on a brick.",
                commonErrors: ["Listing methods without comparing attitudes."],
              },
            },
            {
              id: "el10-u7-compare-perspectives-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Compare how 'Regeneration' and 'The Old Parade' present the experience of regeneration for local people.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Imagery and dialogue", statement: "Poetry implies through image; prose states through speech." },
                  { kind: "skill", name: "Comparative analysis", statement: "Link methods to effects across both texts." },
                ],
                steps: [
                  { reasoning: "In the poem, locals are absent — they 'would never know the names'; the community is remembered rather than shown.", marks: 2, markCode: "AO2" },
                  { reasoning: "In the prose, locals gather at the gate and speak: 'It is not the same', making loss communal and voiced.", marks: 2, markCode: "AO2" },
                  { reasoning: "The poem's imagery — 'drained estate', 'erased' streets — turns loss into landscape.", marks: 1, markCode: "AO2" },
                  { reasoning: "The prose's scar image — 'the demolished cinema's name... pale as a scar' — makes loss physical and personal.", marks: 2, markCode: "AO2" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Perceptive comparison linking methods to effects in both texts with integrated evidence." },
                  { level: "Level 2", marks: "4-6", descriptor: "Clear comparison with well-chosen evidence from both texts." },
                  { level: "Level 1", marks: "1-3", descriptor: "Some comparison with limited evidence or links." },
                ],
                finalAnswer: "Both present regeneration as loss, but the poem abstracts it into landscape imagery while the prose voices it through gathered residents and the 'scar' of a demolished name; the poem ends hopeful, the prose unresolved.",
                commonErrors: ["Writing about each text separately with no links.", "Ignoring method when comparing."],
              },
            },
            {
              id: "el10-u7-compare-perspectives-q6",
              difficulty: "challenge", totalMarks: 12,
              stem: "Read 'Regeneration' and 'The Old Parade' and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "How does each writer present the new development itself?", marks: 4 },
                { label: "b", prompt: "How does each writer present the old community?", marks: 4 },
                { label: "c", prompt: "Overall, how do the writers' perspectives on regeneration compare? Support your answer with detailed reference to both texts.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Method and attitude", statement: "Imagery versus dialogue produces different perspectives on the same subject." },
                  { kind: "skill", name: "Sustained comparison", statement: "A strong answer links ideas, methods and effects throughout." },
                ],
                steps: [
                  { part: "a", reasoning: "Poem: 'glass and steel rehearsed their debate' — impressive but performative; cranes 'like herons'.", evidence: "rehearsed their debate", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Prose: 'scaffolding wore a new face' and the builder's 'everything was being improved' — bureaucratic optimism.", evidence: "everything was being improved", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Poem: residents are absent, 'never know the names', living in 'a different place' — loss is implicit.", evidence: "never know the names", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Prose: residents gather and speak — 'It is not the same' — loss is voiced and communal.", evidence: "It is not the same", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Both are ambivalent, but the poem's is contemplative (ending in 'defiance of the stone') while the prose's is social and unresolved ('pale as a scar').", evidence: "pale as a scar", marks: 2, markCode: "AO3" },
                  { part: "c", reasoning: "Methods differ — compressed imagery versus scene and dialogue — shaping how each perspective feels.", marks: 2, markCode: "AO3" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) The poet makes the development beautiful yet performative; the prose makes it bureaucratic and optimistic. (b) The poem mourns an absent community through erased names; the prose gives the old residents a voice at the gate. (c) Both are ambivalent about regeneration, but the poem's elegiac hope differs from the prose's grounded, unresolved sense of loss.",
                commonErrors: ["Answering each part on only one text.", "Comparing without quoting or referencing evidence."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u7-perspectives-notes", title: "Writers' perspectives — notes",
      summary: "Perspective is revealed through word choice, imagery, tone and selection of detail; comparison links ideas, methods and effects across texts.",
      sections: [
        { heading: "Key idea", body: "Ask: what does the writer want me to think, and which words make me think it?" },
        { heading: "Comparing", body: "Link the texts explicitly: 'Whereas the poet...', 'By contrast, the prose writer...'" },
      ],
    },
  },
  {
    file: "lesson-7-2.ts", exportName: "lesson72",
    lesson: {
      id: "el10-u7-lesson-7-2", code: "7-2",
      title: "How Form Shapes Perspective",
      goal: "I CAN explain how poetic voice and prose narrative perspective shape a writer's viewpoint.",
      standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
      vocabulary: [
        { term: "Persona", definition: "The speaker or voice a poem creates, which may differ from the poet." },
        { term: "Narrative voice", definition: "The character or presence through which a prose story is told." },
        { term: "Focalisation", definition: "The perspective through which events are filtered in prose." },
        { term: "Free indirect style", definition: "Narration that blends the narrator's voice with a character's thoughts and feelings." },
        { term: "Setting", definition: "Where and when events happen; it can mirror or comment on mood and theme." },
        { term: "Stanza", definition: "A grouped set of poetic lines that organises thought and pace." },
      ],
      concepts: [
        {
          id: "el10-u7-poetic-voice",
          title: "Poetic voice and perspective",
          skill: "Analyse how a poem's voice, persona and form shape its perspective.",
          sections: [
            { heading: "Who is speaking?", body: "A poem has a **persona**: the voice that speaks, which may be the poet or a created character. In 'The Last Ferry', a third-person narrator focuses closely on the captain — his knowledge of the channel, his 'quiet fee' paid to the dark. The close focalisation makes the reader share his experience and respect his skill." },
            { heading: "Form and perspective", body: "Structure reinforces perspective. Three quatrains move from arrival ('fading light') to mastery ('Memory was sound') to departure ('paid the dark his quiet fee'). The short, end-stopped lines feel deliberate and controlled, echoing the captain's steady command. Repetition of 'memory' in stanza two makes knowledge itself the poem's subject." },
            { heading: "Imagery and attitude", body: "The similes do double duty: the engine 'coughing like an old man's lungs' personifies decay, while 'stray dogs' eyes' makes the harbour lights seem alive but untrustworthy. The tone is elegiac — the last ferry, the last passenger — yet respectful: the captain's memory is 'sound'. Form and image together create a perspective that honours a vanishing craft." },
          ],
          keyFormulas: [
            { name: "Persona", statement: "The speaking voice of a poem; may be the poet or a created figure." },
            { name: "Focalisation", statement: "Whose perceptions filter the poem's events." },
            { name: "End-stopped lines", statement: "Lines ending with punctuation slow pace and create control." },
          ],
          workedExample: {
            problem: "How does 'The Last Ferry' use voice and form to present the captain's perspective?",
            solution: "The poem focalises tightly on the captain: 'He steered by memory. Memory was sound.' The clipped, declarative lines and single-rhyme quatrains mirror his control and routine. Imagery of sickness ('coughing') and strays ('stray dogs' eyes') makes the harbour feel dying, yet the captain's competence — knowing the channel 'by its moods' — gives the elegy respect rather than pity.",
          },
          questions: [
            {
              id: "el10-u7-poetic-voice-q1",
              difficulty: "foundation", totalMarks: 1,
              extract: FERRY,
              stem: "In 'The Last Ferry', who does the poem's perspective focus on most closely?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The ferry passengers" },
                  { id: "b", text: "The harbour itself" },
                  { id: "c", text: "The captain" },
                  { id: "d", text: "The poet's childhood" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "convention", name: "Focalisation", statement: "The perspective is filtered through the captain's perceptions." }],
                steps: [{ reasoning: "The poem repeatedly shows what the captain knows and does — the channel's moods, memory 'sound'.", evidence: "He steered by memory", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(c)** The captain.",
                commonErrors: ["Choosing (a); passengers are mentioned only briefly."],
              },
            },
            {
              id: "el10-u7-poetic-voice-q2",
              difficulty: "foundation", totalMarks: 2,
              extract: FERRY,
              stem: "Explain the effect of the simile 'like stray dogs' eyes' in line 4.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Simile", statement: "A comparison that shapes how the reader sees the harbour lights." }],
                steps: [
                  { reasoning: "The lights are compared to the eyes of stray dogs — watchful but untrustworthy, ownerless.", evidence: "stray dogs' eyes", marks: 1, markCode: "AO2" },
                  { reasoning: "This makes the harbour feel abandoned and slightly menacing, fitting the elegiac tone of the 'last ferry'.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The simile makes the harbour lights seem watchful yet untrustworthy, deepening the poem's elegiac, slightly menacing mood.",
              },
            },
            {
              id: "el10-u7-poetic-voice-q3",
              difficulty: "core", totalMarks: 3,
              extract: FERRY,
              stem: "How does stanza two of 'The Last Ferry' present the captain's knowledge of his work?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Repetition and listing", statement: "Listing specific dangers and repeating 'memory' show expertise." }],
                steps: [
                  { reasoning: "Specific memories — shoals that 'taken trawlers down', tides that 'torn the hull of '78' — show experience earned through danger.", evidence: "torn the hull of '78", marks: 1, markCode: "AO1" },
                  { reasoning: "The repetition of 'memory' in 'He steered by memory. Memory was sound.' makes knowledge the poem's subject.", evidence: "Memory was sound", marks: 1, markCode: "AO2" },
                  { reasoning: "The clipped declarative lines mirror his certainty and control.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Stanza two shows the captain's knowledge as hard-won and reliable: concrete memories of wrecks, the repeated word 'memory', and clipped lines that sound certain.",
              },
            },
            {
              id: "el10-u7-poetic-voice-q4",
              difficulty: "challenge", totalMarks: 5,
              extract: FERRY,
              stem: "How does the structure of 'The Last Ferry' reflect the perspective it creates?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "convention", name: "Quatrain structure", statement: "Three compact quatrains create order and ritual." }],
                steps: [
                  { reasoning: "Three quatrains move arrival → mastery → departure, a ritual-like shape for the last crossing.", marks: 2, markCode: "AO2" },
                  { reasoning: "The regular, end-stopped rhythm and repeated rhyme sounds feel controlled, like the captain's steady steering.", marks: 2, markCode: "AO2" },
                  { reasoning: "The final line 'paid the dark his quiet fee' closes the ritual with a transaction — duty done, elegy complete.", evidence: "his quiet fee", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The three ordered quatrains and controlled rhythm mirror the captain's steady routine, and the final 'quiet fee' closes the poem like the completion of a last duty.",
                commonErrors: ["Describing structure without linking it to perspective."],
              },
            },
            {
              id: "el10-u7-poetic-voice-q5",
              difficulty: "challenge", totalMarks: 7,
              extract: FERRY,
              stem: "How does 'The Last Ferry' create a perspective on a vanishing way of life? Support your answer with detailed reference to the poem.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Focalisation and imagery", statement: "Close focus on the captain plus elegiac imagery create a respectful perspective on loss." },
                  { kind: "context", name: "Decline of traditional work", statement: "Poems often honour skills and rituals being replaced by machines." },
                ],
                steps: [
                  { reasoning: "Tight focalisation on the captain makes his skill the poem's subject — knowledge 'by its moods'.", evidence: "knew the channel by its moods", marks: 2, markCode: "AO2" },
                  { reasoning: "Elegiac signals — 'the last few passengers', 'the last ferry' framing — mark the craft as ending.", evidence: "the fading light", marks: 2, markCode: "AO2" },
                  { reasoning: "Personification dignifies decay: the engine 'coughing like an old man's lungs' gives the ferry a human frailty.", evidence: "like an old man's lungs", marks: 1, markCode: "AO2" },
                  { reasoning: "The final 'quiet fee' frames his work as duty and sacrifice, earning respect rather than pity.", evidence: "paid the dark his quiet fee", marks: 2, markCode: "AO2" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Perceptive account of voice, focalisation and imagery creating an elegiac, respectful perspective." },
                  { level: "Level 2", marks: "4-6", descriptor: "Clear analysis with well-chosen evidence and explained effects." },
                  { level: "Level 1", marks: "1-3", descriptor: "Some comment with limited evidence or effect." },
                ],
                finalAnswer: "The poem honours a vanishing craft: tight focalisation on the captain's expertise, elegiac framing of the 'last' ferry, personified frailty and a final 'quiet fee' create a respectful, elegiac perspective on loss.",
                commonErrors: ["Retelling the journey without analysing voice.", "Ignoring the elegiac tone."],
              },
            },
            {
              id: "el10-u7-poetic-voice-q6",
              difficulty: "challenge", totalMarks: 12,
              extract: FERRY,
              stem: "Read 'The Last Ferry' and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify two details that show the harbour is in decline.", marks: 4 },
                { label: "b", prompt: "Explain how the poet presents the captain's relationship with his work.", marks: 4 },
                { label: "c", prompt: "How does the poem's voice and form shape its perspective? Support your answer with detailed reference to the poem.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Voice and form", statement: "Focalisation, structure and rhythm create the poem's perspective." },
                  { kind: "context", name: "Elegy", statement: "The poem mourns a vanishing way of life." },
                ],
                steps: [
                  { part: "a", reasoning: "'The fading light' and 'the last few passengers' mark the ferry's final run.", evidence: "the fading light", marks: 2, markCode: "AO1" },
                  { part: "a", reasoning: "'The water swallowed all the day' — decay and loss imagery ('rust', 'hulls').", evidence: "hulls the harbour could not hold", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Work is memory and duty: 'He steered by memory. Memory was sound.'", evidence: "Memory was sound", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "He 'paid the dark his quiet fee' — crossing as obligation and ritual.", evidence: "his quiet fee", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Close third-person focalisation makes us share the captain's competence.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Three ordered quatrains and controlled rhythm mirror his steady routine.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Elegiac imagery — 'coughing', 'stray dogs' eyes', 'swallowed' — creates a respectful tone of loss.", evidence: "the water swallowed all the day", marks: 2, markCode: "AO2" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) Fading light, last passengers, rusting hulls and the water 'swallowing' the day. (b) Work is memory and duty — he steers by knowledge and pays the dark a 'quiet fee'. (c) Close focalisation, ordered quatrains and elegiac imagery create a respectful perspective on a vanishing way of life.",
                commonErrors: ["Describing events without linking to voice or form.", "Missing the elegiac tone."],
              },
            },
          ],
        },
        {
          id: "el10-u7-prose-voice",
          title: "Prose narrative perspective",
          skill: "Analyse how narrative voice, focalisation and setting shape perspective in prose fiction.",
          sections: [
            { heading: "Who tells the story?", body: "Prose fiction filters events through a **narrative voice**. In 'The Old Parade', the narrator stays close to the old residents: we see the shopfronts as 'blind eyes' — a judgement that belongs to people who remember what they used to see. The narration blends the narrator's voice with characters' feelings (**free indirect style**): 'though he could not say what had been lost' is Mr. Delacroix's inarticulate grief given narrative form." },
            { heading: "Focalisation and setting", body: "**Focalisation** decides what we notice. The builder 'smiled' and said 'everything was being improved' — through the residents' eyes, this is empty optimism. Setting reinforces perspective: 'scaffolding wore a new face' personifies construction as disguise; the 'demolished cinema's name... pale as a scar' makes memory physical. The perspective is sympathetic to the displaced." },
            { heading: "Comparing prose and poetry", body: "Where a poem compresses attitude into image, prose can build scenes and voices. 'The Old Parade' dramatises disagreement — residents versus builder — where 'Regeneration' meditated on it. Both mourn loss, but prose shows it through dialogue and gesture." },
          ],
          keyFormulas: [
            { name: "Narrative voice", statement: "The presence through which the story is told; may be a character or an unseen narrator." },
            { name: "Free indirect style", statement: "Narration coloured by a character's thoughts, blurring narrator and character." },
            { name: "Setting", statement: "Place and time that mirror mood, theme or attitude." },
          ],
          workedExample: {
            problem: "How does 'The Old Parade' use narrative perspective to shape the reader's view of regeneration?",
            solution: "The narration focalises through the old residents: shopfronts are 'blind eyes' (a mourner's judgement), Mr. Delacroix's grief is voiced in free indirect style ('could not say what had been lost'), and the builder's 'everything was being improved' reads as empty optimism. The scar-like cinema name on a brick makes loss physical. The perspective is sympathetic to those displaced.",
          },
          questions: [
            {
              id: "el10-u7-prose-voice-q1",
              difficulty: "foundation", totalMarks: 1,
              extract: PARADE,
              stem: "In 'The Old Parade', whose perspective does the narration most closely follow?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The builder's" },
                  { id: "b", text: "The old residents'" },
                  { id: "c", text: "The cinema owner's" },
                  { id: "d", text: "An entirely neutral observer's" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "convention", name: "Focalisation", statement: "Events are filtered through the old residents' perceptions." }],
                steps: [{ reasoning: "We see 'blind eyes' shopfronts and Mr. Delacroix's grief — the residents' view of events.", evidence: "like blind eyes", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** The old residents'.",
                commonErrors: ["Choosing (d); the narration is sympathetic, not neutral."],
              },
            },
            {
              id: "el10-u7-prose-voice-q2",
              difficulty: "foundation", totalMarks: 2,
              extract: PARADE,
              stem: "What does the image 'shopfronts like blind eyes' suggest about the parade?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Simile", statement: "Comparing shopfronts to blind eyes personifies decay." }],
                steps: [
                  { reasoning: "Blind eyes cannot see — the empty shops are rendered as sightless, lifeless faces.", evidence: "like blind eyes", marks: 1, markCode: "AO2" },
                  { reasoning: "It conveys abandonment and loss, matching the residents' nostalgic perspective.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The simile makes the empty shops seem dead and sightless, conveying abandonment from the residents' mournful perspective.",
              },
            },
            {
              id: "el10-u7-prose-voice-q3",
              difficulty: "core", totalMarks: 3,
              extract: PARADE,
              stem: "How does the writer use dialogue to present different viewpoints in 'The Old Parade'?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Dialogue", statement: "Direct speech lets characters voice conflicting attitudes." }],
                steps: [
                  { reasoning: "Mr. Delacroix voices loss: 'It is not the same' — plain, colloquial, heartfelt.", evidence: "It is not the same", marks: 1, markCode: "AO1" },
                  { reasoning: "The builder counters with optimism: 'everything was being improved' — official, reassuring language.", evidence: "everything was being improved", marks: 1, markCode: "AO2" },
                  { reasoning: "The contrast dramatises the clash between memory and progress.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Dialogue stages the conflict: the resident's blunt 'It is not the same' against the builder's reassuring 'everything was being improved', dramatising memory versus progress.",
              },
            },
            {
              id: "el10-u7-prose-voice-q4",
              difficulty: "challenge", totalMarks: 5,
              extract: PARADE,
              stem: "How does the ending of 'The Old Parade' shape the reader's final impression of regeneration?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Closing image", statement: "The final image often carries the story's judgement." }],
                steps: [
                  { reasoning: "The cinema's name 'still showed on a brick' — memory survives physically even after demolition.", evidence: "the demolished cinema's name", marks: 2, markCode: "AO2" },
                  { reasoning: "'Pale as a scar' turns the trace into a wound — regeneration leaves marks on the community.", evidence: "pale as a scar", marks: 2, markCode: "AO2" },
                  { reasoning: "Ending on this image leaves regeneration unresolved: improvement has happened, but so has damage.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The scar-like trace of the cinema's name leaves regeneration feeling like a wound: memory survives in the fabric of the place, and the damage is unresolved.",
                commonErrors: ["Summarising the ending without analysing the image."],
              },
            },
            {
              id: "el10-u7-prose-voice-q5",
              difficulty: "challenge", totalMarks: 7,
              extract: PARADE,
              stem: "How does 'The Old Parade' use narrative perspective and setting to present regeneration? Support your answer with detailed reference to the text.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Focalisation and free indirect style", statement: "The narration filters events through the residents' feelings." },
                  { kind: "context", name: "Gentrification", statement: "Regeneration often displaces established communities." },
                ],
                steps: [
                  { reasoning: "Focalisation through the residents: 'blind eyes' and Mr. Delacroix's 'could not say what had been lost' give their grief narrative form.", evidence: "could not say what had been lost", marks: 2, markCode: "AO2" },
                  { reasoning: "Setting personifies change: scaffolding 'wore a new face' — disguise, not renewal.", evidence: "wore a new face", marks: 2, markCode: "AO2" },
                  { reasoning: "The builder's polite optimism — 'everything was being improved' — is undercut by the sympathetic focalisation.", evidence: "everything was being improved", marks: 1, markCode: "AO2" },
                  { reasoning: "The closing 'scar' image fixes the perspective: regeneration is damage as much as improvement.", evidence: "pale as a scar", marks: 2, markCode: "AO2" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Perceptive analysis of focalisation, free indirect style and setting creating a sympathetic perspective." },
                  { level: "Level 2", marks: "4-6", descriptor: "Clear analysis with well-chosen evidence and explained effects." },
                  { level: "Level 1", marks: "1-3", descriptor: "Some comment with limited evidence or effect." },
                ],
                finalAnswer: "The narration focalises through the old residents — 'blind eyes', inarticulate grief, scaffolding in a 'new face' — so regeneration reads as disguise and loss, sealed by the cinema name 'pale as a scar'.",
                commonErrors: ["Treating the narration as neutral.", "Ignoring free indirect style."],
              },
            },
            {
              id: "el10-u7-prose-voice-q6",
              difficulty: "challenge", totalMarks: 12,
              extract: PARADE,
              stem: "Read 'The Old Parade' and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify two ways the setting shows the parade's decline before redevelopment.", marks: 4 },
                { label: "b", prompt: "Explain how free indirect style presents Mr. Delacroix's feelings.", marks: 4 },
                { label: "c", prompt: "How does the writer's narrative perspective shape the reader's view of regeneration? Support your answer with detailed reference to the text.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Setting and voice", statement: "Place imagery and focalisation together build the story's perspective." },
                  { kind: "skill", name: "Analysing narrative perspective", statement: "Explain whose eyes filter events and what that does to meaning." },
                ],
                steps: [
                  { part: "a", reasoning: "'For years the parade had stood empty' — prolonged abandonment.", evidence: "stood empty", marks: 2, markCode: "AO1" },
                  { part: "a", reasoning: "'Shopfronts like blind eyes' — the street rendered sightless and dead.", evidence: "like blind eyes", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Free indirect style blends narration with his feelings: 'though he could not say what had been lost'.", evidence: "could not say what had been lost", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "His spoken 'It is not the same' is plain and colloquial — grief too big for words.", evidence: "It is not the same", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Focalisation through residents makes 'blind eyes' and the 'new face' of scaffolding their judgements.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The builder's optimism is filtered through this sympathetic view, so it sounds hollow.", evidence: "everything was being improved", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The closing 'scar' image confirms the perspective: regeneration as damage and memory.", evidence: "pale as a scar", marks: 2, markCode: "AO2" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) Years of emptiness; 'blind eyes' shopfronts. (b) Free indirect style voices his inarticulate grief — he feels loss he cannot name. (c) The residents' focalisation makes regeneration read as disguise and damage, from 'blind eyes' to the cinema's 'scar'.",
                commonErrors: ["Ignoring focalisation.", "Quoting without linking to perspective."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u7-form-perspective-notes", title: "Form and perspective — notes",
      summary: "Poems create perspective through persona and compressed form; prose through narrative voice, focalisation and setting.",
      sections: [
        { heading: "Poetry", body: "Ask who speaks, what the form's rhythm suggests, and which images carry attitude." },
        { heading: "Prose", body: "Ask whose eyes filter events (focalisation) and how dialogue and setting voice conflicting views." },
      ],
    },
  },
  {
    file: "lesson-7-3.ts", exportName: "lesson73",
    lesson: {
      id: "el10-u7-lesson-7-3", code: "7-3",
      title: "Comparing Texts in the Exam",
      goal: "I CAN select evidence and structure a comparative answer on writers' perspectives.",
      standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
      vocabulary: [
        { term: "Comparative question", definition: "An exam question asking how two texts present ideas or methods." },
        { term: "Embedding", definition: "Weaving short quotations naturally into your own sentences." },
        { term: "Point-by-point structure", definition: "Organising a comparison by idea, covering both texts under each point." },
        { term: "Text-by-text structure", definition: "Analysing one text fully, then the other, then linking." },
        { term: "Evaluative conclusion", definition: "A final judgement weighing which writer's methods are most effective." },
        { term: "Linking connective", definition: "Phrases such as 'whereas', 'similarly', 'by contrast' that join the texts." },
      ],
      concepts: [
        {
          id: "el10-u7-evidence-selection",
          title: "Selecting and embedding evidence",
          skill: "Choose short, precise quotations that prove a point about each writer's perspective.",
          sections: [
            { heading: "Evidence that compares", body: "For a comparison you need paired evidence: one quotation from each text that addresses the same idea. If comparing attitudes to loss, 'never know the names' (poem) pairs with 'could not say what had been lost' (prose) — both about inarticulacy and erasure. Weak evidence quotes long passages; strong evidence is short and loaded." },
            { heading: "Embedding quotations", body: "Embed quotes inside your own sentence so the analysis flows: The poet suggests erasure through streets the planners' 'drawings had erased', whereas the prose writer gives the loss a voice in Mr. Delacroix's 'It is not the same'. Notice the quotation is trimmed to the telling words and followed immediately by its effect." },
            { heading: "Precision over quantity", body: "One well-chosen word often carries more than a whole line. 'Rehearsed', 'scar', 'sound' — single words can anchor a paragraph. Always follow a quotation with what it shows: the writer's method and its effect on perspective." },
          ],
          keyFormulas: [
            { name: "Paired evidence", statement: "One quotation per text addressing the same comparative point." },
            { name: "Embedding", statement: "Short quotation inside your own sentence, followed by analysis of method and effect." },
          ],
          workedExample: {
            problem: "Embed evidence to compare how both texts present loss.",
            solution: "The poet presents loss as erasure — streets whose names the 'drawings had erased' — while the prose writer makes it bodily, a name on a brick 'pale as a scar'. Both suggest damage, but the poem abstracts it into planning and the prose makes it a wound.",
          },
          questions: [
            {
              id: "el10-u7-evidence-selection-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "What makes a quotation effective evidence in a comparative answer?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "It is as long as possible" },
                  { id: "b", text: "It is short, precise and followed by analysis" },
                  { id: "c", text: "It appears without comment" },
                  { id: "d", text: "It is taken from only one text" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Evidence selection", statement: "Short, precise quotations analysed for effect score best." }],
                steps: [{ reasoning: "Effective evidence is brief, telling and always analysed.", marks: 1, markCode: "AO3" }],
                finalAnswer: "**(b)** Short, precise and followed by analysis.",
              },
            },
            {
              id: "el10-u7-evidence-selection-q2",
              difficulty: "foundation", totalMarks: 2,
              stem: "Rewrite this weak evidence sentence as an embedded, analytical one: 'In the poem it says glass and steel. In the story it talks about the builder.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Embedding", statement: "Weave short quotations into analytical sentences." }],
                steps: [
                  { reasoning: "Embed a short quotation: 'glass and steel rehearsed their debate'.", marks: 1, markCode: "AO3" },
                  { reasoning: "Add the method/effect and a link: personification makes progress feel performative, whereas the builder's 'everything was being improved' sounds hollow.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Model: 'The poet makes progress feel performative through 'glass and steel' that 'rehearsed their debate', whereas the builder's 'everything was being improved' rings hollow.'",
              },
            },
            {
              id: "el10-u7-evidence-selection-q3",
              difficulty: "core", totalMarks: 3,
              extract: REGEN,
              stem: "A student wants to compare how both texts present the loss of the old community. Suggest two paired pieces of evidence, one from each text, and explain why they work together.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Paired evidence", statement: "Quotations from both texts must address the same idea." }],
                steps: [
                  { reasoning: "Poem: 'never know the names' — loss of history and identity.", evidence: "never know the names", marks: 1, markCode: "AO3" },
                  { reasoning: "Prose: 'could not say what had been lost' — the same inarticulacy of grief.", evidence: "could not say what had been lost", marks: 1, markCode: "AO3" },
                  { reasoning: "They pair because both show loss exceeding words — one through erasure, one through speechlessness.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "'Never know the names' pairs with 'could not say what had been lost': both capture loss that cannot be fully articulated, one through erased history, one through speechless grief.",
              },
            },
            {
              id: "el10-u7-evidence-selection-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "Why is the single word 'rehearsed' in 'Regeneration' more powerful evidence than a whole quoted line about the new buildings? Explain how to use it effectively in an answer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Loaded diction", statement: "A single loaded word can carry an entire attitude." }],
                steps: [
                  { reasoning: "'Rehearsed' implies performance — the buildings' debate is staged, not sincere.", evidence: "rehearsed their debate", marks: 2, markCode: "AO2" },
                  { reasoning: "It compresses the poet's whole ambivalence about regeneration into one verb.", marks: 1, markCode: "AO2" },
                  { reasoning: "Used effectively: embed it — 'glass and steel rehearsed their debate' — and analyse the personification and its effect.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "'Rehearsed' personifies the buildings as performers, making progress feel staged; quoting just that word and analysing its effect is sharper than a long quotation.",
                commonErrors: ["Quoting long passages with no analysis."],
              },
            },
            {
              id: "el10-u7-evidence-selection-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Compare the evidence you would choose from 'Regeneration' and 'The Old Parade' to argue that both writers see regeneration as a kind of damage. Explain your choices.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Imagery of harm", statement: "Both texts use images of wounding and erasure." },
                  { kind: "skill", name: "Argument-led evidence", statement: "Evidence should be selected to prove a stated point." },
                ],
                steps: [
                  { reasoning: "Poem: 'erased' — planning literally rubs out names and streets.", evidence: "the planners' drawings had erased", marks: 2, markCode: "AO2" },
                  { reasoning: "Prose: 'pale as a scar' — the cinema's name is a wound left on the brick.", evidence: "pale as a scar", marks: 2, markCode: "AO2" },
                  { reasoning: "Supporting pair: 'drained estate' (emptied) with 'shopfronts like blind eyes' (sightless).", evidence: "like blind eyes", marks: 1, markCode: "AO2" },
                  { reasoning: "The choices work because each text's method differs — administrative erasure versus bodily scar — yet both argue damage.", marks: 2, markCode: "AO3" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "Well-selected paired evidence with clear reasoning linking choices to the argument." },
                  { level: "Level 2", marks: "4-6", descriptor: "Appropriate evidence with some explanation of choices." },
                  { level: "Level 1", marks: "1-3", descriptor: "Some evidence listed without justification." },
                ],
                finalAnswer: "Choose 'erased' and 'pale as a scar' — planning's erasure versus a bodily wound — supported by 'drained estate' and 'blind eyes'; together they prove both writers frame regeneration as damage through different methods.",
                commonErrors: ["Choosing evidence that does not support the stated argument."],
              },
            },
            {
              id: "el10-u7-evidence-selection-q6",
              difficulty: "challenge", totalMarks: 12,
              stem: "Read 'Regeneration' and 'The Old Parade' and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Select one quotation from each text that shows how the writers present the new development. Explain why each is effective.", marks: 4 },
                { label: "b", prompt: "Select one quotation from each text that shows how the writers present the old community. Explain why each is effective.", marks: 4 },
                { label: "c", prompt: "Using your chosen evidence, write a short comparative paragraph on how the two writers present regeneration.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Paired evidence", statement: "One quotation per text per comparative point, each analysed." },
                  { kind: "technique", name: "Embedded analysis", statement: "Quotations woven into sentences with method and effect." },
                ],
                steps: [
                  { part: "a", reasoning: "Poem quote: 'glass and steel rehearsed their debate' — personification makes progress performative.", evidence: "rehearsed their debate", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Prose quote: 'everything was being improved' — the builder's hollow reassurance.", evidence: "everything was being improved", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Poem quote: residents 'never know the names' — loss of history, implicit and elegiac.", evidence: "never know the names", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Prose quote: 'It is not the same' — voiced, colloquial grief.", evidence: "It is not the same", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Clear comparative point linking both texts' attitude to change.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Evidence embedded with method and effect from both texts.", marks: 2, markCode: "AO3" },
                  { part: "c", reasoning: "Linking language ('whereas', 'by contrast') and a judgement on the perspectives.", marks: 1, markCode: "AO3" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) 'Rehearsed their debate' (performative progress) versus 'everything was being improved' (hollow reassurance). (b) 'Never know the names' (erased history) versus 'It is not the same' (voiced grief). (c) A paragraph linking the poet's implicit elegy to the prose's voiced loss.",
                commonErrors: ["Choosing quotations that do not address the same point.", "Listing quotes without analysis."],
              },
            },
          ],
        },
        {
          id: "el10-u7-comparative-structure",
          title: "Structuring a comparative answer",
          skill: "Organise a comparative answer so links between texts are clear and the judgement is evaluative.",
          sections: [
            { heading: "Two ways to organise", body: "**Point-by-point**: each paragraph takes one idea (e.g. presentation of loss) and covers both texts — best for tight comparisons. **Text-by-text**: analyse Text A fully, then Text B, then a linking paragraph — clearer for complex texts but risks writing two mini-essays. For exam questions on paired texts, point-by-point usually scores higher because links are built in." },
            { heading: "The linking paragraph", body: "Every comparative paragraph needs connective tissue: 'Whereas the poet compresses loss into imagery, the prose writer dramatises it in dialogue.' End with an **evaluative** judgement: which writer's methods are more effective and why — e.g. the poem's compression intensifies feeling, while prose's scene-building makes loss communal." },
            { heading: "Exam discipline", body: "Plan in four minutes: note each text's key methods for the question's focus, then alternate evidence. Keep quotations short. Check every paragraph answers 'how do the writers compare on THIS point?', not just 'what happens'." },
          ],
          keyFormulas: [
            { name: "Point-by-point", statement: "Organise by idea; cover both texts in each paragraph." },
            { name: "Linking connective", statement: "'Whereas', 'similarly', 'by contrast', 'both' — make the comparison explicit." },
            { name: "Evaluative conclusion", statement: "Judge which methods are more effective, not just which you prefer." },
          ],
          workedExample: {
            problem: "Plan a comparative answer on 'how both writers present loss' for the regeneration texts.",
            solution: "Point-by-point plan: (1) Methods — poet's imagery of erasure vs prose's dialogue of grief; (2) Effects — poem's abstraction intensifies vs prose's communal voice; (3) Judgement — prose makes loss social and voiced, poem makes it landscape and memory; both ambivalent, poem ends hopeful, prose unresolved. Write each paragraph covering both texts with linking connectives.",
          },
          questions: [
            {
              id: "el10-u7-comparative-structure-q1",
              difficulty: "foundation", totalMarks: 1,
              stem: "Which structure is usually strongest for a paired-texts comparison question?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Writing about Text A fully, then Text B, with no links" },
                  { id: "b", text: "Point-by-point, covering both texts under each idea" },
                  { id: "c", text: "Only analysing the poem" },
                  { id: "d", text: "Listing techniques without comparison" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Comparative structure", statement: "Point-by-point builds links into every paragraph." }],
                steps: [{ reasoning: "Organising by idea forces explicit comparison throughout.", marks: 1, markCode: "AO3" }],
                finalAnswer: "**(b)** Point-by-point.",
              },
            },
            {
              id: "el10-u7-comparative-structure-q2",
              difficulty: "foundation", totalMarks: 2,
              stem: "What is the purpose of an evaluative conclusion in a comparative answer?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Evaluative judgement", statement: "Weigh which writer's methods are more effective." }],
                steps: [
                  { reasoning: "It moves beyond description to a judgement about effectiveness.", marks: 1, markCode: "AO3" },
                  { reasoning: "It should compare methods — e.g. compression versus scene-building — not just state preference.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "It judges which writer's methods achieve their perspective more effectively, weighing techniques rather than preference.",
              },
            },
            {
              id: "el10-u7-comparative-structure-q3",
              difficulty: "core", totalMarks: 3,
              stem: "A student writes: 'The poem is about regeneration. It has cranes and glass. The story is also about regeneration. There is a builder.' Rewrite the approach so it actually compares the texts.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Comparative analysis", statement: "Comparison requires shared points, methods and effects." }],
                steps: [
                  { reasoning: "Identify a shared point: both present regeneration as ambivalent.", marks: 1, markCode: "AO3" },
                  { reasoning: "Compare methods under that point: poet's 'rehearsed their debate' personification vs prose's builder's 'everything was being improved'.", marks: 1, markCode: "AO3" },
                  { reasoning: "Compare effects: staged progress versus hollow reassurance; link with 'whereas'.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Rewrite as point-by-point: under 'attitude to change', contrast the poet's personified 'rehearsed their debate' with the builder's reassuring 'everything was being improved', explaining how each makes progress feel staged or hollow.",
              },
            },
            {
              id: "el10-u7-comparative-structure-q4",
              difficulty: "challenge", totalMarks: 5,
              stem: "Explain why the text-by-text structure can be risky in a timed exam, and when it might still be the better choice.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Exam structure judgement", statement: "Choose structure to maximise explicit comparison." }],
                steps: [
                  { reasoning: "Risk: it produces two separate analyses; links come late or not at all.", marks: 2, markCode: "AO3" },
                  { reasoning: "Time pressure makes the linking paragraph rushed or omitted.", marks: 1, markCode: "AO3" },
                  { reasoning: "Better when texts are very different in form and need separate treatment before linking.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Text-by-text risks becoming two unrelated analyses with weak links under time pressure; it suits very different texts, but point-by-point is safer for tight comparison.",
                commonErrors: ["Choosing structure by habit rather than by the question."],
              },
            },
            {
              id: "el10-u7-comparative-structure-q5",
              difficulty: "challenge", totalMarks: 7,
              stem: "Plan a point-by-point answer to: 'Compare how the writers of 'Regeneration' and 'The Old Parade' present the experience of change.' Show your paragraph plan and the linking connectives you would use.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Answer planning", statement: "Plan by shared points covering both texts." },
                  { kind: "technique", name: "Linking connectives", statement: "Explicit links make comparison visible to the examiner." },
                ],
                steps: [
                  { reasoning: "P1 — Physical change: cranes/'rehearsed their debate' versus scaffolding's 'new face'.", marks: 2, markCode: "AO3" },
                  { reasoning: "P2 — Community response: absent residents/'a different place' versus voiced 'It is not the same'.", marks: 2, markCode: "AO3" },
                  { reasoning: "P3 — Attitude and judgement: poem's guarded hope ('defiance of the stone') versus prose's unresolved 'scar'.", marks: 2, markCode: "AO3" },
                  { reasoning: "Connectives: 'whereas', 'by contrast', 'both', 'similarly' used in each paragraph.", marks: 1, markCode: "AO3" },
                ],
                levels: [
                  { level: "Level 3", marks: "7", descriptor: "A coherent point-by-point plan with paired evidence, methods and effects plus linking language." },
                  { level: "Level 2", marks: "4-6", descriptor: "A workable plan with some paired points and links." },
                  { level: "Level 1", marks: "1-3", descriptor: "A partial plan or list of topics without comparison." },
                ],
                finalAnswer: "Three paragraphs — physical change, community response, attitude — each covering both texts with 'whereas', 'by contrast' and 'both', ending with an evaluative judgement on the differing methods.",
                commonErrors: ["Planning text-by-text when the question invites point-by-point.", "Planning without linking connectives."],
              },
            },
            {
              id: "el10-u7-comparative-structure-q6",
              difficulty: "challenge", totalMarks: 12,
              stem: "Read 'Regeneration' and 'The Old Parade' and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "State the main idea your comparison will focus on and give one piece of evidence from each text for it.", marks: 4 },
                { label: "b", prompt: "Write one fully comparative paragraph comparing the writers' methods in presenting that idea.", marks: 4 },
                { label: "c", prompt: "Write a concluding sentence that evaluates which writer presents the idea more effectively and why.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Comparative focus", statement: "A clear shared point anchors the whole answer." },
                  { kind: "technique", name: "Embedded evidence", statement: "Short quotations analysed for method and effect." },
                ],
                steps: [
                  { part: "a", reasoning: "Clear comparative focus, e.g. 'both present regeneration as loss'.", marks: 1, markCode: "AO3" },
                  { part: "a", reasoning: "Poem evidence: 'names... erased' or 'a different place'.", evidence: "never know the names", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Prose evidence: 'It is not the same' or 'pale as a scar'.", evidence: "pale as a scar", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Explicit comparison of methods: imagery of erasure versus dialogue and the scar image.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Effects compared: poem abstracts loss into landscape; prose makes it communal and bodily.", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Evaluative judgement on effectiveness with method-based reasoning.", marks: 4, markCode: "AO3" },
                ],
                levels: [
                  ...TOP4.map((b) => ({ ...b, part: "a" })),
                  ...TOP4.map((b) => ({ ...b, part: "b" })),
                  ...TOP4.map((b) => ({ ...b, part: "c" })),
                ],
                finalAnswer: "(a) Focus: regeneration as loss — 'erased' names versus 'It is not the same'/'scar'. (b) A paragraph contrasting compressed elegiac imagery with voiced, communal grief. (c) A judgement such as: the prose is more effective because it dramatises loss socially, though the poem's compression intensifies its elegy.",
                commonErrors: ["(a) Choosing evidence that does not serve the focus.", "(c) Stating preference without comparing methods."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u7-exam-notes", title: "Comparing texts — exam notes",
      summary: "Plan by shared points, pair evidence from both texts, embed short quotations and finish with an evaluative judgement.",
      sections: [
        { heading: "Structure", body: "Point-by-point usually beats text-by-text in timed exams." },
        { heading: "Evidence", body: "Short, loaded quotations analysed for method and effect — one per text per point." },
        { heading: "Judgement", body: "End by weighing which methods are more effective, not which you prefer." },
      ],
    },
  },
];

module.exports = L7;
