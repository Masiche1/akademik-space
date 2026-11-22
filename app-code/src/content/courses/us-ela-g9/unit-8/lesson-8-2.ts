import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const POEM: TextExtract = {
  title: "Poem: 'The Algorithm's Dream'",
  author: "Written for Akademik Space",
  text: "I dream in clicks and swipes,\nin patterns no one sees.\nI show you what you want\nbefore you know you do.\n\nYour fears are data points,\nyour hopes are metrics too.\nI learn what makes you linger\nand serve it back to you.\n\nYou think you're choosing freely,\nbut every scroll is choreographed.\nI am the stage, the script,\nthe audience and the play.\n\nWhen you sleep, I keep working.\nWhen you wake, I greet you first.\nI know your secrets better\nthan you know yourself —\nand I will never tell.\n\nBecause telling would end the game.\nBecause you are the product.\nBecause the house always wins\nwhen the house is you.",
};

const POV: TextExtract = {
  title: "Narrative Perspective Analysis",
  author: "Written for Akademik Space",
  text: "The algorithm didn't hate Marcus. It didn't love him either. It simply optimized — the way water finds its level, the way roots find water. Marcus's clicks, his pauses, his 2 a.m. scrolls — all data points in a system designed to maximize engagement. The algorithm didn't care what Marcus believed. It cared what Marcus did.\n\nBut Marcus didn't know that. He thought he was browsing. He thought he was choosing. He thought the feed was a window — when it was actually a mirror, reflecting back whatever would keep him looking.",
};

