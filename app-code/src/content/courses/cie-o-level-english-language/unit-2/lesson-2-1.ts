import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cie-ol-el-lesson-2-1",
  code: "2-1",
  title: "Poetry analysis",
  goal: "I CAN analyse poems for meaning, language and structure.",
  standards: ["1123 Reading: poetry"],
  vocabulary: [
    { term: "Verse", definition: "Single line of poetry." },
    { term: "Stanza", definition: "Group of verses — like paragraph in poetry." },
    { term: "Rhyme scheme", definition: "Pattern of rhymes — ABAB, AABB." },
    { term: "Imagery", definition: "Language creating mental pictures." },
    { term: "Tone", definition: "Speaker's attitude — joyful, sad, angry." },
    { term: "Volta", definition: "Turn in poem — shift in tone or meaning." },
  ],
  concepts: [
    {
      id: "cie-ol-el-poetry",
      title: "Analysing poetry",
      skill: "Identify meaning, language techniques and structure in poems.",
      lesson: {
        sections: [
          {
            heading: "First reading",
            body: "Read for literal meaning first — what happens? Then re-read for deeper meaning — what does it suggest? Note tone, imagery, structure.",
          },
          {
            heading: "Language analysis",
            body: "Look for: imagery (pictures), sound devices (alliteration, assonance), figurative language (simile, metaphor), word choice (connotation).",
          },
          {
            heading: "Structure analysis",
            body: "Stanza breaks, rhyme scheme, rhythm, line length, volta — all contribute to meaning.",
          },
        ],
        keyFormulas: [
          { name: "Poetry analysis", statement: "Literal→deeper meaning; language+structure create effect." },
        ],
        workedExample: {
          problem: "How to analyse 'The Road Not Taken'?",
          solution: "Literal: choice of path. Deeper: life choices, regret. Structure: 4 stanzas, ABAB rhyme. Language: metaphor (paths=life).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-poetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stanza?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group of verses" },
              { id: "b", text: "Single line" },
              { id: "c", text: "Rhyme pattern" },
              { id: "d", text: "Poem title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stanza", statement: "Group of verses like paragraph." },
            ],
            steps: [
              { reasoning: "Stanza = group of verses.", working: "group", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Group of verses",
            commonErrors: ["Choosing (b) — that's a verse."],
          },
        },
        {
          id: "cie-ol-el-poetry-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is imagery in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Imagery", statement: "Language creating mental pictures — visual, auditory, etc." },
            ],
            steps: [
              { reasoning: "Words creating mental images.", working: "images", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Language creating mental pictures — appeals to senses.",
            commonErrors: ["Only visual — includes all senses."],
          },
        },
        {
          id: "cie-ol-el-poetry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to analyse a poem's tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone", statement: "Speaker's attitude — identify via word choice, imagery, punctuation." },
            ],
            steps: [
              { reasoning: "Look at word choice — positive/negative connotation.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Imagery and punctuation reveal attitude.", working: "imagery+punctuation", marks: 1, markCode: "AO2" },
              { reasoning: "Consider speaker vs poet — may differ.", working: "speaker", marks: 1, markCode: "AO2" },
              { reasoning: "Analysis clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice, imagery, punctuation reveal speaker's attitude.",
            commonErrors: ["Confusing tone with mood — tone is speaker's attitude."],
          },
        },
        {
          id: "cie-ol-el-poetry-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse poetry elements.",
          parts: [
            { label: "a", prompt: "Define stanza and verse.", marks: 2 },
            { label: "b", prompt: "Explain imagery.", marks: 2 },
            { label: "c", prompt: "Describe rhyme scheme.", marks: 2 },
            { label: "d", prompt: "How does structure affect meaning?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poetry analysis", statement: "Stanza/verse, imagery, rhyme scheme, structure effects." },
            ],
            steps: [
              { part: "a", reasoning: "Stanza=group of verses; verse=single line.", working: "definitions", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Language creating mental pictures — appeals to senses.", working: "imagery", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Pattern of rhymes — ABAB, AABB etc.", working: "rhyme", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Stanza breaks create pauses; rhyme creates music; line length affects rhythm/emphasis.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) stanza/verse (b) mental pictures (c) rhyme pattern (d) structure affects meaning",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ignoring structure — it contributes to meaning."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-poetry-techniques",
      title: "Poetic techniques",
      skill: "Identify and analyse sound, figurative and structural devices.",
      lesson: {
        sections: [
          {
            heading: "Sound devices",
            body: "- **Alliteration**: repeated initial sounds (silky, soft)\n- **Assonance**: repeated vowel sounds\n- **Onomatopoeia**: sound words (buzz, crash)\n- **Rhyme**: end sounds match",
          },
          {
            heading: "Figurative language",
            body: "- **Simile**: like/as comparison\n- **Metaphor**: direct comparison\n- **Personification**: human qualities to non-human\n- **Hyperbole**: exaggeration",
          },
          {
            heading: "Structural devices",
            body: "- **Enjambment**: sentence continues across lines\n- **Volta**: shift in tone/meaning\n- **Repetition**: repeated words/phrases for emphasis",
          },
        ],
        keyFormulas: [
          { name: "Techniques", statement: "Sound: alliteration/assonance/onomatopoeia. Figurative: simile/metaphor/personification." },
        ],
        workedExample: {
          problem: "'The fog comes on little cat feet.' — technique?",
          solution: "Simile — fog compared to cat's soft feet. Creates gentle, quiet image.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is alliteration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated initial sounds" },
              { id: "b", text: "Repeated vowel sounds" },
              { id: "c", text: "Sound words" },
              { id: "d", text: "Rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alliteration", statement: "Repeated initial consonant sounds." },
            ],
            steps: [
              { reasoning: "Alliteration = repeated initial sounds.", working: "initial sounds", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Repeated initial sounds",
            commonErrors: ["Choosing (b) — that's assonance."],
          },
        },
        {
          id: "cie-ol-el-pt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two figurative language devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Figurative", statement: "Simile, metaphor, personification, hyperbole." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "devices", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simile, metaphor, personification, hyperbole (any two).",
            commonErrors: ["Sound devices — need figurative."],
          },
        },
        {
          id: "cie-ol-el-pt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the effect of enjambment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Enjambment", statement: "Sentence continues across lines — creates flow, tension, or unexpected emphasis." },
            ],
            steps: [
              { reasoning: "Line continues without pause — creates momentum.", working: "flow", marks: 1, markCode: "AO2" },
              { reasoning: "Can create tension or surprise when meaning shifts.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Affects rhythm and reading pace.", working: "rhythm", marks: 1, markCode: "AO2" },
              { reasoning: "Effects explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Creates flow/momentum; can create tension or surprise; affects rhythm.",
            commonErrors: ["Thinking it's just formatting — has meaning effect."],
          },
        },
        {
          id: "cie-ol-el-pt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse poetic techniques.",
          parts: [
            { label: "a", prompt: "Name sound devices.", marks: 2 },
            { label: "b", prompt: "Name figurative devices.", marks: 3 },
            { label: "c", prompt: "Explain volta.", marks: 2 },
            { label: "d", prompt: "How do techniques create meaning?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Techniques", statement: "Sound/figurative/structural devices create effects." },
            ],
            steps: [
              { part: "a", reasoning: "Alliteration, assonance, onomatopoeia, rhyme.", working: "sound", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Three+ valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Simile, metaphor, personification, hyperbole.", working: "figurative", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Turn/shift in tone or meaning — often in sonnet.", working: "volta", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Techniques create imagery, rhythm, emphasis — contribute to meaning/effect.", working: "meaning", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) sound devices (b) figurative (c) volta=turn (d) techniques create effect",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three+ devices.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple devices.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Listing without explaining effect."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-poetry-interpretation",
      title: "Interpreting poetry meaning",
      skill: "Extract deeper meaning and themes from poems.",
      lesson: {
        sections: [
          {
            heading: "Literal vs deeper meaning",
            body: "Literal: what happens on surface. Deeper: themes, symbolism, speaker's message — what does it suggest about life/humanity?",
          },
          {
            heading: "Themes",
            body: "Love, loss, nature, time, death, identity, society. Look for recurring images/ideas.",
          },
          {
            heading: "Context matters",
            body: "Historical/social context shapes meaning — war poems differ from nature poems. Speaker's perspective matters.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "Literal→deeper meaning; themes emerge from imagery/repetition; context shapes meaning." },
        ],
        workedExample: {
          problem: "What does 'Do Not Go Gentle' suggest about death?",
          solution: "Theme: defiance of death — 'rage against the dying of the light' — resistance, not acceptance.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-interp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'literal meaning' in poetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surface meaning" },
              { id: "b", text: "Hidden meaning" },
              { id: "c", text: "Symbolic meaning" },
              { id: "d", text: "Author's message" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Literal meaning", statement: "Surface meaning — what happens." },
            ],
            steps: [
              { reasoning: "Literal = surface.", working: "surface", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Surface meaning",
            commonErrors: ["Choosing (b) — that's deeper meaning."],
          },
        },
        {
          id: "cie-ol-el-interp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two common poetry themes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Themes", statement: "Love, loss, nature, time, death, identity, society." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "themes", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Love, loss, nature, time, death, identity, society (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-interp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does context affect poem interpretation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context", statement: "Historical/social context shapes meaning — war vs nature poems." },
            ],
            steps: [
              { reasoning: "Historical context: written during war → themes of conflict/loss.", working: "historical", marks: 1, markCode: "AO2" },
              { reasoning: "Social context: values/attitudes of time period.", working: "social", marks: 1, markCode: "AO2" },
              { reasoning: "Speaker's perspective differs from poet's.", working: "speaker", marks: 1, markCode: "AO2" },
              { reasoning: "Context explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Historical/social context and speaker's perspective shape meaning.",
            commonErrors: ["Ignoring context — modern interpretation may differ."],
          },
        },
        {
          id: "cie-ol-el-interp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Interpret poetic meaning.",
          parts: [
            { label: "a", prompt: "Distinguish literal vs deeper meaning.", marks: 2 },
            { label: "b", prompt: "How to identify themes?", marks: 3 },
            { label: "c", prompt: "Role of context.", marks: 2 },
            { label: "d", prompt: "How to support interpretation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretation", statement: "Literal→deeper; themes from imagery; context; evidence-based." },
            ],
            steps: [
              { part: "a", reasoning: "Literal=surface; deeper=themes/symbolism/message.", working: "distinction", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Look for recurring images/ideas; consider title; analyse word choice.", working: "themes", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple clues.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Historical/social context shapes meaning; speaker's perspective matters.", working: "context", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Quote specific lines, reference techniques, explain how they support interpretation.", working: "evidence", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) literal/deeper (b) recurring images/title/word choice (c) context/speaker (d) quote+techniques",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple clues.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Evidence-based.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Interpretation without evidence — must quote."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-poetry-notes",
      title: "Poetry analysis — revision notes",
      summary: "Poetry elements, techniques, interpretation.",
      sections: [
        {
          heading: "Poetry",
          body: "Stanza=group of verses; verse=line. Imagery, rhyme scheme, tone. Techniques: alliteration, assonance, simile, metaphor, personification, enjambment, volta.",
        },
        {
          heading: "Interpretation",
          body: "Literal→deeper meaning; themes (love, loss, nature, death); context shapes meaning; quote for evidence.",
        },
      ],
    },
  ],
};
