import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cie-ol-el-lesson-6-2",
  code: "6-2",
  title: "Creative writing: narrative",
  goal: "I CAN write engaging narratives with strong structure.",
  standards: ["1123 Writing: narrative"],
  vocabulary: [
    { term: "Narrative", definition: "Story — fictional or based on real events." },
    { term: "Plot", definition: "Sequence of events in story." },
    { term: "Character", definition: "Person in story — protagonist, antagonist." },
    { term: "Setting", definition: "Time and place of story." },
    { term: "Climax", definition: "Highest point of tension/action." },
    { term: "Resolution", definition: "How story ends — conflicts resolved." },
  ],
  concepts: [
    {
      id: "cie-ol-el-u6-narrative",
      title: "Narrative writing",
      skill: "Write engaging stories with clear structure and character.",
      lesson: {
        sections: [
          {
            heading: "Story structure",
            body: "Opening (hook) → rising action → climax → falling action → resolution. Each part serves purpose.",
          },
          {
            heading: "Character development",
            body: "Introduce characters early, show traits through actions/dialogue, develop through story arc.",
          },
          {
            heading: "Setting and atmosphere",
            body: "Create vivid setting that supports mood/theme. Time and place matter — they shape story.",
          },
        ],
        keyFormulas: [
          { name: "Narrative", statement: "Structure: hook→rising→climax→resolution; characters through actions; setting supports mood." },
        ],
        workedExample: {
          problem: "Write opening for mystery story.",
          solution: "Hook: 'The door was open when I arrived — but I knew I'd locked it.' — immediate intrigue.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-u6narr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'climax' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Highest point of tension" },
              { id: "b", text: "Opening" },
              { id: "c", text: "Ending" },
              { id: "d", text: "Introduction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax", statement: "Highest point of tension/action." },
            ],
            steps: [
              { reasoning: "Climax = peak tension.", working: "peak", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Highest point of tension",
            commonErrors: ["Choosing (c) — that's resolution."],
          },
        },
        {
          id: "cie-ol-el-u6narr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways to develop characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Character development", statement: "Actions, dialogue, thoughts, reactions." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "methods", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Actions, dialogue, thoughts, reactions (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-u6narr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does setting support story?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Setting", statement: "Creates mood, reflects theme, constrains/enables plot." },
            ],
            steps: [
              { reasoning: "Setting creates mood/atmosphere.", working: "mood", marks: 1, markCode: "AO2" },
              { reasoning: "Reflects or contrasts with theme.", working: "theme", marks: 1, markCode: "AO2" },
              { reasoning: "Constrains or enables plot possibilities.", working: "plot", marks: 1, markCode: "AO2" },
              { reasoning: "Functions explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Setting creates mood, reflects theme, constrains/enables plot.",
            commonErrors: ["Thinking setting is just background — it matters."],
          },
        },
        {
          id: "cie-ol-el-u6narr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply narrative writing skills.",
          parts: [
            { label: "a", prompt: "Describe story structure.", marks: 2 },
            { label: "b", prompt: "How to develop characters?", marks: 3 },
            { label: "c", prompt: "How does setting support story?", marks: 2 },
            { label: "d", prompt: "How to write engaging opening?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative", statement: "Structure, characters, setting, opening." },
            ],
            steps: [
              { part: "a", reasoning: "Hook→rising action→climax→falling action→resolution.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Actions, dialogue, thoughts, reactions, development.", working: "characters", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple methods.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Mood, theme, plot possibilities.", working: "setting", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Hook: question, fact, description, dialogue.", working: "opening", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) character methods (c) setting functions (d) hook",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple methods.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Flat characters — only described, not developed."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-narrative-techniques",
      title: "Narrative techniques",
      skill: "Use advanced narrative techniques for effect.",
      lesson: {
        sections: [
          {
            heading: "Point of view",
            body: "First person ('I'), second ('you'), third ('he/she'). Each creates different intimacy and perspective.",
          },
          {
            heading: "Tense",
            body: "Past tense (most common), present tense (immediate), future tense (rare). Consistency matters.",
          },
          {
            heading: "Dialogue",
            body: "Reveals character, advances plot, creates tension. Use tags ('she said') sparingly — action beats work better.",
          },
        ],
        keyFormulas: [
          { name: "Techniques", statement: "POV: 1st/2nd/3rd; tense: past/present/future; dialogue reveals character." },
        ],
        workedExample: {
          problem: "How to use dialogue effectively?",
          solution: "Use dialogue to reveal character and advance plot — not just filler. Add action beats instead of constant 'she said'.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-nt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'first person' narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrator uses 'I'" },
              { id: "b", text: "Narrator uses 'you'" },
              { id: "c", text: "Narrator uses 'he/she'" },
              { id: "d", text: "No narrator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "First person", statement: "Narrator uses 'I'." },
            ],
            steps: [
              { reasoning: "First person = 'I'.", working: "I", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Narrator uses 'I'",
            commonErrors: ["Choosing (c) — that's third person."],
          },
        },
        {
          id: "cie-ol-el-nt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two narrative tenses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tenses", statement: "Past, present, future." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "tenses", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Past, present, future (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-nt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does dialogue reveal character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue", statement: "Shows personality, background, relationships through speech." },
            ],
            steps: [
              { reasoning: "Word choice reveals education, background, personality.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "What characters say reveals values and relationships.", working: "values", marks: 1, markCode: "AO2" },
              { reasoning: "How they say it — tone, hesitation — reveals emotion.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Functions explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice, values, tone reveal character through dialogue.",
            commonErrors: ["Using dialogue as filler — must serve purpose."],
          },
        },
        {
          id: "cie-ol-el-nt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply narrative techniques.",
          parts: [
            { label: "a", prompt: "Name POV types.", marks: 2 },
            { label: "b", prompt: "Name tenses.", marks: 2 },
            { label: "c", prompt: "How dialogue reveals character?", marks: 2 },
            { label: "d", prompt: "Why consistency matters?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative techniques", statement: "POV, tenses, dialogue, consistency." },
            ],
            steps: [
              { part: "a", reasoning: "First, second, third person.", working: "POV", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All three.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Past, present, future.", working: "tenses", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "All three.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word choice, values, tone reveal character.", working: "dialogue", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "POV/tense consistency maintains coherence; shifts confuse reader.", working: "consistency", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) POV types (b) tenses (c) dialogue reveals character (d) consistency=coherence",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three POVs.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three tenses.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Consistency explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Inconsistent POV/tense — confuses reader."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-creative-descriptive",
      title: "Creative descriptive writing",
      skill: "Write vivid descriptions within creative pieces.",
      lesson: {
        sections: [
          {
            heading: "Sensory details",
            body: "Engage all five senses — sight, sound, smell, touch, taste. Choose relevant senses for context.",
          },
          {
            heading: "Imagery",
            body: "Similes, metaphors, personification — create mental pictures that enhance narrative.",
          },
          {
            heading: "Show don't tell",
            body: "Demonstrate through detail/action rather than stating — 'her hands trembled' vs 'she was nervous'.",
          },
        ],
        keyFormulas: [
          { name: "Descriptive", statement: "Sensory details+imagery+show don't tell=vivid description." },
        ],
        workedExample: {
          problem: "Describe a character's emotion without stating it.",
          solution: "Show through action: 'Her knuckles whitened on the railing, eyes fixed on the door.' — implies fear/anticipation.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-cd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the five senses for description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight, sound, smell, touch, taste" },
              { id: "b", text: "Only sight and sound" },
              { id: "c", text: "Only touch and smell" },
              { id: "d", text: "Only taste and sight" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Five senses", statement: "Sight, sound, smell, touch, taste." },
            ],
            steps: [
              { reasoning: "All five senses.", working: "five senses", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sight, sound, smell, touch, taste",
            commonErrors: ["Missing senses — use all five."],
          },
        },
        {
          id: "cie-ol-el-cd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'show don't tell'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Show don't tell", statement: "Use details/action instead of stating directly." },
            ],
            steps: [
              { reasoning: "Demonstrate through details.", working: "demonstrate", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Use details/action instead of stating directly.",
            commonErrors: ["Just adjectives — need action/details."],
          },
        },
        {
          id: "cie-ol-el-cd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to create atmosphere in creative writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Atmosphere", statement: "Word choice, sensory details, imagery create mood." },
            ],
            steps: [
              { reasoning: "Word choice: positive/negative connotations create mood.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Sensory details appeal to relevant senses.", working: "senses", marks: 1, markCode: "AO2" },
              { reasoning: "Figurative language enhances atmosphere.", working: "figurative", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice+sensory details+figurative language=atmosphere.",
            commonErrors: ["Only adjectives — need full approach."],
          },
        },
        {
          id: "cie-ol-el-cd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply descriptive techniques.",
          parts: [
            { label: "a", prompt: "Name five senses.", marks: 2 },
            { label: "b", prompt: "Explain 'show don't tell'.", marks: 2 },
            { label: "c", prompt: "List figurative devices.", marks: 3 },
            { label: "d", prompt: "How to create atmosphere?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Descriptive", statement: "Senses, show don't tell, figurative, atmosphere." },
            ],
            steps: [
              { part: "a", reasoning: "Sight, sound, smell, touch, taste.", working: "senses", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All five.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Use details/action instead of stating.", working: "show", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Simile, metaphor, personification, hyperbole.", working: "devices", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Word choice, sensory details, imagery.", working: "atmosphere", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) five senses (b) show don't tell (c) figurative devices (d) word choice+senses",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "All five.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple devices.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Flat description — only adjectives."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-creative-notes",
      title: "Creative writing — revision notes",
      summary: "Narrative structure, techniques, descriptive skills.",
      sections: [
        {
          heading: "Creative writing",
          body: "Narrative: hook→rising→climax→resolution. Techniques: POV, tense, dialogue. Descriptive: senses, imagery, show don't tell.",
        },
      ],
    },
  ],
};
