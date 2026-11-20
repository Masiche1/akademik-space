import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "edpe6-u3-lesson-3-3",
  code: "3-3",
  title: "Editing and Revising",
  goal: "I CAN revise and edit writing systematically to achieve polish and precision.",
  standards: ["Year 6 Writing"],
  vocabulary: [
    { term: "Revising", definition: "Improving content, structure and style." },
    {
      term: "Editing",
      definition: "Correcting grammar, spelling and punctuation.",
    },
    { term: "Redundancy", definition: "Unnecessary repetition or wordiness." },
    { term: "Precision", definition: "Using exact words for exact meaning." },
  ],
  concepts: [
    {
      id: "edpe6-u3-revising",
      title: "Advanced revising",
      skill: "Revise writing to strengthen argument, style and clarity.",
      lesson: {
        sections: [
          {
            heading: "Content revision",
            body: "Does every sentence serve a purpose? Is the argument logical? Are there redundancies? Is the ending satisfying? Would a reader be engaged? Cut anything that doesn't add value.",
          },
          {
            heading: "Style revision",
            body: "Vary sentence length and structure. Replace weak verbs ('went', 'got', 'said') with strong ones ('rushed', 'received', 'whispered'). Remove filler words. Ensure consistent tone.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "Every sentence adds value" },
          { name: "Variety", statement: "Mix sentence lengths" },
          { name: "Strong verbs", statement: "Replace weak ones" },
        ],
        workedExample: {
          problem: "Improve: 'The man went into the room and got very angry.'",
          solution:
            "'The man stormed into the room, his face burning with rage.'",
        },
      },
      questions: [
        {
          id: "edpe6-u3-rv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is redundancy in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Good description" },
              { id: "b", text: "Unnecessary repetition" },
              { id: "c", text: "Strong verbs" },
              { id: "d", text: "Complex sentences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Redundancy",
                statement: "Unnecessary repetition.",
              },
            ],
            steps: [
              {
                reasoning: "Redundancy = repetition.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Unnecessary repetition",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u3-rv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a weak verb that should be replaced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sprinted" },
              { id: "b", text: "went" },
              { id: "c", text: "whispered" },
              { id: "d", text: "devoured" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strong verbs",
                statement: "went = weak; replace with precise verb.",
              },
            ],
            steps: [
              { reasoning: "Identify weak verb.", marks: 1, markCode: "M" },
              { reasoning: "Answer: went.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** went",
            commonErrors: ["Choosing strong verb."],
          },
        },
        {
          id: "edpe6-u3-rv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Revise: 'The dog went into the house and got very tired.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Revising",
                statement: "Strong verbs + precise language.",
              },
            ],
            steps: [
              { reasoning: "Strong verb used.", marks: 1, markCode: "A" },
              { reasoning: "Precise adjective.", marks: 1, markCode: "A" },
              { reasoning: "Improved.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "e.g. 'The exhausted dog trudged into the house.'",
            commonErrors: ["Weak or no improvement."],
          },
        },
        {
          id: "edpe6-u3-rv-q4",
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
                name: "Advanced revising",
                statement: "All improvements made.",
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
                reasoning: "Strong words.",
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
                reasoning: "Flow improved.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'The golden sun beat down mercilessly. We raced across the grass, laughter echoing, as the afternoon stretched lazily before us.'",
            commonErrors: ["Minor changes only."],
          },
        },
      ],
    },
    {
      id: "edpe6-u3-editing",
      title: "Proofreading and polish",
      skill: "Proofread systematically to eliminate errors and achieve polish.",
      lesson: {
        sections: [
          {
            heading: "Systematic proofreading",
            body: "Pass 1: spelling. Pass 2: punctuation (capitals, full stops, commas, apostrophes, speech marks). Pass 3: grammar (tense, agreement, word order). Pass 4: sense (does it read well?). Read aloud to catch errors.",
          },
          {
            heading: "Polish checklist",
            body: "Is the tone consistent? Are there any remaining redundancies? Does every paragraph have a clear purpose? Is the ending satisfying? Is the formatting correct?",
          },
        ],
        keyFormulas: [
          {
            name: "Four passes",
            statement: "Spelling → punctuation → grammar → sense",
          },
          { name: "Read aloud", statement: "Catches errors" },
          { name: "Polish", statement: "Final quality check" },
        ],
        workedExample: {
          problem:
            "Find all errors: 'me and tom was going too the park but its to late and they couldnt find there ball.'",
          solution:
            "'Tom and I were going to the park but it's too late and they couldn't find their ball.'",
        },
      },
      questions: [
        {
          id: "edpe6-u3-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the four proofreading passes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spelling, punctuation, grammar, sense" },
              { id: "b", text: "Grammar, spelling, style, format" },
              { id: "c", text: "Read, write, check, submit" },
              { id: "d", text: "Only spelling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading passes",
                statement: "Spelling → punctuation → grammar → sense.",
              },
            ],
            steps: [{ reasoning: "Correct order.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Spelling, punctuation, grammar, sense",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpe6-u3-ed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why read aloud when proofreading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's faster" },
              { id: "b", text: "Catches errors eyes miss" },
              { id: "c", text: "It's required" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading technique",
                statement: "Reading aloud catches awkward phrasing.",
              },
            ],
            steps: [
              { reasoning: "Purpose understood.", marks: 1, markCode: "M" },
              { reasoning: "Answer: catches errors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Catches errors eyes miss",
            commonErrors: ["No purpose given."],
          },
        },
        {
          id: "edpe6-u3-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct all errors: 'me and sarah was going too the park but its to late.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Error correction",
                statement: "Pronoun order, agreement, homophones.",
              },
            ],
            steps: [
              { reasoning: "Sarah and I.", marks: 1, markCode: "A" },
              { reasoning: "were.", marks: 1, markCode: "A" },
              { reasoning: "to, it's.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sarah and I were going to the park but it's too late.",
            commonErrors: ["Missing corrections."],
          },
        },
        {
          id: "edpe6-u3-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Proofread this and explain each correction: 'The childrens toys was in the garden and they couldnt find it anywhere.'",
          parts: [
            { label: "a", prompt: "Correct 'childrens'", marks: 1 },
            { label: "b", prompt: "Correct 'was'", marks: 1 },
            { label: "c", prompt: "Correct 'couldnt'", marks: 1 },
            { label: "d", prompt: "Write corrected sentence", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading",
                statement: "Apostrophe, agreement, contraction.",
              },
            ],
            steps: [
              { part: "a", reasoning: "children's.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "were.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "couldn't.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Full sentence.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "The children's toys were in the garden and they couldn't find it anywhere.",
            commonErrors: ["Missing corrections."],
          },
        },
      ],
    },
  ],
};
