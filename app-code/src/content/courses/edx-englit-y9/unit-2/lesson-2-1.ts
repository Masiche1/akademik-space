import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string, top: 6 | 12, part?: string): MarkLevel[] => {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : ["10-12", "8-9", "5-7", "3-4", "1-2"];
  const text = top === 6
    ? [`Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.`, `Clear, relevant ${focus}, with appropriate references and some analysis.`, `Simple, limited ${focus}, with few references and mostly description.`]
    : [`Perceptive, discriminating ${focus}; precise, well-chosen references and assured use of terminology.`, `Thorough ${focus}; well-chosen references with developed analysis of effects.`, `Clear, relevant ${focus}; appropriate references with some analysis.`, `Some understanding; ${focus} is partly relevant with some references.`, `Simple, limited ${focus}; few references, mostly description.`];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", ...(part ? { part } : {}) }));
};

const DAFFODILS: TextExtract = {
  title: "I wandered lonely as a cloud (extract)",
  author: "William Wordsworth",
  source: "Poems, in Two Volumes (1807)",
  lineNumbers: true,
  text: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.\n\nThe waves beside them danced; but they\nOut-did the sparkling waves in glee:\nA poet could not but be gay,\nIn such a jocund company:\nI gazed\u2014and gazed\u2014but little thought\nWhat wealth the show to me had brought:",
};

const DUCHESS: TextExtract = {
  title: "My Last Duchess (opening)",
  author: "Robert Browning",
  source: "Dramatic Lyrics (1842)",
  lineNumbers: true,
  text: "That's my last Duchess painted on the wall,\nLooking as if she were alive. I call\nThat piece a wonder, now: Fra Pandolf's hands\nWorked busily a day, and there she stands.\nWill't please you sit and look at her? I said\n\"Fra Pandolf\" by design, for never read\nStrangers like you that pictured countenance,\nThe depth and passion of its earnest glance,\nBut to myself they turned (since none puts by\nThe curtain I have drawn for you, but I)",
};

