import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cie-ol-el-lesson-3-1",
  code: "3-1",
  title: "Descriptive writing techniques",
  goal: "I CAN write vivid descriptions using sensory detail and imagery.",
  standards: ["1123 Writing: descriptive"],
  vocabulary: [
    { term: "Sensory detail", definition: "Description appealing to five senses." },
    { term: "Imagery", definition: "Language creating mental pictures." },
    { term: "Figurative language", definition: "Non-literal language — simile, metaphor." },
    { term: "Show don't tell", definition: "Demonstrate through detail, not state directly." },
    { term: "Vivid", definition: "Bright, clear, detailed — brings scene alive." },
    { term: "Atmosphere", definition: "Mood or feeling created by description." },
  ],
  concepts: [
    {
      id: "cie-ol-el-descriptive",
      title: "Descriptive writing",
      skill: "Use sensory details, imagery and figurative language to create vivid descriptions.",
      lesson: {
        sections: [
          {
            heading: "Sensory details",
            body: "Engage all five senses: sight (colours, shapes), sound (noises), smell (odours), touch (textures, temperatures), taste (flavours). Not all at once — choose relevant senses.",
          },
          {
            heading: "Imagery and figurative language",
            body: "Similes ('like a...'), metaphors ('the city was a beast'), personification ('the wind whispered'). Create mental pictures.",
          },
          {
            heading: "Show don't tell",
            body: "Instead of 'it was cold' — 'frost etched silver patterns on the window'. Instead of 'she was scared' — 'her knuckles whitened on the railing'.",
          },
        ],
        keyFormulas: [
          { name: "Descriptive writing", statement: "Sensory details + imagery + figurative language + show don't tell = vivid description." },
        ],
        workedExample: {
          problem: "Describe a busy market.",
          solution: "Sight: colourful stalls, moving crowds. Sound: vendors shouting, coins clinking. Smell: spices, fresh fruit. Touch: warm sun, dusty air.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-desc-q1",
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
          id: "cie-ol-el-desc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'show don't tell'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Show don't tell", statement: "Use details/action instead of stating directly." },
            ],
            steps: [
              { reasoning: "Demonstrate through sensory details and action.", working: "demonstrate", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Use sensory details and action instead of stating directly.",
            commonErrors: ["Just adjectives — need action/details."],
          },
        },
        {
          id: "cie-ol-el-desc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to create atmosphere in description.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Atmosphere", statement: "Word choice, sensory details, imagery — create mood/feeling." },
            ],
            steps: [
              { reasoning: "Word choice: positive/negative connotations create mood.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Sensory details appeal to relevant senses for mood.", working: "senses", marks: 1, markCode: "AO2" },
              { reasoning: "Figurative language enhances atmosphere.", working: "figurative", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice + sensory details + figurative language create atmosphere.",
            commonErrors: ["Only adjectives — need full sensory/figurative approach."],
          },
        },
        {
          id: "cie-ol-el-desc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply descriptive writing techniques.",
          parts: [
            { label: "a", prompt: "Name the five senses.", marks: 2 },
            { label: "b", prompt: "Explain 'show don't tell'.", marks: 2 },
            { label: "c", prompt: "List figurative language devices.", marks: 3 },
            { label: "d", prompt: "How to create atmosphere?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Descriptive writing", statement: "Senses, show don't tell, figurative language, atmosphere." },
            ],
            steps: [
              { part: "a", reasoning: "Sight, sound, smell, touch, taste.", working: "senses", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All five.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Use details/action instead of stating — 'frost etched patterns' vs 'it was cold'.", working: "show", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Simile, metaphor, personification, hyperbole.", working: "devices", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Word choice, sensory details, imagery create mood.", working: "atmosphere", marks: 1, markCode: "AO2" },
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
            commonErrors: ["Flat description — only adjectives, no sensory detail."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-descriptive-practice",
      title: "Descriptive writing practice",
      skill: "Apply techniques to different descriptive contexts.",
      lesson: {
        sections: [
          {
            heading: "Describing places",
            body: "Choose viewpoint (above/below/inside), focus on details reader wouldn't notice, use spatial organisation (near/far, left/right).",
          },
          {
            heading: "Describing people",
            body: "Physical appearance + character through actions/posture/expression. Show personality through what they do, not just look like.",
          },
          {
            heading: "Describing objects",
            body: "Texture, colour, shape, function, history. Make ordinary objects interesting through detail.",
          },
        ],
        keyFormulas: [
          { name: "Practice", statement: "Places: viewpoint+details; people: appearance+character; objects: texture+function+history." },
        ],
        workedExample: {
          problem: "Describe a person's character without saying 'kind'.",
          solution: "Show kindness: she paused to help the elderly man, her smile reached her eyes, she remembered everyone's name.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-descp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When describing a place, what should you consider?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Viewpoint and details" },
              { id: "b", text: "Only colours" },
              { id: "c", text: "Only sounds" },
              { id: "d", text: "Only size" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Place description", statement: "Viewpoint and details matter." },
            ],
            steps: [
              { reasoning: "Viewpoint + details.", working: "viewpoint", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Viewpoint and details",
            commonErrors: ["Only one sense — use multiple."],
          },
        },
        {
          id: "cie-ol-el-descp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How to describe a person's character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Character description", statement: "Show through actions/posture/expression, not just appearance." },
            ],
            steps: [
              { reasoning: "Actions reveal character.", working: "actions", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Show through actions, posture, expression — not just appearance.",
            commonErrors: ["Only physical description — need character."],
          },
        },
        {
          id: "cie-ol-el-descp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to make ordinary objects interesting in description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Object description", statement: "Texture, colour, shape, function, history — detail makes interesting." },
            ],
            steps: [
              { reasoning: "Focus on texture, colour, shape — sensory details.", working: "sensory", marks: 1, markCode: "AO2" },
              { reasoning: "Consider function and history — adds depth.", working: "function+history", marks: 1, markCode: "AO2" },
              { reasoning: "Use figurative language to elevate ordinary.", working: "figurative", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sensory details + function/history + figurative language.",
            commonErrors: ["Just listing features — need engaging detail."],
          },
        },
        {
          id: "cie-ol-el-descp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply descriptive techniques.",
          parts: [
            { label: "a", prompt: "How to describe a place?", marks: 2 },
            { label: "b", prompt: "How to describe a person?", marks: 3 },
            { label: "c", prompt: "How to describe an object?", marks: 2 },
            { label: "d", prompt: "What viewpoint options exist?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Descriptive practice", statement: "Place/person/object descriptions; viewpoint options." },
            ],
            steps: [
              { part: "a", reasoning: "Viewpoint, spatial organisation, sensory details.", working: "place", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Appearance + character through actions/posture/expression.", working: "person", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Texture, colour, shape, function, history.", working: "object", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Above, below, inside, outside, first/third person.", working: "viewpoint", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) viewpoint+details (b) appearance+character (c) texture+function+history (d) viewpoint options",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple elements.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple options.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Only appearance — need character too."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-creative-writing",
      title: "Creative writing fundamentals",
      skill: "Write engaging creative pieces with structure and technique.",
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
          { name: "Creative writing", statement: "Structure: hook→rising→climax→resolution; characters through actions; setting supports mood." },
        ],
        workedExample: {
          problem: "How to write engaging opening?",
          solution: "Hook: question, surprising fact, vivid description, or dialogue — draw reader in immediately.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-cw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'climax' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Highest point of tension" },
              { id: "b", text: "Opening scene" },
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
          id: "cie-ol-el-cw-q2",
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
          id: "cie-ol-el-cw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how setting supports story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Setting", statement: "Time/place create mood, reflect themes, constrain possibilities." },
            ],
            steps: [
              { reasoning: "Setting creates mood/atmosphere.", working: "mood", marks: 1, markCode: "AO2" },
              { reasoning: "Reflects or contrasts with theme.", working: "theme", marks: 1, markCode: "AO2" },
              { reasoning: "Constrain or enable plot possibilities.", working: "plot", marks: 1, markCode: "AO2" },
              { reasoning: "Functions explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Setting creates mood, reflects theme, constrains/enables plot.",
            commonErrors: ["Thinking setting is just background — it matters."],
          },
        },
        {
          id: "cie-ol-el-cw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply creative writing skills.",
          parts: [
            { label: "a", prompt: "Describe story structure.", marks: 2 },
            { label: "b", prompt: "How to develop characters?", marks: 3 },
            { label: "c", prompt: "How does setting support story?", marks: 2 },
            { label: "d", prompt: "How to write engaging opening?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Creative writing", statement: "Structure, characters, setting, opening." },
            ],
            steps: [
              { part: "a", reasoning: "Hook→rising action→climax→falling action→resolution.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Actions, dialogue, thoughts, reactions, development through story.", working: "characters", marks: 1, markCode: "AO1" },
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
      id: "cie-ol-el-argumentative",
      title: "Argumentative writing",
      skill: "Construct and present persuasive arguments.",
      lesson: {
        sections: [
          {
            heading: "Argument structure",
            body: "Introduction (thesis) → main points with evidence → counterarguments → conclusion. Each point needs support.",
          },
          {
            heading: "Evidence types",
            body: "Statistics, expert opinions, examples, anecdotes, logical reasoning. Vary evidence types.",
          },
          {
            heading: "Counterarguments",
            body: "Acknowledge opposing views, refute with evidence, show why your position is stronger.",
          },
        ],
        keyFormulas: [
          { name: "Argument", statement: "Thesis→points+evidence→counterarguments→conclusion." },
        ],
        workedExample: {
          problem: "How to write argument for school uniforms?",
          solution: "Thesis: uniforms beneficial. Points: equality, focus, safety. Evidence: studies, examples. Address counterarguments. Conclude strongly.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-arg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'thesis statement'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main argument" },
              { id: "b", text: "Supporting detail" },
              { id: "c", text: "Question" },
              { id: "d", text: "Conclusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "Main argument stated in introduction." },
            ],
            steps: [
              { reasoning: "Thesis = main argument.", working: "main argument", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main argument",
            commonErrors: ["Choosing (c) — that's question."],
          },
        },
        {
          id: "cie-ol-el-arg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence", statement: "Statistics, expert opinions, examples, anecdotes, logic." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Statistics, expert opinions, examples, anecdotes, logic (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-arg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are counterarguments important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterarguments", statement: "Acknowledge opposing views strengthens argument — shows balance." },
            ],
            steps: [
              { reasoning: "Acknowledging opposing views shows fairness.", working: "fairness", marks: 1, markCode: "AO2" },
              { reasoning: "Refuting with evidence strengthens your position.", working: "refute", marks: 1, markCode: "AO2" },
              { reasoning: "Shows you've considered all sides.", working: "considered", marks: 1, markCode: "AO2" },
              { reasoning: "Importance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Shows fairness, strengthens argument, demonstrates consideration.",
            commonErrors: ["Ignoring opposing views — weakens argument."],
          },
        },
        {
          id: "cie-ol-el-arg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Construct and evaluate arguments.",
          parts: [
            { label: "a", prompt: "Describe argument structure.", marks: 2 },
            { label: "b", prompt: "Name evidence types.", marks: 3 },
            { label: "c", prompt: "Why counterarguments?", marks: 2 },
            { label: "d", prompt: "How to conclude strongly?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argumentation", statement: "Structure, evidence, counterarguments, strong conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis→points+evidence→counterarguments→conclusion.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Statistics, expert opinions, examples, anecdotes, logic.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Fairness, strengthens argument, shows consideration.", working: "counter", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Summarise main points, restate thesis, call to action.", working: "conclusion", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) evidence types (c) counterarguments=balance (d) summary+restatement+CTA",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ types.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["No counterarguments — one-sided argument."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit3-notes",
      title: "Unit 3 — revision notes",
      summary: "Descriptive writing, creative writing, argumentative techniques.",
      sections: [
        {
          heading: "Writing skills",
          body: "Descriptive: senses, imagery, show don't tell. Creative: structure, characters, setting. Argumentative: thesis, evidence, counterarguments.",
        },
      ],
    },
  ],
};
