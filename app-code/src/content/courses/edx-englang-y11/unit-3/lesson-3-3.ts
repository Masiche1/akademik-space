import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

// Builds a level-based scheme whose top band equals the marks available.
const levels = (top: number, focus: string, part?: string): MarkLevel[] => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k: number) => Math.round((top * k) / n);
  const ladder = [
    `Perceptive, assured and discriminating ${focus}; judicious, well-chosen detail`,
    `Thorough, convincing ${focus}; well-chosen, effective detail`,
    `Clear, relevant ${focus}; appropriate detail`,
    `Some control; ${focus} is partly developed with some relevant detail`,
    `Simple, limited ${focus}; little control or development`,
  ];
  const pick = n === 3 ? [0, 2, 4] : n === 4 ? [0, 2, 3, 4] : [0, 1, 2, 3, 4];
  return pick.map((li, i) => ({
    level: `Level ${n - i}`,
    marks: `${upper(n - i - 1) + 1}-${upper(n - i)}`,
    descriptor: ladder[li] ?? "",
    ...(part ? { part } : {}),
  }));
};

const MODEL_DESCRIPTION: TextExtract = {
  title: "A model description: The Night Market",
  author: "Written for Akademik Space",
  source: "Original descriptive writing",
  text:
    "By eight the market had stopped pretending to be a street. Lamps swung from the awnings like captured moons, and beneath them the stalls crowded shoulder to shoulder, each one shouting its own colour: mangoes in fat orange pyramids, a wall of plastic sandals, a table of brass keys that nobody had come to buy.\n\nThe air was a thick soup of smells. Frying dough, hot oil, cigarette smoke, the green sharpness of crushed coriander. A woman fanned a grill with a folded newspaper, and each flap threw sparks into the dark like a small, patient firework.\n\nI walked slowly, a stranger, carried by the current of the crowd. Somewhere a radio tried to play three songs at once. Somewhere a child laughed, unreturned, and the sound floated up above the awnings and was lost. Then the lamps flickered, all together, as if the market itself had drawn breath.",
};

