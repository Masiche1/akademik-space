import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string): MarkLevel[] => [
  { level: "Level 3", marks: "5-6", descriptor: `Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.` },
  { level: "Level 2", marks: "3-4", descriptor: `Clear, relevant ${focus}, with appropriate references and some analysis.` },
  { level: "Level 1", marks: "1-2", descriptor: `Simple, limited ${focus}, with few references and mostly description.` },
];

const HEART: TextExtract = {
  title: "The Tell-Tale Heart (opening)",
  author: "Edgar Allan Poe",
  source: "The Tell-Tale Heart (1843)",
  text: "True!\u2014nervous\u2014very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses\u2014not destroyed\u2014not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how healthily\u2014how calmly I can tell you the whole story.",
};

const DOUBLE: TextExtract = {
  title: "The Lodger in the Mirror",
  author: "Written for Akademik Space",
  lineNumbers: true,
  text: "I had always been a careful man.\nI locked my door, I paid my debts,\nand I never raised my voice in company.\nYet that night, as I passed the long mirror,\nI saw a face that was mine and was not mine:\nthe same eyes, but hungry; the same mouth,\nbut curled in a smile I had never made.\nIt watched me with a patient, terrible joy.\nI raised my hand and it raised its own,\nbut a moment late, as if it chose to obey.\nThen I understood that the man in the glass\nhad been waiting for me to look away.",
};

