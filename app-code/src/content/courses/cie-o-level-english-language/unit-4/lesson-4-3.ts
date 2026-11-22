import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cie-ol-el-lesson-4-3",
  code: "4-3",
  title: "Reading unseen texts strategy",
  goal: "I CAN approach unseen texts systematically in exams.",
  standards: ["1123 Reading: exam skills"],
  vocabulary: [
    { term: "Unseen text", definition: "Text not studied before exam." },
    { term: "Skim", definition: "Quick read for overview — main ideas." },
    { term: "Scan", definition: "Search for specific information." },
    { term: "Annotate", definition: "Mark key points, techniques, structure." },
    { term: "Context", definition: "Surrounding information — before/after text." },
    { term: "Inference", definition: "Reading between lines — implied meaning." },
  ],
  concepts: [
    {
      id: "cie-ol-el-unseen",
      title: "Unseen text strategy",
      skill: "Read and analyse unseen texts systematically.",
      lesson: {
        sections: [
          {
            heading: "First reading",
            body: "Skim for overview — identify genre, purpose, tone. Don't try to answer questions yet.",
          },
          {
            heading: "Question analysis",
            body: "Read questions before re-reading — know what to look for. Identify question types: literal, inference, language, structure.",
          },
          {
            heading: "Detailed reading",
            body: "Re-read carefully, annotate key points, quote evidence, answer each question precisely.",
          },
        ],
        keyFormulas: [
          { name: "Unseen strategy", statement: "Skim→questions→re-read→annotate→answer with evidence." },
        ],
        workedExample: {
          problem: "How to approach unseen poem in exam?",
          solution: "Skim for meaning, note rhyme scheme/structure, identify imagery/tone, answer questions with quotations.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-unseen-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first with an unseen text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skim for overview" },
              { id: "b", text: "Skip" },
              { id: "c", text: "Answer questions immediately" },
              { id: "d", text: "Memorise" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strategy", statement: "Skim first for overview." },
            ],
            steps: [
              { reasoning: "Skim = overview first.", working: "skim", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Skim for overview",
            commonErrors: ["Starting questions — need overview first."],
          },
        },
        {
          id: "cie-ol-el-unseen-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two reading techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Skim, scan, annotate, re-read." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Skim, scan, annotate, re-read (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-unseen-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why read questions before re-reading the text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question-first", statement: "Know what to look for — saves time, focuses attention." },
            ],
            steps: [
              { reasoning: "Questions tell you what to look for.", working: "know", marks: 1, markCode: "AO2" },
              { reasoning: "Saves time — targeted reading.", working: "time", marks: 1, markCode: "AO2" },
              { reasoning: "Focuses attention on relevant parts.", working: "focus", marks: 1, markCode: "AO2" },
              { reasoning: "Benefit explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Know what to look for — saves time, focuses attention.",
            commonErrors: ["Re-reading blindly — questions guide reading."],
          },
        },
        {
          id: "cie-ol-el-unseen-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply unseen text strategy.",
          parts: [
            { label: "a", prompt: "What is first step?", marks: 1 },
            { label: "b", prompt: "Name reading techniques.", marks: 2 },
            { label: "c", prompt: "Why read questions first?", marks: 3 },
            { label: "d", prompt: "How to annotate effectively?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unseen strategy", statement: "Skim, techniques, question-first, annotation." },
            ],
            steps: [
              { part: "a", reasoning: "Skim for overview — genre, purpose, tone.", working: "skim", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Skim, scan, annotate, re-read.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Know what to look for, saves time, focuses attention.", working: "benefit", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple benefits.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Mark key points, techniques, structure, quotes for evidence.", working: "annotate", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) skim (b) techniques (c) question-first benefits (d) mark key points",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple techniques.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Benefits explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Annotation clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No strategy — reading randomly wastes time."],
          },
        },
        {
          id: "cie-ol-el-unseen-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'unseen' text in exams?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A textbook" },
              { id: "b", text: "A text not seen before the exam" },
              { id: "c", text: "A poem you memorised" },
              { id: "d", text: "A text you've studied" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unseen text", statement: "Text not seen before exam." },
            ],
            steps: [
              { reasoning: "Unseen = new text.", working: "new", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A text not seen before the exam",
            commonErrors: ["Choosing (b) — that's seen."],
          },
        },
        {
          id: "cie-ol-el-unseen-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An unseen text has 5 paragraphs; a student reads only 3 of them. (a) How many paragraphs are there? (b) How many are unread?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unseen reading", statement: "Read all paragraphs carefully." },
            ],
            steps: [
              { reasoning: "5 paragraphs are given.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "5 minus 3 equals 2 unread.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 2",
            commonErrors: ["Not reading all paragraphs."],
          },
        },
        {
          id: "cie-ol-el-unseen-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best first step for an unseen text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skip to the end" },
              { id: "b", text: "Guess the answers" },
              { id: "c", text: "Read the questions first" },
              { id: "d", text: "Start writing immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Unseen strategy", statement: "Read questions first." },
            ],
            steps: [
              { reasoning: "Read questions first.", working: "questions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read the questions first",
            commonErrors: ["Starting immediately — no plan."],
          },
        },
        {
          id: "cie-ol-el-unseen-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two strategies for tackling unseen texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Unseen strategies", statement: "Read questions, underline key words, plan answers." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "strategies", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Read questions, underline key words, plan answers (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-unseen-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An unseen text is 500 words; a student spends 2 minutes reading it. (a) How many words are there? (b) How many minutes are spent reading? (c) What is the reading speed in words per minute?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500 },
              { label: "b", answer: 2 },
              { label: "c", answer: 250, unit: "words/minute" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading speed", statement: "Words divided by time." },
            ],
            steps: [
              { reasoning: "500 words are given.", working: "500", marks: 1, markCode: "AO1" },
              { reasoning: "2 minutes are given.", working: "2", marks: 1, markCode: "AO2" },
              { reasoning: "500 divided by 2 equals 250 words per minute.", working: "500 / 2 = 250", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 500; (b) 2; (c) 250 words/minute",
            commonErrors: ["Not calculating speed correctly."],
          },
        },
        {
          id: "cie-ol-el-unseen-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to answer an unseen question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write anything" },
              { id: "b", text: "Guess" },
              { id: "c", text: "Give opinion only" },
              { id: "d", text: "Quote evidence from the text" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence use", statement: "Quote evidence from text." },
            ],
            steps: [
              { reasoning: "Quote evidence.", working: "evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Quote evidence from the text",
            commonErrors: ["Choosing (b) — need evidence."],
          },
        },
        {
          id: "cie-ol-el-unseen-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to approach an unseen text effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unseen approach", statement: "Read questions, scan text, plan answers." },
            ],
            steps: [
              { reasoning: "Read all questions first.", working: "questions", marks: 1, markCode: "AO2" },
              { reasoning: "Scan text for relevant sections.", working: "scan", marks: 1, markCode: "AO2" },
              { reasoning: "Plan answers before writing.", working: "plan", marks: 1, markCode: "AO2" },
              { reasoning: "Approach explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Questions→scan→plan→answer.",
            commonErrors: ["No plan — writing without reading."],
          },
        },
        {
          id: "cie-ol-el-unseen-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a good strategy for unseen texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Underlining key words" },
              { id: "b", text: "Writing without reading" },
              { id: "c", text: "Reading questions first" },
              { id: "d", text: "Planning answers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Unseen strategies", statement: "Must read before writing." },
            ],
            steps: [
              { reasoning: "Writing without reading is bad.", working: "read first", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Writing without reading",
            commonErrors: ["Choosing (b) — that's good."],
          },
        },
        {
          id: "cie-ol-el-unseen-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An unseen text has 8 paragraphs; a student reads 5 of them. How many are unread? (b) If the text is 600 words and the student spends 3 minutes reading, what is the reading speed in words per minute?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 200, unit: "words/minute" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unseen reading", statement: "Count paragraphs; calculate speed." },
            ],
            steps: [
              { reasoning: "8 minus 5 equals 3 unread paragraphs.", working: "8 - 5 = 3", marks: 1, markCode: "AO2" },
              { reasoning: "600 divided by 3 equals 200 words per minute.", working: "600 / 3 = 200", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 200 words/minute",
            commonErrors: ["Not calculating speed correctly."],
          },
        },
        {
          id: "cie-ol-el-unseen-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply unseen text skills.",
          parts: [
            { label: "a", prompt: "What is an unseen text?", marks: 2 },
            { label: "b", prompt: "Name two strategies.", marks: 2 },
            { label: "c", prompt: "How to answer effectively?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unseen text", statement: "Definition, strategies, answering." },
            ],
            steps: [
              { part: "a", reasoning: "Text not seen before exam.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Read questions, underline key words, plan answers — any two.", working: "strategies", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Quote evidence from text.", working: "answer", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) new text (b) two strategies (c) quote evidence",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["No plan — writing without reading."],
          },
        },
        {
          id: "cie-ol-el-unseen-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is it important to read all questions first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is not important" },
              { id: "b", text: "It helps plan time and approach" },
              { id: "c", text: "It confuses the reader" },
              { id: "d", text: "It wastes time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question reading", statement: "Plan time and approach." },
            ],
            steps: [
              { reasoning: "Reading questions helps planning.", working: "plan", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** It helps plan time and approach",
            commonErrors: ["Choosing (d) — it is important."],
          },
        },
        {
          id: "cie-ol-el-unseen-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An unseen text has 10 paragraphs; a student reads 7 of them. How many are unread? (b) If the text is 800 words and the student spends 4 minutes reading, what is the reading speed in words per minute?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 200, unit: "words/minute" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unseen reading", statement: "Count paragraphs; calculate speed." },
            ],
            steps: [
              { reasoning: "10 minus 7 equals 3 unread paragraphs.", working: "10 - 7 = 3", marks: 1, markCode: "AO2" },
              { reasoning: "800 divided by 4 equals 200 words per minute.", working: "800 / 4 = 200", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 200 words/minute",
            commonErrors: ["Not calculating speed correctly."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-question-types",
      title: "Comprehension question types",
      skill: "Identify and answer different question types.",
      lesson: {
        sections: [
          {
            heading: "Literal questions",
            body: "What is stated directly — find the answer in text. Use exact words or close paraphrase.",
          },
          {
            heading: "Inference questions",
            body: "What is implied but not stated — read between lines. Justify with evidence.",
          },
          {
            heading: "Language questions",
            body: "Word meaning in context, techniques, tone — analyse how language creates effect.",
          },
        ],
        keyFormulas: [
          { name: "Question types", statement: "Literal=stated; inference=implied; language=analysis of word choice/techniques." },
        ],
        workedExample: {
          problem: "Answer: 'What does the writer suggest about the character?'",
          solution: "Inference question — look for clues in description/actions, infer personality, justify with evidence.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-qt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'literal' question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tone analysis" },
              { id: "b", text: "What is implied" },
              { id: "c", text: "What is stated directly" },
              { id: "d", text: "Word meaning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Literal", statement: "What is stated directly in text." },
            ],
            steps: [
              { reasoning: "Literal = stated.", working: "stated", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** What is stated directly",
            commonErrors: ["Choosing (b) — that's inference."],
          },
        },
        {
          id: "cie-ol-el-qt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three question types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question types", statement: "Literal, inference, language, structure, purpose." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Literal, inference, language, structure, purpose (any three).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-qt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to answer inference questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference", statement: "Find clues, infer meaning, justify with evidence." },
            ],
            steps: [
              { reasoning: "Look for subtle clues — description, actions, word choice.", working: "clues", marks: 1, markCode: "AO2" },
              { reasoning: "Infer what is suggested but not stated.", working: "infer", marks: 1, markCode: "AO2" },
              { reasoning: "Support with textual evidence/quotation.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Technique clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Clues→inference→evidence — justify with text.",
            commonErrors: ["Guessing without evidence — must justify."],
          },
        },
        {
          id: "cie-ol-el-qt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply question type skills.",
          parts: [
            { label: "a", prompt: "Define literal question.", marks: 1 },
            { label: "b", prompt: "Define inference question.", marks: 2 },
            { label: "c", prompt: "How to answer inference?", marks: 3 },
            { label: "d", prompt: "What is language question?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question types", statement: "Literal, inference, language — different approaches." },
            ],
            steps: [
              { part: "a", reasoning: "What is stated directly in text.", working: "literal", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "What is implied but not stated — read between lines.", working: "inference", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Find clues, infer meaning, justify with evidence.", working: "answer", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Word meaning, techniques, tone — analyse language effect.", working: "language", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) stated (b) implied (c) clues→infer→evidence (d) word/technique/tone",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Steps clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple elements.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Inference without evidence — must justify."],
          },
        },
        {
          id: "cie-ol-el-qt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'comprehension' question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question needing opinion" },
              { id: "b", text: "Question needing grammar" },
              { id: "c", text: "Question needing summary" },
              { id: "d", text: "Question testing understanding of text" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Comprehension question", statement: "Tests understanding of text." },
            ],
            steps: [
              { reasoning: "Comprehension = understanding.", working: "understanding", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Question testing understanding of text",
            commonErrors: ["Choosing (b) — that's opinion."],
          },
        },
        {
          id: "cie-ol-el-qt-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An exam has 5 question types: comprehension, analysis, evaluation, application and summary. A student answers 3 of them. (a) How many question types are there? (b) How many are answered?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question type counting", statement: "Count question types." },
            ],
            steps: [
              { reasoning: "5 question types are given.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "3 are answered.", working: "3", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 3",
            commonErrors: ["Not counting all types."],
          },
        },
        {
          id: "cie-ol-el-qt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question type asks 'How does the writer use language'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analysis" },
              { id: "b", text: "Grammar" },
              { id: "c", text: "Comprehension" },
              { id: "d", text: "Summary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Analysis question", statement: "Asks how writer uses language." },
            ],
            steps: [
              { reasoning: "Language analysis = analysis.", working: "analysis", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Analysis",
            commonErrors: ["Choosing (b) — that's comprehension."],
          },
        },
        {
          id: "cie-ol-el-qt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two question types in English exams.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question types", statement: "Comprehension, analysis, evaluation, application, summary." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Comprehension, analysis, evaluation, application, summary (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-qt-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An exam has 4 comprehension questions and 3 analysis questions. (a) How many comprehension questions are there? (b) How many analysis questions are there? (c) How many total questions are there?",
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
              { kind: "skill", name: "Question counting", statement: "Count each question type." },
            ],
            steps: [
              { reasoning: "4 comprehension questions are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "3 analysis questions are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "4 plus 3 equals 7 total questions.", working: "4 + 3 = 7", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 3; (c) 7",
            commonErrors: ["Forgetting analysis questions in total."],
          },
        },
        {
          id: "cie-ol-el-qt-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question type requires evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spelling" },
              { id: "b", text: "Evaluation" },
              { id: "c", text: "Comprehension" },
              { id: "d", text: "Grammar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaluation question", statement: "Requires judging/evaluating." },
            ],
            steps: [
              { reasoning: "Evaluation = judging.", working: "evaluation", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Evaluation",
            commonErrors: ["Choosing (b) — that's comprehension."],
          },
        },
        {
          id: "cie-ol-el-qt-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to identify question types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question identification", statement: "Read command words, understand task." },
            ],
            steps: [
              { reasoning: "Read command words — 'analyse', 'evaluate', 'summarise'.", working: "command", marks: 1, markCode: "AO2" },
              { reasoning: "Understand what the question asks.", working: "understand", marks: 1, markCode: "AO2" },
              { reasoning: "Match to question type.", working: "match", marks: 1, markCode: "AO2" },
              { reasoning: "Identification explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Command words→understand→match.",
            commonErrors: ["Not reading command words."],
          },
        },
        {
          id: "cie-ol-el-qt-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a 'command word' in questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "And" },
              { id: "b", text: "Analyse" },
              { id: "c", text: "The" },
              { id: "d", text: "Of" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Command word", statement: "Word indicating task type." },
            ],
            steps: [
              { reasoning: "'Analyse' is a command word.", working: "analyse", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Analyse",
            commonErrors: ["Choosing (b) — that's article."],
          },
        },
        {
          id: "cie-ol-el-qt-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An exam has 6 questions; a student answers 4 of them. How many are unanswered? (b) If 50% of 10 questions are comprehension, how many comprehension questions are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 5, unit: "questions" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question checking", statement: "Count answered questions; calculate percentages." },
            ],
            steps: [
              { reasoning: "6 minus 4 equals 2 unanswered.", working: "6 - 4 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "50% of 10 equals 5 comprehension questions.", working: "0.5 x 10 = 5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 5 questions",
            commonErrors: ["Not calculating percentages correctly."],
          },
        },
        {
          id: "cie-ol-el-qt-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply question type knowledge.",
          parts: [
            { label: "a", prompt: "Name two question types.", marks: 2 },
            { label: "b", prompt: "What is a command word?", marks: 2 },
            { label: "c", prompt: "How to identify question types?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question types", statement: "Types, command words, identification." },
            ],
            steps: [
              { part: "a", reasoning: "Comprehension, analysis, evaluation, application, summary — any two.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Word indicating task type.", working: "command", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Read command words, understand, match.", working: "identify", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) two types (b) task indicator (c) command words→match",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Not reading command words."],
          },
        },
        {
          id: "cie-ol-el-qt-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a 'command word'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "And" },
              { id: "b", text: "Evaluate" },
              { id: "c", text: "Of" },
              { id: "d", text: "The" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Command word", statement: "Word indicating task type." },
            ],
            steps: [
              { reasoning: "'Evaluate' is a command word.", working: "evaluate", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Evaluate",
            commonErrors: ["Choosing (b) — that's article."],
          },
        },
        {
          id: "cie-ol-el-qt-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An exam has 12 questions; a student answers 9 of them. How many are unanswered? (b) If 40% of 15 questions are analysis, how many analysis questions are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 6, unit: "questions" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question checking", statement: "Count answered questions; calculate percentages." },
            ],
            steps: [
              { reasoning: "12 minus 9 equals 3 unanswered.", working: "12 - 9 = 3", marks: 1, markCode: "AO2" },
              { reasoning: "40% of 15 equals 6 analysis questions.", working: "0.4 x 15 = 6", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 6 questions",
            commonErrors: ["Not calculating percentages correctly."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-answer-techniques",
      title: "Answer writing techniques",
      skill: "Write precise, evidence-based answers.",
      lesson: {
        sections: [
          {
            heading: "Precision",
            body: "Answer exactly what's asked — don't add irrelevant information. Check word limits.",
          },
          {
            heading: "Evidence",
            body: "Support answers with quotations or references to text. 'The writer says...' or 'As shown when...'.",
          },
          {
            heading: "Structure",
            body: "Point → evidence → explanation. Each answer should be complete but concise.",
          },
        ],
        keyFormulas: [
          { name: "Answer techniques", statement: "Precision, evidence, structure — point→evidence→explanation." },
        ],
        workedExample: {
          problem: "Improve: 'The character is sad.'",
          solution: "'The character is sad — her voice trembled and she avoided eye contact, showing her distress.' — evidence supports inference.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-at2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should every answer include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence from text" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Guess" },
              { id: "d", text: "Personal opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence", statement: "Support answers with text evidence." },
            ],
            steps: [
              { reasoning: "Evidence = text support.", working: "evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Evidence from text",
            commonErrors: ["Choosing (b) — that's opinion, not evidence."],
          },
        },
        {
          id: "cie-ol-el-at2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two answer writing principles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Principles", statement: "Precision, evidence, structure, word limits." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "principles", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Precision, evidence, structure, word limits (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-at2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the point-evidence-explanation structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure", statement: "Point→evidence→explanation — clear, complete answers." },
            ],
            steps: [
              { reasoning: "Point: state your answer clearly.", working: "point", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: quote or reference text.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Explanation: show how evidence supports point.", working: "explanation", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Point→evidence→explanation — clear, complete answers.",
            commonErrors: ["Point without evidence — unsupported claim."],
          },
        },
        {
          id: "cie-ol-el-at2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply answer writing techniques.",
          parts: [
            { label: "a", prompt: "What should answers include?", marks: 1 },
            { label: "b", prompt: "Name answer principles.", marks: 2 },
            { label: "c", prompt: "Explain point-evidence-explanation.", marks: 3 },
            { label: "d", prompt: "How to handle word limits?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer writing", statement: "Evidence, principles, structure, word limits." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence from text — support all answers.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Precision, evidence, structure, word limits.", working: "principles", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Point→evidence→explanation — clear answers.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check limits, be concise, prioritise key points.", working: "limits", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple strategies.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) evidence (b) principles (c) structure (d) check/prioritise",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple principles.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Strategies clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ignoring word limits — exceeds or under-answers."],
          },
        },
        {
          id: "cie-ol-el-at2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best way to start an answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Directly address the question" },
              { id: "b", text: "Repeat the question" },
              { id: "c", text: "Write anything" },
              { id: "d", text: "Guess" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer technique", statement: "Address question directly." },
            ],
            steps: [
              { reasoning: "Address directly.", working: "direct", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Directly address the question",
            commonErrors: ["Choosing (d) — that's not answering."],
          },
        },
        {
          id: "cie-ol-el-at2-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An answer needs 3 points; a student writes only 2 of them. (a) How many points are required? (b) How many are written?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer checking", statement: "Check point count." },
            ],
            steps: [
              { reasoning: "3 points are required.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "2 are written.", working: "2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 3; (b) 2",
            commonErrors: ["Missing points."],
          },
        },
        {
          id: "cie-ol-el-at2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before writing an answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guess" },
              { id: "b", text: "Plan your points" },
              { id: "c", text: "Start writing immediately" },
              { id: "d", text: "Copy the question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Answer planning", statement: "Plan points first." },
            ],
            steps: [
              { reasoning: "Plan first.", working: "plan", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Plan your points",
            commonErrors: ["Starting immediately — no structure."],
          },
        },
        {
          id: "cie-ol-el-at2-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two answer techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Answer techniques", statement: "PEEL, quote evidence, plan, check." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "PEEL, quote evidence, plan, check (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-at2-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An answer needs 4 points; a student writes 3 of them. (a) How many points are required? (b) How many are written? (c) How many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer checking", statement: "Count required, written, missing points." },
            ],
            steps: [
              { reasoning: "4 points are required.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "3 are written.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "4 minus 3 equals 1 missing point.", working: "4 - 3 = 1", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 3; (c) 1",
            commonErrors: ["Not checking point count."],
          },
        },
        {
          id: "cie-ol-el-at2-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'PEEL' stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plan, Edit, Explain, Link" },
              { id: "b", text: "Point, Evidence, Example, Link" },
              { id: "c", text: "Plan, Evaluate, Explain, Link" },
              { id: "d", text: "Point, Evidence, Explanation, Link" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PEEL", statement: "Point, Evidence, Explanation, Link." },
            ],
            steps: [
              { reasoning: "PEEL = Point, Evidence, Explanation, Link.", working: "PEEL", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Point, Evidence, Explanation, Link",
            commonErrors: ["Choosing (c) — that's PEEL variant."],
          },
        },
        {
          id: "cie-ol-el-at2-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to structure an answer effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer structure", statement: "Point, evidence, explanation, link." },
            ],
            steps: [
              { reasoning: "Make a clear point.", working: "point", marks: 1, markCode: "AO2" },
              { reasoning: "Support with evidence.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Explain the evidence.", working: "explanation", marks: 1, markCode: "AO2" },
              { reasoning: "Link back to question.", working: "link", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Point→evidence→explanation→link.",
            commonErrors: ["No structure — disorganised answer."],
          },
        },
        {
          id: "cie-ol-el-at2-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to end an answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add new ideas" },
              { id: "b", text: "Link back to the question" },
              { id: "c", text: "Stop abruptly" },
              { id: "d", text: "Repeat the question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer ending", statement: "Link back to question." },
            ],
            steps: [
              { reasoning: "Link back to question.", working: "link", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Link back to the question",
            commonErrors: ["Choosing (b) — incomplete."],
          },
        },
        {
          id: "cie-ol-el-at2-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An answer needs 5 points; a student writes 4 of them. How many are missing? (b) If the answer is 300 words and should have 5 points, how many words per point on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 60, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer planning", statement: "Check points; calculate word distribution." },
            ],
            steps: [
              { reasoning: "5 minus 4 equals 1 missing point.", working: "5 - 4 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "300 divided by 5 equals 60 words per point.", working: "300 / 5 = 60", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 60 words",
            commonErrors: ["Not allocating enough words per point."],
          },
        },
        {
          id: "cie-ol-el-at2-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply answer techniques.",
          parts: [
            { label: "a", prompt: "What is PEEL?", marks: 2 },
            { label: "b", prompt: "Name two answer techniques.", marks: 2 },
            { label: "c", prompt: "How to structure an answer?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer techniques", statement: "PEEL, techniques, structure." },
            ],
            steps: [
              { part: "a", reasoning: "Point, Evidence, Explanation, Link.", working: "PEEL", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All parts named.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "PEEL, quote evidence, plan, check — any two.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Point→evidence→explanation→link.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) PEEL (b) two techniques (c) point→evidence→explanation→link",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "All named.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["No structure — disorganised answer."],
          },
        },
        {
          id: "cie-ol-el-at2-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to check your answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy another answer" },
              { id: "b", text: "Guess" },
              { id: "c", text: "Skip checking" },
              { id: "d", text: "Re-read and verify points" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer checking", statement: "Re-read and verify." },
            ],
            steps: [
              { reasoning: "Re-read and verify.", working: "verify", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Re-read and verify points",
            commonErrors: ["Choosing (b) — errors remain."],
          },
        },
        {
          id: "cie-ol-el-at2-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An answer needs 6 points; a student writes 5 of them. How many are missing? (b) If the answer is 400 words and should have 4 points, how many words per point on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 100, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answer planning", statement: "Check points; calculate word distribution." },
            ],
            steps: [
              { reasoning: "6 minus 5 equals 1 missing point.", working: "6 - 5 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "400 divided by 4 equals 100 words per point.", working: "400 / 4 = 100", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 100 words",
            commonErrors: ["Not allocating enough words per point."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit4c-notes",
      title: "Unit 4 — revision notes (part 3)",
      summary: "Unseen text strategy, question types, answer techniques.",
      sections: [
        {
          heading: "Reading strategy",
          body: "Skim→questions→re-read→annotate→answer. Question types: literal, inference, language. Answer: point→evidence→explanation.",
        },
      ],
    },
  ],
};
