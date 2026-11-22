import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edpe1-u3-lesson-3-3",
  code: "3-3",
  title: "Writing About Pictures and Stories",
  goal: "I CAN write a simple sentence or two about a picture or story.",
  standards: ["Year 1 Writing"],
  vocabulary: [
    {
      term: "Composition",
      definition: "Writing your own sentences about a topic.",
    },
    {
      term: "Picture prompt",
      definition: "A picture that gives you ideas for writing.",
    },
    {
      term: "Beginning, middle, end",
      definition: "The parts of a short story you write.",
    },
    {
      term: "Draft",
      definition: "A first version of writing you can improve.",
    },
  ],
  concepts: [
    {
      id: "edpe1-u3-composition",
      title: "Writing about pictures",
      skill: "Write simple sentences describing what you see in a picture.",
      lesson: {
        sections: [
          {
            heading: "Looking before writing",
            body: "Before you write, look carefully at the picture. Who is in it? What are they doing? Where are they? What colours do you see? These answers become your sentences.",
          },
          {
            heading: "Writing sentences",
            body: "Write one sentence about each thing you see: 'A girl is on a swing.' 'The sun is shining.' 'There is a dog.' Keep sentences simple and complete with capitals and full stops.",
          },
        ],
        keyFormulas: [
          {
            name: "Picture writing",
            statement: "Look → think → write sentences",
          },
          {
            name: "Sentence check",
            statement: "Capital start + full stop end",
          },
        ],
        workedExample: {
          problem:
            "Picture shows a boy flying a kite at the beach. Write one sentence.",
          solution: "A boy is flying a kite at the beach.",
        },
      },
      questions: [
        {
          id: "edpe1-u3-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Picture shows a cat sleeping on a chair. What should you write about first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weather" },
              { id: "b", text: "The cat and what it's doing" },
              { id: "c", text: "School" },
              { id: "d", text: "Your holiday" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Picture writing",
                statement: "Write about what's in the picture.",
              },
            ],
            steps: [
              {
                reasoning: "Focus on picture content.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The cat and what it's doing",
            commonErrors: ["Writing unrelated ideas."],
          },
        },
        {
          id: "edpe1-u3-co-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a sentence about this picture: a dog running on grass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence writing",
                statement: "e.g. 'The dog is running on the grass.'",
              },
            ],
            steps: [
              {
                reasoning: "Sentence describes picture.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Capital + full stop.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The dog is running on the grass.",
            commonErrors: ["Unrelated sentence or missing punctuation."],
          },
        },
        {
          id: "edpe1-u3-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Picture shows children playing football in a park. Write two sentences about it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Composition",
                statement:
                  "Two sentences about picture with correct punctuation.",
              },
            ],
            steps: [
              {
                reasoning: "First sentence describes scene.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Second sentence adds detail.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both punctuated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'Children are playing football. They are in a park.'",
            commonErrors: ["Repeating same sentence or wrong punctuation."],
          },
        },
        {
          id: "edpe1-u3-co-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a three-sentence story about this picture: a girl finding a lost puppy.",
          parts: [
            {
              label: "a",
              prompt: "Write the beginning (what happens first).",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Write the middle (what happens next).",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Write the end (how it finishes).",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Check all sentences have capitals and full stops.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story writing",
                statement:
                  "Three sentences with beginning/middle/end structure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Beginning event written.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Middle event written.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "End written.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "All punctuation correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'A girl found a puppy. It was lost and scared. She took it home.'",
            commonErrors: ["No story structure — just describing picture."],
          },
        },
      ],
    },
    {
      id: "edpe1-u3-editing",
      title: "Checking and improving writing",
      skill: "Read back writing and fix mistakes.",
      lesson: {
        sections: [
          {
            heading: "Read it back",
            body: "Writers check their work! Read what you wrote slowly. Does it make sense? Are there missing words? 'The cat sat mat' — missing 'on the'. Reading aloud helps you hear mistakes.",
          },
          {
            heading: "Fixing mistakes",
            body: "Check for: capital letters at starts, full stops at ends, finger spaces, and correct spellings. 'i like my dog rex' → 'I like my dog Rex.' Fix every mistake you find.",
          },
        ],
        keyFormulas: [
          { name: "Editing", statement: "Read → check → fix mistakes" },
          {
            name: "Checklist",
            statement: "Capitals, full stops, spaces, spelling",
          },
        ],
        workedExample: {
          problem: "Fix: 'the cat sat on mat'",
          solution: "The cat sat on the mat.",
        },
      },
      questions: [
        {
          id: "edpe1-u3-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do after writing a sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read it back and check for mistakes" },
              { id: "b", text: "Put your pen down immediately" },
              { id: "c", text: "Write another one" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Editing",
                statement: "Always check work.",
              },
            ],
            steps: [
              {
                reasoning: "Read back to find mistakes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Read it back and check",
            commonErrors: ["Skipping the checking step."],
          },
        },
        {
          id: "edpe1-u3-ed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fix this sentence: 'i have a cat called tom.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Editing",
                statement: "I have a cat called Tom.",
              },
            ],
            steps: [
              { reasoning: "Capital I and Tom.", marks: 1, markCode: "M" },
              { reasoning: "Full stop present.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I have a cat called Tom.",
            commonErrors: ["Missing capitals or full stop."],
          },
        },
        {
          id: "edpe1-u3-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mistake: 'the dog sat mat.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading",
                statement:
                  "Missing capital, missing 'on the', missing full stop.",
              },
            ],
            steps: [
              {
                reasoning: "Read carefully for errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identify missing capital and words.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Corrected: 'The dog sat on the mat.'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The dog sat on the mat.",
            commonErrors: ["Not spotting missing capital or words."],
          },
        },
        {
          id: "edpe1-u3-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Edit this writing: 'my dog rex is very big. he likes to run.'",
          parts: [
            { label: "a", prompt: "Fix the first sentence.", marks: 2 },
            { label: "b", prompt: "Fix the second sentence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Editing",
                statement: "My dog Rex is very big. He likes to run.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "My capitalised; Rex capitalised; full stop.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correctly punctuated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "He capitalised; full stop.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correctly punctuated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "My dog Rex is very big. He likes to run.",
            commonErrors: ["Missing capital on 'He' — new sentence."],
          },
        },
      ],
    },
  ],
};
