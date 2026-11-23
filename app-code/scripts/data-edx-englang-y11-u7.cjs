// Data for edx-englang-y11 unit 7: Poetry Analysis.
// 3 lessons x 2 concepts x 6 questions = 36 questions.

const LOW_TIDE = {
  title: "Low Water",
  author: "Written for Akademik Space",
  source: "Original poem",
  text:
    "The harbour at low tide gives back what the sea borrowed -\n" +
    "a rusted anchor, a boot, a snapped blue rope -\nand lays them out in rows like evidence, patient as a lawyer.\n" +
    "I walk the cracked grey path the boats have abandoned,\n" +
    "counting the gulls that have not yet noticed.\n" +
    "The water has pulled its dark blanket back\nand left the shivering mud to argue with itself.\n" +
    "A child finds a tin soldier in the weed\nand stands quite still, as if it might salute.\n" +
    "I think of everything we lose and never meant to keep -\nthe sea returns it all, but only for a day.",
};

const LONG_WAY = {
  title: "The Long Way Home",
  author: "Written for Akademik Space",
  source: "Original poem",
  text:
    "I left when the buses stopped running\n" +
    "and the map forgot the names of streets.\n" +
    "My grandmother's key is still in my pocket,\n" +
    "heavy as a second house.\n" +
    "The border guard asked where I was going\nand I said, towards the version of myself\n" +
    "that still believes in morning.\n" +
    "Somewhere a dog is barking at nothing.\n" +
    "Somewhere my mother is boiling rice\nthe way she did when the power came back.\n" +
    "I am walking the long way home\nin a country that has changed its face,\n" +
    "learning my own language again,\none word at a time.",
};

const ENGINE = {
  title: "Sonnet for a Dead Engine",
  author: "Written for Akademik Space",
  source: "Original sonnet",
  text:
    "I - The engine coughed once in the yard,\n" +
    "then settled, like an old dog, to sleep.\n" +
    "The farmers leaned on fences, saying nothing,\nas if the silence were a kindness, deep.\n" +
    "II - They kept it for the year that followed,\n" +
    "the summer the wheat forgot how to grow.\n" +
    "Its pistons cooled the colour of a wound\nand held the memory of a working cow.\n" +
    "III - A tractor replaced it in April,\n" +
    "polished, impatient, newer than regret.\n" +
    "But still they lifted up the old grey hood\nto listen for a heart that will not beat.\n" +
    "IV - What dies on the farm is never buried;\n" +
    "it stands in rows along the rusted line\nand keeps, like every faithful machine,\na ghost inside its iron spine.",
};

const STORM = {
  title: "Instructions for a Storm",
  author: "Written for Akademik Space",
  source: "Original poem",
  text:
    "First the barometer falls like a dropped plate.\n" +
    "Then the sparrows empty the wires,\n" +
    "then the sea rehearses its long complaint\n" +
    "behind the pier.\n" +
    "Do not board up the windows\nunless you want to hear them argue.\n" +
    "Do not answer the telephone.\n" +
    "The wind is practising new words.\n" +
    "The chimney leans to listen.\n" +
    "When the first drop strikes the tin roof\nit will sound like applause -\none person, a very large crowd,\n" +
    "clapping for something they cannot name.",
};

const MEMORY_POEMS = {
  title: "Two Poems on Memory",
  author: "Written for Akademik Space",
  source: "Original poems",
  text:
    "The Photograph\n" +
    "The photograph is sharper than my memory of it.\n" +
    "My grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\n" +
    "Everyone says she looked young.\n" +
    "I look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\n" +
    "The paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\n" +
    "The Song\n" +
    "The song is worse than my memory of it.\n" +
    "It plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\n" +
    "She cries into the trolley for no reason\nthe song can give.\n" +
    "I keep my face smooth as a shelf.\n" +
    "The tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway.",
};

