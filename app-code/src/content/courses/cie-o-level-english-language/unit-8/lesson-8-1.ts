import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cie-ol-el-lesson-8-1",
  code: "8-1",
  title: "Reading paper strategies",
  goal: "I CAN apply effective strategies for reading papers.",
  standards: ["1123 Reading strategies"],
  vocabulary: [
    { term: "Reading paper", definition: "Examination component testing comprehension." },
    { term: "Time management", definition: "Allocating time wisely across questions." },
    { term: "Active reading", definition: "Annotating, questioning, summarising." },
    { term: "Text structure", definition: "How information is organised." },
    { term: "Inference", definition: "Reading between the lines." },
    { term: "Evaluation", definition: "Assessing quality and reliability." },
  ],
  concepts: [
    {
      id: "cie-ol-el-reading-strategies",
      title: "Reading paper strategies",
      skill: "Approach reading questions with confidence.",
      lesson: {
        sections: [
          {
            heading: "Before reading",
            body: "Read all questions first — know what to look for. Skim text for structure — headings, paragraphs, arguments.",
          },
          {
            heading: "During reading",
            body: "Read questions carefully — understand what each asks. Locate relevant sections — don't re-read whole text. Take brief notes — key points, quotes, evidence.",
          },
          {
            heading: "After reading",
            body: "Answer questions — refer to your notes. Check time allocation — don't spend too long on one question. Review answers — check for errors, clarity, completeness.",
          },
        ],
        keyFormulas: [
          { name: "Reading strategy", statement: "Questions→skim→active read→notes→answer→review." },
        ],
        workedExample: {
          problem: "Approach a 20-mark comprehension question.",
          solution: "Read question 2-3 times → locate relevant text section → extract evidence → write structured answer → check marks.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before reading the text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read all questions first" },
              { id: "b", text: "Start answering immediately" },
              { id: "c", text: "Ignore questions" },
              { id: "d", text: "Read only last paragraph" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strategy", statement: "Read questions first to know what to look for." },
            ],
            steps: [
              { reasoning: "Questions first — know targets.", working: "questions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read all questions first",
            commonErrors: ["Choosing (b) — need context first."],
          },
        },
        {
          id: "cie-ol-el-rs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'active reading'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active reading", statement: "Engaged reading — annotating, questioning, summarising." },
            ],
            steps: [
              { reasoning: "Engage with text — don't passively read.", working: "engage", marks: 1, markCode: "AO2" },
              { reasoning: "Annotate, question, summarise.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Engaged reading — annotating, questioning, summarising.",
            commonErrors: ["Passive reading — just reading through."],
          },
        },
        {
          id: "cie-ol-el-rs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to manage time in reading paper?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Read questions→allocate time→don't spend too long on one→review at end." },
            ],
            steps: [
              { reasoning: "Read all questions first — plan time.", working: "plan", marks: 1, markCode: "AO2" },
              { reasoning: "Allocate more time to high-mark questions.", working: "marks", marks: 1, markCode: "AO2" },
              { reasoning: "Don't get stuck — move on and return.", working: "move on", marks: 1, markCode: "AO2" },
              { reasoning: "Leave time to review.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Plan time→allocate by marks→don't get stuck→review at end.",
            commonErrors: ["Spending too long on one question."],
          },
        },
        {
          id: "cie-ol-el-rs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Reading paper strategies.",
          parts: [
            { label: "a", prompt: "What before reading?", marks: 1 },
            { label: "b", prompt: "Define active reading.", marks: 2 },
            { label: "c", prompt: "How to manage time?", marks: 3 },
            { label: "d", prompt: "What after answering?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading strategy", statement: "Before/during/after reading approaches." },
            ],
            steps: [
              { part: "a", reasoning: "Read all questions first.", working: "questions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Engaged reading — annotating, questioning, summarising.", working: "active", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Plan time, allocate by marks, don't get stuck, review.", working: "time", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple strategies.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check answers for errors, clarity, completeness; review time.", working: "review", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) questions first (b) engaged reading (c) time management (d) review",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple strategies.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Review clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No time plan — get stuck on one question."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-writing-strategies",
      title: "Writing paper strategies",
      skill: "Approach writing questions effectively.",
      lesson: {
        sections: [
          {
            heading: "Before writing",
            body: "Read question carefully — understand task, audience, purpose. Plan response — key points, structure, evidence.",
          },
          {
            heading: "During writing",
            body: "Write clearly — formal register for exams. Use evidence — quotes, examples, specific details. Vary sentence structure — avoid monotony.",
          },
          {
            heading: "After writing",
            body: "Check spelling and grammar — proofread. Check time — don't run out. Review marks — ensure all parts answered.",
          },
        ],
        keyFormulas: [
          { name: "Writing strategy", statement: "Question→plan→write→check. Clear+evidence+varied structure." },
        ],
        workedExample: {
          problem: "Approach a 25-mark directed writing task.",
          solution: "Read prompt → identify audience/purpose → plan structure → write with evidence → check grammar/time.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-ws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read question and plan" },
              { id: "b", text: "Start writing immediately" },
              { id: "c", text: "Ignore audience" },
              { id: "d", text: "Write without checking" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strategy", statement: "Read question, identify audience/purpose, plan." },
            ],
            steps: [
              { reasoning: "Plan before writing.", working: "plan", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read question and plan",
            commonErrors: ["Choosing (b) — need planning."],
          },
        },
        {
          id: "cie-ol-el-ws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'formal register'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formal register", statement: "Professional, objective language — no slang or contractions." },
            ],
            steps: [
              { reasoning: "Professional language.", working: "professional", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Professional, objective language — appropriate for exams.",
            commonErrors: ["Informal — too casual for exams."],
          },
        },
        {
          id: "cie-ol-el-ws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to improve writing in exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Writing improvement", statement: "Clear structure, evidence, varied sentences, proofread." },
            ],
            steps: [
              { reasoning: "Plan structure — introduction, body, conclusion.", working: "structure", marks: 1, markCode: "AO2" },
              { reasoning: "Use evidence — quotes, examples, details.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Vary sentence length for rhythm.", working: "variety", marks: 1, markCode: "AO2" },
              { reasoning: "Proofread for errors.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Clear structure+evidence+varied sentences+proofread.",
            commonErrors: ["No planning — rambling without structure."],
          },
        },
        {
          id: "cie-ol-el-ws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Writing paper strategies.",
          parts: [
            { label: "a", prompt: "What before writing?", marks: 1 },
            { label: "b", prompt: "Define formal register.", marks: 2 },
            { label: "c", prompt: "How to improve writing?", marks: 3 },
            { label: "d", prompt: "What after writing?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Writing strategy", statement: "Before/during/after writing approaches." },
            ],
            steps: [
              { part: "a", reasoning: "Read question, identify audience/purpose, plan.", working: "plan", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Professional, objective language.", working: "formal", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "No slang/contractions.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Structure, evidence, varied sentences, proofread.", working: "improve", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple strategies.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check spelling/grammar, time, all parts answered.", working: "check", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) plan (b) professional language (c) structure/evidence/variety (d) check",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple strategies.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Checks clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No proofreading — errors cost marks."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-final-review",
      title: "Final review and exam preparation",
      skill: "Consolidate learning and prepare for examination.",
      lesson: {
        sections: [
          {
            heading: "Review key concepts",
            body: "Reading: comprehension, inference, evaluation. Writing: narrative, expository, persuasive, transactional. Language: grammar, punctuation, vocabulary.",
          },
          {
            heading: "Practice papers",
            body: "Complete past papers under timed conditions. Analyse mark schemes — understand what examiners expect. Identify weaknesses — focus revision on problem areas.",
          },
          {
            heading: "Exam day tips",
            body: "Read instructions carefully. Manage time — don't spend too long on one question. Answer all questions — even if unsure, attempt. Check work — proofread before submitting.",
          },
        ],
        keyFormulas: [
          { name: "Exam prep", statement: "Review→practice→analyse→revise→exam day tips." },
        ],
        workedExample: {
          problem: "Prepare for O Level English Language exam.",
          solution: "Review all units → complete 2-3 past papers → analyse mark schemes → revise weak areas → practise time management.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before the exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Review key concepts" },
              { id: "b", text: "Cram all night" },
              { id: "c", text: "Ignore revision" },
              { id: "d", text: "Only read notes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Prep", statement: "Review key concepts, practice papers, analyse mark schemes." },
            ],
            steps: [
              { reasoning: "Review before exam.", working: "review", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Review key concepts",
            commonErrors: ["Choosing (b) — ineffective cramming."],
          },
        },
        {
          id: "cie-ol-el-fr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why analyse mark schemes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mark schemes", statement: "Understand what examiners expect — guide revision." },
            ],
            steps: [
              { reasoning: "Learn examiner expectations.", working: "expectations", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Understand examiner expectations — guide effective revision.",
            commonErrors: ["Ignoring mark schemes — miss key requirements."],
          },
        },
        {
          id: "cie-ol-el-fr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to identify revision weaknesses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Weaknesses", statement: "Analyse past papers — find patterns of lost marks." },
            ],
            steps: [
              { reasoning: "Complete practice papers under timed conditions.", working: "practice", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse mark schemes — see where marks lost.", working: "analyse", marks: 1, markCode: "AO2" },
              { reasoning: "Identify patterns — focus revision on weak areas.", working: "patterns", marks: 1, markCode: "AO2" },
              { reasoning: "Process clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Practice papers→analyse mark schemes→identify patterns→focus revision.",
            commonErrors: ["Revising everything equally — focus on weaknesses."],
          },
        },
        {
          id: "cie-ol-el-fr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Final exam preparation.",
          parts: [
            { label: "a", prompt: "What before exam?", marks: 1 },
            { label: "b", prompt: "Why analyse mark schemes?", marks: 2 },
            { label: "c", prompt: "How to identify weaknesses?", marks: 3 },
            { label: "d", prompt: "Exam day tips?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam prep", statement: "Review, practice, analyse, revise, exam day." },
            ],
            steps: [
              { part: "a", reasoning: "Review key concepts.", working: "review", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Understand examiner expectations.", working: "expectations", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Guide revision.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Practice papers, analyse mark schemes, identify patterns, focus revision.", working: "weaknesses", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Read instructions, manage time, answer all, check work.", working: "tips", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple tips.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) review (b) examiner expectations (c) practice+analyse+focus (d) instructions/time/all/check",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Process clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Tips clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No exam prep — arrive unprepared."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-u8-exam-notes",
      title: "Final review — revision notes",
      summary: "Exam strategies and preparation.",
      sections: [
        {
          heading: "Exam strategies",
          body: "Reading: questions first, active reading, time management, review. Writing: plan, evidence, varied structure, proofread.",
        },
        {
          heading: "Preparation",
          body: "Review key concepts, practice papers, analyse mark schemes, identify weaknesses, focus revision. Exam day: read instructions, manage time, answer all, check work.",
        },
      ],
    },
  ],
};
