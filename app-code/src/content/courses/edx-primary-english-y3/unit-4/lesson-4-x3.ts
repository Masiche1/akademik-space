import type { Lesson } from "../../../types.ts";

export const exam43: Lesson = {
  id: "edpe3-u4-exam3",
  code: "4-X3",
  title: "Exam Practice 3: Poetry, Plays and Formal Writing",
  goal: "I CAN answer poetry, plays and formal writing exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Poetry, Plays and Formal Writing",
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
      id: "edpe3-u4-exam3-concept",
      title: "Poetry, Plays and Formal Writing — exam practice",
      skill:
        "Apply poetry, plays and formal writing techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise poetry, plays and formal writing in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for poetry, plays and formal writing.",
          },
        ],
      },
      questions: [
        {
          id: "edpe3-u4-x3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read the extract.\n\n**Grandad's Boat** — Akademik Space\nGrandad keeps his old fishing boat in the garage. He says the sea taught him patience: you wait for the fish, and sometimes you wait all day. But when a bite comes, he never misses it.\n\nWhy did Sam have to run?",
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
                reasoning:
                  "Answer in your own words: the kite tugged so hard he had to keep hold of the string.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "the kite tugged so hard he had to keep hold of the string",
          },
        },
        {
          id: "edpe3-u4-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is an adjective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "bright" },
              { id: "b", text: "brightly" },
              { id: "c", text: "brightness" },
              { id: "d", text: "brighten" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Bright' describes a noun.",
              },
            ],
            steps: [
              {
                reasoning: "'Bright' describes a noun.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** bright",
          },
        },
        {
          id: "edpe3-u4-x3-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence punctuates speech correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: 'She said, "Hello."' },
              { id: "b", text: 'She said "Hello".' },
              { id: "c", text: 'She said, "Hello"' },
              { id: "d", text: 'She said "Hello."' },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Punctuation",
                statement: "Comma before speech, full stop inside quotes.",
              },
            ],
            steps: [
              {
                reasoning: "Comma before speech, full stop inside quotes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: '**(a)** She said, "Hello."',
          },
        },
        {
          id: "edpe3-u4-x3-q4",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence using the joining word 'because'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "e.g. 'I stayed inside because it was raining.'",
              },
            ],
            steps: [
              { reasoning: "Sentence with because", marks: 1, markCode: "A" },
              { reasoning: "Correct punctuation", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'I stayed inside because it was raining.'",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe3-u4-x3-q5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract.\n\n**The School Fete** — Akademik Space\nEvery summer the school holds a fete on the playing field. There are stalls selling cakes, a tombola, and a tug-of-war. Last year our class won first prize for the best-decorated stall.\n\nWhat prize did the class win?",
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
                reasoning:
                  "Answer in your own words: first prize for the best-decorated stall.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "first prize for the best-decorated stall",
          },
        },
        {
          id: "edpe3-u4-x3-q6",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which word is an adjective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "bright" },
              { id: "b", text: "brightly" },
              { id: "c", text: "brightness" },
              { id: "d", text: "brighten" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Bright' describes a noun.",
              },
            ],
            steps: [
              {
                reasoning: "'Bright' describes a noun.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** bright",
          },
        },
        {
          id: "edpe3-u4-x3-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence uses an apostrophe correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog's bone is buried." },
              { id: "b", text: "The dogs' bone is buried." },
              { id: "c", text: "The dogs bone is buried." },
              { id: "d", text: "The do'gs bone is buried." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Punctuation",
                statement: "One dog → dog's.",
              },
            ],
            steps: [{ reasoning: "One dog → dog's.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The dog's bone is buried.",
          },
        },
        {
          id: "edpe3-u4-x3-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence using the joining word 'because'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "e.g. 'I stayed inside because it was raining.'",
              },
            ],
            steps: [
              { reasoning: "Sentence with because", marks: 1, markCode: "A" },
              { reasoning: "Correct punctuation", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'I stayed inside because it was raining.'",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe3-u4-x3-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read the extract.\n\n**The School Fete** — Akademik Space\nEvery summer the school holds a fete on the playing field. There are stalls selling cakes, a tombola, and a tug-of-war. Last year our class won first prize for the best-decorated stall.\n\nWhat prize did the class win?",
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
                reasoning:
                  "Answer in your own words: first prize for the best-decorated stall.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "first prize for the best-decorated stall",
          },
        },
        {
          id: "edpe3-u4-x3-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word is an adjective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "bright" },
              { id: "b", text: "brightly" },
              { id: "c", text: "brightness" },
              { id: "d", text: "brighten" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Bright' describes a noun.",
              },
            ],
            steps: [
              {
                reasoning: "'Bright' describes a noun.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** bright",
          },
        },
      ],
    },
  ],
};
