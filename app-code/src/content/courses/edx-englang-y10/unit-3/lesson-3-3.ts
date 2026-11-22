import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const OPENINGS: TextExtract = {
  title: "Three Openings",
  author: "Written for Akademik Space",
  source: "Model openings",
  text: "OPENING 1: The lift stopped between the fourth and fifth floors, and the lights went out.\n\nOPENING 2: It was a bright, sunny day and I got up and went to school. There was a lot of traffic. My friend was waiting for me.\n\nOPENING 3: Nobody in Marrow Street ever mentioned the house at number nine. They crossed the road to avoid it, as if the pavement outside might remember their footsteps.",
};

const ENDINGS: TextExtract = {
  title: "The Violin",
  author: "Written for Akademik Space",
  source: "Model story",
  text: "Lena had not touched the violin since the day her grandfather died. It lay in its case beneath her bed, wrapped in the blue scarf he had given her, and each night she felt it there, like a held breath.\n\nOn the morning of the concert she lifted the lid. The wood was cold. She tightened the bow, tucked the instrument beneath her chin and drew a single long note. It wavered, then steadied.\n\nAt the end of the evening, when the applause had faded and the hall had emptied, she carried the violin out into the dusk. In the open air, under a sky streaked with violet, she played the same note again. This time it did not waver.",
};

const IM_LEVELS = (part: string, top: number): MarkLevel[] => {
  const step = Math.floor(top / 5);
  return [
    { part, level: "Level 5", marks: `${top - step + 1}-${top}`, descriptor: "Perceptive, convincing and sustained writing; assured, imaginative control of structure, voice and language; sophisticated, accurate vocabulary and punctuation." },
    { part, level: "Level 4", marks: `${top - 2 * step + 1}-${top - step}`, descriptor: "Thorough and effective writing; consistent control of structure and voice; wide vocabulary; mostly accurate." },
    { part, level: "Level 3", marks: `${top - 3 * step + 1}-${top - 2 * step}`, descriptor: "Clear, relevant writing; generally organised; some effective vocabulary and devices; generally accurate." },
    { part, level: "Level 2", marks: `${top - 4 * step + 1}-${top - 3 * step}`, descriptor: "Some communication; partly organised; simple devices; errors sometimes impede meaning." },
    { part, level: "Level 1", marks: `1-${top - 4 * step}`, descriptor: "Simple, limited writing; little structure; frequent errors." },
  ];
};

const SHORT: MarkLevel[] = [
  { level: "Level 3", marks: "5-6", descriptor: "Clear, controlled and effective writing with relevant devices and generally accurate expression." },
  { level: "Level 2", marks: "3-4", descriptor: "Some effective writing; devices are simple; some errors." },
  { level: "Level 1", marks: "1-2", descriptor: "Simple, limited writing; little control." },
];

