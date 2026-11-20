import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ciege-u1-lesson-1-2",
  code: "1-2",
  title: "Vocabulary in Context",
  goal: "I CAN deduce word meanings from context and explain them.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 2: vocabulary"],
  vocabulary: [
    { term: "Context", definition: "The words around a word that help reveal its meaning." },
    { term: "Connotation", definition: "The feeling or association a word carries." },
    { term: "Denotation", definition: "The dictionary meaning of a word." },
    { term: "Synonym", definition: "A word with a similar meaning." },
    { term: "Register", definition: "The level of formality in language." },
  ],
  concepts: [
    {
      id: "ciege-u1-s2-context",
      title: "Using context clues",
      skill: "Work out unfamiliar word meanings from surrounding text.",
      lesson: {
        sections: [
          {
            heading: "Context clues",
            body: "You rarely need a dictionary in the exam. Look at the words around the target word: definitions ('X, which is...'), contrasts ('unlike...'), examples, and cause-effect clues.",
          },
          {
            heading: "Explaining meanings",
            body: "When asked what a word means, paraphrase in your own words and show how context supports it. 'The arid landscape' — arid means dry, suggested by 'no rain for months'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'The doctor was meticulous, checking every detail twice.' What does meticulous mean?",
          solution: "Very careful and thorough — the second half of the sentence gives the clue.",
        },
      },
      questions: [
        {
          id: "ciege-u1-s2-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Desert Crossing",
            author: "Written for Akademik Space",
            text: "The travellers crossed the arid landscape, where no rain had fallen for months and the ground was cracked and dusty.",
          },
          stem: "What does 'arid' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Very cold" }, { id: "b", text: "Very dry" }, { id: "c", text: "Very green" }, { id: "d", text: "Very crowded" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context clues", statement: "Surrounding words reveal meaning." }],
            steps: [
              { reasoning: "'No rain', 'cracked and dusty' suggest dry.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Very dry",
          },
        },
        {
          id: "ciege-u1-s2-ct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Desert Crossing",
            author: "Written for Akademik Space",
            text: "The travellers crossed the arid landscape, where no rain had fallen for months and the ground was cracked and dusty.",
          },
          stem: "Explain how the context helps you understand 'arid'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context explanation", statement: "Point to the clue words." }],
            steps: [
              { reasoning: "The clue is 'no rain had fallen for months'.", marks: 1, markCode: "AO2" },
              { reasoning: "This shows the land is dry, so arid means dry.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "No rain → dry",
          },
        },
        {
          id: "ciege-u1-s2-ct-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The New Student",
            author: "Written for Akademik Space",
            text: "Kofi was reticent at first, answering questions in single words. But as the conversation warmed, he began to talk animatedly about his village.",
          },
          stem: "What does 'reticent' mean, and what shows this in the text?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference of meaning", statement: "Meaning + evidence." }],
            steps: [
              { reasoning: "Reticent means shy or reluctant to speak.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'answering questions in single words'.", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast with 'animatedly' confirms the change.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Shy/reluctant — single-word answers",
          },
        },
        {
          id: "ciege-u1-s2-ct-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Market",
            author: "Written for Akademik Space",
            text: "The market was a cacophony of sounds: vendors shouting prices, knives chopping on wooden boards, and music blaring from a rusty speaker.",
          },
          stem: "What does 'cacophony' suggest about the market? Use the rest of the sentence as evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Word meaning", statement: "Meaning + textual evidence." }],
            steps: [
              { reasoning: "Cacophony means a harsh, confusing mixture of sounds.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'vendors shouting', 'chopping', 'music blaring'.", marks: 1, markCode: "AO2" },
              { reasoning: "Many different loud sounds at once.", marks: 1, markCode: "AO2" },
              { reasoning: "The colon introduces the examples.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Harsh mixture of loud sounds",
          },
        },
      ],
    },
    {
      id: "ciege-u1-s2-word-choice",
      title: "Word choice and connotation",
      skill: "Analyse how word choice affects meaning and tone.",
      lesson: {
        sections: [
          {
            heading: "Connotation",
            body: "Words carry feelings beyond their dictionary meaning. 'Slim' is positive; 'skinny' can be negative. 'Thrifty' is positive; 'stingy' is negative.",
          },
          {
            heading: "Analysing choices",
            body: "When asked why a writer chose a word, discuss its connotation and how it shapes the reader's view of a character, place or event.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why might a writer describe a house as 'dilapidated' rather than 'old'?",
          solution: "'Dilapidated' suggests neglect and decay — much more negative than the neutral 'old'.",
        },
      },
      questions: [
        {
          id: "ciege-u1-s2-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "The old man walked with a stick. The frail old man shuffled with a stick.",
          },
          stem: "Which word has a more negative connotation: 'old' or 'frail'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "old" }, { id: "b", text: "frail" }, { id: "c", text: "Both the same" }, { id: "d", text: "Neither" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Connotation", statement: "Emotional association of a word." }],
            steps: [
              { reasoning: "'Frail' suggests weakness — more negative than neutral 'old'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "frail",
          },
        },
        {
          id: "ciege-u1-s2-wc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Interview",
            author: "Written for Akademik Space",
            text: "The politician's 'frank' answers impressed the journalists, who wrote that he had shown 'remarkable candour'.",
          },
          stem: "What do 'frank' and 'candour' suggest about the politician?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Connotation", statement: "Positive word choice shows positive traits." }],
            steps: [
              { reasoning: "Both words suggest honesty and openness.", marks: 1, markCode: "AO2" },
              { reasoning: "The politician seems truthful and direct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Honest and open",
          },
        },
        {
          id: "ciege-u1-s2-wc-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Crowd",
            author: "Written for Akademik Space",
            text: "A throng of fans surged towards the stage, banners waving. Security struggled to hold the surging mass back.",
          },
          stem: "How does the writer's word choice make the crowd seem?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Word choice", statement: "Analyse connotation of 'throng', 'surged'." }],
            steps: [
              { reasoning: "'Throng' suggests a large, somewhat uncontrolled gathering.", marks: 1, markCode: "AO2" },
              { reasoning: "'Surged' suggests forceful, energetic movement.", marks: 1, markCode: "AO2" },
              { reasoning: "Together they make the crowd seem overwhelming and excited.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Large, energetic, overwhelming",
          },
        },
        {
          id: "ciege-u1-s2-wc-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            text: "The garden was a jungle of weeds; roses had vanished beneath a tangle of brambles and bindweed.",
          },
          stem: "Why does the writer compare the garden to a 'jungle'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "Comparison implies wildness and neglect." }],
            steps: [
              { reasoning: "A jungle is wild and overgrown — so is the garden.", marks: 1, markCode: "AO3" },
              { reasoning: "'Jungle' implies the garden is out of control.", marks: 1, markCode: "AO2" },
              { reasoning: "Supported by 'tangle of brambles and bindweed'.", marks: 1, markCode: "AO2" },
              { reasoning: "Shows neglect and disorder.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Implies wild, neglected garden",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u1-s2-vocab-notes",
      title: "Vocabulary in context — revision notes",
      summary: "Context clues, connotation, why writers choose words.",
      sections: [
        { heading: "Context", body: "Use the sentence and paragraph around a word — definitions, contrasts and examples often reveal meaning." },
        { heading: "Connotation", body: "Explain both meaning and feeling. Quote the clue words that support your explanation." },
      ],
    },
  ],
};
