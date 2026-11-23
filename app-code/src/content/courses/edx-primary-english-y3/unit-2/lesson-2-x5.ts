import type { Lesson } from "../../../types.ts";

export const exam25: Lesson = {
  id: "edpe3-u2-exam5",
  code: "2-X5",
  title: "Exam Practice 5: Comprehension Skills",
  goal: "I CAN answer comprehension skills exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Comprehension Skills",
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
      id: "edpe3-u2-exam5-concept",
      title: "Comprehension Skills — exam practice",
      skill: "Apply comprehension skills techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise comprehension skills in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for comprehension skills.",
          },
        ],
      },
      questions: [
        {
          id: "edpe3-u2-x5-q1",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read the extract.\n\n**Grandad's Boat** — Akademik Space\nGrandad keeps his old fishing boat in the garage. He says the sea taught him patience: you wait for the fish, and sometimes you wait all day. But when a bite comes, he never misses it.\n\nWhat did Grandad learn from fishing?",
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
                  "Answer in your own words: patience — you wait for the fish.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "patience — you wait for the fish",
          },
        },
        {
          id: "edpe3-u2-x5-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Choose the correct verb form: 'They ___ to school every day.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "walk" },
              { id: "b", text: "walks" },
              { id: "c", text: "walking" },
              { id: "d", text: "walked" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "Plural subject needs 'walk'.",
              },
            ],
            steps: [
              {
                reasoning: "Plural subject needs 'walk'.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** walk",
          },
        },
        {
          id: "edpe3-u2-x5-q3",
          difficulty: "core",
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
          id: "edpe3-u2-x5-q4",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two sentences about your favourite food, starting with a capital and ending with a full stop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "Describe taste, texture or where you eat it.",
              },
            ],
            steps: [
              { reasoning: "Two complete sentences", marks: 1, markCode: "A" },
              { reasoning: "Correct punctuation", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Describe taste, texture or where you eat it.",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe3-u2-x5-q5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract.\n\n**Grandad's Boat** — Akademik Space\nGrandad keeps his old fishing boat in the garage. He says the sea taught him patience: you wait for the fish, and sometimes you wait all day. But when a bite comes, he never misses it.\n\nWhat prize did the class win?",
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
          id: "edpe3-u2-x5-q6",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Choose the correct verb form: 'They ___ to school every day.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "walk" },
              { id: "b", text: "walks" },
              { id: "c", text: "walking" },
              { id: "d", text: "walked" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "Plural subject needs 'walk'.",
              },
            ],
            steps: [
              {
                reasoning: "Plural subject needs 'walk'.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** walk",
          },
        },
        {
          id: "edpe3-u2-x5-q7",
          difficulty: "foundation",
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
          id: "edpe3-u2-x5-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write two sentences about your favourite food, starting with a capital and ending with a full stop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "Describe taste, texture or where you eat it.",
              },
            ],
            steps: [
              { reasoning: "Two complete sentences", marks: 1, markCode: "A" },
              { reasoning: "Correct punctuation", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Describe taste, texture or where you eat it.",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe3-u2-x5-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract.\n\n**Grandad's Boat** — Akademik Space\nGrandad keeps his old fishing boat in the garage. He says the sea taught him patience: you wait for the fish, and sometimes you wait all day. But when a bite comes, he never misses it.\n\nWhat did Grandad learn from fishing?",
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
                  "Answer in your own words: patience — you wait for the fish.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "patience — you wait for the fish",
          },
        },
      ],
    },
  ],
};
