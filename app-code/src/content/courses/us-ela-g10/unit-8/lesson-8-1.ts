import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const SHAKESPEARE: TextExtract = {
  title: "Literary Text: Soliloquy from Hamlet (Act 3, Scene 1)",
  author: "William Shakespeare",
  text: "To be, or not to be, that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles\nAnd by opposing end them. To die, to sleep—\nNo more; and by a sleep to say we end\nThe heart-ache and the thousand natural shocks\nThat flesh is heir to. 'Tis a consummation\nDevoutly to be wish'd. To die, to sleep;\nTo sleep, perchance to dream. Ay, there's the rub,\nFor in that sleep of death what dreams may come,\nWhen we have shuffled off this mortal coil,\nMust give us pause. There's the respect\nThat makes calamity of so long life.",
  note: "This is a public domain literary text included for educational analysis.",
};

const DRAMA: TextExtract = {
  title:
    "Literary Text: Excerpt from A Midsummer Night's Dream (Act 1, Scene 1)",
  author: "William Shakespeare",
  text: "I know a bank where the wild thyme blows,\nWhere oxlips and the nodding violet grows,\nQuite over-canopied with luscious woodbine,\nWith sweet musk-roses and with eglantine:\nThere sleeps Titania sometime of the night,\nLulled in these flowers with dances and delight.\nAnd there the snake throws her enamelled skin,\nWeed wide enough to wrap a fairy in:\nAnd with the juice of this I'll streak her eyes,\nAnd make her full of hateful fantasies.",
  note: "This is a public domain literary text included for educational analysis.",
};

