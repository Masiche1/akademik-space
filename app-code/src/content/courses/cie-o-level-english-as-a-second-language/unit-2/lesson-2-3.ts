import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "oles-u2-lesson-2-3",
  code: "2-3",
  title: "Writing summaries under word limits",
  goal: "I CAN write a complete summary within a strict word limit.",
  standards: ["1120 Writing: summary under constraint"],
  vocabulary: [
    { term: "Word limit", definition: "Maximum words allowed, e.g. 'not more than 60 words'." },
    { term: "Draft", definition: "A first version you improve before final submission." },
    { term: "Count", definition: "To check the number of words used." },
    { term: "Concise", definition: "Brief but complete — no wasted words." },
    { term: "Priority", definition: "Deciding which points deserve the limited space." },
  ],
  concepts: [
    {
      id: "oles-u2-wordlimit",
      title: "Working to a word limit",
      skill: "Fit all key points into the allowed number of words.",
      lesson: {
        sections: [
          { heading: "Strategy", body: "Decide the word budget first: divide the limit by the number of key points. Write one sentence per main idea, then count. If over the limit, cut examples and linking words first — never cut a key point." },
          { heading: "Common mistakes", body: "Students waste words on introductions ('This text is about...'), quotations, and minor details. A summary needs no introduction — start directly with the first main point. Compound sentences save words." },
        ],
        keyFormulas: [
          { name: "Budget", statement: "limit ÷ key points = words per point; cut details first." },
        ],
        workedExample: {
          problem: "Limit: 30 words. Text has 3 main points. Draft uses 42 words. How to fix?",
          solution: "Remove the introduction (6 words) and one example (6 words) → 30 words with all three points kept.",
        },
      },
      questions: [
        {
          id: "oles-u2-wl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If your summary is over the word limit, you should first…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Remove details and examples, keep key points" },
            { id: "b", text: "Remove a whole key point" },
            { id: "c", text: "Add an introduction" },
            { id: "d", text: "Ignore the limit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Word limit", statement: "Cut details before key points." }], steps: [{ reasoning: "Key points have priority; details are expendable.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Remove details, keep key points" },
        },
        {
          id: "oles-u2-wl-q2", difficulty: "core", totalMarks: 2,
          stem: "Why should a summary have no introduction like 'This text is about...'?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "No padding", statement: "Introductions waste the word budget." }], steps: [
            { reasoning: "Every word counts toward the limit.", marks: 1, markCode: "AO2" },
            { reasoning: "Start directly with the first main point instead.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Introductions waste words; start with the first main point." },
        },
        {
          id: "oles-u2-wl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain a step-by-step method for writing a summary within a word limit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Limited summary method", statement: "Budget → draft → count → trim details." }], steps: [
            { reasoning: "List the key points and divide the word limit among them.", marks: 1, markCode: "AO2" },
            { reasoning: "Draft one sentence per point in your own words.", marks: 1, markCode: "AO2" },
            { reasoning: "Count the words and compare with the limit.", marks: 1, markCode: "AO2" },
            { reasoning: "If over, cut examples and linking words — never key points.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Budget words → draft → count → trim details only." },
        },
        {
          id: "oles-u2-wl-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Word-limit technique review.",
          parts: [
            { label: "a", prompt: "What should you do first with the limit?", marks: 2 },
            { label: "b", prompt: "What wastes words in summaries?", marks: 2 },
            { label: "c", prompt: "What do you cut first when over limit?", marks: 2 },
            { label: "d", prompt: "Why keep all key points?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Word limit", statement: "Budget first; cut details; keep every key point." }], steps: [
            { part: "a", reasoning: "Divide the limit by the number of key points to budget words.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct first step.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Introductions, quotations, examples, repeated linking words.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Two valid wastes.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Examples and minor details first — never key points.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct priority.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Missing a key point loses coverage marks — worse than a slightly long summary.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains trade-off.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Connects to marking.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) budget words (b) padding wastes (c) cut details (d) coverage beats brevity",
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
      id: "oles-u2-draft",
      title: "Drafting and checking summaries",
      skill: "Produce a final summary by drafting and verifying against the text.",
      lesson: {
        sections: [
          { heading: "Draft then check", body: "Write a rough version covering all key points, then check it against the text: is every point accurate? Is anything added that the text does not say? Is the word count right? Fix errors before finishing." },
          { heading: "Accuracy check", body: "The most dangerous summary error is adding an idea the text does not contain — a 'helpful' conclusion or opinion. Read your summary sentence by sentence and ask: where in the text does this come from?" },
        ],
        keyFormulas: [
          { name: "Check", statement: "Every sentence must trace back to the text — no invented ideas." },
        ],
        workedExample: {
          problem: "Draft ends: 'Therefore, cities should build more parks.' The text discussed pollution but never mentioned parks. Problem?",
          solution: "This adds a recommendation the text does not make — an opinion. Delete it; the summary must only report the text.",
        },
      },
      questions: [
        {
          id: "oles-u2-dr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The worst error in a summary is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Adding ideas the text does not contain" },
            { id: "b", text: "Using your own words" },
            { id: "c", text: "Being concise" },
            { id: "d", text: "Covering all points" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Accuracy", statement: "No invented content." }], steps: [{ reasoning: "Invented ideas break the summary contract.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Adding ideas the text does not contain" },
        },
        {
          id: "oles-u2-dr-q2", difficulty: "core", totalMarks: 2,
          stem: "What three things should you check in a draft summary?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Checking", statement: "Accuracy, coverage, word count." }], steps: [
            { reasoning: "Accuracy of each point, coverage of all key ideas, and word count.", marks: 1, markCode: "AO2" },
            { reasoning: "All three checks named.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Accuracy against the text; coverage of key points; word count." },
        },
        {
          id: "oles-u2-dr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to verify that a summary sentence comes from the text.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Verification", statement: "Trace each sentence to the source." }], steps: [
            { reasoning: "Read the summary sentence and ask where it comes from.", marks: 1, markCode: "AO2" },
            { reasoning: "Find the matching idea in the text — it must exist there.", marks: 1, markCode: "AO2" },
            { reasoning: "Check facts, numbers and names are unchanged.", marks: 1, markCode: "AO2" },
            { reasoning: "Delete anything untraceable.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Trace each sentence to a text idea; delete untraceable content." },
        },
        {
          id: "oles-u2-dr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Drafting and checking review.",
          parts: [
            { label: "a", prompt: "Why draft before finalising?", marks: 2 },
            { label: "b", prompt: "Name two things to check.", marks: 2 },
            { label: "c", prompt: "How do you spot an invented idea?", marks: 2 },
            { label: "d", prompt: "Why are opinions banned?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Draft and check", statement: "Draft, verify against text, remove opinions." }], steps: [
            { part: "a", reasoning: "A draft lets you fix errors and trim to the word limit before submitting.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two: accuracy, coverage, word count, no copied sentences.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Two valid checks.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "If no sentence in the text supports it, it is invented — delete it.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct test.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Summaries report the text objectively; opinions are not in the source.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains objectivity rule.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Links to marking.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) fix before submit (b) two checks (c) untraceable = invented (d) summaries are objective",
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
    { id: "oles-u2-2-3-notes", title: "Word limits and checking — notes", summary: "Fitting key points into the limit and verifying accuracy.",
      sections: [
        { heading: "Word limit", body: "Budget words per key point; draft one sentence each; count; cut details first. No introductions or padding." },
        { heading: "Checking", body: "Trace every sentence to the text. Delete anything invented, any opinion, any copied chunk." },
      ] },
  ],
};
