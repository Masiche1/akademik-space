import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edpe2-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Comprehension, Grammar and Story Writing",
  goal: "I CAN answer comprehension, grammar and story writing exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Comprehension, Grammar and Story Writing",
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
      id: "edpe2-u4-exam4-concept",
      title: "Comprehension, Grammar and Story Writing — exam practice",
      skill:
        "Apply comprehension, grammar and story writing techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise comprehension, grammar and story writing in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for comprehension, grammar and story writing.",
          },
        ],
      },
      questions: [
        {
          id: "edpe2-u4-x4-q1",
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
          id: "edpe2-u4-x4-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word names a person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "teacher" },
              { id: "b", text: "quickly" },
              { id: "c", text: "because" },
              { id: "d", text: "their" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Teacher' is a noun naming a person.",
              },
            ],
            steps: [
              {
                reasoning: "'Teacher' is a noun naming a person.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** teacher",
          },
        },
        {
          id: "edpe2-u4-x4-q3",
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
          id: "edpe2-u4-x4-q4",
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
          id: "edpe2-u4-x4-q5",
          difficulty: "foundation",
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
          id: "edpe2-u4-x4-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word names a person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "teacher" },
              { id: "b", text: "quickly" },
              { id: "c", text: "because" },
              { id: "d", text: "their" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Teacher' is a noun naming a person.",
              },
            ],
            steps: [
              {
                reasoning: "'Teacher' is a noun naming a person.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** teacher",
          },
        },
        {
          id: "edpe2-u4-x4-q7",
          difficulty: "challenge",
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
          id: "edpe2-u4-x4-q8",
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
          id: "edpe2-u4-x4-q9",
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
          id: "edpe2-u4-x4-q10",
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
