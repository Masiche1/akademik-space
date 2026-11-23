import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpe4-u4-lesson-4-1",
  code: "4-1",
  title: "Poetry Analysis and Response",
  goal: "I CAN analyse poems for meaning, structure and language.",
  standards: ["Year 4 Reading"],
  vocabulary: [
    {
      term: "Stanza",
      definition: "A group of lines forming a unit in a poem.",
    },
    { term: "Rhyme scheme", definition: "The pattern of rhymes: ABAB, AABB." },
    {
      term: "Personification",
      definition: "Giving human qualities to non-human things.",
    },
    {
      term: "Enjambment",
      definition: "A sentence continuing across a line break.",
    },
  ],
  concepts: [
    {
      id: "edpe4-u4-analysis",
      title: "Analysing poems",
      skill: "Identify structure, language and meaning in poems.",
      lesson: {
        sections: [
          {
            heading: "Structure and sound",
            body: "Poems have stanzas (like paragraphs), rhyme schemes (ABAB patterns) and rhythm. Sound devices include alliteration, onomatopoeia and assonance. Look at how lines break — enjambment can create speed or tension.",
          },
          {
            heading: "Language and meaning",
            body: "Poets choose words carefully. Personification gives life to objects: 'the wind whispered'. Imagery appeals to senses. Ask: What is the poem about? What feeling does it create? How does the poet achieve this?",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry analysis",
            statement: "Structure + sound + language = meaning",
          },
        ],
        workedExample: {
          problem: "Analyse: 'The fog comes on little cat feet.'",
          solution:
            "Personification (cat feet) + imagery (soft, sneaky movement) creates quiet, mysterious feeling.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is personification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing using 'like'" },
              { id: "b", text: "Giving human qualities to things" },
              { id: "c", text: "Words that sound like their meaning" },
              { id: "d", text: "Repeating sounds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personification",
                statement: "Human qualities to non-human.",
              },
            ],
            steps: [
              {
                reasoning: "Personification = human traits on objects/animals.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Human qualities to things",
            commonErrors: ["Confusing with simile."],
          },
        },
        {
          id: "edpe4-u4-an-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does ABAB rhyme scheme mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lines rhyme in pairs" },
              {
                id: "b",
                text: "First and third lines rhyme, second and fourth rhyme",
              },
              { id: "c", text: "All lines rhyme" },
              { id: "d", text: "No rhyme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhyme scheme",
                statement: "Pattern of rhymes.",
              },
            ],
            steps: [
              {
                reasoning: "ABAB = alternating rhyme pattern.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Alternating rhymes",
            commonErrors: ["Wrong interpretation."],
          },
        },
        {
          id: "edpe4-u4-an-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify two language features in: 'The wind whispered secrets through the trees.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Language analysis",
                statement: "Personification + imagery.",
              },
            ],
            steps: [
              {
                reasoning: "Personification: wind 'whispered'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Imagery: 'secrets' creates mysterious feeling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both identified correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Personification + imagery",
            commonErrors: ["Missing one feature."],
          },
        },
        {
          id: "edpe4-u4-an-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a poet creates a feeling of sadness in a poem about rain. Give two techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetry analysis",
                statement: "Two valid techniques.",
              },
            ],
            steps: [
              {
                reasoning: "Slow rhythm/meter creates melancholy pace.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dark imagery: 'grey skies', 'weeping clouds'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Low sounds: 'murmur', 'drip' reinforce sadness.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Rhythm + imagery + sound",
            commonErrors: ["Only one technique."],
          },
        },
      ],
    },
    {
      id: "edpe4-u4-response",
      title: "Responding to Poetry",
      skill: "Write a personal response to a poem.",
      lesson: {
        sections: [
          {
            heading: "Personal response",
            body: "A personal response says what you think and feel about a poem. Start with your overall impression, then support it: 'I enjoyed this poem because...' or 'The poem made me feel... because the poet used...'. Always link feelings back to the poem's words.",
          },
          {
            heading: "Comparing poems",
            body: "When comparing two poems, look at: subject (what they're about), form (structure, rhyme), language (imagery, sound) and feeling (mood). Use 'whereas', 'similarly', 'in contrast' to show differences and similarities.",
          },
        ],
        keyFormulas: [
          { name: "Response", statement: "Feeling + evidence from poem" },
        ],
        workedExample: {
          problem: "Write a response opening: 'The Highwayman' made me feel...",
          solution:
            "I felt excited and tense because the poem's fast rhythm mimics the horse's gallop.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a personal response to a poem include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just your opinion" },
              { id: "b", text: "Your feelings linked to the poem's words" },
              { id: "c", text: "A summary only" },
              { id: "d", text: "The poet's biography" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Personal response",
                statement: "Feelings + evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Good response links feelings to text.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Feelings + evidence",
            commonErrors: ["Unsupported opinion."],
          },
        },
        {
          id: "edpe4-u4-rp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which phrase helps compare poems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In conclusion" },
              { id: "b", text: "In contrast" },
              { id: "c", text: "For example" },
              { id: "d", text: "As a result" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative language",
                statement: "Contrast shows differences.",
              },
            ],
            steps: [
              {
                reasoning: "'In contrast' highlights differences.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** In contrast",
            commonErrors: ["Wrong connective."],
          },
        },
        {
          id: "edpe4-u4-rp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a personal response sentence about a poem you enjoyed. Include a feeling and evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Personal response",
                statement: "Feeling + evidence.",
              },
            ],
            steps: [
              {
                reasoning: "States a feeling: 'I felt...'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links to poem: 'because the poet used...'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear, specific response.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Feeling + evidence response",
            commonErrors: ["No evidence given."],
          },
        },
        {
          id: "edpe4-u4-rp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare two poems about nature: one uses lots of rhyme, the other is free verse. What does this difference suggest about the poets' styles?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetry comparison",
                statement: "Form reveals style.",
              },
            ],
            steps: [
              {
                reasoning: "Rhyme suggests traditional, playful style.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Free verse suggests modern, natural style.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links form to intended effect.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Form reveals different styles",
            commonErrors: ["Surface comparison only."],
          },
        },
      ],
    },
    {
      id: "edpe4-u4-comparison",
      title: "Comparing Text Types",
      skill: "Compare poetry, prose and plays.",
      lesson: {
        sections: [
          {
            heading: "Text types compared",
            body: "Poetry uses rhythm, rhyme and compressed language to create feeling. Prose (stories) uses paragraphs, dialogue and description to tell events. Plays use dialogue and stage directions for performance. Each has different purposes and techniques.",
          },
          {
            heading: "Purpose and audience",
            body: "Poems often express emotion or reflect on life. Stories entertain or teach. Plays entertain live audiences. The purpose shapes the form: poems are short and musical, stories are longer with plot, plays are written to be performed.",
          },
        ],
        keyFormulas: [
          {
            name: "Text types",
            statement: "Poetry = feeling; Prose = story; Play = performance",
          },
        ],
        workedExample: {
          problem:
            "Why might a poet choose a poem instead of a story to describe a sunset?",
          solution:
            "To capture the feeling and beauty in compressed, musical language rather than narrative.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a play?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To be read silently" },
              { id: "b", text: "To be performed live" },
              { id: "c", text: "To be sung" },
              { id: "d", text: "To be drawn" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Play purpose",
                statement: "Performance.",
              },
            ],
            steps: [
              {
                reasoning: "Plays are written for acting out.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Performed live",
            commonErrors: ["Confusing with prose."],
          },
        },
        {
          id: "edpe4-u4-ct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which text type uses stage directions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poem" },
              { id: "b", text: "Story" },
              { id: "c", text: "Play" },
              { id: "d", text: "Letter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stage directions",
                statement: "Only in plays.",
              },
            ],
            steps: [
              {
                reasoning: "Stage directions appear in playscripts.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Play",
            commonErrors: ["Wrong text type."],
          },
        },
        {
          id: "edpe4-u4-ct-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one feature of poetry and one of prose. How do they differ?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Text types",
                statement: "One feature each + difference.",
              },
            ],
            steps: [
              {
                reasoning: "Poetry: rhyme/rhythm; prose: paragraphs/dialogue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poetry compresses language; prose develops narrative.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poetry=compressed+musical; Prose=narrative+dialogue",
            commonErrors: ["No clear difference."],
          },
        },
        {
          id: "edpe4-u4-ct-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might an author choose to write a story as a play instead of prose? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Text choice",
                statement: "Two valid reasons.",
              },
            ],
            steps: [
              {
                reasoning: "To be performed live for an audience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "To show character through dialogue and action rather than description.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasons linked to purpose.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Performance + character through action",
            commonErrors: ["Unrelated reasons."],
          },
        },
      ],
    },
  ],
};
