import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edpe1-u1-lesson-1-1",
  code: "1-1",
  title: "Letter Sounds and Blending",
  goal: "I CAN recognise letter sounds and blend them to read simple words.",
  standards: ["Year 1 Phonics"],
  vocabulary: [
    {
      term: "Phonics",
      definition: "Learning to read by matching letters to sounds.",
    },
    {
      term: "Blend",
      definition: "Push letter sounds together to make a word: c-a-t → cat.",
    },
    { term: "Sound", definition: "The noise a letter or letter group makes." },
    {
      term: "Digraph",
      definition: "Two letters making one sound, e.g. sh, ch, th.",
    },
  ],
  concepts: [
    {
      id: "edpe1-u1-sounds",
      title: "Recognising letter sounds",
      skill: "Match letters and digraphs to their sounds.",
      lesson: {
        sections: [
          {
            heading: "Single letter sounds",
            body: "Each letter makes a sound: s says /s/, a says /a/, t says /t/. We say sounds, not letter names — 's' sounds like a snake, not 'ess'. Learning sounds helps us read words.",
          },
          {
            heading: "Digraphs",
            body: "Some sounds need two letters: sh (/sh/ in ship), ch (/ch/ in chat), th (/th/ in this), ng (/ng/ in sing), qu (/kw/ in queen). These are called digraphs — two letters, one sound.",
          },
        ],
        keyFormulas: [
          { name: "Phonics", statement: "Letters → sounds → words" },
          { name: "Digraph", statement: "Two letters, one sound" },
        ],
        workedExample: {
          problem: "What sound does 'sh' make? Give an example word.",
          solution: "sh makes /sh/ as in ship, shop, fish.",
        },
      },
      questions: [
        {
          id: "edpe1-u1-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word starts with the /s/ sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cat" },
              { id: "b", text: "dog" },
              { id: "c", text: "pig" },
              { id: "d", text: "sun" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Letter sound",
                statement: "/s/ starts 'sun'.",
              },
            ],
            steps: [
              {
                reasoning: "Only 'sun' begins with /s/.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** sun",
            commonErrors: [
              "Choosing 'cat' because it starts with a letter, not the right sound.",
            ],
          },
        },
        {
          id: "edpe1-u1-so-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which two letters make the /ch/ sound in 'chip'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "t and h" },
              { id: "b", text: "c and h" },
              { id: "c", text: "c and k" },
              { id: "d", text: "s and h" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digraph",
                statement: "ch is a digraph making /ch/.",
              },
            ],
            steps: [
              { reasoning: "ch = /ch/ sound.", marks: 1, markCode: "B" },
              { reasoning: "Answer: c and h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** c and h",
            commonErrors: ["Picking sh — different digraph."],
          },
        },
        {
          id: "edpe1-u1-so-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the sound made by the letter 'm'. Then give a word that starts with it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Letter sounds",
                statement: "m = /m/; e.g. map, mat, moon.",
              },
            ],
            steps: [
              { reasoning: "m makes /m/.", marks: 1, markCode: "A" },
              {
                reasoning: "Word starting with /m/ given.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "/m/ e.g. map",
            commonErrors: ["Saying letter name 'em' instead of sound /m/."],
          },
        },
        {
          id: "edpe1-u1-so-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sort these words by their first sound: ship, cat, chat, sun.",
          parts: [
            {
              label: "a",
              prompt: "Which words start with a digraph sound?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which words start with a single letter sound?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digraphs vs letters",
                statement:
                  "ship(/sh/), chat(/ch/) digraphs; cat(/c/), sun(/s/) single.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "ship and chat start with digraphs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Both identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "cat and sun start with single sounds.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Both identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Digraphs: ship, chat; single: cat, sun",
            commonErrors: ["Grouping by first letter only, ignoring digraphs."],
          },
        },
      ],
    },
    {
      id: "edpe1-u1-blending",
      title: "Blending sounds into words",
      skill: "Blend letter sounds together to read CVC words.",
      lesson: {
        sections: [
          {
            heading: "What is blending?",
            body: "Blending means pushing sounds together without stopping: c-a-t → 'cat', not 'cuh-a-tuh'. Say the sounds quickly and they join into a word. This is how we read!",
          },
          {
            heading: "CVC words",
            body: "CVC words have a consonant, vowel, consonant: cat, dog, sun, map, bed. Break them into three sounds, then blend: d-o-g → dog. Practise with lots of words.",
          },
        ],
        keyFormulas: [
          { name: "Blend", statement: "Push sounds together: p-i-g → pig" },
          { name: "CVC", statement: "Consonant-Vowel-Consonant pattern" },
        ],
        workedExample: {
          problem: "Blend the sounds: s-u-n.",
          solution: "s-u-n → sun.",
        },
      },
      questions: [
        {
          id: "edpe1-u1-bl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Blend these sounds to make a word: c-a-t.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cat" },
              { id: "b", text: "cot" },
              { id: "c", text: "cut" },
              { id: "d", text: "cart" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Blending",
                statement: "c-a-t blends to 'cat'.",
              },
            ],
            steps: [
              { reasoning: "Blend the three sounds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** cat",
            commonErrors: ["Reading letter names instead of blending sounds."],
          },
        },
        {
          id: "edpe1-u1-bl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word do these sounds make: p-i-g?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "pig" },
              { id: "b", text: "pag" },
              { id: "c", text: "bug" },
              { id: "d", text: "peg" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Blending",
                statement: "p-i-g → pig.",
              },
            ],
            steps: [
              { reasoning: "Blend p-i-g.", marks: 1, markCode: "B" },
              { reasoning: "Answer: pig.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** pig",
            commonErrors: ["Choosing 'peg' — wrong vowel sound."],
          },
        },
        {
          id: "edpe1-u1-bl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Segment the word 'dog' into its three sounds, then write the word.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Segmenting",
                statement: "d-o-g → dog.",
              },
            ],
            steps: [
              { reasoning: "Segment: d-o-g.", marks: 1, markCode: "M" },
              { reasoning: "Word written: dog.", marks: 1, markCode: "A" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "d-o-g → dog",
            commonErrors: ["Saying letter names d-o-g instead of sounds."],
          },
        },
        {
          id: "edpe1-u1-bl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read these words by blending: hen, bus, cup.",
          parts: [
            { label: "a", prompt: "Blend h-e-n.", marks: 1 },
            { label: "b", prompt: "Blend b-u-s.", marks: 1 },
            { label: "c", prompt: "Blend c-u-p.", marks: 1 },
            {
              label: "d",
              prompt: "Write all three words in a sentence.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Blending words",
                statement: "hen, bus, cup — all CVC words.",
              },
            ],
            steps: [
              { part: "a", reasoning: "h-e-n → hen.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "b-u-s → bus.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "c-u-p → cup.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Sentence uses all three words correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "hen, bus, cup; e.g. 'The hen is on the bus with a cup.'",
            commonErrors: ["Reading letter names — blend sounds not names."],
          },
        },
      ],
    },
  ],
};
