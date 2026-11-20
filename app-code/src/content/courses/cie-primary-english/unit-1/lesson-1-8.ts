import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "cipe-u1-lesson-1-8",
  code: "1-8",
  title: "Stage 2 — Reading Simple Stories",
  goal: "I CAN read simple stories and talk about what happens.",
  standards: ["Cambridge Primary English 0058 Stage 2: reading",
  "Cambridge Primary English 0058 framework substrands: 2Ri, 2Ra, 2Rs"],
  stage: 2,
  vocabulary: [
    { term: "Story", definition: "A telling of events, often with characters." },
    { term: "Character", definition: "A person or animal in a story." },
    { term: "Beginning/middle/end", definition: "The three parts of a story." },
    { term: "Predict", definition: "Guess what will happen next." },
    { term: "Retell", definition: "Say the story again in your own words." },
  ],
  concepts: [
    {
      id: "cipe-u1-s8-stories",
      title: "Reading and retelling simple stories",
      skill: "Read decodable stories, identify characters and sequence events at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Parts of a story",
            body: "Every story has a beginning (who and where), a middle (what happens), and an end (how it finishes). Characters are the people or animals; the setting is where it happens. Spotting these parts helps you understand and retell the story.",
          },
          {
            heading: "Understanding stories",
            body: "Read each page carefully, then retell what happened in order. Predict what might happen next using clues — 'the sky is dark, so it might rain'. Talk about favourite parts and why characters act the way they do.",
          },
        ],
        keyFormulas: [
          { name: "Story parts", statement: "Beginning → middle → end" },
          { name: "Retell", statement: "Who, where, what happened, in order" },
        ],
        workedExample: {
          problem: "A story: 'Tom lost his dog. He looked everywhere. He found it under the bed.' What are the beginning, middle and end?",
          solution: "Beginning: Tom lost his dog. Middle: He looked everywhere. End: He found it under the bed.",
        },
      },
      questions: [
        {
          id: "cipe-u1-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who is the character in this story? 'A mouse ran up the clock.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "The clock" }, { id: "b", text: "The mouse" }, { id: "c", text: "Nobody" }, { id: "d", text: "The author" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Character", statement: "Person or animal in the story." }],
            steps: [{ reasoning: "The mouse is the character.", marks: 1, markCode: "AO1" }],
            finalAnswer: "The mouse",
          },
        },
        {
          id: "cipe-u1-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the three parts of a story called?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Story structure", statement: "Beginning, middle, end." }],
            steps: [
              { reasoning: "Beginning sets it up.", marks: 1, markCode: "AO1" },
              { reasoning: "Middle and end complete it.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Beginning, middle, end",
          },
        },
        {
          id: "cipe-u1-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Retell this story in three sentences: 'Sam planted a seed. He watered it daily. A flower grew.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Retelling", statement: "Say events in order." }],
            steps: [
              { reasoning: "First event: planted seed.", marks: 1, markCode: "AO2" },
              { reasoning: "Second: watered it.", marks: 1, markCode: "AO2" },
              { reasoning: "Third: flower grew — order kept.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Sam planted a seed, watered it every day, and a flower grew.",
          },
        },
        {
          id: "cipe-u1-st-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A story says 'The little boat sailed into dark clouds.' Predict what might happen next and give a reason.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Predicting", statement: "Use clues to guess what comes next." }],
            steps: [
              { reasoning: "Dark clouds suggest rain or storm.", marks: 1, markCode: "AO2" },
              { reasoning: "Prediction matches the clue.", marks: 1, markCode: "AO2" },
              { reasoning: "Reason given for the guess.", marks: 1, markCode: "AO3" },
              { reasoning: "Coherent answer.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'It might rain because dark clouds mean rain is coming.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-st-notes",
      title: "Reading stories — revision notes",
      summary: "Beginning/middle/end; characters; retell in order; predict from clues.",
      sections: [
        { heading: "Structure", body: "Spot who/where (beginning), events (middle), result (end)." },
        { heading: "Understanding", body: "Retell in order; predict using clues in the text." },
      ],
    },
  ],
};
