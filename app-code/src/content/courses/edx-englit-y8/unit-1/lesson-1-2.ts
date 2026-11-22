import type { Lesson, MarkLevel } from "../../../types.ts";

const DESC = [
  "Perceptive, assured understanding with well-chosen references and analysis of the writer's methods.",
  "Thorough understanding with well-chosen references and developed comment on methods.",
  "Clear, relevant understanding with relevant references and clear comment on methods.",
  "Some understanding with some relevant references and some comment on methods.",
  "Simple, limited understanding with few references and little comment on methods.",
];

/** Level bands for a 6-mark response, highest first. */
function sixMarkLevels(part?: string): MarkLevel[] {
  return [
    { level: "Level 3", marks: "5-6", descriptor: DESC[1] ?? "", part },
    { level: "Level 2", marks: "3-4", descriptor: DESC[3] ?? "", part },
    { level: "Level 1", marks: "1-2", descriptor: DESC[4] ?? "", part },
  ];
}

const CHARGE = {
  title: "The Charge of the Light Brigade (opening)",
  author: "Alfred, Lord Tennyson",
  source: "1854",
  lineNumbers: true,
  text: "Half a league, half a league,\nHalf a league onward,\nAll in the valley of Death\nRode the six hundred.\n\"Forward, the Light Brigade!\n\"Charge for the guns!\" he said:\nInto the valley of Death\nRode the six hundred.",
};

const STORM = {
  title: "Storm Night",
  author: "Written for Akademik Space",
  lineNumbers: true,
  text: "Slates slip and slither from the slanting roof,\nWind whips the weeping willow to its knees.\nThe shutters shudder, shake, and strike the wall,\nAnd somewhere in the dark a door-latch clicks.\n\nI listen. Nothing. Then the whole house groans,\nA long, low, rolling thunder through the beams,\nAnd I am small, and still, and very cold.",
};

const SONNET = {
  title: "Sonnet 18",
  author: "William Shakespeare",
  source: "1609",
  lineNumbers: true,
  text: "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date;\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm'd;\nAnd every fair from fair sometime declines,\nBy chance or nature's changing course untrimm'd;\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow'st;\nNor shall Death brag thou wander'st in his shade,\nWhen in eternal lines to time thou grow'st:\nSo long as men can breathe or eyes can see,\nSo long lives this, and this gives life to thee.",
};

const BALLAD = {
  title: "The Ferryman's Daughter",
  author: "Written for Akademik Space",
  lineNumbers: true,
  text: "The river ran as black as coal\nBeneath the winter moon,\nWhen Ellen took her father's oar\nAnd rowed out, all alone.\n\nShe heard a bell across the foam,\nShe heard a drowning cry,\nAnd Ellen pulled with bleeding hands\nTill dawn lit up the sky.\n\nThey found her on the farther shore,\nA stranger in her arms,\nAnd still the village tells the tale\nOf courage in the storm.",
};

