import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mll5-u1-lesson-1-2",
  code: "1-2",
  title: "Symbolism and Imagery",
  goal: "I CAN identify and analyse symbolism and imagery in literary texts, explaining how they create meaning beyond the literal.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Symbolism", definition: "When something represents something else — a dove = peace, a rose = love." },
    { term: "Imagery", definition: "Language appealing to the senses — visual, auditory, tactile, olfactory, gustatory." },
    { term: "Metaphor", definition: "Direct comparison — 'her eyes were diamonds'." },
    { term: "Simile", definition: "Comparison using 'like' or 'as' — 'eyes like diamonds'." },
    { term: "Pathetic fallacy", definition: "Weather/mood reflecting human emotion — 'the storm mirrored her anger'." },
    { term: "Motif", definition: "Recurring symbol or image throughout a text." },
  ],
  concepts: [
    {
      id: "mll5-u1-symbolism",
      title: "Reading symbols",
      skill: "Identify symbols and explain what they represent in context.",
      lesson: {
        sections: [
          {
            heading: "What is a symbol?",
            body: "A **symbol** is something that stands for something more than itself. A **dove** = peace; a **rose** = love; **darkness** = ignorance or evil; **light** = hope or truth. Symbols work through **convention** (cultural associations) and **context** (what they mean in this specific text).",
          },
          {
            heading: "Context determines meaning",
            body: "The same symbol means different things in different texts. A **snake** in the Bible = temptation; in a biology text = reptile; in a poem about healing = transformation. Always ask: **what does this symbol mean HERE?** Context, not just convention.",
          },
          {
            heading: "Motifs and patterns",
            body: "A **motif** is a recurring symbol — if light appears throughout a novel, it accumulates meaning. Track patterns: does the symbol change meaning as the story progresses? A symbol might start positive and become ironic.",
          },
        ],
        keyFormulas: [
          { name: "Symbolism formula", statement: "Symbol + Context = Meaning. Track motifs for evolving significance." },
        ],
        workedExample: {
          problem: "In a story, a character keeps a broken watch that stopped at 3:07. What might it symbolise?",
          solution: "The stopped watch = a frozen moment — perhaps a trauma, a lost loved one, or time that won't move forward. Context would confirm.",
        },
      },
      questions: [
        {
          id: "mll5-u1-symbolism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a symbol?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A mathematical sign" },
              { id: "b", text: "Something that represents something else" },
              { id: "c", text: "A character's name" },
              { id: "d", text: "A type of poem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Symbol", statement: "Something representing something else." }],
            steps: [{ reasoning: "Criterion A (Analysing): symbol = represents something else — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Something that represents something else",
          },
        },
        {
          id: "mll5-u1-symbolism-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Story",
            author: "Written for Akademik Space",
            text: "Mara kept the photograph face-down on her desk. Every morning she turned it over, looked at it for a moment, then turned it back. She never showed it to anyone.",
          },
          stem: "What might the face-down photograph symbolise? Support your answer with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolism", statement: "Objects can symbolise hidden emotions or past events." }],
            steps: [
              { reasoning: "Criterion A (Analysing): photograph face-down = hidden past/memory — she can't look at it directly but can't discard it.", evidence: "face-down ... turned it back", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'never showed it to anyone' suggests private grief or shame — symbolises something she can't share.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hidden memory/past — face-down position + never showing anyone suggests private grief she can't confront or share.",
          },
        },
        {
          id: "mll5-u1-symbolism-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Novel Excerpt",
            author: "Written for Akademik Space",
            text: "The garden had been her mother's pride. Now the roses were wild, untended, their stems thick with thorns. She walked through anyway, careful of the thorns, until she reached the bench where her mother used to sit.",
          },
          stem: "Analyse the symbolism — what do the wild roses and thorns represent? How does context determine their meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Contextual symbolism", statement: "Same symbol, different meanings depending on story context." }],
            steps: [
              { reasoning: "Criterion A (Analysing): wild roses = neglected beauty/grief — mother's garden overgrown after her death.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): thorns = pain associated with memory — 'careful of the thorns' mirrors emotional pain of revisiting.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): context — mother's death makes roses symbolise lost love and untended grief, not just flowers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wild roses = neglected grief/lost love; thorns = emotional pain; context (mother's death) determines meaning.",
          },
        },
        {
          id: "mll5-u1-symbolism-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the symbol in: 'The lighthouse beam swept the dark water, searching for ships that weren't there.'", marks: 1 },
            { label: "b", prompt: "Explain what the lighthouse might symbolise in a story about hope.", marks: 2 },
            { label: "c", prompt: "How would its meaning change in a story about isolation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Contextual symbolism", statement: "Symbols change meaning based on narrative context." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): lighthouse = symbol of guidance/hope/searching.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): in hope story — lighthouse = guidance, safety, someone watching over you; 'searching for ships' = hope of rescue.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'dark water' = danger/unknown; beam = hope cutting through.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): in isolation story — lighthouse could symbolise unattainable help, loneliness (ships 'weren't there'), or false hope.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'weren't there' already hints at futility — context shifts symbol from hope to loneliness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Lighthouse = guidance/hope. (b) Hope story = safety/rescue. (c) Isolation story = unattainable help/false hope — 'weren't there' foreshadows.",
          },
        },
        {
          id: "mll5-u1-symbolism-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In conventional symbolism, what does a dove most often represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "War" },
              { id: "b", text: "Peace" },
              { id: "c", text: "Greed" },
              { id: "d", text: "Technology" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Conventional symbol", statement: "Dove = peace through cultural convention." }],
            steps: [{ reasoning: "Criterion A (Analysing): dove conventionally = peace — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Peace",
          },
        },
        {
          id: "mll5-u1-symbolism-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Corridor",
            author: "Written for Akademik Space",
            text: "Light spilled across the floor. The light dimmed. She moved toward the light.",
          },
          stem: "How many times does the word 'light' appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Motif", statement: "A recurring image accumulates meaning." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'Light spilled', 'The light dimmed', 'toward the light' — the word appears 3 times, marking light as a motif.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-symbolism-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Snake",
            author: "Written for Akademik Space",
            text: "In Story A, the snake coils around the traveller's wrist and he is healed. In Story B, the snake strikes the hunter and he falls.",
          },
          stem: "What does this pair of extracts demonstrate about symbolism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Snakes always mean evil" },
              { id: "b", text: "A symbol's meaning depends on context, not just convention" },
              { id: "c", text: "Symbols never change meaning" },
              { id: "d", text: "Animals cannot be symbols" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Contextual symbolism", statement: "Same symbol, different meanings depending on story context." }],
            steps: [{ reasoning: "Criterion A (Analysing): snake = healing in A, danger in B — context determines meaning — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A symbol's meaning depends on context, not just convention",
          },
        },
        {
          id: "mll5-u1-symbolism-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Keepsake",
            author: "Written for Akademik Space",
            text: "She kept the ticket stub from that day — creased, faded, never thrown away.",
          },
          stem: "What might the kept ticket stub most likely symbolise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A practical record of travel costs" },
              { id: "b", text: "A cherished memory or an unfinished past she cannot let go" },
              { id: "c", text: "A hobby collecting tickets" },
              { id: "d", text: "Good luck for future journeys" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolism", statement: "Objects can symbolise hidden emotions or past events." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'creased, faded, never thrown away' — sentimental preservation of memory — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A cherished memory or an unfinished past she cannot let go",
          },
        },
        {
          id: "mll5-u1-symbolism-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between a symbol and a motif?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same thing" },
              { id: "b", text: "A motif is a recurring symbol whose meaning develops across the text" },
              { id: "c", text: "A symbol only appears once" },
              { id: "d", text: "A motif is only visual" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Motif", statement: "A recurring symbol or image throughout a text." }],
            steps: [{ reasoning: "Criterion A (Analysing): motif = recurring symbol with developing significance — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A motif is a recurring symbol whose meaning develops across the text",
          },
        },
        {
          id: "mll5-u1-symbolism-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Attic",
            author: "Written for Akademik Space",
            text: "Dust covered everything. A single beam of light cut through the dark, landing on a photograph.",
          },
          stem: "How many distinct symbolic elements can be identified in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Identifying symbols", statement: "Light and the photograph both carry symbolic weight." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'beam of light' (hope/truth) and 'photograph' (memory/past) — 2 symbols; 'dust' is descriptive.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u1-symbolism-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Key",
            author: "Written for Akademik Space",
            text: "At first, the key opened doors she chose to open. Later, it opened a door she had sworn never to unlock. By the end, she carried it like a weight.",
          },
          stem: "Analyse how the symbol of the key changes meaning across the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evolving symbolism", statement: "A symbol's meaning can shift as the narrative progresses." }],
            steps: [
              { reasoning: "Criterion A (Analysing): initially the key = agency — 'doors she chose to open', freedom and control.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): later the key = temptation/violation — 'sworn never to unlock', boundaries broken.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): finally the key = burden/guilt — 'carried it like a weight' — the symbol accumulates moral weight.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Key shifts from agency → temptation → guilt; the evolving symbol tracks the character's moral journey.",
          },
        },
        {
          id: "mll5-u1-symbolism-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a motif?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of poem" },
              { id: "b", text: "A recurring symbol or image that accumulates meaning" },
              { id: "c", text: "A character's catchphrase" },
              { id: "d", text: "A chapter title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Motif", statement: "Recurring symbol or image throughout a text." }],
            steps: [{ reasoning: "Criterion A (Analysing): motif = recurring symbol — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A recurring symbol or image that accumulates meaning",
          },
        },
        {
          id: "mll5-u1-symbolism-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the likely symbol in: 'The clock in the tower had stopped years ago, but the village kept winding it anyway.'", marks: 1 },
            { label: "b", prompt: "Explain what the stopped clock could represent.", marks: 2 },
            { label: "c", prompt: "What does the act of winding it anyway add to the meaning?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolic objects", statement: "Objects can embody attitudes, rituals and collective memory." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the stopped clock — a frozen moment, broken time, ritual.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): stopped clock = time that won't move forward — could symbolise grief, tradition, or a community frozen in the past.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'years ago' suggests the stoppage is old — the village lives with a broken symbol.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): winding it anyway = ritualistic hope — maintaining appearance of function; the community clings to routine despite brokenness.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): adds irony and pathos — effort expended on something that cannot work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) The stopped clock. (b) Frozen time/grief/tradition. (c) Ritual hope — maintaining routine despite brokenness, with irony.",
          },
        },
        {
          id: "mll5-u1-symbolism-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The List",
            author: "Written for Akademik Space",
            text: "Symbols in the story: the cracked mirror, the unopened letter, the wilting plant.",
          },
          stem: "How many symbols are listed in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Counting symbols", statement: "Each listed object functions as a potential symbol." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'cracked mirror', 'unopened letter', 'wilting plant' — 3 listed symbols.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-symbolism-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            text: "She planted roses over the place where the dog was buried. Every spring they bloomed — thorns first, then flowers.",
          },
          stem: "What is the most defensible reading of the roses here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They simply describe a garden" },
              { id: "b", text: "They symbolise grief transformed — beauty grown over loss, pain (thorns) preceding bloom" },
              { id: "c", text: "They prove she hated the dog" },
              { id: "d", text: "They are a religious symbol only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolic ambiguity", statement: "Symbols gain meaning from context — here grief and renewal." }],
            steps: [{ reasoning: "Criterion A (Analysing): planted 'over' the burial place + 'thorns first, then flowers' — grief yielding beauty — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** They symbolise grief transformed — beauty grown over loss, pain (thorns) preceding bloom",
          },
        },
        {
          id: "mll5-u1-symbolism-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the symbol in: 'The door would not open. She pushed again — it remained shut, as it had for years.'", marks: 1 },
            { label: "b", prompt: "Explain two possible meanings the closed door could carry.", marks: 2 },
            { label: "c", prompt: "What would the door need to do for the symbol to resolve?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolic threshold", statement: "Doors commonly symbolise transition, opportunity or blockage." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the closed door — symbol of blocked transition/opportunity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): could symbolise an unchangeable past, a relationship that cannot reopen, or self-imposed limitation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'as it had for years' suggests long-standing blockage — entrenched, not temporary.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the door opening (or being opened from inside) would signal resolution — acceptance, change, or new agency.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): alternatively, the character choosing not to open it could resolve the symbol as acceptance of the closed past.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) The closed door. (b) Blocked past/relationship or self-limitation. (c) Opening it — or choosing to leave it shut — resolves the symbol.",
          },
        },
      ],
    },
    {
      id: "mll5-u1-imagery",
      title: "Sensory imagery",
      skill: "Analyse sensory imagery — visual, auditory, tactile, olfactory, gustatory — and its effects.",
      lesson: {
        sections: [
          {
            heading: "The five senses",
            body: "**Imagery** appeals to senses: **visual** (sight — 'golden light'), **auditory** (sound — 'whisper', 'roar'), **tactile** (touch — 'rough', 'silky'), **olfactory** (smell — 'petrichor', 'acrid'), **gustatory** (taste — 'bitter', 'sweet'). Skilled writers engage multiple senses.",
          },
          {
            heading: "Why imagery matters",
            body: "Imagery makes writing **vivid** — readers experience rather than just understand. 'The room was cold' vs 'Frost feathered the windowpanes' — the second creates a sensory experience. Imagery also carries **emotional weight** — certain images evoke feelings.",
          },
          {
            heading: "Analysing imagery",
            body: "Identify which senses are engaged, then ask: **what effect**? Does the imagery create mood (dark = ominous), characterise (rough hands = hard life), or symbolise (light = hope)? Imagery + effect = strong analysis.",
          },
        ],
        keyFormulas: [
          { name: "Imagery analysis", statement: "Sense + Image + Effect = sensory meaning." },
        ],
        workedExample: {
          problem: "'The coffee smelled bitter, acrid — like burnt rubber.' — Which senses?",
          solution: "Olfactory (smell) + gustatory implied (bitter) + visual/tactile comparison (burnt rubber) — rich multi-sensory imagery.",
        },
      },
      questions: [
        {
          id: "mll5-u1-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense does 'the scent of rain on dust' primarily appeal to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Smell" },
              { id: "c", text: "Touch" },
              { id: "d", text: "Taste" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Olfactory imagery", statement: "Smell imagery appeals to the sense of smell." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'scent' = smell — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Smell",
          },
        },
        {
          id: "mll5-u1-imagery-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Description",
            author: "Written for Akademik Space",
            text: "'The soup was lukewarm, tasting of boiled cabbage and regret. She stirred it anyway, watching the steam curl and vanish.'",
          },
          stem: "Identify the sensory imagery and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory imagery", statement: "Multiple senses create vivid, emotional experience." }],
            steps: [
              { reasoning: "Criterion A (Analysing): gustatory ('tasting', 'boiled cabbage'), tactile ('lukewarm'), visual ('steam curl and vanish'), emotional ('regret').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'regret' adds emotional depth — the soup isn't just food, it carries feeling; 'vanish' mirrors fleeting emotion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Multi-sensory imagery (taste, touch, sight) + 'regret' adds emotional layer — vivid and melancholic.",
          },
        },
        {
          id: "mll5-u1-imagery-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Settings",
            author: "Written for Akademik Space",
            text: "Setting A: 'The room was nice. She sat down.\n\nSetting B: 'Dust motes danced in the shaft of afternoon light. The velvet chair sighed under her weight, and somewhere a clock ticked with maddening patience.'",
          },
          stem: "Compare the imagery — how does Setting B create atmosphere that A lacks?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery and atmosphere", statement: "Rich sensory detail creates mood and immersion." }],
            steps: [
              { reasoning: "Criterion A (Analysing): B uses visual ('dust motes danced', 'shaft of light'), tactile ('velvet', 'sighed'), auditory ('clock ticked').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): personification — 'motes danced', 'chair sighed' — brings setting alive.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'maddening patience' creates tension — the ticking clock suggests time pressure; A is flat, B is immersive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "B uses multi-sensory imagery + personification to create atmosphere and tension; A is bare and flat.",
          },
        },
        {
          id: "mll5-u1-imagery-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the dominant sense in: 'The iron smell of blood filled the room.'", marks: 1 },
            { label: "b", prompt: "Explain how this single image creates multiple effects.", marks: 2 },
            { label: "c", prompt: "Suggest an alternative image that conveys the same emotion differently.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Olfactory symbolism", statement: "Smell often evokes memory and emotion powerfully." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): olfactory — 'smell' explicitly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'iron' suggests blood/violence; 'filled the room' creates suffocating atmosphere; smell triggers primal disgust/fear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): smell is linked to memory — readers may recall real experiences of blood/violence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): alternative — e.g. visual ('red pooled on the floor') or auditory ('a wet sound'); conveys same horror differently.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): explains why different sense creates different but equally powerful effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Smell. (b) 'Iron' = violence; 'filled' = suffocating; smell triggers memory/fear. (c) e.g. visual alternative — same horror, different sense.",
          },
        },
        {
          id: "mll5-u1-imagery-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense does 'the acrid smell of smoke' primarily appeal to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Smell" },
              { id: "c", text: "Touch" },
              { id: "d", text: "Hearing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Olfactory imagery", statement: "Smell imagery appeals to the sense of smell." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'smell' explicitly states olfactory — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Smell",
          },
        },
        {
          id: "mll5-u1-imagery-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "The bell clanged. Its echo rang in her teeth.",
          },
          stem: "How many distinct senses does this extract engage?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-sensory imagery", statement: "Skilled writers engage several senses at once." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'clanged', 'echo rang' = auditory; 'in her teeth' = tactile — 2 senses.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u1-imagery-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Details",
            author: "Written for Akademik Space",
            text: "Detail A: 'The silk felt cool against her skin.'\n\nDetail B: 'The room was blue.'",
          },
          stem: "Which detail uses tactile imagery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Detail A — 'felt cool against her skin' appeals to touch" },
              { id: "b", text: "Detail B — colour is always tactile" },
              { id: "c", text: "Both are tactile" },
              { id: "d", text: "Neither is tactile" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Tactile imagery", statement: "Touch imagery appeals to the sense of touch." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'felt cool against her skin' = touch — (a); 'blue' is visual.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Detail A — 'felt cool against her skin' appeals to touch",
          },
        },
        {
          id: "mll5-u1-imagery-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Setting",
            author: "Written for Akademik Space",
            text: "Wind moaned through the broken window. Somewhere below, a door slammed.",
          },
          stem: "What mood does this imagery create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cheerful and bright" },
              { id: "b", text: "Ominous and uneasy" },
              { id: "c", text: "Calm and peaceful" },
              { id: "d", text: "Excited and energetic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery and mood", statement: "Auditory imagery can create atmosphere and tension." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'moaned', 'broken', 'slammed' — harsh sounds create unease — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Ominous and uneasy",
          },
        },
        {
          id: "mll5-u1-imagery-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Kitchen",
            author: "Written for Akademik Space",
            text: "Bread crust crackled. Steam curled from the pot. Somewhere, a radio murmured a language she almost knew.",
          },
          stem: "Which sense is NOT directly engaged in this extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound — 'crackled', 'murmured'" },
              { id: "b", text: "Sight — 'steam curled'" },
              { id: "c", text: "Taste — the bread's flavour is described" },
              { id: "d", text: "Smell is implied but not stated" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory inventory", statement: "Check which senses are actually described, not implied." }],
            steps: [{ reasoning: "Criterion A (Analysing): sound (crackled, murmured) and sight (steam curled) are engaged; taste is not described — (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Taste — the bread's flavour is described",
          },
        },
        {
          id: "mll5-u1-imagery-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "Rain hammered the roof. The wind screamed. Inside, the fire popped and hissed.",
          },
          stem: "How many distinct sensory images appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Counting imagery", statement: "Each sensory phrase counts as an image." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'rain hammered' (tactile/auditory), 'wind screamed' (auditory), 'fire popped', 'hissed' (auditory) — 4 sensory images.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "mll5-u1-imagery-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Room",
            author: "Written for Akademik Space",
            text: "The nursery smelled of lavender and something sweeter underneath. A mobile turned slowly above the empty cot, its painted stars catching the pale morning light.",
          },
          stem: "Analyse the imagery — how do the sensory details create emotional complexity?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery and emotion", statement: "Sensory details can carry grief, memory and absence." }],
            steps: [
              { reasoning: "Criterion A (Analysing): olfactory — 'lavender and something sweeter' — the 'something underneath' hints at hidden sorrow.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): visual — 'empty cot', 'mobile turning slowly' — absence made visible; motion without life.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'pale morning light' — muted, joyless light mirrors grief; imagery creates tenderness and loss together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Olfactory + visual imagery create tender grief — lavender comfort, empty cot absence, pale light mirroring sorrow.",
          },
        },
        {
          id: "mll5-u1-imagery-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is gustatory imagery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Imagery appealing to taste" },
              { id: "b", text: "Imagery appealing to sight" },
              { id: "c", text: "Imagery appealing to hearing" },
              { id: "d", text: "Imagery appealing to touch" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gustatory imagery", statement: "Taste imagery appeals to the sense of taste." }],
            steps: [{ reasoning: "Criterion A (Analysing): gustatory = taste — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Imagery appealing to taste",
          },
        },
        {
          id: "mll5-u1-imagery-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the dominant sense in: 'The engine coughed, spluttered, and died.'", marks: 1 },
            { label: "b", prompt: "Explain how the auditory imagery personifies the engine.", marks: 2 },
            { label: "c", prompt: "Suggest a tactile version of the same moment.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Auditory personification", statement: "Sound imagery + personification makes machines feel alive." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): auditory — 'coughed', 'spluttered' describe sound.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'coughed' and 'spluttered' are human actions applied to a machine — personification makes the engine seem to struggle and fail like a person.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'died' completes the metaphor — engine as living thing that expires.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): tactile version — e.g. 'The steering wheel went dead under her hands; the engine shuddered once and went still.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): shifts from hearing the failure to feeling it — different sense, same emotion of loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Auditory. (b) Human verbs personify the engine's struggle and death. (c) e.g. 'The wheel went dead under her hands' — tactile version.",
          },
        },
        {
          id: "mll5-u1-imagery-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Forest",
            author: "Written for Akademik Space",
            text: "Pine resin stuck to her fingers. The air tasted of cold stone.",
          },
          stem: "How many senses does this extract engage?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory analysis", statement: "Sticky fingers = tactile; taste of stone = gustatory; implied smell of resin." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'stuck to her fingers' tactile, 'tasted' gustatory, 'resin' olfactory implied — 3 senses.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-imagery-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Farewell",
            author: "Written for Akademik Space",
            text: "She folded the letter twice, then once more, until it was small enough to disappear into her pocket.",
          },
          stem: "Which sense does this passage primarily engage, and why is it effective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Taste — the letter is described as bitter" },
              { id: "b", text: "Tactile — the folding action externalises grief and restraint" },
              { id: "c", text: "Smell — the letter's scent is described" },
              { id: "d", text: "Sound — the paper's rustle is described" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tactile imagery", statement: "Touch imagery can externalise emotion." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'folded', 'small enough' — tactile action; repeated folding mirrors suppressed emotion — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Tactile — the folding action externalises grief and restraint",
          },
        },
        {
          id: "mll5-u1-imagery-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the senses engaged in: 'The chai was scalding on her tongue; cardamom and smoke rose from the glass.'", marks: 1 },
            { label: "b", prompt: "Explain how the gustatory and olfactory images work together.", marks: 2 },
            { label: "c", prompt: "Rewrite using only visual imagery, keeping the same warmth and comfort.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-sensory imagery", statement: "Taste and smell combine to create immersive experience." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): gustatory ('scalding on her tongue') + olfactory ('cardamom and smoke rose').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): taste gives immediate physical experience (heat, flavour); smell adds memory and atmosphere — together they evoke comfort and home.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'scalding' suggests both pain and warmth — the drink is too hot but she keeps drinking = devotion/comfort.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): visual version — e.g. 'Steam rose in curling ribbons from the glass; her hands wrapped around the warmth.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): visual version keeps comfort through colour/warmth imagery but loses direct taste/smell immediacy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Taste + smell. (b) Combined senses evoke comfort/devotion. (c) e.g. 'Steam rose in curling ribbons...' — visual alternative.",
          },
        },
      ],
    },
  ],
};
