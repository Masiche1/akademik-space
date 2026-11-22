import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const WORDUSAGE: TextExtract = {
  title: "Excerpt: Commonly Confused Words in Context",
  author: "Written for Akademik Space",
  text: "A student wrote the following sentences in a letter to the school newspaper about cafeteria improvements.",
};

const CONFUSED: TextExtract = {
  title: "Student Letter with Word Usage Errors",
  author: "Written for Akademik Space",
  text: "Dear Editor,\n\nI am writing to effect change in our cafeteria. Their are several problems that effect students daily. First, the lunch lines are to long and students miss there classes. Second, many students can't bare to eat the pizza because it's to greasy. I new the principal would want to know about this, but I didn't no if he would of listened.\n\nIn conclusion, I believe the school should of already addressed these issues.\n\nSincerely,\nA Concerned Student",
};

export const lesson72: Lesson = {
  id: "ela8-u7-lesson-7-2",
  code: "7-2",
  title: "Word Usage, Spelling, and Style",
  goal: "I CAN distinguish commonly confused words, apply spelling conventions, and maintain consistent formal style.",
  standards: [
    "L.8.3",
    "L.8.3a",
    "L.8.3b",
    "L.8.4",
    "L.8.5",
    "L.8.5a",
    "L.8.5b",
    "L.8.6",
  ],
  vocabulary: [
    {
      term: "Homophone",
      definition:
        "Words that sound alike but differ in meaning (their/there/they're).",
    },
    { term: "Word usage", definition: "Correct use of words in context." },
    {
      term: "Register",
      definition: "Level of formality appropriate to context.",
    },
    {
      term: "Spelling convention",
      definition: "Standard rules for spelling words.",
    },
    {
      term: "Consistency",
      definition: "Maintaining same style throughout writing.",
    },
    {
      term: "Etymology",
      definition: "Word origins that explain spelling patterns.",
    },
  ],
  concepts: [
    {
      id: "ela8-u7-homophones",
      title: "Homophones and commonly confused words",
      skill:
        "Distinguish their/there/they're, its/it's, effect/affect, and other confusable words.",
      lesson: {
        sections: [
          {
            heading: "Their, there, they're",
            body: "**Their** = possessive ('their books'), **there** = location ('over there'), **they're** = they are ('they're late'). Test: can you replace with 'they are'? Use they're. Is it showing ownership? Their. Location? There. Common error: 'students miss there classes' should be 'their classes' (possession).",
          },
          {
            heading: "Effect/affect, bare/bear, knew/new",
            body: "**Effect** = result or noun ('the effect was bad'), **affect** = influence or verb ('it will affect students'). **Bare** = uncovered ('bare feet'), **bear** = tolerate ('can't bear it'). **Knew** = past of know, **new** = recent ('a new idea'). **Of** vs **have**: 'would have' not 'would of' — 'of' sounds like 've but isn't.",
          },
        ],
        keyFormulas: [
          {
            name: "Their/there/they're",
            statement: "Possessive/location/contraction — test each.",
          },
          {
            name: "Effect/affect",
            statement: "Effect = noun/result; affect = verb/influence.",
          },
          {
            name: "Bare/bear",
            statement: "Bare = uncovered; bear = tolerate.",
          },
          {
            name: "Of vs have",
            statement: "'Would have' — 'of' is never correct in 'would of'.",
          },
        ],
        workedExample: {
          problem:
            "Fix: 'Their are several problems that effect students daily.'",
          solution:
            "There are several problems that affect students daily. — 'their' → 'there' (existence), 'effect' → 'affect' (verb meaning influence).",
        },
      },
      questions: [
        {
          id: "ela8-u7-homophones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CONFUSED,
          stem: "Which word correctly completes: '___ are several problems'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Theirs" },
              { id: "b", text: "Their" },
              { id: "c", text: "There" },
              { id: "d", text: "They're" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "There",
                statement: "Indicates existence/location.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'There are' indicates existence — not possession or contraction.",
                evidence: "Their are several problems",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. There — existence.",
            commonErrors: [
              "Choosing 'their' — that's possessive, not existence.",
            ],
          },
        },
        {
          id: "ela8-u7-homophones-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CONFUSED,
          stem: "Correct all homophone errors in the first paragraph (their/there, effect/affect, bare/bear, to/too, knew/new, no/know, of/have, should of).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Homophone mastery",
                statement: "Correct word choice in context.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Their are' → 'There are'; 'effect students' → 'affect students' (verb).",
                evidence: "Their are several problems that effect students",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'to long' → 'too long'; 'there classes' → 'their classes'; 'can't bare' → 'can't bear'.",
                evidence: "to long and students miss there classes",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'I new' → 'I knew'; 'didn't no' → 'didn't know'; 'would of' → 'would have'; 'should of' → 'should have'.",
                evidence: "I new the principal would want to know",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "There are... affect... too long... their classes... can't bear... I knew... didn't know... would have... should have.",
            commonErrors: [
              "Fixing some but missing others — systematic review needed.",
            ],
          },
        },
        {
          id: "ela8-u7-homophones-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: WORDUSAGE,
          stem: "Rewrite the entire letter correcting all word usage errors while maintaining the student's voice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive editing",
                statement: "Correct all errors.",
              },
              {
                kind: "skill",
                name: "Voice preservation",
                statement: "Maintain author's tone.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Paragraph 1: 'There are several problems that affect students daily.'",
                evidence: "Their are several problems that effect students",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'the lunch lines are too long and students miss their classes' — fix to/too, there/their.",
                evidence: "to long and students miss there classes",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'can't bear to eat the pizza because it's too greasy' — fix bare/bear, to/too.",
                evidence: "can't bare to eat",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'I knew the principal would want to know about this, but I didn't know if he would have listened' — fix new/knew, no/know, of/have.",
                evidence: "I new the principal would want to know",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Corrected letter: 'I am writing to effect change... There are several problems that affect students daily. First, the lunch lines are too long and students miss their classes. Second, many students can't bear to eat the pizza because it's too greasy. I knew the principal would want to know about this, but I didn't know if he would have listened. In conclusion, I believe the school should have already addressed these issues.'",
            commonErrors: [
              "Changing voice while editing — maintain student's formal tone.",
            ],
          },
        },
        {
          id: "ela8-u7-homophones-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: CONFUSED,
          parts: [
            {
              label: "a",
              prompt: "Create a mnemonic to remember their/there/they're.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Use each correctly in one sentence.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Memory strategy",
                statement: "Mnemonics aid retention.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'They're over there with their books' — all three in one sentence.",
                evidence: "their/there/they're",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Their: 'Their books are here.' There: 'Over there.' They're: 'They're late.'",
                evidence: "homophone",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'They're over there with their books' — all three in one sentence. (b) Their: 'Their books are here.' There: 'Over there.' They're: 'They're late.'",
            commonErrors: [
              "Mnemonic that doesn't help distinguish — must show contrast.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u7-spelling",
      title: "Spelling conventions and patterns",
      skill:
        "Apply spelling rules including i-before-e, suffix rules, and commonly misspelled words.",
      lesson: {
        sections: [
          {
            heading: "Spelling patterns",
            body: "**I before e except after c**: receive, believe, deceive — but 'weird' and 'seize' are exceptions. **Suffix rules**: drop silent e before vowel suffix ('hope' → 'hoping'), keep before consonant ('hope' → 'hopeful'), double final consonant after short vowel ('run' → 'running'). **Commonly misspelled**: separate, definitely, occasion, necessary, embarrass, accommodate, occurrence.",
          },
          {
            heading: "Spelling in context",
            body: "Spelling errors affect credibility: 'seperate' should be 'separate', 'definately' → 'definitely', 'occured' → 'occurred'. Check spelling by: sounding out, checking dictionary, looking for patterns (doubling, silent letters, vowel combinations). Academic writing demands standard spelling — errors distract from content.",
          },
        ],
        keyFormulas: [
          {
            name: "I before e",
            statement:
              "Receive, believe — except after c (receive) or exceptions (weird, seize).",
          },
          {
            name: "Silent e rule",
            statement:
              "Drop before vowel suffix: hope→hoping; keep before consonant: hope→hopeful.",
          },
          {
            name: "Doubling rule",
            statement: "Double final consonant after short vowel: run→running.",
          },
          {
            name: "Common errors",
            statement:
              "Separate, definitely, necessary, embarrass, accommodate.",
          },
        ],
        workedExample: {
          problem: "Why is 'definately' wrong?",
          solution:
            "Correct spelling is 'definitely' — from 'finite' + '-ly'. The 'a' in 'definite' is pronounced as 'i' sound but spelled 'i'. Common error because pronunciation misleads.",
        },
      },
      questions: [
        {
          id: "ela8-u7-spelling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WORDUSAGE,
          stem: "Which is the correct spelling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seprate" },
              { id: "b", text: "Separete" },
              { id: "c", text: "Separate" },
              { id: "d", text: "Seperate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spelling",
                statement: "Standard written form.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Separate' has 'a' in second syllable — 'sep-a-rate'.",
                evidence: "separate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Separate.",
            commonErrors: [
              "Writing 'seperate' — common error because pronunciation suggests 'e'.",
            ],
          },
        },
        {
          id: "ela8-u7-spelling-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WORDUSAGE,
          stem: "Correct the spelling of: definately, occurance, embarass, accomodate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spelling mastery",
                statement: "Correct standard spellings.",
              },
            ],
            steps: [
              {
                reasoning: "Definitely (not definately) — from 'finite'.",
                evidence: "definately",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Occurrence (double c, double r) — from 'occur'.",
                evidence: "occurance",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Embarrass (double r, double s) and accommodate (double c, double m).",
                evidence: "embarass accomodate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Definitely, occurrence, embarrass, accommodate.",
            commonErrors: [
              "Single letters where doubles needed — check dictionary.",
            ],
          },
        },
        {
          id: "ela8-u7-spelling-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: WORDUSAGE,
          stem: "Write a paragraph about school rules using correct spelling, then explain the spelling rules you applied.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Applied spelling",
                statement: "Use correct spellings in writing.",
              },
              {
                kind: "skill",
                name: "Rule awareness",
                statement: "Explain spelling patterns.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Paragraph uses correct spellings: 'Students must arrive on time. The school has a strict dress code. Phones are not allowed during class.'",
                evidence: "school rules",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explanation: 'I used i-before-e (receive), double consonants (necessary), and silent e rules.'",
                evidence: "spelling rules",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Demonstrates both correct application and rule awareness.",
                evidence: "Write a paragraph",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Students must arrive on time. The school has a strict dress code. Phones are not allowed during class. I applied i-before-e (receive), double consonants (necessary), and silent e rules (hoping not hoping).'",
            commonErrors: [
              "Correct spellings but no rule explanation — need both parts.",
            ],
          },
        },
        {
          id: "ela8-u7-spelling-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WORDUSAGE,
          parts: [
            {
              label: "a",
              prompt: "Explain the silent e rule with two examples.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Apply the rule: write 'hoping' and 'hopeful' correctly.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spelling rule application",
                statement: "Apply patterns correctly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Drop silent e before vowel suffix (hoping), keep before consonant (hopeful). Examples: make→making, hope→hopeful.",
                evidence: "silent e rule",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Hoping (dropped e before -ing), hopeful (kept e before -ful).",
                evidence: "hoping hopeful",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Drop silent e before vowel suffix, keep before consonant. (b) Hoping (drop e), hopeful (keep e).",
            commonErrors: [
              "Applying rule inconsistently — must check suffix type.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u7-style",
      title: "Formal style and consistency",
      skill:
        "Maintain formal register and consistent style throughout academic writing.",
      lesson: {
        sections: [
          {
            heading: "Register awareness",
            body: "**Formal register** for academic writing: complete sentences, precise vocabulary, no contractions ('do not' not 'don't'), no slang ('students' not 'kids'), third person preferred. **Informal** for personal narratives: contractions OK, first person, conversational tone. The letter to editor should be formal; a personal essay can be informal. Match register to audience and purpose.",
          },
          {
            heading: "Consistency",
            body: "Maintain consistent style: same tense throughout (past for narrative, present for analysis), same register (don't shift from formal to casual mid-essay), consistent formatting (headings, citations). Inconsistency confuses readers and weakens credibility. Check: tense, person, punctuation style, citation format.",
          },
        ],
        keyFormulas: [
          {
            name: "Register match",
            statement: "Formal for academic/audience; informal for personal.",
          },
          {
            name: "Consistency check",
            statement: "Same tense, person, punctuation style throughout.",
          },
          {
            name: "No contractions",
            statement: "Formal writing uses 'do not' not 'don't'.",
          },
        ],
        workedExample: {
          problem:
            "Why is 'The school should of already addressed these issues' inconsistent in a formal letter?",
          solution:
            "Two issues: 'should of' should be 'should have' (grammar error), and the letter is formal so contractions/informal language should be avoided. 'The school should have already addressed these issues' maintains formal register.",
        },
      },
      questions: [
        {
          id: "ela8-u7-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WORDUSAGE,
          stem: "Which is appropriate for a formal letter to the editor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kids are complaining about lunch" },
              {
                id: "b",
                text: "The school should have already addressed these issues",
              },
              { id: "c", text: "The school should've fixed this already" },
              { id: "d", text: "The school totally messed up" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal register",
                statement: "Complete sentences, no contractions/slang.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option b is formal — no contractions, precise language. Others use contractions/slang.",
                evidence: "formal letter",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. 'The school should have already addressed these issues' — formal register.",
            commonErrors: [
              "Choosing (a) — contraction 'should've' is informal.",
            ],
          },
        },
        {
          id: "ela8-u7-style-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WORDUSAGE,
          stem: "Identify two register inconsistencies in the student letter and fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register consistency",
                statement: "Maintain formal tone.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'A Concerned Student' — informal; should be 'A Concerned Parent' or formal title.",
                evidence: "A Concerned Student",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'should of already addressed' — grammar error + informal; should be 'should have already addressed'.",
                evidence: "should of already addressed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Check for contractions or slang elsewhere — maintain formal throughout.",
                evidence: "Dear Editor",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Fix 'should of' → 'should have'; change signature to formal title or 'Sincerely, [Name]' without informal descriptor.",
            commonErrors: [
              "Fixing grammar but missing register — both matter.",
            ],
          },
        },
        {
          id: "ela8-u7-style-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: WORDUSAGE,
          stem: "Rewrite the letter's conclusion in two versions: one formal, one informal. Explain when each is appropriate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register adaptation",
                statement: "Match tone to context.",
              },
              {
                kind: "skill",
                name: "Audience awareness",
                statement: "Know who reads your writing.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Formal: 'I believe the school should have already addressed these issues.' — for official letter.",
                evidence: "In conclusion, I believe",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Informal: 'The school really should've fixed this a while ago.' — for personal blog or casual note.",
                evidence: "should of already addressed",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explain: formal for school newspaper letter to editor; informal for personal reflection or social media.",
                evidence: "when each is appropriate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Formal: 'I believe the school should have already addressed these issues.' (for letter to editor). Informal: 'The school really should've fixed this a while ago.' (for personal blog). Formal for official audiences; informal for personal/casual contexts.",
            commonErrors: [
              "Informal version still has 'should've' — that's fine for informal but not formal.",
            ],
          },
        },
        {
          id: "ela8-u7-style-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WORDUSAGE,
          parts: [
            { label: "a", prompt: "What is 'register' in writing?", marks: 2 },
            {
              label: "b",
              prompt: "Give one example of formal vs informal language.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Register",
                statement: "Level of formality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Level of formality appropriate to context and audience.",
                evidence: "formal register",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Formal: 'The school should have addressed this.' Informal: 'The school should've fixed this.'",
                evidence: "formal vs informal",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Level of formality appropriate to context/audience. (b) Formal: 'should have'; informal: 'should've' or 'fixed'.",
            commonErrors: ["Confusing register with dialect or accent."],
          },
        },
      ],
    },
  ],
};
