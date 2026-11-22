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
            { id: "b", text: "Skip the reading section" },
            { id: "c", text: "Answer only easy questions" },
            { id: "d", text: "Start writing immediately" },
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
        {
          id: "oles-u7-fm-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In an ESL written paper, the longer writing tasks usually carry…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The fewest marks" },
            { id: "b", text: "No marks at all" },
            { id: "c", text: "The most marks" },
            { id: "d", text: "Exactly the same marks as short questions" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Mark distribution", statement: "Longer tasks carry more marks." }], steps: [{ reasoning: "Writing tasks such as summaries and compositions are weighted heavily.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** The most marks" },
        },
        {
          id: "oles-u7-fm-q6", difficulty: "core", totalMarks: 1,
          stem: "The best use of the last few minutes of the exam is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Start a brand-new essay" },
            { id: "b", text: "Re-read the entire paper from the start" },
            { id: "c", text: "Pack up your bag" },
            { id: "d", text: "Check all your answers" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Checking time", statement: "Reserve final minutes for review." }], steps: [{ reasoning: "Checking catches missed points, errors and word-limit breaches.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Check all your answers" },
        },
        {
          id: "oles-u7-fm-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Why should you read all the instructions before you start answering?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Exam prep", statement: "Instructions reveal requirements." }], steps: [
            { reasoning: "Instructions state word limits, compulsory questions and mark allocations.", marks: 1, markCode: "AO2" },
            { reasoning: "Reading them first prevents costly mistakes later.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "They reveal word limits, requirements and marks — avoiding costly mistakes." },
        },
        {
          id: "oles-u7-fm-q8", difficulty: "core", totalMarks: 2,
          stem: "How should the mark scheme guide your time allocation?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Marks guide time", statement: "Time share follows marks share." }], steps: [
            { reasoning: "Questions worth more marks deserve more time.", marks: 1, markCode: "AO2" },
            { reasoning: "Allocate minutes roughly in proportion to marks per section.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Give each section time in proportion to the marks it carries." },
        },
        {
          id: "oles-u7-fm-q9", difficulty: "core", totalMarks: 3,
          stem: "Describe a simple time-check routine to use during the exam.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Time checks", statement: "Periodic checks keep you on schedule." }], steps: [
            { reasoning: "Note the start time and planned finish time for each section.", marks: 1, markCode: "AO2" },
            { reasoning: "Check the clock after finishing each question or section.", marks: 1, markCode: "AO2" },
            { reasoning: "If behind, speed up or move on; if ahead, use spare time to improve answers.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Set checkpoints, glance at the clock after each question, and adjust pace." },
        },
        {
          id: "oles-u7-fm-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why word limits in writing tasks matter and how you should respect them.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Word limits", statement: "Limits test selection and control." }], steps: [
            { reasoning: "Word limits test whether you can select the most important points.", marks: 1, markCode: "AO2" },
            { reasoning: "Answers far over or under the limit can lose marks for poor control.", marks: 1, markCode: "AO2" },
            { reasoning: "Count words during your final check and trim or expand as needed.", marks: 1, markCode: "AO2" },
            { reasoning: "Practise at different limits so counting becomes automatic.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Limits test selection; count words and adjust before time runs out." },
        },
        {
          id: "oles-u7-fm-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A question worth 20 marks compared to one worth 5 marks deserves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "More of your time" },
            { id: "b", text: "No time at all" },
            { id: "c", text: "Exactly the same time" },
            { id: "d", text: "Less of your time" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Prioritising", statement: "Marks justify time." }], steps: [{ reasoning: "More marks means more potential score for the same effort.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** More of your time" },
        },
        {
          id: "oles-u7-fm-q12", difficulty: "core", totalMarks: 2,
          stem: "What should you do if you finish a section before its time is up?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Spare time", statement: "Use it to improve, don't waste it." }], steps: [
            { reasoning: "Use the spare time to review answers or improve weaker responses.", marks: 1, markCode: "AO2" },
            { reasoning: "Do not rush ahead into the next section without checking.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Review and improve current answers before moving on." },
        },
        {
          id: "oles-u7-fm-q13", difficulty: "core", totalMarks: 3,
          stem: "Explain the risk of spending equal time on every exam question.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Equal-time trap", statement: "Marks are not equal." }], steps: [
            { reasoning: "Questions carry different marks, so equal time wastes effort on low-value questions.", marks: 1, markCode: "AO2" },
            { reasoning: "You may run out of time before finishing high-mark questions.", marks: 1, markCode: "AO2" },
            { reasoning: "Match time to marks instead.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Equal time ignores mark value and risks unfinished high-mark questions." },
        },
        {
          id: "oles-u7-fm-q14", difficulty: "challenge", totalMarks: 1,
          stem: "When a question is labelled 'compulsory', it means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is worth bonus marks" },
            { id: "b", text: "You must attempt it — there is no choice" },
            { id: "c", text: "You may skip it if you like" },
            { id: "d", text: "It must be answered first" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Compulsory", statement: "Must be attempted." }], steps: [{ reasoning: "'Compulsory' means every candidate must answer it.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** You must attempt it" },
        },
        {
          id: "oles-u7-fm-q15", difficulty: "foundation", totalMarks: 2,
          stem: "What is a 'mark scheme' and why should you know it before the exam?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Mark scheme", statement: "Shows how marks are distributed." }], steps: [
            { reasoning: "It shows how many marks each question and part is worth.", marks: 1, markCode: "AO2" },
            { reasoning: "Knowing it lets you plan time and effort realistically.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "It shows mark distribution so you can plan time and effort." },
        },
        {
          id: "oles-u7-fm-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A two-hour ESL paper has 40 marks of reading and 80 marks of writing. Propose a sensible time split.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Time allocation", statement: "Proportional to marks." }], steps: [
            { reasoning: "Total marks = 120, so writing is two-thirds of the paper.", marks: 1, markCode: "AO2" },
            { reasoning: "Allocate about 75-80 minutes to writing and 35-40 to reading.", marks: 1, markCode: "AO2" },
            { reasoning: "Reserve 5-10 minutes at the end for checking.", marks: 1, markCode: "AO2" },
            { reasoning: "Sensible, justified plan.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Roughly 35-40 min reading, 70-75 min writing, 5-10 min checking." },
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
            { id: "a", text: "Answer inference questions" },
            { id: "b", text: "Skim the text for the gist" },
            { id: "c", text: "Translate the text" },
            { id: "d", text: "Write an essay" },
          ], correctChoiceId: "b" },
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
        {
          id: "oles-u7-ss-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a directed writing task, your first step should be to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Count the words first" },
            { id: "b", text: "Underline the content points and plan" },
            { id: "c", text: "Check your spelling" },
            { id: "d", text: "Write the introduction immediately" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Directed writing", statement: "Identify requirements before writing." }], steps: [{ reasoning: "Underline content points, then plan the structure.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Underline content points and plan" },
        },
        {
          id: "oles-u7-ss-q6", difficulty: "core", totalMarks: 2,
          stem: "Why is skimming the text before answering reading questions useful?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Skimming", statement: "Gist first builds the map." }], steps: [
            { reasoning: "Skimming gives an overview of topic, structure and key ideas.", marks: 1, markCode: "AO2" },
            { reasoning: "This makes scanning for specific answers faster and more accurate.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "It builds a mental map so answers are easier and faster to find." },
        },
        {
          id: "oles-u7-ss-q7", difficulty: "foundation", totalMarks: 2,
          stem: "What is a 'second pass' in the reading section?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Second pass", statement: "Return for harder questions." }], steps: [
            { reasoning: "After answering literal questions, return to inference and harder items.", marks: 1, markCode: "AO2" },
            { reasoning: "It uses remaining time on questions needing more thought.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A return to harder questions — usually inference — after the first pass." },
        },
        {
          id: "oles-u7-ss-q8", difficulty: "core", totalMarks: 3,
          stem: "Explain the plan-draft-check routine for a summary task.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Summary routine", statement: "Select → draft → count → verify." }], steps: [
            { reasoning: "Plan: identify the key points and note the word limit.", marks: 1, markCode: "AO2" },
            { reasoning: "Draft the summary covering those points in your own words.", marks: 1, markCode: "AO2" },
            { reasoning: "Check: count words, confirm all key points are covered, and fix errors.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Select key points, draft, count words, then verify coverage and errors." },
        },
        {
          id: "oles-u7-ss-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Why is intelligent guessing better than leaving questions blank at the end of the exam?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Never blank", statement: "Partial marks beat zero." }], steps: [
            { reasoning: "A blank answer earns nothing for certain.", marks: 1, markCode: "AO2" },
            { reasoning: "A best-effort answer may earn partial or full marks.", marks: 1, markCode: "AO2" },
            { reasoning: "For writing tasks, a quick plan plus attempt beats leaving it empty.", marks: 1, markCode: "AO2" },
            { reasoning: "Use remaining time to attempt every unanswered question.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Any attempt can earn partial marks; a blank earns none." },
        },
        {
          id: "oles-u7-ss-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Before writing a composition, you should spend about…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No time planning" },
            { id: "b", text: "Only 10 seconds planning" },
            { id: "c", text: "5 minutes planning" },
            { id: "d", text: "45 minutes planning" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Planning time", statement: "Brief plan prevents chaos." }], steps: [{ reasoning: "A short plan fixes structure, tense and ending before writing.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** 5 minutes planning" },
        },
        {
          id: "oles-u7-ss-q11", difficulty: "core", totalMarks: 2,
          stem: "What should you do in the final minutes if several questions remain unanswered?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Endgame", statement: "Attempt everything quickly." }], steps: [
            { reasoning: "Answer each remaining question with the best effort you can manage.", marks: 1, markCode: "AO2" },
            { reasoning: "For writing tasks, jot a quick plan first; for reading, give direct answers.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Attempt all remaining questions — partial marks beat blanks." },
        },
        {
          id: "oles-u7-ss-q12", difficulty: "core", totalMarks: 3,
          stem: "Describe how to handle inference questions in the reading section.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Inference handling", statement: "Clues first, then implied meaning." }], steps: [
            { reasoning: "Find the clues in the text that hint at the implied meaning.", marks: 1, markCode: "AO2" },
            { reasoning: "Combine the clues to decide what the writer suggests.", marks: 1, markCode: "AO2" },
            { reasoning: "Support your answer with evidence from the text.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Locate clues, infer the implied meaning, and cite evidence." },
        },
        {
          id: "oles-u7-ss-q13", difficulty: "challenge", totalMarks: 1,
          stem: "For a narrative composition, the ending should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Repeat the introduction" },
            { id: "b", text: "Introduce a brand-new topic" },
            { id: "c", text: "Stop suddenly mid-sentence" },
            { id: "d", text: "Resolve the story or answer the question" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Composition ending", statement: "Endings must resolve." }], steps: [{ reasoning: "Narratives need resolution; arguments need a firm conclusion.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Resolve the story or answer the question" },
        },
        {
          id: "oles-u7-ss-q14", difficulty: "foundation", totalMarks: 2,
          stem: "What is a 'review pass' and when should you do it?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Review pass", statement: "Final check of all answers." }], steps: [
            { reasoning: "It is a final read-through of your answers to catch errors and gaps.", marks: 1, markCode: "AO2" },
            { reasoning: "Do it in the last minutes after answering all questions.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A final check at the end to catch errors, gaps and word-limit issues." },
        },
        {
          id: "oles-u7-ss-q15", difficulty: "core", totalMarks: 3,
          stem: "Explain why a two-pass reading approach saves marks.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Two-pass benefit", statement: "Easy marks first." }], steps: [
            { reasoning: "Literal questions are quick wins — answering them first secures marks.", marks: 1, markCode: "AO2" },
            { reasoning: "Inference questions need more thought; doing them second avoids rushing.", marks: 1, markCode: "AO2" },
            { reasoning: "You are less likely to leave easy marks on the table when time runs out.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Secure easy marks first, then spend remaining time on harder questions." },
        },
        {
          id: "oles-u7-ss-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Compare the strategies for summary, directed writing and composition tasks.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Writing strategies", statement: "Each task type has its own routine." }], steps: [
            { reasoning: "Summary: select key points fast, draft, count words, check coverage.", marks: 1, markCode: "AO2" },
            { reasoning: "Directed writing: underline content points, plan, write to the checklist.", marks: 1, markCode: "AO2" },
            { reasoning: "Composition: plan the arc, control paragraphs, keep tense consistent.", marks: 1, markCode: "AO2" },
            { reasoning: "All three share the plan-draft-check backbone.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "All use plan-draft-check; each adds task-specific priorities." },
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
