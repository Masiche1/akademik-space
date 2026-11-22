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

const FLASHBACK: TextExtract = {
  title: "Opening of a story: The Orchard",
  author: "Written for Akademik Space",
  source: "Original narrative opening",
  text:
    "I am forty-one years old, standing in a supermarket aisle with a bag of apples in my hand, and I am eight years old again, barefoot in the wet grass, watching my grandmother's ladder lean against the last tree in the orchard.\n\nThe smell does it: sweet, cold, faintly bruised. Behind me a trolley rattles past and a child demands crisps. But in the orchard, long gone now beneath a car park, the ladder creaks, and my grandmother's voice, patient as rain, tells me which apples are ready by the sound they make when you tap them.\n\nI put the bag in my trolley. I do not tap it.",
};

const MOTIF: TextExtract = {
  title: "A story fragment: The Clock-Mender's Daughter",
  author: "Written for Akademik Space",
  source: "Original narrative fragment",
  text:
    "Every clock in the shop was set to a different hour. Her father said this was because time, like people, should be allowed to disagree. When he died, Ruth went through the rooms stopping them one by one, and the silence that gathered behind her was heavier than the ticking had been.\n\nOnly the small brass carriage clock on the bench she left alone. It had never worked. Her father had kept it, he said, for the sound of the key turning.\n\nOn the last evening she wound it, for no reason, and set it to the hour he died. Then she locked the shop, and for the first time in her life did not look back to see whether the lights were off.",
};

