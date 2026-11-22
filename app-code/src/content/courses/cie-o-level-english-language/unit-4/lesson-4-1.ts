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
              { id: "a", text: "Casual language with slang" },
              { id: "b", text: "Only commands" },
              { id: "c", text: "Standard English, complex sentences" },
              { id: "d", text: "Only questions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formal register", statement: "Standard English, complex sentences, no contractions." },
            ],
            steps: [
              { reasoning: "Formal = standard, complex.", working: "standard", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Standard English, complex sentences",
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
        {
          id: "cie-ol-el-reg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'register' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Level of formality in language" },
              { id: "b", text: "A sentence structure" },
              { id: "c", text: "A type of punctuation" },
              { id: "d", text: "A writing format" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register", statement: "Level of formality in language." },
            ],
            steps: [
              { reasoning: "Register = formality level.", working: "formality", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Level of formality in language",
            commonErrors: ["Choosing (c) — that's grammar."],
          },
        },
        {
          id: "cie-ol-el-reg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A text uses 3 formal phrases and 2 informal phrases. (a) How many formal phrases are there? (b) How many informal phrases are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register counting", statement: "Count formal vs informal phrases." },
            ],
            steps: [
              { reasoning: "3 formal phrases are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "2 informal phrases are given.", working: "2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 3; (b) 2",
            commonErrors: ["Confusing formal and informal."],
          },
        },
        {
          id: "cie-ol-el-reg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is most formal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I need" },
              { id: "b", text: "I would be grateful" },
              { id: "c", text: "Give me" },
              { id: "d", text: "I want" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal language", statement: "Grateful/polite = formal." },
            ],
            steps: [
              { reasoning: "'Would be grateful' is formal.", working: "grateful", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** I would be grateful",
            commonErrors: ["Choosing (d) — too direct/informal."],
          },
        },
        {
          id: "cie-ol-el-reg-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features of formal register.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal features", statement: "Polite language, no contractions, full sentences." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "features", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Polite language, no contractions, full sentences (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-reg-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A formal letter uses 5 formal phrases; an informal letter uses 4 informal phrases. (a) How many formal phrases are in the formal letter? (b) How many informal phrases are in the informal letter? (c) How many total phrases are used across both letters?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 4 },
              { label: "c", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register counting", statement: "Count phrases by register." },
            ],
            steps: [
              { reasoning: "5 formal phrases are given.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "4 informal phrases are given.", working: "4", marks: 1, markCode: "AO2" },
              { reasoning: "5 plus 4 equals 9 total phrases.", working: "5 + 4 = 9", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5; (b) 4; (c) 9",
            commonErrors: ["Forgetting to add both letters."],
          },
        },
        {
          id: "cie-ol-el-reg-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of informal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gonna" },
              { id: "b", text: "Going to" },
              { id: "c", text: "I am writing to" },
              { id: "d", text: "Would like to" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informal register", statement: "Contractions and casual language." },
            ],
            steps: [
              { reasoning: "'Gonna' is informal.", working: "gonna", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Gonna",
            commonErrors: ["Choosing (b) — that's formal."],
          },
        },
        {
          id: "cie-ol-el-reg-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how register affects reader perception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register effect", statement: "Formal=professional; informal=friendly; mismatch confuses." },
            ],
            steps: [
              { reasoning: "Formal register creates professional impression.", working: "professional", marks: 1, markCode: "AO2" },
              { reasoning: "Informal creates friendly/casual impression.", working: "friendly", marks: 1, markCode: "AO2" },
              { reasoning: "Mismatched register confuses or offends reader.", working: "mismatch", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal=professional; informal=friendly; mismatch confuses.",
            commonErrors: ["Not matching register to audience."],
          },
        },
        {
          id: "cie-ol-el-reg-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which register is appropriate for a business email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal" },
              { id: "b", text: "Casual" },
              { id: "c", text: "Formal" },
              { id: "d", text: "Slang" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Business register", statement: "Business = formal." },
            ],
            steps: [
              { reasoning: "Business email = formal.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Formal",
            commonErrors: ["Choosing (b) — too casual."],
          },
        },
        {
          id: "cie-ol-el-reg-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A text uses 6 formal phrases and 4 informal phrases. What is the dominant register? (b) If a student writes 100 words and 20% are formal phrases, how many formal phrases are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register analysis", statement: "Identify dominant register; calculate percentages." },
            ],
            steps: [
              { reasoning: "6 formal vs 4 informal — formal dominates.", working: "formal", marks: 1, markCode: "AO2" },
              { reasoning: "20% of 100 equals 20 formal phrases.", working: "0.2 x 100 = 20", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) Formal (6); (b) 20",
            commonErrors: ["Not identifying dominant register."],
          },
        },
        {
          id: "cie-ol-el-reg-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply register analysis skills.",
          parts: [
            { label: "a", prompt: "Define register.", marks: 2 },
            { label: "b", prompt: "Name formal features.", marks: 2 },
            { label: "c", prompt: "How to choose appropriate register?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register", statement: "Definition, features, choice." },
            ],
            steps: [
              { part: "a", reasoning: "Level of formality in language.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Polite language, no contractions, full sentences.", working: "features", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple valid.", working: "multiple", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Match audience, purpose, formality needed.", working: "choice", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) formality level (b) polite+no contractions (c) audience+purpose",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Wrong register for the audience."],
          },
        },
        {
          id: "cie-ol-el-reg-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase is most informal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am writing to" },
              { id: "b", text: "Would like to" },
              { id: "c", text: "I would be grateful" },
              { id: "d", text: "Wanna" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Informal language", statement: "Wanna = informal." },
            ],
            steps: [
              { reasoning: "'Wanna' is informal.", working: "wanna", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Wanna",
            commonErrors: ["Choosing (b) — formal."],
          },
        },
        {
          id: "cie-ol-el-reg-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A text has 8 formal and 2 informal phrases. How many total phrases are there? (b) If 25% of 80 words are formal, how many formal words are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 20, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register analysis", statement: "Count phrases; calculate percentages." },
            ],
            steps: [
              { reasoning: "8 plus 2 equals 10 total phrases.", working: "8 + 2 = 10", marks: 1, markCode: "AO2" },
              { reasoning: "25% of 80 equals 20 formal words.", working: "0.25 x 80 = 20", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 10; (b) 20 words",
            commonErrors: ["Not calculating percentages correctly."],
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
              { id: "a", text: "Reader's feeling" },
              { id: "b", text: "Writer's attitude" },
              { id: "c", text: "Word count" },
              { id: "d", text: "Sentence length" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "Writer's attitude towards subject." },
            ],
            steps: [
              { reasoning: "Tone = writer's attitude.", working: "attitude", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Writer's attitude",
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
        {
          id: "cie-ol-el-tone-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'tone' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The punctuation used" },
              { id: "b", text: "The word count" },
              { id: "c", text: "The attitude or mood conveyed" },
              { id: "d", text: "The sentence structure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "Attitude or mood conveyed." },
            ],
            steps: [
              { reasoning: "Tone = attitude/mood.", working: "attitude", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The attitude or mood conveyed",
            commonErrors: ["Choosing (c) — that's structure."],
          },
        },
        {
          id: "cie-ol-el-tone-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A text uses 3 positive words and 2 negative words. (a) How many positive words are there? (b) How many negative words are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone word counting", statement: "Count positive vs negative words." },
            ],
            steps: [
              { reasoning: "3 positive words are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "2 negative words are given.", working: "2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 3; (b) 2",
            commonErrors: ["Confusing positive and negative."],
          },
        },
        {
          id: "cie-ol-el-tone-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word creates a positive tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Terrible" },
              { id: "b", text: "Wonderful" },
              { id: "c", text: "Awful" },
              { id: "d", text: "Horrible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone vocabulary", statement: "Wonderful = positive." },
            ],
            steps: [
              { reasoning: "Wonderful is positive.", working: "positive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Wonderful",
            commonErrors: ["Choosing (b) — negative."],
          },
        },
        {
          id: "cie-ol-el-tone-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two tones commonly found in writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone types", statement: "Formal, informal, serious, humorous, sarcastic." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "tones", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal, informal, serious, humorous, sarcastic (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-tone-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A paragraph uses 4 positive words and 3 negative words. (a) How many positive words are there? (b) How many negative words are there? (c) What is the overall tone?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
              { label: "c", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone analysis", statement: "Count tone words; determine overall tone." },
            ],
            steps: [
              { reasoning: "4 positive words are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "3 negative words are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "4 positive vs 3 negative — overall positive (4).", working: "positive", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 3; (c) Positive (4)",
            commonErrors: ["Not determining overall tone."],
          },
        },
        {
          id: "cie-ol-el-tone-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which tone is appropriate for a funeral speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sarcastic" },
              { id: "b", text: "Respectful and solemn" },
              { id: "c", text: "Casual" },
              { id: "d", text: "Humorous" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone appropriateness", statement: "Funeral = respectful/solemn." },
            ],
            steps: [
              { reasoning: "Funeral needs respectful tone.", working: "respectful", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Respectful and solemn",
            commonErrors: ["Choosing (b) — inappropriate."],
          },
        },
        {
          id: "cie-ol-el-tone-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how tone affects reader response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone effect", statement: "Tone shapes reader emotion and interpretation." },
            ],
            steps: [
              { reasoning: "Tone shapes reader emotion.", working: "emotion", marks: 1, markCode: "AO2" },
              { reasoning: "Affects how reader interprets message.", working: "interpretation", marks: 1, markCode: "AO2" },
              { reasoning: "Can persuade or alienate reader.", working: "persuade", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tone shapes emotion, interpretation, persuasion.",
            commonErrors: ["Not connecting tone to reader response."],
          },
        },
        {
          id: "cie-ol-el-tone-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word creates a negative tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wonderful" },
              { id: "b", text: "Excellent" },
              { id: "c", text: "Dreadful" },
              { id: "d", text: "Fantastic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone vocabulary", statement: "Dreadful = negative." },
            ],
            steps: [
              { reasoning: "Dreadful is negative.", working: "negative", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Dreadful",
            commonErrors: ["Choosing (b) — positive."],
          },
        },
        {
          id: "cie-ol-el-tone-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 10 positive words and 6 negative words. What is the dominant tone? (b) If 30% of 60 words are negative, how many negative words are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 18, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone analysis", statement: "Identify dominant tone; calculate percentages." },
            ],
            steps: [
              { reasoning: "10 positive vs 6 negative — positive dominates.", working: "positive", marks: 1, markCode: "AO2" },
              { reasoning: "30% of 60 equals 18 negative words.", working: "0.3 x 60 = 18", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) Positive (10); (b) 18 words",
            commonErrors: ["Not identifying dominant tone."],
          },
        },
        {
          id: "cie-ol-el-tone-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply tone analysis skills.",
          parts: [
            { label: "a", prompt: "Define tone.", marks: 2 },
            { label: "b", prompt: "Name two tone types.", marks: 2 },
            { label: "c", prompt: "How does tone affect reader?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone", statement: "Definition, types, effect." },
            ],
            steps: [
              { part: "a", reasoning: "Attitude or mood conveyed.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Formal, informal, serious, humorous — any two.", working: "types", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Shapes emotion, interpretation, persuasion.", working: "effect", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) attitude/mood (b) two types (c) emotion+interpretation",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Not identifying tone correctly."],
          },
        },
        {
          id: "cie-ol-el-tone-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which tone is appropriate for a comedy sketch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solemn" },
              { id: "b", text: "Formal" },
              { id: "c", text: "Serious" },
              { id: "d", text: "Humorous" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone appropriateness", statement: "Comedy = humorous." },
            ],
            steps: [
              { reasoning: "Comedy needs humorous tone.", working: "humorous", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Humorous",
            commonErrors: ["Choosing (b) — inappropriate."],
          },
        },
        {
          id: "cie-ol-el-tone-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 12 positive words and 4 negative words. How many total tone words are there? (b) If 40% of 50 words are positive, how many positive words are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16 },
              { label: "b", answer: 20, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone analysis", statement: "Count tone words; calculate percentages." },
            ],
            steps: [
              { reasoning: "12 plus 4 equals 16 total tone words.", working: "12 + 4 = 16", marks: 1, markCode: "AO2" },
              { reasoning: "40% of 50 equals 20 positive words.", working: "0.4 x 50 = 20", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 16; (b) 20 words",
            commonErrors: ["Not calculating percentages correctly."],
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
              { id: "a", text: "Sentence length" },
              { id: "b", text: "Who is telling the story" },
              { id: "c", text: "Word choice" },
              { id: "d", text: "Writer's tone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative voice", statement: "Who is telling the story — perspective." },
            ],
            steps: [
              { reasoning: "Voice = narrator/perspective.", working: "narrator", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Who is telling the story",
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
        {
          id: "cie-ol-el-style-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'style' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The punctuation used" },
              { id: "b", text: "The font" },
              { id: "c", text: "The word count" },
              { id: "d", text: "The writer's distinctive way of expressing ideas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Style", statement: "Writer's distinctive expression." },
            ],
            steps: [
              { reasoning: "Style = distinctive expression.", working: "distinctive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** The writer's distinctive way of expressing ideas",
            commonErrors: ["Choosing (c) — that's length."],
          },
        },
        {
          id: "cie-ol-el-style-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A writer uses 3 similes and 2 metaphors. (a) How many similes are there? (b) How many figurative devices are used in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Style device counting", statement: "Count figurative devices." },
            ],
            steps: [
              { reasoning: "3 similes are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "3 plus 2 equals 5 total figurative devices.", working: "3 + 2 = 5", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 3; (b) 5",
            commonErrors: ["Forgetting metaphors in total."],
          },
        },
        {
          id: "cie-ol-el-style-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a feature of 'concise' style?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brief and to the point" },
              { id: "b", text: "Vague" },
              { id: "c", text: "Repetitive" },
              { id: "d", text: "Long and detailed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Concise style", statement: "Brief and to the point." },
            ],
            steps: [
              { reasoning: "Concise = brief.", working: "brief", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Brief and to the point",
            commonErrors: ["Choosing (b) — that's verbose."],
          },
        },
        {
          id: "cie-ol-el-style-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features of a writer's style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Style features", statement: "Sentence length, word choice, figurative language, tone." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "features", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sentence length, word choice, figurative language, tone (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-style-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A writer uses 4 short sentences and 3 long sentences. (a) How many short sentences are there? (b) How many long sentences are there? (c) What is the total number of sentences?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
              { label: "c", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Style analysis", statement: "Count sentence types." },
            ],
            steps: [
              { reasoning: "4 short sentences are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "3 long sentences are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "4 plus 3 equals 7 total sentences.", working: "4 + 3 = 7", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 3; (c) 7",
            commonErrors: ["Forgetting to add both types."],
          },
        },
        {
          id: "cie-ol-el-style-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which style is most appropriate for a scientific report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slang" },
              { id: "b", text: "Formal and objective" },
              { id: "c", text: "Humorous" },
              { id: "d", text: "Informal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Style appropriateness", statement: "Science = formal/objective." },
            ],
            steps: [
              { reasoning: "Scientific = formal.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Formal and objective",
            commonErrors: ["Choosing (b) — inappropriate."],
          },
        },
        {
          id: "cie-ol-el-style-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how style differs from tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Style vs tone", statement: "Style=expression; tone=attitude." },
            ],
            steps: [
              { reasoning: "Style is how ideas are expressed.", working: "expression", marks: 1, markCode: "AO2" },
              { reasoning: "Tone is the attitude/mood conveyed.", working: "attitude", marks: 1, markCode: "AO2" },
              { reasoning: "Style can be formal while tone is friendly.", working: "distinction", marks: 1, markCode: "AO2" },
              { reasoning: "Difference explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Style=expression; tone=attitude/mood.",
            commonErrors: ["Confusing style and tone."],
          },
        },
        {
          id: "cie-ol-el-style-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a feature of 'verbose' style?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Concise" },
              { id: "b", text: "Clear" },
              { id: "c", text: "Wordy and repetitive" },
              { id: "d", text: "Brief" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verbose style", statement: "Wordy and repetitive." },
            ],
            steps: [
              { reasoning: "Verbose = wordy.", working: "wordy", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Wordy and repetitive",
            commonErrors: ["Choosing (b) — that's concise."],
          },
        },
        {
          id: "cie-ol-el-style-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A writer uses 8 figurative devices in 100 words. What percentage is figurative? (b) If they add 2 more devices, how many are there in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "%" },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Style analysis", statement: "Calculate figurative percentage; count devices." },
            ],
            steps: [
              { reasoning: "8 out of 100 equals 8%.", working: "8%", marks: 1, markCode: "AO2" },
              { reasoning: "8 plus 2 equals 10 devices.", working: "8 + 2 = 10", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 8%; (b) 10",
            commonErrors: ["Not calculating percentage correctly."],
          },
        },
        {
          id: "cie-ol-el-style-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply style analysis skills.",
          parts: [
            { label: "a", prompt: "Define style.", marks: 2 },
            { label: "b", prompt: "Name two style features.", marks: 2 },
            { label: "c", prompt: "How does style differ from tone?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Style", statement: "Definition, features, tone distinction." },
            ],
            steps: [
              { part: "a", reasoning: "Writer's distinctive expression.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Sentence length, word choice, figurative language — any two.", working: "features", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Style=expression; tone=attitude.", working: "distinction", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) distinctive expression (b) two features (c) expression vs attitude",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Confusing style and tone."],
          },
        },
        {
          id: "cie-ol-el-style-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a feature of 'poetic' style?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetition" },
              { id: "b", text: "Plain prose" },
              { id: "c", text: "Figurative language and rhythm" },
              { id: "d", text: "Technical jargon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poetic style", statement: "Figurative language and rhythm." },
            ],
            steps: [
              { reasoning: "Poetic = figurative+rhythm.", working: "figurative", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Figurative language and rhythm",
            commonErrors: ["Choosing (b) — that's plain."],
          },
        },
        {
          id: "cie-ol-el-style-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A writer uses 6 long sentences and 4 short sentences. How many total sentences are there? (b) If 20% of 80 words are figurative, how many figurative words are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 16, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Style analysis", statement: "Count sentences; calculate percentages." },
            ],
            steps: [
              { reasoning: "6 plus 4 equals 10 total sentences.", working: "6 + 4 = 10", marks: 1, markCode: "AO2" },
              { reasoning: "20% of 80 equals 16 figurative words.", working: "0.2 x 80 = 16", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 10; (b) 16 words",
            commonErrors: ["Not calculating percentages correctly."],
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
              { id: "a", text: "Spelling" },
              { id: "b", text: "Pronunciation" },
              { id: "c", text: "Literal meaning" },
              { id: "d", text: "Associated feelings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denotation", statement: "Literal meaning of word." },
            ],
            steps: [
              { reasoning: "Denotation = literal.", working: "literal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Literal meaning",
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
        {
          id: "cie-ol-el-wa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'connotation' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dictionary definition" },
              { id: "b", text: "Emotional associations of a word" },
              { id: "c", text: "The spelling" },
              { id: "d", text: "The pronunciation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Connotation", statement: "Emotional associations of a word." },
            ],
            steps: [
              { reasoning: "Connotation = emotional associations.", working: "associations", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Emotional associations of a word",
            commonErrors: ["Choosing (d) — that's denotation."],
          },
        },
        {
          id: "cie-ol-el-wa-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph uses 8 positive words and 4 negative words. (a) How many positive words are there? (b) How many negative words are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word analysis counting", statement: "Count positive vs negative words." },
            ],
            steps: [
              { reasoning: "8 positive words are given.", working: "8", marks: 1, markCode: "AO1" },
              { reasoning: "4 negative words are given.", working: "4", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 8; (b) 4",
            commonErrors: ["Confusing positive and negative."],
          },
        },
        {
          id: "cie-ol-el-wa-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'denotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotional associations" },
              { id: "b", text: "The literal dictionary meaning" },
              { id: "c", text: "Word origin" },
              { id: "d", text: "Spelling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denotation", statement: "Literal dictionary meaning." },
            ],
            steps: [
              { reasoning: "Denotation = literal meaning.", working: "literal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The literal dictionary meaning",
            commonErrors: ["Choosing (b) — that's connotation."],
          },
        },
        {
          id: "cie-ol-el-wa-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of word analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word analysis", statement: "Denotation, connotation, word choice, imagery." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Denotation, connotation, word choice, imagery (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-wa-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A text uses 6 emotive words and 4 neutral words. (a) How many emotive words are there? (b) How many neutral words are there? (c) What is the total number of words analysed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 4 },
              { label: "c", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word analysis", statement: "Count emotive vs neutral words." },
            ],
            steps: [
              { reasoning: "6 emotive words are given.", working: "6", marks: 1, markCode: "AO1" },
              { reasoning: "4 neutral words are given.", working: "4", marks: 1, markCode: "AO2" },
              { reasoning: "6 plus 4 equals 10 total words.", working: "6 + 4 = 10", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 4; (c) 10",
            commonErrors: ["Forgetting neutral words in total."],
          },
        },
        {
          id: "cie-ol-el-wa-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word has negative connotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slim" },
              { id: "b", text: "Skinny" },
              { id: "c", text: "Slender" },
              { id: "d", text: "Thin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connotation", statement: "Skinny has negative connotation." },
            ],
            steps: [
              { reasoning: "Skinny = negative.", working: "negative", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Skinny",
            commonErrors: ["Choosing (b) — positive."],
          },
        },
        {
          id: "cie-ol-el-wa-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how word choice affects meaning in a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word choice", statement: "Precise words convey specific meaning and emotion." },
            ],
            steps: [
              { reasoning: "Precise words convey specific meaning.", working: "precise", marks: 1, markCode: "AO2" },
              { reasoning: "Word choice creates emotional impact.", working: "emotional", marks: 1, markCode: "AO2" },
              { reasoning: "Affects tone and reader response.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Precise words → meaning + emotion + tone.",
            commonErrors: ["Not connecting word choice to effect."],
          },
        },
        {
          id: "cie-ol-el-wa-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of 'emotive language'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factual" },
              { id: "b", text: "Objective" },
              { id: "c", text: "Neutral" },
              { id: "d", text: "Cruel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Emotive language", statement: "Words with emotional connotation." },
            ],
            steps: [
              { reasoning: "Cruel is emotive.", working: "emotive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Cruel",
            commonErrors: ["Choosing (b) — that's neutral."],
          },
        },
        {
          id: "cie-ol-el-wa-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A text uses 10 emotive words in 200 words. What percentage is emotive? (b) If they replace 5 emotive words with neutral ones, how many emotive words remain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "%" },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word analysis", statement: "Calculate emotive percentage; track changes." },
            ],
            steps: [
              { reasoning: "10 divided by 200 equals 5%.", working: "10 / 200 = 5%", marks: 1, markCode: "AO2" },
              { reasoning: "10 minus 5 equals 5 emotive words remain.", working: "10 - 5 = 5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5%; (b) 5",
            commonErrors: ["Not calculating percentage correctly."],
          },
        },
        {
          id: "cie-ol-el-wa-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply word analysis skills.",
          parts: [
            { label: "a", prompt: "Define connotation.", marks: 2 },
            { label: "b", prompt: "Name two word analysis types.", marks: 2 },
            { label: "c", prompt: "How does word choice affect meaning?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word analysis", statement: "Connotation, types, effect." },
            ],
            steps: [
              { part: "a", reasoning: "Emotional associations of a word.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Denotation, connotation, word choice, imagery — any two.", working: "types", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Precise words convey meaning + emotion + tone.", working: "effect", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) emotional associations (b) two types (c) meaning+emotion+tone",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Not analysing word connotations."],
          },
        },
        {
          id: "cie-ol-el-wa-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word has positive connotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selfish" },
              { id: "b", text: "Frugal" },
              { id: "c", text: "Greedy" },
              { id: "d", text: "Stingy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connotation", statement: "Frugal = positive." },
            ],
            steps: [
              { reasoning: "Frugal is positive.", working: "positive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Frugal",
            commonErrors: ["Choosing (b) — negative."],
          },
        },
        {
          id: "cie-ol-el-wa-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A text uses 12 emotive words in 150 words. What percentage is emotive? (b) If they replace 4 emotive words with neutral ones, how many emotive words remain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "%" },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word analysis", statement: "Calculate emotive percentage; track changes." },
            ],
            steps: [
              { reasoning: "12 divided by 150 equals 8%.", working: "12 / 150 = 8%", marks: 1, markCode: "AO2" },
              { reasoning: "12 minus 4 equals 8 emotive words remain.", working: "12 - 4 = 8", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 8%; (b) 8",
            commonErrors: ["Not calculating percentage correctly."],
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
