import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "edpe4-u3-lesson-3-2",
  code: "3-2",
  title: "Sentence Variety and Paragraphing",
  goal: "I CAN write varied sentences and organise ideas into paragraphs.",
  standards: ["Year 4 Writing"],
  vocabulary: [
    {
      term: "Complex sentence",
      definition: "Sentence with a main clause and subordinate clause.",
    },
    { term: "Paragraph", definition: "A group of sentences about one idea." },
    {
      term: "Topic sentence",
      definition: "The first sentence stating the paragraph's main idea.",
    },
    {
      term: "Linking words",
      definition: "Words that connect ideas: however, therefore, meanwhile.",
    },
  ],
  concepts: [
    {
      id: "edpe4-u3-sentences",
      title: "Sentence variety",
      skill: "Write complex sentences and vary sentence structure.",
      lesson: {
        sections: [
          {
            heading: "Complex sentences",
            body: "Add subordinate clauses: 'Although it was raining, we went out.' 'The cat, which was black, sat on the mat.' Vary length — short for impact, long for detail. Don't start every sentence the same way.",
          },
          {
            heading: "Linking words",
            body: "Connect ideas: **however** (contrast), **therefore** (result), **meanwhile** (simultaneous), **although** (concession). They make writing flow smoothly.",
          },
        ],
        keyFormulas: [
          {
            name: "Subordinate clause",
            statement: "Gives extra info: 'Although it rained...'",
          },
          { name: "Linking words", statement: "Connect ideas smoothly" },
          { name: "Variety", statement: "Mix short and long sentences" },
        ],
        workedExample: {
          problem: "Improve: 'It rained. We went out.'",
          solution: "'Although it was raining, we went outside anyway.'",
        },
      },
      questions: [
        {
          id: "edpe4-u3-sv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a complex sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's formal" },
              { id: "b", text: "It has a main + subordinate clause" },
              { id: "c", text: "It has two verbs" },
              { id: "d", text: "It's long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex sentence",
                statement: "Main + subordinate clause.",
              },
            ],
            steps: [
              { reasoning: "Identify structure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Main + subordinate clause",
            commonErrors: ["Confusing with compound."],
          },
        },
        {
          id: "edpe4-u3-sv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which linking word shows contrast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "and" },
              { id: "b", text: "then" },
              { id: "c", text: "however" },
              { id: "d", text: "because" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Linking words",
                statement: "however = contrast.",
              },
            ],
            steps: [
              { reasoning: "Identify contrast word.", marks: 1, markCode: "M" },
              { reasoning: "Answer: however.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** however",
            commonErrors: ["Choosing wrong link."],
          },
        },
        {
          id: "edpe4-u3-sv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Combine: 'The bell rang. The class lined up.' into one complex sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complex sentence",
                statement: "Subordinate clause joins ideas.",
              },
            ],
            steps: [
              { reasoning: "Two ideas combined.", marks: 1, markCode: "A" },
              {
                reasoning: "Subordinate clause used.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Grammatically correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "e.g. 'When the bell rang, the class lined up.'",
            commonErrors: ["Still two sentences or wrong structure."],
          },
        },
        {
          id: "edpe4-u3-sv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this passage with varied sentences and linking words: 'Tom ran. He was late. He missed the bus. He was sad.'",
          parts: [
            { label: "a", prompt: "Combine first two sentences", marks: 1 },
            { label: "b", prompt: "Add a linking word", marks: 1 },
            { label: "c", prompt: "Vary sentence length", marks: 1 },
            { label: "d", prompt: "Improve flow overall", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence variety",
                statement: "Complex sentences + links + varied length.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sentences combined.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Linking word added.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Variety achieved.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Overall improvement.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Tom was running late; however, he still missed the bus. He felt sad.'",
            commonErrors: ["No real improvement."],
          },
        },
      ],
    },
    {
      id: "edpe4-u3-paragraphs",
      title: "Paragraphing and text organisation",
      skill: "Organise ideas into clear paragraphs with topic sentences.",
      lesson: {
        sections: [
          {
            heading: "Paragraph structure",
            body: "Each paragraph: **topic sentence** (main idea) → **supporting sentences** (details, examples) → maybe a **closing sentence**. One idea per paragraph. Indent or space between paragraphs.",
          },
          {
            heading: "Whole-text organisation",
            body: "Introduce → develop ideas → conclude. For stories: beginning → build-up → problem → climax → resolution. For non-fiction: intro → sections → conclusion.",
          },
        ],
        keyFormulas: [
          { name: "Topic sentence", statement: "States paragraph's main idea" },
          { name: "One idea", statement: "Per paragraph" },
          { name: "Flow", statement: "Ideas build logically" },
        ],
        workedExample: {
          problem: "What goes in a paragraph about 'my pet dog'?",
          solution:
            "Topic: 'My dog Rex is very playful.' Support: fetches sticks, wags tail, sleeps on sofa.",
        },
      },
      questions: [
        {
          id: "edpe4-u3-pg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should the first sentence of a paragraph do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give an example" },
              { id: "b", text: "End the paragraph" },
              { id: "c", text: "Ask a question" },
              { id: "d", text: "State the main idea" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Topic sentence",
                statement: "States main idea.",
              },
            ],
            steps: [
              { reasoning: "First sentence = topic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** State the main idea",
            commonErrors: ["Wrong paragraph role."],
          },
        },
        {
          id: "edpe4-u3-pg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many ideas should a paragraph cover?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many ideas" },
              { id: "b", text: "The whole story" },
              { id: "c", text: "One main idea" },
              { id: "d", text: "No ideas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paragraph rule",
                statement: "One idea per paragraph.",
              },
            ],
            steps: [
              { reasoning: "Paragraph = one idea.", marks: 1, markCode: "M" },
              { reasoning: "Answer: one main idea.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** One main idea",
            commonErrors: ["Not knowing rule."],
          },
        },
        {
          id: "edpe4-u3-pg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a topic sentence and one supporting sentence about school sports day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paragraph",
                statement: "Topic + support.",
              },
            ],
            steps: [
              { reasoning: "Topic sentence written.", marks: 1, markCode: "A" },
              {
                reasoning: "Supporting detail added.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Coherent pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Sports day was exciting. We raced in the 100m sprint.'",
            commonErrors: ["No clear topic."],
          },
        },
        {
          id: "edpe4-u3-pg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "This jumbled text needs paragraphing: 'Dogs are loyal. They protect their owners. Cats are independent. They hunt alone. Birds can fly.' Organise into paragraphs.",
          parts: [
            { label: "a", prompt: "Group related sentences", marks: 1 },
            { label: "b", prompt: "Add topic sentences", marks: 1 },
            { label: "c", prompt: "Order logically", marks: 1 },
            { label: "d", prompt: "Format with paragraph breaks", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paragraphing",
                statement: "Group by animal/topic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Dogs grouped; cats; birds.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Topic sentences added.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Logical order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Breaks shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "3 paragraphs: dogs (loyal/protect), cats (independent/hunt), birds (fly)",
            commonErrors: ["No grouping or breaks."],
          },
        },
      ],
    },
  ],
};
