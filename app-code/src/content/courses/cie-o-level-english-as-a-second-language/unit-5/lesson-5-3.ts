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
            { id: "a", text: "Words that rhyme" },
            { id: "b", text: "Words sharing the same root" },
            { id: "c", text: "Words in alphabetical order" },
            { id: "d", text: "Words with opposite meanings" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Word family", statement: "Same root, different forms." }], steps: [{ reasoning: "Families share a root like decide/decision.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Words sharing a root" },
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
        {
          id: "oles-u5-wf-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which word belongs to the 'decide' family?",
          response: { type: "mcq", choices: [
            { id: "a", text: "decline" },
            { id: "b", text: "decision" },
            { id: "c", text: "define" },
            { id: "d", text: "decoration" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Word family", statement: "Same root, different forms." }], steps: [{ reasoning: "Decision shares the root 'decide'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** decision" },
        },
        {
          id: "oles-u5-wf-q6", difficulty: "core", totalMarks: 2,
          stem: "The noun form of 'happy' is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "happiest" },
            { id: "b", text: "happily" },
            { id: "c", text: "happiness" },
            { id: "d", text: "unhappy" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Word family", statement: "Different forms for different positions." }], steps: [
            { reasoning: "'Happiness' is the noun form of 'happy'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(c)** happiness" },
        },
        {
          id: "oles-u5-wf-q7", difficulty: "foundation", totalMarks: 1,
          stem: "How many words are in the 'decide' family: decide, decision, decisive, decidedly?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Word family", statement: "Count the family members." }], steps: [
            { reasoning: "decide, decision, decisive, decidedly → 4.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u5-wf-q8", difficulty: "core", totalMarks: 2,
          stem: "Which is the best synonym for 'big' in the sentence 'a big problem'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "significant" },
            { id: "b", text: "small" },
            { id: "c", text: "enormous" },
            { id: "d", text: "tiny" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Synonym choice", statement: "Pick the word that fits the context." }], steps: [
            { reasoning: "'Significant' fits a problem; 'enormous' is too strong for an abstract noun here.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** significant" },
        },
        {
          id: "oles-u5-wf-q9", difficulty: "core", totalMarks: 2,
          stem: "Give the word family of 'sad' — noun, adjective and adverb forms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Word family", statement: "Same root, different forms." }], steps: [
            { reasoning: "Noun: sadness; adjective: sad; adverb: sadly.", marks: 1, markCode: "AO1" },
            { reasoning: "All three forms correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "sadness (noun), sad (adjective), sadly (adverb)." },
        },
        {
          id: "oles-u5-wf-q10", difficulty: "core", totalMarks: 1,
          stem: "How many synonyms for 'good' are listed in the lesson: excellent, effective, valuable?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Synonyms", statement: "Count the listed alternatives." }], steps: [
            { reasoning: "excellent, effective, valuable → 3.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u5-wf-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Which sentence shows the best word choice?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The food was okay." },
            { id: "b", text: "The food was delicious." },
            { id: "c", text: "The food was goodish." },
            { id: "d", text: "The food was good." },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Precise word choice", statement: "Synonyms add precision and range." }], steps: [
            { reasoning: "'Delicious' is more precise and positive than 'good'.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** delicious" },
        },
        {
          id: "oles-u5-wf-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A paragraph uses 'good' 5 times. A student replaces 3 of them with synonyms. How many 'good' remain?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Word variety", statement: "Replace overused words with synonyms." }], steps: [
            { reasoning: "5 − 3 = 2 remaining.", marks: 1, markCode: "AO1" },
            { reasoning: "Calculation correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u5-wf-q13", difficulty: "foundation", totalMarks: 1,
          stem: "A synonym is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A word with a similar meaning" },
            { id: "b", text: "A word in the same family" },
            { id: "c", text: "A word with the opposite meaning" },
            { id: "d", text: "A word that rhymes" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Synonym", statement: "Similar meaning." }], steps: [{ reasoning: "Synonyms share similar meaning, not opposite.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** similar meaning" },
        },
        {
          id: "oles-u5-wf-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how word families help you use correct grammar in different sentence positions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Word families", statement: "One root gives noun, verb, adjective, adverb forms." }], steps: [
            { reasoning: "Each family member fits a different position — noun, verb, adjective, adverb.", marks: 1, markCode: "AO2" },
            { reasoning: "Example: 'decide' (verb), 'decision' (noun), 'decisive' (adjective).", marks: 1, markCode: "AO2" },
            { reasoning: "This lets you express the same idea grammatically in any slot.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Families give forms for every sentence position — e.g. decide/decision/decisive." },
        },
        {
          id: "oles-u5-wf-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many overused words does the lesson list: good, bad, nice, big?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Overused words", statement: "Count the listed examples." }], steps: [
            { reasoning: "good, bad, nice, big → 4.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u5-wf-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which pair of words suits formal writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "kids and babies" },
            { id: "b", text: "babies and children" },
            { id: "c", text: "children and offspring" },
            { id: "d", text: "kids and offspring" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Register", statement: "Match formality to context." }], steps: [
            { reasoning: "'Children' and 'offspring' are neutral/formal; 'kids' and 'babies' are informal.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(c)** children and offspring" },
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
            { id: "a", text: "Words that rhyme" },
            { id: "b", text: "Words that naturally go together" },
            { id: "c", text: "Words in alphabetical order" },
            { id: "d", text: "Words with the same meaning" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Collocation", statement: "Natural word partnerships." }], steps: [{ reasoning: "Collocations are fixed pairings like 'make a decision'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Words that naturally go together" },
        },
        {
          id: "oles-u5-co-q2", difficulty: "core", totalMarks: 2,
          stem: "Which is correct: 'make a mistake' or 'do a mistake'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "take a mistake" },
            { id: "b", text: "make a mistake" },
            { id: "c", text: "have a mistake" },
            { id: "d", text: "do a mistake" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Collocation", statement: "make a mistake." }], steps: [
            { reasoning: "'Make a mistake' is the fixed collocation.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** make a mistake" },
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
        {
          id: "oles-u5-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which is the correct collocation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "make a decision" },
            { id: "b", text: "have a decision" },
            { id: "c", text: "take a decision" },
            { id: "d", text: "do a decision" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Collocation", statement: "make a decision." }], steps: [{ reasoning: "'Make a decision' is the fixed collocation.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** make a decision" },
        },
        {
          id: "oles-u5-co-q6", difficulty: "core", totalMarks: 2,
          stem: "'___ rain' — 'heavy' or 'strong'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "large" },
            { id: "b", text: "heavy" },
            { id: "c", text: "strong" },
            { id: "d", text: "big" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Collocation", statement: "heavy rain." }], steps: [
            { reasoning: "Rain collocates with 'heavy', not 'strong'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** heavy" },
        },
        {
          id: "oles-u5-co-q7", difficulty: "foundation", totalMarks: 1,
          stem: "How many words are in the collocation 'make a big mistake'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Collocation", statement: "Count the words in the phrase." }], steps: [
            { reasoning: "make / a / big / mistake → 4.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u5-co-q8", difficulty: "core", totalMarks: 2,
          stem: "'___ homework' — 'do' or 'make'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "give" },
            { id: "b", text: "do" },
            { id: "c", text: "take" },
            { id: "d", text: "make" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Collocation", statement: "do homework." }], steps: [
            { reasoning: "'Do homework' is the fixed collocation.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** do" },
        },
        {
          id: "oles-u5-co-q9", difficulty: "core", totalMarks: 2,
          stem: "Correct the error: 'He made his homework last night.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Collocation", statement: "do homework." }], steps: [
            { reasoning: "'Make homework' is wrong → 'He did his homework last night.'", marks: 1, markCode: "AO2" },
            { reasoning: "Corrected version given.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "He did his homework last night." },
        },
        {
          id: "oles-u5-co-q10", difficulty: "core", totalMarks: 1,
          stem: "How many of these collocations are correct: 'make a decision', 'do homework', 'strong rain', 'heavy rain'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "convention", name: "Collocations", statement: "Check each fixed partnership." }], steps: [
            { reasoning: "Wrong: 'strong rain'. Correct: the other three → 3.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u5-co-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Why does 'do a decision' sound wrong even though 'do' + noun is often correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'Do' can never take a noun" },
            { id: "b", text: "It is actually correct English" },
            { id: "c", text: "'Decision' is too long a word" },
            { id: "d", text: "Collocations are fixed chunks learned as units" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Collocation effect", statement: "Fixed partnerships cannot be reasoned out." }], steps: [
            { reasoning: "Collocations are memorised chunks, not grammar rules — 'do' + noun fails here.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(d)** fixed chunks" },
        },
        {
          id: "oles-u5-co-q12", difficulty: "challenge", totalMarks: 2,
          stem: "How many collocations must be corrected in this list: 'do a mistake', 'make homework', 'strong rain'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "convention", name: "Collocations", statement: "make a mistake, do homework, heavy rain." }], steps: [
            { reasoning: "All three are wrong → 3 corrections.", marks: 1, markCode: "AO2" },
            { reasoning: "Count is correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u5-co-q13", difficulty: "foundation", totalMarks: 1,
          stem: "'___ coffee' — 'strong' or 'heavy'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "big" },
            { id: "b", text: "heavy" },
            { id: "c", text: "large" },
            { id: "d", text: "strong" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Collocation", statement: "strong coffee." }], steps: [{ reasoning: "Coffee collocates with 'strong'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** strong" },
        },
        {
          id: "oles-u5-co-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how register affects word choice, using 'kids', 'children' and 'offspring' as examples.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Register", statement: "Match formality to context." }], steps: [
            { reasoning: "Register = the formality level of a word.", marks: 1, markCode: "AO2" },
            { reasoning: "'Kids' is informal, 'children' is neutral, 'offspring' is formal.", marks: 1, markCode: "AO2" },
            { reasoning: "Choosing the right register keeps writing appropriate for the audience.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation with all three examples.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Kids = informal, children = neutral, offspring = formal — match register to context." },
        },
        {
          id: "oles-u5-co-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many example collocations does the lesson give: make a decision, do homework, heavy rain, strong coffee?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Collocations", statement: "Count the listed examples." }], steps: [
            { reasoning: "make a decision, do homework, heavy rain, strong coffee → 4.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u5-co-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which sentence shows the best word choice?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The film was excellent." },
            { id: "b", text: "The movie was good." },
            { id: "c", text: "The film was goodish." },
            { id: "d", text: "The film was okay." },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Precise word choice", statement: "Pick precise, appropriate synonyms." }], steps: [
            { reasoning: "'Excellent' is precise and positive; 'goodish' and 'okay' are weak.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** excellent" },
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
