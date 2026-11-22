import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const OPENING: TextExtract = {
  title: "The Lost Key",
  author: "Written for Akademik Space",
  text: "It began with a key.\n\nNobody in the village of Hallow's End could say who had left it on the church wall, only that it was there on Monday morning, small and black and cold as a stone from the bottom of a well. Mrs Okafor from the post office saw it first. She frowned, shrugged, and went on with her shopping.\n\nBy Tuesday, three people had touched it. By Wednesday, two of them were missing.\n\nNow the whole village was watching the wall, pretending not to.\n\nNoor, however, was not watching. She was running.",
};

const WALK: TextExtract = {
  title: "The Race",
  author: "Written for Akademik Space",
  text: "The whistle blew and the field exploded into noise. Jonas pushed off, legs pumping, lungs burning, the grass a green blur beneath him. Faster. Faster. He could hear the others behind him, a thunder of feet, a rasp of breath.\n\nThen he stumbled.\n\nFor a heartbeat the world slowed to nothing. He saw the sky tilt, the faces on the sidelines open into small round Os, his own hand reaching out for something that was not there. He thought of the long winter mornings, the frozen fields, the hours of training that had led to this one moment, and everything he had worked for hung in the air like a held breath.\n\nThe ground rose to meet him.",
};

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis of structural choices and their effects on the reader, with well-chosen references." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some understanding of structure, with some relevant references." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment on structure, often describing what happens." },
];

