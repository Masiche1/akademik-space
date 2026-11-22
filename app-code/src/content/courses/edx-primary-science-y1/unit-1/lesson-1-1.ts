import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edps1-u1-lesson-1-1",
  code: "1-1",
  title: "Working Scientifically: Observing",
  goal: "I CAN observe the world closely and describe what I see.",
  standards: ["Year 1 Science: Working scientifically"],
  vocabulary: [
    { term: "Observe", definition: "To look carefully and notice details." },
    { term: "Describe", definition: "To say what something is like." },
    {
      term: "Compare",
      definition: "To look at how things are the same or different.",
    },
    { term: "Sort", definition: "To group things by their properties." },
  ],
  concepts: [
    {
      id: "edps1-u1-observe",
      title: "Observing and describing",
      skill: "Use our senses to observe and describe objects.",
      lesson: {
        sections: [
          {
            heading: "Using our senses",
            body: "Scientists use their senses to find out about the world: **sight** (look), **hearing** (listen), **touch** (feel), **smell** (sniff), **taste** (careful!). Observing closely means noticing details others miss.",
          },
          {
            heading: "Describing what we see",
            body: "Good descriptions use: colour ('bright red'), size ('tiny', 'huge'), shape ('round', 'pointy'), texture ('smooth', 'bumpy'), and what it does ('it rolls', 'it floats').",
          },
        ],
        keyFormulas: [
          { name: "Senses", statement: "Sight, hearing, touch, smell, taste" },
          {
            name: "Describe",
            statement: "Colour, size, shape, texture, action",
          },
        ],
        workedExample: {
          problem: "Describe a red ball.",
          solution:
            "'The ball is bright red, round and smooth. It bounces when I drop it.'",
        },
      },
      questions: [
        {
          id: "edps1-u1-obs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense do we use to find out if something is loud?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Touch" },
              { id: "b", text: "Smell" },
              { id: "c", text: "Sight" },
              { id: "d", text: "Hearing" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Senses",
                statement: "Hearing = loud/quiet.",
              },
            ],
            steps: [
              {
                reasoning: "Loud relates to hearing.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Hearing",
            commonErrors: ["Wrong sense."],
          },
        },
        {
          id: "edps1-u1-obs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word best describes something you can see through?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rough" },
              { id: "b", text: "Heavy" },
              { id: "c", text: "Transparent" },
              { id: "d", text: "Opaque" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transparent",
                statement: "See through.",
              },
            ],
            steps: [
              {
                reasoning: "See through = transparent.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: transparent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Transparent",
            commonErrors: ["Wrong vocabulary."],
          },
        },
        {
          id: "edps1-u1-obs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe a feather using three words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Describing",
                statement: "Colour, texture, size etc.",
              },
            ],
            steps: [
              { reasoning: "Word 1 given.", marks: 1, markCode: "A" },
              { reasoning: "Word 2 given.", marks: 1, markCode: "A" },
              { reasoning: "Word 3 given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'white, soft, light'",
            commonErrors: ["Fewer than three or vague."],
          },
        },
        {
          id: "edps1-u1-obs-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sort these into two groups and explain why: sponge, stone, paper, metal block.",
          parts: [
            { label: "a", prompt: "Group 1", marks: 1 },
            { label: "b", prompt: "Group 2", marks: 1 },
            { label: "c", prompt: "Property used", marks: 1 },
            { label: "d", prompt: "Explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sorting",
                statement: "e.g. soft (sponge, paper) vs hard (stone, metal).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Group 1 correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Group 2 correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Property identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Soft: sponge, paper; hard: stone, metal — by texture",
            commonErrors: ["Arbitrary grouping."],
          },
        },
      ],
    },
    {
      id: "edps1-u1-compare",
      title: "Comparing and classifying",
      skill: "Compare objects and group them by properties.",
      lesson: {
        sections: [
          {
            heading: "Comparing",
            body: "To compare, look for **similarities** (same) and **differences** (different). 'Both are red' vs 'one is big, one is small'. Comparing helps us understand objects.",
          },
          {
            heading: "Classifying",
            body: "Classifying = sorting into groups by shared properties. Animals with fur vs feathers; things that float vs sink; objects that bend vs stay rigid.",
          },
        ],
        keyFormulas: [
          { name: "Similar", statement: "Same property" },
          { name: "Different", statement: "Different property" },
          { name: "Classify", statement: "Sort into groups" },
        ],
        workedExample: {
          problem: "Compare a cat and a dog.",
          solution:
            "Similar: both pets, fur, four legs. Different: cat meows, dog barks; cat climbs, dog fetches.",
        },
      },
      questions: [
        {
          id: "edps1-u1-cmp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'compare' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Name objects" },
              { id: "b", text: "Look for similarities and differences" },
              { id: "c", text: "Make the same" },
              { id: "d", text: "Measure length" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compare",
                statement: "Similarities + differences.",
              },
            ],
            steps: [
              {
                reasoning: "Compare = find same/different.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Look for similarities and differences",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps1-u1-cmp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which pair is most similar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cat and car" },
              { id: "b", text: "Dog and wolf" },
              { id: "c", text: "Chair and cloud" },
              { id: "d", text: "Fish and bird" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing",
                statement: "Dog and wolf share many features.",
              },
            ],
            steps: [
              { reasoning: "Identify similarities.", marks: 1, markCode: "M" },
              { reasoning: "Answer: dog/wolf.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dog and wolf",
            commonErrors: ["Poor comparison."],
          },
        },
        {
          id: "edps1-u1-cmp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one similarity and one difference between a square and a circle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing shapes",
                statement:
                  "Both 2D flat shapes; square has corners, circle doesn't.",
              },
            ],
            steps: [
              { reasoning: "Similarity given.", marks: 1, markCode: "A" },
              { reasoning: "Difference given.", marks: 1, markCode: "A" },
              { reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. Both flat shapes; square has corners, circle is curved",
            commonErrors: ["Wrong or missing comparison."],
          },
        },
        {
          id: "edps1-u1-cmp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify these animals into two groups and justify: lion, eagle, salmon, bat.",
          parts: [
            { label: "a", prompt: "Group 1", marks: 1 },
            { label: "b", prompt: "Group 2", marks: 1 },
            { label: "c", prompt: "Criterion used", marks: 1 },
            { label: "d", prompt: "Justification", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classifying",
                statement:
                  "e.g. mammals (lion, bat) vs others; or land vs air/water.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Group 1 correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Group 2 correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Criterion identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Justified.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Mammals: lion, bat; non-mammals: eagle, salmon — by body covering/birth",
            commonErrors: ["Arbitrary or wrong criterion."],
          },
        },
      ],
    },
  ],
};