export const lesson21: Lesson = {
  id: "et9-u2-lesson-2-1",
  code: "2-1",
  title: "Romantic and Victorian Poetry",
  goal: "I CAN analyse how Romantic poets present nature and how Victorian poets use the dramatic monologue to reveal character.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Romantic", definition: "A literary movement of about 1780-1830 that valued emotion, imagination, individual experience and the beauty and power of nature." },
    { term: "Dramatic monologue", definition: "A poem in which a speaker, who is not the poet, addresses a listener and unintentionally reveals their own character." },
    { term: "Enjambment", definition: "When a sentence runs on from one line of poetry to the next without a pause." },
    { term: "Iambic pentameter", definition: "A line of ten syllables in five unstressed-stressed pairs, close to natural speech." },
    { term: "Couplet", definition: "Two consecutive lines of verse that rhyme." },
    { term: "Jocund", definition: "Cheerful and lively (an old-fashioned word)." },
    { term: "Irony", definition: "A gap between what is said and what is meant or understood." },
  ],
  concepts: [
    {
      id: "et9-u2-romantic-nature",
      title: "Romantic poetry and nature",
      skill: "Analyse how Romantic poets use imagery, sound and structure to present the power of nature.",
      lesson: {
        sections: [
          {
            heading: "What Romantic poets valued",
            body: "The Romantic poets reacted against the factories and cities of the Industrial Revolution. They celebrated **nature**, **feeling**, **imagination** and **the individual**. Nature is often a source of joy or spiritual renewal, and sometimes of awe and fear. Poets like Wordsworth wrote in plain language about ordinary experience, but turned moments of nature into lasting emotional memories.",
          },
          {
            heading: "How the poem works",
            body: "Look for how the speaker **changes** from the first line to the last. In 'I wandered lonely as a cloud' the speaker begins in isolation ('lonely') and finds joy in a crowd of daffodils. Notice the **personification** (daffodils 'dancing'), the **simile** that opens the poem, the regular **ababcc** rhyme scheme which gives a musical, joyful rhythm, and the way the final lines look forward to memory and its 'wealth'.",
          },
        ],
        keyFormulas: [
          { name: "Personification of nature", statement: "Giving nature human actions such as dancing, to show joy and life." },
          { name: "Simile", statement: "A comparison using 'like' or 'as', for example lonely 'as a cloud'." },
          { name: "Rhyme scheme", statement: "The pattern of end-rhymes; a regular pattern can create harmony and flow." },
        ],
        workedExample: {
          problem: "How does Wordsworth present the daffodils in the first stanza?",
          solution: "Wordsworth presents the daffodils as lively and joyful. They are 'golden', a colour associated with wealth and sunlight, which makes them seem precious. The verbs 'Fluttering and dancing' personify the flowers as if they were people at a party, creating a sense of energy and celebration. The word 'host' suggests a vast, organised army, which makes the speaker feel outnumbered by beauty. The smooth rhythm of the stanza and its final rhyming couplet 'trees' and 'breeze' add a sense of lightness and ease.",
        },
      },
      questions: [
        {
          id: "et9-u2-romantic-nature-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DAFFODILS,
          stem: "What technique is used in 'Fluttering and dancing in the breeze' (line 6)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personification" },
              { id: "b", text: "Onomatopoeia" },
              { id: "c", text: "Rhetorical question" },
              { id: "d", text: "Oxymoron" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Human actions given to non-human things; here flowers dance." }],
            steps: [{ reasoning: "Flowers cannot dance, so the poet gives them a human activity.", evidence: "Fluttering and dancing in the breeze", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Personification: the daffodils 'dance' like people.",
            commonErrors: ["Choosing (b) because 'fluttering' sounds like a sound word, though it is not onomatopoeia here."],
          },
        },
        {
          id: "et9-u2-romantic-nature-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DAFFODILS,
          stem: "Explain what the simile in line 1 suggests about the speaker at the start of the poem.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "A comparison that adds meaning to the thing described." }],
            steps: [
              { reasoning: "A cloud drifts alone and without direction, so the speaker is solitary and aimless.", evidence: "I wandered lonely as a cloud", marks: 1, markCode: "AO2" },
              { reasoning: "A cloud is high above and distant, suggesting detachment from other people.", evidence: "floats on high", marks: 1, markCode: "AO2" },
              { reasoning: "The loneliness sets up the contrast with the joyful crowd of daffodils.", evidence: "all at once I saw a crowd", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The simile makes the speaker seem solitary and drifting, which contrasts with the sudden crowd of daffodils.",
            commonErrors: ["Only repeating the simile.", "No effect given."],
          },
        },
        {
          id: "et9-u2-romantic-nature-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DAFFODILS,
          stem: "How does Wordsworth use language and structure to show the speaker's delight in nature? Refer to the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Nature given human joy." },
              { kind: "technique", name: "Rhyme and rhythm", statement: "Regular rhyme creates musical harmony." },
            ],
            steps: [
              { reasoning: "The opening simile of isolation sets up a contrast with the joy to follow.", evidence: "lonely as a cloud", marks: 1, markCode: "AO2" },
              { reasoning: "The sudden discovery, 'all at once', gives a moment of surprise and wonder.", evidence: "all at once I saw a crowd", marks: 1, markCode: "AO2" },
              { reasoning: "'Golden' and 'host' suggest preciousness and abundance.", evidence: "A host, of golden daffodils", marks: 1, markCode: "AO2" },
              { reasoning: "Personification of the flowers and waves as dancing shows nature full of joy.", evidence: "The waves beside them danced", marks: 1, markCode: "AO2" },
              { reasoning: "The speaker is outdone by nature: 'A poet could not but be gay' shows joy is inevitable.", evidence: "A poet could not but be gay", marks: 1, markCode: "AO2" },
              { reasoning: "The repeated 'gazed' with dashes mimics the speaker's absorbed looking, and 'wealth' looks to future memory.", evidence: "I gazed\u2014and gazed", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of delight in nature", 6),
            finalAnswer: "Wordsworth moves from solitude to delight. The lonely cloud simile is replaced by a 'host' of 'golden' dancing daffodils, personified as full of glee. The speaker cannot help being 'gay', and the repeated 'gazed' with dashes shows enchanted looking while 'wealth' hints at lasting emotional riches.",
            commonErrors: ["Spotting personification only.", "No comment on structure or change."],
          },
        },
        {
          id: "et9-u2-romantic-nature-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: DAFFODILS,
          stem: "Read the extract from Wordsworth's poem and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things the speaker sees by the lake.", marks: 2 },
            { label: "b", prompt: "Explain how the second stanza shows the speaker comparing the daffodils with the waves.", marks: 6 },
            { label: "c", prompt: "'Romantic poets present nature as a source of joy and renewal.' How far does Wordsworth present nature in this way in the extract?", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Romanticism", statement: "Romantic poets valued nature and emotion over the industrial world." },
              { kind: "technique", name: "Comparison", statement: "Setting two things side by side to show one is superior." },
            ],
            steps: [
              { part: "a", reasoning: "A crowd or host of golden daffodils.", evidence: "A host, of golden daffodils", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Trees or waves beside the lake.", evidence: "beneath the trees", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The waves are lively and sparkling, 'danced', so nature is playful.", evidence: "The waves beside them danced", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The conjunction 'but' introduces a contrast: the flowers are better.", evidence: "but they", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Out-did' shows a competition that the flowers win.", evidence: "Out-did the sparkling waves in glee", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Glee' is a human emotion, so nature is personified as happy.", evidence: "in glee", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The adjective 'sparkling' makes the waves vivid, so the flowers' victory is more impressive.", evidence: "sparkling waves", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The enjambment into the next line maintains the flowing movement.", evidence: "but they / Out-did", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Nature as joy: dancing daffodils, glee, 'jocund company'.", evidence: "such a jocund company", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Renewal: the speaker moves from loneliness to being 'gay', and 'wealth' suggests lasting emotional gain.", evidence: "What wealth the show to me had brought", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Structure: regular rhyme and rhythm create harmony, matching a harmonious nature.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context: Romantic poets reacted against industry and valued nature's spiritual power, so the poem fits this view.", marks: 3, markCode: "AO4" },
            ],
            levels: [...bands("analysis of nature in the poem", 12, "c"), ...bands("analysis of comparison", 6, "b")],
            finalAnswer: "(a) A host of golden daffodils; trees beside the lake. (b) The waves danced, but the daffodils 'out-did' them in glee, so nature competes in joy and the flowers win. (c) To a large extent: nature is joyful, the speaker is renewed from loneliness to happiness, and the harmonious rhyme and Romantic context support this view.",
            commonErrors: ["Retelling the poem.", "Treating the extract as the whole poem.", "No context."],
          },
        },
      ],
    },
    {
      id: "et9-u2-victorian-monologue",
      title: "Victorian poetry and the dramatic monologue",
      skill: "Show how a speaker's voice in a dramatic monologue reveals more than they intend.",
      lesson: {
        sections: [
          {
            heading: "Hearing a voice",
            body: "In a **dramatic monologue** the poet creates a speaker, often an unpleasant one, who speaks to a silent listener. Browning's Duke of Ferrara shows a Renaissance nobleman describing his late wife's portrait. He seems charming, but his words **reveal his possessiveness and cruelty**. The reader works out what the speaker does not realise he is saying: this is **dramatic irony**.",
          },
          {
            heading: "Form and control",
            body: "'My Last Duchess' is written in **rhyming couplets** in **iambic pentameter**, but with heavy **enjambment**, so the Duke's speech sounds like casual, controlled conversation while the rhyme hints at his need to dominate. Look for **possessive pronouns** ('my'), **commands** and the way he controls who may see the painting, behind a 'curtain I have drawn'.",
          },
        ],
        keyFormulas: [
          { name: "Dramatic monologue", statement: "A speaker reveals their own character through speech to a listener." },
          { name: "Enjambment", statement: "A sentence running over a line break, creating a conversational flow." },
          { name: "Dramatic irony", statement: "The reader understands more than the speaker realises." },
        ],
        workedExample: {
          problem: "How does Browning present the Duke in lines 1-4?",
          solution: "Browning presents the Duke as proud and possessive. The first words, 'That's my last Duchess', treat his wife as an object he owns, and the adjective 'last' suggests she is one in a series, replaceable. He praises the painting as 'a wonder', yet he admires the portrait more than the woman, since the portrait is 'alive' only 'as if'. The rhyme of 'call' and 'wall' in couplets, with the casual enjambment, makes his tone smooth and controlled, which makes him more chilling.",
        },
      },
      questions: [
        {
          id: "et9-u2-victorian-monologue-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DUCHESS,
          stem: "What is a dramatic monologue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A poem in which a speaker reveals their own character as they address a listener" },
              { id: "b", text: "A poem in which two characters argue in alternate lines" },
              { id: "c", text: "A poem that describes a landscape in detail" },
              { id: "d", text: "A poem written about the poet's own childhood" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Dramatic monologue", statement: "One speaker, not the poet, speaks to a listener and reveals character." }],
            steps: [{ reasoning: "The Duke addresses a listener ('you') and unintentionally reveals his possessiveness.", evidence: "Will't please you sit and look at her?", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** A poem in which a speaker reveals their own character as they address a listener.",
            commonErrors: ["Choosing (d), confusing the speaker with the poet."],
          },
        },
        {
          id: "et9-u2-victorian-monologue-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DUCHESS,
          stem: "What does the phrase 'my last Duchess' (line 1) suggest about the Duke's attitude to his wife?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Possessive language", statement: "Words like 'my' reveal ownership." }],
            steps: [
              { reasoning: "The possessive 'my' shows he thinks of her as his property.", evidence: "my last Duchess", marks: 1, markCode: "AO2" },
              { reasoning: "'Last' suggests there have been and will be others, so she is replaceable.", evidence: "last Duchess", marks: 1, markCode: "AO2" },
              { reasoning: "He refers to her by title, not name, showing he values status rather than her as a person.", evidence: "Duchess", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'My' shows ownership and 'last' implies she is one of a series, so the Duke values her as a status object rather than a person.",
            commonErrors: ["Saying he loves her.", "No quotation."],
          },
        },
        {
          id: "et9-u2-victorian-monologue-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DUCHESS,
          stem: "How does Browning use the Duke's voice to reveal his character in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dramatic monologue", statement: "The speaker unwittingly reveals his flaws." },
              { kind: "technique", name: "Enjambment and couplets", statement: "Controlled form mirrors a controlling speaker." },
            ],
            steps: [
              { reasoning: "He treats the Duchess as a possession.", evidence: "That's my last Duchess painted on the wall", marks: 1, markCode: "AO2" },
              { reasoning: "He prefers the lifeless portrait to the woman, suggesting he wanted control.", evidence: "Looking as if she were alive", marks: 1, markCode: "AO2" },
              { reasoning: "He is boastful about the artist and 'wonder'.", evidence: "I call / That piece a wonder", marks: 1, markCode: "AO2" },
              { reasoning: "He manipulates the listener by choosing what they see.", evidence: "I said / \"Fra Pandolf\" by design", marks: 1, markCode: "AO2" },
              { reasoning: "The curtain he draws shows he controls access, even to her image.", evidence: "The curtain I have drawn for you, but I", marks: 1, markCode: "AO2" },
              { reasoning: "The rhyming couplets with enjambment create a smooth, controlled tone that hides menace.", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of the Duke's voice", 6),
            finalAnswer: "Browning reveals a proud, possessive and controlling Duke. He owns the Duchess ('my last Duchess'), prefers her as a painting, and has 'drawn' the curtain so that only he decides who sees her. The smooth couplets and enjambment give him an easy charm that makes the control more chilling.",
            commonErrors: ["Assuming the Duke is the poet.", "Identifying features with no effect."],
          },
        },
        {
          id: "et9-u2-victorian-monologue-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: DUCHESS,
          stem: "Read the opening of 'My Last Duchess' and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things the Duke says about the portrait in lines 1-4.", marks: 2 },
            { label: "b", prompt: "Explain what lines 5-8 suggest about how the Duke wants the visitor to see the portrait.", marks: 6 },
            { label: "c", prompt: "How does Browning present power and control in this extract? Refer to language, form and structure.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dramatic monologue", statement: "A speaker unwittingly reveals his character." },
              { kind: "context", name: "Renaissance Italy", statement: "The poem is set in a Renaissance court where marriage was about status and power." },
            ],
            steps: [
              { part: "a", reasoning: "It looks alive.", evidence: "Looking as if she were alive", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It is a 'wonder' painted by Fra Pandolf.", evidence: "Fra Pandolf's hands", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The Duke asks politely but with command, 'Will't please you', showing control.", evidence: "Will't please you sit and look at her?", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "He mentions the painter 'by design', so his words are calculated.", evidence: "by design", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The listener sees only the 'depth and passion' of the glance, which he implies others misread.", evidence: "The depth and passion of its earnest glance", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Strangers like you' sets the visitor apart as an outsider he can impress.", evidence: "Strangers like you", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "He wants the visitor to see the portrait as his possession.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The conversational tone and enjambment conceal calculation.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Possessive language: 'my last Duchess' treats her as an object.", evidence: "my last Duchess", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The curtain image: only he controls who sees the portrait.", evidence: "The curtain I have drawn for you, but I", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Form: iambic pentameter couplets with enjambment create an easy, in-control tone.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Structure and context: he opens with the painting, a symbol of her being fixed and silenced, which suits a society where nobles controlled wives.", marks: 3, markCode: "AO4" },
            ],
            levels: [...bands("analysis of power and control", 12, "c"), ...bands("analysis of the Duke's intentions", 6, "b")],
            finalAnswer: "(a) The portrait looks alive; it is a wonder painted by Fra Pandolf. (b) He controls the visitor through polite questions and calculated words, wanting them to admire the portrait as his possession. (c) Browning presents power through possessive 'my', the controlling curtain, and the smooth couplets and enjambment of a man who dominates conversation, in a context where nobles controlled their wives.",
            commonErrors: ["Treating the Duke as sympathetic.", "Mentioning form without linking to meaning."],
          },
        },
      ],
    },
  ],
};
