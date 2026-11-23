import type { Lesson } from "../../../types.ts";

export const exam45: Lesson = {
  id: "edpe6-u4-exam5",
  code: "4-X5",
  title:
    "Exam Practice 5: Critical Analysis, Formal Writing and Advanced Narrative",
  goal: "I CAN answer critical analysis, formal writing and advanced narrative exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Critical Analysis, Formal Writing and Advanced Narrative",
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
      id: "edpe6-u4-exam5-concept",
      title:
        "Critical Analysis, Formal Writing and Advanced Narrative — exam practice",
      skill:
        "Apply critical analysis, formal writing and advanced narrative techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise critical analysis, formal writing and advanced narrative in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for critical analysis, formal writing and advanced narrative.",
          },
        ],
      },
      questions: [
        {
          id: "edpe6-u4-x5-q1",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract.\n\n**A Letter Home** — Akademik Space\nDear Mum, the camp is brilliant. Yesterday we built a raft and raced it across the lake. Mine sank first, but everyone cheered anyway. Write soon! Love, Jo.\n\nWhat does the raft race tell us about Jo's attitude?",
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
                  "Answer in your own words: she is cheerful and doesn't mind losing — everyone cheered.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "she is cheerful and doesn't mind losing — everyone cheered",
          },
        },
        {
          id: "edpe6-u4-x5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word is a subordinating conjunction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "although" },
              { id: "b", text: "and" },
              { id: "c", text: "but" },
              { id: "d", text: "or" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Although' introduces a subordinate clause.",
              },
            ],
            steps: [
              {
                reasoning: "'Although' introduces a subordinate clause.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** although",
          },
        },
        {
          id: "edpe6-u4-x5-q3",
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
          id: "edpe6-u4-x5-q4",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the opening of a story. Include a character, a setting and an action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "Start with who, where, what happens.",
              },
            ],
            steps: [
              { reasoning: "Character introduced", marks: 1, markCode: "A" },
              { reasoning: "Setting described", marks: 1, markCode: "A" },
              { reasoning: "Action/event begins", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Start with who, where, what happens.",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe6-u4-x5-q5",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Read the extract.\n\n**A Letter Home** — Akademik Space\nDear Mum, the camp is brilliant. Yesterday we built a raft and raced it across the lake. Mine sank first, but everyone cheered anyway. Write soon! Love, Jo.\n\nWhy did Tomas climb the stairs every evening?",
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
                  "Answer in your own words: to light the lamp that guided ships.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "to light the lamp that guided ships",
          },
        },
        {
          id: "edpe6-u4-x5-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a subordinating conjunction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "although" },
              { id: "b", text: "and" },
              { id: "c", text: "but" },
              { id: "d", text: "or" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Although' introduces a subordinate clause.",
              },
            ],
            steps: [
              {
                reasoning: "'Although' introduces a subordinate clause.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** although",
          },
        },
        {
          id: "edpe6-u4-x5-q7",
          difficulty: "challenge",
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
          id: "edpe6-u4-x5-q8",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a paragraph (3-4 sentences) describing a rainy day. Include one simile.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "e.g. 'The rain fell like tiny drums.'",
              },
            ],
            steps: [
              {
                reasoning: "Paragraph with 3-4 sentences",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "One simile (like/as)", marks: 1, markCode: "A" },
              { reasoning: "Interesting vocabulary", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'The rain fell like tiny drums.'",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe6-u4-x5-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract.\n\n**The Lighthouse Keeper** — Akademik Space\nEvery evening, Tomas climbed the spiral stairs to light the lamp. Ships depended on that steady beam to find the rocks. He took pride in his duty, though the nights were long and lonely.\n\nHow does Tomas feel about his duty?",
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
                  "Answer in your own words: he takes pride in it, though the nights are long and lonely.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "he takes pride in it, though the nights are long and lonely",
          },
        },
      ],
    },
  ],
};
