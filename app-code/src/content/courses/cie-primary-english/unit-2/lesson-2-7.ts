import type { Lesson } from "../../../types.ts";

export const lesson27: Lesson = {
  id: "cipe-u2-lesson-2-7",
  code: "2-7",
  title: "Stage 4 — Reading Poetry and Non-fiction Features",
  goal: "I CAN enjoy poems and use features of non-fiction texts.",
  standards: ["Cambridge Primary English 0058 Stage 4: reading",
  "Cambridge Primary English 0058 framework substrands: 4Rs, 4Ri, 4Ra"],
  stage: 4,
  vocabulary: [
    { term: "Poem", definition: "Writing arranged in lines, often with rhythm and rhyme." },
    { term: "Rhyme", definition: "Words ending with the same sound." },
    { term: "Non-fiction", definition: "Text about real things: articles, reports, instructions." },
    { term: "Sub-heading", definition: "A smaller heading that breaks text into sections." },
    { term: "Caption", definition: "Short text explaining a picture or diagram." },
  ],
  concepts: [
    {
      id: "cipe-u2-s7-poetry-nonfiction",
      title: "Poetry and non-fiction features",
      skill: "Respond to poems and navigate non-fiction texts using features at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Reading poems",
            body: "Poems use lines, rhythm and often rhyme. Read aloud to hear the rhythm; notice repeated sounds and words (repetition creates effect). Ask: how does the poem make me feel, and what pictures do the words create in my mind?",
          },
          {
            heading: "Non-fiction features",
            body: "Non-fiction texts use headings, sub-headings, bullet points, captions, diagrams and glossaries to organise information. These features help you find facts quickly — scan headings first, then read the section you need.",
          },
        ],
        keyFormulas: [
          { name: "Poem features", statement: "lines, rhythm, rhyme, repetition" },
          { name: "Non-fiction", statement: "headings, bullets, captions, diagrams, glossary" },
        ],
        workedExample: {
          problem: "You need the capital of France from an atlas page. Which feature helps you find it fastest?",
          solution: "The index or headings — scan for 'France' rather than reading everything.",
        },
      },
      questions: [
        {
          id: "cipe-u2-pn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes words rhyme?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They end with the same sound" },
            { id: "b", text: "They mean the same thing" },
            { id: "c", text: "They start with the same letter" },
            { id: "d", text: "They have the same length" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhyme", statement: "Same ending sound." }],
            steps: [{ reasoning: "Rhyme = same ending sound.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Same ending sound",
          },
        },
        {
          id: "cipe-u2-pn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two features that help you navigate a non-fiction text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Non-fiction features", statement: "Headings, bullets, captions, diagrams." }],
            steps: [
              { reasoning: "Any two: headings, sub-headings, bullet points, captions, diagrams, glossary, index.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. headings and bullet points",
          },
        },
        {
          id: "cipe-u2-pn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do poets use repetition (repeating words or sounds)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Poetic effect", statement: "Repetition creates rhythm and emphasis." }],
            steps: [
              { reasoning: "Repetition makes rhythm when read aloud.", marks: 1, markCode: "AO2" },
              { reasoning: "It emphasises important words or feelings.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer explains effect.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Creates rhythm and emphasises key words",
          },
        },
        {
          id: "cipe-u2-pn-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read this line from a poem: 'The rain fell soft on the sleeping town.' What picture does it create?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Imagery", statement: "Words create mental pictures." }],
            steps: [
              { reasoning: "'soft' suggests gentle, quiet rain.", marks: 1, markCode: "AO2" },
              { reasoning: "'sleeping town' suggests calm, stillness.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: peaceful, quiet night scene.", marks: 1, markCode: "AO3" },
              { reasoning: "Clear description of the image.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A calm, peaceful rainy night in a quiet town",
          },
        },
        {
          id: "cipe-u2-pn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'glossary' in a non-fiction book?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The story's ending" },
            { id: "b", text: "A list explaining the meanings of difficult words" },
            { id: "c", text: "A picture" },
            { id: "d", text: "A list of characters" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Glossary", statement: "List of word meanings." }],
            steps: [{ reasoning: "A glossary explains difficult words.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A list explaining word meanings",
          },
        },
        {
          id: "cipe-u2-pn-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a feature of a poem?",
          response: { type: "mcq", choices: [
            { id: "a", text: "An index" },
            { id: "b", text: "A contents page" },
            { id: "c", text: "A glossary" },
            { id: "d", text: "Rhyme and rhythm" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Poem features", statement: "Lines, rhythm, rhyme, repetition." }],
            steps: [{ reasoning: "Poems use rhyme and rhythm.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Rhyme and rhythm",
          },
        },
        {
          id: "cipe-u2-pn-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Poem features are lines, rhythm, rhyme and repetition. How many features is that? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Poem features", statement: "Lines, rhythm, rhyme, repetition." }],
            steps: [
              { reasoning: "Four features listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipe-u2-pn-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'The cat sat on the mat / And looked at a rat.' How many rhyming word pairs are there (mat/rat)? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Rhyme spotting", statement: "Same ending sound." }],
            steps: [
              { reasoning: "'mat' and 'rat' rhyme — one pair.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cipe-u2-pn-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'caption' in a non-fiction text?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A list of contents" },
            { id: "b", text: "A short text explaining a picture or diagram" },
            { id: "c", text: "The main heading" },
            { id: "d", text: "A rhyming couplet" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Caption", statement: "Short text explaining a picture." }],
            steps: [{ reasoning: "Captions label and explain pictures or diagrams.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A short text explaining a picture",
          },
        },
        {
          id: "cipe-u2-pn-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one pair of rhyming words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhyme", statement: "Words ending with the same sound." }],
            steps: [
              { reasoning: "Two words are given.", marks: 1, markCode: "AO2" },
              { reasoning: "They end with the same sound (e.g. cat/hat, sun/fun).", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. cat / hat",
          },
        },
        {
          id: "cipe-u2-pn-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you read a poem aloud?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To make it shorter" },
            { id: "b", text: "To hear the rhythm and rhyme clearly" },
            { id: "c", text: "To skip the difficult parts" },
            { id: "d", text: "To avoid reading it" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reading poems", statement: "Aloud reveals rhythm and sound." }],
            steps: [{ reasoning: "Reading aloud lets you hear the rhythm and rhyme.", marks: 1, markCode: "AO2" }],
            finalAnswer: "To hear the rhythm and rhyme clearly",
          },
        },
        {
          id: "cipe-u2-pn-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'The wind whispered through the bare trees.' What feeling does this line create? Explain using the words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Poetic mood", statement: "Words create feelings and pictures." }],
            steps: [
              { reasoning: "'Whispered' suggests softness and secrecy.", marks: 1, markCode: "AO2" },
              { reasoning: "'Bare trees' suggests winter, emptiness or loneliness.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall feeling: quiet, slightly mysterious or lonely.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Quiet, mysterious or lonely",
          },
        },
        {
          id: "cipe-u2-pn-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many lines are in this poem: 'The sun is up / The birds are singing / The day has begun'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Counting poem lines", statement: "Each line break counts as a line." }],
            steps: [
              { reasoning: "Three lines separated by slashes.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-pn-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What effect does repetition have in a poem?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It removes rhyme" },
            { id: "b", text: "It confuses the reader" },
            { id: "c", text: "It creates rhythm and emphasises important words or feelings" },
            { id: "d", text: "It makes the poem shorter" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repetition", statement: "Repeating words creates rhythm and emphasis." }],
            steps: [{ reasoning: "Repetition builds rhythm and highlights key ideas.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Creates rhythm and emphasises key words",
          },
        },
        {
          id: "cipe-u2-pn-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the mood of these two lines: 'The meadow danced in golden sunlight' vs 'The storm tore through the silent night.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing moods", statement: "Words create contrasting feelings." }],
            steps: [
              { reasoning: "Line 1 mood: happy, bright, peaceful ('danced', 'golden sunlight').", marks: 1, markCode: "AO2" },
              { reasoning: "Line 2 mood: dangerous, dramatic, tense ('tore', 'silent night').", marks: 1, markCode: "AO2" },
              { reasoning: "Contrast clearly explained.", marks: 1, markCode: "AO3" },
              { reasoning: "Evidence quoted from both lines.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Happy/peaceful vs dangerous/dramatic",
          },
        },
        {
          id: "cipe-u2-pn-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You need to find the capital of Japan quickly in a geography book. Describe which non-fiction features you would use and how.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Using features", statement: "Scan headings and index for fast lookup." }],
            steps: [
              { reasoning: "Check the index or contents page for 'Japan'.", marks: 1, markCode: "AO2" },
              { reasoning: "Or scan headings for the right section.", marks: 1, markCode: "AO2" },
              { reasoning: "Read only the relevant section for the fact.", marks: 1, markCode: "AO2" },
              { reasoning: "Method is logical and efficient.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. use the index to find 'Japan', then read that section only",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-pn-notes",
      title: "Poetry and non-fiction — revision notes",
      summary: "Poems: lines/rhythm/rhyme/repetition; non-fiction: headings/bullets/captions/diagrams.",
      sections: [
        { heading: "Poetry", body: "Read aloud for rhythm; notice rhyme and repetition for effect." },
        { heading: "Non-fiction", body: "Use headings and features to locate facts fast — scan first." },
      ],
    },
  ],
};
