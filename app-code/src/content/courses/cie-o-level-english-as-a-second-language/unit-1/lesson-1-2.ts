import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "oles-u1-lesson-1-2",
  code: "1-2",
  title: "Vocabulary in context and text structure",
  goal: "I CAN use context to understand new words and recognise how a text is organised.",
  standards: ["1120 Reading: vocabulary and structure"],
  vocabulary: [
    { term: "Context clues", definition: "Words around an unknown word that reveal its meaning." },
    { term: "Synonym", definition: "A word with the same or similar meaning." },
    { term: "Antonym", definition: "A word with the opposite meaning." },
    { term: "Paragraph", definition: "A group of sentences developing one idea." },
    { term: "Connective", definition: "A linking word such as 'however', 'therefore', 'for example'." },
  ],
  concepts: [
    {
      id: "oles-u1-context",
      title: "Context clues",
      skill: "Deduce the meaning of unfamiliar words from surrounding text.",
      lesson: {
        sections: [
          { heading: "Types of clues", body: "Unknown words are usually explained by the sentence around them. Look for: a definition after a comma or dash, an example introduced by 'such as' or 'for example', a synonym or antonym nearby, or the general situation of the text." },
          { heading: "What not to do", body: "Do not panic and do not translate word-by-word from your first language. The whole sentence usually carries the meaning. If a word appears several times, later sentences often clarify it." },
        ],
        keyFormulas: [
          { name: "Context strategy", statement: "Read the whole sentence → find clues → test the guessed meaning in the sentence." },
        ],
        workedExample: {
          problem: "'The arid desert received almost no rain for years.' What does 'arid' mean?",
          solution: "The clue 'no rain' tells us the desert is very dry. Arid means extremely dry.",
        },
      },
      questions: [
        {
          id: "oles-u1-ctx-q1", difficulty: "foundation", totalMarks: 1,
          stem: "What are context clues?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Surrounding words that help you understand an unknown word" },
            { id: "b", text: "The title of the text" },
            { id: "c", text: "The first paragraph only" },
            { id: "d", text: "Words in your own language" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Context clues", statement: "Nearby words revealing meaning." }], steps: [{ reasoning: "Context = the words around the unknown word.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Surrounding words that reveal meaning" },
        },
        {
          id: "oles-u1-ctx-q2", difficulty: "core", totalMarks: 2,
          stem: "In 'The drought — a long period without rain — ruined the crops', how is 'drought' explained?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Definition clue", statement: "A phrase after a dash defines the word." }], steps: [
            { reasoning: "The dash introduces the definition: a long period without rain.", marks: 1, markCode: "AO2" },
            { reasoning: "So drought means a long period without rain.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Drought = a long period without rain, given by the appositive definition." },
        },
        {
          id: "oles-u1-ctx-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain three types of context clue with an example of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Clue types", statement: "Definition, example, synonym/antonym, situation." }], steps: [
            { reasoning: "Definition: 'Photosynthesis, the process by which plants make food, needs light.'", marks: 1, markCode: "AO2" },
            { reasoning: "Example: 'Some birds, such as eagles and hawks, are predators.'", marks: 1, markCode: "AO2" },
            { reasoning: "Synonym/antonym: 'Unlike her timid brother, Mina was bold.'", marks: 1, markCode: "AO2" },
            { reasoning: "All three clue types named with correct examples.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Definition, example and synonym/antonym clues, each illustrated." },
        },
        {
          id: "oles-u1-ctx-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Context clue strategies.",
          parts: [
            { label: "a", prompt: "What are context clues?", marks: 2 },
            { label: "b", prompt: "Name three clue types.", marks: 3 },
            { label: "c", prompt: "How do you test a guessed meaning?", marks: 2 },
            { label: "d", prompt: "Why is word-by-word translation risky?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Context clues", statement: "Nearby words reveal meaning; test guesses in the sentence." }], steps: [
            { part: "a", reasoning: "Context clues are the words around an unknown word that reveal its meaning.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any three: definition, example, synonym, antonym, situation, later clarification.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Three valid types.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "All named correctly.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Put the guessed meaning back into the sentence — it must make sense.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct test method.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Word-by-word translation ignores sentence meaning and English word order.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains the risk.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) surrounding clues (b) three types (c) test in sentence (d) ignores sentence meaning",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three valid types.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Two types only.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct test.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Risk explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ],
          },
        },
      ],
    },
    {
      id: "oles-u1-structure",
      title: "Recognising text structure",
      skill: "Identify how a passage is organised to locate information fast.",
      lesson: {
        sections: [
          { heading: "Common structures", body: "Texts are usually organised in one of these ways: chronological order (time), cause and effect, compare and contrast, problem and solution, or general to specific. The structure tells you where to look for answers." },
          { heading: "Signpost words", body: "Connectives signal structure: 'first, then, finally' (sequence); 'because, so, therefore' (cause/effect); 'however, on the other hand' (contrast); 'for example, such as' (illustration); 'in conclusion' (summary)." },
        ],
        keyFormulas: [
          { name: "Signposts", statement: "Sequence: first/then/finally. Cause: because/so. Contrast: however/on the other hand." },
        ],
        workedExample: {
          problem: "A text begins 'Many cities face traffic problems. One cause is the growing number of cars.' What structure is developing?",
          solution: "Problem and solution / cause and effect: the text names a problem (traffic) and begins explaining causes.",
        },
      },
      questions: [
        {
          id: "oles-u1-str-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The word 'however' usually signals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A contrast" },
            { id: "b", text: "A cause" },
            { id: "c", text: "An example" },
            { id: "d", text: "A conclusion" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Signpost words", statement: "'However' = contrast." }], steps: [{ reasoning: "However introduces an opposite idea.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** A contrast" },
        },
        {
          id: "oles-u1-str-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two common ways a text can be organised.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Text structures", statement: "Chronological, cause/effect, compare/contrast, problem/solution." }], steps: [
            { reasoning: "Any two valid structures.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct and distinct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Any two: chronological, cause/effect, compare/contrast, problem/solution." },
        },
        {
          id: "oles-u1-str-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how knowing the structure of a text helps you answer questions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Structure use", statement: "Structure predicts where information sits." }], steps: [
            { reasoning: "Structure shows the order ideas appear — you can predict where an answer will be.", marks: 1, markCode: "AO2" },
            { reasoning: "Signpost words tell you when a new point or contrast begins.", marks: 1, markCode: "AO2" },
            { reasoning: "This speeds up scanning and reduces wrong-paragraph answers.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the benefit.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Structure predicts location of answers and signposts mark idea changes." },
        },
        {
          id: "oles-u1-str-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Text organisation review.",
          parts: [
            { label: "a", prompt: "Name three text structures.", marks: 3 },
            { label: "b", prompt: "What does 'first, then, finally' signal?", marks: 2 },
            { label: "c", prompt: "What does 'because' signal?", marks: 2 },
            { label: "d", prompt: "How do signposts help readers?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Structure and signposts", statement: "Connectives reveal organisation and guide the reader." }], steps: [
            { part: "a", reasoning: "Any three: chronological, cause/effect, compare/contrast, problem/solution, general-to-specific.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Three valid structures.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "All correct.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Sequence or chronological order.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct signal.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Cause and effect / reason.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct signal.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Signposts mark idea changes so readers can follow and locate information.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains reader benefit.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) three structures (b) sequence (c) cause (d) marks idea changes",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Three valid structures.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Two only.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong signal.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong signal.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Benefit explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u1-1-2-notes", title: "Vocabulary and text structure — notes", summary: "Context clues and signpost words for faster reading.",
      sections: [
        { heading: "Context clues", body: "Use definitions, examples, synonyms/antonyms and the situation to decode unknown words. Test any guess by reading it back into the sentence." },
        { heading: "Signposts", body: "however = contrast; because/so = cause; first/then/finally = sequence; for example = illustration; in conclusion = summary." },
      ] },
  ],
};