export const lesson13: Lesson = {
  id: "el8-u1-lesson-1-3",
  code: "1-3",
  title: "Structure",
  goal: "I CAN explain how a writer organises a fiction text, from openings and shifts in focus to sentence length and paragraphing, to shape the reader's experience.",
  standards: ["KS3 Reading", "KS3 AO2"],
  vocabulary: [
    { term: "Structure", definition: "How a writer organises and orders a text to shape the reader's experience." },
    { term: "Shift in focus", definition: "A change in what the writer directs the reader's attention to, such as from setting to character." },
    { term: "Short sentence", definition: "A brief sentence used for emphasis, tension or shock." },
    { term: "Paragraph", definition: "A block of text on one idea or moment; a very short paragraph creates impact." },
    { term: "Cliffhanger", definition: "An ending or break that leaves the reader desperate to know what happens next." },
    { term: "Pace", definition: "The speed at which events unfold and at which the reader moves through the text." },
  ],
  concepts: [
    {
      id: "el8-u1-openings-shifts",
      title: "Openings and shifts in focus",
      skill: "Explain how a writer hooks the reader at the start and moves their attention across a text.",
      lesson: {
        sections: [
          {
            heading: "How openings hook the reader",
            body: "Writers open stories to make readers curious. Common methods include a mystery ('It began with a key.'), a vivid setting, a character in action, or a line of dialogue. When you analyse an opening, ask what question it raises in the reader's mind and how it makes them want to read on.",
          },
          {
            heading: "Shifts in focus",
            body: "Texts move the reader's attention: from a wide view to a close detail, from a place to a person, from past to present, or from calm to danger. A **shift in focus** is a structural choice. Name where the focus starts, where it moves to and the effect. 'The extract moves from the whole village to Noor alone, which creates a contrast and makes her seem different and important.'",
          },
        ],
        keyFormulas: [
          { name: "Hook", statement: "An opening that creates curiosity or tension so the reader wants to continue." },
          { name: "Shift in focus", statement: "A change in what the reader's attention is drawn to, such as setting to character." },
          { name: "Zoom in / zoom out", statement: "Moving from a wide view to a close detail, or the reverse." },
        ],
        workedExample: {
          problem: "How does the writer make the opening of 'The Lost Key' interesting? (4 marks)",
          solution: "The opening line, 'It began with a key.', is short and mysterious, so the reader immediately asks what the key is and what it began. The writer then describes it in detail, 'small and black and cold as a stone from the bottom of a well', which makes it seem unsettling. Finally the structure builds suspense through time: 'By Tuesday, three people had touched it. By Wednesday, two of them were missing.' The pattern of days quickens the pace and hints at danger.",
        },
      },
      questions: [
        {
          id: "el8-u1-openings-shifts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OPENING,
          stem: "Why does the writer begin with the single-sentence paragraph 'It began with a key.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To create mystery and make the reader want to know more" },
              { id: "b", text: "To show that the story is about to end" },
              { id: "c", text: "To explain who Noor is" },
              { id: "d", text: "To describe the village in detail" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Hook", statement: "A short, intriguing opening raises questions." }],
            steps: [{ reasoning: "The brief, unexplained statement raises the question of what the key is and what it started.", evidence: "It began with a key.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** It creates mystery and curiosity. Nothing is described or explained yet, so options (b) and (d) are wrong.",
            commonErrors: ["Choosing (b), because the village is only described later."],
          },
        },
        {
          id: "el8-u1-openings-shifts-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: OPENING,
          stem: "The extract ends with 'Noor, however, was not watching. She was running.' What does this shift in focus do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It slows the story down by repeating earlier events" },
              { id: "b", text: "It moves from the whole village to one character, creating contrast and intrigue" },
              { id: "c", text: "It moves the story back to Monday" },
              { id: "d", text: "It shows the village is now safe" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Shift in focus", statement: "Moving from many people to one individual spotlights that person." }],
            steps: [
              { reasoning: "The focus narrows from 'the whole village' to one named character.", evidence: "Noor, however, was not watching", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast with the watching villagers and the short sentence 'She was running' creates urgency and makes the reader ask why.", evidence: "She was running.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** The focus moves from the watching crowd to Noor alone, contrasting her action with their stillness and raising questions.",
            commonErrors: ["Choosing (d): the passage moves forward in time, not back."],
          },
        },
        {
          id: "el8-u1-openings-shifts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: OPENING,
          stem: "How does the writer use the passing of days to build tension? Refer to the text in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Time structure", statement: "Compressing time quickens pace and escalates tension." },
              { kind: "technique", name: "Parallel structure", statement: "Repeated sentence patterns create rhythm and build impact." },
            ],
            steps: [
              { reasoning: "The days move quickly, from Monday to Wednesday, and compress time so events seem to speed up.", evidence: "By Tuesday, three people had touched it.", marks: 1, markCode: "AO2" },
              { reasoning: "The repeated 'By...' pattern creates a rhythm that builds anticipation.", evidence: "By Wednesday, two of them were missing.", marks: 1, markCode: "AO2" },
              { reasoning: "The dramatic escalation from touching to disappearing creates shock and menace.", evidence: "two of them were missing", marks: 1, markCode: "AO2" },
              { reasoning: "The ordinary tone at first, with Mrs Okafor shrugging, makes the later danger more unsettling by contrast.", evidence: "She frowned, shrugged, and went on with her shopping.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer compresses time into a pattern of days. 'By Tuesday, three people had touched it. By Wednesday, two of them were missing.' The repeated structure builds rhythm, and the escalation from touching to disappearing is shocking. The calm start with Mrs Okafor shrugging makes the danger feel more sinister.",
            commonErrors: ["Retelling the days without commenting on pace or effect."],
          },
        },
        {
          id: "el8-u1-openings-shifts-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: OPENING,
          stem: "Answer all parts of this question about 'The Lost Key'.",
          parts: [
            { label: "a", prompt: "Write down two details about the key from the second paragraph.", marks: 2 },
            { label: "b", prompt: "Explain why the writer uses a very short paragraph at the start.", marks: 2 },
            { label: "c", prompt: "How does the focus of the extract change from the beginning to the end?", marks: 4 },
            { label: "d", prompt: "How does the writer structure this opening to make the reader want to read on?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hook", statement: "An opening that raises questions." },
              { kind: "technique", name: "Shift in focus", statement: "A change in what the reader's attention is directed to." },
            ],
            steps: [
              { part: "a", reasoning: "It is small, black and cold.", evidence: "small and black and cold", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It was left on the church wall, but nobody knows by whom.", evidence: "left it on the church wall", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A one-line paragraph isolates the sentence and gives it dramatic impact.", evidence: "It began with a key.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It creates mystery by withholding information.", evidence: "It began", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It starts with a single object, the key, and moves to the whole village.", evidence: "Nobody in the village of Hallow's End", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "It ends by narrowing to one character who contrasts with the crowd.", evidence: "Noor, however, was not watching.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "A short, mysterious first line raises the question of what the key is.", evidence: "It began with a key.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Escalating time structure shows increasing danger.", evidence: "By Wednesday, two of them were missing.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "The final shift leaves a cliffhanger.", evidence: "She was running.", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) It is small, black and cold; it was left on the church wall by an unknown person. (b) The single-line paragraph isolates the sentence for impact and creates mystery. (c) The focus moves from the key to the village and finally to Noor alone. (d) The mysterious opening, the escalating pattern of days and the abrupt final shift to a running Noor all raise questions, so the reader wants to read on.",
            commonErrors: ["Describing the plot rather than the writer's structural choices.", "Only commenting on the opening line and ignoring the rest of the extract."],
          },
        },
      ],
    },
    {
      id: "el8-u1-sentence-paragraph",
      title: "Sentence length and paragraphing for effect",
      skill: "Explain how short and long sentences and the shape of paragraphs control pace, tension and emphasis.",
      lesson: {
        sections: [
          {
            heading: "Sentence length",
            body: "Long sentences, packed with detail and joined by commas, can build momentum or slow time to a crawl. Short sentences hit hard: they create shock, urgency or finality. A single-word sentence, such as 'Faster.', can mimic a racing heartbeat. Always say what the length does at that moment in the story.",
          },
          {
            heading: "Paragraphing and rhythm",
            body: "A very short paragraph, even one line, makes a moment stand out: 'Then he stumbled.' Long paragraphs suit description or thought. Writers also use repetition and lists of three to shape rhythm. When you write about structure, link a technique to a moment, then to its effect on the reader.",
          },
        ],
        keyFormulas: [
          { name: "Short sentence", statement: "Creates impact, shock, speed or finality." },
          { name: "Long sentence", statement: "Can slow time, build detail or show a rush of thoughts." },
          { name: "One-line paragraph", statement: "Isolates a key moment so that the reader pauses on it." },
        ],
        workedExample: {
          problem: "How does the writer use sentence length to create tension in 'The Race'? (4 marks)",
          solution: "At the start, short fragments such as 'Faster. Faster.' copy the rhythm of running and create urgency. The sentence 'Then he stumbled.' is also a separate paragraph, which isolates the moment and makes it a shock. In contrast, the long sentence about winter mornings and training slows time, mirroring Jonas's feeling that the fall takes forever and letting the reader dwell on what he might lose.",
        },
      },
      questions: [
        {
          id: "el8-u1-sentence-paragraph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WALK,
          stem: "Why does the writer make 'Then he stumbled.' a paragraph on its own?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show that the race is over" },
              { id: "b", text: "To make the moment stand out as a sudden shock" },
              { id: "c", text: "Because the paragraph before it was too long" },
              { id: "d", text: "To describe Jonas's training" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "One-line paragraph", statement: "Isolation gives a sentence maximum impact." }],
            steps: [{ reasoning: "A separate short paragraph makes the stumble abrupt and dramatic.", evidence: "Then he stumbled.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** It makes the stumble stand out as a sudden shock. The race is not over yet, and training is described only later.",
            commonErrors: ["Choosing (b), treating paragraphs as a matter of length rather than effect."],
          },
        },
        {
          id: "el8-u1-sentence-paragraph-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: WALK,
          stem: "Explain the effect of the short sentences 'Faster. Faster.' in the first paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Short sentences", statement: "Brief repeated sentences create speed and urgency." }],
            steps: [
              { reasoning: "The clipped, repeated words copy the rhythm of Jonas's pounding steps and breath.", evidence: "Faster. Faster.", marks: 1, markCode: "AO2" },
              { reasoning: "They create urgency and show his determination to win, speeding up the pace for the reader.", evidence: "legs pumping, lungs burning", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The short, repeated sentences mimic the rhythm of running and his urgent determination. They speed up the pace, pulling the reader into the race.",
            commonErrors: ["Saying 'it is short' without explaining the effect."],
          },
        },
        {
          id: "el8-u1-sentence-paragraph-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: WALK,
          stem: "In the paragraph beginning 'For a heartbeat', the writer uses a long sentence about training. What is the effect of this?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Long sentence", statement: "Extended sentences can slow time and show a rush of thought." },
              { kind: "technique", name: "Pace", statement: "Sentence length controls how quickly the reader moves through events." },
            ],
            steps: [
              { reasoning: "After the sudden short paragraph, time slows, as the world 'slowed to nothing', making the moment feel stretched.", evidence: "the world slowed to nothing", marks: 1, markCode: "AO2" },
              { reasoning: "The long, list-like sentence mirrors the flood of memories in Jonas's mind.", evidence: "the long winter mornings, the frozen fields, the hours of training", marks: 1, markCode: "AO2" },
              { reasoning: "It shows how much is at stake, increasing sympathy and tension.", evidence: "everything he had worked for", marks: 1, markCode: "AO2" },
              { reasoning: "The simile of a held breath suggests suspense, as if everything waits before the fall.", evidence: "hung in the air like a held breath", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The long sentence slows the pace after the short, sudden stumble, mimicking the way time seems to stretch. The list of memories shows what Jonas stands to lose, building sympathy, and the 'held breath' simile adds suspense before the final short paragraph.",
            commonErrors: ["Describing the content of the memories rather than the effect of the sentence length."],
          },
        },
        {
          id: "el8-u1-sentence-paragraph-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: WALK,
          stem: "Answer all parts of this question about 'The Race'.",
          parts: [
            { label: "a", prompt: "Write down two physical details about Jonas as he runs.", marks: 2 },
            { label: "b", prompt: "What does the final short paragraph, 'The ground rose to meet him.', suggest?", marks: 2 },
            { label: "c", prompt: "Explain how the writer slows down time in the third paragraph.", marks: 4 },
            { label: "d", prompt: "How does the writer use structure, including sentence length and paragraphing, to create drama in this extract?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety", statement: "Mixing short and long sentences controls pace." },
              { kind: "technique", name: "Paragraphing", statement: "Short paragraphs create impact; long paragraphs slow time." },
            ],
            steps: [
              { part: "a", reasoning: "His legs are working hard.", evidence: "legs pumping", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "His breathing is painful.", evidence: "lungs burning", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The ground is personified as moving towards him, making the fall seem inevitable and fast.", evidence: "The ground rose to meet him.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The short final paragraph ends on a cliffhanger, leaving his fate uncertain.", evidence: "rose to meet him", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The world seems to freeze, with 'slowed to nothing'.", evidence: "the world slowed to nothing", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Specific slow-motion details, such as the faces forming round Os and a reaching hand, stretch the moment.", evidence: "faces on the sidelines open into small round Os", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Short sentences in the opening build speed and urgency.", evidence: "Faster. Faster.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "A one-line paragraph isolates the stumble as a shock.", evidence: "Then he stumbled.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "The long reflective paragraph slows pace before the final short paragraph ends on a cliffhanger.", evidence: "held breath", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) legs pumping; lungs burning. (b) The ground seems to rush at him, making the fall inevitable, and ends on a cliffhanger. (c) Time freezes ('slowed to nothing') and slow-motion details stretch the moment. (d) Short sentences create speed, the one-line paragraph 'Then he stumbled.' creates shock, the long paragraph slows the pace, and the final short paragraph leaves the reader in suspense.",
            commonErrors: ["Discussing language (similes) instead of structure when asked about sentences and paragraphs.", "Not saying what the structure does to the reader."],
          },
        },
      ],
    },
  ],
};
