import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "edpe4-u3-lesson-3-3",
  code: "3-3",
  title: "Story Writing and Editing",
  goal: "I CAN write a structured story and edit it for improvements.",
  standards: ["Year 4 Writing"],
  vocabulary: [
    {
      term: "Narrative arc",
      definition: "Beginning → build-up → problem → climax → resolution.",
    },
    {
      term: "Characterisation",
      definition: "Showing character through actions and speech.",
    },
    {
      term: "Editing",
      definition: "Reviewing and improving a piece of writing.",
    },
    {
      term: "Descriptive detail",
      definition: "Sensory details that bring writing alive.",
    },
  ],
  concepts: [
    {
      id: "edpe4-u3-narrative",
      title: "Story structure",
      skill: "Plan and write stories with clear narrative structure.",
      lesson: {
        sections: [
          {
            heading: "Story arc",
            body: "Every story needs: **beginning** (introduce character/setting), **build-up** (develop), **problem** (conflict), **climax** (tension peak), **resolution** (how it's solved).",
          },
          {
            heading: "Characterisation",
            body: "Show don't tell: 'Maya gritted her teeth and clenched her fists' not 'Maya was angry'. Use dialogue, actions and thoughts to reveal character.",
          },
        ],
        keyFormulas: [
          { name: "Beginning", statement: "Character + setting" },
          { name: "Problem/climax", statement: "Conflict + peak tension" },
          { name: "Resolution", statement: "Problem solved" },
        ],
        workedExample: {
          problem: "Plan a story about a lost puppy.",
          solution:
            "Begin: girl finds puppy. Build: tries to find owner. Problem: puppy runs off. Climax: she finds it. Resolution: reunion.",
        },
      },
      questions: [
        {
          id: "edpe4-u3-nv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes first in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The climax" },
              { id: "b", text: "The beginning" },
              { id: "c", text: "The resolution" },
              { id: "d", text: "The problem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story order",
                statement: "Beginning first.",
              },
            ],
            steps: [
              {
                reasoning: "Story starts at beginning.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The beginning",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpe4-u3-nv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which shows character through action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tom was angry" },
              { id: "b", text: "Tom clenched his fists" },
              { id: "c", text: "Tom is a boy" },
              { id: "d", text: "Tom ran" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Show don't tell",
                statement: "Action reveals emotion.",
              },
            ],
            steps: [
              { reasoning: "Action = showing.", marks: 1, markCode: "M" },
              { reasoning: "Answer: clenched fists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tom clenched his fists",
            commonErrors: ["Choosing 'telling'."],
          },
        },
        {
          id: "edpe4-u3-nv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a one-sentence story opening introducing a character and setting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story opening",
                statement: "Character + setting in one sentence.",
              },
            ],
            steps: [
              { reasoning: "Character introduced.", marks: 1, markCode: "A" },
              { reasoning: "Setting included.", marks: 1, markCode: "A" },
              { reasoning: "Engaging opening.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'On a stormy night, young Maya found a strange map in her attic.'",
            commonErrors: ["No character or setting."],
          },
        },
        {
          id: "edpe4-u3-nv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a four-sentence story ending showing the resolution: a boy's kite gets stuck in a tree.",
          parts: [
            { label: "a", prompt: "Problem introduced", marks: 1 },
            { label: "b", prompt: "Attempt to solve", marks: 1 },
            { label: "c", prompt: "Climax/moment of tension", marks: 1 },
            { label: "d", prompt: "Resolution", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative arc",
                statement: "Problem → attempt → climax → resolution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Problem shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Attempt made.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Tension/climax.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Resolution given.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'The kite flew into a tall tree. Jack climbed up to get it. He slipped but caught a branch. His dad helped him down safely.'",
            commonErrors: ["No real resolution or arc."],
          },
        },
      ],
    },
    {
      id: "edpe4-u3-editing",
      title: "Editing and proofreading",
      skill: "Edit writing for grammar, punctuation, spelling and clarity.",
      lesson: {
        sections: [
          {
            heading: "Editing checklist",
            body: "Check: spelling, punctuation (capitals, full stops, commas), grammar (tense, agreement), word choice (varied, precise), sentence variety, paragraphing. Read aloud to catch errors.",
          },
          {
            heading: "Improving writing",
            body: "Add detail, vary sentences, strengthen verbs ('ran quickly' → 'sprinted'), remove repetition. Editing transforms 'good' into 'great'.",
          },
        ],
        keyFormulas: [
          { name: "Check", statement: "Spelling, punctuation, grammar" },
          { name: "Improve", statement: "Add detail, vary language" },
          { name: "Read aloud", statement: "Catches errors" },
        ],
        workedExample: {
          problem: "Edit: 'the dog runned fast and it was very big.'",
          solution:
            "'The dog ran fast. It was enormous.' (capitals, tense, varied vocab, split sentence)",
        },
      },
      questions: [
        {
          id: "edpe4-u3-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you check first when editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Font size" },
              { id: "b", text: "Spelling and grammar" },
              { id: "c", text: "Paper colour" },
              { id: "d", text: "Title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Editing",
                statement: "Check errors first.",
              },
            ],
            steps: [{ reasoning: "Errors first.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Spelling and grammar",
            commonErrors: ["Focusing on appearance."],
          },
        },
        {
          id: "edpe4-u3-ed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'proofreading' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the first draft" },
              { id: "b", text: "Checking for errors" },
              { id: "c", text: "Planning the story" },
              { id: "d", text: "Choosing a title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proofreading",
                statement: "Final error check.",
              },
            ],
            steps: [
              {
                reasoning: "Proofreading = error check.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: checking errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Checking for errors",
            commonErrors: ["Confusing with drafting."],
          },
        },
        {
          id: "edpe4-u3-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Edit this: 'me and tom went too the park and we played.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Editing",
                statement: "Capitalisation, 'to', word order.",
              },
            ],
            steps: [
              { reasoning: "Capitals fixed.", marks: 1, markCode: "A" },
              { reasoning: "'too' → 'to' fixed.", marks: 1, markCode: "A" },
              {
                reasoning: "'me and Tom' → 'Tom and I' improved.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "e.g. 'Tom and I went to the park and we played.'",
            commonErrors: ["Missing multiple errors."],
          },
        },
        {
          id: "edpe4-u3-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this sentence with more precise vocabulary and varied structure: 'The man walked quickly through the big house.'",
          parts: [
            {
              label: "a",
              prompt: "Replace 'walked quickly' with one verb",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Replace 'big' with a better adjective",
              marks: 1,
            },
            { label: "c", prompt: "Add a descriptive detail", marks: 1 },
            { label: "d", prompt: "Write the improved sentence", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improving vocabulary",
                statement: "Precise verbs/adjectives + detail.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e.g. 'hurried'/'strode'.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "e.g. 'vast'/'spacious'.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Detail added.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Full improved sentence.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'The tall man strode through the vast, echoing house.'",
            commonErrors: ["Weak improvements."],
          },
        },
      ],
    },
  ],
};
