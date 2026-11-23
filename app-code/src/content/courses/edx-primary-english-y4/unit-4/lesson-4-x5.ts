import type { Lesson } from "../../../types.ts";

export const exam45: Lesson = {
  id: "edpe4-u4-exam5",
  code: "4-X5",
  title: "Exam Practice 5: Poetry, Descriptive Writing and Arguments",
  goal: "I CAN answer poetry, descriptive writing and arguments exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Poetry, Descriptive Writing and Arguments",
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
      id: "edpe4-u4-exam5-concept",
      title: "Poetry, Descriptive Writing and Arguments — exam practice",
      skill:
        "Apply poetry, descriptive writing and arguments techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise poetry, descriptive writing and arguments in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for poetry, descriptive writing and arguments.",
          },
        ],
      },
      questions: [
        {
          id: "edpe4-u4-x5-q1",
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
        {
          id: "edpe4-u4-x5-q2",
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
          id: "edpe4-u4-x5-q3",
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
          id: "edpe4-u4-x5-q4",
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
          id: "edpe4-u4-x5-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read the extract.\n\n**The School Fete** — Akademik Space\nEvery summer the school holds a fete on the playing field. There are stalls selling cakes, a tombola, and a tug-of-war. Last year our class won first prize for the best-decorated stall.\n\nWhat did Grandad learn from fishing?",
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
          id: "edpe4-u4-x5-q6",
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
          id: "edpe4-u4-x5-q7",
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
          id: "edpe4-u4-x5-q8",
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
      ],
    },
  ],
};
