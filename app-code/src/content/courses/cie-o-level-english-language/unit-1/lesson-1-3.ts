import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cie-ol-el-lesson-1-3",
  code: "1-3",
  title: "Practical writing applications",
  goal: "I CAN apply writing skills to real-world tasks and exam scenarios.",
  standards: ["1123 Writing: applications"],
  vocabulary: [
    { term: "Letter", definition: "Formal or informal written communication." },
    { term: "Report", definition: "Factual account of events/findings." },
    { term: "Article", definition: "Piece of writing for publication — newspaper, magazine." },
    { term: "Review", definition: "Critical assessment of product/event/work." },
    { term: "Proposal", definition: "Suggested plan or course of action." },
    { term: "Memo", definition: "Brief internal communication — short and direct." },
  ],
  concepts: [
    {
      id: "cie-ol-el-applications",
      title: "Writing applications",
      skill: "Apply writing skills to letters, reports, articles and other formats.",
      lesson: {
        sections: [
          {
            heading: "Letter types",
            body: "- **Formal**: job applications, complaints, official correspondence\n- **Informal**: friends, family — relaxed tone",
          },
          {
            heading: "Report writing",
            body: "Title → introduction → findings/method → conclusion → recommendations. Factual, objective, structured.",
          },
          {
            heading: "Article writing",
            body: "Engaging headline → introduction → body → conclusion. Written for publication audience — entertaining and informative.",
          },
        ],
        keyFormulas: [
          { name: "Applications", statement: "Letter=personal communication; report=factual account; article=publication piece." },
        ],
        workedExample: {
          problem: "Write a report about a school event.",
          solution: "Title, introduction, what happened, outcomes, conclusion — factual, structured, objective.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-app-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factual account" },
              { id: "b", text: "Personal opinion" },
              { id: "c", text: "Story format" },
              { id: "d", text: "Poetic language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Factual account of events/findings." },
            ],
            steps: [
              { reasoning: "Report = factual, objective.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Factual account",
            commonErrors: ["Choosing (b) — reports are objective."],
          },
        },
        {
          id: "cie-ol-el-app-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three letter types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter types", statement: "Formal, informal, complaint, application." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal, informal, complaint, application (any three).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-app-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of a formal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter format", statement: "Sender's address→date→recipient→greeting→body→closing→signature." },
            ],
            steps: [
              { reasoning: "Sender's address, date, recipient's address.", working: "header", marks: 1, markCode: "AO2" },
              { reasoning: "Greeting ('Dear Sir/Madam'), body, closing ('Yours faithfully').", working: "body", marks: 1, markCode: "AO2" },
              { reasoning: "Signature — complete format.", working: "signature", marks: 1, markCode: "AO2" },
              { reasoning: "Structure complete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sender's address→date→recipient→greeting→body→closing→signature.",
            commonErrors: ["Missing elements — check format conventions."],
          },
        },
        {
          id: "cie-ol-el-app-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply writing skills to real tasks.",
          parts: [
            { label: "a", prompt: "When to use formal vs informal letter?", marks: 2 },
            { label: "b", prompt: "Describe report structure.", marks: 3 },
            { label: "c", prompt: "How to write engaging article?", marks: 2 },
            { label: "d", prompt: "What is a proposal?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applications", statement: "Formal/informal letters; reports; articles; proposals." },
            ],
            steps: [
              { part: "a", reasoning: "Formal: official/business; informal: friends/family.", working: "formal/informal", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Title→introduction→findings→conclusion→recommendations.", working: "report", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Engaging headline, introduction, body, conclusion — for publication audience.", working: "article", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Suggested plan/course of action — problem→solution→benefits.", working: "proposal", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) formal/business vs informal/friends (b) report structure (c) engaging article (d) plan/suggestion",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Report with opinions — must be factual."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-grammar",
      title: "Grammar and punctuation review",
      skill: "Apply correct grammar and punctuation in writing.",
      lesson: {
        sections: [
          {
            heading: "Sentence types",
            body: "Simple (one clause), compound (two independent), complex (main+subordinate). Vary for effect.",
          },
          {
            heading: "Punctuation",
            body: "Full stop, comma, colon, semicolon, dash, quotation marks, apostrophe. Each has specific use.",
          },
          {
            heading: "Common errors",
            body: "Run-on sentences, comma splices, missing apostrophes, incorrect verb tense, subject-verb disagreement.",
          },
        ],
        keyFormulas: [
          { name: "Grammar", statement: "Sentence types: simple/compound/complex; punctuation rules; avoid common errors." },
        ],
        workedExample: {
          problem: "Fix: 'I like apples oranges and bananas.'",
          solution: "I like apples, oranges and bananas. — commas needed in list.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-gram-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a compound sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two independent clauses joined" },
              { id: "b", text: "One clause only" },
              { id: "c", text: "Main + subordinate clause" },
              { id: "d", text: "Question only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound sentence", statement: "Two independent clauses joined." },
            ],
            steps: [
              { reasoning: "Compound = two independent clauses.", working: "two clauses", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Two independent clauses joined",
            commonErrors: ["Choosing (c) — that's complex."],
          },
        },
        {
          id: "cie-ol-el-gram-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three punctuation marks and their uses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Punctuation", statement: "Full stop=end; comma=pause/list; colon=introduces." },
            ],
            steps: [
              { reasoning: "Any three with uses.", working: "punctuation", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Full stop (end), comma (pause/list), colon (introduces), semicolon (link), apostrophe (possessive).",
            commonErrors: ["Marks without uses."],
          },
        },
        {
          id: "cie-ol-el-gram-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the importance of varied sentence structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence variety", statement: "Varied structure creates rhythm, emphasis, readability." },
            ],
            steps: [
              { reasoning: "Short sentences: punchy, dramatic effect.", working: "short", marks: 1, markCode: "AO2" },
              { reasoning: "Long sentences: flowing, complex ideas.", working: "long", marks: 1, markCode: "AO2" },
              { reasoning: "Variety prevents monotony — engages reader.", working: "variety", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Varied sentences create rhythm and emphasis — prevents monotony, engages reader.",
            commonErrors: ["All same length — boring and unclear emphasis."],
          },
        },
        {
          id: "cie-ol-el-gram-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review grammar and punctuation.",
          parts: [
            { label: "a", prompt: "Name sentence types.", marks: 2 },
            { label: "b", prompt: "List punctuation marks.", marks: 3 },
            { label: "c", prompt: "Explain apostrophe uses.", marks: 2 },
            { label: "d", prompt: "Name common errors.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar", statement: "Sentence types, punctuation, apostrophes, common errors." },
            ],
            steps: [
              { part: "a", reasoning: "Simple, compound, complex.", working: "types", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All three.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Full stop, comma, colon, semicolon, dash, quotes, apostrophe.", working: "marks", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Contraction (don't), possession (John's).", working: "apostrophe", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Both uses.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Run-ons, comma splices, missing apostrophes, tense errors, subject-verb disagreement.", working: "errors", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) simple/compound/complex (b) punctuation marks (c) contraction/possession (d) common errors",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple marks.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Both uses.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple errors.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Apostrophe for plural — only for possession/contraction."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-exam",
      title: "Exam skills for O Level English",
      skill: "Apply exam techniques for reading and writing papers.",
      lesson: {
        sections: [
          {
            heading: "Reading paper",
            body: "Time management: skim all questions first, allocate time per marks, answer easier first, review at end.",
          },
          {
            heading: "Writing paper",
            body: "Plan before writing — brainstorm ideas, structure, then write. Check word count, proofread for errors.",
          },
          {
            heading: "Common mistakes",
            body: "Not answering question set, ignoring word limits, poor paragraphing, grammar errors, not checking work.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Time management, planning, proofreading — essential for success." },
        ],
        workedExample: {
          problem: "How much time for each section?",
          solution: "Calculate: total time ÷ total marks × marks per section. Allocate proportionally, leave review time.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-exam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first in a reading exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read all questions" },
              { id: "b", text: "Start writing immediately" },
              { id: "c", text: "Skip reading" },
              { id: "d", text: "Guess answers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam strategy", statement: "Read questions first — plan approach." },
            ],
            steps: [
              { reasoning: "Read all questions first.", working: "read", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read all questions",
            commonErrors: ["Starting immediately — no plan."],
          },
        },
        {
          id: "cie-ol-el-exam-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two writing exam techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Writing techniques", statement: "Plan, brainstorm, structure, proofread." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Plan, brainstorm, structure, proofread (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-exam-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to manage time in exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Allocate by marks, easy first, review at end." },
            ],
            steps: [
              { reasoning: "Calculate time per mark — allocate proportionally.", working: "allocate", marks: 1, markCode: "AO2" },
              { reasoning: "Answer easier questions first for confidence.", working: "easy first", marks: 1, markCode: "AO2" },
              { reasoning: "Leave time for review and checking.", working: "review", marks: 1, markCode: "AO2" },
              { reasoning: "Strategy clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Allocate by marks, answer easy first, leave review time.",
            commonErrors: ["No time plan — runs out."],
          },
        },
        {
          id: "cie-ol-el-exam-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare for O Level English exam.",
          parts: [
            { label: "a", prompt: "How to approach reading paper?", marks: 2 },
            { label: "b", prompt: "How to approach writing paper?", marks: 3 },
            { label: "c", prompt: "What are common mistakes?", marks: 2 },
            { label: "d", prompt: "How to check work?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam prep", statement: "Reading: read questions first; writing: plan+proofread; check work." },
            ],
            steps: [
              { part: "a", reasoning: "Read all questions, allocate time, answer with evidence.", working: "reading", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Plan, brainstorm, structure, write, check word count, proofread.", working: "writing", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Wrong question set, word limits, poor paragraphing, grammar errors.", working: "mistakes", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check units/format, complete all questions, proofread for errors.", working: "check", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) read/plan (b) plan/write/proofread (c) common mistakes (d) check units/all questions",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete process.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple mistakes.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["No proofreading — grammar errors remain."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-app-notes",
      title: "Applications and exam skills — revision notes",
      summary: "Writing formats, grammar, exam techniques.",
      sections: [
        {
          heading: "Applications",
          body: "Letters (formal/informal), reports (factual), articles (engaging), proposals (plans). Grammar: sentence types, punctuation. Exam: time management, planning, proofreading.",
        },
      ],
    },
  ],
};
