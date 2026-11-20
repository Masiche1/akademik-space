import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "edpe3-u3-lesson-3-3",
  code: "3-3",
  title: "Writing a Complete Story",
  goal: "I CAN write a story with a clear beginning, middle and end.",
  standards: ["Year 3 Writing"],
  vocabulary: [
    { term: "Narrative", definition: "A story told in order." },
    {
      term: "Opening",
      definition: "First paragraph — introduces character and setting.",
    },
    { term: "Problem", definition: "The challenge the character faces." },
    { term: "Resolution", definition: "How the problem is solved." },
  ],
  concepts: [
    {
      id: "edpe3-u3-story",
      title: "Story structure",
      skill: "Write stories with clear narrative structure.",
      lesson: {
        sections: [
          {
            heading: "Beginning, middle, end",
            body: "**Beginning**: introduce character and setting ('Once upon a time, in a forest, lived a rabbit'). **Middle**: problem happens, character tries to solve it. **End**: problem resolved, story wrapped up.",
          },
          {
            heading: "Making it interesting",
            body: "Add describing words for characters and settings. Use dialogue: 'Help!' said the mouse. Build tension before the solution. End with a satisfying conclusion.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "Beginning → middle → end" },
          {
            name: "Story elements",
            statement: "Character, setting, problem, solution",
          },
        ],
        workedExample: {
          problem: "Write the opening of a story about a lost dragon.",
          solution:
            "'High in the mountains lived a small green dragon named Pip. One day he couldn't find his way home.'",
        },
      },
      questions: [
        {
          id: "edpe3-u3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes first in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The problem" },
              { id: "b", text: "The ending" },
              { id: "c", text: "The beginning" },
              { id: "d", text: "The resolution" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Story order",
                statement: "Beginning first.",
              },
            ],
            steps: [
              {
                reasoning: "Stories start with setup.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** The beginning",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpe3-u3-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should the opening of a story include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ending" },
              { id: "b", text: "Character and setting" },
              { id: "c", text: "The problem" },
              { id: "d", text: "The conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Opening",
                statement: "Introduce character and setting.",
              },
            ],
            steps: [
              { reasoning: "Opening sets the scene.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: character and setting.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Character and setting",
            commonErrors: ["Skipping setup."],
          },
        },
        {
          id: "edpe3-u3-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening two sentences of a story about a girl who finds a talking cat.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story opening",
                statement: "Character + setting + hook.",
              },
            ],
            steps: [
              {
                reasoning: "Character/setting introduced.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cat discovery hinted.", marks: 1, markCode: "A" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Amy loved her garden. One morning she found a cat that talked.'",
            commonErrors: ["No story opening structure."],
          },
        },
        {
          id: "edpe3-u3-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a story plan for 'The Boy Who Could Fly'.",
          parts: [
            { label: "a", prompt: "Character and setting.", marks: 1 },
            { label: "b", prompt: "Problem.", marks: 1 },
            { label: "c", prompt: "Middle events.", marks: 1 },
            { label: "d", prompt: "Ending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story planning",
                statement: "All four elements.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Character/setting given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Problem identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Middle events planned.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Ending planned.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'Boy; village; discovers he can fly; uses it to help others'",
            commonErrors: ["Incomplete plan."],
          },
        },
      ],
    },
    {
      id: "edpe3-u3-editing",
      title: "Revising and editing",
      skill: "Improve writing through editing and revising.",
      lesson: {
        sections: [
          {
            heading: "Edit vs revise",
            body: "**Editing** = fixing mistakes (spelling, punctuation, grammar). **Revising** = improving content (better words, more detail, clearer structure). Do both!",
          },
          {
            heading: "The checklist",
            body: "Check: spelling, capitals, punctuation, repeated words, weak verbs, missing detail. 'The dog went fast' → 'The shaggy dog sprinted quickly.' Read aloud to hear problems.",
          },
        ],
        keyFormulas: [
          { name: "Edit", statement: "Fix mistakes" },
          { name: "Revise", statement: "Improve content" },
        ],
        workedExample: {
          problem: "Edit and improve: 'the cat sat on mat it was happy'",
          solution: "The fluffy cat sat on the warm mat because it was happy.",
        },
      },
      questions: [
        {
          id: "edpe3-u3-rev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between editing and revising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They're the same" },
              {
                id: "b",
                text: "Editing fixes mistakes; revising improves content",
              },
              { id: "c", text: "Editing is spelling only" },
              { id: "d", text: "Revising is deleting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Edit vs revise",
                statement: "Fix vs improve.",
              },
            ],
            steps: [
              { reasoning: "Understand difference.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Editing fixes mistakes; revising improves",
            commonErrors: ["Confusing terms."],
          },
        },
        {
          id: "edpe3-u3-rev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which change is editing (not revising)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing 'big' to 'enormous'" },
              { id: "b", text: "Fixing 'recieve' to 'receive'" },
              { id: "c", text: "Adding more detail" },
              { id: "d", text: "Changing the ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Editing",
                statement: "Fixing spelling = editing.",
              },
            ],
            steps: [
              { reasoning: "Spelling fix = editing.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: recieve→receive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Fixing 'recieve' to 'receive'",
            commonErrors: ["Confusing with revising."],
          },
        },
        {
          id: "edpe3-u3-rev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this sentence by revising: 'The dog was big.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Revising",
                statement:
                  "e.g. 'The enormous shaggy dog towered over everyone.'",
              },
            ],
            steps: [
              {
                reasoning: "Stronger adjectives added.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Sentence improved.", marks: 1, markCode: "A" },
              { reasoning: "Still makes sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'The enormous shaggy dog towered over everyone.'",
            commonErrors: ["Only fixing spelling not improving."],
          },
        },
        {
          id: "edpe3-u3-rev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Edit AND revise: 'the boy runned to shop he buyed bread it was yum'",
          parts: [
            { label: "a", prompt: "Fix spelling/grammar errors.", marks: 2 },
            { label: "b", prompt: "Add describing words.", marks: 1 },
            { label: "c", prompt: "Improve sentence flow.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Edit + revise",
                statement:
                  "The boy ran to the shop. He bought bread because it was yummy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Errors corrected.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Punctuation added.",
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
                reasoning: "Better flow with connective.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'The boy ran quickly to the shop because he wanted bread.'",
            commonErrors: ["Only editing not revising."],
          },
        },
      ],
    },
  ],
};
