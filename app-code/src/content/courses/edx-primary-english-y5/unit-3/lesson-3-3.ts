import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "edpe5-u3-lesson-3-3",
  code: "3-3",
  title: "Editing, Revising and Improving Writing",
  goal: "I CAN revise and edit writing to improve clarity, variety and impact.",
  standards: ["Year 5 Writing"],
  vocabulary: [
    { term: "Revising", definition: "Improving content, structure and style." },
    {
      term: "Editing",
      definition: "Correcting grammar, spelling and punctuation.",
    },
    { term: "Redundancy", definition: "Unnecessary repetition." },
    { term: "Precision", definition: "Using exact words for exact meaning." },
  ],
  concepts: [
    {
      id: "edpe5-u3-revising",
      title: "Revising for improvement",
      skill: "Revise writing to strengthen content and style.",
      lesson: {
        sections: [
          {
            heading: "Revising checklist",
            body: "Does every sentence add value? Is the structure clear? Are there redundancies ('very big' → 'huge')? Does the ending satisfy? Would a reader be engaged throughout?",
          },
          {
            heading: "Improving style",
            body: "Vary sentence length for rhythm. Replace weak verbs ('went', 'got', 'said') with strong ones ('rushed', 'received', 'whispered'). Add sensory details. Remove filler words.",
          },
        ],
        keyFormulas: [
          { name: "Revising", statement: "Improve content and style" },
          { name: "Editing", statement: "Correct errors" },
          { name: "Strong verbs", statement: "Replace weak ones" },
        ],
        workedExample: {
          problem: "Improve: 'The man went to the store and got some bread.'",
          solution:
            "'The man hurried to the bakery and purchased fresh bread.'",
        },
      },
      questions: [
        {
          id: "edpe5-u3-rv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between revising and editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              {
                id: "b",
                text: "Revising improves content; editing fixes errors",
              },
              { id: "c", text: "Editing is optional" },
              { id: "d", text: "Revising is spelling only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Revising vs editing",
                statement: "Content vs errors.",
              },
            ],
            steps: [
              { reasoning: "Difference understood.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "**(b)** Revising improves content; editing fixes errors",
            commonErrors: ["Confusing terms."],
          },
        },
        {
          id: "edpe5-u3-rv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a redundancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She ran quickly" },
              { id: "b", text: "She ran very fast" },
              { id: "c", text: "She sprinted" },
              { id: "d", text: "She raced" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Redundancy",
                statement:
                  "'very fast' unnecessary when 'ran' implies speed or use 'sprinted'.",
              },
            ],
            steps: [
              {
                reasoning: "Identify unnecessary words.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: very fast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** She ran very fast",
            commonErrors: ["Not recognising redundancy."],
          },
        },
        {
          id: "edpe5-u3-rv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this sentence: 'The dog went into the house and got very tired.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improving style",
                statement: "Strong verbs + precise adjectives.",
              },
            ],
            steps: [
              { reasoning: "'went' → stronger verb.", marks: 1, markCode: "A" },
              {
                reasoning: "'got very tired' → precise.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Sentence improved.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "e.g. 'The exhausted dog trudged into the house.'",
            commonErrors: ["Weak or no improvement."],
          },
        },
        {
          id: "edpe5-u3-rv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Revise this paragraph to improve style: 'It was a nice day. The sun was hot. We went to the park. We played games. We had fun.'",
          parts: [
            { label: "a", prompt: "Vary sentence structure", marks: 1 },
            { label: "b", prompt: "Replace weak words", marks: 1 },
            { label: "c", prompt: "Add sensory detail", marks: 1 },
            { label: "d", prompt: "Improve flow", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Revising",
                statement: "Variety + strong words + detail + flow.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Varied structure.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Strong words used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Detail added.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Better flow.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'The golden sun beat down on the park. We raced across the grass, laughter echoing, as the afternoon stretched lazily before us.'",
            commonErrors: ["Minor changes only."],
          },
        },
      ],
    },
    {
      id: "edpe5-u3-editing",
      title: "Proofreading and error correction",
      skill: "Proofread writing systematically to eliminate all errors.",
      lesson: {
        sections: [
          {
            heading: "Systematic proofreading",
            body: "Check in passes: 1) spelling 2) punctuation (capitals, full stops, commas, apostrophes) 3) grammar (tense, agreement, word order) 4) sense (does it read well?). Read aloud to catch awkward phrasing.",
          },
          {
            heading: "Common errors",
            body: "Homophone confusion (their/there/they're), missing apostrophes (don't → don't), comma splices, tense inconsistency, subject-verb disagreement.",
          },
        ],
        keyFormulas: [
          {
            name: "Proofreading passes",
            statement: "Spelling → punctuation → grammar → sense",
          },
          { name: "Read aloud", statement: "Catches errors" },
          { name: "Consistency", statement: "Tense and style throughout" },
        ],
        workedExample: {
          problem: "Find errors: 'the childrens toys was in the garden'",
          solution:
            "'The children's toys were in the garden' (capital, apostrophe, were).",
        },
      },
      questions: [
        {
          id: "edpe5-u3-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you check first when proofreading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Handwriting" },
              { id: "b", text: "Spelling" },
              { id: "c", text: "Font" },
              { id: "d", text: "Margins" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading order",
                statement: "Spelling first.",
              },
            ],
            steps: [
              { reasoning: "Spelling first pass.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Spelling",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpe5-u3-ed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'comma splice' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Missing comma" },
              { id: "b", text: "Two sentences joined by comma only" },
              { id: "c", text: "Too many commas" },
              { id: "d", text: "Comma in wrong place" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comma splice",
                statement: "Two independent clauses joined by comma.",
              },
            ],
            steps: [
              { reasoning: "Definition understood.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: joined by comma.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Two sentences joined by comma only",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe5-u3-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct all errors: 'the childrens ball was lost and they couldnt find it.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Error correction",
                statement: "Capital, apostrophe, contraction.",
              },
            ],
            steps: [
              { reasoning: "Capital T fixed.", marks: 1, markCode: "A" },
              { reasoning: "children's apostrophe.", marks: 1, markCode: "A" },
              { reasoning: "couldn't contraction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The children's ball was lost and they couldn't find it.",
            commonErrors: ["Missing errors."],
          },
        },
        {
          id: "edpe5-u3-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Proofread this sentence and explain each correction: 'me and sarah was going too the park but its to late.'",
          parts: [
            { label: "a", prompt: "Correct 'me and sarah'", marks: 1 },
            { label: "b", prompt: "Correct 'was'", marks: 1 },
            { label: "c", prompt: "Correct 'too' and 'its'", marks: 1 },
            { label: "d", prompt: "Write corrected sentence", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading",
                statement: "Pronoun order, agreement, homophones.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Sarah and I.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "were.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "to, it's.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Full sentence.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Sarah and I were going to the park but it's too late.",
            commonErrors: ["Missing corrections."],
          },
        },
      ],
    },
  ],
};
