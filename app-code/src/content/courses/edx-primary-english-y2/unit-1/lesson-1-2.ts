import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpe2-u1-lesson-1-2",
  code: "1-2",
  title: "Homophones and Tricky Words",
  goal: "I CAN tell apart words that sound the same but mean different things.",
  standards: ["Year 2 Phonics"],
  vocabulary: [
    {
      term: "Homophone",
      definition:
        "Words that sound the same but have different meanings and spellings: there/their.",
    },
    {
      term: "Tricky word",
      definition:
        "Words that can't be sounded out easily: said, because, friend.",
    },
    {
      term: "Context",
      definition: "The words around a word that help you understand it.",
    },
    {
      term: "Common exception word",
      definition: "A word that breaks phonics rules: said, was, does.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u1-homophones",
      title: "Homophones",
      skill: "Choose the correct homophone using context.",
      lesson: {
        sections: [
          {
            heading: "Same sound, different meaning",
            body: "**there/their/they're** all sound the same. 'Their' shows belonging: 'their house'. 'There' shows place: 'over there'. 'They're' = they are: 'they're happy'. Context tells you which!",
          },
          {
            heading: "More homophones",
            body: "Other pairs: **to/too/two**, **where/wear**, **here/hear**, **one/won**. Read the sentence and think about meaning — is it a place, a number, or an action?",
          },
        ],
        keyFormulas: [
          {
            name: "there/their/they're",
            statement: "Place / belonging / they are",
          },
          { name: "to/too/two", statement: "Direction / also / number 2" },
          { name: "here/hear", statement: "Place / listen" },
        ],
        workedExample: {
          problem: "Choose: 'The children left ___ coats by the door.'",
          solution: "their — shows the coats belong to them.",
        },
      },
      questions: [
        {
          id: "edpe2-u1-ho-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word shows belonging? 'The dog wagged ___ tail.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "their" },
              { id: "b", text: "there's" },
              { id: "c", text: "there" },
              { id: "d", text: "they're" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophones",
                statement: "'their' shows belonging.",
              },
            ],
            steps: [
              {
                reasoning: "Tail belongs to dog → their.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** their",
            commonErrors: ["Choosing 'there' — that's place."],
          },
        },
        {
          id: "edpe2-u1-ho-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose the correct word: 'I can ___ you from here.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "here" },
              { id: "b", text: "hear" },
              { id: "c", text: "hair" },
              { id: "d", text: "hare" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophones",
                statement: "'hear' = listen with ears.",
              },
            ],
            steps: [
              {
                reasoning: "Action of listening → hear.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: hear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** hear",
            commonErrors: ["Choosing 'here' — that's a place."],
          },
        },
        {
          id: "edpe2-u1-ho-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the correct homophone in each sentence: 'I have ___ apples.' and 'Put the book over ___.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homophones",
                statement: "two, there.",
              },
            ],
            steps: [
              { reasoning: "'two' = number.", marks: 1, markCode: "A" },
              { reasoning: "'there' = place.", marks: 1, markCode: "A" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "two, there",
            commonErrors: ["Using 'to/too' for number or 'their' for place."],
          },
        },
        {
          id: "edpe2-u1-ho-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two sentences using 'their' and 'there' correctly.",
          parts: [
            { label: "a", prompt: "Sentence with 'their'.", marks: 2 },
            { label: "b", prompt: "Sentence with 'there'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homophones",
                statement: "Correct usage of both.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'their' shows belonging.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Sentence makes sense.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "'there' shows place.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sentence makes sense.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "e.g. 'Their dog is big.' / 'The shop is over there.'",
            commonErrors: ["Using homophones interchangeably."],
          },
        },
      ],
    },
    {
      id: "edpe2-u1-tricky",
      title: "Tricky and exception words",
      skill: "Read and spell common exception words.",
      lesson: {
        sections: [
          {
            heading: "Words that break rules",
            body: "Some words don't follow phonics rules: **said** (not 'sed'), **because** (not 'becos'), **friend** (not 'frend'), **does**, **door**, **any**, **one**. We just have to learn these by heart.",
          },
          {
            heading: "How to learn them",
            body: "Look at the word, say it, spell it, use it in a sentence. Break into syllables: be-cause, friend. Practise the tricky bits: 'said' has 'ai' not 'a' or 'e'.",
          },
        ],
        keyFormulas: [
          {
            name: "Exception word",
            statement: "Breaks phonics rules — learn by sight",
          },
          { name: "Tricky bits", statement: "said=ai, friend=ie, because=au" },
        ],
        workedExample: {
          problem: "How do you spell the past tense of 'say'?",
          solution: "said — exception word, doesn't follow rules.",
        },
      },
      questions: [
        {
          id: "edpe2-u1-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct spelling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sayed" },
              { id: "b", text: "sed" },
              { id: "c", text: "said" },
              { id: "d", text: "sade" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exception word",
                statement: "said is correct.",
              },
            ],
            steps: [
              {
                reasoning: "said is the exception word.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** said",
            commonErrors: ["Phonetic 'sed'."],
          },
        },
        {
          id: "edpe2-u1-tr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word is an exception?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cat" },
              { id: "b", text: "because" },
              { id: "c", text: "run" },
              { id: "d", text: "dog" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exception word",
                statement: "because breaks phonics rules.",
              },
            ],
            steps: [
              {
                reasoning: "because can't be sounded out normally.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: because.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** because",
            commonErrors: ["Choosing a regular word."],
          },
        },
        {
          id: "edpe2-u1-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Spell the word meaning 'a close companion': friend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exception spelling",
                statement: "friend — ie not i.",
              },
            ],
            steps: [
              { reasoning: "Identify word.", marks: 1, markCode: "M" },
              {
                reasoning: "Correct spelling: friend.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "ie not i.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "friend",
            commonErrors: ["frend — missing 'ie'."],
          },
        },
        {
          id: "edpe2-u1-tr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the correct spelling of these exception words: said, because, friend, one.",
          parts: [
            { label: "a", prompt: "said", marks: 1 },
            { label: "b", prompt: "because", marks: 1 },
            { label: "c", prompt: "friend", marks: 1 },
            { label: "d", prompt: "Use 'because' in a sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exception words",
                statement: "All spelled correctly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "said correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "because correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "friend correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Correct usage in sentence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "said, because, friend; e.g. 'I stayed home because it rained.'",
            commonErrors: ["Phonetic misspellings."],
          },
        },
      ],
    },
  ],
};
