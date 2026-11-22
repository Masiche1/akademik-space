import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "edpe5-u2-lesson-2-3",
  code: "2-3",
  title: "Poetry Analysis and Complex Texts",
  goal: "I CAN analyse poems and complex texts for meaning, structure and effect.",
  standards: ["Year 5 Reading"],
  vocabulary: [
    {
      term: "Form",
      definition: "The structure/type of a poem (sonnet, haiku, free verse).",
    },
    { term: "Volta", definition: "The turn or shift in a poem's meaning." },
    {
      term: "Enjambment",
      definition: "Running a sentence over multiple lines.",
    },
    { term: "Caesura", definition: "A pause within a line of poetry." },
  ],
  concepts: [
    {
      id: "edpe5-u2-poetry",
      title: "Poetry analysis",
      skill: "Analyse poems for meaning, form, and poetic devices.",
      lesson: {
        sections: [
          {
            heading: "Poetic devices",
            body: "**Alliteration**: repeated initial sounds ('slippery snake'). **Onomatopoeia**: sound words ('bang', 'whisper'). **Rhyme scheme**: pattern of rhymes (ABAB). **Meter**: rhythm pattern.",
          },
          {
            heading: "Deep meaning",
            body: "Look beyond literal: what is the poet really saying? What's the emotional journey? How does form reinforce meaning?",
          },
        ],
        keyFormulas: [
          { name: "Alliteration", statement: "Repeated initial sounds" },
          { name: "Onomatopoeia", statement: "Sound words" },
          { name: "Rhyme scheme", statement: "Pattern of rhymes" },
        ],
        workedExample: {
          problem: "Poem: 'The slippery snake slid silently.' What device?",
          solution:
            "Alliteration (s-sounds) + onomatopoeia-adjacent effect — creates stealthy feeling.",
        },
      },
      questions: [
        {
          id: "edpe5-u2-po-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is alliteration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A metaphor" },
              { id: "b", text: "Repeated initial sounds" },
              { id: "c", text: "Rhyme at line ends" },
              { id: "d", text: "A pause in verse" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alliteration",
                statement: "Repeated initial sounds.",
              },
            ],
            steps: [
              {
                reasoning: "Alliteration = repeated sounds.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Repeated initial sounds",
            commonErrors: ["Confusing with rhyme."],
          },
        },
        {
          id: "edpe5-u2-po-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which line uses onomatopoeia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The thunder went boom" },
              { id: "b", text: "Dark clouds gathered" },
              { id: "c", text: "Rain fell down" },
              { id: "d", text: "The wind blew" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Onomatopoeia",
                statement: "Sound word: boom.",
              },
            ],
            steps: [
              { reasoning: "Identify sound word.", marks: 1, markCode: "M" },
              { reasoning: "Answer: boom.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** thunder went boom",
            commonErrors: ["Missing sound word."],
          },
        },
        {
          id: "edpe5-u2-po-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What effect does alliteration create in 'silently sliding snake'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alliteration effect",
                statement: "Creates smooth, stealthy, or emphatic sound.",
              },
            ],
            steps: [
              { reasoning: "Device identified.", marks: 1, markCode: "M" },
              { reasoning: "Effect explained.", marks: 1, markCode: "A" },
              { reasoning: "Context considered.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Creates stealthy/smooth sound matching snake's movement",
            commonErrors: ["No effect or wrong device."],
          },
        },
        {
          id: "edpe5-u2-po-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse this haiku-like poem: 'Old pond / frog jumps in — / splash! Silence again.'",
          parts: [
            { label: "a", prompt: "What happens in the poem?", marks: 1 },
            {
              label: "b",
              prompt: "What poetic device is used for 'splash'?",
              marks: 1,
            },
            { label: "c", prompt: "What contrast is created?", marks: 1 },
            { label: "d", prompt: "What mood/feeling results?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poetry analysis",
                statement:
                  "Frog jumps; onomatopoeia; noise vs silence; peaceful then sudden.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Event described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Onomatopoeia identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Contrast noted.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Mood explained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Frog jumps; onomatopoeia; splash vs silence; peaceful with sudden sound",
            commonErrors: ["Literal only or missing devices."],
          },
        },
      ],
    },
    {
      id: "edpe5-u2-complex",
      title: "Complex text comprehension",
      skill:
        "Comprehend complex texts with multiple viewpoints and layered meaning.",
      lesson: {
        sections: [
          {
            heading: "Multiple viewpoints",
            body: "Complex texts present different perspectives: a character's view vs narrator's vs implied author's. Track whose perspective you're reading and how it shapes meaning.",
          },
          {
            heading: "Layered meaning",
            body: "Texts operate on literal, inferential and evaluative levels. Ask: what's really happening? What does it symbolise? What is the author suggesting about life/society?",
          },
        ],
        keyFormulas: [
          { name: "Perspective", statement: "Whose view we're seeing" },
          { name: "Layers", statement: "Literal → inferential → evaluative" },
          {
            name: "Symbolism",
            statement: "Objects/ideas representing bigger concepts",
          },
        ],
        workedExample: {
          problem:
            "Text about a caged bird singing. What might the bird symbolise?",
          solution:
            "Freedom, hope, or the human spirit constrained but resilient.",
        },
      },
      questions: [
        {
          id: "edpe5-u2-cx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'perspective' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The setting" },
              { id: "b", text: "Whose viewpoint we're seeing" },
              { id: "c", text: "The plot" },
              { id: "d", text: "The genre" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perspective",
                statement: "Whose view.",
              },
            ],
            steps: [
              {
                reasoning: "Perspective = viewpoint.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Whose viewpoint we're seeing",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe5-u2-cx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A story is told by the villain. How does this affect the reader's understanding?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The story is confusing" },
              { id: "b", text: "No effect" },
              { id: "c", text: "We see everything clearly" },
              { id: "d", text: "We see events from villain's biased view" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrator perspective",
                statement: "Villain's view is biased.",
              },
            ],
            steps: [
              { reasoning: "Perspective identified.", marks: 1, markCode: "M" },
              { reasoning: "Answer: biased view.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** villain's biased view",
            commonErrors: ["Missing bias."],
          },
        },
        {
          id: "edpe5-u2-cx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What might a 'caged bird singing' symbolise in a story?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Symbolism",
                statement: "Freedom, hope, resilience despite constraints.",
              },
            ],
            steps: [
              { reasoning: "Symbolism identified.", marks: 1, markCode: "M" },
              { reasoning: "Meaning explained.", marks: 1, markCode: "A" },
              {
                reasoning: "Reasonable interpretation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Freedom, hope, or resilience despite constraints",
            commonErrors: ["Literal only."],
          },
        },
        {
          id: "edpe5-u2-cx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A character says 'I'm fine' while crying. Analyse the layers of meaning.",
          parts: [
            { label: "a", prompt: "Literal meaning", marks: 1 },
            { label: "b", prompt: "Inferred meaning", marks: 1 },
            {
              label: "c",
              prompt: "What does this reveal about character?",
              marks: 1,
            },
            { label: "d", prompt: "Why is this effective writing?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Layered meaning",
                statement:
                  "Says fine but cries = not fine; hiding feelings; shows complexity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Literal: says fine.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Inferred: upset.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Character hides feelings.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Contradiction creates depth.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Says fine but cries = upset; hides feelings; contradiction creates depth",
            commonErrors: ["Only literal reading."],
          },
        },
      ],
    },
  ],
};
