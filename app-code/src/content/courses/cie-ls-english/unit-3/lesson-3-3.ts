import type { Lesson } from "../../../types.ts";

const poemExtract = {
  title: "The Empty Playground",
  author: "Written for Akademik Space",
  source: "Original poem",
  text: "The swings hang still in the afternoon\n  like something somebody forgot to finish.\nA ball lies where the goal posts used to argue\n  with the wind about which way was up.\n\nThe whistle that called us out has gone quiet\n  into the pocket of a teacher's coat\nthat smells of chalk and colder weather.\nWe are smaller now than the footprints\n  we left in the wet sand of the field,\nand the field itself is learning to be a field again —\n  unremarkable, unruled, almost shy.",
};

const storyExtract = {
  title: "The Last Ferry",
  author: "Written for Akademik Space",
  source: "Original story",
  text: "The last ferry of the season pulled away from the harbour at dusk, carrying three passengers and a bicycle.\n\nMarisol sat at the front, watching the lights of the town shrink behind her. She had lived on the island for sixty-one years and was leaving it forever — not because she wanted to, but because the house had become too large for one person and the stairs had become too steep for her knees.\n\nBehind her, a young man slept against the rail, his bicycle lashed beside him. He had come for the summer and was now going home to a city Marisol could not imagine. They had spoken only twice. Once about the weather, once about his bicycle's broken bell.\n\nWhen the ferry reached the mainland, Marisol stepped onto the dock and looked back. The island was already dark. She realised she was not sad exactly — she was something more complicated: grateful, perhaps, or merely finished. The bicycle boy woke, adjusted his pack, and walked toward the train station without looking back. Marisol followed him at a distance, carrying a bag that felt heavier than it should.",
};

