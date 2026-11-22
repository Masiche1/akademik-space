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
              { id: "a", text: "Read only last paragraph" },
              { id: "b", text: "Ignore questions" },
              { id: "c", text: "Start answering immediately" },
              { id: "d", text: "Read all questions first" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strategy", statement: "Read questions first to know what to look for." },
            ],
            steps: [
              { reasoning: "Questions first — know targets.", working: "questions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Read all questions first",
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
    {
      id: "cie-ol-el-rs-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you do BEFORE reading a passage?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Skip the passage" },
          { id: "b", text: "Start answering immediately" },
          { id: "c", text: "Read the questions first" },
          { id: "d", text: "Memorise everything" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Strategy", statement: "Read questions first." },
        ],
        steps: [
          { reasoning: "Read questions before passage.", working: "questions", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Read the questions first",
        commonErrors: ["Reading passage without questions."],
      },
    },
    {
      id: "cie-ol-el-rs-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is active reading?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Skimming only" },
          { id: "b", text: "Engaged reading — annotating, questioning, summarising" },
          { id: "c", text: "Copying text" },
          { id: "d", text: "Passive reading" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Active reading", statement: "Engaged — annotating, questioning." },
        ],
        steps: [
          { reasoning: "Active reading = engaged.", working: "active", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Engaged reading — annotating, questioning, summarising",
        commonErrors: ["Passive reading only."],
      },
    },
    {
      id: "cie-ol-el-rs-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What is the best time management strategy for reading?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Spend all time on one question" },
          { id: "b", text: "Allocate time per question and review at end" },
          { id: "c", text: "Skip difficult questions entirely" },
          { id: "d", text: "Don't check answers" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time, don't get stuck, review." },
        ],
        steps: [
          { reasoning: "Allocate time and review.", working: "time", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(b)** Allocate time per question and review at end",
        commonErrors: ["Getting stuck on one question."],
      },
    },
    {
      id: "cie-ol-el-rs-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should you do AFTER reading the passage?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Answer questions using evidence from text" },
          { id: "b", text: "Memorise the passage" },
          { id: "c", text: "Write a summary" },
          { id: "d", text: "Ignore the questions" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "After reading", statement: "Answer with evidence." },
        ],
        steps: [
          { reasoning: "Answer using text evidence.", working: "evidence", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Answer questions using evidence from text",
        commonErrors: ["Answering without evidence."],
      },
    },
    {
      id: "cie-ol-el-rs-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is skimming?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Quickly reading for main idea" },
          { id: "b", text: "Copying text" },
          { id: "c", text: "Skipping text" },
          { id: "d", text: "Reading every word carefully" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Skimming", statement: "Quick read for main idea." },
        ],
        steps: [
          { reasoning: "Skimming = quick main idea.", working: "skimming", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Quickly reading for main idea",
        commonErrors: ["Confusing with detailed reading."],
      },
    },
    {
      id: "cie-ol-el-rs-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A reading paper has 10 questions. A student answers only 6. How many questions remain unanswered?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 4 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Completion", statement: "Answer all questions." },
        ],
        steps: [
          { reasoning: "10 - 6 = 4 unanswered.", working: "10 - 6 = 4", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "4",
        commonErrors: ["Leaving questions unanswered."],
      },
    },
    {
      id: "cie-ol-el-rs-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A reading passage has 8 paragraphs. A student annotates only 5. How many paragraphs lack annotation?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 3 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Annotation", statement: "Annotate all paragraphs." },
        ],
        steps: [
          { reasoning: "8 - 5 = 3 unannotated.", working: "8 - 5 = 3", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "3",
        commonErrors: ["Not annotating all paragraphs."],
      },
    },
    {
      id: "cie-ol-el-rs-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A reading strategy has 4 steps: questions, skim, active read, review. A student completes 3. How many steps remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Strategy", statement: "Four steps total." },
        ],
        steps: [
          { reasoning: "4 steps; 3 completed.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One step remains.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Missing a step."],
      },
    },
    {
      id: "cie-ol-el-rs-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A reading paper allows 60 minutes for 4 passages. If a student spends 25 minutes on passage 1, how many minutes remain for the other 3 passages?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 35 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time per passage." },
        ],
        steps: [
          { reasoning: "60 - 25 = 35 minutes remain.", working: "60 - 25 = 35", marks: 1, markCode: "AO3" },
          { reasoning: "35 minutes for 3 passages.", working: "35", marks: 1, markCode: "AO3" },
          { reasoning: "Approximately 12 minutes per remaining passage.", working: "12", marks: 2, markCode: "AO2" },
        ],
        finalAnswer: "35",
        commonErrors: ["Spending too long on one passage."],
      },
    },
    {
      id: "cie-ol-el-rs-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the recommended reading strategy for an exam.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Strategy", statement: "Questions→skim→active read→notes→answer→review." },
        ],
        steps: [
          { reasoning: "Read questions first to know what to look for.", working: "questions", marks: 1, markCode: "AO2" },
          { reasoning: "Skim for main idea, then read actively.", working: "skim", marks: 1, markCode: "AO2" },
          { reasoning: "Answer using evidence, review at end.", working: "review", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Questions→skim→active read→notes→answer→review.",
        commonErrors: ["Reading without questions."],
      },
    },
    {
      id: "cie-ol-el-rs-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why reading questions before the passage improves performance.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Strategy", statement: "Questions guide reading." },
        ],
        steps: [
          { reasoning: "Questions tell you what to look for.", working: "look for", marks: 1, markCode: "AO2" },
          { reasoning: "Saves time — focus on relevant parts.", working: "time", marks: 1, markCode: "AO2" },
          { reasoning: "Improves accuracy — targeted reading.", working: "accuracy", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Questions guide reading — saves time, improves accuracy.",
        commonErrors: ["Reading passage without questions."],
      },
    },
    {
      id: "cie-ol-el-rs-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about reading strategies.",
      parts: [
        { label: "a", prompt: "What to do before reading?", marks: 2 },
        { label: "b", prompt: "What is active reading?", marks: 2 },
        { label: "c", prompt: "What to do after reading?", marks: 2 },
        { label: "d", prompt: "Why read questions first?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Strategy", statement: "Before, during, after reading." },
        ],
        steps: [
          { part: "a", reasoning: "Read questions first.", working: "before", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Engaged reading — annotating, questioning.", working: "active", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Answer using evidence, review.", working: "after", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Questions guide reading — save time, improve accuracy.", working: "guide", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) questions first (b) engaged reading (c) answer+review (d) guides reading",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Reading without questions."],
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
              { id: "a", text: "Start writing immediately" },
              { id: "b", text: "Read question and plan" },
              { id: "c", text: "Write without checking" },
              { id: "d", text: "Ignore audience" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strategy", statement: "Read question, identify audience/purpose, plan." },
            ],
            steps: [
              { reasoning: "Plan before writing.", working: "plan", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Read question and plan",
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
    {
      id: "cie-ol-el-ws-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you do BEFORE writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Write conclusion first" },
          { id: "b", text: "Read question, identify audience/purpose, plan" },
          { id: "c", text: "Start writing immediately" },
          { id: "d", text: "Skip planning" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Strategy", statement: "Read question, identify, plan." },
        ],
        steps: [
          { reasoning: "Analyse and plan before writing.", working: "plan", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Read question, identify audience/purpose, plan",
        commonErrors: ["Writing without planning."],
      },
    },
    {
      id: "cie-ol-el-ws-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is formal register?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Poetic and decorative" },
          { id: "b", text: "Slang and contractions" },
          { id: "c", text: "Professional, objective language — no slang" },
          { id: "d", text: "Casual and friendly" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Formal register", statement: "Professional, objective." },
        ],
        steps: [
          { reasoning: "Formal = professional, objective.", working: "formal", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Professional, objective language — no slang",
        commonErrors: ["Using slang in formal writing."],
      },
    },
    {
      id: "cie-ol-el-ws-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "How can you improve your writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Use complex words only" },
          { id: "b", text: "Write longer only" },
          { id: "c", text: "Skip checking" },
          { id: "d", text: "Clear structure, evidence, varied sentences, proofread" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Improvement", statement: "Clear structure, evidence, varied sentences, proofread." },
        ],
        steps: [
          { reasoning: "Improve via structure, evidence, variety, proofreading.", working: "improve", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(d)** Clear structure, evidence, varied sentences, proofread",
        commonErrors: ["Only making it longer."],
      },
    },
    {
      id: "cie-ol-el-ws-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should you do AFTER writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Check format, word count, proofread for errors" },
          { id: "b", text: "Ignore errors" },
          { id: "c", text: "Submit immediately" },
          { id: "d", text: "Rewrite from scratch" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Checking", statement: "Format, word count, proofread." },
        ],
        steps: [
          { reasoning: "Check format, word count, proofread.", working: "check", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Check format, word count, proofread for errors",
        commonErrors: ["Skipping the check."],
      },
    },
    {
      id: "cie-ol-el-ws-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the writing process?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Check → write" },
          { id: "b", text: "Question → plan → write → check" },
          { id: "c", text: "Write → submit" },
          { id: "d", text: "Plan → submit" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "Question→plan→write→check." },
        ],
        steps: [
          { reasoning: "Process = question→plan→write→check.", working: "process", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Question → plan → write → check",
        commonErrors: ["Skipping steps."],
      },
    },
    {
      id: "cie-ol-el-ws-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A writing task requires at least 300 words. A draft is 250 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 50 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "300 - 250 = 50 words short.", working: "300 - 250 = 50", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "50",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-ws-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A writing task has 4 stages: question, plan, write, check. A student completes 3. How many stages remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "Four stages total." },
        ],
        steps: [
          { reasoning: "4 - 3 = 1 stage remains.", working: "4 - 3 = 1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Missing a stage."],
      },
    },
    {
      id: "cie-ol-el-ws-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "An essay uses 5 sentence types. A writer uses only 3. How many sentence types are unused?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Variety", statement: "Use varied sentence types." },
        ],
        steps: [
          { reasoning: "5 types; 3 used.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two types unused.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Using only simple sentences."],
      },
    },
    {
      id: "cie-ol-el-ws-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An essay must be between 350 and 400 words. A draft is 390 words, and the student adds a 15-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "390 + 15 = 405 words after introduction.", working: "390 + 15 = 405", marks: 1, markCode: "AO3" },
          { reasoning: "405 - 400 = 5 words over.", working: "405 - 400 = 5", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 5 words.", working: "5", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "5",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-ws-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the writing process for an exam.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Process", statement: "Question→plan→write→check." },
        ],
        steps: [
          { reasoning: "Read question, identify audience/purpose.", working: "question", marks: 1, markCode: "AO2" },
          { reasoning: "Plan structure and brainstorm ideas.", working: "plan", marks: 1, markCode: "AO2" },
          { reasoning: "Write then check format, word count, errors.", working: "check", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Question→plan→write→check.",
        commonErrors: ["Skipping planning."],
      },
    },
    {
      id: "cie-ol-el-ws-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to improve writing quality.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Improvement", statement: "Clear structure, evidence, variety, proofreading." },
        ],
        steps: [
          { reasoning: "Clear structure — logical organisation.", working: "structure", marks: 1, markCode: "AO2" },
          { reasoning: "Evidence — support points.", working: "evidence", marks: 1, markCode: "AO2" },
          { reasoning: "Varied sentences — avoid monotony.", working: "varied", marks: 1, markCode: "AO2" },
          { reasoning: "Proofread — catch errors.", working: "proofread", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Structure, evidence, variety, proofreading.",
        commonErrors: ["Only making it longer."],
      },
    },
    {
      id: "cie-ol-el-ws-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about writing strategies.",
      parts: [
        { label: "a", prompt: "What to do before writing?", marks: 2 },
        { label: "b", prompt: "What is formal register?", marks: 2 },
        { label: "c", prompt: "What to do after writing?", marks: 2 },
        { label: "d", prompt: "How to improve writing?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Strategies", statement: "Before, during, after, improvement." },
        ],
        steps: [
          { part: "a", reasoning: "Read question, identify, plan.", working: "before", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Professional, objective, no slang.", working: "formal", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Check format, word count, proofread.", working: "after", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Structure, evidence, variety, proofreading.", working: "improve", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Multiple methods.", working: "multiple", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) question+plan (b) professional/objective (c) check+proofread (d) structure/evidence/variety",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple methods.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
        ],
        commonErrors: ["Skipping planning or checking."],
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
              { id: "a", text: "Only read notes" },
              { id: "b", text: "Review key concepts" },
              { id: "c", text: "Ignore revision" },
              { id: "d", text: "Cram all night" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Prep", statement: "Review key concepts, practice papers, analyse mark schemes." },
            ],
            steps: [
              { reasoning: "Review before exam.", working: "review", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Review key concepts",
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
    {
      id: "cie-ol-el-fr-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you do to prepare for the exam?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only read notes" },
          { id: "b", text: "Review key concepts, practice papers, analyse mark schemes" },
          { id: "c", text: "Skip practice" },
          { id: "d", text: "Memorise everything" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Prep", statement: "Review, practice, analyse." },
        ],
        steps: [
          { reasoning: "Review, practice, analyse mark schemes.", working: "prep", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Review key concepts, practice papers, analyse mark schemes",
        commonErrors: ["Only reading notes."],
      },
    },
    {
      id: "cie-ol-el-fr-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What are mark schemes?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Textbooks" },
          { id: "b", text: "Answer keys only" },
          { id: "c", text: "Past papers" },
          { id: "d", text: "Guides showing what examiners expect" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Mark schemes", statement: "Show what examiners expect." },
        ],
        steps: [
          { reasoning: "Mark schemes = examiner expectations.", working: "mark schemes", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Guides showing what examiners expect",
        commonErrors: ["Ignoring mark schemes."],
      },
    },
    {
      id: "cie-ol-el-fr-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "How should you analyse past papers?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Memorise answers" },
          { id: "b", text: "Ignore them" },
          { id: "c", text: "Find patterns of lost marks and focus revision" },
          { id: "d", text: "Only check scores" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Weaknesses", statement: "Analyse past papers for patterns." },
        ],
        steps: [
          { reasoning: "Analyse for patterns of lost marks.", working: "patterns", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** Find patterns of lost marks and focus revision",
        commonErrors: ["Not analysing mistakes."],
      },
    },
    {
      id: "cie-ol-el-fr-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should you do on exam day?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Rush through" },
          { id: "b", text: "Panic" },
          { id: "c", text: "Arrive early, read instructions, manage time" },
          { id: "d", text: "Skip questions" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Exam day", statement: "Arrive early, read instructions, manage time." },
        ],
        steps: [
          { reasoning: "Exam day tips: arrive early, read instructions, manage time.", working: "tips", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Arrive early, read instructions, manage time",
        commonErrors: ["Panicking or rushing."],
      },
    },
    {
      id: "cie-ol-el-fr-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the purpose of revision notes?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Replace studying" },
          { id: "b", text: "Waste time" },
          { id: "c", text: "Consolidate learning for quick review" },
          { id: "d", text: "Confuse students" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Notes", statement: "Consolidate learning." },
        ],
        steps: [
          { reasoning: "Notes consolidate learning.", working: "consolidate", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Consolidate learning for quick review",
        commonErrors: ["Thinking notes replace studying."],
      },
    },
    {
      id: "cie-ol-el-fr-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A student has 9 units to review. If 5 are complete, how many units remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 4 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Revision", statement: "Review all units." },
        ],
        steps: [
          { reasoning: "9 - 5 = 4 units remain.", working: "9 - 5 = 4", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "4",
        commonErrors: ["Not reviewing all units."],
      },
    },
    {
      id: "cie-ol-el-fr-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A student completes 3 practice papers. If 5 are recommended, how many remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Practice", statement: "Complete recommended papers." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 papers remain.", working: "5 - 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Insufficient practice."],
      },
    },
    {
      id: "cie-ol-el-fr-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "An exam has 4 papers. A student practises only 2. How many papers remain unpractised?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Practice", statement: "Practise all papers." },
        ],
        steps: [
          { reasoning: "4 papers; 2 practised.", working: "4 - 2 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two papers unpractised.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Practising only some papers."],
      },
    },
    {
      id: "cie-ol-el-fr-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An exam allows 120 minutes for 4 sections. A student spends 40 minutes on section 1. How many minutes remain for the other 3 sections?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 80 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time per section." },
        ],
        steps: [
          { reasoning: "120 - 40 = 80 minutes remain.", working: "120 - 40 = 80", marks: 1, markCode: "AO3" },
          { reasoning: "80 minutes for 3 sections.", working: "80", marks: 1, markCode: "AO3" },
          { reasoning: "Approximately 27 minutes per remaining section.", working: "27", marks: 2, markCode: "AO2" },
        ],
        finalAnswer: "80",
        commonErrors: ["Spending too long on one section."],
      },
    },
    {
      id: "cie-ol-el-fr-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how to prepare effectively for the exam.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Prep", statement: "Review, practice, analyse, revise." },
        ],
        steps: [
          { reasoning: "Review key concepts and notes.", working: "review", marks: 1, markCode: "AO2" },
          { reasoning: "Practice papers under timed conditions.", working: "practice", marks: 1, markCode: "AO2" },
          { reasoning: "Analyse mark schemes and past papers.", working: "analyse", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Review→practice→analyse→revise.",
        commonErrors: ["Only reading notes."],
      },
    },
    {
      id: "cie-ol-el-fr-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why analysing past papers improves exam performance.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Analysis", statement: "Find patterns of lost marks." },
        ],
        steps: [
          { reasoning: "Identifies patterns of mistakes.", working: "patterns", marks: 1, markCode: "AO2" },
          { reasoning: "Shows what examiners expect.", working: "expect", marks: 1, markCode: "AO2" },
          { reasoning: "Guides targeted revision.", working: "targeted", marks: 1, markCode: "AO2" },
          { reasoning: "Improves time management and technique.", working: "technique", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Patterns reveal weaknesses — guides targeted revision.",
        commonErrors: ["Not analysing mistakes."],
      },
    },
    {
      id: "cie-ol-el-fr-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about exam preparation.",
      parts: [
        { label: "a", prompt: "What to review?", marks: 2 },
        { label: "b", prompt: "What are mark schemes?", marks: 2 },
        { label: "c", prompt: "How to analyse past papers?", marks: 2 },
        { label: "d", prompt: "What to do on exam day?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Exam prep", statement: "Review, mark schemes, analysis, exam day." },
        ],
        steps: [
          { part: "a", reasoning: "Key concepts, notes, practice papers.", working: "review", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Multiple items.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Guides showing examiner expectations.", working: "mark schemes", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Find patterns of lost marks.", working: "patterns", marks: 1, markCode: "AO2" },
          { part: "c", reasoning: "Guide revision.", working: "revision", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Arrive early, read instructions, manage time.", working: "exam day", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Multiple tips.", working: "multiple", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) concepts/notes (b) examiner expectations (c) patterns (d) arrive early/manage time",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Multiple items.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple tips.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Few.", part: "d" },
        ],
        commonErrors: ["Not analysing past papers."],
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
