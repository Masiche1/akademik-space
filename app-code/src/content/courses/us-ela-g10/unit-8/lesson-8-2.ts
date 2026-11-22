import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const POEM: TextExtract = {
  title: "Poetry: 'The Road Not Taken' by Robert Frost",
  author: "Robert Frost",
  text: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
  note: "This is a public domain literary text included for educational analysis.",
};

const MEMOIR: TextExtract = {
  title: "Narrative Nonfiction: Memoir Excerpt",
  author: "Written for Akademik Space",
  text: "I was nine years old when my grandmother taught me to make bread. Not the kind you buy at the store — the kind that takes three days, that requires patience and attention and a willingness to fail. 'The dough knows when it's ready,' she said, 'you just have to listen.'\n\nI didn't understand then. I thought bread was just flour and water and yeast. But she showed me how the dough changed — how it rose and fell, how it needed to be folded and turned, how the temperature of the kitchen mattered. 'You're not making bread,' she said. 'You're making time.'\n\nYears later, I understand what she meant. Bread-making taught me that some things can't be rushed. That the best results come from patience, from attention, from letting things develop at their own pace. My grandmother didn't just teach me to make bread — she taught me to wait.",
};

const SATIRE: TextExtract = {
  title: "Satire: 'The Modern Convenience of Self-Checkout'",
  author: "Written for Akademik Space",
  text: "In today's fast-paced world, we deserve convenience. That's why self-checkout is revolutionary: no more waiting in line, no more human interaction, just you and the machine. The machine never judges your produce selection. The machine never makes small talk. The machine is always patient, always available, always ready to scan your items.\n\nSure, the machine sometimes fails to recognize your banana. Sure, it sometimes demands you 'unexpected item in bagging area.' Sure, it sometimes takes longer than a human cashier would have. But these are minor inconveniences compared to the freedom of self-sufficiency. You're not just buying groceries — you're building character, learning patience, developing problem-solving skills.\n\nThe future is bright: fully automated stores where you scan your own items, bag your own groceries, and pay with your own phone. No cashiers needed. No lines. Just pure, unadulterated convenience. Welcome to the age of self-checkout.",
};

