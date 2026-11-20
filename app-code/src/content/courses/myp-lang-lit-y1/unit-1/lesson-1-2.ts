import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mll1-u1-lesson-1-2",
  code: "1-2",
  title: "Poems: Word Pictures",
  goal: "I CAN read a short poem, spot rhyming words, and describe the pictures the words make in my mind.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Poem", definition: "A text written in lines and stanzas, often with rhythm and rhyme, that paints pictures with words." },
    { term: "Stanza", definition: "A group of lines in a poem, like a paragraph in a story." },
    { term: "Rhyme", definition: "Words that end with the same sound, like 'cat' and 'hat'." },
    { term: "Imagery", definition: "Words that help you see, hear, smell, taste or feel something in your mind." },
    { term: "Line", definition: "One row of words in a poem." },
  ],
  concepts: [
    {
      id: "mll1-u1-rhyme-rhythm",
      title: "Rhyme and rhythm in poems",
      skill: "Find rhyming words and notice the beat of a poem.",
      lesson: {
        sections: [
          {
            heading: "Rhyme",
            body: "**Rhyme** is when two or more words end with the same sound. In the poem below, 'light' rhymes with 'night' and 'bright'. Rhyme makes poems fun to say and helps you remember them.",
          },
          {
            heading: "Rhythm and beat",
            body: "Poems often have a **beat** — a steady rhythm you can clap or tap along to. Read the poem aloud and listen: some lines are long, some short. The beat gives the poem energy and music.",
          },
          {
            heading: "Reading a poem",
            body: "When you read a poem, read it **slowly** and **aloud**. Notice the rhymes, tap the beat, and picture what the words describe. A poem is not just words — it is a small world you step into.",
          },
        ],
        keyFormulas: [
          { name: "Rhyme check", statement: "Do the end words sound the same? Then they rhyme." },
        ],
        workedExample: {
          problem: "Read: 'The moon is bright / above the hill tonight.' Which words rhyme?",
          solution: "'bright' and 'tonight' rhyme — they both end with the 'ite' sound. 'hill' does not rhyme with either.",
        },
      },
      questions: [
        {
          id: "mll1-u1-rhyme-rhythm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of words rhymes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cat — dog" },
              { id: "b", text: "sun — run" },
              { id: "c", text: "tree — book" },
              { id: "d", text: "blue — red" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhyme", statement: "Words rhyme when they end with the same sound." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'sun' and 'run' both end with the 'un' sound, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** sun — run",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Evening Rain",
            author: "Written for Akademik Space",
            text: "The rain taps softly on the roof,\na lullaby for houses asleep.\nIt drums on windows, cool and aloof,\nwhile little streams run down the street.",
          },
          stem: "Write down two pairs of rhyming words from the poem, and say what the 'beat' of the lines is like (steady, fast or slow).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhyme and rhythm", statement: "Rhyme pairs end-sounds; rhythm is the pattern of stressed and unstressed syllables." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): rhyming pairs are 'roof'/'aloof' and 'asleep'/'street' — accept 'roof — aloof', 'asleep — street'.", evidence: "roof ... aloof ... asleep ... street", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the lines have a steady, gentle beat — the description 'softly', 'lullaby' and 'cool' suggest a slow, calm rhythm.", evidence: "The rain taps softly on the roof", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rhymes: roof/aloof and asleep/street. The beat is slow and steady.",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Old Mill",
            author: "Written for Akademik Space",
            text: "The wheel turns slowly, round and round,\nwhere wheat once danced and water found\na voice like thunder in the race,\nbut now the mill stands in its place.",
          },
          stem: "This poem has a steady beat. Explain how two sound words ('turns', 'round', 'thunder', 'race') help you hear the poem, and what the poem tells you about the mill.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound and meaning", statement: "Onomatopoeia and repeated sounds make a poem's sound match its meaning." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'turns' and 'round' repeat the 'r' sound, echoing the spinning wheel.", evidence: "turns slowly, round and round", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'thunder' is a loud sound word that matches the powerful voice of the water.", evidence: "a voice like thunder", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the poem tells us the mill is now silent and still — it 'stands in its place', no longer working.", evidence: "the mill stands in its place", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The repeated 'r' and 'thunder' make the poem sound like the wheel and water; the mill is now quiet and unused.",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this poem.",
          extract: {
            title: "The Kite",
            author: "Written for Akademik Space",
            text: "The wind takes hold of string and sail,\nand climbs as if it had no fear.\nIt pulls the kite beyond the pale\nof rooftops, high above the sphere\nof everyday and everywhere.",
          },
          parts: [
            { label: "a", prompt: "Write down the rhyming pairs in the poem.", marks: 1 },
            { label: "b", prompt: "Describe the beat of the poem (steady, quick or slow) and explain how you know.", marks: 2 },
            { label: "c", prompt: "Explain what the last line means — what is 'everyday and everywhere'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poetic sound", statement: "Rhyme scheme, rhythm and line length are part of a poem's meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): rhyming pairs are sail/pale and fear/sphere/everywhere — accept 'sail — pale', 'fear — sphere' (and 'sphere — everywhere').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the beat is steady — the lines are similar length and the rhymes fall at regular intervals.", evidence: "sail ... pale ... fear ... sphere", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the regular rhythm matches the steady climb of the kite.", evidence: "It pulls the kite beyond the pale", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'everyday and everywhere' means ordinary life and the whole world — the kite rises above all of it.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it shows the kite's freedom and height compared to normal life below.", evidence: "high above the sphere of everyday and everywhere", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sail/pale, fear/sphere. (b) Steady beat matching the kite's climb. (c) The kite soars above ordinary life and the whole world.",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of words rhymes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "day — night" },
              { id: "b", text: "sky — fly" },
              { id: "c", text: "moon — sun" },
              { id: "d", text: "cloud — rain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Rhyme", statement: "Words rhyme when their end sounds match." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'sky' and 'fly' both end with the 'eye' sound — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** sky — fly",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'beat' of a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rhyming words at the end of lines" },
              { id: "b", text: "The steady rhythm you can tap or clap along to" },
              { id: "c", text: "The number of stanzas in a poem" },
              { id: "d", text: "The title of the poem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhythm", statement: "The beat is the poem's steady pattern of stressed and unstressed sounds." }],
            steps: [{ reasoning: "Criterion A (Analysing): the beat is the rhythm you tap along to — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The steady rhythm you can tap or clap along to",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'The bell rang loud and clear / announcing that the day is here.' Which two words rhyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "bell — rang" },
              { id: "b", text: "clear — here" },
              { id: "c", text: "rang — day" },
              { id: "d", text: "loud — clear" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Rhyme", statement: "Rhymes are usually at the ends of lines and share end sounds." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'clear' and 'here' end with the same sound — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** clear — here",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Stream",
            author: "Written for Akademik Space",
            text: "The stream goes chuckle-chuckle\nover stones both wet and small.\nIt carries leaves away from trees\nand sings a tune for all.",
          },
          stem: "Write down two pairs of rhyming words and say whether the poem's beat feels steady or bouncy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhyme and rhythm", statement: "Rhyming pairs share end sounds; rhythm is the pattern of beats." }],
            steps: [
              { reasoning: "Criterion A (Analysing): rhyming pairs are 'small/all' and possibly 'trees' — 'trees' does not rhyme; accept 'small — all'.", evidence: "small ... all", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'chuckle-chuckle' and short lines give a bouncy, playful beat.", evidence: "chuckle-chuckle", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rhymes: small/all. The beat is bouncy and playful.",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read this poem aloud in your head: 'Slowly, slowly, the snail went by / leaving a silver trail across the sky.' Is the rhythm slow or fast? Explain using the words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhythm and meaning", statement: "The beat of a poem often matches what it describes." }],
            steps: [
              { reasoning: "Criterion A (Analysing): the rhythm is slow — 'slowly, slowly' repeats and drags the pace.", evidence: "Slowly, slowly, the snail went by", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the slow beat matches the subject — a snail really is slow, so sound and meaning work together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slow — 'slowly, slowly' stretches the beat like a snail's pace.",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Drum",
            author: "Written for Akademik Space",
            text: "Boom, boom, boom goes the drum\nat the edge of the square.\nFeet go stamp and hands go clap\nwhile the dancers gather there.",
          },
          stem: "Explain how the poem's sounds match its meaning. Refer to at least two sound choices.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sound and meaning", statement: "Onomatopoeia and repeated sounds make the poem sound like what it describes." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Boom, boom, boom' is a sound word that imitates the drum itself.", evidence: "Boom, boom, boom goes the drum", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'stamp' and 'clap' are also sound words describing what the dancers do.", evidence: "Feet go stamp and hands go clap", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the repeating 'b' sounds in 'boom', 'drum' and 'square' area make the lines bouncy like the music.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Boom' imitates the drum; 'stamp' and 'clap' imitate the dancers — the poem sounds like the event it describes.",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do poets read their poems aloud while writing them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check the rhyme and beat sound right" },
              { id: "b", text: "To make the poem longer" },
              { id: "c", text: "To change the title" },
              { id: "d", text: "To count the stanzas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Reading aloud", statement: "The ear catches rhythm and rhyme problems the eye misses." }],
            steps: [{ reasoning: "Criterion A (Analysing): reading aloud checks whether rhymes and beats sound good — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** To check the rhyme and beat sound right",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Midnight Train",
            author: "Written for Akademik Space",
            text: "Clickety-clack, clickety-clack\ngoes the wheels along the track.\nThrough the dark the engine roars\nand carries dreams from shore to shore.",
          },
          stem: "Explain how the poem creates the feeling of a moving train through sound and rhythm.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sound imitation", statement: "Repeating sounds can imitate the noise and rhythm of a thing." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'clickety-clack' imitates the sound of wheels on a track.", evidence: "Clickety-clack, clickety-clack", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the repeated two-beat pattern 'clickety-clack' gives a steady chugging rhythm like a train.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'roars' is a loud sound word matching the engine's noise.", evidence: "the engine roars", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Clickety-clack' imitates the wheels, the steady two-beat rhythm chugs like a train, and 'roars' matches the engine.",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this poem.",
          extract: {
            title: "The Strong Wind",
            author: "Written for Akademik Space",
            text: "The wind came rushing through the gate,\nthe trees bowed low in quicktime wait.\nLeaves danced a silver, spinning round,\nand covered all the garden ground.",
          },
          parts: [
            { label: "a", prompt: "Write down the rhyme scheme using letters (e.g. ABAB).", marks: 2 },
            { label: "b", prompt: "Describe the beat of the poem and the feeling it creates.", marks: 1 },
            { label: "c", prompt: "Explain what the words 'bowed low' and 'spinning round' make you picture.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhyme scheme and imagery", statement: "The pattern of rhymes (AABB, ABAB) and the pictures words make both shape a poem." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'gate' rhymes with 'wait' (A) and 'round' rhymes with 'ground' (B), so the scheme is ABAB.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): the scheme is labelled correctly as ABAB, one letter per line.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the beat is steady and quick, matching the rushing wind; it creates an energetic, slightly wild feeling.", evidence: "came rushing through the gate", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'bowed low' pictures trees bending under the wind's force.", evidence: "the trees bowed low", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'spinning round' pictures leaves whirling in circles through the air.", evidence: "Leaves danced a silver, spinning round", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ABAB. (b) Quick steady beat, energetic and wild. (c) Trees bending and leaves whirling in the wind.",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word completes the rhyme in 'The cat sat on the ___'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "dog" },
              { id: "b", text: "mat" },
              { id: "c", text: "tree" },
              { id: "d", text: "sun" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Rhyme", statement: "A rhyming word ends with the same sound." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'cat' rhymes with 'mat' — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** mat",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of lines rhymes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The waves roll on the sand / where seagulls wheel across the land" },
              { id: "b", text: "The waves roll on the sand / where seagulls wheel across the blue" },
              { id: "c", text: "The waves roll on the shore / the boats are sailing out once more" },
              { id: "d", text: "The sea is calm and wide / the boats go out with the evening tide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhyming lines", statement: "The last words of rhyming lines share an end sound." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'sand' and 'land' rhyme in (a) — the other pairs do not.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** The waves roll on the sand / where seagulls wheel across the land",
          },
        },
        {
          id: "mll1-u1-rhyme-rhythm-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this poem.",
          extract: {
            title: "The Night Watch",
            author: "Written for Akademik Space",
            text: "The night is dark and deep and still,\nthe stars are out on window-sill.\nThe owl sits on her branch so high\nand watches all the world go by.",
          },
          parts: [
            { label: "a", prompt: "Write down the rhyming pairs.", marks: 1 },
            { label: "b", prompt: "Describe the mood created by the rhythm and the repeated sounds.", marks: 2 },
            { label: "c", prompt: "Explain what the image 'the stars are out on window-sill' makes you picture.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhyme and mood", statement: "Rhyming pairs and a steady rhythm create a calm, hushed feeling in this poem." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): rhyming pairs are 'still/sill' and 'high/by'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the steady, even beat and soft rhymes create a calm, quiet, watchful mood — like night itself.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): repeated 's' sounds ('stars', 'sits', 'sill', 'watches') add a hushed, whispery quality.", evidence: "the stars are out on window-sill ... The owl sits", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it pictures the stars as if they were placed on a windowsill — a small, neat row of lights in the dark.", evidence: "the stars are out on window-sill", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the image makes the night sky feel close and domestic, as if the house is looking out at it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) still/sill, high/by. (b) Calm, hushed, watchful — steady beat and soft 's' sounds. (c) Stars pictured as a neat row on a windowsill, making night feel close.",
          },
        },
      ],
    },
    {
      id: "mll1-u1-word-pictures",
      title: "Word pictures: imagery",
      skill: "Spot words that make pictures in your mind and say which sense they use.",
      lesson: {
        sections: [
          {
            heading: "What is imagery?",
            body: "**Imagery** is words that make a picture in your mind. It helps you **see**, **hear**, **smell**, **taste** or **feel** what the writer describes. Good writers use imagery so you can almost touch the story.",
          },
          {
            heading: "The five senses",
            body: "Ask: which sense does this line use?\n- **Sight**: 'the red kite danced against the grey sky'\n- **Sound**: 'the bell rang out across the valley'\n- **Smell**: 'the bread smelled warm and sweet'\n- **Touch**: 'the snow crunched under our boots'\n- **Taste**: 'the lemonade was sharp and cold'",
          },
          {
            heading: "Why writers use imagery",
            body: "Imagery makes poems and stories come alive. 'The ice was cold' tells you a fact. 'The ice bit my fingers like tiny teeth' makes you **feel** it. The best writers choose words that wake up your senses.",
          },
        ],
        keyFormulas: [
          { name: "Sense check", statement: "Ask which sense the words wake up: sight, sound, smell, touch or taste." },
        ],
        workedExample: {
          problem: "Read: 'A sharp smell of rain drifted through the window.' Which sense does this use?",
          solution: "It uses smell — 'a sharp smell of rain' describes something you can smell before you see it.",
        },
      },
      questions: [
        {
          id: "mll1-u1-word-pictures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense does 'the soup was warm and tasty' use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Sound" },
              { id: "c", text: "Taste (and touch)" },
              { id: "d", text: "Smell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery", statement: "Imagery uses words that appeal to the five senses." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'tasty' and 'warm' appeal to taste and touch, so (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Taste (and touch)",
          },
        },
        {
          id: "mll1-u1-word-pictures-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Morning",
            author: "Written for Akademik Space",
            text: "Birdsong spilled through the open window,\nand the smell of toast drifted in.\nSunlight lay warm across the floor\nlike a cat asleep on the skin.",
          },
          stem: "Write down one line that uses sound imagery and one line that uses smell imagery. Then name the sense used in 'like a cat asleep on the skin'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery types", statement: "Different lines appeal to different senses: hearing, smell, sight, touch." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): sound imagery is 'Birdsong spilled through the open window' — birdsong is a sound.", evidence: "Birdsong spilled through the open window", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): smell imagery is 'the smell of toast drifted in'; 'Sunlight lay warm across the floor' uses touch (warmth).", evidence: "the smell of toast drifted in", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sound: 'Birdsong spilled...'. Smell: 'the smell of toast...'. The last line uses touch/sight (warmth, sunlight like a cat).",
          },
        },
        {
          id: "mll1-u1-word-pictures-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Winter Street",
            author: "Written for Akademik Space",
            text: "The street was white and silent,\nfrozen breath hanging in the air.\nBoots crunched on the icy ground\nas streetlights made diamonds of the snow.",
          },
          stem: "The poem uses several senses. Identify which sense each of these uses and explain how they work together to make the winter scene feel real.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Multi-sensory imagery", statement: "Combining sight, sound and touch imagery makes a scene vivid and believable." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): sight — 'white and silent', 'streetlights made diamonds of the snow'.", evidence: "streetlights made diamonds of the snow", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): sound — 'silent', 'boots crunched' (the crunch is a sound in the silence).", evidence: "Boots crunched on the icy ground", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): touch — 'frozen breath hanging in the air', 'icy ground' — the cold is felt.", evidence: "frozen breath hanging in the air", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sight (white street, diamond snow), sound (silence, crunching boots), touch (frozen breath, icy ground) — together they make winter feel real.",
            commonErrors: ["Listing senses without linking them to the lines."],
          },
        },
        {
          id: "mll1-u1-word-pictures-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this poem.",
          extract: {
            title: "The Bakery",
            author: "Written for Akademik Space",
            text: "The bakery door swings open wide,\nand warmth rolls out like a wave.\nFlour dust hangs in the golden light,\nwhile trays of bread begin to rave\nof crust and crumb and morning bake.",
          },
          parts: [
            { label: "a", prompt: "Name two different senses the poem uses and give a line for each.", marks: 2 },
            { label: "b", prompt: "What does 'warmth rolls out like a wave' make you picture?", marks: 1 },
            { label: "c", prompt: "The poet says the bread 'begin[s] to rave'. Explain why this is a strange but effective image.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery and personification", statement: "Imagery appeals to the senses; giving objects human actions (personification) makes them lively." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): touch/warmth — 'warmth rolls out like a wave' or 'golden light' for sight; smell could be argued from 'bread' and 'bake'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): a second sense with a supporting line, e.g. sight — 'Flour dust hangs in the golden light'.", evidence: "Flour dust hangs in the golden light", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): you picture warm air rolling out of the door like a wave of heat as people step inside.", evidence: "warmth rolls out like a wave", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): bread cannot really rave — it is a personification that makes the bread seem alive and excited.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it matches the busy, happy morning atmosphere of the bakery.", evidence: "trays of bread begin to rave", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Warmth/touch ('warmth rolls out') and sight ('golden light', 'flour dust') — accept smell too. (b) Warm air rolling out of the bakery door. (c) Personification makes the bread seem alive and excited, matching the busy morning.",
          },
        },
        {
          id: "mll1-u1-word-pictures-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense does 'the thunder cracked overhead' use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Sound" },
              { id: "c", text: "Smell" },
              { id: "d", text: "Taste" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Imagery appeals to the five senses." }],
            steps: [{ reasoning: "Criterion A (Analysing): thunder is heard — this is sound imagery, (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Sound",
          },
        },
        {
          id: "mll1-u1-word-pictures-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense does 'the soup smelled of herbs and garlic' use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Touch" },
              { id: "c", text: "Smell" },
              { id: "d", text: "Sound" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Smell imagery describes things you can smell." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'smelled of herbs and garlic' is smell imagery — (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Smell",
          },
        },
        {
          id: "mll1-u1-word-pictures-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'The cold wind bit our cheeks.' Which sense does this line use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Touch" },
              { id: "b", text: "Sight" },
              { id: "c", text: "Taste" },
              { id: "d", text: "Sound" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery types", statement: "'Cold wind bit our cheeks' describes a feeling on the skin — touch." }],
            steps: [{ reasoning: "Criterion A (Analysing): feeling cold on the cheeks is touch imagery — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Touch",
          },
        },
        {
          id: "mll1-u1-word-pictures-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Orchard",
            author: "Written for Akademik Space",
            text: "We picked apples in the orchard,\nthe grass cool under bare feet.\nA woodpecker hammered somewhere high,\nwhile bees hummed among the clover.",
          },
          stem: "Write down one line that uses touch imagery and one that uses sound imagery.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery types", statement: "Touch imagery describes feelings on the skin; sound imagery describes noises." }],
            steps: [
              { reasoning: "Criterion A (Analysing): touch imagery is 'the grass cool under bare feet' — the feeling of grass on feet.", evidence: "the grass cool under bare feet", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): sound imagery is 'A woodpecker hammered' or 'bees hummed' — both are sounds.", evidence: "A woodpecker hammered ... bees hummed", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Touch: 'the grass cool under bare feet'. Sound: 'A woodpecker hammered' / 'bees hummed'.",
          },
        },
        {
          id: "mll1-u1-word-pictures-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why 'The ice was cold' is less powerful than 'The ice bit my fingers like tiny teeth'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Imagery makes readers feel what a plain fact only states." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'The ice was cold' only states a fact — it gives information but no picture or feeling.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'bit my fingers like tiny teeth' uses touch imagery and a comparison, so the reader feels the sharp cold.", evidence: "bit my fingers like tiny teeth", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The fact states cold; the image makes you feel it — imagery wakes the senses.",
          },
        },
        {
          id: "mll1-u1-word-pictures-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Campfire",
            author: "Written for Akademik Space",
            text: "The fire crackled and spat,\nsending sparks up to the stars.\nWe roasted marshmallows golden brown\nwhile the night wind hummed through the pines.",
          },
          stem: "Identify the senses used in this poem and explain how they work together.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-sensory imagery", statement: "Several senses together make a scene feel complete and real." }],
            steps: [
              { reasoning: "Criterion A (Analysing): sound — 'crackled and spat', 'hummed' (fire and wind sounds).", evidence: "crackled and spat ... hummed", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): sight — 'sparks up to the stars', 'golden brown' marshmallows.", evidence: "sparks up to the stars ... golden brown", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): together they create a complete campfire night — you hear it, see it and feel the warmth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sound (crackle, hum), sight (sparks, golden marshmallows), and implied warmth/taste — together they make a vivid campfire scene.",
          },
        },
        {
          id: "mll1-u1-word-pictures-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which line uses SIGHT imagery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The soup steamed on the table" },
              { id: "b", text: "The bell rang across the valley" },
              { id: "c", text: "The red kite danced against the grey sky" },
              { id: "d", text: "The lemonade was sharp and cold" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery types", statement: "Sight imagery describes things you can see." }],
            steps: [{ reasoning: "Criterion A (Analysing): the kite and sky are things you see — (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** The red kite danced against the grey sky",
          },
        },
        {
          id: "mll1-u1-word-pictures-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Greenhouse",
            author: "Written for Akademik Space",
            text: "Inside the greenhouse the air was thick and sweet.\nTomatoes hung like lanterns in the green,\nwhile water dripped from leaf to leaf\nand shadows trembled on the floor.",
          },
          stem: "Explain how the writer uses two different senses to make the greenhouse feel real.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Different senses create different parts of a scene." }],
            steps: [
              { reasoning: "Criterion A (Analysing): smell/touch — 'the air was thick and sweet' describes the heavy, sweet smell of plants.", evidence: "the air was thick and sweet", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): sight — 'tomatoes hung like lanterns', 'shadows trembled' paint pictures of colour and light.", evidence: "Tomatoes hung like lanterns in the green", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'water dripped' adds sound, so smell, sight and sound together build the humid greenhouse.", evidence: "water dripped from leaf to leaf", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Smell/touch ('thick and sweet' air), sight ('lanterns', 'shadows') and sound ('dripped') together make the greenhouse vivid.",
          },
        },
        {
          id: "mll1-u1-word-pictures-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this poem.",
          extract: {
            title: "The Beach",
            author: "Written for Akademik Space",
            text: "Salt spray stung our lips\nas the tide dragged at our feet.\nGulls cried overhead in circles\nand the sun burned gold and sweet.",
          },
          parts: [
            { label: "a", prompt: "Name two senses the poem uses and give a line for each.", marks: 2 },
            { label: "b", prompt: "What does 'the sun burned gold and sweet' picture?", marks: 1 },
            { label: "c", prompt: "Explain how the poem makes the beach feel hot and busy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Touch, sound and sight imagery combine to create a full scene." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): touch — 'Salt spray stung our lips' or 'the tide dragged at our feet'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): sound — 'Gulls cried overhead'; sight — 'the sun burned gold'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): it pictures a blazing golden sun that feels warm and wonderful — 'sweet' adds pleasure to the heat.", evidence: "the sun burned gold and sweet", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'stung' and 'burned' give heat and pain-pleasure; 'dragged' gives movement; 'gulls cried' adds life and noise — together they make a hot, lively beach.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the mix of senses (touch, sound, sight) means you experience the beach with your whole body, not just see it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Touch ('stung our lips') and sound ('gulls cried'). (b) A blazing warm golden sun that feels pleasant. (c) Heat, motion and noise imagery make the beach feel hot and busy.",
          },
        },
        {
          id: "mll1-u1-word-pictures-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense does 'the flowers smelled sweet' use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Smell" },
              { id: "c", text: "Sound" },
              { id: "d", text: "Taste" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery", statement: "Imagery appeals to the five senses." }],
            steps: [{ reasoning: "Criterion A (Analysing): smelling flowers is smell imagery — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Smell",
          },
        },
        {
          id: "mll1-u1-word-pictures-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which line from 'Grandma's Kitchen' uses SIGHT imagery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The kitchen smelled of cinnamon and fresh bread" },
              { id: "b", text: "Steam curled from the pot on the stove" },
              { id: "c", text: "rain tapped softly at the window" },
              { id: "d", text: "like fingers asking to come in" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery types", statement: "Sight imagery describes things you can see." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'Steam curled from the pot' is something you see — (b). 'Smelled' is smell; 'tapped' is sound.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Steam curled from the pot on the stove",
          },
        },
        {
          id: "mll1-u1-word-pictures-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this poem.",
          extract: {
            title: "The Snow Day",
            author: "Written for Akademik Space",
            text: "The snow came down so soft and slow\nit piled on fences, roofs and boughs.\nThe world went quiet, white and new —\nexcept the crunch beneath our boots.",
          },
          parts: [
            { label: "a", prompt: "Name two senses used and give a line for each.", marks: 2 },
            { label: "b", prompt: "What does 'the world went quiet, white and new' make you feel?", marks: 1 },
            { label: "c", prompt: "Explain why 'the crunch beneath our boots' is an important image at the end.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imagery and contrast", statement: "A single sound image can break the quiet mood of a poem." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): sight — 'piled on fences, roofs and boughs' or 'white and new'; touch/sound — 'soft and slow' snow or 'crunch beneath our boots'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): a second sense with its line, e.g. sound — 'the crunch beneath our boots'.", evidence: "the crunch beneath our boots", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): it feels hushed, fresh and magical — a clean, silent world after snow.", evidence: "quiet, white and new", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): after all the silence, the crunch is the only sound — it reminds us people are walking in the snow, breaking the hush.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it gives the quiet scene a human touch — we are part of the snowy world, not just watching it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sight ('white and new') and sound ('crunch beneath our boots'). (b) Hushed, fresh, magical. (c) The crunch breaks the silence and puts people in the scene.",
          },
        },
      ],
    },
  ],
};
