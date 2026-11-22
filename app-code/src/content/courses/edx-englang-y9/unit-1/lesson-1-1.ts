import type { Lesson, TextExtract } from "../../../types.ts";

const COUNTING_HOUSE: TextExtract = {
  title: "The Counting-House",
  author: "Written for Akademik Space",
  source: "Original passage in the style of a nineteenth-century novel",
  text: "Mr Ambrose Pellew had occupied the same high stool in the counting-house of Messrs Hargrave and Sons for thirty-one years, and in all that time the stool had never once been warmed by any ray of cheerfulness. The office was a narrow, ill-lit apartment, its single window obscured by the grime of the court beyond, so that even at noon a pair of tallow candles guttered upon the desk and cast their sickly glimmer over the ledgers. Pellew was a spare, stooping man whose coat, once black, had faded to the green of a pond. He regarded the world with the wary eye of one who has been disappointed too often to hope.\n\nOn this particular morning a visitor was announced, and Pellew descended from his perch with an alacrity that surprised even himself. The stranger, a florid gentleman in a fur-collared overcoat, scarcely deigned to remove his hat. 'You are the clerk?' he demanded. 'I am, sir,' replied Pellew, with a bow so profound that his spectacles slid down his nose. 'Then fetch the Danvers account, and be quick about it, for I have no leisure to squander upon the likes of you.' Pellew said nothing, but a faint tremor passed along his jaw, and he retreated into the gloom of the shelves with his hands clasped before him, like a penitent.",
};

const SALT_MARSH: TextExtract = {
  title: "Salt Marsh, November",
  author: "Written for Akademik Space",
  source: "Original passage in the style of a nineteenth-century novel",
  text: "The marsh road ran out from the village like a grey thread unravelling, and by four o'clock the mist had swallowed the last of it. Hester Voss walked quickly, her basket of eggs held close against her chest, for the dark came early at this season and the tide came with it. On either hand the reeds stood stiff and colourless, and somewhere out among the creeks a curlew gave a thin, mournful cry that seemed to belong to no living creature.\n\nShe had been sent to the Hallidays' farm by her aunt, who had not troubled to ask whether a girl of fourteen might be afraid. Hester was not afraid, or so she told herself; she had grown up with the sea at her back door and had learned that it kept its own counsel. Yet she did not look behind her. Her boots, patched twice by her own hand, were sodden to the ankle, and the cold crept upward with a patient malice.\n\nAt the sluice-gate she paused, set down her basket, and wrung out her skirts with a grim and practised efficiency. Then she lifted the eggs again, counted them under her breath, eleven, all whole, and went on towards the single yellow window that marked the farm.",
};

