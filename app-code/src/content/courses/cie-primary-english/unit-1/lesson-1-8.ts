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
            { id: "a", text: "The author" },
            { id: "b", text: "Nobody" },
            { id: "c", text: "The mouse" },
            { id: "d", text: "The clock" },
          ], correctChoiceId: "c" },
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
        {
          id: "cipe-u1-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'setting' of a story?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The last page" },
            { id: "b", text: "The title" },
            { id: "c", text: "The person in the story" },
            { id: "d", text: "Where the story happens" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Setting", statement: "Where the story happens." }],
            steps: [{ reasoning: "Setting tells the place (and often time).", marks: 1, markCode: "AO1" }],
            finalAnswer: "Where the story happens",
          },
        },
        {
          id: "cipe-u1-st-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence sounds like the BEGINNING of a story?",
          response: { type: "mcq", choices: [
            { id: "a", text: "In the end, everyone was safe." },
            { id: "b", text: "The problem was finally solved." },
            { id: "c", text: "One day, a little girl found a strange box." },
            { id: "d", text: "They lived happily ever after." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story parts", statement: "Beginning introduces who and where." }],
            steps: [{ reasoning: "The beginning introduces characters and the situation.", marks: 1, markCode: "AO2" }],
            finalAnswer: "One day, a little girl found a strange box.",
          },
        },
        {
          id: "cipe-u1-st-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A story has three parts: beginning, middle and end. How many parts is that? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Story structure", statement: "Beginning, middle, end." }],
            steps: [
              { reasoning: "Beginning + middle + end = 3.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-st-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many words are in the sentence 'The cat sat'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "The-cat-sat = 3 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-st-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'Ben opened the door and saw a huge cake.' What will probably happen next?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ben will go to sleep" },
            { id: "b", text: "Ben will eat the cake" },
            { id: "c", text: "Ben will read a book" },
            { id: "d", text: "The cake will fly away" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Predicting", statement: "Use clues to guess what comes next." }],
            steps: [{ reasoning: "A huge cake suggests eating it — the most likely next event.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Ben will eat the cake",
          },
        },
        {
          id: "cipe-u1-st-q10",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Retell this story in two sentences: 'A bird built a nest. She laid three eggs.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Retelling", statement: "Say events in order." }],
            steps: [
              { reasoning: "First event: the bird built a nest.", marks: 1, markCode: "AO2" },
              { reasoning: "Second event: she laid three eggs.", marks: 1, markCode: "AO2" },
              { reasoning: "Two complete, punctuated sentences in order.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "A bird built a nest. She laid three eggs in it.",
          },
        },
        {
          id: "cipe-u1-st-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence sounds like the END of a story?",
          response: { type: "mcq", choices: [
            { id: "a", text: "First, she climbed the tree." },
            { id: "b", text: "The little mouse was safe and warm in her nest." },
            { id: "c", text: "Once upon a time…" },
            { id: "d", text: "Then the wind began to blow." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story parts", statement: "End shows how it finishes." }],
            steps: [{ reasoning: "The end shows the final result — the mouse safe.", marks: 1, markCode: "AO2" }],
            finalAnswer: "The little mouse was safe and warm in her nest.",
          },
        },
        {
          id: "cipe-u1-st-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read: 'Kim lost her teddy at the park. She looked under the slide and behind the bench. Dad found it in the long grass.' Label each part: beginning, middle, end.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story structure", statement: "Beginning sets up, middle events, end result." }],
            steps: [
              { reasoning: "Beginning: Kim lost her teddy at the park.", marks: 1, markCode: "AO1" },
              { reasoning: "Middle: she searched under the slide and behind the bench.", marks: 1, markCode: "AO1" },
              { reasoning: "End: Dad found it in the long grass.", marks: 1, markCode: "AO1" },
              { reasoning: "All three parts correctly identified.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Beginning: lost teddy; Middle: searching; End: Dad found it",
          },
        },
        {
          id: "cipe-u1-st-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'Mia and Tom went to the beach. Mia built a sandcastle. Tom swam in the sea.' How many characters (people) are named? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Identifying characters", statement: "Characters are the people or animals in the story." }],
            steps: [
              { reasoning: "Mia and Tom are the two characters.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u1-st-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is it useful to predict what will happen next when reading a story?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It helps you guess using clues and stay interested" },
            { id: "b", text: "It lets you skip the story" },
            { id: "c", text: "It is not useful" },
            { id: "d", text: "It makes the book shorter" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Predicting", statement: "Use clues to guess what comes next." }],
            steps: [{ reasoning: "Predicting keeps you engaged and checks your understanding.", marks: 1, markCode: "AO3" }],
            finalAnswer: "It helps you guess using clues and stay interested",
          },
        },
        {
          id: "cipe-u1-st-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the beginning, middle and end of your own short story about a lost animal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story writing", statement: "Structure into beginning, middle, end." }],
            steps: [
              { reasoning: "Beginning introduces the animal and setting.", marks: 1, markCode: "AO3" },
              { reasoning: "Middle describes the search or problem.", marks: 1, markCode: "AO3" },
              { reasoning: "End shows the animal found or safe.", marks: 1, markCode: "AO3" },
              { reasoning: "Sentences complete with correct punctuation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. Start: 'A cat wandered away'; Middle: 'Her owner searched everywhere'; End: 'She was found sleeping in a box.'",
          },
        },
        {
          id: "cipe-u1-st-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the three steps you would use to retell a story to a friend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Retelling", statement: "Order events: who, what, result." }],
            steps: [
              { reasoning: "Say who the story is about and where it happens.", marks: 1, markCode: "AO3" },
              { reasoning: "Say what happened in order — beginning, middle, end.", marks: 1, markCode: "AO3" },
              { reasoning: "Finish with how the story ended.", marks: 1, markCode: "AO3" },
              { reasoning: "Clear, ordered explanation given.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. introduce characters/setting; retell events in order; give the ending",
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
