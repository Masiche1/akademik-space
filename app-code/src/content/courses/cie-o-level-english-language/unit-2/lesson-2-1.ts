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
              { id: "a", text: "Rhyme pattern" },
              { id: "b", text: "Single line" },
              { id: "c", text: "Group of verses" },
              { id: "d", text: "Poem title" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cie-ol-el-poetry-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'verse' in poetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A group of lines" },
              { id: "b", text: "A rhyme pattern" },
              { id: "c", text: "The poem's title" },
              { id: "d", text: "A single line" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verse", statement: "A single line of poetry." },
            ],
            steps: [
              { reasoning: "Verse = one line.", working: "one line", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A single line",
            commonErrors: ["Choosing (b) — that's a stanza."],
          },
        },
        {
          id: "cie-ol-el-poetry-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A poem has 4 stanzas of 4 lines each. (a) How many lines does the poem have in total? (b) How many lines are in each stanza?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poem structure counting", statement: "Stanzas times lines per stanza." },
            ],
            steps: [
              { reasoning: "4 times 4 equals 16 lines.", working: "4 x 4 = 16", marks: 1, markCode: "AO2" },
              { reasoning: "Each stanza has 4 lines.", working: "4 lines", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 16; (b) 4",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cie-ol-el-poetry-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rhyme scheme written as ABAB means what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is no rhyme" },
              { id: "b", text: "All lines rhyme together" },
              { id: "c", text: "Lines 1 and 3 rhyme, and lines 2 and 4 rhyme" },
              { id: "d", text: "It is an AABB scheme" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rhyme scheme", statement: "Letters show which lines rhyme." },
            ],
            steps: [
              { reasoning: "Same letters rhyme: A lines rhyme with A, B with B.", working: "ABAB", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Lines 1 and 3 rhyme, and lines 2 and 4 rhyme",
            commonErrors: ["Choosing (d) — AABB is a different pattern."],
          },
        },
        {
          id: "cie-ol-el-poetry-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two things to note on a first reading of a poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "First reading", statement: "Literal meaning, tone, imagery, structure." },
            ],
            steps: [
              { reasoning: "Any two valid — literal meaning, tone, imagery, rhyme scheme, stanza breaks.", working: "notes", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Literal meaning, tone, imagery, rhyme scheme, structure (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-poetry-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A poem has 5 stanzas of 6 lines each. (a) How many stanzas are there? (b) How many lines does the poem have? (c) If each stanza has a 4-letter rhyme scheme, how many rhyme letters appear in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 30 },
              { label: "c", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poem counting", statement: "Stanzas times lines; rhyme letters per stanza." },
            ],
            steps: [
              { reasoning: "5 stanzas are given.", working: "5 stanzas", marks: 1, markCode: "AO1" },
              { reasoning: "5 times 6 equals 30 lines.", working: "5 x 6 = 30", marks: 1, markCode: "AO2" },
              { reasoning: "5 stanzas times 4 letters equals 20 rhyme letters.", working: "5 x 4 = 20", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5; (b) 30; (c) 20",
            commonErrors: ["Counting rhyme letters per line instead of per stanza."],
          },
        },
        {
          id: "cie-ol-el-poetry-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'tone' in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speaker's attitude" },
              { id: "b", text: "The rhyme pattern" },
              { id: "c", text: "The title" },
              { id: "d", text: "The rhythm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "Speaker's attitude — joyful, sad, angry, etc." },
            ],
            steps: [
              { reasoning: "Tone = attitude.", working: "attitude", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The speaker's attitude",
            commonErrors: ["Choosing (b) — that's rhyme scheme."],
          },
        },
        {
          id: "cie-ol-el-poetry-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how structure contributes to a poem's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structural analysis", statement: "Stanzas, rhyme, line length and volta shape meaning." },
            ],
            steps: [
              { reasoning: "Stanza breaks create pauses and group ideas.", working: "stanzas", marks: 1, markCode: "AO2" },
              { reasoning: "Rhyme scheme creates music and links ideas.", working: "rhyme", marks: 1, markCode: "AO2" },
              { reasoning: "Line length and rhythm affect pace and emphasis.", working: "rhythm", marks: 1, markCode: "AO2" },
              { reasoning: "Structure explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Stanza breaks, rhyme, rhythm and volta all shape meaning and effect.",
            commonErrors: ["Ignoring structure — it contributes to meaning."],
          },
        },
        {
          id: "cie-ol-el-poetry-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A poem's 'volta' is what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A turn or shift in tone or meaning" },
              { id: "b", text: "The last word" },
              { id: "c", text: "The first line" },
              { id: "d", text: "The poem's title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volta", statement: "A turn — shift in tone or meaning." },
            ],
            steps: [
              { reasoning: "Volta = turn.", working: "turn", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A turn or shift in tone or meaning",
            commonErrors: ["Thinking it's just a line — it's a shift."],
          },
        },
        {
          id: "cie-ol-el-poetry-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A poem has 24 lines arranged in stanzas of 6 lines. (a) How many stanzas does it have? (b) If a student plans 3 readings of 4 minutes each, how many minutes of reading time is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 12, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poem analysis planning", statement: "Count stanzas; plan reading time." },
            ],
            steps: [
              { reasoning: "24 divided by 6 equals 4 stanzas.", working: "24 / 6 = 4", marks: 1, markCode: "AO2" },
              { reasoning: "3 readings times 4 minutes equals 12 minutes.", working: "3 x 4 = 12", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 12 minutes",
            commonErrors: ["Dividing lines by stanzas instead of lines per stanza."],
          },
        },
        {
          id: "cie-ol-el-poetry-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply poetry analysis skills.",
          parts: [
            { label: "a", prompt: "Distinguish literal and deeper meaning.", marks: 2 },
            { label: "b", prompt: "Name two ways to identify tone.", marks: 2 },
            { label: "c", prompt: "What role does imagery play?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poetry analysis", statement: "Meaning, tone, imagery." },
            ],
            steps: [
              { part: "a", reasoning: "Literal=surface; deeper=themes/symbolism/message.", working: "distinction", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Word choice, punctuation, imagery — any two.", working: "methods", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Creates mental pictures — builds meaning and effect.", working: "imagery", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) literal/deeper (b) word choice/punctuation (c) mental pictures",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Stopping at literal meaning — go deeper."],
          },
        },
        {
          id: "cie-ol-el-poetry-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which shows analysis of a poem's DEEPER meaning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translating the poem" },
              { id: "b", text: "Naming the poet" },
              { id: "c", text: "Exploring themes and symbolism" },
              { id: "d", text: "Counting the lines" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Deeper meaning", statement: "Themes, symbolism, message." },
            ],
            steps: [
              { reasoning: "Deeper meaning = themes/symbolism.", working: "themes", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Exploring themes and symbolism",
            commonErrors: ["Choosing (b) — counting is not interpretation."],
          },
        },
        {
          id: "cie-ol-el-poetry-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A poem has 3 possible themes; evidence clearly supports 2 of them. How many themes are supported? (b) A poem has 40 lines arranged in stanzas of 10 lines. How many stanzas does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretation counting", statement: "Count supported themes; count stanzas." },
            ],
            steps: [
              { reasoning: "Evidence supports 2 themes.", working: "2 themes", marks: 1, markCode: "AO2" },
              { reasoning: "40 divided by 10 equals 4 stanzas.", working: "40 / 10 = 4", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 4",
            commonErrors: ["Claiming all 3 themes — unsupported themes are wrong."],
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
              { id: "a", text: "Rhyme" },
              { id: "b", text: "Repeated vowel sounds" },
              { id: "c", text: "Sound words" },
              { id: "d", text: "Repeated initial sounds" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-el-pt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'assonance'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated initial consonants" },
              { id: "b", text: "Repeated vowel sounds" },
              { id: "c", text: "End-of-line rhyme" },
              { id: "d", text: "Words that imitate sounds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Assonance", statement: "Repeated vowel sounds within words." },
            ],
            steps: [
              { reasoning: "Assonance = repeated vowels.", working: "vowels", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Repeated vowel sounds",
            commonErrors: ["Choosing (b) — that's alliteration."],
          },
        },
        {
          id: "cie-ol-el-pt-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A poem line contains 3 instances of alliteration and 2 similes. (a) How many alliterative instances are there? (b) How many similes are there? (c) How many sound/figurative devices are counted in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
              { label: "c", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Device counting", statement: "Count each device occurrence." },
            ],
            steps: [
              { reasoning: "3 alliterations are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "2 similes are given.", working: "2", marks: 1, markCode: "AO2" },
              { reasoning: "3 plus 2 equals 5 devices.", working: "3 + 2 = 5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 2; (c) 5",
            commonErrors: ["Mixing up alliteration (sound) and simile (figurative)."],
          },
        },
        {
          id: "cie-ol-el-pt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Personification gives what to non-human things?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A 'like' comparison" },
              { id: "b", text: "Human qualities" },
              { id: "c", text: "Repetition" },
              { id: "d", text: "Exaggeration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personification", statement: "Human qualities to non-human things." },
            ],
            steps: [
              { reasoning: "Personification = human traits.", working: "human", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Human qualities",
            commonErrors: ["Choosing (c) — that's a simile."],
          },
        },
        {
          id: "cie-ol-el-pt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two structural devices used in poetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Structural devices", statement: "Enjambment, volta, stanza breaks, line length." },
            ],
            steps: [
              { reasoning: "Any two valid — enjambment, volta, stanza breaks, line length.", working: "devices", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Enjambment, volta, stanza breaks, line length (any two).",
            commonErrors: ["Sound/figurative devices — need structural."],
          },
        },
        {
          id: "cie-ol-el-pt-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A poem has enjambment in 4 lines and an ABAB rhyme scheme. (a) How many lines are enjambed? (b) How many rhyme letters are in the scheme? (c) What is the total of both counts?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 4 },
              { label: "c", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique counting", statement: "Count devices and scheme letters separately." },
            ],
            steps: [
              { reasoning: "4 lines are enjambed.", working: "4 lines", marks: 1, markCode: "AO1" },
              { reasoning: "ABAB has 4 letters.", working: "4 letters", marks: 1, markCode: "AO2" },
              { reasoning: "4 plus 4 equals 8.", working: "4 + 4 = 8", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 4; (c) 8",
            commonErrors: ["Counting stanza count instead of rhyme letters."],
          },
        },
        {
          id: "cie-ol-el-pt-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The wind whispered through the trees' is an example of which technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Onomatopoeia" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Metaphor" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Wind 'whispering' gives it a human action." },
            ],
            steps: [
              { reasoning: "Whispering is a human action given to wind.", working: "whisper", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Personification",
            commonErrors: ["Choosing (d) — 'whispered' describes, doesn't imitate sound."],
          },
        },
        {
          id: "cie-ol-el-pt-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the effect of repetition in poetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Repetition", statement: "Emphasis, rhythm, motif, memorability." },
            ],
            steps: [
              { reasoning: "Repetition emphasises key words or ideas.", working: "emphasis", marks: 1, markCode: "AO2" },
              { reasoning: "It creates rhythm and musicality.", working: "rhythm", marks: 1, markCode: "AO2" },
              { reasoning: "Repeated images become motifs — reinforce theme.", working: "motif", marks: 1, markCode: "AO2" },
              { reasoning: "Effects explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emphasis, rhythm, motif-building — reinforces meaning.",
            commonErrors: ["Thinking repetition is just padding — it has rhetorical effect."],
          },
        },
        {
          id: "cie-ol-el-pt-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of onomatopoeia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "beautiful" },
              { id: "b", text: "quickly" },
              { id: "c", text: "whispered secrets" },
              { id: "d", text: "buzz" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Onomatopoeia", statement: "Words that imitate sounds." },
            ],
            steps: [
              { reasoning: "'Buzz' imitates a sound.", working: "buzz", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** buzz",
            commonErrors: ["Choosing (d) — 'whispered' describes, not imitates."],
          },
        },
        {
          id: "cie-ol-el-pt-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A poem uses 2 metaphors, 3 similes and 1 hyperbole. (a) How many figurative devices are there in total? (b) If 5 sound devices are listed and 2 of them are rhyme, how many are NOT rhyme?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique counting", statement: "Sum figurative devices; subtract rhyme from sound devices." },
            ],
            steps: [
              { reasoning: "2 plus 3 plus 1 equals 6 figurative devices.", working: "2 + 3 + 1 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "5 minus 2 equals 3 non-rhyme sound devices.", working: "5 - 2 = 3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 3",
            commonErrors: ["Counting rhyme as figurative — it's a sound device."],
          },
        },
        {
          id: "cie-ol-el-pt-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply poetic technique skills.",
          parts: [
            { label: "a", prompt: "Name two sound devices.", marks: 2 },
            { label: "b", prompt: "Name two figurative devices.", marks: 2 },
            { label: "c", prompt: "Name two structural devices.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poetic techniques", statement: "Sound, figurative, structural categories." },
            ],
            steps: [
              { part: "a", reasoning: "Alliteration, assonance, onomatopoeia, rhyme — any two.", working: "sound", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Simile, metaphor, personification, hyperbole — any two.", working: "figurative", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Enjambment, volta, stanza breaks, line length — any two.", working: "structural", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) sound (b) figurative (c) structural — two each",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
            ],
            commonErrors: ["Mixing categories — know which is which."],
          },
        },
        {
          id: "cie-ol-el-pt-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Enjambment creates what effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The poem's title" },
              { id: "b", text: "Stanza breaks" },
              { id: "c", text: "Flow and momentum across lines" },
              { id: "d", text: "End-of-line rhyme" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Enjambment", statement: "Sentence continues across lines — creates flow." },
            ],
            steps: [
              { reasoning: "Enjambment = run-on lines = momentum.", working: "flow", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Flow and momentum across lines",
            commonErrors: ["Thinking it's just formatting."],
          },
        },
        {
          id: "cie-ol-el-pt-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A 12-line poem has initial consonant repetition in 5 lines. How many lines show alliteration? (b) A poem's volta occurs at line 7 of 14. How many lines come BEFORE the volta?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poetry counting", statement: "Count devices and line positions." },
            ],
            steps: [
              { reasoning: "5 lines show alliteration.", working: "5 lines", marks: 1, markCode: "AO1" },
              { reasoning: "Lines 1-6 come before line 7 — 6 lines.", working: "7 - 1 = 6", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5; (b) 6",
            commonErrors: ["Counting the volta line itself as 'before'."],
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
              { id: "a", text: "Author's message" },
              { id: "b", text: "Surface meaning" },
              { id: "c", text: "Symbolic meaning" },
              { id: "d", text: "Hidden meaning" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-el-interp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'deeper meaning' in poetry refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The poet's name" },
              { id: "b", text: "The rhyme scheme" },
              { id: "c", text: "Themes, symbolism and the speaker's message" },
              { id: "d", text: "The literal plot" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deeper meaning", statement: "Themes, symbolism, suggested ideas." },
            ],
            steps: [
              { reasoning: "Deeper meaning = themes/symbolism.", working: "themes", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Themes, symbolism and the speaker's message",
            commonErrors: ["Choosing (b) — that's literal meaning."],
          },
        },
        {
          id: "cie-ol-el-interp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A poem has 3 recurring images that all suggest the same theme. (a) How many recurring images are there? (b) How many themes do these images support?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme identification", statement: "Recurring images point to shared themes." },
            ],
            steps: [
              { reasoning: "3 recurring images are given.", working: "3 images", marks: 1, markCode: "AO1" },
              { reasoning: "All 3 suggest the same theme — 1 theme.", working: "1 theme", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 1",
            commonErrors: ["Counting each image as a separate theme."],
          },
        },
        {
          id: "cie-ol-el-interp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'theme' in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A stanza" },
              { id: "b", text: "The rhyme scheme" },
              { id: "c", text: "The central idea or message" },
              { id: "d", text: "The line length" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "Central idea — love, loss, nature, death, etc." },
            ],
            steps: [
              { reasoning: "Theme = central idea.", working: "central idea", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The central idea or message",
            commonErrors: ["Choosing (d) — that's a stanza."],
          },
        },
        {
          id: "cie-ol-el-interp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two common themes found in poetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Poetry themes", statement: "Love, loss, nature, time, death, identity, society." },
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
          id: "cie-ol-el-interp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A nature poem has 6 stanzas. (a) How many stanzas does it have? (b) If 2 stanzas mark a shift in tone (a volta), how many stanzas come after the shift? (c) If each stanza has 4 lines, how many lines does the poem have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 4 },
              { label: "c", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poem structure counting", statement: "Count stanzas, shifts and lines." },
            ],
            steps: [
              { reasoning: "6 stanzas are given.", working: "6", marks: 1, markCode: "AO1" },
              { reasoning: "6 minus 2 equals 4 stanzas after the shift.", working: "6 - 2 = 4", marks: 1, markCode: "AO2" },
              { reasoning: "6 times 4 equals 24 lines.", working: "6 x 4 = 24", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 4; (c) 24",
            commonErrors: ["Counting the volta stanzas themselves as 'after'."],
          },
        },
        {
          id: "cie-ol-el-interp-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does context affect the interpretation of a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poems have no meaning" },
              { id: "b", text: "Rhyme determines meaning" },
              { id: "c", text: "Poem length determines meaning" },
              { id: "d", text: "Historical and social settings shape meaning" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context", statement: "Historical/social context shapes interpretation." },
            ],
            steps: [
              { reasoning: "Context (war, era, society) shapes meaning.", working: "context", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Historical and social settings shape meaning",
            commonErrors: ["Ignoring context — war poems differ from nature poems."],
          },
        },
        {
          id: "cie-ol-el-interp-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to support a poetic interpretation in an answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence-based interpretation", statement: "Quote lines, reference techniques, link to theme." },
            ],
            steps: [
              { reasoning: "Quote specific lines from the poem.", working: "quote", marks: 1, markCode: "AO2" },
              { reasoning: "Reference the techniques used (imagery, tone, structure).", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Explain how the evidence supports the interpretation.", working: "explain", marks: 1, markCode: "AO2" },
              { reasoning: "Link back to theme or meaning.", working: "theme", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Quote lines→reference techniques→explain link→connect to theme.",
            commonErrors: ["Interpretation without evidence — must quote."],
          },
        },
        {
          id: "cie-ol-el-interp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best evidence for a theme of 'loss' in a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Counting the stanzas" },
              { id: "b", text: "Naming the rhyme scheme" },
              { id: "c", text: "The poet's age" },
              { id: "d", text: "Images of emptiness and fading light" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme evidence", statement: "Recurring images support theme." },
            ],
            steps: [
              { reasoning: "Emptiness/fading light images suggest loss.", working: "images", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Images of emptiness and fading light",
            commonErrors: ["Choosing (b) — counting is not evidence of theme."],
          },
        },
        {
          id: "cie-ol-el-interp-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A poem has 10 images; 4 of them relate to the theme of 'time'. How many images relate to the theme? (b) A student uses 3 quotations to support their interpretation. How many quotations are used?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence counting", statement: "Count images supporting theme; count quotations." },
            ],
            steps: [
              { reasoning: "4 images relate to the theme.", working: "4 images", marks: 1, markCode: "AO1" },
              { reasoning: "3 quotations are used.", working: "3 quotes", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 4; (b) 3",
            commonErrors: ["Counting all 10 images — only 4 relate."],
          },
        },
        {
          id: "cie-ol-el-interp-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply poetic interpretation skills.",
          parts: [
            { label: "a", prompt: "Distinguish literal and deeper meaning.", marks: 2 },
            { label: "b", prompt: "How do themes emerge in a poem?", marks: 2 },
            { label: "c", prompt: "What role does context play?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poetry interpretation", statement: "Meaning, themes, context." },
            ],
            steps: [
              { part: "a", reasoning: "Literal=surface; deeper=themes/symbolism/message.", working: "distinction", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Recurring images/ideas, title, word choice reveal themes.", working: "themes", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple clues.", working: "clues", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Historical/social context shapes meaning; speaker's view matters.", working: "context", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) literal/deeper (b) recurring images/title (c) context shapes meaning",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clues named.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Ignoring context — it shapes interpretation."],
          },
        },
        {
          id: "cie-ol-el-interp-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the best approach to interpreting a poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignoring context" },
              { id: "b", text: "Summarising only" },
              { id: "c", text: "Guessing the meaning" },
              { id: "d", text: "Evidence-based, quoting the text" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretation approach", statement: "Base interpretation on textual evidence." },
            ],
            steps: [
              { reasoning: "Interpretation must be supported by quotes.", working: "evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Evidence-based, quoting the text",
            commonErrors: ["Choosing (b) — guessing is not interpretation."],
          },
        },
        {
          id: "cie-ol-el-interp-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A poem has 5 stanzas; the theme is signalled in only 2 of them. How many stanzas do NOT signal the theme? (b) A student quotes 8 lines to support a point but the exam allows a maximum of 4 lines. How many lines must be cut?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretation limits", statement: "Count unstated stanzas; trim quotations to limit." },
            ],
            steps: [
              { reasoning: "5 minus 2 equals 3 stanzas without the theme.", working: "5 - 2 = 3", marks: 1, markCode: "AO2" },
              { reasoning: "8 minus 4 equals 4 lines to cut.", working: "8 - 4 = 4", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 4",
            commonErrors: ["Exceeding quotation limits — trim to the best lines."],
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
