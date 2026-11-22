import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edpe5-u1-lesson-1-3",
  code: "1-3",
  title: "Idioms, Phrases and Figurative Language",
  goal: "I CAN understand and use idioms, phrases and figurative language.",
  standards: ["Year 5 Spelling and Vocabulary"],
  vocabulary: [
    {
      term: "Idiom",
      definition: "Expression with non-literal meaning: 'break a leg'.",
    },
    {
      term: "Metaphor",
      definition: "Direct comparison: 'Her eyes were stars'.",
    },
    {
      term: "Simile",
      definition: "Comparison using 'like/as': 'as brave as a lion'.",
    },
    {
      term: "Personification",
      definition: "Giving human qualities to non-human things.",
    },
  ],
  concepts: [
    {
      id: "edpe5-u1-idioms",
      title: "Idioms and phrases",
      skill: "Understand and use idioms and common phrases.",
      lesson: {
        sections: [
          {
            heading: "Common idioms",
            body: "'Break a leg' = good luck; 'piece of cake' = easy; 'raining cats and dogs' = heavy rain; 'hit the nail on the head' = exactly right; 'once in a blue moon' = very rarely.",
          },
          {
            heading: "Understanding idioms",
            body: "Idioms don't mean what they say literally. Context helps: 'I'm so hungry I could eat a horse' = very hungry. Learn them as fixed phrases.",
          },
        ],
        keyFormulas: [
          { name: "Idiom", statement: "Non-literal fixed expression" },
          { name: "Context", statement: "Helps guess idiom meaning" },
          { name: "Figurative", statement: "Beyond literal meaning" },
        ],
        workedExample: {
          problem: "What does 'piece of cake' mean?",
          solution: "Something very easy to do.",
        },
      },
      questions: [
        {
          id: "edpe5-u1-id-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'break a leg' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be careful" },
              { id: "b", text: "Fall down" },
              { id: "c", text: "Good luck" },
              { id: "d", text: "Get injured" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Idiom",
                statement: "Non-literal meaning.",
              },
            ],
            steps: [
              {
                reasoning: "break a leg = good luck.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Good luck",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "edpe5-u1-id-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'piece of cake' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very easy" },
              { id: "b", text: "Delicious food" },
              { id: "c", text: "A dessert" },
              { id: "d", text: "Hard task" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Idiom",
                statement: "piece of cake = easy.",
              },
            ],
            steps: [
              { reasoning: "Identify idiom meaning.", marks: 1, markCode: "M" },
              { reasoning: "Answer: very easy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Very easy",
            commonErrors: ["Literal meaning."],
          },
        },
        {
          id: "edpe5-u1-id-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'raining cats and dogs' means and use it in a sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Idiom",
                statement: "Very heavy rain.",
              },
            ],
            steps: [
              { reasoning: "Meaning explained.", marks: 1, markCode: "M" },
              { reasoning: "Sentence written.", marks: 1, markCode: "A" },
              { reasoning: "Used correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "It means raining very heavily; e.g. 'It was raining cats and dogs so we stayed inside.'",
            commonErrors: ["Literal or wrong meaning."],
          },
        },
        {
          id: "edpe5-u1-id-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify the figurative language in: 'The wind whispered through the trees.'",
          parts: [
            { label: "a", prompt: "What technique is used?", marks: 1 },
            {
              label: "b",
              prompt: "What does it literally describe?",
              marks: 1,
            },
            { label: "c", prompt: "What effect does it create?", marks: 1 },
            { label: "d", prompt: "Write your own personification.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personification",
                statement: "Wind 'whispers' = human action given to wind.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Personification identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Wind blowing through trees.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Gentle/mysterious effect.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Original example.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Personification; wind blowing; gentle/mysterious; e.g. 'The sun smiled down on us.'",
            commonErrors: ["Not recognising technique."],
          },
        },
      ],
    },
    {
      id: "edpe5-u1-figurative",
      title: "Similes, metaphors and imagery",
      skill: "Identify and create similes, metaphors and imagery.",
      lesson: {
        sections: [
          {
            heading: "Comparison devices",
            body: "**Simile**: 'as brave as a lion', 'like a shimmering diamond'. **Metaphor**: 'He is a rock', 'Her voice was velvet'. Metaphors are stronger — direct comparison without 'like/as'.",
          },
          {
            heading: "Creating imagery",
            body: "Use sensory words: sight ('golden sunset'), sound ('deafening roar'), touch ('icy wind'), smell ('sweet perfume'), taste ('bitter coffee'). Imagery makes readers see, hear, feel.",
          },
        ],
        keyFormulas: [
          { name: "Simile", statement: "like/as comparison" },
          { name: "Metaphor", statement: "Direct comparison" },
          { name: "Imagery", statement: "Sensory details" },
        ],
        workedExample: {
          problem: "Identify: 'The classroom was a zoo.'",
          solution:
            "Metaphor — classroom compared directly to a zoo (chaotic).",
        },
      },
      questions: [
        {
          id: "edpe5-u1-fig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a simile?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lions are brave" },
              { id: "b", text: "The lion roared" },
              { id: "c", text: "He is a lion" },
              { id: "d", text: "He is as brave as a lion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Simile",
                statement: "Uses like/as.",
              },
            ],
            steps: [
              { reasoning: "'as brave as' = simile.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** as brave as a lion",
            commonErrors: ["Confusing metaphor."],
          },
        },
        {
          id: "edpe5-u1-fig-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a metaphor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "like a frozen statue" },
              { id: "b", text: "cold as ice" },
              { id: "c", text: "as cold as ice" },
              { id: "d", text: "Her eyes were ice" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metaphor",
                statement: "Direct comparison, no like/as.",
              },
            ],
            steps: [
              { reasoning: "No like/as = metaphor.", marks: 1, markCode: "M" },
              { reasoning: "Answer: eyes were ice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Her eyes were ice",
            commonErrors: ["Choosing simile."],
          },
        },
        {
          id: "edpe5-u1-fig-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Create a simile describing a fast car.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Simile creation",
                statement: "like/as + comparison.",
              },
            ],
            steps: [
              { reasoning: "Simile structure used.", marks: 1, markCode: "A" },
              { reasoning: "Comparison fits speed.", marks: 1, markCode: "A" },
              { reasoning: "Creative and clear.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "e.g. 'The car was as fast as a cheetah.'",
            commonErrors: ["Not a simile or weak comparison."],
          },
        },
        {
          id: "edpe5-u1-fig-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a descriptive sentence using imagery about a storm.",
          parts: [
            {
              label: "a",
              prompt: "Use a sensory detail (sight/sound/touch)",
              marks: 1,
            },
            { label: "b", prompt: "Include a simile or metaphor", marks: 1 },
            { label: "c", prompt: "Create atmosphere", marks: 1 },
            { label: "d", prompt: "Sentence is vivid and clear", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imagery",
                statement: "Sensory + figurative + atmosphere.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sensory detail used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Figurative language.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Atmosphere created.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Vivid and clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Thunder roared like a hungry beast as lightning split the dark sky.'",
            commonErrors: ["Literal or weak imagery."],
          },
        },
      ],
    },
  ],
};
