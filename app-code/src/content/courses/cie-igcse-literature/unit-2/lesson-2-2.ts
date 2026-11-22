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
              { id: "a", text: "The poem's title" },
              { id: "b", text: "The turn where the argument shifts" },
              { id: "c", text: "A type of rhyme" },
              { id: "d", text: "The final couplet" },
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
        {
          id: "cieilit-u2-poe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Free verse' is poetry that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is always written as a ballad" },
              {
                id: "b",
                text: "Follows strict iambic pentameter throughout",
              },
              { id: "c", text: "Has no regular rhyme or metre" },
              { id: "d", text: "Always contains exactly 14 lines" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free verse",
                statement:
                  "Poetry without regular rhyme or metre — structure created by other means.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Free verse abandons regular rhyme and metre but is still shaped — line breaks, imagery and rhythm do the structural work.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Has no regular rhyme or metre.",
            commonErrors: [
              "Thinking free verse means completely shapeless or random writing.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Alliteration' in a poem is the repetition of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vowel sounds within words" },
              { id: "b", text: "Initial consonant sounds" },
              { id: "c", text: "Whole lines or phrases" },
              { id: "d", text: "The same word at line endings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alliteration",
                statement:
                  "Repetition of initial consonant sounds — e.g. 'dark, deep and dangerous'.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alliteration repeats consonant sounds at the start of words; assonance repeats vowel sounds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Initial consonant sounds.",
            commonErrors: [
              "Confusing alliteration (consonants) with assonance (vowels).",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Assonance' in a poem is the repetition of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Entire lines of verse" },
              { id: "b", text: "Vowel sounds within words" },
              { id: "c", text: "Initial consonant sounds" },
              { id: "d", text: "The rhyme scheme pattern" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Assonance",
                statement:
                  "Repetition of vowel sounds — e.g. 'the rain in Spain stays mainly in the plain'.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assonance repeats vowel sounds within words, creating internal music — distinct from rhyme, which repeats sounds at line ends.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Vowel sounds within words.",
            commonErrors: [
              "Confusing assonance with rhyme — rhyme is end-sound, assonance is internal vowel echo.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Ambiguity' in a poem means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The poem is confusing and poorly written",
              },
              { id: "b", text: "The poem has two stanzas only" },
              {
                id: "c",
                text: "The poet refuses to give the poem a title",
              },
              {
                id: "d",
                text: "Deliberate openness that allows multiple valid interpretations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ambiguity",
                statement:
                  "Deliberate openness allowing multiple interpretations — a mark of sophistication, not confusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ambiguity is a deliberate technique — great poems sustain several readings; acknowledging this earns credit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Deliberate openness that allows multiple valid interpretations.",
            commonErrors: [
              "Treating ambiguity as a flaw rather than a feature.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The rhyme scheme of a Shakespearean sonnet is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "abab cdcd efef gg" },
              { id: "b", text: "No fixed scheme — it is free verse" },
              { id: "c", text: "aaa bbb ccc ddd" },
              { id: "d", text: "abba abba cdecde" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shakespearean sonnet",
                statement:
                  "14 lines in three quatrains and a couplet: abab cdcd efef gg.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Shakespearean (English) sonnet uses three quatrains plus a final rhyming couplet — abab cdcd efef gg.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) abab cdcd efef gg.",
            commonErrors: [
              "Confusing the Shakespearean scheme with the Petrarchan octave/sestet division.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines does a sonnet have? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 14 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sonnet",
                statement:
                  "A 14-line poem — Shakespearean (abab cdcd efef gg) or Petrarchan (octave/sestet).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both Shakespearean and Petrarchan sonnets have exactly 14 lines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "14",
            commonErrors: [
              "Confusing the 14 lines with the number of stanzas.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines are in the rhyming couplet that closes a Shakespearean sonnet? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhyming couplet",
                statement:
                  "Two consecutive rhyming lines — the Shakespearean sonnet's closing gg.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The final couplet (gg) of a Shakespearean sonnet is two rhyming lines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2",
            commonErrors: [
              "Counting four lines — the couplet is only the final pair.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Answer both parts with numbers only.",
          parts: [
            {
              label: "a",
              prompt: "How many lines does a Petrarchan sonnet's octave contain?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "How many lines does a Petrarchan sonnet's sestet contain?",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Petrarchan sonnet",
                statement: "Octave (8 lines) + sestet (6 lines) = 14 lines.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The octave is the first 8 lines, ending at the volta.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The sestet is the final 6 lines — 8 + 6 = 14.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 8  (b) 6",
            commonErrors: [
              "Reversing the octave and sestet line counts.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ballad stanza is typically a quatrain — how many lines does it have? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ballad stanza",
                statement:
                  "A quatrain of four lines, often with alternating rhyme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ballads are built from quatrains — four-line stanzas, usually rhyming abcb or abab.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
            commonErrors: [
              "Confusing a quatrain (4 lines) with a couplet (2 lines).",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how sound devices such as alliteration and assonance can create meaning in a poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sound devices",
                statement:
                  "Repeated sounds create music, mood and emphasis that reinforce meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alliteration and assonance repeat consonant or vowel sounds, giving the poem an audible pattern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The sounds mimic meaning — harsh consonants can suggest violence, soft vowels can suggest tenderness or calm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Linking the device to its effect shows how sound enacts the poem's subject — e.g. sibilance mimicking a snake or wind.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Repeated sounds create music and mood that echo the poem's meaning — analyse the device, its effect, and its link to theme.",
            commonErrors: [
              "Identifying alliteration without explaining its effect or link to meaning.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can a poet's choice of stanza breaks be significant in analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structural analysis",
                statement: "Stanza breaks mark units of thought and signal shifts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stanza breaks group ideas into units — each stanza often develops one image, thought or stage of the argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Breaks create pauses — they can mark a shift in tone, a volta-like turn, or a change of subject.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysing stanza structure shows how the poem's shape mirrors its development — structure is meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stanza breaks organise ideas into units and mark shifts — the poem's shape mirrors its argument.",
            commonErrors: [
              "Treating stanza breaks as purely visual rather than meaningful.",
            ],
          },
        },
        {
          id: "cieilit-u2-poe-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan an essay on how a poem uses sound and rhythm to develop its theme.",
          parts: [
            {
              label: "a",
              prompt: "Give a thesis naming the theme and the sound/rhythm method.",
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
                statement: "Theme + prosodic method → structured paragraphs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The poem enacts its theme of restless energy through driving rhythm and harsh alliteration.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Thesis identifies both the theme and the specific sound/rhythm technique used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Para 1: consonant sound — alliteration/sibilance with quoted examples and their effect.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 2: vowel sound and rhythm — assonance and metre/beat, showing how pace mirrors the subject.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 3: structure — how line breaks, caesura or stanza pauses shape the poem's sound and development.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each paragraph links technique → effect → theme, with brief embedded quotations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Thesis: theme + sound/rhythm method. (b) Paragraphs on consonant sounds, vowel sounds/rhythm, and structural sound effects.",
            commonErrors: [
              "Describing sounds without linking them to the theme.",
            ],
          },
        },
      ],
    },
  ],
};
