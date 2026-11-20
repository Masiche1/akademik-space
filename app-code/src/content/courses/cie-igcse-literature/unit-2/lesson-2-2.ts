import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cieilit-u2-lesson-2-2",
  code: "2-2",
  title: "Poetry analysis for essays",
  goal: "I CAN write analytical essays on poetry covering form, language and meaning.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Section 2: Writing about literature",
  ],
  vocabulary: [
    {
      term: "Stanza analysis",
      definition: "Examining how a poem's stanza structure develops meaning.",
    },
    {
      term: "Volta",
      definition:
        "The 'turn' in a sonnet where the argument shifts — often marked by 'but' or 'yet'.",
    },
    {
      term: "Sonnets",
      definition:
        "14-line poems — Shakespearean (abab cdcd efef gg) or Petrarchan (octave/sestet).",
    },
    {
      term: "Free verse",
      definition:
        "Poetry without regular rhyme or metre — structure created by other means.",
    },
    {
      term: "Prosody",
      definition: "The study of poetic rhythm, metre and sound patterns.",
    },
    {
      term: "Ambiguity",
      definition: "Deliberate openness allowing multiple interpretations.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u2-poetry",
      title: "Writing about poetry",
      skill: "Analyse poetry's form, language and meaning in essay form.",
      lesson: {
        sections: [
          {
            heading: "Form and structure",
            body: "Analyse **form**: sonnet (volta, rhyme scheme), ballad (narrative quatrains), free verse (irregular but patterned). Note **stanza development** — does the poem move from observation to reflection? Where is the **turning point**? How does the **ending** resolve or complicate the theme? Structure is meaning — the shape of a poem mirrors its argument.",
          },
          {
            heading: "Language in poetry",
            body: "Poetry compresses meaning — every word carries weight. Analyse **diction** (precise word choice), **imagery** (sensory pictures), **metaphor and simile** (comparisons), **sound** (alliteration, assonance, rhythm), and **tone shifts**. Quote briefly and analyse closely — one well-explored image beats five listed techniques.",
          },
          {
            heading: "Meaning and interpretation",
            body: "A strong poetry essay answers 'what is this poem about and how does it achieve it?' Link every technique to **theme** — e.g. the volta in a sonnet often marks the poet's change of attitude. Acknowledge **ambiguity** — great poems sustain multiple readings; showing this sophistication earns marks.",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry essay arc",
            statement: "Form → language → meaning (theme) → evaluation",
          },
          {
            name: "Close analysis rule",
            statement:
              "One technique explored deeply > five listed superficially",
          },
        ],
        workedExample: {
          problem:
            "A sonnet's octave describes a beautiful object; the sestet reveals it is a metaphor for lost love. What structural feature matters?",
          solution:
            "The volta between octave and sestet — the turn from literal description to metaphorical meaning marks the poem's development.",
        },
      },
      questions: [
        {
          id: "cieilit-u2-poe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'volta' in a sonnet is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The final couplet" },
              { id: "b", text: "The turn where the argument shifts" },
              { id: "c", text: "A type of rhyme" },
              { id: "d", text: "The poem's title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Volta",
                statement:
                  "The turn in a sonnet where argument or attitude shifts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Volta = 'turn' — often marked by 'but/yet', separating octave from sestet in Petrarchan or marking the turn in Shakespearean.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The turn where the argument shifts.",
            commonErrors: [
              "Confusing volta with rhyme scheme or stanza count.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it better to analyse one poetic image deeply than list five techniques?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Close analysis",
                statement:
                  "Depth of analysis beats breadth of technique-spotting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deep analysis explores connotations, links to theme and explains effect — earning higher marks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Listing techniques without explanation is description, not analysis — marks are lost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One image fully analysed shows understanding of how meaning is built cumulatively.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Deep analysis earns marks through explanation; listing techniques without effect is description.",
            commonErrors: [
              "Thinking more techniques identified = better answer.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a poem's ending can develop its meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structural meaning",
                statement:
                  "Endings resolve, complicate or subvert the poem's themes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Endings often deliver the poem's payoff — resolution, twist, or ambiguous conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A sudden shift in the final lines can reframe earlier meaning — the ending recontextualises the whole poem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analyzing the ending shows how structure itself carries meaning, not just content.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Endings resolve or reframe themes — the structural turn often carries the poem's deepest meaning.",
            commonErrors: [
              "Ignoring the ending or treating it as separate from the whole poem.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan an essay on how a poem uses contrast to explore its theme.",
          parts: [
            {
              label: "a",
              prompt:
                "Give a thesis identifying the theme and contrast method.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Plan three analytical paragraphs.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poetry essay planning",
                statement: "Theme + contrast method → structured paragraphs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The poem explores the contrast between public duty and private longing through opposing imagery.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Thesis identifies both theme AND the structural method (contrast).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Para 1: imagery of duty — word choice and sensory detail creating one pole of the contrast.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 2: imagery of longing — parallel analysis showing the opposing pole.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 3: structure — volta, stanza breaks or ending showing how contrast resolves or remains unresolved.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each paragraph links technique → effect → theme development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Thesis: theme + contrast method. (b) Paragraphs on each pole of contrast + structural resolution.",
            commonErrors: [
              "Describing images without analysing how contrast develops meaning.",
            ],
          },
        },
      ],
    },
  ],
};