export const lesson33: Lesson = {
  id: "el11-u3-lesson-3-3",
  code: "3-3",
  title: "Descriptive Writing and Full Exam-style Questions",
  goal: "I CAN write controlled descriptive writing from a scene prompt and tackle complete Paper 2 style questions with timing and confidence.",
  standards: ["4EA1 Paper 2", "4EA1 AO4", "4EA1 AO5"],
  vocabulary: [
    { term: "Sensory detail", definition: "Description that appeals to sight, sound, smell, taste or touch." },
    { term: "Zoom", definition: "Moving focus from a wide view to a small detail, or the reverse, to control what the reader notices." },
    { term: "Pathetic fallacy", definition: "Giving human emotion to the weather or setting so that it mirrors a mood." },
    { term: "Extended metaphor", definition: "A metaphor developed across several lines or sentences." },
    { term: "Minor sentence", definition: "A sentence lacking a main verb, used for emphasis, such as 'Silence.'" },
    { term: "Cohesion", definition: "The way ideas and paragraphs link together so the writing flows." },
  ],
  concepts: [
    {
      id: "el11-u3-descriptive-writing",
      title: "Descriptive writing from a scene prompt",
      skill: "Write a vivid, structured description with controlled focus, sensory detail and a distinctive voice.",
      lesson: {
        sections: [
          {
            heading: "Plan the zoom",
            body: "Great description is not a list. Choose a shape: wide to narrow, outside to inside, still to moving, or past to present. In the model 'The Night Market' the focus moves from the whole street, to the smell, to the narrator's movement, to a small, resonant moment (the child's laugh) and a final collective gesture (the lamps flicker). Plan three or four movements before writing.",
          },
          {
            heading: "Sense, image and voice",
            body: "Involve at least three senses, and choose **fresh images** over cliches: 'lamps swung from the awnings like captured moons' rather than 'the lamps were bright'. Let the narrator's attitude colour the details: a stranger notices differently from a resident. Use sentence variety: long cumulative sentences for abundance, a short sentence for a pause.",
          },
          {
            heading: "Beginnings and endings",
            body: "Begin in the scene with a striking detail rather than a general statement, and end on a precise, resonant image that echoes the opening or alters the mood. Do not summarise or explain. Avoid a narrative that races through events; description slows time and lets one moment breathe.",
          },
        ],
        keyFormulas: [
          { name: "Zoom structure", statement: "Wide view, closer detail, human moment, final image." },
          { name: "Three senses minimum", statement: "Sight, sound and smell at least, with touch or taste for variety." },
          { name: "Fresh image", statement: "A comparison that surprises and clarifies, avoiding cliche." },
        ],
        workedExample: {
          problem: "Write the opening paragraph of a description titled 'A deserted railway station at dawn'.",
          solution: "Model: 'The station had not yet decided to wake. Mist lay along the platform like spilled milk, and the lamps, still lit, made small gold islands in it. A single pigeon walked the length of the timetable board with the air of an inspector. Somewhere a gate clanged, and the sound rolled down the empty rails and did not come back.' The paragraph begins in the scene, uses a personified station, a simple domestic simile, an amusing precise detail and a closing sound that deepens the emptiness.",
        },
      },
      questions: [
        {
          id: "el11-u3-descriptive-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MODEL_DESCRIPTION,
          stem: "Which technique is used in 'Lamps swung from the awnings like captured moons'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Alliteration" },
              { id: "c", text: "Onomatopoeia" },
              { id: "d", text: "Rhetorical question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "Uses 'like' to compare lamps to moons." }],
            steps: [{ reasoning: "'like captured moons' is a comparison using 'like'.", evidence: "like captured moons", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Simile.",
            commonErrors: ["Choosing alliteration because the sentence contains repeated sounds."],
          },
        },
        {
          id: "el11-u3-descriptive-writing-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: MODEL_DESCRIPTION,
          stem: "Explain how the writer uses the senses in the second paragraph of 'The Night Market'. Use quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory detail", statement: "Layered senses immerse the reader." }],
            steps: [
              { reasoning: "Smell is dominant: a list of smells builds abundance.", evidence: "Frying dough, hot oil, cigarette smoke", marks: 1, markCode: "AO4" },
              { reasoning: "The metaphor 'thick soup' makes the air tangible.", evidence: "a thick soup of smells", marks: 1, markCode: "AO4" },
              { reasoning: "Sight supplements smell: sparks from the grill compared to a firework.", evidence: "like a small, patient firework", marks: 1, markCode: "AO4" },
              { reasoning: "Effect: a lively, immersive atmosphere.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The writer layers smell and sight: the 'thick soup of smells' makes the air tangible, and the firework simile adds a visual spark, so the market feels abundant and alive.",
            commonErrors: ["Listing senses with no quotation.", "Missing the effect."],
          },
        },
        {
          id: "el11-u3-descriptive-writing-q3",
          difficulty: "challenge",
          totalMarks: 16,
          stem: "Write a description (about 350 words) of a place that is transformed when the weather changes suddenly. Use the zoom technique.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Zoom structure", statement: "Wide to narrow to resonant final image." },
              { kind: "technique", name: "Sensory imagery", statement: "At least three senses and fresh imagery." },
            ],
            steps: [
              { reasoning: "Controlled structure with clear focus movements.", marks: 5, markCode: "AO4" },
              { reasoning: "Fresh, precise imagery and sensory detail.", marks: 4, markCode: "AO4" },
              { reasoning: "A distinctive voice and a resonant ending.", marks: 3, markCode: "AO4" },
              { reasoning: "Accurate and varied syntax, secure spelling and ambitious vocabulary.", marks: 4, markCode: "AO5" },
            ],
            finalAnswer: "A top description follows a clear zoom, uses fresh images, multiple senses and varied sentences, and ends on a precise resonant image.",
            levels: levels(16, "descriptive writing"),
            commonErrors: ["A list of adjectives.", "Narrating instead of describing.", "Cliches such as 'the sun was a ball of fire'."],
          },
        },
        {
          id: "el11-u3-descriptive-writing-q4",
          difficulty: "challenge",
          totalMarks: 30,
          extract: MODEL_DESCRIPTION,
          stem: "Study 'The Night Market'.",
          parts: [
            { label: "a", prompt: "State two things that can be seen on the stalls in the first paragraph.", marks: 2 },
            { label: "b", prompt: "Analyse how the writer uses the final paragraph to end the description effectively.", marks: 6 },
            { label: "c", prompt: "Write a description (about 450 words) of a fairground, harbour or festival at night, using the model as inspiration but your own images.", marks: 22 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select precise details from the stated paragraph." },
              { kind: "technique", name: "Ending a description", statement: "A final image of collective gesture that leaves a lingering impression." },
              { kind: "convention", name: "Descriptive writing", statement: "Sensory detail, zoom, voice and sentence variety." },
            ],
            steps: [
              { part: "a", reasoning: "Mangoes in orange pyramids.", evidence: "mangoes in fat orange pyramids", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Plastic sandals or brass keys.", evidence: "a table of brass keys", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The narrator's movement, 'a stranger, carried by the current', connects to the crowd as a river and sets an observer's detachment.", evidence: "carried by the current of the crowd", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The radio playing three songs at once creates a chaotic soundscape.", evidence: "three songs at once", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The child's unreturned laugh adds a note of loneliness.", evidence: "laughed, unreturned", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The final image of lamps flickering in unison personifies the market and leaves a moment of wonder.", evidence: "as if the market itself had drawn breath", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear structure with controlled zoom and a purposeful ending.", marks: 7, markCode: "AO4" },
              { part: "c", reasoning: "Fresh imagery, sensory detail and a distinctive voice.", marks: 7, markCode: "AO4" },
              { part: "c", reasoning: "Accurate and varied sentence structures with secure punctuation.", marks: 4, markCode: "AO5" },
              { part: "c", reasoning: "Sophisticated vocabulary used accurately and secure spelling.", marks: 4, markCode: "AO5" },
            ],
            finalAnswer: "(a) Mangoes in orange pyramids; plastic sandals (or brass keys). (b) The ending moves from the crowd, to chaotic sound, to a child's lost laugh, to the lamps drawing breath, ending on a personified, collective moment of wonder. (c) A top-band description builds a clear zoom with fresh images and ends on a precise image.",
            levels: [...levels(6, "analysis of ending", "b"), ...levels(22, "descriptive writing", "c")],
            commonErrors: ["Copying the model's images.", "Storytelling instead of describing."],
          },
        },
      ],
    },
    {
      id: "el11-u3-exam-style",
      title: "Full exam-style questions",
      skill: "Combine reading, analysis and writing skills under timed conditions in complete Paper 2 style tasks.",
      lesson: {
        sections: [
          {
            heading: "Read the paper as a whole",
            body: "Spend the first minutes reading every question so that you know where the marks lie. Allocate time in proportion to marks, and write the longest answers when you are freshest. Always plan extended answers for two or three minutes: it saves time overall.",
          },
          {
            heading: "Command words and focus",
            body: "'Analyse' needs methods and effects; 'explain' needs inference; 'write' needs control of form, audience and purpose. Underline the focus of the question and keep returning to it. Examiners reward relevance far more than length.",
          },
          {
            heading: "Check and refine",
            body: "Reserve the last five minutes to reread. Correct slips in spelling and punctuation, add a missing quotation or a final sentence of effect, and make sure your writing ends well. A tidy, deliberate ending improves the whole impression.",
          },
        ],
        keyFormulas: [
          { name: "Time by marks", statement: "Allow roughly one minute per mark, plus planning time for extended answers." },
          { name: "Plan in three", statement: "Choose three points or three structural stages before writing." },
          { name: "Final check", statement: "Sense, punctuation, spelling, agreement and a strong last sentence." },
        ],
        workedExample: {
          problem: "You have 45 minutes for a 30-mark question: 'Write a story about a journey that changes someone.' Plan your time.",
          solution: "Spend 5 minutes planning: decide the character, the journey, the turning point and the final image. Write for 35 minutes, aiming for about 600 words with a clear structure (opening scene, development, turning point, ending). Keep the last 5 minutes for checking spelling, punctuation and the ending. In planning, choose a symbol (for example a ticket) to recur, and decide where to place a single flashback if it will help the story.",
        },
      },
      questions: [
        {
          id: "el11-u3-exam-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a 45-minute writing task worth 30 marks, what is the best use of the first five minutes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plan the structure, key images and ending" },
              { id: "b", text: "Start writing at once so that you produce more words" },
              { id: "c", text: "Copy out the question" },
              { id: "d", text: "Check spelling of words you might use" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Planning", statement: "A short plan improves structure and saves time." }],
            steps: [{ reasoning: "Planning improves control of structure and ending.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Plan the structure, key images and ending.",
            commonErrors: ["Believing more words means more marks (b)."],
          },
        },
        {
          id: "el11-u3-exam-style-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: MODEL_DESCRIPTION,
          stem: "Explain how the opening sentence 'By eight the market had stopped pretending to be a street' presents the market.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "The market 'pretends', as a person might." }],
            steps: [
              { reasoning: "Personification gives the market a character that could previously only pass as a street.", evidence: "stopped pretending", marks: 1, markCode: "AO2" },
              { reasoning: "The time reference 'By eight' places the reader in a moment of transformation.", evidence: "By eight", marks: 1, markCode: "AO2" },
              { reasoning: "The suggestion that the daytime street is a disguise implies a hidden, livelier identity.", marks: 1, markCode: "AO1" },
              { reasoning: "Effect: it hooks the reader with a lively, slightly humorous tone.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "By saying the market 'stopped pretending', the writer personifies it and implies that the ordinary street was a disguise, hooking the reader with a witty, lively tone.",
            commonErrors: ["Paraphrasing without effect."],
          },
        },
        {
          id: "el11-u3-exam-style-q3",
          difficulty: "challenge",
          totalMarks: 16,
          stem: "Write the opening of a story (about 350 words) that begins with the sentence: 'The letter had been in my pocket for three days.' You have 20 minutes, including planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative opening", statement: "Hook, voice and a hint of the story's tension." },
              { kind: "skill", name: "Timed writing", statement: "Planned and controlled within the time." },
            ],
            steps: [
              { reasoning: "Engaging, controlled narrative with a clear voice and tension.", marks: 6, markCode: "AO4" },
              { reasoning: "Effective imagery and sensory detail.", marks: 4, markCode: "AO4" },
              { reasoning: "Accurate and varied syntax and punctuation.", marks: 3, markCode: "AO5" },
              { reasoning: "Ambitious, precise vocabulary and secure spelling.", marks: 3, markCode: "AO5" },
            ],
            finalAnswer: "A top-band opening builds mystery and voice from the given sentence, withholds the letter's content, uses precise images and ends the extract on a pull to continue.",
            levels: levels(16, "narrative writing"),
            commonErrors: ["Revealing the letter's contents immediately.", "A rushed ending."],
          },
        },
        {
          id: "el11-u3-exam-style-q4",
          difficulty: "challenge",
          totalMarks: 30,
          extract: MODEL_DESCRIPTION,
          stem: "This is a full Paper 2 style task. Allow 70 minutes in total.",
          parts: [
            { label: "a", prompt: "Retrieve two sensory details from the first paragraph of the extract.", marks: 2 },
            { label: "b", prompt: "Explain how the writer presents the narrator's feelings in the final paragraph.", marks: 8 },
            { label: "c", prompt: "Write a story (about 450 words) that begins in a busy public place and ends in silence.", marks: 20 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select precise details." },
              { kind: "skill", name: "Explanation of feelings", statement: "Infer feelings from detail and word choice." },
              { kind: "convention", name: "Narrative structure", statement: "A shape that moves from noise to silence with purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Colour: orange mangoes.", evidence: "fat orange pyramids", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Light: lamps swinging like moons.", evidence: "Lamps swung from the awnings", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Feels like an outsider: 'a stranger, carried by the current'.", evidence: "a stranger, carried by the current", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Sensitive to loneliness: the child's laughter goes 'unreturned' and 'lost'.", evidence: "laughed, unreturned", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The cacophony of the radio shows overload and detachment.", evidence: "three songs at once", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The final personification suggests a sudden shared hush and wonder.", evidence: "drawn breath", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Clear structure with controlled movement from noise to silence and a resonant ending.", marks: 7, markCode: "AO4" },
              { part: "c", reasoning: "Fresh imagery, sensory detail and a distinctive voice.", marks: 7, markCode: "AO4" },
              { part: "c", reasoning: "Accurate and varied sentence structures with secure punctuation and spelling.", marks: 3, markCode: "AO5" },
              { part: "c", reasoning: "Sophisticated, precisely used vocabulary and stylistic control.", marks: 3, markCode: "AO5" },
            ],
            finalAnswer: "(a) Orange mangoes; swinging lamps. (b) The narrator feels like an observer, caught up in a crowd yet separate, and touched by loneliness and wonder. (c) A top-band story controls tempo from noise to silence, uses recurring imagery and ends on a precise image.",
            levels: [...levels(8, "explanation of feelings", "b"), ...levels(20, "narrative writing", "c")],
            commonErrors: ["Unbalanced time: too long on (a).", "A story that never reaches silence.", "Retelling the extract in (b)."],
          },
        },
      ],
    },
  ],
};
