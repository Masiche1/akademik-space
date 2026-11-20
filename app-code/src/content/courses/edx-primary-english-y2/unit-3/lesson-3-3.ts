import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edpe2-u3-lesson-3-3",
  code: "3-3",
  title: "Planning and Writing Stories",
  goal: "I CAN plan and write a short story with a beginning, middle and end.",
  standards: ["Year 2 Writing"],
  vocabulary: [
    {
      term: "Plan",
      definition: "Thinking about what you'll write before you write.",
    },
    {
      term: "Opening",
      definition: "The first part of a story — sets the scene.",
    },
    { term: "Climax", definition: "The most exciting part of the story." },
    { term: "Resolution", definition: "How the story ends — problems solved." },
  ],
  concepts: [
    {
      id: "edpe2-u3-planning",
      title: "Planning a story",
      skill: "Plan a story with characters, setting and events before writing.",
      lesson: {
        sections: [
          {
            heading: "Think before you write",
            body: "Good writers plan first! Decide: who is the character? where does it happen? what problem will they face? what happens at the end? Write these down as a simple plan.",
          },
          {
            heading: "Story structure",
            body: "**Beginning**: introduce character and setting. **Middle**: problem happens, things get exciting. **End**: problem solved, happy ending. This is called narrative structure.",
          },
        ],
        keyFormulas: [
          { name: "Plan", statement: "Character + setting + problem + ending" },
          { name: "Structure", statement: "Beginning → middle → end" },
        ],
        workedExample: {
          problem: "Plan a story about a lost puppy.",
          solution:
            "Character: girl; Setting: park; Problem: puppy lost; End: finds puppy.",
        },
      },
      questions: [
        {
          id: "edpe2-u3-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do BEFORE writing a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start writing immediately" },
              { id: "b", text: "Plan what will happen" },
              { id: "c", text: "Read a different story" },
              { id: "d", text: "Draw pictures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Planning",
                statement: "Plan before writing.",
              },
            ],
            steps: [
              {
                reasoning: "Planning improves writing.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Plan what will happen",
            commonErrors: ["Skipping planning — leads to messy stories."],
          },
        },
        {
          id: "edpe2-u3-pl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the correct story order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "End, middle, beginning" },
              { id: "b", text: "Beginning, middle, end" },
              { id: "c", text: "Middle, end, beginning" },
              { id: "d", text: "End, beginning, middle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Story structure",
                statement: "Beginning → middle → end.",
              },
            ],
            steps: [
              { reasoning: "Recall story order.", marks: 1, markCode: "M" },
              { reasoning: "Answer: B-M-E.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Beginning, middle, end",
            commonErrors: ["Reversed order."],
          },
        },
        {
          id: "edpe2-u3-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Plan a story about a boy who finds a magic key. List: character, setting, problem, ending.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story planning",
                statement: "Four elements planned.",
              },
            ],
            steps: [
              { reasoning: "Character identified.", marks: 1, markCode: "A" },
              { reasoning: "Setting identified.", marks: 1, markCode: "A" },
              {
                reasoning: "Problem and ending planned.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. 'Boy; garden; key opens door; finds treasure'",
            commonErrors: ["Missing elements or illogical plot."],
          },
        },
        {
          id: "edpe2-u3-pl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the first three sentences of a story about a girl who finds a talking parrot.",
          parts: [
            {
              label: "a",
              prompt: "Opening sentence (introduce character/setting).",
              marks: 1,
            },
            { label: "b", prompt: "Second sentence (what happens).", marks: 1 },
            {
              label: "c",
              prompt: "Third sentence (build suspense).",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Check punctuation on all sentences.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story writing",
                statement: "Three sentences with story structure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Opening introduces scene.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Event happens.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Suspense built.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Punctuation correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'Amy found a parrot in the park. It said hello. She couldn't believe it!'",
            commonErrors: ["No story structure — random sentences."],
          },
        },
      ],
    },
    {
      id: "edpe2-u3-editing",
      title: "Improving your writing",
      skill:
        "Edit and improve writing by adding detail and checking punctuation.",
      lesson: {
        sections: [
          {
            heading: "Making it better",
            body: "Good writers improve their work. Add describing words: 'The dog ran' → 'The fluffy brown dog ran quickly.' Add joining words: 'I like cats. I like dogs.' → 'I like cats and dogs.' Check capitals and full stops.",
          },
          {
            heading: "Editing checklist",
            body: "Read your writing aloud. Check: does it make sense? Are sentences complete? Do they start with capitals and end with punctuation? Are there describing words? Fix anything that doesn't sound right.",
          },
        ],
        keyFormulas: [
          {
            name: "Improve",
            statement: "Add adjectives, conjunctions, detail",
          },
          {
            name: "Checklist",
            statement: "Sense? Capitals? Punctuation? Detail?",
          },
        ],
        workedExample: {
          problem: "Improve: 'The cat sat.'",
          solution: "The fluffy grey cat sat on the warm windowsill.",
        },
      },
      questions: [
        {
          id: "edpe2-u3-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best way to improve 'The dog ran fast.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delete it" },
              { id: "b", text: "Add describing words" },
              { id: "c", text: "Make it shorter" },
              { id: "d", text: "Leave it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improving writing",
                statement: "Add detail.",
              },
            ],
            steps: [
              {
                reasoning: "Describing words add interest.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Add describing words",
            commonErrors: ["Making it shorter — loses meaning."],
          },
        },
        {
          id: "edpe2-u3-ed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Improve this: 'I saw a bird.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I saw a bird." },
              { id: "b", text: "I saw a bird and a cat." },
              { id: "c", text: "I saw a small blue bird flying high." },
              { id: "d", text: "Bird." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improving writing",
                statement: "More describing words.",
              },
            ],
            steps: [
              {
                reasoning: "Add adjectives for detail.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: expanded phrase.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** I saw a small blue bird flying high.",
            commonErrors: ["Adding unrelated words."],
          },
        },
        {
          id: "edpe2-u3-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Edit this sentence for punctuation and detail: 'the dog ran fast it was fun'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Editing",
                statement: "e.g. 'The fluffy dog ran fast because it was fun.'",
              },
            ],
            steps: [
              {
                reasoning: "Capital and punctuation added.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Describing words added.", marks: 1, markCode: "A" },
              { reasoning: "Sentence reads well.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The fluffy dog ran fast because it was fun.",
            commonErrors: ["Only fixing punctuation not adding detail."],
          },
        },
        {
          id: "edpe2-u3-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this story opening: 'once there was a girl she had a dog'",
          parts: [
            { label: "a", prompt: "Add capitals and punctuation.", marks: 1 },
            { label: "b", prompt: "Add describing words.", marks: 1 },
            { label: "c", prompt: "Add a joining word.", marks: 1 },
            { label: "d", prompt: "Write the improved sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improving writing",
                statement:
                  "e.g. 'Once there was a kind girl who had a fluffy dog.'",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Capitals and full stops added.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Adjectives added.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Conjunction used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Improved sentence clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Once there was a kind girl who had a fluffy dog.",
            commonErrors: ["Missing any improvement type."],
          },
        },
      ],
    },
  ],
};
