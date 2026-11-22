import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "edpe4-u2-lesson-2-3",
  code: "2-3",
  title: "Poetry and Non-Fiction Deep Reading",
  goal: "I CAN analyse poems and read non-fiction closely.",
  standards: ["Year 4 Reading"],
  vocabulary: [
    { term: "Verse", definition: "A line of poetry." },
    {
      term: "Stanza",
      definition: "A group of verses (like a paragraph in a poem).",
    },
    { term: "Imagery", definition: "Words that create pictures in your mind." },
    {
      term: "Fact file",
      definition: "A section of key facts in an information book.",
    },
  ],
  concepts: [
    {
      id: "edpe4-u2-poetry",
      title: "Understanding poems",
      skill: "Analyse poems for meaning, rhythm and imagery.",
      lesson: {
        sections: [
          {
            heading: "Poem structure",
            body: "Poems use **verses** (lines) grouped into **stanzas**. They often rhyme and have rhythm. Look for repeated words or patterns — they emphasise important ideas.",
          },
          {
            heading: "Imagery and meaning",
            body: "Poets use imagery to paint pictures: 'the wind howled' creates a scary feeling. Ask: what is the poem really about? What feeling does it give? Look beyond the literal words.",
          },
        ],
        keyFormulas: [
          { name: "Verse/stanza", statement: "Line / group of lines" },
          { name: "Imagery", statement: "Words creating mental pictures" },
          { name: "Rhyme/rhythm", statement: "Sound patterns in poems" },
        ],
        workedExample: {
          problem:
            "Poem: 'The moon whispered secrets to the sleeping trees.' What image does it create?",
          solution: "A calm, magical night scene — moon and trees personified.",
        },
      },
      questions: [
        {
          id: "edpe4-u2-po-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stanza in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single line" },
              { id: "b", text: "The title" },
              { id: "c", text: "The rhyme" },
              { id: "d", text: "A group of lines" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stanza",
                statement: "Group of lines.",
              },
            ],
            steps: [
              { reasoning: "Stanza = verse group.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A group of lines",
            commonErrors: ["Confusing with verse."],
          },
        },
        {
          id: "edpe4-u2-po-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Poem: 'The storm roared and crashed against the shore.' What feeling does this create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calm" },
              { id: "b", text: "Happiness" },
              { id: "c", text: "Fear/power" },
              { id: "d", text: "Boredom" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imagery",
                statement: "'roared', 'crashed' = powerful/dangerous.",
              },
            ],
            steps: [
              { reasoning: "Identify imagery.", marks: 1, markCode: "M" },
              { reasoning: "Answer: fear/power.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Fear/power",
            commonErrors: ["Missing imagery effect."],
          },
        },
        {
          id: "edpe4-u2-po-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is imagery? Give an example from a poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Imagery",
                statement: "Words creating pictures; e.g. 'golden sunset'.",
              },
            ],
            steps: [
              { reasoning: "Definition given.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
              { reasoning: "Example is imagery.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Words creating mental pictures; e.g. 'golden sunset'",
            commonErrors: ["Vague or wrong example."],
          },
        },
        {
          id: "edpe4-u2-po-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Poem: 'I wandered lonely as a cloud / That floats on high o'er vales and hills.'",
          parts: [
            {
              label: "a",
              prompt: "What is the poet comparing himself to?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "What feeling does 'lonely' create?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "What might happen next in the poem?",
              marks: 1,
            },
            {
              label: "d",
              prompt: "What is the poem probably about?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poetry analysis",
                statement:
                  "Cloud; loneliness then joy; daffodils/nature; finding happiness in nature.",
              },
            ],
            steps: [
              { part: "a", reasoning: "A cloud.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Loneliness/sadness.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Sees flowers → happy.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Nature brings joy.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Cloud; loneliness; sees flowers/happy; nature brings joy",
            commonErrors: ["Literal only — no poetic analysis."],
          },
        },
      ],
    },
    {
      id: "edpe4-u2-nonfiction",
      title: "Deep non-fiction reading",
      skill: "Extract and evaluate information from non-fiction texts.",
      lesson: {
        sections: [
          {
            heading: "Information hierarchy",
            body: "Information texts organise facts: title → contents → chapters → facts. Use headings to navigate. Key words (bold) signal important terms. Fact files summarise key points.",
          },
          {
            heading: "Evaluating facts",
            body: "Ask: is this fact or opinion? Facts can be checked ('Water boils at 100°C'); opinions can't ('Chocolate is the best'). Look for evidence and sources.",
          },
        ],
        keyFormulas: [
          { name: "Fact", statement: "Can be checked/proven" },
          { name: "Opinion", statement: "Personal view — can't be proven" },
          { name: "Key words", statement: "Bold/coloured = important" },
        ],
        workedExample: {
          problem: "Is 'Dinosaurs are extinct' a fact or opinion?",
          solution: "Fact — can be proven by evidence.",
        },
      },
      questions: [
        {
          id: "edpe4-u2-nf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I love cats" },
              { id: "b", text: "Cats are the best pets" },
              { id: "c", text: "Cats are cute" },
              { id: "d", text: "Cats are mammals" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fact",
                statement: "Checkable truth.",
              },
            ],
            steps: [
              { reasoning: "Mammal = verifiable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Cats are mammals",
            commonErrors: ["Choosing opinion."],
          },
        },
        {
          id: "edpe4-u2-nf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are bold words important in information texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They're decorative" },
              { id: "b", text: "They show key terms" },
              { id: "c", text: "No reason" },
              { id: "d", text: "They're titles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Key words",
                statement: "Bold = important terms.",
              },
            ],
            steps: [
              {
                reasoning: "Bold signals importance.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: key terms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They show key terms",
            commonErrors: ["Not understanding purpose."],
          },
        },
        {
          id: "edpe4-u2-nf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'The Amazon rainforest produces 20% of the world's oxygen. It is home to millions of species.' Write two facts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fact extraction",
                statement: "20% oxygen; millions of species.",
              },
            ],
            steps: [
              { reasoning: "Fact 1 extracted.", marks: 1, markCode: "A" },
              { reasoning: "Fact 2 extracted.", marks: 1, markCode: "A" },
              { reasoning: "Both from text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Produces 20% oxygen; home to millions of species",
            commonErrors: ["Not from text."],
          },
        },
        {
          id: "edpe4-u2-nf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two sources about a volcano: a fact book says 'eruptions can be dangerous'; a story says 'the dragon breathed fire like a volcano'.",
          parts: [
            {
              label: "a",
              prompt: "Which gives facts? Which gives fiction?",
              marks: 1,
            },
            { label: "b", prompt: "What real fact could you learn?", marks: 1 },
            {
              label: "c",
              prompt: "How does the story use volcano ideas?",
              marks: 1,
            },
            { label: "d", prompt: "Why read both types?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiction vs non-fiction",
                statement:
                  "Fact book = facts; story = fiction using volcano image.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Types identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Real fact extracted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Volcano as metaphor explained.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Both have value.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fact book/fiction; real fact; volcano metaphor; both valuable",
            commonErrors: ["Confusing types."],
          },
        },
      ],
    },
  ],
};
