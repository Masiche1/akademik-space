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
              { id: "a", text: "Only taste and sight" },
              { id: "b", text: "Sight, sound, smell, touch, taste" },
              { id: "c", text: "Only touch and smell" },
              { id: "d", text: "Only sight and sound" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-el-desc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many senses should descriptive writing ideally appeal to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only one" },
              { id: "b", text: "All five" },
              { id: "c", text: "Only two" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Five senses", statement: "Sight, sound, smell, touch, taste." },
            ],
            steps: [
              { reasoning: "All five senses.", working: "five", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** All five",
            commonErrors: ["Missing senses — use all five."],
          },
        },
        {
          id: "cie-ol-el-desc-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A description mentions 3 sights, 2 sounds and 1 smell. (a) How many sensory details are there in total? (b) How many are visual details?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sensory counting", statement: "Count all sensory details; identify visual." },
            ],
            steps: [
              { reasoning: "3 plus 2 plus 1 equals 6 sensory details.", working: "3 + 2 + 1 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "3 are visual (sight).", working: "3 visual", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 3",
            commonErrors: ["Counting only visual details."],
          },
        },
        {
          id: "cie-ol-el-desc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'The city was a beast' is an example of which device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Onomatopoeia" },
              { id: "d", text: "Metaphor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "Direct comparison — 'the city was a beast'." },
            ],
            steps: [
              { reasoning: "Direct equation = metaphor.", working: "metaphor", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Metaphor",
            commonErrors: ["Choosing (b) — similes use 'like/as'."],
          },
        },
        {
          id: "cie-ol-el-desc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two figurative language devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Figurative devices", statement: "Simile, metaphor, personification, hyperbole." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "devices", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simile, metaphor, personification, hyperbole (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-desc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A paragraph has 4 similes, 3 metaphors and 2 personifications. (a) How many similes are there? (b) How many metaphors are there? (c) How many figurative devices appear in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
              { label: "c", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Device counting", statement: "Count each figurative device." },
            ],
            steps: [
              { reasoning: "4 similes are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "3 metaphors are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "4 plus 3 plus 2 equals 9 figurative devices.", working: "4 + 3 + 2 = 9", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 3; (c) 9",
            commonErrors: ["Forgetting personifications in the total."],
          },
        },
        {
          id: "cie-ol-el-desc-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Her knuckles whitened on the railing' shows what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A summary" },
              { id: "b", text: "Happiness" },
              { id: "c", text: "A report" },
              { id: "d", text: "Fear through physical action" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show don't tell", statement: "Physical detail demonstrates emotion." },
            ],
            steps: [
              { reasoning: "Whitened knuckles show fear/nervousness.", working: "action", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Fear through physical action",
            commonErrors: ["Not recognising shown emotion."],
          },
        },
        {
          id: "cie-ol-el-desc-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to create atmosphere in a description.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Atmosphere", statement: "Word choice, sensory detail, imagery create mood." },
            ],
            steps: [
              { reasoning: "Word choice with positive/negative connotations sets mood.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Sensory details appeal to relevant senses for the mood.", working: "senses", marks: 1, markCode: "AO2" },
              { reasoning: "Figurative language enhances the atmosphere.", working: "figurative", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice + sensory details + figurative language create atmosphere.",
            commonErrors: ["Only adjectives — need full sensory approach."],
          },
        },
        {
          id: "cie-ol-el-desc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which description is the most vivid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cold." },
              { id: "b", text: "Winter was there" },
              { id: "c", text: "It was cold" },
              { id: "d", text: "Frost etched silver patterns on the window" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vivid description", statement: "Sensory detail + imagery." },
            ],
            steps: [
              { reasoning: "(a) has sensory detail and imagery.", working: "vivid", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Frost etched silver patterns on the window",
            commonErrors: ["Choosing (b) — that's telling, not showing."],
          },
        },
        {
          id: "cie-ol-el-desc-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A description uses all 5 senses, but the student only includes 3 of them. (a) How many senses are missing? (b) If the description has 8 adjectives and 4 are replaced by vivid sensory detail, how many adjectives remain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description checking", statement: "Use all senses; replace flat adjectives." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 missing senses.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "8 minus 4 equals 4 adjectives remaining.", working: "8 - 4 = 4", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 4",
            commonErrors: ["Using only some senses — aim for all five."],
          },
        },
        {
          id: "cie-ol-el-desc-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply descriptive writing skills.",
          parts: [
            { label: "a", prompt: "Name the five senses.", marks: 2 },
            { label: "b", prompt: "Explain 'show don't tell'.", marks: 2 },
            { label: "c", prompt: "How do you create atmosphere?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Descriptive writing", statement: "Senses, show don't tell, atmosphere." },
            ],
            steps: [
              { part: "a", reasoning: "Sight, sound, smell, touch, taste — all five.", working: "senses", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All named.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Use details/action instead of stating.", working: "show", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word choice, sensory details, imagery.", working: "atmosphere", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) five senses (b) details/action (c) word choice+senses",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "All five.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Flat description — only adjectives."],
          },
        },
        {
          id: "cie-ol-el-desc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A simile uses which words for comparison?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Like or as" },
              { id: "b", text: "Is or are" },
              { id: "c", text: "Has or have" },
              { id: "d", text: "Was or were" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simile", statement: "Comparison using 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "Simile = like/as.", working: "like/as", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Like or as",
            commonErrors: ["Choosing (b) — that's a metaphor."],
          },
        },
        {
          id: "cie-ol-el-desc-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A 200-word description should use all 5 senses; if 60% of it is sensory detail, how many words is that? (b) If 40 words use figurative language, how many words is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 120, unit: "words" },
              { label: "b", answer: 40, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description word planning", statement: "Allocate words to sensory detail." },
            ],
            steps: [
              { reasoning: "60% of 200 equals 120 words.", working: "0.6 x 200 = 120", marks: 1, markCode: "AO2" },
              { reasoning: "40 words of figurative language are given.", working: "40", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 120 words; (b) 40 words",
            commonErrors: ["Not calculating percentages correctly."],
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
              { id: "a", text: "Only sounds" },
              { id: "b", text: "Viewpoint and details" },
              { id: "c", text: "Only size" },
              { id: "d", text: "Only colours" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-el-descp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When describing a place, which viewpoint is most common?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Second person only" },
              { id: "b", text: "Imperative" },
              { id: "c", text: "Third person or first person" },
              { id: "d", text: "Passive voice only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Descriptive viewpoint", statement: "First or third person." },
            ],
            steps: [
              { reasoning: "First/third person are standard.", working: "first/third", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Third person or first person",
            commonErrors: ["Choosing (b) — second person is rare."],
          },
        },
        {
          id: "cie-ol-el-descp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A description covers 3 viewpoints: above, below and inside. (a) How many viewpoints are used? (b) If 2 more viewpoints are added (outside and behind), how many are there in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Viewpoint counting", statement: "Count spatial viewpoints." },
            ],
            steps: [
              { reasoning: "3 viewpoints are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "3 plus 2 equals 5 viewpoints.", working: "3 + 2 = 5", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 3; (b) 5",
            commonErrors: ["Forgetting to count added viewpoints."],
          },
        },
        {
          id: "cie-ol-el-descp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When describing a person, which is essential besides appearance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their address" },
              { id: "b", text: "Their shoe size" },
              { id: "c", text: "Character shown through actions" },
              { id: "d", text: "Only their height" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Person description", statement: "Appearance + character through actions." },
            ],
            steps: [
              { reasoning: "Character must be shown.", working: "character", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Character shown through actions",
            commonErrors: ["Only describing appearance."],
          },
        },
        {
          id: "cie-ol-el-descp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two elements to include when describing an object.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Object description", statement: "Texture, colour, shape, function, history." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Texture, colour, shape, function, history (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-descp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A descriptive piece has 2 place descriptions, 1 person description and 1 object description. (a) How many place descriptions are there? (b) How many total descriptions are there? (c) How many are non-place descriptions?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description counting", statement: "Count each type of description." },
            ],
            steps: [
              { reasoning: "2 place descriptions are given.", working: "2", marks: 1, markCode: "AO1" },
              { reasoning: "2 plus 1 plus 1 equals 4 descriptions.", working: "2 + 1 + 1 = 4", marks: 1, markCode: "AO2" },
              { reasoning: "4 minus 2 equals 2 non-place descriptions.", working: "4 - 2 = 2", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 4; (c) 2",
            commonErrors: ["Confusing description types."],
          },
        },
        {
          id: "cie-ol-el-descp-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describing a character's 'posture' means describing what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their voice" },
              { id: "b", text: "Their age" },
              { id: "c", text: "How they stand or hold themselves" },
              { id: "d", text: "Their name" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Posture", statement: "How a person holds their body." },
            ],
            steps: [
              { reasoning: "Posture = body position.", working: "body", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** How they stand or hold themselves",
            commonErrors: ["Choosing (c) — that's age."],
          },
        },
        {
          id: "cie-ol-el-descp-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to describe a place effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place description", statement: "Viewpoint, spatial organisation, sensory detail." },
            ],
            steps: [
              { reasoning: "Choose a viewpoint — first or third person.", working: "viewpoint", marks: 1, markCode: "AO2" },
              { reasoning: "Organise spatially — above/below/inside/outside.", working: "spatial", marks: 1, markCode: "AO2" },
              { reasoning: "Add sensory details for atmosphere.", working: "sensory", marks: 1, markCode: "AO2" },
              { reasoning: "Explanation given.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Viewpoint + spatial organisation + sensory details.",
            commonErrors: ["No viewpoint — description lacks coherence."],
          },
        },
        {
          id: "cie-ol-el-descp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to reveal a character's personality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Through their actions and dialogue" },
              { id: "b", text: "By listing their clothes" },
              { id: "c", text: "By giving their height" },
              { id: "d", text: "By stating 'they are kind'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character revelation", statement: "Actions and dialogue reveal personality." },
            ],
            steps: [
              { reasoning: "Actions/dialogue reveal character.", working: "actions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Through their actions and dialogue",
            commonErrors: ["Choosing (b) — telling, not showing."],
          },
        },
        {
          id: "cie-ol-el-descp-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A description uses 5 viewpoints; a student includes only 3 of them. (a) How many viewpoints are missing? (b) If the description is 150 words and should use 4 sensory details, how many words should each detail average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 37.5, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description planning", statement: "Include all viewpoints; allocate words." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 missing viewpoints.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "150 divided by 4 equals 37.5 words per detail.", working: "150 / 4 = 37.5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 37.5 words",
            commonErrors: ["Not allocating enough space per sensory detail."],
          },
        },
        {
          id: "cie-ol-el-descp-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply descriptive practice skills.",
          parts: [
            { label: "a", prompt: "Describe how to describe a place.", marks: 2 },
            { label: "b", prompt: "Describe how to describe a person.", marks: 2 },
            { label: "c", prompt: "Describe how to describe an object.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Descriptive practice", statement: "Place, person, object descriptions." },
            ],
            steps: [
              { part: "a", reasoning: "Viewpoint + spatial organisation + sensory details.", working: "place", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Appearance + character through actions/posture/expression.", working: "person", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Texture, colour, shape, function, history.", working: "object", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) viewpoint+sensory (b) appearance+character (c) texture+function",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Only appearance — need character too."],
          },
        },
        {
          id: "cie-ol-el-descp-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Spatial organisation' in place description means what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing in paragraphs" },
              { id: "b", text: "Arranging details by position" },
              { id: "c", text: "Using only adjectives" },
              { id: "d", text: "Adding dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Spatial organisation", statement: "Details arranged by position." },
            ],
            steps: [
              { reasoning: "Spatial = position-based arrangement.", working: "position", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Arranging details by position",
            commonErrors: ["Choosing (c) — paragraphs aren't spatial organisation."],
          },
        },
        {
          id: "cie-ol-el-descp-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A description uses 4 viewpoints; if the student adds 2 more, how many are there? (b) If the description is 200 words and 25% is sensory detail, how many words is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 50, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description checking", statement: "Count viewpoints; calculate sensory percentage." },
            ],
            steps: [
              { reasoning: "4 plus 2 equals 6 viewpoints.", working: "4 + 2 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "25% of 200 equals 50 words.", working: "0.25 x 200 = 50", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 50 words",
            commonErrors: ["Not calculating percentages correctly."],
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
              { id: "a", text: "Ending" },
              { id: "b", text: "Introduction" },
              { id: "c", text: "Opening scene" },
              { id: "d", text: "Highest point of tension" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-el-cw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'rising action' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Events building tension toward climax" },
              { id: "b", text: "A list of characters" },
              { id: "c", text: "The ending" },
              { id: "d", text: "The opening" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rising action", statement: "Events building tension toward climax." },
            ],
            steps: [
              { reasoning: "Rising action builds tension.", working: "tension", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Events building tension toward climax",
            commonErrors: ["Choosing (c) — that's the hook/opening."],
          },
        },
        {
          id: "cie-ol-el-cw-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A story has 5 plot points: hook, rising action (2 events), climax and resolution. (a) How many plot points are there? (b) How many are rising action events?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Plot counting", statement: "Count plot points by type." },
            ],
            steps: [
              { reasoning: "5 plot points are given.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "2 are rising action events.", working: "2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 2",
            commonErrors: ["Confusing plot points with scenes."],
          },
        },
        {
          id: "cie-ol-el-cw-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An effective story opening should do what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List all settings" },
              { id: "b", text: "Introduce all characters" },
              { id: "c", text: "Hook the reader immediately" },
              { id: "d", text: "Explain the ending" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Opening hook", statement: "Draw reader in immediately." },
            ],
            steps: [
              { reasoning: "Opening must hook reader.", working: "hook", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Hook the reader immediately",
            commonErrors: ["Slow opening — reader loses interest."],
          },
        },
        {
          id: "cie-ol-el-cw-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways to create an engaging opening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Opening techniques", statement: "Question, surprising fact, vivid description, dialogue." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Question, surprising fact, vivid description, dialogue (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-cw-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A story has 3 main characters, each with 2 development moments. (a) How many main characters are there? (b) How many development moments are there in total? (c) How many development moments per character on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 6 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Character counting", statement: "Count characters and development moments." },
            ],
            steps: [
              { reasoning: "3 main characters are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "3 times 2 equals 6 development moments.", working: "3 x 2 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "6 divided by 3 equals 2 per character.", working: "6 / 3 = 2", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 6; (c) 2",
            commonErrors: ["Forgetting to multiply characters by moments."],
          },
        },
        {
          id: "cie-ol-el-cw-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to show a character is brave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Show them facing danger despite fear" },
              { id: "b", text: "Describe their muscles" },
              { id: "c", text: "Say 'they are brave'" },
              { id: "d", text: "List their achievements" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Showing traits", statement: "Actions reveal character, not statements." },
            ],
            steps: [
              { reasoning: "Actions show bravery.", working: "actions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Show them facing danger despite fear",
            commonErrors: ["Choosing (b) — telling, not showing."],
          },
        },
        {
          id: "cie-ol-el-cw-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how dialogue advances a story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue function", statement: "Reveals character, advances plot, creates conflict." },
            ],
            steps: [
              { reasoning: "Dialogue reveals character traits.", working: "character", marks: 1, markCode: "AO2" },
              { reasoning: "Advances plot through exchanges.", working: "plot", marks: 1, markCode: "AO2" },
              { reasoning: "Creates conflict or tension.", working: "conflict", marks: 1, markCode: "AO2" },
              { reasoning: "Functions explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Dialogue reveals character, advances plot, creates conflict.",
            commonErrors: ["Dialogue that doesn't serve purpose."],
          },
        },
        {
          id: "cie-ol-el-cw-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the 'resolution' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opening scene" },
              { id: "b", text: "The highest tension" },
              { id: "c", text: "A flashback" },
              { id: "d", text: "How the conflict is resolved" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resolution", statement: "How conflict is resolved at the end." },
            ],
            steps: [
              { reasoning: "Resolution = conflict resolved.", working: "resolved", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** How the conflict is resolved",
            commonErrors: ["Choosing (b) — that's climax."],
          },
        },
        {
          id: "cie-ol-el-cw-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A story has 4 plot points and 3 character moments. (a) How many total story elements are there? (b) If the story should have 6 plot points and currently has 4, how many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story checking", statement: "Count elements; check completeness." },
            ],
            steps: [
              { reasoning: "4 plus 3 equals 7 story elements.", working: "4 + 3 = 7", marks: 1, markCode: "AO2" },
              { reasoning: "6 minus 4 equals 2 missing plot points.", working: "6 - 4 = 2", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 7; (b) 2",
            commonErrors: ["Not checking completeness."],
          },
        },
        {
          id: "cie-ol-el-cw-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply creative writing skills.",
          parts: [
            { label: "a", prompt: "Describe story structure.", marks: 2 },
            { label: "b", prompt: "How to create engaging opening?", marks: 2 },
            { label: "c", prompt: "How does dialogue advance story?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Creative writing", statement: "Structure, opening, dialogue." },
            ],
            steps: [
              { part: "a", reasoning: "Hook→rising→climax→resolution.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Complete.", working: "complete", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Question, fact, description, dialogue.", working: "opening", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Valid.", working: "valid", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Reveals character, advances plot, creates conflict.", working: "dialogue", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) hook (c) character+plot+conflict",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Flat characters — only described, not developed."],
          },
        },
        {
          id: "cie-ol-el-cw-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is pacing important in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It confuses readers" },
              { id: "b", text: "It is not important" },
              { id: "c", text: "It makes stories longer" },
              { id: "d", text: "It controls tension and reader engagement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pacing", statement: "Controls tension and engagement." },
            ],
            steps: [
              { reasoning: "Pacing controls tension.", working: "tension", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** It controls tension and reader engagement",
            commonErrors: ["Choosing (d) — pacing matters."],
          },
        },
        {
          id: "cie-ol-el-cw-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A story should have 5 plot points; a draft has 3. How many are missing? (b) If the story is 400 words and the opening should be 15% of it, how many words should the opening be?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 60, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story planning", statement: "Check plot completeness; allocate opening words." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 missing plot points.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "15% of 400 equals 60 words.", working: "0.15 x 400 = 60", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 60 words",
            commonErrors: ["Not allocating enough words to opening."],
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
              { id: "a", text: "Supporting detail" },
              { id: "b", text: "Question" },
              { id: "c", text: "Main argument" },
              { id: "d", text: "Conclusion" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cie-ol-el-arg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'thesis statement' in an argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A conclusion" },
              { id: "b", text: "Main claim the argument supports" },
              { id: "c", text: "A counterargument" },
              { id: "d", text: "An example" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis statement", statement: "Main claim the argument supports." },
            ],
            steps: [
              { reasoning: "Thesis = main claim.", working: "claim", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main claim the argument supports",
            commonErrors: ["Choosing (c) — that's conclusion."],
          },
        },
        {
          id: "cie-ol-el-arg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An argument has 3 supporting reasons and 1 counterargument. (a) How many supporting reasons are there? (b) How many main elements does the argument have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument counting", statement: "Count reasons and counterarguments." },
            ],
            steps: [
              { reasoning: "3 supporting reasons are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "3 reasons plus 1 counterargument equals 4 elements.", working: "3 + 1 = 4", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 3; (b) 4",
            commonErrors: ["Forgetting counterargument in total."],
          },
        },
        {
          id: "cie-ol-el-arg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'counterargument' in persuasive writing is what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your main claim" },
              { id: "b", text: "A statistic" },
              { id: "c", text: "Opposing viewpoint addressed" },
              { id: "d", text: "A personal story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Counterargument", statement: "Opposing viewpoint addressed." },
            ],
            steps: [
              { reasoning: "Counterargument = opposing view.", working: "opposing", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Opposing viewpoint addressed",
            commonErrors: ["Choosing (b) — that's thesis."],
          },
        },
        {
          id: "cie-ol-el-arg-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of evidence used in arguments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence types", statement: "Statistics, expert quotes, examples, case studies." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Statistics, expert quotes, examples, case studies (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-arg-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An argument uses 4 statistics, 3 examples and 2 expert quotes. (a) How many statistics are used? (b) How many pieces of evidence are used in total? (c) How many are non-statistical?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 9 },
              { label: "c", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence counting", statement: "Count each evidence type." },
            ],
            steps: [
              { reasoning: "4 statistics are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "4 plus 3 plus 2 equals 9 pieces of evidence.", working: "4 + 3 + 2 = 9", marks: 1, markCode: "AO2" },
              { reasoning: "9 minus 4 equals 5 non-statistical pieces.", working: "9 - 4 = 5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 9; (c) 5",
            commonErrors: ["Forgetting expert quotes in total."],
          },
        },
        {
          id: "cie-ol-el-arg-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest form of evidence in an argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rumour" },
              { id: "b", text: "Personal opinion" },
              { id: "c", text: "Verifiable statistics from reliable sources" },
              { id: "d", text: "A guess" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence quality", statement: "Verifiable statistics strongest." },
            ],
            steps: [
              { reasoning: "Verifiable statistics are strongest.", working: "statistics", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Verifiable statistics from reliable sources",
            commonErrors: ["Choosing (b) — opinion isn't evidence."],
          },
        },
        {
          id: "cie-ol-el-arg-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why addressing counterarguments strengthens an argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterargument", statement: "Shows balance, anticipates objections, strengthens credibility." },
            ],
            steps: [
              { reasoning: "Shows the writer has considered opposing views.", working: "considered", marks: 1, markCode: "AO2" },
              { reasoning: "Anticipates and refutes objections.", working: "refutes", marks: 1, markCode: "AO2" },
              { reasoning: "Builds credibility and balance.", working: "credibility", marks: 1, markCode: "AO2" },
              { reasoning: "Reasons explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Shows balance, anticipates objections, strengthens credibility.",
            commonErrors: ["Ignoring counterarguments — weakens argument."],
          },
        },
        {
          id: "cie-ol-el-arg-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of the conclusion in an argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduce new evidence" },
              { id: "b", text: "Start a new argument" },
              { id: "c", text: "Ask questions" },
              { id: "d", text: "Restate and reinforce the main claim" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conclusion", statement: "Restate and reinforce main claim." },
            ],
            steps: [
              { reasoning: "Conclusion reinforces claim.", working: "reinforce", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Restate and reinforce the main claim",
            commonErrors: ["Choosing (b) — no new evidence in conclusion."],
          },
        },
        {
          id: "cie-ol-el-arg-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An argument should have 3 supporting reasons; a draft has only 2. (a) How many reasons are missing? (b) If the argument uses 5 pieces of evidence and each reason needs 2, how many reasons can be fully supported?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument checking", statement: "Check reason count; match evidence to reasons." },
            ],
            steps: [
              { reasoning: "3 minus 2 equals 1 missing reason.", working: "3 - 2 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "5 divided by 2 equals 2.5, so 2 fully supported reasons.", working: "5 / 2 = 2.5 -> 2", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 2",
            commonErrors: ["Not matching evidence to reasons."],
          },
        },
        {
          id: "cie-ol-el-arg-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply argumentative writing skills.",
          parts: [
            { label: "a", prompt: "What is a thesis statement?", marks: 2 },
            { label: "b", prompt: "Name two types of evidence.", marks: 2 },
            { label: "c", prompt: "Why address counterarguments?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argumentative writing", statement: "Thesis, evidence, counterarguments." },
            ],
            steps: [
              { part: "a", reasoning: "Main claim the argument supports.", working: "thesis", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Statistics, expert quotes, examples, case studies — any two.", working: "evidence", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Shows balance, anticipates objections, strengthens credibility.", working: "counterargument", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) main claim (b) two evidence types (c) balance+credibility",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Weak arguments — no evidence or counterarguments."],
          },
        },
        {
          id: "cie-ol-el-arg-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which logical fallacy weakens an argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using statistics" },
              { id: "b", text: "Ad hominem — attacking the person" },
              { id: "c", text: "Giving examples" },
              { id: "d", text: "Citing experts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logical fallacy", statement: "Ad hominem attacks person not argument." },
            ],
            steps: [
              { reasoning: "Ad hominem is a fallacy.", working: "ad hominem", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Ad hominem — attacking the person",
            commonErrors: ["Choosing (b) — statistics strengthen."],
          },
        },
        {
          id: "cie-ol-el-arg-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An argument needs 4 supporting reasons; a draft has 3. How many are missing? (b) If the argument is 600 words and should have 3 evidence pieces per reason, how many evidence words should each piece average if equally distributed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 50, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument planning", statement: "Check reason count; allocate evidence words." },
            ],
            steps: [
              { reasoning: "4 minus 3 equals 1 missing reason.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "600 divided by 12 evidence pieces equals 50 words each.", working: "600 / 12 = 50", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 50 words",
            commonErrors: ["Not distributing evidence evenly."],
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
