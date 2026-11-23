import type { Lesson } from "../../../types.ts";

export const exam15: Lesson = {
  id: "edpe4-u1-exam5",
  code: "1-X5",
  title: "Exam Practice 5: Spelling and Word Knowledge",
  goal: "I CAN answer spelling and word knowledge exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Spelling and Word Knowledge",
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
      id: "edpe4-u1-exam5-concept",
      title: "Spelling and Word Knowledge — exam practice",
      skill:
        "Apply spelling and word knowledge techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise spelling and word knowledge in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for spelling and word knowledge.",
          },
        ],
      },
      questions: [
        {
          id: "edpe4-u1-x5-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read the extract.\n\n**The School Fete** — Akademik Space\nEvery summer the school holds a fete on the playing field. There are stalls selling cakes, a tombola, and a tug-of-war. Last year our class won first prize for the best-decorated stall.\n\nWhy did Sam have to run?",
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
          id: "edpe4-u1-x5-q2",
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
          id: "edpe4-u1-x5-q3",
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
          id: "edpe4-u1-x5-q4",
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
          id: "edpe4-u1-x5-q5",
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
          id: "edpe4-u1-x5-q6",
          difficulty: "core",
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
          id: "edpe4-u1-x5-q7",
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
          id: "edpe4-u1-x5-q8",
          difficulty: "core",
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
      ],
    },
  ],
};
