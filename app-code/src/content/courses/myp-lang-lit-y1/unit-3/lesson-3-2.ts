import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mll1-u3-lesson-3-2",
  code: "3-2",
  title: "Writing a Poem",
  goal: "I CAN write a short poem using rhyme, rhythm and imagery about something I know well.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Poem", definition: "Words arranged in lines and stanzas to paint pictures or share feelings." },
    { term: "Rhyme scheme", definition: "The pattern of rhyming lines, often written with letters like AABB or ABAB." },
    { term: "Stanza", definition: "A group of lines in a poem, like a paragraph." },
    { term: "Imagery", definition: "Words that appeal to the senses to create pictures." },
    { term: "Free verse", definition: "A poem without regular rhyme or rhythm — lines flow naturally." },
  ],
  concepts: [
    {
      id: "mll1-u3-poem-forms",
      title: "Choosing a form for your poem",
      skill: "Choose between rhyming poems and free verse and plan stanzas.",
      lesson: {
        sections: [
          {
            heading: "Rhyming poems",
            body: "A **rhyming poem** has lines that end with the same sound. The simplest pattern is **couplets** — pairs of rhyming lines (AABB). Rhyme makes poems musical and easy to remember.",
          },
          {
            heading: "Free verse",
            body: "**Free verse** has no fixed rhyme or rhythm. The poet shapes lines by meaning and feeling instead. Free verse can feel like natural speech — good for quiet, thoughtful subjects.",
          },
          {
            heading: "Stanzas and line length",
            body: "Group lines into **stanzas**. Short lines feel quick and light; longer lines feel slow and heavy. Varying line length gives your poem shape and music.",
          },
        ],
        keyFormulas: [
          { name: "Poem forms", statement: "Rhyming poem: lines end with matching sounds. Free verse: no fixed rhyme — shape by meaning." },
        ],
        workedExample: {
          problem: "What is the rhyme scheme of: 'The cat sat on the mat / and watched a little bat / fly past the window high / beneath the evening sky'?",
          solution: "The end words mat/bat and high/sky rhyme in pairs — the scheme is AABB.",
        },
      },
      questions: [
        {
          id: "mll1-u3-poem-forms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'free verse'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A poem with no rules at all — it can be anything" },
              { id: "b", text: "A poem without fixed rhyme or rhythm" },
              { id: "c", text: "A poem that must rhyme every line" },
              { id: "d", text: "A poem written only about freedom" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Free verse", statement: "Free verse is poetry without a fixed rhyme scheme or metre." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): free verse means no fixed rhyme or rhythm — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A poem without fixed rhyme or rhythm",
          },
        },
        {
          id: "mll1-u3-poem-forms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the rhyme scheme of this poem: 'I saw a little owl / perched high upon a bow. / It watched the stars come out / and hooted through the night.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rhyme scheme", statement: "Label rhyming end-words with letters: A, B, A, B..." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): owl/bow rhyme (A) and out/night rhyme (B) — the pattern is ABAB.", evidence: "owl ... bow ... out ... night", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): the scheme is written correctly as ABAB with each line labelled.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "ABAB",
          },
        },
        {
          id: "mll1-u3-poem-forms-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A poet writes about a funeral in short, quiet lines with no rhyme. Explain two reasons free verse might suit this subject better than a bouncy rhyming poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Form matches feeling", statement: "The form of a poem should match its subject and mood." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): free verse's lack of rhyme avoids a playful, sing-song feel that would be wrong for a funeral.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): short quiet lines slow the reader down, matching the solemn, careful mood.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): choosing form deliberately is a creative decision that shapes the reader's response.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Free verse avoids a playful rhyme and lets short quiet lines match the solemn mood — form follows feeling.",
          },
        },
        {
          id: "mll1-u3-poem-forms-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Choose either a rhyming poem or free verse for a poem about your favourite season. Explain your choice.", marks: 2 },
            { label: "b", prompt: "Plan the shape: how many stanzas and roughly how many lines each?", marks: 1 },
            { label: "c", prompt: "Write the first four lines of your poem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poem planning", statement: "Choose a form that fits the subject, then plan stanza shape before writing." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a justified choice — e.g. rhyming for a joyful season, free verse for a quiet one.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion A (Analysing): the reason links form to feeling or subject.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion B (Organizing): a concrete plan such as 'two stanzas of four lines' or 'one stanza of six lines'.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): four original lines that begin the poem with imagery or feeling.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): lines are punctuated and, if rhyming, show a consistent pattern.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Justified choice of form. (b) e.g. two stanzas of four lines. (c) Original opening lines matching the chosen form.",
          },
        },
        {
          id: "mll1-u3-poem-forms-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'couplet' in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A pair of rhyming lines" },
              { id: "b", text: "A group of four lines" },
              { id: "c", text: "A poem without rhyme" },
              { id: "d", text: "The title of a poem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Couplet", statement: "A couplet is a pair of rhyming lines (AABB)." }],
            steps: [{ reasoning: "Criterion A (Analysing): a couplet is a rhyming pair of lines — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** A pair of rhyming lines",
          },
        },
        {
          id: "mll1-u3-poem-forms-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'stanza' in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single word" },
              { id: "b", text: "A group of lines, like a paragraph" },
              { id: "c", text: "The rhyming pattern" },
              { id: "d", text: "The poem's title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Stanza", statement: "A stanza is a group of lines in a poem." }],
            steps: [{ reasoning: "Criterion A (Analysing): a stanza is like a paragraph — a group of lines, (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A group of lines, like a paragraph",
          },
        },
        {
          id: "mll1-u3-poem-forms-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the rhyme scheme of: 'The dog ran to the park / and chased a little spark / of light across the ground / where all the flowers sound'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ABAB" },
              { id: "b", text: "AABB" },
              { id: "c", text: "AAAA" },
              { id: "d", text: "ABCABC" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Rhyme scheme", statement: "Label rhyming end-words with letters." }],
            steps: [{ reasoning: "Criterion A (Analysing): park/spark (A) and ground/sound (B) give ABAB — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** ABAB",
          },
        },
        {
          id: "mll1-u3-poem-forms-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the rhyme scheme of this poem: 'The sun went down at night / and painted all the sky. / The moon came out so bright / to watch the world say goodbye.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Rhyme scheme", statement: "Label end-words A, B, A, B..." }],
            steps: [
              { reasoning: "Criterion A (Analysing): night/bright (A) and sky/goodbye (B) give ABAB.", evidence: "night ... bright ... sky ... goodbye", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): scheme written correctly as ABAB.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "ABAB",
          },
        },
        {
          id: "mll1-u3-poem-forms-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A poet writes about a loud concert. Explain why a rhyming poem might suit this subject better than free verse.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Form matches subject", statement: "Rhythm and rhyme can match energetic subjects." }],
            steps: [
              { reasoning: "Criterion A (Analysing): rhyme and beat give energy and music — matching the loud, lively concert.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): a steady beat can echo the drums and crowd noise.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Rhyming poem's beat and energy match the lively concert better than quiet free verse.",
          },
        },
        {
          id: "mll1-u3-poem-forms-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student wants to write a poem about a quiet morning in bed. Explain why free verse might suit this better than a rhyming poem.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Form matches feeling", statement: "Free verse's natural flow suits quiet, thoughtful subjects." }],
            steps: [
              { reasoning: "Criterion A (Analysing): free verse has no fixed rhyme — it can feel like slow, natural morning thoughts.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): short, uneven lines can mimic lazy, drifting feelings without a bouncy beat.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): choosing form to match mood is a deliberate creative choice.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Free verse's natural, unforced flow matches the quiet, lazy morning better than bouncy rhyme.",
          },
        },
        {
          id: "mll1-u3-poem-forms-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'line length' do in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It decides how long the poem takes to read aloud" },
              { id: "b", text: "Short lines feel quick; long lines feel slow" },
              { id: "c", text: "It changes the poem's title" },
              { id: "d", text: "It only matters in stories" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Line length", statement: "Short lines feel quick; long lines feel slow and heavy." }],
            steps: [{ reasoning: "Criterion A (Analysing): line length affects pace and feeling — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Short lines feel quick; long lines feel slow",
          },
        },
        {
          id: "mll1-u3-poem-forms-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Poem 1: 'The rain came down in silver lines, / it tapped the roof and kissed the panes.'\n\nPoem 2: 'rain rain rain\nit won't stop\nthe puddles grow\nI don't want to go'",
          },
          stem: "Compare the two openings: which uses rhyme and which uses free verse? Explain why each form fits its style.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Poem forms", statement: "Rhyming poems have end-rhymes; free verse shapes lines by meaning." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Poem 1 rhymes ('lines/panes') — it is a rhyming poem.", evidence: "silver lines ... kissed the panes", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Poem 2 has no rhyme and short choppy lines — it is free verse.", evidence: "rain rain rain / it won't stop", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): the rhyming form suits the smooth, pretty rain image; free verse suits the grumpy, repetitive feeling.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Poem 1 is rhyming (smooth, pretty); Poem 2 is free verse (grumpy, choppy) — each form matches its feeling.",
          },
        },
        {
          id: "mll1-u3-poem-forms-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Choose a form (rhyming or free verse) for a poem about a birthday party. Explain your choice.", marks: 2 },
            { label: "b", prompt: "Plan the shape: how many stanzas and lines?", marks: 1 },
            { label: "c", prompt: "Write the first two lines of your poem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Poem planning", statement: "Choose a form that fits the mood, then plan shape." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a justified choice — rhyming for a joyful, bouncy party.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion A (Analysing): reason links form to feeling — rhyme matches celebration.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion B (Organizing): a concrete plan like 'two stanzas of four lines'.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): two original lines with imagery or feeling.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): lines punctuated; if rhyming, consistent pattern.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Rhyming poem — joyful party suits bouncy rhyme. (b) e.g. two stanzas of four lines. (c) Original opening lines.",
          },
        },
        {
          id: "mll1-u3-poem-forms-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'free verse'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A poem that must rhyme every line" },
              { id: "b", text: "A poem without fixed rhyme or rhythm" },
              { id: "c", text: "A poem only about freedom" },
              { id: "d", text: "A poem with no words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Free verse", statement: "Free verse has no fixed rhyme or rhythm." }],
            steps: [{ reasoning: "Criterion A (Analysing): free verse = no fixed rhyme or rhythm — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A poem without fixed rhyme or rhythm",
          },
        },
        {
          id: "mll1-u3-poem-forms-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the rhyme scheme of: 'The cat sat on the mat / and chased a little bat / across the garden wide / in the summer evening tide'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ABAB" },
              { id: "b", text: "AABB" },
              { id: "c", text: "AAAA" },
              { id: "d", text: "ABBA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Rhyme scheme", statement: "Label end-words A, B, A, B." }],
            steps: [{ reasoning: "Criterion A (Analysing): mat/bat (A) and wide/tide (B) give ABAB — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** ABAB",
          },
        },
        {
          id: "mll1-u3-poem-forms-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Choose a form for a poem about losing a tooth. Explain why it fits.", marks: 2 },
            { label: "b", prompt: "Decide how many stanzas and lines your poem will have.", marks: 1 },
            { label: "c", prompt: "Write the first stanza of your poem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Poem planning", statement: "Form should match the subject's feeling." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a justified choice — e.g. free verse for a funny, wobbly tooth story.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion A (Analysing): reason links form to feeling.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion B (Organizing): concrete stanza/line plan.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): an original stanza with imagery or feeling.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): lines punctuated and consistent with chosen form.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Justified form choice. (b) Concrete plan. (c) Original first stanza.",
          },
        },
      ],
    },
    {
      id: "mll1-u3-writing-poem",
      title: "Crafting the poem",
      skill: "Use imagery, rhyme and careful word choice to complete a short poem.",
      lesson: {
        sections: [
          {
            heading: "Imagery in your poem",
            body: "Use **imagery** — words for the five senses — so readers can picture your subject. 'The beach' is flat. 'The salt wind stung my cheeks and the waves dragged at my feet' is a picture.",
          },
          {
            heading: "Sound effects",
            body: "Choose words that **sound** like their meaning. 'Buzz', 'hiss', 'crash' are **sound words** (onomatopoeia). Repeating a beginning sound ('slippery, slithering snake') is **alliteration** — it makes lines musical.",
          },
          {
            heading: "Reading it aloud",
            body: "Read your poem **aloud** before you finish. Your ear catches problems your eye misses: lines that are too long, rhymes that don't quite work, words that feel clumsy. Fix what sounds wrong.",
          },
        ],
        keyFormulas: [
          { name: "Poem checklist", statement: "Imagery + sound words + read aloud + consistent form." },
        ],
        workedExample: {
          problem: "Improve: 'The rain was heavy.'",
          solution: "Add imagery and sound: 'The rain drummed on the roof / and spilled silver down the glass.'",
        },
      },
      questions: [
        {
          id: "mll1-u3-writing-poem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a sound word (onomatopoeia)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whisper" },
              { id: "b", text: "Buzz" },
              { id: "c", text: "Beautiful" },
              { id: "d", text: "Silent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Onomatopoeia", statement: "Sound words imitate the noise they name." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'buzz' sounds like the noise it describes — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Buzz",
          },
        },
        {
          id: "mll1-u3-writing-poem-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write two lines about rain that use imagery for sound and sight.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery", statement: "Poems should appeal to the senses, not just describe facts." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): an original line with sound imagery, e.g. 'The rain drummed on the window'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): an original line with sight imagery, e.g. 'silver drops raced down the glass'.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'The rain drummed on the window,\nsilver drops raced down the glass.'",
          },
        },
        {
          id: "mll1-u3-writing-poem-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "My Poem Draft",
            author: "Written for Akademik Space",
            text: "The wind is strong\nIt blows the trees\nAnd makes a song\nThat carries over seas.",
          },
          stem: "This is a student's poem draft about wind. Suggest two specific improvements that would make it more vivid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Revision", statement: "Specific, sensory words replace general statements." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): 'The wind is strong' could become 'The wind shoved the trees' or 'The gale screamed' — stronger, more active words.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): add imagery — e.g. leaves flying, dust devils, the sound of the wind — instead of just saying it 'makes a song'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): fix 'carries over seas' — needs 'the seas' or 'over the sea' for grammar.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Use stronger verbs ('shoved', 'screamed'), add sensory imagery, and fix 'over seas' to 'over the seas'.",
          },
        },
        {
          id: "mll1-u3-writing-poem-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a two-line rhyming couplet about your school.", marks: 2 },
            { label: "b", prompt: "Explain how your couplet uses imagery or sound.", marks: 1 },
            { label: "c", prompt: "Read your couplet aloud and describe one thing you would check when revising it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Couplet craft", statement: "A couplet is a rhyming pair of lines; imagery and sound give it life." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an original rhyming couplet about school, e.g. 'Books and desks in every row,\nwhere bright young minds come here to grow.'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): the two lines rhyme and are punctuated correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): identifies imagery or sound in their own lines, e.g. 'bright' for sight or the rhyme itself for sound.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion D (Using language): reading aloud check — do the rhymes land, do the lines scan evenly?", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): revision point — swap a weak word for a stronger one or fix punctuation.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Original rhyming couplet. (b) Imagery/sound identified. (c) Read aloud for rhyme and rhythm; revise weak words.",
          },
        },
        {
          id: "mll1-u3-writing-poem-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'alliteration' in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating the same end sound" },
              { id: "b", text: "Repeating the same beginning sound" },
              { id: "c", text: "Writing without rhyme" },
              { id: "d", text: "Using only long lines" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Alliteration", statement: "Alliteration repeats beginning sounds ('slippery, slithering')." }],
            steps: [{ reasoning: "Criterion A (Analysing): alliteration repeats beginning sounds — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Repeating the same beginning sound",
          },
        },
        {
          id: "mll1-u3-writing-poem-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a SOUND WORD (onomatopoeia)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crackle" },
              { id: "b", text: "Beautiful" },
              { id: "c", text: "Slowly" },
              { id: "d", text: "Green" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Onomatopoeia", statement: "Sound words imitate the noise they name." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'crackle' sounds like the noise it describes — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Crackle",
          },
        },
        {
          id: "mll1-u3-writing-poem-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which line uses IMAGERY for touch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bell rang across the valley" },
              { id: "b", text: "The sand was hot between our toes" },
              { id: "c", text: "The kite flew high in the sky" },
              { id: "d", text: "The soup smelled of herbs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Touch imagery describes feelings on the skin." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'hot between our toes' is a feeling on the skin — touch, (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The sand was hot between our toes",
          },
        },
        {
          id: "mll1-u3-writing-poem-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write two lines about the wind that use a sound word and an image.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery and sound words", statement: "Poems should appeal to the senses." }],
            steps: [
              { reasoning: "Criterion C (Producing text): an original line with a sound word, e.g. 'The wind whispered through the trees'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): an original line with imagery, e.g. 'leaves like coins scattered on the ground'.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'The wind whispered through the trees,\nleaves like coins scattered on the ground.'",
          },
        },
        {
          id: "mll1-u3-writing-poem-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite 'The rain was heavy' as a more vivid line using imagery or a sound word.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Specific, sensory words replace flat statements." }],
            steps: [
              { reasoning: "Criterion C (Producing text): an example such as 'The rain drummed on the roof' — 'drummed' is a sound word.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): correct punctuation; the line shows rather than tells.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'The rain drummed on the roof.'",
          },
        },
        {
          id: "mll1-u3-writing-poem-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "My Poem",
            author: "Written for Akademik Space",
            text: "The dog is big\nIt runs fast\nIt likes to play\nEvery single day.",
          },
          stem: "This is a student's poem about a dog. Suggest two specific improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision", statement: "Specific, sensory words replace general statements." }],
            steps: [
              { reasoning: "Criterion C (Producing text): 'The dog is big' could become 'The dog is bigger than me' or 'a shaggy giant of a dog' — more specific.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): add imagery or sound — 'Its paws pound the garden path' instead of 'It runs fast'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): 'every single day' is clumsy — 'all day long' flows better.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Make 'big' specific, add imagery/sound, and smooth out 'every single day'.",
          },
        },
        {
          id: "mll1-u3-writing-poem-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should you read your poem ALOUD before finishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check rhyme and rhythm sound right" },
              { id: "b", text: "To make it longer" },
              { id: "c", text: "To change the subject" },
              { id: "d", text: "To count the words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Reading aloud", statement: "The ear catches rhythm and rhyme problems." }],
            steps: [{ reasoning: "Criterion D (Using language): reading aloud checks whether the poem sounds right — (a).", marks: 1, markCode: "D" }],
            finalAnswer: "**(a)** To check rhyme and rhythm sound right",
          },
        },
        {
          id: "mll1-u3-writing-poem-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how these two lines work together: 'The waves came crashing on the shore / and dragged the sand back with a roar.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sound and imagery", statement: "Sound words and images create a vivid scene." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'crashing' and 'roar' are sound words — they make you hear the waves.", evidence: "crashing ... roar", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'dragged the sand back' is imagery — you picture the waves pulling sand into the sea.", evidence: "dragged the sand back", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): together they make the sea feel powerful and alive.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Sound words ('crashing', 'roar') and imagery ('dragged the sand') make the sea feel powerful and alive.",
          },
        },
        {
          id: "mll1-u3-writing-poem-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a two-line rhyming couplet about your favourite food.", marks: 2 },
            { label: "b", prompt: "Explain how your couplet uses imagery or a sound word.", marks: 1 },
            { label: "c", prompt: "Describe one thing you would check when revising it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Couplet craft", statement: "A couplet rhymes; imagery and sound give it life." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an original rhyming couplet about food.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): the lines rhyme and are punctuated correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): identifies imagery or sound in their lines.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion D (Using language): check — do the rhymes land, do lines scan evenly when read aloud?", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): revision point — swap a weak word for a stronger one.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Original rhyming couplet. (b) Imagery/sound identified. (c) Read aloud for rhyme; revise weak words.",
          },
        },
        {
          id: "mll1-u3-writing-poem-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'imagery' in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words that appeal to the five senses and paint pictures" },
              { id: "b", text: "The rhyming pattern" },
              { id: "c", text: "The poem's title" },
              { id: "d", text: "A group of lines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Imagery is words that appeal to the senses." }],
            steps: [{ reasoning: "Criterion A (Analysing): imagery = sensory words that paint pictures — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Words that appeal to the five senses and paint pictures",
          },
        },
        {
          id: "mll1-u3-writing-poem-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which line about snow uses a SOUND WORD (onomatopoeia)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The snow is white and cold" },
              { id: "b", text: "Snowflakes fell like feathers" },
              { id: "c", text: "The snow whispered down all night" },
              { id: "d", text: "The ground was covered in snow" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Sound words", statement: "Sound words imitate noises — 'whispered' imitates soft snow." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'whispered' is a sound word that imitates soft falling snow — (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** The snow whispered down all night",
          },
        },
        {
          id: "mll1-u3-writing-poem-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a four-line poem (a quatrain) about your school, using rhyme or free verse.", marks: 3 },
            { label: "b", prompt: "Explain how your poem uses imagery or sound.", marks: 1 },
            { label: "c", prompt: "Describe what you checked when reading it aloud.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Poem craft", statement: "Imagery, sound and consistent form make a poem work." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an original four-line poem about school.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion C (Producing text): it uses imagery, feeling or a consistent form.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): lines punctuated; rhymes consistent if used.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): identifies imagery or sound in the poem.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion D (Using language): checked rhyme/beat and fixed what sounded wrong.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Original quatrain. (b) Imagery/sound explained. (c) Read aloud — checked rhyme and rhythm.",
          },
        },
      ],
    },
  ],
};
