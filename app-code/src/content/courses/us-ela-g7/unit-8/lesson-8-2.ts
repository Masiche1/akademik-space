import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const FIGPASSAGE: TextExtract = {
  title: "Figurative Language Practice",
  author: "Written for Akademik Space",
  text: "The classroom was a zoo after the substitute teacher left. Marcus was as quiet as a mouse during the test, but once the bell rang he was a shot out of a cannon. The exam was a mountain to climb, and his pencil was a sword he wielded with surprising skill.",
};

const IDIOMSPASSAGE: TextExtract = {
  title: "Idioms and Their Meanings",
  author: "Written for Akademik Space",
  text: "When Jamal finally submitted his essay, he felt like a weight had been lifted off his shoulders. He'd been carrying that project around for weeks — it was the last straw that broke the camel's back, but now he could finally breathe easy.",
};

export const lesson82: Lesson = {
  id: "ela7-u8-lesson-8-2",
  code: "8-2",
  title: "Figurative Language: Similes, Metaphors, and Idioms",
  goal: "I CAN identify and interpret similes, metaphors, personification, hyperbole, and idioms in context.",
  standards: ["L.7.5a", "L.7.5b", "L.7.5c"],
  vocabulary: [
    {
      term: "Simile",
      definition: "Comparison using 'like' or 'as' — 'as brave as a lion'.",
    },
    {
      term: "Metaphor",
      definition:
        "Direct comparison without 'like' or 'as' — 'a heart of stone'.",
    },
    {
      term: "Personification",
      definition:
        "Giving human qualities to non-human things — 'the wind whispered'.",
    },
    {
      term: "Hyperbole",
      definition:
        "Extreme exaggeration for emphasis — 'I've told you a million times'.",
    },
    {
      term: "Idiom",
      definition:
        "Expression whose meaning isn't literal — 'break a leg' = good luck.",
    },
    {
      term: "Alliteration",
      definition:
        "Repetition of initial consonant sounds — 'Peter Piper picked'.",
    },
  ],
  concepts: [
    {
      id: "ela7-u8-fig",
      title: "Identifying figurative language",
      skill:
        "Recognize similes, metaphors, personification, and hyperbole and explain their effects.",
      lesson: {
        sections: [
          {
            heading: "Simile vs metaphor",
            body: "**Simile** compares using 'like' or 'as': 'as quiet as a mouse', 'as brave as a lion'. **Metaphor** compares directly without 'like'/'as': 'the classroom was a zoo', 'he was a shot out of a cannon'. Both create vivid images — metaphor is stronger because it states the comparison as fact.",
          },
          {
            heading: "Personification and hyperbole",
            body: "**Personification** gives human traits to non-human things: 'the wind whispered', 'the exam was a mountain to climb'. **Hyperbole** is extreme exaggeration: 'I've told you a million times', 'it took forever'. Both add emphasis and emotion — personification makes scenes feel alive; hyperbole creates humor or intensity.",
          },
        ],
        keyFormulas: [
          { name: "Simile", statement: "Comparison with 'like' or 'as'." },
          { name: "Metaphor", statement: "Direct comparison — 'X is Y'." },
          {
            name: "Personification",
            statement: "Human traits to non-human things.",
          },
          {
            name: "Hyperbole",
            statement: "Extreme exaggeration for emphasis.",
          },
        ],
        workedExample: {
          problem:
            "Identify the figurative language in 'The classroom was a zoo after the substitute teacher left.'",
          solution:
            "Metaphor — the classroom is directly compared to a zoo (chaotic, noisy, wild). No 'like' or 'as' — it's a direct equation. The metaphor conveys the chaos and disorder of the classroom.",
        },
      },
      questions: [
        {
          id: "ela7-u8-fig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FIGPASSAGE,
          stem: "What type of figurative language is 'as quiet as a mouse'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metaphor" },
              { id: "b", text: "Personification" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Hyperbole" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Simile",
                statement: "Comparison with 'like' or 'as'.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'As quiet as a mouse' uses 'as' to compare Marcus's quietness to a mouse's — classic simile.",
                evidence: "as quiet as a mouse",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Simile — uses 'as' for comparison.",
            commonErrors: [
              "Choosing (a) — metaphor doesn't use 'like' or 'as'.",
            ],
          },
        },
        {
          id: "ela7-u8-fig-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FIGPASSAGE,
          stem: "Identify the figurative language in each phrase: 'a shot out of a cannon' and 'a mountain to climb.' Explain what each conveys.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Figurative identification",
                statement: "Recognize and interpret figurative language.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'A shot out of a cannon' = metaphor — Marcus moved suddenly and explosively after the bell.",
                evidence: "a shot out of a cannon",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'A mountain to climb' = metaphor — the exam seemed huge and difficult.",
                evidence: "a mountain to climb",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both are metaphors — direct comparisons that convey the intensity and difficulty of the situations.",
                evidence: "once the bell rang",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Shot out of a cannon' = metaphor for sudden explosive movement; 'mountain to climb' = metaphor for a huge, difficult challenge.",
            commonErrors: [
              "Calling 'shot out of a cannon' a simile — no 'like' or 'as' present.",
            ],
          },
        },
        {
          id: "ela7-u8-fig-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: FIGPASSAGE,
          stem: "Rewrite the passage replacing the metaphors with similes or personification. Explain how the change affects tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Figurative transformation",
                statement: "Convert between figurative types.",
              },
              {
                kind: "skill",
                name: "Tone analysis",
                statement: "Different devices create different effects.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "'The classroom was a zoo' → 'The classroom was like a zoo' — simile softens the metaphor.",
                evidence: "The classroom was a zoo",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'A shot out of a cannon' → 'He exploded like a shot from a cannon' — simile makes comparison explicit.",
                evidence: "a shot out of a cannon",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'A mountain to climb' → 'The exam loomed over him like a mountain' — personification + simile adds dread.",
                evidence: "a mountain to climb",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tone change: metaphors are punchy and direct; similes are softer comparisons; personification adds emotional weight.",
                evidence: "wielded with surprising skill",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The classroom was like a zoo after the substitute teacher left. Marcus was as quiet as a mouse during the test, but once the bell rang he exploded like a shot from a cannon. The exam loomed over him like a mountain, and his pencil was a sword he wielded with surprising skill.' — similes soften; the personified 'loomed' adds dread.",
            commonErrors: [
              "Changing meaning — similes are comparisons, not identical statements.",
            ],
          },
        },
        {
          id: "ela7-u8-fig-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: FIGPASSAGE,
          parts: [
            {
              label: "a",
              prompt:
                "Create a personification of the exam using an image from the passage.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how personification changes the reader's experience.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Personification",
                statement: "Human traits make non-human things feel alive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'The exam stared down at Marcus' or 'The questions whispered their challenges.'",
                evidence: "The exam was a mountain to climb",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Personification makes the exam feel like an active opponent — it 'stares' or 'whispers' — creating tension and making the challenge feel personal.",
                evidence: "his pencil was a sword",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'The exam stared down at Marcus.' (b) Personification makes the exam an active opponent, creating tension and making the challenge feel personal and alive.",
            commonErrors: [
              "Personifying something already human — personification applies to non-human things.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u8-fig2",
      title: "Idioms and their meanings",
      skill:
        "Interpret idioms and explain why they can't be understood literally.",
      lesson: {
        sections: [
          {
            heading: "What makes an idiom",
            body: "An **idiom** is an expression whose meaning can't be understood from the literal words: 'break a leg' = good luck (not actually breaking a leg), 'it's raining cats and dogs' = raining heavily, 'piece of cake' = very easy. The meaning is figurative, not literal — you must know the idiom or infer from context.",
          },
          {
            heading: "Interpreting idioms in context",
            body: "Context helps decode idioms: 'He was over the moon about the news' — 'over the moon' isn't literal; context shows he's extremely happy. 'She kicked the bucket' — literally impossible; context reveals it means 'died.' When idioms appear, ask: what makes literal sense? What emotion or situation does the context suggest?",
          },
        ],
        keyFormulas: [
          {
            name: "Idiom test",
            statement:
              "If literal meaning is impossible or absurd, it's probably an idiom.",
          },
          {
            name: "Context decoding",
            statement: "Surrounding text reveals the figurative meaning.",
          },
          {
            name: "Idiom examples",
            statement:
              "'break a leg', 'piece of cake', 'over the moon', 'kick the bucket'.",
          },
        ],
        workedExample: {
          problem:
            "What does 'a weight had been lifted off his shoulders' mean in the passage?",
          solution:
            "It means Jamal felt relieved — the burden of the unfinished project was gone. The idiom uses the image of carrying a heavy weight to represent emotional burden; 'lifted' means the burden was removed.",
        },
      },
      questions: [
        {
          id: "ela7-u8-fig2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: IDIOMSPASSAGE,
          stem: "What does 'a weight had been lifted off his shoulders' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He felt relieved of a burden" },
              { id: "b", text: "He dropped something" },
              { id: "c", text: "He literally lifted a heavy object" },
              { id: "d", text: "He was physically stronger" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Idiom",
                statement: "Figurative meaning, not literal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Context shows relief after submitting — 'weight lifted' = burden removed = feeling relieved.",
                evidence: "a weight had been lifted off his shoulders",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. He felt relieved of a burden — idiom for emotional relief.",
            commonErrors: ["Taking it literally — idioms aren't literal."],
          },
        },
        {
          id: "ela7-u8-fig2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: IDIOMSPASSAGE,
          stem: "Explain what 'the last straw that broke the camel's back' means and why it fits the context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Idiom interpretation",
                statement: "Figurative meaning from context.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The idiom means the final problem that made something unbearable — the straw that broke the camel's back.",
                evidence: "the last straw that broke the camel's back",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Context fits: submitting the essay was the final task after weeks of carrying the project — it was the 'last straw' that ended the burden.",
                evidence: "carrying that project around for weeks",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The idiom works because it suggests the project was one burden too many — finally ending it brought relief.",
                evidence: "he could finally breathe easy",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Last straw that broke the camel's back' = the final burden that became too much. Submitting the essay ended weeks of carrying the project — the final task that brought relief.",
            commonErrors: [
              "Explaining the literal image (camel, straw) instead of the figurative meaning (final burden).",
            ],
          },
        },
        {
          id: "ela7-u8-fig2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: IDIOMSPASSAGE,
          stem: "Rewrite the passage replacing the idioms with literal descriptions. Explain how the change affects clarity and tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Idiom translation",
                statement: "Convert figurative to literal.",
              },
              {
                kind: "skill",
                name: "Tone analysis",
                statement: "Idioms add color; literal is clearer but flatter.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "'Weight lifted off shoulders' → 'He felt relieved' — literal but loses the image of burden.",
                evidence: "a weight had been lifted",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Last straw' → 'the final task' or 'the last piece of the project' — literal but loses the sense of overwhelming burden.",
                evidence: "the last straw that broke the camel's back",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Breathe easy' → 'relax' — literal but loses the physical sensation of relief.",
                evidence: "breathe easy",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tone change: idioms add vivid imagery and emotional resonance; literal versions are clearer but flatter and less memorable.",
                evidence: "carrying that project around for weeks",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'When Jamal finally submitted his essay, he felt relieved. He'd been working on that project for weeks — submitting it was the final task, but now he could finally relax.' — clearer but loses the vivid imagery and emotional resonance of the idioms.",
            commonErrors: [
              "Keeping some idioms while claiming 'literal' — choose one approach.",
            ],
          },
        },
        {
          id: "ela7-u8-fig2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: IDIOMSPASSAGE,
          parts: [
            {
              label: "a",
              prompt:
                "Create an original sentence using an idiom about relief or burden.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the idiom's figurative meaning.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Idiom creation",
                statement: "Use idioms appropriately in context.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'After finishing the project, she felt like a weight had been lifted off her shoulders.'",
                evidence: "a weight had been lifted off his shoulders",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The idiom means feeling relieved of a burden — the project was heavy, now it's gone.",
                evidence: "carrying that project around for weeks",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'After finishing the project, she felt like a weight had been lifted off her shoulders.' (b) Means feeling relieved of a burden.",
            commonErrors: [
              "Using an idiom literally or in the wrong context — 'break a leg' isn't for actual leg injuries.",
            ],
          },
        },
      ],
    },
  ],
};
