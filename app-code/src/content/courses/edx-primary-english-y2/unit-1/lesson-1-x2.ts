import type { Lesson } from "../../../types.ts";

export const exam12: Lesson = {
  id: "edpe2-u1-exam2",
  code: "1-X2",
  title: "Exam Practice 2: Phonics and Word Reading",
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
      id: "edpe2-u1-exam2-concept",
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
          id: "edpe2-u1-x2-q1",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read the extract.\n\n**A windy day** — Akademik Space\nThe kite danced above the field, tugging so hard that Sam had to run to keep hold of the string. His cheeks burned in the cold wind.\n\nWhat was the weather like?",
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
          id: "edpe2-u1-x2-q2",
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
        {
          id: "edpe2-u1-x2-q3",
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
          id: "edpe2-u1-x2-q4",
          difficulty: "challenge",
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
          id: "edpe2-u1-x2-q5",
          difficulty: "challenge",
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
          id: "edpe2-u1-x2-q6",
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
          id: "edpe2-u1-x2-q7",
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
          id: "edpe2-u1-x2-q8",
          difficulty: "foundation",
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
          id: "edpe2-u1-x2-q9",
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
          id: "edpe2-u1-x2-q10",
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
