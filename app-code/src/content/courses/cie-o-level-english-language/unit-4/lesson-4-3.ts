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
              { id: "b", text: "Answer questions immediately" },
              { id: "c", text: "Memorise" },
              { id: "d", text: "Skip" },
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
              { id: "a", text: "What is stated directly" },
              { id: "b", text: "What is implied" },
              { id: "c", text: "Word meaning" },
              { id: "d", text: "Tone analysis" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "Personal opinion" },
              { id: "c", text: "Guess" },
              { id: "d", text: "Nothing" },
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
