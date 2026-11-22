import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const STORM: TextExtract = {
  title: "Night Watch",
  author: "Written for Akademik Space",
  text: "The storm tore across the headland just after midnight. Rain hammered the lighthouse windows and the wind howled through every crack in the old stone. Inside, Tomas gripped the rail of the spiral stair and crept upwards, each step groaning beneath his boots. Above him, the great lamp swung its pale beam over the black water, sweeping and searching like a tired eye.\n\nHe had been alone in the tower for eleven days. The silence between gusts pressed on his ears, and the shadows in the stairwell seemed to lean towards him, whispering.",
};

const SEA: TextExtract = {
  title: "The Harbour at Dawn",
  author: "Written for Akademik Space",
  text: "The sea was a sheet of hammered silver. Fishing boats nodded at their moorings like sleepy cattle, and the morning mist, thin as a veil, clung to the water. The town was waking: a shutter banged, a dog barked, and somewhere a kettle began to sing. The sun climbed over the roofs and lazily stretched its long fingers across the quay, warming the cold stone.",
};

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis of the writer's language choices and their effects, with well-chosen quotations." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some understanding of language choices and some relevant references." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment, often feature-spotting without effect." },
];

export const lesson12: Lesson = {
  id: "el8-u1-lesson-1-2",
  code: "1-2",
  title: "Language for Effect",
  goal: "I CAN explain how a writer's choice of words and imagery creates effects and shapes the reader's response.",
  standards: ["KS3 Reading", "KS3 AO2"],
  vocabulary: [
    { term: "Connotation", definition: "The feelings, ideas or associations a word carries beyond its literal meaning." },
    { term: "Simile", definition: "A comparison that uses 'like' or 'as', for example 'as pale as a ghost'." },
    { term: "Metaphor", definition: "A comparison that says one thing is another, for example 'the sea was a sheet of silver'." },
    { term: "Personification", definition: "Giving human qualities, actions or feelings to something non-human." },
    { term: "Imagery", definition: "Language that creates a picture or sensory impression in the reader's mind." },
    { term: "Atmosphere", definition: "The mood or feeling a piece of writing creates." },
  ],
  concepts: [
    {
      id: "el8-u1-word-choice",
      title: "Word choice and connotation",
      skill: "Zoom in on individual words and explain what they suggest and why the writer chose them.",
      lesson: {
        sections: [
          {
            heading: "Words carry more than their meaning",
            body: "Every word has a **denotation** (its dictionary meaning) and **connotations** (what it suggests). 'Crept' and 'walked' both describe moving, but 'crept' connotes secrecy, fear and slowness. When you analyse language, choose a single powerful word, quote it, and explore what it suggests about character, setting or mood.",
          },
          {
            heading: "Verbs, adjectives and the 'zoom' technique",
            body: "Vivid verbs often carry the most effect: 'hammered', 'howled' and 'tore' make the weather violent and aggressive. To zoom in, name the word class, say what it suggests, then link it to the whole text: 'The verb \"hammered\" suggests relentless, violent force, as if the storm is attacking the tower and making Tomas feel unsafe.'",
          },
        ],
        keyFormulas: [
          { name: "Connotation", statement: "The associations a word brings, such as danger, warmth or secrecy." },
          { name: "Zoom in", statement: "Select one key word from a quotation and analyse it closely." },
          { name: "Word class", statement: "The type of word, such as verb, adjective, adverb or noun, used to label a technique accurately." },
        ],
        workedExample: {
          problem: "How does the writer use language to create a threatening atmosphere in the first paragraph of 'Night Watch'? (4 marks)",
          solution: "The writer uses violent verbs to make the storm seem like an attacker. The storm 'tore across the headland', and the verb 'tore' suggests ripping and destruction, while 'hammered' shows rain striking the windows with relentless force. In addition, the wind 'howled', which personifies it as an animal, creating a wild, menacing sound that makes the tower seem under siege and Tomas vulnerable.",
        },
      },
      questions: [
        {
          id: "el8-u1-word-choice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORM,
          stem: "Tomas 'crept upwards'. What does the verb 'crept' suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That he is in a hurry to escape" },
              { id: "b", text: "That he is bored and tired" },
              { id: "c", text: "That he is carefully and quietly moving, perhaps out of fear" },
              { id: "d", text: "That he is angry with the storm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Connotation", statement: "'Crept' connotes stealth, caution and fear." }],
            steps: [{ reasoning: "'Crept' suggests slow, careful, quiet movement, linked to the fear created by the storm and the groaning stairs.", evidence: "crept upwards", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(c)** 'Crept' connotes caution and quiet, suggesting nervousness. A hurry would be 'raced' or 'dashed'.",
            commonErrors: ["Choosing 'in a hurry': the verb suggests slowness, not speed."],
          },
        },
        {
          id: "el8-u1-word-choice-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: STORM,
          stem: "Explain what the word 'hammered' suggests about the rain in the first paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Verb choice", statement: "Strong verbs convey the force and nature of an action." }],
            steps: [
              { reasoning: "'Hammered' suggests heavy, repeated blows, so the rain is forceful and relentless.", evidence: "Rain hammered the lighthouse windows", marks: 1, markCode: "AO2" },
              { reasoning: "It makes the rain seem like an attack, creating danger and a sense that the tower is under siege.", evidence: "hammered", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "'Hammered' suggests the rain is striking with heavy, repeated force, almost like an attack on the lighthouse, which creates a violent and threatening atmosphere.",
            commonErrors: ["Saying only that it is 'a good verb' or 'describes the rain' without explaining what it suggests."],
          },
        },
        {
          id: "el8-u1-word-choice-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: STORM,
          stem: "How does the writer use language in the second paragraph to suggest that Tomas feels uneasy and alone? Refer to two words or phrases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Word choice", statement: "Specific words create mood and suggest character feeling." },
              { kind: "technique", name: "Personification", statement: "Shadows that 'lean' and 'whisper' are given human behaviour." },
            ],
            steps: [
              { reasoning: "The sense of isolation is stressed by the length of time he has been alone, giving his loneliness a precise, heavy weight.", evidence: "alone in the tower for eleven days", marks: 1, markCode: "AO2" },
              { reasoning: "'Pressed' suggests the silence is physical and oppressive, almost crushing him.", evidence: "The silence between gusts pressed on his ears", marks: 1, markCode: "AO2" },
              { reasoning: "The shadows are personified as if alive, so his fear makes the environment seem threatening.", evidence: "the shadows in the stairwell seemed to lean towards him", marks: 1, markCode: "AO2" },
              { reasoning: "'Whispering' adds an eerie sound, suggesting he imagines voices because he is isolated.", evidence: "whispering", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer shows Tomas's unease through personification. The shadows 'seemed to lean towards him, whispering', which suggests that in his isolation he imagines the dark as alive and threatening. The verb 'pressed' also makes the silence feel heavy and oppressive, as if the quiet itself is crushing him.",
            commonErrors: ["Choosing quotations but not explaining any single word.", "Describing what happens rather than how the language works."],
          },
        },
        {
          id: "el8-u1-word-choice-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: STORM,
          stem: "Answer all parts of this question about 'Night Watch'.",
          parts: [
            { label: "a", prompt: "Write down two verbs from the first paragraph that make the storm seem violent.", marks: 2 },
            { label: "b", prompt: "What does the adjective 'tired' suggest about the lamp's beam in the last sentence of paragraph one?", marks: 2 },
            { label: "c", prompt: "Explain how the writer uses the verbs 'tore' and 'howled' to present the storm.", marks: 4 },
            { label: "d", prompt: "How does the writer use language to create a tense and frightening atmosphere in this extract?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Verb choice", statement: "Strong verbs shape the way a reader imagines an action." },
              { kind: "skill", name: "Zoom in", statement: "Analyse single words closely for connotation." },
            ],
            steps: [
              { part: "a", reasoning: "'Tore' is violent and destructive.", evidence: "tore across the headland", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "'Hammered' is forceful and repeated.", evidence: "Rain hammered", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Tired' personifies the beam, implying weariness and weakness against the storm.", evidence: "like a tired eye", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It also hints that the light, which should offer safety, may fail, adding to the fear.", evidence: "sweeping and searching", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "'Tore' suggests ripping, violent force, as if the storm is damaging the land.", evidence: "tore across the headland", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "'Howled' is an animal-like sound, giving the wind a wild and menacing voice.", evidence: "the wind howled", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Violent verbs make the storm an aggressor.", evidence: "Rain hammered the lighthouse windows", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Groaning and creeping suggest the old tower and Tomas's fear.", evidence: "each step groaning beneath his boots", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Personified shadows and silence build an unnerving atmosphere of isolation.", evidence: "the shadows in the stairwell seemed to lean towards him, whispering", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) tore, hammered (also howled). (b) The beam seems weary, perhaps close to failing. (c) 'Tore' implies violent ripping; 'howled' gives the wind a wild animal voice. (d) The writer builds tension through aggressive storm verbs, the groaning stairs and personified shadows that 'lean' and 'whisper', so the setting seems alive and hostile to the isolated Tomas.",
            commonErrors: ["Naming a technique ('personification') without explaining the effect.", "Writing about the story rather than the writer's word choices."],
          },
        },
      ],
    },
    {
      id: "el8-u1-imagery",
      title: "Imagery: simile, metaphor and personification",
      skill: "Identify figurative language and explain what each comparison makes the reader see, feel or understand.",
      lesson: {
        sections: [
          {
            heading: "Three kinds of comparison",
            body: "A **simile** compares using 'like' or 'as': 'nodded at their moorings like sleepy cattle'. A **metaphor** states that one thing is another: 'the sea was a sheet of hammered silver'. **Personification** gives human qualities to non-human things: 'the sun lazily stretched its long fingers'. Naming the technique earns little. The marks are for the effect.",
          },
          {
            heading: "Explaining the effect of an image",
            body: "Ask three questions. What two things are being compared? What qualities do they share? What feeling or picture does that create? 'Hammered silver' links the sea with metal, so it looks bright, flat and hard-edged. 'Sleepy cattle' suggests the boats are calm, slow and gentle, creating a peaceful mood.",
          },
        ],
        keyFormulas: [
          { name: "Simile", statement: "A comparison using 'like' or 'as'." },
          { name: "Metaphor", statement: "A comparison that says one thing is another." },
          { name: "Personification", statement: "Giving human actions or feelings to non-human things." },
        ],
        workedExample: {
          problem: "How does the writer use imagery to present the harbour at dawn? (4 marks)",
          solution: "The writer uses a metaphor, 'a sheet of hammered silver', to show the sea gleaming and flat in the early light, with a hard, beautiful brightness. The simile 'like sleepy cattle' compares the boats to gentle animals, suggesting they are calm and peaceful. Finally, the sun 'stretched its long fingers' is personification, making the sunrise seem warm and welcoming, like a person waking and reaching out.",
        },
      },
      questions: [
        {
          id: "el8-u1-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SEA,
          stem: "'The sea was a sheet of hammered silver.' What technique is used in this sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personification" },
              { id: "b", text: "Alliteration" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Metaphor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "States that one thing is another, without 'like' or 'as'." }],
            steps: [{ reasoning: "The sea is said to 'be' silver, with no 'like' or 'as'.", evidence: "The sea was a sheet of hammered silver", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(d)** Metaphor. A simile would need 'like' or 'as'; nothing is given human feelings, so it is not personification.",
            commonErrors: ["Choosing simile because comparisons are often labelled 'similes' loosely."],
          },
        },
        {
          id: "el8-u1-imagery-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SEA,
          stem: "The boats 'nodded at their moorings like sleepy cattle'. What does this simile suggest about the boats?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are about to be damaged by the sea" },
              { id: "b", text: "They are huge and powerful" },
              { id: "c", text: "They are gentle, calm and slow-moving" },
              { id: "d", text: "They are noisy and crowded together" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "A simile transfers the qualities of one thing to another." }],
            steps: [
              { reasoning: "Cattle are gentle, slow animals, so the boats seem calm and docile.", evidence: "like sleepy cattle", marks: 1, markCode: "AO2" },
              { reasoning: "'Sleepy' and 'nodded' add the idea of peaceful early morning rest, creating a quiet mood.", evidence: "nodded at their moorings", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** The boats seem gentle, calm and slow, creating a peaceful atmosphere. Nothing in the simile suggests damage, power or noise.",
            commonErrors: ["Choosing 'huge and powerful' by thinking of cattle as large animals instead of the 'sleepy' quality."],
          },
        },
        {
          id: "el8-u1-imagery-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: SEA,
          stem: "The sun 'lazily stretched its long fingers across the quay, warming the cold stone'. Explain the effect of this personification.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Human actions make the natural world seem alive and relatable." }],
            steps: [
              { reasoning: "Identify the technique: the sun is given human actions as it stretches like someone waking.", evidence: "lazily stretched its long fingers", marks: 1, markCode: "AO2" },
              { reasoning: "'Lazily' suggests a slow, gentle, unhurried morning, adding to the peaceful mood.", evidence: "lazily", marks: 1, markCode: "AO2" },
              { reasoning: "'Long fingers' visualises sunbeams spreading across the quay in a reaching, touching motion.", evidence: "long fingers across the quay", marks: 1, markCode: "AO2" },
              { reasoning: "'Warming the cold stone' gives the sun a caring role, bringing comfort and life to the waking town.", evidence: "warming the cold stone", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer personifies the sun as someone waking and stretching. 'Lazily' creates a gentle, unhurried mood, while 'long fingers' pictures the sunbeams reaching across the quay. Because the sun is 'warming the cold stone', it seems caring and welcoming, bringing life to the town.",
            commonErrors: ["Stating 'it is personification' and moving on.", "Explaining the sun's physical effect rather than the effect on the reader."],
          },
        },
        {
          id: "el8-u1-imagery-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: SEA,
          stem: "Answer all parts of this question about 'The Harbour at Dawn'.",
          parts: [
            { label: "a", prompt: "Write down one simile and one metaphor from the extract.", marks: 2 },
            { label: "b", prompt: "Explain what 'thin as a veil' suggests about the mist.", marks: 2 },
            { label: "c", prompt: "How does the writer use sound to show the town waking up?", marks: 4 },
            { label: "d", prompt: "How does the writer use imagery to create a peaceful, beautiful atmosphere?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery", statement: "Figurative language builds pictures and moods." },
              { kind: "technique", name: "Sensory language", statement: "Sound detail brings a scene to life." },
            ],
            steps: [
              { part: "a", reasoning: "A simile, using 'like' or 'as'.", evidence: "like sleepy cattle", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "A metaphor, saying one thing is another.", evidence: "a sheet of hammered silver", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "A veil is fine and delicate, so the mist is light and see-through.", evidence: "thin as a veil", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "A veil also covers gently, giving a hint of mystery or softness to the scene.", evidence: "clung to the water", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Sudden, everyday sounds such as a banging shutter and a barking dog signal people and animals stirring.", evidence: "a shutter banged, a dog barked", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The kettle 'singing' personifies the sound as cheerful and homely, suggesting comfort and routine.", evidence: "somewhere a kettle began to sing", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "The silver metaphor makes the sea shine, flat and beautiful.", evidence: "a sheet of hammered silver", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "The cattle simile suggests calm and gentleness.", evidence: "nodded at their moorings like sleepy cattle", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Personification of the sun makes the dawn warm and welcoming.", evidence: "lazily stretched its long fingers", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) Simile: 'like sleepy cattle'. Metaphor: 'a sheet of hammered silver'. (b) The mist is delicate, light and soft. (c) Everyday sounds such as a banging shutter and a barking dog show the town waking, and the kettle that 'began to sing' is a cosy, personified sound. (d) The metaphor makes the sea glow, the simile makes the boats calm and gentle, and the sun is a lazy, warm presence, together creating a peaceful and beautiful dawn.",
            commonErrors: ["Spotting similes and metaphors without explaining what each makes the reader picture.", "Writing about the sounds in (d), which are covered in (c)."],
          },
        },
      ],
    },
  ],
};
