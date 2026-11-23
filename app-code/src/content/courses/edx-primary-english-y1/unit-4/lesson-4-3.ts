import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpe1-u4-lesson-4-3",
  code: "4-3",
  title: "Writing a Story",
  goal: "I CAN write a short story with a beginning, middle and end.",
  standards: ["Year 1 Writing"],
  vocabulary: [
    {
      term: "Story plan",
      definition: "Notes about what will happen in the story.",
    },
    { term: "Character", definition: "A person or animal in the story." },
    { term: "Setting", definition: "Where and when the story happens." },
    {
      term: "Draft",
      definition: "A first version of writing that can be improved.",
    },
  ],
  concepts: [
    {
      id: "edpe1-u4-planning",
      title: "Planning a story",
      skill: "Plan a story with characters, setting and events.",
      lesson: {
        sections: [
          {
            heading: "Planning before writing",
            body: "Before writing a story, plan it: Who are the characters? Where does it happen? What happens first, next, last? A simple plan helps your story make sense.",
          },
          {
            heading: "Story ideas",
            body: "Good stories have a character who wants something and faces a problem. 'A lost puppy wants to find its owner.' 'A boy wants to win the race but falls over.' The problem makes the story interesting.",
          },
        ],
        keyFormulas: [
          {
            name: "Story plan",
            statement: "Characters + setting + beginning/middle/end",
          },
        ],
        workedExample: {
          problem: "Plan a story about a cat.",
          solution:
            "Character: a cat. Setting: a garden. Beginning: cat sees a bird. Middle: cat chases bird. End: cat misses bird but finds fish.",
        },
      },
      questions: [
        {
          id: "edpe1-u4-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you plan before writing a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The spelling of every word" },
              { id: "b", text: "Characters, setting and events" },
              { id: "c", text: "How long the story is" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Planning",
                statement: "Plan characters, setting, events.",
              },
            ],
            steps: [
              {
                reasoning: "Planning covers characters, setting and events.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Characters, setting and events",
            commonErrors: ["Planning only spelling."],
          },
        },
        {
          id: "edpe1-u4-pl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes a story interesting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No characters" },
              { id: "b", text: "A character who faces a problem" },
              { id: "c", text: "Very long sentences" },
              { id: "d", text: "Nothing happens" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story ideas",
                statement: "Problem makes stories interesting.",
              },
            ],
            steps: [
              {
                reasoning: "A character facing a problem creates interest.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Character facing a problem",
            commonErrors: ["Thinking long sentences help."],
          },
        },
        {
          id: "edpe1-u4-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a story plan for 'A day at the beach'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story planning",
                statement: "Plan has characters, setting, events.",
              },
            ],
            steps: [
              {
                reasoning: "Characters: family or friends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Setting: beach, sunny day.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Events: build sandcastle, swim, go home.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Family at beach: sandcastle, swim, home",
            commonErrors: ["Missing parts."],
          },
        },
        {
          id: "edpe1-u4-pl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a story about a lost dog. Include beginning, middle and end.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story planning",
                statement: "Complete plan with problem.",
              },
            ],
            steps: [
              {
                reasoning: "Beginning: dog gets lost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Middle: dog looks for owner, meets people.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "End: dog finds owner.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Lost → searches → found",
            commonErrors: ["No problem or resolution."],
          },
        },
      ],
    },
    {
      id: "edpe1-u4-writing",
      title: "Writing your story",
      skill: "Write a story with correct sentences and punctuation.",
      lesson: {
        sections: [
          {
            heading: "Writing from your plan",
            body: "Use your plan to write the story. Start with the beginning, then the middle, then the end. Use capital letters, full stops and finger spaces. Write neatly so others can read it.",
          },
          {
            heading: "Checking your work",
            body: "After writing, check: Does each sentence start with a capital? Does each end with a full stop? Are there finger spaces between words? Does the story have a beginning, middle and end? Fix any mistakes.",
          },
        ],
        keyFormulas: [
          {
            name: "Checking",
            statement: "Capitals + full stops + finger spaces + story parts",
          },
        ],
        workedExample: {
          problem: "Write the beginning of a story about a boy and a kite.",
          solution: "Sam had a red kite. He went to the park to fly it.",
        },
      },
      questions: [
        {
          id: "edpe1-u4-ws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should every sentence start with?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A full stop" },
              { id: "b", text: "A capital letter" },
              { id: "c", text: "A comma" },
              { id: "d", text: "A question mark" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sentences",
                statement: "Sentences start with capitals.",
              },
            ],
            steps: [
              {
                reasoning: "Every sentence starts with a capital letter.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Capital letter",
            commonErrors: ["Wrong punctuation."],
          },
        },
        {
          id: "edpe1-u4-ws-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you check after writing a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the spelling" },
              { id: "b", text: "Capitals, full stops, spaces and story parts" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Only the length" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking work",
                statement: "Check punctuation, spaces, story parts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check capitals, full stops, finger spaces and story structure.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Capitals, stops, spaces, story parts",
            commonErrors: ["Checking only one thing."],
          },
        },
        {
          id: "edpe1-u4-ws-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the middle of a story about a boy who finds a treasure map.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing stories",
                statement: "Middle has events and problem.",
              },
            ],
            steps: [
              {
                reasoning: "Events: boy follows the map.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Problem: map is hard to read or leads nowhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct sentences with capitals and full stops.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Boy follows map, faces problem",
            commonErrors: ["No problem in middle."],
          },
        },
        {
          id: "edpe1-u4-ws-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a complete short story about a girl and a magic box. Include beginning, middle and end.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Story writing",
                statement: "Complete story with all parts.",
              },
            ],
            steps: [
              {
                reasoning: "Beginning: girl finds magic box.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Middle: box does something magical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "End: girl learns something or box disappears.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete story with beginning, middle, end",
            commonErrors: ["Missing story parts."],
          },
        },
      ],
    },
    {
      id: "edpe1-u4-proofread",
      title: "Proofreading",
      skill: "Find and fix mistakes in writing.",
      lesson: {
        sections: [
          {
            heading: "What is proofreading?",
            body: "Proofreading means checking your writing for mistakes. Look for: capital letters at the start, full stops at the end, finger spaces between words, and correct spelling. Fix mistakes you find.",
          },
          {
            heading: "Common mistakes",
            body: "Common mistakes: forgetting capitals, forgetting full stops, no finger spaces, mixing up letters (b/d, p/q), spelling errors. Read your writing slowly and check each sentence.",
          },
        ],
        keyFormulas: [
          {
            name: "Proofreading",
            statement: "Check capitals, stops, spaces, spelling",
          },
        ],
        workedExample: {
          problem: "Fix: 'the cat sat on the mat'",
          solution: "The cat sat on the mat.",
        },
      },
      questions: [
        {
          id: "edpe1-u4-pf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does proofreading mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing a new story" },
              { id: "b", text: "Checking writing for mistakes" },
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
                reasoning: "Proofreading = checking writing for errors.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Checking for mistakes",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe1-u4-pf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Fix this sentence: 'the dog ran fast'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog ran fast" },
              { id: "b", text: "The dog ran fast." },
              { id: "c", text: "the dog ran fast." },
              { id: "d", text: "THE DOG RAN FAST." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading",
                statement: "Capital + full stop.",
              },
            ],
            steps: [
              {
                reasoning: "Needs capital T and full stop.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The dog ran fast.",
            commonErrors: ["Missing punctuation."],
          },
        },
        {
          id: "edpe1-u4-pf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find two mistakes: 'i like cats and dogs'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading",
                statement: "Capital I and full stop.",
              },
            ],
            steps: [
              {
                reasoning: "'i' should be 'I' (capital).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Missing full stop at end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Corrected: 'I like cats and dogs.'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "I like cats and dogs.",
            commonErrors: ["Missing one mistake."],
          },
        },
        {
          id: "edpe1-u4-pf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Proofread this story opening: 'once upon a time there was a little girl she lived in a small house'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading",
                statement: "Capitals, stops, possibly split sentences.",
              },
            ],
            steps: [
              { reasoning: "'Once' needs capital.", marks: 1, markCode: "M" },
              {
                reasoning: "Full stop after 'time' or restructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Full stop at end; possibly split into two sentences.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Once upon a time, there was a little girl. She lived in a small house.",
            commonErrors: ["Missing capitals or stops."],
          },
        },
      ],
    },
  ],
};
