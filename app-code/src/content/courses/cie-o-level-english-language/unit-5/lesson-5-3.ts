import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cie-ol-el-lesson-5-3",
  code: "5-3",
  title: "Directed writing practice",
  goal: "I CAN apply writing skills to directed writing tasks.",
  standards: ["1123 Writing: directed"],
  vocabulary: [
    { term: "Directed writing", definition: "Writing to specific instructions — purpose, audience, format." },
    { term: "Task analysis", definition: "Identifying requirements before writing." },
    { term: "Content requirements", definition: "Specific points that must be included." },
    { term: "Format requirements", definition: "Letter, report, article — specific conventions." },
    { term: "Register matching", definition: "Adapting language to audience." },
    { term: "Word count", definition: "Required length — check limits." },
  ],
  concepts: [
    {
      id: "cie-ol-el-directed-practice",
      title: "Directed writing skills",
      skill: "Analyse tasks and write to specific requirements.",
      lesson: {
        sections: [
          {
            heading: "Task analysis",
            body: "Identify: purpose (why), audience (who), format (what type), content (what to include), word count (how long).",
          },
          {
            heading: "Content requirements",
            body: "Check for specific points that must be included — bullet points, questions, scenarios. Address all requirements.",
          },
          {
            heading: "Format requirements",
            body: "Letter format? Report structure? Article style? Follow conventions precisely.",
          },
        ],
        keyFormulas: [
          { name: "Directed writing", statement: "Purpose+audience+format+content+word count — analyse all before writing." },
        ],
        workedExample: {
          problem: "Write a letter of complaint about faulty goods.",
          solution: "Formal letter format, state problem clearly, provide details, request remedy, polite but firm.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-dw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'directed writing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing to specific instructions" },
              { id: "b", text: "Free writing" },
              { id: "c", text: "Copying" },
              { id: "d", text: "Grammar exercise" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Directed writing", statement: "Writing to specific instructions." },
            ],
            steps: [
              { reasoning: "Directed = instructions.", working: "instructions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Writing to specific instructions",
            commonErrors: ["Choosing (b) — it's guided."],
          },
        },
        {
          id: "cie-ol-el-dw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two elements of directed writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Elements", statement: "Purpose, audience, format, content, word count." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Purpose, audience, format, content, word count (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-dw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to analyse a directed writing task?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Task analysis", statement: "Identify purpose, audience, format, content, word count." },
            ],
            steps: [
              { reasoning: "Identify purpose — why write?", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Identify audience — who reads?", working: "audience", marks: 1, markCode: "AO2" },
              { reasoning: "Identify format and content requirements.", working: "format+content", marks: 1, markCode: "AO2" },
              { reasoning: "Check word count.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Purpose→audience→format→content→word count.",
            commonErrors: ["Skipping analysis — lose marks."],
          },
        },
        {
          id: "cie-ol-el-dw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply directed writing skills.",
          parts: [
            { label: "a", prompt: "Define directed writing.", marks: 1 },
            { label: "b", prompt: "Name key elements.", marks: 2 },
            { label: "c", prompt: "How to analyse task?", marks: 3 },
            { label: "d", prompt: "Common mistakes?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Directed writing", statement: "Definition, elements, analysis, mistakes." },
            ],
            steps: [
              { part: "a", reasoning: "Writing to specific instructions.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Purpose, audience, format, content, word count.", working: "elements", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Identify purpose, audience, format, content, word count.", working: "analysis", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Wrong register, missing format, ignoring content, word limits.", working: "mistakes", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) instructions (b) elements (c) analysis steps (d) mistakes",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple elements.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Analysis clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple mistakes.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Not analysing task — lose marks."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-writing-process",
      title: "Writing process",
      skill: "Follow systematic process for directed writing.",
      lesson: {
        sections: [
          {
            heading: "Step 1: Analyse",
            body: "Read task carefully — identify purpose, audience, format, content, word count.",
          },
          {
            heading: "Step 2: Plan",
            body: "Brainstorm ideas, structure response, note key points to include.",
          },
          {
            heading: "Step 3: Write and check",
            body: "Write response, check format conventions, verify word count, proofread for errors.",
          },
        ],
        keyFormulas: [
          { name: "Process", statement: "Analyse→plan→write→check." },
        ],
        workedExample: {
          problem: "How to write directed response?",
          solution: "Analyse task→plan structure→write→check format/word count/errors.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-wp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in directed writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analyse task" },
              { id: "b", text: "Write immediately" },
              { id: "c", text: "Copy" },
              { id: "d", text: "Skip" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Process", statement: "Analyse first — understand requirements." },
            ],
            steps: [
              { reasoning: "Analyse first.", working: "analyse", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Analyse task",
            commonErrors: ["Writing without analysis — lose marks."],
          },
        },
        {
          id: "cie-ol-el-wp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two writing process steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Steps", statement: "Analyse, plan, write, check." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "steps", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Analyse, plan, write, check (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-wp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is planning important in directed writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "Organises ideas, ensures all requirements met, saves time." },
            ],
            steps: [
              { reasoning: "Organises ideas — clear structure.", working: "organise", marks: 1, markCode: "AO2" },
              { reasoning: "Ensures all requirements are addressed.", working: "requirements", marks: 1, markCode: "AO2" },
              { reasoning: "Saves time — less rewriting.", working: "time", marks: 1, markCode: "AO2" },
              { reasoning: "Importance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Organises ideas, ensures requirements, saves time.",
            commonErrors: ["Writing without planning — lose marks."],
          },
        },
        {
          id: "cie-ol-el-wp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply writing process skills.",
          parts: [
            { label: "a", prompt: "First step?", marks: 1 },
            { label: "b", prompt: "Name process steps.", marks: 3 },
            { label: "c", prompt: "Why planning matters?", marks: 2 },
            { label: "d", prompt: "What to check?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Writing process", statement: "Analyse→plan→write→check." },
            ],
            steps: [
              { part: "a", reasoning: "Analyse task first.", working: "analyse", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Analyse, plan, write, check.", working: "steps", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Organises ideas, ensures requirements, saves time.", working: "planning", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple benefits.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Format, word count, register, errors, completeness.", working: "check", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) analyse (b) steps (c) planning benefits (d) checks",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple steps.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Benefits explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple checks.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No checking — errors remain."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-practice-tasks",
      title: "Practice directed writing tasks",
      skill: "Apply skills to common exam task types.",
      lesson: {
        sections: [
          {
            heading: "Letter tasks",
            body: "Complaint, application, request, invitation — formal format, specific purpose.",
          },
          {
            heading: "Report tasks",
            body: "Event report, survey results, investigation — factual, structured, objective.",
          },
          {
            heading: "Article tasks",
            body: "Newspaper article, magazine feature, blog post — engaging, informative, audience-aware.",
          },
        ],
        keyFormulas: [
          { name: "Task types", statement: "Letters: formal; reports: factual; articles: engaging." },
        ],
        workedExample: {
          problem: "Write article about school event for newsletter.",
          solution: "Engaging headline, introduction, main points, conclusion — written for school community audience.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-pt2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a common directed writing task type?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Letter" },
              { id: "b", text: "Poem" },
              { id: "c", text: "Song" },
              { id: "d", text: "Play" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Task types", statement: "Letters, reports, articles common." },
            ],
            steps: [
              { reasoning: "Letter = common task.", working: "letter", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Letter",
            commonErrors: ["Choosing (b) — that's creative writing."],
          },
        },
        {
          id: "cie-ol-el-pt2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two directed writing task types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Types", statement: "Letter, report, article, review." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Letter, report, article, review (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-pt2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does task type affect writing approach?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Task types", statement: "Letter=formal format; report=factual; article=engaging." },
            ],
            steps: [
              { reasoning: "Letter: formal register, specific format.", working: "letter", marks: 1, markCode: "AO2" },
              { reasoning: "Report: factual, objective, structured.", working: "report", marks: 1, markCode: "AO2" },
              { reasoning: "Article: engaging, audience-aware.", working: "article", marks: 1, markCode: "AO2" },
              { reasoning: "Approach differs by type.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Letter=formal; report=factual; article=engaging — approach varies.",
            commonErrors: ["Same approach for all — must adapt."],
          },
        },
        {
          id: "cie-ol-el-pt2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply directed writing to task types.",
          parts: [
            { label: "a", prompt: "Name task types.", marks: 2 },
            { label: "b", prompt: "Letter approach?", marks: 2 },
            { label: "c", prompt: "Report approach?", marks: 2 },
            { label: "d", prompt: "Article approach?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Task types", statement: "Letters, reports, articles — different approaches." },
            ],
            steps: [
              { part: "a", reasoning: "Letter, report, article, review.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Formal register, specific format, purpose-driven.", working: "letter", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Factual, objective, structured sections.", working: "report", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Engaging headline, audience-aware, informative+entertaining.", working: "article", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) types (b) letter approach (c) report approach (d) article approach",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Multiple types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple elements.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Same approach for all types — must adapt."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-directed-notes",
      title: "Directed writing — revision notes",
      summary: "Task analysis, writing process, task types.",
      sections: [
        {
          heading: "Directed writing",
          body: "Analyse: purpose/audience/format/content/word count. Process: analyse→plan→write→check. Types: letters, reports, articles.",
        },
      ],
    },
  ],
};
