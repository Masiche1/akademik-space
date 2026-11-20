import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cie-ol-el-lesson-4-1",
  code: "4-1",
  title: "Register and tone analysis",
  goal: "I CAN identify and analyse register and tone in texts.",
  standards: ["1123 Reading: language analysis"],
  vocabulary: [
    { term: "Register", definition: "Level of formality — formal, neutral, informal." },
    { term: "Tone", definition: "Writer's attitude — angry, joyful, sarcastic, serious." },
    { term: "Formal register", definition: "Standard English, complex sentences, no contractions." },
    { term: "Informal register", definition: "Casual language, contractions, slang, colloquialisms." },
    { term: "Colloquialism", definition: "Informal word/phrase — 'gonna', 'wanna'." },
    { term: "Slang", definition: "Very informal language — may be dated or regional." },
  ],
  concepts: [
    {
      id: "cie-ol-el-register",
      title: "Register analysis",
      skill: "Identify formal, neutral and informal register and explain effects.",
      lesson: {
        sections: [
          {
            heading: "Formal register",
            body: "Standard English, complex sentence structures, precise vocabulary, no contractions, passive voice common. Used in official documents, academic writing, business.",
          },
          {
            heading: "Informal register",
            body: "Contractions (don't, can't), colloquialisms, slang, simple sentences, first/second person, personal anecdotes. Used in casual conversation, blogs, social media.",
          },
          {
            heading: "Neutral register",
            body: "Balanced between formal and informal — clear, objective, accessible. Used in news reports, textbooks, general non-fiction.",
          },
        ],
        keyFormulas: [
          { name: "Register", statement: "Formal=standard/complex/no contractions; informal=casual/contractions/slang; neutral=balanced." },
        ],
        workedExample: {
          problem: "Identify register: 'The government has implemented new policies.' vs 'The govt's brought in new rules.'",
          solution: "First is formal (standard English, no contractions); second is informal (abbreviation, colloquial 'brought in').",
        },
      },
      questions: [
        {
          id: "cie-ol-el-reg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'formal register'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Standard English, complex sentences" },
              { id: "b", text: "Casual language with slang" },
              { id: "c", text: "Only questions" },
              { id: "d", text: "Only commands" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formal register", statement: "Standard English, complex sentences, no contractions." },
            ],
            steps: [
              { reasoning: "Formal = standard, complex.", working: "standard", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Standard English, complex sentences",
            commonErrors: ["Choosing (b) — that's informal."],
          },
        },
        {
          id: "cie-ol-el-reg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features of informal register.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal features", statement: "Contractions, colloquialisms, slang, simple sentences." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "features", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Contractions, colloquialisms, slang, simple sentences (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-reg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does register affect reader perception?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register effect", statement: "Formal creates distance/authority; informal creates intimacy/casualness." },
            ],
            steps: [
              { reasoning: "Formal register creates authority and distance.", working: "formal", marks: 1, markCode: "AO2" },
              { reasoning: "Informal creates intimacy and approachability.", working: "informal", marks: 1, markCode: "AO2" },
              { reasoning: "Register signals purpose and audience.", working: "signals", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal=authority/distance; informal=intimacy/casual; register signals audience.",
            commonErrors: ["Thinking register doesn't matter — it shapes perception."],
          },
        },
        {
          id: "cie-ol-el-reg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse register in texts.",
          parts: [
            { label: "a", prompt: "Define formal register.", marks: 2 },
            { label: "b", prompt: "Define informal register.", marks: 2 },
            { label: "c", prompt: "Name neutral register features.", marks: 2 },
            { label: "d", prompt: "How does register affect perception?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register analysis", statement: "Formal/informal/neutral; effects on reader." },
            ],
            steps: [
              { part: "a", reasoning: "Standard English, complex sentences, no contractions.", working: "formal", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Contractions, colloquialisms, slang, simple sentences.", working: "informal", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Balanced, clear, objective, accessible.", working: "neutral", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal=authority/distance; informal=intimacy; register signals audience.", working: "effect", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) formal features (b) informal features (c) neutral features (d) effects on reader",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple effects.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Confusing register with tone — register is formality level."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-tone",
      title: "Tone analysis",
      skill: "Identify and analyse tone in texts.",
      lesson: {
        sections: [
          {
            heading: "Tone types",
            body: "Serious, humorous, sarcastic, angry, joyful, sad, formal, informal, authoritative, sympathetic.",
          },
          {
            heading: "Identifying tone",
            body: "Look at word choice (connotations), punctuation (! ? …), imagery, sentence structure, direct address.",
          },
          {
            heading: "Tone vs mood",
            body: "Tone = writer's attitude; mood = feeling created in reader. Related but different.",
          },
        ],
        keyFormulas: [
          { name: "Tone", statement: "Tone=writer's attitude; identify via word choice, punctuation, imagery; differs from mood." },
        ],
        workedExample: {
          problem: "Identify tone: 'Oh great, another meeting. Just what I needed.'",
          solution: "Sarcastic — 'Oh great' and 'just what I needed' convey irony/annoyance, not genuine pleasure.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-tone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'tone' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writer's attitude" },
              { id: "b", text: "Reader's feeling" },
              { id: "c", text: "Sentence length" },
              { id: "d", text: "Word count" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "Writer's attitude towards subject." },
            ],
            steps: [
              { reasoning: "Tone = writer's attitude.", working: "attitude", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Writer's attitude",
            commonErrors: ["Choosing (b) — that's mood."],
          },
        },
        {
          id: "cie-ol-el-tone-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways to identify tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone identification", statement: "Word choice, punctuation, imagery, sentence structure." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "methods", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice, punctuation, imagery, sentence structure (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-tone-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between tone and mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone vs mood", statement: "Tone=writer's attitude; mood=feeling created in reader." },
            ],
            steps: [
              { reasoning: "Tone is writer's attitude towards subject.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Mood is feeling created in reader.", working: "mood", marks: 1, markCode: "AO2" },
              { reasoning: "Related but distinct — tone causes mood.", working: "distinct", marks: 1, markCode: "AO2" },
              { reasoning: "Difference clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tone=writer's attitude; mood=reader's feeling — related but distinct.",
            commonErrors: ["Confusing the two — key distinction."],
          },
        },
        {
          id: "cie-ol-el-tone-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse tone in texts.",
          parts: [
            { label: "a", prompt: "Define tone.", marks: 1 },
            { label: "b", prompt: "Name tone types.", marks: 3 },
            { label: "c", prompt: "How to identify tone?", marks: 2 },
            { label: "d", prompt: "Tone vs mood.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone analysis", statement: "Definition, types, identification, tone vs mood." },
            ],
            steps: [
              { part: "a", reasoning: "Writer's attitude towards subject.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Serious, humorous, sarcastic, angry, joyful, sad, formal, informal.", working: "types", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word choice, punctuation, imagery, sentence structure.", working: "identify", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple methods.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Tone=writer's attitude; mood=reader's feeling.", working: "difference", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) writer's attitude (b) tone types (c) word choice/punctuation/imagery (d) tone vs mood",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple types.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple methods.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear distinction.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Confusing tone and mood — key distinction."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-style",
      title: "Style and voice analysis",
      skill: "Analyse writer's style and narrative voice.",
      lesson: {
        sections: [
          {
            heading: "Style",
            body: "Distinctive features — sentence length, word choice, imagery, structure. Author's unique 'fingerprint'.",
          },
          {
            heading: "Narrative voice",
            body: "Who speaks? First person ('I'), second ('you'), third ('he/she'). Voice reveals perspective and reliability.",
          },
          {
            heading: "Authorial voice vs character voice",
            body: "Narrator may differ from characters — unreliable narrator creates tension between what is said and what is meant.",
          },
        ],
        keyFormulas: [
          { name: "Style/voice", statement: "Style=distinctive features; voice=narrative perspective; unreliable narrator adds complexity." },
        ],
        workedExample: {
          problem: "How to analyse writer's style?",
          solution: "Look for consistent patterns — short punchy sentences, complex vocabulary, recurring imagery — identify the 'fingerprint'.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'narrative voice'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who is telling the story" },
              { id: "b", text: "Writer's tone" },
              { id: "c", text: "Sentence length" },
              { id: "d", text: "Word choice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative voice", statement: "Who is telling the story — perspective." },
            ],
            steps: [
              { reasoning: "Voice = narrator/perspective.", working: "narrator", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Who is telling the story",
            commonErrors: ["Choosing (b) — that's tone."],
          },
        },
        {
          id: "cie-ol-el-style-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two elements of writer's style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Style elements", statement: "Sentence length, word choice, imagery, structure." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sentence length, word choice, imagery, structure (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-style-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is an unreliable narrator?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unreliable narrator", statement: "Narrator whose account may be biased or false — reader must question." },
            ],
            steps: [
              { reasoning: "Narrator's account may be biased or distorted.", working: "biased", marks: 1, markCode: "AO2" },
              { reasoning: "Reader must question what is told vs what is true.", working: "question", marks: 1, markCode: "AO2" },
              { reasoning: "Creates tension and complexity — deeper meaning emerges.", working: "complexity", marks: 1, markCode: "AO2" },
              { reasoning: "Concept explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Narrator whose account may be biased — reader must question truth.",
            commonErrors: ["Assuming narrator is truthful — may be unreliable."],
          },
        },
        {
          id: "cie-ol-el-style-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse style and voice.",
          parts: [
            { label: "a", prompt: "Define narrative voice.", marks: 1 },
            { label: "b", prompt: "Name style elements.", marks: 3 },
            { label: "c", prompt: "What is unreliable narrator?", marks: 2 },
            { label: "d", prompt: "How to analyse writer's style?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Style/voice", statement: "Voice definition, style elements, unreliable narrator, analysis." },
            ],
            steps: [
              { part: "a", reasoning: "Who is telling the story — perspective.", working: "voice", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Sentence length, word choice, imagery, structure.", working: "elements", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Narrator whose account may be biased — reader questions truth.", working: "unreliable", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Look for consistent patterns — sentence length, vocabulary, imagery, structure.", working: "patterns", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple patterns.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) narrator perspective (b) style elements (c) biased narrator (d) pattern recognition",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple elements.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Pattern recognition.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Assuming narrator is reliable — may be biased."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-word-analysis",
      title: "Word-level analysis",
      skill: "Analyse word choice, connotation and imagery at word level.",
      lesson: {
        sections: [
          {
            heading: "Word choice",
            body: "Precise vocabulary — 'walked' vs 'strode' vs 'trudged'. Each word carries connotation and precision.",
          },
          {
            heading: "Connotation vs denotation",
            body: "Denotation = literal meaning; connotation = associated feelings. 'Home' denotes residence, connotes warmth/security.",
          },
          {
            heading: "Imagery",
            body: "Words creating mental pictures — visual, auditory, olfactory, gustatory, tactile. Appeals to senses.",
          },
        ],
        keyFormulas: [
          { name: "Word analysis", statement: "Word choice=precision+connotation; imagery appeals to senses." },
        ],
        workedExample: {
          problem: "Analyse: 'The icy wind bit at her face.'",
          solution: "'Icy' connotes cold/sharp; 'bit' personifies wind as animal — creates threatening atmosphere.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-wa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'denotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literal meaning" },
              { id: "b", text: "Associated feelings" },
              { id: "c", text: "Spelling" },
              { id: "d", text: "Pronunciation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denotation", statement: "Literal meaning of word." },
            ],
            steps: [
              { reasoning: "Denotation = literal.", working: "literal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Literal meaning",
            commonErrors: ["Choosing (b) — that's connotation."],
          },
        },
        {
          id: "cie-ol-el-wa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of imagery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imagery types", statement: "Visual, auditory, olfactory, gustatory, tactile." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Visual, auditory, olfactory, gustatory, tactile (any two).",
            commonErrors: ["Only visual — includes all senses."],
          },
        },
        {
          id: "cie-ol-el-wa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how word choice affects meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word choice", statement: "Precise words convey exact meaning; connotation affects tone." },
            ],
            steps: [
              { reasoning: "'Walked' vs 'strode' vs 'trudged' — different connotations.", working: "connotation", marks: 1, markCode: "AO2" },
              { reasoning: "Precise words convey exact meaning.", working: "precision", marks: 1, markCode: "AO2" },
              { reasoning: "Word choice affects tone and reader perception.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Precise words convey meaning; connotation affects tone/perception.",
            commonErrors: ["Thinking all synonyms are equal — connotation differs."],
          },
        },
        {
          id: "cie-ol-el-wa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse word-level techniques.",
          parts: [
            { label: "a", prompt: "Define denotation.", marks: 1 },
            { label: "b", prompt: "Define connotation.", marks: 2 },
            { label: "c", prompt: "Name imagery types.", marks: 3 },
            { label: "d", prompt: "How word choice affects meaning?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word analysis", statement: "Denotation, connotation, imagery, word choice effects." },
            ],
            steps: [
              { part: "a", reasoning: "Literal meaning of word.", working: "denotation", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Associated feelings beyond literal meaning.", working: "connotation", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Visual, auditory, olfactory, gustatory, tactile.", working: "imagery", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Precise words convey meaning; connotation affects tone.", working: "effect", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Examples help.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) literal (b) associated feelings (c) imagery types (d) precision+connotation",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple types.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Effect explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Confusing denotation and connotation."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit4-notes",
      title: "Unit 4 — revision notes",
      summary: "Register, tone, style, voice, word-level analysis.",
      sections: [
        {
          heading: "Language analysis",
          body: "Register: formal/informal/neutral. Tone: writer's attitude vs mood=reader's feeling. Style: distinctive features. Voice: narrator perspective. Word analysis: denotation, connotation, imagery.",
        },
      ],
    },
  ],
};
