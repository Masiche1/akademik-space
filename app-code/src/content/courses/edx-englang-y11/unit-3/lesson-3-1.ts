import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

// Builds a level-based scheme whose top band equals the marks available.
const levels = (top: number, focus: string, part?: string): MarkLevel[] => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k: number) => Math.round((top * k) / n);
  const ladder = [
    `Perceptive, assured and discriminating ${focus}; judicious, well-chosen references`,
    `Thorough ${focus}; well-chosen, effective references`,
    `Clear, relevant ${focus}; appropriate references`,
    `Some understanding; ${focus} is partly developed with some relevant references`,
    `Simple, limited ${focus}; few or unselective references`,
  ];
  const pick = n === 3 ? [0, 2, 4] : n === 4 ? [0, 2, 3, 4] : [0, 1, 2, 3, 4];
  return pick.map((li, i) => ({
    level: `Level ${n - i}`,
    marks: `${upper(n - i - 1) + 1}-${upper(n - i)}`,
    descriptor: ladder[li] ?? "",
    ...(part ? { part } : {}),
  }));
};

const POEM: TextExtract = {
  title: "The Last Tram",
  author: "Written for Akademik Space",
  source: "Original unseen poem",
  lineNumbers: true,
  text:
    "The last tram shudders out of the depot's mouth,\nits windows yellow as old piano keys.\nI sit among the sleepers and the drunk,\nthe nurse still wearing her day like a coat.\n\nOutside, the city is taking off its face:\nthe shutters fall; a neon sign gutters;\nsomeone has left a lit room, unwatched,\nlike a sentence abandoned halfway through.\n\nI used to think that going home was simple.\nNow every stop is a small decision\nto stay inside this moving light, this borrowed hour,\nand not to step down into my own front door.",
};

const PROSE: TextExtract = {
  title: "The Inheritance",
  author: "Written for Akademik Space",
  source: "Original unseen prose extract",
  lineNumbers: true,
  text:
    "The solicitor's office smelled of lilies and photocopier toner. Mara sat very upright, her bag on her knees, as though the chair might be taken from her. Across the desk, her brother Tobias turned a pen over and over, a small, metronomic click that she wanted, quite badly, to stop.\n\n'Your father,' said the solicitor, 'was meticulous.' He slid a key across the polished wood. It lay between them, brass and ordinary, like something dropped by a stranger. 'This is for the house in Harrow Lane.'\n\nTobias stopped clicking. 'There is only one key?'\n\n'There is only one key,' the solicitor agreed, and looked, with sudden interest, at the window.\n\nMara reached out first. She did not mean to; her hand simply moved, as it had moved at eight years old towards the last biscuit, or the front seat, or their father's attention. Tobias watched it go. Neither of them said anything. The clock on the wall, which had been ticking all along, became the loudest thing in the room.",
};