export const lesson32: Lesson = {
  id: "el11-u3-lesson-3-2",
  code: "3-2",
  title: "Perspective, Time, Symbol and Motif in Narrative Writing",
  goal: "I CAN shape narrative writing through deliberate choices of perspective, time and recurring symbols.",
  standards: ["4EA1 Paper 2", "4EA1 AO4", "4EA1 AO5"],
  vocabulary: [
    { term: "Narrative perspective", definition: "The point of view from which a story is told, such as first-person or third-person limited." },
    { term: "Unreliable narrator", definition: "A narrator whose account the reader has reason to doubt." },
    { term: "Flashback", definition: "A scene that moves the narrative back in time." },
    { term: "Motif", definition: "A recurring image, sound or idea that builds meaning across a text." },
    { term: "Symbol", definition: "An object or image that stands for a larger idea." },
    { term: "Retrospective narration", definition: "A narrator looking back on past events from a later time." },
    { term: "Temporal shift", definition: "A move between past, present and future in a narrative." },
  ],
  concepts: [
    {
      id: "el11-u3-perspective-time",
      title: "Narrative perspective and time",
      skill: "Choose a perspective and manipulate time to control what the reader knows and feels.",
      lesson: {
        sections: [
          {
            heading: "Choosing a perspective",
            body: "**First person** is intimate but limited to what the narrator knows; it can be unreliable. **Third person limited** stays close to one character's thoughts while allowing a more graceful, observant voice. **Third person omniscient** can move between minds and times. Choose the viewpoint that serves your effect: if you want secrets, limit what the reader sees.",
          },
          {
            heading: "Shaping time",
            body: "Narrative does not have to run in order. A **flashback** triggered by a sensory detail, as in 'The Orchard', can show what a character has lost. **Slowing time** (a single second described over a paragraph) increases tension, while **compressing time** ('Years passed') moves quickly. Use clear signals, such as a change of tense or a trigger, so the reader is not confused.",
          },
          {
            heading: "Controlling reader knowledge",
            body: "Decide what to reveal, delay or withhold. Open in the middle of an image, hold back the cause of the emotion, and let a final short sentence deliver the turn. In 'The Orchard' the closing 'I do not tap it' lands because the whole piece has prepared it.",
          },
        ],
        keyFormulas: [
          { name: "Trigger for flashback", statement: "A smell, sound or object that carries the character into the past." },
          { name: "Present/past contrast", statement: "Use tense and detail to show what has changed between then and now." },
          { name: "Delayed information", statement: "Withhold a key fact until the moment of greatest effect." },
        ],
        workedExample: {
          problem: "How does the writer of 'The Orchard' use time and perspective in the opening?",
          solution: "The first-person retrospective voice immediately holds two ages in one sentence: 'I am forty-one years old ... and I am eight years old again'. The present tense of the supermarket is invaded by the past, showing memory as an involuntary, physical experience. The smell of apples is the trigger, described with sensory precision ('sweet, cold, faintly bruised'), and the contrast between the ordinary supermarket noise ('a trolley rattles', 'a child demands crisps') and the quiet orchard sets the present as shallow beside the past. The closing line, 'I do not tap it', is a brief present-tense sentence that shows the narrator cannot recover what has been lost, using the grandmother's lesson as an absence.",
        },
      },
      questions: [
        {
          id: "el11-u3-perspective-time-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FLASHBACK,
          stem: "What triggers the narrator's memory in 'The Orchard'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A photograph of the orchard" },
              { id: "b", text: "A conversation with her grandmother" },
              { id: "c", text: "The smell of the apples" },
              { id: "d", text: "The noise of a child in the supermarket" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory trigger", statement: "A smell or sound that moves a character to the past." }],
            steps: [{ reasoning: "The text states that the smell does it.", evidence: "The smell does it", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** The smell of the apples.",
            commonErrors: ["Choosing the child (c), whose noise is the present distraction."],
          },
        },
        {
          id: "el11-u3-perspective-time-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: FLASHBACK,
          stem: "Explain how the writer uses the contrast between the supermarket and the orchard to show what the narrator has lost.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Contrast of settings", statement: "Opposing settings highlight loss." }],
            steps: [
              { reasoning: "The supermarket is noisy, mechanical and shallow.", evidence: "a trolley rattles past and a child demands crisps", marks: 1, markCode: "AO2" },
              { reasoning: "The orchard is peaceful, natural and personal, with the grandmother's voice 'patient as rain'.", evidence: "patient as rain", marks: 1, markCode: "AO2" },
              { reasoning: "The orchard is 'long gone ... beneath a car park', showing literal and emotional loss.", evidence: "beneath a car park", marks: 1, markCode: "AO1" },
              { reasoning: "Effect: the reader sees the present as impoverished and feels the narrator's grief.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The rattling trolley and demanding child present a noisy present, whereas the orchard, with its patient grandmother, is calm; the fact that it lies 'beneath a car park' makes the loss tangible.",
            commonErrors: ["Describing both settings without comparing.", "No quotation."],
          },
        },
        {
          id: "el11-u3-perspective-time-q3",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Write a short story opening (about 250 words) in which a sensory detail in the present moves the narrator into a memory. Use first-person perspective and control tense for effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Flashback structure", statement: "A trigger, a shift of tense and a return to the present." },
              { kind: "technique", name: "Sensory writing", statement: "Precise smell, sound and touch ground memory." },
            ],
            steps: [
              { reasoning: "A convincing sensory trigger and controlled movement into the past.", marks: 4, markCode: "AO4" },
              { reasoning: "Distinctive first-person voice with emotional depth.", marks: 3, markCode: "AO4" },
              { reasoning: "Effective closing image or turn which reflects the loss or change.", marks: 2, markCode: "AO4" },
              { reasoning: "Accurate, varied sentences, secure tense control and ambitious vocabulary.", marks: 3, markCode: "AO5" },
            ],
            finalAnswer: "A top response uses a precise trigger, handles tense shifts cleanly, builds contrast between then and now, and ends on a quiet image that carries the meaning.",
            levels: levels(12, "narrative writing"),
            commonErrors: ["Confusing tenses.", "Telling the reader what the character feels instead of showing it.", "Over-long backstory."],
          },
        },
        {
          id: "el11-u3-perspective-time-q4",
          difficulty: "challenge",
          totalMarks: 30,
          extract: FLASHBACK,
          stem: "Study the opening of 'The Orchard'.",
          parts: [
            { label: "a", prompt: "State two ways the narrator is described in the first paragraph.", marks: 2 },
            { label: "b", prompt: "Analyse how the writer uses sentence structure in the final paragraph, 'I put the bag in my trolley. I do not tap it.'", marks: 4 },
            { label: "c", prompt: "Write the next part of the story (about 450 words) from the same narrator's perspective, moving between the present and the past.", marks: 24 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Pick two accurate details." },
              { kind: "technique", name: "Short sentences", statement: "Terse sentences end a passage with restraint and ache." },
              { kind: "convention", name: "Narrative control", statement: "Perspective, time and structure managed for effect." },
            ],
            steps: [
              { part: "a", reasoning: "Forty-one years old.", evidence: "forty-one years old", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Standing in a supermarket aisle holding apples.", evidence: "standing in a supermarket aisle", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Two short, plain sentences contrast with the long, flowing sentences of memory.", evidence: "I do not tap it.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The flat statement conveys restraint: she cannot repeat the ritual.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Silence after the sentence leaves the reader with the implied loss.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Present tense returns the narrator to the aisle, completing a circular structure.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Controlled narrative perspective and consistent voice.", marks: 8, markCode: "AO4" },
              { part: "c", reasoning: "Skilful handling of time shifts, with clear triggers and returns.", marks: 7, markCode: "AO4" },
              { part: "c", reasoning: "Technical accuracy and varied syntax.", marks: 5, markCode: "AO5" },
              { part: "c", reasoning: "Sophisticated vocabulary, imagery and a resonant ending.", marks: 4, markCode: "AO5" },
            ],
            finalAnswer: "(a) She is forty-one; she stands in a supermarket aisle. (b) The two short sentences end the piece with restraint, contrasting with the flowing memory and implying her inability to relive it. (c) A top-band continuation keeps the retrospective voice, uses the orchard as a recurring image and ends with a resonant echo.",
            levels: levels(24, "narrative control", "c"),
            commonErrors: ["Switching to third person.", "Confused tenses.", "Starting a new, unrelated story."],
          },
        },
      ],
    },
    {
      id: "el11-u3-symbol-motif",
      title: "Symbolism and motif in your own writing",
      skill: "Plant a recurring image and develop it so that it carries meaning by the end of a story.",
      lesson: {
        sections: [
          {
            heading: "Choosing a symbol",
            body: "A symbol works best when it is concrete, ordinary and tied to your character's situation: a clock, a key, a coat, a dying plant. Do not announce its meaning. Place it early, let it change as the story develops, and bring it back at the end in a way that shifts its significance.",
          },
          {
            heading: "Building a motif",
            body: "A motif repeats. In 'The Clock-Mender's Daughter' the clocks and their sounds recur: the shop of disagreeing time, the silence after they are stopped, the brass clock that never worked, the key turning. Three appearances are enough: **introduce, develop, transform**.",
          },
          {
            heading: "Showing, not telling",
            body: "Let objects and actions carry the emotion. Ruth does not say she is grieving; she stops the clocks one by one. At the close she 'did not look back to see whether the lights were off', and the unspoken change from habit to release is felt rather than explained.",
          },
        ],
        keyFormulas: [
          { name: "Introduce, develop, transform", statement: "Show the symbol, change how it is seen, then use it for a final shift in meaning." },
          { name: "Show, don't tell", statement: "Convey emotion through action and detail, not direct statement." },
          { name: "Subtle ending", statement: "End on a gesture or image that carries the story's meaning without explanation." },
        ],
        workedExample: {
          problem: "How do the clocks work as a motif in the fragment?",
          solution: "In the first paragraph, the clocks 'set to a different hour' establish the father's philosophy that time 'should be allowed to disagree', making the clocks symbols of individuality and tolerance. When Ruth stops them, 'the silence that gathered behind her was heavier than the ticking had been', transforming the sound of time into the weight of loss. The brass carriage clock, which 'had never worked', is a different kind of symbol: what mattered to the father was the ritual of winding, 'the sound of the key turning'. When Ruth finally winds it and sets it to the hour of his death, she fixes time at the moment of loss and so accepts it. The recurrence of clocks therefore traces her movement from his world, through grief, to acceptance.",
        },
      },
      questions: [
        {
          id: "el11-u3-symbol-motif-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MOTIF,
          stem: "What does the father mean when he says time, like people, should be 'allowed to disagree'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He values difference and does not insist on everything being the same" },
              { id: "b", text: "He is careless about his work" },
              { id: "c", text: "He cannot read clocks" },
              { id: "d", text: "He wants to argue with his customers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolic explanation", statement: "The clocks stand for individual differences." }],
            steps: [{ reasoning: "The comparison of time to people shows tolerance of difference.", evidence: "time, like people, should be allowed to disagree", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** He values difference.",
            commonErrors: ["Taking the statement literally (c)."],
          },
        },
        {
          id: "el11-u3-symbol-motif-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MOTIF,
          stem: "Explain what the writer suggests by 'the silence that gathered behind her was heavier than the ticking had been'. Use a quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Paradox and personified silence", statement: "Silence becomes a physical weight." }],
            steps: [
              { reasoning: "Silence is given weight, making grief physical.", evidence: "heavier than the ticking had been", marks: 1, markCode: "AO2" },
              { reasoning: "The verb 'gathered' suggests silence accumulating with each stopped clock.", evidence: "gathered behind her", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: her loss is felt more strongly in the absence of the sound that stood for her father.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The silence is a heavy presence that 'gathered' with each stopped clock, showing that absence is more painful than the sound that used to fill the shop.",
            commonErrors: ["Saying 'it is quiet' without explaining the effect."],
          },
        },
        {
          id: "el11-u3-symbol-motif-q3",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Write a short story (about 300 words) in which an everyday object appears three times and changes meaning for a character facing a farewell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Motif development", statement: "Introduce, develop, transform." },
              { kind: "skill", name: "Show, don't tell", statement: "Let action carry feeling." },
            ],
            steps: [
              { reasoning: "A clear, concrete object that appears at least three times.", marks: 3, markCode: "AO4" },
              { reasoning: "The meaning of the object transforms by the end.", marks: 3, markCode: "AO4" },
              { reasoning: "Emotion conveyed through action and image, not statement.", marks: 3, markCode: "AO4" },
              { reasoning: "Accurate, controlled and varied sentences with precise vocabulary.", marks: 3, markCode: "AO5" },
            ],
            finalAnswer: "A top response plants the object early, lets its sound or look recur with changing emotional meaning, and ends with a quiet gesture involving it.",
            levels: levels(12, "motif and symbolism"),
            commonErrors: ["Explaining the symbol's meaning aloud.", "Using it only once."],
          },
        },
        {
          id: "el11-u3-symbol-motif-q4",
          difficulty: "challenge",
          totalMarks: 30,
          extract: MOTIF,
          stem: "Read 'The Clock-Mender's Daughter'.",
          parts: [
            { label: "a", prompt: "Give two details about the brass carriage clock.", marks: 2 },
            { label: "b", prompt: "Explain what the final sentence suggests about Ruth.", marks: 4 },
            { label: "c", prompt: "Analyse how the writer uses the clocks as a motif to explore grief.", marks: 6 },
            { label: "d", prompt: "Write a story (about 400 words) in which a different recurring object explores a character's sense of loss or change.", marks: 18 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select precise details." },
              { kind: "technique", name: "Symbol and motif", statement: "Objects hold emotional meaning." },
              { kind: "convention", name: "Narrative craft", statement: "Structure, voice and image combine." },
            ],
            steps: [
              { part: "a", reasoning: "It is small and made of brass.", evidence: "small brass carriage clock", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It had never worked, but her father kept it for the sound of the key.", evidence: "It had never worked", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She is moving on: the act of not looking back shows release.", evidence: "did not look back", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The contrast with 'for the first time in her life' shows a lifelong habit of care ended.", evidence: "for the first time in her life", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It suggests acceptance rather than neglect.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The ordinary detail of lights implies the quiet, domestic nature of her grief.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The clocks first symbolise her father's tolerance of difference.", evidence: "allowed to disagree", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Stopping the clocks turns them into symbols of loss.", evidence: "the silence that gathered", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final clock set to the hour of his death shows acceptance.", evidence: "set it to the hour he died", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Controlled narrative with a clear motif and transformation.", marks: 8, markCode: "AO4" },
              { part: "d", reasoning: "Voice, imagery and subtext conveying emotion.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Accurate and varied syntax with sophisticated vocabulary.", marks: 5, markCode: "AO5" },
            ],
            finalAnswer: "(a) It is small and brass; it never worked. (b) Ruth is accepting the loss and breaking an old habit of watchfulness. (c) The clocks move from symbols of her father's philosophy, to silence and weight, to a final act of acceptance. (d) A top story repeats a concrete object with changing meaning and ends on a quiet gesture.",
            levels: [...levels(6, "analysis of motif", "c"), ...levels(18, "narrative writing with motif", "d")],
            commonErrors: ["Explaining symbolism in the narration.", "Too many symbols.", "Rushed ending."],
          },
        },
      ],
    },
  ],
};
