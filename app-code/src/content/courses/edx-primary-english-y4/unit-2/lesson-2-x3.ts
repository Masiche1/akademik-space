import type { Lesson } from "../../../types.ts";

export const exam23: Lesson = {
  id: "edpe4-u2-exam3",
  code: "2-X3",
  title: "Exam Practice 3: Reading Comprehension",
  goal: "I CAN answer reading comprehension exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Reading Comprehension",
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
      id: "edpe4-u2-exam3-concept",
      title: "Reading Comprehension — exam practice",
      skill: "Apply reading comprehension techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise reading comprehension in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for reading comprehension.",
          },
        ],
      },
      questions: [
        {
          id: "edpe4-u2-x3-q1",
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
          id: "edpe4-u2-x3-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence uses a joining word correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I stayed home because it rained." },
              { id: "b", text: "I stayed home, it rained." },
              { id: "c", text: "I stayed home it, rained." },
              { id: "d", text: "I stayed home because, it rained." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Because' joins the two clauses.",
              },
            ],
            steps: [
              {
                reasoning: "'Because' joins the two clauses.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** I stayed home because it rained.",
          },
        },
        {
          id: "edpe4-u2-x3-q3",
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
          id: "edpe4-u2-x3-q4",
          difficulty: "challenge",
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
          id: "edpe4-u2-x3-q5",
          difficulty: "challenge",
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
          id: "edpe4-u2-x3-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses a joining word correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I stayed home because it rained." },
              { id: "b", text: "I stayed home, it rained." },
              { id: "c", text: "I stayed home it, rained." },
              { id: "d", text: "I stayed home because, it rained." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Because' joins the two clauses.",
              },
            ],
            steps: [
              {
                reasoning: "'Because' joins the two clauses.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** I stayed home because it rained.",
          },
        },
        {
          id: "edpe4-u2-x3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct punctuation: 'After lunch ___ we played football.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "—" },
              { id: "b", text: "," },
              { id: "c", text: "." },
              { id: "d", text: "?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Punctuation",
                statement: "Dash marks an aside/pause.",
              },
            ],
            steps: [
              {
                reasoning: "Dash marks an aside/pause.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** —",
          },
        },
        {
          id: "edpe4-u2-x3-q8",
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
          id: "edpe4-u2-x3-q9",
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
          id: "edpe4-u2-x3-q10",
          difficulty: "foundation",
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
      ],
    },
  ],
};
