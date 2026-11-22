import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const LANG: TextExtract = {
  title: "Language Conventions: Sentence Structure and Variety",
  author: "Written for Akademik Space",
  text: "Effective writing requires varied sentence structure. Consider these examples:\n\n**Simple:** 'The storm hit at 9 p.m.' — clear, direct, but lacks complexity.\n\n**Compound:** 'The storm hit at 9 p.m., and the lights flickered.' — two independent clauses joined by conjunction.\n\n**Complex:** 'When the storm hit at 9 p.m., the lights flickered.' — dependent clause + independent clause, showing relationship.\n\n**Compound-complex:** 'When the storm hit at 9 p.m., the lights flickered, and within minutes the entire neighborhood went dark.' — multiple clauses showing sequence and causation.\n\nVaried structure creates rhythm and emphasis. Short sentences punch. Long sentences flow. The writer chooses structure to match meaning — 'The power returned' (short, emphatic) vs 'When the power returned at 11 p.m., we lingered on the porch' (longer, reflective).",
};

const PUNCT: TextExtract = {
  title: "Punctuation and Precision",
  author: "Written for Akademik Space",
  text: "Punctuation guides readers through meaning:\n\n**Commas** separate items in lists, set off introductory phrases, and join independent clauses with conjunctions: 'We gathered on the porch, talked about everything, and shared hot chocolate.'\n\n**Semicolons** connect related independent clauses without conjunction: 'The power returned; we lingered on the porch.' They also separate complex list items: 'The storm brought rain; wind; and lightning.'\n\n**Colons** introduce explanations or lists: 'The result was clear: we needed darkness to see what matters.'\n\n**Dashes** add emphasis or interruption: 'The storm had knocked out electricity—but it had also knocked down walls between us.'\n\n**Apostrophes** show possession: 'the neighborhood's connection,' 'the neighbors' stories.'",
};

