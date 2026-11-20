import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cie-ol-el-lesson-1-1",
  code: "1-1",
  title: "Reading comprehension strategies",
  goal: "I CAN read unseen texts carefully and answer comprehension questions accurately.",
  standards: ["1123 Reading: comprehension"],
  vocabulary: [
    { term: "Comprehension", definition: "Understanding what a text says and means." },
    { term: "Unseen text", definition: "Text you haven't read before in the exam." },
    { term: "Inference", definition: "Reading between the lines — what is implied but not stated." },
    { term: "Literal", definition: "What is stated directly in the text." },
    { term: "Tone", definition: "Writer's attitude towards subject — formal, sarcastic, warm." },
    { term: "Purpose", definition: "Why the writer wrote the text — inform, persuade, entertain." },
  ],
  concepts: [
    {
      id: "cie-ol-el-comprehension",
      title: "Comprehension techniques",
      skill: "Read carefully, identify literal and inferred meaning, and answer precisely.",
      lesson: {
        sections: [
          {
            heading: "First reading",
            body: "Read the whole text once for overview — identify genre, tone, purpose. Then re-read for detail when answering questions.",
          },
          {
            heading: "Question types",
            body: "- **Literal**: find stated fact — quote exactly\n- **Inference**: implied meaning — justify with evidence\n- **Vocabulary**: word meaning in context\n- **Tone/attitude**: writer's feelings\n- **Purpose**: why written",
          },
          {
            heading: "Answer technique",
            body: "Always refer to the text. Use own words unless asked to quote. Keep answers concise but complete. Check word limits.",
          },
        ],
        keyFormulas: [
          { name: "Comprehension", statement: "Literal=stated; inference=implied; always justify with text evidence." },
        ],
        workedExample: {
          problem: "Question: 'What does the writer suggest about the character?'",
          solution: "Look for clues in description/actions/dialogue — infer personality. E.g. 'his hands trembled' suggests nervousness.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between literal and inference questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literal=stated; inference=implied" },
              { id: "b", text: "Both are the same" },
              { id: "c", text: "Literal=implied; inference=stated" },
              { id: "d", text: "Neither needs evidence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Literal vs inference", statement: "Literal=stated; inference=implied." },
            ],
            steps: [
              { reasoning: "Literal questions ask what's stated; inference asks what's implied.", working: "difference", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Literal=stated; inference=implied",
            commonErrors: ["Confusing the two — key distinction."],
          },
        },
        {
          id: "cie-ol-el-comp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you do before answering comprehension questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Technique", statement: "Read whole text first, then re-read for detail." },
            ],
            steps: [
              { reasoning: "Read for overview, then re-read for specific answers.", working: "two readings", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Read whole text first for overview, then re-read carefully for answers.",
            commonErrors: ["Jumping straight to questions — miss context."],
          },
        },
        {
          id: "cie-ol-el-comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to answer an inference question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference technique", statement: "Find clues in text, infer meaning, justify with evidence." },
            ],
            steps: [
              { reasoning: "Look for subtle clues — description, actions, word choice.", working: "clues", marks: 1, markCode: "AO2" },
              { reasoning: "Infer what is suggested but not stated.", working: "infer", marks: 1, markCode: "AO2" },
              { reasoning: "Support answer with textual evidence/quotation.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Technique clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Find clues → infer meaning → justify with text evidence.",
            commonErrors: ["Guessing without evidence — always justify."],
          },
        },
        {
          id: "cie-ol-el-comp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse a comprehension passage.",
          parts: [
            { label: "a", prompt: "How to approach an unseen text?", marks: 2 },
            { label: "b", prompt: "What are the main question types?", marks: 3 },
            { label: "c", prompt: "How to answer vocabulary questions?", marks: 2 },
            { label: "d", prompt: "How to answer tone questions?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comprehension", statement: "Overview→detail; literal/inference/vocab/tone; evidence-based." },
            ],
            steps: [
              { part: "a", reasoning: "Read for overview first, then answer questions with re-reading.", working: "approach", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Literal, inference, vocabulary, tone, purpose, summary.", working: "types", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Comprehensive.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Use context clues — surrounding words, sentence meaning.", working: "context", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Identify word choice, attitude, how writer feels — support with quotes.", working: "tone", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) overview→detail (b) literal/inference/vocab/tone (c) context clues (d) word choice+attitude",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Types comprehensive.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Answering without reading whole text first."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-purpose",
      title: "Writer's purpose and audience",
      skill: "Identify why a text was written and who it was written for.",
      lesson: {
        sections: [
          {
            heading: "Purposes",
            body: "- **Inform**: facts, explanation (textbooks, reports)\n- **Persuade**: convince (advertisements, editorials)\n- **Entertain**: stories, poetry\n- **Describe**: vivid detail (descriptive writing)",
          },
          {
            heading: "Audiences",
            body: "Who is it written for? Children vs adults; experts vs general public; formal vs informal register indicates audience.",
          },
          {
            heading: "Clues in text",
            body: "Vocabulary level, sentence structure, tone, format (letter vs article), examples used — all signal purpose/audience.",
          },
        ],
        keyFormulas: [
          { name: "Purpose/audience", statement: "Purpose=why written; audience=who for; clues in register, vocabulary, tone." },
        ],
        workedExample: {
          problem: "How to identify writer's purpose?",
          solution: "Look for persuasive language (persuade), factual tone (inform), vivid imagery (entertain), detailed description (describe).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-purp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'purpose' in text analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Why the text was written" },
              { id: "b", text: "What it says" },
              { id: "c", text: "Who wrote it" },
              { id: "d", text: "When it was written" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Why the text was written." },
            ],
            steps: [
              { reasoning: "Purpose = writer's intention.", working: "intention", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Why the text was written",
            commonErrors: ["Confusing with content — it's intention."],
          },
        },
        {
          id: "cie-ol-el-purp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two purposes of writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Purposes", statement: "Inform, persuade, entertain, describe." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "purposes", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Inform, persuade, entertain, describe (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-purp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do you identify the intended audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience", statement: "Vocabulary level, tone, format, examples — clues to who it's for." },
            ],
            steps: [
              { reasoning: "Check vocabulary complexity — simple for children, complex for adults.", working: "vocabulary", marks: 1, markCode: "AO2" },
              { reasoning: "Tone: formal vs informal indicates audience.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Format/examples: letter format, technical examples — audience clues.", working: "format", marks: 1, markCode: "AO2" },
              { reasoning: "Clues identified.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Vocabulary, tone, format, examples — all indicate intended audience.",
            commonErrors: ["Guessing without evidence — use textual clues."],
          },
        },
        {
          id: "cie-ol-el-purp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse purpose and audience.",
          parts: [
            { label: "a", prompt: "Define purpose and audience.", marks: 2 },
            { label: "b", prompt: "List four purposes of writing.", marks: 2 },
            { label: "c", prompt: "How to identify purpose?", marks: 2 },
            { label: "d", prompt: "How to identify audience?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose/audience", statement: "Purpose=why; audience=who; clues in language/tone/format." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose=why written; audience=who for.", working: "definitions", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Inform, persuade, entertain, describe.", working: "purposes", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Four valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Look for persuasive language, factual tone, vivid imagery, descriptive detail.", working: "identify", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Vocabulary level, tone, format, examples — all indicate audience.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple clues.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) purpose/audience defined (b) 4 purposes (c) language clues (d) vocab/tone/format",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Four purposes.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple clues.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Purpose vs audience confusion — why vs who."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-thetorical",
      title: "Rhetorical devices and techniques",
      skill: "Identify and analyse persuasive and literary techniques.",
      lesson: {
        sections: [
          {
            heading: "Persuasive techniques",
            body: "- **Rhetorical questions**: engage reader\n- **Triads**: three-part lists (strong)\n- **Emotive language**: appeal to feelings\n- **Repetition**: emphasise key points\n- **Inclusive language**: 'we', 'us' — build rapport",
          },
          {
            heading: "Literary techniques",
            body: "- **Simile**: comparison with 'like/as'\n- **Metaphor**: direct comparison\n- **Personification**: human qualities to non-human\n- **Alliteration**: repeated sounds\n- **Onomatopoeia**: sound words",
          },
          {
            heading: "Effect on reader",
            body: "Each technique creates specific effect — persuade, entertain, describe vividly, create mood.",
          },
        ],
        keyFormulas: [
          { name: "Techniques", statement: "Persuasive: rhetorical Q, triads, emotive, repetition. Literary: simile, metaphor, personification." },
        ],
        workedExample: {
          problem: "'The wind whispered through the trees.' What technique?",
          solution: "Personification — wind given human action (whispering).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-rhet-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a simile?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparison using 'like' or 'as'" },
              { id: "b", text: "Direct comparison" },
              { id: "c", text: "Repeated sounds" },
              { id: "d", text: "Sound words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simile", statement: "Comparison using like/as." },
            ],
            steps: [
              { reasoning: "Simile uses 'like' or 'as'.", working: "like/as", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Comparison using 'like' or 'as'",
            commonErrors: ["Choosing (b) — that's metaphor."],
          },
        },
        {
          id: "cie-ol-el-rhet-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Persuasive techniques", statement: "Rhetorical questions, triads, emotive language, repetition." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical questions, triads, emotive language, repetition (any two).",
            commonErrors: ["Literary techniques — need persuasive ones."],
          },
        },
        {
          id: "cie-ol-el-rhet-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the effect of rhetorical questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical questions", statement: "Engages reader, emphasises point, makes reader think." },
            ],
            steps: [
              { reasoning: "Question not expecting answer — engages reader.", working: "engage", marks: 1, markCode: "AO2" },
              { reasoning: "Makes reader consider the point themselves.", working: "consider", marks: 1, markCode: "AO2" },
              { reasoning: "Emphasises key argument.", working: "emphasise", marks: 1, markCode: "AO2" },
              { reasoning: "Effects explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Engages reader, makes them consider point, emphasises argument.",
            commonErrors: ["Thinking it's a real question — it's rhetorical."],
          },
        },
        {
          id: "cie-ol-el-rhet-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse rhetorical devices.",
          parts: [
            { label: "a", prompt: "Define simile and metaphor.", marks: 2 },
            { label: "b", prompt: "Name three persuasive techniques.", marks: 2 },
            { label: "c", prompt: "Explain effect of emotive language.", marks: 2 },
            { label: "d", prompt: "How to identify techniques in text?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical analysis", statement: "Techniques create effects — identify and explain impact." },
            ],
            steps: [
              { part: "a", reasoning: "Simile=like/as; metaphor=direct comparison.", working: "definitions", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Rhetorical Q, triads, emotive, repetition, inclusive.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Appeals to emotions — makes reader feel, stronger persuasion.", working: "emotive", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Look for patterns: repeated words, questions, lists, comparisons, emotional words.", working: "identify", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple patterns.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) simile/metaphor (b) 3 techniques (c) emotional appeal (d) pattern recognition",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three techniques.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Patterns identified.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Identifying without explaining effect."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-reading-notes",
      title: "Reading comprehension — revision notes",
      summary: "Comprehension strategies, purpose/audience, rhetorical devices.",
      sections: [
        {
          heading: "Reading skills",
          body: "Overview→detail; literal vs inference; evidence-based answers; vocabulary in context; tone identification.",
        },
        {
          heading: "Analysis",
          body: "Purpose=why written; audience=who for. Techniques: persuasive (rhetorical Q, triads) and literary (simile, metaphor). Effect on reader.",
        },
      ],
    },
  ],
};
