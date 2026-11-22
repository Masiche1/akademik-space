import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string, top: 6 | 12, part?: string): MarkLevel[] => {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : ["10-12", "8-9", "5-7", "3-4", "1-2"];
  const text = top === 6
    ? [`Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.`, `Clear, relevant ${focus}, with appropriate references and some analysis.`, `Simple, limited ${focus}, with few references and mostly description.`]
    : [`Perceptive, discriminating ${focus}; precise, well-chosen references and assured use of terminology.`, `Thorough ${focus}; well-chosen references with developed analysis of effects.`, `Clear, relevant ${focus}; appropriate references with some analysis.`, `Some understanding; ${focus} is partly relevant with some references.`, `Simple, limited ${focus}; few references, mostly description.`];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", ...(part ? { part } : {}) }));
};

const TIGER: TextExtract = {
  title: "The Tyger (opening)",
  author: "William Blake",
  source: "Songs of Experience (1794)",
  lineNumbers: true,
  text: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?\n\nIn what distant deeps or skies.\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?",
};

const HARBOUR: TextExtract = {
  title: "Harbour at Dusk",
  author: "Written for Akademik Space",
  lineNumbers: true,
  text: "The boats come in like tired thoughts,\nheavy-lidded, low in the water.\nGulls argue over the day's last scraps,\nand the lamps along the quay\nlight one by one, like questions\nno one is quite ready to answer.\n\nMy father taught me to read this tide:\nthe slack, the turn, the quiet pull.\nHe is gone now. Still, each evening,\nI walk down to the wall and wait\nfor a hull I know to rise out of the grey\nand knock, once, against the stone.",
};

