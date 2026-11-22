import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string, top: 6 | 12 | 15, part?: string): MarkLevel[] => {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : top === 12 ? ["10-12", "8-9", "5-7", "3-4", "1-2"] : ["13-15", "10-12", "7-9", "4-6", "1-3"];
  const text = ranges.length === 3
    ? [`Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.`, `Clear, relevant ${focus}, with appropriate references and some analysis.`, `Simple, limited ${focus}, with few references and mostly description.`]
    : [`Perceptive, discriminating and assured ${focus}; precise, well-chosen references and terminology.`, `Thorough ${focus}; well-chosen references with developed analysis of effects.`, `Clear, relevant ${focus}; appropriate references with some analysis of effects.`, `Some understanding; ${focus} is partly relevant with some references.`, `Simple, limited ${focus}; few references, mostly description or retelling.`];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", ...(part ? { part } : {}) }));
};

const HARROW: TextExtract = {
  title: "The House on Harrow Fell",
  author: "Written for Akademik Space",
  lineNumbers: false,
  text: "The road ended at the gates, which hung from their hinges like broken teeth. Beyond them, Harrow Hall crouched against a bruised sky, its windows black and blind. A wind moaned through the dead elms, and somewhere inside the house a door slammed, once, as though in warning.\n\nThe air smelt of damp earth and something older, something sweet and rotten, like flowers left too long in a vase. The moon slid behind a cloud, and the darkness seemed to lean closer.\n\nMarianne had been told that nobody had lived there for forty years. Yet as she stood trembling on the gravel, she saw a single candle burning in the topmost window, and a pale shape moved slowly across the glass and was gone.\n\nShe should have turned back. Every instinct told her so. But the letter in her pocket, written in her dead mother's hand, bore this address, and so, with a breath that shook in her chest, she pushed open the creaking gate.",
};

const FRANK: TextExtract = {
  title: "The creation of the creature",
  author: "Mary Shelley",
  source: "Frankenstein (1818), Chapter 5",
  text: "It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.\n\nHow can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form?",
};