export const lesson11: Lesson = {
  id: "el9-u1-lesson-1-1",
  code: "1-1",
  title: "Inference and Character in 19th-century Fiction",
  goal: "I CAN work out the meaning of unfamiliar nineteenth-century language from context, and summarise character and setting using evidence.",
  standards: ["KS3 Reading", "AO1"],
  vocabulary: [
    { term: "Inference", definition: "A conclusion you reach by combining clues in the text with your own reasoning, rather than something stated directly." },
    { term: "Context clue", definition: "A word or detail near an unfamiliar word that helps you work out its meaning." },
    { term: "Connotation", definition: "The feelings or ideas a word suggests beyond its dictionary meaning." },
    { term: "Archaic", definition: "Old-fashioned language that is no longer in everyday use." },
    { term: "Summary", definition: "A short account in your own words of the main points of a text." },
    { term: "Setting", definition: "The time and place in which a story happens, including the atmosphere created." },
    { term: "Characterisation", definition: "The methods a writer uses to present a character: description, speech, actions and what others think of them." },
  ],
  concepts: [
    {
      id: "el9-u1-inference-unfamiliar-language",
      title: "Inference from unfamiliar language",
      skill: "Work out the meaning of unfamiliar or archaic words from context and infer what they suggest about character and situation.",
      lesson: {
        sections: [
          {
            heading: "Reading around the word",
            body: "Nineteenth-century writers use long sentences and a richer vocabulary than we do today. You will not know every word, and you do not need to. Read the whole sentence, look at the words either side, and ask: is the word positive or negative? Does it describe a person, a place or an action? In 'the candles guttered upon the desk', the surrounding words 'ill-lit' and 'sickly glimmer' tell you the light is weak, so 'guttered' must mean something like 'flickered feebly'.",
          },
          {
            heading: "From meaning to inference",
            body: "Once you have a likely meaning, ask what it suggests. Explicit meaning is what the words say; implicit meaning is what they hint at. When a clerk descends 'with an alacrity that surprised even himself', the word 'alacrity' means eager speed. The detail that he is surprised suggests he rarely moves with such energy, so the visitor has an unusual effect on him. Always support an inference with a short, embedded quotation.",
          },
        ],
        keyFormulas: [
          { name: "Context clue", statement: "Use nearby words and the tone of the sentence to estimate an unfamiliar word's meaning." },
          { name: "Explicit and implicit", statement: "Explicit meaning is stated; implicit meaning is suggested and must be inferred." },
          { name: "Embedded quotation", statement: "Fit a short quotation into your own sentence, for example: Pellew is 'wary', suggesting he expects disappointment." },
        ],
        workedExample: {
          problem: "What does the phrase 'scarcely deigned to remove his hat' suggest about the visitor?",
          solution: "The verb 'deigned' means to do something as if it were a favour beneath one's dignity. The visitor is therefore presented as arrogant: he treats the simple courtesy of removing his hat as a concession he barely grants. The adverb 'scarcely' reinforces this, suggesting he gives Pellew the minimum of respect. This contrasts with Pellew's 'profound' bow, setting up an imbalance of status between the two men.",
        },
      },
      questions: [
        {
          id: "el9-u1-inference-unfamiliar-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COUNTING_HOUSE,
          stem: "In the first paragraph, the writer says the candles 'guttered upon the desk'. What does 'guttered' most likely mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Had already been put out" },
              { id: "b", text: "Dripped wax onto the ledgers" },
              { id: "c", text: "Burned with a bright, steady flame" },
              { id: "d", text: "Flickered weakly as if close to going out" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Context clues", statement: "Use surrounding words ('ill-lit', 'sickly glimmer') to infer a word's meaning." }],
            steps: [{ reasoning: "The office is gloomy and the light described as a 'sickly glimmer', so 'guttered' means a weak, unsteady flame.", evidence: "cast their sickly glimmer", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Flickered weakly as if close to going out. The surrounding description of dim, sickly light supports this.",
            commonErrors: ["Choosing (c) because the word sounds like 'gutter' and wax does drip from candles, but the sentence is about the quality of light.", "Choosing (a) because candles are normally associated with warmth."],
          },
        },
        {
          id: "el9-u1-inference-unfamiliar-language-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COUNTING_HOUSE,
          stem: "Pellew 'descended from his perch with an alacrity that surprised even himself'. Explain what this tells you about Pellew. Use a quotation in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Meaning then inference", statement: "State the likely meaning of the word, then say what it suggests in this context." },
              { kind: "skill", name: "Embedding quotations", statement: "Weave short quotations into your own sentences." },
            ],
            steps: [
              { reasoning: "Defines 'alacrity' as brisk eagerness or readiness to act.", evidence: "an alacrity", marks: 1, markCode: "AO1" },
              { reasoning: "Infers that because he is 'surprised even himself', such energy is unusual for a man worn down by thirty-one years of routine.", evidence: "surprised even himself", marks: 1, markCode: "AO1" },
              { reasoning: "Links to context: he reacts eagerly or anxiously to the visitor, suggesting deference or hope that something may change.", evidence: "a bow so profound", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Alacrity' means eager speed. Because Pellew is 'surprised even himself', we infer that he is normally slow and defeated, so the visitor's arrival jolts him into unusual eagerness, perhaps from respect or fear.",
            commonErrors: ["Treating 'alacrity' as meaning 'slowness' or ignoring the word altogether.", "Giving a meaning but no inference about Pellew."],
          },
        },
        {
          id: "el9-u1-inference-unfamiliar-language-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: COUNTING_HOUSE,
          stem: "Explain what the phrases 'scarcely deigned to remove his hat' and 'like a penitent' suggest about the relationship between the visitor and Pellew.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from vocabulary", statement: "Work out the meaning of difficult words, then explain the implication for character." },
              { kind: "technique", name: "Simile", statement: "A comparison using 'like' or 'as' that adds a suggestion to the description." },
            ],
            steps: [
              { reasoning: "'Deigned' means to condescend, so the visitor behaves as though basic politeness is a favour: he is proud and disrespectful.", evidence: "scarcely deigned to remove his hat", marks: 1, markCode: "AO1" },
              { reasoning: "The visitor's curt orders ('fetch', 'be quick about it') confirm that he expects obedience and sees Pellew as inferior.", evidence: "I have no leisure to squander upon the likes of you", marks: 1, markCode: "AO1" },
              { reasoning: "A 'penitent' is someone sorry for wrongdoing, so the simile suggests Pellew behaves as if he has done something wrong, showing humility and fear.", evidence: "like a penitent", marks: 1, markCode: "AO1" },
              { reasoning: "Together the phrases suggest a relationship of unequal power: arrogant master and submissive servant.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The visitor 'scarcely deigned' to show courtesy, so he is arrogant; Pellew leaves 'like a penitent', so he is humbled and afraid. The pair are clearly unequal in power, with the visitor commanding and Pellew obeying.",
            commonErrors: ["Explaining only one of the two phrases.", "Saying the visitor is 'rude' without explaining which word shows it."],
          },
        },
        {
          id: "el9-u1-inference-unfamiliar-language-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: COUNTING_HOUSE,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two details from the first paragraph which show that the counting-house is a gloomy place.", marks: 2 },
            { label: "b", prompt: "Explain what 'a faint tremor passed along his jaw' suggests about Pellew's feelings.", marks: 4 },
            { label: "c", prompt: "How does the writer present the difference in power between Pellew and the visitor? Support your answer with quotations.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select short, accurate details that answer the question exactly." },
              { kind: "technique", name: "Implication through physical detail", statement: "Writers show feelings through body language rather than naming the emotion." },
              { kind: "skill", name: "PEE", statement: "Point, evidence, explanation: make a point, support it with a quotation and explain its effect." },
            ],
            steps: [
              { part: "a", reasoning: "Any one detail such as the window obscured by grime.", evidence: "obscured by the grime of the court", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any second detail such as candles needed at noon or the sickly glimmer.", evidence: "even at noon a pair of tallow candles", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A 'tremor' is an involuntary shake, so the reaction is not chosen: he cannot fully control his feelings.", evidence: "a faint tremor", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Faint' suggests he is suppressing the feeling, hiding it from the visitor.", evidence: "faint", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Infers the emotion: humiliation, resentment or anger at being insulted.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Notes that he 'said nothing', so the feeling is held back because he is powerless to respond.", evidence: "Pellew said nothing", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The visitor is presented as dismissive and commanding through his language and manner.", evidence: "scarcely deigned to remove his hat", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Pellew is presented as deferential through his exaggerated bow and silence.", evidence: "a bow so profound that his spectacles slid down his nose", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Contrast in appearance (fur-collared coat against faded coat) and the closing simile show social inequality and Pellew's humbling.", evidence: "like a penitent", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5-6", descriptor: "Thorough, well-chosen quotations; clear analysis of how language and detail create the power imbalance." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some understanding of the imbalance; some relevant quotations with partial explanation." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments with few or no references to the text." },
            ],
            finalAnswer: "(a) The window is 'obscured by the grime'; candles are needed 'even at noon'. (b) The 'faint tremor' suggests suppressed humiliation or anger that he cannot express. (c) The visitor barely 'deigned' to be polite and gives curt commands, while Pellew's 'profound' bow and silence and the simile 'like a penitent' show him cowed; the contrast of the fur-collared coat with Pellew's faded one reinforces the inequality.",
            commonErrors: ["Retelling what happens without commenting on how power is shown.", "Quoting long chunks instead of short embedded phrases.", "Writing about Pellew only and forgetting the visitor."],
          },
        },
      ],
    },
    {
      id: "el9-u1-summarising-character-setting",
      title: "Summarising character and setting",
      skill: "Summarise character and setting concisely in your own words, selecting the most relevant evidence.",
      lesson: {
        sections: [
          {
            heading: "What a summary is",
            body: "A good summary is shorter than the original, uses your own words, and keeps only the points that answer the question. Highlight evidence first, group related details (for example everything about weather), then write one clear sentence for each group. Do not copy whole sentences, and do not add opinions the text does not support.",
          },
          {
            heading: "Summarising setting and character together",
            body: "In fiction, setting often reveals character. A girl who walks calmly through a hostile marsh is presented as brave and practical. Summarise setting by naming place, time, weather and atmosphere. Summarise character by combining what we are told, what she does, and how others treat her. Linking the two shows deeper understanding: 'The bleak marsh emphasises how self-reliant Hester is.'",
          },
        ],
        keyFormulas: [
          { name: "Summary", statement: "Select, group and rewrite in your own words; keep only what answers the question." },
          { name: "Setting", statement: "Place, time, weather and atmosphere in which events occur." },
          { name: "Characterisation", statement: "Description, speech, actions and others' reactions combine to show what a character is like." },
        ],
        workedExample: {
          problem: "In no more than 30 words, summarise what the first paragraph of 'Salt Marsh, November' tells you about the setting.",
          solution: "A bleak, misty marsh at dusk: the road is vanishing, the reeds are lifeless, a bird cries eerily and the tide is coming, so the place feels lonely and threatening. (28 words.) The summary groups time (four o'clock, early dark), weather (mist) and atmosphere (mournful cry) rather than copying the text.",
        },
      },
      questions: [
        {
          id: "el9-u1-summarising-character-setting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SALT_MARSH,
          stem: "Which of the following is the best one-sentence summary of the setting in the first paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A lonely, misty marshland as evening and the tide approach" },
              { id: "b", text: "A busy farmyard where the day's work is ending" },
              { id: "c", text: "A dangerous sea crossing in the middle of a storm" },
              { id: "d", text: "A quiet village green on a mild autumn afternoon" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "A summary captures the main features of the whole passage, not one detail." }],
            steps: [{ reasoning: "The mist, colourless reeds, early dark and incoming tide all establish a lonely marsh at dusk.", evidence: "by four o'clock the mist had swallowed the last of it", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** The passage describes mist, reeds, creeks and the incoming tide in a deserted marsh at dusk.",
            commonErrors: ["Choosing (c) because the sea is mentioned; there is no storm or crossing.", "Choosing (d) because of the farm at the end, which is only the destination."],
          },
        },
        {
          id: "el9-u1-summarising-character-setting-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SALT_MARSH,
          stem: "In your own words, summarise what the second paragraph tells you about Hester's situation. Write no more than 40 words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Own words", statement: "Rephrase the text instead of copying phrases." },
              { kind: "skill", name: "Selection", statement: "Choose only the points that answer the question." },
            ],
            steps: [
              { reasoning: "She has been sent by her aunt on an errand to a farm.", evidence: "sent to the Hallidays' farm by her aunt", marks: 1, markCode: "AO1" },
              { reasoning: "Her aunt has not considered that she might be frightened, so she is young and not looked after with much care.", evidence: "had not troubled to ask whether a girl of fourteen might be afraid", marks: 1, markCode: "AO1" },
              { reasoning: "She is poor and practical: she mends her own boots and is used to the sea.", evidence: "patched twice by her own hand", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Hester, a fourteen-year-old, has been sent alone on an errand by an uncaring aunt; she is poor and resourceful, used to the sea and to mending her own worn boots.",
            commonErrors: ["Copying whole phrases word for word.", "Exceeding the word limit and including irrelevant detail such as the curlew.", "Giving only the errand and missing the implication about her aunt."],
          },
        },
        {
          id: "el9-u1-summarising-character-setting-q3",
          difficulty: "challenge",
          totalMarks: 5,
          extract: SALT_MARSH,
          stem: "What impression do you get of Hester's character in this extract? Support your answer with evidence from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Characterisation", statement: "Combine what a character does, thinks and is described as to build an impression." },
              { kind: "skill", name: "Embedding quotations", statement: "Use short quotations to support each point." },
            ],
            steps: [
              { reasoning: "Brave but unwilling to admit fear: she is 'not afraid, or so she told herself', yet will not look behind her.", evidence: "or so she told herself", marks: 1, markCode: "AO1" },
              { reasoning: "Practical and skilled: she patches her own boots and wrings out her skirts efficiently.", evidence: "a grim and practised efficiency", marks: 1, markCode: "AO1" },
              { reasoning: "Responsible and careful: she counts the eggs and holds them close.", evidence: "eleven, all whole", marks: 1, markCode: "AO1" },
              { reasoning: "Resilient: she continues despite sodden boots and cold, heading for the lit window.", evidence: "went on towards the single yellow window", marks: 1, markCode: "AO1" },
              { reasoning: "Links to setting or relationship: her self-reliance is shaped by the hostile marsh and a careless aunt.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Hester appears resilient, practical and responsible. She tells herself she is 'not afraid' though she will not look behind her, she mends her own boots, protects the eggs, and keeps going despite the cold, suggesting she has learned self-reliance because nobody else looks after her.",
            commonErrors: ["Describing the marsh without linking it to Hester.", "Offering one trait with no quotation.", "Retelling the journey in order."],
          },
        },
        {
          id: "el9-u1-summarising-character-setting-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: SALT_MARSH,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two details from the first paragraph which suggest the weather and time of day are unwelcoming.", marks: 2 },
            { label: "b", prompt: "In your own words, summarise what the extract tells you about the setting. Write no more than 50 words.", marks: 4 },
            { label: "c", prompt: "How does the writer use the setting to help the reader understand Hester's character? Support your answer with quotations.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Summarising", statement: "Select and group points, then express them in your own words." },
              { kind: "technique", name: "Pathetic fallacy", statement: "Weather or landscape that reflects mood, or in this case tests the character." },
              { kind: "skill", name: "Linking setting and character", statement: "Show how the environment reveals how a character responds to difficulty." },
            ],
            steps: [
              { part: "a", reasoning: "Mist has covered the road.", evidence: "the mist had swallowed the last of it", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The dark comes early and the tide is approaching.", evidence: "the dark came early at this season", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Identifies the place: a remote coastal marsh with creeks and reeds.", evidence: "among the creeks", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Identifies the time and season: late afternoon in autumn or winter, with darkness approaching.", evidence: "by four o'clock", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Identifies the weather: mist and cold, with sodden ground.", evidence: "the cold crept upward", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Identifies atmosphere: lonely, eerie and slightly threatening, with a single farm light as the only comfort.", evidence: "the single yellow window", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The marsh is hostile and isolating; Hester's refusal to look back shows determination in the face of fear.", evidence: "she did not look behind her", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The personification of the cold with 'patient malice' makes the environment an adversary which Hester steadily endures.", evidence: "the cold crept upward with a patient malice", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Her familiarity with the sea ('kept its own counsel') shows she is shaped by this landscape: stoical and self-contained.", evidence: "it kept its own counsel", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The lit window at the close shows hope; her steady progress towards it underlines her resilience.", evidence: "the single yellow window", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 4", marks: "7-8", descriptor: "Perceptive, thorough analysis of how setting reveals character; well-chosen embedded quotations with developed comment on language." },
              { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear explanation of the link between setting and character; relevant quotations with some comment on language." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some understanding of the link; some relevant references but explanation is partial." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments; few references; may describe the setting without linking to Hester." },
            ],
            finalAnswer: "(a) The mist has swallowed the road and the dark comes early. (b) A remote, misty coastal marsh at dusk in the cold season, lonely and eerie, with only a distant farm light for comfort. (c) The hostile marsh tests Hester: she refuses to look behind her, endures the cold's 'patient malice', and is shaped by a sea that 'kept its own counsel', so she is stoical and resilient; the final lit window shows her hope.",
            commonErrors: ["Writing about setting and character separately.", "Copying phrases in the summary in (b).", "Spotting 'personification' without saying what it shows about Hester."],
          },
        },
      ],
    },
  ],
};
