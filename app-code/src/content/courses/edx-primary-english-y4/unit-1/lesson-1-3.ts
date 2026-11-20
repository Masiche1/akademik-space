import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edpe4-u1-lesson-1-3",
  code: "1-3",
  title: "Word Patterns and Etymology",
  goal: "I CAN use word patterns and word origins to spell and understand words.",
  standards: ["Year 4 Spelling"],
  vocabulary: [
    { term: "Etymology", definition: "The origin and history of a word." },
    {
      term: "Root",
      definition: "The core part of a word from another language.",
    },
    {
      term: "Pattern",
      definition: "A repeated spelling or sound pattern: -ough, -tion.",
    },
    { term: "Loanword", definition: "A word borrowed from another language." },
  ],
  concepts: [
    {
      id: "edpe4-u1-patterns",
      title: "Spelling patterns",
      skill: "Recognise and apply spelling patterns.",
      lesson: {
        sections: [
          {
            heading: "Pattern groups",
            body: "**-ough**: though, through, tough, cough — same spelling, different sounds! **-tion/-sion**: education, decision. **-able/-ible**: readable, possible. **-ant/-ent**: important, different.",
          },
          {
            heading: "Using patterns",
            body: "Once you know a pattern, you can spell new words: if 'education' ends -tion, 'celebration' probably does too. Patterns reduce the number of words you must memorise.",
          },
        ],
        keyFormulas: [
          { name: "-ough", statement: "Same spelling, many sounds" },
          { name: "-tion/-sion", statement: "Noun endings" },
          { name: "-able/-ible", statement: "Adjective endings" },
        ],
        workedExample: {
          problem:
            "Which words share the -tion pattern? education, celebration, decision?",
          solution: "education and celebration end -tion; decision ends -sion.",
        },
      },
      questions: [
        {
          id: "edpe4-u1-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word does NOT share the -tion pattern?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "education" },
              { id: "b", text: "celebration" },
              { id: "c", text: "decision" },
              { id: "d", text: "invitation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "-tion vs -sion",
                statement: "decision ends -sion not -tion.",
              },
            ],
            steps: [{ reasoning: "Check endings.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** decision",
            commonErrors: ["Missing -sion variant."],
          },
        },
        {
          id: "edpe4-u1-pt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which words have the same -ough spelling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "though, through, tough" },
              { id: "b", text: "cat, hat, bat" },
              { id: "c", text: "run, sun, fun" },
              { id: "d", text: "big, pig, dig" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "-ough",
                statement: "Same spelling different sounds.",
              },
            ],
            steps: [
              { reasoning: "Identify pattern.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: though/through/tough.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** though, through, tough",
            commonErrors: ["Not recognising pattern."],
          },
        },
        {
          id: "edpe4-u1-pt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sort these words by ending pattern: education, decision, movement, excitement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Endings",
                statement:
                  "-tion: education; -sion: decision; -ment: movement, excitement.",
              },
            ],
            steps: [
              { reasoning: "-tion identified.", marks: 1, markCode: "A" },
              {
                reasoning: "-sion and -ment grouped.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "-tion: education; -sion: decision; -ment: movement, excitement",
            commonErrors: ["Wrong groupings."],
          },
        },
        {
          id: "edpe4-u1-pt-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how knowing the -tion pattern helps you spell 'celebration' and 'invitation'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pattern use",
                statement: "Pattern predicts spelling.",
              },
            ],
            steps: [
              { reasoning: "Recognise -tion ending.", marks: 1, markCode: "M" },
              {
                reasoning: "Apply to celebration/invitation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Correct spellings given.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Explanation clear.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Pattern tells you they end -tion",
            commonErrors: ["Not applying pattern."],
          },
        },
      ],
    },
    {
      id: "edpe4-u1-etymology",
      title: "Word origins",
      skill: "Use etymology to understand word meanings.",
      lesson: {
        sections: [
          {
            heading: "Where words come from",
            body: "Many English words come from Latin and Greek: **telephone** (tele=far + phone=sound), **microscope** (micro=small + scope=look), **bicycle** (bi=two + cycle=wheel). Knowing roots helps you understand new words.",
          },
          {
            heading: "Using roots",
            body: "**port** = carry (transport, portable, import). **dict** = say (predict, dictionary, contradict). **spect** = look (inspect, respect, spectator). Roots unlock meaning.",
          },
        ],
        keyFormulas: [
          { name: "tele-", statement: "far: telephone, television" },
          { name: "micro-", statement: "small: microscope, microphone" },
          { name: "port/dict/spect", statement: "carry/say/look" },
        ],
        workedExample: {
          problem: "What does 'transport' mean using its roots?",
          solution: "trans (across) + port (carry) = carry across.",
        },
      },
      questions: [
        {
          id: "edpe4-u1-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'telephone' literally mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Far sound" },
              { id: "b", text: "Near sound" },
              { id: "c", text: "Write sound" },
              { id: "d", text: "Good sound" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Etymology",
                statement: "tele=far + phone=sound.",
              },
            ],
            steps: [
              { reasoning: "Break into roots.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Far sound",
            commonErrors: ["Not knowing roots."],
          },
        },
        {
          id: "edpe4-u1-et-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'microscope' literally mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Far looker" },
              { id: "b", text: "Small looker" },
              { id: "c", text: "Big looker" },
              { id: "d", text: "Sound looker" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Etymology",
                statement: "micro=small + scope=look.",
              },
            ],
            steps: [
              { reasoning: "Identify roots.", marks: 1, markCode: "M" },
              { reasoning: "Answer: small looker.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Small looker",
            commonErrors: ["Wrong root meanings."],
          },
        },
        {
          id: "edpe4-u1-et-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does the root 'port' mean? Give two words using it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Root port",
                statement: "carry: transport, portable, import.",
              },
            ],
            steps: [
              { reasoning: "port = carry.", marks: 1, markCode: "M" },
              { reasoning: "Two words given.", marks: 1, markCode: "A" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "carry; transport, portable",
            commonErrors: ["Wrong meaning or words."],
          },
        },
        {
          id: "edpe4-u1-et-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how knowing roots helps understand: predict, dictionary, spectator.",
          parts: [
            { label: "a", prompt: "predict", marks: 1 },
            { label: "b", prompt: "dictionary", marks: 1 },
            { label: "c", prompt: "spectator", marks: 1 },
            { label: "d", prompt: "What do all three roots mean?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roots",
                statement: "dict=say; spect=look; predict=pre+dict.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "pre + dict = say before.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "dict = say → word book.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "spect = look → watcher.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Roots: say, look.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "say before; word book; watcher; say/look",
            commonErrors: ["Not breaking into roots."],
          },
        },
      ],
    },
  ],
};
