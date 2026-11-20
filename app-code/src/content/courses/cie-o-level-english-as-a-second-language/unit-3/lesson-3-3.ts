import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "oles-u3-lesson-3-3",
  code: "3-3",
  title: "Answering directed writing tasks",
  goal: "I CAN plan and complete a directed writing task under exam conditions.",
  standards: ["1120 Writing: task fulfilment"],
  vocabulary: [
    { term: "Directed writing", definition: "A writing task with a set scenario, reader and purpose." },
    { term: "Task fulfilment", definition: "Covering every point the question requires." },
    { term: "Content points", definition: "The specific ideas the examiner expects you to include." },
    { term: "Checklist", definition: "A list of required points used to verify your answer." },
    { term: "Time allocation", definition: "Deciding how many minutes to spend planning, writing and checking." },
  ],
  concepts: [
    {
      id: "oles-u3-fulfil",
      title: "Covering all content points",
      skill: "Make sure every required point appears in the answer.",
      lesson: {
        sections: [
          { heading: "Underline the requirements", body: "Directed writing questions list what you must include — a situation, a reader, a purpose, and often bullet points of content. Underline every bullet before writing. Each bullet is a mark." },
          { heading: "The checklist habit", body: "After drafting, check each bullet against your answer. Missing one content point is an easy mark lost. If the question gives a word count, stay close to it — too short suggests missing content." },
        ],
        keyFormulas: [
          { name: "Task fulfilment", statement: "Every bullet point in the question must appear in your answer." },
        ],
        workedExample: {
          problem: "Question: 'Write a letter to your landlord about a broken window. Include: what happened, when, and what you want done.'",
          solution: "Checklist: (1) broken window described, (2) when it happened, (3) request for repair. All three must appear.",
        },
      },
      questions: [
        {
          id: "oles-u3-ff-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Task fulfilment means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Covering every required point in the question" },
            { id: "b", text: "Writing the longest answer possible" },
            { id: "c", text: "Using impressive vocabulary" },
            { id: "d", text: "Ignoring the bullet points" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Task fulfilment", statement: "All required points covered." }], steps: [{ reasoning: "Every required content point must appear.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Covering every required point" },
        },
        {
          id: "oles-u3-ff-q2", difficulty: "core", totalMarks: 2,
          stem: "What should you do with the bullet points in a directed writing question?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Bullets", statement: "Each bullet is a required content point." }], steps: [
            { reasoning: "Underline each bullet — each one is a mark.", marks: 1, markCode: "AO2" },
            { reasoning: "Verify each appears in the finished answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Underline them before writing and check each is covered after." },
        },
        {
          id: "oles-u3-ff-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why writing beautiful language cannot compensate for missing content points.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Content vs style", statement: "Marks come first from covering requirements." }], steps: [
            { reasoning: "Task fulfilment is marked separately from language quality.", marks: 1, markCode: "AO2" },
            { reasoning: "A missing bullet is a lost mark regardless of style.", marks: 1, markCode: "AO2" },
            { reasoning: "Style marks are earned on top of complete content.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Content points are marked independently — style cannot replace them." },
        },
        {
          id: "oles-u3-ff-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Task fulfilment review.",
          parts: [
            { label: "a", prompt: "What is task fulfilment?", marks: 2 },
            { label: "b", prompt: "What are content points?", marks: 2 },
            { label: "c", prompt: "How do you use a checklist?", marks: 2 },
            { label: "d", prompt: "What happens if a bullet is missed?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Task fulfilment", statement: "Cover every required point." }], steps: [
            { part: "a", reasoning: "Covering every point the question requires.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "The specific ideas the examiner expects in the answer.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "List required points, check each against the draft, fix gaps.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct method.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "A missed point loses its mark — an easy avoidable loss.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains consequence.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Advises prevention.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) all points covered (b) required ideas (c) check draft (d) lost mark",
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
      id: "oles-u3-planning",
      title: "Planning under time pressure",
      skill: "Plan a directed writing answer quickly before writing.",
      lesson: {
        sections: [
          { heading: "The five-minute plan", body: "Spend about 5 minutes planning: identify reader, purpose, register, and list the content points as a numbered plan. Decide paragraph structure — one paragraph per main point usually works. This prevents rambling and missing points." },
          { heading: "Paragraph plan", body: "For a letter: opening paragraph states purpose, middle paragraphs cover content points, final paragraph gives conclusion or request. For a report: one section per topic. Never write without a plan in exams — it costs more time than it saves." },
        ],
        keyFormulas: [
          { name: "Plan first", statement: "Reader + purpose + register + numbered content points + paragraph order." },
        ],
        workedExample: {
          problem: "60-minute exam, one 45-minute writing task. How to split time?",
          solution: "5 min plan, 30 min write, 10 min check content points, register and word count.",
        },
      },
      questions: [
        {
          id: "oles-u3-pl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Before writing a directed answer, you should first…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plan the structure and content points" },
            { id: "b", text: "Start writing immediately" },
            { id: "c", text: "Look up words in a dictionary" },
            { id: "d", text: "Write the conclusion first" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Planning", statement: "Plan before writing." }], steps: [{ reasoning: "A plan prevents missing points and saves time.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Plan structure and content points" },
        },
        {
          id: "oles-u3-pl-q2", difficulty: "core", totalMarks: 2,
          stem: "What four things should a quick plan include?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Plan contents", statement: "Reader, purpose, register, content points." }], steps: [
            { reasoning: "Reader, purpose, register and the content points as a numbered list.", marks: 1, markCode: "AO2" },
            { reasoning: "All four included.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Reader; purpose; register; numbered content points." },
        },
        {
          id: "oles-u3-pl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why planning saves time in an exam.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Planning benefit", statement: "Prevents rewrites and gaps." }], steps: [
            { reasoning: "A plan stops you repeating or going off-topic.", marks: 1, markCode: "AO2" },
            { reasoning: "It ensures every content point has a place.", marks: 1, markCode: "AO2" },
            { reasoning: "You write faster when the structure is already decided.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Planning prevents gaps and rewrites, so writing is faster and complete." },
        },
        {
          id: "oles-u3-pl-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Planning technique review.",
          parts: [
            { label: "a", prompt: "Why plan first?", marks: 2 },
            { label: "b", prompt: "Name three plan elements.", marks: 2 },
            { label: "c", prompt: "How should paragraphs be organised?", marks: 2 },
            { label: "d", prompt: "How to split exam time?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Planning", statement: "Plan structure before writing; budget time." }], steps: [
            { part: "a", reasoning: "Planning ensures complete coverage and faster writing.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any three: reader, purpose, register, content points, paragraph order.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Three valid elements.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "One paragraph per main point or section.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct organisation.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "About 5 min plan, most time writing, final minutes checking.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Sensible split.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Includes checking time.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) complete+fast (b) three elements (c) one point per paragraph (d) plan/write/check",
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
    { id: "oles-u3-3-3-notes", title: "Directed writing tasks — notes", summary: "Cover every point and plan before you write.",
      sections: [
        { heading: "Content points", body: "Underline every bullet — each is a mark. Check your draft against them before finishing." },
        { heading: "Planning", body: "5 minutes: reader, purpose, register, numbered points, paragraph order. Then write and check." },
      ] },
  ],
};
