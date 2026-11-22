import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const ANTHEM: TextExtract = {
  title: "Anthem for Doomed Youth (lines 1-8)",
  author: "Wilfred Owen",
  source: "Poems (1920)",
  lineNumbers: true,
  text:
    "What passing-bells for these who die as cattle?\nOnly the monstrous anger of the guns.\nOnly the stuttering rifles' rapid rattle\nCan patter out their hasty orisons.\nNo mockeries now for them; no prayers nor bells,\nNor any voice of mourning save the choirs,—\nThe shrill, demented choirs of wailing shells;\nAnd bugles calling for them from sad shires.",
};

const SONNET_116: TextExtract = {
  title: "Sonnet 116 (lines 1-8)",
  author: "William Shakespeare",
  source: "Sonnets (1609)",
  lineNumbers: true,
  text:
    "Let me not to the marriage of true minds\nAdmit impediments. Love is not love\nWhich alters when it alteration finds,\nOr bends with the remover to remove:\nO no! it is an ever-fixed mark\nThat looks on tempests and is never shaken;\nIt is the star to every wandering bark,\nWhose worth's unknown, although his height be taken.",
};

export const lesson13: Lesson = {
  id: "et10-u1-lesson-1-3",
  code: "1-3",
  title: "Comparing Poems and Writing the Comparison Essay",
  goal: "I CAN compare two poems using shared ideas and contrasting methods, and shape a clear comparative essay.",
  standards: ["4ET1 Paper 1 Section B", "4ET1 AO1", "4ET1 AO2", "4ET1 AO3"],
  vocabulary: [
    { term: "Comparison", definition: "Exploring the similarities and differences between texts in ideas and methods." },
    { term: "Connective", definition: "A word or phrase that links ideas, such as 'similarly', 'in contrast' or 'whereas'." },
    { term: "Thesis", definition: "A clear central argument that runs through an essay." },
    { term: "Juxtaposition", definition: "Placing two contrasting ideas close together to highlight their difference." },
    { term: "Integrated structure", definition: "An essay plan that compares both poems within each paragraph rather than one after the other." },
    { term: "Tone", definition: "The attitude or mood conveyed by the poet's voice." },
  ],
  concepts: [
    {
      id: "et10-u1-comparing-two-poems",
      title: "Comparing two poems",
      skill: "Identify connections and contrasts in ideas, tone and methods between two poems (AO3).",
      lesson: {
        sections: [
          {
            heading: "Start with a shared idea",
            body: "Comparison needs a common focus. Sonnet 116 and 'Anthem for Doomed Youth' both concern how something precious is honoured or lost, but one celebrates an unchanging love and the other mourns the lack of ceremony for the dead. Choose a shared concept such as time, ritual, permanence or loss, and then compare what each poet says and how they say it.",
          },
          {
            heading: "Compare methods, not only meaning",
            body: "Do not compare only what happens. Set methods side by side: Shakespeare uses a confident extended metaphor and a neat couplet; Owen uses harsh sound, a dehumanising simile and an ironic reversal of funeral imagery. Always explain the different effects.",
          },
          {
            heading: "Use comparative language",
            body: "Use connectives that signal your relationship between the poems: 'similarly', 'whereas', 'in contrast', 'both poets', 'unlike'. Make a judgement about the difference rather than just stating that a difference exists.",
          },
        ],
        keyFormulas: [
          { name: "Similarity", statement: "Both poets use X to present Y, although the effect differs because..." },
          { name: "Contrast", statement: "Whereas Shakespeare presents..., Owen presents..., which suggests..." },
          { name: "AO3 focus", statement: "Link ideas and methods across texts in a sustained way." },
        ],
        workedExample: {
          problem: "Compare how Shakespeare and Owen present time or permanence in Sonnet 116 and 'Anthem for Doomed Youth'.",
          solution: "Both poets turn to ritual and symbol to express what lasts or what is denied. Shakespeare presents love as an “ever-fixed mark”, a constant that survives “tempests”, which conveys certainty through firm, absolute language. Owen, by contrast, shows that soldiers are denied rituals: there are no “passing-bells”, only the noise of guns. While Shakespeare's confident metaphors build a sense of permanence, Owen's harsh onomatopoeia and dehumanising simile suggest that war destroys the dignity and memory of the dead. Therefore both poems use nature or sound to examine what endures, but one affirms endurance and the other protests against its absence.",
        },
      },
      questions: [
        {
          id: "et10-u1-comparing-two-poems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connective best signals a contrast between two poems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Likewise" },
              { id: "b", text: "Whereas" },
              { id: "c", text: "In the same way" },
              { id: "d", text: "Similarly" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparative connectives", statement: "Choose connectives that signal similarity or difference accurately." }],
            steps: [{ reasoning: "“Whereas” introduces a contrast; the others signal similarity.", marks: 1, markCode: "AO3" }],
            finalAnswer: "**(c)** 'Whereas' marks a difference.",
            commonErrors: ["Confusing connectives of similarity with those of difference."],
          },
        },
        {
          id: "et10-u1-comparing-two-poems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sonnet 116 and 'Anthem for Doomed Youth' both use a fourteen-line form. Explain one similarity in how the poets use the sonnet form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sonnet form", statement: "The sonnet is traditionally a form for love or serious argument." }],
            steps: [
              { reasoning: "Identifies a shared feature: both poems use the sonnet form with a rhyming scheme and a developing argument.", marks: 1, markCode: "AO3" },
              { reasoning: "Shakespeare uses the form to present a confident, ordered argument about love.", evidence: "Love is not love", marks: 1, markCode: "AO2" },
              { reasoning: "Owen uses the same controlled form ironically to mourn those denied a proper funeral.", evidence: "No mockeries now for them", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Both poets use a tightly controlled sonnet: Shakespeare for an ordered argument about love, Owen to give the dead a poem as ironic substitute for the funeral they were denied.",
            commonErrors: ["Naming the form without effect.", "Claiming both poems have identical rhyme schemes."],
          },
        },
        {
          id: "et10-u1-comparing-two-poems-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SONNET_116,
          stem: "Compare how the speaker of Sonnet 116 (printed here) and the speaker of 'Anthem for Doomed Youth' (printed in the next question) use imagery to convey strong feelings. In your answer, refer to the two poems you have studied.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative paragraph", statement: "Link both poems through a shared idea and compare methods and effects." },
              { kind: "technique", name: "Imagery", statement: "Compare metaphor, simile and personification across the poems." },
            ],
            steps: [
              { reasoning: "Shakespeare uses the navigational metaphor of the star and fixed mark to express unwavering trust and admiration.", evidence: "ever-fixed mark", marks: 2, markCode: "AO2" },
              { reasoning: "Owen uses a harsh simile and personification to express outrage and sorrow.", evidence: "die as cattle", marks: 2, markCode: "AO2" },
              { reasoning: "Explicit comparison: the tones differ (confident versus bitter), but both use extended imagery to make abstract feeling concrete.", marks: 2, markCode: "AO3" },
              { reasoning: "Evaluative link: Shakespeare's imagery reassures, whereas Owen's shocks, which shapes the reader's contrasting responses.", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "Both poets make feeling concrete through imagery, but Shakespeare's steady nautical metaphors create reassurance and certainty, whereas Owen's simile and personification create outrage at the dehumanising nature of war.",
            commonErrors: ["Writing about each poem separately with no link.", "Comparing only subject matter."],
            levels: levels(8),
          },
        },
        {
          id: "et10-u1-comparing-two-poems-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: ANTHEM,
          stem: "Use 'Anthem for Doomed Youth' (printed) and Sonnet 116 (which you have studied) to answer all parts.",
          parts: [
            { label: "a", prompt: "Give one way in which both poems use sound for effect.", marks: 2 },
            { label: "b", prompt: "Explain how each poet uses a contrast to develop their ideas.", marks: 6 },
            { label: "c", prompt: "Compare how the two poets present the idea of permanence or loss, referring to language, form and structure.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated comparison", statement: "Compare both poems within each paragraph, linking ideas and methods." },
              { kind: "convention", name: "Sonnet form", statement: "Both poems use a controlled form with a developing argument." },
            ],
            steps: [
              { part: "a", reasoning: "Shakespeare uses repetition and rhythm for emphasis (“Love is not love”, “alters”, “alteration”).", evidence: "alters when it alteration finds", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Owen uses onomatopoeia and alliteration to imitate gunfire.", evidence: "rifles' rapid rattle", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Shakespeare contrasts what love is not with what it is: changeable versus fixed.", evidence: "Love is not love", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Owen contrasts funeral rituals with the noise of weapons: bells versus guns.", evidence: "no prayers nor bells", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Both use contrast to make the main idea clearer and stronger.", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Language: Shakespeare's absolute, positive images of a star and fixed mark convey permanence; Owen's dehumanising simile and personified guns convey loss of dignity.", evidence: "ever-fixed mark", marks: 4, markCode: "AO2" },
              { part: "c", reasoning: "Form and structure: Shakespeare's quatrains and couplet build a closed argument; Owen's octave catalogues what is denied, with an ironic use of a love-poem form.", evidence: "Only the monstrous anger of the guns", marks: 4, markCode: "AO2" },
              { part: "c", reasoning: "Sustained comparison: both poems use controlled form to explore what lasts, but one affirms and one protests; judgements link tone, purpose and effect.", marks: 4, markCode: "AO3" },
            ],
            finalAnswer: "(a) Shakespeare's repetition; Owen's onomatopoeia. (b) Shakespeare contrasts changeable and fixed love; Owen contrasts bells and guns; both use contrast to intensify the message. (c) A top answer integrates both poems throughout, comparing affirmation of permanence with protest at loss, supported by precise evidence.",
            commonErrors: ["Writing two separate essays.", "Failing to link methods to meaning.", "Using comparison connectives without genuine analysis."],
            examinerNote: "AO3 is rewarded for sustained links, not just a final comparative sentence.",
            levels: [...levels(6, "b"), ...levels(12, "c")],
          },
        },
      ],
    },
    {
      id: "et10-u1-comparison-essay",
      title: "The comparison essay",
      skill: "Plan and write a structured comparison essay with a clear argument, integrated evidence and a judgement.",
      lesson: {
        sections: [
          {
            heading: "Plan before you write",
            body: "Spend a few minutes planning. Decide on a thesis answering the question, choose three comparative points, and note one short quotation from each poem for each point. A plan prevents you from retelling poems and keeps your argument focused.",
          },
          {
            heading: "Integrated paragraphs",
            body: "An integrated paragraph compares both poems together. Open with a clear point, give evidence from the first poem, link with a connective to the second poem, and explain the different effects. End by linking back to the question.",
          },
          {
            heading: "Introduction and conclusion",
            body: "A brief introduction states your argument and names the poems. A conclusion should offer a judgement, such as which poem presents the idea more powerfully and why, rather than repeating what you have said.",
          },
        ],
        keyFormulas: [
          { name: "Paragraph pattern", statement: "Point, evidence from poem 1, link, evidence from poem 2, comparison of effect." },
          { name: "Judgement", statement: "Reach a justified conclusion about which method or message is more powerful." },
          { name: "Question focus", statement: "Return to the wording of the question in every paragraph." },
        ],
        workedExample: {
          problem: "Plan the opening of an essay comparing how poets present loss.",
          solution: "Thesis: Owen presents loss as public outrage at a denied ritual, whereas Shakespeare presents the opposite, a love that cannot be lost. Point 1: contrasting imagery (cattle and guns versus star and fixed mark). Point 2: contrasting sound and tone (rattle and shrill versus calm absolutes). Point 3: contrasting form and structure (ironic sonnet octave versus confident quatrains and couplet). Conclusion: Owen's poem is more disturbing because it exposes what Shakespeare's idealism takes for granted.",
        },
      },
      questions: [
        {
          id: "et10-u1-comparison-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which opening sentence would best begin a comparison essay about loss in two poems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In this essay I will write about two poems." },
              { id: "b", text: "Poems are written by poets." },
              { id: "c", text: "Both poets present loss differently: Owen with bitter outrage, Shakespeare through confidence in lasting love." },
              { id: "d", text: "Owen was a soldier born in 1893." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Clear thesis", statement: "An opening that answers the question and signals a comparison." }],
            steps: [{ reasoning: "Option (a) gives a clear comparative argument.", marks: 1, markCode: "AO3" }],
            finalAnswer: "**(a)** It states a comparative argument focused on the question.",
            commonErrors: ["Opening with biography (b).", "Announcing intentions without an argument (c)."],
          },
        },
        {
          id: "et10-u1-comparison-essay-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite this comparison so that it analyses rather than describes: 'Owen uses a simile and Shakespeare uses a metaphor.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Analytical comparison", statement: "Name the method, quote, and explain the effect on the reader, linking both poems." }],
            steps: [
              { reasoning: "Names the methods precisely with a short quotation from each poem.", evidence: "die as cattle", marks: 1, markCode: "AO2" },
              { reasoning: "Explains the effect of Owen's dehumanising simile.", marks: 1, markCode: "AO2" },
              { reasoning: "Explains the effect of Shakespeare's reassuring metaphor.", evidence: "ever-fixed mark", marks: 1, markCode: "AO2" },
              { reasoning: "Uses a connective to make a clear comparison of effect.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Owen's simile “die as cattle” dehumanises the soldiers and provokes outrage, whereas Shakespeare's metaphor of an “ever-fixed mark” reassures the reader that love is constant.",
            commonErrors: ["Only naming the techniques again.", "No quotation.", "No comparison of effect."],
          },
        },
        {
          id: "et10-u1-comparison-essay-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write one integrated paragraph comparing how two poems you have studied present the passing of time. Refer to language or structure in both poems.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Integrated paragraph", statement: "Point, evidence from both poems, connective, comparison of effects." }],
            steps: [
              { reasoning: "A clear, comparative point focused on time.", marks: 2, markCode: "AO3" },
              { reasoning: "Precise, embedded evidence from the first poem with analysis (for example Time's “bending sickle”).", evidence: "bending sickle", marks: 2, markCode: "AO2" },
              { reasoning: "Precise, embedded evidence from the second poem with analysis (for example the “hasty orisons” of a rushed ritual).", evidence: "hasty orisons", marks: 2, markCode: "AO2" },
              { reasoning: "Evaluates the different effects of the poets' methods on the reader.", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "Model: Both poets show time as a pressure on what people value. Shakespeare personifies Time with a “bending sickle”, a threat that love nevertheless survives, whereas Owen's “hasty orisons” suggest a rushed, truncated farewell in wartime. Shakespeare's image conveys defiance, while Owen's conveys protest, so the same pressure inspires triumph in one poem and grief in the other.",
            commonErrors: ["Dealing with only one poem.", "Retelling the poem rather than analysing a method."],
            levels: levels(8),
          },
        },
        {
          id: "et10-u1-comparison-essay-q4",
          difficulty: "challenge",
          totalMarks: 24,
          stem: "Answer using two poems from the anthology you have studied.",
          parts: [
            { label: "a", prompt: "State the main idea about love or loss in each of the two poems you have chosen.", marks: 4 },
            { label: "b", prompt: "Write one comparative paragraph on a difference in the poets' methods.", marks: 8 },
            { label: "c", prompt: "Compare how the poets present strong emotion, referring to language, form and structure.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison essay", statement: "A clear argument, integrated evidence, close analysis and a judgement." },
              { kind: "technique", name: "Methods and effects", statement: "Every technique needs a quotation and an explained effect." },
            ],
            steps: [
              { part: "a", reasoning: "A clear statement of the main idea in the first poem.", marks: 2, markCode: "AO1" },
              { part: "a", reasoning: "A clear statement of the main idea in the second poem.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "A clear comparative point about methods.", marks: 2, markCode: "AO3" },
              { part: "b", reasoning: "Relevant short quotations from both poems.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Analysis of effects of each poet's method.", marks: 4, markCode: "AO2" },
              { part: "c", reasoning: "Sustained comparison of ideas and attitudes through the essay.", marks: 4, markCode: "AO3" },
              { part: "c", reasoning: "Close analysis of language with embedded quotations.", marks: 4, markCode: "AO2" },
              { part: "c", reasoning: "Comment on form and structure and their effects, with a final judgement.", marks: 4, markCode: "AO2" },
            ],
            finalAnswer: "A top-band response states a thesis, compares both poems in integrated paragraphs with precise quotations, analyses language, form and structure, and ends with a justified judgement.",
            commonErrors: ["Describing poems separately.", "Quotations without analysis.", "A conclusion that merely repeats the introduction."],
            examinerNote: "Any two anthology poems are acceptable provided points are supported by the texts.",
            levels: [...levels(8, "b"), ...levels(12, "c")],
          },
        },
      ],
    },
  ],
};
