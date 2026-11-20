import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "cipe-u1-lesson-1-7",
  code: "1-7",
  title: "Stage 1 — Phonics Phases 3–5: Blends and Digraphs",
  goal: "I CAN read words with consonant blends and digraphs.",
  standards: ["Cambridge Primary English 0058 Stage 1: phonics",
  "Cambridge Primary English 0058 framework substrands: 1Rw"],
  stage: 1,
  vocabulary: [
    { term: "Blend", definition: "Two or more consonants said together, like 'st' in stop." },
    { term: "Digraph", definition: "Two letters making one sound, like 'sh' or 'ch'." },
    { term: "Trigraph", definition: "Three letters making one sound, like 'igh'." },
    { term: "Segment", definition: "Break a word into its sounds to spell it." },
    { term: "Grapheme", definition: "The written letters that make a sound." },
  ],
  concepts: [
    {
      id: "cipe-u1-s7-blends-digraphs",
      title: "Blends, digraphs and segmenting",
      skill: "Read and spell words with blends and digraphs at Stage 1 phonics level.",
      lesson: {
        sections: [
          {
            heading: "Blends",
            body: "Consonant blends keep both sounds — 'st' in stop, 'pl' in plant, 'tr' in tree. Read them quickly together, not as separate letters. Common blends at the start: bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sm, sn, st, sw, tw, qu, sc, sk, sp, scr, spl, spr, str.",
          },
          {
            heading: "Digraphs and segmenting",
            body: "Digraphs are two letters, one sound: sh, ch, th, ng, ck, ee, ai, oa, igh. When spelling, segment the word into sounds first — 'ship' is sh-i-p, three sounds. Knowing which letters make each sound makes blending and segmenting much faster.",
          },
        ],
        keyFormulas: [
          { name: "Blend", statement: "Two consonants, two sounds (st, pl)" },
          { name: "Digraph", statement: "Two letters, one sound (sh, ch, th)" },
        ],
        workedExample: {
          problem: "Segment the word 'chip' into its sounds.",
          solution: "ch-i-p — three sounds; ch is a digraph making one sound.",
        },
      },
      questions: [
        {
          id: "cipe-u1-bd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'stop', the letters 'st' make…",
          response: { type: "mcq", choices: [
            { id: "a", text: "one sound" }, { id: "b", text: "two sounds blended together" }, { id: "c", text: "a silent letter" }, { id: "d", text: "a long vowel" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Blend", statement: "Consonants keep both sounds." }],
            steps: [{ reasoning: "'st' = s + t sounds together.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Two sounds blended",
          },
        },
        {
          id: "cipe-u1-bd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many sounds are in 'fish'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break word into sounds." }],
            steps: [
              { reasoning: "f-i-sh: 'sh' is one digraph sound.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3 sounds.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-bd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which letters make the first sound in 'chip'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Digraph", statement: "Two letters, one sound." }],
            steps: [
              { reasoning: "'ch' makes the first sound.", marks: 1, markCode: "AO2" },
              { reasoning: "Then i, then p.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: ch.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "ch",
          },
        },
        {
          id: "cipe-u1-bd-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Spell the word that sounds like 'f-l-a-g' blending the sounds together.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting to spell", statement: "Say sounds then write letters." }],
            steps: [
              { reasoning: "Sounds: f, l, a, g.", marks: 1, markCode: "AO2" },
              { reasoning: "'fl' is a blend at the start.", marks: 1, markCode: "AO2" },
              { reasoning: "Write f-l-a-g.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: flag.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "flag",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-bd-notes",
      title: "Blends and digraphs — revision notes",
      summary: "Blends = 2 consonant sounds; digraphs = 2 letters 1 sound; segment to spell.",
      sections: [
        { heading: "Blends", body: "st, pl, tr, gr — both consonant sounds are heard." },
        { heading: "Digraphs", body: "sh, ch, th, ng, ee, ai, oa, igh — one sound from two/three letters." },
      ],
    },
  ],
};
