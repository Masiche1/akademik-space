import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "./levels.ts";

const BLIZZARD: TextExtract = {
  title: "The Long Night at Pike's Station",
  author: "Written for Akademik Space",
  text: "By noon the sky over the prairie had turned the color of old iron. Nell had been sent to the railroad station with a basket of bread for the stationmaster, and now the wind pushed at her like a giant hand, shoving her toward the tracks. Snow came sideways. Within minutes the fence posts, the road, and even the roof of the station had vanished into a white roar.\n\nShe found the door by feeling along the wall. Inside, a single stove glowed in the corner, and four strangers sat huddled around it without speaking. The stationmaster, a thin man with a gray mustache, looked up. 'Well,' he said. 'Looks like we are all stuck together.'\n\nNell had always been the kind of girl who kept to herself, who answered questions in as few words as possible. But as the hours passed and the stove ate through the last of the coal, she heard herself offering the bread, then offering to read aloud from the stationmaster's old newspaper, then laughing at a stranger's joke. By morning, when the sun finally cut through the clouds, she did not want to leave.",
};

const SPRING_POEM: TextExtract = {
  title: "Thaw",
  author: "Written for Akademik Space",
  text: "The river wakes and stretches, slow and wide,\nIts back of ice cracked open like a door;\nThe silver sparrows chatter on its side,\nAnd winter's iron grip is felt no more.\n\nThe snowmelt sings in every gutter, loud\nAnd laughing, tumbling down the muddy lane;\nThe sun, a golden shepherd, calls the cloud\nTo drift away and let the fields drink rain.",
  lineNumbers: true,
};

