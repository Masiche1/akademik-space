import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cie-ol-el-lesson-8-2",
  code: "8-2",
  title: "Common exam pitfalls and fixes",
  goal: "I CAN identify and avoid common mistakes in English exams.",
  standards: ["1123 Exam skills"],
  vocabulary: [
    { term: "Pitfall", definition: "Common mistake or trap." },
    { term: "Misread question", definition: "Misunderstanding what's asked." },
    { term: "Irrelevant answer", definition: "Answer doesn't address question." },
    { term: "Poor structure", definition: "Lack of organisation in response." },
    { term: "Insufficient evidence", definition: "Claims without support." },
    { term: "Time pressure", definition: "Rushing due to poor time management." },
  ],
  concepts: [
    {
      id: "cie-ol-el-reading-pitfalls",
      title: "Reading paper pitfalls",
      skill: "Avoid common mistakes in comprehension questions.",
      lesson: {
        sections: [
          {
            heading: "Misreading questions",
            body: "Read question twice — check if it asks for one or multiple points. Note keywords — 'describe', 'explain', 'compare' require different responses.",
          },
          {
            heading: "Irrelevant answers",
            body: "Answer what's asked, not what you want to say. Check each point relates to question — avoid tangents.",
          },
          {
            heading: "Insufficient evidence",
            body: "Support claims with quotes/examples — don't make assertions without backing. Reference specific parts of text.",
          },
        ],
        keyFormulas: [
          { name: "Pitfalls", statement: "Misread→irrelevant→insufficient evidence = lost marks." },
        ],
        workedExample: {
          problem: "Question asks 'describe two methods' but student writes one paragraph.",
          solution: "Misread — only answered half. Fix: check if question asks for multiple points, plan answer accordingly.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-u8rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a common reading paper pitfall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Misreading the question" },
              { id: "b", text: "Reading too carefully" },
              { id: "c", text: "Taking notes" },
              { id: "d", text: "Checking answers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pitfall", statement: "Misreading questions leads to wrong answers." },
            ],
            steps: [
              { reasoning: "Misreading = common error.", working: "misread", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Misreading the question",
            commonErrors: ["Choosing (b) — careful reading helps."],
          },
        },
        {
          id: "cie-ol-el-u8rp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is insufficient evidence a problem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence", statement: "Claims without support lack credibility — examiners want proof." },
            ],
            steps: [
              { reasoning: "Assertions need backing.", working: "backing", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Claims without support lack credibility — examiners want proof.",
            commonErrors: ["Making unsupported assertions."],
          },
        },
        {
          id: "cie-ol-el-u8rp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to avoid irrelevant answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Relevance", statement: "Answer what's asked — check each point relates to question." },
            ],
            steps: [
              { reasoning: "Underline keywords in question.", working: "keywords", marks: 1, markCode: "AO2" },
              { reasoning: "Check each point answers the question.", working: "check", marks: 1, markCode: "AO2" },
              { reasoning: "Avoid tangents — stay focused.", working: "focus", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Underline keywords→check each point→stay focused.",
            commonErrors: ["Answering what you want, not what's asked."],
          },
        },
        {
          id: "cie-ol-el-u8rp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Reading paper pitfalls.",
          parts: [
            { label: "a", prompt: "Common pitfall?", marks: 1 },
            { label: "b", prompt: "Why insufficient evidence?", marks: 2 },
            { label: "c", prompt: "How to avoid irrelevant answers?", marks: 3 },
            { label: "d", prompt: "How to read questions carefully?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pitfalls", statement: "Misreading, irrelevance, evidence, question reading." },
            ],
            steps: [
              { part: "a", reasoning: "Misreading the question.", working: "misread", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Claims without support lack credibility.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Examiners want proof.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Keywords, check each point, stay focused.", working: "relevance", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Read twice, note keywords, check if multiple points needed.", working: "reading", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) misreading (b) credibility (c) keywords+check+focus (d) read twice+keywords+points",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Steps clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Reading clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Rushing — misread questions."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-writing-pitfalls",
      title: "Writing paper pitfalls",
      skill: "Avoid common mistakes in writing questions.",
      lesson: {
        sections: [
          {
            heading: "Poor structure",
            body: "No clear introduction/body/conclusion. Ideas jump around. Lack of paragraph organisation.",
          },
          {
            heading: "Wrong register",
            body: "Too informal for exam — slang, contractions, first person when not appropriate. Check task requirements.",
          },
          {
            heading: "Insufficient development",
            body: "Points made but not explained. No evidence/examples. Surface-level treatment of ideas.",
          },
        ],
        keyFormulas: [
          { name: "Writing pitfalls", statement: "Structure+register+development = key issues." },
        ],
        workedExample: {
          problem: "Essay has good ideas but no structure.",
          solution: "Add intro with thesis, organise body into paragraphs, conclude with summary — improves clarity and marks.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-u8wp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a common writing pitfall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poor structure" },
              { id: "b", text: "Good grammar" },
              { id: "c", text: "Clear paragraphs" },
              { id: "d", text: "Evidence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pitfall", statement: "Poor structure loses marks." },
            ],
            steps: [
              { reasoning: "Poor structure = common error.", working: "structure", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Poor structure",
            commonErrors: ["Choosing (b) — good grammar helps."],
          },
        },
        {
          id: "cie-ol-el-u8wp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is wrong register a problem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Inappropriate formality fails task requirements." },
            ],
            steps: [
              { reasoning: "Register must match task.", working: "match", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Register must match task — wrong formality fails requirements.",
            commonErrors: ["Using informal language in formal tasks."],
          },
        },
        {
          id: "cie-ol-el-u8wp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to avoid insufficient development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Development", statement: "Explain points, add evidence/examples, go deeper." },
            ],
            steps: [
              { reasoning: "Explain each point — don't just state.", working: "explain", marks: 1, markCode: "AO2" },
              { reasoning: "Add evidence/examples.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Go deeper — analyse, not just describe.", working: "deeper", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Explain+evidence+deeper analysis.",
            commonErrors: ["Surface-level treatment — no depth."],
          },
        },
        {
          id: "cie-ol-el-u8wp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Writing paper pitfalls.",
          parts: [
            { label: "a", prompt: "Common pitfall?", marks: 1 },
            { label: "b", prompt: "Why wrong register?", marks: 2 },
            { label: "c", prompt: "How to avoid insufficient development?", marks: 3 },
            { label: "d", prompt: "How to improve structure?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pitfalls", statement: "Structure, register, development." },
            ],
            steps: [
              { part: "a", reasoning: "Poor structure.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Register must match task.", working: "register", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Wrong formality fails.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Explain, evidence, deeper analysis.", working: "development", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Intro, body paragraphs, conclusion; clear organisation.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple parts.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) match task (c) explain+evidence+deeper (d) intro-body-conclusion",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Steps clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No structure — ideas disorganised."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-time-pressure",
      title: "Time pressure and exam anxiety",
      skill: "Manage time and stress during examination.",
      lesson: {
        sections: [
          {
            heading: "Time management",
            body: "Read all questions first — plan time allocation. Prioritise high-mark questions. Don't get stuck — move on, return later.",
          },
          {
            heading: "Exam anxiety",
            body: "Deep breathing — calm nerves. Positive self-talk — 'I can do this'. Focus on current question — don't worry about others.",
          },
          {
            heading: "Last-minute checks",
            body: "Check spelling and grammar. Ensure all parts answered. Review time — leave buffer for proofing.",
          },
        ],
        keyFormulas: [
          { name: "Time/anxiety", statement: "Plan→prioritise→don't get stuck→breathe→focus→check." },
        ],
        workedExample: {
          problem: "15 minutes left, haven't finished last question.",
          solution: "Prioritise remaining marks — answer what you can quickly, check spelling, submit on time.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-tp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first in exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read all questions" },
              { id: "b", text: "Start writing immediately" },
              { id: "c", text: "Check time constantly" },
              { id: "d", text: "Skip planning" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strategy", statement: "Read all questions first — plan time." },
            ],
            steps: [
              { reasoning: "Questions first — plan.", working: "questions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read all questions",
            commonErrors: ["Choosing (b) — no planning."],
          },
        },
        {
          id: "cie-ol-el-tp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How to manage exam anxiety?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Anxiety", statement: "Deep breathing, positive self-talk, focus on current task." },
            ],
            steps: [
              { reasoning: "Breathing and positive thinking calm nerves.", working: "calm", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Deep breathing, positive self-talk, focus on current task.",
            commonErrors: ["Panicking — makes things worse."],
          },
        },
        {
          id: "cie-ol-el-tp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to handle time pressure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time pressure", statement: "Prioritise, don't get stuck, move on, check at end." },
            ],
            steps: [
              { reasoning: "Prioritise high-mark questions.", working: "prioritise", marks: 1, markCode: "AO2" },
              { reasoning: "Don't get stuck — move on, return later.", working: "move on", marks: 1, markCode: "AO2" },
              { reasoning: "Leave buffer time for checking.", working: "buffer", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Prioritise→don't get stuck→move on→buffer for checking.",
            commonErrors: ["Getting stuck on one question — lose time."],
          },
        },
        {
          id: "cie-ol-el-tp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Time and anxiety management.",
          parts: [
            { label: "a", prompt: "First step in exam?", marks: 1 },
            { label: "b", prompt: "How to manage anxiety?", marks: 2 },
            { label: "c", prompt: "How to handle time pressure?", marks: 3 },
            { label: "d", prompt: "Last-minute checks?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time/anxiety", statement: "Questions, anxiety, time pressure, checks." },
            ],
            steps: [
              { part: "a", reasoning: "Read all questions first.", working: "questions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Breathing, positive self-talk, focus.", working: "anxiety", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Prioritise, don't get stuck, move on, buffer.", working: "time", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple strategies.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Spelling, grammar, all parts answered, time.", working: "checks", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) questions (b) breathing+focus (c) prioritise+move on (d) spelling+grammar+time",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Strategies clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Checks clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Panic — lose time and marks."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-curriculum-review",
      title: "Complete curriculum review",
      skill: "Consolidate all 9 units of O Level English Language.",
      lesson: {
        sections: [
          {
            heading: "Unit 1-3: Reading and writing foundations",
            body: "Comprehension, literary analysis, writing skills, grammar basics.",
          },
          {
            heading: "Unit 4-6: Analysis and writing",
            body: "Language analysis, transactional writing, argumentative/creative writing.",
          },
          {
            heading: "Unit 7-9: Advanced skills and exam prep",
            body: "Advanced analysis, literature response, exam strategies, pitfalls, time management.",
          },
        ],
        keyFormulas: [
          { name: "Course", statement: "9 units: foundations→analysis→writing→advanced→exam prep." },
        ],
        workedExample: {
          problem: "Review entire course.",
          solution: "Re-read unit summaries → practise past papers → identify weak areas → focus revision.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-u8cr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many units in this course?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "5" },
              { id: "c", text: "12" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Course", statement: "9 units covering all skills." },
            ],
            steps: [
              { reasoning: "9 units.", working: "9", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 9",
            commonErrors: ["Wrong count — check course structure."],
          },
        },
        {
          id: "cie-ol-el-u8cr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the three main skill areas?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Skills", statement: "Reading, writing, language analysis." },
            ],
            steps: [
              { reasoning: "Reading, writing, analysis.", working: "skills", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reading, writing, language analysis.",
            commonErrors: ["Missing one area."],
          },
        },
        {
          id: "cie-ol-el-u8cr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to revise for O Level English?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Revision", statement: "Review units→practice papers→analyse mark schemes→focus weaknesses." },
            ],
            steps: [
              { reasoning: "Review all unit summaries.", working: "review", marks: 1, markCode: "AO2" },
              { reasoning: "Complete practice papers.", working: "practice", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse mark schemes and focus weaknesses.", working: "analyse", marks: 1, markCode: "AO2" },
              { reasoning: "Process clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Review→practice→analyse→focus weaknesses.",
            commonErrors: ["Passive revision — must practise."],
          },
        },
        {
          id: "cie-ol-el-u8cr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Complete course review.",
          parts: [
            { label: "a", prompt: "How many units?", marks: 1 },
            { label: "b", prompt: "Name skill areas.", marks: 2 },
            { label: "c", prompt: "How to revise?", marks: 3 },
            { label: "d", prompt: "Key exam tips?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Review", statement: "Units, skills, revision, exam tips." },
            ],
            steps: [
              { part: "a", reasoning: "9 units.", working: "9", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Reading, writing, analysis.", working: "skills", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "All three.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Review, practice, analyse, focus.", working: "revision", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Questions first, manage time, answer all, check work.", working: "tips", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple tips.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 9 (b) reading/writing/analysis (c) review+practice+analyse (d) questions+time+all+check",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "All skills.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Process clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Tips clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Incomplete revision — practise papers."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-review-notes",
      title: "Final review — revision notes",
      summary: "Exam pitfalls, time management, complete course review.",
      sections: [
        {
          heading: "Pitfalls",
          body: "Reading: misreading, irrelevant answers, insufficient evidence. Writing: poor structure, wrong register, insufficient development.",
        },
        {
          heading: "Exam skills",
          body: "Questions first→plan time→prioritise→don't get stuck→manage anxiety→check work. Review all 9 units→practice papers→focus weaknesses.",
        },
      ],
    },
  ],
};
