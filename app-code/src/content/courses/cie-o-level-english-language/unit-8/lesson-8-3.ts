import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "cie-ol-el-lesson-8-3",
  code: "8-3",
  title: "Exam practice and mock papers",
  goal: "I CAN use practice papers effectively to prepare for the exam.",
  standards: ["1123 Exam preparation"],
  vocabulary: [
    { term: "Mock paper", definition: "Full practice exam under timed conditions." },
    { term: "Past paper", definition: "Previous year's real exam paper." },
    { term: "Timed practice", definition: "Completing paper within exam time limit." },
    { term: "Mark scheme analysis", definition: "Studying examiner expectations." },
    { term: "Error log", definition: "Record of mistakes for revision." },
    { term: "Targeted revision", definition: "Focusing on weak areas." },
  ],
  concepts: [
    {
      id: "cie-ol-el-mock-papers",
      title: "Using practice papers",
      skill: "Maximise learning from timed practice.",
      lesson: {
        sections: [
          {
            heading: "Simulating exam conditions",
            body: "Set timer for full paper duration. No interruptions — phone off, quiet room. Use only allowed materials. Complete all questions as in real exam.",
          },
          {
            heading: "After completing",
            body: "Mark using official mark scheme. Analyse errors — why did you lose marks? Categorise mistakes: knowledge, technique, timing, careless errors.",
          },
          {
            heading: "Targeted revision",
            body: "Focus on weakest areas. Re-read relevant unit notes. Practise specific question types that caused problems.",
          },
        ],
        keyFormulas: [
          { name: "Practice papers", statement: "Timed practice→mark→analyse errors→targeted revision." },
        ],
        workedExample: {
          problem: "Lost 8 marks on inference questions.",
          solution: "Re-read unit on inference techniques → practise 5 similar questions → re-attempt paper → compare improvement.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'mock paper'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Essay plan" },
              { id: "b", text: "Full practice exam" },
              { id: "c", text: "Vocabulary list" },
              { id: "d", text: "Single question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mock paper", statement: "Full practice exam under timed conditions." },
            ],
            steps: [
              { reasoning: "Mock = full practice.", working: "full", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Full practice exam",
            commonErrors: ["Choosing (b) — that's single question."],
          },
        },
        {
          id: "cie-ol-el-mp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you do after a mock paper?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "After mock", statement: "Mark with scheme, analyse errors, categorise mistakes, revise." },
            ],
            steps: [
              { reasoning: "Mark and analyse errors.", working: "mark", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Mark→analyse errors→categorise→targeted revision.",
            commonErrors: ["Just checking score — need error analysis."],
          },
        },
        {
          id: "cie-ol-el-mp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to simulate exam conditions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Simulation", statement: "Timer, no interruptions, allowed materials only, complete all questions." },
            ],
            steps: [
              { reasoning: "Set timer for full duration.", working: "timer", marks: 1, markCode: "AO2" },
              { reasoning: "No interruptions — phone off, quiet room.", working: "quiet", marks: 1, markCode: "AO2" },
              { reasoning: "Use only allowed materials — realistic conditions.", working: "materials", marks: 1, markCode: "AO2" },
              { reasoning: "Complete all questions as in real exam.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Timer→no interruptions→allowed materials→all questions.",
            commonErrors: ["Casual practice — doesn't build exam stamina."],
          },
        },
        {
          id: "cie-ol-el-mp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Practice paper strategy.",
          parts: [
            { label: "a", prompt: "Define mock paper.", marks: 1 },
            { label: "b", prompt: "What after mock paper?", marks: 2 },
            { label: "c", prompt: "How to simulate conditions?", marks: 3 },
            { label: "d", prompt: "How to use error analysis?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practice", statement: "Mock, analyse, simulate, error analysis." },
            ],
            steps: [
              { part: "a", reasoning: "Full practice exam under timed conditions.", working: "mock", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Mark, analyse errors, categorise, revise.", working: "after", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Timer, no interruptions, materials, all questions.", working: "simulate", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Categorise mistakes, focus revision on weak areas, practise question types.", working: "errors", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) full practice (b) mark+analyse (c) timer+quiet+materials (d) categorise+focus+practise",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Steps clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Analysis clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Practice without analysis — no improvement."],
          },
        },
    {
      id: "cie-ol-el-mp-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a mock paper?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Homework" },
          { id: "b", text: "Practice exam under exam conditions" },
          { id: "c", text: "Real exam" },
          { id: "d", text: "Textbook exercise" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Mock paper", statement: "Practice under exam conditions." },
        ],
        steps: [
          { reasoning: "Mock paper = simulated exam.", working: "mock", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Practice exam under exam conditions",
        commonErrors: ["Confusing with real exam."],
      },
    },
    {
      id: "cie-ol-el-mp-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Why take mock papers?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only for fun" },
          { id: "b", text: "Identify weaknesses and build exam confidence" },
          { id: "c", text: "Not needed" },
          { id: "d", text: "Wastes time" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Purpose", statement: "Identify weaknesses, build confidence." },
        ],
        steps: [
          { reasoning: "Mocks identify weaknesses and build confidence.", working: "purpose", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(b)** Identify weaknesses and build exam confidence",
        commonErrors: ["Taking mocks without analysis."],
      },
    },
    {
      id: "cie-ol-el-mp-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "How should you approach a mock paper?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "No time limit" },
          { id: "b", text: "Open notes" },
          { id: "c", text: "Timed, quiet environment, then analyse results" },
          { id: "d", text: "Ignore results" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Conditions", statement: "Timed, quiet, analyse." },
        ],
        steps: [
          { reasoning: "Simulate exam conditions.", working: "conditions", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** Timed, quiet environment, then analyse results",
        commonErrors: ["Not simulating conditions."],
      },
    },
    {
      id: "cie-ol-el-mp-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should you do AFTER a mock paper?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Ignore results" },
          { id: "b", text: "Throw it away" },
          { id: "c", text: "Take another mock immediately" },
          { id: "d", text: "Analyse mistakes and revise weak areas" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Analysis", statement: "Analyse mistakes, revise." },
        ],
        steps: [
          { reasoning: "Analyse results after mock.", working: "analyse", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(d)** Analyse mistakes and revise weak areas",
        commonErrors: ["Not analysing results."],
      },
    },
    {
      id: "cie-ol-el-mp-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "How many mock papers should you complete?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only at the last minute" },
          { id: "b", text: "As many as possible before the exam" },
          { id: "c", text: "Only one" },
          { id: "d", text: "None" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Practice", statement: "Complete many mocks." },
        ],
        steps: [
          { reasoning: "Complete as many as possible.", working: "many", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** As many as possible before the exam",
        commonErrors: ["Too few mocks."],
      },
    },
    {
      id: "cie-ol-el-mp-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A student completes 3 mock papers. If 5 are recommended, how many remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Practice", statement: "Complete recommended mocks." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 mocks remain.", working: "5 - 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Insufficient practice."],
      },
    },
    {
      id: "cie-ol-el-mp-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A mock paper has 6 sections. A student completes 4. How many sections remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Completion", statement: "Complete all sections." },
        ],
        steps: [
          { reasoning: "6 - 4 = 2 sections remain.", working: "6 - 4 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Incomplete mock papers."],
      },
    },
    {
      id: "cie-ol-el-mp-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A student takes 4 mock papers scoring 60%, 70%, 65%, and 80%. How many scores are above 65%?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Scores", statement: "Track improvement." },
        ],
        steps: [
          { reasoning: "70% and 80% are above 65%.", working: "2", marks: 1, markCode: "AO3" },
          { reasoning: "Two scores above 65%.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Not tracking scores."],
      },
    },
    {
      id: "cie-ol-el-mp-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A mock paper allows 120 minutes for 4 papers. If a student spends 40 minutes on paper 1, how many minutes remain for the other 3 papers?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 80 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time per paper." },
        ],
        steps: [
          { reasoning: "120 - 40 = 80 minutes remain.", working: "120 - 40 = 80", marks: 1, markCode: "AO3" },
          { reasoning: "80 minutes for 3 papers.", working: "80", marks: 1, markCode: "AO3" },
          { reasoning: "Approximately 27 minutes per remaining paper.", working: "27", marks: 2, markCode: "AO2" },
        ],
        finalAnswer: "80",
        commonErrors: ["Spending too long on one paper."],
      },
    },
    {
      id: "cie-ol-el-mp-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how to take and analyse a mock paper effectively.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Mock papers", statement: "Timed, analyse, revise." },
        ],
        steps: [
          { reasoning: "Take under exam conditions — timed, quiet.", working: "conditions", marks: 1, markCode: "AO2" },
          { reasoning: "Analyse results against mark scheme.", working: "analyse", marks: 1, markCode: "AO2" },
          { reasoning: "Revise weak areas identified.", working: "revise", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Timed→analyse→revise.",
        commonErrors: ["Not analysing results."],
      },
    },
    {
      id: "cie-ol-el-mp-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why mock papers improve exam performance.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Benefit", statement: "Identify weaknesses, build confidence." },
        ],
        steps: [
          { reasoning: "Reveal weaknesses before exam.", working: "weaknesses", marks: 1, markCode: "AO2" },
          { reasoning: "Build exam confidence and timing skills.", working: "confidence", marks: 1, markCode: "AO2" },
          { reasoning: "Show what examiners expect.", working: "expect", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Mocks reveal weaknesses, build confidence, show expectations.",
        commonErrors: ["Taking mocks without analysis."],
      },
    },
    {
      id: "cie-ol-el-mp-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about mock papers.",
      parts: [
        { label: "a", prompt: "What is a mock paper?", marks: 2 },
        { label: "b", prompt: "Why take mocks?", marks: 2 },
        { label: "c", prompt: "How to approach?", marks: 2 },
        { label: "d", prompt: "What after?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Mock papers", statement: "Definition, purpose, approach, analysis." },
        ],
        steps: [
          { part: "a", reasoning: "Practice exam under exam conditions.", working: "definition", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Identify weaknesses, build confidence.", working: "purpose", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Multiple benefits.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Timed, quiet, simulate conditions.", working: "approach", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Multiple steps.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Analyse mistakes, revise weak areas.", working: "after", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) simulated exam (b) weaknesses/confidence (c) timed+quiet (d) analyse+revise",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple benefits.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple steps.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Not analysing results."],
      },
    },
      ],
    },
    {
      id: "cie-ol-el-error-analysis",
      title: "Error analysis and correction",
      skill: "Learn from mistakes systematically.",
      lesson: {
        sections: [
          {
            heading: "Types of errors",
            body: "Knowledge errors: don't know content. Technique errors: know content but apply wrongly. Timing errors: ran out of time. Careless errors: typos, misread.",
          },
          {
            heading: "Error log",
            body: "Record each mistake: question number, type, why it happened, how to fix. Review log before next practice.",
          },
          {
            heading: "Correction strategies",
            body: "Knowledge: re-read unit notes. Technique: practise similar questions. Timing: improve time management. Careless: slow down, proofread.",
          },
        ],
        keyFormulas: [
          { name: "Error analysis", statement: "Categorise→log→targeted fix for each error type." },
        ],
        workedExample: {
          problem: "Repeated errors on quotation questions.",
          solution: "Type: technique error — quoting without analysis. Fix: practise 'quote→explain significance' pattern 10 times.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-ea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'knowledge error'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Typo" },
              { id: "b", text: "Ran out of time" },
              { id: "c", text: "Misread question" },
              { id: "d", text: "Don't know content" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Knowledge error", statement: "Don't know the content — gaps in learning." },
            ],
            steps: [
              { reasoning: "Knowledge = don't know.", working: "know", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Don't know content",
            commonErrors: ["Choosing (b) — that's careless error."],
          },
        },
        {
          id: "cie-ol-el-ea-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an 'error log'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Error log", statement: "Record of mistakes — question, type, cause, fix." },
            ],
            steps: [
              { reasoning: "Systematic record of mistakes.", working: "record", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Systematic record of mistakes — question, type, cause, fix.",
            commonErrors: ["Just noting score — need details."],
          },
        },
        {
          id: "cie-ol-el-ea-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to correct timing errors?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timing errors", statement: "Improve time management — practise under timed conditions." },
            ],
            steps: [
              { reasoning: "Identify which questions took too long.", working: "identify", marks: 1, markCode: "AO2" },
              { reasoning: "Practise faster response techniques.", working: "practise", marks: 1, markCode: "AO2" },
              { reasoning: "Improve time allocation strategy.", working: "allocation", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Identify slow questions→practise speed→improve allocation.",
            commonErrors: ["Ignoring timing — repeated problem."],
          },
        },
        {
          id: "cie-ol-el-ea-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Error analysis.",
          parts: [
            { label: "a", prompt: "Define knowledge error.", marks: 1 },
            { label: "b", prompt: "What is error log?", marks: 2 },
            { label: "c", prompt: "How to correct timing errors?", marks: 3 },
            { label: "d", prompt: "Correction strategies?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Errors", statement: "Types, log, correction strategies." },
            ],
            steps: [
              { part: "a", reasoning: "Don't know content.", working: "knowledge", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Systematic record of mistakes.", working: "log", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Question, type, cause, fix.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Identify, practise speed, improve allocation.", working: "timing", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Knowledge=re-read; technique=practise; timing=manage; careless=proofread.", working: "strategies", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple types.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) don't know (b) mistake record (c) identify+practise+allocate (d) type-specific fixes",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Steps clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Strategies clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Same errors repeated — no systematic fixing."],
          },
        },
    {
      id: "cie-ol-el-ea-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is error analysis?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Hiding errors" },
          { id: "b", text: "Systematically identifying and fixing mistakes" },
          { id: "c", text: "Making more errors" },
          { id: "d", text: "Ignoring mistakes" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Error analysis", statement: "Identify and fix mistakes." },
        ],
        steps: [
          { reasoning: "Error analysis = systematic fixing.", working: "analysis", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Systematically identifying and fixing mistakes",
        commonErrors: ["Ignoring mistakes."],
      },
    },
    {
      id: "cie-ol-el-ea-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should you do with mistakes?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Record, categorise, and practise fixing them" },
          { id: "b", text: "Repeat them" },
          { id: "c", text: "Forget them" },
          { id: "d", text: "Blame others" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Mistakes", statement: "Record, categorise, practise." },
        ],
        steps: [
          { reasoning: "Record, categorise, practise fixes.", working: "fix", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Record, categorise, and practise fixing them",
        commonErrors: ["Repeating same errors."],
      },
    },
    {
      id: "cie-ol-el-ea-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What is a common error type in English exams?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "No errors" },
          { id: "b", text: "Only spelling" },
          { id: "c", text: "Grammar, punctuation, spelling, register" },
          { id: "d", text: "Only grammar" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Types", statement: "Grammar, punctuation, spelling, register." },
        ],
        steps: [
          { reasoning: "Multiple error types.", working: "types", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** Grammar, punctuation, spelling, register",
        commonErrors: ["Only focusing on one error type."],
      },
    },
    {
      id: "cie-ol-el-ea-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "How should you categorise errors?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Randomly" },
          { id: "b", text: "By difficulty" },
          { id: "c", text: "Ignore them" },
          { id: "d", text: "By type to identify patterns" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Categorise", statement: "By type to find patterns." },
        ],
        steps: [
          { reasoning: "Categorise by type.", working: "categorise", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(d)** By type to identify patterns",
        commonErrors: ["Not categorising."],
      },
    },
    {
      id: "cie-ol-el-ea-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the benefit of error analysis?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Prevent repeating the same mistakes" },
          { id: "b", text: "Confuses students" },
          { id: "c", text: "Makes things worse" },
          { id: "d", text: "Wastes time" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Benefit", statement: "Prevent repeating mistakes." },
        ],
        steps: [
          { reasoning: "Analysis prevents repeats.", working: "prevent", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Prevent repeating the same mistakes",
        commonErrors: ["Thinking analysis is a waste."],
      },
    },
    {
      id: "cie-ol-el-ea-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A student makes 8 errors in a paper. If 3 are grammar errors, how many are other types?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Errors", statement: "Categorise errors." },
        ],
        steps: [
          { reasoning: "8 - 3 = 5 other errors.", working: "8 - 3 = 5", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "5",
        commonErrors: ["Not categorising."],
      },
    },
    {
      id: "cie-ol-el-ea-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A student makes 6 errors across 3 papers. How many errors per paper on average?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Average", statement: "Track error rate." },
        ],
        steps: [
          { reasoning: "6 / 3 = 2 errors per paper.", working: "6 / 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Not tracking error rate."],
      },
    },
    {
      id: "cie-ol-el-ea-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A student makes 10 errors: 4 grammar, 3 punctuation, 2 spelling, 1 register. How many error types are represented?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 4 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Types", statement: "Multiple error types." },
        ],
        steps: [
          { reasoning: "Four types: grammar, punctuation, spelling, register.", working: "4", marks: 1, markCode: "AO3" },
          { reasoning: "Four error types.", working: "4", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "4",
        commonErrors: ["Missing error types."],
      },
    },
    {
      id: "cie-ol-el-ea-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A student's errors decrease by 2 each paper: 6 in paper 1, 4 in paper 2. How many errors will they make in paper 3?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Improvement", statement: "Track error reduction." },
        ],
        steps: [
          { reasoning: "Pattern: 6, 4, ... decreasing by 2.", working: "6 - 2 = 4", marks: 1, markCode: "AO3" },
          { reasoning: "Paper 3 = 4 - 2 = 2 errors.", working: "4 - 2 = 2", marks: 2, markCode: "AO3" },
          { reasoning: "Two errors in paper 3 — improvement continues.", working: "2", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "2",
        commonErrors: ["Not tracking improvement."],
      },
    },
    {
      id: "cie-ol-el-ea-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how to analyse and fix errors systematically.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Analysis", statement: "Record, categorise, practise." },
        ],
        steps: [
          { reasoning: "Record all mistakes.", working: "record", marks: 1, markCode: "AO2" },
          { reasoning: "Categorise by type to find patterns.", working: "categorise", marks: 1, markCode: "AO2" },
          { reasoning: "Practise fixing common errors.", working: "practise", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Record→categorise→practise.",
        commonErrors: ["Repeating same errors."],
      },
    },
    {
      id: "cie-ol-el-ea-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why categorising errors helps improve performance.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Patterns", statement: "Find patterns, target fixes." },
        ],
        steps: [
          { reasoning: "Categorisation reveals patterns.", working: "patterns", marks: 1, markCode: "AO2" },
          { reasoning: "Shows which errors are most common.", working: "common", marks: 1, markCode: "AO2" },
          { reasoning: "Guides targeted revision.", working: "targeted", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Categorisation reveals patterns — guides targeted fixes.",
        commonErrors: ["Not categorising."],
      },
    },
    {
      id: "cie-ol-el-ea-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about error analysis.",
      parts: [
        { label: "a", prompt: "What is error analysis?", marks: 2 },
        { label: "b", prompt: "What to do with mistakes?", marks: 2 },
        { label: "c", prompt: "What are error types?", marks: 2 },
        { label: "d", prompt: "How to categorise?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Error analysis", statement: "Definition, action, types, categorise." },
        ],
        steps: [
          { part: "a", reasoning: "Systematic identification and fixing.", working: "definition", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Record, categorise, practise.", working: "action", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Multiple steps.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Grammar, punctuation, spelling, register.", working: "types", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Multiple types.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "By type to find patterns.", working: "categorise", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) systematic fixing (b) record+categorise+practise (c) grammar/punct/spell/register (d) by type",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple steps.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple types.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Repeating same errors."],
      },
    },
      ],
    },
    {
      id: "cie-ol-el-final-checklist",
      title: "Final exam checklist",
      skill: "Ensure readiness before examination day.",
      lesson: {
        sections: [
          {
            heading: "Content readiness",
            body: "All 9 units reviewed. Key concepts memorised. Grammar rules practised. Writing formats understood.",
          },
          {
            heading: "Skill readiness",
            body: "Reading strategies practised. Writing techniques applied. Time management tested. Error patterns identified and addressed.",
          },
          {
            heading: "Practical readiness",
            body: "Past papers completed. Materials prepared. Sleep and nutrition planned. Exam venue and time confirmed.",
          },
        ],
        keyFormulas: [
          { name: "Checklist", statement: "Content+skills+practical = fully prepared." },
        ],
        workedExample: {
          problem: "One week before exam.",
          solution: "Final review of weak units → one more mock paper → organise materials → plan sleep → confirm exam details.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-fc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'content readiness'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Having good pen" },
              { id: "b", text: "Early arrival" },
              { id: "c", text: "Knowing all material" },
              { id: "d", text: "High confidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Content readiness", statement: "Mastery of all course material." },
            ],
            steps: [
              { reasoning: "Content = know material.", working: "know", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Knowing all material",
            commonErrors: ["Choosing (d) — confidence without knowledge fails."],
          },
        },
        {
          id: "cie-ol-el-fc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'skill readiness'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Skill readiness", statement: "Practised strategies — reading, writing, time management." },
            ],
            steps: [
              { reasoning: "Skills = practised strategies.", working: "skills", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Practised strategies — reading, writing, time management, error correction.",
            commonErrors: ["Only content — skills matter too."],
          },
        },
        {
          id: "cie-ol-el-fc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What practical preparations are needed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practical", statement: "Materials, sleep, nutrition, venue confirmation." },
            ],
            steps: [
              { reasoning: "Prepare materials — pens, ID, etc.", working: "materials", marks: 1, markCode: "AO2" },
              { reasoning: "Plan sleep and nutrition — rest matters.", working: "rest", marks: 1, markCode: "AO2" },
              { reasoning: "Confirm exam venue and time.", working: "venue", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Materials→sleep/nutrition→confirm venue/time.",
            commonErrors: ["Forgetting practical details — causes stress."],
          },
        },
        {
          id: "cie-ol-el-fc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Final checklist.",
          parts: [
            { label: "a", prompt: "Define content readiness.", marks: 1 },
            { label: "b", prompt: "Define skill readiness.", marks: 2 },
            { label: "c", prompt: "List practical preparations.", marks: 3 },
            { label: "d", prompt: "One-week plan?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Checklist", statement: "Content, skills, practical, one-week plan." },
            ],
            steps: [
              { part: "a", reasoning: "Mastery of all course material.", working: "content", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Practised strategies.", working: "skills", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Reading, writing, time management.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Materials, sleep, nutrition, venue.", working: "practical", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple items.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Final review→mock paper→organise materials→plan sleep→confirm details.", working: "plan", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) know material (b) practised skills (c) materials+rest+venue (d) review+mock+organise+rest",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Items clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Plan clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Neglecting practical prep — causes exam stress."],
          },
        },
    {
      id: "cie-ol-el-fc-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you check before the exam?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only materials" },
          { id: "b", text: "Nothing" },
          { id: "c", text: "Content readiness, skill readiness, practical prep" },
          { id: "d", text: "Only sleep" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Checklist", statement: "Content, skills, practical." },
        ],
        steps: [
          { reasoning: "Check content, skills, practical.", working: "checklist", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Content readiness, skill readiness, practical prep",
        commonErrors: ["Neglecting checklist."],
      },
    },
    {
      id: "cie-ol-el-fc-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is content readiness?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only grammar" },
          { id: "b", text: "Only spelling" },
          { id: "c", text: "Knowing all syllabus material" },
          { id: "d", text: "Only punctuation" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Content readiness", statement: "Know all material." },
        ],
        steps: [
          { reasoning: "Content readiness = know material.", working: "content", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Knowing all syllabus material",
        commonErrors: ["Only checking one area."],
      },
    },
    {
      id: "cie-ol-el-fc-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What is skill readiness?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "No practice" },
          { id: "b", text: "Practised exam techniques and question types" },
          { id: "c", text: "Only reading" },
          { id: "d", text: "Only writing" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Skill readiness", statement: "Practised techniques." },
        ],
        steps: [
          { reasoning: "Skill readiness = practised techniques.", working: "skill", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(b)** Practised exam techniques and question types",
        commonErrors: ["Only reviewing content."],
      },
    },
    {
      id: "cie-ol-el-fc-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What practical prep should you do?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Stay up all night" },
          { id: "b", text: "Skip breakfast" },
          { id: "c", text: "Organise materials, get enough sleep, plan route" },
          { id: "d", text: "Forget materials" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Practical", statement: "Materials, sleep, route." },
        ],
        steps: [
          { reasoning: "Practical prep: materials, sleep, route.", working: "practical", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Organise materials, get enough sleep, plan route",
        commonErrors: ["Neglecting practical prep."],
      },
    },
    {
      id: "cie-ol-el-fc-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "When should you start the final checklist?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Never" },
          { id: "b", text: "A week before the exam" },
          { id: "c", text: "After the exam" },
          { id: "d", text: "Day of exam" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Timing", statement: "Start a week before." },
        ],
        steps: [
          { reasoning: "Start checklist a week before.", working: "timing", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** A week before the exam",
        commonErrors: ["Starting too late."],
      },
    },
    {
      id: "cie-ol-el-fc-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A student has 9 units to review. If 7 are complete, how many units remain?",
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
          { reasoning: "9 - 7 = 2 units remain.", working: "9 - 7 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Not reviewing all units."],
      },
    },
    {
      id: "cie-ol-el-fc-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A student completes 4 mock papers. If 6 are recommended, how many remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Practice", statement: "Complete recommended mocks." },
        ],
        steps: [
          { reasoning: "6 - 4 = 2 mocks remain.", working: "6 - 4 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Insufficient practice."],
      },
    },
    {
      id: "cie-ol-el-fc-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A checklist has 5 items: content, skills, materials, sleep, route. A student completes 3. How many items remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Checklist", statement: "Complete all items." },
        ],
        steps: [
          { reasoning: "5 items; 3 completed.", working: "5 - 3 = 2", marks: 1, markCode: "AO3" },
          { reasoning: "Two items remain.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Incomplete checklist."],
      },
    },
    {
      id: "cie-ol-el-fc-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A student has 7 days before the exam. If they spend 2 days on content review, how many days remain for other prep?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Time management", statement: "Allocate time per prep area." },
        ],
        steps: [
          { reasoning: "7 - 2 = 5 days remain.", working: "7 - 2 = 5", marks: 1, markCode: "AO3" },
          { reasoning: "5 days for skills, mocks, practical.", working: "5", marks: 1, markCode: "AO3" },
          { reasoning: "Approximately 1-2 days per remaining area.", working: "2", marks: 2, markCode: "AO2" },
        ],
        finalAnswer: "5",
        commonErrors: ["Spending too long on one area."],
      },
    },
    {
      id: "cie-ol-el-fc-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe what a final exam checklist should include.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Checklist", statement: "Content, skills, practical." },
        ],
        steps: [
          { reasoning: "Content readiness — know all material.", working: "content", marks: 1, markCode: "AO2" },
          { reasoning: "Skill readiness — practised techniques.", working: "skill", marks: 1, markCode: "AO2" },
          { reasoning: "Practical prep — materials, sleep, route.", working: "practical", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Content→skills→practical.",
        commonErrors: ["Neglecting practical prep."],
      },
    },
    {
      id: "cie-ol-el-fc-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why practical prep matters as much as content review.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Practical", statement: "Materials, rest, venue." },
        ],
        steps: [
          { reasoning: "Good sleep improves performance.", working: "sleep", marks: 1, markCode: "AO2" },
          { reasoning: "Organised materials reduce stress.", working: "materials", marks: 1, markCode: "AO2" },
          { reasoning: "Knowing venue avoids last-minute panic.", working: "venue", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Sleep, materials, venue — reduce stress, improve performance.",
        commonErrors: ["Neglecting practical prep."],
      },
    },
    {
      id: "cie-ol-el-fc-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about the final checklist.",
      parts: [
        { label: "a", prompt: "What to check?", marks: 2 },
        { label: "b", prompt: "What is content readiness?", marks: 2 },
        { label: "c", prompt: "What is skill readiness?", marks: 2 },
        { label: "d", prompt: "What practical prep?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Checklist", statement: "Check, content, skills, practical." },
        ],
        steps: [
          { part: "a", reasoning: "Content, skills, practical.", working: "check", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Multiple areas.", working: "multiple", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Know all syllabus material.", working: "content", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Practised techniques and question types.", working: "skill", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Correct.", working: "correct", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Materials, sleep, route.", working: "practical", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Multiple items.", working: "multiple", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) content/skills/practical (b) know material (c) practised techniques (d) materials/sleep/route",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Multiple areas.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple items.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
        ],
        commonErrors: ["Neglecting practical prep."],
      },
    },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-practice-notes",
      title: "Exam practice — revision notes",
      summary: "Practice papers, error analysis, final checklist.",
      sections: [
        {
          heading: "Practice",
          body: "Timed mock papers→mark→analyse errors→categorise (knowledge/technique/timing/careless)→targeted revision.",
        },
        {
          heading: "Checklist",
          body: "Content: all units reviewed. Skills: strategies practised. Practical: materials, sleep, venue confirmed.",
        },
      ],
    },
  ],
};