module.exports = [
  // ======================= UNIT 7, LESSON 1 =======================
  {
    file: "lesson-7-1.ts",
    exportName: "lesson71",
    lesson: {
      id: "el11-u7-lesson-7-1",
      code: "7-1",
      title: "Imagery, Metaphor and Tone in Poetry",
      goal: "I CAN analyse how poets use imagery, metaphor and word choice to create tone and meaning.",
      standards: ["4EA1 Paper 1", "4EA1 AO1", "4EA1 AO2"],
      vocabulary: [
        { term: "Imagery", definition: "Language that appeals to the senses, building pictures in the reader's mind." },
        { term: "Metaphor", definition: "A direct comparison between two unlike things without using 'like' or 'as'." },
        { term: "Personification", definition: "Giving human qualities to non-human things." },
        { term: "Simile", definition: "A comparison using 'like' or 'as'." },
        { term: "Tone", definition: "The poet's attitude towards the subject, created through word choice and imagery." },
        { term: "Connotation", definition: "The associations and feelings a word carries beyond its literal meaning." },
      ],
      concepts: [
        {
          id: "el11-u7-imagery",
          title: "Imagery and metaphor",
          skill: "Identify and explain the effect of imagery and metaphor in a poem, linking technique to meaning.",
          sections: [
            {
              heading: "What imagery does",
              body: "Poets build meaning out of pictures. Imagery appeals to the senses: sight ('cracked grey path'), sound ('argue with itself') and touch ('shivering mud'). A strong answer names the image, says what it literally shows, then explains what it suggests. 'The water has pulled its dark blanket back' is not just a description of low tide; the blanket image makes the sea seem protective and its withdrawal feel like a kind of abandonment.",
            },
            {
              heading: "Metaphor and personification",
              body: "Metaphor states a thing IS something else: 'heavy as a second house'. Personification gives human behaviour to the non-human: the harbour 'gives back', the sea 'borrowed', mud that can 'argue with itself'. Ask what the comparison adds. In 'I think of everything we lose and never meant to keep', the plain verb 'think' does quiet emotional work; the poem earns its feeling because it has been built from small, concrete objects first.",
            },
            {
              heading: "From technique to meaning",
              body: "Always close the chain: device, quotation, effect on meaning. 'Lays them out in rows like evidence, patient as a lawyer' is a simile that makes the harbour seem to be conducting an investigation, so the lost objects become clues to something missing. That tells us the poem is not really about litter; it is about what the sea takes and returns.",
            },
          ],
          keyFormulas: [
            { name: "Imagery", statement: "Language appealing to the senses that creates a mental picture or feeling." },
            { name: "Metaphor", statement: "A direct identification of one thing with another to transfer qualities." },
            { name: "Personification", statement: "Human actions or feelings given to objects or nature." },
          ],
          workedExample: {
            problem: "In 'Low Water', what effect does the simile 'lays them out in rows like evidence, patient as a lawyer' create?",
            solution: "The simile compares the objects left on the mud to evidence being prepared for a legal case. 'Rows' and 'evidence' suggest order, investigation and mystery, while 'patient as a lawyer' gives the harbour a deliberate, unhurried intelligence. The effect is to make the scene feel like a quiet interrogation: the sea has taken things and is now revealing them, so ordinary rubbish becomes a clue to loss. It also hints that something has happened that needs explaining, which raises the poem's reflective mood.",
          },
          questions: [
            {
              id: "el11-u7-imagery-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LOW_TIDE,
              stem: "Read the first stanza. Which of these is an example of personification in 'Low Water'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "'a rusted anchor, a boot, a snapped blue rope'" },
                  { id: "b", text: "'lays them out in rows like evidence'" },
                  { id: "c", text: "'left the shivering mud to argue with itself'" },
                  { id: "d", text: "'the boats have abandoned'" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Personification", statement: "Human qualities given to the non-human; mud 'argues'." }],
                steps: [{ reasoning: "Only 'argue with itself' gives human behaviour (arguing) to mud. Credit for identifying the human action.", evidence: "to argue with itself", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(c)** 'left the shivering mud to argue with itself' - mud is given the human act of arguing.",
                commonErrors: ["Choosing (b), which is a simile, not personification.", "Choosing (d): 'abandoned' describes boats' action, but the boats are not given human feeling directly in the same way."],
              },
            },
            {
              id: "el11-u7-imagery-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: LOW_TIDE,
              stem: "What does the image of the 'snapped blue rope' contribute to the mood of the first stanza? Use a quotation in your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Image and mood", statement: "A concrete image plus its emotional colouring shows the poem's atmosphere." }],
                steps: [
                  { reasoning: "Identifies the image's associations: 'snapped' and 'blue' suggest breakage, loss and the sea's former life.", evidence: "a snapped blue rope", marks: 1, markCode: "AO1" },
                  { reasoning: "Links it to mood: it is one more 'borrowed' object, so it reinforces a mood of aftermath and quiet loss rather than celebration.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The 'snapped blue rope' is a small, broken thing the sea has returned. 'Snapped' suggests violence or decay and 'blue' recalls the sea itself, so the image adds to the stanza's mood of gentle melancholy - a record of what has been lost.",
                commonErrors: ["Describing the rope's colour without saying what it suggests.", "Asserting the mood is happy because the tide returns things."],
              },
            },
            {
              id: "el11-u7-imagery-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: LOW_TIDE,
              stem: "Explain how the poet uses the extended metaphor of the sea 'borrowing' and returning objects in 'Low Water'. Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Extended metaphor", statement: "One comparison is sustained across the poem, giving it a single governing idea." },
                  { kind: "technique", name: "Personification", statement: "The sea is given human actions: it 'borrowed' and it 'returns'." },
                ],
                steps: [
                  { reasoning: "Spots the metaphor: the sea 'gives back what the sea borrowed' treats the tide like a lender returning objects.", evidence: "gives back what the sea borrowed", marks: 1, markCode: "AO1" },
                  { reasoning: "Explains what the metaphor implies: the sea is not hostile but temporary; things it takes may return, which softens loss into patience.", marks: 1, markCode: "AO2" },
                  { reasoning: "Links to the final line 'the sea returns it all, but only for a day', showing the extended metaphor controls the poem's meditation on impermanence.", evidence: "only for a day", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The sea is personified as a borrower who returns what it took, turning natural tide into a gesture of temporary custody. The metaphor makes loss feel cyclical rather than final, and the ending's 'only for a day' limits the comfort, so the poem's meaning - that nothing kept is kept - is carried by the image system.",
                commonErrors: ["Listing images without explaining the borrowing/returning pattern.", "Saying the sea is 'evil' - the metaphor is gentler than that."],
              },
            },
            {
              id: "el11-u7-imagery-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: LOW_TIDE,
              stem: "How does the writer use imagery in 'Low Water' to suggest that the harbour scene is quietly sad? Support your answer with evidence from the poem.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Pathetic fallacy", statement: "The setting and weather mirror or intensify the emotional atmosphere." },
                  { kind: "skill", name: "Sustained comment", statement: "Several images should be linked to one developing idea about sadness." },
                ],
                steps: [
                  { reasoning: "'the boats have abandoned' makes the harbour itself seem deserted, extending the sense of loss to the place.", evidence: "the boats have abandoned", marks: 1, markCode: "AO2" },
                  { reasoning: "'the shivering mud' gives the exposed seabed a shiver, so the landscape itself feels cold and vulnerable.", evidence: "the shivering mud", marks: 1, markCode: "AO2" },
                  { reasoning: "The colour palette - 'cracked grey path', 'dark blanket' - drains the scene of warmth.", marks: 1, markCode: "AO1" },
                  { reasoning: "The child's 'tin soldier' and the gesture 'as if it might salute' adds poignancy: a ritual of respect for something dead or lost.", evidence: "as if it might salute", marks: 1, markCode: "AO2" },
                  { reasoning: "Concludes that the images work cumulatively to make even the returning tide feel temporary, producing quiet sadness rather than drama.", evidence: "only for a day", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "The sadness is built from images of absence and exposure: abandoned boats, shivering mud, grey paths and a dead soldier. Each image strips warmth from the scene, and the child's salute gives the loss a human, ceremonial weight, so the poem's melancholy feels quiet and reflective rather than loud.",
                levels: [
                  { level: "Level 3", marks: "4-5", descriptor: "Perceptive, well-selected images; each is tied to an effect and the sadness is traced cumulatively." },
                  { level: "Level 2", marks: "2-3", descriptor: "Some relevant images identified and partly explained." },
                  { level: "Level 1", marks: "1", descriptor: "A single image mentioned with little or no explanation." },
                ],
                commonErrors: ["Identifying images without explaining their emotional effect.", "Claiming the tone is cheerful because the sea returns objects."],
              },
            },
            {
              id: "el11-u7-imagery-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: LOW_TIDE,
              stem: "Analyse how the final stanza uses a shift from image to idea to develop the poem's meaning. Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Enjambment and turn", statement: "The poem moves from concrete detail to abstract reflection at the close." },
                  { kind: "technique", name: "Volta-like close", statement: "A final reflective line can reframe everything before it." },
                ],
                steps: [
                  { reasoning: "Notes the stanza's opening line is abstract rather than sensory: 'I think of everything we lose and never meant to keep' states the poem's subject directly.", evidence: "everything we lose and never meant to keep", marks: 2, markCode: "AO1" },
                  { reasoning: "Explains the shift: after eight stanzas of concrete objects, the poem suddenly names the feeling, so the images are retrospectively understood as examples of loss.", marks: 2, markCode: "AO3" },
                  { reasoning: "Explains the dash and the short final clause 'but only for a day' as a deflation: the sea's generosity is temporary, so consolation is denied.", evidence: "but only for a day", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "The final stanza converts image into idea: the speaker names 'everything we lose' only after the poem has shown us the anchor, the boot and the rope. The dash sets the reflection apart, and the short closing clause 'but only for a day' undercuts the comfort of return, so the poem ends by admitting that what the sea gives back it will take again.",
                levels: [
                  { level: "Level 4", marks: "5-6", descriptor: "Tracks the shift from image to idea precisely, explaining how the close reframes the whole poem." },
                  { level: "Level 3", marks: "3-4", descriptor: "Recognises the reflective turn and explains most of its effect." },
                  { level: "Level 2", marks: "2", descriptor: "Notes the reflective ending with partial explanation." },
                  { level: "Level 1", marks: "1", descriptor: "Mentions the final line without analysing the shift." },
                ],
                commonErrors: ["Treating the last stanza as unrelated to the images before it.", "Ignoring the structural effect of the dash and the short clause."],
              },
            },
            {
              id: "el11-u7-imagery-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: LOW_TIDE,
              stem: "Read the whole poem 'Low Water'.",
              parts: [
                { label: "a", prompt: "Identify two objects the sea has returned to the shore.", marks: 2 },
                { label: "b", prompt: "Explain how the poet's use of imagery creates a mood of quiet melancholy.", marks: 4 },
                { label: "c", prompt: "Write a paragraph evaluating the poem's ending: how effectively does 'the sea returns it all, but only for a day' conclude the poem?", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Retrieval", statement: "Select only the detail asked for." },
                  { kind: "technique", name: "Cumulative imagery", statement: "Several related images build one mood." },
                  { kind: "skill", name: "Evaluation", statement: "Judge how effectively a structural choice achieves its effect." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit any two of: rusted anchor, boot, snapped blue rope.", evidence: "a rusted anchor, a boot, a snapped blue rope", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Credit tin soldier (from the weed).", evidence: "A child finds a tin soldier", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "The borrowed/returned metaphor frames the tide as temporary custody rather than gift.", evidence: "gives back what the sea borrowed", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "'the shivering mud' personifies exposure and cold, extending sadness to the landscape.", evidence: "the shivering mud", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Muted colours ('cracked grey', 'dark') and the deserted 'boats have abandoned' path drain warmth from the scene.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The child's salute for a tin soldier ritualises small losses, deepening the melancholy.", evidence: "as if it might salute", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The line is effective because it echoes the opening metaphor of borrowing, closing the poem's circle of ideas.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "'but only for a day' deflates consolation: return is temporary, so the loss it seemed to soften returns.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "The blunt, declarative phrasing matches the plain final-stanza shift from image to idea.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Judgement is supported: the ending earns its sadness because the images have already earned it.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) Anchor, boot, rope or tin soldier. (b) The mood comes from cumulative images - borrowed-and-returned objects, shivering mud, grey colours - which frame the tide as a temporary reprieve rather than a gift. (c) The ending is effective: it completes the borrowing metaphor, then denies comfort with 'only for a day', so the poem's reflection on impermanence feels earned rather than asserted.",
                levels: [
                  { part: "a", level: "Level 2", marks: "2", descriptor: "Both objects correctly identified." },
                  { part: "a", level: "Level 1", marks: "1", descriptor: "One object identified." },
                  { part: "b", level: "Level 4", marks: "4", descriptor: "Several images analysed and clearly linked to the mood." },
                  { part: "b", level: "Level 3", marks: "3", descriptor: "Two images analysed with some link to mood." },
                  { part: "b", level: "Level 2", marks: "2", descriptor: "Images listed with partial explanation." },
                  { part: "b", level: "Level 1", marks: "1", descriptor: "One image mentioned." },
                  { part: "c", level: "Level 4", marks: "4", descriptor: "Evaluative judgement on the ending's effectiveness, supported by analysis." },
                  { part: "c", level: "Level 3", marks: "3", descriptor: "Some evaluation with limited support." },
                  { part: "c", level: "Level 2", marks: "2", descriptor: "Restates the line with minimal judgement." },
                  { part: "c", level: "Level 1", marks: "1", descriptor: "Mentions the ending without evaluation." },
                ],
                commonErrors: ["In (a) giving more than two objects or paraphrasing rather than naming.", "In (b) listing images without effect.", "In (c) simply retelling the ending instead of judging it."],
                examinerNote: "Credit evaluation only where it is argued, not merely asserted.",
              },
            },
          ],
        },
        {
          id: "el11-u7-tone-voice",
          title: "Tone and poetic voice",
          skill: "Identify the speaker's tone and explain how word choice, imagery and pronouns create a distinctive voice.",
          sections: [
            {
              heading: "Finding the speaker",
              body: "First ask who is speaking. In 'The Long Way Home' the 'I' is a migrant who has left home and is walking back toward it through a changed country. The voice is intimate, first-person and restrained. Notice the pronouns and the small domestic details - 'my grandmother's key', 'my mother is boiling rice' - which make a political situation feel personal.",
            },
            {
              heading: "Naming the tone",
              body: "Choose a precise adjective, not 'sad'. This poem is elegiac, wistful, quietly defiant. 'Towards the version of myself / that still believes in morning' is hopeful without being naive; 'one word at a time' suggests recovery through language itself. Tone lives in such phrases: prove it with two or three quotations rather than asserting it.",
            },
            {
              heading: "Voice and effect",
              body: "Voice is the personality of the poem. The short declarative sentences and the repeated 'Somewhere' create a voice that is travelling, noticing, not dwelling. Explain the effect on the reader: we are placed inside the walker's uncertainty, so the poem's theme of displacement is felt rather than explained.",
            },
          ],
          keyFormulas: [
            { name: "Tone", statement: "The speaker's attitude towards the subject, shown through word choice, imagery and rhythm." },
            { name: "Voice", statement: "The distinctive personality of the narrator or speaker as created by language." },
            { name: "First-person perspective", statement: "The 'I' speaker invites the reader inside a personal, often unreliable or partial, viewpoint." },
          ],
          workedExample: {
            problem: "How does the voice in 'The Long Way Home' create a tone of quiet resilience?",
            solution: "The voice is first-person and spare: short lines like 'I left when the buses stopped running' state facts without complaint. The phrase 'towards the version of myself / that still believes in morning' turns displacement into a direction of travel - the walker is going somewhere, not merely fleeing. 'learning my own language again / one word at a time' makes recovery feel slow but possible. The repeated 'Somewhere' lines link the speaker to people left behind without self-pity. Together these choices produce a tone that is elegiac but defiant.",
          },
          questions: [
            {
              id: "el11-u7-voice-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LONG_WAY,
              stem: "Read the third stanza. Who is the speaker in 'The Long Way Home' most likely to be?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A border guard checking travel documents." },
                  { id: "b", text: "A person who has left home and is returning through a changed country." },
                  { id: "c", text: "A mother teaching her child to cook rice." },
                  { id: "d", text: "A bus driver whose route no longer runs." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Speaker identification", statement: "Pronouns and details reveal who 'I' is." }],
                steps: [{ reasoning: "'I am walking the long way home / in a country that has changed its face' shows a traveller returning to a changed homeland.", evidence: "walking the long way home", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** A person returning to a changed homeland - the 'long way home' and 'my own language again' show displacement and return.",
                commonErrors: ["Choosing (a): the border guard is someone the speaker meets, not the speaker."],
              },
            },
            {
              id: "el11-u7-voice-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: LONG_WAY,
              stem: "What does the detail 'My grandmother's key is still in my pocket, heavy as a second house' suggest about the speaker's feelings?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Symbolic object", statement: "A kept object can carry the weight of home and memory." }],
                steps: [
                  { reasoning: "The key is a concrete link to the family home; 'still in my pocket' shows the speaker carries it everywhere.", evidence: "My grandmother's key is still in my pocket", marks: 1, markCode: "AO1" },
                  { reasoning: "'heavy as a second house' makes the key emotionally enormous - it stands for a whole home and identity the speaker has lost.", evidence: "heavy as a second house", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The key symbolises a home and family now out of reach. It is 'heavy' not physically but emotionally, so the image suggests the speaker carries a whole lost life with them - attachment mixed with grief.",
                commonErrors: ["Reading 'heavy' literally.", "Saying the speaker is angry rather than attached and grieving."],
              },
            },
            {
              id: "el11-u7-voice-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: LONG_WAY,
              stem: "How does the repetition of 'Somewhere' in the fifth stanza shape the poem's voice? Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Repetition", statement: "Repeating a word or phrase links ideas and controls rhythm." },
                  { kind: "skill", name: "Voice and effect", statement: "A repeated word can suggest distance, uncertainty or longing." },
                ],
                steps: [
                  { reasoning: "'Somewhere' repeated twice makes the people left behind feel distant and vague - places the speaker cannot reach.", evidence: "Somewhere a dog is barking", marks: 1, markCode: "AO1" },
                  { reasoning: "The pairing 'a dog is barking at nothing' and 'my mother is boiling rice' joins an indifferent detail with an intensely personal one, widening the poem's sympathy.", evidence: "the way she did when the power came back", marks: 1, markCode: "AO2" },
                  { reasoning: "The effect on voice: the speaker sounds watchful and homesick, registering small signs of life elsewhere without self-pity.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "The repeated 'Somewhere' distances the home the speaker has left: the dog and the mother are 'somewhere' else, unreachable. Pairing a trivial detail with a domestic ritual makes the longing specific, so the voice sounds restrained but homesick - aware of what continues without them.",
                commonErrors: ["Saying repetition shows the speaker is confused.", "Ignoring the contrast between the two 'Somewhere' lines."],
              },
            },
            {
              id: "el11-u7-voice-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: LONG_WAY,
              stem: "Analyse how the poem's voice balances hope and grief in its treatment of 'home'. Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Ambivalent tone", statement: "A poem can hold grief and hope at once; analyse both." }],
                steps: [
                  { reasoning: "Grief: the border guard's question and the flat answer 'towards the version of myself' admit uncertainty about identity and destination.", evidence: "towards the version of myself", marks: 1, markCode: "AO1" },
                  { reasoning: "Grief: 'a country that has changed its face' makes home alien; 'learning my own language again' shows even belonging must be relearned.", evidence: "learning my own language again", marks: 1, markCode: "AO2" },
                  { reasoning: "Hope: 'still believes in morning' gives the self a future orientation, not just a past.", evidence: "still believes in morning", marks: 1, markCode: "AO2" },
                  { reasoning: "Hope: 'one word at a time' shrinks recovery into achievable steps, so the voice ends quietly determined rather than despairing.", evidence: "one word at a time", marks: 1, markCode: "AO3" },
                  { reasoning: "Concludes the balance: the poem refuses either consolation or bitterness; the voice holds both.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "The voice is elegiac yet resolute. Home is both lost ('changed its face', language to relearn) and still ahead ('the long way home'), and the speaker's identity is unfinished ('the version of myself'). The closing image of learning 'one word at a time' turns grief into method, so hope survives without denying loss.",
                levels: [
                  { level: "Level 3", marks: "4-5", descriptor: "Both hope and grief are evidenced and the balance is explained." },
                  { level: "Level 2", marks: "2-3", descriptor: "One side of the balance is well covered; the other is partial." },
                  { level: "Level 1", marks: "1", descriptor: "Tone named with little support." },
                ],
                commonErrors: ["Choosing one tone (only sad or only hopeful).", "Quoting without linking to voice or effect."],
              },
            },
            {
              id: "el11-u7-voice-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: LONG_WAY,
              stem: "How does the structure of 'The Long Way Home' - its short lines, stanza breaks and movement from past to present - support its voice? Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Enjambment and lineation", statement: "Short lines and stanza breaks control pace and emphasis." },
                  { kind: "convention", name: "Free verse", statement: "Without rhyme or fixed metre, the poem's shape mirrors its subject." },
                ],
                steps: [
                  { reasoning: "Short lines ('I left when the buses stopped running') move quickly, like a walker covering ground; the voice feels mobile.", marks: 2, markCode: "AO3" },
                  { reasoning: "The stanza break before 'The border guard asked' isolates the moment of authority, so the voice seems to pause and answer carefully.", marks: 2, markCode: "AO3" },
                  { reasoning: "The movement from past ('I left') to present ('I am walking') to future hope ('still believes in morning') mirrors a journey; structure enacts the poem's progress.", evidence: "I am walking the long way home", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "The free-verse lineation is the poem's walking pace: short lines carry the speaker forward, the stanza break freezes the border-guard exchange, and the shift from past to present to aspiration traces the journey itself. The voice therefore feels like movement - displaced, still travelling, not yet arrived.",
                levels: [
                  { level: "Level 4", marks: "5-6", descriptor: "Lineation, stanza breaks and tense movement all linked to the voice." },
                  { level: "Level 3", marks: "3-4", descriptor: "Structure analysed with some links to voice." },
                  { level: "Level 2", marks: "2", descriptor: "One structural feature noted with partial explanation." },
                  { level: "Level 1", marks: "1", descriptor: "Structure mentioned without analysis." },
                ],
                commonErrors: ["Describing the poem's content instead of its shape.", "Ignoring the stanza break's effect at the border guard."],
              },
            },
            {
              id: "el11-u7-voice-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: LONG_WAY,
              stem: "Read the whole poem 'The Long Way Home'.",
              parts: [
                { label: "a", prompt: "Identify two details that link the speaker to the home they have left.", marks: 2 },
                { label: "b", prompt: "Explain how the poem's voice creates a tone that is both homesick and hopeful.", marks: 4 },
                { label: "c", prompt: "Evaluate how effectively the final image, 'learning my own language again, one word at a time', concludes the poem.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Retrieval", statement: "Select only the details asked for." },
                  { kind: "technique", name: "Ambivalent tone", statement: "Grief and hope coexist in the voice." },
                  { kind: "skill", name: "Evaluation", statement: "Judge the ending's effectiveness with reasons." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit grandmother's key.", evidence: "My grandmother's key is still in my pocket", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Credit mother boiling rice / 'the long way home'.", evidence: "my mother is boiling rice", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Homesick: 'Somewhere' lines and the key make home present but unreachable.", evidence: "Somewhere my mother is boiling rice", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Homesick: 'a country that has changed its face' alienates the homeland.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Hopeful: 'still believes in morning' and 'one word at a time' give forward movement.", evidence: "still believes in morning", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The restrained first-person voice earns both feelings without self-pity.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Effective: 'learning my own language again' literalises displacement - belonging must be relearned.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "'one word at a time' shrinks recovery to achievable steps, matching the poem's spare voice.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "It echoes the earlier 'the map forgot the names of streets': language and place are both remade.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Judgement: a quiet, earned ending rather than a declamatory resolution.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) The key and the mother boiling rice (or 'the long way home'). (b) The voice holds homesickness ('Somewhere', the changed country) and hope ('still believes in morning', 'one word at a time') at once. (c) The final image is effective: relearning language literalises the experience of displacement, 'one word at a time' matches the poem's spare voice, and it echoes the forgotten street names - an earned, quiet conclusion.",
                levels: [
                  { part: "a", level: "Level 2", marks: "2", descriptor: "Both details correctly identified." },
                  { part: "a", level: "Level 1", marks: "1", descriptor: "One detail identified." },
                  { part: "b", level: "Level 4", marks: "4", descriptor: "Both sides of the tone evidenced and explained." },
                  { part: "b", level: "Level 3", marks: "3", descriptor: "Mostly covered with one side weaker." },
                  { part: "b", level: "Level 2", marks: "2", descriptor: "Partial coverage." },
                  { part: "b", level: "Level 1", marks: "1", descriptor: "Tone named only." },
                  { part: "c", level: "Level 4", marks: "4", descriptor: "Evaluative judgement supported by analysis of language and structure." },
                  { part: "c", level: "Level 3", marks: "3", descriptor: "Some evaluation with limited support." },
                  { part: "c", level: "Level 2", marks: "2", descriptor: "Restates the image with minimal judgement." },
                  { part: "c", level: "Level 1", marks: "1", descriptor: "Mentions the ending without evaluation." },
                ],
                commonErrors: ["In (c) paraphrasing the line without judging it.", "Treating the poem as purely sad or purely hopeful."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el11-u7-poetry-language-notes",
      title: "Imagery, metaphor and tone - notes",
      summary: "Imagery and metaphor build the picture; tone is the speaker's attitude. Always link device, quotation and effect.",
      sections: [
        { heading: "Key idea", body: "A top answer chains three links: the device, a precise quotation, and the effect on meaning." },
        { heading: "Tone words", body: "Choose precise words - elegiac, wistful, sardonic, defiant - not 'sad' or 'happy'." },
        { heading: "Voice", body: "Ask who speaks and how the pronouns, details and rhythm create a personality." },
      ],
    },
  },

  // ======================= UNIT 7, LESSON 2 =======================
  {
    file: "lesson-7-2.ts",
    exportName: "lesson72",
    lesson: {
      id: "el11-u7-lesson-7-2",
      code: "7-2",
      title: "Structure, Form and Sound in Poetry",
      goal: "I CAN analyse how a poem's structure, form, rhyme, rhythm and sound patterning shape its meaning.",
      standards: ["4EA1 Paper 1", "4EA1 AO2", "4EA1 AO3"],
      vocabulary: [
        { term: "Stanza", definition: "A grouped set of lines in a poem, like a paragraph in prose." },
        { term: "Volta", definition: "A turn or shift in a poem, often marked by a change in tone, image or argument." },
        { term: "Couplet", definition: "A pair of rhyming lines, often used to conclude a poem or stanza." },
        { term: "Alliteration", definition: "Repetition of initial consonant sounds in nearby words." },
        { term: "Assonance", definition: "Repetition of vowel sounds within words." },
        { term: "Caesura", definition: "A pause within a line, often marked by punctuation." },
      ],
      concepts: [
        {
          id: "el11-u7-form",
          title: "Structure and form",
          skill: "Analyse how stanza shape, rhyme scheme, volta and poetic form contribute to meaning.",
          sections: [
            {
              heading: "Reading the shape",
              body: "Poetic form is meaning made visible. In 'Sonnet for a Dead Engine' the stanzas marked I, II, III and IV give the poem a ritual, almost ceremonial structure, like the farming year itself. The final stanza shifts to a short rhyming close - 'line', 'machine', 'spine' - which traditionally signals a turn or conclusion, gathering the whole poem into a single claim.",
            },
            {
              heading: "The volta and the close",
              body: "A volta is a turn: the poem changes direction, tone or argument. Here stanza III moves from the engine's death to its replacement, and stanza IV performs the volta: 'What dies on the farm is never buried' - the poem stops narrating and starts declaring. The couplet-like final lines gather the whole poem into a single claim about memory.",
            },
            {
              heading: "Why form matters",
              body: "The labelled stanzas I-IV imitate an order or inspection - almost a post-mortem. The poem about a dead machine is itself arranged like an engine's parts: regular, sectioned, ending in a couplet that clicks shut. Form here is not decoration; it is the poem's argument about how machines - and feelings - are organised.",
            },
          ],
          keyFormulas: [
            { name: "Sonnet structure", statement: "Quatrains build an argument; the close (often a couplet) delivers the turn or conclusion." },
            { name: "Volta", statement: "A deliberate turn in a poem's argument, tone or imagery." },
            { name: "Stanza", statement: "A structural unit; its length and grouping control pace and emphasis." },
          ],
          workedExample: {
            problem: "How does the structure of 'Sonnet for a Dead Engine' contribute to its meaning?",
            solution: "The poem is divided into four labelled stanzas (I-IV) of four lines each, like the chambers of an engine or the quarters of a year. The first three stanzas narrate: the engine dies, is kept through a bad summer, and is replaced. Stanza IV turns: 'What dies on the farm is never buried' shifts from event to declaration, and the poem ends on the ghost-image 'a ghost inside its iron spine'. The regular quatrain structure gives the elegy a ceremonial order, while the final stanza's gathering of memory mirrors the 'faithful machine' it describes - so form itself performs the poem's claim that some things keep running after they have stopped.",
          },
          questions: [
            {
              id: "el11-u7-form-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: ENGINE,
              stem: "How many labelled stanzas does 'Sonnet for a Dead Engine' have, and what do the labels suggest?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Four stanzas labelled I-IV, suggesting ordered sections or stages." },
                  { id: "b", text: "Two stanzas, suggesting a simple before-and-after." },
                  { id: "c", text: "Twelve stanzas, one per month of the year." },
                  { id: "d", text: "No labels; the poem is free verse." },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [{ kind: "convention", name: "Stanza structure", statement: "Stanzas are structural units; labels give order." }],
                steps: [{ reasoning: "The poem has four stanzas marked I, II, III and IV; labels imply sequence or inspection.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(a)** Four stanzas labelled I-IV, giving the poem an ordered, sectioned structure.",
                commonErrors: ["Counting lines instead of stanzas."],
              },
            },
            {
              id: "el11-u7-form-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: ENGINE,
              stem: "Identify the volta (turn) in 'Sonnet for a Dead Engine' and explain what changes there.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Volta", statement: "A turn shifts the poem from narration to declaration or new direction." }],
                steps: [
                  { reasoning: "Identifies the turn at stanza IV, where the poem stops describing events and begins a general claim: 'What dies on the farm is never buried'.", evidence: "What dies on the farm is never buried", marks: 1, markCode: "AO1" },
                  { reasoning: "Explains the change: from the specific story of one engine to a universal statement about loss and memory on the farm.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "The volta is in stanza IV. After three narrative stanzas about the engine's death and replacement, the poem turns to a general declaration that 'what dies on the farm is never buried', widening the single event into a meditation on memory.",
                commonErrors: ["Locating the turn at the tractor's arrival (stanza III) rather than the final stanza.", "Describing what happens without naming the shift in mode."],
              },
            },
            {
              id: "el11-u7-form-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: ENGINE,
              stem: "How does the final stanza's rhyme and its image of the 'ghost inside its iron spine' bring the poem to a close? Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "convention", name: "Couplet close", statement: "A rhyming close traditionally delivers the poem's final point." },
                  { kind: "technique", name: "Extended metaphor", statement: "The machine keeps a 'ghost' - death is figured as a spirit inside the object." },
                ],
                steps: [
                  { reasoning: "The stanza closes on a tight rhyme ('line', 'machine', 'spine') that gathers the argument into a memorable final sound.", marks: 1, markCode: "AO1" },
                  { reasoning: "'a ghost inside its iron spine' personifies the dead engine: death is not absence but a presence kept inside the machine.", evidence: "a ghost inside its iron spine", marks: 1, markCode: "AO2" },
                  { reasoning: "The image extends the poem's metaphor system: like a faithful machine, memory 'keeps' running, so the rhyme and image together fix the elegy's meaning.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "The final stanza closes with a rhyming flourish and a sustained metaphor: the dead engine keeps 'a ghost inside its iron spine'. The rhyme gives the declaration a settled, inevitable sound, and the ghost image makes loss feel permanent yet inhabited - the machine is dead but not gone, which is the poem's whole claim.",
                commonErrors: ["Misidentifying the rhyme scheme.", "Treating 'ghost' as literal supernatural content."],
              },
            },
            {
              id: "el11-u7-form-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: ENGINE,
              stem: "Evaluate how the poem's formal structure - four labelled quatrains ending in a declarative stanza - serves its subject. Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Form and meaning", statement: "A poem's shape can enact or mirror its subject." },
                  { kind: "technique", name: "Structural turn", statement: "A shift in stanza function marks the poem's turn." },
                ],
                steps: [
                  { reasoning: "The Roman-numeral labels (I-IV) give the poem a procedural, almost mechanical order, suiting a poem about a machine.", marks: 1, markCode: "AO3" },
                  { reasoning: "Equal four-line stanzas create regularity, like pistons or the farming calendar, giving grief a ceremonial order.", marks: 1, markCode: "AO3" },
                  { reasoning: "Stanzas I-III narrate sequentially (death, keeping, replacement), so structure enacts the story.", marks: 1, markCode: "AO3" },
                  { reasoning: "Stanza IV breaks the pattern by declaring rather than narrating - the form itself performs the volta.", evidence: "What dies on the farm is never buried", marks: 1, markCode: "AO3" },
                  { reasoning: "Judgement: the structure is effective because it makes the poem feel assembled, like the engine it mourns.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "The four labelled quatrains give the elegy a mechanical, ordered shape that mirrors its subject: the engine is sectioned like the poem. Stanzas I-III narrate in sequence, then stanza IV turns to declaration, so the structure itself performs the poem's shift from event to meaning. The effect is a poem that feels built, not merely written - appropriate for a tribute to a machine.",
                levels: [
                  { level: "Level 3", marks: "4-5", descriptor: "Form is analysed and explicitly judged against the subject." },
                  { level: "Level 2", marks: "2-3", descriptor: "Structural features identified with some comment on effect." },
                  { level: "Level 1", marks: "1", descriptor: "Structure described with little or no evaluation." },
                ],
                commonErrors: ["Listing stanza features without linking them to meaning.", "Claiming the poem is a traditional sonnet without evidence for metre or rhyme scheme."],
              },
            },
            {
              id: "el11-u7-form-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: ENGINE,
              stem: "How does the poem use contrast between stanzas III and IV to deepen its meaning? Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Juxtaposition", statement: "Placing two stanzas side by side sharpens the difference between them." }],
                steps: [
                  { reasoning: "Stanza III is about replacement: the tractor is 'polished, impatient, newer than regret' - progress that cannot console.", evidence: "polished, impatient, newer than regret", marks: 2, markCode: "AO1" },
                  { reasoning: "Yet even here grief persists: they still lift the old hood 'to listen for a heart that will not beat'.", evidence: "a heart that will not beat", marks: 2, markCode: "AO2" },
                  { reasoning: "Stanza IV widens this into a law of the farm: 'What dies on the farm is never buried' - the contrast shows replacement cannot erase memory.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Stanza III sets the new against the old - a polished tractor that is 'newer than regret' cannot replace what was lost, and the farmers still listen for a heartbeat that is gone. Stanza IV turns this into a universal claim that nothing on the farm is truly buried, so the juxtaposition of replacement and persistence deepens the elegy: machines die, but the farm keeps them.",
                levels: [
                  { level: "Level 4", marks: "5-6", descriptor: "The contrast between stanzas is analysed in detail and tied to meaning." },
                  { level: "Level 3", marks: "3-4", descriptor: "Contrast identified with reasonable explanation." },
                  { level: "Level 2", marks: "2", descriptor: "Partial contrast noted." },
                  { level: "Level 1", marks: "1", descriptor: "Stanzas described without comparison." },
                ],
                commonErrors: ["Comparing within a single stanza instead of across III and IV.", "Missing the volta's role in stanza IV."],
              },
            },
            {
              id: "el11-u7-form-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: ENGINE,
              stem: "Read the whole poem 'Sonnet for a Dead Engine'.",
              parts: [
                { label: "a", prompt: "Identify the four labelled stanzas and the event each one covers.", marks: 2 },
                { label: "b", prompt: "Explain how the poem's structure mirrors the subject of a machine and its memory.", marks: 4 },
                { label: "c", prompt: "Write a paragraph evaluating how effectively the poem's formal close achieves its elegiac effect.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Retrieval", statement: "Select and sequence the details asked for." },
                  { kind: "technique", name: "Form as meaning", statement: "Structure can enact the poem's subject." },
                  { kind: "skill", name: "Evaluation", statement: "Judge the ending's effect with reasons." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit I: the engine dies; II: it is kept through the bad summer; III: the tractor replaces it.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Credit IV: the declaration that what dies on the farm is never buried.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "The labelled quatrains give a mechanical, sectioned order like an engine's parts.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Stanzas I-III narrate sequentially, so structure enacts the story of death and replacement.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Stanza IV's declarative turn mirrors the 'ghost inside its iron spine' - form performs memory.", evidence: "a ghost inside its iron spine", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "The regular stanza shape echoes the poem's claim that machines 'keep' running after they stop.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The close is effective: 'What dies on the farm is never buried' states the elegy's law plainly.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "The ghost image gives abstraction a body, so memory feels inhabited rather than explained.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The rhyme and settled phrasing give the ending a ceremonial finality.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Judgement: the form's order makes the grief feel dignified, not sentimental.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) I: the engine dies; II: kept through the bad summer; III: replaced by a tractor; IV: declaration about what is never buried. (b) The labelled quatrains give a mechanical order; I-III narrate while IV declares, so structure enacts memory. (c) The close is effective: its plain declaration, ghost image and rhyming finality give grief a ceremonial, dignified landing.",
                levels: [
                  { part: "a", level: "Level 2", marks: "2", descriptor: "Stanzas and events accurately identified." },
                  { part: "a", level: "Level 1", marks: "1", descriptor: "Partial identification." },
                  { part: "b", level: "Level 4", marks: "4", descriptor: "Structure analysed as mirroring the subject." },
                  { part: "b", level: "Level 3", marks: "3", descriptor: "Mostly analysed." },
                  { part: "b", level: "Level 2", marks: "2", descriptor: "Partial analysis." },
                  { part: "b", level: "Level 1", marks: "1", descriptor: "Structure described only." },
                  { part: "c", level: "Level 4", marks: "4", descriptor: "Evaluation of the close with reasons." },
                  { part: "c", level: "Level 3", marks: "3", descriptor: "Some evaluation." },
                  { part: "c", level: "Level 2", marks: "2", descriptor: "Minimal judgement." },
                  { part: "c", level: "Level 1", marks: "1", descriptor: "Ending mentioned only." },
                ],
                commonErrors: ["In (a) compressing the four stanzas into fewer events.", "In (c) describing the ending rather than judging it."],
              },
            },
          ],
        },
        {
          id: "el11-u7-sound",
          title: "Sound, rhythm and musicality",
          skill: "Analyse how alliteration, assonance, rhythm and line breaks create effects in a poem.",
          sections: [
            {
              heading: "Sound patterning",
              body: "Poets tune language. In 'Instructions for a Storm' the alliteration of 'the barometer falls like a dropped plate' gives the opening a hard, percussive start - 'barometer', 'falls', 'plate' - like the first crack of thunder. Assonance and consonance create music that can echo sense: the 'long complaint' of the sea is itself a long, complaining sound.",
            },
            {
              heading: "Rhythm and pace",
              body: "The storm poem moves in stages: 'First... Then... then' builds momentum like the storm gathering. The short imperative lines ('Do not board up the windows', 'Do not answer the telephone') slow the reader into caution. The final image 'one person, a very large crowd, clapping' is a paradox that mimics the storm's own confusion of scale.",
            },
            {
              heading: "Linking sound to meaning",
              body: "Sound effects are not decoration. The poem's title calls them 'instructions', so the sound patterning itself behaves like instructions - measured, step-by-step, almost procedural. The 'rehearses' of the sea and 'practising' of the wind turn weather into performance, and the clapping applause at the end suggests the storm is an audience event, not just weather.",
            },
          ],
          keyFormulas: [
            { name: "Alliteration", statement: "Repeated initial consonant sounds that create percussive or musical effects." },
            { name: "Assonance", statement: "Repeated vowel sounds that create internal music and mood." },
            { name: "Imperative mood", statement: "Commanding verb forms ('Do not answer') that create urgency or instruction." },
          ],
          workedExample: {
            problem: "How does sound patterning work in 'Instructions for a Storm'?",
            solution: "The poem opens with the hard alliteration of 'the barometer falls like a dropped plate', whose plosive sounds mimic the sudden crash of the first storm signal. The anaphoric sequence 'First... Then... then' builds rhythmic momentum, while the sea 'rehearses its long complaint' - the long vowels enact the complaint's duration. The imperative negatives ('Do not board up', 'Do not answer') break the flow into cautions, and the closing paradox 'one person, a very large crowd' uses contradictory scale to mimic the storm's disorienting power. Sound here is instruction: the poem's music performs the gathering, warnings and climax of the storm itself.",
          },
          questions: [
            {
              id: "el11-u7-sound-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: STORM,
              stem: "Which sound device is used in 'the sea rehearses its long complaint'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Alliteration" },
                  { id: "b", text: "Assonance" },
                  { id: "c", text: "Personification" },
                  { id: "d", text: "Rhyme" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Personification", statement: "The sea is given the human act of rehearsing a complaint." }],
                steps: [{ reasoning: "'rehearses its long complaint' gives the sea human behaviour - rehearsing and complaining.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(c)** Personification - the sea is given human actions (rehearsing, complaining).",
                commonErrors: ["Choosing (a): 'sea rehearses' has no shared initial consonant."],
              },
            },
            {
              id: "el11-u7-sound-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: STORM,
              stem: "Identify one example of alliteration in 'Instructions for a Storm' and explain its effect.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Alliteration", statement: "Repeated initial consonants create percussive or musical effects." }],
                steps: [
                  { reasoning: "Identifies alliteration, e.g. 'the barometer falls' or 'sparrows'/'sea' or 'the telephone'.", evidence: "the barometer falls", marks: 1, markCode: "AO1" },
                  { reasoning: "Explains the effect: the hard consonants give a percussive, anticipatory sound that suits a gathering storm.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "'the barometer falls like a dropped plate' uses repeated hard consonants (b, f, p sounds) to create a percussive opening that mimics the sudden first signs of the storm.",
                commonErrors: ["Naming a device without locating it in the poem.", "Saying alliteration makes the poem 'flow' - it actually creates weight and percussion."],
              },
            },
            {
              id: "el11-u7-sound-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: STORM,
              stem: "How does the poem's use of imperative commands ('Do not board up the windows', 'Do not answer the telephone') shape its voice and meaning?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Imperative mood", statement: "Commands address the reader directly and create urgency or instruction." },
                  { kind: "convention", name: "Second-person address", statement: "Direct address makes the poem feel like spoken instruction." },
                ],
                steps: [
                  { reasoning: "The commands are negative imperatives, so the voice sounds like warning rather than description - the poem addresses 'you' directly.", evidence: "Do not board up the windows", marks: 1, markCode: "AO1" },
                  { reasoning: "The specific prohibitions are odd: boarding up windows is normally sensible, so the commands create unease - the storm is not ordinary danger.", marks: 1, markCode: "AO2" },
                  { reasoning: "Effect: the voice becomes a voice of instruction or ritual, matching the title 'Instructions for a Storm' - the poem itself behaves like a manual.", evidence: "Do not answer the telephone", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "The negative imperatives give the poem a warning voice that speaks directly to the reader. Because the prohibitions are counter-intuitive - not boarding up windows, not answering the phone - they create unease and ritual, so the poem performs its own title: it is literally instructions for surviving (or experiencing) a storm.",
                commonErrors: ["Treating the commands as literal safety advice.", "Ignoring the effect of direct address on voice."],
              },
            },
            {
              id: "el11-u7-sound-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: STORM,
              stem: "Analyse how rhythm and pacing in 'Instructions for a Storm' mirror the approach and climax of the storm. Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Rhythmic build", statement: "Pace can enact the subject: lines quicken as the storm gathers." }],
                steps: [
                  { reasoning: "The opening anaphora 'First... Then... then' accelerates the sequence of signs, matching the storm's approach.", evidence: "First the barometer falls", marks: 1, markCode: "AO1" },
                  { reasoning: "The short imperative lines ('Do not answer the telephone') halt the flow, creating the held breath before the storm breaks.", marks: 1, markCode: "AO3" },
                  { reasoning: "The final quatrain-length image 'one person, a very large crowd, clapping' is paradoxical and expansive, mimicking the storm's overwhelming scale.", evidence: "one person, a very large crowd", marks: 1, markCode: "AO2" },
                  { reasoning: "The overall shape - build-up, pause, release - enacts a storm's arc in miniature.", marks: 1, markCode: "AO3" },
                  { reasoning: "Judgement: the pacing is effective because the poem's rhythm is itself a kind of weather.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "The poem's rhythm performs the storm: 'First... Then... then' quickens like gathering signs, the imperative negatives hold the breath, and the final paradox of 'one person, a very large crowd' releases into overwhelming scale. The pacing is the poem's subject - a storm experienced through its own tempo.",
                levels: [
                  { level: "Level 3", marks: "4-5", descriptor: "Rhythm analysed across the poem and explicitly linked to the storm's arc." },
                  { level: "Level 2", marks: "2-3", descriptor: "Some rhythmic features noted with partial effect." },
                  { level: "Level 1", marks: "1", descriptor: "Rhythm mentioned without analysis." },
                ],
                commonErrors: ["Describing events without analysing pace or sound.", "Ignoring the final paradox's rhythmic effect."],
              },
            },
            {
              id: "el11-u7-sound-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: STORM,
              stem: "How does the poem use personification and imagery of rehearsal and performance to transform weather into theatre? Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Personification", statement: "Weather is given human actions - rehearsing, practising, leaning, clapping." },
                  { kind: "technique", name: "Extended metaphor", statement: "The storm is consistently figured as a performance." },
                ],
                steps: [
                  { reasoning: "'the sea rehearses its long complaint' - the sea is an actor preparing a performance.", evidence: "rehearses its long complaint", marks: 1, markCode: "AO1" },
                  { reasoning: "'The wind is practising new words. / The chimney leans to listen.' - wind rehearses lines, chimney becomes an audience member.", evidence: "practising new words", marks: 2, markCode: "AO2" },
                  { reasoning: "The final 'clapping for something they cannot name' completes the performance metaphor: the storm is a show whose meaning is felt, not understood.", evidence: "clapping for something they cannot name", marks: 2, markCode: "AO2" },
                  { reasoning: "Effect: the poem's title 'Instructions' now reads as stage directions or a playbill - weather as theatre.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "The poem consistently personifies weather as performers: the sea 'rehearses', the wind 'practises', the chimney 'leans to listen', and the rain becomes applause. The extended metaphor of storm-as-theatre is completed by 'clapping for something they cannot name' - an audience moved by meaning they cannot articulate - so the poem turns a weather forecast into a drama.",
                levels: [
                  { level: "Level 4", marks: "5-6", descriptor: "The performance metaphor is traced across the poem and its effect explained." },
                  { level: "Level 3", marks: "3-4", descriptor: "Several instances analysed with some synthesis." },
                  { level: "Level 2", marks: "2", descriptor: "One or two instances noted." },
                  { level: "Level 1", marks: "1", descriptor: "Personification identified only." },
                ],
                commonErrors: ["Listing personified phrases without linking them to the theatre metaphor.", "Missing the closing applause image."],
              },
            },
            {
              id: "el11-u7-sound-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: STORM,
              stem: "Read the whole poem 'Instructions for a Storm'.",
              parts: [
                { label: "a", prompt: "Identify two examples of personification in the poem.", marks: 2 },
                { label: "b", prompt: "Explain how sound devices and rhythm create the poem's atmosphere.", marks: 4 },
                { label: "c", prompt: "Write a paragraph evaluating how effectively the poem's form and sound enact its subject.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Retrieval", statement: "Select only the devices asked for." },
                  { kind: "technique", name: "Sound and rhythm", statement: "Alliteration, assonance and pacing create atmosphere." },
                  { kind: "skill", name: "Evaluation", statement: "Judge how form enacts meaning." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit sea 'rehearses its long complaint' or wind 'practising new words' or chimney 'leans to listen'.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Credit a second distinct example from the same list.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Hard alliteration in 'barometer falls like a dropped plate' gives percussive anticipation.", evidence: "the barometer falls like a dropped plate", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The 'First... Then... then' sequence accelerates like the storm's approach.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Short imperatives halt the rhythm, creating held-breath tension before the climax.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "The final 'clapping' image releases into expansive, overwhelming scale.", evidence: "clapping for something they cannot name", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The poem's sound is effective: its music performs the storm rather than describing it.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "The title 'Instructions' is fulfilled by the imperative voice, so form matches content.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "The storm-as-theatre metaphor gives the weather human intention and audience.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Judgement: the ending's paradox of 'one person, a very large crowd' is a fitting sonic climax.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) Sea rehearsing, wind practising, chimney listening. (b) Sound builds the atmosphere: hard alliteration anticipates, anaphora accelerates, imperatives suspend, and applause releases. (c) The poem's form and sound enact the storm effectively - its music is its subject.",
                levels: [
                  { part: "a", level: "Level 2", marks: "2", descriptor: "Two personifications correctly identified." },
                  { part: "a", level: "Level 1", marks: "1", descriptor: "One identified." },
                  { part: "b", level: "Level 4", marks: "4", descriptor: "Sound devices analysed across the poem with atmospheric effects." },
                  { part: "b", level: "Level 3", marks: "3", descriptor: "Mostly analysed." },
                  { part: "b", level: "Level 2", marks: "2", descriptor: "Partial analysis." },
                  { part: "b", level: "Level 1", marks: "1", descriptor: "Devices named only." },
                  { part: "c", level: "Level 4", marks: "4", descriptor: "Evaluation of form and sound with reasons." },
                  { part: "c", level: "Level 3", marks: "3", descriptor: "Some evaluation." },
                  { part: "c", level: "Level 2", marks: "2", descriptor: "Minimal judgement." },
                  { part: "c", level: "Level 1", marks: "1", descriptor: "Ending mentioned only." },
                ],
                commonErrors: ["In (a) naming devices that are not personification.", "In (b) listing sounds without explaining atmosphere."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el11-u7-poetry-form-notes",
      title: "Structure, form and sound - notes",
      summary: "Poetic shape is meaning: stanzas, volta, rhyme and sound pattern enact what the poem says.",
      sections: [
        { heading: "Key idea", body: "Ask what the poem's shape does, not just what it looks like - does the form mirror the subject?" },
        { heading: "Volta", body: "Look for the turn: a shift from narration to declaration, or from one tone to another." },
        { heading: "Sound", body: "Alliteration, assonance and rhythm create music that can echo or perform the subject." },
      ],
    },
  },

  // ======================= UNIT 7, LESSON 3 =======================
  {
    file: "lesson-7-3.ts",
    exportName: "lesson73",
    lesson: {
      id: "el11-u7-lesson-7-3",
      code: "7-3",
      title: "Context, Theme and Comparing Poems",
      goal: "I CAN place poems in context, identify themes, and compare two poems evaluatively.",
      standards: ["4EA1 Paper 1", "4EA1 AO1", "4EA1 AO4"],
      vocabulary: [
        { term: "Context", definition: "The circumstances - historical, social, personal - in which a poem was written and read." },
        { term: "Theme", definition: "The central idea or subject a poem explores." },
        { term: "Mood", definition: "The emotional atmosphere created for the reader." },
        { term: "Juxtaposition", definition: "Placing two contrasting elements side by side to sharpen meaning." },
        { term: "Evaluation", definition: "Judging the effectiveness or significance of a choice, not just describing it." },
        { term: "Linking", definition: "Connecting points about one text to points about another in a comparison." },
      ],
      concepts: [
        {
          id: "el11-u7-context",
          title: "Context and theme",
          skill: "Identify a poem's theme and relate it to context without letting context overwhelm the text.",
          sections: [
            {
              heading: "Finding the theme",
              body: "A theme is what the poem is about at its deepest level - memory, loss, displacement, the passage of time. In 'The Photograph' the theme is how memory preserves and distorts: 'The photograph is sharper than my memory of it' states it directly, and 'the light goes through her, briefly, as if she were made of something thinner than emulsion' turns the image into a meditation on impermanence.",
            },
            {
              heading: "Context done properly",
              body: "Context means the world around the poem: when it was written, what it might be responding to, what its audience would recognise. For an unseen poem in the exam, you rarely know the exact context - so infer it from clues inside the text: 'My grandmother smiles with her teeth missing' suggests an ordinary family photograph, perhaps mid-20th century; 'the light goes through her' uses old photographic language ('emulsion') that roots the poem in the analogue era. Use context as a lens, not a substitute for reading.",
            },
            {
              heading: "Theme and mood",
              body: "Theme is the idea; mood is the feeling. 'The Photograph' is about memory but its mood is tender and slightly uncanny - the speaker sees the grandmother as 'made of something thinner', almost ghostly. A strong answer separates the two: name the theme, then show how the imagery creates the mood that carries it.",
            },
          ],
          keyFormulas: [
            { name: "Theme", statement: "The central idea a poem explores, deeper than its literal subject." },
            { name: "Context", statement: "The circumstances surrounding a text's creation and reception." },
            { name: "Mood", statement: "The emotional atmosphere a poem creates for the reader." },
          ],
          workedExample: {
            problem: "What is the theme of 'The Photograph', and how does context shape its meaning?",
            solution: "The theme is memory's power and fragility: the photograph outlasts and out-sharpens the speaker's own recollection. The context is domestic and analogue - a family photograph, 'yellowed at the edges like toast', 'emulsion', lamplight - so the poem belongs to an era when photographs were precious, singular objects. That context makes the theme poignant: in a world of disposable images, this one is handled with ritual care ('I look at her hands first'), so memory is figured as something physical, fragile and luminous.",
          },
          questions: [
            {
              id: "el11-u7-context-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: MEMORY_POEMS,
              stem: "Read 'The Photograph'. What is the poem mainly about?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A family arguing about an old photograph." },
                  { id: "b", text: "How a photograph preserves memory, and how memory itself distorts it." },
                  { id: "c", text: "The technical process of developing film." },
                  { id: "d", text: "A grandmother teaching photography." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Theme identification", statement: "The theme is the poem's central idea, deeper than its subject." }],
                steps: [{ reasoning: "The poem contrasts the photograph's sharpness with the speaker's memory and ends on the light passing 'through her' - memory and image.", evidence: "sharper than my memory of it", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** How a photograph preserves memory while memory itself is less reliable - the poem is about the relationship between image and remembrance.",
                commonErrors: ["Choosing (a): no argument occurs in the poem."],
              },
            },
            {
              id: "el11-u7-context-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: MEMORY_POEMS,
              stem: "What does the detail 'the light goes through her, briefly, as if she were made of something thinner than emulsion' suggest about how the speaker sees the grandmother?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Imagery of transparency", statement: "Light passing through a figure makes her seem insubstantial or ghostly." }],
                steps: [
                  { reasoning: "The grandmother becomes translucent - light passes through her - so she seems made of light or almost not physically present.", evidence: "the light goes through her, briefly", marks: 1, markCode: "AO1" },
                  { reasoning: "'thinner than emulsion' ties her to the photograph's material: she is part image, part spirit, so the speaker sees her as a memory becoming a ghost.", evidence: "thinner than emulsion", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The speaker sees the grandmother as almost transparent - a figure of light rather than flesh. By comparing her to something 'thinner than emulsion', the poem makes her part photograph, part spirit, suggesting that memory has reduced her to an image that is beautiful but no longer solid.",
                commonErrors: ["Reading the line literally as a lighting effect.", "Missing the ghostly/insubstantial suggestion."],
              },
            },
            {
              id: "el11-u7-context-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: MEMORY_POEMS,
              stem: "How does 'The Photograph' use its domestic, analogue context - yellowed paper, lamplight, 'emulsion' - to deepen its theme of memory?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Material context", statement: "The physical details of an era shape how its objects carry meaning." },
                  { kind: "technique", name: "Sensory detail", statement: "Tactile and visual details make memory feel physical." },
                ],
                steps: [
                  { reasoning: "The photograph's materiality - 'yellowed at the edges like toast' - makes it an object with age, not just an image.", evidence: "yellowed at the edges like toast", marks: 1, markCode: "AO1" },
                  { reasoning: "'when I tilt it towards the lamp' shows memory handled physically, like a ritual; the analogue photograph demands this care.", evidence: "tilt it towards the lamp", marks: 1, markCode: "AO2" },
                  { reasoning: "The vocabulary of old photography - 'emulsion' - anchors the poem in an era of scarce, precious images, so the theme of fragile memory is historically grounded.", evidence: "thinner than emulsion", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "The poem's analogue details - yellowed paper, lamplight, 'emulsion' - make the photograph a fragile physical object rather than a digital copy. That material context deepens the theme: memory here is something you hold, tilt towards the light, and handle with care, so its preservation feels both precious and temporary.",
                commonErrors: ["Listing details without linking them to memory or era.", "Treating 'emulsion' as a general word rather than photographic terminology."],
              },
            },
            {
              id: "el11-u7-context-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: MEMORY_POEMS,
              stem: "Analyse how 'The Photograph' presents memory as both preserving and distorting the past. Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Paradox", statement: "The poem holds two truths at once: the image preserves yet also fixes and distorts." }],
                steps: [
                  { reasoning: "Preserving: 'The photograph is sharper than my memory of it' - the image keeps detail the mind loses.", evidence: "sharper than my memory of it", marks: 1, markCode: "AO1" },
                  { reasoning: "Distorting: the speaker notices 'her teeth missing / in a way I never noticed when she was alive' - the image reveals what lived perception missed.", evidence: "in a way I never noticed when she was alive", marks: 1, markCode: "AO2" },
                  { reasoning: "Distorting: 'Everyone says she looked young' - others' readings overwrite the speaker's own memory.", marks: 1, markCode: "AO2" },
                  { reasoning: "The hands 'doing something with a cup of tea / that I cannot quite read' show memory as partial - the image preserves but does not explain.", evidence: "that I cannot quite read", marks: 1, markCode: "AO2" },
                  { reasoning: "Concludes the paradox: the photograph is both more accurate and more alien than memory - it keeps the past but cannot recover its meaning.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "The poem presents memory as paradoxical: the photograph preserves detail ('sharper than my memory') yet also distorts by fixing a moment the living eye never saw clearly ('teeth missing... never noticed'). The image keeps the grandmother but cannot interpret her - 'hands... I cannot quite read' - so memory through images is accurate but mute: it preserves appearance while losing the person's meaning.",
                levels: [
                  { level: "Level 3", marks: "4-5", descriptor: "Both preservation and distortion are evidenced and the paradox explained." },
                  { level: "Level 2", marks: "2-3", descriptor: "One side covered well, the other partial." },
                  { level: "Level 1", marks: "1", descriptor: "Theme stated without analysis." },
                ],
                commonErrors: ["Arguing the photograph is simply better or simply worse than memory.", "Ignoring the 'cannot quite read' detail."],
              },
            },
            {
              id: "el11-u7-context-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: MEMORY_POEMS,
              stem: "How does the mood of 'The Photograph' shift from tender observation to something uncanny? Support your answer with evidence from the poem.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Mood shift", statement: "A poem's emotional atmosphere can change as images develop." },
                  { kind: "technique", name: "Gothic imagery", statement: "Light through a figure, yellowed edges and 'ghost' associations create unease." },
                ],
                steps: [
                  { reasoning: "Tender opening: the speaker's ritual care - 'I look at her hands first' - is intimate and respectful.", evidence: "I look at her hands first", marks: 2, markCode: "AO1" },
                  { reasoning: "The simile 'yellowed at the edges like toast' is domestic and warm, keeping the mood comfortable.", evidence: "yellowed at the edges like toast", marks: 1, markCode: "AO2" },
                  { reasoning: "The shift: 'when I tilt it towards the lamp / the light goes through her' makes the figure translucent - a ghost image.", evidence: "the light goes through her", marks: 2, markCode: "AO2" },
                  { reasoning: "'as if she were made of something thinner / than emulsion' completes the uncanny turn: the beloved becomes insubstantial.", evidence: "thinner than emulsion", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poem moves from tender ritual ('I look at her hands first') through domestic warmth ('like toast') to an uncanny close: lamplight passes 'through her' and she becomes 'thinner than emulsion'. The shift from solid to translucent image turns remembrance into a ghostly encounter - memory preserves the form but thins the person.",
                levels: [
                  { level: "Level 4", marks: "5-6", descriptor: "The mood shift is traced precisely with evidence." },
                  { level: "Level 3", marks: "3-4", descriptor: "Shift identified with reasonable support." },
                  { level: "Level 2", marks: "2", descriptor: "Partial tracking." },
                  { level: "Level 1", marks: "1", descriptor: "Mood named only." },
                ],
                commonErrors: ["Describing the whole poem as one mood.", "Missing the lamplight/ghostly turn."],
              },
            },
            {
              id: "el11-u7-context-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: MEMORY_POEMS,
              stem: "Read 'The Photograph' (the first poem in the extract).",
              parts: [
                { label: "a", prompt: "Identify two details that show the photograph is an old, physical object.", marks: 2 },
                { label: "b", prompt: "Explain how the poem uses imagery to explore the relationship between memory and photographs.", marks: 4 },
                { label: "c", prompt: "Write a paragraph evaluating how effectively the poem's final image conveys its theme of fragile memory.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Retrieval", statement: "Select only the details asked for." },
                  { kind: "technique", name: "Imagery and theme", statement: "Images carry the poem's argument about memory." },
                  { kind: "skill", name: "Evaluation", statement: "Judge the ending's effectiveness." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit yellowed edges / lamp / emulsion / hands-first inspection.", evidence: "yellowed at the edges like toast", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Credit a second physical detail.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "'sharper than my memory' establishes the photograph as more accurate than recollection.", evidence: "sharper than my memory of it", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "'teeth missing... never noticed' shows the image reveals what memory missed - preserving yet distorting.", evidence: "in a way I never noticed when she was alive", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The lamplight passing 'through her' makes her translucent - memory as ghost.", evidence: "the light goes through her", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "'thinner than emulsion' ties her to the photograph's material, merging person and image.", evidence: "thinner than emulsion", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The image is effective: 'thinner than emulsion' is precise photographic language.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "It makes memory literal - the person has become thinner than the medium that holds her.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The preceding 'light goes through her' builds to this, so the ending earns its effect.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Judgement: fragile memory is conveyed through material metaphor, not abstraction.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) Yellowed edges, lamplight, emulsion. (b) The poem argues photographs preserve detail memory loses ('sharper than my memory') yet also fix and distort ('teeth missing', hands 'I cannot quite read'), ending in the ghostly image of light passing through her. (c) The final image is effective: 'thinner than emulsion' turns fragile memory into a material metaphor - the person reduced to the medium that holds her.",
                levels: [
                  { part: "a", level: "Level 2", marks: "2", descriptor: "Two physical details identified." },
                  { part: "a", level: "Level 1", marks: "1", descriptor: "One identified." },
                  { part: "b", level: "Level 4", marks: "4", descriptor: "Imagery analysed across the poem and linked to theme." },
                  { part: "b", level: "Level 3", marks: "3", descriptor: "Mostly analysed." },
                  { part: "b", level: "Level 2", marks: "2", descriptor: "Partial analysis." },
                  { part: "b", level: "Level 1", marks: "1", descriptor: "Images named only." },
                  { part: "c", level: "Level 4", marks: "4", descriptor: "Evaluation of the final image with reasons." },
                  { part: "c", level: "Level 3", marks: "3", descriptor: "Some evaluation." },
                  { part: "c", level: "Level 2", marks: "2", descriptor: "Minimal judgement." },
                  { part: "c", level: "Level 1", marks: "1", descriptor: "Ending mentioned only." },
                ],
                commonErrors: ["In (b) describing images without linking to memory.", "In (c) paraphrasing the image without judging it."],
              },
            },
          ],
        },
        {
          id: "el11-u7-compare",
          title: "Comparing poems",
          skill: "Compare two poems on a shared theme, using linking statements and evaluative judgement.",
          sections: [
            {
              heading: "How to compare, not just describe",
              body: "A comparison is not two descriptions side by side. Use linking phrases: 'whereas', 'similarly', 'in contrast', 'both poems'. Begin with what the poems share - here, both are about memory - then analyse how each treats it differently. 'The Photograph' is still, private, analogue; 'The Song' is public, intrusive, broadcast.",
            },
            {
              heading: "The two poems side by side",
              body: "Both poems are about memory triggered by a reproduced version of the past. The Photograph preserves: 'sharper than my memory of it' - the image outlasts recollection. The Song invades: it plays 'at the supermarket', 'slowed down', dragging the mother 'into the trolley for no reason' - memory is not chosen but imposed. Where the photograph is held and tilted, the song is 'across the aisles like weather' - uncontrollable, atmospheric, public.",
            },
            {
              heading: "Evaluation in comparison",
              body: "Top-band answers judge the effects: the photograph gives the speaker control and intimacy ('I look at her hands first'), while the song gives no control - 'everyone in the shop is briefly young again / except us, who know better'. The song's ending is bleaker: memory 'cannot stop it entering anyway'. Compare the endings - one thins the person to emulsion, the other floods the self with an old feeling.",
            },
          ],
          keyFormulas: [
            { name: "Comparative linking", statement: "Use 'whereas', 'similarly', 'both' to connect points across texts." },
            { name: "Shared theme", statement: "Both poems treat memory, but through different media: image versus sound." },
            { name: "Evaluative comparison", statement: "Judge which treatment is more effective and why." },
          ],
          workedExample: {
            problem: "Compare how 'The Photograph' and 'The Song' present memory.",
            solution: "Both poems present memory as triggered by a reproduced artifact, but they treat it differently. In 'The Photograph', memory is intimate and controlled: the speaker handles the image, 'I look at her hands first', and the photograph 'is sharper than my memory of it'. In 'The Song', memory is public and involuntary: the song 'plays at the supermarket' and 'my mother... cries into the trolley', while the speaker must 'keep my face smooth as a shelf'. The photograph preserves the past as image ('thinner than emulsion'); the song replays it as feeling ('we know better / and cannot stop it entering anyway'). The Song is arguably more devastating because memory cannot be controlled or put down.",
          },
          questions: [
            {
              id: "el11-u7-compare-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: MEMORY_POEMS,
              stem: "Both poems in the extract share which central theme?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The passage of time and technology." },
                  { id: "b", text: "Memory and how the past survives through images and sounds." },
                  { id: "c", text: "Family conflict and reconciliation." },
                  { id: "d", text: "The beauty of supermarkets and galleries." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Shared theme", statement: "Both poems treat memory through reproduced media." }],
                steps: [{ reasoning: "One poem is about a photograph, the other a song - both are reproduced versions of the past that trigger memory.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** Memory and how the past survives through reproduced images and sounds.",
                commonErrors: ["Choosing (a): technology is a detail, not the theme."],
              },
            },
            {
              id: "el11-u7-compare-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: MEMORY_POEMS,
              stem: "How does 'The Song' differ from 'The Photograph' in how memory is triggered? Use a quotation in your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Medium and trigger", statement: "A photograph is handled; a song is heard - different media create different relationships to memory." }],
                steps: [
                  { reasoning: "In 'The Photograph' memory is chosen and handled - the speaker 'tilt[s] it towards the lamp' deliberately.", evidence: "when I tilt it towards the lamp", marks: 1, markCode: "AO1" },
                  { reasoning: "In 'The Song' memory invades - it 'plays at the supermarket' and the mother 'cries into the trolley for no reason', so the trigger is public and involuntary.", evidence: "plays at the supermarket now, slowed down", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The Photograph's memory is voluntary: the speaker chooses to hold and tilt the image. The Song's memory is imposed: the tune 'plays at the supermarket' and 'crosses the aisles like weather', triggering tears 'for no reason the song can give' - memory as invasion rather than ritual.",
                commonErrors: ["Describing each poem separately without the contrast.", "Ignoring the supermarket setting's public, involuntary quality."],
              },
            },
            {
              id: "el11-u7-compare-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: MEMORY_POEMS,
              stem: "Compare how the two poems treat the figure of the mother or grandmother as a remembered person. Support your answer with evidence from both poems.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Cross-text comparison", statement: "Link points about each poem with 'whereas' and 'similarly'." }],
                steps: [
                  { reasoning: "The Photograph's grandmother is an image to be studied: 'her teeth missing', 'her hands... doing something with a cup of tea' - she is observed, almost read.", evidence: "her hands are doing something with a cup of tea", marks: 1, markCode: "AO1" },
                  { reasoning: "The Song's mother is a person overwhelmed: she 'cries into the trolley', hears 'her mother singing it badly' - she is inside the memory, not studying it.", evidence: "my mother hears her mother", marks: 1, markCode: "AO2" },
                  { reasoning: "Contrast: the photograph preserves the grandmother as a still, almost ghostly figure ('thinner than emulsion'); the song preserves the mother as a feeling that floods her - 'we know better / and cannot stop it entering anyway'.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "The Photograph treats the grandmother as an image to be read - teeth, hands, a cup of tea - preserved but mute. The Song treats the mother as a person inside memory - crying in a supermarket, hearing her own mother - overwhelmed by feeling. Where the photograph makes the dead 'thinner than emulsion', the song makes the living unable to stop the past 'entering anyway'.",
                commonErrors: ["Writing two separate descriptions with no linking language.", "Confusing the grandmother (photograph) with the mother (song)."],
              },
            },
            {
              id: "el11-u7-compare-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: MEMORY_POEMS,
              stem: "Compare the endings of 'The Photograph' and 'The Song'. Which ending is more effective, in your view, and why?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Ending as judgement", statement: "A poem's last image carries its final meaning." },
                  { kind: "skill", name: "Evaluative comparison", statement: "Judge one ending against the other with reasons." },
                ],
                steps: [
                  { reasoning: "The Photograph ends on 'thinner than emulsion': the person reduced to image - quiet, visual, almost beautiful in its fragility.", evidence: "thinner than emulsion", marks: 1, markCode: "AO1" },
                  { reasoning: "The Song ends on 'we know better / and cannot stop it entering anyway': memory as an invasion the self cannot prevent - psychological and helpless.", evidence: "cannot stop it entering anyway", marks: 1, markCode: "AO2" },
                  { reasoning: "Both endings deny consolation but differently: one thins, the other floods.", marks: 1, markCode: "AO3" },
                  { reasoning: "Judgement can go either way if argued: e.g. the Song's ending is more devastating because it is involuntary; or the Photograph's is more elegant because it fuses person and medium.", marks: 1, markCode: "AO4" },
                  { reasoning: "Whichever is chosen, the judgement must reference both endings and explain the differing effects.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "The Photograph ends with the grandmother 'thinner than emulsion' - memory as a beautiful, thinning image. The Song ends with 'we know better / and cannot stop it entering anyway' - memory as an unstoppable flood. Either judgement is creditable: the Song's is more psychologically devastating (involuntary), while the Photograph's is more visually elegant (person becomes medium). The key is arguing the comparison, not just describing each.",
                levels: [
                  { level: "Level 3", marks: "4-5", descriptor: "Both endings analysed and a clear, argued judgement made." },
                  { level: "Level 2", marks: "2-3", descriptor: "Both endings described; judgement partial." },
                  { level: "Level 1", marks: "1", descriptor: "One ending mentioned only." },
                ],
                commonErrors: ["Comparing only one poem.", "Refusing to judge - the question asks which is more effective."],
              },
            },
            {
              id: "el11-u7-compare-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: MEMORY_POEMS,
              stem: "How do the two poems differ in their treatment of public versus private memory? Support your answer with evidence from both.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Setting and privacy", statement: "Where memory happens - a private room or a supermarket - shapes its meaning." }],
                steps: [
                  { reasoning: "The Photograph is private: a single speaker, a single image, handled alone 'towards the lamp'.", evidence: "when I tilt it towards the lamp", marks: 2, markCode: "AO1" },
                  { reasoning: "The Song is public: it plays 'at the supermarket', 'across the aisles', witnessed by strangers.", evidence: "across the aisles like weather", marks: 2, markCode: "AO2" },
                  { reasoning: "The public setting intensifies the Song's pain: 'everyone in the shop is briefly young again / except us, who know better' - private grief exposed.", evidence: "except us, who know better", marks: 1, markCode: "AO2" },
                  { reasoning: "Effect: the Photograph's privacy makes memory contemplative; the Song's publicity makes it humiliating and inescapable.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "The Photograph keeps memory private - one person, one image, lamplight. The Song forces it public - a supermarket, strangers, 'everyone in the shop'. This difference is the poems' deepest contrast: private memory can be contemplated ('I look at her hands first'), while public memory invades and embarrasses ('my mother... cries into the trolley'), so the Song's grief is more exposed and less controllable.",
                levels: [
                  { level: "Level 4", marks: "5-6", descriptor: "The private/public contrast is developed across both poems with effect." },
                  { level: "Level 3", marks: "3-4", descriptor: "Contrast identified with reasonable support." },
                  { level: "Level 2", marks: "2", descriptor: "Partial contrast." },
                  { level: "Level 1", marks: "1", descriptor: "Settings named only." },
                ],
                commonErrors: ["Describing settings without linking to memory's privacy or publicity.", "Ignoring the 'except us, who know better' detail."],
              },
            },
            {
              id: "el11-u7-compare-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: MEMORY_POEMS,
              stem: "Compare 'The Photograph' and 'The Song' as poems about memory.",
              parts: [
                { label: "a", prompt: "State the shared theme of both poems.", marks: 2 },
                { label: "b", prompt: "Compare how each poem presents the trigger for memory.", marks: 4 },
                { label: "c", prompt: "Write a paragraph evaluating which poem presents memory more powerfully, and why.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Comparative statement", statement: "Name the shared theme before contrasting." },
                  { kind: "technique", name: "Medium contrast", statement: "Image versus sound, private versus public." },
                  { kind: "skill", name: "Evaluative judgement", statement: "Judge which treatment is more powerful with reasons." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit memory / how the past survives through reproduced media.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Credit a fuller statement: both poems show memory triggered by an old image or song.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Photograph: memory is chosen - the speaker handles and tilts the image.", evidence: "when I tilt it towards the lamp", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Song: memory is imposed - it 'plays at the supermarket' and 'crosses the aisles'.", evidence: "plays at the supermarket now, slowed down", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Photograph preserves as image - 'sharper than my memory of it'.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Song replays as feeling - 'cannot stop it entering anyway'.", evidence: "cannot stop it entering anyway", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "A clear judgement is made (either poem) and argued.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Reasons reference technique: image vs sound, control vs invasion.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The comparison links both poems, not just one.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "The effect on the reader is explained (e.g. the Song's involuntary grief is more devastating).", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) Both poems explore memory triggered by reproduced media. (b) The Photograph's memory is chosen and visual; the Song's is imposed and auditory - image preserves, sound floods. (c) A top answer judges which is more powerful (the Song is arguably more devastating because memory cannot be controlled) and argues it through the contrast of private ritual versus public invasion.",
                levels: [
                  { part: "a", level: "Level 2", marks: "2", descriptor: "Shared theme clearly stated." },
                  { part: "a", level: "Level 1", marks: "1", descriptor: "Partial or vague." },
                  { part: "b", level: "Level 4", marks: "4", descriptor: "Triggers compared with evidence from both poems." },
                  { part: "b", level: "Level 3", marks: "3", descriptor: "Mostly compared." },
                  { part: "b", level: "Level 2", marks: "2", descriptor: "Partial comparison." },
                  { part: "b", level: "Level 1", marks: "1", descriptor: "One poem only." },
                  { part: "c", level: "Level 4", marks: "4", descriptor: "Evaluative judgement argued across both poems." },
                  { part: "c", level: "Level 3", marks: "3", descriptor: "Judgement with some support." },
                  { part: "c", level: "Level 2", marks: "2", descriptor: "Minimal judgement." },
                  { part: "c", level: "Level 1", marks: "1", descriptor: "Restates content only." },
                ],
                commonErrors: ["In (b) describing each poem separately with no comparison.", "In (c) refusing to judge or judging without reasons."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el11-u7-poetry-compare-notes",
      title: "Context, theme and comparison - notes",
      summary: "Theme is the poem's deep idea; context is inferred from the text. Compare by linking, then judge.",
      sections: [
        { heading: "Key idea", body: "Separate theme (the idea) from mood (the feeling) - then show how imagery carries both." },
        { heading: "Context", body: "For unseen poems, infer context from internal clues - objects, vocabulary, era markers." },
        { heading: "Comparison", body: "Use 'whereas' and 'similarly' to link; finish with an argued judgement about which is more effective." },
      ],
    },
  },
];