export const lesson12: Lesson = {
  id: "ela7-u1-lesson-1-2",
  code: "1-2",
  title: "Story Elements and Language",
  goal: "I CAN explain how setting shapes characters and plot, and analyze how figurative language, connotation, and sound devices affect meaning and tone.",
  standards: ["RL.7.3", "RL.7.4"],
  vocabulary: [
    { term: "Setting", definition: "The time and place of a story, including the conditions and atmosphere." },
    { term: "Plot", definition: "The sequence of events in a story, including conflict, climax, and resolution." },
    { term: "Figurative language", definition: "Language that means something beyond its literal meaning, such as simile and metaphor." },
    { term: "Connotation", definition: "The feelings or associations a word carries beyond its dictionary meaning." },
    { term: "Alliteration", definition: "The repetition of the same beginning sound in nearby words." },
    { term: "Tone", definition: "The author's attitude toward the subject, shown through word choice." },
  ],
  concepts: [
    {
      id: "ela7-u1-setting-shapes",
      title: "How setting shapes characters and plot",
      skill: "Explain how the time, place, and conditions of a story influence what characters do and how events unfold.",
      lesson: {
        sections: [
          {
            heading: "Setting is more than a backdrop",
            body: "Setting includes where and when a story happens, plus the weather, atmosphere, and conditions. In strong stories, setting is active: it creates problems for characters, limits their choices, and can change who they are. A blizzard, a crowded city, or a silent forest each pushes the plot in a different direction.",
          },
          {
            heading: "Linking setting to character and plot",
            body: "Ask three questions. What is the setting? How does it create the **conflict** or limit what characters can do? How does the character change or reveal personality in response? Support each answer with a short quotation. Name the cause and the effect: 'Because the storm traps them, Nell is forced to speak to strangers.'",
          },
        ],
        keyFormulas: [
          { name: "Setting", statement: "The time, place, and conditions in which a story takes place." },
          { name: "Cause and effect", statement: "A setting can cause events (plot) and reactions (character change)." },
          { name: "Atmosphere", statement: "The mood created by the setting, such as tense, cozy, or threatening." },
        ],
        workedExample: {
          problem: "How does the setting shape the plot of 'The Long Night at Pike's Station'?",
          solution: "The blizzard creates the central problem and drives the plot. The storm arrives suddenly, so 'Snow came sideways' and the landscape 'vanished into a white roar,' which leaves Nell no choice but to feel her way to the station. Because the station has only 'a single stove' and 'four strangers,' she is forced to spend the night with people she does not know. The setting therefore causes the main events, and it also leads to Nell's change: trapped together, she becomes open and friendly.",
        },
      },
      questions: [
        {
          id: "ela7-u1-setting-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BLIZZARD,
          stem: "Which detail best shows how the setting creates a problem for Nell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nell had been sent to the station with a basket of bread." },
              { id: "b", text: "The fence posts, the road, and even the roof of the station had vanished into a white roar." },
              { id: "c", text: "The stationmaster was a thin man with a gray mustache." },
              { id: "d", text: "A stranger told a joke." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Setting and conflict", statement: "Choose the detail that shows the setting making life harder or limiting choices." }],
            steps: [{ reasoning: "The vanishing landmarks show she cannot see where to go, so the weather creates danger and confusion.", evidence: "vanished into a white roar", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)**. The other choices describe people or events rather than the conditions that trap Nell.",
            commonErrors: ["Choosing (a), which explains why she was out but not the problem the setting creates."],
          },
        },
        {
          id: "ela7-u1-setting-shapes-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: BLIZZARD,
          stem: "How does the setting of the station change the way Nell behaves? Cite two pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Setting and character", statement: "Show the cause (setting) and the effect (change in the character), with evidence." }],
            steps: [
              { reasoning: "At the start Nell is reserved and speaks little, which is her usual character.", evidence: "kept to herself", marks: 1, markCode: "AO1" },
              { reasoning: "Because the storm forces her to stay with strangers for hours, she begins to share and join in.", evidence: "she heard herself offering the bread", marks: 1, markCode: "AO1" },
              { reasoning: "By the end she enjoys the company, which shows how the situation changed her.", evidence: "she did not want to leave", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Nell usually 'kept to herself,' but the storm traps her with strangers. As the hours pass, 'she heard herself offering the bread,' and by morning 'she did not want to leave.' The crowded, cut-off station pushes her to open up.",
            commonErrors: ["Describing the weather without linking it to Nell's behavior.", "Missing the contrast between the start and the end."],
          },
        },
        {
          id: "ela7-u1-setting-shapes-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: BLIZZARD,
          stem: "How does the author use the setting to build tension at the start of the passage and then to change the mood by the end? Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Atmosphere", statement: "Descriptive details of weather and place create a mood that can shift as events change." },
              { kind: "skill", name: "Evidence and explanation", statement: "Explain what each quotation makes the reader feel." },
            ],
            steps: [
              { reasoning: "The sky's iron color suggests something cold, hard, and threatening, which builds tension immediately.", evidence: "the color of old iron", marks: 2, markCode: "AO2" },
              { reasoning: "The wind is personified as a force that pushes Nell, which makes the danger feel personal and powerful.", evidence: "pushed at her like a giant hand", marks: 2, markCode: "AO2" },
              { reasoning: "Inside, the glowing stove brings warmth and safety, which begins to shift the mood from fear to comfort.", evidence: "a single stove glowed in the corner", marks: 2, markCode: "AO2" },
              { reasoning: "In the morning the sun cutting through the clouds signals relief and change, and the mood is hopeful.", evidence: "the sun finally cut through the clouds", marks: 2, markCode: "AO2" },
            ],
            levels: levels8(),
            finalAnswer: "The author starts with a threatening setting: the sky is 'the color of old iron' and the wind 'pushed at her like a giant hand,' which creates fear and a sense of helplessness. Inside the station, the mood begins to change as 'a single stove glowed in the corner,' a symbol of warmth. By morning, the sun 'cut through the clouds,' completing the shift from danger to comfort and reflecting Nell's own change.",
            commonErrors: ["Listing weather details without naming the mood they create.", "Describing only the beginning or only the end."],
          },
        },
        {
          id: "ela7-u1-setting-shapes-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: BLIZZARD,
          stem: "Answer all parts of this question about 'The Long Night at Pike's Station'.",
          parts: [
            { label: "a", prompt: "Give two details from the first paragraph that show how severe the storm is.", marks: 2 },
            { label: "b", prompt: "How does the setting force Nell to interact with the other people in the station?", marks: 4 },
            { label: "c", prompt: "Explain how the setting shapes both the plot and Nell's character. Use at least three pieces of textual evidence.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Setting and plot", statement: "Setting can cause the conflict and decide what events are possible." },
              { kind: "skill", name: "Setting and character", statement: "A character's reactions to the setting reveal or change personality." },
            ],
            steps: [
              { part: "a", reasoning: "Visibility has been lost.", evidence: "vanished into a white roar", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The wind is powerful enough to push a person.", evidence: "pushed at her like a giant hand", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She cannot see to leave, so she must shelter in the station.", evidence: "She found the door by feeling along the wall", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "There is only one stove, so everyone gathers in one place and must share space and supplies.", evidence: "four strangers sat huddled around it", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The storm is the cause of the plot: it traps everyone and creates the whole situation.", evidence: "Looks like we are all stuck together", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The shrinking coal supply increases pressure and pushes people to connect.", evidence: "the stove ate through the last of the coal", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Nell's shy nature is shown before the storm forces change.", evidence: "answered questions in as few words as possible", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "At the end her new openness shows the setting has changed her.", evidence: "laughing at a stranger's joke", marks: 2, markCode: "AO1" },
            ],
            levels: levels8("c"),
            finalAnswer: "(a) The landmarks 'vanished into a white roar'; the wind 'pushed at her like a giant hand.' (b) She cannot see to go elsewhere, so she finds 'the door by feeling along the wall' and must sit with 'four strangers' around the only stove. (c) The blizzard drives the plot by trapping everyone together, and the dwindling coal adds pressure. It also changes Nell: she begins as someone who 'answered questions in as few words as possible' but ends up 'laughing at a stranger's joke,' showing how the setting transforms her.",
            commonErrors: ["Describing the weather with no link to plot or character.", "Writing about only one of plot or character in (c)."],
          },
        },
      ],
    },
    {
      id: "ela7-u1-figurative-language",
      title: "Figurative language, connotation, and sound devices",
      skill: "Determine the meaning of figurative and connotative words and analyze how sound devices affect meaning and tone.",
      lesson: {
        sections: [
          {
            heading: "Figurative language",
            body: "Figurative language says one thing to mean another. A **simile** compares using 'like' or 'as'. A **metaphor** says one thing is another. **Personification** gives human actions to non-human things. To explain it, say what is being compared, what the two things share, and what feeling the comparison creates.",
          },
          {
            heading: "Connotation and tone",
            body: "Words with similar meanings can feel very different. 'Slim' and 'scrawny' both describe a thin person, but 'slim' is positive and 'scrawny' is negative. The feelings a word carries are its **connotations**. Authors choose words with connotations that build **tone**, such as hopeful, gloomy, or playful.",
          },
          {
            heading: "Sound devices",
            body: "Poets and writers use sound to add meaning. **Alliteration** repeats beginning sounds, **onomatopoeia** imitates sounds, and **rhyme** repeats ending sounds. Always connect the device to its effect: a soft, flowing 's' sound can feel gentle, while harsh 'k' sounds can feel sharp.",
          },
        ],
        keyFormulas: [
          { name: "Simile and metaphor", statement: "A simile compares with 'like' or 'as'; a metaphor states that one thing is another." },
          { name: "Connotation", statement: "The emotional associations of a word, apart from its dictionary definition." },
          { name: "Sound devices", statement: "Alliteration, rhyme, and onomatopoeia use sound to shape meaning and mood." },
        ],
        workedExample: {
          problem: "From 'Thaw': What does the phrase 'The sun, a golden shepherd' suggest?",
          solution: "This is a metaphor that compares the sun to a shepherd. A shepherd guides and cares for his flock, so the sun appears gentle and protective as it 'calls the cloud / To drift away.' The word 'golden' has warm, positive connotations of value and light. Together they create a hopeful, caring tone about the arrival of spring.",
        },
      },
      questions: [
        {
          id: "ela7-u1-figurative-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPRING_POEM,
          stem: "In line 2, 'Its back of ice cracked open like a door' is an example of which type of figurative language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Onomatopoeia" },
              { id: "d", text: "Alliteration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Simile", statement: "A comparison that uses 'like' or 'as'." }],
            steps: [{ reasoning: "The ice is compared to a door using the word 'like', so it is a simile.", evidence: "cracked open like a door", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Simile. A metaphor would state that the ice is a door without 'like' or 'as'.",
            commonErrors: ["Choosing metaphor because any comparison feels like a metaphor."],
          },
        },
        {
          id: "ela7-u1-figurative-language-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SPRING_POEM,
          stem: "In line 1, the poet writes that 'The river wakes and stretches.' What is the effect of describing the river this way?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the river seem like a living thing slowly coming back to life after winter." },
              { id: "b", text: "It shows that the river is dangerous and growing violent." },
              { id: "c", text: "It suggests the river is sleeping peacefully and will not change." },
              { id: "d", text: "It repeats the same sound at the beginning of two words." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Giving human actions to something non-human makes it feel alive and relatable." }],
            steps: [
              { reasoning: "'Wakes' and 'stretches' are human actions, so this is personification.", evidence: "The river wakes and stretches", marks: 1, markCode: "AO2" },
              { reasoning: "They suggest a slow, gentle return to life after winter's sleep, matching the theme of spring.", evidence: "slow and wide", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)**. The verbs are gentle, so (b) is wrong. The river is waking, not staying asleep, so (c) is wrong, and (d) names a different device.",
            commonErrors: ["Choosing (d) by confusing the verbs with alliteration."],
          },
        },
        {
          id: "ela7-u1-figurative-language-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SPRING_POEM,
          stem: "In the second stanza, how do the poet's word choices and sound devices help create a joyful tone? Use at least two pieces of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "Words carry feelings; positive words build a positive tone." },
              { kind: "technique", name: "Sound devices", statement: "Repeated sounds and lively sound words add energy and mood." },
            ],
            steps: [
              { reasoning: "Personification of the snowmelt as singing and laughing gives it joyful, musical connotations.", evidence: "The snowmelt sings in every gutter, loud / And laughing", marks: 2, markCode: "AO2" },
              { reasoning: "The lively verb 'tumbling' suggests playful, unstoppable energy, matching the excitement of spring.", evidence: "tumbling down the muddy lane", marks: 2, markCode: "AO2" },
              { reasoning: "The warm metaphor of the sun as a golden shepherd adds a caring, positive feeling.", evidence: "The sun, a golden shepherd", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 4", marks: "5-6", descriptor: "Thorough, precise analysis of how word choice and sound create a joyful tone, with well-chosen evidence." },
              { level: "Level 3", marks: "3-4", descriptor: "Clear explanation of tone with relevant evidence." },
              { level: "Level 2", marks: "2", descriptor: "Partial, general comment with limited evidence." },
              { level: "Level 1", marks: "1", descriptor: "Minimal comment with little evidence." },
            ],
            finalAnswer: "The poet creates a joyful tone through personification and lively word choice. The snowmelt 'sings' and is 'laughing,' giving it a happy, musical quality. The verb 'tumbling' adds playful energy, and the metaphor of the sun as 'a golden shepherd' has warm, caring connotations. Together they make spring feel full of life and celebration.",
            commonErrors: ["Naming a device with no effect.", "Writing only about the first stanza."],
          },
        },
        {
          id: "ela7-u1-figurative-language-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: SPRING_POEM,
          stem: "Answer all parts of this question about 'Thaw'.",
          parts: [
            { label: "a", prompt: "Identify the rhyme scheme of the first stanza. Give the rhyming words.", marks: 2 },
            { label: "b", prompt: "In line 4, what are the connotations of the phrase 'winter's iron grip'? What does it suggest about winter?", marks: 4 },
            { label: "c", prompt: "How does the poet use figurative language and sound to show the change from winter to spring? Use evidence from both stanzas.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhyme scheme", statement: "Label end sounds with letters, such as ABAB, to describe the pattern." },
              { kind: "technique", name: "Metaphor and connotation", statement: "A metaphor's word choices carry feelings that shape our view of the subject." },
            ],
            steps: [
              { part: "a", reasoning: "The scheme is ABAB.", evidence: "wide, door, side, more", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "The A rhyme is wide and side; the B rhyme is door and more.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Iron' connotes hardness, coldness, and strength, so winter feels cruel and difficult to resist.", evidence: "iron grip", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'Grip' suggests being held tightly and trapped, so winter seems like something that controls and restricts, and its end is a release.", evidence: "is felt no more", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Winter is a harsh, controlling force, while spring is described as gentle and alive.", evidence: "winter's iron grip", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Personification of the river and snowmelt shows nature waking up and rejoicing.", evidence: "The snowmelt sings", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Soft, flowing rhyme and the golden shepherd metaphor create a calm, hopeful tone that contrasts with the hard image of winter.", evidence: "a golden shepherd", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 4", marks: "5-6", descriptor: "Thorough, precise analysis of the change, linking figurative language and sound with well-chosen evidence from both stanzas." },
              { part: "c", level: "Level 3", marks: "3-4", descriptor: "Clear analysis with relevant evidence from the poem." },
              { part: "c", level: "Level 2", marks: "2", descriptor: "Partial comment with limited evidence." },
              { part: "c", level: "Level 1", marks: "1", descriptor: "Minimal comment with little evidence." },
            ],
            finalAnswer: "(a) ABAB: wide/side and door/more. (b) 'Iron' suggests something cold, hard, and unbreakable, and 'grip' suggests being held tightly, so winter feels cruel and controlling. (c) Winter is shown as a harsh force, 'iron grip,' while spring is full of life: the river 'wakes,' the snowmelt 'sings,' and the sun is 'a golden shepherd.' The warm connotations and flowing rhyme contrast with winter's hardness and create a hopeful tone.",
            commonErrors: ["Labeling the rhyme scheme without naming the words.", "In (b), defining the words but not explaining their feelings.", "In (c), using only one stanza."],
          },
        },
      ],
    },
  ],
};
