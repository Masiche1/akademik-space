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
              { id: "a", text: "Reading too carefully" },
              { id: "b", text: "Checking answers" },
              { id: "c", text: "Taking notes" },
              { id: "d", text: "Misreading the question" },
            ],
            correctChoiceId: "d",
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
    {
      id: "cie-ol-el-u8rp-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a common reading pitfall?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Using evidence" },
          { id: "b", text: "Misreading the question" },
          { id: "c", text: "Checking answers" },
          { id: "d", text: "Reading carefully" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Pitfall", statement: "Misreading questions." },
        ],
        steps: [
          { reasoning: "Misreading = common pitfall.", working: "misread", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Misreading the question",
        commonErrors: ["Not reading question carefully."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is an irrelevant answer?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Evidence-based answer" },
          { id: "b", text: "Detailed answer" },
          { id: "c", text: "Answer that doesn't relate to the question" },
          { id: "d", text: "Correct answer" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Relevance", statement: "Answer must relate to question." },
        ],
        steps: [
          { reasoning: "Irrelevant = doesn't answer question.", working: "irrelevant", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Answer that doesn't relate to the question",
        commonErrors: ["Answering a different question."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "Why is insufficient evidence a pitfall?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "It is required" },
          { id: "b", text: "It saves time" },
          { id: "c", text: "Claims without support lack credibility" },
          { id: "d", text: "It is acceptable" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Evidence", statement: "Claims need support." },
        ],
        steps: [
          { reasoning: "Insufficient evidence = weak argument.", working: "evidence", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Claims without support lack credibility",
        commonErrors: ["Making unsupported claims."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "How to avoid misreading questions?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Read carefully and underline key words" },
          { id: "b", text: "Guess" },
          { id: "c", text: "Ignore instructions" },
          { id: "d", text: "Skim quickly" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Question reading", statement: "Read carefully, underline key words." },
        ],
        steps: [
          { reasoning: "Read carefully and underline.", working: "carefully", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Read carefully and underline key words",
        commonErrors: ["Skimming questions."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What causes irrelevant answers?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Reading carefully" },
          { id: "b", text: "Not checking if answer relates to question" },
          { id: "c", text: "Using evidence" },
          { id: "d", text: "Checking work" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Relevance", statement: "Check each point relates to question." },
        ],
        steps: [
          { reasoning: "Irrelevance = not checking relation.", working: "relevance", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Not checking if answer relates to question",
        commonErrors: ["Not checking relevance."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A reading paper has 8 questions. A student answers 6 correctly but 2 are irrelevant. How many relevant answers are there?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 6 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Relevance", statement: "Answers must relate." },
        ],
        steps: [
          { reasoning: "6 relevant answers (8 - 2 irrelevant).", working: "8 - 2 = 6", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "6",
        commonErrors: ["Not checking relevance."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A reading passage has 10 evidence points needed. A student provides only 6. How many points lack evidence?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 4 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Evidence", statement: "Provide sufficient evidence." },
        ],
        steps: [
          { reasoning: "10 - 6 = 4 points lack evidence.", working: "10 - 6 = 4", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "4",
        commonErrors: ["Insufficient evidence."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A student makes 5 errors: 2 misreadings, 2 irrelevant answers, 1 insufficient evidence. How many error types are represented?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 3 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Pitfalls", statement: "Misreading, irrelevance, insufficient evidence." },
        ],
        steps: [
          { reasoning: "Three types: misreading, irrelevant, insufficient.", working: "3", marks: 1, markCode: "AO2" },
          { reasoning: "Three error types.", working: "3", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "3",
        commonErrors: ["Not categorising errors."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A reading paper allows 45 minutes for 5 passages. If a student spends 15 minutes on passage 1, how many minutes remain for the other 4 passages?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 30 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time per passage." },
        ],
        steps: [
          { reasoning: "45 - 15 = 30 minutes remain.", working: "45 - 15 = 30", marks: 1, markCode: "AO3" },
          { reasoning: "30 minutes for 4 passages.", working: "30", marks: 1, markCode: "AO3" },
          { reasoning: "Approximately 7-8 minutes per remaining passage.", working: "8", marks: 2, markCode: "AO2" },
        ],
        finalAnswer: "30",
        commonErrors: ["Spending too long on one passage."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the three main reading pitfalls and how to avoid them.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Pitfalls", statement: "Misreading, irrelevance, insufficient evidence." },
        ],
        steps: [
          { reasoning: "Misreading: read questions carefully.", working: "misread", marks: 1, markCode: "AO2" },
          { reasoning: "Irrelevance: check answer relates to question.", working: "irrelevant", marks: 1, markCode: "AO2" },
          { reasoning: "Insufficient evidence: provide supporting proof.", working: "evidence", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Misreading→read carefully; irrelevant→check relation; evidence→provide proof.",
        commonErrors: ["Not checking answers."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why providing evidence is crucial in reading answers.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Evidence", statement: "Claims need support." },
        ],
        steps: [
          { reasoning: "Evidence supports claims — proves understanding.", working: "supports", marks: 1, markCode: "AO2" },
          { reasoning: "Examiners want proof from text.", working: "proof", marks: 1, markCode: "AO2" },
          { reasoning: "Insufficient evidence loses marks.", working: "marks", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Evidence proves understanding — examiners want proof.",
        commonErrors: ["Making unsupported claims."],
      },
    },
    {
      id: "cie-ol-el-u8rp-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about reading pitfalls.",
      parts: [
        { label: "a", prompt: "What is misreading?", marks: 2 },
        { label: "b", prompt: "What is irrelevance?", marks: 2 },
        { label: "c", prompt: "What is insufficient evidence?", marks: 2 },
        { label: "d", prompt: "How to avoid pitfalls?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Pitfalls", statement: "Misreading, irrelevance, evidence, avoidance." },
        ],
        steps: [
          { part: "a", reasoning: "Misreading the question.", working: "misread", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Answer doesn't relate to question.", working: "irrelevant", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Claims without support.", working: "evidence", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Read carefully, check relevance, provide evidence.", working: "avoid", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Multiple strategies.", working: "multiple", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) misread question (b) doesn't relate (c) no support (d) read/check/provide",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple strategies.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Few.", part: "d" },
        ],
        commonErrors: ["Not checking answers."],
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
              { id: "a", text: "Good grammar" },
              { id: "b", text: "Poor structure" },
              { id: "c", text: "Clear paragraphs" },
              { id: "d", text: "Evidence" },
            ],
            correctChoiceId: "b",
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
    {
      id: "cie-ol-el-u8wp-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a common writing pitfall?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Good register" },
          { id: "b", text: "Clear structure" },
          { id: "c", text: "Sufficient development" },
          { id: "d", text: "Poor structure" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Pitfall", statement: "Poor structure loses marks." },
        ],
        steps: [
          { reasoning: "Poor structure = pitfall.", working: "structure", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Poor structure",
        commonErrors: ["Disorganised writing."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is wrong register?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Correct formality" },
          { id: "b", text: "Inappropriate formality for the task" },
          { id: "c", text: "Clear language" },
          { id: "d", text: "Professional tone" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Register", statement: "Wrong register fails task." },
        ],
        steps: [
          { reasoning: "Wrong register = inappropriate formality.", working: "register", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Inappropriate formality for the task",
        commonErrors: ["Using wrong register."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What is insufficient development?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Good evidence" },
          { id: "b", text: "Too much detail" },
          { id: "c", text: "Points not explained or supported enough" },
          { id: "d", text: "Clear explanation" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Development", statement: "Explain points, add evidence." },
        ],
        steps: [
          { reasoning: "Insufficient = not enough explanation.", working: "development", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Points not explained or supported enough",
        commonErrors: ["Making points without development."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "How to fix poor structure?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Skip planning" },
          { id: "b", text: "Write randomly" },
          { id: "c", text: "Ignore structure" },
          { id: "d", text: "Plan before writing and organise logically" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Structure", statement: "Plan and organise logically." },
        ],
        steps: [
          { reasoning: "Fix structure by planning.", working: "plan", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Plan before writing and organise logically",
        commonErrors: ["Writing without planning."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What causes wrong register?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Checking work" },
          { id: "b", text: "Not identifying the audience" },
          { id: "c", text: "Reading carefully" },
          { id: "d", text: "Using evidence" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Audience", statement: "Identify audience for register." },
        ],
        steps: [
          { reasoning: "Wrong register = not identifying audience.", working: "audience", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Not identifying the audience",
        commonErrors: ["Not checking audience."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "An essay has 6 paragraphs. A student writes 4 poorly structured paragraphs. How many paragraphs are well-structured?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Structure", statement: "All paragraphs need structure." },
        ],
        steps: [
          { reasoning: "6 - 4 = 2 well-structured.", working: "6 - 4 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Poor structure throughout."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "An essay requires formal register. A student uses informal in 3 paragraphs out of 5. How many paragraphs use correct register?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Register", statement: "Maintain formal register." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 paragraphs correct.", working: "5 - 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Inconsistent register."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "An essay has 5 main points. A student develops only 3 fully. How many points are underdeveloped?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Development", statement: "Develop all points fully." },
        ],
        steps: [
          { reasoning: "5 points; 3 developed.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two points underdeveloped.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Insufficient development."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A writing task allows 200-250 words. A draft is 240 words, and the student adds a 15-word introduction. How many words must the body lose to stay within the limit?",
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
          { reasoning: "240 + 15 = 255 words after introduction.", working: "240 + 15 = 255", marks: 1, markCode: "AO3" },
          { reasoning: "255 - 250 = 5 words over.", working: "255 - 250 = 5", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 5 words.", working: "5", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "5",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the three main writing pitfalls and how to fix them.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Pitfalls", statement: "Structure, register, development." },
        ],
        steps: [
          { reasoning: "Poor structure: plan before writing.", working: "structure", marks: 1, markCode: "AO2" },
          { reasoning: "Wrong register: identify audience first.", working: "register", marks: 1, markCode: "AO2" },
          { reasoning: "Insufficient development: explain and support points.", working: "development", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Structure→plan; register→identify audience; development→explain+support.",
        commonErrors: ["Not addressing pitfalls."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why developing points fully is important in writing.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Development", statement: "Explain, evidence, examples." },
        ],
        steps: [
          { reasoning: "Development shows understanding.", working: "understanding", marks: 1, markCode: "AO2" },
          { reasoning: "Evidence and examples support points.", working: "evidence", marks: 1, markCode: "AO2" },
          { reasoning: "Insufficient development loses marks.", working: "marks", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Development proves understanding — examiners want depth.",
        commonErrors: ["Making points without development."],
      },
    },
    {
      id: "cie-ol-el-u8wp-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about writing pitfalls.",
      parts: [
        { label: "a", prompt: "What is poor structure?", marks: 2 },
        { label: "b", prompt: "What is wrong register?", marks: 2 },
        { label: "c", prompt: "What is insufficient development?", marks: 2 },
        { label: "d", prompt: "How to fix pitfalls?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Pitfalls", statement: "Structure, register, development, fixes." },
        ],
        steps: [
          { part: "a", reasoning: "Disorganised writing.", working: "structure", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Inappropriate formality.", working: "register", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Points not fully explained.", working: "development", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Plan, identify audience, develop points.", working: "fix", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Multiple strategies.", working: "multiple", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) disorganised (b) wrong formality (c) not enough explanation (d) plan/audience/develop",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple strategies.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Few.", part: "d" },
        ],
        commonErrors: ["Not addressing pitfalls."],
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
              { id: "b", text: "Check time constantly" },
              { id: "c", text: "Skip planning" },
              { id: "d", text: "Start writing immediately" },
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
    {
      id: "cie-ol-el-tp-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you do FIRST in a timed exam?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Start writing immediately" },
          { id: "b", text: "Skip instructions" },
          { id: "c", text: "Panic" },
          { id: "d", text: "Read all questions and plan time" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Strategy", statement: "Read questions, plan time." },
        ],
        steps: [
          { reasoning: "Read all questions first.", working: "plan", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Read all questions and plan time",
        commonErrors: ["Starting without planning."],
      },
    },
    {
      id: "cie-ol-el-tp-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should you do if stuck on a question?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Panic" },
          { id: "b", text: "Stay stuck" },
          { id: "c", text: "Give up entirely" },
          { id: "d", text: "Move on and return later" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time pressure", statement: "Don't get stuck, move on." },
        ],
        steps: [
          { reasoning: "Move on if stuck.", working: "move on", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Move on and return later",
        commonErrors: ["Getting stuck on one question."],
      },
    },
    {
      id: "cie-ol-el-tp-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What helps manage exam anxiety?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Give up" },
          { id: "b", text: "Ignore the exam" },
          { id: "c", text: "Panic" },
          { id: "d", text: "Deep breathing and positive self-talk" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Anxiety", statement: "Deep breathing, positive self-talk." },
        ],
        steps: [
          { reasoning: "Breathing and self-talk help.", working: "breathing", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Deep breathing and positive self-talk",
        commonErrors: ["Panicking."],
      },
    },
    {
      id: "cie-ol-el-tp-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should you prioritise in a timed exam?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Random order" },
          { id: "b", text: "Hardest questions first" },
          { id: "c", text: "Higher-mark questions first" },
          { id: "d", text: "Easiest questions only" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Prioritise", statement: "Higher marks first." },
        ],
        steps: [
          { reasoning: "Prioritise higher-mark questions.", working: "prioritise", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Higher-mark questions first",
        commonErrors: ["Wasting time on low-mark questions."],
      },
    },
    {
      id: "cie-ol-el-tp-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you do at the end of the exam?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Leave immediately" },
          { id: "b", text: "Ignore remaining time" },
          { id: "c", text: "Start over" },
          { id: "d", text: "Review answers and check for errors" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Checks", statement: "Review at end." },
        ],
        steps: [
          { reasoning: "Review answers at end.", working: "review", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Review answers and check for errors",
        commonErrors: ["Not reviewing."],
      },
    },
    {
      id: "cie-ol-el-tp-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "An exam allows 90 minutes for 6 questions. If a student spends 20 minutes on question 1, how many minutes remain for the other 5?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 70 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time per question." },
        ],
        steps: [
          { reasoning: "90 - 20 = 70 minutes remain.", working: "90 - 20 = 70", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "70",
        commonErrors: ["Spending too long on one question."],
      },
    },
    {
      id: "cie-ol-el-tp-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "An exam has 8 questions. A student answers 6. How many questions remain unanswered?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Completion", statement: "Answer all questions." },
        ],
        steps: [
          { reasoning: "8 - 6 = 2 unanswered.", working: "8 - 6 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Leaving questions unanswered."],
      },
    },
    {
      id: "cie-ol-el-tp-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A student gets stuck on 3 questions out of 10. How many questions can they still answer?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 7 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time pressure", statement: "Move on if stuck." },
        ],
        steps: [
          { reasoning: "10 - 3 = 7 questions remain.", working: "10 - 3 = 7", marks: 1, markCode: "AO3" },
          { reasoning: "Seven questions can still be answered.", working: "7", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "7",
        commonErrors: ["Getting stuck on all questions."],
      },
    },
    {
      id: "cie-ol-el-tp-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An exam allows 120 minutes for 5 sections. If a student spends 35 minutes on section 1, how many minutes remain for the other 4 sections?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 85 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time per section." },
        ],
        steps: [
          { reasoning: "120 - 35 = 85 minutes remain.", working: "120 - 35 = 85", marks: 1, markCode: "AO3" },
          { reasoning: "85 minutes for 4 sections.", working: "85", marks: 1, markCode: "AO3" },
          { reasoning: "Approximately 21 minutes per remaining section.", working: "21", marks: 2, markCode: "AO2" },
        ],
        finalAnswer: "85",
        commonErrors: ["Spending too long on one section."],
      },
    },
    {
      id: "cie-ol-el-tp-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how to manage time during a timed exam.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Plan, prioritise, don't get stuck, review." },
        ],
        steps: [
          { reasoning: "Read all questions and plan time.", working: "plan", marks: 1, markCode: "AO2" },
          { reasoning: "Prioritise higher-mark questions.", working: "prioritise", marks: 1, markCode: "AO2" },
          { reasoning: "Don't get stuck — move on and review at end.", working: "review", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Plan→prioritise→don't get stuck→review.",
        commonErrors: ["Getting stuck on one question."],
      },
    },
    {
      id: "cie-ol-el-tp-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to manage exam anxiety.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Anxiety", statement: "Breathing, self-talk, focus." },
        ],
        steps: [
          { reasoning: "Deep breathing to calm down.", working: "breathing", marks: 1, markCode: "AO2" },
          { reasoning: "Positive self-talk — 'I can do this'.", working: "self-talk", marks: 1, markCode: "AO2" },
          { reasoning: "Focus on current task only.", working: "focus", marks: 1, markCode: "AO2" },
          { reasoning: "Clear strategies explained.", working: "strategies", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Deep breathing, positive self-talk, focus on current task.",
        commonErrors: ["Panicking."],
      },
    },
    {
      id: "cie-ol-el-tp-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about time pressure.",
      parts: [
        { label: "a", prompt: "What to do first?", marks: 2 },
        { label: "b", prompt: "What if stuck?", marks: 2 },
        { label: "c", prompt: "How to manage anxiety?", marks: 2 },
        { label: "d", prompt: "What to prioritise?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time pressure", statement: "First, stuck, anxiety, prioritise." },
        ],
        steps: [
          { part: "a", reasoning: "Read questions, plan time.", working: "first", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Move on and return later.", working: "stuck", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Deep breathing, positive self-talk.", working: "anxiety", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Multiple strategies.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Higher-mark questions first.", working: "prioritise", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) read+plan (b) move on (c) breathing/self-talk (d) higher marks",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple strategies.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Getting stuck."],
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
              { id: "a", text: "12" },
              { id: "b", text: "5" },
              { id: "c", text: "9" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "c",
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
    {
      id: "cie-ol-el-u8cr-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the purpose of curriculum review?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Ensure all syllabus content is covered" },
          { id: "b", text: "Only read notes" },
          { id: "c", text: "Memorise everything" },
          { id: "d", text: "Skip topics" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Review", statement: "Cover all syllabus content." },
        ],
        steps: [
          { reasoning: "Review ensures full coverage.", working: "coverage", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Ensure all syllabus content is covered",
        commonErrors: ["Skipping topics."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should a curriculum review include?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only writing" },
          { id: "b", text: "Only reading" },
          { id: "c", text: "All key concepts, skills, and exam techniques" },
          { id: "d", text: "Only grammar" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Scope", statement: "Concepts, skills, techniques." },
        ],
        steps: [
          { reasoning: "Include concepts, skills, techniques.", working: "scope", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** All key concepts, skills, and exam techniques",
        commonErrors: ["Only reviewing one area."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "How should you prioritise revision?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Focus on weak areas first" },
          { id: "b", text: "Skip difficult topics" },
          { id: "c", text: "Random order" },
          { id: "d", text: "Only strong areas" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Prioritise", statement: "Focus on weak areas." },
        ],
        steps: [
          { reasoning: "Prioritise weak areas.", working: "prioritise", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Focus on weak areas first",
        commonErrors: ["Avoiding weak areas."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should you check in a curriculum review?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Gaps in knowledge and exam readiness" },
          { id: "b", text: "Only grammar" },
          { id: "c", text: "Only punctuation" },
          { id: "d", text: "Only spelling" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Check", statement: "Gaps and readiness." },
        ],
        steps: [
          { reasoning: "Check gaps and readiness.", working: "check", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Gaps in knowledge and exam readiness",
        commonErrors: ["Only checking one area."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the benefit of a curriculum review?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Waste time" },
          { id: "b", text: "Identify weaknesses before the exam" },
          { id: "c", text: "Confuse students" },
          { id: "d", text: "Replace studying" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Benefit", statement: "Identify weaknesses." },
        ],
        steps: [
          { reasoning: "Review identifies weaknesses.", working: "identify", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Identify weaknesses before the exam",
        commonErrors: ["Thinking review is a waste."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A curriculum review covers 8 units. If 6 are complete, how many units remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Coverage", statement: "Review all units." },
        ],
        steps: [
          { reasoning: "8 - 6 = 2 units remain.", working: "8 - 6 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Not reviewing all units."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A student reviews 4 of 7 skills. How many skills remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 3 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Skills", statement: "Review all skills." },
        ],
        steps: [
          { reasoning: "7 - 4 = 3 skills remain.", working: "7 - 4 = 3", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "3",
        commonErrors: ["Missing skills."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A curriculum review covers 5 reading skills and 4 writing skills. How many total skills are there?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 9 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Skills", statement: "Reading + writing skills." },
        ],
        steps: [
          { reasoning: "5 reading + 4 writing = 9 skills.", working: "5 + 4 = 9", marks: 1, markCode: "AO3" },
          { reasoning: "Nine total skills.", working: "9", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "9",
        commonErrors: ["Only counting one area."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A curriculum review allows 180 minutes for 6 units. If a student spends 40 minutes on unit 1, how many minutes remain for the other 5 units?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 140 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time per unit." },
        ],
        steps: [
          { reasoning: "180 - 40 = 140 minutes remain.", working: "180 - 40 = 140", marks: 1, markCode: "AO3" },
          { reasoning: "140 minutes for 5 units.", working: "140", marks: 1, markCode: "AO3" },
          { reasoning: "Approximately 28 minutes per remaining unit.", working: "28", marks: 2, markCode: "AO2" },
        ],
        finalAnswer: "140",
        commonErrors: ["Spending too long on one unit."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how to conduct a curriculum review.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Review", statement: "Check coverage, identify gaps." },
        ],
        steps: [
          { reasoning: "Check all syllabus content is covered.", working: "coverage", marks: 1, markCode: "AO2" },
          { reasoning: "Identify gaps and weaknesses.", working: "gaps", marks: 1, markCode: "AO2" },
          { reasoning: "Prioritise revision areas.", working: "prioritise", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Check coverage→identify gaps→prioritise.",
        commonErrors: ["Skipping difficult topics."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why prioritising weak areas improves exam performance.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Prioritise", statement: "Focus on weaknesses." },
        ],
        steps: [
          { reasoning: "Weak areas cost the most marks.", working: "marks", marks: 1, markCode: "AO2" },
          { reasoning: "Improving them raises overall score.", working: "score", marks: 1, markCode: "AO2" },
          { reasoning: "Strong areas need less time.", working: "time", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Weak areas cost marks — improving them raises score.",
        commonErrors: ["Avoiding weak areas."],
      },
    },
    {
      id: "cie-ol-el-u8cr-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about curriculum review.",
      parts: [
        { label: "a", prompt: "What is the purpose?", marks: 2 },
        { label: "b", prompt: "What should it include?", marks: 2 },
        { label: "c", prompt: "How to prioritise?", marks: 2 },
        { label: "d", prompt: "What to check?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Review", statement: "Purpose, scope, prioritise, check." },
        ],
        steps: [
          { part: "a", reasoning: "Ensure all content covered.", working: "purpose", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Concepts, skills, techniques.", working: "include", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Multiple items.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Focus on weak areas first.", working: "prioritise", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Gaps and exam readiness.", working: "check", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Multiple items.", working: "multiple", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) cover all (b) concepts/skills/techniques (c) weak areas (d) gaps/readiness",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple items.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple items.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
        ],
        commonErrors: ["Skipping difficult topics."],
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
