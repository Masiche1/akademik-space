import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const LONDON: TextExtract = {
  title: "London",
  author: "William Blake",
  source: "Songs of Experience (1794)",
  lineNumbers: true,
  text: "I wander thro' each charter'd street,\nNear where the charter'd Thames does flow.\nAnd mark in every face I meet\nMarks of weakness, marks of woe.\n\nIn every cry of every Man,\nIn every Infants cry of fear,\nIn every voice: in every ban,\nThe mind-forg'd manacles I hear.\n\nHow the Chimney-sweepers cry\nEvery black'ning Church appalls,\nAnd the hapless Soldiers sigh\nRuns in blood down Palace walls.\n\nBut most thro' midnight streets I hear\nHow the youthful Harlots curse\nBlasts the new-born Infants tear\nAnd blights with plagues the Marriage hearse.",
};

const EAGLE: TextExtract = {
  title: "The Eagle",
  author: "Alfred, Lord Tennyson",
  source: "Poems (1851)",
  lineNumbers: true,
  text: "He clasps the crag with crooked hands;\nClose to the sun in lonely lands,\nRing'd with the azure world, he stands.\n\nThe wrinkled sea beneath him crawls;\nHe watches from his mountain walls,\nAnd like a thunderbolt he falls.",
};

const LANG_Q3: MarkLevel[] = [
  { level: "Level 3", marks: "5-6", descriptor: "Clear, developed analysis of the poet's language with well-chosen evidence and relevant terminology." },
  { level: "Level 2", marks: "3-4", descriptor: "Some understanding of language choices; some relevant references; effects partly explained." },
  { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment; features spotted without effects." },
];

const bands = (part: string, top: number): MarkLevel[] => {
  const step = Math.floor(top / 5);
  return [
    { part, level: "Level 5", marks: `${top - step + 1}-${top}`, descriptor: "Perceptive, discriminating analysis; assured use of terminology; judicious, integrated evidence." },
    { part, level: "Level 4", marks: `${top - 2 * step + 1}-${top - step}`, descriptor: "Thorough analysis with well-chosen evidence and effective terminology." },
    { part, level: "Level 3", marks: `${top - 3 * step + 1}-${top - 2 * step}`, descriptor: "Clear, relevant analysis with relevant evidence and some terminology." },
    { part, level: "Level 2", marks: `${top - 4 * step + 1}-${top - 3 * step}`, descriptor: "Some understanding and some relevant references; analysis partial." },
    { part, level: "Level 1", marks: `1-${top - 4 * step}`, descriptor: "Simple, limited comment; feature-spotting or paraphrase." },
  ];
};

export const lesson31: Lesson = {
  id: "el10-u3-lesson-3-1",
  code: "3-1",
  title: "Reading Poetry",
  goal: "I CAN analyse how poets use language, form and structure to convey meaning and create effects.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2"],
  vocabulary: [
    { term: "Imagery", definition: "Descriptive language that creates pictures or sensory impressions in the reader's mind." },
    { term: "Repetition", definition: "Using the same word or phrase more than once for emphasis." },
    { term: "Stanza", definition: "A group of lines in a poem, like a paragraph in prose." },
    { term: "Rhyme scheme", definition: "The pattern of rhymes at the ends of lines, for example AABB or ABAB." },
    { term: "Tercet", definition: "A stanza of three lines." },
    { term: "Enjambment", definition: "When a sentence runs over the end of a line without punctuation." },
    { term: "Tone", definition: "The poet's attitude, such as angry, admiring or sorrowful." },
  ],
  concepts: [
    {
      id: "el10-u3-poetry-language",
      title: "Language in poetry",
      skill: "Analyse a poet's word choice, imagery and repetition and explain their effects.",
      lesson: {
        sections: [
          {
            heading: "Reading a poem closely",
            body: "Read the poem twice. First for meaning: who is speaking, where, and what do they feel? Then for method. Poets choose each word carefully, so a single adjective or verb can carry a great deal. Always connect a feature to its effect on the reader and to the poem's message.",
          },
          {
            heading: "Word choice, imagery and repetition",
            body: "In Blake's ‘London’, the repetition of ‘charter'd’ (meaning mapped, owned and regulated) suggests that even the river and streets are controlled by commercial power. The repeated ‘every’ in stanza two (‘In every cry of every Man, / In every Infants cry of fear’) creates a relentless, overwhelming sense of suffering. The metaphor ‘mind-forg'd manacles’ presents people as imprisoned by their own beliefs, an image of invisible chains.",
          },
          {
            heading: "Sound and tone",
            body: "Notice sound devices too. The harsh sounds of ‘Marks of weakness, marks of woe’ and the repetition of ‘marks’ make the line grim and insistent. Blake's tone is angry and compassionate: he sees suffering everywhere and will not look away. Always use a precise word to describe tone, not just ‘sad’.",
          },
        ],
        keyFormulas: [
          { name: "Repetition", statement: "Repeated words such as ‘every’ and ‘charter'd’ create emphasis, rhythm and a sense of being trapped." },
          { name: "Metaphor", statement: "‘Mind-forg'd manacles’: chains that are mental, not physical, suggesting people are controlled by ideas." },
          { name: "Verbs of perception", statement: "‘Mark’ and ‘hear’ show the speaker as a witness who cannot ignore what he sees." },
        ],
        workedExample: {
          problem: "How does Blake use language to present London in the first stanza of ‘London’?",
          solution: "Blake presents London as a controlled, joyless place. The repetition of ‘charter'd’ for both ‘street’ and ‘Thames’ suggests that even nature and public space have been owned and regulated, so freedom is lost. The speaker ‘wander[s]’, a verb of aimlessness that makes him an observer, and he ‘mark[s]’ faces, a pun that links looking with the repeated noun ‘marks’. The harsh alliteration of ‘weakness... woe’ gives the line a heavy, mournful tone, so the reader sees a city defined by misery.",
        },
      },
      questions: [
        {
          id: "el10-u3-poetry-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LONDON,
          stem: "What does the repetition of ‘every’ in lines 5 to 7 mainly suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That suffering is widespread and inescapable" },
              { id: "b", text: "That the speaker is counting people" },
              { id: "c", text: "That the speaker feels cheerful" },
              { id: "d", text: "That the city is very large and beautiful" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Repetition", statement: "Repeated words emphasise scale and insistence." }],
            steps: [{ reasoning: "‘Every’ repeated shows no one escapes suffering.", evidence: "In every cry of every Man", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** The suffering is everywhere.",
            commonErrors: ["Choosing (b), a literal reading that ignores effect."],
          },
        },
        {
          id: "el10-u3-poetry-language-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LONDON,
          stem: "Explain the effect of the phrase ‘mind-forg'd manacles’ in line 8.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "A metaphor suggests one thing is another to create an idea." }],
            steps: [
              { reasoning: "‘Manacles’ are chains, suggesting imprisonment.", evidence: "manacles", marks: 1, markCode: "AO2" },
              { reasoning: "‘Mind-forg'd’ implies people have created the chains in their own thinking, so they are controlled by ideas or fear.", evidence: "mind-forg'd", marks: 1, markCode: "AO2" },
              { reasoning: "The speaker's anger and pity come through; he ‘hears’ them, showing how pervasive the oppression is.", evidence: "I hear", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The metaphor presents people as imprisoned by invisible chains of their own making, conveying the speaker's anger at mental oppression.",
            commonErrors: ["Saying people are literally in chains."],
          },
        },
        {
          id: "el10-u3-poetry-language-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: LONDON,
          stem: "How does Blake use language in stanza three (lines 9 to 12) to present the effects of power and suffering in London?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery", statement: "Vivid images of blackened churches and blood-stained walls convey social criticism." },
              { kind: "context", name: "Industrial London", statement: "Child chimney-sweeps and soldiers were exploited by Church, state and monarchy." },
            ],
            steps: [
              { reasoning: "‘Black'ning Church’ suggests moral corruption as well as soot; the Church is ‘appalled’ yet complicit.", evidence: "black'ning Church appalls", marks: 2, markCode: "AO2" },
              { reasoning: "‘Hapless Soldiers’ sigh: weak, unlucky victims; the sigh is quiet resistance.", evidence: "hapless Soldiers sigh", marks: 2, markCode: "AO2" },
              { reasoning: "The violent image of blood running down ‘Palace walls’ links the monarchy with guilt for those who suffer.", evidence: "Runs in blood down Palace walls", marks: 2, markCode: "AO2" },
            ],
            levels: LANG_Q3,
            finalAnswer: "Blake blames institutions: the Church is blackened by corruption, soldiers are ‘hapless’ victims, and blood runs down the Palace walls, an image that accuses the powerful of responsibility.",
            commonErrors: ["Translating the stanza without analysing words.", "Ignoring the context of exploited sweeps."],
          },
        },
        {
          id: "el10-u3-poetry-language-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: LONDON,
          stem: "Read ‘London’ by William Blake and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two things the speaker hears in stanza two.", marks: 2 },
            { label: "b", prompt: "Explain what the repeated word ‘charter'd’ suggests about London.", marks: 3 },
            { label: "c", prompt: "How does Blake use imagery in stanza four to present the effects of poverty and prostitution?", marks: 5 },
            { label: "d", prompt: "How does Blake use language to convey his feelings about London? Support your answer with detailed reference to the poem.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery and repetition", statement: "Vivid images and repeated words convey the speaker's anger and compassion." },
              { kind: "context", name: "Blake and reform", statement: "Blake criticised social injustice in industrial London." },
            ],
            steps: [
              { part: "a", reasoning: "The cry of every man.", evidence: "In every cry of every Man", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Infants' cries of fear (or voices and bans).", evidence: "Infants cry of fear", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "‘Charter'd’ suggests mapped and controlled, so everything is owned or regulated.", evidence: "charter'd street", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Its repetition links the streets and the river, showing nothing is free.", evidence: "the charter'd Thames", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The tone is bitter: commerce has taken over freedom.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "‘Midnight streets’ suggests darkness and moral danger.", evidence: "midnight streets", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "‘Youthful Harlots curse’ shows young women driven to desperation, and their curse is a cry of anger.", evidence: "youthful Harlots curse", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "‘Blasts’ and ‘blights’ are violent verbs of destruction.", evidence: "Blasts... blights", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "‘Marriage hearse’ merges a wedding with death, so love is poisoned.", evidence: "Marriage hearse", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Repetition of ‘charter'd’ and ‘marks’ establishes control and misery.", evidence: "marks of weakness, marks of woe", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Repeated ‘every’ presents suffering as universal and inescapable.", evidence: "In every voice: in every ban", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Metaphor ‘mind-forg'd manacles’ blames people's own acceptance and fear.", evidence: "mind-forg'd manacles", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Imagery of church, soldier and palace accuses institutions.", evidence: "blood down Palace walls", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Violent verbs and oxymoron ‘Marriage hearse’ end the poem with despair and anger.", evidence: "blights with plagues the Marriage hearse", marks: 3, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5", descriptor: "Clear, developed analysis of imagery with well-chosen evidence." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some analysis with some evidence." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
              ...bands("d", 15),
            ],
            finalAnswer: "(a) The cry of every man; the infant's cry of fear. (b) ‘Charter'd’ suggests that streets and river are mapped, owned and controlled. (c) Midnight darkness, the cursing young women, violent verbs ‘blasts’ and ‘blights’ and the oxymoron ‘Marriage hearse’ present love and innocence as destroyed. (d) Blake uses repetition, metaphor, institutional imagery and violent verbs to convey anger, pity and condemnation of a controlled, suffering city.",
            commonErrors: ["Retelling each stanza.", "Technique-spotting without effect.", "Ignoring tone."],
          },
        },
      ],
    },
    {
      id: "el10-u3-poetry-form-structure",
      title: "Form and structure in poetry",
      skill: "Explain how a poem's stanzas, rhyme, rhythm and shifts shape its meaning.",
      lesson: {
        sections: [
          {
            heading: "What form and structure mean",
            body: "**Form** is the poem's shape: stanza length, rhyme scheme and rhythm. **Structure** is how it moves: where it begins, shifts and ends. Both shape meaning. In Tennyson's ‘The Eagle’, two tercets (three-line stanzas) each rhyme on a single sound (AAA, BBB), giving a compact, controlled shape that echoes the eagle's power and stillness.",
          },
          {
            heading: "Rhyme, rhythm and punctuation",
            body: "The triple rhyme of ‘hands... lands... stands’ creates a firm, unbroken sound as the eagle clasps the crag. In stanza two, ‘crawls... walls... falls’ continues the pattern, but the last line ‘And like a thunderbolt he falls’ ends the poem with a sudden, fast drop. The semicolons in lines 1 and 4 and the full stop at the end of each tercet mark pauses before action.",
          },
          {
            heading: "Shifts and endings",
            body: "Look for the **turn**. The first stanza shows the eagle at rest, high in the sun; the second shows the distant sea and then his dive. The simile ‘like a thunderbolt’ comes last for maximum impact. When you analyse structure, comment on the order of ideas and why the poet might end where they do.",
          },
        ],
        keyFormulas: [
          { name: "Tercet", statement: "A three-line stanza; here each tercet has a single rhyme (AAA, BBB)." },
          { name: "Shift", statement: "A change of focus or mood, for example from stillness to sudden movement." },
          { name: "End-stopped lines", statement: "A pause at the line end slows the pace; enjambment speeds it up." },
          { name: "Closing line", statement: "The last line often carries the poem's key image or meaning." },
        ],
        workedExample: {
          problem: "How does Tennyson use structure in ‘The Eagle’?",
          solution: "Tennyson divides the poem into two three-line stanzas, each tightly rhymed. Stanza one presents the eagle's position: he ‘clasps the crag’ and stands ‘close to the sun’, a pose of power and stillness. Stanza two moves to what he sees, the ‘wrinkled sea’ far below, and then ends with his sudden dive, ‘like a thunderbolt he falls’. The shift from stillness to speed makes the final line dramatic, and its placement last leaves the reader with an image of lightning force.",
        },
      },
      questions: [
        {
          id: "el10-u3-poetry-form-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EAGLE,
          stem: "How many lines are there in each stanza of ‘The Eagle’?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two" },
              { id: "b", text: "Three" },
              { id: "c", text: "Four" },
              { id: "d", text: "Six" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Tercet", statement: "A stanza of three lines." }],
            steps: [{ reasoning: "Each stanza has three lines; the poem has six in total.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Three, so each stanza is a tercet.",
            commonErrors: ["Choosing six, the total number of lines."],
          },
        },
        {
          id: "el10-u3-poetry-form-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EAGLE,
          stem: "Explain the effect of the rhyme in lines 1 to 3 of ‘The Eagle’.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhyme", statement: "A repeated end sound creates unity and emphasis." }],
            steps: [
              { reasoning: "All three lines end with the same sound.", evidence: "hands... lands... stands", marks: 1, markCode: "AO2" },
              { reasoning: "The firm repeated sound gives a sense of strength and stability.", marks: 1, markCode: "AO2" },
              { reasoning: "This suits the eagle's solid, unmoving pose and the poem's compact feel.", evidence: "he stands", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The triple rhyme gives a firm, unified sound, reflecting the eagle's steady, powerful stance.",
            commonErrors: ["Stating that the lines rhyme with no effect."],
          },
        },
        {
          id: "el10-u3-poetry-form-structure-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: EAGLE,
          stem: "How does Tennyson use structure in the poem to create drama? Refer to the shift between the two stanzas.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Structural shift", statement: "A change of focus or pace creates drama." }],
            steps: [
              { reasoning: "Stanza one shows the eagle still and high above the world.", evidence: "Close to the sun in lonely lands", marks: 2, markCode: "AO2" },
              { reasoning: "Stanza two shifts to the sea far below, widening the perspective before the action.", evidence: "The wrinkled sea beneath him crawls", marks: 2, markCode: "AO2" },
              { reasoning: "The sudden simile in the final line breaks the stillness and leaves the strongest impression.", evidence: "like a thunderbolt he falls", marks: 2, markCode: "AO2" },
            ],
            levels: LANG_Q3,
            finalAnswer: "The poem moves from the eagle's stillness to his sudden dive, and ends on the thunderbolt simile for maximum drama.",
            commonErrors: ["Describing the eagle with no structural comment."],
          },
        },
        {
          id: "el10-u3-poetry-form-structure-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: EAGLE,
          stem: "Read ‘The Eagle’ by Alfred, Lord Tennyson and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two ways in which the poet describes the eagle's position in stanza one.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the word ‘crawls’ in line 4.", marks: 3 },
            { label: "c", prompt: "How does the poet use form to reinforce the eagle's power?", marks: 5 },
            { label: "d", prompt: "How does Tennyson use language and structure to present the eagle? Support your answer with detailed reference to the poem.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Perspective", statement: "The sea seen from above makes the eagle seem lofty and dominant." },
              { kind: "convention", name: "Form", statement: "Tercets with a single rhyme create compactness and control." },
            ],
            steps: [
              { part: "a", reasoning: "He is high on a crag.", evidence: "clasps the crag", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He is close to the sun, in lonely lands.", evidence: "Close to the sun in lonely lands", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "‘Crawls’ suggests the sea moves slowly and weakly from above.", evidence: "crawls", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Personification makes the sea creature-like, making the eagle seem dominant.", evidence: "The wrinkled sea beneath him crawls", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The viewpoint from far above makes the distance feel vast.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Two compact tercets feel controlled, like the eagle.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "A single rhyme in each stanza gives firmness and unity.", evidence: "hands... lands... stands", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final line breaks the stillness; its position gives the dive force.", evidence: "he falls", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Verbs such as ‘clasps’ and ‘watches’ give the eagle human control and purpose.", evidence: "clasps the crag", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Metaphor ‘mountain walls’ and ‘crooked hands’ present the eagle as a king in a fortress.", evidence: "mountain walls", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Setting emphasises isolation and height.", evidence: "lonely lands", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Structural shift from stillness to action builds drama.", evidence: "he watches", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The thunderbolt simile ends the poem with speed and danger.", evidence: "like a thunderbolt he falls", marks: 3, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5", descriptor: "Clear, developed analysis of form with well-chosen evidence." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some comment on form with some evidence." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
              ...bands("d", 15),
            ],
            finalAnswer: "(a) On a crag; close to the sun in lonely lands. (b) ‘Crawls’ makes the sea seem slow and small from the eagle's height. (c) Compact tercets with single rhymes feel controlled, and the dive ends the poem. (d) Tennyson presents the eagle as a powerful, regal predator through strong verbs, a fortress metaphor, isolation, and a structure that moves from stillness to a thunderbolt dive.",
            commonErrors: ["Describing the eagle without analysis.", "Ignoring structure in (d)."],
          },
        },
      ],
    },
  ],
};
