import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edpe2-u3-lesson-3-2",
  code: "3-2",
  title: "Expanded Noun Phrases and Punctuation",
  goal: "I CAN use describing words before nouns and correct punctuation.",
  standards: ["Year 2 Writing"],
  vocabulary: [
    {
      term: "Noun phrase",
      definition: "A noun with describing words: 'the big red ball'.",
    },
    { term: "Adjective", definition: "A describing word: big, red, fluffy." },
    { term: "Determiner", definition: "a, an, the, this, that, my." },
    {
      term: "Punctuation",
      definition: "Marks that help reading: . , ? ! ' \"",
    },
  ],
  concepts: [
    {
      id: "edpe2-u3-nounphrases",
      title: "Expanded noun phrases",
      skill: "Add adjectives before nouns for more detail.",
      lesson: {
        sections: [
          {
            heading: "Making nouns bigger",
            body: "Nouns can have describing words before them: 'dog' → 'the big brown dog' → 'the big brown dog with floppy ears'. More words = clearer picture for the reader.",
          },
          {
            heading: "Order of adjectives",
            body: "Usually: opinion + size + colour + noun. 'a lovely little brown dog'. Not 'a brown little lovely dog' — keep it natural.",
          },
        ],
        keyFormulas: [
          { name: "Noun phrase", statement: "determiner + adjectives + noun" },
          { name: "Example", statement: "the + big + red + ball" },
        ],
        workedExample: {
          problem: "Expand: 'I saw a dog.'",
          solution: "I saw a big, shaggy brown dog.",
        },
      },
      questions: [
        {
          id: "edpe2-u3-np-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an expanded noun phrase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a dog and cat" },
              { id: "b", text: "the big brown dog" },
              { id: "c", text: "dog runs" },
              { id: "d", text: "the dog" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Noun phrase",
                statement: "determiner + adjectives + noun.",
              },
            ],
            steps: [
              { reasoning: "Most expanded phrase.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the big brown dog",
            commonErrors: ["Choosing 'the dog' — less expanded."],
          },
        },
        {
          id: "edpe2-u3-np-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand this noun phrase: 'a cake'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a big cake" },
              { id: "b", text: "a cake" },
              { id: "c", text: "cake is nice" },
              { id: "d", text: "a big chocolate cake" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expansion",
                statement: "More adjectives = more detail.",
              },
            ],
            steps: [
              {
                reasoning: "Add adjectives before noun.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: a big chocolate cake.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** a big chocolate cake",
            commonErrors: ["Adding words after noun — not noun phrase."],
          },
        },
        {
          id: "edpe2-u3-np-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite with an expanded noun phrase: 'I saw a bird.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Noun phrases",
                statement: "e.g. 'I saw a small blue bird.'",
              },
            ],
            steps: [
              {
                reasoning: "Adjectives added before bird.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Determiner kept.", marks: 1, markCode: "A" },
              {
                reasoning: "Sentence still makes sense.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. 'I saw a small blue bird.'",
            commonErrors: ["Wrong word order or missing determiner."],
          },
        },
        {
          id: "edpe2-u3-np-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Expand these noun phrases with at least two adjectives each: 'a house', 'my dog'.",
          parts: [
            { label: "a", prompt: "Expand 'a house'.", marks: 2 },
            { label: "b", prompt: "Expand 'my dog'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Noun phrases",
                statement: "Two+ adjectives each.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two+ adjectives added.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Two+ adjectives added.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. 'a big old house', 'my fluffy little dog'",
            commonErrors: ["Only one adjective or wrong order."],
          },
        },
      ],
    },
    {
      id: "edpe2-u3-punctuation",
      title: "Punctuation: commas, apostrophes, speech marks",
      skill:
        "Use commas in lists, apostrophes for possession, and speech marks correctly.",
      lesson: {
        sections: [
          {
            heading: "Commas in lists",
            body: "Use commas to separate items in a list: 'I bought apples, oranges, and bananas.' The 'and' comes before the last item.",
          },
          {
            heading: "Apostrophes and speech",
            body: "Apostrophe shows belonging: 'Sam's ball' = the ball belongs to Sam. Speech marks show talking: 'Hello,' said Tom. Use ' ' or \" \" around spoken words.",
          },
        ],
        keyFormulas: [
          {
            name: "Commas",
            statement: "Separate list items: apples, oranges, bananas",
          },
          { name: "Apostrophe", statement: "Shows belonging: Sam's" },
          {
            name: "Speech marks",
            statement: "' ' or \" \" around spoken words",
          },
        ],
        workedExample: {
          problem: "Add apostrophe: 'The dogs bone' (bone belongs to dog).",
          solution: "The dog's bone.",
        },
      },
      questions: [
        {
          id: "edpe2-u3-pu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where do commas go in a list? 'I like apples oranges and bananas.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Between list items" },
              { id: "b", text: "Nowhere" },
              { id: "c", text: "After every word" },
              { id: "d", text: "At the start" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Commas",
                statement: "Separate list items.",
              },
            ],
            steps: [
              { reasoning: "Commas between items.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Between list items",
            commonErrors: ["Comma after 'and' — wrong position."],
          },
        },
        {
          id: "edpe2-u3-pu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which shows belonging correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog bone" },
              { id: "b", text: "The dogs bone" },
              { id: "c", text: "The dogs' bone" },
              { id: "d", text: "The dog's bone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Apostrophe",
                statement: "Singular possession: dog's.",
              },
            ],
            steps: [
              {
                reasoning: "One dog owns bone → dog's.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: dog's.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The dog's bone",
            commonErrors: ["Missing apostrophe or wrong position."],
          },
        },
        {
          id: "edpe2-u3-pu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add speech marks: Tom said hello to his friend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Speech marks",
                statement: "Tom said 'hello' to his friend.",
              },
            ],
            steps: [
              { reasoning: "Identify spoken words.", marks: 1, markCode: "M" },
              { reasoning: "Speech marks added.", marks: 1, markCode: "A" },
              { reasoning: "Correct punctuation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tom said 'hello' to his friend.",
            commonErrors: ["Speech marks around wrong words."],
          },
        },
        {
          id: "edpe2-u3-pu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Punctuate this correctly: 'i bought a red ball a blue kite and a green book said sam'",
          parts: [
            {
              label: "a",
              prompt: "Add capital letters and full stop.",
              marks: 1,
            },
            { label: "b", prompt: "Add commas in the list.", marks: 1 },
            {
              label: "c",
              prompt: "Add speech marks for 'said sam'.",
              marks: 1,
            },
            { label: "d", prompt: "Write the corrected sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punctuation",
                statement:
                  "I bought a red ball, a blue kite, and a green book, said Sam.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "I capitalised; full stop.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Commas between items.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Speech marks added.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Full correct sentence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "I bought a red ball, a blue kite, and a green book, said Sam.",
            commonErrors: ["Missing any punctuation type."],
          },
        },
      ],
    },
  ],
};
