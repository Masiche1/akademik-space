import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edpe5-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Author's Craft, Persuasive Writing and Editing",
  goal: "I CAN answer author's craft, persuasive writing and editing exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Author's Craft, Persuasive Writing and Editing",
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
      id: "edpe5-u4-exam4-concept",
      title: "Author's Craft, Persuasive Writing and Editing — exam practice",
      skill:
        "Apply author's craft, persuasive writing and editing techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise author's craft, persuasive writing and editing in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for author's craft, persuasive writing and editing.",
          },
        ],
      },
      questions: [
        {
          id: "edpe5-u4-x4-q1",
          difficulty: "foundation",
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
          id: "edpe5-u4-x4-q2",
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
          id: "edpe5-u4-x4-q3",
          difficulty: "challenge",
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
          id: "edpe5-u4-x4-q4",
          difficulty: "challenge",
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
          id: "edpe5-u4-x4-q5",
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
          id: "edpe5-u4-x4-q6",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Choose the correct tense: 'By the time we arrived, the film ___.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "had started" },
              { id: "b", text: "has started" },
              { id: "c", text: "starts" },
              { id: "d", text: "is starting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "Past perfect for earlier past action.",
              },
            ],
            steps: [
              {
                reasoning: "Past perfect for earlier past action.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** had started",
          },
        },
        {
          id: "edpe5-u4-x4-q7",
          difficulty: "foundation",
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
          id: "edpe5-u4-x4-q8",
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
          id: "edpe5-u4-x4-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract.\n\n**A Letter Home** — Akademik Space\nDear Mum, the camp is brilliant. Yesterday we built a raft and raced it across the lake. Mine sank first, but everyone cheered anyway. Write soon! Love, Jo.\n\nHow does Tomas feel about his duty?",
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
        {
          id: "edpe5-u4-x4-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct tense: 'By the time we arrived, the film ___.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "had started" },
              { id: "b", text: "has started" },
              { id: "c", text: "starts" },
              { id: "d", text: "is starting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Grammar",
                statement: "Past perfect for earlier past action.",
              },
            ],
            steps: [
              {
                reasoning: "Past perfect for earlier past action.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** had started",
          },
        },
      ],
    },
  ],
};
