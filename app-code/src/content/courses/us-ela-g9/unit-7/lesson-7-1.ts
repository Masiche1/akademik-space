import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const SYNTAX: TextExtract = {
  title: "Syntax in Context",
  author: "Written for Akademik Space",
  text: "The algorithm doesn't just show you what you like — it decides what you see. This isn't neutral curation; it's persuasion architecture designed to maximize engagement. When platforms optimize for time spent, they optimize for content that triggers emotional responses. Outrage spreads faster than nuance. Complexity loses to simplicity. And democracy — which requires deliberation, nuance, and patience — becomes collateral damage.",
};

const ERRORS: TextExtract = {
  title: "Student Essay with Syntax Errors",
  author: "Written for Akademik Space",
  text: "Social media effects everyone. People spend hours on there phones. The platforms design them to be addictive. Which means users can't stop scrolling. Its a problem that affects teens the most. Because their brains are still developing.",
};

export const lesson71: Lesson = {
  id: "ela9-u7-lesson-7-1",
  code: "7-1",
  title: "Sentence Structure and Variety",
  goal: "I CAN identify and fix sentence structure problems while varying sentence length and structure for effect.",
  standards: ["L.9-10.1", "L.9-10.1a", "L.9-10.1b", "L.9-10.3"],
  vocabulary: [
    {
      term: "Sentence fragment",
      definition: "Incomplete sentence missing subject or verb.",
    },
    {
      term: "Run-on sentence",
      definition: "Two independent clauses joined without proper punctuation.",
    },
    {
      term: "Independent clause",
      definition: "Complete thought that can stand alone.",
    },
    {
      term: "Dependent clause",
      definition:
        "Incomplete thought beginning with subordinating conjunction.",
    },
    {
      term: "Sentence variety",
      definition: "Mixing short and long sentences for rhythm.",
    },
    {
      term: "Parallel structure",
      definition: "Consistent grammatical form in lists or comparisons.",
    },
  ],
  concepts: [
    {
      id: "ela9-u7-syntax",
      title: "Sentence structure mastery",
      skill:
        "Identify fragments, run-ons, and comma splices; construct varied, parallel sentences.",
      lesson: {
        sections: [
          {
            heading: "Fragment and run-on identification",
            body: "Fragments lack complete thought: 'Because their brains are still developing.' (dependent clause alone). Run-ons join independent clauses without proper punctuation: 'People spend hours on their phones the platforms design them to be addictive' — two complete thoughts smashed together. Comma splices: 'Social media affects everyone, people spend hours on phones' — comma alone can't join independent clauses. Fix: period, semicolon, or conjunction + comma.",
          },
          {
            heading: "Sentence variety for effect",
            body: "Monotonous: 'The algorithm decides. It shows content. Users engage. Platforms profit.' Varied: 'The algorithm decides — silently, continuously — what billions see. Users engage. Platforms profit.' Short sentences create punch; long sentences create flow. Grade 9 requires intentional variety: use fragments for emphasis (sparingly), semicolons for related ideas, parallel structure for lists ('deliberation, nuance, and patience').",
          },
        ],
        keyFormulas: [
          {
            name: "Fragment test",
            statement: "Does it have subject + verb + complete thought?",
          },
          {
            name: "Run-on fix",
            statement: "Period, semicolon, or conjunction + comma.",
          },
          {
            name: "Variety = rhythm",
            statement: "Short for punch, long for flow.",
          },
        ],
        workedExample: {
          problem:
            "Fix: 'People spend hours on there phones the platforms design them to be addictive'",
          solution:
            "'People spend hours on their phones; the platforms design them to be addictive.' Or 'People spend hours on their phones because the platforms design them to be addictive.' Semicolon or conjunction fixes run-on.",
        },
      },
      questions: [
        {
          id: "ela9-u7-syntax-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ERRORS,
          stem: "Which sentence is a fragment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The platforms design them to be addictive." },
              { id: "b", text: "Because their brains are still developing." },
              { id: "c", text: "Social media effects everyone." },
              { id: "d", text: "People spend hours on there phones." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fragment",
                statement: "Incomplete thought.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Because their brains are still developing' is dependent clause alone — no independent clause.",
                evidence: "fragment",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Because their brains are still developing.",
            commonErrors: ["Missing that dependent clause can't stand alone."],
          },
        },
        {
          id: "ela9-u7-syntax-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ERRORS,
          stem: "Identify and fix the run-on sentence in the draft.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Run-on identification",
                statement: "Two independent clauses joined wrong.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Run-on: 'People spend hours on there phones the platforms design them to be addictive' — two complete thoughts.",
                evidence: "run-on",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix option 1: semicolon — 'People spend hours on their phones; the platforms design them to be addictive.'",
                evidence: "semicolon",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix option 2: conjunction — 'People spend hours on their phones because the platforms design them to be addictive.'",
                evidence: "conjunction",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Run-on: 'People spend hours on their phones the platforms design them to be addictive.' Fix: semicolon or 'because' conjunction.",
            commonErrors: [
              "Adding comma only — creates comma splice, still wrong.",
            ],
          },
        },
        {
          id: "ela9-u7-syntax-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTAX,
          stem: "Analyze the sentence variety in the excerpt and explain its rhetorical effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety analysis",
                statement: "How structure creates effect.",
              },
              {
                kind: "skill",
                name: "Rhetorical effect",
                statement: "Why it matters.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Short sentences create emphasis: 'Outrage spreads faster than nuance. Complexity loses to simplicity.'",
                evidence: "short sentences",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Long sentence builds complexity: 'When platforms optimize for time spent, they optimize for content that triggers emotional responses.'",
                evidence: "long sentence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Parallel structure: 'deliberation, nuance, and patience' — rhythmic balance reinforces democratic values.",
                evidence: "parallel",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Excerpt uses varied structure: short sentences for emphasis ('Outrage spreads faster than nuance'), longer for mechanism explanation, parallel structure ('deliberation, nuance, patience') for rhetorical balance. Variety creates rhythm and highlights key contrasts.",
            commonErrors: ["Describing variety without explaining effect."],
          },
        },
        {
          id: "ela9-u7-syntax-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ERRORS,
          parts: [
            {
              label: "a",
              prompt: "Fix 'Its a problem that affects teens' — what's wrong?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write a parallel version of 'deliberation, nuance, and patience.'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Grammar + parallelism",
                statement: "Correct form and structure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Its' should be 'It's' (contraction of 'it is') — apostrophe error.",
                evidence: "Its vs It's",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'accuracy, fairness, and transparency' — all nouns, same grammatical form.",
                evidence: "parallel",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Its' → 'It's' (contraction of 'it is'). (b) 'accuracy, fairness, and transparency' — parallel nouns.",
            commonErrors: [
              "Confusing 'its' (possessive) vs 'it's' (contraction).",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u7-punctuation",
      title: "Punctuation and Conventions",
      skill:
        "Use commas, semicolons, colons, dashes, and apostrophes correctly in complex sentences.",
      lesson: {
        sections: [
          {
            heading: "Comma rules for complex sentences",
            body: "Grade 9 requires comma mastery: **after introductory elements** ('However, the data suggests...'), **around nonessential clauses** ('The algorithm, which platforms claim is neutral, actually...'), **in series** ('deliberation, nuance, and patience'), **before coordinating conjunction joining independent clauses** ('Outrage spreads faster, but nuance matters'). Common errors: comma splice (comma alone joining clauses), missing comma after intro, unnecessary commas in restrictive clauses.",
          },
          {
            heading: "Semicolons, colons, dashes",
            body: "**Semicolon** joins related independent clauses: 'Outrage spreads faster than nuance; complexity loses to simplicity.' **Colon** introduces explanation: 'The result is clear: democracy requires deliberation.' **Dashes** add emphasis or interruption: 'The algorithm — silent, continuous, invisible — decides what billions see.' Each mark has specific function; misuse creates confusion. Apostrophes: 'it's' (contraction) vs 'its' (possessive); 'users'' (plural possessive).",
          },
        ],
        keyFormulas: [
          {
            name: "Comma after intro",
            statement: "'However, ...' 'When X, ...'",
          },
          {
            name: "Semicolon = related clauses",
            statement: "Stronger than comma, weaker than period.",
          },
          {
            name: "Colon introduces",
            statement: "Explanation or list follows.",
          },
          { name: "Dash = emphasis", statement: "Interrupt or highlight." },
        ],
        workedExample: {
          problem:
            "Punctuate: 'The algorithm which platforms claim is neutral actually optimizes for engagement'",
          solution:
            "'The algorithm, which platforms claim is neutral, actually optimizes for engagement.' Commas around nonessential clause — the clause adds info but isn't required for meaning.",
        },
      },
      questions: [
        {
          id: "ela9-u7-punctuation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNTAX,
          stem: "Where should commas go in 'When platforms optimize for time spent they optimize for emotional content'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No commas needed" },
              { id: "b", text: "Both after 'spent' and 'content'" },
              { id: "c", text: "After 'spent'" },
              { id: "d", text: "After 'platforms'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intro comma",
                statement: "After introductory clause.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'When platforms optimize for time spent' is introductory dependent clause — comma after 'spent.'",
                evidence: "intro comma",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. After 'spent' — 'When platforms optimize for time spent, they optimize for emotional content.'",
            commonErrors: ["Missing comma after intro clause."],
          },
        },
        {
          id: "ela9-u7-punctuation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNTAX,
          stem: "Choose the correct punctuation: 'Outrage spreads faster than nuance ___ complexity loses to simplicity.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Semicolon use",
                statement: "Join related clauses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Two independent clauses — semicolon appropriate for related ideas.",
                evidence: "semicolon",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Period also works; comma alone would be splice.",
                evidence: "period",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Semicolon shows closer relationship than period — ideas are related contrasts.",
                evidence: "relationship",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Semicolon or period: 'Outrage spreads faster than nuance; complexity loses to simplicity.' Semicolon shows related contrast; comma alone would be splice.",
            commonErrors: ["Using comma — creates comma splice."],
          },
        },
        {
          id: "ela9-u7-punctuation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTAX,
          stem: "Analyze punctuation choices in the excerpt and explain their effect on readability and emphasis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation analysis",
                statement: "How marks create effect.",
              },
              {
                kind: "skill",
                name: "Readability",
                statement: "How punctuation guides reader.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Em-dashes create interruption: 'democracy — which requires deliberation — becomes collateral damage' — emphasis on aside.",
                evidence: "dashes",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Periods create punch: 'Outrage spreads faster than nuance. Complexity loses to simplicity.' — short, emphatic.",
                evidence: "periods",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Commas in series create rhythm: 'deliberation, nuance, and patience' — parallel structure reinforced.",
                evidence: "series commas",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Excerpt uses dashes for emphasis ('democracy — which requires... — becomes'), periods for punch ('Outrage spreads... Complexity loses...'), and series commas for rhythm ('deliberation, nuance, and patience'). Punctuation creates emphasis, rhythm, and readability.",
            commonErrors: ["Identifying marks without explaining effect."],
          },
        },
        {
          id: "ela9-u7-punctuation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ERRORS,
          parts: [
            {
              label: "a",
              prompt: "Fix 'its a problem' — what's the error?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Punctuate: 'The algorithm which platforms claim is neutral optimizes for engagement.'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Apostrophe + clause punctuation",
                statement: "Correct marks.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Its' → 'It's' — contraction of 'it is' needs apostrophe.",
                evidence: "It's",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'The algorithm, which platforms claim is neutral, optimizes for engagement.' — commas around nonessential clause.",
                evidence: "nonessential",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'It's' not 'its.' (b) 'The algorithm, which platforms claim is neutral, optimizes for engagement.'",
            commonErrors: ["Missing commas around nonessential clause."],
          },
        },
      ],
    },
    {
      id: "ela9-u7-wordchoice",
      title: "Word Choice and Precision",
      skill:
        "Choose precise words that convey exact meaning and appropriate register.",
      lesson: {
        sections: [
          {
            heading: "Precision vs vagueness",
            body: "Vague: 'social media is bad' / 'people spend a lot of time online' / 'it affects everyone.' Precise: 'engagement-optimizing algorithms exploit psychological vulnerabilities' / 'average American spends 7+ hours daily on screens' / 'adolescents show higher rates of anxiety and depression.' Precision means choosing words that convey exact meaning — 'curated persona' vs 'fake,' 'validation-seeking' vs 'needing approval.' Grade 9 requires precision in both analysis and writing.",
          },
          {
            heading: "Register and tone",
            body: "Register = formality level: academic ('the algorithmic curation process'), conversational ('the algorithm decides what you see'), formal ('one must consider the implications'), informal ('it's just how it works'). Match register to context: academic essay uses formal; social media post uses conversational. Tone = attitude: neutral ('the data suggests'), critical ('this is manipulation'), urgent ('we must act now'). Consistent register and appropriate tone show sophistication.",
          },
        ],
        keyFormulas: [
          {
            name: "Vague → precise",
            statement: "Exact words for exact concepts.",
          },
          {
            name: "Register = formality",
            statement: "Academic vs conversational.",
          },
          { name: "Tone = attitude", statement: "Neutral, critical, urgent." },
        ],
        workedExample: {
          problem:
            "Make 'social media is bad' precise and appropriately toned.",
          solution:
            "'Engagement-optimizing algorithms exploit psychological vulnerabilities, creating documented harms — including misinformation spread and mental health impacts — that market forces alone cannot address.' Formal register, critical tone, precise vocabulary.",
        },
      },
      questions: [
        {
          id: "ela9-u7-wordchoice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ERRORS,
          stem: "Which phrase is most precise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "social media is bad" },
              { id: "b", text: "people spend a lot of time online" },
              { id: "c", text: "it affects everyone" },
              {
                id: "d",
                text: "engagement-optimizing algorithms exploit psychological vulnerabilities",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Precision",
                statement: "Exact meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Engagement-optimizing algorithms exploit psychological vulnerabilities' is specific and technical vs vague alternatives.",
                evidence: "precision",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. engagement-optimizing algorithms exploit psychological vulnerabilities.",
            commonErrors: ["Thinking longer = more precise."],
          },
        },
        {
          id: "ela9-u7-wordchoice-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ERRORS,
          stem: "Rewrite 'social media effects everyone' with precise vocabulary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word precision",
                statement: "Exact terms.",
              },
            ],
            steps: [
              {
                reasoning: "Fix 'effects' → 'affects' (verb form).",
                evidence: "affects",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'everyone' → 'users across demographics' or 'billions of users globally.'",
                evidence: "users",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add precision: 'engagement-optimizing platforms affect users across demographics through behavioral design.'",
                evidence: "precise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Engagement-optimizing platforms affect users across demographics through behavioral design.' Fixes verb form + adds precise terminology.",
            commonErrors: ["Just changing 'bad' to 'harmful' — still vague."],
          },
        },
        {
          id: "ela9-u7-wordchoice-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTAX,
          stem: "Analyze word choice in the excerpt and explain how precision and register create authority.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word choice analysis",
                statement: "How vocabulary creates effect.",
              },
              {
                kind: "skill",
                name: "Register authority",
                statement: "Formal vs informal.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Technical precision: 'algorithmic curation,' 'persuasion architecture,' 'engagement-optimization' — domain-specific terms.",
                evidence: "technical",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Formal register: 'one must consider,' 'the implications' — academic tone appropriate for analysis.",
                evidence: "formal",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: precision + formality create authority — writer knows subject, expects reader sophistication.",
                evidence: "authority",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Excerpt uses technical precision ('algorithmic curation,' 'persuasion architecture') and formal register ('the implications,' 'one must consider') — creating authority through domain expertise and academic tone. Vocabulary choices signal knowledge and expect reader sophistication.",
            commonErrors: ["Listing words without analyzing effect."],
          },
        },
        {
          id: "ela9-u7-wordchoice-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ERRORS,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between 'affect' and 'effect'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Fix 'social media effects everyone.'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Affect vs effect",
                statement: "Verb vs noun.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Affect' = verb (to influence); 'effect' = noun (result).",
                evidence: "affect vs effect",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Social media affects everyone' — verb form needed.",
                evidence: "affects",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Affect' = verb (influence); 'effect' = noun (result). (b) 'Social media affects everyone.'",
            commonErrors: [
              "Confusing common usage — 'impact' often substitutes but less precise.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u7-parallel",
      title: "Parallel Structure and Consistency",
      skill:
        "Use parallel structure in lists, comparisons, and coordinated elements.",
      lesson: {
        sections: [
          {
            heading: "Parallel structure",
            body: "Parallel = consistent grammatical form: 'deliberation, nuance, and patience' (all nouns) vs 'deliberation, being nuanced, and patient' (mixed forms). 'The algorithm decides, shows, and profits' (verbs) vs 'The algorithm decides, showing, and profit' (mixed). Parallel structure creates rhythm and clarity — reader can anticipate pattern. Non-parallel creates confusion: 'she likes reading, to swim, and runs' — three different forms.",
          },
          {
            heading: "Consistency in lists and comparisons",
            body: "Lists must match: 'not only X but also Y' requires parallel X and Y. Comparisons: 'more X than Y' requires same grammatical category. 'The platform's algorithm is more complex than the government's' vs 'more complex than government' — first is parallel (possessive nouns), second isn't. Consistency extends to verb tense, pronoun reference, and point of view throughout essay.",
          },
        ],
        keyFormulas: [
          {
            name: "Same form in series",
            statement: "All nouns, all verbs, all phrases.",
          },
          { name: "Parallel comparisons", statement: "Like compares to like." },
          {
            name: "Consistency throughout",
            statement: "Tense, POV, pronouns.",
          },
        ],
        workedExample: {
          problem:
            "Fix: 'The platform optimizes for engagement, showing users content, and profits from attention'",
          solution:
            "'The platform optimizes for engagement, shows users content, and profits from attention.' All verbs — parallel structure.",
        },
      },
      questions: [
        {
          id: "ela9-u7-parallel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNTAX,
          stem: "Which list is parallel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "smart, intelligent, and being wise" },
              { id: "b", text: "to read, swimming, and run fast" },
              { id: "c", text: "deliberation, nuance, and patience" },
              { id: "d", text: "reading, to swim, and runs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallel structure",
                statement: "Consistent form.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Deliberation, nuance, and patience' — all nouns, consistent form.",
                evidence: "parallel",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. deliberation, nuance, and patience.",
            commonErrors: ["Missing mixed grammatical forms."],
          },
        },
        {
          id: "ela9-u7-parallel-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNTAX,
          stem: "Fix the parallelism: 'The algorithm decides, showing users content, and profits from attention.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Parallel fixing",
                statement: "Consistent verb forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem: 'decides' (verb), 'showing' (gerund), 'profits' (verb) — mixed forms.",
                evidence: "mixed forms",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: 'decides, shows, and profits' — all simple present verbs.",
                evidence: "verbs",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Alternative: 'deciding, showing, and profiting' — all gerunds.",
                evidence: "gerunds",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Fix: 'The algorithm decides, shows users content, and profits from attention.' All verbs parallel.",
            commonErrors: ["Changing only one element — need all consistent."],
          },
        },
        {
          id: "ela9-u7-parallel-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTAX,
          stem: "Analyze parallel structure in 'democracy requires deliberation, nuance, and patience' and explain its rhetorical effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Parallel analysis",
                statement: "How structure creates effect.",
              },
              {
                kind: "skill",
                name: "Rhetorical effect",
                statement: "Why it matters.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "All three are nouns — consistent grammatical category.",
                evidence: "nouns",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Series creates rhythm — three-beat pattern is memorable and emphatic.",
                evidence: "rhythm",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: reinforces democratic values — the list itself models the deliberation it describes.",
                evidence: "effect",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Parallel nouns create rhythmic three-beat pattern — memorable and emphatic. The list models democratic values it describes: deliberation, nuance, patience all require the same patient, measured approach the phrase advocates.",
            commonErrors: [
              "Identifying parallelism without explaining effect.",
            ],
          },
        },
        {
          id: "ela9-u7-parallel-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ERRORS,
          parts: [
            {
              label: "a",
              prompt: "Why is 'more complex than government' non-parallel?",
              marks: 2,
            },
            { label: "b", prompt: "Fix it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparison parallelism",
                statement: "Like compares to like.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Complex' (adjective) vs 'government' (noun) — comparing different grammatical categories.",
                evidence: "non-parallel",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Fix: 'more complex than the government's' or 'more complex than that of the government' — both noun phrases.",
                evidence: "fix",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Comparing adjective to noun — different categories. (b) 'More complex than the government's' — both noun phrases.",
            commonErrors: ["Fixing meaning instead of structure."],
          },
        },
      ],
    },
  ],
};
