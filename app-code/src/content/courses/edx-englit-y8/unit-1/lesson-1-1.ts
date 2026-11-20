import type { Lesson, MarkLevel } from "../../../types.ts";

const DESCRIPTORS = [
  "Perceptive, discriminating and assured understanding; judicious, well-chosen references; sustained analysis of the writer's methods.",
  "Thorough understanding; well-chosen, integrated references; developed analysis of the writer's methods.",
  "Clear, relevant understanding; relevant references; clear explanation of the writer's methods.",
  "Some understanding; some relevant references; some comment on methods.",
  "Simple, limited understanding; few or no references; little comment on methods.",
];

/** Builds Edexcel-style level bands, highest level first. */
function bands(ranges: string[], part?: string): MarkLevel[] {
  const picks = ranges.length === 5 ? [0, 1, 2, 3, 4] : ranges.length === 4 ? [0, 2, 3, 4] : [1, 3, 4];
  return ranges.map((marks, i) => ({
    level: `Level ${ranges.length - i}`,
    marks,
    descriptor: DESCRIPTORS[picks[i] ?? 0] ?? "",
    ...(part ? { part } : {}),
  }));
}

const POISON_TREE = {
  title: "A Poison Tree",
  author: "William Blake",
  source: "Songs of Experience (1794)",
  lineNumbers: true,
  text: "I was angry with my friend;\nI told my wrath, my wrath did end.\nI was angry with my foe:\nI told it not, my wrath did grow.\n\nAnd I water'd it in fears,\nNight & morning with my tears:\nAnd I sunned it with smiles,\nAnd with soft deceitful wiles.\n\nAnd it grew both day and night.\nTill it bore an apple bright.\nAnd my foe beheld it shine,\nAnd he knew that it was mine.\n\nAnd into my garden stole,\nWhen the night had veil'd the pole;\nIn the morning glad I see;\nMy foe outstretch'd beneath the tree.",
};

const EAGLE = {
  title: "The Eagle",
  author: "Alfred, Lord Tennyson",
  source: "1851",
  lineNumbers: true,
  text: "He clasps the crag with crooked hands;\nClose to the sun in lonely lands,\nRing'd with the azure world, he stands.\n\nThe wrinkled sea beneath him crawls;\nHe watches from his mountain walls,\nAnd like a thunderbolt he falls.",
};