export const lesson82: Lesson = {
  id: "ela10-u8-lesson-8-2",
  code: "8-2",
  title: "Poetry Analysis and Narrative Nonfiction",
  goal: "I CAN analyze poetry — identify figurative language, structure, and themes — and understand narrative nonfiction (memoir, satire).",
  standards: [
    "RL.9-10.1",
    "RL.9-10.2",
    "RL.9-10.4",
    "RL.9-10.5",
    "RL.9-10.6",
    "RL.9-10.7",
  ],
  vocabulary: [
    {
      term: "Meter",
      definition: "Rhythmic pattern of stressed/unstressed syllables.",
    },
    { term: "Rhyme scheme", definition: "Pattern of end rhymes." },
    {
      term: "Figurative language",
      definition: "Language beyond literal meaning.",
    },
    { term: "Memoir", definition: "Personal narrative of real experiences." },
    { term: "Satire", definition: "Using humor/irony to criticize." },
    { term: "Tone", definition: "Attitude in poetry/narrative." },
  ],
  concepts: [
    {
      id: "ela10-u8-poem",
      title: "Poetry analysis: form, language, and theme",
      skill:
        "Analyze poetry's form, figurative language, and thematic development.",
      lesson: {
        sections: [
          {
            heading: "Poetic form and structure",
            body: "Frost's 'The Road Not Taken' uses iambic tetrameter (four feet per line), ABAB rhyme scheme, and four stanzas. Form creates rhythm and structure — each stanza develops the metaphor of diverging roads. The poem's famous ending ('I took the one less traveled by') is often misread — Frost later said it's about how we rationalize choices, not about individualism.",
          },
          {
            heading: "Figurative language and theme",
            body: "Poem uses metaphor (roads = life choices), personification ('roads diverged'), symbolism (yellow wood = autumn/life stage). Theme: choices and consequences — 'way leads on to way' means choices can't be undone. Tone: nostalgic, reflective, slightly self-deceptive ('with a sigh'). Analyzing form + language + theme reveals layered meaning.",
          },
        ],
        keyFormulas: [
          { name: "Form = structure", statement: "Meter, rhyme, stanzas." },
          { name: "Figurative = depth", statement: "Metaphor, symbolism." },
          { name: "Theme = meaning", statement: "What poem explores." },
        ],
        workedExample: {
          problem: "What theme does 'The Road Not Taken' explore?",
          solution:
            "Choices and consequences — 'way leads on to way' means choices can't be undone; we rationalize decisions.",
        },
      },
      questions: [
        {
          id: "ela10-u8-poem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POEM,
          stem: "What theme does 'The Road Not Taken' primarily explore?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nature" },
              { id: "b", text: "Choices and consequences" },
              { id: "c", text: "Travel" },
              { id: "d", text: "Autumn" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "Central idea." },
            ],
            steps: [
              {
                reasoning:
                  "Poem explores choices/consequences — 'way leads on to way' = irreversible choices.",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Choices and consequences.",
            commonErrors: ["Reading literally as travel poem."],
          },
        },
        {
          id: "ela10-u8-poem-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POEM,
          stem: "How does the poem's form (meter, rhyme, stanzas) contribute to its meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetic form analysis",
                statement: "How structure serves meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Iambic tetrameter — four beats per line creates steady rhythm.",
                evidence: "meter",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "ABAB rhyme scheme — predictable pattern mirrors life's patterns.",
                evidence: "rhyme",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Four stanzas — structured progression through decision/reflection.",
                evidence: "stanzas",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Meter creates steady rhythm, rhyme scheme mirrors life's patterns, four stanzas structure decision→reflection progression.",
            commonErrors: ["Not connecting form to meaning."],
          },
        },
        {
          id: "ela10-u8-poem-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POEM,
          stem: "Analyze how the poem's ending might be self-deceptive rather than triumphant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complex interpretation",
                statement: "Layered meaning.",
              },
              {
                kind: "skill",
                name: "Tone analysis",
                statement: "How attitude shifts.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning: "'With a sigh' — sigh suggests regret, not triumph.",
                evidence: "sigh",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'I shall be telling this' — future self rationalizing past choice.",
                evidence: "telling",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Less traveled by' — actually both roads 'worn... about the same' — difference is imagined.",
                evidence: "less traveled",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Ending may be self-deceptive: 'with a sigh' suggests regret, 'I shall be telling this' = future rationalization, 'less traveled by' contradicts earlier 'worn about the same.' Poem explores how we construct narratives about choices.",
            commonErrors: ["Reading ending as triumphant individualism."],
          },
        },
        {
          id: "ela10-u8-poem-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: POEM,
          parts: [
            { label: "a", prompt: "What's 'iambic tetrameter'?", marks: 2 },
            { label: "b", prompt: "What's the rhyme scheme?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iambic tetrameter",
                statement: "Four iambic feet.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Four pairs of unstressed-stressed syllables per line.",
                evidence: "tetrameter",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "ABAB — lines 1&3 rhyme, 2&4 rhyme.",
                evidence: "rhyme",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Four pairs of unstressed-stressed syllables. (b) ABAB.",
            commonErrors: ["Confusing with pentameter."],
          },
        },
      ],
    },
    {
      id: "ela10-u8-memoir",
      title: "Memoir and Personal Narrative",
      skill:
        "Analyze memoir's blend of personal experience and universal themes.",
      lesson: {
        sections: [
          {
            heading: "Memoir characteristics",
            body: "Memoir = personal narrative of real experiences with reflection. The bread-making memoir: specific details (grandmother, three-day process, 'dough knows when it's ready') + universal theme (patience, waiting, 'making time'). Memoir differs from autobiography — focuses on specific episodes/lessons rather than entire life. Effective memoir connects personal to universal.",
          },
          {
            heading: "Memoir techniques",
            body: "Techniques: **specific detail** ('three days,' 'folded and turned'), **dialogue** ('You're not making bread... you're making time'), **reflection** ('Years later, I understand'), **universal theme** (patience can't be rushed). Memoir shows how specific experiences reveal broader truths — bread-making teaches patience.",
          },
        ],
        keyFormulas: [
          {
            name: "Memoir = specific + universal",
            statement: "Personal + broader meaning.",
          },
          {
            name: "Detail + dialogue + reflection",
            statement: "Techniques for authenticity.",
          },
          { name: "Episode not life", statement: "Focused narrative." },
        ],
        workedExample: {
          problem: "How does the memoir connect personal to universal?",
          solution:
            "Specific (bread-making with grandmother) → universal (patience, 'making time') — personal experience reveals broader truth.",
        },
      },
      questions: [
        {
          id: "ela10-u8-memoir-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEMOIR,
          stem: "What's the difference between memoir and autobiography?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              {
                id: "b",
                text: "Memoir = specific episodes; autobiography = entire life",
              },
              { id: "c", text: "Memoir is fictional" },
              { id: "d", text: "Autobiography is shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Memoir vs autobiography",
                statement: "Specific vs comprehensive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Memoir = specific episodes/lessons; autobiography = entire life story.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Memoir = specific episodes; autobiography = entire life.",
            commonErrors: ["Confusing the genres."],
          },
        },
        {
          id: "ela10-u8-memoir-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEMOIR,
          stem: "How does the memoir connect personal experience to universal theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Memoir analysis",
                statement: "Personal → universal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific: bread-making with grandmother — three days, 'dough knows when it's ready.'",
                evidence: "specific",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Universal: patience, waiting, 'making time' — broader lesson.",
                evidence: "universal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connection: 'Years later, I understand' — reflection bridges personal to universal.",
                evidence: "connection",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Specific (bread-making) → universal (patience/'making time') — reflection bridges personal experience to broader truth.",
            commonErrors: ["Not seeing universal connection."],
          },
        },
        {
          id: "ela10-u8-memoir-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEMOIR,
          stem: "Analyze how memoir techniques create authenticity and emotional resonance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Memoir techniques",
                statement: "Authenticity creation.",
              },
              {
                kind: "skill",
                name: "Emotional resonance",
                statement: "How reader connects.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Specific detail: 'three days,' 'folded and turned,' 'temperature of kitchen' — authentic specificity.",
                evidence: "detail",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Dialogue: 'You're not making bread... you're making time' — grandmother's voice authentic.",
                evidence: "dialogue",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: 'Years later, I understand' — temporal distance shows growth.",
                evidence: "reflection",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Memoir creates authenticity: specific details ('three days,' 'folded'), authentic dialogue ('you're making time'), reflective distance ('Years later, I understand'). These techniques make personal experience feel real and emotionally resonant.",
            commonErrors: ["Thinking memoir is just storytelling."],
          },
        },
        {
          id: "ela10-u8-memoir-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEMOIR,
          parts: [
            { label: "a", prompt: "What's a 'memoir'?", marks: 2 },
            {
              label: "b",
              prompt: "Name two memoir techniques from the excerpt.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Memoir",
                statement: "Personal narrative.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Personal narrative of real experiences with reflection — specific episodes.",
                evidence: "memoir",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Specific detail ('three days'), dialogue ('you're making time'), reflection ('Years later').",
                evidence: "techniques",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Personal narrative of real experiences. (b) Specific detail, dialogue, reflection.",
            commonErrors: ["Confusing with fiction."],
          },
        },
      ],
    },
    {
      id: "ela10-u8-satire",
      title: "Satire and Social Criticism",
      skill: "Analyze satire's use of humor and irony to criticize society.",
      lesson: {
        sections: [
          {
            heading: "What is satire?",
            body: "Satire = using humor, irony, exaggeration to criticize society/institutions. The self-checkout satire praises 'convenience' while exposing absurdity: 'The machine never judges your produce selection' (actually it does), 'building character, learning patience' (actually frustrating). Satire says opposite of what's meant — reader must recognize irony.",
          },
          {
            heading: "Satirical techniques",
            body: "Techniques: **irony** (saying opposite — 'revolutionary' convenience that's actually frustrating), **exaggeration** ('pure, unadulterated convenience'), **mock-serious tone** (treating absurdity seriously), **direct address** ('Welcome to the age of self-checkout'). Satire criticizes by making reader laugh at absurdity — 'Welcome' is ironic invitation to recognize problem.",
          },
        ],
        keyFormulas: [
          {
            name: "Satire = criticism through humor",
            statement: "Ironic exposure.",
          },
          { name: "Says opposite", statement: "Irony reveals truth." },
          { name: "Reader must decode", statement: "Recognize what's meant." },
        ],
        workedExample: {
          problem: "How does the satire criticize self-checkout?",
          solution:
            "Praises 'convenience' while listing frustrations (machine fails, 'unexpected item') — irony exposes absurdity of automation replacing human interaction.",
        },
      },
      questions: [
        {
          id: "ela10-u8-satire-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SATIRE,
          stem: "What is satire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Serious criticism" },
              { id: "b", text: "Using humor/irony to criticize" },
              { id: "c", text: "Pure comedy" },
              { id: "d", text: "Factual reporting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Satire",
                statement: "Humor + criticism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Satire = using humor/irony to criticize society/institutions.",
                evidence: "satire",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Using humor/irony to criticize.",
            commonErrors: ["Confusing with comedy."],
          },
        },
        {
          id: "ela10-u8-satire-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SATIRE,
          stem: "Identify two satirical techniques in the self-checkout text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Satirical techniques",
                statement: "How satire works.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Irony: 'revolutionary' convenience that's actually frustrating — says opposite.",
                evidence: "irony",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Exaggeration: 'pure, unadulterated convenience' — overstates to absurdity.",
                evidence: "exaggeration",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mock-serious: 'building character, learning patience' — treats frustration as benefit.",
                evidence: "mock-serious",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Irony ('revolutionary' = actually frustrating), exaggeration ('pure, unadulterated'), mock-serious ('building character').",
            commonErrors: ["Taking satire literally."],
          },
        },
        {
          id: "ela10-u8-satire-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SATIRE,
          stem: "Analyze what the satire reveals about automation and human interaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Satirical analysis",
                statement: "What it criticizes.",
              },
              {
                kind: "skill",
                name: "Social commentary",
                statement: "Broader implications.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Satire targets: automation replacing human interaction ('no more human interaction').",
                evidence: "automation",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Irony exposes: 'convenience' that's actually frustrating — machine fails, demands 'unexpected item.'",
                evidence: "irony",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Social critique: 'Welcome to the age of self-checkout' — ironic celebration of dehumanization.",
                evidence: "critique",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Satire criticizes automation replacing human interaction: 'convenience' is ironic (machine fails, frustrating), 'no human interaction' exposes dehumanization, 'Welcome' is ironic celebration. Reveals costs of efficiency over connection.",
            commonErrors: ["Missing satirical target."],
          },
        },
        {
          id: "ela10-u8-satire-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SATIRE,
          parts: [
            { label: "a", prompt: "What's 'irony' in satire?", marks: 2 },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Irony",
                statement: "Saying opposite.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Saying opposite of what's meant — praise that's actually criticism.",
                evidence: "irony",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'revolutionary' convenience that's actually frustrating.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Saying opposite of what's meant. (b) 'Revolutionary' convenience that's actually frustrating.",
            commonErrors: ["Confusing with sarcasm."],
          },
        },
      ],
    },
    {
      id: "ela10-u8-integrated-r2",
      title: "Integrated Literary Analysis Practice",
      skill:
        "Apply poetry, memoir, and satire analysis in comprehensive literary study.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive literary analysis",
            body: "Analyzing literature requires: **form** (poetry structure, narrative arc), **language** (figurative devices, tone), **theme** (central ideas), **technique** (satire, memoir methods). Frost's poem: form (iambic tetrameter), language (metaphor), theme (choices), technique (ironic ending). Memoir: form (narrative), language (dialogue, detail), theme (patience), technique (reflection). Satire: form (mock-serious), language (irony), theme (automation critique), technique (exaggeration).",
          },
          {
            heading: "Exam application",
            body: "Exam questions often require: 'Analyze how the poet uses form and language to develop theme' or 'Explain how satire criticizes society.' Requires applying multiple skills: identify devices, analyze function, connect to purpose.",
          },
        ],
        keyFormulas: [
          {
            name: "Four skills",
            statement: "Form + language + theme + technique.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine analysis types." },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze Frost's poem?",
          solution:
            "Form (iambic tetrameter, ABAB) → language (metaphor, personification) → theme (choices/consequences) → technique (ironic self-deception in ending).",
        },
      },
      questions: [
        {
          id: "ela10-u8-integrated-q1-r2",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POEM,
          stem: "What four skills are needed for comprehensive literary analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only theme" },
              { id: "b", text: "Form + language + theme + technique" },
              { id: "c", text: "Only plot" },
              { id: "d", text: "Only character" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive analysis",
                statement: "Four skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Form + language + theme + technique = comprehensive literary analysis.",
                evidence: "four skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Form + language + theme + technique.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela10-u8-integrated-q2-r2",
          difficulty: "core",
          totalMarks: 3,
          extract: POEM,
          stem: "Apply two analysis skills to Frost's poem.",
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
                  "Form: iambic tetrameter, ABAB rhyme — steady rhythm.",
                evidence: "form",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme: choices/consequences — 'way leads on to way' = irreversible.",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Technique: ironic ending — 'with a sigh' suggests regret, not triumph.",
                evidence: "technique",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Form (iambic tetrameter), theme (choices/consequences), technique (ironic ending).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela10-u8-integrated-q3-r2",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEMOIR,
          stem: "Write an analysis paragraph on how the memoir uses personal experience to explore universal themes.",
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
                name: "Comprehensive interpretation",
                statement: "How choices serve meaning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Specific detail: 'three days,' 'folded and turned' — authentic experience.",
                evidence: "detail",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Dialogue: 'you're making time' — grandmother's wisdom conveyed authentically.",
                evidence: "dialogue",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: 'Years later, I understand' — bridges personal to universal (patience).",
                evidence: "reflection",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              'Example: \'The memoir uses specific detail (three-day bread process, folding technique) and authentic dialogue ("you\'re making time") to ground personal experience. Reflection ("Years later, I understand") bridges specific memory to universal theme: patience and the value of waiting. Techniques create authenticity while revealing broader truth.\'',
            commonErrors: ["Analyzing techniques separately."],
          },
        },
        {
          id: "ela10-u8-integrated-q4-r2",
          difficulty: "core",
          totalMarks: 4,
          extract: SATIRE,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-skill?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example from satire.", marks: 2 },
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
                  "Each skill alone is partial; together reveal how choices serve purpose.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: irony + exaggeration + theme shows satire criticizing automation — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal purpose. (b) Irony+exaggeration+theme shows satire criticizing automation.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
