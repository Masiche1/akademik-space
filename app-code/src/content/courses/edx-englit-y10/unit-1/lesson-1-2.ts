import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const SONNET_116: TextExtract = {
  title: "Sonnet 116",
  author: "William Shakespeare",
  source: "Sonnets (1609)",
  lineNumbers: true,
  text:
    "Let me not to the marriage of true minds\nAdmit impediments. Love is not love\nWhich alters when it alteration finds,\nOr bends with the remover to remove:\nO no! it is an ever-fixed mark\nThat looks on tempests and is never shaken;\nIt is the star to every wandering bark,\nWhose worth's unknown, although his height be taken.\nLove's not Time's fool, though rosy lips and cheeks\nWithin his bending sickle's compass come;\nLove alters not with his brief hours and weeks,\nBut bears it out even to the edge of doom.\nIf this be error and upon me proved,\nI never writ, nor no man ever loved.",
};

const ANTHEM: TextExtract = {
  title: "Anthem for Doomed Youth (lines 1-8)",
  author: "Wilfred Owen",
  source: "Poems (1920)",
  lineNumbers: true,
  text:
    "What passing-bells for these who die as cattle?\nOnly the monstrous anger of the guns.\nOnly the stuttering rifles' rapid rattle\nCan patter out their hasty orisons.\nNo mockeries now for them; no prayers nor bells,\nNor any voice of mourning save the choirs,—\nThe shrill, demented choirs of wailing shells;\nAnd bugles calling for them from sad shires.",
};

