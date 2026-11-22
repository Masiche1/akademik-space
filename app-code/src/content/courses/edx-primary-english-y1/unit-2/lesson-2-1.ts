import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edpe1-u2-lesson-2-1",
  code: "2-1",
  title: "Story Elements: Characters and Settings",
  goal: "I CAN identify characters and settings in stories.",
  standards: ["Year 1 Reading"],
  vocabulary: [
    { term: "Character", definition: "A person or animal in a story." },
    { term: "Setting", definition: "Where and when the story happens." },
    { term: "Plot", definition: "What happens in the story." },
    { term: "Narrator", definition: "The voice telling the story." },
  ],
  concepts: [
    {
      id: "edpe1-u2-characters",
      title: "Characters",
      skill: "Identify and describe characters in stories.",
      lesson: {
        sections: [
          {
            heading: "Who is in the story?",
            body: "Characters are the people or animals in a story. In 'Goldilocks', the characters are Goldilocks and the three bears. Some stories have animals as characters, like in 'The Very Hungry Caterpillar'.",
          },
          {
            heading: "Describing characters",
            body: "Characters have feelings and actions. Ask: what do they do? how do they feel? 'The little mouse was scared' tells us about the character. Look for words that describe them.",
          },
        ],
        keyFormulas: [
          { name: "Character", statement: "Person or animal in a story" },
          {
            name: "Character traits",
            statement: "What they do and how they feel",
          },
        ],
        workedExample: {
          problem: "In 'The Three Little Pigs', who are the characters?",
          solution: "Three pigs and a big bad wolf.",
        },
      },
      questions: [
        {
          id: "edpe1-u2-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'Cinderella', who is the main character?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cinderella" },
              { id: "b", text: "The stepmother" },
              { id: "c", text: "The fairy godmother" },
              { id: "d", text: "The prince" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Main character",
                statement: "Cinderella is the protagonist.",
              },
            ],
            steps: [
              {
                reasoning: "Title names the main character.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Cinderella",
            commonErrors: ["Choosing the prince — supporting character."],
          },
        },
        {
          id: "edpe1-u2-ch-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'The scared rabbit hid under the bush.' How does the rabbit feel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sleepy" },
              { id: "b", text: "Angry" },
              { id: "c", text: "Happy" },
              { id: "d", text: "Scared" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character feelings",
                statement: "Text says 'scared'.",
              },
            ],
            steps: [
              { reasoning: "Find feeling word.", marks: 1, markCode: "M" },
              { reasoning: "Answer: scared.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Scared",
            commonErrors: ["Guessing a different feeling."],
          },
        },
        {
          id: "edpe1-u2-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List two characters from 'The Very Hungry Caterpillar'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Characters",
                statement: "Caterpillar, butterfly, fish, bird etc.",
              },
            ],
            steps: [
              {
                reasoning: "Recall story characters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two valid characters given.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Caterpillar, butterfly (or fish, bird)",
            commonErrors: ["Naming objects not characters."],
          },
        },
        {
          id: "edpe1-u2-ch-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read: 'Max the dog loved to run in the park. One day he ran so fast he fell over.'",
          parts: [
            { label: "a", prompt: "Who is the character?", marks: 1 },
            { label: "b", prompt: "What does Max love to do?", marks: 1 },
            { label: "c", prompt: "What happened at the end?", marks: 1 },
            {
              label: "d",
              prompt: "What does this tell us about Max?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character analysis",
                statement:
                  "Max; runs in park; fell over; energetic/loves running.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Max the dog.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Run in the park.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "He fell over.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Energetic, loves to run.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Max; run in park; fell over; energetic",
            commonErrors: ["For (d): repeating facts not inferring trait."],
          },
        },
      ],
    },
    {
      id: "edpe1-u2-settings",
      title: "Settings",
      skill: "Identify where and when stories happen.",
      lesson: {
        sections: [
          {
            heading: "Where and when?",
            body: "The setting is where and when the story happens. 'Once upon a time in a faraway forest' → setting is a forest, long ago. 'On a sunny Monday morning at school' → school, Monday morning.",
          },
          {
            heading: "Finding settings",
            body: "Look for place words (forest, castle, school, beach) and time words (yesterday, at night, in winter). Settings help us picture the story.",
          },
        ],
        keyFormulas: [
          { name: "Setting", statement: "Where + when the story happens" },
          { name: "Place words", statement: "forest, school, castle, beach" },
          {
            name: "Time words",
            statement: "morning, night, winter, yesterday",
          },
        ],
        workedExample: {
          problem: "What is the setting of 'The Three Little Pigs'?",
          solution:
            "A village/forest area where pigs build houses — countryside.",
        },
      },
      questions: [
        {
          id: "edpe1-u2-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'Goldilocks and the Three Bears', where does the story happen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A house in the woods" },
              { id: "b", text: "A school" },
              { id: "c", text: "A castle" },
              { id: "d", text: "A beach" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Setting",
                statement: "House in the woods.",
              },
            ],
            steps: [
              { reasoning: "Recall story setting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A house in the woods",
            commonErrors: ["Guessing without story knowledge."],
          },
        },
        {
          id: "edpe1-u2-se-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'At night, the moon shone over the quiet village.' When does this happen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Night" },
              { id: "b", text: "Morning" },
              { id: "c", text: "Evening" },
              { id: "d", text: "Afternoon" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time words",
                statement: "'At night' tells when.",
              },
            ],
            steps: [
              { reasoning: "Find time word.", marks: 1, markCode: "M" },
              { reasoning: "Answer: night.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Night",
            commonErrors: ["Choosing 'evening' — text says night."],
          },
        },
        {
          id: "edpe1-u2-se-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the setting of this sentence: 'We visited the beach on Saturday.'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Setting",
                statement: "Beach on Saturday.",
              },
            ],
            steps: [
              { reasoning: "Identify place: beach.", marks: 1, markCode: "M" },
              {
                reasoning: "Identify time: Saturday.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The beach on Saturday",
            commonErrors: ["Giving only place or only time."],
          },
        },
        {
          id: "edpe1-u2-se-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read: 'Deep in the forest, on a cold winter morning, a little bird woke up.'",
          parts: [
            { label: "a", prompt: "Where is the story set?", marks: 1 },
            { label: "b", prompt: "When is it?", marks: 1 },
            { label: "c", prompt: "What season is it?", marks: 1 },
            {
              label: "d",
              prompt: "Write a different setting for the same story.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Setting analysis",
                statement:
                  "Forest; cold winter morning; winter; e.g. beach in summer.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "In the forest.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "On a morning.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Winter.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Different place/time given.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Forest; morning; winter; e.g. 'beach in summer'",
            commonErrors: [
              "For (d): changing only one element not both place and time.",
            ],
          },
        },
      ],
    },
  ],
};
