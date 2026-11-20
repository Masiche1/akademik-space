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
              { id: "a", text: "Full practice exam" },
              { id: "b", text: "Single question" },
              { id: "c", text: "Vocabulary list" },
              { id: "d", text: "Essay plan" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mock paper", statement: "Full practice exam under timed conditions." },
            ],
            steps: [
              { reasoning: "Mock = full practice.", working: "full", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Full practice exam",
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
              { id: "a", text: "Don't know content" },
              { id: "b", text: "Misread question" },
              { id: "c", text: "Ran out of time" },
              { id: "d", text: "Typo" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Knowledge error", statement: "Don't know the content — gaps in learning." },
            ],
            steps: [
              { reasoning: "Knowledge = don't know.", working: "know", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Don't know content",
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
              { id: "a", text: "Knowing all material" },
              { id: "b", text: "Having good pen" },
              { id: "c", text: "Early arrival" },
              { id: "d", text: "High confidence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Content readiness", statement: "Mastery of all course material." },
            ],
            steps: [
              { reasoning: "Content = know material.", working: "know", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Knowing all material",
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