export const lesson12: Lesson = {
  id: "et8-u1-lesson-1-2",
  code: "1-2",
  title: "Sound and Form in Poetry",
  goal: "I CAN explain how rhyme, rhythm and alliteration create effects, and recognise how sonnets, ballads and free verse are shaped.",
  standards: ["KS3 Reading", "4ET1 AO2"],
  vocabulary: [
    { term: "Alliteration", definition: "Repetition of the same consonant sound at the start of nearby words." },
    { term: "Rhyme scheme", definition: "The pattern of rhyming line endings, labelled with letters such as ABAB." },
    { term: "Rhythm", definition: "The pattern of stressed and unstressed syllables, which gives a poem its beat." },
    { term: "Sonnet", definition: "A 14-line poem, usually in iambic pentameter with a set rhyme scheme and a turning point (volta)." },
    { term: "Ballad", definition: "A narrative poem in short stanzas, often with a regular rhythm and ABCB or ABAB rhymes." },
    { term: "Free verse", definition: "Poetry with no regular rhyme scheme or metre, shaped by the poet's choices." },
    { term: "Volta", definition: "The turn or change of argument or feeling in a sonnet." },
  ],
  concepts: [
    {
      id: "et8-u1-sound",
      title: "Sound: rhyme, rhythm and alliteration",
      skill: "Identify sound devices and explain how they support meaning and mood.",
      lesson: {
        sections: [
          {
            heading: "Hearing the poem",
            body: "Read poems aloud. **Alliteration** repeats consonant sounds: soft sounds (s, f, l) can feel gentle or secretive; hard sounds (b, k, t) can feel harsh or violent. **Rhyme** links lines and can make a poem feel neat, musical or even threatening if it is too regular. **Rhythm** is the beat: a galloping rhythm suggests speed, a slow one suggests weight or sadness.",
          },
          {
            heading: "Linking sound to meaning",
            body: "Never say 'the alliteration makes it sound nice'. Instead say which sound is repeated, what it resembles, and what it suggests. In 'Storm Night', the repeated 's' in 'Slates slip and slither' imitates the hiss of wind and sliding tiles, while it also hints at something sinister creeping in.",
          },
        ],
        keyFormulas: [
          { name: "Alliteration", statement: "Repeated starting consonant sounds in nearby words." },
          { name: "Sibilance", statement: "Repeated 's' sounds, often soft, hissing or sinister." },
          { name: "Repetition", statement: "Repeated words or lines that stress an idea or imitate a beat." },
        ],
        workedExample: {
          problem: "How does Tennyson use sound in the opening of 'The Charge of the Light Brigade'?",
          solution: "Tennyson repeats 'Half a league' three times, which creates a drumming rhythm like galloping hooves and suggests the relentless advance of the cavalry. The repetition of 'Rode the six hundred' at the end of both halves of the extract emphasises the number of men and gives the poem the feel of a chant, honouring them. The strong rhythm makes the charge feel unstoppable, even though the 'valley of Death' warns that it is doomed.",
        },
      },
      questions: [
        {
          id: "et8-u1-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORM,
          stem: "'Slates slip and slither from the slanting roof' (line 1). Which sound is repeated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The 'sl' sound at the start of words" },
              { id: "b", text: "The 'l' sound" },
              { id: "c", text: "The 'r' sound" },
              { id: "d", text: "The 'oo' sound" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Alliteration", statement: "Repeated sounds at the start of words, here the 'sl' blend." }],
            steps: [{ reasoning: "'Slates', 'slip', 'slither' and 'slanting' all begin with the same sibilant blend.", evidence: "Slates slip and slither", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** The 'sl' sound at the start of words.",
            commonErrors: ["Choosing 'l' alone: it appears, but the repeated pattern begins with 's' plus 'l'."],
          },
        },
        {
          id: "et8-u1-sound-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STORM,
          stem: "Explain how the writer uses sound in line 3 ('The shutters shudder, shake, and strike the wall') to create atmosphere.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Alliteration", statement: "'sh' and 'sh' ... followed by hard 'k' and 'str' sounds." },
              { kind: "skill", name: "Effect", statement: "Name the sound, quote it, then explain the effect on the reader." },
            ],
            steps: [
              { reasoning: "The repeated 'sh' sound imitates the rattling of shutters in the wind.", evidence: "shutters shudder", marks: 1, markCode: "AO2" },
              { reasoning: "The verbs 'shudder, shake, strike' build in violence, creating a mounting tension.", evidence: "shudder, shake, and strike", marks: 1, markCode: "AO2" },
              { reasoning: "The harsher final 'strike' hits like a blow, so the storm feels threatening.", evidence: "strike the wall", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The alliterative 'sh' imitates the rattle of the shutters, and the verbs build from 'shudder' to a harsh 'strike', so the storm sounds more and more violent.",
            commonErrors: ["Saying it 'sounds good' without linking to meaning.", "Identifying alliteration but not quoting."],
          },
        },
        {
          id: "et8-u1-sound-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: CHARGE,
          stem: "How does Tennyson use rhythm and repetition to present the soldiers in these lines?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhythm", statement: "A driving, galloping beat suggests movement and momentum." },
              { kind: "technique", name: "Repetition", statement: "Repeated phrases stress the scale of the event and act like a chant." },
            ],
            steps: [
              { reasoning: "Repeating 'Half a league' creates a drumming rhythm like horses' hooves, showing the speed and relentless advance.", evidence: "Half a league, half a league", marks: 2, markCode: "AO2" },
              { reasoning: "Repeating 'Rode the six hundred' fixes attention on the men, so they seem heroic and honoured, almost like a memorial chant.", evidence: "Rode the six hundred", marks: 2, markCode: "AO2" },
              { reasoning: "The ominous 'valley of Death' contrasts with the confident rhythm, hinting at a fatal advance and the soldiers' obedience.", evidence: "All in the valley of Death", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "The galloping rhythm and repeated 'Half a league' show the cavalry's relentless advance, while the refrain 'Rode the six hundred' honours the men as heroes. Set against 'the valley of Death', the strong rhythm suggests they ride bravely towards doom.",
            levels: sixMarkLevels(),
            commonErrors: ["Mentioning rhythm without linking to the soldiers.", "Retelling that soldiers rode into a valley."],
          },
        },
        {
          id: "et8-u1-sound-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: STORM,
          stem: "Read 'Storm Night' and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two verbs from lines 1-3 which show the storm is violent.", marks: 2 },
            { label: "b", prompt: "Explain what 'the whole house groans' suggests (line 5).", marks: 4 },
            { label: "c", prompt: "How does the writer use sound and sentence length to show the speaker's changing feelings? Refer to the whole poem.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select exact words." },
              { kind: "technique", name: "Personification", statement: "The house groans like a living thing in pain." },
              { kind: "technique", name: "Sentence length", statement: "Short sentences can show tension or fear; long ones can build pressure." },
            ],
            steps: [
              { part: "a", reasoning: "Any one of: whips, shudder, shake, strike.", evidence: "whips", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any other of the above.", evidence: "strike", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The house is personified as a living creature in pain, so the storm seems to hurt it.", evidence: "the whole house groans", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'Whole' and 'groans' suggest the structure is under great strain, which makes the speaker feel unsafe.", evidence: "A long, low, rolling thunder", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The first stanza's alliteration and long sentence imitate the noise and pressure of the storm.", evidence: "Slates slip and slither", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Short, stopped sentences ('I listen. Nothing.') create a frightened hush and tension.", evidence: "I listen. Nothing.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The closing line's three plain adjectives and slow rhythm show the speaker feeling fearful and powerless.", evidence: "small, and still, and very cold", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) Any two of whips, shudder, shake, strike. (b) The house is personified as groaning, so it seems alive and in pain, and the speaker feels unsafe. (c) The hissing alliteration conveys the storm's noise, the short sentences ('I listen. Nothing.') show tense listening, and the slow final line shows the speaker's fear and smallness.",
            levels: sixMarkLevels("c"),
            commonErrors: ["Describing the storm only; not the speaker's change of feeling.", "Ignoring sentence length."],
          },
        },
      ],
    },
    {
      id: "et8-u1-form",
      title: "Form: sonnet, ballad and free verse",
      skill: "Recognise the features of a sonnet, a ballad and free verse, and explain why a poet chooses a form.",
      lesson: {
        sections: [
          {
            heading: "Three common forms",
            body: "A **sonnet** has 14 lines. A Shakespearean sonnet rhymes ABAB CDCD EFEF GG and often has a **volta** (turn) before the final couplet. A **ballad** tells a story in short stanzas, often four lines with a regular beat and rhyme; it comes from oral tradition, so it feels like a told tale. **Free verse** has no regular rhyme or metre, so the poet shapes the lines to mimic natural speech or thought.",
          },
          {
            heading: "Why form matters",
            body: "Form is a choice. A sonnet's tight structure suits love poems because the speaker tries to contain a huge emotion in a small space. A ballad suits a dramatic story. Free verse suits ideas that feel spontaneous or unsettled. To earn marks, comment on **how the form supports the meaning**, not just name it.",
          },
        ],
        keyFormulas: [
          { name: "Shakespearean sonnet", statement: "14 lines, ABAB CDCD EFEF GG, iambic pentameter." },
          { name: "Ballad", statement: "Narrative poem in short stanzas, regular beat, often ABCB." },
          { name: "Free verse", statement: "No regular rhyme or metre." },
          { name: "Couplet", statement: "Two consecutive rhyming lines." },
        ],
        workedExample: {
          problem: "How does the form of Sonnet 18 help Shakespeare present the speaker's love?",
          solution: "The 14-line sonnet gives the speaker a compact space to argue that the beloved is better than a summer's day. The first eight lines list summer's faults ('summer's lease hath all too short a date'), and the volta at line 9, 'But thy eternal summer shall not fade', turns to the beloved's lasting beauty. The closing couplet, 'So long lives this, and this gives life to thee', ends with rhyming certainty, suggesting the poem itself will make the beloved immortal.",
        },
      },
      questions: [
        {
          id: "et8-u1-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SONNET,
          stem: "How many lines does Sonnet 18 have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16" },
              { id: "b", text: "10" },
              { id: "c", text: "12" },
              { id: "d", text: "14" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Sonnet", statement: "A sonnet has 14 lines." }],
            steps: [{ reasoning: "The poem is a sonnet, so it has 14 lines, as the line numbers show.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** 14.",
            commonErrors: ["Counting stanzas or rhyming pairs instead of lines."],
          },
        },
        {
          id: "et8-u1-form-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SONNET,
          stem: "Explain how the final couplet (lines 13-14) differs from the rest of the sonnet and what it achieves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Couplet", statement: "A rhyming pair of lines that closes a Shakespearean sonnet." },
              { kind: "convention", name: "Volta", statement: "A turn in thought, here at line 9." },
            ],
            steps: [
              { reasoning: "The couplet rhymes (see / thee), unlike the alternating rhymes before it, giving a sense of closure and certainty.", evidence: "eyes can see / gives life to thee", marks: 1, markCode: "AO2" },
              { reasoning: "It states the speaker's claim that the poem will live as long as humans do.", evidence: "So long lives this", marks: 1, markCode: "AO1" },
              { reasoning: "It is a confident resolution after the earlier list of summer's flaws, making the love seem eternal.", evidence: "this gives life to thee", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The final couplet changes the rhyme pattern, closing the poem with certainty. It claims that, as long as people read, the poem will keep the beloved alive, resolving the sonnet's argument.",
            commonErrors: ["Only saying that it rhymes.", "No quotation."],
          },
        },
        {
          id: "et8-u1-form-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BALLAD,
          stem: "How does the writer use the features of a ballad to tell Ellen's story?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ballad", statement: "Short stanzas, regular beat, simple narrative." },
              { kind: "technique", name: "Imagery", statement: "Colour and nature create atmosphere." },
            ],
            steps: [
              { reasoning: "Short four-line stanzas with an ABCB rhyme create a steady, story-telling rhythm that moves the action forward.", evidence: "Beneath the winter moon", marks: 2, markCode: "AO2" },
              { reasoning: "The simple, direct narrative of a brave deed makes Ellen a folk hero, with vivid images such as the 'black as coal' river adding danger.", evidence: "The river ran as black as coal", marks: 2, markCode: "AO2" },
              { reasoning: "The last stanza moves to the present tense of retelling, as in oral tradition, showing the tale lives on.", evidence: "still the village tells the tale", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "The regular quatrains and ABCB rhyme give a steady storytelling pulse, the simile 'black as coal' makes the river menacing, and the closing reference to the village telling the tale shows how ballads preserve heroic deeds.",
            levels: sixMarkLevels(),
            commonErrors: ["Naming 'ballad' with no link to the story.", "Retelling the story."],
          },
        },
        {
          id: "et8-u1-form-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: SONNET,
          stem: "Read Sonnet 18 and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two faults of summer that the speaker mentions in lines 3-6.", marks: 2 },
            { label: "b", prompt: "Explain what 'summer's lease hath all too short a date' suggests (line 4).", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use the structure of the sonnet to present the speaker's view of the beloved? Refer to the whole poem.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Use exact words." },
              { kind: "technique", name: "Metaphor", statement: "Summer is a rented property with a limited lease." },
              { kind: "convention", name: "Volta and couplet", statement: "The argument turns at line 9 and concludes in the couplet." },
            ],
            steps: [
              { part: "a", reasoning: "Any one of: rough winds shake buds; summer is too short; it is sometimes too hot.", evidence: "Rough winds do shake the darling buds of May", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any other fault.", evidence: "Sometime too hot the eye of heaven shines", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Lease' is a metaphor that treats summer like a rented property that must be given back.", evidence: "summer's lease", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'All too short a date' implies the season ends quickly, so it cannot match the beloved's lasting beauty.", evidence: "all too short a date", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The first quatrain poses a question and starts the comparison, praising the beloved as 'more lovely and more temperate'.", evidence: "more lovely and more temperate", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The volta at 'But' turns from summer's decay to the beloved's eternal beauty.", evidence: "But thy eternal summer shall not fade", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final couplet resolves the argument with confidence that the poem will preserve the beloved forever.", evidence: "So long lives this, and this gives life to thee", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) Any two of: rough winds, short lease, too hot, dimmed gold. (b) 'Lease' is a metaphor suggesting summer is temporary, and 'short a date' stresses how soon it ends. (c) The sonnet builds an argument: the question, the list of summer's faults, the volta at 'But' and the couplet, which presents the beloved as immortal through the poem.",
            levels: sixMarkLevels("c"),
            commonErrors: ["Describing summer rather than the speaker's view of the beloved.", "Ignoring the volta."],
          },
        },
      ],
    },
  ],
};
