import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpe5-u4-lesson-4-3",
  code: "4-3",
  title: "Advanced Spelling, Vocabulary and Editing",
  goal: "I CAN use advanced vocabulary and edit writing effectively.",
  standards: ["Year 5 Writing", "Year 5 Spelling"],
  vocabulary: [
    { term: "Root word", definition: "The base word: 'play' in 'playing'." },
    { term: "Prefix", definition: "Added before: 'un-', 're-', 'pre-'." },
    { term: "Suffix", definition: "Added after: '-tion', '-ly', '-ment'." },
    { term: "Synonym", definition: "Word with similar meaning." },
  ],
  concepts: [
    {
      id: "edpe5-u4-vocab",
      title: "Word study and vocabulary",
      skill: "Use roots, affixes and synonyms to expand vocabulary.",
      lesson: {
        sections: [
          {
            heading: "Word building",
            body: "Words are built from roots plus affixes. 'Happy' → 'unhappy' (prefix) → 'happiness' (suffix). 'Port' (carry) → 'transport', 'import', 'export'. Knowing roots helps you understand and spell new words. Greek and Latin roots are especially useful.",
          },
          {
            heading: "Precise vocabulary",
            body: "Strong writing uses precise words. Instead of 'good', try 'excellent', 'outstanding', 'superb'. Instead of 'said', try 'whispered', 'shouted', 'muttered'. Use a thesaurus but check the word fits the context — don't just swap in a fancy word.",
          },
        ],
        keyFormulas: [
          {
            name: "Word building",
            statement: "Root + prefix/suffix = new word",
          },
        ],
        workedExample: {
          problem: "Build words from root 'spect' (look).",
          solution:
            "Inspect (look into), respect (look again), spectator (one who looks).",
        },
      },
      questions: [
        {
          id: "edpe5-u4-vo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a root word?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The longest word" },
              { id: "b", text: "The base word" },
              { id: "c", text: "A prefix" },
              { id: "d", text: "A suffix" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Root word",
                statement: "Base word.",
              },
            ],
            steps: [
              {
                reasoning: "Root = foundation of word.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Base word",
            commonErrors: ["Confusing with affix."],
          },
        },
        {
          id: "edpe5-u4-vo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the prefix 'un-' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Again" },
              { id: "b", text: "Not" },
              { id: "c", text: "Before" },
              { id: "d", text: "After" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prefix un-",
                statement: "Means 'not'.",
              },
            ],
            steps: [
              {
                reasoning: "un- = negation: unhappy = not happy.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Not",
            commonErrors: ["Confusing with re-."],
          },
        },
        {
          id: "edpe5-u4-vo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this sentence using a more precise verb: 'The man said he was unhappy.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precise vocabulary",
                statement: "Better verb.",
              },
            ],
            steps: [
              {
                reasoning: "Replaces 'said' with 'whispered/muttered/growled'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or 'unhappy' with 'miserable/despondent'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sentence improved and still makes sense.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sentence with precise verbs",
            commonErrors: ["Wrong word choice."],
          },
        },
        {
          id: "edpe5-u4-vo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how knowing the root 'dict' (say) helps you understand 'predict', 'dictate' and 'contradict'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Root words",
                statement: "Root meaning helps decode.",
              },
            ],
            steps: [
              {
                reasoning: "pre- + dict = say before → predict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "dict + -ate = say formally → dictate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "contra- + dict = say against → contradict.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Root dict helps decode meanings",
            commonErrors: ["No root explanation."],
          },
        },
      ],
    },
    {
      id: "edpe5-u4-editing",
      title: "Editing and Proofreading",
      skill: "Edit and proofread extended writing.",
      lesson: {
        sections: [
          {
            heading: "Systematic editing",
            body: "Edit in passes: (1) Structure — does it flow logically? (2) Paragraphs — one idea each? (3) Sentences — varied length, correct grammar? (4) Word choice — precise vocabulary? (5) Punctuation — accurate? Then proofread separately for spelling and typos.",
          },
          {
            heading: "Common errors to fix",
            body: "Watch for: sentence fragments, run-ons, comma splices, subject-verb agreement ('they was'), tense consistency, apostrophe errors ('its' vs 'it's'), and spelling of tricky words. Read aloud — your ear catches what your eye misses.",
          },
        ],
        keyFormulas: [
          {
            name: "Editing",
            statement:
              "Structure → paragraphs → sentences → words → punctuation → spelling",
          },
        ],
        workedExample: {
          problem: "Fix: 'The team played good they was happy.'",
          solution: "The team played well. They were happy.",
        },
      },
      questions: [
        {
          id: "edpe5-u4-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between editing and proofreading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same" },
              {
                id: "b",
                text: "Editing improves content; proofreading checks errors",
              },
              { id: "c", text: "Editing is faster" },
              { id: "d", text: "Proofreading is optional" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Editing vs proofreading",
                statement: "Improve vs check.",
              },
            ],
            steps: [
              {
                reasoning: "Editing = improve; proofreading = check errors.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Improve vs check",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "edpe5-u4-ed-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is correct: 'its' or 'it's'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its raining" },
              { id: "b", text: "It's raining" },
              { id: "c", text: "Its' raining" },
              { id: "d", text: "It is raining" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Apostrophes",
                statement: "it's = it is.",
              },
            ],
            steps: [
              {
                reasoning: "'It's' = 'it is'; 'its' = possessive.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** It's raining",
            commonErrors: ["Wrong apostrophe."],
          },
        },
        {
          id: "edpe5-u4-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Fix this sentence: 'Me and him went to the shop for they're bread.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Grammar",
                statement: "Pronouns + apostrophe.",
              },
            ],
            steps: [
              {
                reasoning: "'Me and him' → 'He and I' (subject position).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'they're' is correct for 'they are' here? Actually should be 'their'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "He and I went to the shop for their bread.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "He and I went to the shop for their bread.",
            commonErrors: ["Wrong pronoun case or apostrophe."],
          },
        },
        {
          id: "edpe5-u4-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a checklist of five things to check when proofreading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading",
                statement: "Five valid checks.",
              },
            ],
            steps: [
              {
                reasoning: "Spelling of tricky words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apostrophes and punctuation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Capital letters and full stops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Word spaces and paragraphs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Five-point proofreading checklist",
            commonErrors: ["Vague or duplicate checks."],
          },
        },
      ],
    },
  ],
};
