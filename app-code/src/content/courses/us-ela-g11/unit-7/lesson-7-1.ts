import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const SYNTAX: TextExtract = {
  title: "Syntax Analysis: Sentence Structure",
  author: "Written for Akademik Space",
  text: "Consider these sentences:\n\nSimple: 'The Senate confirmed the nominee.'\n\nCompound: 'The Senate confirmed the nominee, and the President celebrated.'\n\nComplex: 'Although the Senate confirmed the nominee, the President celebrated cautiously.'\n\nCompound-complex: 'Although the Senate confirmed the nominee, the President celebrated cautiously, but the public remained skeptical.'\n\nSentence variety serves different purposes. Simple sentences create emphasis and clarity: 'The Senate confirmed the nominee.' Complex sentences show relationships: 'Although the Senate confirmed the nominee, the President celebrated cautiously' — the 'although' signals contrast. Compound sentences connect equal ideas: 'The Senate confirmed the nominee, and the President celebrated.' Compound-complex combines both: multiple relationships in one sentence.",
};

const PUNCTUATION: TextExtract = {
  title: "Punctuation Analysis: The Power of the Comma",
  author: "Written for Akademik Space",
  text: "The comma is the most versatile — and most misused — punctuation mark. Consider:\n\n'Let's eat, Grandma.' vs 'Let's eat Grandma.'\n\nThe comma changes meaning entirely. In the first, 'Grandma' is being addressed. In the second, 'Grandma' is being eaten. This extreme example illustrates how punctuation isn't just grammatical decoration — it carries meaning.\n\nCommas serve multiple functions: separating items in a list ('apples, oranges, and bananas'), setting off introductory elements ('After the vote, the Senate recessed'), joining independent clauses with conjunctions ('The Senate confirmed, and the President celebrated'), setting off nonessential information ('The nominee, a former judge, was confirmed'). Each function requires understanding when commas are necessary and when they're optional or incorrect.",
};