export const lesson33: Lesson = {
  id: "cile-u3-lesson-3-3",
  code: "3-3",
  title: "Poetry and prose analysis",
  goal: "I CAN analyse how poets and prose writers use form, structure, imagery and voice to create meaning.",
  standards: ["0861 Reading: poetry and literary prose"],
  vocabulary: [
    { term: "Stanza", definition: "A group of lines in a poem, like a paragraph in prose." },
    { term: "Volta", definition: "A turn or shift in a poem's argument or mood, often at the start of the final stanza." },
    { term: "Enjambment", definition: "Running a sentence over a line break without punctuation — creates flow or tension." },
    { term: "Voice", definition: "The distinctive tone and perspective of a narrator or speaker." },
    { term: "Symbol", definition: "An object, image or action that stands for something beyond itself." },
    { term: "Free verse", definition: "Poetry without regular rhyme or metre." },
  ],
  concepts: [
    {
      id: "cile-u3-poetry-analysis",
      title: "Analysing poetry",
      skill: "Analyse how form, imagery, structure and voice work together in a poem to create meaning.",
      lesson: {
        sections: [
          {
            heading: "Poetry form and structure",
            body: "- **Stanzas**: groupings create units of thought — like paragraphs.\n- **Line breaks**: can emphasise a word or create pause.\n- **Enjambment**: running over line breaks creates flow or tension.\n- **Volta**: a turn in the poem — often where the meaning shifts.\n- **Free verse**: no regular rhyme or metre — meaning carries the structure.",
          },
          {
            heading: "Imagery in poetry",
            body: "Poets compress meaning into images. 'Swings hang still like something somebody forgot to finish' — the simile suggests abandonment and incompleteness. Every image is chosen for its connotations.",
          },
          {
            heading: "Voice and tone",
            body: "The speaker's voice — nostalgic, bitter, celebratory — shapes how we read the poem. In 'The Empty Playground', the voice is wistful and gently ironic ('almost shy').",
          },
        ],
        keyFormulas: [
          { name: "Poetry analysis", statement: "Form (stanzas, line breaks) + imagery + voice = meaning. Analyse all three, not just paraphrase." },
        ],
        workedExample: {
          problem: "Poem: 'The whistle that called us out has gone quiet / into the pocket of a teacher's coat'. What does this image convey?",
          solution: "The whistle — a symbol of childhood routine — is 'gone quiet', personified as having retired into a coat pocket. It conveys the end of childhood games and the passage of time.",
        },
      },
      questions: [
        {
          id: "cile-u3-poem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: poemExtract,
          stem: "What is the main subject of the poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A teacher's retirement" },
              { id: "b", text: "The loss of childhood and the passage of time" },
              { id: "c", text: "A school sports day" },
              { id: "d", text: "A windy day at the playground" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "The poem mourns the end of childhood play and the shrinking of the speaker into adulthood." },
            ],
            steps: [
              { reasoning: "Images of still swings, silent whistle, shrinking footprints all signal lost childhood.", working: "\\text{lost childhood}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The loss of childhood and the passage of time",
            commonErrors: ["Choosing (d) — the wind is imagery, not the subject."],
          },
        },
        {
          id: "cile-u3-poem-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: poemExtract,
          stem: "Explain the effect of the simile 'like something somebody forgot to finish'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Simile", statement: "Comparison with 'like'; suggests abandonment and incompleteness." },
            ],
            steps: [
              { reasoning: "The swings are compared to an unfinished task — abandoned mid-way.", working: "\\text{unfinished task}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: conveys neglect and the sense that childhood was left incomplete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The simile makes the still swings feel abandoned mid-play — childhood stopped before it was finished, emphasising loss and incompleteness.",
            commonErrors: ["Saying 'it creates a nice image' without explaining the emotional effect."],
          },
        },
        {
          id: "cile-u3-poem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: poemExtract,
          stem: "Analyse how the final stanza's language creates a mood of gentle acceptance rather than bitterness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone", statement: "Gentle, wry word choices ('unremarkable, unruled, almost shy') soften the loss." },
            ],
            steps: [
              { reasoning: "Evidence: 'the field itself is learning to be a field again' — gentle personification.", working: "\\text{learning to be a field}", marks: 1, markCode: "AO2" },
              { reasoning: "'almost shy' — the field's return to nature is tender, not resentful.", working: "\\text{'almost shy'}", marks: 1, markCode: "AO2" },
              { reasoning: "No blame or anger — the tone accepts time's passage.", marks: 1, markCode: "AO2" },
              { reasoning: "Result: wistful acceptance rather than bitterness.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The gentle personification of the field 'learning' and 'almost shy' softens the loss — there is no blame or anger, only wistful acceptance of time's passage.",
            commonErrors: ["Calling the tone 'sad' without noting its gentleness and acceptance."],
          },
        },
        {
          id: "cile-u3-poem-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: poemExtract,
          stem: "The poem uses a series of images to trace the end of childhood.",
          parts: [
            { label: "a", prompt: "Identify three images of stillness or absence.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the 'whistle' image.", marks: 2 },
            { label: "c", prompt: "How does the poem's structure (three stanzas) support its meaning?", marks: 2 },
            { label: "d", prompt: "What is the significance of 'We are smaller now than the footprints we left'?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery sequence", statement: "Each image develops the theme of lost childhood; structure mirrors the progression." },
            ],
            steps: [
              { part: "a", reasoning: "Images: 'swings hang still', 'ball lies where goal posts used to argue', 'whistle gone quiet'.", working: "\\text{still swings; ball; whistle}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate identification.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "The whistle symbolises childhood routine and authority — now silent.", working: "\\text{routine/authority}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Its 'quiet' personification makes the loss feel personal and final.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Three stanzas move from image (swings/ball) to symbol (whistle) to reflection (footprints/field).", working: "\\text{image → symbol → reflection}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The progression mirrors the speaker's movement from memory to acceptance.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "The speaker has shrunk — literally (grown up) and metaphorically (less significant in the world).", working: "\\text{shrunk}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Childhood footprints remain but the child is smaller — time has passed.", working: "\\text{time passed}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It captures the bittersweet paradox of growing up: the world stays, we change.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) still swings; abandoned ball; silent whistle (b) whistle = lost routine/authority, personal finality (c) stanzas progress image→symbol→reflection mirroring acceptance (d) speaker has grown smaller — childhood's scale no longer fits",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three images accurately identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Whistle image explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Structure meaningfully analysed.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Line significance explained with theme link.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) reading 'smaller' literally rather than as metaphor for changed perspective."],
          },
        },
        {
          id: "cile-u3-poem-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: poemExtract,
          stem: "In which stanza number does the poem's 'volta' (turn in mood or argument) occur?",
          response: { type: "numeric", parts: [{ label: "Volta stanza", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volta", statement: "A shift in mood or argument — here, from image to reflection." },
            ],
            steps: [
              { reasoning: "The third/final stanza shifts from describing the empty field to reflecting on the speaker's changed size.", working: "3", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — the whistle image continues the mood rather than turning it."],
          },
        },
        {
          id: "cile-u3-poem-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: poemExtract,
          stem: "How many stanzas does 'The Empty Playground' have?",
          response: { type: "numeric", parts: [{ label: "Stanzas", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Free verse", statement: "Poetry without regular rhyme or metre — meaning carries the structure." },
            ],
            steps: [
              { reasoning: "The poem is in three stanzas, each carrying a stage of meaning.", working: "3", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — the poem has three stanzas."],
          },
        },
        {
          id: "cile-u3-poem-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: poemExtract,
          stem: "Identify one image of stillness or absence and state its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery", statement: "Still images convey abandonment and lost activity." },
            ],
            steps: [
              { reasoning: "Image: 'The swings hang still' or 'A ball lies where the goal posts used to argue'.", working: "\\text{still swings; abandoned ball}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: conveys the emptiness of a place where play has stopped.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The swings hang still in the afternoon' — stillness conveys the playground's abandonment after the children have gone.",
            commonErrors: ["Quoting without stating the emotional effect."],
          },
        },
        {
          id: "cile-u3-poem-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: poemExtract,
          stem: "Explain the personification in 'the field itself is learning to be a field again'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "The field is given the human ability to 'learn' — nature recovering." },
            ],
            steps: [
              { reasoning: "'Learning' gives the field human growth — it is recovering from being a playground.", working: "\\text{'learning'}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: gentle, almost shy — nature's return is tender, not resentful.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The field 'learning' personifies nature recovering — it is gently returning to wildness, creating a tender, accepting mood rather than bitterness.",
            commonErrors: ["Calling it a metaphor — the field is given a human action, not compared to anything."],
          },
        },
        {
          id: "cile-u3-poem-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: poemExtract,
          stem: "What do 'the footprints we left in the wet sand of the field' symbolise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literal footprints in sand" },
              { id: "b", text: "The children's shoes" },
              { id: "c", text: "The traces of childhood that remain after we have grown" },
              { id: "d", text: "The field's wetness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Symbol", statement: "Footprints = marks childhood leaves behind; they persist while the children shrink." },
            ],
            steps: [
              { reasoning: "Footprints are traces left behind — childhood's marks that outlast the moment.", working: "\\text{traces of childhood}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The traces of childhood that remain after we have grown",
            commonErrors: ["Choosing (a) — the image is symbolic, not literal."],
          },
        },
        {
          id: "cile-u3-poem-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: poemExtract,
          stem: "How do the poem's line breaks and enjambment contribute to its meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Line breaks and enjambment", statement: "Where lines break and run over shapes rhythm and emphasis." },
            ],
            steps: [
              { reasoning: "Lines run over breaks without punctuation — a flowing, unhurried rhythm.", working: "\\text{enjambment}", marks: 1, markCode: "AO2" },
              { reasoning: "This mirrors the slow, wistful mood — nothing is rushed or dramatic.", marks: 1, markCode: "AO2" },
              { reasoning: "The gentle flow suits the poem's tone of quiet acceptance.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The enjambment creates a slow, flowing rhythm with no harsh stops — mirroring the poem's wistful, unhurried acceptance of time's passage.",
            commonErrors: ["Saying line breaks 'make it a poem' without analysing their effect."],
          },
        },
        {
          id: "cile-u3-poem-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: poemExtract,
          stem: "Describe the speaker's voice and tone in the poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Voice and tone", statement: "The speaker's attitude — wistful, gently ironic — shapes the reader's response." },
            ],
            steps: [
              { reasoning: "Voice is first-person plural ('we', 'our') — the speaker speaks for a generation.", working: "\\text{'we'}", marks: 1, markCode: "AO2" },
              { reasoning: "Tone is wistful and gently ironic — 'almost shy', 'unremarkable, unruled'.", marks: 1, markCode: "AO2" },
              { reasoning: "The voice mourns without bitterness — acceptance rather than anger.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The speaker uses 'we' — speaking for a whole generation — in a wistful, gently ironic tone that mourns childhood's end with acceptance rather than bitterness.",
            commonErrors: ["Calling the tone 'sad' without noting its gentleness and irony."],
          },
        },
        {
          id: "cile-u3-poem-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: poemExtract,
          stem: "How many of these images PERSONIFY objects or nature (giving them human actions)? 'The swings hang still.' 'The goal posts used to argue.' 'The field itself is learning to be a field again.' 'The wet sand of the field.'",
          response: { type: "numeric", parts: [{ label: "Personified images", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "'Argue' gives the posts playful human energy — childhood's liveliness now gone." },
            ],
            steps: [
              { reasoning: "'Argue' (goal posts) and 'learning' (field) are human actions = 2; 'hang still' and 'wet sand' are not personified.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'swings hang still' — stillness is not a human action."],
          },
        },
        {
          id: "cile-u3-poem-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: poemExtract,
          stem: "Which stanza contains the poem's volta (the turn from image to reflection)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The second stanza" },
              { id: "b", text: "The first stanza" },
              { id: "c", text: "The third stanza" },
              { id: "d", text: "There is no volta" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volta", statement: "The turn where the poem shifts from describing the playground to reflecting on the speaker." },
            ],
            steps: [
              { reasoning: "The third stanza's 'We are smaller now' shifts from external image to internal reflection.", working: "\\text{'We are smaller now'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The third stanza",
            commonErrors: ["Choosing (b) — the whistle image continues the external description."],
          },
        },
        {
          id: "cile-u3-poem-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: poemExtract,
          stem: "Analyse how the poem's form and imagery work together to create its meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Form + imagery", statement: "Free-verse flow and a sequence of still images together enact quiet acceptance." },
            ],
            steps: [
              { reasoning: "Form: three stanzas, free verse, enjambment — unhurried, flowing.", working: "\\text{free verse, enjambment}", marks: 1, markCode: "AO2" },
              { reasoning: "Imagery: still swings, abandoned ball, silent whistle — absence made visible.", marks: 1, markCode: "AO2" },
              { reasoning: "Together: the slow form lets each image linger — loss is contemplated, not dramatised.", marks: 1, markCode: "AO2" },
              { reasoning: "Meaning: the form's gentleness matches the theme — acceptance, not bitterness.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Free-verse flow and a sequence of still, absent images work together: the unhurried form lets each image of loss linger, so the poem enacts quiet acceptance rather than dramatising grief.",
            commonErrors: ["Analysing form and imagery separately without showing how they interact."],
          },
        },
        {
          id: "cile-u3-poem-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: poemExtract,
          stem: "You are analysing 'The Empty Playground'.",
          parts: [
            { label: "a", prompt: "Identify the poem's volta and explain its effect.", marks: 2 },
            { label: "b", prompt: "Explain the 'whistle' image and what it symbolises.", marks: 2 },
            { label: "c", prompt: "How do the three stanzas structure the poem's meaning?", marks: 2 },
            { label: "d", prompt: "What is the significance of 'We are smaller now than the footprints we left'?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poetry analysis", statement: "Volta, symbol, structure and a key image together create the poem's meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Volta: final stanza shifts from image to reflection ('We are smaller now').", working: "\\text{image → reflection}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Effect: the turn makes the loss personal — the speaker enters the poem.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "The whistle symbolises childhood routine and authority — now silent.", working: "\\text{routine/authority}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Its 'quiet' personification makes the loss feel personal and final.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Stanzas progress: image (swings/ball) → symbol (whistle) → reflection (footprints/field).", working: "\\text{image → symbol → reflection}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Mirrors the speaker's movement from memory to acceptance.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "'Smaller' is metaphor — the speaker has grown, childhood's scale no longer fits.", working: "\\text{'smaller' = changed}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Footprints remain but the child is smaller — time has passed, we change.", working: "\\text{time passed}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Bittersweet paradox of growing up: the world stays, we change.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) final stanza volta shifts image→reflection, making loss personal (b) whistle = lost routine/authority, personal finality (c) stanzas progress image→symbol→reflection mirroring acceptance (d) 'smaller' = grown up; footprints remain but scale changed — bittersweet",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Volta identified with effect.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Whistle symbol explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Stanza structure analysed.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Key line significance explained with theme.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) reading 'smaller' literally."],
          },
        },
        {
          id: "cile-u3-poem-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: poemExtract,
          stem: "You are analysing 'The Empty Playground'.",
          parts: [
            { label: "a", prompt: "Describe the speaker's tone.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the simile 'like something somebody forgot to finish'.", marks: 2 },
            { label: "c", prompt: "Explain the personification of the field 'learning to be a field again'.", marks: 2 },
            { label: "d", prompt: "How does the poem's free-verse form serve its meaning?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poetry analysis", statement: "Tone, imagery and form together create wistful acceptance." },
            ],
            steps: [
              { part: "a", reasoning: "Tone: wistful, gently ironic — 'almost shy', 'unremarkable'.", working: "\\text{wistful/ironic}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Mourns without bitterness — acceptance.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Simile compares swings to an unfinished task — abandoned mid-play.", working: "\\text{unfinished}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Conveys childhood left incomplete — loss and neglect.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Field 'learning' personifies nature recovering — gentle return to wildness.", working: "\\text{'learning'}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Tender, not resentful — acceptance of time.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Free verse's lack of rigid form mirrors the poem's unforced, natural flow.", working: "\\text{unforced}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Meaning carries the structure — grief does not need a fixed mould.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) wistful, gently ironic, accepting (b) unfinished-task simile = childhood left incomplete (c) field 'learning' = nature's tender recovery (d) free verse mirrors unforced grief — meaning carries structure",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Tone accurately described.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Simile effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Personification explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Form-meaning link explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid link.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'it is free verse' without linking form to meaning."],
          },
        },
      ],
    },
    {
      id: "cile-u3-prose-analysis",
      title: "Analysing prose fiction",
      skill: "Analyse how prose writers use character, setting, voice and structure to create meaning in fiction.",
      lesson: {
        sections: [
          {
            heading: "Elements of prose fiction",
            body: "- **Character**: revealed through action, dialogue, thought, and what others say about them.\n- **Setting**: place and time — can mirror mood or symbolise themes.\n- **Voice**: the narrator's tone — reliable or unreliable, close or distant.\n- **Structure**: chronological, flashback, circular — controls revelation.",
          },
          {
            heading: "Close reading prose",
            body: "1. Who is telling the story? Can we trust them?\n2. What do characters do vs what they say — gaps reveal truth.\n3. What does the setting contribute — mood, symbol, contrast?\n4. How does the ending resolve (or refuse to resolve) the central tension?",
          },
        ],
        keyFormulas: [
          { name: "Prose analysis", statement: "Character + setting + voice + structure = meaning. Analyse how they interact, not just what happens." },
        ],
        workedExample: {
          problem: "Story: 'The Last Ferry'. Marisol feels 'not sad exactly — she was something more complicated'. Why this phrasing?",
          solution: "The refusal to name the emotion ('not sad exactly') is honest about grief's complexity — it is accurate to how people actually experience endings: mixed, unfinished, hard to categorise.",
        },
      },
      questions: [
        {
          id: "cile-u3-prose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: storyExtract,
          stem: "What is the main conflict in 'The Last Ferry'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marisol's attachment to the island vs the necessity of leaving" },
              { id: "b", text: "Marisol vs the ferry company" },
              { id: "c", text: "The bicycle boy vs the weather" },
              { id: "d", text: "The island vs the mainland" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conflict", statement: "Internal conflict: love of place vs practical need to leave." },
            ],
            steps: [
              { reasoning: "She lived there 61 years and is leaving out of necessity, not desire.", working: "\\text{attachment vs necessity}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Marisol's attachment to the island vs the necessity of leaving",
            commonErrors: ["Choosing (d) — the island/mainland is setting, not the conflict."],
          },
        },
        {
          id: "cile-u3-prose-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: storyExtract,
          stem: "What does the bicycle boy's 'broken bell' detail suggest about his character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Detail as characterisation", statement: "Small details reveal character — a broken bell suggests a quiet, unpretentious person." },
            ],
            steps: [
              { reasoning: "The bell is broken — minor, unnoticed, unglamorous.", working: "\\text{broken bell}", marks: 1, markCode: "AO2" },
              { reasoning: "It characterises him as unassuming and unbothered — he does not fix trivial things.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The broken bell suggests he is unpretentious and unbothered by small flaws — a quiet, practical young man.",
            commonErrors: ["Saying 'he is poor' — the detail suggests character, not economics."],
          },
        },
        {
          id: "cile-u3-prose-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: storyExtract,
          stem: "Analyse how the setting of the ferry and harbour contributes to the story's mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Setting as mood", statement: "Liminal spaces (ferries, harbours) symbolise transition and departure." },
            ],
            steps: [
              { reasoning: "The ferry is a threshold — neither island nor mainland, in-between.", working: "\\text{threshold}", marks: 1, markCode: "AO2" },
              { reasoning: "Dusk and darkness — 'the island was already dark' — reinforce ending/finality.", working: "\\text{dusk/dark}", marks: 1, markCode: "AO2" },
              { reasoning: "The harbour as departure point — 'lights of the town shrink' — visualises loss.", working: "\\text{shrinking lights}", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: setting embodies the emotional state — transition, loss, new beginning.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The ferry is a literal threshold between island and mainland; dusk and the shrinking lights visualise departure and loss, making the setting embody Marisol's emotional transition.",
            commonErrors: ["Describing the setting without linking it to mood or theme."],
          },
        },
        {
          id: "cile-u3-prose-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: storyExtract,
          stem: "'The Last Ferry' is a story about endings and beginnings.",
          parts: [
            { label: "a", prompt: "Identify two details that show Marisol's attachment to the island.", marks: 2 },
            { label: "b", prompt: "How does the bicycle boy function in the story?", marks: 2 },
            { label: "c", prompt: "Explain the significance of 'grateful, perhaps, or merely finished'.", marks: 2 },
            { label: "d", prompt: "What does the ending suggest about how we experience endings?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Symbol and theme", statement: "The ferry/bicycle boy symbolise transition; the ending refuses simple emotion." },
            ],
            steps: [
              { part: "a", reasoning: "Detail 1: 'sixty-one years' on the island.", working: "\\text{61 years}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Detail 2: she cannot leave until she has done X — or 'looked back' at the dark island.", working: "\\text{looked back}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "He represents the future/young traveller — contrast with Marisol's rootedness.", working: "\\text{future vs rootedness}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "He walks away without looking back — she follows at a distance.", working: "\\text{walks away}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "The uncertainty ('perhaps', 'merely') refuses a simple label for grief.", working: "\\text{uncertainty}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It captures the complexity of endings — not sad, not happy, just finished.", working: "\\text{complexity}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Endings are not single emotions — they are mixtures of relief, grief, gratitude.", working: "\\text{mixed emotions}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The bicycle boy's easy departure contrasts Marisol's weighted leaving — endings differ by circumstance.", working: "\\text{circumstance}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The story suggests endings are processes, not events — we carry them forward.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 61 years; looking back at dark island (b) represents future/young traveller, walks away easily (c) uncertainty captures grief's complexity (d) endings are mixed emotions and processes, not single events",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Boy's function explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Phrase significance explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Ending's theme convincingly argued.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (b) saying 'he is a stranger' without analysing his symbolic function."],
          },
        },
        {
          id: "cile-u3-prose-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: storyExtract,
          stem: "What is the setting of 'The Last Ferry'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A city train station" },
              { id: "b", text: "A house on the island" },
              { id: "c", text: "A harbour in winter" },
              { id: "d", text: "A ferry crossing from an island to the mainland at dusk" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Setting", statement: "The ferry at dusk — a liminal space between island and mainland." },
            ],
            steps: [
              { reasoning: "The ferry 'pulled away from the harbour at dusk' carrying her to the mainland.", working: "\\text{ferry at dusk}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** A ferry crossing from an island to the mainland at dusk",
            commonErrors: ["Choosing (c) — the house is mentioned but the action happens on the ferry."],
          },
        },
        {
          id: "cile-u3-prose-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: storyExtract,
          stem: "How many of these accurately describe Marisol's central conflict? 'Attachment to the island versus necessity of leaving.' 'She wants to leave but cannot.' 'She is being exiled by the council.' 'She is excited to move to the mainland.'",
          response: { type: "numeric", parts: [{ label: "Accurate descriptions", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Internal conflict", statement: "She leaves out of necessity, not desire — attachment vs circumstance." },
            ],
            steps: [
              { reasoning: "Only 'attachment versus necessity' matches — the others invert or invent the conflict.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting 'wants to leave but cannot' — she does NOT want to leave; the conflict is the reverse."],
          },
        },
        {
          id: "cile-u3-prose-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: storyExtract,
          stem: "Describe the narrator's voice in the story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Voice", statement: "The narrator's tone — here, restrained, observant, emotionally honest." },
            ],
            steps: [
              { reasoning: "Third-person, closely following Marisol — limited but intimate.", working: "\\text{third-person close}", marks: 1, markCode: "AO2" },
              { reasoning: "Tone is restrained and honest — 'not sad exactly', 'merely finished'.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The narrator is third-person, close to Marisol, with a restrained, honest voice — naming mixed emotions precisely rather than dramatising them.",
            commonErrors: ["Calling it 'sad' — the voice is deliberately complicated, not sentimental."],
          },
        },
        {
          id: "cile-u3-prose-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: storyExtract,
          stem: "What does 'a bag that felt heavier than it should' suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Symbolic detail", statement: "Physical weight mirrors emotional weight — the bag carries her past." },
            ],
            steps: [
              { reasoning: "The bag's literal weight is normal, but it 'felt heavier' — emotional projection.", working: "\\text{'felt heavier'}", marks: 1, markCode: "AO2" },
              { reasoning: "It symbolises the emotional burden of leaving sixty-one years behind.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The bag feels heavier than it should — a symbolic detail showing the emotional weight of carrying sixty-one years of island life into an uncertain future.",
            commonErrors: ["Saying 'she packed too much' — the weight is emotional, not literal."],
          },
        },
        {
          id: "cile-u3-prose-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: storyExtract,
          stem: "How many of these describe the story's structure? 'Chronological linear narrative.' 'Flashback.' 'Circular.' 'Frame narrative.'",
          response: { type: "numeric", parts: [{ label: "Correct structures", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological structure", statement: "Events unfold in time order — departure, crossing, arrival, reflection." },
            ],
            steps: [
              { reasoning: "Only 'chronological linear narrative' fits — events move forward in time.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Choosing 'flashback' — there is no jump back in time."],
          },
        },
        {
          id: "cile-u3-prose-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: storyExtract,
          stem: "How does the contrast between Marisol and the bicycle boy develop the story's theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character contrast", statement: "Her rooted attachment vs his easy departure highlights different relationships with place." },
            ],
            steps: [
              { reasoning: "Marisol is rooted — sixty-one years, leaving reluctantly.", working: "\\text{rooted}", marks: 1, markCode: "AO2" },
              { reasoning: "The boy is mobile — summer visitor, walks away without looking back.", marks: 1, markCode: "AO2" },
              { reasoning: "Contrast: endings feel different depending on how long and how deeply we belong.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Marisol's rooted attachment contrasts the boy's easy departure — the contrast shows that endings feel different depending on how deeply we belong to a place.",
            commonErrors: ["Describing both characters without explaining what the contrast reveals."],
          },
        },
        {
          id: "cile-u3-prose-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: storyExtract,
          stem: "Explain the effect of 'Marisol stepped onto the dock and looked back. The island was already dark.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Visual detail and timing", statement: "Looking back at darkness marks the finality of departure." },
            ],
            steps: [
              { reasoning: "'Looked back' is a gesture of attachment — she cannot leave without checking.", working: "\\text{'looked back'}", marks: 1, markCode: "AO2" },
              { reasoning: "'Already dark' — the island is gone before she has even left it; finality is immediate.", marks: 1, markCode: "AO2" },
              { reasoning: "The visual (darkness) makes the emotional ending concrete — the place is lost already.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Looking back at the already-dark island makes the loss immediate and visual — the place is gone before she has left it, marking departure as irreversible.",
            commonErrors: ["Saying 'it is a nice image' without explaining the finality it creates."],
          },
        },
        {
          id: "cile-u3-prose-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: storyExtract,
          stem: "What does 'the house had become too large for one person and the stairs had become too steep for her knees' establish?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The island's decline" },
              { id: "b", text: "Her love of the island" },
              { id: "c", text: "Her financial problems" },
              { id: "d", text: "The practical reasons forcing her to leave" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conflict setup", statement: "Practical necessities (house size, mobility) force the reluctant departure." },
            ],
            steps: [
              { reasoning: "House too large + stairs too steep = practical, not emotional, reasons to leave.", working: "\\text{practical reasons}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The practical reasons forcing her to leave",
            commonErrors: ["Choosing (a) — these details explain why she must leave, not why she loves it."],
          },
        },
        {
          id: "cile-u3-prose-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: storyExtract,
          stem: "For how many years had Marisol lived on the island?",
          response: { type: "numeric", parts: [{ label: "Years on island", answer: 61 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Detail as characterisation", statement: "Sixty-one years establishes deep, lifelong attachment." },
            ],
            steps: [
              { reasoning: "The story states she had lived on the island for sixty-one years — nearly a lifetime.", working: "61", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "61",
            commonErrors: ["Answering a different number — the text says sixty-one years."],
          },
        },
        {
          id: "cile-u3-prose-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: storyExtract,
          stem: "Analyse how the story's ending refuses simple emotional resolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ambiguous ending", statement: "Refusing to name the emotion ('not sad exactly') mirrors real grief's complexity." },
            ],
            steps: [
              { reasoning: "'Not sad exactly — something more complicated' refuses a single label.", working: "\\text{'not sad exactly'}", marks: 1, markCode: "AO2" },
              { reasoning: "'Grateful, perhaps, or merely finished' offers alternatives without choosing.", marks: 1, markCode: "AO2" },
              { reasoning: "The bicycle boy walks away easily — contrast heightens Marisol's weighted leaving.", marks: 1, markCode: "AO2" },
              { reasoning: "The ending stays unresolved — endings are processes, not events.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The ending refuses to name Marisol's emotion — 'not sad exactly', 'grateful, perhaps, or merely finished' — mirroring how real endings are mixtures, not single feelings.",
            commonErrors: ["Saying 'she is sad' — the story deliberately avoids that simple label."],
          },
        },
        {
          id: "cile-u3-prose-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: storyExtract,
          stem: "You are analysing 'The Last Ferry'.",
          parts: [
            { label: "a", prompt: "Identify the story's central conflict.", marks: 2 },
            { label: "b", prompt: "Explain the bicycle boy's function in the story.", marks: 2 },
            { label: "c", prompt: "How does the ferry setting contribute to the mood?", marks: 2 },
            { label: "d", prompt: "What does the ending suggest about how we experience endings?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prose analysis", statement: "Conflict, character function, setting and ending together create meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Conflict: attachment to island vs necessity of leaving (internal).", working: "\\text{attachment vs necessity}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Stated accurately.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "He represents the future/mobile — contrast with Marisol's rootedness.", working: "\\text{future vs rooted}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "He walks away without looking back — easy departure vs hers.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Ferry is a threshold — neither island nor mainland; dusk and darkness reinforce finality.", working: "\\text{threshold; dusk}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Setting embodies transition — departure and loss.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Endings are mixed emotions — 'not sad exactly', 'grateful, perhaps, or merely finished'.", working: "\\text{mixed emotions}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "They are processes carried forward, not single events.", working: "\\text{processes}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The boy's easy leaving vs Marisol's weighted one shows endings differ by circumstance.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) attachment vs necessity (b) represents mobile future; easy departure (c) threshold/dusk = transition and finality (d) endings are mixed emotions and ongoing processes, not single events",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Conflict accurately identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Boy's function explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Setting-mood link explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Ending theme argued convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'she is sad' — the ending refuses that label."],
          },
        },
        {
          id: "cile-u3-prose-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: storyExtract,
          stem: "You are analysing 'The Last Ferry'.",
          parts: [
            { label: "a", prompt: "Is the narrator reliable? Justify.", marks: 2 },
            { label: "b", prompt: "Explain the effect of 'not sad exactly — something more complicated'.", marks: 2 },
            { label: "c", prompt: "How does the bicycle boy contrast with Marisol?", marks: 2 },
            { label: "d", prompt: "What theme does the ending develop?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Voice and theme", statement: "An honest, restrained narrator and an ambiguous ending develop the theme of complex endings." },
            ],
            steps: [
              { part: "a", reasoning: "Yes — the narrator reports her feelings precisely and without embellishment.", working: "\\text{honest reporting}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "'Not sad exactly' shows willingness to admit complexity.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Refuses a simple label — grief is mixed, not single.", working: "\\text{mixed}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate to how people actually experience endings.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "He is mobile, young, leaves easily; she is rooted, old, leaves reluctantly.", working: "\\text{mobile vs rooted}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Contrast shows endings differ by circumstance and attachment.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Theme: endings are processes of mixed emotion, not single events.", working: "\\text{process/mixed}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The bag 'heavier than it should' carries the past forward — endings continue.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) reliable — reports feelings honestly (b) refuses simple label — grief is mixed (c) mobile boy vs rooted Marisol — endings differ by circumstance (d) endings are ongoing processes of mixed emotion",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Reliability justified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Phrase effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Contrast explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Theme identified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) calling the narrator unreliable — she is honest, just complicated."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u3-poetry-prose-notes",
      title: "Poetry and prose analysis — revision notes",
      summary: "Form, imagery, voice and structure in poetry and fiction.",
      sections: [
        {
          heading: "Poetry",
          body: "Stanzas = paragraphs. Line breaks emphasise. Enjambment flows. Volta turns. Free verse relies on meaning, not metre. Analyse form + imagery + voice together.",
        },
        {
          heading: "Prose fiction",
          body: "Character (action vs words), setting (mood/symbol), voice (reliable?), structure (chronology/flashback). Look for gaps between what characters say and do.",
        },
        {
          heading: "Exam technique",
          body: "Never paraphrase. Always analyse: what technique, what effect, what it contributes to meaning. Link every observation to theme.",
        },
      ],
    },
  ],
};