export const lesson11: Lesson = {
  id: "et8-u1-lesson-1-1",
  code: "1-1",
  title: "Voice and Imagery in Poetry",
  goal: "I CAN identify the speaker, subject and tone of a poem and explain how imagery creates meaning and effect.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Speaker", definition: "The voice that tells the poem. It is not always the poet, so we call it the speaker or persona." },
    { term: "Tone", definition: "The attitude or mood of the speaker, such as bitter, tender or menacing." },
    { term: "Imagery", definition: "Language that creates a picture or sensory impression in the reader's mind." },
    { term: "Simile", definition: "A comparison using 'like' or 'as', for example 'like a thunderbolt'." },
    { term: "Metaphor", definition: "A comparison that says one thing is another, without using 'like' or 'as'." },
    { term: "Personification", definition: "Giving human qualities or actions to something that is not human." },
    { term: "Connotation", definition: "The ideas and feelings a word suggests beyond its literal meaning." },
  ],
  concepts: [
    {
      id: "et8-u1-speaker-subject-tone",
      title: "Speaker, subject and tone",
      skill: "Identify who is speaking, what the poem is about, and how the speaker feels, supporting each point with a quotation.",
      lesson: {
        sections: [
          {
            heading: "Who is speaking, and about what?",
            body: "Every poem has a **speaker**: the voice we hear. Ask three questions. Who is speaking (a child, a lover, a soldier, someone angry)? Who or what are they speaking about or to? What situation are they in? The **subject** is what the poem is about on the surface; the **theme** is the bigger idea underneath it. In 'A Poison Tree' the subject is anger towards a friend and a foe; the theme is the danger of hiding hatred.",
          },
          {
            heading: "Reading tone",
            body: "**Tone** is how the speaker feels, shown through word choice, rhythm and punctuation. Tone often changes during a poem, so track the shifts. Name tone precisely: 'calm' is vague, but 'chillingly calm' or 'quietly triumphant' shows you have read closely. Always support a tone with a short quotation and then say which word carries the feeling.",
          },
        ],
        keyFormulas: [
          { name: "Speaker", statement: "The voice of the poem; not necessarily the poet." },
          { name: "Tone", statement: "The speaker's attitude, shown through word choice and sound." },
          { name: "Subject and theme", statement: "Subject is what happens; theme is the idea about life that the poem explores." },
        ],
        workedExample: {
          problem: "What is the speaker's tone in the final stanza of 'A Poison Tree'? Use a quotation.",
          solution: "The speaker's tone in the final stanza is chillingly satisfied. The phrase 'In the morning glad I see' uses the word 'glad' to show he is happy, but what he sees is 'My foe outstretch'd beneath the tree', a dead body. The calm, matter-of-fact delivery makes his pleasure at his enemy's death disturbing, and suggests his hidden anger has turned him cruel.",
        },
      },
      questions: [
        {
          id: "et8-u1-speaker-subject-tone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POISON_TREE,
          stem: "Which phrase best describes the speaker's tone in the final stanza (lines 13-16)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guilty and regretful" },
              { id: "b", text: "Quietly pleased by his enemy's fate" },
              { id: "c", text: "Panicked and afraid" },
              { id: "d", text: "Forgiving and gentle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Identifying tone", statement: "Choose the tone that the key words support. Here 'glad' shows pleasure." }],
            steps: [{ reasoning: "The speaker says 'glad I see' while looking at his dead foe, so he is pleased, not sorry.", evidence: "In the morning glad I see", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Quietly pleased by his enemy's fate, because 'glad' is used about seeing the foe 'outstretch'd beneath the tree'.",
            commonErrors: ["Choosing 'guilty' because the event is shocking, although no regret is expressed in the poem.", "Confusing the foe's feelings with the speaker's."],
          },
        },
        {
          id: "et8-u1-speaker-subject-tone-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: POISON_TREE,
          stem: "In lines 1-4, how does the speaker deal differently with his anger towards his friend and his foe? Support your answer with quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Point and quotation", statement: "Make a clear point and support it with a short, exact quotation." },
              { kind: "technique", name: "Parallel structure", statement: "Repeating a sentence pattern invites the reader to compare two things." },
            ],
            steps: [
              { reasoning: "With his friend he speaks openly and the anger disappears.", evidence: "I told my wrath, my wrath did end", marks: 1, markCode: "AO1" },
              { reasoning: "With his foe he stays silent and the anger increases.", evidence: "I told it not, my wrath did grow", marks: 1, markCode: "AO1" },
              { reasoning: "The two lines use the same pattern ('I was angry with my...; I told...'), so the contrast stands out and the cause of the difference (telling or not telling) is clear.", evidence: "I was angry with my foe", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "He tells his friend and the anger ends ('I told my wrath, my wrath did end'), but hides it from his foe so it grows ('I told it not, my wrath did grow'). The matching sentence patterns make the contrast between honesty and silence clear.",
            commonErrors: ["Retelling the lines without any quotation.", "Not noticing the repeated structure."],
          },
        },
        {
          id: "et8-u1-speaker-subject-tone-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: POISON_TREE,
          stem: "How does Blake present the speaker's attitude to his foe in lines 5-12? Refer closely to the language of the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "The anger is treated as a plant that is watered, sunned and grows to bear fruit." },
              { kind: "skill", name: "Embedding quotations", statement: "Place short quotations inside your own sentence and comment on key words." },
            ],
            steps: [
              { reasoning: "He tends his hatred carefully like a gardener, which shows how deliberate and loving his cruelty is.", evidence: "I water'd it in fears", marks: 2, markCode: "AO2" },
              { reasoning: "He hides his hatred behind friendliness; 'deceitful' and 'wiles' connote trickery and a calculated plan to trap the foe.", evidence: "soft deceitful wiles", marks: 2, markCode: "AO2" },
              { reasoning: "The shining apple tempts the foe, so the speaker's attitude is predatory: he wants the foe to take the bait.", evidence: "an apple bright", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Blake presents the speaker as a patient, calculating enemy. His hatred is a plant he waters 'in fears' and sunshines with 'smiles', so his kindness is a disguise. The adjectives 'soft deceitful' show scheming, and the 'apple bright' is bait that the foe cannot resist, which suggests a trap.",
            levels: bands(["5-6", "3-4", "1-2"]),
            commonErrors: ["Describing the plot of the stanzas without commenting on words.", "Calling the speaker 'sad' without evidence."],
            examinerNote: "Reward any well-supported reading of the speaker as manipulative, obsessive or cruel.",
          },
        },
        {
          id: "et8-u1-speaker-subject-tone-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: POISON_TREE,
          stem: "Read the whole poem and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Write down two things the speaker uses to 'water' his anger in lines 5-8.", marks: 2 },
            { label: "b", prompt: "Explain what the word 'bright' in line 10 suggests about the apple.", marks: 4 },
            { label: "c", prompt: "How does Blake use the speaker, tone and the shape of the poem to present the dangers of hidden anger? Refer to the whole poem.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select exact words from the text that answer the question." },
              { kind: "technique", name: "Connotation", statement: "A single word can suggest several linked ideas and feelings." },
              { kind: "technique", name: "Narrative arc", statement: "The poem moves in four stages: honesty, secrecy, growth, death." },
            ],
            steps: [
              { part: "a", reasoning: "Any one of: fears, tears.", evidence: "fears / tears", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any other of: smiles, soft deceitful wiles.", evidence: "smiles / wiles", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Bright' suggests the apple looks shiny, healthy and attractive, so it is a tempting lure.", evidence: "an apple bright", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The apple recalls the forbidden fruit of Eden, so it hints at temptation, sin and death.", evidence: "apple bright", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The poem is a short, tightly controlled story of how anger spoken ends, but anger hidden grows into harm.", evidence: "my wrath did grow", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The calm, almost cheerful tone and neat rhyming couplets make the speaker's cruelty more chilling because it seems so controlled.", evidence: "In the morning glad I see", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The extended metaphor of the garden presents the destruction as natural and inevitable, a warning about letting resentment grow.", evidence: "outstretch'd beneath the tree", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) Any two of fears, tears, smiles, wiles. (b) 'Bright' makes the apple gleam attractively, so it works as bait; it also recalls the forbidden fruit of Eden, linking hatred to sin and death. (c) Blake shows hidden anger growing like a plant until it kills, and the controlled tone and couplets make the speaker's cruelty chilling.",
            levels: bands(["5-6", "3-4", "1-2"], "c"),
            commonErrors: ["In (b) saying only that the apple is 'shiny' with no inference.", "In (c) writing about the plot without tone or form."],
          },
        },
      ],
    },
    {
      id: "et8-u1-imagery",
      title: "Imagery",
      skill: "Identify similes, metaphors and personification and explain the effect of each on the reader.",
      lesson: {
        sections: [
          {
            heading: "Spotting imagery",
            body: "**Imagery** paints a picture in the mind. A **simile** compares with 'like' or 'as' ('like a thunderbolt'). A **metaphor** says something *is* something else ('the sun is a golden coin'). **Personification** gives human qualities to non-human things ('the sea crawls'). Naming the technique earns little on its own: the marks are for the effect.",
          },
          {
            heading: "Explaining the effect",
            body: "Use a three-step route. **What** is being compared to what? **Which word** carries the idea (the verb or adjective is often the key)? **What does it make us feel or imagine** about the subject? For example, the sea that 'crawls' makes the water seem slow and small from the eagle's height, so the eagle seems far above and superior.",
          },
        ],
        keyFormulas: [
          { name: "Simile", statement: "A comparison using 'like' or 'as'." },
          { name: "Metaphor", statement: "A comparison stating that one thing is another." },
          { name: "Personification", statement: "Human qualities given to something non-human." },
          { name: "Effect sentence", statement: "This image suggests... because the word '...' connotes..." },
        ],
        workedExample: {
          problem: "How does Tennyson use imagery to present the eagle in the first stanza of 'The Eagle'?",
          solution: "Tennyson personifies the eagle by giving it 'crooked hands'. The adjective 'crooked' makes the talons seem bent and ready to grip, while 'hands' suggests the bird has human-like control, so it seems powerful and purposeful. The verb 'clasps' shows a firm, secure hold on the 'crag', which makes the eagle appear both strong and at home in a harsh, high place.",
        },
      },
      questions: [
        {
          id: "et8-u1-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EAGLE,
          stem: "'And like a thunderbolt he falls' (line 6). Which technique is used here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metaphor" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Onomatopoeia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "A comparison using 'like' or 'as'." }],
            steps: [{ reasoning: "The word 'like' links the eagle to a thunderbolt, so it is a simile.", evidence: "like a thunderbolt", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Simile, because the eagle is compared to a thunderbolt using the word 'like'.",
            commonErrors: ["Choosing metaphor because the comparison is strong; a metaphor would not use 'like'."],
          },
        },
        {
          id: "et8-u1-imagery-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EAGLE,
          stem: "'He clasps the crag with crooked hands' (line 1). What does the writer's choice of 'clasps' and 'hands' suggest about the eagle?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "The eagle's talons are described as human hands." },
              { kind: "technique", name: "Verb choice", statement: "Strong verbs carry connotations of action and character." },
            ],
            steps: [
              { reasoning: "'Clasps' suggests a firm, secure grip, so the eagle seems strong and in control.", evidence: "clasps", marks: 1, markCode: "AO2" },
              { reasoning: "Calling the talons 'hands' is personification, giving the eagle human-like purpose and skill.", evidence: "crooked hands", marks: 1, markCode: "AO2" },
              { reasoning: "'Crooked' suggests bent, claw-like and slightly menacing, so the bird is powerful rather than gentle.", evidence: "crooked", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "'Clasps' shows a strong, secure grip, and 'hands' personifies the talons so the eagle seems purposeful and in control; 'crooked' adds a hint of menace.",
            commonErrors: ["Saying only that it is personification without explaining the effect.", "Describing the eagle without quoting."],
          },
        },
        {
          id: "et8-u1-imagery-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: EAGLE,
          stem: "How does Tennyson use imagery in the second stanza (lines 4-6) to present the eagle's power?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "The sea 'crawls', like a small creature." },
              { kind: "technique", name: "Simile", statement: "The eagle's dive is compared to a thunderbolt." },
            ],
            steps: [
              { reasoning: "The sea is personified as 'crawling' and 'wrinkled', so from the eagle's height it seems small, slow and old, which makes the eagle appear far above it.", evidence: "The wrinkled sea beneath him crawls", marks: 2, markCode: "AO2" },
              { reasoning: "'Mountain walls' suggests a fortress or castle, so the eagle seems like a lord watching over his kingdom.", evidence: "his mountain walls", marks: 2, markCode: "AO2" },
              { reasoning: "The simile 'like a thunderbolt' links the eagle's attack to lightning: sudden, fast and deadly. The short last line gives the image impact.", evidence: "like a thunderbolt he falls", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "Tennyson makes the eagle seem like a king. The sea 'crawls' beneath it, so the bird dominates the world, and the 'mountain walls' suggest a fortress. The final simile, 'like a thunderbolt', captures the speed and danger of its dive.",
            levels: bands(["5-6", "3-4", "1-2"]),
            commonErrors: ["Naming the simile and personification but not explaining their effect.", "Writing about the first stanza instead of the second."],
          },
        },
        {
          id: "et8-u1-imagery-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: EAGLE,
          stem: "Read 'The Eagle' and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Write down two details in lines 1-3 that show the eagle is high up.", marks: 2 },
            { label: "b", prompt: "Explain what the phrase 'The wrinkled sea beneath him crawls' suggests about the eagle's view of the world.", marks: 4 },
            { label: "c", prompt: "How does Tennyson use imagery and the structure of the poem to create an impression of the eagle as dominant? Refer to the whole poem.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Copy short, exact details from the text." },
              { kind: "technique", name: "Personification", statement: "The sea behaves like a small animal." },
              { kind: "convention", name: "Tercet", statement: "Each stanza has three lines with a single rhyme, creating a tight, controlled form." },
            ],
            steps: [
              { part: "a", reasoning: "Any one of: the crag; close to the sun.", evidence: "Close to the sun", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any other of: lonely lands; ring'd with the azure world.", evidence: "Ring'd with the azure world", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Wrinkled' makes the sea look small-scale and old, like skin, since the eagle sees only surface detail from far above.", evidence: "wrinkled", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'Crawls' personifies the sea as slow and low, so the eagle appears superior, looking down on the world.", evidence: "crawls", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Imagery of height ('close to the sun') and a royal setting ('mountain walls') makes the eagle seem like a monarch in a castle.", evidence: "his mountain walls", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The poem moves from stillness (stanza 1: 'he stands') to sudden action (stanza 2: 'he falls'), so the reader senses controlled power about to strike.", evidence: "he stands", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The simile in the final line is the climax: the short, abrupt ending and the thunderbolt image leave an impression of speed and danger.", evidence: "like a thunderbolt he falls", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) 'Close to the sun'; 'lonely lands' (or 'crag'). (b) 'Wrinkled' makes the sea look small and old, and 'crawls' personifies it as slow, so the eagle seems far above and superior. (c) Imagery of royalty and height makes the eagle dominant, and the move from still watching to the sudden thunderbolt fall in the final line shows controlled power.",
            levels: bands(["5-6", "3-4", "1-2"], "c"),
            commonErrors: ["In (c) discussing only imagery and ignoring structure.", "Naming devices without effects."],
          },
        },
      ],
    },
  ],
};
