import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cipe-u1-lesson-1-1",
  code: "1-1",
  title: "Stage 1 — Phonics and Sounds",
  goal: "I CAN recognise letters, say their sounds and blend them into words.",
  standards: ["Cambridge Primary English 0058 Stage 1: phonics",
  "Cambridge Primary English 0058 framework substrands: 1Rw"],
  stage: 1,
  vocabulary: [
    { term: "Phonics", definition: "Learning the sounds letters make." },
    { term: "Blend", definition: "Push letter sounds together to read a word." },
    { term: "Segment", definition: "Break a word into its sounds to spell it." },
    { term: "Sound", definition: "The noise a letter or group of letters makes." },
    { term: "Word", definition: "A group of letters that has meaning." },
  ],
  concepts: [
    {
      id: "cipe-u1-s1-phonics",
      title: "Letter sounds and blending",
      skill: "Recognise letter sounds and blend them at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Letter sounds",
            body: "Each letter makes a sound. The letter c makes the /k/ sound as in cat. Some letters make two sounds: c can be /s/ as in city.",
          },
          {
            heading: "Blending",
            body: "To read a word, say each sound then blend them together. c-a-t becomes cat. To spell, break the word into sounds first.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Blend the sounds s-a-t to make a word.",
          solution: "Say /s/ /a/ /t/ then push them together: sat.",
        },
      },
      questions: [
        {
          id: "cipe-u1-s1-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What sound does the letter 'm' make?",
          response: { type: "mcq", choices: [
            { id: "a", text: "/k/" }, { id: "b", text: "/m/" }, { id: "c", text: "/s/" }, { id: "d", text: "/t/" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Letter sound", statement: "Each letter has a sound." }],
            steps: [{ reasoning: "The letter m makes the /m/ sound.", marks: 1, markCode: "AO1" }],
            finalAnswer: "/m/",
          },
        },
        {
          id: "cipe-u1-s1-ph-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Blend the sounds d-o-g to make a word.",
          response: { type: "mcq", choices: [
            { id: "a", text: "dig" }, { id: "b", text: "dog" }, { id: "c", text: "dot" }, { id: "d", text: "log" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Blending", statement: "Push sounds together to read." }],
            steps: [{ reasoning: "/d/ /o/ /g/ blends to dog.", marks: 1, markCode: "AO1" }],
            finalAnswer: "dog",
          },
        },
        {
          id: "cipe-u1-s1-ph-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Segment the word 'fish' into its sounds.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break words into sounds to spell." }],
            steps: [
              { reasoning: "Say the word slowly: f-i-sh.", marks: 1, markCode: "AO1" },
              { reasoning: "The sounds are /f/ /i/ /sh/.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "/f/ /i/ /sh/",
          },
        },
        {
          id: "cipe-u1-s1-ph-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the word that matches these sounds: /p/ /e/ /n/.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Blending", statement: "Blend sounds to form a word." }],
            steps: [
              { reasoning: "Say the sounds together: pen.", marks: 1, markCode: "AO1" },
              { reasoning: "Check it is a real word.", marks: 1, markCode: "AO1" },
              { reasoning: "The word is pen.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "pen",
          },
        },
        {
          id: "cipe-u1-s1-ph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What sound does the letter 's' make at the start of 'sun'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "/m/" }, { id: "b", text: "/s/" }, { id: "c", text: "/f/" }, { id: "d", text: "/z/" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Letter sound", statement: "Each letter has a sound." }],
            steps: [{ reasoning: "The letter s makes the /s/ sound.", marks: 1, markCode: "AO1" }],
            finalAnswer: "/s/",
          },
        },
        {
          id: "cipe-u1-s1-ph-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Blend the sounds c-a-t to make a word.",
          response: { type: "mcq", choices: [
            { id: "a", text: "cot" }, { id: "b", text: "cap" }, { id: "c", text: "cat" }, { id: "d", text: "cut" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Blending", statement: "Push sounds together to read." }],
            steps: [{ reasoning: "/c/ /a/ /t/ blends to cat.", marks: 1, markCode: "AO1" }],
            finalAnswer: "cat",
          },
        },
        {
          id: "cipe-u1-s1-ph-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Segment the word 'hop' into its sounds.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break words into sounds to spell." }],
            steps: [
              { reasoning: "Say the word slowly: h-o-p.", marks: 1, markCode: "AO1" },
              { reasoning: "The sounds are /h/ /o/ /p/.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "/h/ /o/ /p/",
          },
        },
        {
          id: "cipe-u1-s1-ph-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word has the /sh/ sound?",
          response: { type: "mcq", choices: [
            { id: "a", text: "cat" }, { id: "b", text: "ship" }, { id: "c", text: "dog" }, { id: "d", text: "hat" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Digraph", statement: "Two letters that make one sound." }],
            steps: [{ reasoning: "'sh' in ship makes the /sh/ sound.", marks: 1, markCode: "AO1" }],
            finalAnswer: "ship",
          },
        },
        {
          id: "cipe-u1-s1-ph-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the word that matches these sounds: /s/ /u/ /n/.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Blending", statement: "Blend sounds to form a word." }],
            steps: [
              { reasoning: "Say the sounds together: sun.", marks: 1, markCode: "AO1" },
              { reasoning: "The word is sun.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "sun",
          },
        },
        {
          id: "cipe-u1-s1-ph-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which two letters make the /ch/ sound in 'chip'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "sh" }, { id: "b", text: "th" }, { id: "c", text: "ch" }, { id: "d", text: "ck" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Digraph", statement: "Two letters that make one sound." }],
            steps: [{ reasoning: "'ch' makes the /ch/ sound.", marks: 1, markCode: "AO1" }],
            finalAnswer: "ch",
          },
        },
        {
          id: "cipe-u1-s1-ph-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Segment the word 'fish' and then write it using the letters.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break words into sounds to spell." }],
            steps: [
              { reasoning: "Say the word slowly: f-i-sh.", marks: 1, markCode: "AO1" },
              { reasoning: "The sounds are /f/ /i/ /sh/.", marks: 1, markCode: "AO1" },
              { reasoning: "Write the letters: f-i-sh = fish.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "fish",
          },
        },
        {
          id: "cipe-u1-s1-ph-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which letter makes the /b/ sound?",
          response: { type: "mcq", choices: [
            { id: "a", text: "p" }, { id: "b", text: "d" }, { id: "c", text: "b" }, { id: "d", text: "g" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Letter sound", statement: "Each letter has a sound." }],
            steps: [{ reasoning: "The letter b makes the /b/ sound.", marks: 1, markCode: "AO1" }],
            finalAnswer: "b",
          },
        },
        {
          id: "cipe-u1-s1-ph-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Blend the sounds t-h-i-s to make a word and write it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Blending", statement: "Push sounds together to read." }],
            steps: [
              { reasoning: "Say the sounds together: this.", marks: 1, markCode: "AO1" },
              { reasoning: "'th' makes one sound /th/.", marks: 1, markCode: "AO1" },
              { reasoning: "The word is this.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "this",
          },
        },
        {
          id: "cipe-u1-s1-ph-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word starts with the /n/ sound?",
          response: { type: "mcq", choices: [
            { id: "a", text: "net" }, { id: "b", text: "map" }, { id: "c", text: "sit" }, { id: "d", text: "top" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Initial sounds", statement: "Listen to the first sound of a word." }],
            steps: [{ reasoning: "'net' starts with the /n/ sound.", marks: 1, markCode: "AO1" }],
            finalAnswer: "net",
          },
        },
        {
          id: "cipe-u1-s1-ph-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Say the sounds in 'mop', then write the word.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Segmenting", statement: "Break words into sounds to spell." }],
            steps: [
              { reasoning: "The sounds are /m/ /o/ /p/.", marks: 1, markCode: "AO1" },
              { reasoning: "Blending them gives mop.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "mop",
          },
        },
        {
          id: "cipe-u1-s1-ph-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write two words that start with the /sh/ sound.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Word building", statement: "Use letter sounds to build words." }],
            steps: [
              { reasoning: "First word starts with sh, e.g. ship or shop.", marks: 1, markCode: "AO1" },
              { reasoning: "Second word starts with sh, e.g. shed or shut.", marks: 1, markCode: "AO1" },
              { reasoning: "Both words are real words.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. ship and shop",
          },
        },
      ],
    },
    {
      id: "cipe-u1-s1-speaking",
      title: "Speaking and listening",
      skill: "Take turns speaking and listen carefully at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Speaking clearly",
            body: "When you speak, use a clear voice and face your listener. Say whole sentences, not just single words.",
          },
          {
            heading: "Listening",
            body: "Listening means looking at the speaker, not talking over them, and remembering what was said. You can ask questions if you did not hear.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A friend tells you their name and favourite food. What should you do?",
          solution: "Look at them, listen without interrupting, then you can repeat what they said to check you understood.",
        },
      },
      questions: [
        {
          id: "cipe-u1-s1-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do when someone is speaking to you?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Talk over them" }, { id: "b", text: "Look away" }, { id: "c", text: "Listen and look at them" }, { id: "d", text: "Leave the room" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Listening", statement: "Look at the speaker and listen." }],
            steps: [{ reasoning: "Good listeners look at the speaker and do not interrupt.", marks: 1, markCode: "AO5" }],
            finalAnswer: "Listen and look",
          },
        },
        {
          id: "cipe-u1-s1-sp-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The dog" }, { id: "b", text: "Ran fast" }, { id: "c", text: "The dog ran fast." }, { id: "d", text: "Big red" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sentence", statement: "A sentence needs a subject and a verb." }],
            steps: [{ reasoning: "The dog ran fast has a subject (dog) and verb (ran) and ends with a full stop.", marks: 1, markCode: "AO2" }],
            finalAnswer: "The dog ran fast.",
          },
        },
        {
          id: "cipe-u1-s1-sp-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to listen when someone is speaking?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Listening", statement: "Listening helps you understand and show respect." }],
            steps: [
              { reasoning: "Listening shows you care about what the speaker says.", marks: 1, markCode: "AO5" },
              { reasoning: "It helps you understand and remember information.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "To understand and show respect",
          },
        },
        {
          id: "cipe-u1-s1-sp-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how you would tell a friend about your weekend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speaking", statement: "Use clear sentences and stay on topic." }],
            steps: [
              { reasoning: "Use full sentences, not just single words.", marks: 1, markCode: "AO2" },
              { reasoning: "Include details about what you did.", marks: 1, markCode: "AO2" },
              { reasoning: "Speak clearly and look at your listener.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "Clear, detailed sentences",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-s1-phonics-notes",
      title: "Stage 1 phonics and speaking — revision notes",
      summary: "Letter sounds, blending, speaking and listening skills.",
      sections: [
        { heading: "Phonics", body: "Say each sound slowly, then blend them together to read. To spell, segment the word into sounds." },
        { heading: "Speaking and listening", body: "Look at the speaker, listen without interrupting, and speak in full sentences." },
      ],
    },
  ],
};
