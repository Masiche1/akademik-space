const P = (kind, name, statement) => ({ kind, name, statement });
const st = (reasoning, marks, markCode, extra) => ({ reasoning, marks, markCode, ...(extra || {}) });
const cs = (a) => a.map(([id, text]) => ({ id, text }));
const lv6 = (part) => [
  { ...(part ? { part } : {}), level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis supported by well-chosen references and developed judgement." },
  { ...(part ? { part } : {}), level: "Level 2", marks: "3-4", descriptor: "Some understanding of the poet's methods, with some relevant references." },
  { ...(part ? { part } : {}), level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment with few references." },
];
const makeQ = (o, response, markscheme) => ({
  id: o.id,
  difficulty: o.difficulty || "foundation",
  totalMarks: o.totalMarks ?? (o.stepMarks || 1),
  ...(o.extract ? { extract: o.extract } : {}),
  stem: o.stem,
  ...(o.parts ? { parts: o.parts } : {}),
  response,
  markscheme,
});
const mcq = (o) => makeQ(o, { type: "mcq", choices: cs(o.choices), correctChoiceId: o.correct }, {
  principles: o.p,
  steps: [st(o.r, o.stepMarks || 1, o.code || "AO1", o.ev ? { evidence: o.ev } : {})],
  finalAnswer: o.answer,
  ...(o.errors ? { commonErrors: o.errors } : {}),
});
const op = (o) => makeQ(o, { type: "open" }, {
  principles: o.p,
  steps: o.s,
  finalAnswer: o.a,
  ...(o.errors ? { commonErrors: o.errors } : {}),
  ...(o.l ? { levels: o.l } : {}),
});
const SEC = (a) => a.map(([heading, body]) => ({ heading, body }));
const FORM = (a) => a.map(([name, statement]) => ({ name, statement }));
const V = (a) => a.map(([term, definition]) => ({ term, definition }));
const CON = (o) => ({ id: o.id, title: o.title, skill: o.skill, sections: SEC(o.sections), keyFormulas: FORM(o.formulas), workedExample: o.example, questions: o.questions });
const N = (id, title, summary, sections) => ({ id, title, summary, sections: SEC(sections) });
const U = "el8-u5";
const lessonSpec = (file, exportName, code, title, goal, standards, vocab, concepts, notes) => ({
  file,
  exportName,
  lesson: { id: `${U}-lesson-${code}`, code, title, goal, standards, vocabulary: V(vocab), concepts },
  notes,
});

const FATHER = {
  title: "The Cartographer's Daughter",
  author: "Written for Akademik Space",
  text: "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach.",
};
const NIGHT_BUS = {
  title: "The Night Bus",
  author: "Written for Akademik Space",
  text: "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves.",
};
const ROAD_NORTH = {
  title: "The Road North",
  author: "Written for Akademik Space",
  text: "We leave at first light, the kettle singing,\nthe map folded to the crease we know.\nMy brother counts the telegraph poles\nlike beads on a rosary of home.\n\nThe fields unroll their green and gold,\nthe hedges bow beneath the weight\nof birds that flash and dip and rise\nas if the air were hands of light.\n\nBy noon the hills have turned to blue,\nthe church spire shrinks behind the trees,\nand I begin to understand\nhow leaving can be coming home.",
};
const LEAVING = {
  title: "Leaving",
  author: "Written for Akademik Space",
  text: "The platform empties like a tide,\nour tickets warm inside my coat.\nYou wave until the carriages hide,\nthen fold your handkerchief and note\nthe minute hand still climbing slow,\nthe guard's whistle, sharp and bright:\na small, clean sound to end the day\nand set the wheels of leaving right.\n\nI watch the fields go past the glass,\neach farm a paragraph turned,\neach mile a syllable I pass\nbut never say or quite have learned.",
};

module.exports = [
  lessonSpec(
    "lesson-5-1.ts", "lesson51", "5-1", "Reading a Poem Closely",
    "I CAN identify a poem's speaker, voice, form and structure and explain how they shape meaning.",
    ["KS3 Reading", "KS3 AO1", "KS3 AO2"],
    [
      ["Speaker", "The voice or persona speaking in a poem, which may differ from the poet."],
      ["Voice", "The distinctive tone, attitude and personality created by the poet's choices."],
      ["Stanza", "A grouped set of lines in a poem, similar to a paragraph."],
      ["Quatrain", "A stanza of four lines."],
      ["Enjambment", "Running a sentence over a line break without punctuation."],
      ["Shift", "A change in focus, tone or subject within a poem."],
    ],
    [
      CON({
        id: "el8-u5-speaker-voice", title: "Speaker and voice", skill: "Work out who is speaking and how their attitude is created.",
        sections: [
          ["Who is speaking?", "The speaker is the 'I' or voice in the poem. It may be the poet, a character or an imagined persona. Look for clues in pronouns, address and attitude. In 'The Cartographer's Daughter', the speaker is the daughter, not necessarily the poet."],
          ["How is voice created?", "Voice comes from word choice, tone, imagery and what the speaker notices. A reflective voice is calm and thoughtful; a frightened voice may use short lines and dark images. Always link voice to evidence."],
        ],
        formulas: [
          ["Speaker", "The voice speaking in the poem, which may differ from the poet."],
          ["Tone", "The speaker's attitude towards the subject."],
          ["Voice", "The personality and mood created by language choices."],
        ],
        example: { problem: "Who is speaking in 'The Cartographer's Daughter' and what is their attitude?", solution: "The speaker is the cartographer's daughter. Her attitude is respectful and inspired: she keeps her father's maps, learns to think in his way and tries to continue his work." },
        questions: [
          mcq({ id: "el8-u5-speaker-voice-q1", stem: "Who is the speaker in 'The Cartographer's Daughter'?", choices: [["a", "The father who draws the maps"], ["b", "The daughter who inherits the maps"], ["c", "A sailor lost at sea"], ["d", "The storm itself"]], correct: "b", p: [P("definition", "Speaker", "The speaker is the voice speaking in the poem.")], r: "The poem uses 'My father' and 'I keep his maps', so the speaker is the daughter.", ev: "I keep his maps", answer: "**(b)** The daughter.", errors: ["Choosing (a): the father is described, not speaking."] }),
          op({ id: "el8-u5-speaker-voice-q2", difficulty: "core", totalMarks: 2, stem: "Give two details that show the daughter's relationship with her father.", extract: FATHER, p: [P("skill", "Close reading", "Use evidence to infer relationships and feelings."), P("context", "Family and inheritance", "The poem links maps to family legacy.")], s: [st("She keeps his maps, showing care and closeness.", 1, "AO1", { evidence: "I keep his maps" }), st("She learns to think like him, showing admiration and continuation.", 1, "AO1", { evidence: "learn to think" })], a: "She keeps his maps and learns his way of thinking, showing closeness and respect." }),
          op({ id: "el8-u5-speaker-voice-q3", difficulty: "core", totalMarks: 3, extract: FATHER, stem: "What is the tone of the poem? Support your answer with two details.", p: [P("technique", "Tone", "Tone is the speaker's attitude towards the subject."), P("skill", "Evidence", "Support tone judgements with quotations.")], s: [st("The tone is reflective and respectful.", 1, "AO2"), st("The daughter studies her father's maps and learns from them.", 1, "AO2", { evidence: "I keep his maps" }), st("The final image of drawing 'the sea beyond the page' suggests inspiration and possibility.", 1, "AO2", { evidence: "beyond the page" })], a: "The tone is reflective and inspired, shown by her respect for her father and her attempt to continue his work." }),
          op({ id: "el8-u5-speaker-voice-q4", difficulty: "challenge", totalMarks: 4, extract: FATHER, stem: "How does the speaker's attitude change from the first stanza to the last? Refer to the poem.", p: [P("technique", "Shift in voice", "A poem can move from learning to acting."), P("context", "Family legacy", "The daughter moves from inheriting to continuing.")], s: [st("In the first stanza she is learning from her father.", 1, "AO2", { evidence: "learn to think" }), st("In the last stanza she acts by drawing the sea herself.", 1, "AO2", { evidence: "I hold his pencil tight" }), st("The shift shows growth from observer to creator.", 1, "AO3"), st("The harbour 'waiting' suggests a future she can reach.", 1, "AO2", { evidence: "just out of reach" })], a: "She moves from learning her father's methods to actively drawing beyond them, showing confidence and continuation.", errors: ["Only describing the stanzas without comparing attitude."] }),
          op({ id: "el8-u5-speaker-voice-q5", difficulty: "challenge", totalMarks: 6, extract: FATHER, stem: "Write a short paragraph analysing the speaker's feelings about her father and her future.", p: [P("skill", "Analysing voice", "Link feelings to evidence and effect."), P("technique", "Imagery", "Objects such as maps and pencils carry emotional meaning.")], s: [st("Identifies respect or admiration for the father.", 2, "AO2"), st("Explains how keeping maps shows closeness.", 1, "AO2"), st("Explains how drawing beyond the page shows ambition.", 2, "AO2"), st("Links the final image to hope or possibility.", 1, "AO3")], l: lv6(), a: "Model: 'The speaker feels deep respect for her father, shown by keeping his maps and learning to think in his way. By the end she is no longer only inheriting his work but trying to extend it, drawing the sea beyond the page. This suggests hope and ambition.'", errors: ["Retelling the poem without analysing voice.", "Ignoring the final stanza."] }),
          op({ id: "el8-u5-speaker-voice-q6", difficulty: "challenge", totalMarks: 12, extract: FATHER, stem: "Answer all parts of this question about the poem's speaker and voice.", parts: [
            { label: "a", prompt: "Who is speaking? Give one clue.", marks: 2 },
            { label: "b", prompt: "Explain how the voice develops through the poem.", marks: 4 },
            { label: "c", prompt: "Evaluate how effectively the voice conveys the poem's theme.", marks: 6 },
          ], p: [P("context", "Voice and theme", "A poem's speaker and tone carry its meaning."), P("technique", "Attitude and imagery", "Word choice and images reveal feeling.")], s: [
            st("The speaker is the cartographer's daughter.", 1, "AO1", { part: "a", evidence: "My father charts" }),
            st("The clue is that she keeps his maps and uses his pencil.", 1, "AO1", { part: "a", evidence: "I keep his maps" }),
            st("She begins by learning from her father.", 1, "AO2", { part: "b", evidence: "learn to think" }),
            st("The middle stanzas show her testing and extending his methods.", 1, "AO2", { part: "b", evidence: "his compass points" }),
            st("The final stanza shows her acting independently.", 1, "AO2", { part: "b", evidence: "I hold his pencil tight" }),
            st("The voice becomes more confident and creative.", 1, "AO3", { part: "b" }),
            st("The voice effectively conveys respect for the father.", 2, "AO3", { part: "c", evidence: "each harbour named for storms he braved" }),
            st("It conveys growth because she moves from learner to creator.", 2, "AO3", { part: "c", evidence: "beyond the page" }),
            st("The quiet, reflective voice suits the theme of inheritance.", 2, "AO3", { part: "c" }),
          ], l: lv6("c"), a: "(a) The daughter; she keeps his maps. (b) She moves from learning to acting independently. (c) The voice is effective because it balances respect for the father with the daughter's growing confidence.", errors: ["Confusing poet and speaker.", "Ignoring development."] }),
        ],
      }),
      CON({
        id: "el8-u5-form-structure", title: "Form and structure", skill: "Analyse how stanzas, rhyme, line breaks and endings shape a poem's effect.",
        sections: [
          ["Form", "Form is the poem's visible shape: number of lines, stanzas, rhyme and rhythm. Three quatrains create a controlled, orderly feeling. A single long stanza might feel more urgent or conversational."],
          ["Structure and endings", "Poems often move from beginning to development to resolution. Line breaks can slow or speed reading. The final image usually carries the poem's main impression, so analyse how it relates to the opening."],
        ],
        formulas: [
          ["Stanza", "A grouped set of lines in a poem."],
          ["Quatrain", "A four-line stanza."],
          ["Enjambment", "A sentence continuing across a line break."],
        ],
        example: { problem: "What effect does the three-stanza structure have?", solution: "The three quatrains create order and progression: learning, testing and finally acting. The regular shape supports the poem's calm, reflective voice." },
        questions: [
          mcq({ id: "el8-u5-form-structure-q1", stem: "What is the form of 'The Cartographer's Daughter'?", choices: [["a", "One long stanza"], ["b", "Three quatrains"], ["c", "A sonnet"], ["d", "Free verse with no stanzas"]], correct: "b", p: [P("definition", "Form", "The visible shape of a poem.")], r: "The poem has three stanzas of four lines each, so it is three quatrains.", answer: "**(b)** Three quatrains.", errors: ["Counting lines instead of stanzas."] }),
          op({ id: "el8-u5-form-structure-q2", difficulty: "core", totalMarks: 2, stem: "Explain two effects of the poem's regular stanza structure.", extract: FATHER, p: [P("technique", "Form", "Regular structure can create order or control."), P("context", "Poetic voice", "Shape supports the poem's calm, reflective tone.")], s: [st("The regular quatrains create a sense of order and control.", 1, "AO2"), st("The three stanzas allow a clear progression from learning to acting.", 1, "AO2")], a: "Regular stanzas create order; the three-part shape supports progression." }),
          op({ id: "el8-u5-form-structure-q3", difficulty: "core", totalMarks: 3, extract: FATHER, stem: "How does rhyme and rhythm affect the poem's tone? Refer to two details.", p: [P("technique", "Rhyme and rhythm", "Sound patterns can create music, order or tension."), P("context", "Tone", "The poem's calm voice is supported by regular sound.")], s: [st("Rhyming words such as 'ink' and 'think' create a gentle, memorable pattern.", 1, "AO2", { evidence: "ink" }), st("The steady line lengths give a calm, reflective rhythm.", 1, "AO2"), st("The regular sound supports the poem's controlled, thoughtful tone.", 1, "AO3")], a: "Rhyme and steady rhythm create a calm, orderly music that suits the reflective voice.", errors: ["Naming rhyme without explaining effect."] }),
          op({ id: "el8-u5-form-structure-q4", difficulty: "challenge", totalMarks: 4, extract: FATHER, stem: "How does the ending relate to the opening? Refer to the poem.", p: [P("technique", "Circular structure", "A poem can end by echoing or extending its beginning."), P("context", "Theme", "The ending shows what has changed.")], s: [st("The opening shows the daughter learning from her father's maps.", 1, "AO1", { evidence: "I keep his maps" }), st("The ending shows her drawing beyond the page.", 1, "AO2", { evidence: "beyond the page" }), st("The harbour 'waiting' echoes the father's harbours but suggests a new future.", 1, "AO2", { evidence: "a harbour waiting" }), st("The ending extends rather than repeats the opening.", 1, "AO3")], a: "The ending echoes the father's maps but shows the daughter creating her own harbour, completing the poem's movement from inheritance to independence.", errors: ["Only saying it is about the sea."] }),
          op({ id: "el8-u5-form-structure-q5", difficulty: "challenge", totalMarks: 6, extract: FATHER, stem: "Compare the first stanza with the final stanza. What does the change in structure and image suggest?", p: [P("technique", "Stanza comparison", "Compare how form and imagery develop."), P("context", "Theme", "The poem moves from learning to creating.")], s: [st("The first stanza is about keeping and learning.", 2, "AO1"), st("The final stanza is about drawing and reaching.", 2, "AO1"), st("The shift from 'learn' to 'draw' shows growth.", 1, "AO3"), st("The final image of a waiting harbour suggests possibility.", 1, "AO2")], l: lv6(), a: "The first stanza shows the daughter learning from her father; the final shows her drawing beyond his maps, suggesting growth and hope.", errors: ["Comparing content without structural or thematic link."] }),
          op({ id: "el8-u5-form-structure-q6", difficulty: "challenge", totalMarks: 12, extract: FATHER, stem: "Answer all parts of this question about the poem's form and structure.", parts: [
            { label: "a", prompt: "How many stanzas and lines does the poem have?", marks: 2 },
            { label: "b", prompt: "Explain how the stanza structure supports the poem's meaning.", marks: 4 },
            { label: "c", prompt: "Evaluate the effectiveness of the poem's ending.", marks: 6 },
          ], p: [P("definition", "Poetic form", "Stanzas, lines and endings shape meaning."), P("technique", "Structure", "Form can mirror a poem's development.")], s: [
            st("Three stanzas.", 1, "AO1", { part: "a", evidence: "Tonight I hold" }),
            st("Each stanza has four lines.", 1, "AO1", { part: "a" }),
            st("The three stanzas create a clear progression.", 1, "AO2", { part: "b" }),
            st("The first stanza introduces learning; the last shows acting.", 1, "AO2", { part: "b" }),
            st("The regular quatrains create order and control.", 1, "AO2", { part: "b" }),
            st("The structure mirrors the daughter's development.", 1, "AO3", { part: "b" }),
            st("The ending is effective because it extends the father's legacy.", 2, "AO3", { part: "c", evidence: "beyond the page" }),
            st("The image of a waiting harbour creates hope and possibility.", 2, "AO2", { part: "c", evidence: "just out of reach" }),
            st("It gives the poem a resonant final impression.", 2, "AO3", { part: "c" }),
          ], l: lv6("c"), a: "(a) Three stanzas of four lines. (b) The quatrains create order and progression from learning to acting. (c) The ending is effective because the waiting harbour suggests hope and the daughter continuing her father's work.", errors: ["Counting lines incorrectly.", "Ignoring structure's effect on meaning."] }),
        ],
      }),
    ],
    N("el8-u5-close-reading-notes", "Reading a poem closely — notes", "Identify the speaker, track voice, and analyse form, stanzas and endings.", [
      ["Key idea", "Poems compress meaning; every choice of voice, form and image matters."],
      ["Speaker", "The 'I' may be a persona; use pronouns and attitude to identify them."],
      ["Form", "Stanzas, rhyme and line breaks shape pace and emphasis; endings often carry the main impression."],
    ]),
  ),
  lessonSpec(
    "lesson-5-2.ts", "lesson52", "5-2", "Imagery, Sound and Rhythm",
    "I CAN analyse a poem's imagery, symbolism, sound devices and rhythm and explain their effects.",
    ["KS3 Reading", "KS3 AO2"],
    [
      ["Imagery", "Language that creates sensory pictures in the reader's mind."],
      ["Personification", "Giving human qualities to non-human things."],
      ["Simile", "A comparison using 'like' or 'as'."],
      ["Alliteration", "Repeating initial consonant sounds in nearby words."],
      ["Rhyme", "Repetition of similar sounds, often at line endings."],
      ["Rhythm", "The pattern of stressed and unstressed syllables in a poem."],
    ],
    [
      CON({
        id: "el8-u5-imagery-symbolism", title: "Imagery and symbolism", skill: "Analyse how images and symbols create mood and meaning in a poem.",
        sections: [
          ["Sensory imagery", "Poets use sight, sound, smell, touch and taste to make scenes vivid. 'Diesel, rain and distant lights' appeals to smell, sound and sight, creating a tired urban night. Choose the most important images and explain their effect."],
          ["Personification and symbolism", "Personification gives human qualities to things: 'windows wear the city's sleep'. A symbol is an object that stands for an idea, such as 'a quiet rope' tying the dark to morning. Explain what the image suggests beyond its literal meaning."],
        ],
        formulas: [
          ["Imagery", "Language creating sensory or mental pictures."],
          ["Personification", "Human qualities given to non-human things."],
          ["Symbol", "An object or image representing a larger idea."],
        ],
        example: { problem: "What does 'windows wear the city's sleep' suggest?", solution: "The windows are personified as wearing sleep like clothing, suggesting the city is resting and the buildings hold the dreams of its people." },
        questions: [
          mcq({ id: "el8-u5-imagery-symbolism-q1", stem: "What is the main image in 'its windows wear the city's sleep'?", choices: [["a", "A literal bed inside a window"], ["b", "The city resting as if asleep"], ["c", "Windows made of glass"], ["d", "A dream about a bus"]], correct: "b", p: [P("technique", "Personification", "Human qualities are given to the city.")], r: "The windows 'wear' sleep, personifying the city as resting; the image suggests quiet and dreams.", ev: "wear the city's sleep", answer: "**(b)** The city resting as if asleep.", errors: ["Taking 'sleep' literally."] }),
          op({ id: "el8-u5-imagery-symbolism-q2", difficulty: "core", totalMarks: 2, extract: NIGHT_BUS, stem: "Identify two pieces of sensory imagery in the poem and name the sense each appeals to.", p: [P("technique", "Sensory imagery", "Images appeal to one or more senses.")], s: [st("'Diesel, rain and distant lights' appeals to smell, sound and sight.", 1, "AO2", { evidence: "diesel, rain and distant lights" }), st("'The shuttered baker' or 'sleeping rows of shops' creates a visual image of a quiet street.", 1, "AO2", { evidence: "sleeping rows of shops" })], a: "Diesel/rain/lights (smell, sound, sight) and sleeping shops (sight)." }),
          op({ id: "el8-u5-imagery-symbolism-q3", difficulty: "core", totalMarks: 3, extract: NIGHT_BUS, stem: "Explain the effect of the personification in 'its windows wear the city's sleep'.", p: [P("technique", "Personification", "Giving human qualities creates mood and meaning."), P("context", "Night and rest", "The image suggests the city is dormant.")], s: [st("The windows are given the human action of wearing.", 1, "AO2", { evidence: "wear" }), st("Sleep is presented as something the city puts on, making the city seem alive and resting.", 1, "AO2"), st("The image creates a quiet, dreamlike mood.", 1, "AO3")], a: "It makes the city seem alive yet asleep, creating a quiet, dreamlike atmosphere.", errors: ["Only identifying personification without effect."] }),
          op({ id: "el8-u5-imagery-symbolism-q4", difficulty: "challenge", totalMarks: 4, extract: NIGHT_BUS, stem: "Analyse the simile 'like photographs of someone's dreams'. What does it suggest about the windows and the city?", p: [P("technique", "Simile", "A comparison using 'like' creates a vivid image."), P("context", "Memory and dreams", "Photographs and dreams both preserve moments.")], s: [st("The simile compares the windows to photographs.", 1, "AO2", { evidence: "photographs" }), st("It suggests the windows hold or reflect the city's dreams.", 1, "AO2"), st("'Someone's dreams' implies many private lives inside the buildings.", 1, "AO2", { evidence: "someone's dreams" }), st("The image makes the night feel mysterious and human.", 1, "AO3")], a: "The windows become like photographs of dreams, suggesting they reflect private hopes and memories inside the sleeping city.", errors: ["Describing the comparison literally."] }),
          op({ id: "el8-u5-imagery-symbolism-q5", difficulty: "challenge", totalMarks: 6, extract: NIGHT_BUS, stem: "Analyse how imagery creates the mood of the night bus journey.", p: [P("technique", "Imagery", "Sensory and figurative images build atmosphere."), P("context", "Mood", "Images of sleep, darkness and movement create a quiet, reflective mood.")], s: [st("The bus 'hums a lullaby', making the journey sound soothing.", 1, "AO2", { evidence: "hums a lullaby" }), st("'Diesel, rain and distant lights' creates a tired urban atmosphere.", 1, "AO2", { evidence: "diesel, rain" }), st("Sleeping shops and a quiet street make the city seem dormant.", 1, "AO2", { evidence: "sleeping rows of shops" }), st("The final image of the driver 'blind with miles' suggests endless travel.", 1, "AO2", { evidence: "blind with miles" }), st("The mood is quiet, dreamlike and slightly lonely.", 1, "AO3"), st("The images work together to make the night feel suspended.", 1, "AO3")], l: lv6(), a: "The poem's imagery—lullaby hum, diesel and rain, sleeping shops, dreaming windows—creates a quiet, dreamlike mood of suspended night travel.", errors: ["Listing images without mood.", "Missing the final image."] }),
          op({ id: "el8-u5-imagery-symbolism-q6", difficulty: "challenge", totalMarks: 12, extract: NIGHT_BUS, stem: "Answer all parts of this question about the poem's imagery.", parts: [
            { label: "a", prompt: "Write down two images from the first stanza.", marks: 2 },
            { label: "b", prompt: "Explain how personification and simile are used.", marks: 4 },
            { label: "c", prompt: "Evaluate how effectively the imagery creates mood.", marks: 6 },
          ], p: [P("technique", "Figurative language", "Personification and simile create vivid meaning."), P("context", "Mood", "Imagery shapes the reader's emotional response.")], s: [
            st("'Hums a lullaby'.", 1, "AO1", { part: "a", evidence: "hums a lullaby" }),
            st("'Windows wear the city's sleep'.", 1, "AO1", { part: "a", evidence: "wear the city's sleep" }),
            st("Personification gives the bus a lullaby and windows sleep.", 1, "AO2", { part: "b", evidence: "hums a lullaby" }),
            st("It makes the city seem alive yet resting.", 1, "AO2", { part: "b" }),
            st("The simile compares windows to photographs of dreams.", 1, "AO2", { part: "b", evidence: "photographs" }),
            st("It suggests the windows reflect private hopes and memories.", 1, "AO2", { part: "b", evidence: "someone's dreams" }),
            st("The imagery is effective because it appeals to several senses.", 2, "AO3", { part: "c", evidence: "diesel, rain and distant lights" }),
            st("It creates a consistent dreamlike mood.", 2, "AO3", { part: "c" }),
            st("The final image of the driver 'blind with miles' adds a sense of endless journey.", 2, "AO2", { part: "c", evidence: "blind with miles" }),
          ], l: lv6("c"), a: "(a) 'Hums a lullaby'; 'windows wear the city's sleep'. (b) Personification makes the bus and city seem alive/resting; the simile suggests windows reflect dreams. (c) The imagery is effective because it appeals to several senses and creates a consistent dreamlike mood.", errors: ["Identifying devices without explaining mood.", "Ignoring the final image."] }),
        ],
      }),
      CON({
        id: "el8-u5-sound-rhythm", title: "Sound and rhythm", skill: "Analyse rhyme, alliteration, rhythm and line breaks and explain their effects.",
        sections: [
          ["Rhyme and alliteration", "Rhyme repeats similar sounds and can create music or emphasis. Alliteration repeats initial consonants, as in 'sleeping rows of shops' or 'shuttered baker'. These sounds can make lines memorable and set a mood."],
          ["Rhythm and line breaks", "Rhythm is the pattern of stressed and unstressed syllables. Regular rhythm can feel calm; broken or irregular rhythm can feel restless. Line breaks can pause the reader or create surprise. Read the poem aloud to hear its music."],
        ],
        formulas: [
          ["Rhyme", "Repetition of similar sounds, often at line endings."],
          ["Alliteration", "Repeated initial consonant sounds."],
          ["Enjambment", "A sentence running over a line break."],
        ],
        example: { problem: "What effect does 'sleeping rows of shops' have?", solution: "The repeated 's' sounds create alliteration, making the line soft and sleepy, matching the poem's quiet mood." },
        questions: [
          mcq({ id: "el8-u5-sound-rhythm-q1", stem: "What sound device is used in 'sleeping rows of shops'?", choices: [["a", "Rhyme"], ["b", "Alliteration"], ["c", "Simile"], ["d", "Onomatopoeia"]], correct: "b", p: [P("definition", "Alliteration", "Repeated initial consonant sounds.")], r: "'Sleeping rows of shops' repeats the 's' sound at the start of words, which is alliteration.", answer: "**(b)** Alliteration.", errors: ["Choosing rhyme because the words are close together."] }),
          op({ id: "el8-u5-sound-rhythm-q2", difficulty: "core", totalMarks: 2, extract: NIGHT_BUS, stem: "Give two examples of sound repetition in the poem.", p: [P("technique", "Sound devices", "Rhyme, alliteration and rhythm create music.")], s: [st("Alliteration: 'sleeping rows of shops'.", 1, "AO2", { evidence: "sleeping rows of shops" }), st("Rhyme or repeated sounds: 'lights'/'dreams' are not exact, but 'hums a lullaby' and 'diesel' create soft sounds.", 1, "AO2", { evidence: "hums a lullaby" })], a: "'Sleeping rows of shops' (alliteration) and the soft sounds in 'hums a lullaby'.", errors: ["Naming devices without examples."] }),
          op({ id: "el8-u5-sound-rhythm-q3", difficulty: "core", totalMarks: 3, extract: NIGHT_BUS, stem: "How does rhythm affect the poem's mood? Refer to two details.", p: [P("technique", "Rhythm", "Stress patterns create pace and mood."), P("context", "Night journey", "The poem's quiet rhythm matches its subject.")], s: [st("The lines have a steady, unhurried rhythm.", 1, "AO2"), st("The soft sounds of 'hums', 'sleep' and 'lullaby' create calm.", 1, "AO2"), st("The regular rhythm makes the night bus journey feel gentle and reflective.", 1, "AO3")], a: "The steady, soft rhythm creates a calm, sleepy mood that suits the night journey.", errors: ["Saying 'it has rhythm' without effect."] }),
          op({ id: "el8-u5-sound-rhythm-q4", difficulty: "challenge", totalMarks: 4, extract: NIGHT_BUS, stem: "Identify two sound devices and explain how each contributes to the poem's atmosphere.", p: [P("technique", "Sound devices", "Alliteration and rhythm shape mood."), P("context", "Atmosphere", "Soft sounds create quietness; repetition creates emphasis.")], s: [st("Alliteration in 'sleeping rows of shops' softens the line.", 1, "AO2", { evidence: "sleeping rows of shops" }), st("It echoes the quiet, dormant city.", 1, "AO2"), st("The gentle rhythm of the lines slows the reader's pace.", 1, "AO2"), st("The overall effect is calm, dreamlike and still.", 1, "AO3")], a: "Alliteration and gentle rhythm create a soft, quiet atmosphere that matches the sleeping city.", errors: ["Only identifying devices."] }),
          op({ id: "el8-u5-sound-rhythm-q5", difficulty: "challenge", totalMarks: 6, extract: NIGHT_BUS, stem: "Analyse how sound and rhythm work together in the poem. Refer to at least three examples.", p: [P("technique", "Sound and rhythm", "Devices combine to create musical and emotional effects."), P("context", "Poem's subject", "The night bus journey is quiet and reflective.")], s: [st("'Hums a lullaby' uses a soft verb and a soothing image.", 1, "AO2", { evidence: "hums a lullaby" }), st("'Sleep', 'sleeping' and 'dreams' repeat sleep-related sounds and ideas.", 1, "AO2", { evidence: "sleep" }), st("Alliteration in 'sleeping rows of shops' adds softness.", 1, "AO2", { evidence: "sleeping rows of shops" }), st("The steady line lengths create a calm rhythm.", 1, "AO2"), st("Together they make the journey feel quiet and dreamlike.", 1, "AO3"), st("The final 'blind with miles' slows the ending with a reflective image.", 1, "AO2", { evidence: "blind with miles" })], l: lv6(), a: "The poem uses soft verbs, repeated sleep imagery, alliteration and steady rhythm to create a quiet, dreamlike mood.", errors: ["Separating devices without linking them.", "Missing the ending."] }),
          op({ id: "el8-u5-sound-rhythm-q6", difficulty: "challenge", totalMarks: 12, extract: NIGHT_BUS, stem: "Answer all parts of this question about the poem's sound and rhythm.", parts: [
            { label: "a", prompt: "Identify two sound devices used in the poem.", marks: 2 },
            { label: "b", prompt: "Explain how rhythm affects the mood.", marks: 4 },
            { label: "c", prompt: "Evaluate how effectively sound supports the poem's meaning.", marks: 6 },
          ], p: [P("technique", "Sound devices", "Rhyme, alliteration and rhythm create music and mood."), P("context", "Meaning", "Sound can reinforce a poem's subject and feeling.")], s: [
            st("Alliteration: 'sleeping rows of shops'.", 1, "AO1", { part: "a", evidence: "sleeping rows of shops" }),
            st("Soft sound words such as 'hums' and 'sleep'.", 1, "AO1", { part: "a", evidence: "hums" }),
            st("The steady rhythm slows the reader's pace.", 1, "AO2", { part: "b" }),
            st("Soft sounds create calm and stillness.", 1, "AO2", { part: "b" }),
            st("The gentle music suits the night journey.", 1, "AO2", { part: "b" }),
            st("The rhythm makes the poem feel reflective rather than urgent.", 1, "AO3", { part: "b" }),
            st("Sound is effective because it reinforces the poem's quiet subject.", 2, "AO3", { part: "c", evidence: "hums a lullaby" }),
            st("Alliteration and sleep imagery create a consistent mood.", 2, "AO3", { part: "c" }),
            st("The calm rhythm makes the journey feel suspended and dreamlike.", 2, "AO3", { part: "c" }),
          ], l: lv6("c"), a: "(a) Alliteration and soft sound words. (b) The steady rhythm slows the reader and creates calm. (c) Sound is effective because it reinforces the quiet, dreamlike mood of the night journey.", errors: ["Identifying devices without effect.", "Ignoring rhythm."] }),
        ],
      }),
    ],
    N("el8-u5-sound-notes", "Imagery, sound and rhythm — notes", "Sensory images, personification and simile build mood; rhyme, alliteration and rhythm create music.", [
      ["Key idea", "Poets use images and sounds to make meaning felt as well as understood."],
      ["Imagery", "Personification and simile turn the city into something alive and dreamlike."],
      ["Sound", "Soft sounds, alliteration and steady rhythm match the poem's quiet night mood."],
    ]),
  ),
  lessonSpec(
    "lesson-5-3.ts", "lesson53", "5-3", "Comparing Poems",
    "I CAN compare two poems' ideas, voices and methods and evaluate which is more effective.",
    ["KS3 Reading", "KS3 AO2", "KS3 AO3"],
    [
      ["Comparison", "Identifying similarities and differences between two texts."],
      ["Theme", "The central idea or message of a poem."],
      ["Voice", "The distinctive tone and personality of a poem's speaker."],
      ["Contrast", "A difference that highlights meaning."],
      ["Effectiveness", "How well a poem achieves its purpose or creates an impact."],
      ["Linking words", "Phrases such as 'similarly', 'whereas' and 'in contrast' used in comparison."],
    ],
    [
      CON({
        id: "el8-u5-comparing-ideas", title: "Comparing ideas and voice", skill: "Compare what two poems are about and how their speakers feel.",
        sections: [
          ["Find the shared idea", "Both 'The Road North' and 'Leaving' are about departure and home. One focuses on a family journey; the other on a farewell at a station. Identify the shared theme before comparing differences."],
          ["Compare voices", "The speaker in 'The Road North' is reflective and hopeful, understanding that 'leaving can be coming home'. The speaker in 'Leaving' is more wistful, watching the fields pass and feeling words 'never say or quite have learned'. Compare tone, not just topic."],
        ],
        formulas: [
          ["Theme", "The central idea or message of a poem."],
          ["Voice", "The speaker's tone and attitude."],
          ["Contrast", "A difference that highlights meaning."],
        ],
        example: { problem: "How are the speakers' feelings about leaving different?", solution: "The Road North speaker feels hopeful and reflective, seeing leaving as a form of homecoming. The Leaving speaker feels wistful and uncertain, watching the landscape pass." },
        questions: [
          mcq({ id: "el8-u5-comparing-ideas-q1", stem: "What do both poems mainly explore?", choices: [["a", "The beauty of trains"], ["b", "Leaving home and the feelings it creates"], ["c", "A holiday at the seaside"], ["d", "The weather in different seasons"]], correct: "b", p: [P("context", "Theme", "Both poems are about departure and home.")], r: "Both poems focus on leaving and what it means for the speaker.", answer: "**(b)** Leaving home and its feelings.", errors: ["Choosing (a): trains appear but are not the theme."] }),
          op({ id: "el8-u5-comparing-ideas-q2", difficulty: "core", totalMarks: 2, extract: ROAD_NORTH, stem: "Give two details from 'The Road North' that show the journey is beginning.", p: [P("skill", "Close reading", "Use evidence to identify a poem's situation."), P("context", "Departure", "The poem describes leaving at first light.")], s: [st("They leave at first light.", 1, "AO1", { evidence: "first light" }), st("The map is folded and the brother counts poles.", 1, "AO1", { evidence: "map folded" })], a: "Leaving at first light and preparing the map show the journey is starting." }),
          op({ id: "el8-u5-comparing-ideas-q3", difficulty: "core", totalMarks: 3, stem: "Compare the tone of the two speakers. Use one detail from each poem.", p: [P("technique", "Tone comparison", "Compare attitudes using evidence."), P("context", "Departure", "Both poems are about leaving but feel different.")], s: [st("The Road North speaker is hopeful ('leaving can be coming home').", 1, "AO1"), st("The Leaving speaker is wistful ('never say or quite have learned').", 1, "AO1"), st("The first feels resolved; the second feels uncertain and reflective.", 1, "AO3")], a: "The Road North speaker is hopeful; the Leaving speaker is wistful and uncertain.", errors: ["Only describing one poem."] }),
          op({ id: "el8-u5-comparing-ideas-q4", difficulty: "challenge", totalMarks: 4, stem: "How do the two poems treat the idea of 'home' differently? Refer to both poems.", p: [P("context", "Theme", "Home can mean place, family or belonging."), P("technique", "Contrast", "Different treatments create different meanings.")], s: [st("In The Road North, home is a starting point that is left behind.", 1, "AO1"), st("In Leaving, home is what is watched recede from the train window.", 1, "AO1"), st("The Road North suggests home can travel with you.", 1, "AO3"), st("Leaving suggests home is fixed and becoming distant.", 1, "AO3")], a: "The Road North treats home as something that can accompany the traveller; Leaving treats it as a fixed place being left behind.", errors: ["Saying both are about home without contrast."] }),
          op({ id: "el8-u5-comparing-ideas-q5", difficulty: "challenge", totalMarks: 6, stem: "Compare the speakers' emotional responses to departure in the two poems.", p: [P("skill", "Comparing voice", "Link tone to emotional effect."), P("context", "Departure", "Both poems explore leaving but with different feelings.")], s: [st("The Road North speaker feels hopeful and understanding.", 2, "AO2"), st("The Leaving speaker feels wistful and uncertain.", 2, "AO2"), st("The first poem resolves the emotion; the second leaves it open.", 1, "AO3"), st("Both use imagery to make the emotion felt.", 1, "AO2")], l: lv6(), a: "The Road North speaker feels hopeful, seeing leaving as coming home; the Leaving speaker feels wistful and unresolved, watching fields pass.", errors: ["Treating both speakers as identical.", "Ignoring endings."] }),
          op({ id: "el8-u5-comparing-ideas-q6", difficulty: "challenge", totalMarks: 12, stem: "Answer all parts of this question comparing the two poems.", parts: [
            { label: "a", prompt: "What is the shared theme? Give one clue from each poem.", marks: 2 },
            { label: "b", prompt: "Compare the speakers' attitudes to leaving.", marks: 4 },
            { label: "c", prompt: "Evaluate which poem more effectively conveys the emotion of departure.", marks: 6 },
          ], extract: ROAD_NORTH, p: [P("context", "Comparing poems", "Compare ideas, voices and effects."), P("technique", "Theme and tone", "Shared themes can be treated with different attitudes.")], s: [
            st("Shared theme: leaving home.", 1, "AO1", { part: "a", evidence: "We leave at first light" }),
            st("Leaving also shows departure from a platform.", 1, "AO1", { part: "a", evidence: "The platform empties" }),
            st("The Road North speaker is hopeful and reflective.", 1, "AO2", { part: "b", evidence: "leaving can be coming home" }),
            st("The Leaving speaker is wistful and uncertain.", 1, "AO2", { part: "b", evidence: "never say or quite have learned" }),
            st("The first poem resolves the feeling; the second leaves it open.", 1, "AO3", { part: "b" }),
            st("Both use journey imagery but to different ends.", 1, "AO3", { part: "b" }),
            st("The Road North is effective because its ending offers insight.", 2, "AO3", { part: "c", evidence: "coming home" }),
            st("Leaving is effective because its unresolved tone mirrors uncertainty.", 2, "AO3", { part: "c", evidence: "never say" }),
            st("Judgement depends on whether the reader values resolution or ambiguity.", 2, "AO4", { part: "c" }),
          ], l: lv6("c"), a: "(a) Leaving home; clues include 'We leave' and 'The platform empties'. (b) The Road North speaker is hopeful; the Leaving speaker is wistful. (c) Either poem can be effective: The Road North offers resolution, while Leaving captures uncertainty.", errors: ["Forcing one poem to 'win' without criteria.", "Only comparing topics."] }),
        ],
      }),
      CON({
        id: "el8-u5-comparing-methods", title: "Comparing methods", skill: "Compare imagery, structure and sound in two poems and evaluate their effects.",
        sections: [
          ["Compare methods", "Look at imagery, structure, sound and endings. 'The Road North' uses a journey through landscape; 'Leaving' uses a train window and precise, quiet images. Compare how each method suits its emotion."],
          ["Evaluate effectiveness", "A poem is effective when its methods match its purpose. 'The Road North' builds to an understanding; 'Leaving' ends with a delicate image of unspoken words. Judge which method best creates the intended feeling."],
        ],
        formulas: [
          ["Imagery", "Language creating sensory or mental pictures."],
          ["Structure", "The organisation and development of a poem."],
          ["Effectiveness", "How well methods achieve the poem's purpose."],
        ],
        example: { problem: "How do the endings differ in method?", solution: "The Road North ends with a clear insight ('leaving can be coming home'); Leaving ends with a quieter image of words 'never say or quite have learned'." },
        questions: [
          mcq({ id: "el8-u5-comparing-methods-q1", stem: "Which poetic device appears in 'as if the air were hands of light'?", choices: [["a", "Simile"], ["b", "Rhyme"], ["c", "Alliteration"], ["d", "Onomatopoeia"]], correct: "a", p: [P("definition", "Simile", "A comparison using 'like' or 'as'.")], r: "The phrase uses 'as if' to compare the air to hands of light, which is a simile.", answer: "**(a)** Simile.", errors: ["Choosing alliteration because of repeated sounds."] }),
          op({ id: "el8-u5-comparing-methods-q2", difficulty: "core", totalMarks: 2, extract: ROAD_NORTH, stem: "Give two examples of imagery from 'The Road North'.", p: [P("technique", "Imagery", "Sensory and figurative images create meaning.")], s: [st("'The kettle singing' gives sound to the morning.", 1, "AO1", { evidence: "kettle singing" }), st("'Birds that flash and dip and rise' creates a visual image.", 1, "AO1", { evidence: "flash and dip and rise" })], a: "'Kettle singing' and 'birds that flash and dip and rise'." }),
          op({ id: "el8-u5-comparing-methods-q3", difficulty: "core", totalMarks: 3, stem: "Compare the structure of the two poems. Use one detail from each.", p: [P("technique", "Structure", "Compare how poems are organised."), P("context", "Journey and farewell", "Different structures suit different emotions.")], s: [st("The Road North moves through landscape from morning to noon.", 1, "AO1"), st("Leaving stays focused on the platform and train window.", 1, "AO1"), st("The first builds to an insight; the second ends with a quiet image.", 1, "AO3")], a: "The Road North develops through the journey; Leaving is more concentrated on the farewell moment.", errors: ["Only describing one poem's structure."] }),
          op({ id: "el8-u5-comparing-methods-q4", difficulty: "challenge", totalMarks: 4, stem: "How do the endings differ in effect? Refer to both poems.", p: [P("technique", "Ending", "The final lines often carry the poem's main impression."), P("context", "Departure", "Endings can resolve or leave emotion open.")], s: [st("The Road North ends with a clear insight: leaving can be coming home.", 1, "AO1"), st("Leaving ends with a delicate image of words 'never say or quite have learned'.", 1, "AO1"), st("The first ending feels resolved; the second feels unresolved.", 1, "AO3"), st("Both endings are memorable but achieve different effects.", 1, "AO3")], a: "The Road North ending is clear and hopeful; Leaving ending is subtle and unresolved.", errors: ["Quoting endings without comparing effect."] }),
          op({ id: "el8-u5-comparing-methods-q5", difficulty: "challenge", totalMarks: 6, stem: "Compare how imagery is used in the two poems to create mood.", p: [P("technique", "Imagery comparison", "Compare how images create mood."), P("context", "Departure", "Both poems use journey images but differently.")], s: [st("The Road North uses bright, moving images of fields and birds.", 2, "AO2"), st("Leaving uses quieter, stiller images of the platform and glass.", 2, "AO2"), st("The first creates energy and hope; the second creates stillness and longing.", 1, "AO3"), st("Both make the journey felt through concrete detail.", 1, "AO2")], l: lv6(), a: "The Road North uses lively landscape imagery for hope; Leaving uses quiet, reflective imagery for longing.", errors: ["Listing images without mood.", "Ignoring contrast."] }),
          op({ id: "el8-u5-comparing-methods-q6", difficulty: "challenge", totalMarks: 12, stem: "Answer all parts of this question comparing the poems' methods.", parts: [
            { label: "a", prompt: "Identify one poetic device used in each poem.", marks: 2 },
            { label: "b", prompt: "Compare the use of imagery and structure.", marks: 4 },
            { label: "c", prompt: "Evaluate which poem's methods are more effective for its theme.", marks: 6 },
          ], p: [P("technique", "Poetic methods", "Compare imagery, structure and sound."), P("context", "Theme", "Methods should suit the poem's purpose.")], s: [
            st("The Road North uses simile ('as if the air were hands of light').", 1, "AO1", { part: "a" }),
            st("Leaving uses imagery of fields as 'a paragraph turned'.", 1, "AO1", { part: "a" }),
            st("The Road North develops through the landscape.", 1, "AO2", { part: "b" }),
            st("Leaving focuses on the platform and train window.", 1, "AO2", { part: "b" }),
            st("The first uses brighter, moving imagery; the second quieter, stiller images.", 1, "AO2", { part: "b" }),
            st("The structures reflect their emotions: journey versus farewell.", 1, "AO3", { part: "b" }),
            st("The Road North is effective because its methods build to insight.", 2, "AO3", { part: "c" }),
            st("Leaving is effective because its quiet methods mirror uncertainty.", 2, "AO3", { part: "c" }),
            st("Effectiveness depends on whether the reader values resolution or ambiguity.", 2, "AO4", { part: "c" }),
          ], l: lv6("c"), a: "(a) Simile in The Road North; metaphor/imagery in Leaving. (b) The Road North develops through landscape; Leaving focuses on farewell. (c) Both are effective: one resolves, the other leaves emotion open.", errors: ["Comparing only content.", "Ignoring structure."] }),
        ],
      }),
    ],
    N("el8-u5-comparing-notes", "Comparing poems — notes", "Compare theme, voice, imagery, structure and sound; judge effectiveness by fit to purpose.", [
      ["Key idea", "Comparison needs similarities and differences linked to effect."],
      ["Ideas and voice", "Both poems explore leaving, but one is hopeful and the other wistful."],
      ["Methods", "Imagery, structure and endings should match the poem's emotion."],
    ]),
  ),
];