export const lesson31: Lesson = {
  id: "el11-u3-lesson-3-1",
  code: "3-1",
  title: "Unseen Poem and Unseen Prose: Full Responses",
  goal: "I CAN write a complete, structured analytical response to an unseen poem and an unseen prose extract.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2"],
  vocabulary: [
    { term: "Enjambment", definition: "The continuation of a sentence or phrase over a line break without punctuation." },
    { term: "Caesura", definition: "A pause within a line of poetry, usually created by punctuation." },
    { term: "Simile", definition: "A comparison using 'like' or 'as', for example 'the nurse still wearing her day like a coat'." },
    { term: "Volta", definition: "A turn in thought or tone within a poem." },
    { term: "Subtext", definition: "The unspoken meaning beneath what characters say or do." },
    { term: "Free verse", definition: "Poetry without a regular rhyme scheme or metre." },
    { term: "Symbolism", definition: "The use of an object, image or action to represent a larger idea." },
  ],
  concepts: [
    {
      id: "el11-u3-unseen-poem",
      title: "Unseen poem: a full response",
      skill: "Read an unfamiliar poem closely and write an organised analysis of meaning, language, form and structure.",
      lesson: {
        sections: [
          {
            heading: "A reading routine",
            body: "Read the title first, then the poem twice. On the first read, ask who is speaking, to whom and about what. On the second read, annotate: striking images, shifts in tone, sound patterns, line breaks and punctuation. Decide in one sentence what the poem is about and what the speaker feels. This 'big idea' will organise your answer.",
          },
          {
            heading: "Organising the response",
            body: "A strong response opens with an overview, then moves through the poem in **three or four paragraphs**, each tracing a stage of the poem: what is presented, how language and form shape it, and what it suggests. Mention form and structure as part of this movement: 'The enjambment across lines 7-8 mimics a thought left unfinished'. Do not give a separate list of features at the end.",
          },
          {
            heading: "Exploring ambiguity",
            body: "Poems reward more than one reading. Use tentative language ('perhaps', 'could suggest', 'alternatively') and offer a second interpretation when a word is ambiguous. In 'The Last Tram', 'borrowed hour' may suggest the speaker is stealing time, or that her peace is temporary and must be returned.",
          },
        ],
        keyFormulas: [
          { name: "Big idea", statement: "One sentence stating the poem's subject and the speaker's feelings, used to organise the essay." },
          { name: "Enjambment", statement: "Run-on lines that can imitate flow, hesitation or a thought escaping control." },
          { name: "Volta", statement: "A turn in the poem, often marked by a change of tense, tone or pronoun." },
        ],
        workedExample: {
          problem: "How does the poet present the speaker's feelings about going home in 'The Last Tram'? Write the opening paragraph of your response.",
          solution: "Model: 'In \"The Last Tram\" the poet presents going home not as a comfort but as a threshold the speaker is reluctant to cross. The opening stanza establishes a gentle, melancholic world of strangers in the lamp-lit tram, where the simile \"windows yellow as old piano keys\" suggests a faded warmth and a hint of music now silenced. By stanza three, however, the volta \"I used to think that going home was simple\" reveals that the tram's moving light is a refuge from something waiting at the end of the line.' The paragraph states a clear overview, quotes briefly, comments on specific words and notes a structural turn.",
        },
      },
      questions: [
        {
          id: "el11-u3-unseen-poem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POEM,
          stem: "What does the simile 'windows yellow as old piano keys' (line 2) suggest about the tram?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That it is brand new and polished" },
              { id: "b", text: "That it is noisy like a piano" },
              { id: "c", text: "That it glows with a faded, nostalgic warmth" },
              { id: "d", text: "That the passengers are musicians" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "Compares two things with 'as' or 'like' to bring out shared qualities." }],
            steps: [{ reasoning: "'Old' piano keys are yellowed with age, so the glow is warm but faded.", evidence: "yellow as old piano keys", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(c)** Faded, nostalgic warmth.",
            commonErrors: ["Taking the comparison literally (d).", "Ignoring the word 'old' (c)."],
          },
        },
        {
          id: "el11-u3-unseen-poem-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: POEM,
          stem: "Explain how the poet uses the image of the sentence in lines 7-8 to create meaning. Use quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile and enjambment", statement: "An image of an unfinished sentence can mirror abandonment on the page." }],
            steps: [
              { reasoning: "The lit room is left 'unwatched', suggesting loneliness and neglect.", evidence: "someone has left a lit room, unwatched", marks: 1, markCode: "AO1" },
              { reasoning: "The simile compares it to an abandoned sentence, linking the human to language and suggesting something unfinished.", evidence: "like a sentence abandoned halfway through", marks: 1, markCode: "AO2" },
              { reasoning: "The line ends the stanza without completing its thought, so form reflects meaning.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: the speaker notices lives and stories left incomplete, which mirrors her own hesitation.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The simile 'like a sentence abandoned halfway through' presents the empty lit room as a thought no one has finished, suggesting loneliness and incompleteness that the speaker recognises in herself.",
            commonErrors: ["Identifying the simile without explaining its effect."],
          },
        },
        {
          id: "el11-u3-unseen-poem-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POEM,
          stem: "How does the poet use language and structure to present the speaker's reluctance to go home?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery and diction", statement: "Words like 'borrowed' and 'moving light' define the tram as a refuge." },
              { kind: "technique", name: "Volta", statement: "A turn in stanza three shifts from observation to confession." },
            ],
            steps: [
              { reasoning: "Stanza one builds the tram as a warm, liminal space, with personification of the 'mouth' of the depot and the golden simile.", evidence: "windows yellow as old piano keys", marks: 2, markCode: "AO2" },
              { reasoning: "Stanza two shifts to the cold city, 'taking off its face', in contrast to the warm tram, and the empty room mirrors loneliness.", evidence: "the city is taking off its face", marks: 2, markCode: "AO2" },
              { reasoning: "Stanza three's volta reveals the personal reluctance; 'small decision' and 'borrowed hour' show stalling.", evidence: "this moving light, this borrowed hour", marks: 2, markCode: "AO2" },
              { reasoning: "The final line's refusal to 'step down' ends on an image of fear of home, with the long final sentence delaying arrival as the speaker does.", evidence: "and not to step down into my own front door", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "The poem moves from the warm, protective tram, through a cold and indifferent city, to a confession in the final stanza that every stop is a decision to avoid home. The long, drawn-out last sentence mimics delay.",
            levels: levels(8, "analysis of language and structure"),
            commonErrors: ["Writing about each line in turn without an overview.", "Listing techniques with no effect.", "Ignoring the structure of the three stanzas."],
          },
        },
        {
          id: "el11-u3-unseen-poem-q4",
          difficulty: "challenge",
          totalMarks: 24,
          extract: POEM,
          stem: "Read 'The Last Tram' and answer all parts.",
          parts: [
            { label: "a", prompt: "In stanza one, identify two types of passenger on the tram.", marks: 2 },
            { label: "b", prompt: "Explain what is suggested by 'the nurse still wearing her day like a coat' (line 4).", marks: 4 },
            { label: "c", prompt: "Analyse how the poet presents the city in stanza two.", marks: 6 },
            { label: "d", prompt: "Write a full response (about 400 words): How does the poet present the speaker's feelings about home? Refer to language, form and structure.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select the two passenger types stated." },
              { kind: "technique", name: "Simile and personification", statement: "Everyday images carry emotional weight." },
              { kind: "skill", name: "Full poem response", statement: "Overview, stanza-by-stanza progression, integrated language and structure, tentative interpretation." },
            ],
            steps: [
              { part: "a", reasoning: "The sleepers.", evidence: "the sleepers", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The drunk (or the nurse).", evidence: "the drunk", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Suggests the nurse's work has not left her: she carries exhaustion and responsibility with her.", evidence: "still wearing her day", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The simile 'like a coat' presents her day as a protective but heavy garment.", evidence: "like a coat", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'still' suggests she cannot take it off; time has not released her.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The detail humanises the passengers and links to the speaker's own weariness.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Personification of the city 'taking off its face' suggests a hidden, less public self at night.", evidence: "the city is taking off its face", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The verbs 'fall' and 'gutters' give a sense of decline and fading light.", evidence: "the shutters fall; a neon sign gutters", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The semicolon and the lit empty room set a cold, indifferent city against the tram's warmth.", evidence: "unwatched", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Clear overview linking reluctance and refuge.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of imagery and diction across stanzas.", evidence: "borrowed hour", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Integrated comment on form and structure: free verse, enjambment, volta, last line.", evidence: "I used to think that going home was simple", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Tentative, alternative interpretation of the final image.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "(a) The sleepers and the drunk (or the nurse). (b) Her work stays with her as a worn but protective layer. (c) The city is presented as a stage being dismantled for the night, with fading, indifferent images. (d) The speaker finds in the tram a borrowed refuge from a home she fears, shown by the volta and long final sentence.",
            levels: [...levels(6, "analysis of the city", "c"), ...levels(12, "full poem response", "d")],
            commonErrors: ["In (d) retelling the poem.", "Not mentioning form.", "No alternative reading."],
          },
        },
      ],
    },
    {
      id: "el11-u3-unseen-prose",
      title: "Unseen prose: a full response",
      skill: "Analyse how a prose writer builds character, tension and theme through language and structure.",
      lesson: {
        sections: [
          {
            heading: "Look at the shape",
            body: "Prose extracts are structured for effect. Ask: Where does the extract begin and end? Where does focus shift (from room to object to character)? Where does dialogue replace description? A scene often builds from setting, to tension, to a quiet, unresolved final image, as in 'The Inheritance', where the loud clock closes the scene.",
          },
          {
            heading: "Dialogue and subtext",
            body: "What characters do not say matters as much as what they say. In 'The Inheritance' the repeated 'There is only one key' makes a plain statement ring with rivalry. Look at who speaks, who stays silent, and what the narration notices instead. Small physical details, such as the clicking pen, often reveal emotion.",
          },
          {
            heading: "Writing the response",
            body: "Use the same model as for poetry: overview, three or four chronological paragraphs, integrated language and structure, tentative interpretations. Zoom in on single words ('metronomic', 'ordinary') and zoom out to the whole extract's structure ('ends on silence').",
          },
        ],
        keyFormulas: [
          { name: "Zoom in, zoom out", statement: "Combine analysis of a single word with comment on its position in the whole extract." },
          { name: "Subtext", statement: "The unspoken tension beneath dialogue, revealed through repetition, silence and gesture." },
          { name: "Symbolic object", statement: "An ordinary item charged with meaning, such as a single key." },
        ],
        workedExample: {
          problem: "How does the writer use the key to build tension between Mara and Tobias?",
          solution: "The key is introduced as 'brass and ordinary, like something dropped by a stranger', a simile which undercuts its significance and makes the contrast with the siblings' reaction sharper. Because there is only one, it becomes a symbol of their rivalry for their father's love: Tobias's repeated question 'There is only one key?' reveals his anxiety, and the solicitor's glance at the window suggests that even he finds the situation awkward. Mara's hand moves 'first' and unplanned, linking the key to a lifetime pattern of competing for attention. The sentence structure shortens as tension rises, and the final image of the clock, 'the loudest thing in the room', shows a silence heavy with unspoken resentment.",
        },
      },
      questions: [
        {
          id: "el11-u3-unseen-prose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PROSE,
          stem: "What does the description of Tobias's pen as 'a small, metronomic click' suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That the pen is broken" },
              { id: "b", text: "That Tobias enjoys music" },
              { id: "c", text: "That Tobias is taking careful notes" },
              { id: "d", text: "A nervous, repetitive habit that irritates Mara" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Adjective choice", statement: "'Metronomic' suggests mechanical, unrelenting repetition." }],
            steps: [{ reasoning: "A metronome ticks steadily, so the click is regular and grating; Mara 'wanted, quite badly, to stop' it.", evidence: "a small, metronomic click that she wanted, quite badly, to stop", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(d)** A nervous, repetitive habit that irritates Mara.",
            commonErrors: ["Taking 'metronomic' literally as music (c)."],
          },
        },
        {
          id: "el11-u3-unseen-prose-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: PROSE,
          stem: "Explain what the exchange 'There is only one key?' and 'There is only one key' suggests about the situation. Use quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repetition and subtext", statement: "Repeated lines show tension that the characters will not voice." }],
            steps: [
              { reasoning: "Tobias's question reveals surprise and anxiety: he had expected equal treatment.", evidence: "There is only one key?", marks: 1, markCode: "AO1" },
              { reasoning: "The solicitor repeats it flatly, confirming it with embarrassed formality.", evidence: "the solicitor agreed", marks: 1, markCode: "AO2" },
              { reasoning: "His glance at the window suggests discomfort and avoidance.", evidence: "looked, with sudden interest, at the window", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: the repetition creates silence, leaving rivalry unspoken but obvious.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Tobias's anxious question and the solicitor's flat repetition show that the single key forces a rivalry between the siblings that nobody names. The solicitor's glance at the window shows his embarrassment.",
            commonErrors: ["Paraphrasing without commenting on repetition.", "Missing the solicitor's reaction."],
          },
        },
        {
          id: "el11-u3-unseen-prose-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PROSE,
          stem: "How does the writer present the relationship between Mara and Tobias? You should refer to language and structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Subtext and physical detail", statement: "Gesture and silence reveal emotion." },
              { kind: "technique", name: "Structure", statement: "The scene tightens from description to dialogue to silence." },
            ],
            steps: [
              { reasoning: "Mara's upright posture and bag on her knees suggest defensiveness, as if expecting to lose something.", evidence: "as though the chair might be taken from her", marks: 2, markCode: "AO2" },
              { reasoning: "The pen click shows Tobias's tension and Mara's irritation.", evidence: "metronomic", marks: 2, markCode: "AO2" },
              { reasoning: "The final paragraph's flashback to childhood reveals a long pattern of rivalry for 'their father's attention'.", evidence: "their father's attention", marks: 2, markCode: "AO1" },
              { reasoning: "The ending on silence and the loud clock shows what cannot be spoken, with the structure moving from description to dialogue to silence.", evidence: "became the loudest thing in the room", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "The writer presents a long-standing sibling rivalry through physical detail, subtext and a structure that ends in loaded silence. The childhood echo shows the pattern has deep roots.",
            levels: levels(8, "analysis of relationship and methods"),
            commonErrors: ["Retelling the plot.", "Ignoring the final paragraph.", "No quotations."],
          },
        },
        {
          id: "el11-u3-unseen-prose-q4",
          difficulty: "challenge",
          totalMarks: 24,
          extract: PROSE,
          stem: "Read 'The Inheritance' and answer all parts.",
          parts: [
            { label: "a", prompt: "In the first paragraph, identify two details about the solicitor's office.", marks: 2 },
            { label: "b", prompt: "Explain what the simile 'like something dropped by a stranger' suggests about the key.", marks: 4 },
            { label: "c", prompt: "Analyse how the writer creates tension in the final paragraph.", marks: 6 },
            { label: "d", prompt: "Write a full response (about 400 words): How does the writer use symbolism and structure to explore family conflict?", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Pick two accurate details." },
              { kind: "technique", name: "Symbolism", statement: "The single key represents the father's affection and what cannot be shared." },
              { kind: "skill", name: "Full prose response", statement: "Overview, progression, zoom in and out, tentative interpretation." },
            ],
            steps: [
              { part: "a", reasoning: "It smelled of lilies.", evidence: "smelled of lilies", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It smelled of photocopier toner.", evidence: "photocopier toner", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The key is plain and impersonal despite its importance.", evidence: "brass and ordinary", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'dropped by a stranger' suggests the father is distant and the gesture is cold or careless.", evidence: "dropped by a stranger", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It underplays the key to heighten later tension.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The simile hints that the siblings feel they did not know their father.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Mara's involuntary movement shows a lifetime's competition.", evidence: "She did not mean to", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The list of childhood prizes ('the last biscuit, or the front seat') builds a pattern.", evidence: "the last biscuit, or the front seat", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Silence and the loud clock close the scene on unresolved tension.", evidence: "the loudest thing in the room", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Overview identifying sibling rivalry and the father's legacy.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of the key as symbol and of the solicitor's role.", evidence: "There is only one key", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Structure: movement from setting to dialogue to memory to silence.", evidence: "Neither of them said anything", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Alternative interpretations of the ending.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "(a) Lilies; photocopier toner. (b) The key is plain, impersonal and perhaps a sign of a distant father. (c) Involuntary movement, a childhood pattern and the loud clock heighten tension. (d) The key symbolises the father's attention and the structure builds from description to silence.",
            levels: [...levels(6, "analysis of tension", "c"), ...levels(12, "full prose response", "d")],
            commonErrors: ["Treating the key as only a key.", "Narrating the scene.", "No overview."],
          },
        },
      ],
    },
  ],
};
