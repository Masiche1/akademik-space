import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "oles-u5-lesson-5-3",
  code: "5-3",
  title: "Building vocabulary",
  goal: "I CAN expand vocabulary using word families and varied word choice.",
  standards: ["1120 Vocabulary"],
  vocabulary: [
    { term: "Word family", definition: "Words sharing a root — decide, decision, decisive." },
    { term: "Synonym", definition: "A word with similar meaning." },
    { term: "Register", definition: "Formality level of a word — 'big' (informal) vs 'enormous' (formal)." },
    { term: "Collocation", definition: "Words that naturally go together — 'make a decision', 'do homework'." },
    { term: "Overused word", definition: "A word repeated too often, e.g. 'good', 'bad', 'nice'." },
  ],
  concepts: [
    {
      id: "oles-u5-wordfamily",
      title: "Word families and synonyms",
      skill: "Use word families and synonyms to vary vocabulary.",
      lesson: {
        sections: [
          { heading: "Word families", body: "Learn words in families: 'decide' → decision, decisive, decidedly. 'happy' → happiness, happily, unhappy. One root gives you several forms for different sentence positions — noun, verb, adjective, adverb." },
          { heading: "Replacing overused words", body: "'Good' → excellent, effective, valuable. 'Bad' → poor, harmful, terrible. 'Big' → large, enormous, significant. 'Nice' → pleasant, kind, enjoyable. In exams, varied vocabulary shows range — but never sacrifice accuracy for obscure words." },
        ],
        keyFormulas: [
          { name: "Variation", statement: "Word families give multiple forms; synonyms upgrade overused words." },
        ],
        workedExample: {
          problem: "Upgrade: 'The food was good and the view was nice.'",
          solution: "'The food was delicious and the view was breathtaking.' — synonyms add precision and range.",
        },
      },
      questions: [
        {
          id: "oles-u5-wf-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A word family is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Words sharing the same root" },
            { id: "b", text: "Words that rhyme" },
            { id: "c", text: "Words in alphabetical order" },
            { id: "d", text: "Words with opposite meanings" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Word family", statement: "Same root, different forms." }], steps: [{ reasoning: "Families share a root like decide/decision.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Words sharing a root" },
        },
        {
          id: "oles-u5-wf-q2", difficulty: "core", totalMarks: 2,
          stem: "Give two synonyms for 'important'.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Synonym", statement: "Similar meaning." }], steps: [
            { reasoning: "Any two: significant, essential, vital, crucial.", marks: 1, markCode: "AO2" },
            { reasoning: "Both correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. significant and essential." },
        },
        {
          id: "oles-u5-wf-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why repeating 'good' and 'nice' throughout an essay weakens it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Word variety", statement: "Repetition shows limited range." }], steps: [
            { reasoning: "Overused words make writing monotonous.", marks: 1, markCode: "AO2" },
            { reasoning: "They suggest limited vocabulary range to the examiner.", marks: 1, markCode: "AO2" },
            { reasoning: "Synonyms add precision — 'delicious' says more than 'good'.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Repetition is monotonous and shows limited range; synonyms add precision." },
        },
        {
          id: "oles-u5-wf-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Vocabulary building review.",
          parts: [
            { label: "a", prompt: "What is a word family?", marks: 2 },
            { label: "b", prompt: "Give the family of 'decide'.", marks: 2 },
            { label: "c", prompt: "Name two overused words to replace.", marks: 2 },
            { label: "d", prompt: "Why not use obscure words?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Vocabulary", statement: "Families + synonyms + accuracy over obscurity." }], steps: [
            { part: "a", reasoning: "Words sharing the same root in different forms.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "decide, decision, decisive, decidedly.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Multiple forms.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Any two: good, bad, nice, big.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Misused rare words hurt more than common accurate words help.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains risk.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Balanced advice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) same root (b) decide family (c) two words (d) accuracy > obscurity",
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
      id: "oles-u5-collocation",
      title: "Collocations and word choice",
      skill: "Use natural word combinations and precise word choice.",
      lesson: {
        sections: [
          { heading: "Collocations", body: "English has fixed word partnerships: 'make a decision' (not 'do a decision'), 'do homework' (not 'make homework'), 'heavy rain' (not 'strong rain'), 'strong coffee'. Wrong collocations sound foreign even when grammatically possible." },
          { heading: "Choosing precise words", body: "Between synonyms, pick the word that fits the context: 'small' for size, 'little' for amount/affection, 'tiny' for emphasis. Check whether the word's register fits — 'kids' is informal, 'children' is neutral, 'offspring' is formal." },
        ],
        keyFormulas: [
          { name: "Collocation", statement: "Fixed partners: make a decision, do homework, heavy rain." },
        ],
        workedExample: {
          problem: "Fix the collocation: 'She did a big mistake.'",
          solution: "'She made a big mistake' — 'make a mistake' is the fixed collocation.",
        },
      },
      questions: [
        {
          id: "oles-u5-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A collocation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Words that naturally go together" },
            { id: "b", text: "Words that rhyme" },
            { id: "c", text: "Words with the same meaning" },
            { id: "d", text: "Words in alphabetical order" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Collocation", statement: "Natural word partnerships." }], steps: [{ reasoning: "Collocations are fixed pairings like 'make a decision'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Words that naturally go together" },
        },
        {
          id: "oles-u5-co-q2", difficulty: "core", totalMarks: 2,
          stem: "Which is correct: 'make a mistake' or 'do a mistake'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "make a mistake" }, { id: "b", text: "do a mistake" }, { id: "c", text: "take a mistake" }, { id: "d", text: "have a mistake" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Collocation", statement: "make a mistake." }], steps: [
            { reasoning: "'Make a mistake' is the fixed collocation.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** make a mistake" },
        },
        {
          id: "oles-u5-co-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why wrong collocations make writing sound 'foreign'.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Collocation effect", statement: "Fixed partnerships signal natural English." }], steps: [
            { reasoning: "Native speakers learn collocations as chunks, not rules.", marks: 1, markCode: "AO2" },
            { reasoning: "Wrong pairings like 'do a decision' sound unnatural to them.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct collocations make writing sound fluent and natural.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Collocations are memorised chunks; wrong ones break naturalness." },
        },
        {
          id: "oles-u5-co-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Collocations and word choice review.",
          parts: [
            { label: "a", prompt: "Define collocation.", marks: 2 },
            { label: "b", prompt: "Give two examples.", marks: 2 },
            { label: "c", prompt: "Why learn collocations?", marks: 2 },
            { label: "d", prompt: "How to choose between synonyms?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Collocation", statement: "Fixed partnerships + context-appropriate choice." }], steps: [
            { part: "a", reasoning: "Words that naturally go together in English.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two: make a decision, do homework, heavy rain, strong coffee.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "They make English sound natural and fluent.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Match meaning, register and context — not just similarity.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Nuanced choice.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) natural pairs (b) two examples (c) naturalness (d) context+register",
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
    { id: "oles-u5-5-3-notes", title: "Vocabulary building — notes", summary: "Word families, synonyms and natural collocations.",
      sections: [
        { heading: "Word families", body: "decide → decision, decisive. Learn families for multiple sentence positions." },
        { heading: "Collocations", body: "make a decision, do homework, heavy rain — fixed partners that make English sound natural." },
      ] },
  ],
};
