import type { Lesson } from "../../../types.ts";

export const exam14: Lesson = {
  id: "edpe2-u1-exam4",
  code: "1-X4",
  title: "Exam Practice 4: Phonics and Word Reading",
  goal: "I CAN answer phonics and word reading exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Phonics and Word Reading",
  ],

  vocabulary: [
    {
      term: "Noun",
      definition: "A naming word: person, place, thing or idea.",
    },
    { term: "Verb", definition: "A doing or being word." },
    {
      term: "Adjective",
      definition: "A describing word that tells us more about a noun.",
    },
    {
      term: "Punctuation",
      definition:
        "Marks such as full stops, commas and apostrophes that help us read accurately.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u1-exam4-concept",
      title: "Phonics and Word Reading — exam practice",
      skill:
        "Apply phonics and word reading techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise phonics and word reading in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for phonics and word reading.",
          },
        ],
      },
      questions: [
        {
          id: "edpe2-u1-x4-q1",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read the extract.\n\n**The Lost kitten** — Akademik Space\nPip the kitten hid under the shed when the storm began. He shivered and mewed softly until Mum lifted the lid and wrapped him in a warm towel.\n\nWhat did Mum wrap Pip in?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Retrieval",
                statement: "Find and use evidence from the text.",
              },
            ],
            steps: [
              {
                reasoning: "Find the relevant detail in the text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer in your own words: a warm towel.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a warm towel",
          },
        },
        {
          id: "edpe2-u1-x4-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct word: 'The cat ___ on the mat.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sat" },
              { id: "b", text: "sitting" },
              { id: "c", text: "sits'" },
              { id: "d", text: "sit'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Sat' is the past-tense verb.",
              },
            ],
            steps: [
              {
                reasoning: "'Sat' is the past-tense verb.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** sat",
          },
        },
        {
          id: "edpe2-u1-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence ends correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like apples." },
              { id: "b", text: "I like apples," },
              { id: "c", text: "I like apples;" },
              { id: "d", text: "I like apples:" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Punctuation",
                statement: "Statements end with a full stop.",
              },
            ],
            steps: [
              {
                reasoning: "Statements end with a full stop.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** I like apples.",
          },
        },
        {
          id: "edpe2-u1-x4-q4",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add a describing word: 'The ___ sun shone.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "Use an adjective like 'bright'.",
              },
            ],
            steps: [
              { reasoning: "bright/warm/golden sun", marks: 1, markCode: "A" },
              { reasoning: "a describing adjective", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use an adjective like 'bright'.",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe2-u1-x4-q5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract.\n\n**A windy day** — Akademik Space\nThe kite danced above the field, tugging so hard that Sam had to run to keep hold of the string. His cheeks burned in the cold wind.\n\nWhere did Pip hide?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Retrieval",
                statement: "Find and use evidence from the text.",
              },
            ],
            steps: [
              {
                reasoning: "Find the relevant detail in the text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer in your own words: under the shed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "under the shed",
          },
        },
        {
          id: "edpe2-u1-x4-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct word: 'The cat ___ on the mat.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sat" },
              { id: "b", text: "sitting" },
              { id: "c", text: "sits'" },
              { id: "d", text: "sit'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Sat' is the past-tense verb.",
              },
            ],
            steps: [
              {
                reasoning: "'Sat' is the past-tense verb.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** sat",
          },
        },
        {
          id: "edpe2-u1-x4-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence ends correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like apples." },
              { id: "b", text: "I like apples," },
              { id: "c", text: "I like apples;" },
              { id: "d", text: "I like apples:" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Punctuation",
                statement: "Statements end with a full stop.",
              },
            ],
            steps: [
              {
                reasoning: "Statements end with a full stop.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** I like apples.",
          },
        },
        {
          id: "edpe2-u1-x4-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Join these sentences: 'The dog ran. The dog was fast.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "Combine into one sentence using a describing word.",
              },
            ],
            steps: [
              { reasoning: "The fast dog ran.", marks: 1, markCode: "A" },
              { reasoning: "The dog ran quickly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Combine into one sentence using a describing word.",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe2-u1-x4-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract.\n\n**A windy day** — Akademik Space\nThe kite danced above the field, tugging so hard that Sam had to run to keep hold of the string. His cheeks burned in the cold wind.\n\nWhat did Mum wrap Pip in?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Retrieval",
                statement: "Find and use evidence from the text.",
              },
            ],
            steps: [
              {
                reasoning: "Find the relevant detail in the text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer in your own words: a warm towel.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a warm towel",
          },
        },
        {
          id: "edpe2-u1-x4-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word is a doing word (verb)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "run" },
              { id: "b", text: "happy" },
              { id: "c", text: "under" },
              { id: "d", text: "the" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Run' is an action.",
              },
            ],
            steps: [
              { reasoning: "'Run' is an action.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** run",
          },
        },
      ],
    },
  ],
};
