import type { Lesson } from "../../../types.ts";

export const exam11: Lesson = {
  id: "edpe1-u1-exam1",
  code: "1-X1",
  title: "Exam Practice 1: Phonics and Early Reading",
  goal: "I CAN answer phonics and early reading exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Phonics and Early Reading",
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
      id: "edpe1-u1-exam1-concept",
      title: "Phonics and Early Reading — exam practice",
      skill:
        "Apply phonics and early reading techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise phonics and early reading in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for phonics and early reading.",
          },
        ],
      },
      questions: [
        {
          id: "edpe1-u1-x1-q1",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read the extract.\n\n**The Lost kitten** — Akademik Space\nPip the kitten hid under the shed when the storm began. He shivered and mewed softly until Mum lifted the lid and wrapped him in a warm towel.\n\nWhere did Pip hide?",
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
          id: "edpe1-u1-x1-q2",
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
          id: "edpe1-u1-x1-q3",
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
          id: "edpe1-u1-x1-q4",
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
          id: "edpe1-u1-x1-q5",
          difficulty: "challenge",
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
          id: "edpe1-u1-x1-q6",
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
          id: "edpe1-u1-x1-q7",
          difficulty: "core",
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
          id: "edpe1-u1-x1-q8",
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
          id: "edpe1-u1-x1-q9",
          difficulty: "challenge",
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
          id: "edpe1-u1-x1-q10",
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
