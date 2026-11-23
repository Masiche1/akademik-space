import type { Lesson } from "../../../types.ts";

export const exam42: Lesson = {
  id: "edpe1-u4-exam2",
  code: "4-X2",
  title: "Exam Practice 2: Reading for Meaning and Story Writing",
  goal: "I CAN answer reading for meaning and story writing exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Reading for Meaning and Story Writing",
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
      id: "edpe1-u4-exam2-concept",
      title: "Reading for Meaning and Story Writing — exam practice",
      skill:
        "Apply reading for meaning and story writing techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise reading for meaning and story writing in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for reading for meaning and story writing.",
          },
        ],
      },
      questions: [
        {
          id: "edpe1-u4-x2-q1",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract.\n\n**The Lost kitten** — Akademik Space\nPip the kitten hid under the shed when the storm began. He shivered and mewed softly until Mum lifted the lid and wrapped him in a warm towel.\n\nWhat was the weather like?",
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
                reasoning: "Answer in your own words: a storm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a storm",
          },
        },
        {
          id: "edpe1-u4-x2-q2",
          difficulty: "challenge",
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
          id: "edpe1-u4-x2-q3",
          difficulty: "foundation",
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
          id: "edpe1-u4-x2-q4",
          difficulty: "foundation",
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
          id: "edpe1-u4-x2-q5",
          difficulty: "foundation",
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
          id: "edpe1-u4-x2-q6",
          difficulty: "challenge",
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
        {
          id: "edpe1-u4-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does the capital letter go? '___at is my dog.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C" },
              { id: "b", text: "c" },
              { id: "c", text: "a" },
              { id: "d", text: "A" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Punctuation",
                statement: "Start of sentence needs a capital.",
              },
            ],
            steps: [
              {
                reasoning: "Start of sentence needs a capital.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** C",
          },
        },
        {
          id: "edpe1-u4-x2-q8",
          difficulty: "challenge",
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
          id: "edpe1-u4-x2-q9",
          difficulty: "core",
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
          id: "edpe1-u4-x2-q10",
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
      ],
    },
  ],
};