export const lesson12: Lesson = {
  id: "et9-u1-lesson-1-2",
  code: "1-2",
  title: "Narrators, the Monstrous and the Double",
  goal: "I CAN explain how narrators shape what we believe and how gothic writers use monsters and doubles to explore human nature.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "First-person narrator", definition: "A narrator who tells the story as 'I', limiting what we know to what that character sees and chooses to say." },
    { term: "Unreliable narrator", definition: "A narrator whose account cannot be fully trusted because of madness, bias, guilt or deliberate deception." },
    { term: "Frame narrative", definition: "A story told inside another story, as in Frankenstein, where Walton's letters contain Victor's tale." },
    { term: "Doppelganger", definition: "A double of a person, often a darker version of the self." },
    { term: "Duality", definition: "The idea that a person or thing has two opposite sides, such as good and evil." },
    { term: "Monstrous", definition: "Frightening because it is unnatural or breaks the boundary of what is human." },
    { term: "Repetition", definition: "Using the same word, phrase or structure more than once for emphasis." },
  ],
  concepts: [
    {
      id: "et9-u1-unreliable-narration",
      title: "Narrators and unreliable narration",
      skill: "Analyse how a narrator's voice reveals character and invites the reader to doubt what they say.",
      lesson: {
        sections: [
          {
            heading: "Whose story is it?",
            body: "A first-person narrator gives us direct access to thoughts and feelings, but only one perspective. Gothic writers love **unreliable narrators**, because a mind in torment makes the story more disturbing. Clues that a narrator cannot be trusted include **over-insistence** ('I am not mad!'), **contradiction**, **obsession**, and **gaps between what the narrator claims and what the reader sees**.",
          },
          {
            heading: "Analysing voice",
            body: "Look at sentence rhythm and punctuation. Poe's narrator speaks in broken, breathless fragments with dashes and exclamations, so we hear a mind unable to stay calm. Look for **rhetorical questions** that try to persuade the listener, and **direct address** ('you') that pulls the reader in as a jury. Then ask: what is the effect of hearing the story from this person rather than a neutral voice?",
          },
        ],
        keyFormulas: [
          { name: "Unreliable narrator", statement: "A narrator the reader has reason to doubt; the truth lies in the gap between their claims and their words." },
          { name: "Direct address", statement: "Speaking to 'you' to involve or manipulate the reader." },
          { name: "Fragmented syntax", statement: "Broken sentences and dashes that suggest agitation or instability." },
        ],
        workedExample: {
          problem: "How does Poe present the narrator's state of mind in the opening of 'The Tell-Tale Heart'?",
          solution: "Poe presents a mind that protests too much. The narrator opens with 'True!' as though answering an accusation, and the dashes in 'nervous\u2014very, very dreadfully nervous' create a halting, agitated rhythm that contradicts his claim to calm. The repeated rhetorical question 'How, then, am I mad?' shows he is desperate to persuade us, which makes us suspect the opposite. Finally the boast that 'I heard many things in hell' reveals a disturbing, unstable imagination, while the command 'Hearken!' makes the reader a listener he must control.",
        },
      },
      questions: [
        {
          id: "et9-u1-unreliable-narration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HEART,
          stem: "What does the narrator's repeated question 'why will you say that I am mad?' suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He is calmly describing a medical condition" },
              { id: "b", text: "He has been told he is perfectly healthy" },
              { id: "c", text: "He is anxious to convince others that he is sane" },
              { id: "d", text: "He is proud of being mad" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhetorical question", statement: "A question asked for effect, not an answer, often to persuade or reveal emotion." }],
            steps: [{ reasoning: "The narrator insists he is sane, which suggests he is defensive and perhaps not sane at all.", evidence: "How, then, am I mad?", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** He is anxious to convince others he is sane. His defensiveness hints that he is not.",
            commonErrors: ["Choosing (b), taking his claims at face value as calm.", "Choosing (c), misreading 'mad' as a boast."],
          },
        },
        {
          id: "et9-u1-unreliable-narration-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: HEART,
          stem: "Explain how the punctuation in the first sentence helps to show the narrator's state of mind.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Punctuation for effect", statement: "Dashes, exclamations and fragments can reproduce a character's agitation." }],
            steps: [
              { reasoning: "The exclamation 'True!' is abrupt and defensive, as if he is answering an accusation.", evidence: "True!", marks: 1, markCode: "AO2" },
              { reasoning: "Dashes break the sentence into fragments, creating a halting, nervous rhythm.", evidence: "nervous\u2014very, very dreadfully nervous", marks: 1, markCode: "AO2" },
              { reasoning: "The agitation contradicts his claim to be calm, so the reader doubts him.", evidence: "how calmly I can tell you", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The exclamation and dashes make his speech jerky and breathless, showing agitation which contradicts his claim to be calm and suggests he is unstable.",
            commonErrors: ["Naming punctuation without effect.", "Saying he is simply 'nervous' with no reference to the punctuation."],
          },
        },
        {
          id: "et9-u1-unreliable-narration-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: HEART,
          stem: "How does Poe use the narrator's voice to make the reader doubt him? Write about the language and structure of the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unreliable narration", statement: "The narrator's claims clash with how he speaks." },
              { kind: "skill", name: "PETAL", statement: "Point, evidence, technique, analysis, link." },
            ],
            steps: [
              { reasoning: "Over-insistence on sanity makes him seem defensive.", evidence: "why will you say that I am mad?", marks: 1, markCode: "AO2" },
              { reasoning: "Fragmented syntax with dashes shows an agitated mind that contradicts 'calmly'.", evidence: "nervous\u2014very, very dreadfully nervous", marks: 1, markCode: "AO2" },
              { reasoning: "He twists symptoms into strengths: 'sharpened' senses make madness sound like a gift.", evidence: "The disease had sharpened my senses", marks: 1, markCode: "AO2" },
              { reasoning: "Hyperbole shows an unstable imagination.", evidence: "I heard many things in hell", marks: 1, markCode: "AO2" },
              { reasoning: "Direct address ('you', 'Hearken!') makes the reader a jury he must persuade.", evidence: "Hearken! and observe", marks: 1, markCode: "AO2" },
              { reasoning: "The circular structure, ending with a promise to tell the story, builds suspense for the confession.", evidence: "the whole story", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of narrative voice"),
            finalAnswer: "Poe makes the reader doubt the narrator by showing the gap between his claims and his speech. He protests his sanity in rhetorical questions, yet his dashes and repetition reveal agitation. He reframes 'disease' as 'sharpened' senses and boasts of hearing 'many things in hell', while the command 'Hearken!' shows his need to control his audience.",
            commonErrors: ["Describing him as 'mad' without evidence.", "Ignoring structure and punctuation."],
          },
        },
        {
          id: "et9-u1-unreliable-narration-q4",
          difficulty: "challenge",
          totalMarks: 15,
          extract: HEART,
          stem: "Read the opening of 'The Tell-Tale Heart' and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things the narrator claims about himself.", marks: 2 },
            { label: "b", prompt: "Explain what the phrase 'I heard many things in hell' suggests about the narrator.", marks: 3 },
            { label: "c", prompt: "How does Poe's use of a first-person narrator make this opening effective? Refer to the extract in your answer.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "First-person narration", statement: "Creates intimacy but limits perspective, allowing the narrator to deceive." },
              { kind: "technique", name: "Direct address", statement: "Addressing the reader as 'you' draws them into the narrator's argument." },
            ],
            steps: [
              { part: "a", reasoning: "He claims he is not mad.", evidence: "why will you say that I am mad?", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He claims his hearing is acute and his senses sharpened.", evidence: "the sense of hearing acute", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It suggests he imagines or hears supernatural, hellish things.", evidence: "I heard many things in hell", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "This shows a disturbed mind, in conflict with his claim to be sane.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The calm, matter-of-fact tone makes it more chilling.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Intimate first person puts the reader inside a disturbed mind.", evidence: "I had been and am", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Direct address makes the reader a jury.", evidence: "Hearken! and observe", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Fragmented syntax and exclamation show instability.", evidence: "True!\u2014nervous\u2014very, very", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Rhetorical questions show over-insistence and make the reader doubt him.", evidence: "How, then, am I mad?", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The promise of the 'whole story' creates suspense and irony: the narrator is confident while the reader suspects crime.", evidence: "the whole story", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 5", marks: "9-10", part: "c", descriptor: "Perceptive, discriminating analysis of the narrator's voice; precise, well-chosen references and terminology." },
              { level: "Level 4", marks: "7-8", part: "c", descriptor: "Thorough analysis; well-chosen references with developed analysis of effects." },
              { level: "Level 3", marks: "5-6", part: "c", descriptor: "Clear, relevant analysis; appropriate references with some analysis of effects." },
              { level: "Level 2", marks: "3-4", part: "c", descriptor: "Some understanding of the narrator; some relevant references." },
              { level: "Level 1", marks: "1-2", part: "c", descriptor: "Simple, limited comments; few references, mostly description." },
            ],
            finalAnswer: "(a) He claims he is not mad; his senses are sharpened and his hearing acute. (b) He imagines hellish sounds, revealing a disturbed mind at odds with his claim of sanity. (c) First-person narration lets Poe trap the reader inside an unstable voice: exclamations, dashes and repetition show agitation, rhetorical questions and 'Hearken!' show a need to persuade, and the promise of the 'whole story' builds suspense.",
            commonErrors: ["Retelling the plot of the whole story.", "Spotting features without effects.", "Assuming the narrator is simply honest."],
          },
        },
      ],
    },
    {
      id: "et9-u1-monstrous-double",
      title: "The monstrous and the double",
      skill: "Explain what monsters and doubles represent and how writers make them frightening.",
      lesson: {
        sections: [
          {
            heading: "Why gothic writers need monsters",
            body: "Monsters in gothic fiction usually stand for something: a fear of science, of hidden desires, or of what humans might become. The most unsettling monsters are **almost human**. A double (or doppelganger) shows that evil is not outside us but **inside**. In The Strange Case of Dr Jekyll and Mr Hyde, Jekyll writes that man 'is not truly one, but truly two', and Hyde is the darker half set free.",
          },
          {
            heading: "How writers create the uncanny",
            body: "The uncanny is something familiar made strange. Writers achieve it through **mirroring and delay** (a reflection that moves slightly late), **animal imagery**, **repetition**, and **contrast** between respectable surface and hidden desire. Always ask what the monster **reveals** about the character or society.",
          },
        ],
        keyFormulas: [
          { name: "Doppelganger", statement: "A double or darker twin that reveals hidden aspects of the self." },
          { name: "Uncanny", statement: "The familiar made strange; unsettling because it is almost, but not quite, normal." },
          { name: "Duality", statement: "The idea that a person has two opposing natures." },
        ],
        workedExample: {
          problem: "How does the writer make the reflection frightening in 'The Lodger in the Mirror'?",
          solution: "The writer makes the reflection frightening by making it almost, but not quite, identical. The narrator sees 'the same eyes, but hungry', and the repeated 'the same' followed by a sinister contrast creates an uncanny feeling that something familiar has been corrupted. The detail that the reflection raises its hand 'a moment late, as if it chose to obey' suggests it has free will, so the narrator is no longer in control of his own image. The final line, that it 'had been waiting for me to look away', implies a patient, predatory double, which makes the narrator, and the reader, feel watched.",
        },
      },
      questions: [
        {
          id: "et9-u1-monstrous-double-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DOUBLE,
          stem: "What does the phrase 'a face that was mine and was not mine' (line 5) suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The narrator does not recognise his own house" },
              { id: "b", text: "The reflection is both familiar and disturbingly different" },
              { id: "c", text: "The narrator has forgotten his name" },
              { id: "d", text: "The mirror is cracked" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Paradox", statement: "A statement that seems contradictory but reveals a deeper truth, here the divided self." }],
            steps: [{ reasoning: "The paradox shows the double is the narrator yet also something other.", evidence: "a face that was mine and was not mine", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The reflection is both familiar and disturbingly different.",
            commonErrors: ["Reading the line literally, as about a house or mirror, not the self."],
          },
        },
        {
          id: "et9-u1-monstrous-double-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DOUBLE,
          stem: "Explain what the writer suggests about the reflection in lines 8-10.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification of the reflection", statement: "Giving the reflection will and emotion makes it a separate being." }],
            steps: [
              { reasoning: "The reflection has its own emotions, a 'patient, terrible joy', so it seems alive.", evidence: "a patient, terrible joy", marks: 1, markCode: "AO2" },
              { reasoning: "It moves 'a moment late', suggesting it has its own will.", evidence: "but a moment late", marks: 1, markCode: "AO2" },
              { reasoning: "'As if it chose to obey' shows it is in control, which is threatening.", evidence: "as if it chose to obey", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The reflection seems to have its own feelings and will: it enjoys watching, moves late, and only appears to obey, which suggests it is in control and dangerous.",
            commonErrors: ["Only describing the mirror action.", "No quotation."],
          },
        },
        {
          id: "et9-u1-monstrous-double-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DOUBLE,
          stem: "How does the writer make the double seem frightening? Write about the language and structure of the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contrast", statement: "Opposites presented together highlight corruption." },
              { kind: "convention", name: "The double", statement: "Gothic doubles reveal a hidden, darker self." },
            ],
            steps: [
              { reasoning: "The opening shows a controlled, respectable man, so the double is a sharp contrast.", evidence: "I had always been a careful man.", marks: 1, markCode: "AO2" },
              { reasoning: "'The same eyes, but hungry' creates an uncanny corruption of the familiar.", evidence: "the same eyes, but hungry", marks: 1, markCode: "AO2" },
              { reasoning: "The smile 'he had never made' hints at repressed desires.", evidence: "a smile I had never made", marks: 1, markCode: "AO2" },
              { reasoning: "The delayed movement suggests independence.", evidence: "a moment late", marks: 1, markCode: "AO2" },
              { reasoning: "The final line twists perspective: the double was watching him.", evidence: "had been waiting for me to look away", marks: 1, markCode: "AO2" },
              { reasoning: "Structure moves from calm routine to shock, mirroring the narrator's loss of control.", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of the double"),
            finalAnswer: "The double is frightening because it is almost the narrator: 'the same eyes, but hungry'. The narrator's respectable list of habits contrasts with its 'curled' smile, the delayed movement shows independent will, and the last line reverses who is watching whom.",
            commonErrors: ["Not mentioning structure.", "Saying the mirror is 'scary' without explaining why."],
          },
        },
        {
          id: "et9-u1-monstrous-double-q4",
          difficulty: "challenge",
          totalMarks: 15,
          extract: DOUBLE,
          stem: "Read 'The Lodger in the Mirror' and answer the questions.",
          parts: [
            { label: "a", prompt: "Give two ways the narrator describes himself in lines 1-3.", marks: 2 },
            { label: "b", prompt: "Explain what the poem-like structure of line 9 ('I raised my hand and it raised its own') adds to the effect.", marks: 3 },
            { label: "c", prompt: "Explain how the writer uses the idea of the double to explore what lies hidden in human nature. Refer to the extract and to at least one gothic novel you have studied.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "The double", statement: "The gothic double externalises a hidden part of the self." },
              { kind: "context", name: "Victorian duality", statement: "Stevenson's Jekyll and Hyde reflected Victorian anxiety about respectable surfaces and hidden vice." },
            ],
            steps: [
              { part: "a", reasoning: "He is careful.", evidence: "a careful man", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He is law-abiding and controlled: he locks his door, pays debts, never raises his voice.", evidence: "I paid my debts", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The parallel structure imitates the mirroring action.", evidence: "I raised my hand and it raised its own", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It sets up normality that is then undercut by 'a moment late'.", evidence: "but a moment late", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The calm tone makes the disturbing twist more shocking.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The respectable man versus hungry double shows hidden desire beneath public restraint.", evidence: "the same eyes, but hungry", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The double holds a smile the narrator 'had never made', suggesting repressed wishes.", evidence: "a smile I had never made", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final reversal suggests the hidden self is patient and powerful.", evidence: "waiting for me to look away", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Link to Jekyll and Hyde: Jekyll says man is 'not truly one, but truly two', and Hyde frees his hidden side.", evidence: "not truly one, but truly two", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Context: Victorian society valued respectability, so the double exposes hypocrisy and fear.", marks: 2, markCode: "AO4" },
            ],
            levels: [
              { level: "Level 5", marks: "9-10", part: "c", descriptor: "Perceptive, discriminating exploration of the double; assured use of the extract and a wider text, with some context." },
              { level: "Level 4", marks: "7-8", part: "c", descriptor: "Thorough exploration; well-chosen references to extract and wider text." },
              { level: "Level 3", marks: "5-6", part: "c", descriptor: "Clear, relevant exploration; appropriate references with some analysis." },
              { level: "Level 2", marks: "3-4", part: "c", descriptor: "Some understanding; some relevant references." },
              { level: "Level 1", marks: "1-2", part: "c", descriptor: "Simple, limited comments; few references." },
            ],
            finalAnswer: "(a) He is careful; he locks his door and pays his debts. (b) The mirrored phrasing sets up normality that 'a moment late' disrupts. (c) The double reveals the hidden hunger and desire beneath respectability, as in Jekyll and Hyde where man is 'not truly one, but truly two'; Victorian readers feared such concealed vice.",
            commonErrors: ["Not referring to a wider text.", "Assertions about 'good and evil' with no evidence.", "Overlooking the shift in the final line."],
          },
        },
      ],
    },
  ],
};
