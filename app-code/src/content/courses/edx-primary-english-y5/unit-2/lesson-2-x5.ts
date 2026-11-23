import type { Lesson } from "../../../types.ts";

export const exam25: Lesson = {
  id: "edpe5-u2-exam5",
  code: "2-X5",
  title: "Exam Practice 5: Reading Comprehension",
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
      id: "edpe5-u2-exam5-concept",
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
          id: "edpe5-u2-x5-q1",
          difficulty: "core",
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
          id: "edpe5-u2-x5-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is in the passive voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cake was baked by Sam." },
              { id: "b", text: "Sam baked the cake." },
              { id: "c", text: "Sam is baking a cake." },
              { id: "d", text: "The cake bakes quickly." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Was baked' makes the object the subject.",
              },
            ],
            steps: [
              {
                reasoning: "'Was baked' makes the object the subject.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** The cake was baked by Sam.",
          },
        },
        {
          id: "edpe5-u2-x5-q3",
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
          id: "edpe5-u2-x5-q4",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite this in the past tense: 'I walk to school and I see my friend.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing",
                statement: "walk→walked, see→saw.",
              },
            ],
            steps: [
              { reasoning: "All verbs in past tense", marks: 1, markCode: "A" },
              { reasoning: "Correct spelling", marks: 1, markCode: "A" },
            ],
            finalAnswer: "walk→walked, see→saw.",
            commonErrors: ["Missing punctuation or incomplete sentences."],
          },
        },
        {
          id: "edpe5-u2-x5-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract.\n\n**The Lighthouse Keeper** — Akademik Space\nEvery evening, Tomas climbed the spiral stairs to light the lamp. Ships depended on that steady beam to find the rocks. He took pride in his duty, though the nights were long and lonely.\n\nWhy did Tomas climb the stairs every evening?",
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
          id: "edpe5-u2-x5-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is in the passive voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cake was baked by Sam." },
              { id: "b", text: "Sam baked the cake." },
              { id: "c", text: "Sam is baking a cake." },
              { id: "d", text: "The cake bakes quickly." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Was baked' makes the object the subject.",
              },
            ],
            steps: [
              {
                reasoning: "'Was baked' makes the object the subject.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** The cake was baked by Sam.",
          },
        },
        {
          id: "edpe5-u2-x5-q7",
          difficulty: "foundation",
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
          id: "edpe5-u2-x5-q8",
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
          id: "edpe5-u2-x5-q9",
          difficulty: "challenge",
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
          id: "edpe5-u2-x5-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence is in the passive voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cake was baked by Sam." },
              { id: "b", text: "Sam baked the cake." },
              { id: "c", text: "Sam is baking a cake." },
              { id: "d", text: "The cake bakes quickly." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "'Was baked' makes the object the subject.",
              },
            ],
            steps: [
              {
                reasoning: "'Was baked' makes the object the subject.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** The cake was baked by Sam.",
          },
        },
      ],
    },
  ],
};
