import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edpe4-u1-lesson-1-1",
  code: "1-1",
  title: "Complex Prefixes and Suffixes",
  goal: "I CAN use complex prefixes and suffixes to build and understand words.",
  standards: ["Year 4 Spelling"],
  vocabulary: [
    {
      term: "Prefix",
      definition: "Added to start: un-, re-, dis-, pre-, mis-, inter-, trans-.",
    },
    {
      term: "Suffix",
      definition: "Added to end: -tion, -sion, -able, -ible, -ance, -ence.",
    },
    { term: "Root word", definition: "The base word carrying core meaning." },
    {
      term: "Word class",
      definition: "Whether a word is noun, verb, adjective or adverb.",
    },
  ],
  concepts: [
    {
      id: "edpe4-u1-prefixes",
      title: "Complex prefixes",
      skill: "Use prefixes including inter-, trans-, pre- and mis-.",
      lesson: {
        sections: [
          {
            heading: "More prefixes",
            body: "**inter-** = between: international, interact. **trans-** = across: transport, translate. **pre-** = before: preview, predict. **mis-** = wrongly: misunderstand, misbehave. **sub-** = under: submarine, subtitle.",
          },
          {
            heading: "Using them",
            body: "Prefixes change meaning while keeping the root recognisable. 'Unbelievable' = not + believe + able. Knowing prefixes helps you decode long words when reading.",
          },
        ],
        keyFormulas: [
          { name: "inter-", statement: "between: international" },
          { name: "trans-", statement: "across: transport" },
          { name: "pre-/mis-", statement: "before / wrongly" },
        ],
        workedExample: {
          problem: "What does 'transport' mean using its prefix?",
          solution: "trans- (across) + port (carry) = carry across.",
        },
      },
      questions: [
        {
          id: "edpe4-u1-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'international' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not national" },
              { id: "b", text: "After nations" },
              { id: "c", text: "Within one country" },
              { id: "d", text: "Between nations" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prefix inter-",
                statement: "inter- = between.",
              },
            ],
            steps: [
              {
                reasoning: "international = between nations.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Between nations",
            commonErrors: ["Misreading prefix."],
          },
        },
        {
          id: "edpe4-u1-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which prefix means 'across'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "pre-" },
              { id: "b", text: "inter-" },
              { id: "c", text: "sub-" },
              { id: "d", text: "trans-" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prefix trans-",
                statement: "trans- = across.",
              },
            ],
            steps: [
              { reasoning: "Recall prefix meanings.", marks: 1, markCode: "M" },
              { reasoning: "Answer: trans-.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** trans-",
            commonErrors: ["Confusing inter-/trans-."],
          },
        },
        {
          id: "edpe4-u1-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Break 'misunderstand' into prefix + root word.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prefixes",
                statement: "mis- + understand.",
              },
            ],
            steps: [
              { reasoning: "Identify prefix mis-.", marks: 1, markCode: "M" },
              { reasoning: "Root: understand.", marks: 1, markCode: "A" },
              {
                reasoning: "Meaning: understand wrongly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "mis- + understand = understand wrongly",
            commonErrors: ["Wrong split."],
          },
        },
        {
          id: "edpe4-u1-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the meaning of these words using prefixes: submarine, preview, transport, interact.",
          parts: [
            { label: "a", prompt: "submarine", marks: 1 },
            { label: "b", prompt: "preview", marks: 1 },
            { label: "c", prompt: "transport", marks: 1 },
            { label: "d", prompt: "interact", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prefixes",
                statement: "under sea; view before; carry across; act between.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "sub- under + marine.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "pre- before + view.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "trans- across + port.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "inter- between + act.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "under sea; view before; carry across; act between",
            commonErrors: ["Wrong prefix meanings."],
          },
        },
      ],
    },
    {
      id: "edpe4-u1-suffixes",
      title: "Noun and verb suffixes",
      skill: "Use -tion, -sion, -ment, -ness and verb suffixes correctly.",
      lesson: {
        sections: [
          {
            heading: "Noun suffixes",
            body: "**-tion/-sion** make nouns: educate → education, decide → decision, expand → expansion. **-ment**: move → movement, achieve → achievement. **-ness**: kind → kindness, dark → darkness. **-ity**: active → activity.",
          },
          {
            heading: "Verb suffixes",
            body: "**-ise/-ize**: real → realise, modern → modernise. **-ify**: simple → simplify, beauty → beautify. **-en**: wide → widen, strength → strengthen. They change word class.",
          },
        ],
        keyFormulas: [
          { name: "-tion/-sion", statement: "Noun: education, decision" },
          {
            name: "-ment/-ness/-ity",
            statement: "Noun: movement, kindness, activity",
          },
          {
            name: "-ise/-ify/-en",
            statement: "Verb: realise, simplify, widen",
          },
        ],
        workedExample: {
          problem: "Change 'decide' to a noun.",
          solution: "decision (drop e, add -sion).",
        },
      },
      questions: [
        {
          id: "edpe4-u1-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which suffix makes a noun from 'educate'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-ify" },
              { id: "b", text: "-ly" },
              { id: "c", text: "-en" },
              { id: "d", text: "-tion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "-tion",
                statement: "educate → education.",
              },
            ],
            steps: [
              { reasoning: "-tion makes noun.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** -tion",
            commonErrors: ["Choosing verb suffix."],
          },
        },
        {
          id: "edpe4-u1-su-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the noun form of 'decide'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "decidement" },
              { id: "b", text: "decision" },
              { id: "c", text: "decisive" },
              { id: "d", text: "decider" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "-sion",
                statement: "decide → decision.",
              },
            ],
            steps: [
              { reasoning: "Drop e, add -sion.", marks: 1, markCode: "M" },
              { reasoning: "Answer: decision.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** decision",
            commonErrors: ["decidement — wrong suffix."],
          },
        },
        {
          id: "edpe4-u1-su-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Change the adjective 'simple' into a verb.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "-ify",
                statement: "simple → simplify.",
              },
            ],
            steps: [
              {
                reasoning: "Identify verb suffix -ify.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "simplify spelled correctly.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Correct word class.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "simplify",
            commonErrors: ["simplefy — missing i."],
          },
        },
        {
          id: "edpe4-u1-su-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Complete the word families: educate→education; decide→decision; move→___; kind→___.",
          parts: [
            { label: "a", prompt: "move noun", marks: 1 },
            { label: "b", prompt: "kind noun", marks: 1 },
            { label: "c", prompt: "realise is a ___", marks: 1 },
            { label: "d", prompt: "Which suffix makes verbs?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suffixes",
                statement: "movement, kindness, verb, -ise/-ify/-en.",
              },
            ],
            steps: [
              { part: "a", reasoning: "movement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "kindness.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Verb.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "-ise/-ify/-en.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "movement; kindness; verb; -ise/-ify/-en",
            commonErrors: ["Wrong suffixes."],
          },
        },
      ],
    },
  ],
};
