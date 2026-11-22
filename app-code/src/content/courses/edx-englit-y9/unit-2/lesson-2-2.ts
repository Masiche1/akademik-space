import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string, top: 6 | 12, part?: string): MarkLevel[] => {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : ["10-12", "8-9", "5-7", "3-4", "1-2"];
  const text = top === 6
    ? [`Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.`, `Clear, relevant ${focus}, with appropriate references and some analysis.`, `Simple, limited ${focus}, with few references and mostly description.`]
    : [`Perceptive, discriminating ${focus}; precise, well-chosen references and assured use of terminology.`, `Thorough ${focus}; well-chosen references with developed analysis of effects.`, `Clear, relevant ${focus}; appropriate references with some analysis.`, `Some understanding; ${focus} is partly relevant with some references.`, `Simple, limited ${focus}; few references, mostly description.`];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", ...(part ? { part } : {}) }));
};

const ANTHEM: TextExtract = {
  title: "Anthem for Doomed Youth (opening)",
  author: "Wilfred Owen",
  source: "Poems (1920)",
  lineNumbers: true,
  text: "What passing-bells for these who die as cattle?\nOnly the monstrous anger of the guns.\nOnly the stuttering rifles' rapid rattle\nCan patter out their hasty orisons.\nNo mockeries now for them; no prayers nor bells;\nNor any voice of mourning save the choirs,\nThe shrill, demented choirs of wailing shells;\nAnd bugles calling for them from sad shires.",
};

const WAR: TextExtract = {
  title: "The Last Letter Home",
  author: "Written for Akademik Space",
  lineNumbers: true,
  text: "The sky above the trench is a lid of lead.\nWe wait, and the waiting is its own kind of war.\nTonight the flares rise white and then fall slow\nlike petals from a tree that never bloomed.\nI write by a candle stub, hand cramped with cold,\nand think of the kitchen, the kettle, your voice.\nTell Mother that I am dry and warm and fed.\nTell her nothing else. She would not sleep.",
};

