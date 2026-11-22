import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const ADV: TextExtract = {
  title: "Advanced Sentence Craft",
  author: "Written for Akademik Space",
  text: "The platform doesn't merely display content — it curates reality. Not through censorship, but through selection: what you see, when you see it, how often. The algorithm learns what keeps you scrolling, then serves more of it. You don't choose your feed; your feed chooses you. And the scariest part? You can't tell the difference.",
};

export const lesson73: Lesson = {
  id: "ela9-u7-lesson-7-3",
  code: "7-3",
  title: "Advanced Conventions: Clauses, Semicolons, and Style",
  goal: "I CAN use sophisticated sentence structures — clauses, semicolons, appositives — to create precise, varied, and effective prose.",
  standards: ["L.9-10.1", "L.9-10.1a", "L.9-10.1b", "L.9-10.2", "L.9-10.3"],
  vocabulary: [
    {
      term: "Subordinating conjunction",
      definition:
        "Word introducing dependent clause (because, although, while).",
    },
    { term: "Appositive", definition: "Noun phrase renaming adjacent noun." },
    {
      term: "Semicolon",
      definition: "Punctuation joining related independent clauses.",
    },
    {
      term: "Absolute phrase",
      definition: "Noun + participle modifying whole sentence.",
    },
    {
      term: "Periodic sentence",
      definition: "Sentence saving main point for end.",
    },
    {
      term: "Cumulative sentence",
      definition: "Main idea first, then additions.",
    },
  ],
  concepts: [
    {
      id: "ela9-u7-clauses",
      title: "Clauses and complex sentences",
      skill:
        "Construct complex sentences with dependent clauses for precision and variety.",
      lesson: {
        sections: [
          {
            heading: "Clause types",
            body: "**Independent clause**: complete thought ('The algorithm curates your feed'). **Dependent clause**: needs main clause ('Although users believe they choose'). Combine: 'Although users believe they choose their feed, the algorithm actually curates it.' Dependent clause adds nuance — concession, cause, condition, time. Grade 9 requires intentional clause use, not just long sentences.",
          },
          {
            heading: "Subordination for emphasis",
            body: "Front-loaded dependent clause emphasizes it: 'Although the platform claims neutrality, its algorithm optimizes for engagement.' End-loaded emphasizes main clause: 'The algorithm optimizes for engagement, although the platform claims neutrality.' Choose placement for rhetorical effect — what should reader notice first?",
          },
        ],
        keyFormulas: [
          {
            name: "Independent + dependent",
            statement: "Combine for complexity.",
          },
          {
            name: "Placement = emphasis",
            statement: "Front vs end changes focus.",
          },
          {
            name: "Subordinating words",
            statement: "Because, although, while, if.",
          },
        ],
        workedExample: {
          problem:
            "Combine: 'The algorithm curates your feed. Users believe they choose.'",
          solution:
            "'Although users believe they choose their feed, the algorithm actually curates it.' Subordination creates contrast and precision.",
        },
      },
      questions: [
        {
          id: "ela9-u7-clauses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ADV,
          stem: "Which is a dependent clause?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You can't tell the difference" },
              { id: "b", text: "Although users believe they choose" },
              { id: "c", text: "Your feed chooses you" },
              { id: "d", text: "The algorithm curates your feed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependent clause",
                statement: "Needs main clause.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Although users believe they choose' — begins with subordinating conjunction, can't stand alone.",
                evidence: "dependent",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Although users believe they choose.",
            commonErrors: ["Missing 'although' signals dependence."],
          },
        },
        {
          id: "ela9-u7-clauses-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ADV,
          stem: "Combine these sentences with subordination: 'The platform claims neutrality. Its algorithm optimizes for engagement.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Subordination",
                statement: "Combine clauses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option 1: 'Although the platform claims neutrality, its algorithm optimizes for engagement.' — front-loaded concession.",
                evidence: "although",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Option 2: 'The algorithm optimizes for engagement, although the platform claims neutrality.' — end-loaded.",
                evidence: "end-loaded",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Placement matters: front-loaded emphasizes contrast; end-loaded emphasizes algorithm's actual behavior.",
                evidence: "placement",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Although the platform claims neutrality, its algorithm optimizes for engagement.' Or 'The algorithm optimizes for engagement, although the platform claims neutrality.' Placement changes emphasis.",
            commonErrors: ["Using 'and' — doesn't show contrast."],
          },
        },
        {
          id: "ela9-u7-clauses-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ADV,
          stem: "Analyze clause structure in 'You don't choose your feed; your feed chooses you' and explain its rhetorical power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clause analysis",
                statement: "Structure creates effect.",
              },
              {
                kind: "skill",
                name: "Rhetorical power",
                statement: "Why it works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Two independent clauses joined by semicolon — balanced parallel structure.",
                evidence: "parallel",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reversal: 'choose' ↔ 'chooses' — subject/object flip creates chiasmus effect.",
                evidence: "reversal",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: memorable, quotable — distills complex idea into balanced phrase.",
                evidence: "memorable",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Semicolon joins two balanced clauses with reversed subject/object — 'you choose feed' vs 'feed chooses you' creates chiasmus. Parallel structure + reversal makes it memorable and quotable, distilling algorithmic control into elegant phrase.",
            commonErrors: [
              "Describing structure without explaining rhetorical effect.",
            ],
          },
        },
        {
          id: "ela9-u7-clauses-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ADV,
          parts: [
            {
              label: "a",
              prompt:
                "What's the difference between front-loaded and end-loaded clauses?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clause placement",
                statement: "Emphasis control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Front-loaded = dependent clause first (emphasizes concession); end-loaded = dependent clause last (emphasizes main point).",
                evidence: "placement",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Front: 'Although X, Y.' End: 'Y, although X.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Front-loaded emphasizes concession; end-loaded emphasizes main point. (b) Front: 'Although the platform claims neutrality, the algorithm optimizes.' End: 'The algorithm optimizes, although the platform claims neutrality.'",
            commonErrors: ["Thinking placement doesn't matter."],
          },
        },
      ],
    },
    {
      id: "ela9-u7-semicolon",
      title: "Semicolons and Advanced Punctuation",
      skill:
        "Use semicolons, colons, and dashes precisely for sophisticated sentence construction.",
      lesson: {
        sections: [
          {
            heading: "Semicolon mastery",
            body: "Semicolon joins **related independent clauses**: 'The algorithm curates reality; it decides what you see.' Stronger connection than period, weaker than conjunction. Also joins **complex lists**: 'The algorithm optimizes for time spent, likes, and shares; users respond with attention, engagement, and data.' Never use semicolon before conjunction ('; and' is wrong) or with dependent clause. Think: semicolon = 'and/but' with more weight.",
          },
          {
            heading: "Colons and dashes",
            body: "**Colon** introduces explanation/list after complete clause: 'The result is clear: algorithms control attention.' Must follow independent clause. **Dash** adds emphasis/interruption: 'The algorithm — silent, continuous, invisible — decides your reality.' Pairs of dashes set off nonessential info; single dash adds dramatic pause. Don't overuse — dashes lose power if everywhere.",
          },
        ],
        keyFormulas: [
          {
            name: "Semicolon = strong connection",
            statement: "Related independent clauses.",
          },
          {
            name: "Colon introduces",
            statement: "Must follow complete clause.",
          },
          { name: "Dash = emphasis", statement: "Interrupt or highlight." },
        ],
        workedExample: {
          problem:
            "Punctuate: 'The algorithm learns what keeps you scrolling then serves more of it'",
          solution:
            "'The algorithm learns what keeps you scrolling; then it serves more of it.' Semicolon shows sequence/relationship better than comma.",
        },
      },
      questions: [
        {
          id: "ela9-u7-semicolon-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ADV,
          stem: "Which punctuation best joins: 'The algorithm curates reality ___ it decides what you see'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "comma" },
              { id: "b", text: "colon" },
              { id: "c", text: "period" },
              { id: "d", text: "semicolon" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semicolon",
                statement: "Join related clauses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Two related independent clauses — semicolon shows strong connection.",
                evidence: "semicolon",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. semicolon.",
            commonErrors: ["Comma = splice; period = weaker connection."],
          },
        },
        {
          id: "ela9-u7-semicolon-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ADV,
          stem: "Why is 'You don't choose your feed; your feed chooses you' more effective than using a period?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation effect",
                statement: "Semicolon vs period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Semicolon shows tight connection — the two clauses are directly related (reversal).",
                evidence: "connection",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Period would separate them — semicolon emphasizes the parallel/reversal structure.",
                evidence: "parallel",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: semicolon makes the reversal feel inevitable — 'you don't choose... feed chooses' flows as single thought.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Semicolon shows tight connection between related clauses — emphasizes reversal/parallel structure, making it feel like single thought rather than two separate statements.",
            commonErrors: ["Thinking punctuation doesn't affect meaning."],
          },
        },
        {
          id: "ela9-u7-semicolon-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ADV,
          stem: "Analyze all punctuation in the excerpt and explain how each mark creates effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation analysis",
                statement: "Each mark's function.",
              },
              {
                kind: "skill",
                name: "Effect analysis",
                statement: "How marks create meaning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Em-dashes: 'curates reality — it decides' — interruption adds emphasis.",
                evidence: "dashes",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Colon-like structure: 'Not through censorship, but through selection:' — introduces explanation.",
                evidence: "colon",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Semicolon: 'You don't choose your feed; your feed chooses you' — balanced reversal.",
                evidence: "semicolon",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Question mark: 'You can't tell the difference.' — actually statement, not question — creates rhetorical effect.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Dashes create interruption/emphasis ('curates reality — it decides'), colon-like structure introduces explanation ('Not through censorship, but through selection:'), semicolon creates balanced reversal ('You don't choose... feed chooses you'), final statement uses period for punch despite question-like content.",
            commonErrors: ["Identifying marks without explaining effect."],
          },
        },
        {
          id: "ela9-u7-semicolon-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ADV,
          parts: [
            {
              label: "a",
              prompt: "When should you NOT use a semicolon?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Fix: 'The algorithm learns; because it optimizes for engagement.'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Semicolon rules",
                statement: "Correct usage.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Never before conjunction ('; and'), with dependent clause, or in simple list.",
                evidence: "rules",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'because' makes second part dependent — can't use semicolon. Fix: 'The algorithm learns because it optimizes for engagement' or split into two sentences.",
                evidence: "fix",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Never before conjunction, with dependent clause, or simple list. (b) 'Because' creates dependent clause — semicolon invalid. Fix: combine with conjunction or split.",
            commonErrors: [
              "Using semicolon before 'because' — dependent clause can't follow.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u7-appositives",
      title: "Appositives and Absolute Phrases",
      skill:
        "Use appositives and absolute phrases to add precision and variety to sentences.",
      lesson: {
        sections: [
          {
            heading: "Appositives",
            body: "Appositive = noun phrase renaming adjacent noun: 'The algorithm, a machine learning system, curates your feed.' Adds precision without new sentence. Essential appositives (needed for meaning) take no commas: 'My friend Tristan Harris argues...' Nonessential take commas: 'The algorithm, a machine learning system, curates...' Use to add information efficiently — not every noun needs appositive, but strategic use adds sophistication.",
          },
          {
            heading: "Absolute phrases",
            body: "Absolute = noun + participle modifying whole sentence: 'The algorithm having learned your preferences, it serves content accordingly.' More sophisticated than appositive — modifies entire clause, not just noun. 'His arguments exhausted, the debater paused.' Adds background/action context. Use sparingly — can feel overwrought if overused. Alternative: participial phrase ('Having learned your preferences, the algorithm...') but absolute is more formal.",
          },
        ],
        keyFormulas: [
          { name: "Appositive = rename", statement: "Noun phrase adds info." },
          {
            name: "Essential vs nonessential",
            statement: "Commas or no commas.",
          },
          {
            name: "Absolute = noun + participle",
            statement: "Modifies whole sentence.",
          },
        ],
        workedExample: {
          problem: "Add appositive: 'The algorithm curates your feed'",
          solution:
            "'The algorithm, a machine learning system trained on billions of data points, curates your feed.' Appositive adds precision about what algorithm is.",
        },
      },
      questions: [
        {
          id: "ela9-u7-appositives-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ADV,
          stem: "What is an appositive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of verb" },
              { id: "b", text: "A punctuation mark" },
              { id: "c", text: "A sentence type" },
              { id: "d", text: "Noun phrase renaming adjacent noun" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appositive",
                statement: "Renaming noun phrase.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appositive renames adjacent noun — 'the algorithm, a machine learning system.'",
                evidence: "appositive",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Noun phrase renaming adjacent noun.",
            commonErrors: ["Confusing with adjective — it's noun phrase."],
          },
        },
        {
          id: "ela9-u7-appositives-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ADV,
          stem: "Add an appositive to 'The algorithm curates your feed' and explain comma usage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Appositive construction",
                statement: "Rename + punctuate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example: 'The algorithm, a machine learning system, curates your feed.'",
                evidence: "appositive",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Commas needed — 'a machine learning system' is nonessential (not needed for meaning).",
                evidence: "commas",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Essential appositive (no commas): 'My friend Tristan Harris argues...' — needed to identify which friend.",
                evidence: "essential",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'The algorithm, a machine learning system, curates your feed.' Commas because appositive is nonessential — adds info but not needed for identification.",
            commonErrors: ["Missing commas on nonessential appositive."],
          },
        },
        {
          id: "ela9-u7-appositives-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ADV,
          stem: "Write a sentence using an absolute phrase and analyze its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Absolute phrase construction",
                statement: "Noun + participle.",
              },
              {
                kind: "skill",
                name: "Effect analysis",
                statement: "How it works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Example: 'The algorithm having learned your preferences, it serves content accordingly.'",
                evidence: "absolute",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: noun ('algorithm') + participle ('having learned') + object — modifies whole main clause.",
                evidence: "structure",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: adds background/context — shows cause (learned preferences) before effect (serves content).",
                evidence: "effect",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The algorithm having learned your preferences, it serves content accordingly.' Absolute phrase adds context showing cause before effect — more sophisticated than simple 'and' connection.",
            commonErrors: [
              "Confusing absolute phrase with participial phrase.",
            ],
          },
        },
        {
          id: "ela9-u7-appositives-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ADV,
          parts: [
            {
              label: "a",
              prompt:
                "Essential vs nonessential appositive — what's the difference?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Appositive types",
                statement: "Comma rules.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Essential = needed for identification (no commas); nonessential = extra info (commas).",
                evidence: "essential vs nonessential",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Essential: 'My friend Tristan Harris argues...' Nonessential: 'The algorithm, a machine learning system, curates...'",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Essential = needed for ID (no commas); nonessential = extra info (commas). (b) Essential: 'My friend Tristan Harris.' Nonessential: 'The algorithm, a machine learning system.'",
            commonErrors: ["Using commas on essential appositive."],
          },
        },
      ],
    },
    {
      id: "ela9-u7-sentence-types",
      title: "Sentence Types and Rhythm",
      skill:
        "Use different sentence structures — periodic, cumulative, balanced — for rhetorical effect.",
      lesson: {
        sections: [
          {
            heading: "Periodic vs cumulative",
            body: "**Periodic**: saves main point for end — 'Through billions of data points, through constant optimization, through invisible algorithms, the platform decides what you see.' Creates suspense, builds to climax. **Cumulative**: main idea first, then additions — 'The platform decides what you see, through algorithms, through data, through billions of interactions.' Direct, then elaborates. Choose based on effect: periodic for drama, cumulative for clarity.",
          },
          {
            heading: "Balanced and antithetical",
            body: "**Balanced**: parallel structure — 'You don't choose your feed; your feed chooses you.' **Antithetical**: contrasting ideas — 'The platform promises connection but delivers isolation.' These structures create memorable, quotable phrases. Use sparingly — overuse becomes purple prose. Effective balance: one well-crafted balanced sentence among varied others.",
          },
        ],
        keyFormulas: [
          { name: "Periodic = suspense", statement: "Main point at end." },
          { name: "Cumulative = clarity", statement: "Main point first." },
          { name: "Balanced = memorable", statement: "Parallel contrast." },
        ],
        workedExample: {
          problem:
            "Rewrite 'The algorithm decides what you see' as periodic sentence.",
          solution:
            "'Through billions of data points, through constant optimization, through invisible algorithms, the system decides what you see.' Builds suspense to main point.",
        },
      },
      questions: [
        {
          id: "ela9-u7-sentence-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ADV,
          stem: "What is a 'periodic sentence'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence about time periods" },
              { id: "b", text: "Very long sentence" },
              { id: "c", text: "Main point saved for end" },
              { id: "d", text: "Sentence with many clauses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Periodic sentence",
                statement: "Main point at end.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Periodic saves main clause for end — builds suspense.",
                evidence: "periodic",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Main point saved for end.",
            commonErrors: ["Confusing with punctuation period."],
          },
        },
        {
          id: "ela9-u7-sentence-types-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ADV,
          stem: "Rewrite 'You don't choose your feed; your feed chooses you' as cumulative sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cumulative construction",
                statement: "Main point first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cumulative: 'Your feed chooses you — not through your choices, but through algorithms trained on your behavior.'",
                evidence: "cumulative",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Main point first ('feed chooses you'), then elaboration (how/why).",
                evidence: "main first",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Loses some punch of balanced original but gains clarity.",
                evidence: "trade-off",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Your feed chooses you — not through your choices, but through algorithms trained on your behavior.' Main point first, then explanation.",
            commonErrors: [
              "Keeping balanced structure — that's not cumulative.",
            ],
          },
        },
        {
          id: "ela9-u7-sentence-types-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ADV,
          stem: "Analyze 'The platform promises connection but delivers isolation' and explain why it's memorable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Antithetical analysis",
                statement: "Contrast structure.",
              },
              {
                kind: "skill",
                name: "Memorability",
                statement: "Why it sticks.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Antithetical: 'promises' vs 'delivers' — same verb frame, opposite outcomes.",
                evidence: "antithetical",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Parallel nouns: 'connection' vs 'isolation' — abstract concepts contrasted.",
                evidence: "parallel",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: memorable, quotable — distills complex critique into balanced phrase.",
                evidence: "memorable",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Antithetical structure: 'promises' vs 'delivers' with parallel nouns 'connection' vs 'isolation' — same verb frame, opposite outcomes. Creates memorable contrast distilling platform critique into quotable phrase.",
            commonErrors: ["Not recognizing antithetical structure."],
          },
        },
        {
          id: "ela9-u7-sentence-types-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ADV,
          parts: [
            {
              label: "a",
              prompt: "When should you use periodic vs cumulative sentences?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence type selection",
                statement: "When to use which.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Periodic for drama/suspense (main point at end); cumulative for clarity (main point first).",
                evidence: "when",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Periodic: 'Through data, algorithms, optimization... the platform decides.' Cumulative: 'The platform decides — through data, algorithms, optimization.'",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Periodic for drama/suspense; cumulative for clarity. (b) Periodic: 'Through data, algorithms... platform decides.' Cumulative: 'Platform decides — through data, algorithms.'",
            commonErrors: ["Using periodic for everything — loses clarity."],
          },
        },
      ],
    },
    {
      id: "ela9-u7-style",
      title: "Style and Voice in Academic Writing",
      skill:
        "Develop consistent academic voice with appropriate formality, precision, and rhetorical awareness.",
      lesson: {
        sections: [
          {
            heading: "Academic voice",
            body: "Academic writing has consistent voice: **objective tone** ('the data suggests' not 'I think'), **precise vocabulary** ('engagement-optimization' not 'making people stay'), **formal register** ('one must consider' not 'you gotta think about'), **hedged claims** ('may,' 'suggests,' 'appears' — not absolute 'is,' 'proves'). Voice isn't personality suppression — it's choosing language appropriate to context and audience.",
          },
          {
            heading: "Rhetorical awareness",
            body: "Sophisticated writers know their rhetorical choices: passive voice ('content is optimized' — emphasizes process over agent) vs active ('the algorithm optimizes' — emphasizes agent); nominalization ('the optimization of content' — abstract noun) vs verb ('optimize content' — direct action); front-loaded vs end-loaded clauses. Each choice creates different emphasis — choose deliberately, not accidentally.",
          },
        ],
        keyFormulas: [
          { name: "Objective tone", statement: "Data suggests, not I think." },
          { name: "Hedged claims", statement: "May, suggests, appears." },
          {
            name: "Rhetorical choice",
            statement: "Active vs passive, verb vs noun.",
          },
        ],
        workedExample: {
          problem:
            "Convert casual to academic: 'I think social media is messing with teens' brains'",
          solution:
            "'Research suggests social media engagement may affect adolescent cognitive development.' Objective tone, hedged claim, precise vocabulary, formal register.",
        },
      },
      questions: [
        {
          id: "ela9-u7-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ADV,
          stem: "What's the main feature of academic voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Casual language" },
              { id: "b", text: "Simple sentences" },
              { id: "c", text: "Objective tone with precise vocabulary" },
              { id: "d", text: "Strong opinions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Academic voice",
                statement: "Objective + precise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Academic voice = objective tone ('data suggests'), precise vocabulary, formal register.",
                evidence: "academic voice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Objective tone with precise vocabulary.",
            commonErrors: ["Thinking academic = boring."],
          },
        },
        {
          id: "ela9-u7-style-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ADV,
          stem: "Convert 'I think social media is messing with teens' brains' to academic voice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice conversion",
                statement: "Casual → academic.",
              },
            ],
            steps: [
              {
                reasoning: "'I think' → 'Research suggests' (objective tone).",
                evidence: "objective",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "'messing with' → 'may affect' (hedged, precise).",
                evidence: "hedged",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'teens' brains' → 'adolescent cognitive development' (precise vocabulary).",
                evidence: "precise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Research suggests social media engagement may affect adolescent cognitive development.' Objective tone, hedged claim, precise vocabulary.",
            commonErrors: [
              "Just changing 'I think' — need full register shift.",
            ],
          },
        },
        {
          id: "ela9-u7-style-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ADV,
          stem: "Analyze rhetorical choices in 'You don't choose your feed; your feed chooses you' — active vs passive, balanced structure, implications.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical analysis",
                statement: "How choices create effect.",
              },
              {
                kind: "skill",
                name: "Sophisticated awareness",
                statement: "Deliberate vs accidental.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Active voice both clauses — 'you choose' / 'feed chooses' — emphasizes agency (even if negative).",
                evidence: "active",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balanced structure — parallel clauses with reversed subject/object creates chiasmus.",
                evidence: "balanced",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Implication: agency exists but is inverted — you have choice, just not the one you think.",
                evidence: "implication",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Active voice both clauses emphasizes agency (even inverted); balanced structure with reversed subject/object creates chiasmus; implication: choice exists but is inverted — you choose, but feed chooses you. Rhetorical choices create memorable critique of algorithmic control.",
            commonErrors: ["Not recognizing rhetorical sophistication."],
          },
        },
        {
          id: "ela9-u7-style-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ADV,
          parts: [
            {
              label: "a",
              prompt: "Active vs passive voice — when does each work better?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice selection",
                statement: "When to use which.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Active emphasizes agent (who does); passive emphasizes process/result (what happens).",
                evidence: "active vs passive",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Active: 'The algorithm optimizes content.' Passive: 'Content is optimized by the algorithm' — first emphasizes agent, second emphasizes process.",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Active emphasizes agent; passive emphasizes process/result. (b) Active: 'The algorithm optimizes content.' Passive: 'Content is optimized by the algorithm.'",
            commonErrors: [
              "Always using active — passive has rhetorical purpose.",
            ],
          },
        },
      ],
    },
  ],
};
