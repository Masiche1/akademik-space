import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "oles-u2-lesson-2-2",
  code: "2-2",
  title: "Selecting and organising points",
  goal: "I CAN choose the main points of a text and group them logically.",
  standards: ["1120 Writing: summary selection"],
  vocabulary: [
    { term: "Key point", definition: "A main idea that must appear in the summary." },
    { term: "Hierarchy", definition: "The order of importance — most important points first." },
    { term: "Group", definition: "Points that belong to the same topic or idea." },
    { term: "Omit", definition: "To leave out — examples and repetition are usually omitted." },
    { term: "Sequence", definition: "The order in which points appear in your summary." },
  ],
  concepts: [
    {
      id: "oles-u2-select",
      title: "Selecting key points",
      skill: "Decide which ideas are main points and which are details to drop.",
      lesson: {
        sections: [
          { heading: "What to keep", body: "Keep the ideas that appear more than once, the topic sentences of paragraphs, and anything the writer emphasises. Drop examples, statistics used only for illustration, repeated points and personal comments by the writer." },
          { heading: "The coverage test", body: "A good selection covers the whole text — if the text has three main ideas, the summary must have all three. Missing a whole section loses more marks than including one extra detail." },
        ],
        keyFormulas: [
          { name: "Selection", statement: "Keep repeated/emphasised ideas; drop examples, stats and repetition." },
        ],
        workedExample: {
          problem: "A text gives three reasons for learning English: work, travel, study. Two are explained with long examples. Which points go in the summary?",
          solution: "The three reasons — work, travel, study — are the key points. The examples explaining each reason are details to omit.",
        },
      },
      questions: [
        {
          id: "oles-u2-sel-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which should usually be omitted from a summary?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Examples and repeated points" },
            { id: "b", text: "The main ideas" },
            { id: "c", text: "The topic sentences" },
            { id: "d", text: "The writer's purpose" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Omission", statement: "Examples and repetition are details." }], steps: [{ reasoning: "Examples and repeats support but are not main points.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Examples and repeated points" },
        },
        {
          id: "oles-u2-sel-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the 'coverage test' for a summary?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Coverage", statement: "Summary must cover the whole text." }], steps: [
            { reasoning: "Every main section of the text must be represented.", marks: 1, markCode: "AO2" },
            { reasoning: "Missing a whole section is a serious error.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The summary must represent every main idea in the text." },
        },
        {
          id: "oles-u2-sel-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to decide whether a point is a key point or a detail.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Key vs detail", statement: "Key points are general; details are specific support." }], steps: [
            { reasoning: "Ask if the point covers a whole paragraph or just one sentence.", marks: 1, markCode: "AO2" },
            { reasoning: "Check if it is repeated or emphasised elsewhere.", marks: 1, markCode: "AO2" },
            { reasoning: "Details are examples, statistics and explanations of a key point.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear decision method.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Whole-paragraph coverage and repetition signal key points; specifics are details." },
        },
        {
          id: "oles-u2-sel-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Selecting points review.",
          parts: [
            { label: "a", prompt: "What is a key point?", marks: 2 },
            { label: "b", prompt: "Name two things to omit.", marks: 2 },
            { label: "c", prompt: "What signals a key point?", marks: 2 },
            { label: "d", prompt: "Why is coverage important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Selection", statement: "Keep general repeated ideas; cover the whole text." }], steps: [
            { part: "a", reasoning: "A main idea that must appear in the summary.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two: examples, statistics, repetition, minor details.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Two valid omissions.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Repetition, emphasis, or being a paragraph topic sentence.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct signals.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "A summary missing a whole section is incomplete and loses many marks.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains the consequence.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Links coverage to marking.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) main idea (b) two omissions (c) repetition/emphasis (d) incomplete = lost marks",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid omissions.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Fewer than two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct signals.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Consequence explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial explanation.", part: "d" },
            ],
          },
        },
      ],
    },
    {
      id: "oles-u2-organise",
      title: "Organising summary points",
      skill: "Group and sequence selected points for a coherent summary.",
      lesson: {
        sections: [
          { heading: "Grouping ideas", body: "Points on the same topic belong together. If a text gives causes and effects, keep causes with their effects. If it lists problems then solutions, keep each problem with its solution." },
          { heading: "Ordering", body: "Usually follow the text's own order — it is the safest. If grouping, put the most important group first. Within a group, keep a logical order: general statement before specific support." },
        ],
        keyFormulas: [
          { name: "Organisation", statement: "Group related points; follow text order unless grouping helps." },
        ],
        workedExample: {
          problem: "Selected points: (1) city has too many cars, (2) buses are old, (3) cycling lanes help, (4) car pollution harms health. How to group?",
          solution: "Problem group: too many cars + pollution harms health. Solution group: new buses + cycling lanes. Order: problem first, then solutions.",
        },
      },
      questions: [
        {
          id: "oles-u2-org-q1", difficulty: "foundation", totalMarks: 1,
          stem: "When organising a summary, points on the same topic should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Grouped together" },
            { id: "b", text: "Spread randomly" },
            { id: "c", text: "Put in alphabetical order" },
            { id: "d", text: "Repeated twice" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Grouping", statement: "Related points belong together." }], steps: [{ reasoning: "Grouping keeps ideas coherent.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Grouped together" },
        },
        {
          id: "oles-u2-org-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the safest order for summary points?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Order", statement: "Follow the text's order." }], steps: [
            { reasoning: "Following the text's own order is safest and coherent.", marks: 1, markCode: "AO2" },
            { reasoning: "Alternative: most important group first.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The text's own order, or most important points first." },
        },
        {
          id: "oles-u2-org-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a jumbled summary loses marks even if all points are correct.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Coherence", statement: "Order affects readability and marking." }], steps: [
            { reasoning: "A summary must read as one coherent piece of writing.", marks: 1, markCode: "AO2" },
            { reasoning: "Random order confuses the examiner and breaks logical links.", marks: 1, markCode: "AO2" },
            { reasoning: "Grouping related ideas shows you understood the text's structure.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Coherence and logical grouping are marked, not just point coverage." },
        },
        {
          id: "oles-u2-org-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Organising points review.",
          parts: [
            { label: "a", prompt: "Why group related points?", marks: 2 },
            { label: "b", prompt: "Name two safe ordering methods.", marks: 2 },
            { label: "c", prompt: "What should come first in a problem-solution text?", marks: 2 },
            { label: "d", prompt: "How does order affect marks?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Organisation", statement: "Group related ideas; order logically." }], steps: [
            { part: "a", reasoning: "Grouping keeps related ideas together for coherence.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Text order, or most important group first.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Two valid methods.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "The problems first, then the solutions.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct order.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Illogical order reduces coherence marks even if points are right.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains marking impact.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Connects order to quality.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) coherence (b) two orders (c) problems first (d) order affects coherence marks",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid methods.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Fewer than two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct order.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong order.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Marking impact explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial explanation.", part: "d" },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u2-2-2-notes", title: "Selecting and organising — notes", summary: "Choosing key points and ordering them coherently.",
      sections: [
        { heading: "Selection", body: "Keep repeated and emphasised ideas; drop examples, statistics and repetition. Check every main section is covered." },
        { heading: "Organisation", body: "Group related points; follow the text's order or put the most important group first." },
      ] },
  ],
};
