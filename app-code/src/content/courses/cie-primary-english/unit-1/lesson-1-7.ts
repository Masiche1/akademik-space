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
            { id: "a", text: "two sounds blended together" },
            { id: "b", text: "one sound" },
            { id: "c", text: "a silent letter" },
            { id: "d", text: "a long vowel" },
          ], correctChoiceId: "a" },
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
        {
          id: "cipe-u1-bd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the word 'ship', the letters 'sh' make…",
          response: { type: "mcq", choices: [
            { id: "a", text: "a long vowel" },
            { id: "b", text: "a silent letter" },
            { id: "c", text: "one sound" },
            { id: "d", text: "two separate sounds" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Digraph", statement: "Two letters, one sound." }],
            steps: [{ reasoning: "'sh' is a digraph — one sound.", marks: 1, markCode: "AO1" }],
            finalAnswer: "One sound",
          },
        },
        {
          id: "cipe-u1-bd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many sounds are in the word 'cat'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break the word into sounds." }],
            steps: [
              { reasoning: "c-a-t = 3 sounds.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-bd-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many sounds are in the word 'duck'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break the word into sounds." }],
            steps: [
              { reasoning: "d-u-ck: 'ck' is one sound = 3 sounds.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-bd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a blend?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'st' in stop" },
            { id: "b", text: "'ch' in chip" },
            { id: "c", text: "'sh' in ship" },
            { id: "d", text: "'ng' in ring" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Blend vs digraph", statement: "Blends keep two sounds; digraphs make one." }],
            steps: [{ reasoning: "'st' keeps both s and t sounds — a blend.", marks: 1, markCode: "AO1" }],
            finalAnswer: "'st' in stop",
          },
        },
        {
          id: "cipe-u1-bd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How do you segment the word 'ring' into sounds?",
          response: { type: "mcq", choices: [
            { id: "a", text: "r-ing" },
            { id: "b", text: "r-i-ng" },
            { id: "c", text: "ri-ng" },
            { id: "d", text: "r-i-n-g" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break into sounds, not letters." }],
            steps: [{ reasoning: "'ng' is a digraph — one sound, so r-i-ng.", marks: 1, markCode: "AO2" }],
            finalAnswer: "r-i-ng",
          },
        },
        {
          id: "cipe-u1-bd-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is spelled when you blend the sounds 's-t-o-p'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "step" },
            { id: "b", text: "top" },
            { id: "c", text: "shop" },
            { id: "d", text: "stop" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Blending to read", statement: "Blend sounds quickly into a word." }],
            steps: [{ reasoning: "s-t-o-p blends to 'stop'.", marks: 1, markCode: "AO2" }],
            finalAnswer: "stop",
          },
        },
        {
          id: "cipe-u1-bd-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many sounds are in the word 'frog'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break the word into sounds." }],
            steps: [
              { reasoning: "f-r-o-g = 4 sounds ('fr' is a blend).", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipe-u1-bd-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Spell the word made from the sounds 'p-l-a-n-t'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting to spell", statement: "Write the letters for each sound." }],
            steps: [
              { reasoning: "Sounds: p, l, a, n, t.", marks: 1, markCode: "AO2" },
              { reasoning: "'pl' is a blend at the start.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: plant.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "plant",
          },
        },
        {
          id: "cipe-u1-bd-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between a blend and a digraph?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A digraph has three letters" },
            { id: "b", text: "They are the same" },
            { id: "c", text: "A blend is always silent" },
            { id: "d", text: "A blend keeps two sounds; a digraph makes one sound" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Blend vs digraph", statement: "Blends = 2 sounds; digraphs = 1 sound." }],
            steps: [{ reasoning: "In a blend both consonant sounds are heard; in a digraph two letters make one sound.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Blend keeps two sounds; digraph makes one",
          },
        },
        {
          id: "cipe-u1-bd-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many sounds are in the word 'splash'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break the word into sounds." }],
            steps: [
              { reasoning: "s-p-l-a-sh = 5 sounds ('sh' is one digraph sound).", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u1-bd-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Segment the word 'string' into its sounds and then spell it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting to spell", statement: "Break into sounds, then write letters." }],
            steps: [
              { reasoning: "Sounds: s-t-r-i-ng ('str' blend, 'ng' digraph).", marks: 1, markCode: "AO2" },
              { reasoning: "Five sounds identified.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelled s-t-r-i-n-g.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: string.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "s-t-r-i-ng → string",
          },
        },
        {
          id: "cipe-u1-bd-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a blend and a digraph, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Blend and digraph", statement: "Blends keep two sounds; digraphs make one." }],
            steps: [
              { reasoning: "Blend explained: two consonants, both sounds heard (e.g. 'st' in stop).", marks: 1, markCode: "AO2" },
              { reasoning: "Digraph explained: two letters, one sound (e.g. 'sh' in ship).", marks: 1, markCode: "AO2" },
              { reasoning: "Correct example of a blend given.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct example of a digraph given.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. blend 'st' in stop (two sounds); digraph 'sh' in ship (one sound)",
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