export const lesson22: Lesson = {
  id: "et9-u2-lesson-2-2",
  code: "2-2",
  title: "War Poetry and Comparing Poems",
  goal: "I CAN analyse how First World War poets present conflict and compare how two poems treat a shared theme.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2", "4ET1 AO3", "4ET1 AO4"],
  vocabulary: [
    { term: "Anthem", definition: "A song of celebration or praise, used ironically in Owen's title." },
    { term: "Orisons", definition: "Prayers (an old-fashioned word)." },
    { term: "Onomatopoeia", definition: "A word that imitates the sound it names, such as 'rattle' or 'stuttering'." },
    { term: "Sonnet", definition: "A fourteen-line poem, traditionally about love, here used by Owen to speak about death." },
    { term: "Compare", definition: "To explore similarities and differences between texts." },
    { term: "Contrast", definition: "A difference between two things, shown by placing them side by side." },
    { term: "Pity of war", definition: "Wilfred Owen's own phrase for the theme of his poetry: suffering, not glory." },
  ],
  concepts: [
    {
      id: "et9-u2-ww1-poetry",
      title: "First World War poetry",
      skill: "Analyse how war poets use sound, imagery and form to present suffering rather than glory.",
      lesson: {
        sections: [
          {
            heading: "From glory to grief",
            body: "At the start of the First World War (1914-1918) many poets, such as Rupert Brooke, wrote of war as noble. Soldier-poets like **Wilfred Owen** saw the trenches and wrote about **suffering, waste and the pity of war**. Owen was killed in November 1918, a week before the Armistice, and most of his poems were published after his death. His poems often challenge the old idea that it is sweet and fitting to die for your country.",
          },
          {
            heading: "How Owen builds meaning",
            body: "In 'Anthem for Doomed Youth' Owen uses a **sonnet**, a form for love and beauty, to mourn soldiers' deaths. The **simile** 'die as cattle' denies the soldiers dignity. **Onomatopoeia** ('stuttering rifles' rapid rattle') makes the sound of guns replace church bells, while **sibilance** and **alliteration** capture the harsh noise. Religious language ('passing-bells', 'orisons', 'choirs') is turned into weapons, showing that there is no proper funeral on the battlefield.",
          },
        ],
        keyFormulas: [
          { name: "Onomatopoeia", statement: "Words that imitate sounds, used to create the noise of battle." },
          { name: "Simile of degradation", statement: "'Die as cattle' compares soldiers to animals slaughtered in a herd." },
          { name: "Irony", statement: "A title like 'Anthem' for a poem about death sets up a gap between expectation and reality." },
        ],
        workedExample: {
          problem: "How does Owen present the soldiers' deaths in lines 1-4?",
          solution: "Owen presents the deaths as undignified and mechanical. He opens with a rhetorical question that asks what proper ceremony is possible 'for these who die as cattle', and the simile strips the men of individuality, comparing them to animals led to slaughter. The answer, 'Only the monstrous anger of the guns', personifies the weapons as furious, destructive creatures. The onomatopoeia of 'stuttering rifles' rapid rattle' reproduces the harsh clatter of gunfire, replacing the gentle sound of funeral bells with violence. Together these create a bitter tone and a sense that the men are mourned only by machines.",
        },
      },
      questions: [
        {
          id: "et9-u2-ww1-poetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ANTHEM,
          stem: "Which technique is used in 'stuttering rifles' rapid rattle' (line 3)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rhetorical question" },
              { id: "b", text: "Onomatopoeia and alliteration" },
              { id: "c", text: "Direct address to the reader" },
              { id: "d", text: "A metaphor for peace" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Onomatopoeia", statement: "Sound words imitate the noise they describe, and repeated r sounds add a harsh rattle." }],
            steps: [{ reasoning: "'Stuttering' and 'rattle' imitate gunfire, and the repeated 'r' creates a harsh sound.", evidence: "stuttering rifles' rapid rattle", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Onomatopoeia and alliteration: the sounds copy the noise of gunfire.",
            commonErrors: ["Picking (c) because the poem begins with a question; this line is not a question."],
          },
        },
        {
          id: "et9-u2-ww1-poetry-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ANTHEM,
          stem: "Explain what the simile 'die as cattle' (line 1) suggests about how soldiers are treated.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "A comparison that adds meaning." }],
            steps: [
              { reasoning: "Cattle are herded in large numbers, so soldiers are treated as a mass, not individuals.", evidence: "die as cattle", marks: 1, markCode: "AO2" },
              { reasoning: "Cattle are slaughtered without choice, suggesting soldiers are sent to die helplessly.", evidence: "die as cattle", marks: 1, markCode: "AO2" },
              { reasoning: "It denies dignity, which contrasts with the idea of heroic death.", evidence: "these who die as cattle", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The simile shows soldiers herded and slaughtered like animals, powerless and without dignity.",
            commonErrors: ["Saying only that soldiers are 'like cows'.", "No explanation."],
          },
        },
        {
          id: "et9-u2-ww1-poetry-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ANTHEM,
          stem: "How does Owen use sound and religious imagery to present the way soldiers die in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Onomatopoeia and sibilance", statement: "Sounds recreate battle and anger." },
              { kind: "technique", name: "Religious imagery turned bitter", statement: "Funeral language is replaced by weapons." },
            ],
            steps: [
              { reasoning: "'Passing-bells' is a funeral custom, yet the question shows there are none.", evidence: "What passing-bells", marks: 1, markCode: "AO2" },
              { reasoning: "The guns replace the bells and are personified as 'monstrous' and angry.", evidence: "the monstrous anger of the guns", marks: 1, markCode: "AO2" },
              { reasoning: "Onomatopoeia and alliteration recreate gunfire.", evidence: "stuttering rifles' rapid rattle", marks: 1, markCode: "AO2" },
              { reasoning: "'Patter out their hasty orisons' makes the rifles a mockery of prayer.", evidence: "hasty orisons", marks: 1, markCode: "AO2" },
              { reasoning: "The shells are the 'choirs', 'shrill, demented', which suggests madness and horror.", evidence: "The shrill, demented choirs of wailing shells", marks: 1, markCode: "AO2" },
              { reasoning: "The bitter tone shows that war denies grief and dignity.", marks: 1, markCode: "AO1" },
            ],
            levels: bands("analysis of sound and religious imagery", 6),
            finalAnswer: "Owen replaces the sounds of a funeral with the sounds of battle. The guns have a 'monstrous anger', the rifles 'patter out' a mockery of prayer, and the shells become 'shrill, demented choirs'. Onomatopoeia recreates the noise while religious words are twisted, so that the soldiers die without dignity or proper mourning.",
            commonErrors: ["Listing techniques only.", "Not mentioning religion."],
          },
        },
        {
          id: "et9-u2-ww1-poetry-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: ANTHEM,
          stem: "Read the opening of 'Anthem for Doomed Youth' and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things that replace the funeral bells in lines 1-4.", marks: 2 },
            { label: "b", prompt: "Explain how Owen presents the shells in lines 6-7.", marks: 6 },
            { label: "c", prompt: "How does Owen present the pity of war in this extract? Refer to language, form and context.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "First World War", statement: "Owen fought in the trenches and wrote about the suffering and waste of war." },
              { kind: "convention", name: "Sonnet", statement: "A form for love and beauty used here for mourning." },
            ],
            steps: [
              { part: "a", reasoning: "The anger of the guns.", evidence: "the monstrous anger of the guns", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The sound of the rifles.", evidence: "stuttering rifles' rapid rattle", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Shrill' suggests a piercing, painful sound.", evidence: "shrill", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Demented' suggests madness and chaos.", evidence: "demented", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Choirs' personifies the shells as singers, a perverse version of a funeral choir.", evidence: "choirs of wailing shells", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Wailing' links the shells to mourners and to screaming.", evidence: "wailing", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Repetition of 'choirs' emphasises the replacement of ritual by violence.", evidence: "choirs, / The shrill, demented choirs", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The effect is a bitter tone and a sense of horror.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Simile and imagery strip the soldiers of dignity.", evidence: "die as cattle", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Sound devices reproduce the noise of war and replace ritual.", evidence: "stuttering rifles' rapid rattle", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The sonnet form and ironic title ('Anthem') contrast beauty with brutality.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context: Owen was a soldier who rejected the idea of glorious death, writing about its pity.", marks: 3, markCode: "AO4" },
            ],
            levels: [...bands("analysis of the pity of war", 12, "c"), ...bands("analysis of the shells", 6, "b")],
            finalAnswer: "(a) The guns' anger; the rifles' rattle. (b) The shells are 'shrill, demented choirs' that wail like mourners, a chaotic, mad version of a funeral. (c) Owen shows the pity of war by denying soldiers dignity ('die as cattle'), replacing ritual with violent sound, and using an ironic anthem and sonnet form, informed by his own experience at the front.",
            commonErrors: ["No context.", "Detailed plot of the war instead of analysis."],
          },
        },
      ],
    },
    {
      id: "et9-u2-comparing-poems",
      title: "Comparing poems on a theme",
      skill: "Compare how two poets present a shared theme using language, form and structure.",
      lesson: {
        sections: [
          {
            heading: "Compare, do not just describe",
            body: "A comparison answer needs **connectives of similarity and difference**: 'similarly', 'likewise', 'whereas', 'in contrast', 'however'. Choose a **shared idea** (for example the cost of war) and compare **how** each poet presents it: not just what they say but the methods. Aim for a comparative point in every paragraph rather than writing about each poem separately.",
          },
          {
            heading: "Structuring the comparison",
            body: "Use an integrated structure. **Point** about the theme. **Evidence from poem A** with analysis. **Link** using a connective. **Evidence from poem B** with analysis. **Evaluate** the difference in perspective or method. Consider context: Owen wrote as a soldier; the speaker of the letter-poem is writing home to protect someone from the truth. Their purposes differ.",
          },
        ],
        keyFormulas: [
          { name: "Comparative connectives", statement: "Similarly, likewise, whereas, in contrast, by comparison, however." },
          { name: "AO3", statement: "Explore links and connections between texts: ideas, methods and contexts." },
          { name: "Integrated structure", statement: "Both poems discussed within each paragraph, linked by a clear theme." },
        ],
        workedExample: {
          problem: "Compare how Owen and the writer of 'The Last Letter Home' present the effects of war on ordinary people.",
          solution: "Both poems present war as a cruel burden that separates people from ordinary life, but they differ in tone. Owen's bitter question 'What passing-bells for these who die as cattle?' reveals public anger at mass death, whereas the letter-writer's quiet instruction 'Tell her nothing else' reveals private protectiveness. Similarly, both poets use simple images of home or ritual set against violence: Owen's absent bells are replaced by 'the monstrous anger of the guns', while the writer's 'kitchen, the kettle, your voice' are a fragile memory of safety. However, Owen uses loud sound imagery, in contrast to the muted, restrained images of the letter, showing that suffering can be public or hidden.",
        },
      },
      questions: [
        {
          id: "et9-u2-comparing-poems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WAR,
          stem: "In 'The Last Letter Home', what does the image 'a lid of lead' (line 1) suggest about the sky?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is about to rain" },
              { id: "b", text: "It is full of stars" },
              { id: "c", text: "It feels heavy and trapping" },
              { id: "d", text: "It is bright and welcoming" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "A direct comparison: the sky is a heavy lid." }],
            steps: [{ reasoning: "Lead is heavy and dull, and a lid closes things in, suggesting oppression.", evidence: "a lid of lead", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(c)** The sky feels heavy and trapping, like a lid on a container.",
            commonErrors: ["Choosing (d), reading the grey colour as rain rather than as oppression."],
          },
        },
        {
          id: "et9-u2-comparing-poems-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WAR,
          stem: "Explain what the final line of 'The Last Letter Home' ('Tell her nothing else. She would not sleep.') reveals about the speaker.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Short sentences", statement: "Brief, blunt sentences can show restraint or emotion." }],
            steps: [
              { reasoning: "He wants to protect his mother from the truth, showing love.", evidence: "Tell her nothing else", marks: 1, markCode: "AO1" },
              { reasoning: "The imperative shows urgency and firmness.", evidence: "Tell her", marks: 1, markCode: "AO2" },
              { reasoning: "'She would not sleep' implies the truth is terrible enough to cause anguish.", evidence: "She would not sleep", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "He hides the truth to protect his mother, showing care, and implies that the reality of war is too terrible to share.",
            commonErrors: ["Saying he is lying for no reason."],
          },
        },
        {
          id: "et9-u2-comparing-poems-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: WAR,
          stem: "Compare how the writers of 'The Last Letter Home' and 'Anthem for Doomed Youth' (see lines 1-4 below) present the experience of war.\n\nAnthem for Doomed Youth, lines 1-2: 'What passing-bells for these who die as cattle? / Only the monstrous anger of the guns.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison (AO3)", statement: "Use connectives and compare methods as well as ideas." },
              { kind: "technique", name: "Contrasting tone", statement: "Public anger versus private restraint." },
            ],
            steps: [
              { reasoning: "Both present war as harsh and oppressive: 'a lid of lead' and 'monstrous anger of the guns'.", evidence: "a lid of lead", marks: 2, markCode: "AO3" },
              { reasoning: "Owen uses a bitter rhetorical question and loud sound imagery, whereas the letter uses quiet, restrained images.", evidence: "What passing-bells", marks: 2, markCode: "AO2" },
              { reasoning: "The letter-writer protects his family, in contrast to Owen who exposes the truth.", evidence: "Tell her nothing else", marks: 2, markCode: "AO3" },
              { reasoning: "A balanced conclusion about different purposes and perspectives.", marks: 2, markCode: "AO1" },
            ],
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Thorough, well-chosen comparison of methods and ideas, with developed analysis." },
              { level: "Level 3", marks: "5-6", descriptor: "Clear, relevant comparison with appropriate references." },
              { level: "Level 2", marks: "3-4", descriptor: "Some comparison, some relevant references." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited links with few references." },
            ],
            finalAnswer: "Both poems present war as oppressive: the sky is 'a lid of lead' and the guns have a 'monstrous anger'. However, Owen's tone is bitter and public, using a rhetorical question and loud imagery, whereas the letter's tone is quiet and protective, hiding the truth ('Tell her nothing else').",
            commonErrors: ["Writing about each poem separately.", "No comparative connectives."],
          },
        },
        {
          id: "et9-u2-comparing-poems-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: WAR,
          stem: "Read 'The Last Letter Home' and answer the questions. Where necessary, refer to 'Anthem for Doomed Youth' or another war poem you have studied.",
          parts: [
            { label: "a", prompt: "Write down two details from lines 3-6 that show the speaker's thoughts.", marks: 2 },
            { label: "b", prompt: "Explain how the simile in lines 3-4 presents the flares.", marks: 6 },
            { label: "c", prompt: "Compare how this poem and another war poem you have studied present soldiers' feelings about home. Refer to language, form and structure.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison (AO3)", statement: "Compare ideas and methods." },
              { kind: "technique", name: "Simile", statement: "Comparison adds meaning." },
            ],
            steps: [
              { part: "a", reasoning: "He thinks of the kitchen and the kettle.", evidence: "the kitchen, the kettle, your voice", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He is cold and cramped.", evidence: "hand cramped with cold", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The flares rise 'white', pale and unnatural.", evidence: "the flares rise white and then fall slow", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Petals' compares them to flowers, suggesting fragility.", evidence: "like petals from a tree", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'That never bloomed' suggests lost potential and wasted life.", evidence: "that never bloomed", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The contrast between natural beauty and war flares is poignant.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Fall slow' creates a slow, mournful rhythm.", evidence: "fall slow", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The image shows the speaker sees beauty in a place of death.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Home as comfort: 'the kitchen, the kettle, your voice' contrasts with the trench.", evidence: "your voice", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Comparison with a second poem: similar or different attitudes to home and loss.", marks: 3, markCode: "AO3" },
              { part: "c", reasoning: "Form and structure: simple regular statements vs the second poem's form, linked to feeling.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context: soldiers often wrote censored, reassuring letters.", marks: 3, markCode: "AO4" },
            ],
            levels: [...bands("comparison of attitudes to home", 12, "c"), ...bands("analysis of the simile", 6, "b")],
            finalAnswer: "(a) Thinking of the kitchen, the kettle and a voice; cold, cramped hands. (b) The flares are like fragile petals from a tree that never bloomed, beauty and potential wasted in war. (c) The speaker clings to home as comfort in a bleak trench and protects his family from the truth; a comparison with another war poem can show similarity of longing but a difference in tone and form.",
            commonErrors: ["No second poem.", "Ignoring form and context."],
          },
        },
      ],
    },
  ],
};
