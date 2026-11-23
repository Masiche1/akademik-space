import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpe3-u4-lesson-4-1",
  code: "4-1",
  title: "Poetry Features",
  goal: "I CAN identify and use features of poetry.",
  standards: ["Year 3 Reading", "Year 3 Writing"],
  vocabulary: [
    {
      term: "Rhyme",
      definition: "Words that sound the same at the end: cat, hat.",
    },
    { term: "Rhythm", definition: "The beat or pattern of sounds in a poem." },
    {
      term: "Alliteration",
      definition: "Repeated starting sounds: 'slippery, slithery snakes'.",
    },
    {
      term: "Simile",
      definition: "Comparing using 'like' or 'as': 'as brave as a lion'.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u4-poetry",
      title: "Features of poetry",
      skill: "Identify rhyme, rhythm, alliteration and imagery in poems.",
      lesson: {
        sections: [
          {
            heading: "Sound features",
            body: "Poems use sound: rhyme (words ending alike), rhythm (the beat), alliteration (repeated starting sounds like 'Peter Piper picked'), onomatopoeia (sound words like 'bang', 'buzz'). These make poems fun to read aloud.",
          },
          {
            heading: "Imagery and feeling",
            body: "Poets use words to create pictures and feelings. A simile compares with 'like' or 'as': 'as red as a rose'. Metaphors say one thing IS another: 'the sea is a giant'. Describing words help you see and feel the poem.",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry features",
            statement: "Rhyme + rhythm + alliteration + imagery",
          },
        ],
        workedExample: {
          problem:
            "Identify the feature: 'The rain came down, plip-plop, plip-plop.'",
          solution: "Onomatopoeia ('plip-plop' is a sound) and repetition.",
        },
      },
      questions: [
        {
          id: "edpe3-u4-po-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is rhyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words that start the same" },
              { id: "b", text: "Words that end with the same sound" },
              { id: "c", text: "Words that mean the same" },
              { id: "d", text: "Long words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhyme",
                statement: "Same ending sound.",
              },
            ],
            steps: [
              {
                reasoning: "Rhyme = words ending alike (cat, hat).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Words ending with same sound",
            commonErrors: ["Confusing with alliteration."],
          },
        },
        {
          id: "edpe3-u4-po-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is alliteration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated ending sounds" },
              { id: "b", text: "Repeated starting sounds" },
              { id: "c", text: "A rhyming couplet" },
              { id: "d", text: "A poem without words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alliteration",
                statement: "Repeated starting sounds.",
              },
            ],
            steps: [
              {
                reasoning: "Alliteration = same starting sound.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Repeated starting sounds",
            commonErrors: ["Confusing with rhyme."],
          },
        },
        {
          id: "edpe3-u4-po-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the poetry feature: 'The wind whispered softly through the willows.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetry features",
                statement: "Alliteration: w-sounds.",
              },
            ],
            steps: [
              {
                reasoning: "'whispered' and 'willows' start with w.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also 'wind' starts with w — alliteration.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Feature: alliteration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alliteration",
            commonErrors: ["Not identifying the feature."],
          },
        },
        {
          id: "edpe3-u4-po-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a line of poetry using alliteration about a cat.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetry writing",
                statement: "Alliteration correct.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Words starting with same letter: 'curious cat', 'sleepy siamese'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Line makes sense and describes a cat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct alliteration throughout.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Alliterative line about a cat",
            commonErrors: ["Not actually alliterative."],
          },
        },
      ],
    },
    {
      id: "edpe3-u4-poemtypes",
      title: "Types of poems",
      skill: "Recognise narrative, acrostic and free verse poems.",
      lesson: {
        sections: [
          {
            heading: "Narrative poems",
            body: "Narrative poems tell a story: 'The Highwayman', 'The Owl and the Pussycat'. They have characters, a problem and often rhyme. They read like stories in poem form.",
          },
          {
            heading: "Acrostic and free verse",
            body: "Acrostic poems spell a word with the first letters of each line: 'BEAUTIFUL' where each line starts with B, E, A... Free verse has no rhyme or rhythm rules — it flows naturally like speech.",
          },
        ],
        keyFormulas: [
          { name: "Acrostic", statement: "First letters spell a word" },
          { name: "Free verse", statement: "No rhyme or rhythm rules" },
        ],
        workedExample: {
          problem: "What type of poem is 'The Rime of the Ancient Mariner'?",
          solution: "Narrative poem — it tells a story.",
        },
      },
      questions: [
        {
          id: "edpe3-u4-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a narrative poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A poem that tells a story" },
              { id: "b", text: "A poem with no words" },
              { id: "c", text: "A poem about feelings only" },
              { id: "d", text: "A list poem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative poem",
                statement: "Tells a story.",
              },
            ],
            steps: [
              {
                reasoning: "Narrative poems have characters and events.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Tells a story",
            commonErrors: ["Confusing types."],
          },
        },
        {
          id: "edpe3-u4-pt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In an acrostic poem, what spells the word?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The last letters" },
              { id: "b", text: "The first letters of each line" },
              { id: "c", text: "The rhyming words" },
              { id: "d", text: "The title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acrostic",
                statement: "First letters spell word.",
              },
            ],
            steps: [
              {
                reasoning: "Acrostic = first letters down the side spell word.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** First letters",
            commonErrors: ["Wrong position."],
          },
        },
        {
          id: "edpe3-u4-pt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write an acrostic poem for the word 'RAIN' (one line starting with each letter).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Acrostic",
                statement: "Each line starts with R-A-I-N.",
              },
            ],
            steps: [
              { reasoning: "Line 1 starts with R.", marks: 1, markCode: "M" },
              {
                reasoning: "Lines 2-4 start with A, I, N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each line makes sense about rain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4-line acrostic for RAIN",
            commonErrors: ["Wrong letters or no meaning."],
          },
        },
        {
          id: "edpe3-u4-pt-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare a rhyming poem and free verse. Give one difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Poem types",
                statement: "Rhyme vs no-rhyme.",
              },
            ],
            steps: [
              {
                reasoning: "Rhyming poems have end rhymes; free verse doesn't.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rhyming poems have rhythm; free verse flows naturally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear comparison with example.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Rhyming has rhyme+rhythm; free verse doesn't",
            commonErrors: ["Vague comparison."],
          },
        },
      ],
    },
    {
      id: "edpe3-u4-poetrymeaning",
      title: "Understanding poems",
      skill: "Interpret meaning and feelings in poems.",
      lesson: {
        sections: [
          {
            heading: "What poems mean",
            body: "Poems often have a deeper meaning or feeling. 'The fog comes on little cat feet' doesn't just describe fog — it makes you feel the quiet, sneaky way fog arrives. Ask: What feeling does this poem give? What is the poet trying to say?",
          },
          {
            heading: "Reading aloud",
            body: "Reading a poem aloud helps you hear the rhythm and rhyme. Listen for the beat, the pauses, the rhyming words. Performance brings the poem to life — the voice can show anger, sadness, joy or excitement.",
          },
        ],
        keyFormulas: [
          { name: "Poem meaning", statement: "Feelings + deeper message" },
        ],
        workedExample: {
          problem:
            "What feeling does 'The rain fell softly on the roof' create?",
          solution:
            "Calm, peaceful, cosy feeling — 'softly' suggests gentleness.",
        },
      },
      questions: [
        {
          id: "edpe3-u4-pm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why read poems aloud?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To hear rhythm and rhyme" },
              { id: "b", text: "To skip the poem" },
              { id: "c", text: "To read faster" },
              { id: "d", text: "To avoid reading" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Performance",
                statement: "Hearing helps understanding.",
              },
            ],
            steps: [
              {
                reasoning: "Aloud lets you hear beat and rhyme.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Hear rhythm and rhyme",
            commonErrors: ["Not understanding performance."],
          },
        },
        {
          id: "edpe3-u4-pm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What feeling does 'The thunder roared and the lightning flashed' create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calm and quiet" },
              { id: "b", text: "Excitement or fear" },
              { id: "c", text: "Sleepy" },
              { id: "d", text: "Bored" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poem feelings",
                statement: "Strong words create strong feelings.",
              },
            ],
            steps: [
              {
                reasoning: "'roared' and 'flashed' suggest power/fear.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Excitement or fear",
            commonErrors: ["Missing the feeling."],
          },
        },
        {
          id: "edpe3-u4-pm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the feeling in: 'The lonely lighthouse stood on the cliff.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poem interpretation",
                statement: "Lonely feeling.",
              },
            ],
            steps: [
              {
                reasoning: "'lonely' directly says the lighthouse feels alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "'stood' suggests stillness and isolation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Overall feeling: isolation, sadness or solitude.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lonely, isolated feeling",
            commonErrors: ["Not linking words to feelings."],
          },
        },
        {
          id: "edpe3-u4-pm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the feelings in 'The sun smiled on the flowers' vs 'The storm raged over the city'. What words create the feelings?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetry analysis",
                statement: "Word choice creates feeling.",
              },
            ],
            steps: [
              {
                reasoning: "'smiled' creates happy feeling; 'sun' is warm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'raged' creates angry/fearful feeling; 'storm' is powerful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear comparison of word choices.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Happiness vs anger; 'smiled' vs 'raged'",
            commonErrors: ["Not identifying specific words."],
          },
        },
      ],
    },
  ],
};