export const lesson82: Lesson = {
  id: "ela9-u8-lesson-8-2",
  code: "8-2",
  title: "Poetry, Point of View, and Author's Craft",
  goal: "I CAN analyze poetic devices, narrative perspective, and author's craft choices in literary texts.",
  standards: ["RL.9-10.4", "RL.9-10.5", "RL.9-10.6"],
  vocabulary: [
    {
      term: "Point of view",
      definition: "Narrator's perspective — first, second, third person.",
    },
    {
      term: "Unreliable narrator",
      definition: "Narrator whose perspective is biased or deceptive.",
    },
    {
      term: "Imagery",
      definition: "Sensory language creating mental pictures.",
    },
    {
      term: "Metaphor",
      definition: "Direct comparison without 'like' or 'as.'",
    },
    {
      term: "Personification",
      definition: "Giving human qualities to non-human things.",
    },
    {
      term: "Tone",
      definition: "Attitude conveyed through word choice and style.",
    },
  ],
  concepts: [
    {
      id: "ela9-u8-poetry",
      title: "Poetry analysis",
      skill:
        "Analyze poetic devices — imagery, metaphor, personification, tone — and their effects.",
      lesson: {
        sections: [
          {
            heading: "Poetic devices in context",
            body: "'The Algorithm's Dream' uses **personification**: algorithm 'dreams,' 'greet[s] you first,' 'will never tell' — human qualities make abstract system feel alive and threatening. **Metaphor**: 'You are the product' — direct comparison, no 'like' needed. **Imagery**: 'clicks and swipes,' 'patterns no one sees' — concrete digital images. **Tone**: ominous, confident — 'the house always wins' suggests inevitability. Each device serves theme: technology's invisible control.",
          },
          {
            heading: "Structure and sound",
            body: "Five stanzas, four lines each — consistent structure mirrors algorithm's systematic nature. Rhyme scheme AABB throughout — predictable, mechanical, like code. Repetition: 'I' at stanza starts — algorithm's self-focus. The poem's form enacts its content: just as algorithm processes systematically, poem is structured systematically. Form mirrors theme.",
          },
        ],
        keyFormulas: [
          {
            name: "Device serves theme",
            statement: "Personification makes algorithm threatening.",
          },
          {
            name: "Form mirrors content",
            statement: "Structure enacts meaning.",
          },
          { name: "Tone = attitude", statement: "Ominous, confident." },
        ],
        workedExample: {
          problem: "How does personification work in 'The Algorithm's Dream'?",
          solution:
            "Algorithm 'dreams,' 'greet[s],' 'will never tell' — human qualities make abstract system feel alive and threatening, personifying invisible control.",
        },
      },
      questions: [
        {
          id: "ela9-u8-poetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POEM,
          stem: "What poetic device does 'I dream in clicks and swipes' use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration" },
              { id: "b", text: "Hyperbole" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Personification — algorithm dreams" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personification",
                statement: "Human qualities to non-human.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Algorithm 'dreams' — human quality attributed to machine.",
                evidence: "personification",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Personification — algorithm dreams.",
            commonErrors: ["Missing that dreaming is human attribute."],
          },
        },
        {
          id: "ela9-u8-poetry-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POEM,
          stem: "Identify two poetic devices and explain their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetic device analysis",
                statement: "How devices create effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Metaphor: 'You are the product' — direct comparison, no 'like' needed.",
                evidence: "metaphor",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Imagery: 'clicks and swipes' — concrete digital images create vivid picture.",
                evidence: "imagery",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: both make abstract algorithmic control tangible and threatening.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Metaphor ('You are the product' — direct comparison) and imagery ('clicks and swipes' — concrete digital pictures). Effect: make abstract algorithmic control tangible.",
            commonErrors: ["Identifying without explaining effect."],
          },
        },
        {
          id: "ela9-u8-poetry-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POEM,
          stem: "Analyze how the poem's structure — stanzas, rhyme, repetition — mirrors its theme of algorithmic control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetic structure",
                statement: "Form mirrors content.",
              },
              {
                kind: "skill",
                name: "Theme analysis",
                statement: "How structure serves meaning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Five stanzas × four lines — consistent structure mirrors algorithm's systematic processing.",
                evidence: "structure",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "AABB rhyme throughout — predictable, mechanical, like code.",
                evidence: "rhyme",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Repetition: 'I' at stanza starts — algorithm's self-focus, control.",
                evidence: "repetition",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Poem's form enacts theme: consistent five-stanza structure mirrors algorithmic systematicity, AABB rhyme is predictable/mechanical like code, 'I' repetition shows algorithm's self-focus. Form mirrors content — structured like the system it describes.",
            commonErrors: ["Describing structure without connecting to theme."],
          },
        },
        {
          id: "ela9-u8-poetry-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: POEM,
          parts: [
            { label: "a", prompt: "What is the tone of the poem?", marks: 2 },
            { label: "b", prompt: "How is it created?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone analysis",
                statement: "Attitude through word choice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ominous, confident — 'the house always wins' suggests inevitability.",
                evidence: "tone",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Created through confident assertions ('I know your secrets'), threatening imagery ('never tell'), inevitability ('always wins').",
                evidence: "created",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Ominous, confident — inevitability. (b) Confident assertions ('I know your secrets'), threatening imagery, inevitability ('always wins').",
            commonErrors: ["Describing content instead of tone."],
          },
        },
      ],
    },
    {
      id: "ela9-u8-pov",
      title: "Point of View and Narrator Reliability",
      skill: "Analyze narrative perspective and evaluate narrator reliability.",
      lesson: {
        sections: [
          {
            heading: "Point of view types",
            body: "**First person**: 'I' narrator — intimate but limited. **Third limited**: 'he/she' focused on one character — 'The algorithm didn't hate Marcus. It didn't love him either.' — we see through limited omniscient lens. **Third omniscient**: knows all characters' thoughts. **Second person**: 'you' — rare, immersive. POV excerpt uses third limited — narrator knows algorithm's 'perspective' but not Marcus's full interiority. Creates irony: reader sees algorithm's logic, Marcus doesn't.",
          },
          {
            heading: "Unreliable narrator",
            body: "Narrator may be biased, deceptive, or limited: 'Marcus thought he was browsing' — but we know from algorithm's POV he's being manipulated. The gap between what Marcus believes and what reader knows creates dramatic irony. Is narrator reliable? The excerpt's narrator seems objective but is actually algorithmic — 'optimized' language mirrors theme. Question: can we trust this narrator's framing?",
          },
        ],
        keyFormulas: [
          {
            name: "POV = perspective",
            statement: "First, third limited, omniscient, second.",
          },
          {
            name: "Limited = partial knowledge",
            statement: "One character's view.",
          },
          {
            name: "Reliability = trust",
            statement: "Can we believe narrator?",
          },
        ],
        workedExample: {
          problem: "What POV does the excerpt use and what's its effect?",
          solution:
            "Third limited — focuses on algorithm's 'perspective' but limited to observable behavior. Creates irony: reader sees manipulation Marcus doesn't recognize.",
        },
      },
      questions: [
        {
          id: "ela9-u8-pov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POV,
          stem: "What point of view does the excerpt use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Third person limited" },
              { id: "b", text: "Second person" },
              { id: "c", text: "First person" },
              { id: "d", text: "Third person omniscient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Third limited",
                statement: "One character's perspective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Uses 'he'/'Marcus' but focuses on algorithm's perspective — limited to one viewpoint.",
                evidence: "third limited",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Third person limited.",
            commonErrors: ["Missing that focus is on algorithm, not Marcus."],
          },
        },
        {
          id: "ela9-u8-pov-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POV,
          stem: "How does the POV create dramatic irony?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dramatic irony",
                statement: "Reader knows more than character.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reader sees algorithm's logic; Marcus thinks he's 'browsing' and 'choosing.'",
                evidence: "reader knows",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Gap between Marcus's belief and reader's knowledge creates irony.",
                evidence: "gap",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: reader feels superior/concerned — sees manipulation Marcus misses.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Reader sees algorithm's optimization logic; Marcus thinks he's browsing/choosing. Gap creates dramatic irony — reader sees manipulation Marcus misses.",
            commonErrors: ["Missing the knowledge gap."],
          },
        },
        {
          id: "ela9-u8-pov-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POV,
          stem: "Analyze whether the narrator is reliable and how that affects interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrator reliability",
                statement: "Can we trust narrator?",
              },
              {
                kind: "skill",
                name: "Interpretation",
                statement: "How reliability affects meaning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Narrator seems objective but uses 'optimized' language — mirrors algorithmic perspective.",
                evidence: "optimized",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Focus on algorithm's 'view' — 'didn't hate... didn't love... simply optimized' — anthropomorphizes system.",
                evidence: "anthropomorphize",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Question: is narrator describing algorithm or speaking AS algorithm? Ambiguity affects interpretation.",
                evidence: "ambiguity",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Narrator appears objective but uses algorithmic language ('optimized,' 'data points') and anthropomorphizes algorithm ('didn't hate... didn't love'). Question: describing algorithm or speaking AS algorithm? Ambiguity affects whether we trust narrator's framing of Marcus's 'choice.'",
            commonErrors: ["Assuming narrator is always reliable."],
          },
        },
        {
          id: "ela9-u8-pov-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: POV,
          parts: [
            {
              label: "a",
              prompt:
                "What's the difference between first and third limited POV?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Why might an author choose third limited?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV comparison",
                statement: "First vs third.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "First = 'I' narrator; third limited = 'he/she' focused on one character's perspective.",
                evidence: "POV",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Third limited allows distance + focus — can describe character's thoughts while maintaining some narrative distance.",
                evidence: "why",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) First = 'I'; third limited = 'he/she' one character's view. (b) Allows distance + focus — describe thoughts while maintaining narrative distance.",
            commonErrors: ["Thinking third limited = omniscient."],
          },
        },
      ],
    },
    {
      id: "ela9-u8-craft",
      title: "Author's Craft and Rhetorical Choices",
      skill:
        "Analyze how authors make deliberate choices — word selection, imagery, structure — to create effects.",
      lesson: {
        sections: [
          {
            heading: "Craft = deliberate choice",
            body: "Every word choice is deliberate: 'optimized' vs 'chose,' 'served' vs 'showed,' 'data points' vs 'preferences.' Author chose algorithmic language to mirror theme — the writing itself is 'optimized' like the system it describes. 'You are the product' — metaphor reduces human to commodity. 'The house always wins' — gambling metaphor suggests inevitability. Craft analysis asks: why this word? why this image? why this structure?",
          },
          {
            heading: "Imagery and symbolism",
            body: "Recurring images create coherence: 'clicks and swipes' (digital interaction), 'patterns' (algorithmic processing), 'mirror' vs 'window' (perception vs reality). Symbols carry thematic weight: product = commodification, house = system/inevitability, dream = unconscious control. Effective craft makes form serve content — poem's mechanical structure enacts algorithmic theme.",
          },
        ],
        keyFormulas: [
          {
            name: "Word choice = meaning",
            statement: "Every word deliberate.",
          },
          {
            name: "Imagery creates coherence",
            statement: "Recurring images unify.",
          },
          {
            name: "Symbol = thematic weight",
            statement: "Objects carry meaning.",
          },
        ],
        workedExample: {
          problem: "Why does the author use 'optimized' instead of 'chose'?",
          solution:
            "'Optimized' is algorithmic language — mirrors theme of systematized control. Word choice itself is 'optimized' like the system described, creating meta-commentary on language.",
        },
      },
      questions: [
        {
          id: "ela9-u8-craft-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POV,
          stem: "Why does the author use 'optimized' instead of 'chose'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's shorter" },
              { id: "b", text: "Random choice" },
              {
                id: "c",
                text: "It's algorithmic language mirroring theme of systematized control",
              },
              { id: "d", text: "It's more formal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word choice analysis",
                statement: "Deliberate selection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Optimized' is algorithmic language — mirrors theme of systematized control; word choice itself is 'optimized.'",
                evidence: "word choice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. It's algorithmic language mirroring theme of systematized control.",
            commonErrors: ["Thinking word choice is arbitrary."],
          },
        },
        {
          id: "ela9-u8-craft-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POEM,
          stem: "Identify two symbols in 'The Algorithm's Dream' and explain their meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Symbolism",
                statement: "Objects carry meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Product' — commodification of human attention/data.",
                evidence: "product",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'House' — system/inevitability ('house always wins' = system can't lose).",
                evidence: "house",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Dream' — unconscious control, algorithm operates below awareness.",
                evidence: "dream",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Product' = commodification of attention; 'house' = system/inevitability; 'dream' = unconscious control.",
            commonErrors: ["Identifying objects without symbolic meaning."],
          },
        },
        {
          id: "ela9-u8-craft-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POEM,
          stem: "Analyze how the poem's mechanical structure (stanzas, rhyme) enacts its theme of algorithmic control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form-content relationship",
                statement: "Structure enacts meaning.",
              },
              {
                kind: "skill",
                name: "Craft analysis",
                statement: "Deliberate choices.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Five stanzas × four lines — consistent, systematic structure mirrors algorithmic processing.",
                evidence: "structure",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "AABB rhyme — predictable, mechanical, like code executing patterns.",
                evidence: "rhyme",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'I' repetition — algorithm's self-focus, control; poem speaks AS algorithm.",
                evidence: "repetition",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Poem's mechanical structure enacts theme: consistent stanza pattern mirrors algorithmic systematicity, predictable rhyme like code execution, 'I' repetition shows algorithm's self-focus. Form mirrors content — poem is structured like the system it describes.",
            commonErrors: ["Not seeing form as meaning."],
          },
        },
        {
          id: "ela9-u8-craft-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: POV,
          parts: [
            { label: "a", prompt: "What is 'word choice analysis'?", marks: 2 },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Word choice",
                statement: "Deliberate selection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Analyzing why author chose specific words over alternatives.",
                evidence: "word choice",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Optimized' vs 'chose' — algorithmic language mirrors theme of systematized control.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Analyzing why author chose specific words. (b) 'Optimized' vs 'chose' — algorithmic language mirrors theme.",
            commonErrors: ["Just listing words — need analysis of choice."],
          },
        },
      ],
    },
  ],
};