export const lesson71: Lesson = {
  id: "ela10-u7-lesson-7-1",
  code: "7-1",
  title: "Sentence Structure, Punctuation, and Word Choice",
  goal: "I CAN use varied sentence structure, precise punctuation, and effective word choice in my writing.",
  standards: [
    "L.9-10.1",
    "L.9-10.1a",
    "L.9-10.1b",
    "L.9-10.2",
    "L.9-10.2a",
    "L.9-10.2b",
    "L.9-10.3",
    "L.9-10.4",
  ],
  vocabulary: [
    { term: "Sentence structure", definition: "How sentences are organized." },
    {
      term: "Punctuation",
      definition: "Marks guiding readers through meaning.",
    },
    { term: "Word choice", definition: "Selecting precise vocabulary." },
    { term: "Connotation", definition: "Emotional associations of words." },
    { term: "Register", definition: "Formality level of language." },
    { term: "Syntax", definition: "Arrangement of words in sentences." },
  ],
  concepts: [
    {
      id: "ela10-u7-structure",
      title: "Sentence structure variety",
      skill: "Use varied sentence structures for rhythm and emphasis.",
      lesson: {
        sections: [
          {
            heading: "Sentence types",
            body: "Simple: one independent clause ('The storm hit'). Compound: two independent clauses + conjunction ('The storm hit, and the lights flickered'). Complex: dependent + independent ('When the storm hit, the lights flickered'). Compound-complex: multiple clauses ('When the storm hit, the lights flickered, and within minutes the neighborhood went dark'). Varied structure creates rhythm — short punches, long flows.",
          },
          {
            heading: "Structure for meaning",
            body: "Choose structure to match meaning: 'The power returned' (short, emphatic — moment of relief) vs 'When the power returned at 11 p.m., we lingered on the porch' (longer, reflective — contemplation). Simple sentences for impact; complex for nuance. Avoid monotony — all short feels choppy, all long feels exhausting.",
          },
        ],
        keyFormulas: [
          {
            name: "Four types",
            statement: "Simple, compound, complex, compound-complex.",
          },
          {
            name: "Structure = meaning",
            statement: "Choose to match purpose.",
          },
          { name: "Variety creates rhythm", statement: "Mix for engagement." },
        ],
        workedExample: {
          problem:
            "Why does 'The power returned' work better than 'When the power returned at 11 p.m., the power came back on' for emphasis?",
          solution:
            "Short simple sentence creates punch and emphasis — moment of relief deserves brevity.",
        },
      },
      questions: [
        {
          id: "ela10-u7-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LANG,
          stem: "What's a compound sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One clause" },
              { id: "b", text: "Two independent clauses + conjunction" },
              { id: "c", text: "Dependent + independent" },
              { id: "d", text: "Multiple dependent clauses" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compound sentence",
                statement: "Two independent clauses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compound = two independent clauses joined by conjunction.",
                evidence: "compound",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Two independent clauses + conjunction.",
            commonErrors: ["Confusing with complex."],
          },
        },
        {
          id: "ela10-u7-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LANG,
          stem: "Why does 'The power returned' work better than a longer sentence for emphasis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence structure for emphasis",
                statement: "Brevity = impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Short simple sentence creates punch — moment of relief deserves brevity.",
                evidence: "punch",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Longer sentence would dilute emphasis — 'when... at 11 p.m.... came back on' is wordy.",
                evidence: "dilute",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure matches meaning: relief = brief, emphatic.",
                evidence: "match",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Short sentence creates punch — relief deserves brevity. Longer sentence dilutes emphasis. Structure matches meaning.",
            commonErrors: ["Thinking longer = more impressive."],
          },
        },
        {
          id: "ela10-u7-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LANG,
          stem: "Analyze how sentence variety creates rhythm in effective writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement: "Rhythm creation.",
              },
              {
                kind: "skill",
                name: "Structure-meaning connection",
                statement: "How choices matter.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Short sentences punch: 'The power returned.' — emphatic beats.",
                evidence: "short",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Long sentences flow: complex sentences develop ideas — explanatory passages.",
                evidence: "long",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Variety creates rhythm — reader engagement through structural diversity.",
                evidence: "variety",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Sentence variety creates rhythm: short sentences punch ('The power returned'), long sentences flow (complex development). Variety maintains engagement — monotony (all short or all long) loses reader.",
            commonErrors: ["Using only one sentence type."],
          },
        },
        {
          id: "ela10-u7-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: LANG,
          parts: [
            { label: "a", prompt: "What's a complex sentence?", marks: 2 },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex sentence",
                statement: "Dependent + independent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Dependent clause + independent clause — shows relationship.",
                evidence: "complex",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'When the storm hit at 9 p.m., the lights flickered.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Dependent + independent clause. (b) 'When the storm hit at 9 p.m., the lights flickered.'",
            commonErrors: ["Confusing with compound."],
          },
        },
      ],
    },
    {
      id: "ela10-u7-punct",
      title: "Punctuation for Clarity and Emphasis",
      skill: "Use punctuation correctly to guide readers and create emphasis.",
      lesson: {
        sections: [
          {
            heading: "Punctuation functions",
            body: "Commas: lists, introductory phrases, clause separation. Semicolons: connect related independent clauses ('The power returned; we lingered'). Colons: introduce explanations ('The result was clear: we needed darkness'). Dashes: emphasis or interruption ('electricity—but it had also knocked down walls'). Apostrophes: possession ('neighborhood's connection'). Each mark has specific function — misuse creates confusion.",
          },
          {
            heading: "Punctuation for effect",
            body: "Punctuation creates rhythm and emphasis: semicolon creates pause ('The power returned; we lingered' — reflective beat), colon creates anticipation ('The result was clear:...' — revelation), dash creates interruption ('electricity—but...' — emphasis shift). Effective punctuation guides reader's emotional response, not just grammatical correctness.",
          },
        ],
        keyFormulas: [
          {
            name: "Each mark has function",
            statement: "Comma, semicolon, colon, dash, apostrophe.",
          },
          {
            name: "Punctuation = rhythm",
            statement: "Creates pauses and emphasis.",
          },
          {
            name: "Misuse = confusion",
            statement: "Correct usage guides meaning.",
          },
        ],
        workedExample: {
          problem:
            "How does the dash create emphasis in 'electricity—but it had also knocked down walls'?",
          solution:
            "Dash creates interruption — signals shift from problem (outage) to positive (connection). Emphasizes contrast.",
        },
      },
      questions: [
        {
          id: "ela10-u7-punct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PUNCT,
          stem: "What's the function of a colon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pause" },
              { id: "b", text: "Introduce explanation or list" },
              { id: "c", text: "Separate clauses" },
              { id: "d", text: "Show possession" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Colon function",
                statement: "Introduction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Colon introduces explanation or list — 'The result was clear:...'",
                evidence: "colon",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Introduce explanation or list.",
            commonErrors: ["Confusing with semicolon."],
          },
        },
        {
          id: "ela10-u7-punct-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PUNCT,
          stem: "How does the dash create emphasis in 'electricity—but it had also knocked down walls'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation for emphasis",
                statement: "Dash function.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dash creates interruption — signals shift in thought.",
                evidence: "interruption",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Shift: from problem (outage) to positive (connection) — contrast emphasized.",
                evidence: "shift",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: draws attention to unexpected turn — 'but' amplified.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Dash creates interruption — signals shift from problem to positive. Emphasizes contrast, draws attention to unexpected turn.",
            commonErrors: ["Thinking dash is just decoration."],
          },
        },
        {
          id: "ela10-u7-punct-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PUNCT,
          stem: "Analyze how punctuation creates rhythm and guides reader response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation rhythm",
                statement: "Reader guidance.",
              },
              {
                kind: "skill",
                name: "Emotional effect",
                statement: "How marks influence.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Semicolon creates pause: 'The power returned; we lingered' — reflective beat.",
                evidence: "semicolon",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Colon creates anticipation: 'The result was clear:...' — revelation moment.",
                evidence: "colon",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Dash creates interruption: 'electricity—but...' — emphasis shift.",
                evidence: "dash",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Punctuation creates rhythm: semicolon = pause ('returned; lingered'), colon = anticipation ('clear:...'), dash = interruption ('electricity—but...'). Each guides reader's emotional response.",
            commonErrors: ["Thinking punctuation is only grammatical."],
          },
        },
        {
          id: "ela10-u7-punct-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PUNCT,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between semicolon and colon?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Semicolon vs colon",
                statement: "Different functions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Semicolon connects related clauses; colon introduces explanation/list.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Semicolon: 'The power returned; we lingered.' Colon: 'The result was clear: we needed darkness.'",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Semicolon connects clauses; colon introduces explanation. (b) Semicolon: 'returned; lingered.' Colon: 'clear: we needed darkness.'",
            commonErrors: ["Confusing the two marks."],
          },
        },
      ],
    },
    {
      id: "ela10-u7-word",
      title: "Word Choice and Connotation",
      skill:
        "Select precise words with appropriate connotation and register for effective communication.",
      lesson: {
        sections: [
          {
            heading: "Word choice precision",
            body: "Effective word choice: **denotation** (dictionary meaning) + **connotation** (emotional associations). 'Darkness' vs 'blackness' vs 'gloom' — same denotation (absence of light) but different connotations (mysterious vs negative vs depressing). 'Connection' vs 'friendship' vs 'community' — different shades of meaning. Precise word choice conveys exact intent.",
          },
          {
            heading: "Register and audience",
            body: "Register = formality level: **formal** ('utilize,' 'approximately'), **informal** ('use,' 'about'), **academic** ('furthermore,' 'consequently'), **conversational** ('gonna,' 'stuff'). Match register to audience and purpose: academic essay needs formal; narrative can be conversational; social media informal. Inappropriate register undermines credibility.",
          },
        ],
        keyFormulas: [
          {
            name: "Denotation + connotation",
            statement: "Meaning + associations.",
          },
          { name: "Register = formality", statement: "Match to audience." },
          {
            name: "Precise = intentional",
            statement: "Every word choice matters.",
          },
        ],
        workedExample: {
          problem: "Why choose 'darkness' over 'blackness' in the narrative?",
          solution:
            "'Darkness' has neutral/mysterious connotation; 'blackness' has negative connotations. 'Darkness' fits theme of perspective.",
        },
      },
      questions: [
        {
          id: "ela10-u7-word-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LANG,
          stem: "What's the difference between denotation and connotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              {
                id: "b",
                text: "Denotation = dictionary meaning; connotation = emotional associations",
              },
              { id: "c", text: "Connotation is more important" },
              { id: "d", text: "Denotation is emotional" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denotation vs connotation",
                statement: "Meaning vs associations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Denotation = dictionary meaning; connotation = emotional associations.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Denotation = dictionary meaning; connotation = emotional associations.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "ela10-u7-word-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LANG,
          stem: "Why is 'darkness' more effective than 'blackness' in the narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connotation analysis",
                statement: "Word choice impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Denotation: both mean absence of light — same literal meaning.",
                evidence: "denotation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connotation: 'darkness' neutral/mysterious; 'blackness' negative/depressing.",
                evidence: "connotation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fit: 'darkness' suits theme of perspective — 'see what matters' in darkness.",
                evidence: "fit",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Same denotation (absence of light) but different connotation: 'darkness' neutral/mysterious vs 'blackness' negative. 'Darkness' fits theme of perspective.",
            commonErrors: ["Ignoring connotation."],
          },
        },
        {
          id: "ela10-u7-word-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LANG,
          stem: "Analyze how word choice and register affect credibility in different contexts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word choice analysis",
                statement: "Precision + register.",
              },
              {
                kind: "skill",
                name: "Credibility impact",
                statement: "How choices matter.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Precise word choice: 'difficult to disengage' vs 'can't stop' — exact meaning.",
                evidence: "precise",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Appropriate register: academic essay uses formal; narrative uses conversational.",
                evidence: "register",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Inappropriate choices undermine credibility: jargon without explanation, wrong register.",
                evidence: "credibility",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Word choice affects credibility: precise language conveys exact meaning ('difficult to disengage' vs 'can't stop'), appropriate register matches context (formal academic vs conversational narrative), inappropriate choices (jargon, wrong register) undermine credibility.",
            commonErrors: ["Thinking any words work."],
          },
        },
        {
          id: "ela10-u7-word-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: LANG,
          parts: [
            { label: "a", prompt: "What's 'register' in writing?", marks: 2 },
            {
              label: "b",
              prompt: "Give an example of formal vs informal.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Register",
                statement: "Formality level.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Formality level of language — formal, informal, academic, conversational.",
                evidence: "register",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Formal: 'utilize,' 'approximately.' Informal: 'use,' 'about.'",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Formality level. (b) Formal: 'utilize'; informal: 'use.'",
            commonErrors: ["Confusing register with dialect."],
          },
        },
      ],
    },
    {
      id: "ela10-u7-revision",
      title: "Revision and Editing Strategies",
      skill:
        "Revise and edit writing effectively — checking clarity, coherence, grammar, and style.",
      lesson: {
        sections: [
          {
            heading: "Revision vs editing",
            body: "Revision = improving content/structure (is argument clear? evidence sufficient? organization logical?). Editing = fixing surface errors (grammar, punctuation, spelling). Both essential. Revision asks 'does this say what I want?' Editing asks 'is this correct?' Effective writers do both — revise first (big picture), then edit (details).",
          },
          {
            heading: "Revision checklist",
            body: "Check: **clarity** (is meaning clear?), **coherence** (do ideas flow?), **evidence** (is support sufficient?), **organization** (is structure logical?), **style** (is tone appropriate?). Editing checklist: **grammar** (subject-verb agreement, tense consistency), **punctuation** (correct marks), **spelling** (no errors), **word choice** (precise vocabulary). Systematic approach prevents missing issues.",
          },
        ],
        keyFormulas: [
          {
            name: "Revision = content",
            statement: "Big picture improvements.",
          },
          {
            name: "Editing = surface",
            statement: "Grammar/punctuation/spelling.",
          },
          {
            name: "Revise then edit",
            statement: "Content first, details second.",
          },
        ],
        workedExample: {
          problem: "What's the difference between revision and editing?",
          solution:
            "Revision improves content/structure; editing fixes surface errors. Revise first (clarity, coherence), then edit (grammar, punctuation).",
        },
      },
      questions: [
        {
          id: "ela10-u7-revision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LANG,
          stem: "What's the difference between revision and editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Revision = content; editing = surface errors" },
              { id: "c", text: "Editing is more important" },
              { id: "d", text: "Revision is just proofreading" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revision vs editing",
                statement: "Content vs surface.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revision improves content/structure; editing fixes grammar/punctuation/spelling.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Revision = content; editing = surface errors.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "ela10-u7-revision-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LANG,
          stem: "What's the correct order for revision and editing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision order",
                statement: "Content first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revise first: improve content/structure — clarity, coherence, evidence.",
                evidence: "revise",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Then edit: fix surface errors — grammar, punctuation, spelling.",
                evidence: "edit",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Why: editing polished draft that's still unclear is wasted effort.",
                evidence: "why",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Revise first (content/structure), then edit (surface errors). Editing polished but unclear draft is wasted effort.",
            commonErrors: ["Editing before revising."],
          },
        },
        {
          id: "ela10-u7-revision-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LANG,
          stem: "Design a revision checklist for an argumentative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision checklist",
                statement: "Systematic review.",
              },
              {
                kind: "skill",
                name: "Argument-specific checks",
                statement: "What to verify.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning: "Claim clarity: Is position clear and arguable?",
                evidence: "claim",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence sufficiency: Are reasons supported adequately?",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument: Is opposition acknowledged and rebutted?",
                evidence: "counter",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Organization: Does structure logically build argument?",
                evidence: "organization",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example checklist: (1) Claim clarity — position clear/arguable? (2) Evidence sufficiency — reasons supported? (3) Counterargument — opposition addressed? (4) Organization — logical structure? (5) Tone — confident but respectful?",
            commonErrors: ["Only checking grammar, not content."],
          },
        },
        {
          id: "ela10-u7-revision-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: LANG,
          parts: [
            { label: "a", prompt: "What's a 'revision checklist'?", marks: 2 },
            { label: "b", prompt: "Why is it useful?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revision checklist",
                statement: "Systematic review tool.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "List of criteria to check during revision — clarity, coherence, evidence, etc.",
                evidence: "checklist",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Ensures systematic review — prevents missing issues.",
                evidence: "useful",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Criteria list for systematic review. (b) Prevents missing issues.",
            commonErrors: ["Thinking checklist = rigid."],
          },
        },
      ],
    },
    {
      id: "ela10-u7-integrated",
      title: "Integrated Language Skills Practice",
      skill:
        "Apply sentence structure, punctuation, word choice, and revision skills in comprehensive language practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated language skills",
            body: "Effective writing requires: **sentence structure** (varied for rhythm), **punctuation** (guides meaning), **word choice** (precise + appropriate register), **revision** (content + surface). These work together: structure creates rhythm, punctuation guides, word choice conveys meaning, revision ensures quality. Practice applying all simultaneously.",
          },
          {
            heading: "Exam application",
            body: "Exam questions often require: 'Revise this sentence for clarity' or 'Identify punctuation errors' or 'Improve word choice.' Requires applying multiple skills: recognize issues, apply corrections, explain reasoning. Practice combining rather than analyzing separately.",
          },
        ],
        keyFormulas: [
          {
            name: "Four skills",
            statement: "Structure + punctuation + word choice + revision.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine language skills." },
        ],
        workedExample: {
          problem:
            "How would you revise 'The power returned and we lingered on the porch and talked about everything' for clarity?",
          solution:
            "'The power returned; we lingered on the porch, talking about everything.' — semicolon for clause separation, participle for flow.",
        },
      },
      questions: [
        {
          id: "ela10-u7-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LANG,
          stem: "What four skills make effective writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only grammar" },
              {
                id: "b",
                text: "Structure + punctuation + word choice + revision",
              },
              { id: "c", text: "Only spelling" },
              { id: "d", text: "Only vocabulary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Effective writing",
                statement: "Four skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure + punctuation + word choice + revision = comprehensive language skills.",
                evidence: "four skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Structure + punctuation + word choice + revision.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela10-u7-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LANG,
          stem: "Revise 'The power returned and we lingered on the porch and talked about everything' for clarity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence revision",
                statement: "Improve clarity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify issue: run-on with multiple 'and' — unclear structure.",
                evidence: "issue",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Revise: 'The power returned; we lingered on the porch, talking about everything.' — semicolon + participle.",
                evidence: "revise",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explain: semicolon separates clauses, participle creates flow.",
                evidence: "explain",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The power returned; we lingered on the porch, talking about everything.' — semicolon for clause separation, participle for flow.",
            commonErrors: ["Just adding commas without restructuring."],
          },
        },
        {
          id: "ela10-u7-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LANG,
          stem: "Analyze how punctuation, word choice, and sentence structure work together in effective writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated language analysis",
                statement: "How skills combine.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Punctuation guides rhythm: semicolon creates pause, dash creates interruption.",
                evidence: "punctuation",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Word choice conveys meaning: 'darkness' vs 'blackness' — connotation matters.",
                evidence: "word choice",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sentence structure creates emphasis: short punches, long flows — variety maintains engagement.",
                evidence: "structure",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The power returned; we lingered on the porch—talking about everything, sharing stories, and feeling the darkness reveal what mattered.' Punctuation (semicolon pause, dash interruption), word choice ('darkness reveal' connotation), sentence structure (varied rhythm) work together for comprehensive effect.",
            commonErrors: ["Analyzing skills separately."],
          },
        },
        {
          id: "ela10-u7-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: LANG,
          parts: [
            {
              label: "a",
              prompt: "Why is revision different from editing?",
              marks: 2,
            },
            { label: "b", prompt: "Which comes first? Why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision vs editing",
                statement: "Content vs surface.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Revision improves content/structure; editing fixes surface errors.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Revision first — editing polished but unclear draft is wasted effort.",
                evidence: "order",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Revision = content; editing = surface. (b) Revision first — polish clarity before details.",
            commonErrors: ["Editing before revising."],
          },
        },
      ],
    },
  ],
};