export const lesson33: Lesson = {
  id: "el10-u3-lesson-3-3",
  code: "3-3",
  title: "Imaginative Writing",
  goal: "I CAN write gripping openings and structure a narrative with a purposeful ending.",
  standards: ["4EA1 Paper 2", "4EA1 AO4", "4EA1 AO5"],
  vocabulary: [
    { term: "Hook", definition: "An opening that grabs the reader's attention at once." },
    { term: "In medias res", definition: "Beginning a story in the middle of the action." },
    { term: "Narrative arc", definition: "The shape of a story: opening, build-up, climax and resolution." },
    { term: "Motif", definition: "A repeated image or idea that gives a story unity." },
    { term: "Cyclical structure", definition: "A story that ends by returning to something from its beginning." },
    { term: "Show, don't tell", definition: "Revealing feelings through actions and details rather than naming them." },
  ],
  concepts: [
    {
      id: "el10-u3-openings-hooks",
      title: "Openings and hooks",
      skill: "Write engaging openings that establish voice, setting or tension at once.",
      lesson: {
        sections: [
          {
            heading: "Why the opening matters",
            body: "An examiner reads many scripts. A confident opening signals control at once. Choose a **hook** that plants a question in the reader's mind: a startling event, an intriguing statement, a vivid setting, or a character in trouble. Avoid generic starts such as ‘It was a sunny day and I got up’.",
          },
          {
            heading: "Types of hook",
            body: "**Action**: ‘The lift stopped between the fourth and fifth floors, and the lights went out.’ **Mystery**: ‘Nobody in Marrow Street ever mentioned the house at number nine.’ **Atmosphere**: sensory description of a place. **Voice**: a distinctive narrator. Each raises a question that the reader wants answered.",
          },
          {
            heading: "Show, don't tell",
            body: "Compare ‘He was scared’ with ‘His hand slid along the wall, searching for a switch that was not there.’ The second shows fear through action. Use precise verbs, a few striking details and one well-chosen image rather than a pile of adjectives.",
          },
        ],
        keyFormulas: [
          { name: "Action hook", statement: "Start in the middle of an event, with a short, direct sentence." },
          { name: "Mystery hook", statement: "State something odd or unexplained that raises a question." },
          { name: "Show, don't tell", statement: "Reveal emotions through behaviour, setting and detail." },
        ],
        workedExample: {
          problem: "Why is Opening 3 more effective than Opening 2?",
          solution: "Opening 3 raises questions: why does nobody mention the house, and why cross the road? The personification of the pavement ‘might remember their footsteps’ creates an eerie atmosphere. Opening 2 is a list of ordinary events in plain language, with no tension, image or voice, so it gives the reader no reason to read on.",
        },
      },
      questions: [
        {
          id: "el10-u3-openings-hooks-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OPENINGS,
          stem: "Which opening begins in the middle of the action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening 2" },
              { id: "b", text: "Opening 1" },
              { id: "c", text: "None of them" },
              { id: "d", text: "Opening 3" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Action hook", statement: "Starting in the middle of events creates immediate tension." }],
            steps: [{ reasoning: "A lift stopping and the lights going out is a dramatic event already underway.", evidence: "The lift stopped between the fourth and fifth floors", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Opening 1.",
            commonErrors: ["Choosing Opening 3, which is mystery rather than action."],
          },
        },
        {
          id: "el10-u3-openings-hooks-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: OPENINGS,
          stem: "Explain why Opening 2 is a weak start to a story.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluating writing", statement: "Judge an opening by tension, voice and language." }],
            steps: [
              { reasoning: "It uses a cliche of weather and routine.", evidence: "It was a bright, sunny day", marks: 1, markCode: "AO4" },
              { reasoning: "It lists ordinary events with no tension or question.", evidence: "I got up and went to school", marks: 1, markCode: "AO4" },
              { reasoning: "The vocabulary and sentences are plain and repetitive, with no imagery.", evidence: "There was a lot of traffic", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Opening 2 is a cliched, plain list of routine events with no tension or imagery, so it does not hook the reader.",
            commonErrors: ["Saying it is ‘boring’ without explaining why."],
          },
        },
        {
          id: "el10-u3-openings-hooks-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a gripping opening paragraph (4 to 6 sentences) for a story called ‘The Last Train’. Use a hook and at least one image.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hook", statement: "An opening that raises a question in the reader's mind." },
              { kind: "skill", name: "Show, don't tell", statement: "Reveal feeling through action and detail." },
            ],
            steps: [
              { reasoning: "A clear hook such as action, mystery or atmosphere.", marks: 2, markCode: "AO4" },
              { reasoning: "At least one effective image and precise verbs.", marks: 2, markCode: "AO4" },
              { reasoning: "Controlled sentences and sentence variety.", marks: 1, markCode: "AO4" },
              { reasoning: "Accurate spelling and punctuation.", marks: 1, markCode: "AO5" },
            ],
            levels: SHORT,
            finalAnswer: "An opening that starts with a hook, includes at least one vivid image and uses varied, accurate sentences.",
            commonErrors: ["Starting with the alarm clock.", "Over-long, adjective-heavy description."],
          },
        },
        {
          id: "el10-u3-openings-hooks-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: OPENINGS,
          stem: "Use the three openings to answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Identify the hook used in Opening 3.", marks: 2 },
            { label: "b", prompt: "Explain how Opening 3 uses language to create atmosphere.", marks: 3 },
            { label: "c", prompt: "Rewrite Opening 2 so that it hooks the reader. Write four to six sentences.", marks: 5 },
            { label: "d", prompt: "Write the opening of a story set in a place that has been abandoned. Aim for around 300 words. Create atmosphere, a distinct voice and a hook.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mystery hook", statement: "Something unexplained makes the reader ask a question." },
              { kind: "skill", name: "Atmosphere", statement: "Setting, sensory detail and imagery create mood." },
            ],
            steps: [
              { part: "a", reasoning: "A mystery hook: nobody mentions the house.", evidence: "Nobody in Marrow Street ever mentioned the house at number nine", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "It raises questions of why people avoid it.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Personification of the pavement remembering footsteps.", evidence: "the pavement outside might remember their footsteps", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Verb ‘crossed the road to avoid it’ shows fear.", evidence: "They crossed the road to avoid it", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The restrained tone suggests unspoken dread.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Starts with a hook (action, mystery or voice).", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Uses an image and precise verbs in place of plain statements.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Accurate sentences.", marks: 1, markCode: "AO5" },
              { part: "d", reasoning: "Effective hook and voice.", marks: 4, markCode: "AO4" },
              { part: "d", reasoning: "Atmosphere through setting and sensory detail.", marks: 4, markCode: "AO4" },
              { part: "d", reasoning: "Structure and shape of the opening, with a leading question or a turn.", marks: 3, markCode: "AO4" },
              { part: "d", reasoning: "Vocabulary, sentence variety and accuracy.", marks: 4, markCode: "AO5" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5", descriptor: "Clear, controlled and effective rewrite with a clear hook." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some improvement; hook or image present." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited rewrite." },
              ...IM_LEVELS("d", 15),
            ],
            finalAnswer: "(a) A mystery hook, where nobody speaks of the house. (b) Personification of the pavement and avoidance create dread. (c) A rewrite that begins with a hook and an image. (d) An atmospheric opening set in an abandoned place with a distinct voice and a hook.",
            commonErrors: ["Retelling a day from waking up.", "Too many adjectives with no hook."],
          },
        },
      ],
    },
    {
      id: "el10-u3-structure-endings",
      title: "Structure and endings",
      skill: "Shape a narrative with a clear arc, controlled pace and a purposeful, resonant ending.",
      lesson: {
        sections: [
          {
            heading: "The shape of a short story",
            body: "In an exam you have limited time, so write a **small** story: one main character, one setting, one key moment. Plan a simple arc: opening, build-up, climax, resolution. Do not try to cover days or years. A tight story focused on a single event is easier to control and more powerful.",
          },
          {
            heading: "Pace and focus",
            body: "Slow down for important moments with detail and short sentences; speed up through less important material with summary. Shift focus deliberately: from wide to close, from outside to inside the character. The model story ‘The Violin’ moves from a memory (the grandfather) to a concert and finally to a quiet moment alone.",
          },
          {
            heading: "Endings that resonate",
            body: "Avoid ‘and then I woke up’. A good ending resolves the central tension and leaves an echo. **Cyclical structure** returns to an image from the opening: in the model, Lena plays the ‘same note’ again, but this time ‘it did not waver’, showing her growth without explaining it. A **motif** (the violin, the blue scarf, the held breath) gives the story unity.",
          },
        ],
        keyFormulas: [
          { name: "Narrative arc", statement: "Opening, build-up, climax, resolution." },
          { name: "Cyclical ending", statement: "Return to an image or action from the opening, changed in some way." },
          { name: "Motif", statement: "A repeated image that links the story's beginning, middle and end." },
          { name: "Small story", statement: "One character, one setting, one key moment." },
        ],
        workedExample: {
          problem: "How does the ending of ‘The Violin’ show that Lena has changed?",
          solution: "The ending repeats the note from the middle of the story, ‘a single long note’, but with a difference: the first time ‘it wavered, then steadied’, whereas now ‘it did not waver’. The cyclical echo shows her confidence returning without stating it. The setting, ‘a sky streaked with violet’, gives a gentle, hopeful image that completes the story's emotional journey from grief to acceptance.",
        },
      },
      questions: [
        {
          id: "el10-u3-structure-endings-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ENDINGS,
          stem: "Which structural technique does the writer use by repeating the note at the end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A twist ending" },
              { id: "b", text: "Cyclical structure" },
              { id: "c", text: "Flashback" },
              { id: "d", text: "Dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Cyclical structure", statement: "Returning to an earlier image, changed in some way." }],
            steps: [{ reasoning: "The note played in paragraph two returns at the end, with a difference.", evidence: "she played the same note again", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Cyclical structure.",
            commonErrors: ["Choosing (d), as the ending is gentle and expected."],
          },
        },
        {
          id: "el10-u3-structure-endings-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ENDINGS,
          stem: "Explain what the simile ‘like a held breath’ suggests about the violin.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "A comparison that reveals emotion." }],
            steps: [
              { reasoning: "A held breath suggests tension and waiting.", evidence: "like a held breath", marks: 1, markCode: "AO2" },
              { reasoning: "The violin stands for Lena's grief that she has not let out.", marks: 1, markCode: "AO2" },
              { reasoning: "It foreshadows release when she plays.", evidence: "She tightened the bow", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The simile suggests suppressed emotion and anticipation of release.",
            commonErrors: ["Describing the violin only."],
          },
        },
        {
          id: "el10-u3-structure-endings-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write the final paragraph (4 to 6 sentences) of a story in which a character returns to a place from their past. Use a cyclical ending.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cyclical structure", statement: "Echo an image or action from the beginning, with a change." }],
            steps: [
              { reasoning: "A clear echo of an earlier image or action.", marks: 2, markCode: "AO4" },
              { reasoning: "A sense of change or resolution shown, not stated.", marks: 2, markCode: "AO4" },
              { reasoning: "Controlled language and accurate expression.", marks: 1, markCode: "AO4" },
              { reasoning: "Technical accuracy.", marks: 1, markCode: "AO5" },
            ],
            levels: SHORT,
            finalAnswer: "A closing paragraph that echoes an earlier image and shows change through detail rather than explanation.",
            commonErrors: ["Ending with ‘it was all a dream’.", "Stating the moral directly."],
          },
        },
        {
          id: "el10-u3-structure-endings-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: ENDINGS,
          stem: "Read ‘The Violin’ and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two details about the violin at the start of the extract.", marks: 2 },
            { label: "b", prompt: "Explain how the second paragraph shows Lena's feelings.", marks: 3 },
            { label: "c", prompt: "How does the writer use structure to show Lena's change across the extract?", marks: 5 },
            { label: "d", prompt: "Write a short story (around 400 words) that begins ‘The key still hung on its hook.’ Plan a clear arc and finish with a resonant ending.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cyclical structure and motif", statement: "A repeated note and the violin link the story's beginning and end." },
              { kind: "skill", name: "Narrative arc", statement: "A planned arc keeps writing focused and shaped." },
            ],
            steps: [
              { part: "a", reasoning: "It lies in its case beneath the bed.", evidence: "It lay in its case beneath her bed", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It is wrapped in her grandfather's blue scarf.", evidence: "wrapped in the blue scarf he had given her", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The cold wood suggests anxiety or numbness.", evidence: "The wood was cold", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Careful, deliberate actions show nervous focus.", evidence: "tightened the bow", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The wavering note shows fragile emotion that steadies.", evidence: "It wavered, then steadied", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The opening shows avoidance and grief.", evidence: "had not touched the violin", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The middle shows an attempt, with a wavering note.", evidence: "It wavered, then steadied", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The ending repeats the note but steady, showing growth.", evidence: "this time it did not waver", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The shift to open air and dusk suggests release.", evidence: "a sky streaked with violet", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Opening and voice.", marks: 4, markCode: "AO4" },
              { part: "d", reasoning: "Narrative arc, pace and focus.", marks: 4, markCode: "AO4" },
              { part: "d", reasoning: "Ending that resonates, with motif or echo.", marks: 3, markCode: "AO4" },
              { part: "d", reasoning: "Vocabulary, sentences and accuracy.", marks: 4, markCode: "AO5" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5", descriptor: "Clear, developed analysis of structure with well-chosen evidence." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some analysis with some evidence." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
              ...IM_LEVELS("d", 15),
            ],
            finalAnswer: "(a) It lies in its case beneath her bed; it is wrapped in her grandfather's blue scarf. (b) The cold wood, deliberate actions and wavering note show nervous grief. (c) The structure moves from avoidance to attempt to steady playing, with a cyclical note showing growth. (d) A shaped story with a clear arc, controlled pace and a resonant ending.",
            commonErrors: ["Trying to cover too much time.", "Ending abruptly.", "Explaining the moral."],
          },
        },
      ],
    },
  ],
};