export const lesson11: Lesson = {
  id: "et9-u1-lesson-1-1",
  code: "1-1",
  title: "Gothic Conventions and Atmosphere",
  goal: "I CAN identify the conventions of gothic fiction and explain how writers use setting to create atmosphere.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Gothic", definition: "A genre of fiction, popular from the late eighteenth century, that combines mystery, fear, the supernatural and decaying or isolated settings." },
    { term: "Convention", definition: "A feature readers expect to find in a particular genre, such as a haunted house in gothic fiction." },
    { term: "Atmosphere", definition: "The mood or feeling a writer creates in a scene, often through setting and word choice." },
    { term: "Pathetic fallacy", definition: "Giving weather or landscape a mood that mirrors the characters' feelings or the events of the story." },
    { term: "Personification", definition: "Describing a non-human thing as if it had human qualities or actions." },
    { term: "Foreboding", definition: "A strong feeling that something bad is going to happen." },
    { term: "Sublime", definition: "Something so vast, wild or powerful that it inspires awe mixed with fear." },
  ],
  concepts: [
    {
      id: "et9-u1-gothic-conventions",
      title: "Gothic conventions",
      skill: "Recognise the typical features of gothic fiction and explain why writers use them.",
      lesson: {
        sections: [
          {
            heading: "What makes writing gothic?",
            body: "Gothic fiction is designed to unsettle. Readers expect **isolated or decaying settings** (castles, mansions, laboratories), **mystery and secrets**, **the supernatural or unnatural**, **extreme emotion** such as terror and despair, and **vulnerable characters** who are drawn towards danger. Gothic stories often take place at night and in stormy weather. These features are called conventions: a writer may follow them, or twist them to surprise the reader.",
          },
          {
            heading: "From convention to effect",
            body: "Spotting a convention earns very little on its own. A strong answer names the convention, quotes the words that show it, and explains **what it makes the reader feel or think**. For example, a house described as 'crouched' seems like a predatory animal waiting to pounce, so the reader senses danger before anything has happened.",
          },
        ],
        keyFormulas: [
          { name: "Gothic setting", statement: "Isolated, decaying or enclosed places that make characters feel trapped or watched." },
          { name: "Pathetic fallacy", statement: "Weather that mirrors mood: storms for turmoil, fog for confusion." },
          { name: "Foreboding", statement: "Hints, omens and warnings that make the reader expect danger." },
        ],
        workedExample: {
          problem: "How does the writer create a sense of danger in the first paragraph of 'The House on Harrow Fell'?",
          solution: "The writer creates danger through personification and gothic setting. The gates 'hung from their hinges like broken teeth', a simile that makes the entrance seem like a decayed, threatening mouth, suggesting that anyone who enters will be swallowed. The house 'crouched' under a 'bruised sky': the verb makes the building seem like a predator ready to spring, while the 'bruised' sky suggests violence has already happened. Finally, the door 'slammed, once, as though in warning' personifies the house as a speaker, so that the reader feels the heroine is already unwelcome and in peril.",
        },
      },
      questions: [
        {
          id: "et9-u1-gothic-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HARROW,
          stem: "Which of these is a typical gothic convention found in the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A crumbling, isolated building at night" },
              { id: "b", text: "A comic character who lightens the mood" },
              { id: "c", text: "A cheerful reunion between old friends" },
              { id: "d", text: "Futuristic technology that solves a mystery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Gothic setting", statement: "Gothic fiction typically uses isolated, decaying buildings, often at night, to create fear." }],
            steps: [{ reasoning: "The decayed gates and the dark, 'black and blind' house are classic gothic settings.", evidence: "Harrow Hall crouched against a bruised sky", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** A crumbling, isolated building at night, as shown by the broken gates and dark hall.",
            commonErrors: ["Choosing a feature that belongs to another genre such as comedy or science fiction."],
          },
        },
        {
          id: "et9-u1-gothic-conventions-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: HARROW,
          stem: "Give two different gothic conventions in the extract. Support each with a short quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Convention plus evidence", statement: "Name the feature and support it with a short, accurate quotation." }],
            steps: [
              { reasoning: "A ruined, haunted setting, supported by a quotation about the decaying gates or house.", evidence: "gates, which hung from their hinges like broken teeth", marks: 1, markCode: "AO1" },
              { reasoning: "A supernatural or mysterious presence, shown by the figure in the window of an abandoned house.", evidence: "a pale shape moved slowly across the glass and was gone", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Ruined setting: 'hung from their hinges like broken teeth'. Mystery or supernatural presence: 'a pale shape moved slowly across the glass and was gone'. Also acceptable: night and weather ('A wind moaned'), a secret connected to the past ('the letter ... in her dead mother's hand').",
            commonErrors: ["Giving two examples of the same convention.", "Naming a convention without a quotation."],
          },
        },
        {
          id: "et9-u1-gothic-conventions-q3",
          difficulty: "challenge",
          totalMarks: 5,
          extract: HARROW,
          stem: "How does the writer use language to create a threatening atmosphere in the first paragraph (the first three sentences)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Giving buildings or nature human or animal actions makes the setting seem alive and hostile." },
              { kind: "technique", name: "Simile", statement: "A comparison using 'like' or 'as' can make an ordinary object seem sinister." },
            ],
            steps: [
              { reasoning: "The simile compares the gates to 'broken teeth', suggesting a decayed mouth and a place ready to swallow visitors.", evidence: "hung from their hinges like broken teeth", marks: 1, markCode: "AO2" },
              { reasoning: "'Crouched' personifies the hall as a predator, creating a sense of threat.", evidence: "Harrow Hall crouched", marks: 1, markCode: "AO2" },
              { reasoning: "'Black and blind' windows suggest emptiness yet also something that watches; the alliteration adds a hard, harsh sound.", evidence: "windows black and blind", marks: 1, markCode: "AO2" },
              { reasoning: "The wind 'moaned' like a ghost or a suffering person, and the 'dead elms' emphasise decay.", evidence: "A wind moaned through the dead elms", marks: 1, markCode: "AO2" },
              { reasoning: "The slammed door 'as though in warning' makes the house seem sentient, increasing foreboding.", evidence: "a door slammed, once, as though in warning", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Model: The writer builds threat by making the setting seem alive. The gates are 'like broken teeth', a simile that suggests a decayed mouth, and the hall 'crouched', a predatory verb. The windows are 'black and blind', and the wind 'moaned', so that the whole landscape seems to suffer or watch. The slammed door 'as though in warning' completes the effect: the house itself seems to threaten the visitor.",
            commonErrors: ["Spotting 'simile' without explaining the effect.", "Retelling what happens instead of analysing word choice."],
          },
        },
        {
          id: "et9-u1-gothic-conventions-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: HARROW,
          stem: "Read the whole extract and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two details from the first paragraph that show the house is abandoned or sinister.", marks: 2 },
            { label: "b", prompt: "Explain what the writer suggests about Marianne's feelings in the final paragraph.", marks: 4 },
            { label: "c", prompt: "How does the writer use gothic conventions to build suspense in the extract as a whole?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Gothic suspense", statement: "Gothic writers delay revelation, using omens, unexplained events and a vulnerable character to hold the reader's attention." },
              { kind: "skill", name: "PETAL", statement: "Point, evidence, technique, analysis of effect, link to the question." },
            ],
            steps: [
              { part: "a", reasoning: "The gates are broken or decayed.", evidence: "hung from their hinges like broken teeth", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The windows are dark and lifeless, or the trees are dead.", evidence: "windows black and blind", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Marianne is afraid: her instincts tell her to leave.", evidence: "Every instinct told her so", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Her fear is physical, shown by trembling and a shaking breath.", evidence: "a breath that shook in her chest", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "She is also driven by emotion for her mother, so love overrides her fear.", evidence: "written in her dead mother's hand", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The short sentence 'She should have turned back.' shows her awareness of danger and warns the reader.", evidence: "She should have turned back.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Isolated, decaying setting and personified house build foreboding from the start.", evidence: "crouched against a bruised sky", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Pathetic fallacy: the wind, moon and darkness mirror the threat and 'lean closer' as if closing in.", evidence: "the darkness seemed to lean closer", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Mystery: the light and the pale shape in a house empty for forty years raise questions.", evidence: "a single candle burning in the topmost window", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Sensory detail (smell of 'sweet and rotten' flowers) suggests decay and death.", evidence: "something sweet and rotten", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "A secret from the past (the letter) draws a vulnerable heroine into danger, which creates suspense.", evidence: "bore this address", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The structure moves from the outside of the house to the heroine's choice, ending on the creaking gate, a cliffhanger.", evidence: "pushed open the creaking gate", marks: 1, markCode: "AO2" },
            ],
            levels: bands("exploration of gothic conventions and suspense", 6, "c"),
            finalAnswer: "(a) 'broken teeth' gates; 'windows black and blind' (also 'dead elms', 'nobody had lived there for forty years'). (b) Marianne is frightened ('trembling', 'a breath that shook') and knows she should leave, yet love for her mother compels her to continue. (c) Suspense is built by a decaying, personified setting, pathetic fallacy, the unexplained light and figure, sensory details of decay, and a vulnerable heroine who ignores warnings and ends the extract entering the gate.",
            commonErrors: ["Listing conventions with no discussion of suspense.", "Quoting long sections instead of short, embedded quotations.", "Ignoring the structure of the extract."],
          },
        },
      ],
    },
    {
      id: "et9-u1-setting-atmosphere",
      title: "Setting and atmosphere",
      skill: "Analyse how a writer uses time, weather and sensory detail to create atmosphere.",
      lesson: {
        sections: [
          {
            heading: "How setting builds mood",
            body: "Setting is more than where a story happens. Writers choose **time** (night, November), **weather** (rain, fog), **light** (candlelight, shadow) and **sensory detail** (sound, smell) to create atmosphere. In gothic fiction the setting often reflects a character's inner state: this is **pathetic fallacy**. Look at the verbs and adjectives: they carry the mood.",
          },
          {
            heading: "Reading Frankenstein's laboratory",
            body: "In the extract from Frankenstein, Mary Shelley deliberately sets the moment of triumph in a gloomy, lonely place. The reader expects excitement, but gets 'dreary' November and 'dismal' rain. This **contrast** between Victor's achievement and the bleak setting warns that his success will bring misery. Notice also how the 'half-extinguished' light mirrors the fading of Victor's confidence.",
          },
        ],
        keyFormulas: [
          { name: "Pathetic fallacy", statement: "Weather or setting that mirrors the mood of a character or scene." },
          { name: "Sensory language", statement: "Words appealing to sight, sound, smell, touch or taste to make a scene vivid." },
          { name: "Contrast", statement: "Placing opposites side by side so that one highlights the other." },
        ],
        workedExample: {
          problem: "How does Shelley create atmosphere in the first sentence of the extract?",
          solution: "Shelley opens with 'a dreary night of November', setting the creation in a cold, dark and lifeless time of year; 'dreary' is a negative adjective that immediately contradicts the idea of 'accomplishment'. The contrast suggests that Victor's triumph will not bring happiness. The abstract noun 'toils' shows how long he has laboured, so the reader senses that he has sacrificed his life for this moment, and the atmosphere is one of exhaustion and dread rather than celebration.",
        },
      },
      questions: [
        {
          id: "et9-u1-setting-atmosphere-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FRANK,
          stem: "The rain 'pattered dismally against the panes'. What does the word 'dismally' suggest about the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That it is gloomy and depressing" },
              { id: "b", text: "That it is gentle and comforting" },
              { id: "c", text: "That the rain has a calming rhythm" },
              { id: "d", text: "That the storm is loud and violent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Connotation", statement: "A word carries associations beyond its literal meaning; 'dismally' means in a way that causes gloom." }],
            steps: [{ reasoning: "'Dismally' connotes misery and low spirits, matching Victor's unease.", evidence: "pattered dismally against the panes", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Gloomy and depressing. 'Pattered' is gentle, so (b) and (d) misread the word 'dismally', which is negative.",
            commonErrors: ["Choosing (d) because 'pattered' sounds soothing, ignoring 'dismally'.", "Choosing (c) because rain at night is assumed to be stormy; the verb 'pattered' is light."],
          },
        },
        {
          id: "et9-u1-setting-atmosphere-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FRANK,
          stem: "Explain what the phrase 'my candle was nearly burnt out' suggests about the atmosphere and about Victor.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explaining with evidence", statement: "Quote briefly, then explain the suggestion or implication of the words." }],
            steps: [
              { reasoning: "The failing light creates a dark, eerie atmosphere in which shapes are hard to see and the creature's eye appears from the gloom.", evidence: "my candle was nearly burnt out", marks: 1, markCode: "AO2" },
              { reasoning: "It suggests Victor has worked for so long that his resources and energy are almost spent.", evidence: "my candle was nearly burnt out", marks: 1, markCode: "AO1" },
              { reasoning: "The dying flame can symbolise fading hope or the fragility of life as he 'infuses' it into the creature.", evidence: "half-extinguished light", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The nearly dead candle creates a dim, eerie atmosphere, shows Victor is exhausted after long toil, and symbolically contrasts the fading light with the new life he creates.",
            commonErrors: ["Saying only that the room is dark.", "No reference to Victor."],
          },
        },
        {
          id: "et9-u1-setting-atmosphere-q3",
          difficulty: "challenge",
          totalMarks: 5,
          extract: FRANK,
          stem: "How does Shelley use time, weather and light to create atmosphere in the first paragraph?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pathetic fallacy", statement: "Weather mirrors mood, here gloom and unease." },
              { kind: "skill", name: "Embedded quotations", statement: "Weave short quotations into your own sentences." },
            ],
            steps: [
              { reasoning: "The month and adjective 'dreary night of November' evoke cold, darkness and decline, in contrast to a triumphant 'accomplishment'.", evidence: "a dreary night of November", marks: 1, markCode: "AO2" },
              { reasoning: "The precise time, 'one in the morning', suggests isolation and the unnatural hours of secret experiments.", evidence: "already one in the morning", marks: 1, markCode: "AO2" },
              { reasoning: "The rain is personified as 'pattered dismally', mirroring Victor's anxious mood.", evidence: "the rain pattered dismally against the panes", marks: 1, markCode: "AO2" },
              { reasoning: "The dwindling light makes the scene shadowy and increases tension before the creature opens its eye.", evidence: "the glimmer of the half-extinguished light", marks: 1, markCode: "AO2" },
              { reasoning: "The semi-colons and long sentence build tension in a slow accumulation of detail before the climax.", evidence: "it breathed hard, and a convulsive motion agitated its limbs", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Shelley sets the creation on 'a dreary night of November' at 'one in the morning', so that time and season suggest death and isolation. The rain 'pattered dismally' and the candle is 'nearly burnt out', which mirror Victor's anxiety and create a dim, tense atmosphere in which the creature's eye suddenly appears.",
            commonErrors: ["Only describing what is in the room.", "Treating the weather as simply realistic background."],
          },
        },
        {
          id: "et9-u1-setting-atmosphere-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: FRANK,
          stem: "Read the extract from Chapter 5 of Frankenstein and answer the questions.",
          parts: [
            { label: "a", prompt: "Give two details of the setting at the moment the creature comes to life.", marks: 2 },
            { label: "b", prompt: "Explain how the second paragraph shows Victor's feelings about his creation.", marks: 4 },
            { label: "c", prompt: "How does Shelley use setting and Victor's feelings to create tension at the moment of creation?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical question", statement: "A question that is not meant to be answered, used to show confusion or emotion." },
              { kind: "technique", name: "Pathetic fallacy", statement: "Setting mirrors mood." },
            ],
            steps: [
              { part: "a", reasoning: "It is a night in November, with rain.", evidence: "a dreary night of November", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It is one in the morning and the candle is almost out.", evidence: "my candle was nearly burnt out", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Victor cannot find words, showing overwhelming emotion.", evidence: "How can I describe my emotions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The word 'catastrophe' shows he now sees the creation as a disaster, not a triumph.", evidence: "this catastrophe", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Wretch' shows pity mixed with disgust, as he already rejects the creature.", evidence: "the wretch", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Infinite pains and care' suggests the great effort he put in, increasing the irony and bitterness of his reaction.", evidence: "such infinite pains and care", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Dreary season and late hour create an isolated, ominous mood.", evidence: "a dreary night of November", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Rain and failing candle give a dim, uncertain atmosphere; pathetic fallacy for Victor's unease.", evidence: "the rain pattered dismally", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The sentence builds slowly with semi-colons to the moment the eye opens, delaying the climax.", evidence: "I saw the dull yellow eye of the creature open", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The creature is called a 'thing' that is 'lifeless', then moves with 'convulsive' motion, which is unnatural and disturbing.", evidence: "a convulsive motion agitated its limbs", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Victor's 'anxiety that almost amounted to agony' shows his terror, so the reader shares it.", evidence: "anxiety that almost amounted to agony", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The shift to rhetorical questions in the second paragraph shows tension turning to horror and regret.", evidence: "or how delineate the wretch", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of setting and tension", 6, "c"),
            finalAnswer: "(a) A November night / one in the morning / rain / a nearly burnt-out candle. (b) Victor cannot find words, calls the event a 'catastrophe', pities and rejects the 'wretch', and bitterly remembers his 'infinite pains and care'. (c) Shelley builds tension through a dreary season and hour, rain and failing light, a long sentence delaying the opening of the creature's eye, unnatural 'convulsive' movement and Victor's agonised anxiety, then shifts to rhetorical questions that reveal horror.",
            commonErrors: ["Paraphrasing rather than analysing words.", "Not linking setting to tension.", "Writing about the whole novel rather than the extract."],
          },
        },
      ],
    },
  ],
};
