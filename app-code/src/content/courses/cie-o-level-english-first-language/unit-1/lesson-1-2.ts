import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cie-ol-fl-lesson-1-2",
  code: "1-2",
  title: "Setting, atmosphere and language",
  goal: "I CAN analyse how setting and language create atmosphere.",
  standards: ["1119 Reading: prose analysis"],
  vocabulary: [
    { term: "Atmosphere", definition: "Mood or feeling created by a text." },
    { term: "Imagery", definition: "Language appealing to the senses." },
    { term: "Symbolism", definition: "Objects representing deeper ideas." },
    { term: "Connotation", definition: "Associations beyond literal meaning." },
    { term: "Pathetic fallacy", definition: "Weather/mood mirroring emotions." },
    { term: "Diction", definition: "Author's choice of words." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-setting-atmosphere",
      title: "Setting and atmosphere",
      skill: "Analyse how place and description create mood.",
      lesson: {
        sections: [
          {
            heading: "Setting components",
            body: "Physical place, time period, social environment, weather — all contribute to meaning. A castle vs a beach creates different possibilities.",
          },
          {
            heading: "Creating atmosphere",
            body: "Writers use sensory description, weather, lighting, character reactions to build mood — tense, peaceful, foreboding.",
          },
          {
            heading: "Pathetic fallacy",
            body: "Nature mirrors human emotion — storm during conflict, sunshine during joy. Not always present but a common technique.",
          },
        ],
        keyFormulas: [
          { name: "Atmosphere", statement: "Setting+sensory language+weather=atmosphere/mood." },
        ],
        workedExample: {
          problem: "'The wind howled through the broken windows.' Effect?",
          solution: "Pathetic fallacy — wind mirrors inner turmoil; 'howled', 'broken' create foreboding atmosphere.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-sa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'pathetic fallacy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nature mirroring emotion" },
              { id: "b", text: "Character's sadness" },
              { id: "c", text: "Bad weather description" },
              { id: "d", text: "Plot device" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pathetic fallacy", statement: "Weather/nature reflects characters' emotions." },
            ],
            steps: [
              { reasoning: "Pathetic fallacy = nature mirrors emotion.", working: "mirror", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Nature mirroring emotion",
            commonErrors: ["Choosing (c) — it's a technique, not just weather."],
          },
        },
        {
          id: "cie-ol-fl-sa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does sensory description create atmosphere?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sensory description", statement: "Sight/sound/touch/taste/smell immerse reader in mood." },
            ],
            steps: [
              { reasoning: "Appeals to senses — immersive.", working: "senses", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Appeals to senses — immerses reader in the mood.",
            commonErrors: ["Only visual — use all senses."],
          },
        },
        {
          id: "cie-ol-fl-sa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does setting contribute to theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Setting-theme link", statement: "Place embodies ideas — restrictive society, freedom of nature." },
            ],
            steps: [
              { reasoning: "Setting can symbolise ideas — prison=oppression.", working: "symbolise", marks: 1, markCode: "AO2" },
              { reasoning: "Social setting reflects societal values.", working: "social", marks: 1, markCode: "AO2" },
              { reasoning: "Physical constraints mirror emotional ones.", working: "mirror", marks: 1, markCode: "AO2" },
              { reasoning: "Link explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Setting symbolises ideas — place embodies theme.",
            commonErrors: ["Treating setting as decoration only."],
          },
        },
        {
          id: "cie-ol-fl-sa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Setting and atmosphere analysis.",
          parts: [
            { label: "a", prompt: "Define pathetic fallacy.", marks: 1 },
            { label: "b", prompt: "How sensory description works?", marks: 2 },
            { label: "c", prompt: "Setting and theme link?", marks: 3 },
            { label: "d", prompt: "Name atmosphere types.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Atmosphere", statement: "Pathetic fallacy, sensory, setting-theme, atmosphere types." },
            ],
            steps: [
              { part: "a", reasoning: "Nature mirrors emotion.", working: "fallacy", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Appeals to senses — immersive mood.", working: "sensory", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Setting symbolises ideas; social setting reflects values; constraints mirror emotions.", working: "link", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple links.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Tense, peaceful, foreboding, mysterious, joyful — valid types.", working: "types", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) nature=emotion (b) senses+immersive (c) symbolises theme (d) tense/peaceful/foreboding",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Links clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Types listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Describing setting without analysing effect."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-imagery-symbolism",
      title: "Imagery and symbolism",
      skill: "Analyse sensory language and symbolic meaning.",
      lesson: {
        sections: [
          {
            heading: "Types of imagery",
            body: "Visual (sight), auditory (sound), tactile (touch), olfactory (smell), gustatory (taste), kinaesthetic (movement).",
          },
          {
            heading: "Symbolism",
            body: "Objects/places/actions represent ideas — light=hope, darkness=evil, journey=self-discovery. Context determines meaning.",
          },
          {
            heading: "Connotation",
            body: "Words carry associations — 'slim' vs 'skinny', 'frugal' vs 'stingy'. Choice shapes reader's response.",
          },
        ],
        keyFormulas: [
          { name: "Imagery", statement: "Sensory appeals+symbols+connotations=create layered meaning." },
        ],
        workedExample: {
          problem: "A recurring image of caged birds in a novel.",
          solution: "Symbolism — birds represent characters trapped by circumstances; cage=oppressive society.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-is-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'connotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Associations beyond literal meaning" },
              { id: "b", text: "Dictionary definition" },
              { id: "c", text: "Word spelling" },
              { id: "d", text: "Grammar rule" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Connotation", statement: "Associations/emotions words carry beyond literal meaning." },
            ],
            steps: [
              { reasoning: "Connotation = associations.", working: "associations", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Associations beyond literal meaning",
            commonErrors: ["Choosing (b) — that's denotation."],
          },
        },
        {
          id: "cie-ol-fl-is-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three types of imagery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imagery types", statement: "Visual, auditory, tactile, olfactory, gustatory, kinaesthetic." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Visual, auditory, tactile, olfactory, gustatory, kinaesthetic (any three).",
            commonErrors: ["Only visual — include other senses."],
          },
        },
        {
          id: "cie-ol-fl-is-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does symbolism deepen meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Symbolism", statement: "Objects represent ideas — adds layers beyond literal." },
            ],
            steps: [
              { reasoning: "Objects carry double meaning — literal + symbolic.", working: "double", marks: 1, markCode: "AO2" },
              { reasoning: "Recurring symbols create patterns/themes.", working: "patterns", marks: 1, markCode: "AO2" },
              { reasoning: "Context determines symbolic meaning.", working: "context", marks: 1, markCode: "AO2" },
              { reasoning: "Explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Double meaning+patterns+context=layered symbolic meaning.",
            commonErrors: ["Guessing symbols without textual evidence."],
          },
        },
        {
          id: "cie-ol-fl-is-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Imagery and symbolism.",
          parts: [
            { label: "a", prompt: "Define connotation.", marks: 1 },
            { label: "b", prompt: "Name imagery types.", marks: 3 },
            { label: "c", prompt: "How symbolism deepens meaning?", marks: 2 },
            { label: "d", prompt: "Why word choice matters?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Imagery", statement: "Connotation, imagery types, symbolism, diction." },
            ],
            steps: [
              { part: "a", reasoning: "Associations beyond literal meaning.", working: "connotation", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Visual, auditory, tactile, olfactory, gustatory, kinaesthetic.", working: "types", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Double meaning, patterns, context.", working: "symbolism", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Diction shapes tone, attitude, precision — every word chosen deliberately.", working: "diction", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) associations (b) sensory types (c) double meaning+patterns (d) tone+attitude+precision",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ types.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Identifying imagery without analysing effect."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-language-analysis",
      title: "Language analysis in prose",
      skill: "Analyse diction, syntax and figurative language.",
      lesson: {
        sections: [
          {
            heading: "Diction",
            body: "Formal/informal, simple/complex, concrete/abstract — word choice reveals character, tone, purpose.",
          },
          {
            heading: "Syntax",
            body: "Sentence structure — short sentences create urgency; long sentences create flow or complexity. Fragments for effect.",
          },
          {
            heading: "Figurative language",
            body: "Simile, metaphor, personification, hyperbole, alliteration — create vivid effects and emphasise ideas.",
          },
        ],
        keyFormulas: [
          { name: "Language analysis", statement: "Diction+syntax+figurative language=create style and effect." },
        ],
        workedExample: {
          problem: "'The house swallowed them whole.' Technique?",
          solution: "Personification + metaphor — house given human action; emphasises overwhelming feeling.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-la-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'syntax'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence structure" },
              { id: "b", text: "Word choice" },
              { id: "c", text: "Rhythm" },
              { id: "d", text: "Punctuation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Syntax", statement: "Sentence structure and arrangement." },
            ],
            steps: [
              { reasoning: "Syntax = sentence structure.", working: "structure", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sentence structure",
            commonErrors: ["Choosing (b) — that's diction."],
          },
        },
        {
          id: "cie-ol-fl-la-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does sentence length affect prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence length", statement: "Short=urgency/emphasis; long=flow/complexity." },
            ],
            steps: [
              { reasoning: "Short creates urgency; long creates flow.", working: "effects", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Short=urgency/emphasis; long=flow/complexity.",
            commonErrors: ["Ignoring length variation."],
          },
        },
        {
          id: "cie-ol-fl-la-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does diction reveal character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diction-character", statement: "Word choice shows education, attitude, emotional state." },
            ],
            steps: [
              { reasoning: "Complex vocabulary suggests education.", working: "education", marks: 1, markCode: "AO2" },
              { reasoning: "Slang/informal suggests casual attitude.", working: "attitude", marks: 1, markCode: "AO2" },
              { reasoning: "Harsh words reveal anger/frustration.", working: "emotion", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice reveals education, attitude, emotion.",
            commonErrors: ["Not linking words to character traits."],
          },
        },
        {
          id: "cie-ol-fl-la-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Language analysis.",
          parts: [
            { label: "a", prompt: "Define syntax.", marks: 1 },
            { label: "b", prompt: "Sentence length effects?", marks: 2 },
            { label: "c", prompt: "How diction reveals character?", marks: 3 },
            { label: "d", prompt: "Name figurative devices.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Language", statement: "Syntax, sentence length, diction, figurative devices." },
            ],
            steps: [
              { part: "a", reasoning: "Sentence structure.", working: "syntax", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Short=urgency; long=flow.", working: "length", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Education, attitude, emotion revealed.", working: "diction", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Simile, metaphor, personification, hyperbole, alliteration.", working: "devices", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) sentence structure (b) short/long effects (c) education/attitude/emotion (d) figurative devices",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple aspects.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Devices listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Identifying techniques without explaining effect."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-language-notes-1",
      title: "Language analysis — revision notes",
      summary: "Atmosphere, imagery, symbolism, diction, syntax.",
      sections: [
        {
          heading: "Language",
          body: "Atmosphere via sensory description + pathetic fallacy. Imagery: visual/auditory/tactile/etc. Symbolism: objects=ideas. Diction reveals character; syntax controls pace.",
        },
      ],
    },
  ],
};