export const lesson23: Lesson = {
  id: "et9-u2-lesson-2-3",
  code: "2-3",
  title: "Unseen Poetry and the Poetry Essay",
  goal: "I CAN respond to a poem I have not seen before and write a clear, structured essay about poetry.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Unseen poem", definition: "A poem you have not studied before, which you must analyse in an exam using your skills." },
    { term: "Speaker", definition: "The voice that 'talks' in the poem, who may or may not be the poet." },
    { term: "Tone", definition: "The attitude or mood of the speaker, such as bitter, tender or fearful." },
    { term: "Volta", definition: "A turn or shift in thought or feeling in a poem." },
    { term: "Stanza", definition: "A group of lines in a poem, like a paragraph in prose." },
    { term: "Rhetorical question", definition: "A question asked for effect, not for an answer." },
    { term: "Thesis", definition: "The central argument of an essay, stated clearly in the introduction." },
  ],
  concepts: [
    {
      id: "et9-u2-unseen-poetry",
      title: "Unseen poetry",
      skill: "Use a systematic approach to read, understand and analyse an unfamiliar poem.",
      lesson: {
        sections: [
          {
            heading: "A method for the unfamiliar",
            body: "Do not panic. Use **TSPF**: **T**itle (what does it suggest?), **S**peaker and **S**ubject (who is speaking and about what?), **P**attern and **P**eriod (form, rhyme, rhythm), **F**eelings and **F**ocus (tone and any shift). Read the poem twice, annotate the **images**, look at the **verbs**, and note where the poem **turns**. Then plan three points that answer the question.",
          },
          {
            heading: "Writing about what you notice",
            body: "You do not need to know the poem. You need to **notice, quote and explain**. Make a confident interpretation but allow for alternatives with phrases like 'this could suggest'. Always comment on **at least one form or structure point** (for example a shift between stanzas, enjambment, or a change in sentence length), because markers reward analysis of method as well as meaning.",
          },
        ],
        keyFormulas: [
          { name: "TSPF", statement: "Title, Speaker and Subject, Pattern and Period, Feelings and Focus." },
          { name: "Volta", statement: "A turn in thought, often marked by 'but', 'yet' or a new stanza." },
          { name: "Tentative language", statement: "'Suggests', 'could imply', 'perhaps' for flexible, perceptive interpretation." },
        ],
        workedExample: {
          problem: "How does the poet present grief in 'Harbour at Dusk'?",
          solution: "The poet presents grief as quiet, daily and enduring. The opening simile 'The boats come in like tired thoughts' personifies the boats as weary, suggesting the speaker's mind is heavy with sad reflections. In the second stanza, the abrupt short sentence 'He is gone now' states the loss plainly, without elaboration, which suggests emotion too deep for ornament. Yet the speaker's routine of walking to the wall 'each evening' shows grief as a habit of hope, and the final image of a hull that might 'knock, once, against the stone' suggests she half-believes her father will return, which makes the ending poignant.",
        },
      },
      questions: [
        {
          id: "et9-u2-unseen-poetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HARBOUR,
          stem: "What is the effect of the simile 'like tired thoughts' (line 1)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It suggests the boats are fast and energetic" },
              { id: "b", text: "It suggests the speaker is angry" },
              { id: "c", text: "It suggests a cheerful homecoming" },
              { id: "d", text: "It suggests a weary, heavy mood" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "A comparison with 'like' or 'as'." }],
            steps: [{ reasoning: "'Tired' and 'heavy-lidded' suggest weariness and a sad, reflective mood.", evidence: "like tired thoughts", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(d)** It suggests a weary, heavy mood.",
            commonErrors: ["Choosing (d), assuming boats coming home is automatically cheerful."],
          },
        },
        {
          id: "et9-u2-unseen-poetry-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: HARBOUR,
          stem: "Explain what the image of 'the lamps along the quay' lighting 'like questions' (lines 4-6) suggests.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "Lamps are compared to questions." }],
            steps: [
              { reasoning: "The lamps light 'one by one', suggesting slowness and isolation.", evidence: "light one by one", marks: 1, markCode: "AO2" },
              { reasoning: "Comparing them to questions suggests uncertainty and unresolved feelings.", evidence: "like questions", marks: 1, markCode: "AO2" },
              { reasoning: "'No one is quite ready to answer' implies people avoid painful truths, such as grief.", evidence: "no one is quite ready to answer", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The lamps appearing slowly like questions suggest uncertainty, and people's reluctance to answer implies avoided or painful truths.",
            commonErrors: ["Saying only that it is evening."],
          },
        },
        {
          id: "et9-u2-unseen-poetry-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: HARBOUR,
          stem: "How does the poet use language and structure to present the speaker's feelings about her father in the second stanza?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Short sentence", statement: "Plain, short statements can convey grief." },
              { kind: "technique", name: "Structural shift", statement: "A change between stanzas shows a move from observation to memory." },
            ],
            steps: [
              { reasoning: "The stanza shifts from description to memory, showing grief breaking through.", evidence: "My father taught me to read this tide", marks: 1, markCode: "AO2" },
              { reasoning: "Reading the tide is a metaphor for a bond of knowledge and love.", evidence: "the slack, the turn, the quiet pull", marks: 1, markCode: "AO2" },
              { reasoning: "The blunt sentence 'He is gone now.' states the loss plainly.", evidence: "He is gone now.", marks: 1, markCode: "AO2" },
              { reasoning: "'Still' shows persistence despite loss.", evidence: "Still, each evening", marks: 1, markCode: "AO1" },
              { reasoning: "The routine of waiting suggests grief as hope and habit.", evidence: "I walk down to the wall and wait", marks: 1, markCode: "AO2" },
              { reasoning: "The final image of the hull knocking 'once' is tender and haunting.", evidence: "knock, once, against the stone", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of the speaker's feelings", 6),
            finalAnswer: "The second stanza turns from observation to memory. The tide that her father taught her to read shows a close bond, the blunt 'He is gone now' states loss without decoration, and 'Still' and the evening ritual show enduring hope. The image of a hull knocking 'once, against the stone' is a gentle, haunting wish.",
            commonErrors: ["Retelling.", "Ignoring the stanza shift."],
          },
        },
        {
          id: "et9-u2-unseen-poetry-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: HARBOUR,
          stem: "Read 'Harbour at Dusk' and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two details about the harbour in the first stanza.", marks: 2 },
            { label: "b", prompt: "Explain how the first stanza creates a mood of sadness.", marks: 6 },
            { label: "c", prompt: "How does the poet present the speaker's feelings about loss and memory in the whole poem? Write about language, form and structure.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "TSPF", statement: "A method for unseen poems." },
              { kind: "technique", name: "Imagery of the sea", statement: "Tides and boats symbolise time, loss and return." },
            ],
            steps: [
              { part: "a", reasoning: "Boats come in low in the water.", evidence: "low in the water", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Gulls argue over scraps, and lamps light along the quay.", evidence: "Gulls argue over the day's last scraps", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The simile 'tired thoughts' personifies and slows the mood.", evidence: "like tired thoughts", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Heavy-lidded' suggests drowsiness and sorrow.", evidence: "heavy-lidded", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Gulls 'argue over' 'last scraps' suggests scarcity and quarrelling.", evidence: "Gulls argue over the day's last scraps", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Dusk and 'last' suggest endings.", evidence: "last scraps", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The lamps like unanswered questions suggest uncertainty.", evidence: "like questions", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The slow rhythm and long sentence create a drawn-out, melancholy mood.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Grief shown through plain statement: 'He is gone now.'", evidence: "He is gone now.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Memory shown in the shift to the father's teaching and the ritual of waiting.", evidence: "My father taught me", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Structure: two stanzas moving from outer scene to inner memory; free verse allows natural, speaking rhythm.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Sea imagery symbolises time and return; the ending balances sorrow and hope.", evidence: "knock, once, against the stone", marks: 3, markCode: "AO2" },
            ],
            levels: [...bands("analysis of loss and memory", 12, "c"), ...bands("analysis of mood", 6, "b")],
            finalAnswer: "(a) Boats low in the water; gulls arguing; lamps on the quay. (b) The mood is sad because of tired, heavy-lidded boats, gulls quarrelling over last scraps, dusk, and lamps like unanswered questions. (c) Loss is shown through plain statement and ritual, a shift from outside scene to memory, free verse that mimics speech, and sea imagery of return that ends with a haunting hope.",
            commonErrors: ["No structure comment.", "Paraphrase without quotations."],
          },
        },
      ],
    },
    {
      id: "et9-u2-poetry-essay",
      title: "The poetry essay",
      skill: "Plan and write a structured analytical essay about a poem or poems.",
      lesson: {
        sections: [
          {
            heading: "Planning in five minutes",
            body: "Underline the **key words** in the question. Decide your **argument** (the thesis) in one sentence. Choose **three** moments from the poem, ideally from the start, middle and end, and note a quotation and technique for each. A clear plan keeps you from retelling the poem line by line.",
          },
          {
            heading: "Structure and style",
            body: "Write an **introduction** with a thesis that answers the question directly. Then write **three analytical paragraphs** using PETAL, each starting with a clear point. Finish with a **conclusion** that returns to the question and offers a final insight. Embed short quotations ('the poet describes the tiger as 'burning bright', which suggests...'), use precise terms, and keep a formal, confident tone.",
          },
        ],
        keyFormulas: [
          { name: "Thesis", statement: "A one-sentence argument that directly answers the question." },
          { name: "Embedded quotation", statement: "A short quotation woven into your own sentence." },
          { name: "Conclusion", statement: "Returns to the question and gives a final judgement without repeating." },
        ],
        workedExample: {
          problem: "How does Blake present the tiger in the opening of 'The Tyger'?",
          solution: "Blake presents the tiger as both beautiful and terrifying, a creature that challenges the idea of a creator. The metaphor 'burning bright' makes the tiger a blaze of energy and danger, while 'forests of the night' places it in a dark and unknown world. The repeated questions, 'What immortal hand or eye?', show the speaker's awe and fear, since he cannot imagine who could make such a creature. The oxymoron-like phrase 'fearful symmetry' suggests that the tiger's beauty is inseparable from terror. The unanswered questions, driven by a pounding rhythm, leave the reader unsettled and amazed.",
        },
      },
      questions: [
        {
          id: "et9-u2-poetry-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TIGER,
          stem: "What does 'burning bright' (line 1) suggest about the tiger?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is weak and fading" },
              { id: "b", text: "It is hidden and shy" },
              { id: "c", text: "It is fierce, glowing and dangerous" },
              { id: "d", text: "It is cold and calm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor and alliteration", statement: "Fire imagery suggests energy and danger; the repeated b sound adds emphasis." }],
            steps: [{ reasoning: "Fire is bright, powerful and dangerous, so the tiger is a blaze of energy.", evidence: "burning bright", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(c)** It is fierce, glowing and dangerous.",
            commonErrors: ["Choosing (b) from misreading 'burning' as decay."],
          },
        },
        {
          id: "et9-u2-poetry-essay-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TIGER,
          stem: "Explain what Blake suggests about the creator of the tiger in lines 3-4.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhetorical question", statement: "Questions that express wonder or fear." }],
            steps: [
              { reasoning: "The creator is 'immortal', so a being beyond human power.", evidence: "What immortal hand or eye", marks: 1, markCode: "AO1" },
              { reasoning: "The question shows the speaker's awe and fear of whoever could make such a creature.", evidence: "Could frame thy fearful symmetry?", marks: 1, markCode: "AO2" },
              { reasoning: "'Frame' suggests careful craftsmanship, while 'fearful' suggests the creator is also frightening.", evidence: "frame thy fearful symmetry", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The creator is a powerful, immortal being, so skilful that the speaker questions whether anyone would dare to make something so beautiful and terrible.",
            commonErrors: ["Not mentioning the question form."],
          },
        },
        {
          id: "et9-u2-poetry-essay-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: TIGER,
          stem: "Write one analytical paragraph explaining how Blake uses language to present the tiger as both beautiful and frightening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "PETAL", statement: "Point, evidence, technique, analysis, link." },
              { kind: "technique", name: "Oxymoron", statement: "Beauty and terror combined in 'fearful symmetry'." },
            ],
            steps: [
              { reasoning: "Clear point: the tiger is a blend of beauty and terror.", marks: 1, markCode: "AO1" },
              { reasoning: "Fire metaphor shows glowing beauty and danger.", evidence: "burning bright", marks: 1, markCode: "AO2" },
              { reasoning: "The night setting adds mystery and fear.", evidence: "forests of the night", marks: 1, markCode: "AO2" },
              { reasoning: "'Symmetry' suggests perfection and order; 'fearful' adds terror.", evidence: "fearful symmetry", marks: 1, markCode: "AO2" },
              { reasoning: "The relentless questions show awe and uncertainty.", evidence: "What immortal hand or eye", marks: 1, markCode: "AO2" },
              { reasoning: "A link back to the question and a final insight.", marks: 1, markCode: "AO1" },
            ],
            levels: bands("analytical paragraph", 6),
            finalAnswer: "Blake presents the tiger as both beautiful and terrifying. The metaphor 'burning bright' makes it glow like fire, yet that fire is dangerous, and its home in the 'forests of the night' is dark and unknown. The phrase 'fearful symmetry' fuses perfection and dread, and the unanswered questions show the speaker's awe and fear.",
            commonErrors: ["No quotations.", "Only saying 'it is scary'."],
          },
        },
        {
          id: "et9-u2-poetry-essay-q4",
          difficulty: "challenge",
          totalMarks: 30,
          extract: TIGER,
          stem: "Read the opening of 'The Tyger' and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two ways Blake describes the tiger or its creation.", marks: 2 },
            { label: "b", prompt: "Explain how the repeated rhetorical questions affect the reader.", marks: 6 },
            { label: "c", prompt: "Write an essay: How does Blake use language, form and structure to explore fear and wonder in this extract?", marks: 22 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical questions", statement: "Questions that express wonder and fear without answers." },
              { kind: "convention", name: "Quatrain with rhyming couplets", statement: "A regular, hammering rhythm like a blacksmith's." },
              { kind: "context", name: "Songs of Experience", statement: "Blake's poems examine a harsh world and the nature of its creator." },
            ],
            steps: [
              { part: "a", reasoning: "The tiger is 'burning bright', a fiery creature.", evidence: "burning bright", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Its shape is a 'fearful symmetry' framed by an immortal hand.", evidence: "fearful symmetry", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Questions place the reader in the speaker's wonder.", evidence: "What immortal hand or eye", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "No answers are given, creating a sense of mystery.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The repeated 'What' and 'dare' build intensity.", evidence: "dare he aspire", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The questions suggest the creator is awe-inspiring and perhaps frightening.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The urgent rhythm sounds like hammering, linking to creation.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The reader is left unsettled and curious.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Thesis stated clearly: fear and wonder are inseparable.", marks: 4, markCode: "AO1" },
              { part: "c", reasoning: "Fire and night imagery combine beauty and danger.", evidence: "forests of the night", marks: 5, markCode: "AO2" },
              { part: "c", reasoning: "Creator imagery ('hand', 'eye', 'seize the fire') suggests daring and danger, like Prometheus.", evidence: "dare seize the fire", marks: 5, markCode: "AO2" },
              { part: "c", reasoning: "Form: regular rhymed couplets and trochaic rhythm create a pounding, incantatory effect.", marks: 4, markCode: "AO2" },
              { part: "c", reasoning: "Context or conclusion: Blake questions a creator who makes both lamb and tiger.", marks: 4, markCode: "AO4" },
            ],
            levels: [
              ...bands("analysis of the questions", 6, "b"),
              { level: "Level 5", marks: "19-22", part: "c", descriptor: "Perceptive, discriminating argument with assured analysis of language, form and structure." },
              { level: "Level 4", marks: "15-18", part: "c", descriptor: "Thorough argument with well-chosen references and developed analysis." },
              { level: "Level 3", marks: "10-14", part: "c", descriptor: "Clear, relevant argument with appropriate references and some analysis." },
              { level: "Level 2", marks: "5-9", part: "c", descriptor: "Some understanding with some relevant references." },
              { level: "Level 1", marks: "1-4", part: "c", descriptor: "Simple, limited comments with few references." },
            ],
            finalAnswer: "(a) 'Burning bright'; a 'fearful symmetry' framed by an immortal hand. (b) The questions pull the reader into the speaker's awe and fear, with no answers, so the mystery grows. (c) A high-level essay argues that Blake makes fear and wonder inseparable: fire and night imagery, the creator who 'dare[s] seize the fire', and the pounding rhymed couplets, with a conclusion on the unsettling nature of the creator.",
            commonErrors: ["No clear argument.", "Spotting devices only.", "Retelling the lines."],
          },
        },
      ],
    },
  ],
};