export const lesson12: Lesson = {
  id: "et10-u1-lesson-1-2",
  code: "1-2",
  title: "Poems of Love, Relationships, Conflict and Loss",
  goal: "I CAN analyse how poets present love, relationships, conflict and loss, using precise evidence and considering context.",
  standards: ["4ET1 Paper 1 Section B", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Sonnet", definition: "A fourteen-line poem, usually in iambic pentameter, often exploring a single idea or argument." },
    { term: "Couplet", definition: "Two consecutive rhyming lines, often used to conclude a sonnet." },
    { term: "Personification", definition: "Giving human qualities or actions to an idea or object." },
    { term: "Onomatopoeia", definition: "A word that imitates the sound it describes, such as 'rattle'." },
    { term: "Elegy", definition: "A poem of mourning for the dead." },
    { term: "Simile", definition: "A comparison using 'like' or 'as'." },
    { term: "Allusion", definition: "An indirect reference to a person, event or text outside the poem." },
  ],
  concepts: [
    {
      id: "et10-u1-love-and-relationships",
      title: "Poems of love and relationships",
      skill: "Analyse how poets use imagery, argument and form to present love and relationships.",
      lesson: {
        sections: [
          {
            heading: "What is the poet's view of love?",
            body: "Poets rarely just say 'love is good'. They define, test or challenge it. In Sonnet 116 Shakespeare argues that true love is constant and defies change, and he uses a series of metaphors to prove it. Always ask: what claim is made about love, and how does the poet make it persuasive?",
          },
          {
            heading: "Argument, imagery and form",
            body: "Sonnets are tightly controlled arguments. In Shakespeare's form three quatrains develop an idea and a final couplet clinches it. Notice the shift from what love is not (a changeable thing) to what it is (a fixed star), and the personification of Time as a reaper with a sickle. Link each technique to the idea of constancy.",
          },
          {
            heading: "Context (AO4)",
            body: "Relevant context should illuminate the poem, not replace analysis. The Elizabethan and Jacobean idea of the sonnet as a form for praising love, and the view of marriage as a spiritual union, help explain why Shakespeare calls it 'the marriage of true minds'. Use context briefly and link it to a quotation.",
          },
        ],
        keyFormulas: [
          { name: "Sonnet structure", statement: "Three quatrains develop an idea; the final couplet resolves or challenges it." },
          { name: "Personification", statement: "Giving human qualities to abstract ideas (such as Time) to make them vivid and threatening." },
          { name: "Constancy", statement: "A key idea in Sonnet 116: true love does not change with circumstance, age or time." },
        ],
        workedExample: {
          problem: "How does Shakespeare present the permanence of love in lines 5-8 of Sonnet 116?",
          solution: "Shakespeare uses a metaphor of navigation to present love as a guide. Love is an “ever-fixed mark”, a landmark that stands firm, and the compound adjective stresses permanence. It “looks on tempests”, so love is calm and watchful in the face of storms, and the personified verb suggests an almost heroic steadiness. The metaphor of the “star to every wandering bark” suggests that love gives direction to lost travellers, implying that it is both constant and guiding. The confident, absolute language contrasts with the unstable image of the sea and so makes the claim feel more powerful.",
        },
      },
      questions: [
        {
          id: "et10-u1-love-and-relationships-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SONNET_116,
          stem: "In line 5 what does the metaphor “ever-fixed mark” suggest about love?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Love is a mark left by pain" },
              { id: "b", text: "Love is permanent and stable like a landmark used for navigation" },
              { id: "c", text: "Love is a target that people try to hit" },
              { id: "d", text: "Love is a mistake that can be corrected" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "A direct comparison that transfers qualities from one thing to another." }],
            steps: [{ reasoning: "A fixed sea-mark does not move, so love is presented as constant and reliable.", evidence: "ever-fixed mark", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** The metaphor presents love as a stable marker that does not change.",
            commonErrors: ["Reading 'mark' as a scar (a).", "Ignoring the nautical imagery that follows (d)."],
          },
        },
        {
          id: "et10-u1-love-and-relationships-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SONNET_116,
          stem: "Explain how Shakespeare presents Time in lines 9-12. Support your answer with a quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Time is given human actions to make it seem threatening." }],
            steps: [
              { reasoning: "Time is personified as a harvester wielding a sickle, suggesting that it destroys beauty and life.", evidence: "Time's fool", marks: 1, markCode: "AO2" },
              { reasoning: "The destruction of physical beauty is signalled by “rosy lips and cheeks”, which fall within the sickle's reach.", evidence: "bending sickle's compass", marks: 1, markCode: "AO1" },
              { reasoning: "Love, in contrast, is not Time's “fool”: it is not controlled by the passing of hours and weeks.", evidence: "Love alters not", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Time is personified as a grim reaper whose “bending sickle” cuts down youth and beauty (“rosy lips and cheeks”), but love is not Time's “fool” and so survives it.",
            commonErrors: ["Describing Time as kind or neutral.", "Quoting without explaining what the image suggests."],
          },
        },
        {
          id: "et10-u1-love-and-relationships-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SONNET_116,
          stem: "How does Shakespeare use the final couplet (lines 13-14) to conclude his argument about love?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sonnet couplet", statement: "The rhyming couplet gives a sense of closure and certainty." },
              { kind: "technique", name: "Hyperbole and paradox", statement: "Exaggerated claims that stake the poet's whole identity on the argument." },
            ],
            steps: [
              { reasoning: "The conditional “If this be error” sets up a bold challenge: the argument is presented as a test.", evidence: "If this be error and upon me proved", marks: 2, markCode: "AO2" },
              { reasoning: "The rhyming couplet gives finality and confidence, closing the structure of the sonnet.", evidence: "ever loved", marks: 2, markCode: "AO2" },
              { reasoning: "The speaker stakes his writing and humanity on the claim, which is a dramatic, paradoxical exaggeration that insists love is real and constant.", evidence: "I never writ, nor no man ever loved", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "The couplet closes the argument with a bold challenge: if he is proved wrong, then he never wrote and no one ever loved. The exaggeration and neat rhyme create certainty and finality.",
            commonErrors: ["Ignoring the form and rhyme.", "Treating 'If this be error' as doubt rather than confidence."],
            levels: levels(6),
          },
        },
        {
          id: "et10-u1-love-and-relationships-q4",
          difficulty: "challenge",
          totalMarks: 15,
          extract: SONNET_116,
          stem: "Read Sonnet 116 and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two things the poet says love is not (lines 2-4).", marks: 2 },
            { label: "b", prompt: "Explain how the imagery of the star presents love (lines 7-8).", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language and structure to present his ideas about love in the whole poem?", marks: 9 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sonnet argument", statement: "Quatrains build a case; the couplet clinches it." },
              { kind: "technique", name: "Extended imagery", statement: "A developed metaphor across several lines reinforces an idea." },
            ],
            steps: [
              { part: "a", reasoning: "Love is not love if it changes when circumstances change.", evidence: "alters when it alteration finds", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Love does not bend or give way when someone tries to remove it.", evidence: "bends with the remover to remove", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The star is a fixed guide for sailors (“wandering bark”), so love gives direction to those who are lost.", evidence: "star to every wandering bark", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "“Whose worth's unknown” suggests that love has a value beyond measurement, even if its height is taken.", evidence: "Whose worth's unknown", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Language: repeated negatives and absolutes (“never shaken”, “alters not”) assert that love is unconditional.", evidence: "never shaken", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Structure: the shift from what love is not (quatrain 1) to what it is (quatrain 2) and its triumph over Time (quatrain 3) builds a logical, persuasive argument.", evidence: "Love is not love", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context: the sonnet tradition and the idea of marriage as a union of minds explain the idealised view; the couplet's confident wager ends the argument decisively.", evidence: "marriage of true minds", marks: 3, markCode: "AO4" },
            ],
            finalAnswer: "(a) Love alters when it finds alteration; it bends with the remover to remove. (b) The star is a constant guide for lost sailors and has immeasurable worth. (c) A top answer traces the argument through the three quatrains and couplet, and explains the absolutes and imagery of constancy.",
            commonErrors: ["Describing Shakespeare's life instead of analysing the poem.", "Listing images with no effect.", "Missing the shift from negation to affirmation."],
            examinerNote: "Context must be integrated into analysis for AO4 credit; bolt-on facts earn little.",
            levels: levels(9, "c"),
          },
        },
      ],
    },
    {
      id: "et10-u1-conflict-and-loss",
      title: "Poems of conflict and loss",
      skill: "Analyse how poets use sound, imagery and structure to present war, death and loss.",
      lesson: {
        sections: [
          {
            heading: "Sound and meaning",
            body: "In 'Anthem for Doomed Youth' Owen uses sound to imitate the noise of war. Onomatopoeia and alliteration, such as “stuttering rifles' rapid rattle”, make the reader hear the guns, while the heavy, clipped consonants contrast with the gentle sounds of a church service. Always explain what the sound adds to the meaning.",
          },
          {
            heading: "Irony and contrast",
            body: "Owen sets the rituals of a funeral against the reality of battle. Instead of church bells there are guns, instead of choirs there are shells, instead of prayers there is the rattle of rifles. The contrast shows that these soldiers have no dignified farewell, which is the poem's criticism of war.",
          },
          {
            heading: "Context (AO4)",
            body: "Owen was a soldier in the First World War and died in 1918, a week before the Armistice. His poem challenges the patriotic idea of a glorious death. Relevant context, such as the mass slaughter of the trenches, helps explain the bitter, accusing tone.",
          },
        ],
        keyFormulas: [
          { name: "Onomatopoeia", statement: "A word whose sound imitates the thing it describes, such as 'rattle' or 'patter'." },
          { name: "Simile of dehumanisation", statement: "Comparing soldiers to cattle suggests they are slaughtered without dignity." },
          { name: "Sonnet adapted", statement: "Owen uses the sonnet, a form linked with love, to mourn war dead, adding irony." },
        ],
        workedExample: {
          problem: "How does Owen present the soldiers' deaths in lines 1-4?",
          solution: "Owen opens with a rhetorical question and a stark simile, comparing the soldiers to cattle, which suggests that they are herded and slaughtered without dignity. The question demands that the reader reflect on the lack of ceremony. The personification of the guns as having “monstrous anger” gives war a destructive, inhuman rage, while the onomatopoeic “stuttering rifles' rapid rattle” imitates the broken, relentless noise of machine-gun fire. Together these choices show that the soldiers receive no funeral but the noise of weapons.",
        },
      },
      questions: [
        {
          id: "et10-u1-conflict-and-loss-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ANTHEM,
          stem: "What does the simile “die as cattle” suggest about the soldiers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are peaceful and gentle" },
              { id: "b", text: "They are treated like animals, slaughtered without dignity" },
              { id: "c", text: "They are being kept safe in the countryside" },
              { id: "d", text: "They come from farming families" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "A comparison that shapes how we view the subject." }],
            steps: [{ reasoning: "Cattle are herded to slaughter, so the soldiers are dehumanised.", evidence: "die as cattle", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** The simile suggests the soldiers are killed in huge numbers without dignity.",
            commonErrors: ["Taking the simile literally (c).", "Choosing the positive connotation of calmness (b)."],
          },
        },
        {
          id: "et10-u1-conflict-and-loss-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ANTHEM,
          stem: "Explain the effect of the phrase “stuttering rifles' rapid rattle” (line 3).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Onomatopoeia and alliteration", statement: "Sound patterns imitate the noise being described." },
            ],
            steps: [
              { reasoning: "Alliteration of 'r' and onomatopoeic 'rattle' imitate the sound of rapid gunfire.", evidence: "rapid rattle", marks: 1, markCode: "AO2" },
              { reasoning: "“Stuttering” personifies the rifles as if they cannot speak properly, suggesting they replace human prayer with broken, mechanical noise.", evidence: "stuttering rifles", marks: 1, markCode: "AO2" },
              { reasoning: "The harsh, repetitive sounds contrast with the gentle ritual of a funeral, highlighting how war denies the dead proper mourning.", evidence: "patter out their hasty orisons", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The repeated 'r' sounds and the word “rattle” make the reader hear the guns. “Stuttering” personifies them, so mechanical noise replaces real prayers.",
            commonErrors: ["Naming alliteration with no effect.", "Missing the connection with funerals."],
          },
        },
        {
          id: "et10-u1-conflict-and-loss-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ANTHEM,
          stem: "How does Owen use sound and imagery to criticise war in lines 5-8?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pathetic fallacy and personification", statement: "Objects take on emotions to reflect human suffering." },
              { kind: "skill", name: "Linking technique to purpose", statement: "State how the effect supports the writer's message." },
            ],
            steps: [
              { reasoning: "Repetition of “choirs” first for mourners and then for shells turns the funeral choir into a weapon, an ironic reversal.", evidence: "the shrill, demented choirs of wailing shells", marks: 2, markCode: "AO2" },
              { reasoning: "Adjectives like “shrill” and “demented” suggest madness and pain, so war is presented as a chaotic, insane force.", evidence: "shrill, demented", marks: 2, markCode: "AO2" },
              { reasoning: "“No mockeries now for them” suggests that traditional ceremonies would be false, and “sad shires” introduces the grieving homeland, so criticism of war is linked to national loss.", evidence: "bugles calling for them from sad shires", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Owen turns funeral choirs into “wailing shells”, using “shrill, demented” to present war as insane, and ends with the grieving “sad shires”, criticising both the violence and the loss it brings home.",
            commonErrors: ["Not commenting on repetition of 'choirs'.", "Focusing only on lines 1-4."],
            levels: levels(6),
          },
        },
        {
          id: "et10-u1-conflict-and-loss-q4",
          difficulty: "challenge",
          totalMarks: 15,
          extract: ANTHEM,
          stem: "Read the opening of 'Anthem for Doomed Youth' and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two things Owen says soldiers do not receive (lines 1-6).", marks: 2 },
            { label: "b", prompt: "Explain how Owen presents the guns in lines 2-4.", marks: 4 },
            { label: "c", prompt: "How does Owen use language, form and context to present loss in lines 1-8?", marks: 9 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification and onomatopoeia", statement: "Weapons are given voices and sounds to replace human mourning." },
              { kind: "context", name: "First World War", statement: "Mass death in the trenches meant many soldiers had no funeral rites." },
            ],
            steps: [
              { part: "a", reasoning: "They do not receive passing-bells.", evidence: "What passing-bells", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "They do not receive prayers or a voice of mourning.", evidence: "no prayers nor bells", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The guns are personified as angry, which suggests war is violent and animalistic.", evidence: "monstrous anger of the guns", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The repetition of “Only” and the sound words reduce the funeral to mechanical noise.", evidence: "Only the stuttering rifles' rapid rattle", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Language: the simile of cattle, the personified guns and demented shells show war as dehumanising and chaotic.", evidence: "die as cattle", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Form: the sonnet, a form of love poetry, becomes elegiac and ironic; the octave sets out what the soldiers lack.", evidence: "No mockeries now for them", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context: Owen, a soldier-poet, writes against patriotic propaganda about glorious death; the soldiers' lack of ceremony exposes the cost of war.", evidence: "sad shires", marks: 3, markCode: "AO4" },
            ],
            finalAnswer: "(a) Passing-bells; prayers or voices of mourning. (b) The guns are monstrous and angry; the repeated “Only” strips the funeral to noise. (c) A top answer integrates cattle simile, personified weapons, ironic sonnet form and First World War context to show loss without dignity.",
            commonErrors: ["Adding biography with no link to the poem.", "Treating the guns as literal only.", "Overlooking the ironic use of a love-poem form."],
            levels: levels(9, "c"),
          },
        },
      ],
    },
  ],
};
