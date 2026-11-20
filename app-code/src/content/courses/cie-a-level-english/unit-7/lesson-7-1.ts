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
              {
                id: "a",
                text: "Writing responding to specific stimulus/instructions",
              },
              { id: "b", text: "Free creative writing" },
              { id: "c", text: "Copying a text" },
              { id: "d", text: "Summarising only" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Use detail to convey meaning" },
              { id: "b", text: "Always state emotions directly" },
              { id: "c", text: "Only describe actions" },
              { id: "d", text: "Avoid adjectives" },
            ],
            correctChoiceId: "a",
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
