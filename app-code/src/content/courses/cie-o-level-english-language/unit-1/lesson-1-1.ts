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
              { id: "c", text: "Neither needs evidence" },
              { id: "d", text: "Literal=implied; inference=stated" },
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
        {
          id: "cie-ol-el-comp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'paraphrase' mean in comprehension answers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarise the whole text" },
              { id: "b", text: "Copy the text exactly" },
              { id: "c", text: "Rewrite in your own words" },
              { id: "d", text: "Translate into another language" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paraphrase", statement: "Rewrite in own words without copying." },
            ],
            steps: [
              { reasoning: "Paraphrase = own words.", working: "own words", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Rewrite in your own words",
            commonErrors: ["Choosing (b) — copying is not paraphrasing."],
          },
        },
        {
          id: "cie-ol-el-comp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question type asks what is implied but not stated directly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inference" },
              { id: "b", text: "Literal" },
              { id: "c", text: "Vocabulary" },
              { id: "d", text: "Purpose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "What is implied but not stated." },
            ],
            steps: [
              { reasoning: "Inference = implied meaning.", working: "implied", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Inference",
            commonErrors: ["Choosing (a) — literal is stated."],
          },
        },
        {
          id: "cie-ol-el-comp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to refer to the text in your answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence", statement: "Answers must be supported by textual evidence." },
            ],
            steps: [
              { reasoning: "Answers must be supported by evidence from the text.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence ensures accuracy and earns marks.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Answers must be supported by textual evidence to be accurate and earn marks.",
            commonErrors: ["Giving opinions without evidence."],
          },
        },
        {
          id: "cie-ol-el-comp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How should you answer a vocabulary-in-context question?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary in context", statement: "Use surrounding words to deduce meaning." },
            ],
            steps: [
              { reasoning: "Look at surrounding words and sentence meaning for clues.", working: "clues", marks: 1, markCode: "AO2" },
              { reasoning: "Choose the meaning that fits the context.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Use context clues from surrounding words to determine the word's meaning in that sentence.",
            commonErrors: ["Giving dictionary meaning ignoring context."],
          },
        },
        {
          id: "cie-ol-el-comp-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a tone question and a purpose question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone vs purpose", statement: "Tone=writer's attitude; purpose=why text was written." },
            ],
            steps: [
              { reasoning: "Tone asks about the writer's attitude shown through word choice.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose asks why the text was written — inform, persuade, entertain.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Tone is about how; purpose is about why.", working: "distinction", marks: 1, markCode: "AO2" },
              { reasoning: "Difference clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tone=writer's attitude (how); purpose=why written (why).",
            commonErrors: ["Confusing the two — how vs why."],
          },
        },
        {
          id: "cie-ol-el-comp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you check before finishing each comprehension answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Length only" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Spelling only" },
              { id: "d", text: "Accuracy and word limit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Checking", statement: "Check accuracy and word limit before finishing." },
            ],
            steps: [
              { reasoning: "Check accuracy and word limit.", working: "check", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Accuracy and word limit",
            commonErrors: ["Skipping checks — lose marks."],
          },
        },
        {
          id: "cie-ol-el-comp-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to support an inference with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence for inference", statement: "Quote the clue, link it to the inference, explain implication." },
            ],
            steps: [
              { reasoning: "Quote or reference the specific clue in the text.", working: "quote", marks: 1, markCode: "AO2" },
              { reasoning: "Link the clue to your inference.", working: "link", marks: 1, markCode: "AO2" },
              { reasoning: "Explain what the clue implies.", working: "implication", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence-based answer.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Quote clue → link to inference → explain implication.",
            commonErrors: ["Inference without quote — unsupported."],
          },
        },
        {
          id: "cie-ol-el-comp-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step when you receive an unseen text in the exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Answer questions immediately" },
              { id: "b", text: "Guess the answers" },
              { id: "c", text: "Read the whole passage first" },
              { id: "d", text: "Skip to the last question" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "First reading", statement: "Read whole text for overview before answering." },
            ],
            steps: [
              { reasoning: "Read whole passage first.", working: "overview", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Read the whole passage first",
            commonErrors: ["Starting questions without overview."],
          },
        },
        {
          id: "cie-ol-el-comp-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest answer to an inference question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Happy.'" },
              { id: "b", text: "'The character is happy because her hands danced and she whistled.'" },
              { id: "c", text: "'She is probably happy.'" },
              { id: "d", text: "'I think she is sad.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference answer", statement: "Inference justified by textual evidence." },
            ],
            steps: [
              { reasoning: "Strongest answer gives inference plus evidence.", working: "evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The character is happy because her hands danced and she whistled.",
            commonErrors: ["Choosing (a) or (c) — no evidence given."],
          },
        },
        {
          id: "cie-ol-el-comp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should comprehension answers be concise but complete?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Answer style", statement: "Concise respects word limits; complete earns all marks." },
            ],
            steps: [
              { reasoning: "Concise answers stay within word limits.", working: "concise", marks: 1, markCode: "AO2" },
              { reasoning: "Complete answers include all required points.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Concise respects word limits; complete ensures all marks are earned.",
            commonErrors: ["Too brief — miss marks; too long — exceed limit."],
          },
        },
        {
          id: "cie-ol-el-comp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how to approach a multi-part comprehension question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multi-part approach", statement: "Read all parts, allocate time, answer in order, check each." },
            ],
            steps: [
              { reasoning: "Read all parts before answering.", working: "read all", marks: 1, markCode: "AO2" },
              { reasoning: "Note marks per part for time allocation.", working: "marks", marks: 1, markCode: "AO2" },
              { reasoning: "Answer in order, quoting where needed.", working: "order", marks: 1, markCode: "AO2" },
              { reasoning: "Check each part is fully addressed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Read all parts → allocate by marks → answer in order → check each part.",
            commonErrors: ["Answering parts out of order and losing track."],
          },
        },
        {
          id: "cie-ol-el-comp-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review comprehension skills comprehensively.",
          parts: [
            { label: "a", prompt: "Name the main question types.", marks: 2 },
            { label: "b", prompt: "Explain how to answer a tone question.", marks: 2 },
            { label: "c", prompt: "What is a vocabulary-in-context question?", marks: 2 },
            { label: "d", prompt: "List three common comprehension mistakes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comprehension review", statement: "Question types, tone, vocabulary, mistakes." },
            ],
            steps: [
              { part: "a", reasoning: "Literal, inference, vocabulary, tone, purpose, summary.", working: "types", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Identify writer's attitude via word choice, support with quotes.", working: "tone", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word meaning deduced from surrounding context.", working: "vocab", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Answering without reading whole text; no evidence; ignoring word limit.", working: "mistakes", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) question types (b) tone via word choice (c) context meaning (d) common mistakes",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Multiple types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Three mistakes.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Skipping re-reading — miss detail."],
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
              { id: "a", text: "When it was written" },
              { id: "b", text: "What it says" },
              { id: "c", text: "Why the text was written" },
              { id: "d", text: "Who wrote it" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "Why the text was written." },
            ],
            steps: [
              { reasoning: "Purpose = writer's intention.", working: "intention", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Why the text was written",
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
        {
          id: "cie-ol-el-purp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which purpose is served by a textbook or factual report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To persuade" },
              { id: "b", text: "To describe scenery" },
              { id: "c", text: "To entertain" },
              { id: "d", text: "To inform" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inform", statement: "Textbooks and reports aim to inform." },
            ],
            steps: [
              { reasoning: "Factual texts inform.", working: "inform", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** To inform",
            commonErrors: ["Choosing (c) — reports don't persuade."],
          },
        },
        {
          id: "cie-ol-el-purp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'audience' refer to in text analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where it was published" },
              { id: "b", text: "Who wrote the text" },
              { id: "c", text: "Who the text is written for" },
              { id: "d", text: "When it was written" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "Who the text is written for." },
            ],
            steps: [
              { reasoning: "Audience = who for.", working: "who for", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Who the text is written for",
            commonErrors: ["Choosing (a) — that's the author."],
          },
        },
        {
          id: "cie-ol-el-purp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is formal register used in official letters?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Formal register suits official communication." },
            ],
            steps: [
              { reasoning: "Official letters require politeness and standard English.", working: "politeness", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register shows respect to recipient.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal register shows respect and suits official communication.",
            commonErrors: ["Using informal tone in official letters."],
          },
        },
        {
          id: "cie-ol-el-purp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can vocabulary level signal the intended audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary signal", statement: "Simple words for children; technical words for experts." },
            ],
            steps: [
              { reasoning: "Simple vocabulary suits young or general audiences.", working: "simple", marks: 1, markCode: "AO2" },
              { reasoning: "Complex/technical vocabulary suits expert audiences.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simple words signal general/young audiences; technical words signal experts.",
            commonErrors: ["Ignoring vocabulary as audience clue."],
          },
        },
        {
          id: "cie-ol-el-purp-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an advertisement's purpose differs from a news report's.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose comparison", statement: "Advertisement persuades; news report informs." },
            ],
            steps: [
              { reasoning: "Advertisement aims to persuade reader to buy or act.", working: "persuade", marks: 1, markCode: "AO2" },
              { reasoning: "News report aims to inform with facts.", working: "inform", marks: 1, markCode: "AO2" },
              { reasoning: "Language differs — emotive vs factual.", working: "language", marks: 1, markCode: "AO2" },
              { reasoning: "Purposes compared.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Advertisement persuades (emotive); news report informs (factual).",
            commonErrors: ["Treating both as informational."],
          },
        },
        {
          id: "cie-ol-el-purp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A text uses simple words, playful imagery and a friendly tone. Who is it likely written for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Experts" },
              { id: "b", text: "Young children" },
              { id: "c", text: "Scientists" },
              { id: "d", text: "Judges" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience clues", statement: "Simple words and playful tone signal children." },
            ],
            steps: [
              { reasoning: "Clues point to children.", working: "children", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Young children",
            commonErrors: ["Ignoring tone and vocabulary clues."],
          },
        },
        {
          id: "cie-ol-el-purp-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do you identify whether a text aims to persuade or inform?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Persuade vs inform", statement: "Persuasive uses emotive language/opinions; informative uses facts." },
            ],
            steps: [
              { reasoning: "Look for emotive language and opinions — persuasion.", working: "emotive", marks: 1, markCode: "AO2" },
              { reasoning: "Look for facts, statistics, neutral tone — information.", working: "facts", marks: 1, markCode: "AO2" },
              { reasoning: "Check for call to action or argument structure.", working: "cta", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose identified.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotive language/opinions=persuade; facts/neutral tone=inform.",
            commonErrors: ["Assuming all texts inform."],
          },
        },
        {
          id: "cie-ol-el-purp-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which clue most strongly suggests a text is written for children?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Passive formal sentences" },
              { id: "b", text: "Legal citations" },
              { id: "c", text: "Simple vocabulary and playful imagery" },
              { id: "d", text: "Technical jargon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience clue", statement: "Simple vocabulary and playful imagery signal children." },
            ],
            steps: [
              { reasoning: "Simple vocabulary/playful imagery = children.", working: "clue", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Simple vocabulary and playful imagery",
            commonErrors: ["Choosing (a) — jargon suits experts."],
          },
        },
        {
          id: "cie-ol-el-purp-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'inclusive language' achieve in persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excludes opponents" },
              { id: "b", text: "Lengthens sentences" },
              { id: "c", text: "Builds rapport with the reader" },
              { id: "d", text: "Adds statistics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inclusive language", statement: "'We', 'us' — builds rapport." },
            ],
            steps: [
              { reasoning: "Inclusive language builds rapport.", working: "rapport", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Builds rapport with the reader",
            commonErrors: ["Choosing (a) — it includes, not excludes."],
          },
        },
        {
          id: "cie-ol-el-purp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to know the audience before writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience importance", statement: "Audience determines register, vocabulary and content." },
            ],
            steps: [
              { reasoning: "Audience determines register, vocabulary and content choices.", working: "determines", marks: 1, markCode: "AO2" },
              { reasoning: "Wrong audience = ineffective communication.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Audience determines register, vocabulary and content — essential for effective communication.",
            commonErrors: ["Writing without considering audience."],
          },
        },
        {
          id: "cie-ol-el-purp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how tone reveals the writer's attitude towards the subject.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone and attitude", statement: "Word choice, sentence structure and punctuation reveal attitude." },
            ],
            steps: [
              { reasoning: "Word choice shows positive or negative feelings.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Sentence structure — short punchy vs long flowing.", working: "structure", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation — exclamation shows excitement; dash shows interruption.", working: "punctuation", marks: 1, markCode: "AO2" },
              { reasoning: "Attitude identified.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice, sentence structure and punctuation reveal writer's attitude.",
            commonErrors: ["Identifying tone without evidence."],
          },
        },
        {
          id: "cie-ol-el-purp-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse purpose and audience together.",
          parts: [
            { label: "a", prompt: "List four purposes of writing.", marks: 2 },
            { label: "b", prompt: "Name three audience clues in a text.", marks: 2 },
            { label: "c", prompt: "How does format indicate audience?", marks: 2 },
            { label: "d", prompt: "How to analyse purpose and audience together?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose/audience analysis", statement: "Purposes, clues, format, combined analysis." },
            ],
            steps: [
              { part: "a", reasoning: "Inform, persuade, entertain, describe.", working: "purposes", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Four valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Vocabulary level, tone, format, examples.", working: "clues", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Letter vs article vs report format signals who reads it.", working: "format", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Purpose from intention/language; audience from clues; relate them.", working: "combined", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear link.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4 purposes (b) audience clues (c) format signals audience (d) purpose+audience linked",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Four purposes.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three clues.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Combined analysis.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Analysing purpose without considering audience."],
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
              { id: "b", text: "Repeated sounds" },
              { id: "c", text: "Direct comparison" },
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
        {
          id: "cie-ol-el-rhet-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a metaphor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated initial sounds" },
              { id: "b", text: "Direct comparison without 'like' or 'as'" },
              { id: "c", text: "Comparison using 'like' or 'as'" },
              { id: "d", text: "Rhyme at line ends" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "Direct comparison without like/as." },
            ],
            steps: [
              { reasoning: "Metaphor = direct comparison.", working: "direct", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Direct comparison without 'like' or 'as'",
            commonErrors: ["Choosing (b) — that's simile."],
          },
        },
        {
          id: "cie-ol-el-rhet-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is personification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words imitating sounds" },
              { id: "b", text: "Giving human qualities to non-human things" },
              { id: "c", text: "Exaggeration for effect" },
              { id: "d", text: "Pattern of rhymes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personification", statement: "Human qualities to non-human." },
            ],
            steps: [
              { reasoning: "Personification = human qualities.", working: "human", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Giving human qualities to non-human things",
            commonErrors: ["Choosing (b) — that's hyperbole."],
          },
        },
        {
          id: "cie-ol-el-rhet-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What effect does repetition create in persuasive writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Repetition", statement: "Repeating words/phrases emphasises key points." },
            ],
            steps: [
              { reasoning: "Repetition emphasises key points.", working: "emphasise", marks: 1, markCode: "AO2" },
              { reasoning: "Reinforces message and aids memory.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Repetition emphasises key points and reinforces the message.",
            commonErrors: ["Thinking repetition is lazy writing."],
          },
        },
        {
          id: "cie-ol-el-rhet-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'triad' in persuasive writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Triad", statement: "Three-part list for strong effect." },
            ],
            steps: [
              { reasoning: "Triad = three-part list.", working: "three", marks: 1, markCode: "AO2" },
              { reasoning: "Creates rhythm and memorability.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "A three-part list that creates rhythm and emphasises points.",
            commonErrors: ["Listing more than three — not a triad."],
          },
        },
        {
          id: "cie-ol-el-rhet-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how inclusive language builds rapport with readers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inclusive language", statement: "'We', 'us' makes reader feel part of group." },
            ],
            steps: [
              { reasoning: "Words like 'we' and 'us' include the reader.", working: "include", marks: 1, markCode: "AO2" },
              { reasoning: "Reader feels shared identity and purpose.", working: "identity", marks: 1, markCode: "AO2" },
              { reasoning: "Builds trust and agreement.", working: "trust", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Inclusive language ('we', 'us') makes reader feel part of the group, building trust.",
            commonErrors: ["Thinking it's just pronoun choice."],
          },
        },
        {
          id: "cie-ol-el-rhet-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'The stars danced in the sky.' Which technique is used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Onomatopoeia" },
              { id: "b", text: "Personification" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Metaphor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique ID", statement: "Stars given human action (dancing) = personification." },
            ],
            steps: [
              { reasoning: "Stars 'dancing' = human action.", working: "human", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Personification",
            commonErrors: ["Choosing (a) — no direct comparison made."],
          },
        },
        {
          id: "cie-ol-el-rhet-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does alliteration create effect in a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Alliteration", statement: "Repeated initial sounds create music, emphasis, mood." },
            ],
            steps: [
              { reasoning: "Repeated sounds create musical quality.", working: "music", marks: 1, markCode: "AO2" },
              { reasoning: "Draws attention to key words.", working: "attention", marks: 1, markCode: "AO2" },
              { reasoning: "Can create mood — harsh sounds vs soft sounds.", working: "mood", marks: 1, markCode: "AO2" },
              { reasoning: "Effects explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Creates music, draws attention, and shapes mood.",
            commonErrors: ["Identifying without explaining effect."],
          },
        },
        {
          id: "cie-ol-el-rhet-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is onomatopoeia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words that imitate sounds" },
              { id: "b", text: "Comparison using 'like'" },
              { id: "c", text: "Deliberate exaggeration" },
              { id: "d", text: "Repeated initial sounds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Onomatopoeia", statement: "Words imitating sounds (buzz, crash)." },
            ],
            steps: [
              { reasoning: "Onomatopoeia = sound words.", working: "sounds", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Words that imitate sounds",
            commonErrors: ["Choosing (b) — that's alliteration."],
          },
        },
        {
          id: "cie-ol-el-rhet-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which technique would most likely appear in a speech to build unity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Latin phrases" },
              { id: "b", text: "Statistics" },
              { id: "c", text: "Inclusive language ('we')" },
              { id: "d", text: "Passive voice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unity technique", statement: "Inclusive language builds shared identity." },
            ],
            steps: [
              { reasoning: "'We' builds unity.", working: "unity", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Inclusive language ('we')",
            commonErrors: ["Choosing (a) — statistics inform, not unite."],
          },
        },
        {
          id: "cie-ol-el-rhet-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is hyperbole and why is it used?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hyperbole", statement: "Deliberate exaggeration for emphasis." },
            ],
            steps: [
              { reasoning: "Hyperbole = deliberate exaggeration.", working: "exaggeration", marks: 1, markCode: "AO2" },
              { reasoning: "Used for emphasis or humorous effect.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Deliberate exaggeration used for emphasis or humorous effect.",
            commonErrors: ["Taking hyperbole literally."],
          },
        },
        {
          id: "cie-ol-el-rhet-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to analyse the effect of a rhetorical device in a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Device analysis", statement: "Identify device → explain what it does → describe effect." },
            ],
            steps: [
              { reasoning: "Identify the specific device used.", working: "identify", marks: 1, markCode: "AO2" },
              { reasoning: "Quote or reference where it appears.", working: "quote", marks: 1, markCode: "AO2" },
              { reasoning: "Explain what it does and its effect on reader.", working: "effect", marks: 1, markCode: "AO2" },
              { reasoning: "Analysis complete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Identify → quote → explain effect on reader.",
            commonErrors: ["Naming device without explaining effect."],
          },
        },
        {
          id: "cie-ol-el-rhet-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review rhetorical and literary devices.",
          parts: [
            { label: "a", prompt: "Define simile and alliteration.", marks: 2 },
            { label: "b", prompt: "Name three persuasive techniques.", marks: 2 },
            { label: "c", prompt: "Explain the effect of personification.", marks: 2 },
            { label: "d", prompt: "How do literary techniques create vivid description?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Devices review", statement: "Definitions, techniques, personification, vivid effects." },
            ],
            steps: [
              { part: "a", reasoning: "Simile=like/as; alliteration=repeated initial sounds.", working: "definitions", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Rhetorical Q, triads, emotive, repetition, inclusive.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Human qualities to non-human — creates vivid, relatable images.", working: "personification", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Imagery+figurative language appeal to senses — vivid mental pictures.", working: "vivid", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple techniques.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) simile/alliteration (b) 3 techniques (c) human qualities effect (d) imagery creates vividness",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three techniques.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple techniques.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Confusing simile and metaphor."],
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
