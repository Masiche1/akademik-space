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
            { id: "a", text: "They start with the same letter" }, { id: "b", text: "They end with the same sound" }, { id: "c", text: "They have the same length" }, { id: "d", text: "They mean the same thing" },
          ], correctChoiceId: "b" },
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
