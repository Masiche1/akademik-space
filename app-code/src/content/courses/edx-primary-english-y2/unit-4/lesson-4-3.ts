import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpe2-u4-lesson-4-3",
  code: "4-3",
  title: "Writing a Story",
  goal: "I CAN write a story with a beginning, middle and end.",
  standards: ["Year 2 Writing"],
  vocabulary: [
    {
      term: "Story plan",
      definition: "Notes about characters, setting and events.",
    },
    {
      term: "Dialogue",
      definition: "Speech in a story: 'Come here,' said Sam.",
    },
    { term: "Problem", definition: "Something difficult the character faces." },
    { term: "Resolution", definition: "How the problem is solved." },
  ],
  concepts: [
    {
      id: "edpe2-u4-storyplan",
      title: "Planning a story",
      skill: "Plan a story with characters, setting, problem and resolution.",
      lesson: {
        sections: [
          {
            heading: "Story structure",
            body: "A good story has: beginning (characters and setting), middle (problem happens), end (problem is solved). The problem makes the story interesting — without it, nothing exciting happens.",
          },
          {
            heading: "Using dialogue",
            body: "Dialogue is what characters say. Write speech in inverted commas: 'Where are you going?' asked Tom. Dialogue makes stories come alive and shows character feelings.",
          },
        ],
        keyFormulas: [
          {
            name: "Story structure",
            statement: "Beginning + problem + resolution",
          },
        ],
        workedExample: {
          problem: "Plan a story about a lost puppy.",
          solution:
            "Characters: boy and puppy. Setting: a park. Problem: puppy runs away. Resolution: boy finds puppy.",
        },
      },
      questions: [
        {
          id: "edpe2-u4-spl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a story interesting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No problem" },
              { id: "b", text: "A character facing a problem" },
              { id: "c", text: "Very long sentences" },
              { id: "d", text: "No characters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story structure",
                statement: "Problem creates interest.",
              },
            ],
            steps: [
              {
                reasoning: "A problem makes stories exciting.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Character facing a problem",
            commonErrors: ["Thinking length matters."],
          },
        },
        {
          id: "edpe2-u4-spl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is dialogue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The setting of a story" },
              { id: "b", text: "What characters say" },
              { id: "c", text: "The problem in a story" },
              { id: "d", text: "The ending of a story" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dialogue",
                statement: "Speech in a story.",
              },
            ],
            steps: [
              {
                reasoning: "Dialogue = what characters say.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** What characters say",
            commonErrors: ["Confusing with narration."],
          },
        },
        {
          id: "edpe2-u4-spl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a story plan for 'The Three Billy Goats Gruff'. Include problem and resolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story planning",
                statement: "Plan with problem + resolution.",
              },
            ],
            steps: [
              {
                reasoning: "Characters: three goats and troll.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Problem: troll won't let goats cross bridge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Resolution: biggest goat defeats troll.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Goats + troll; troll blocks; big goat wins",
            commonErrors: ["Missing problem or resolution."],
          },
        },
        {
          id: "edpe2-u4-spl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a story about a dragon who is afraid of fire. Include beginning, middle and end.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story planning",
                statement: "Complete plan with irony.",
              },
            ],
            steps: [
              {
                reasoning: "Beginning: dragon lives in cave, afraid of fire.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Middle: dragon must help village but fears fire.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "End: dragon overcomes fear or finds another way.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Afraid dragon story plan",
            commonErrors: ["No resolution."],
          },
        },
      ],
    },
    {
      id: "edpe2-u4-writing",
      title: "Writing your story",
      skill: "Write a story with correct sentences, punctuation and dialogue.",
      lesson: {
        sections: [
          {
            heading: "Writing from your plan",
            body: "Use your plan to write the story. Start with the beginning, then the middle (where the problem happens), then the end (where it's solved). Use paragraphs to separate different parts. Keep sentences varied: some short, some longer.",
          },
          {
            heading: "Adding dialogue",
            body: "Use dialogue to show what characters say: 'I'm lost,' said the puppy. Put speech in inverted commas. Start a new paragraph when a different character speaks. Dialogue punctuation: comma inside quotes, capital after quote if continuing.",
          },
        ],
        keyFormulas: [
          { name: "Dialogue", statement: "'Speech,' said character." },
        ],
        workedExample: {
          problem:
            "Write the beginning of a story about a cat who finds a mouse.",
          solution:
            "Milo the cat was hunting in the garden. 'I smell something,' he said. 'A mouse!'",
        },
      },
      questions: [
        {
          id: "edpe2-u4-wr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How should dialogue be written?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Without any marks" },
              { id: "b", text: "In inverted commas" },
              { id: "c", text: "In brackets" },
              { id: "d", text: "In bold" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Dialogue",
                statement: "Inverted commas.",
              },
            ],
            steps: [
              {
                reasoning: "Speech goes in inverted commas.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Inverted commas",
            commonErrors: ["Wrong punctuation."],
          },
        },
        {
          id: "edpe2-u4-wr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you use to separate different parts of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Paragraphs" },
              { id: "c", text: "Commas" },
              { id: "d", text: "Question marks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraphs",
                statement: "Paragraphs separate parts.",
              },
            ],
            steps: [
              {
                reasoning: "Paragraphs organise beginning/middle/end.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Paragraphs",
            commonErrors: ["One long paragraph."],
          },
        },
        {
          id: "edpe2-u4-wr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the middle of a story about a boy who can't swim but must cross a river. Include a problem and dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story writing",
                statement: "Problem + dialogue.",
              },
            ],
            steps: [
              {
                reasoning: "Problem: boy can't swim but river blocks path.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dialogue: 'I can't swim!' or similar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct sentences and punctuation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Middle with problem + dialogue",
            commonErrors: ["No dialogue or problem."],
          },
        },
        {
          id: "edpe2-u4-wr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a complete short story (5-6 sentences) about a girl who finds a magic pencil. Include dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story writing",
                statement: "Complete story with dialogue.",
              },
            ],
            steps: [
              {
                reasoning: "Beginning: girl finds pencil.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Middle: pencil does something magical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dialogue included correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "End: resolution with correct punctuation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete story with dialogue",
            commonErrors: ["No dialogue or incomplete."],
          },
        },
      ],
    },
    {
      id: "edpe2-u4-proofread",
      title: "Proofreading and editing",
      skill: "Check and improve your writing.",
      lesson: {
        sections: [
          {
            heading: "Proofreading",
            body: "Proofreading means checking your writing for mistakes: capitals, full stops, question marks, exclamation marks, commas in lists, spelling, finger spaces. Read your work slowly and fix anything wrong.",
          },
          {
            heading: "Editing",
            body: "Editing means improving your writing: Does it make sense? Is it interesting? Are sentences varied? Could you add describing words? Could you join short sentences? Good writers always edit their work.",
          },
        ],
        keyFormulas: [
          { name: "Proofread", statement: "Check for mistakes" },
          { name: "Edit", statement: "Improve the writing" },
        ],
        workedExample: {
          problem: "Improve: 'The dog ran. It was fast.'",
          solution:
            "The big dog ran quickly. Or: The dog ran fast across the garden.",
        },
      },
      questions: [
        {
          id: "edpe2-u4-pf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is proofreading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing a new story" },
              { id: "b", text: "Checking for mistakes" },
              { id: "c", text: "Reading a book" },
              { id: "d", text: "Drawing pictures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proofreading",
                statement: "Checking for mistakes.",
              },
            ],
            steps: [
              {
                reasoning: "Proofreading = checking for errors.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Checking for mistakes",
            commonErrors: ["Confusing with editing."],
          },
        },
        {
          id: "edpe2-u4-pf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixing spelling mistakes only" },
              { id: "b", text: "Improving the writing" },
              { id: "c", text: "Writing faster" },
              { id: "d", text: "Skipping the work" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Editing",
                statement: "Improving writing.",
              },
            ],
            steps: [
              {
                reasoning: "Editing = making writing better.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Improving the writing",
            commonErrors: ["Confusing with proofreading."],
          },
        },
        {
          id: "edpe2-u4-pf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this sentence: 'The cat sat. The cat was black.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Editing",
                statement: "Join and improve.",
              },
            ],
            steps: [
              {
                reasoning: "Join sentences: 'The black cat sat.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or: 'The cat sat quietly.' with describing word.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improved sentence with correct punctuation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The black cat sat.",
            commonErrors: ["No improvement."],
          },
        },
        {
          id: "edpe2-u4-pf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Proofread and improve: 'i went to the park it was fun me and tom played football'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading+editing",
                statement: "Fix punctuation, improve.",
              },
            ],
            steps: [
              {
                reasoning: "Capital I, full stops between sentences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'me and tom' → 'Tom and I' or 'Tom and me' (depending on level).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improved: 'I went to the park. It was fun. Tom and I played football.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "I went to the park. It was fun. Tom and I played football.",
            commonErrors: ["Missing punctuation or improvement."],
          },
        },
      ],
    },
  ],
};
