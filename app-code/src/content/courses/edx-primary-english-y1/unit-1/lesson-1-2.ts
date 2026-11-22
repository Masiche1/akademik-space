import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edpe1-u1-lesson-1-2",
  code: "1-2",
  title: "Tricky Words and Reading Sentences",
  goal: "I CAN read tricky words and simple sentences.",
  standards: ["Year 1 Phonics"],
  vocabulary: [
    {
      term: "Tricky word",
      definition:
        "A word we can't sound out, we just learn it: the, was, said.",
    },
    {
      term: "Sentence",
      definition: "A group of words that makes sense and tells something.",
    },
    {
      term: "Word",
      definition: "A group of letters with meaning, separated by spaces.",
    },
    { term: "Fluency", definition: "Reading smoothly and with expression." },
  ],
  concepts: [
    {
      id: "edpe1-u1-tricky",
      title: "Tricky words",
      skill: "Read and spell common tricky words.",
      lesson: {
        sections: [
          {
            heading: "What makes a word tricky?",
            body: "Some words don't follow phonics rules. 'The' isn't /t-h-e/ — we just learn it by sight. Tricky words include: the, was, said, they, my, come, some, have, here, there.",
          },
          {
            heading: "Learning tricky words",
            body: "Look at the word, say it, spell it, use it in a sentence. Practise a few at a time. Flashcards help — cover the word, say it, then check.",
          },
        ],
        keyFormulas: [
          {
            name: "Tricky word",
            statement: "Learn by sight, not sounding out",
          },
          {
            name: "Sentence use",
            statement: "Use the word correctly in context",
          },
        ],
        workedExample: {
          problem: "Read this sentence: 'The cat sat on the mat.'",
          solution: "The cat sat on the mat.",
        },
      },
      questions: [
        {
          id: "edpe1-u1-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a tricky word?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cat" },
              { id: "b", text: "sun" },
              { id: "c", text: "the" },
              { id: "d", text: "dog" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tricky word",
                statement: "'the' is learned by sight.",
              },
            ],
            steps: [
              {
                reasoning: "'the' doesn't follow phonics rules.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** the",
            commonErrors: ["Choosing 'cat' — it can be sounded out normally."],
          },
        },
        {
          id: "edpe1-u1-tr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read this sentence aloud in your head: 'They went to the shop.' How many words are in it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "4" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence structure",
                statement: "They/went/to/the/shop = 5 words.",
              },
            ],
            steps: [
              {
                reasoning: "Count words separated by spaces.",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Counting 'the' as part of another word."],
          },
        },
        {
          id: "edpe1-u1-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Fill in the tricky word: '___ went to the park.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tricky words",
                statement: "They went to the park.",
              },
            ],
            steps: [
              {
                reasoning: "Identify missing word makes sense.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "'They' completes the sentence.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Correct spelling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They",
            commonErrors: [
              "Writing 'thay' — must spell tricky words correctly.",
            ],
          },
        },
        {
          id: "edpe1-u1-tr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a sentence using the tricky word 'was'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence writing",
                statement:
                  "Sentence uses 'was' correctly with capital letter and full stop.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence contains 'was' used correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Starts with capital letter.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Ends with full stop.", marks: 1, markCode: "A" },
              {
                reasoning: "Makes sense and is a complete sentence.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "e.g. 'The dog was happy.'",
            commonErrors: [
              "Using 'was' incorrectly or forgetting punctuation.",
            ],
          },
        },
      ],
    },
    {
      id: "edpe1-u1-reading",
      title: "Reading simple sentences",
      skill: "Read and understand simple sentences and questions.",
      lesson: {
        sections: [
          {
            heading: "Reading with meaning",
            body: "Reading isn't just saying words — it's understanding them. After reading a sentence, ask: what does it mean? 'The dog ran fast' tells us the dog moved quickly.",
          },
          {
            heading: "Questions and answers",
            body: "Questions often start with who, what, where, when, why, how. 'Where is the cat?' — the answer tells us a place. Find the answer in the text.",
          },
        ],
        keyFormulas: [
          {
            name: "Question words",
            statement: "who, what, where, when, why, how",
          },
          { name: "Comprehension", statement: "Read → understand → answer" },
        ],
        workedExample: {
          problem: "Read: 'Sam has a red ball.' Where is the ball?",
          solution: "We don't know where — only that Sam has a red ball.",
        },
      },
      questions: [
        {
          id: "edpe1-u1-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Read: 'The bird is in the tree.' What is in the tree?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A dog" },
              { id: "b", text: "A fish" },
              { id: "c", text: "A bird" },
              { id: "d", text: "A cat" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retrieval",
                statement: "Text says 'bird is in the tree'.",
              },
            ],
            steps: [
              { reasoning: "Find answer in text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A bird",
            commonErrors: ["Guessing without checking text."],
          },
        },
        {
          id: "edpe1-u1-re-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'Mum is cooking dinner.' What is Mum doing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Playing" },
              { id: "b", text: "Reading" },
              { id: "c", text: "Cooking dinner" },
              { id: "d", text: "Sleeping" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retrieval",
                statement: "Text says 'cooking dinner'.",
              },
            ],
            steps: [
              { reasoning: "Find what Mum is doing.", marks: 1, markCode: "B" },
              { reasoning: "Answer: cooking dinner.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Cooking dinner",
            commonErrors: ["Not reading carefully — picking wrong activity."],
          },
        },
        {
          id: "edpe1-u1-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'It is raining outside.' Is it sunny or rainy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Rainy — text says 'raining'.",
              },
            ],
            steps: [
              {
                reasoning: "Identify weather described.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: rainy.", marks: 1, markCode: "A" },
              { reasoning: "Based on text evidence.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Rainy",
            commonErrors: ["Saying sunny — opposite of what text says."],
          },
        },
        {
          id: "edpe1-u1-re-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read this story starter: 'Tom found a shiny box in the garden. He opened it carefully.'",
          parts: [
            { label: "a", prompt: "Where did Tom find the box?", marks: 1 },
            { label: "b", prompt: "What was special about the box?", marks: 1 },
            { label: "c", prompt: "What did Tom do next?", marks: 1 },
            {
              label: "d",
              prompt: "Write one sentence about what might be inside the box.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comprehension",
                statement:
                  "Garden; shiny; opened carefully; prediction about contents.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "In the garden.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "It was shiny.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "He opened it carefully.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Reasonable prediction using text clues.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Garden; shiny; opened carefully; e.g. 'Maybe it had a toy.'",
            commonErrors: [
              "For part (d): answers unrelated to 'shiny box' clue.",
            ],
          },
        },
      ],
    },
  ],
};
