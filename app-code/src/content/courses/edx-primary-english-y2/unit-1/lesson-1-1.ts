import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpe2-u1-lesson-1-1",
  code: "1-1",
  title: "Alternative Spellings and Sounds",
  goal: "I CAN recognise that the same sound can be spelled different ways.",
  standards: ["Year 2 Phonics"],
  vocabulary: [
    {
      term: "Alternative spelling",
      definition:
        "Different letter patterns making the same sound: ai, ay, a-e.",
    },
    {
      term: "Grapheme",
      definition: "A letter or letters that make one sound.",
    },
    { term: "Phoneme", definition: "A single sound in a word." },
    {
      term: "Suffix",
      definition: "Letters added to the end of a word: -ed, -ing, -er.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u1-altspell",
      title: "Same sound, different spellings",
      skill: "Recognise alternative spellings for the same sound.",
      lesson: {
        sections: [
          {
            heading: "The /ai/ sound",
            body: "The long 'a' sound can be spelled many ways: **ai** (rain, train), **ay** (day, play), **a-e** (make, cake), **ey** (they, grey), **eigh** (eight, weigh). Same sound, different letters!",
          },
          {
            heading: "Why it matters",
            body: "When reading, try all the possible sounds. When spelling, think about which spelling is most common or which spelling pattern the word usually uses. Check a dictionary if unsure.",
          },
        ],
        keyFormulas: [
          { name: "/ai/ spellings", statement: "ai, ay, a-e, ey, eigh" },
          { name: "/ee/ spellings", statement: "ee, ea, e-e, y" },
          { name: "/oa/ spellings", statement: "oa, ow, o-e, oe" },
        ],
        workedExample: {
          problem:
            "Which word has a different spelling for /ai/: rain, day, make, play?",
          solution: "All have /ai/ but different spellings: ai, ay, a-e.",
        },
      },
      questions: [
        {
          id: "edpe2-u1-as-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these words contains the /ai/ sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "rain" },
              { id: "b", text: "red" },
              { id: "c", text: "rip" },
              { id: "d", text: "run" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "/ai/ sound",
                statement: "rain has /ai/ (ai spelling).",
              },
            ],
            steps: [
              { reasoning: "Identify /ai/ sound.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** rain",
            commonErrors: ["Choosing 'red' — different vowel sound."],
          },
        },
        {
          id: "edpe2-u1-as-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word uses the 'a-e' spelling for /ai/?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "rain" },
              { id: "b", text: "day" },
              { id: "c", text: "make" },
              { id: "d", text: "play" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "a-e spelling",
                statement: "make has a-e pattern.",
              },
            ],
            steps: [
              {
                reasoning: "Identify spelling pattern.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: make.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** make",
            commonErrors: ["Confusing with ai/ay spellings."],
          },
        },
        {
          id: "edpe2-u1-as-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write three different spellings of the /ai/ sound with example words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "/ai/ spellings",
                statement: "ai, ay, a-e (or ey, eigh).",
              },
            ],
            steps: [
              {
                reasoning: "Three spellings identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Example words given.", marks: 1, markCode: "A" },
              { reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "ai (rain), ay (day), a-e (make)",
            commonErrors: ["Repeating same spelling."],
          },
        },
        {
          id: "edpe2-u1-as-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sort these words by how /ee/ is spelled: see, sea, tree, happy.",
          parts: [
            { label: "a", prompt: "Which use 'ee' spelling?", marks: 1 },
            { label: "b", prompt: "Which use 'ea' spelling?", marks: 1 },
            { label: "c", prompt: "Which use 'y' spelling?", marks: 1 },
            {
              label: "d",
              prompt: "How many different spellings of /ee/ are shown?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alternative spellings",
                statement: "see=ee, sea=ea, tree=ee, happy=y.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "see, tree use ee.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "sea uses ea.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "happy uses y.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Three spellings: ee, ea, y.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "ee: see/tree; ea: sea; y: happy; 3 spellings",
            commonErrors: ["Missing 'y' as /ee/ spelling in happy."],
          },
        },
      ],
    },
    {
      id: "edpe2-u1-suffixes",
      title: "Suffixes: -ed, -ing, -er, -est",
      skill: "Add suffixes to words correctly.",
      lesson: {
        sections: [
          {
            heading: "What are suffixes?",
            body: "Suffixes are added to the end of words: **-ed** (walked, played), **-ing** (walking, playing), **-er** (bigger, faster), **-est** (biggest, fastest). They change the word's meaning.",
          },
          {
            heading: "Doubling letters",
            body: "Short words often double the last letter: hop → hopped, run → running, big → bigger. Words ending in e drop the e: hope → hoping. Long words don't double: visit → visited.",
          },
        ],
        keyFormulas: [
          { name: "-ed", statement: "Past tense: walk → walked" },
          { name: "-ing", statement: "Present participle: walk → walking" },
          { name: "Doubling", statement: "hop → hopped; run → running" },
        ],
        workedExample: {
          problem: "Add -ing to 'hop' and 'hope'.",
          solution: "hop → hopping (double p); hope → hoping (drop e).",
        },
      },
      questions: [
        {
          id: "edpe2-u1-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does adding -ed to 'walk' make it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "walked" },
              { id: "b", text: "walking" },
              { id: "c", text: "walker" },
              { id: "d", text: "walks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "-ed suffix",
                statement: "walk + ed = walked (past tense).",
              },
            ],
            steps: [
              { reasoning: "-ed shows past action.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** walked",
            commonErrors: ["Choosing -ing instead of -ed."],
          },
        },
        {
          id: "edpe2-u1-su-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the correct spelling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "hoped" },
              { id: "b", text: "hopping" },
              { id: "c", text: "hopeing" },
              { id: "d", text: "hoping" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suffix rules",
                statement: "hope + ing = hoping (drop e).",
              },
            ],
            steps: [
              { reasoning: "Drop e before -ing.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hoping.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** hoping",
            commonErrors: ["Keeping e: 'hopeing'."],
          },
        },
        {
          id: "edpe2-u1-su-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add -ed to 'hop'. Write the correct spelling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doubling rule",
                statement: "hop + ed = hopped (double p).",
              },
            ],
            steps: [
              {
                reasoning: "Identify short vowel word.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Double last consonant.", marks: 1, markCode: "A" },
              { reasoning: "Answer: hopped.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "hopped",
            commonErrors: ["hoping/hoped without doubling."],
          },
        },
        {
          id: "edpe2-u1-su-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Add the correct suffix to each word: play+ing, run+ing, big+er.",
          parts: [
            { label: "a", prompt: "play + ing", marks: 1 },
            { label: "b", prompt: "run + ing", marks: 1 },
            { label: "c", prompt: "big + er", marks: 1 },
            {
              label: "d",
              prompt: "Explain why 'run' doubles but 'play' doesn't.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suffix rules",
                statement: "playing, running, bigger; short vowel doubles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "playing (no doubling).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "running (double n).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "bigger (double g).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Short vowel + single consonant doubles; play has two vowels.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "playing, running, bigger; short vowel doubles",
            commonErrors: ["Doubling 'play' incorrectly: 'playying'."],
          },
        },
      ],
    },
  ],
};
