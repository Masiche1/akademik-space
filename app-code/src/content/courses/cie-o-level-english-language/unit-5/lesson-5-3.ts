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
              { id: "a", text: "Grammar exercise" },
              { id: "b", text: "Copying" },
              { id: "c", text: "Free writing" },
              { id: "d", text: "Writing to specific instructions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Directed writing", statement: "Writing to specific instructions." },
            ],
            steps: [
              { reasoning: "Directed = instructions.", working: "instructions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Writing to specific instructions",
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
    {
      id: "cie-ol-el-dw-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "In directed writing, 'purpose' refers to:",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "How long it should be" },
          { id: "b", text: "What format to use" },
          { id: "c", text: "Who will read it" },
          { id: "d", text: "Why the writing is being done" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Purpose", statement: "Why the writing is being done." },
        ],
        steps: [
          { reasoning: "Purpose = why.", working: "purpose", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Why the writing is being done",
        commonErrors: ["Confusing purpose with audience or format."],
      },
    },
    {
      id: "cie-ol-el-dw-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "'Audience' in directed writing means:",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "What the writer wants" },
          { id: "b", text: "When it is due" },
          { id: "c", text: "Who will read the writing" },
          { id: "d", text: "Where it will be published" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Audience", statement: "Who will read the writing." },
        ],
        steps: [
          { reasoning: "Audience = who reads.", working: "audience", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Who will read the writing",
        commonErrors: ["Confusing audience with purpose."],
      },
    },
    {
      id: "cie-ol-el-dw-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "A task says 'Include all three bullet points in your answer.' What does this require?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Ignore the bullet points" },
          { id: "b", text: "Address every specified content point" },
          { id: "c", text: "Write only about one point" },
          { id: "d", text: "Copy the bullet points verbatim" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Content", statement: "All specified content points must be addressed." },
        ],
        steps: [
          { reasoning: "Must address all required content points.", working: "content", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(b)** Address every specified content point",
        commonErrors: ["Addressing only some requirements."],
      },
    },
    {
      id: "cie-ol-el-dw-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "A task requires 'formal letter format'. Which element is essential?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A headline" },
          { id: "b", text: "Sender's and recipient's addresses" },
          { id: "c", text: "Bullet points" },
          { id: "d", text: "A photo" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Format", statement: "Formal letters need address blocks." },
        ],
        steps: [
          { reasoning: "Addresses are essential in formal letters.", working: "addresses", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Sender's and recipient's addresses",
        commonErrors: ["Omitting format elements."],
      },
    },
    {
      id: "cie-ol-el-dw-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does 'word count' tell you in a directed writing task?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "How long the response should be" },
          { id: "b", text: "Who the audience is" },
          { id: "c", text: "How many questions there are" },
          { id: "d", text: "What format to use" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Word count", statement: "Required length of response." },
        ],
        steps: [
          { reasoning: "Word count = required length.", working: "length", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** How long the response should be",
        commonErrors: ["Ignoring word count requirements."],
      },
    },
    {
      id: "cie-ol-el-dw-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A directed writing task allows 100-150 words. A student writes 170 words. How many words must be cut?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 20 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Stay within maximum." },
        ],
        steps: [
          { reasoning: "170 - 150 = 20 words over.", working: "170 - 150 = 20", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "20",
        commonErrors: ["Using minimum instead of maximum."],
      },
    },
    {
      id: "cie-ol-el-dw-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A task requires at least 120 words. A draft is 95 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 25 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "120 - 95 = 25 words short.", working: "120 - 95 = 25", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "25",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-dw-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A task lists 5 requirements to analyse: purpose, audience, format, content, word count. A student identifies 3 of them. How many remain unidentified?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Analysis", statement: "All five elements must be identified." },
        ],
        steps: [
          { reasoning: "5 requirements total; 3 identified.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two requirements remain unidentified.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Thinking partial analysis is enough."],
      },
    },
    {
      id: "cie-ol-el-dw-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A task allows 130-170 words. A draft is 150 words, and the student adds a 8-word subject line. How many words can the body still grow by?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 12 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count toward total." },
        ],
        steps: [
          { reasoning: "150 + 8 = 158 words after addition.", working: "150 + 8 = 158", marks: 1, markCode: "AO3" },
          { reasoning: "170 - 158 = 12 words of headroom.", working: "170 - 158 = 12", marks: 2, markCode: "AO3" },
          { reasoning: "Body may grow by 12 words.", working: "12", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "12",
        commonErrors: ["Forgetting subject line counts."],
      },
    },
    {
      id: "cie-ol-el-dw-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the five elements to identify when analysing a directed writing task.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Analysis", statement: "Purpose, audience, format, content, word count." },
        ],
        steps: [
          { reasoning: "Purpose (why) and audience (who).", working: "purpose", marks: 1, markCode: "AO2" },
          { reasoning: "Format (what type) and content (what to include).", working: "format", marks: 1, markCode: "AO2" },
          { reasoning: "Word count (how long).", working: "word count", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Purpose, audience, format, content, word count.",
        commonErrors: ["Missing one or more elements."],
      },
    },
    {
      id: "cie-ol-el-dw-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Why is it important to check format requirements before writing a directed response?",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Format", statement: "Format conventions are assessed." },
        ],
        steps: [
          { reasoning: "Different tasks require different formats (letter, report, article).", working: "different", marks: 1, markCode: "AO2" },
          { reasoning: "Wrong format loses marks even if content is good.", working: "marks", marks: 1, markCode: "AO2" },
          { reasoning: "Checking ensures conventions are followed precisely.", working: "conventions", marks: 1, markCode: "AO2" },
          { reasoning: "Saves time — avoids rewriting.", working: "time", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Format is assessed; checking prevents lost marks and rewrites.",
        commonErrors: ["Ignoring format until after writing."],
      },
    },
    {
      id: "cie-ol-el-dw-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about directed writing analysis.",
      parts: [
        { label: "a", prompt: "Define purpose.", marks: 2 },
        { label: "b", prompt: "Define audience.", marks: 2 },
        { label: "c", prompt: "Name two format requirements.", marks: 2 },
        { label: "d", prompt: "Why check content requirements?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Directed writing", statement: "Purpose, audience, format, content." },
        ],
        steps: [
          { part: "a", reasoning: "Why the writing is being done.", working: "purpose", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Who will read the writing.", working: "audience", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Letter format, report structure, article style.", working: "format", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Two valid examples.", working: "two", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "All specified points must be addressed.", working: "all", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Missing points lose marks.", working: "marks", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) why (b) who reads (c) letter/report/article (d) all points required",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Two formats.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Confusing purpose and audience."],
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
              { id: "a", text: "Skip" },
              { id: "b", text: "Analyse task" },
              { id: "c", text: "Write immediately" },
              { id: "d", text: "Copy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Process", statement: "Analyse first — understand requirements." },
            ],
            steps: [
              { reasoning: "Analyse first.", working: "analyse", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Analyse task",
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
    {
      id: "cie-ol-el-wp-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the first step in the directed writing process?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Plan the conclusion" },
          { id: "b", text: "Analyse the task" },
          { id: "c", text: "Check spelling" },
          { id: "d", text: "Write the response" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "Analyse first." },
        ],
        steps: [
          { reasoning: "Analyse is step 1.", working: "analyse", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Analyse the task",
        commonErrors: ["Writing before analysing."],
      },
    },
    {
      id: "cie-ol-el-wp-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What happens in the 'plan' stage of directed writing?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Submit the work" },
          { id: "b", text: "Write the final version" },
          { id: "c", text: "Brainstorm ideas and structure the response" },
          { id: "d", text: "Check word count only" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Planning", statement: "Brainstorm and structure before writing." },
        ],
        steps: [
          { reasoning: "Plan = brainstorm + structure.", working: "plan", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Brainstorm ideas and structure the response",
        commonErrors: ["Skipping planning — leads to poor structure."],
      },
    },
    {
      id: "cie-ol-el-wp-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "Why is planning important before writing a directed response?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "It is optional decoration" },
          { id: "b", text: "It replaces writing" },
          { id: "c", text: "It wastes time" },
          { id: "d", text: "It organises ideas and ensures all requirements are met" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Planning", statement: "Organises ideas, ensures requirements met, saves time." },
        ],
        steps: [
          { reasoning: "Planning ensures structure and completeness.", working: "organises", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(d)** It organises ideas and ensures all requirements are met",
        commonErrors: ["Thinking planning is a waste of time."],
      },
    },
    {
      id: "cie-ol-el-wp-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which is the correct order of the directed writing process?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Analyse → plan → write → check" },
          { id: "b", text: "Check → write → analyse → plan" },
          { id: "c", text: "Write → analyse → plan → check" },
          { id: "d", text: "Plan → check → analyse → write" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "Analyse→plan→write→check." },
        ],
        steps: [
          { reasoning: "Correct sequence starts with analyse.", working: "order", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Analyse → plan → write → check",
        commonErrors: ["Writing before analysing."],
      },
    },
    {
      id: "cie-ol-el-wp-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "In the 'check' stage, what should you verify?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Format, word count, and errors" },
          { id: "b", text: "Only handwriting" },
          { id: "c", text: "Nothing" },
          { id: "d", text: "Only spelling" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Checking", statement: "Format, word count, errors." },
        ],
        steps: [
          { reasoning: "Check format, word count, errors.", working: "check", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Format, word count, and errors",
        commonErrors: ["Checking only spelling."],
      },
    },
    {
      id: "cie-ol-el-wp-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "The writing process has 4 steps. A student completes analyse and plan. How many steps remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "Four steps total." },
        ],
        steps: [
          { reasoning: "4 - 2 = 2 steps remain (write and check).", working: "4 - 2 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Forgetting check is a separate step."],
      },
    },
    {
      id: "cie-ol-el-wp-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A task requires 90-130 words. A draft is 110 words, and the student adds a 5-word subject line. How many words can the body still grow by?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 15 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "110 + 5 = 115 words after addition.", working: "110 + 5 = 115", marks: 1, markCode: "AO3" },
          { reasoning: "130 - 115 = 15 words headroom.", working: "130 - 115 = 15", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "15",
        commonErrors: ["Forgetting the subject line."],
      },
    },
    {
      id: "cie-ol-el-wp-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A student skips the planning stage and writes immediately. How many of the 4 process steps has the student effectively combined or skipped?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Process", statement: "All four steps are important." },
        ],
        steps: [
          { reasoning: "Planning is one of four steps.", working: "4 steps", marks: 1, markCode: "AO2" },
          { reasoning: "Skipping planning = skipping 1 step.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Thinking skipping planning is harmless."],
      },
    },
    {
      id: "cie-ol-el-wp-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A response must be between 100 and 140 words. A draft is 85 words. How many more words are needed to reach the minimum?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 15 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Minimum must be met." },
        ],
        steps: [
          { reasoning: "100 - 85 = 15 words short.", working: "100 - 85 = 15", marks: 2, markCode: "AO3" },
          { reasoning: "Body needs 15 more words.", working: "15", marks: 2, markCode: "AO2" },
        ],
        finalAnswer: "15",
        commonErrors: ["Using maximum instead of minimum."],
      },
    },
    {
      id: "cie-ol-el-wp-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the four steps of the directed writing process.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Process", statement: "Analyse→plan→write→check." },
        ],
        steps: [
          { reasoning: "Analyse: identify purpose, audience, format, content, word count.", working: "analyse", marks: 1, markCode: "AO2" },
          { reasoning: "Plan: brainstorm and structure.", working: "plan", marks: 1, markCode: "AO2" },
          { reasoning: "Write then check format, word count, errors.", working: "write", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Analyse→plan→write→check.",
        commonErrors: ["Skipping analyse or plan."],
      },
    },
    {
      id: "cie-ol-el-wp-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why the 'check' stage is as important as the 'write' stage.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Checking", statement: "Format, word count, errors all assessed." },
        ],
        steps: [
          { reasoning: "Checking catches format errors that lose marks.", working: "format", marks: 1, markCode: "AO2" },
          { reasoning: "Verifies word count compliance.", working: "word count", marks: 1, markCode: "AO2" },
          { reasoning: "Proofreads for grammar and spelling errors.", working: "proofread", marks: 1, markCode: "AO2" },
          { reasoning: "Ensures all requirements are met before submission.", working: "met", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Check catches errors and ensures requirements met — saves marks.",
        commonErrors: ["Thinking writing is enough."],
      },
    },
    {
      id: "cie-ol-el-wp-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about the writing process.",
      parts: [
        { label: "a", prompt: "What is step 1?", marks: 2 },
        { label: "b", prompt: "What happens in step 2?", marks: 2 },
        { label: "c", prompt: "What is checked in step 4?", marks: 2 },
        { label: "d", prompt: "Why follow the process?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Process", statement: "Analyse, plan, write, check." },
        ],
        steps: [
          { part: "a", reasoning: "Analyse task requirements.", working: "analyse", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Brainstorm and structure response.", working: "plan", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Format, word count, errors.", working: "check", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Multiple checks.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Ensures quality and completeness.", working: "ensures", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) analyse (b) plan (c) format/word count/errors (d) ensures quality",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Checks listed.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Skipping steps."],
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
              { id: "a", text: "Song" },
              { id: "b", text: "Poem" },
              { id: "c", text: "Play" },
              { id: "d", text: "Letter" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Task types", statement: "Letters, reports, articles common." },
            ],
            steps: [
              { reasoning: "Letter = common task.", working: "letter", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Letter",
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
    {
      id: "cie-ol-el-pt2-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "A task asks you to write 'a report on the school sports day'. What type of writing is this?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Poem" },
          { id: "b", text: "Song" },
          { id: "c", text: "Letter" },
          { id: "d", text: "Report" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Task types", statement: "Report = factual, structured." },
        ],
        steps: [
          { reasoning: "'Report' indicates report writing.", working: "report", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Report",
        commonErrors: ["Confusing report with letter."],
      },
    },
    {
      id: "cie-ol-el-pt2-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "A task asks for 'a newspaper article about the new library'. What style is needed?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Engaging and informative" },
          { id: "b", text: "Formal letter" },
          { id: "c", text: "Technical manual" },
          { id: "d", text: "Complaint" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Articles", statement: "Articles are engaging and informative." },
        ],
        steps: [
          { reasoning: "Articles engage and inform.", working: "article", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Engaging and informative",
        commonErrors: ["Using formal letter style for an article."],
      },
    },
    {
      id: "cie-ol-el-pt2-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "A task asks for 'a letter of application for the position of librarian'. What is the PRIMARY purpose?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "To complain about work" },
          { id: "b", text: "To persuade the reader to hire you" },
          { id: "c", text: "To invite someone" },
          { id: "d", text: "To report an event" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Application", statement: "Persuade reader to select you." },
        ],
        steps: [
          { reasoning: "Application = persuade.", working: "persuade", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(b)** To persuade the reader to hire you",
        commonErrors: ["Confusing application with complaint."],
      },
    },
    {
      id: "cie-ol-el-pt2-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which task type requires the MOST formal register?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Text message to a friend" },
          { id: "b", text: "Formal letter to a director" },
          { id: "c", text: "Social media comment" },
          { id: "d", text: "Blog post for friends" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Register", statement: "Formal letters need formal register." },
        ],
        steps: [
          { reasoning: "Formal letter to director = most formal.", working: "formal", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Formal letter to a director",
        commonErrors: ["Using informal register for formal tasks."],
      },
    },
    {
      id: "cie-ol-el-pt2-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "A task asks for 'a review of the school play'. What should the review include?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only facts" },
          { id: "b", text: "Opinion and evaluation" },
          { id: "c", text: "No personal view" },
          { id: "d", text: "Just a summary" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Reviews", statement: "Reviews include opinion and evaluation." },
        ],
        steps: [
          { reasoning: "Reviews need opinion/evaluation.", working: "opinion", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Opinion and evaluation",
        commonErrors: ["Writing only facts — reviews need evaluation."],
      },
    },
    {
      id: "cie-ol-el-pt2-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A letter task allows 120-160 words. A student writes 175 words. How many words must be cut?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 15 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Stay within maximum." },
        ],
        steps: [
          { reasoning: "175 - 160 = 15 words over.", working: "175 - 160 = 15", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "15",
        commonErrors: ["Using minimum instead of maximum."],
      },
    },
    {
      id: "cie-ol-el-pt2-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A report task requires at least 150 words. A draft is 120 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 30 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "150 - 120 = 30 words short.", working: "150 - 120 = 30", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "30",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-pt2-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "There are 3 common task types: letters, reports, articles. A student practises only letters. How many task types remain unpractised?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Task types", statement: "Letters, reports, articles." },
        ],
        steps: [
          { reasoning: "3 types total; 1 practised.", working: "3 - 1 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two types unpractised (reports, articles).", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Practising only one type."],
      },
    },
    {
      id: "cie-ol-el-pt2-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An article task allows 180-220 words. A draft is 200 words, and the student adds a 15-word headline. How many words can the body still grow by?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Headline counts toward total." },
        ],
        steps: [
          { reasoning: "200 + 15 = 215 words after headline.", working: "200 + 15 = 215", marks: 1, markCode: "AO3" },
          { reasoning: "220 - 215 = 5 words headroom.", working: "220 - 215 = 5", marks: 2, markCode: "AO3" },
          { reasoning: "Body may grow by 5 words.", working: "5", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "5",
        commonErrors: ["Forgetting headline counts."],
      },
    },
    {
      id: "cie-ol-el-pt2-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the three common directed writing task types and their key features.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Task types", statement: "Letters, reports, articles." },
        ],
        steps: [
          { reasoning: "Letters: formal format, specific purpose.", working: "letters", marks: 1, markCode: "AO2" },
          { reasoning: "Reports: factual, structured, objective.", working: "reports", marks: 1, markCode: "AO2" },
          { reasoning: "Articles: engaging, informative, audience-aware.", working: "articles", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Letters=formal; reports=factual; articles=engaging.",
        commonErrors: ["Using wrong style for task type."],
      },
    },
    {
      id: "cie-ol-el-pt2-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to adapt your writing for a letter task versus an article task.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Adaptation", statement: "Different task types need different approaches." },
        ],
        steps: [
          { reasoning: "Letter: formal format, addresses, salutation, valediction.", working: "letter", marks: 1, markCode: "AO2" },
          { reasoning: "Article: engaging headline, introduction, main points, conclusion.", working: "article", marks: 1, markCode: "AO2" },
          { reasoning: "Letter is personal/formal; article is public/informative.", working: "difference", marks: 1, markCode: "AO2" },
          { reasoning: "Adapt tone and structure to task type.", working: "adapt", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Letter=formal format; article=engaging headline+structure.",
        commonErrors: ["Using same approach for all tasks."],
      },
    },
    {
      id: "cie-ol-el-pt2-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about directed writing task types.",
      parts: [
        { label: "a", prompt: "Name three task types.", marks: 3 },
        { label: "b", prompt: "What makes a report different from a letter?", marks: 2 },
        { label: "c", prompt: "What makes an article different from a report?", marks: 3 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Task types", statement: "Letters, reports, articles." },
        ],
        steps: [
          { part: "a", reasoning: "Letters, reports, articles.", working: "types", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Three valid types.", working: "three", marks: 1, markCode: "AO3" },
          { part: "a", reasoning: "All three named.", working: "all", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Report is factual/structured; letter is personal/formal format.", working: "difference", marks: 1, markCode: "AO2" },
          { part: "b", reasoning: "Clear distinction.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Article is engaging/informative; report is factual/objective.", working: "difference", marks: 1, markCode: "AO2" },
          { part: "c", reasoning: "Audience awareness differs.", working: "audience", marks: 1, markCode: "AO2" },
          { part: "c", reasoning: "Clear distinction.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) letters/reports/articles (b) factual vs personal (c) engaging vs objective",
        levels: [
          { level: "Level 2", marks: "2-3", descriptor: "Three types.", part: "a" },
          { level: "Level 1", marks: "0-1", descriptor: "Fewer.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 3", marks: "2-3", descriptor: "Clear distinction.", part: "c" },
          { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
        ],
        commonErrors: ["Confusing task types."],
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
