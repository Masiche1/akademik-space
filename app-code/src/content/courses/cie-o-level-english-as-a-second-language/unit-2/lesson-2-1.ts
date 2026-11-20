import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "oles-u2-lesson-2-1",
  code: "2-1",
  title: "Rules of summary writing",
  goal: "I CAN state the rules that make a summary accurate and concise.",
  standards: ["1120 Writing: summary"],
  vocabulary: [
    { term: "Summary", definition: "A short version of a text containing only its main points." },
    { term: "Paraphrase", definition: "To express the same idea in different words." },
    { term: "Condense", definition: "To make something shorter while keeping the meaning." },
    { term: "Word limit", definition: "The maximum number of words allowed, e.g. 'in not more than 80 words'." },
    { term: "Objective", definition: "Based on facts, not your own opinions." },
  ],
  concepts: [
    {
      id: "oles-u2-rules",
      title: "What a summary must do",
      skill: "Apply the core rules: main points only, own words, no opinions.",
      lesson: {
        sections: [
          { heading: "The four rules", body: "A good summary: (1) covers only the main points of the whole text; (2) uses your own words — paraphrase, do not copy sentences; (3) adds no opinions, comments or examples of your own; (4) stays inside the word limit." },
          { heading: "Common losses", body: "Marks are lost for including minor details, copying chunks of the text, adding personal views ('I think'), or exceeding the word limit. A summary is not a book review — it reports what the text says." },
        ],
        keyFormulas: [
          { name: "Summary rules", statement: "Main points only + own words + no opinions + word limit." },
        ],
        workedExample: {
          problem: "Text: 'Recycling reduces landfill waste. It also saves energy because making products from recycled materials needs less processing.' Write the rule check for a summary.",
          solution: "Keep: recycling reduces landfill waste and saves energy. Drop: 'because' explanations and any extra facts. Paraphrase in your own words.",
        },
      },
      questions: [
        {
          id: "oles-u2-rl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A summary should contain…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the main points of the text" },
            { id: "b", text: "Every detail from the text" },
            { id: "c", text: "Your personal opinions" },
            { id: "d", text: "Copied sentences" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Summary", statement: "Main points only." }], steps: [{ reasoning: "Summaries condense to the essentials.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Only the main points of the text" },
        },
        {
          id: "oles-u2-rl-q2", difficulty: "core", totalMarks: 2,
          stem: "Why must a summary use your own words?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Paraphrase", statement: "Summaries paraphrase, not copy." }], steps: [
            { reasoning: "Copying sentences is plagiarism and shows no understanding.", marks: 1, markCode: "AO2" },
            { reasoning: "Paraphrasing proves you understood the ideas.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Own words show understanding and avoid copying the source." },
        },
        {
          id: "oles-u2-rl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "List four rules for writing a good summary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Summary rules", statement: "Main points, own words, no opinions, word limit." }], steps: [
            { reasoning: "Cover only the main points of the whole text.", marks: 1, markCode: "AO2" },
            { reasoning: "Use your own words — paraphrase.", marks: 1, markCode: "AO2" },
            { reasoning: "Add no opinions or personal comments.", marks: 1, markCode: "AO2" },
            { reasoning: "Stay within the word limit.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Main points only; own words; no opinions; within word limit." },
        },
        {
          id: "oles-u2-rl-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Summary rules review.",
          parts: [
            { label: "a", prompt: "Define a summary.", marks: 2 },
            { label: "b", prompt: "Name three rules.", marks: 3 },
            { label: "c", prompt: "Why paraphrase instead of copying?", marks: 2 },
            { label: "d", prompt: "What happens if you ignore the word limit?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Summary rules", statement: "Main points, paraphrase, objectivity, word limit." }], steps: [
            { part: "a", reasoning: "A summary is a short version containing only the main points.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any three: main points only, own words, no opinions, word limit.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Three valid rules.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "All correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Paraphrasing shows understanding; copying is plagiarism.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Marks are lost for exceeding the limit — accuracy of selection matters.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct consequence.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) short version of main points (b) three rules (c) shows understanding (d) marks lost",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three valid rules.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Two only.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct reason.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct consequence.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ],
          },
        },
      ],
    },
    {
      id: "oles-u2-paraphrase",
      title: "Paraphrasing techniques",
      skill: "Rewrite ideas in your own words without changing meaning.",
      lesson: {
        sections: [
          { heading: "How to paraphrase", body: "Change the verbs and nouns, reorder the sentence, and replace phrases with synonyms — but keep every fact identical. 'The government introduced a new law' becomes 'A new law was introduced by the government.' Same meaning, different words." },
          { heading: "Keep the meaning exact", body: "Paraphrasing is not translating loosely. Numbers, names, dates and technical terms must stay exactly the same. If a word has no good synonym, keep it." },
        ],
        keyFormulas: [
          { name: "Paraphrase", statement: "Same facts + different words + same order of ideas." },
        ],
        workedExample: {
          problem: "Paraphrase: 'Many students find mathematics difficult because it requires practice.'",
          solution: "'Mathematics is found difficult by many students, since it needs regular practice.' Same facts, new wording.",
        },
      },
      questions: [
        {
          id: "oles-u2-pp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "To paraphrase means to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Say the same idea in different words" },
            { id: "b", text: "Copy the sentence exactly" },
            { id: "c", text: "Change the meaning slightly" },
            { id: "d", text: "Translate into another language" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Paraphrase", statement: "Same idea, different words." }], steps: [{ reasoning: "Paraphrase keeps meaning, changes wording.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Same idea in different words" },
        },
        {
          id: "oles-u2-pp-q2", difficulty: "core", totalMarks: 2,
          stem: "What must stay the same when you paraphrase?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Paraphrase limits", statement: "Facts, numbers, names stay identical." }], steps: [
            { reasoning: "The meaning and all facts — numbers, names, dates — must not change.", marks: 1, markCode: "AO2" },
            { reasoning: "Only the wording changes.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Meaning, numbers, names and technical terms stay identical." },
        },
        {
          id: "oles-u2-pp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two techniques for paraphrasing a sentence.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Paraphrase methods", statement: "Synonym swap and sentence reordering." }], steps: [
            { reasoning: "Replace key words with synonyms where meaning allows.", marks: 1, markCode: "AO2" },
            { reasoning: "Change sentence structure — e.g. active to passive or reorder clauses.", marks: 1, markCode: "AO2" },
            { reasoning: "Combine or split sentences to fit the word limit.", marks: 1, markCode: "AO2" },
            { reasoning: "Both techniques explained.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Synonym replacement and restructuring the sentence." },
        },
        {
          id: "oles-u2-pp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Paraphrasing review.",
          parts: [
            { label: "a", prompt: "Define paraphrase.", marks: 2 },
            { label: "b", prompt: "Name two paraphrase techniques.", marks: 2 },
            { label: "c", prompt: "What must not change?", marks: 2 },
            { label: "d", prompt: "Why is paraphrasing better than copying?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Paraphrase", statement: "Same facts, different words." }], steps: [
            { part: "a", reasoning: "Paraphrase = express the same idea in different words.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two: synonym swap, reorder clauses, change voice, split/combine sentences.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Two valid techniques.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Facts, numbers, names, dates and technical terms must not change.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct limits.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Shows understanding; copying is plagiarism and earns fewer marks.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains the marking benefit.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Connects to summary writing.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) same idea new words (b) two techniques (c) facts unchanged (d) proves understanding",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid techniques.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Fewer than two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct limits.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Benefit explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial reason.", part: "d" },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u2-2-1-notes", title: "Summary rules — notes", summary: "The four rules and how to paraphrase safely.",
      sections: [
        { heading: "Four rules", body: "Main points only; own words; no opinions; inside the word limit. Anything else costs marks." },
        { heading: "Paraphrase", body: "Swap synonyms, reorder clauses, change voice — keep every fact, number and name identical." },
      ] },
  ],
};
