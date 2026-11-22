import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "edpe3-u3-lesson-3-2",
  code: "3-2",
  title: "Grammar: Nouns, Adjectives and Verbs",
  goal: "I CAN use nouns, adjectives and verbs effectively in writing.",
  standards: ["Year 3 Grammar"],
  vocabulary: [
    { term: "Noun", definition: "A naming word: person, place, thing, idea." },
    { term: "Adjective", definition: "A describing word for nouns." },
    { term: "Verb", definition: "An action or doing word." },
    {
      term: "Adverb",
      definition: "A word describing how/when/where an action happens.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u3-grammar",
      title: "Word classes in action",
      skill: "Use adjectives and adverbs to make writing vivid.",
      lesson: {
        sections: [
          {
            heading: "Adding detail",
            body: "Adjectives describe nouns: 'the **fluffy** cat'. Adverbs describe verbs: 'she ran **quickly**'. Use them to paint pictures: 'The **huge, grey** elephant **trumpeted loudly**.'",
          },
          {
            heading: "Choosing strong words",
            body: "Instead of 'said', try 'shouted', 'whispered', 'mumbled'. Instead of 'went', try 'rushed', 'wandered', 'crawled'. Strong verbs and adjectives make writing exciting.",
          },
        ],
        keyFormulas: [
          { name: "Adjective", statement: "Describes nouns: big, red, fluffy" },
          {
            name: "Adverb",
            statement: "Describes verbs: quickly, loudly, slowly",
          },
          { name: "Strong verbs", statement: "rushed, whispered, trumpeted" },
        ],
        workedExample: {
          problem: "Improve: 'The dog ran.'",
          solution: "The shaggy brown dog ran quickly across the field.",
        },
      },
      questions: [
        {
          id: "edpe3-u3-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is an adjective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "and" },
              { id: "b", text: "big" },
              { id: "c", text: "quickly" },
              { id: "d", text: "run" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adjective",
                statement: "Describes nouns.",
              },
            ],
            steps: [
              { reasoning: "big describes a noun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** big",
            commonErrors: ["Choosing a verb or adverb."],
          },
        },
        {
          id: "edpe3-u3-gr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an adverb? 'She sang ___.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "beauty" },
              { id: "b", text: "beautiful" },
              { id: "c", text: "beautifulness" },
              { id: "d", text: "beautifully" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adverb",
                statement: "-ly describes how.",
              },
            ],
            steps: [
              { reasoning: "Need adverb for 'sang'.", marks: 1, markCode: "M" },
              { reasoning: "Answer: beautifully.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** beautifully",
            commonErrors: ["Using adjective."],
          },
        },
        {
          id: "edpe3-u3-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite with an adjective and adverb: 'The bird flew.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Word classes",
                statement: "e.g. 'The tiny bird flew swiftly.'",
              },
            ],
            steps: [
              { reasoning: "Adjective added.", marks: 1, markCode: "M" },
              { reasoning: "Adverb added.", marks: 1, markCode: "A" },
              { reasoning: "Sentence improved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'The tiny bird flew swiftly.'",
            commonErrors: ["Wrong word class used."],
          },
        },
        {
          id: "edpe3-u3-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this sentence using strong verbs and adjectives: 'The man went to the shop and said hello.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strong words",
                statement:
                  "e.g. 'The elderly man hurried to the shop and greeted the owner.'",
              },
            ],
            steps: [
              {
                reasoning: "Strong verb replaces 'went'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strong verb replaces 'said'.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Adjective added.", marks: 1, markCode: "A" },
              {
                reasoning: "Sentence vivid and clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'The elderly man hurried to the shop and greeted the owner.'",
            commonErrors: ["Weak improvements."],
          },
        },
      ],
    },
    {
      id: "edpe3-u3-revision",
      title: "Editing and proofreading",
      skill: "Check and improve writing for accuracy and clarity.",
      lesson: {
        sections: [
          {
            heading: "Check it over",
            body: "Read your writing aloud. Does it make sense? Check for: spelling mistakes, missing capitals, missing full stops, repeated words, and unclear sentences.",
          },
          {
            heading: "Improve as you go",
            body: "Add describing words where they're missing. Replace weak verbs ('went' → 'ran'). Check that each paragraph is about one idea. Fix anything that sounds awkward.",
          },
        ],
        keyFormulas: [
          {
            name: "Proofread",
            statement: "Read aloud, check spelling/punctuation",
          },
          { name: "Improve", statement: "Add detail, replace weak words" },
        ],
        workedExample: {
          problem: "Edit: 'the dog runned fast it was fun'",
          solution: "The dog ran fast because it was fun.",
        },
      },
      questions: [
        {
          id: "edpe3-u3-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do after finishing a piece of writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hand it in immediately" },
              { id: "b", text: "Read it back and check for mistakes" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Start a new one" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading",
                statement: "Always check work.",
              },
            ],
            steps: [
              {
                reasoning: "Editing catches mistakes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Read it back and check",
            commonErrors: ["Skipping review."],
          },
        },
        {
          id: "edpe3-u3-ed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fix the spelling: 'recieve' should be?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "receeve" },
              { id: "b", text: "receve" },
              { id: "c", text: "receive" },
              { id: "d", text: "receiv" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "rule",
                name: "i before e",
                statement: "receive — ei after c.",
              },
            ],
            steps: [
              { reasoning: "Apply spelling rule.", marks: 1, markCode: "M" },
              { reasoning: "Answer: receive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** receive",
            commonErrors: ["ie/ei confusion."],
          },
        },
        {
          id: "edpe3-u3-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Edit this: 'i went to the park and i played football it was fun'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Editing",
                statement:
                  "I went to the park and played football because it was fun.",
              },
            ],
            steps: [
              {
                reasoning: "Capitals and punctuation added.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Repeated 'i' fixed.", marks: 1, markCode: "A" },
              { reasoning: "Sentence flows.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "I went to the park and played football because it was fun.",
            commonErrors: ["Missing punctuation or repeated words."],
          },
        },
        {
          id: "edpe3-u3-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this paragraph: 'The cat sat. It was on the mat. The cat was black.'",
          parts: [
            { label: "a", prompt: "Combine short sentences.", marks: 1 },
            { label: "b", prompt: "Add describing words.", marks: 1 },
            { label: "c", prompt: "Add a connective.", marks: 1 },
            { label: "d", prompt: "Write improved version.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improving writing",
                statement:
                  "e.g. 'The black cat sat on the warm mat because it was tired.'",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sentences combined.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Adjectives added.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Connective used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Improved version clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'The black cat sat on the warm mat because it was tired.'",
            commonErrors: ["Missing improvements."],
          },
        },
      ],
    },
  ],
};
