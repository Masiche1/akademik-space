import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "edpe3-u1-lesson-1-1",
  code: "1-1",
  title: "Prefixes and Suffixes",
  goal: "I CAN use prefixes and suffixes to change word meaning.",
  standards: ["Year 3 Phonics"],
  vocabulary: [
    {
      term: "Prefix",
      definition: "Letters added to the start of a word: un-, re-, dis-.",
    },
    {
      term: "Suffix",
      definition: "Letters added to the end: -ful, -less, -ly, -ment.",
    },
    {
      term: "Root word",
      definition: "The base word before adding prefixes/suffixes.",
    },
    { term: "Antonym", definition: "A word meaning the opposite." },
  ],
  concepts: [
    {
      id: "edpe3-u1-prefixes",
      title: "Prefixes",
      skill: "Use prefixes to change word meaning.",
      lesson: {
        sections: [
          {
            heading: "un-, re-, dis-",
            body: "**un-** makes opposites: happy → unhappy, kind → unkind. **re-** means again: do → redo, write → rewrite. **dis-** means not or opposite: agree → disagree, appear → disappear.",
          },
          {
            heading: "Other prefixes",
            body: "**pre-** = before: preview, prefix. **mis-** = wrongly: misunderstand, misbehave. **non-** = not: non-fiction, nonsense. Prefixes change meaning but keep the root word recognisable.",
          },
        ],
        keyFormulas: [
          { name: "un-", statement: "Opposite: happy → unhappy" },
          { name: "re-", statement: "Again: do → redo" },
          { name: "dis-", statement: "Not: agree → disagree" },
        ],
        workedExample: {
          problem: "What does 'unhappy' mean? What's the root word?",
          solution: "Not happy — root word is 'happy'.",
        },
      },
      questions: [
        {
          id: "edpe3-u1-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'redo' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Do again" },
              { id: "b", text: "Do badly" },
              { id: "c", text: "Pre-do" },
              { id: "d", text: "Don't do" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prefix re-",
                statement: "re- = again.",
              },
            ],
            steps: [{ reasoning: "redo = do again.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Do again",
            commonErrors: ["Misunderstanding prefix."],
          },
        },
        {
          id: "edpe3-u1-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which prefix makes the opposite of 'kind'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mis-" },
              { id: "b", text: "dis-" },
              { id: "c", text: "re-" },
              { id: "d", text: "un-" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prefix un-",
                statement: "un- = opposite.",
              },
            ],
            steps: [
              { reasoning: "un- makes antonyms.", marks: 1, markCode: "M" },
              { reasoning: "Answer: un- → unkind.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** un-",
            commonErrors: [
              "Choosing dis- — also means not but un- more common for adjectives.",
            ],
          },
        },
        {
          id: "edpe3-u1-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add the correct prefix: 'I ___agree with you.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prefix dis-",
                statement: "dis- = not/opposite.",
              },
            ],
            steps: [
              {
                reasoning: "Identify meaning needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "disagree spelled correctly.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Makes sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "dis- → disagree",
            commonErrors: ["Using wrong prefix or spelling."],
          },
        },
        {
          id: "edpe3-u1-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the root word and meaning of: unhappy, rewrite, disappear.",
          parts: [
            { label: "a", prompt: "unhappy", marks: 1 },
            { label: "b", prompt: "rewrite", marks: 1 },
            { label: "c", prompt: "disappear", marks: 1 },
            { label: "d", prompt: "Which prefix means 'not'?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prefixes",
                statement:
                  "happy/not happy; write/again; appear/not visible; un-/dis-/non-.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Root: happy; means not happy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Root: write; means write again.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Root: appear; means stop being visible.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "un-, dis-, or non- all mean not.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "happy/not happy; write/again; appear/not visible",
            commonErrors: ["Wrong root or meaning."],
          },
        },
      ],
    },
    {
      id: "edpe3-u1-suffixes",
      title: "Suffixes for meaning and grammar",
      skill: "Use suffixes to change word class and meaning.",
      lesson: {
        sections: [
          {
            heading: "-ful, -less, -ly",
            body: "**-ful** = full of: care → careful, help → helpful. **-less** = without: hope → hopeless, home → homeless. **-ly** = how: quick → quickly, slow → slowly.",
          },
          {
            heading: "-er, -est, -ness, -ment",
            body: "**-er/-est** = comparisons: big → bigger → biggest. **-ness** = state: happy → happiness, kind → kindness. **-ment** = result: move → movement, agree → agreement.",
          },
        ],
        keyFormulas: [
          { name: "-ful/-less", statement: "Full of / without" },
          { name: "-ly", statement: "How something is done" },
          { name: "-ness/-ment", statement: "State / result" },
        ],
        workedExample: {
          problem: "What does 'hopeless' mean? What's the root?",
          solution: "Without hope — root is 'hope'.",
        },
      },
      questions: [
        {
          id: "edpe3-u1-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does -ful mean in 'helpful'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Full of help" },
              { id: "b", text: "Helping" },
              { id: "c", text: "Help again" },
              { id: "d", text: "Without help" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "-ful",
                statement: "-ful = full of.",
              },
            ],
            steps: [
              { reasoning: "helpful = full of help.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Full of help",
            commonErrors: ["Thinking -ful = without."],
          },
        },
        {
          id: "edpe3-u1-su-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add the correct suffix: 'She sings ___ (beautifully).'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "beauty" },
              { id: "b", text: "beautifulness" },
              { id: "c", text: "beautiful" },
              { id: "d", text: "beautifully" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "-ly suffix",
                statement: "-ly makes adverbs.",
              },
            ],
            steps: [
              {
                reasoning: "Need adverb for 'sings'.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: beautifully.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** beautifully",
            commonErrors: ["Using adjective not adverb."],
          },
        },
        {
          id: "edpe3-u1-su-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the noun form of 'happy' using a suffix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "-ness suffix",
                statement: "happy → happiness.",
              },
            ],
            steps: [
              {
                reasoning: "Identify correct suffix.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "happiness spelled correctly.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "y → i before suffix.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "happiness",
            commonErrors: ["happyness — y stays."],
          },
        },
        {
          id: "edpe3-u1-su-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Complete the word family: care → careful, careless, ___ (noun).",
          parts: [
            { label: "a", prompt: "What suffix makes 'careless'?", marks: 1 },
            { label: "b", prompt: "What suffix makes the noun?", marks: 1 },
            { label: "c", prompt: "Write the noun.", marks: 1 },
            { label: "d", prompt: "What do -ful and -less mean?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Word families",
                statement:
                  "careless=-less; care→care? noun is 'care' itself or 'carer'.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "-less = without.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "-ful or -er or none needed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "carer or care accepted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "-ful=full of; -less=without.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "-less; -er/-ful; carer; full of/without",
            commonErrors: ["Confusing suffix meanings."],
          },
        },
      ],
    },
  ],
};
