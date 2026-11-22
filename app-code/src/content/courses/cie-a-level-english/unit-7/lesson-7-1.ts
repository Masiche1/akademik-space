import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cial-e-u7-lesson-7-1",
  code: "7-1",
  title: "Directed Writing",
  goal: "I CAN write effective directed responses adapting tone, style and content to task requirements.",
  standards: ["9093: Directed writing"],
  vocabulary: [
    {
      term: "Directed writing",
      definition: "Writing task responding to specific stimulus/instructions.",
    },
    {
      term: "Register",
      definition: "Level of formality (formal, informal, semi-formal).",
    },
    { term: "Audience", definition: "Intended reader of the writing." },
    {
      term: "Purpose",
      definition: "Reason for writing (inform, persuade, entertain).",
    },
    { term: "Tone", definition: "Attitude conveyed through language." },
    {
      term: "Transform",
      definition: "Rewrite text changing form/style while keeping meaning.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u7-directed",
      title: "Directed Writing Tasks",
      skill: "Adapt writing to register, audience, purpose and stimulus.",
      lesson: {
        sections: [
          {
            heading: "Task types",
            body: "Letter/email (formal or informal), report, article, speech, review, diary entry, narrative, descriptive piece. Each has conventions — letters have addresses/greetings/sign-offs, reports have headings/sections, speeches address audience directly.",
          },
          {
            heading: "Register and audience",
            body: "Formal register: impersonal, complex sentences, technical vocabulary (report to manager). Informal: contractions, colloquialisms, direct address (letter to friend). Semi-formal: balanced. Match register to audience — judge, friend, teacher, public. Purpose determines content emphasis.",
          },
          {
            heading: "Transformation tasks",
            body: "Rewrite text changing genre/form/style: prose → poetry, formal → informal, narrative → report. Keep core meaning but adapt structure, vocabulary, tone. Technical transformation: passive ↔ active voice, direct ↔ reported speech, expand/contract sentences.",
          },
        ],
        keyFormulas: [
          {
            name: "Directed writing",
            statement:
              "Match register+audience+purpose; transform=keep meaning, change form.",
          },
        ],
        workedExample: {
          problem: "How to transform formal report into informal letter?",
          solution:
            "Keep core information but use contractions, colloquialisms, direct address ('you'), shorter sentences, personal tone.",
        },
      },
      questions: [
        {
          id: "cial-e-u7-dw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is directed writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising only" },
              {
                id: "b",
                text: "Writing responding to specific stimulus/instructions",
              },
              { id: "c", text: "Copying a text" },
              { id: "d", text: "Free creative writing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Directed writing",
                statement: "Task with specific instructions.",
              },
            ],
            steps: [{ reasoning: "Specific task.", marks: 1, markCode: "AO1" }],
            finalAnswer:
              "**(a)** Writing responding to specific stimulus/instructions",
            commonErrors: ["Confusing with composition."],
          },
        },
        {
          id: "cial-e-u7-dw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is register in writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Register",
                statement: "Level of formality.",
              },
            ],
            steps: [
              { reasoning: "Formality level.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Formal/informal/semi-formal.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Level of formality — formal (reports), informal (letters to friends), semi-formal (balanced).",
            commonErrors: ["Confusing with tone."],
          },
        },
        {
          id: "cial-e-u7-dw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should audience affect writing choices?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Audience",
                statement: "Match register/vocabulary/structure to reader.",
              },
            ],
            steps: [
              {
                reasoning: "Formal audience → formal register.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Informal → colloquial.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Vocabulary/structure adapted.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Audience determines register, vocabulary, sentence structure and content emphasis — write for the intended reader.",
            commonErrors: ["One-size-fits-all writing."],
          },
        },
        {
          id: "cial-e-u7-dw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Directed writing.",
          parts: [
            { label: "a", prompt: "Task types?", marks: 2 },
            { label: "b", prompt: "Register?", marks: 2 },
            { label: "c", prompt: "Audience/purpose?", marks: 3 },
            { label: "d", prompt: "Transformation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Directed writing",
                statement: "Types+register+audience+transformation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Letters/reports/articles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Conventions differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Formal/informal/semi-formal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Vocabulary/sentences differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Match to reader.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Purpose shapes content.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear adaptation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Keep meaning/change form.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Example given.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) types (b) register (c) audience (d) transformation",
          },
        },
        {
          id: "cial-e-u7-dw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which directed writing task typically uses 'Dear Sir or Madam' and a formal sign-off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diary entry" },
              { id: "b", text: "Formal letter" },
              { id: "c", text: "Advertisement" },
              { id: "d", text: "Poem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal letter",
                statement: "Salutation+sign-off conventions.",
              },
            ],
            steps: [
              {
                reasoning: "Formal letter conventions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Formal letter",
            commonErrors: ["Confusing formal and informal letters."],
          },
        },
        {
          id: "cial-e-u7-dw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'purpose' of a directed writing task mainly determine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The handwriting style" },
              { id: "b", text: "The emphasis and content of the response" },
              { id: "c", text: "The word count only" },
              { id: "d", text: "The spelling rules" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Purpose",
                statement: "Reason for writing.",
              },
            ],
            steps: [
              {
                reasoning: "Purpose shapes content.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** The emphasis and content of the response",
            commonErrors: ["Thinking purpose only affects tone."],
          },
        },
        {
          id: "cial-e-u7-dw-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a transformation task, what must always be preserved?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The original genre" },
              { id: "b", text: "The sentence length" },
              { id: "c", text: "The core meaning" },
              { id: "d", text: "The exact original words" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transformation",
                statement: "Keep meaning, change form.",
              },
            ],
            steps: [
              {
                reasoning: "Meaning preserved.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The core meaning",
            commonErrors: ["Copying original wording."],
          },
        },
        {
          id: "cial-e-u7-dw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Semi-formal register is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very informal slang" },
              { id: "b", text: "A balanced level of formality" },
              { id: "c", text: "Purely technical language" },
              { id: "d", text: "No audience awareness" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semi-formal register",
                statement: "Balanced formality.",
              },
            ],
            steps: [
              {
                reasoning: "Balanced register.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A balanced level of formality",
            commonErrors: ["Confusing with informal."],
          },
        },
        {
          id: "cial-e-u7-dw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A report to your headteacher should be written in which register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal" },
              { id: "b", text: "Colloquial" },
              { id: "c", text: "Slang" },
              { id: "d", text: "Informal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Register matching",
                statement: "Authority audience → formal.",
              },
            ],
            steps: [
              {
                reasoning: "Headteacher = formal.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Formal",
            commonErrors: ["Using informal register to authority."],
          },
        },
        {
          id: "cial-e-u7-dw-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Rewriting a formal report as a letter to a close friend mainly requires changing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The core facts and content" },
              { id: "b", text: "Nothing — the texts would be identical" },
              { id: "c", text: "The task into a poem" },
              { id: "d", text: "Register and tone while keeping the meaning" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre transformation",
                statement: "Adapt form/register, keep meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Register+tone change.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Register and tone while keeping the meaning",
            commonErrors: ["Changing the factual content."],
          },
        },
        {
          id: "cial-e-u7-dw-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two conventions of a formal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal letter conventions",
                statement: "Salutation, sign-off, addresses.",
              },
            ],
            steps: [
              {
                reasoning: "Any two conventions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct examples.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Sender/recipient addresses, date, salutation ('Dear Sir/Madam'), formal sign-off ('Yours faithfully'), paragraphs.",
            commonErrors: ["Listing informal features."],
          },
        },
        {
          id: "cial-e-u7-dw-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is tone, and how does it differ from register?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tone vs register",
                statement: "Attitude vs formality.",
              },
            ],
            steps: [
              {
                reasoning: "Tone = attitude.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Register = formality level.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Tone is the writer's attitude (e.g. urgent, humorous, respectful); register is the level of formality — related but distinct.",
            commonErrors: ["Treating tone and register as identical."],
          },
        },
        {
          id: "cial-e-u7-dw-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should a speech directed task differ from a letter to the same audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Speech conventions",
                statement: "Direct address, rhetorical devices, spoken style.",
              },
            ],
            steps: [
              {
                reasoning: "Direct address to audience.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Spoken, persuasive features.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "No letter conventions needed.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "A speech addresses the audience directly ('you'), uses rhetorical questions, repetition and emotive language, with spoken-style short sentences — unlike letter conventions (salutation, paragraphs, sign-off).",
            commonErrors: ["Writing a letter when asked for a speech."],
          },
        },
        {
          id: "cial-e-u7-dw-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Directed writing practice.",
          parts: [
            { label: "a", prompt: "Task conventions?", marks: 2 },
            { label: "b", prompt: "Register choices?", marks: 2 },
            { label: "c", prompt: "Purpose effects?", marks: 3 },
            { label: "d", prompt: "Transformation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Directed writing",
                statement: "Conventions+register+purpose+transformation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Letters/reports/articles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Conventions differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Formal/informal/semi.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Vocabulary/sentences.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Match to reader.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Purpose shapes content.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear adaptation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Keep meaning/change form.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Example given.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) conventions (b) register (c) purpose (d) transformation",
          },
        },
        {
          id: "cial-e-u7-dw-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which directed task would most likely use direct second-person address ('you')?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A scientific summary" },
              { id: "b", text: "A speech or article" },
              { id: "c", text: "A lab write-up" },
              { id: "d", text: "A formal report" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Direct address",
                statement: "Speeches/articles address reader.",
              },
            ],
            steps: [
              {
                reasoning: "Speech/article = 'you'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A speech or article",
            commonErrors: ["Using 'you' in formal reports."],
          },
        },
        {
          id: "cial-e-u7-dw-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you check the word count in a directed writing task?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Word count",
                statement: "Tasks specify minimum length.",
              },
            ],
            steps: [
              {
                reasoning: "Minimum required for marks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Too short loses content marks.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Directed tasks set a minimum word count (typically 250-400); writing too short cannot access higher-mark content and structure criteria.",
            commonErrors: ["Ignoring the stated word count."],
          },
        },
      ],
    },
    {
      id: "cial-e-u7-composition",
      title: "Composition Writing",
      skill:
        "Write effective narrative, descriptive and discursive compositions.",
      lesson: {
        sections: [
          {
            heading: "Narrative and descriptive",
            body: "Narrative: engaging opening, developed characters, rising tension, satisfying resolution. Descriptive: vivid sensory detail, precise vocabulary, figurative language (metaphor, simile, personification), varied sentence structures. Show don't tell — use detail to convey mood/character.",
          },
          {
            heading: "Discursive and argumentative",
            body: "Discursive: explore topic from multiple angles, balanced view, clear structure (intro, points for/against, conclusion). Argumentative: clear thesis, supporting evidence, counter-arguments addressed, persuasive techniques (rhetorical questions, emotive language, triads).",
          },
          {
            heading: "Style and technique",
            body: "Sentence variety: mix short punchy with long complex. Paragraph unity: one idea per paragraph. Cohesion: linking words (however, furthermore, consequently). Vocabulary: precise, varied, appropriate register. Punctuation: varied for effect (dashes, semicolons, colons).",
          },
        ],
        keyFormulas: [
          {
            name: "Composition",
            statement:
              "Narrative: tension+resolution; Descriptive: sensory+figurative; Discursive: balanced.",
          },
        ],
        workedExample: {
          problem: "How to 'show don't tell' in descriptive writing?",
          solution:
            "Instead of 'She was angry' — 'Her fingers clenched the letter, knuckles white, before she crumpled it into the bin.'",
        },
      },
      questions: [
        {
          id: "cial-e-u7-cw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'show don't tell' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only describe actions" },
              { id: "b", text: "Use detail to convey meaning" },
              { id: "c", text: "Avoid adjectives" },
              { id: "d", text: "Always state emotions directly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Show don't tell",
                statement: "Detail conveys meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Detail over statement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Use detail to convey meaning",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "cial-e-u7-cw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features of effective narrative writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative features",
                statement: "Tension, characters, resolution.",
              },
            ],
            steps: [
              { reasoning: "Any two features.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Engaging opening, developed characters, rising tension, satisfying resolution, varied pacing.",
            commonErrors: ["Only one feature."],
          },
        },
        {
          id: "cial-e-u7-cw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should discursive writing differ from argumentative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Discursive vs argumentative",
                statement: "Explore vs persuade.",
              },
            ],
            steps: [
              {
                reasoning: "Discursive: multiple angles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Argumentative: clear thesis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Discursive: balanced; argumentative: persuasive.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Discursive explores multiple perspectives balanced; argumentative presents clear thesis with supporting evidence and counter-arguments.",
            commonErrors: ["Using interchangeably."],
          },
        },
        {
          id: "cial-e-u7-cw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Composition writing.",
          parts: [
            { label: "a", prompt: "Narrative features?", marks: 2 },
            { label: "b", prompt: "Descriptive techniques?", marks: 3 },
            { label: "c", prompt: "Discursive structure?", marks: 2 },
            { label: "d", prompt: "Style techniques?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Composition",
                statement: "Narrative+descriptive+discursive+style.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tension/characters/resolution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Pacing/engagement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Sensory detail.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Figurative language.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Precise vocabulary.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Multiple angles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Balanced structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Sentence variety.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cohesion/linking.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) narrative (b) descriptive (c) discursive (d) style",
          },
        },
        {
          id: "cial-e-u7-cw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of figurative language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The wind blew at 30 mph'" },
              { id: "b", text: "'It was windy'" },
              { id: "c", text: "'Wind is moving air'" },
              { id: "d", text: "'The wind howled through the trees'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Figurative language",
                statement: "Imagery/metaphor/personification.",
              },
            ],
            steps: [
              {
                reasoning: "Personification 'howled'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 'The wind howled through the trees'",
            commonErrors: ["Choosing literal statement."],
          },
        },
        {
          id: "cial-e-u7-cw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of linking words (however, furthermore)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To replace all punctuation" },
              { id: "b", text: "To add direct speech" },
              { id: "c", text: "To create cohesion between ideas" },
              { id: "d", text: "To increase word count only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion",
                statement: "Linking words connect ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Cohesion between ideas.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** To create cohesion between ideas",
            commonErrors: ["Seeing linking words as padding."],
          },
        },
        {
          id: "cial-e-u7-cw-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A discursive essay should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Argue one side only" },
              { id: "b", text: "Explore the topic from multiple balanced viewpoints" },
              { id: "c", text: "Retell a story" },
              { id: "d", text: "Describe a scene" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discursive writing",
                statement: "Balanced exploration.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple viewpoints.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Explore the topic from multiple balanced viewpoints",
            commonErrors: ["Confusing with argumentative."],
          },
        },
        {
          id: "cial-e-u7-cw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a persuasive technique in argumentative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random paragraph order" },
              { id: "b", text: "Avoiding the reader's view" },
              { id: "c", text: "Rhetorical questions" },
              { id: "d", text: "Neutral statistics only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Persuasive techniques",
                statement: "Rhetorical questions, triads, emotive language.",
              },
            ],
            steps: [
              {
                reasoning: "Rhetorical questions persuade.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Rhetorical questions",
            commonErrors: ["Listing non-persuasion features."],
          },
        },
        {
          id: "cial-e-u7-cw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Paragraph unity' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every paragraph has the same length" },
              { id: "b", text: "Each paragraph develops one main idea" },
              { id: "c", text: "Only one paragraph is allowed" },
              { id: "d", text: "Paragraphs never use linking words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paragraph unity",
                statement: "One idea per paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "One main idea.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Each paragraph develops one main idea",
            commonErrors: ["Confusing unity with length."],
          },
        },
        {
          id: "cial-e-u7-cw-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence best demonstrates 'show don't tell'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'She had feelings'" },
              { id: "b", text: "'She clenched the letter until the paper tore'" },
              { id: "c", text: "'She was upset about the news'" },
              { id: "d", text: "'She felt very angry'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Show don't tell",
                statement: "Detail conveys emotion.",
              },
            ],
            steps: [
              {
                reasoning: "Action detail shows anger.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** 'She clenched the letter until the paper tore'",
            commonErrors: ["Choosing direct emotion statement."],
          },
        },
        {
          id: "cial-e-u7-cw-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two descriptive techniques that create vivid imagery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Descriptive techniques",
                statement: "Sensory detail+figurative language.",
              },
            ],
            steps: [
              { reasoning: "Any two techniques.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct examples.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Sensory detail (sight/sound/touch), simile, metaphor, personification, precise vocabulary, varied sentence structure.",
            commonErrors: ["Listing narrative features."],
          },
        },
        {
          id: "cial-e-u7-cw-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are rhetorical questions effective in persuasive writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhetorical questions",
                statement: "Engage reader, guide conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Engages reader directly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Implies obvious answer.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "They engage the reader, imply an obvious answer and steer the audience toward the writer's conclusion without stating it directly.",
            commonErrors: ["Saying they provide evidence."],
          },
        },
        {
          id: "cial-e-u7-cw-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is sentence variety important in composition writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence variety",
                statement: "Mix short and complex sentences.",
              },
            ],
            steps: [
              {
                reasoning: "Short sentences create impact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Long sentences develop ideas.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Avoids monotony.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Mixing short punchy sentences with long complex ones controls pace, creates emphasis and keeps the reader engaged — uniform sentences feel monotonous.",
            commonErrors: ["Using only one sentence length."],
          },
        },
        {
          id: "cial-e-u7-cw-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Composition writing practice.",
          parts: [
            { label: "a", prompt: "Narrative features?", marks: 2 },
            { label: "b", prompt: "Descriptive techniques?", marks: 3 },
            { label: "c", prompt: "Discursive structure?", marks: 2 },
            { label: "d", prompt: "Style techniques?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Composition",
                statement: "Narrative+descriptive+discursive+style.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tension/characters/resolution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Pacing/engagement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Sensory detail.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Figurative language.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Precise vocabulary.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Multiple angles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Balanced structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Sentence variety.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cohesion/linking.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) narrative (b) descriptive (c) discursive (d) style",
          },
        },
        {
          id: "cial-e-u7-cw-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a narrative, a 'satisfying resolution' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plot tension is resolved convincingly" },
              { id: "b", text: "All questions remain unanswered" },
              { id: "c", text: "The ending is unrelated to the plot" },
              { id: "d", text: "The story ends abruptly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resolution",
                statement: "Tension resolved.",
              },
            ],
            steps: [
              {
                reasoning: "Tension resolved.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** The plot tension is resolved convincingly",
            commonErrors: ["Confusing resolution with cliffhanger."],
          },
        },
        {
          id: "cial-e-u7-cw-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How does varied punctuation improve a composition?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punctuation variety",
                statement: "Controls pace and emphasis.",
              },
            ],
            steps: [
              {
                reasoning: "Dashes/colons add emphasis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Variety avoids monotony.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Varied punctuation (dashes, semicolons, colons, fragments) controls rhythm, creates emphasis and pauses, making prose more engaging and expressive.",
            commonErrors: ["Using only full stops and commas."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u7-7-1-notes",
      title: "Directed writing and composition — notes",
      summary:
        "Directed tasks, register/audience; narrative, descriptive, discursive writing.",
      sections: [
        {
          heading: "Directed",
          body: "Match register/audience/purpose; transform=keep meaning change form.",
        },
        {
          heading: "Composition",
          body: "Narrative=tension; descriptive=sensory+figurative; discursive=balanced; style=sentence variety+cohesion.",
        },
      ],
    },
  ],
};