export const lesson71: Lesson = {
  id: "ela11-u7-lesson-7-1",
  code: "7-1",
  title: "Syntax, Sentence Variety, and Punctuation",
  goal: "I CAN analyze sentence structure, use punctuation precisely, and understand how syntax affects meaning.",
  standards: [
    "L.11-12.1",
    "L.11-12.1a",
    "L.11-12.1b",
    "L.11-12.2",
    "L.11-12.2a",
  ],
  vocabulary: [
    { term: "Syntax", definition: "Sentence structure and arrangement." },
    {
      term: "Sentence variety",
      definition: "Mix of simple, compound, complex.",
    },
    { term: "Independent clause", definition: "Complete sentence." },
    { term: "Dependent clause", definition: "Incomplete without main clause." },
    {
      term: "Comma splice",
      definition: "Two independent clauses joined by comma only.",
    },
    { term: "Punctuation function", definition: "Marks carry meaning." },
  ],
  concepts: [
    {
      id: "ela11-u7-syntax",
      title: "Sentence structure and variety",
      skill: "Analyze and use different sentence types for effect.",
      lesson: {
        sections: [
          {
            heading: "Sentence types",
            body: "Simple = one independent clause ('The Senate confirmed'). Compound = two independent clauses joined ('The Senate confirmed, and the President celebrated'). Complex = independent + dependent clauses ('Although the Senate confirmed, the President celebrated'). Compound-complex = multiple independents + dependents. Each type serves different purposes: simple for emphasis, compound for equal relationships, complex for showing dependencies.",
          },
          {
            heading: "Variety for effect",
            body: "Monotonous writing uses only simple sentences — choppy, lacks nuance. Varied writing mixes types strategically: 'The Senate confirmed the nominee.' (simple, emphasis) 'Although the Senate confirmed the nominee, the President celebrated cautiously.' (complex, shows contrast). Variety maintains reader interest and shows relationships between ideas.",
          },
        ],
        keyFormulas: [
          {
            name: "Four types",
            statement: "Simple, compound, complex, compound-complex.",
          },
          {
            name: "Purpose",
            statement: "Simple = emphasis; complex = relationships.",
          },
          { name: "Variety", statement: "Mix types strategically." },
        ],
        workedExample: {
          problem:
            "What type is 'Although the Senate confirmed, the President celebrated'?",
          solution:
            "Complex — independent clause + dependent clause ('Although...' shows dependency).",
        },
      },
      questions: [
        {
          id: "ela11-u7-syntax-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNTAX,
          stem: "What's a 'complex sentence'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very long" },
              { id: "b", text: "Independent + dependent clauses" },
              { id: "c", text: "Two independent clauses" },
              { id: "d", text: "One clause" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex sentence",
                statement: "Independent + dependent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complex = independent clause + dependent clause(s).",
                evidence: "complex",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Independent + dependent clauses.",
            commonErrors: ["Confusing with compound."],
          },
        },
        {
          id: "ela11-u7-syntax-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNTAX,
          stem: "How does sentence variety affect writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement: "Effect on reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monotonous: only simple sentences — choppy, lacks nuance.",
                evidence: "monotonous",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Varied: mixes types — maintains interest, shows relationships.",
                evidence: "varied",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Strategic: simple for emphasis, complex for contrast — purposeful.",
                evidence: "strategic",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Variety maintains interest, shows relationships, allows emphasis — strategic use enhances writing.",
            commonErrors: ["Not recognizing variety value."],
          },
        },
        {
          id: "ela11-u7-syntax-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTAX,
          stem: "Analyze how the excerpt uses different sentence types for effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence analysis",
                statement: "How types serve purpose.",
              },
              {
                kind: "skill",
                name: "Rhetorical effect",
                statement: "How variety impacts.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Simple example: 'The Senate confirmed the nominee' — emphasis, clarity.",
                evidence: "simple",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Complex example: 'Although... celebrated cautiously' — shows contrast/dependency.",
                evidence: "complex",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Variety purpose: demonstrates how structure conveys meaning — not just grammar rule.",
                evidence: "purpose",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Excerpt uses sentence types strategically: simple for emphasis, complex for showing relationships. Variety demonstrates how syntax conveys meaning — structure is rhetorical choice, not just grammar.",
            commonErrors: ["Identifying types without analyzing effect."],
          },
        },
        {
          id: "ela11-u7-syntax-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SYNTAX,
          parts: [
            { label: "a", prompt: "What's an 'independent clause'?", marks: 2 },
            { label: "b", prompt: "What's a 'dependent clause'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Clause types",
                statement: "Independent vs dependent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Complete sentence — has subject + verb, can stand alone.",
                evidence: "independent",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Incomplete — needs main clause, begins with subordinating conjunction.",
                evidence: "dependent",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Complete sentence. (b) Incomplete, needs main clause.",
            commonErrors: ["Confusing clause types."],
          },
        },
      ],
    },
    {
      id: "ela11-u7-punctuation",
      title: "Punctuation and Meaning",
      skill:
        "Use punctuation precisely — understand how marks affect meaning and clarity.",
      lesson: {
        sections: [
          {
            heading: "Comma functions",
            body: "Commas serve multiple functions: **lists** ('apples, oranges, bananas'), **introductory elements** ('After the vote, the Senate recessed'), **independent clauses** ('The Senate confirmed, and the President celebrated'), **nonessential information** ('The nominee, a former judge, was confirmed'). Each function has rules — not every pause needs a comma, not every comma is optional.",
          },
          {
            heading: "Comma splices and run-ons",
            body: "Comma splice: two independent clauses joined by comma only — 'The Senate confirmed, the President celebrated' (incorrect). Fix: add conjunction ('and'), semicolon (';'), or period. Run-on: clauses joined without punctuation — 'The Senate confirmed the President celebrated' (incorrect). These errors confuse readers — punctuation clarifies structure.",
          },
        ],
        keyFormulas: [
          {
            name: "Comma functions",
            statement: "Lists, intro, clauses, nonessential.",
          },
          { name: "Comma splice", statement: "Two independents + comma only." },
          { name: "Run-on", statement: "No punctuation between clauses." },
        ],
        workedExample: {
          problem:
            "Fix the comma splice: 'The Senate confirmed, the President celebrated.'",
          solution:
            "Add conjunction: 'The Senate confirmed, and the President celebrated.' Or semicolon: 'The Senate confirmed; the President celebrated.'",
        },
      },
      questions: [
        {
          id: "ela11-u7-punctuation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PUNCTUATION,
          stem: "What's a 'comma splice'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two independent clauses joined by comma only" },
              { id: "b", text: "Extra comma" },
              { id: "c", text: "Missing comma" },
              { id: "d", text: "Comma in list" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comma splice",
                statement: "Error type.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comma splice = two independent clauses joined by comma only.",
                evidence: "splice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Two independent clauses joined by comma only.",
            commonErrors: ["Not recognizing error."],
          },
        },
        {
          id: "ela11-u7-punctuation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PUNCTUATION,
          stem: "Identify three comma functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comma functions",
                statement: "Multiple uses.",
              },
            ],
            steps: [
              {
                reasoning: "Lists: 'apples, oranges, and bananas.'",
                evidence: "lists",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Introductory: 'After the vote, the Senate recessed.'",
                evidence: "intro",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Independent clauses: 'The Senate confirmed, and the President celebrated.'",
                evidence: "clauses",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Lists, introductory elements, independent clauses (also nonessential info).",
            commonErrors: ["Missing functions."],
          },
        },
        {
          id: "ela11-u7-punctuation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PUNCTUATION,
          stem: "Analyze how punctuation affects meaning in the 'Grandma' example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation analysis",
                statement: "How marks carry meaning.",
              },
              {
                kind: "skill",
                name: "Meaning study",
                statement: "How punctuation changes interpretation.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "'Let's eat, Grandma' — comma sets off address, Grandma is being spoken to.",
                evidence: "address",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Let's eat Grandma' — no comma, Grandma is object of 'eat.'",
                evidence: "object",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Extreme example shows punctuation isn't decoration — carries meaning.",
                evidence: "meaning",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Comma changes meaning entirely: 'eat, Grandma' = addressing Grandma; 'eat Grandma' = Grandma is object. Punctuation carries meaning — not just grammatical decoration.",
            commonErrors: ["Thinking punctuation is optional."],
          },
        },
        {
          id: "ela11-u7-punctuation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PUNCTUATION,
          parts: [
            { label: "a", prompt: "What's a 'run-on' sentence?", marks: 2 },
            { label: "b", prompt: "How do you fix it?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Run-on",
                statement: "Missing punctuation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Independent clauses joined without punctuation or conjunction.",
                evidence: "run-on",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Fix: add period, semicolon, or conjunction.",
                evidence: "fix",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Clauses without punctuation. (b) Add period, semicolon, or conjunction.",
            commonErrors: ["Not recognizing run-on."],
          },
        },
      ],
    },
    {
      id: "ela11-u7-wordchoice",
      title: "Word Choice and Diction",
      skill:
        "Analyze and use precise, effective word choice for different purposes.",
      lesson: {
        sections: [
          {
            heading: "Diction levels",
            body: "Word choice ranges: **formal** ('commence,' 'terminate,' 'approximately') vs **informal** ('start,' 'end,' 'about') vs **technical** ('mitochondria,' 'photosynthesis') vs **colloquial** ('gonna,' 'wanna'). Effective writers choose words matching purpose and audience — formal for academic, informal for casual, technical for precision.",
          },
          {
            heading: "Connotation and denotation",
            body: "Denotation = literal meaning; connotation = emotional associations. 'Frugal' (positive: careful with money) vs 'stingy' (negative: unwilling to spend) — same denotation, different connotation. 'Assertive' (positive: confident) vs 'aggressive' (negative: hostile). Word choice shapes perception through connotation.",
          },
        ],
        keyFormulas: [
          {
            name: "Diction levels",
            statement: "Formal, informal, technical, colloquial.",
          },
          {
            name: "Denotation vs connotation",
            statement: "Literal vs emotional.",
          },
          { name: "Purpose match", statement: "Choose words for audience." },
        ],
        workedExample: {
          problem: "How do 'frugal' and 'stingy' differ?",
          solution:
            "Same denotation (careful with money), different connotation — frugal positive, stingy negative.",
        },
      },
      questions: [
        {
          id: "ela11-u7-wordchoice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNTAX,
          stem: "What's the difference between denotation and connotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Connotation is spelling" },
              { id: "b", text: "Denotation is emotion" },
              { id: "c", text: "No difference" },
              {
                id: "d",
                text: "Denotation = literal; connotation = emotional",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denotation vs connotation",
                statement: "Literal vs emotional.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Denotation = literal meaning; connotation = emotional associations.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Denotation = literal; connotation = emotional.",
            commonErrors: ["Confusing the terms."],
          },
        },
        {
          id: "ela11-u7-wordchoice-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNTAX,
          stem: "Compare 'frugal' and 'stingy' — same denotation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connotation analysis",
                statement: "Same meaning, different emotion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Denotation: both mean careful with money — same literal meaning.",
                evidence: "denotation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connotation: 'frugal' positive (wise), 'stingy' negative (unwilling).",
                evidence: "connotation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: word choice shapes perception through emotional association.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Same denotation (careful with money), different connotation — frugal positive, stingy negative.",
            commonErrors: ["Not recognizing connotation."],
          },
        },
        {
          id: "ela11-u7-wordchoice-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNTAX,
          stem: "Analyze how word choice affects tone in formal vs informal writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Diction analysis",
                statement: "Word choice levels.",
              },
              {
                kind: "skill",
                name: "Tone study",
                statement: "How diction affects tone.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Formal: 'commence,' 'terminate,' 'approximately' — academic, precise.",
                evidence: "formal",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Informal: 'start,' 'end,' 'about' — casual, accessible.",
                evidence: "informal",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tone: formal = authoritative; informal = conversational — diction sets tone.",
                evidence: "tone",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Word choice affects tone: formal diction ('commence') = authoritative/academic; informal ('start') = conversational/casual. Diction levels match purpose and audience.",
            commonErrors: ["Not linking diction to tone."],
          },
        },
        {
          id: "ela11-u7-wordchoice-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SYNTAX,
          parts: [
            { label: "a", prompt: "What are 'diction levels'?", marks: 2 },
            { label: "b", prompt: "Give examples.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diction levels",
                statement: "Formality spectrum.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Formality levels: formal, informal, technical, colloquial.",
                evidence: "levels",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Examples: 'commence' (formal), 'start' (informal), 'mitochondria' (technical).",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Formality levels. (b) 'Commence,' 'start,' 'mitochondria.'",
            commonErrors: ["Missing levels."],
          },
        },
      ],
    },
    {
      id: "ela11-u7-integrated",
      title: "Integrated Language Practice",
      skill:
        "Integrate syntax, punctuation, and word choice in comprehensive language analysis.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Effective writing requires: **syntax** (sentence variety), **punctuation** (precise marks), **diction** (appropriate word choice). These work together: sentence structure creates rhythm, punctuation clarifies meaning, word choice sets tone. Exam questions often require analyzing how language choices affect meaning and style.",
          },
          {
            heading: "Exam application",
            body: "Comprehensive analysis: identify sentence types → evaluate punctuation → analyze diction → assess overall effect. Each skill alone is partial; together reveal language mastery.",
          },
        ],
        keyFormulas: [
          {
            name: "Three skills",
            statement: "Syntax + punctuation + diction.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine language analyses." },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze a writing sample?",
          solution: "Sentence types → punctuation → diction → overall effect.",
        },
      },
      questions: [
        {
          id: "ela11-u7-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNTAX,
          stem: "What three language skills are needed for comprehensive analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only vocabulary" },
              { id: "b", text: "Syntax + punctuation + diction" },
              { id: "c", text: "Only spelling" },
              { id: "d", text: "Only grammar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive language",
                statement: "Three skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Syntax + punctuation + diction = comprehensive language analysis.",
                evidence: "three skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Syntax + punctuation + diction.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u7-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNTAX,
          stem: "Apply two language skills to the syntax excerpt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Syntax: 'Although... celebrated cautiously' — complex sentence shows contrast.",
                evidence: "syntax",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Diction: 'confirmed,' 'celebrated cautiously' — precise word choice.",
                evidence: "diction",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Punctuation: commas set off introductory clauses — clarity.",
                evidence: "punctuation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Syntax (complex), diction (precise), punctuation (clarity).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u7-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PUNCTUATION,
          stem: "Write an analysis paragraph on how language choices affect meaning in the 'Grandma' example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Meaning evaluation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Punctuation: comma changes meaning entirely — 'eat, Grandma' vs 'eat Grandma.'",
                evidence: "punctuation",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Syntax: clause structure determines interpretation — address vs object.",
                evidence: "syntax",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Integration: punctuation + syntax work together — language choices carry meaning.",
                evidence: "integration",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The comma changes meaning entirely: with comma, Grandma is addressed; without, Grandma is object. Punctuation + syntax work together — language choices carry meaning, not just grammar rules.'",
            commonErrors: ["Analyzing punctuation or syntax separately."],
          },
        },
        {
          id: "ela11-u7-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SYNTAX,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated language analysis stronger?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each skill alone is partial; together reveal how language works.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: punctuation+syntax shows meaning change — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal how language works. (b) Punctuation+syntax shows meaning change.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
