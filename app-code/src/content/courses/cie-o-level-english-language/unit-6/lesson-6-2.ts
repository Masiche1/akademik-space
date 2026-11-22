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
              { id: "c", text: "Introduction" },
              { id: "d", text: "Ending" },
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
    {
      id: "cie-ol-el-u6narr-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the climax of a story?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "The ending" },
          { id: "b", text: "The highest point of tension/action" },
          { id: "c", text: "The middle" },
          { id: "d", text: "The beginning" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Climax", statement: "Highest point of tension/action." },
        ],
        steps: [
          { reasoning: "Climax = peak tension.", working: "climax", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** The highest point of tension/action",
        commonErrors: ["Confusing climax with resolution."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is the correct order of story structure?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Resolution → climax → hook → rising" },
          { id: "b", text: "Hook → rising action → climax → resolution" },
          { id: "c", text: "Climax → hook → resolution → rising" },
          { id: "d", text: "Rising → hook → climax → resolution" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Structure", statement: "Hook→rising→climax→resolution." },
        ],
        steps: [
          { reasoning: "Correct order starts with hook.", working: "order", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Hook → rising action → climax → resolution",
        commonErrors: ["Wrong order — climax must peak."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "How do you develop a character effectively?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Through actions, dialogue, thoughts, reactions" },
          { id: "b", text: "By ignoring them" },
          { id: "c", text: "By telling the reader directly" },
          { id: "d", text: "Only by describing appearance" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Character", statement: "Actions, dialogue, thoughts, reactions." },
        ],
        steps: [
          { reasoning: "Characters developed through multiple methods.", working: "actions", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Through actions, dialogue, thoughts, reactions",
        commonErrors: ["Only describing appearance."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is the role of setting in a story?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only describes weather" },
          { id: "b", text: "Replaces characters" },
          { id: "c", text: "Creates mood and supports the theme" },
          { id: "d", text: "Has no purpose" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Setting", statement: "Creates mood, reflects theme." },
        ],
        steps: [
          { reasoning: "Setting creates mood and supports theme.", working: "mood", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** Creates mood and supports the theme",
        commonErrors: ["Thinking setting is unimportant."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should an effective story opening do?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Give away the ending" },
          { id: "b", text: "Hook the reader's attention" },
          { id: "c", text: "End the story" },
          { id: "d", text: "Be boring" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Opening", statement: "Hook engages reader." },
        ],
        steps: [
          { reasoning: "Opening must hook reader.", working: "hook", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Hook the reader's attention",
        commonErrors: ["Slow or boring openings."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A story has 4 structural elements. A student includes hook, rising action, and resolution but omits climax. How many elements are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Structure", statement: "Hook, rising, climax, resolution." },
        ],
        steps: [
          { reasoning: "4 elements; climax missing.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One element missing.", working: "1", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Forgetting climax."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A story task requires at least 400 words. A draft is 320 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 80 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "400 - 320 = 80 words short.", working: "400 - 320 = 80", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "80",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A story has 3 main characters. A student develops only 2. How many characters are underdeveloped?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Character", statement: "All characters need development." },
        ],
        steps: [
          { reasoning: "3 characters; 2 developed.", working: "3 - 2 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One character underdeveloped.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Ignoring minor characters."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A story must be between 500 and 600 words. A draft is 580 words, and the student adds a 30-word title page. How many words must the story lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "580 + 30 = 610 words after title.", working: "580 + 30 = 610", marks: 1, markCode: "AO3" },
          { reasoning: "610 - 600 = 10 words over.", working: "610 - 600 = 10", marks: 2, markCode: "AO3" },
          { reasoning: "Story must lose 10 words.", working: "10", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "10",
        commonErrors: ["Forgetting title counts."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the typical structure of a narrative story.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Structure", statement: "Hook→rising→climax→resolution." },
        ],
        steps: [
          { reasoning: "Hook: engaging opening.", working: "hook", marks: 1, markCode: "AO2" },
          { reasoning: "Rising action builds tension to climax.", working: "rising", marks: 1, markCode: "AO2" },
          { reasoning: "Resolution concludes the story.", working: "resolution", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Hook→rising action→climax→resolution.",
        commonErrors: ["Missing climax or resolution."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how setting contributes to a story's mood and theme.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Setting", statement: "Creates mood, reflects theme." },
        ],
        steps: [
          { reasoning: "Setting creates atmosphere/mood.", working: "mood", marks: 1, markCode: "AO2" },
          { reasoning: "Reflects or reinforces theme.", working: "theme", marks: 1, markCode: "AO2" },
          { reasoning: "Can constrain or enable plot.", working: "plot", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation with examples.", working: "examples", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Setting creates mood, reflects theme, constrains/enables plot.",
        commonErrors: ["Treating setting as decoration only."],
      },
    },
    {
      id: "cie-ol-el-u6narr-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about narrative writing.",
      parts: [
        { label: "a", prompt: "What is the climax?", marks: 2 },
        { label: "b", prompt: "Name the four story elements in order.", marks: 2 },
        { label: "c", prompt: "How to develop characters?", marks: 2 },
        { label: "d", prompt: "What is the role of setting?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Narrative", statement: "Climax, structure, character, setting." },
        ],
        steps: [
          { part: "a", reasoning: "Highest point of tension/action.", working: "climax", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Hook, rising action, climax, resolution.", working: "order", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Correct order.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Actions, dialogue, thoughts, reactions.", working: "character", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Multiple methods.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Creates mood, reflects theme.", working: "setting", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) peak tension (b) hook→rising→climax→resolution (c) actions/dialogue (d) mood/theme",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct order.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Wrong order.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple methods.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Missing story structure."],
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
              { id: "a", text: "Narrator uses 'he/she'" },
              { id: "b", text: "Narrator uses 'you'" },
              { id: "c", text: "No narrator" },
              { id: "d", text: "Narrator uses 'I'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "First person", statement: "Narrator uses 'I'." },
            ],
            steps: [
              { reasoning: "First person = 'I'.", working: "I", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Narrator uses 'I'",
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
    {
      id: "cie-ol-el-nt-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is first-person point of view?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "No narrator" },
          { id: "b", text: "Narrator uses 'you'" },
          { id: "c", text: "Narrator uses 'I'" },
          { id: "d", text: "Narrator uses 'he/she'" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "First person", statement: "Narrator uses 'I'." },
        ],
        steps: [
          { reasoning: "First person = 'I'.", working: "first", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Narrator uses 'I'",
        commonErrors: ["Confusing with third person."],
      },
    },
    {
      id: "cie-ol-el-nt-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which tense is most common in narratives?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Present continuous only" },
          { id: "b", text: "Future tense" },
          { id: "c", text: "No tense" },
          { id: "d", text: "Past tense" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Tenses", statement: "Past, present, future." },
        ],
        steps: [
          { reasoning: "Past tense most common in narratives.", working: "past", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Past tense",
        commonErrors: ["Inconsistent tense usage."],
      },
    },
    {
      id: "cie-ol-el-nt-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What does dialogue reveal about characters?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only their names" },
          { id: "b", text: "Nothing" },
          { id: "c", text: "Personality, background, relationships" },
          { id: "d", text: "Only the plot" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Dialogue", statement: "Shows personality, background, relationships." },
        ],
        steps: [
          { reasoning: "Dialogue reveals character traits.", working: "dialogue", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** Personality, background, relationships",
        commonErrors: ["Using dialogue only for plot."],
      },
    },
    {
      id: "cie-ol-el-nt-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is second-person point of view?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "No narrator" },
          { id: "b", text: "Narrator uses 'he/she'" },
          { id: "c", text: "Narrator uses 'you'" },
          { id: "d", text: "Narrator uses 'I'" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Second person", statement: "Narrator uses 'you'." },
        ],
        steps: [
          { reasoning: "Second person = 'you'.", working: "second", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Narrator uses 'you'",
        commonErrors: ["Confusing with first/third person."],
      },
    },
    {
      id: "cie-ol-el-nt-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Why is consistency important in narrative writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Maintains point of view and tense throughout" },
          { id: "b", text: "Makes story shorter" },
          { id: "c", text: "It is not important" },
          { id: "d", text: "Confuses readers" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Consistency", statement: "Maintain POV and tense." },
        ],
        steps: [
          { reasoning: "Consistency maintains POV and tense.", working: "consistency", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Maintains point of view and tense throughout",
        commonErrors: ["Switching POV or tense mid-story."],
      },
    },
    {
      id: "cie-ol-el-nt-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A story uses 3 points of view: first, second, third. A writer uses only first person. How many POVs are unused?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "POV", statement: "Three main points of view." },
        ],
        steps: [
          { reasoning: "3 POVs; 1 used.", working: "3 - 1 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two unused (second, third).", working: "2", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Confusing POV types."],
      },
    },
    {
      id: "cie-ol-el-nt-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A story task requires at least 450 words. A draft is 380 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 70 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "450 - 380 = 70 words short.", working: "450 - 380 = 70", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "70",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-nt-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A story has 3 tenses available: past, present, future. A writer uses past and present but not future. How many tenses are unused?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Tenses", statement: "Past, present, future." },
        ],
        steps: [
          { reasoning: "3 tenses; 2 used.", working: "3 - 2 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One tense unused (future).", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Not realising future is also valid."],
      },
    },
    {
      id: "cie-ol-el-nt-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A story must be between 450 and 500 words. A draft is 480 words, and the student adds a 25-word title. How many words can the body still grow by?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: -5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "480 + 25 = 505 words after title.", working: "480 + 25 = 505", marks: 1, markCode: "AO3" },
          { reasoning: "505 - 500 = 5 words over.", working: "505 - 500 = 5", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 5 words — answer is -5.", working: "-5", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "-5",
        commonErrors: ["Not realising additions push over limit."],
      },
    },
    {
      id: "cie-ol-el-nt-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the three main points of view in narrative writing.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "POV", statement: "First, second, third person." },
        ],
        steps: [
          { reasoning: "First person: narrator uses 'I'.", working: "first", marks: 1, markCode: "AO2" },
          { reasoning: "Second person: narrator uses 'you'.", working: "second", marks: 1, markCode: "AO2" },
          { reasoning: "Third person: narrator uses 'he/she/they'.", working: "third", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "First='I', second='you', third='he/she/they'.",
        commonErrors: ["Confusing POV types."],
      },
    },
    {
      id: "cie-ol-el-nt-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how dialogue can reveal character and advance plot.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Dialogue", statement: "Shows personality, background, relationships." },
        ],
        steps: [
          { reasoning: "Dialogue reveals personality through speech patterns.", working: "personality", marks: 1, markCode: "AO2" },
          { reasoning: "Shows background and relationships.", working: "background", marks: 1, markCode: "AO2" },
          { reasoning: "Advances plot through conversation.", working: "plot", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation with purpose.", working: "purpose", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Dialogue reveals character and advances plot.",
        commonErrors: ["Using dialogue only for plot."],
      },
    },
    {
      id: "cie-ol-el-nt-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about narrative techniques.",
      parts: [
        { label: "a", prompt: "Define first-person POV.", marks: 2 },
        { label: "b", prompt: "Name the three tenses.", marks: 2 },
        { label: "c", prompt: "What does dialogue reveal?", marks: 2 },
        { label: "d", prompt: "Why maintain consistency?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Techniques", statement: "POV, tenses, dialogue, consistency." },
        ],
        steps: [
          { part: "a", reasoning: "Narrator uses 'I'.", working: "first", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Past, present, future.", working: "tenses", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "All three named.", working: "all", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Personality, background, relationships.", working: "dialogue", marks: 1, markCode: "AO2" },
          { part: "c", reasoning: "Multiple aspects.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Maintains POV and tense throughout.", working: "consistency", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) 'I' (b) past/present/future (c) character traits (d) maintains POV/tense",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Three tenses.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple aspects.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Inconsistent POV or tense."],
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
              { id: "a", text: "Only taste and sight" },
              { id: "b", text: "Only touch and smell" },
              { id: "c", text: "Only sight and sound" },
              { id: "d", text: "Sight, sound, smell, touch, taste" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Five senses", statement: "Sight, sound, smell, touch, taste." },
            ],
            steps: [
              { reasoning: "All five senses.", working: "five senses", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Sight, sound, smell, touch, taste",
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
    {
      id: "cie-ol-el-cd-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What are the five senses used in descriptive writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Sight, sound, smell, touch, taste" },
          { id: "b", text: "Only touch" },
          { id: "c", text: "Only sight" },
          { id: "d", text: "Only sound" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Five senses", statement: "Sight, sound, smell, touch, taste." },
        ],
        steps: [
          { reasoning: "All five senses used.", working: "senses", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Sight, sound, smell, touch, taste",
        commonErrors: ["Using only sight."],
      },
    },
    {
      id: "cie-ol-el-cd-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What does 'show don't tell' mean?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Hide all information" },
          { id: "b", text: "Only describe, never show" },
          { id: "c", text: "Tell everything explicitly" },
          { id: "d", text: "Use details and action instead of stating directly" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Show don't tell", statement: "Use details/action instead of stating." },
        ],
        steps: [
          { reasoning: "Show = details/action; tell = direct statement.", working: "show", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Use details and action instead of stating directly",
        commonErrors: ["Telling instead of showing."],
      },
    },
    {
      id: "cie-ol-el-cd-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "Which creates atmosphere in descriptive writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Word choice, sensory details, imagery" },
          { id: "b", text: "Lists" },
          { id: "c", text: "Only facts" },
          { id: "d", text: "Statistics" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Atmosphere", statement: "Word choice, sensory details, imagery." },
        ],
        steps: [
          { reasoning: "Atmosphere created through sensory/imagery.", working: "atmosphere", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Word choice, sensory details, imagery",
        commonErrors: ["Using only facts — no mood."],
      },
    },
    {
      id: "cie-ol-el-cd-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is imagery in descriptive writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only facts" },
          { id: "b", text: "Language that creates mental pictures" },
          { id: "c", text: "Only dialogue" },
          { id: "d", text: "Only statistics" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Imagery", statement: "Creates mental pictures." },
        ],
        steps: [
          { reasoning: "Imagery = mental pictures.", working: "imagery", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Language that creates mental pictures",
        commonErrors: ["Confusing imagery with facts."],
      },
    },
    {
      id: "cie-ol-el-cd-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which sense is often neglected in descriptive writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Touch" },
          { id: "b", text: "Sound" },
          { id: "c", text: "Smell" },
          { id: "d", text: "Sight" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Senses", statement: "All five should be used." },
        ],
        steps: [
          { reasoning: "Smell often neglected.", working: "smell", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Smell",
        commonErrors: ["Using only sight/sound."],
      },
    },
    {
      id: "cie-ol-el-cd-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A description task requires at least 300 words. A draft is 240 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 60 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "300 - 240 = 60 words short.", working: "300 - 240 = 60", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "60",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-cd-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A description uses 5 senses. A writer uses only 3 (sight, sound, touch). How many senses are unused?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Senses", statement: "Use all five senses." },
        ],
        steps: [
          { reasoning: "5 senses; 3 used.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two unused (smell, taste).", working: "2", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Using only sight and sound."],
      },
    },
    {
      id: "cie-ol-el-cd-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A description has 4 figurative devices. A writer uses only 2. How many devices are unused?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Figurative", statement: "Use varied devices." },
        ],
        steps: [
          { reasoning: "4 devices; 2 used.", working: "4 - 2 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two unused.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Using only one device repeatedly."],
      },
    },
    {
      id: "cie-ol-el-cd-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A description must be between 350 and 400 words. A draft is 390 words, and the student adds a 20-word title. How many words must the description lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "390 + 20 = 410 words after title.", working: "390 + 20 = 410", marks: 1, markCode: "AO3" },
          { reasoning: "410 - 400 = 10 words over.", working: "410 - 400 = 10", marks: 2, markCode: "AO3" },
          { reasoning: "Description must lose 10 words.", working: "10", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "10",
        commonErrors: ["Forgetting title counts."],
      },
    },
    {
      id: "cie-ol-el-cd-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how to use sensory details in descriptive writing.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Sensory", statement: "Use all five senses." },
        ],
        steps: [
          { reasoning: "Include sight, sound, smell, touch, taste.", working: "senses", marks: 1, markCode: "AO2" },
          { reasoning: "Be specific — not just 'nice' but detailed.", working: "specific", marks: 1, markCode: "AO2" },
          { reasoning: "Create vivid mental pictures.", working: "vivid", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Use all five senses with specific detail.",
        commonErrors: ["Using only sight."],
      },
    },
    {
      id: "cie-ol-el-cd-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain the difference between 'showing' and 'telling' with an example.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Show don't tell", statement: "Details/action vs direct statement." },
        ],
        steps: [
          { reasoning: "Tell: 'She was angry.'", working: "tell", marks: 1, markCode: "AO2" },
          { reasoning: "Show: 'She clenched her fists and paced.'", working: "show", marks: 1, markCode: "AO2" },
          { reasoning: "Showing creates vivid picture.", working: "vivid", marks: 1, markCode: "AO2" },
          { reasoning: "Clear example demonstrates difference.", working: "example", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Tell='She was angry'; show='She clenched her fists'.",
        commonErrors: ["Telling instead of showing."],
      },
    },
    {
      id: "cie-ol-el-cd-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about descriptive writing.",
      parts: [
        { label: "a", prompt: "Name the five senses.", marks: 2 },
        { label: "b", prompt: "What is 'show don't tell'?", marks: 2 },
        { label: "c", prompt: "What creates atmosphere?", marks: 2 },
        { label: "d", prompt: "What is imagery?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Descriptive", statement: "Senses, show don't tell, atmosphere, imagery." },
        ],
        steps: [
          { part: "a", reasoning: "Sight, sound, smell, touch, taste.", working: "senses", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "All five named.", working: "all", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Use details/action instead of stating.", working: "show", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Word choice, sensory details, imagery.", working: "atmosphere", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Multiple elements.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Language creating mental pictures.", working: "imagery", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) five senses (b) details vs stating (c) word choice/imagery (d) mental pictures",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Five senses.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple elements.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Using only sight."],
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