export const lesson81: Lesson = {
  id: "ela10-u8-lesson-8-1",
  code: "8-1",
  title: "Shakespearean Drama: Language, Structure, and Meaning",
  goal: "I CAN analyze Shakespearean drama — understand archaic language, identify dramatic techniques, and interpret complex themes.",
  standards: [
    "RL.9-10.1",
    "RL.9-10.2",
    "RL.9-10.3",
    "RL.9-10.4",
    "RL.9-10.5",
    "RL.9-10.6",
  ],
  vocabulary: [
    {
      term: "Soliloquy",
      definition: "Character speaking alone, revealing inner thoughts.",
    },
    { term: "Blank verse", definition: "Unrhymed iambic pentameter." },
    {
      term: "Iambic pentameter",
      definition: "Five pairs of unstressed-stressed syllables.",
    },
    { term: "Archaic language", definition: "Old-fashioned words/phrases." },
    {
      term: "Dramatic irony",
      definition: "Audience knows what characters don't.",
    },
    {
      term: "Tragic flaw",
      definition: "Character weakness leading to downfall.",
    },
  ],
  concepts: [
    {
      id: "ela10-u8-soliloquy",
      title: "Soliloquy and inner conflict",
      skill:
        "Analyze soliloquies to understand character psychology and thematic development.",
      lesson: {
        sections: [
          {
            heading: "What is a soliloquy?",
            body: "Soliloquy = character speaking alone, revealing inner thoughts to audience. Hamlet's 'To be or not to be' is famous soliloquy — reveals existential crisis about life/death. Audience gets privileged access to character's mind — dramatic technique creating intimacy and complexity. Soliloquies often contain themes, conflicts, decisions.",
          },
          {
            heading: "Analyzing soliloquy structure",
            body: "Hamlet's soliloquy structure: question ('To be or not to be') → options (suffer vs oppose) → metaphor (sleep/death) → complication ('Ay, there's the rub') → hesitation ('Must give us pause'). Shakespeare uses rhetorical questions, metaphors, antithesis ('To die, to sleep') to explore philosophical questions. Language complexity mirrors thought complexity.",
          },
        ],
        keyFormulas: [
          {
            name: "Soliloquy = inner thoughts",
            statement: "Privileged access to mind.",
          },
          {
            name: "Structure reveals psychology",
            statement: "How character thinks.",
          },
          {
            name: "Language mirrors thought",
            statement: "Complexity = complexity.",
          },
        ],
        workedExample: {
          problem: "What does Hamlet's soliloquy reveal about his character?",
          solution:
            "Existential crisis — contemplating suicide/death as escape from suffering. Philosophical, hesitant, self-aware ('Ay, there's the rub').",
        },
      },
      questions: [
        {
          id: "ela10-u8-soliloquy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SHAKESPEARE,
          stem: "What is a soliloquy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Character talking to another" },
              {
                id: "b",
                text: "Character speaking alone, revealing inner thoughts",
              },
              { id: "c", text: "Narrator describing events" },
              { id: "d", text: "Audience addressing character" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy",
                statement: "Inner thoughts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Soliloquy = character alone, revealing inner thoughts to audience.",
                evidence: "soliloquy",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Character speaking alone, revealing inner thoughts.",
            commonErrors: ["Confusing with monologue."],
          },
        },
        {
          id: "ela10-u8-soliloquy-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SHAKESPEARE,
          stem: "How does Hamlet's soliloquy structure reveal his psychology?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Soliloquy analysis",
                statement: "Structure = psychology.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Question: 'To be or not to be' — existential dilemma posed.",
                evidence: "question",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Options: suffer vs oppose — weighing alternatives.",
                evidence: "options",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Complication: 'Ay, there's the rub' — hesitation, uncertainty.",
                evidence: "complication",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Question → options → complication → hesitation — reveals philosophical, self-aware, uncertain psychology.",
            commonErrors: ["Not connecting structure to psychology."],
          },
        },
        {
          id: "ela10-u8-soliloquy-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SHAKESPEARE,
          stem: "Analyze how Shakespeare uses language complexity to mirror Hamlet's thought complexity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Language-thought connection",
                statement: "Complexity mirrors complexity.",
              },
              {
                kind: "skill",
                name: "Rhetorical analysis",
                statement: "How devices work.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Archaic language: 'tis,' 'perchance,' 'mortal coil' — period-appropriate but complex.",
                evidence: "archaic",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rhetorical devices: antithesis ('To die, to sleep'), metaphor (sleep/death), rhetorical questions.",
                evidence: "devices",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Complexity mirrors philosophical depth — Hamlet's thinking is intricate, language reflects it.",
                evidence: "complexity",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Shakespeare uses archaic language ('tis,' 'perchance,' 'mortal coil') and rhetorical devices (antithesis, metaphor, questions) to mirror Hamlet's philosophical complexity. Language complexity = thought complexity.",
            commonErrors: ["Treating language as barrier instead of meaning."],
          },
        },
        {
          id: "ela10-u8-soliloquy-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SHAKESPEARE,
          parts: [
            {
              label: "a",
              prompt: "What's 'antithesis' in rhetoric?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example from Hamlet's soliloquy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antithesis",
                statement: "Contrasting ideas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Contrasting ideas in parallel structure — 'To die, to sleep.'",
                evidence: "antithesis",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'To die, to sleep' — death as sleep, contrasting concepts.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Contrasting ideas in parallel. (b) 'To die, to sleep.'",
            commonErrors: ["Confusing with metaphor."],
          },
        },
      ],
    },
    {
      id: "ela10-u8-blank",
      title: "Blank Verse and Poetic Dramatic Form",
      skill:
        "Recognize and analyze blank verse and its dramatic function in Shakespeare.",
      lesson: {
        sections: [
          {
            heading: "Blank verse basics",
            body: "Blank verse = unrhymed iambic pentameter — five pairs of unstressed-stressed syllables per line. Hamlet's soliloquy uses it: 'to BE or NOT to BE, that IS the QUEStion.' The rhythm mimics natural speech while adding poetic structure. Shakespeare uses it for serious/high-status characters and elevated moments; prose for commoners and comic relief.",
          },
          {
            heading: "Dramatic function",
            body: "Blank verse serves multiple functions: **elevation** (makes language grand), **rhythm** (creates memorable cadence), **characterization** (noble characters speak verse, commoners prose), **emphasis** (key moments in verse stand out). Analyzing verse reveals Shakespeare's craft — how form serves meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Blank verse = unrhymed iambic pentameter",
            statement: "Five stressed-unstressed pairs.",
          },
          {
            name: "Verse = elevation",
            statement: "Noble characters, serious moments.",
          },
          { name: "Form serves meaning", statement: "How structure matters." },
        ],
        workedExample: {
          problem: "How does blank verse function in Hamlet's soliloquy?",
          solution:
            "Elevates language (philosophical gravity), creates rhythm (memorable cadence), signals Hamlet's nobility/status.",
        },
      },
      questions: [
        {
          id: "ela10-u8-blank-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SHAKESPEARE,
          stem: "What is blank verse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhyme scheme" },
              { id: "b", text: "Unrhymed iambic pentameter" },
              { id: "c", text: "Free verse" },
              { id: "d", text: "Prose" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blank verse",
                statement: "Unrhymed iambic pentameter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Blank verse = unrhymed iambic pentameter — five stressed-unstressed pairs.",
                evidence: "blank verse",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Unrhymed iambic pentameter.",
            commonErrors: ["Confusing with free verse."],
          },
        },
        {
          id: "ela10-u8-blank-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SHAKESPEARE,
          stem: "How does blank verse function dramatically in Hamlet's soliloquy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dramatic function",
                statement: "How form serves meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Elevates language — philosophical gravity matches Hamlet's status.",
                evidence: "elevation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Creates rhythm — memorable cadence for famous speech.",
                evidence: "rhythm",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Characterizes — verse signals nobility vs prose for commoners.",
                evidence: "characterization",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Elevates language (philosophical gravity), creates rhythm (memorable cadence), characterizes (verse = noble vs prose = commoner).",
            commonErrors: ["Thinking verse is just decoration."],
          },
        },
        {
          id: "ela10-u8-blank-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SHAKESPEARE,
          stem: "Analyze how Shakespeare's choice of blank verse for Hamlet's soliloquy contributes to its power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form analysis",
                statement: "How structure matters.",
              },
              {
                kind: "skill",
                name: "Dramatic effect",
                statement: "Why verse works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Blank verse mimics natural speech rhythm — accessible despite complexity.",
                evidence: "natural",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Poetic structure elevates language — gives philosophical weight to Hamlet's crisis.",
                evidence: "elevates",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Memorable cadence — 'To be or not to be' becomes iconic through rhythm.",
                evidence: "memorable",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Blank verse contributes power: mimics natural speech (accessible), elevates language (philosophical weight), creates memorable cadence ('To be or not to be' iconic). Form serves meaning.",
            commonErrors: ["Separating form from content."],
          },
        },
        {
          id: "ela10-u8-blank-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SHAKESPEARE,
          parts: [
            { label: "a", prompt: "What's 'iambic pentameter'?", marks: 2 },
            { label: "b", prompt: "Why 'pentameter'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iambic pentameter",
                statement: "Five iambic feet.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Five pairs of unstressed-stressed syllables per line.",
                evidence: "iambic",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "'Penta' = five — five feet per line.",
                evidence: "penta",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Five pairs of unstressed-stressed syllables. (b) 'Penta' = five feet.",
            commonErrors: ["Confusing with other meters."],
          },
        },
      ],
    },
    {
      id: "ela10-u8-imagery",
      title: "Imagery and Symbolism in Drama",
      skill:
        "Analyze imagery and symbolism in Shakespearean drama to understand deeper meanings.",
      lesson: {
        sections: [
          {
            heading: "Imagery in drama",
            body: "Shakespeare uses vivid imagery: 'slings and arrows of outrageous fortune' (battle imagery for suffering), 'sea of troubles' (water metaphor for overwhelm), 'mortal coil' (coil = confusion/turbulence). Imagery makes abstract concepts concrete — suffering becomes physical assault, troubles become ocean. Audience experiences Hamlet's crisis viscerally.",
          },
          {
            heading: "Symbolism",
            body: "Symbols carry deeper meaning: 'sleep' = death ('To die, to sleep'), 'dreams' = uncertainty about afterlife ('what dreams may come'), 'mortal coil' = earthly existence's confusion. Symbols operate on multiple levels — literal and metaphorical. Analyzing symbols reveals thematic depth: Hamlet's soliloquy explores mortality, uncertainty, meaning of existence.",
          },
        ],
        keyFormulas: [
          { name: "Imagery = concrete", statement: "Abstract made physical." },
          {
            name: "Symbolism = deeper",
            statement: "Multiple levels of meaning.",
          },
          {
            name: "Both serve theme",
            statement: "How devices convey meaning.",
          },
        ],
        workedExample: {
          problem: "How does 'sea of troubles' function as imagery?",
          solution:
            "Water metaphor — troubles as overwhelming ocean. Makes abstract suffering concrete and vast.",
        },
      },
      questions: [
        {
          id: "ela10-u8-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SHAKESPEARE,
          stem: "What's imagery in literature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only visual description" },
              {
                id: "b",
                text: "Vivid sensory language making abstract concrete",
              },
              { id: "c", text: "Metaphor only" },
              { id: "d", text: "Symbolism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Imagery",
                statement: "Sensory language.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Imagery = vivid sensory language making abstract concepts concrete.",
                evidence: "imagery",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Vivid sensory language making abstract concrete.",
            commonErrors: ["Confusing with symbolism."],
          },
        },
        {
          id: "ela10-u8-imagery-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SHAKESPEARE,
          stem: "How does 'sea of troubles' function as imagery?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Imagery analysis",
                statement: "How metaphor works.",
              },
            ],
            steps: [
              {
                reasoning: "Water metaphor — troubles as overwhelming ocean.",
                evidence: "water",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Makes abstract suffering concrete — audience experiences overwhelm.",
                evidence: "concrete",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Sea' suggests vastness — troubles are endless, inescapable.",
                evidence: "vast",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Water metaphor — troubles as overwhelming ocean. Makes abstract suffering concrete, vast, inescapable.",
            commonErrors: ["Not explaining imagery function."],
          },
        },
        {
          id: "ela10-u8-imagery-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SHAKESPEARE,
          stem: "Analyze how symbolism operates on multiple levels in Hamlet's soliloquy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Symbolism analysis",
                statement: "Multiple levels.",
              },
              {
                kind: "skill",
                name: "Thematic depth",
                statement: "How symbols convey meaning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "'Sleep' = death literally, but also escape from suffering — dual meaning.",
                evidence: "sleep",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Dreams' = uncertainty about afterlife — 'what dreams may come' = fear of unknown.",
                evidence: "dreams",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Mortal coil' = earthly existence's confusion — 'coil' = turbulence, unrest.",
                evidence: "coil",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Symbolism operates on multiple levels: 'sleep' = death + escape; 'dreams' = afterlife uncertainty; 'mortal coil' = earthly confusion. Each symbol conveys thematic depth about mortality, uncertainty, existence.",
            commonErrors: ["Identifying symbols without analyzing levels."],
          },
        },
        {
          id: "ela10-u8-imagery-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SHAKESPEARE,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between imagery and symbolism?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example of each from the soliloquy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Imagery vs symbolism",
                statement: "Sensory vs deeper meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Imagery = sensory language; symbolism = deeper metaphorical meaning.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Imagery: 'sea of troubles' (water metaphor). Symbolism: 'sleep' = death/escape.",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Imagery = sensory; symbolism = deeper meaning. (b) Imagery: 'sea of troubles.' Symbolism: 'sleep' = death.",
            commonErrors: ["Confusing the two."],
          },
        },
      ],
    },
    {
      id: "ela10-u8-theme",
      title: "Theme and Dramatic Irony",
      skill: "Identify themes and dramatic irony in Shakespearean drama.",
      lesson: {
        sections: [
          {
            heading: "Themes in Hamlet",
            body: "Major themes: **mortality** (life/death contemplation), **uncertainty** (what comes after death?), **appearance vs reality** (is ghost real? is Ophelia mad?), **action vs inaction** (Hamlet's hesitation). Soliloquy explicitly explores mortality and uncertainty — 'To die, to sleep... what dreams may come.' Themes emerge through character struggles and philosophical questions.",
          },
          {
            heading: "Dramatic irony",
            body: "Dramatic irony = audience knows what characters don't. In Hamlet, audience knows Claudius killed Old Hamlet (ghost's revelation) but characters don't — creating tension as Hamlet seeks proof. Soliloquy creates different irony: audience hears Hamlet's thoughts, other characters don't — privileged access creates dramatic tension. Understanding irony reveals Shakespeare's craft.",
          },
        ],
        keyFormulas: [
          { name: "Theme = central idea", statement: "What play explores." },
          {
            name: "Dramatic irony = audience advantage",
            statement: "Knows what characters don't.",
          },
          {
            name: "Both create depth",
            statement: "How devices enrich meaning.",
          },
        ],
        workedExample: {
          problem: "What theme does Hamlet's soliloquy primarily explore?",
          solution:
            "Mortality and uncertainty — contemplating death, afterlife, meaning of existence.",
        },
      },
      questions: [
        {
          id: "ela10-u8-theme-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SHAKESPEARE,
          stem: "What's the primary theme of Hamlet's soliloquy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Love" },
              { id: "b", text: "Mortality and uncertainty" },
              { id: "c", text: "Revenge" },
              { id: "d", text: "Power" },
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
                  "Soliloquy explores mortality/uncertainty — 'To die, to sleep... what dreams may come.'",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Mortality and uncertainty.",
            commonErrors: ["Missing thematic focus."],
          },
        },
        {
          id: "ela10-u8-theme-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SHAKESPEARE,
          stem: "What is dramatic irony in Hamlet?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement: "Audience advantage.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Audience knows Claudius killed Old Hamlet (ghost) — characters don't.",
                evidence: "audience knows",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Creates tension — Hamlet seeks proof while audience knows truth.",
                evidence: "tension",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Soliloquy adds different irony — audience hears thoughts, characters don't.",
                evidence: "soliloquy irony",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Audience knows Claudius killed Old Hamlet — characters don't. Creates tension + soliloquy gives privileged access to Hamlet's thoughts.",
            commonErrors: ["Confusing with situational irony."],
          },
        },
        {
          id: "ela10-u8-theme-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SHAKESPEARE,
          stem: "Analyze how theme and dramatic irony work together in Hamlet's soliloquy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme-irony integration",
                statement: "How they work together.",
              },
              {
                kind: "skill",
                name: "Dramatic effect",
                statement: "Combined impact.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Theme: mortality/uncertainty explored through soliloquy content.",
                evidence: "theme",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Dramatic irony: audience hears Hamlet's private thoughts — privileged access.",
                evidence: "irony",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Combined: theme deepens through irony — audience intimately experiences Hamlet's crisis.",
                evidence: "combined",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Theme (mortality/uncertainty) explored through soliloquy; dramatic irony (audience hears private thoughts) deepens experience — audience intimately encounters Hamlet's crisis, making theme more powerful.",
            commonErrors: ["Analyzing theme and irony separately."],
          },
        },
        {
          id: "ela10-u8-theme-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SHAKESPEARE,
          parts: [
            { label: "a", prompt: "What's dramatic irony?", marks: 2 },
            { label: "b", prompt: "Give an example from Hamlet.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement: "Audience advantage.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Audience knows what characters don't — creates tension.",
                evidence: "irony",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: audience knows Claudius killed Old Hamlet; characters don't.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Audience knows what characters don't. (b) Audience knows Claudius killed Old Hamlet.",
            commonErrors: ["Confusing with other irony types."],
          },
        },
      ],
    },
    {
      id: "ela10-u8-integrated",
      title: "Integrated Shakespeare Analysis Practice",
      skill:
        "Apply soliloquy, blank verse, imagery, symbolism, theme, and irony analysis in comprehensive drama study.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive drama analysis",
            body: "Analyzing Shakespeare requires: **form** (blank verse, soliloquy), **language** (archaic terms, rhetorical devices), **imagery/symbolism** (concrete metaphors, deeper meanings), **theme** (central ideas), **irony** (dramatic tension). Hamlet's soliloquy demonstrates all: blank verse form, soliloquy structure, sea/sleep imagery, mortality theme, audience-privileged irony.",
          },
          {
            heading: "Exam application",
            body: "Exam questions often require: 'Analyze how Shakespeare uses language to develop theme' or 'Explain the dramatic significance of the soliloquy.' Requires applying multiple skills: identify devices, analyze function, connect to theme.",
          },
        ],
        keyFormulas: [
          {
            name: "Six skills",
            statement: "Form + language + imagery + symbolism + theme + irony.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine analysis types." },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze Hamlet's soliloquy?",
          solution:
            "Identify form (blank verse soliloquy) → analyze language (archaic, rhetorical) → imagery (sea of troubles) → theme (mortality) → irony (privileged access).",
        },
      },
      questions: [
        {
          id: "ela10-u8-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SHAKESPEARE,
          stem: "What six skills are needed for comprehensive Shakespeare analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only theme" },
              {
                id: "b",
                text: "Form + language + imagery + symbolism + theme + irony",
              },
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
                statement: "Six skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Form + language + imagery + symbolism + theme + irony = comprehensive.",
                evidence: "six skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Form + language + imagery + symbolism + theme + irony.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela10-u8-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SHAKESPEARE,
          stem: "Apply two analysis skills to Hamlet's soliloquy.",
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
                  "Form: blank verse soliloquy — unrhymed iambic pentameter, inner thoughts.",
                evidence: "form",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme: mortality/uncertainty — 'To die, to sleep... what dreams may come.'",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Imagery: 'sea of troubles' — water metaphor for suffering.",
                evidence: "imagery",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Form (blank verse soliloquy), theme (mortality/uncertainty), imagery ('sea of troubles').",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela10-u8-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SHAKESPEARE,
          stem: "Write an analysis paragraph on how Shakespeare uses language and form in Hamlet's soliloquy.",
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
                  "Form: blank verse soliloquy — elevates language, creates rhythm.",
                evidence: "form",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Language: archaic terms ('tis,' 'perchance,' 'mortal coil') + rhetorical devices (antithesis, metaphor).",
                evidence: "language",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: language complexity mirrors philosophical depth — Hamlet's crisis made visceral.",
                evidence: "effect",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Shakespeare uses blank verse soliloquy form to elevate Hamlet's philosophical crisis — the unrhymed iambic pentameter creates natural speech rhythm while adding poetic gravity. Archaic language ('tis,' 'perchance,' 'mortal coil') and rhetorical devices (antithesis 'To die, to sleep,' water imagery 'sea of troubles') mirror Hamlet's complex thinking, making abstract mortality questions visceral for audience.'",
            commonErrors: ["Analyzing form and language separately."],
          },
        },
        {
          id: "ela10-u8-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SHAKESPEARE,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-skill?",
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
                  "Each skill alone is partial; together reveal how choices serve meaning.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: form + language + theme shows how blank verse elevates mortality theme — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal how choices serve meaning. (b) Form+language+theme shows blank verse elevates mortality theme.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
