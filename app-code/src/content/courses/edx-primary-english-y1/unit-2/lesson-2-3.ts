import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edpe1-u2-lesson-2-3",
  code: "2-3",
  title: "Non-Fiction and Information Texts",
  goal: "I CAN read and understand simple information texts.",
  standards: ["Year 1 Reading"],
  vocabulary: [
    {
      term: "Non-fiction",
      definition: "Texts that give real information, not stories.",
    },
    { term: "Fact", definition: "Something true that can be checked." },
    {
      term: "Label",
      definition: "A word that names a picture or diagram part.",
    },
    {
      term: "Contents page",
      definition: "Lists what's in a book and page numbers.",
    },
  ],
  concepts: [
    {
      id: "edpe1-u2-nonfiction",
      title: "Reading information texts",
      skill: "Identify facts and use labels in non-fiction texts.",
      lesson: {
        sections: [
          {
            heading: "Stories vs information",
            body: "Stories are made up (fiction); information texts teach us real things (non-fiction). 'The Very Hungry Caterpillar' is fiction; 'All About Dinosaurs' is non-fiction — it gives real facts.",
          },
          {
            heading: "Labels and facts",
            body: "Information books use labels to name parts of pictures: 'wing', 'tail', 'scales'. Facts are true things we can check: 'Dinosaurs lived millions of years ago.'",
          },
        ],
        keyFormulas: [
          { name: "Fiction", statement: "Made-up stories" },
          { name: "Non-fiction", statement: "Real information and facts" },
          { name: "Label", statement: "Names a part of a picture" },
        ],
        workedExample: {
          problem: "Is 'My Pet Dog' fiction or non-fiction? Why?",
          solution: "Non-fiction — it gives real information about dogs.",
        },
      },
      questions: [
        {
          id: "edpe1-u2-nf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which book is non-fiction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Three Little Pigs" },
              { id: "b", text: "All About Sharks" },
              { id: "c", text: "Cinderella" },
              { id: "d", text: "The Hungry Caterpillar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-fiction",
                statement: "'All About Sharks' gives real facts.",
              },
            ],
            steps: [
              {
                reasoning: "Information book, not story.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** All About Sharks",
            commonErrors: ["Choosing a storybook."],
          },
        },
        {
          id: "edpe1-u2-nf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'Sharks have sharp teeth and live in the sea.' What is this text about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A shark story" },
              { id: "b", text: "Facts about sharks" },
              { id: "c", text: "A fishing trip" },
              { id: "d", text: "A shark toy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-fiction",
                statement: "Gives real facts about sharks.",
              },
            ],
            steps: [
              { reasoning: "Identify fact content.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: facts about sharks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Facts about sharks",
            commonErrors: ["Treating it as fiction."],
          },
        },
        {
          id: "edpe1-u2-nf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A picture of a bird has labels 'beak', 'wing' and 'tail'. What does 'beak' label?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Label",
                statement: "Beak labels the bird's beak.",
              },
            ],
            steps: [
              {
                reasoning: "Understand label function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: the beak part of bird.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Clear answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The bird's beak",
            commonErrors: ["Thinking 'beak' is a separate object."],
          },
        },
        {
          id: "edpe1-u2-nf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read this fact: 'Elephants are the biggest land animals. They have long trunks and big ears.'",
          parts: [
            {
              label: "a",
              prompt: "Is this fiction or non-fiction? Why?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Name two features of elephants from the text.",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Write one fact you could add about elephants.",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Why are labels useful in information books?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-fiction skills",
                statement:
                  "Non-fiction; trunk, big ears; e.g. 'eat lots of plants'; labels identify parts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Non-fiction — real facts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Trunk and big ears.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "True elephant fact added.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Labels name parts clearly.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Non-fiction; trunk, big ears; e.g. 'They eat plants'; labels name parts",
            commonErrors: ["For (c): making up false fact."],
          },
        },
      ],
    },
    {
      id: "edpe1-u2-poetry",
      title: "Poems and Rhymes",
      skill: "Recognise rhythm and rhyme in poems.",
      lesson: {
        sections: [
          {
            heading: "What is a poem?",
            body: "Poems use words in special ways — often with rhythm and rhyme. They can be short and fun: 'Hickory dickory dock, the mouse ran up the clock.' The rhyming words (dock, clock) make it musical.",
          },
          {
            heading: "Rhythm and rhyme",
            body: "Rhythm is the beat of the poem — like music. Rhyme is when words end the same: cat/hat, dog/frog. Look for rhyming words at the end of lines.",
          },
        ],
        keyFormulas: [
          {
            name: "Poem",
            statement: "Words arranged with rhythm and often rhyme",
          },
          { name: "Rhyme", statement: "Same ending sound" },
          { name: "Rhythm", statement: "The beat or pattern of sounds" },
        ],
        workedExample: {
          problem: "In 'Hickory dickory dock', which words rhyme?",
          solution: "dock and clock rhyme.",
        },
      },
      questions: [
        {
          id: "edpe1-u2-po-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a poem different from a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has pictures" },
              { id: "b", text: "It often has rhythm and rhyme" },
              { id: "c", text: "It is longer" },
              { id: "d", text: "It has a plot" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poem",
                statement: "Poems use rhythm/rhyme.",
              },
            ],
            steps: [
              { reasoning: "Poems are musical.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It often has rhythm and rhyme",
            commonErrors: ["Thinking poems need pictures."],
          },
        },
        {
          id: "edpe1-u2-po-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'The cat sat on the mat. It was very fat.' Which words rhyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cat and sat" },
              { id: "b", text: "mat and fat" },
              { id: "c", text: "cat and mat" },
              { id: "d", text: "sat and fat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhyme",
                statement: "mat and fat rhyme (-at).",
              },
            ],
            steps: [
              { reasoning: "Find same ending sound.", marks: 1, markCode: "M" },
              { reasoning: "Answer: mat and fat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** mat and fat",
            commonErrors: [
              "Choosing cat/sat — they rhyme too but question asks line endings.",
            ],
          },
        },
        {
          id: "edpe1-u2-po-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Complete the rhyme: 'The dog ran in the ___.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhyme completion",
                statement: "dog → log/frog/hog.",
              },
            ],
            steps: [
              {
                reasoning: "Identify -og rhyme family.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Word fits context and rhymes.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Correct rhyme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "log (or frog, hog)",
            commonErrors: ["Non-rhyming word."],
          },
        },
        {
          id: "edpe1-u2-po-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a two-line rhyme about a cat.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poem writing",
                statement: "Two lines with rhyming end words about cats.",
              },
            ],
            steps: [
              {
                reasoning: "Line 1 mentions cat or related.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Line 2 rhymes with line 1.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Rhymes correctly.", marks: 1, markCode: "A" },
              { reasoning: "Makes sense as poem.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "e.g. 'The cat sat on a mat. It was very fat.'",
            commonErrors: ["Lines don't rhyme or aren't about cats."],
          },
        },
      ],
    },
  ],
};
