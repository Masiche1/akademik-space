import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "oles-u7-lesson-7-1",
  code: "7-1",
  title: "Exam format and time management",
  goal: "I CAN manage exam time across all sections of the ESL paper.",
  standards: ["1120 Exam technique"],
  vocabulary: [
    { term: "Exam paper", definition: "The written test covering reading, writing and language." },
    { term: "Time allocation", definition: "Dividing available minutes between sections and questions." },
    { term: "Mark scheme", definition: "How marks are distributed across questions." },
    { term: "Checking time", definition: "The last few minutes reserved for reviewing answers." },
    { term: "Prioritising", definition: "Doing high-mark or easier questions first." },
  ],
  concepts: [
    {
      id: "oles-u7-format",
      title: "Knowing the exam",
      skill: "Understand the paper structure and mark distribution.",
      lesson: {
        sections: [
          { heading: "Paper structure", body: "The written ESL paper tests reading comprehension, summary writing, directed writing and composition. Questions vary in marks — usually the longer writing tasks carry the most marks. Know the word counts: summaries have strict limits; compositions have guidelines." },
          { heading: "Reading the rubric", body: "Before starting, read all instructions carefully. Check which questions are compulsory, word limits, and mark allocations. A question worth 20 marks deserves more time than one worth 5 — allocate accordingly." },
        ],
        keyFormulas: [
          { name: "Time rule", statement: "Marks ÷ total = time share; reserve final minutes for checking." },
        ],
        workedExample: {
          problem: "90-minute paper: 30 marks reading, 70 marks writing. How to split time?",
          solution: "Reading ~30 min, writing ~55 min, checking ~5 min — roughly proportional to marks.",
        },
      },
      questions: [
        {
          id: "oles-u7-fm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Before starting the exam, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Read all instructions and check word limits" },
            { id: "b", text: "Start writing immediately" },
            { id: "c", text: "Skip the reading section" },
            { id: "d", text: "Answer only easy questions" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Exam prep", statement: "Read instructions first." }], steps: [{ reasoning: "Instructions reveal requirements and mark distribution.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Read instructions first" },
        },
        {
          id: "oles-u7-fm-q2", difficulty: "core", totalMarks: 2,
          stem: "Why should high-mark questions get more time?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Prioritising", statement: "Marks justify time." }], steps: [
            { reasoning: "More marks = more potential score.", marks: 1, markCode: "AO2" },
            { reasoning: "Spending equal time on all questions wastes opportunity.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "High-mark questions offer more marks per minute invested." },
        },
        {
          id: "oles-u7-fm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to allocate time in a two-hour exam.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Time allocation", statement: "Proportional to marks + check reserve." }], steps: [
            { reasoning: "Calculate each section's share of total marks.", marks: 1, markCode: "AO2" },
            { reasoning: "Assign minutes proportionally to each section.", marks: 1, markCode: "AO2" },
            { reasoning: "Reserve 5-10 minutes at the end for checking.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear method.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Proportional to marks; reserve checking time." },
        },
        {
          id: "oles-u7-fm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Exam format review.",
          parts: [
            { label: "a", prompt: "What should you check before writing?", marks: 2 },
            { label: "b", prompt: "How do marks guide time?", marks: 2 },
            { label: "c", prompt: "Why reserve checking time?", marks: 2 },
            { label: "d", prompt: "What is a common time mistake?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Exam technique", statement: "Instructions, proportional time, checking." }], steps: [
            { part: "a", reasoning: "Instructions, word limits, mark allocations, compulsory questions.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "All key checks.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "More marks deserve more time — proportional allocation.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct principle.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Checking catches missed content points, errors and word-limit breaches.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Spending too long on low-mark questions and rushing high-mark ones.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Common error identified.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Prevention advice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) instructions+limits (b) proportional (c) catches errors (d) peak marks)",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
    {
      id: "oles-u7-strategy",
      title: "Section strategies",
      skill: "Apply targeted strategies to each exam section.",
      lesson: {
        sections: [
          { heading: "Reading section", body: "Skim first for gist, then answer literal questions by scanning keywords. Save inference questions for a second pass — they need more thought. Never leave blanks; guess intelligently if time runs out." },
          { heading: "Writing section", body: "For summaries: select key points, draft, count words, check. For directed writing: underline content points, plan 5 minutes, write, verify checklist. For composition: plan the arc, write with paragraph control, check tense consistency." },
        ],
        keyFormulas: [
          { name: "Section order", statement: "Reading: skim→answer→review. Writing: plan→draft→check." },
        ],
        workedExample: {
          problem: "10 minutes left, two questions unanswered. What do you do?",
          solution: "Answer both with best-effort responses — partial marks beat blanks. Quick plan for writing tasks, direct answers for reading.",
        },
      },
      questions: [
        {
          id: "oles-u7-ss-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In the reading section, you should first…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Skim the text for the gist" },
            { id: "b", text: "Answer inference questions" },
            { id: "c", text: "Translate the text" },
            { id: "d", text: "Write an essay" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Reading order", statement: "Skim before detail." }], steps: [{ reasoning: "Gist first builds the map for answers.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Skim first" },
        },
        {
          id: "oles-u7-ss-q2", difficulty: "core", totalMarks: 2,
          stem: "Why answer inference questions in a second pass?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Two-pass", statement: "Literal first, inference second." }], steps: [
            { reasoning: "Literal questions are faster — secure those marks first.", marks: 1, markCode: "AO2" },
            { reasoning: "Inference needs more thought; do it with remaining time.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Secure easy marks first; use remaining time for harder inference." },
        },
        {
          id: "oles-u7-ss-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the plan-draft-check routine for writing tasks.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Writing routine", statement: "Plan → draft → check." }], steps: [
            { reasoning: "Plan: identify requirements, content points, structure.", marks: 1, markCode: "AO2" },
            { reasoning: "Draft: write the answer covering all points.", marks: 1, markCode: "AO2" },
            { reasoning: "Check: word count, content coverage, register, errors.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear routine.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Plan requirements → draft answer → verify checklist and word count." },
        },
        {
          id: "oles-u7-ss-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Section strategies review.",
          parts: [
            { label: "a", prompt: "Reading: first step?", marks: 2 },
            { label: "b", prompt: "When to do inference questions?", marks: 2 },
            { label: "c", prompt: "Writing: what to check last?", marks: 2 },
            { label: "d", prompt: "Why never leave blanks?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Section strategy", statement: "Skim→answer; plan→draft→check; guess rather than blank." }], steps: [
            { part: "a", reasoning: "Skim the text for gist before answering.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct first step.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Second pass — after securing literal answers.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct timing.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Content point coverage, word count, register, errors.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "All checks.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Partial marks beat zero — always attempt every question.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains reasoning.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Exam wisdom.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) skim (b) second pass (c) coverage+count+errors (d) partial>blank",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u7-7-1-notes", title: "Exam technique — notes", summary: "Time management and section-by-section strategy.",
      sections: [
        { heading: "Time", body: "Allocate proportional to marks; reserve 5-10 minutes for checking; never leave blanks." },
        { heading: "Sections", body: "Reading: skim→literal→inference. Writing: plan→draft→check checklist." },
      ] },
  ],
};
