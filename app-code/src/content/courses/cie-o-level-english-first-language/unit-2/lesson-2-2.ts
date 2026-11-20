import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "cie-ol-fl-lesson-2-2",
  code: "2-2",
  title: "Poetry interpretation",
  goal: "I CAN interpret meaning and themes in poems.",
  standards: ["1119 Reading: poetry interpretation"],
  vocabulary: [
    { term: "Literal meaning", definition: "Surface meaning of poem." },
    { term: "Deeper meaning", definition: "Underlying themes and messages." },
    { term: "Speaker", definition: "Voice/narrator of poem." },
    { term: "Ambiguity", definition: "Multiple possible interpretations." },
    { term: "Tone", definition: "Speaker's attitude toward subject." },
    { term: "Mood", definition: "Feeling created for reader." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-poetry-interpretation",
      title: "Interpreting poetic meaning",
      skill: "Extract literal and deeper meanings from poems.",
      lesson: {
        sections: [
          {
            heading: "Literal vs deeper",
            body: "Literal: what poem describes/says. Deeper: themes, symbolism, speaker's message — what it suggests about life, human nature, society.",
          },
          {
            heading: "Identifying themes",
            body: "Look for: recurring images, key symbols, emotional patterns, structural shifts (volta), title significance.",
          },
          {
            heading: "Speaker vs poet",
            body: "Speaker is the voice in poem — may differ from poet. Consider speaker's perspective, reliability, attitude.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "Literal→deeper meaning; themes via imagery/symbols; speaker≠poet." },
        ],
        workedExample: {
          problem: "Poem describes autumn leaves falling — deeper meaning?",
          solution: "Literal: seasonal description. Deeper: mortality, cycles of life, time passing — depends on context and tone.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pi2-q1",
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
              { kind: "definition", name: "Literal meaning", statement: "Surface meaning — what poem describes." },
            ],
            steps: [
              { reasoning: "Literal = surface.", working: "surface", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Surface meaning",
            commonErrors: ["Choosing (b) — that's deeper meaning."],
          },
        },
        {
          id: "cie-ol-fl-pi2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How to identify themes in a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Theme identification", statement: "Recurring images, symbols, emotional patterns, title." },
            ],
            steps: [
              { reasoning: "Look for recurring patterns.", working: "patterns", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Recurring images, symbols, emotional patterns, title.",
            commonErrors: ["Guessing theme without evidence."],
          },
        },
        {
          id: "cie-ol-fl-pi2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does ambiguity affect poem interpretation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ambiguity", statement: "Multiple interpretations possible — reader brings own perspective." },
            ],
            steps: [
              { reasoning: "Ambiguity allows multiple readings.", working: "multiple", marks: 1, markCode: "AO2" },
              { reasoning: "Reader's experience shapes interpretation.", working: "experience", marks: 1, markCode: "AO2" },
              { reasoning: "Skilled readers justify interpretations with evidence.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Multiple readings+reader perspective+evidence justification.",
            commonErrors: ["Thinking there's only one 'right' answer."],
          },
        },
        {
          id: "cie-ol-fl-pi2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Poetry interpretation.",
          parts: [
            { label: "a", prompt: "Literal vs deeper meaning?", marks: 2 },
            { label: "b", prompt: "How to identify themes?", marks: 2 },
            { label: "c", prompt: "Ambiguity effect?", marks: 2 },
            { label: "d", prompt: "Speaker vs poet?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretation", statement: "Literal/deeper, themes, ambiguity, speaker." },
            ],
            steps: [
              { part: "a", reasoning: "Literal=surface; deeper=themes/messages.", working: "meanings", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Recurring images, symbols, patterns, title.", working: "themes", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Multiple readings, reader perspective.", working: "ambiguity", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Speaker=voice in poem; poet=author — may differ.", working: "speaker", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Consider speaker's reliability/attitude.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) surface vs themes (b) patterns+symbols+title (c) multiple readings (d) speaker≠poet",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Distinction clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ignoring speaker's perspective."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-tone-mood",
      title: "Tone and mood in poetry",
      skill: "Analyse speaker's attitude and reader's emotional response.",
      lesson: {
        sections: [
          {
            heading: "Tone",
            body: "Speaker's attitude toward subject — joyful, bitter, nostalgic, ironic, reverent. Revealed through word choice, imagery, punctuation.",
          },
          {
            heading: "Mood",
            body: "Feeling created for reader — may differ from tone. Dark imagery creates ominous mood even if speaker is calm.",
          },
          {
            heading: "Identifying tone",
            body: "Look for connotations, imagery associations, sentence types, punctuation (!, ?, ...), shifts in tone.",
          },
        ],
        keyFormulas: [
          { name: "Tone vs mood", statement: "Tone=speaker's attitude; mood=reader's feeling." },
        ],
        workedExample: {
          problem: "Poem uses 'cruel winter', 'bitter cold' — tone?",
          solution: "Negative connotations suggest speaker's sadness/despair or critical attitude toward winter.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-tm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'tone' in poetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaker's attitude" },
              { id: "b", text: "Reader's feeling" },
              { id: "c", text: "Rhyme pattern" },
              { id: "d", text: "Poem length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "Speaker's attitude toward subject." },
            ],
            steps: [
              { reasoning: "Tone = speaker's attitude.", working: "attitude", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Speaker's attitude",
            commonErrors: ["Choosing (b) — that's mood."],
          },
        },
        {
          id: "cie-ol-fl-tm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does tone differ from mood?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone vs mood", statement: "Tone=speaker's attitude; mood=reader's emotional response." },
            ],
            steps: [
              { reasoning: "Tone is speaker's; mood is reader's.", working: "distinction", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tone=speaker's attitude; mood=reader's feeling.",
            commonErrors: ["Using terms interchangeably."],
          },
        },
        {
          id: "cie-ol-fl-tm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to identify tone in a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone identification", statement: "Word choice, imagery, punctuation, connotations." },
            ],
            steps: [
              { reasoning: "Word choice — positive/negative connotations.", working: "words", marks: 1, markCode: "AO2" },
              { reasoning: "Imagery associations suggest attitude.", working: "imagery", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation reveals emotion (!, ?, ...).", working: "punctuation", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice+imagery+punctuation+connotations.",
            commonErrors: ["Guessing tone without textual evidence."],
          },
        },
        {
          id: "cie-ol-fl-tm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Tone and mood analysis.",
          parts: [
            { label: "a", prompt: "Define tone.", marks: 1 },
            { label: "b", prompt: "Tone vs mood?", marks: 2 },
            { label: "c", prompt: "How to identify tone?", marks: 3 },
            { label: "d", prompt: "Tone types?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone/mood", statement: "Tone, mood, identification, types." },
            ],
            steps: [
              { part: "a", reasoning: "Speaker's attitude.", working: "tone", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Tone=speaker's; mood=reader's.", working: "distinction", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word choice, imagery, punctuation, connotations.", working: "identify", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple methods.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Joyful, bitter, nostalgic, ironic, reverent, ominous.", working: "types", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) speaker's attitude (b) tone=speaker/mood=reader (c) words+imagery+punctuation (d) joyful/bitter/ironic",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Methods clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Types listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Confusing tone and mood."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-poetry-structure-analysis",
      title: "Structural analysis in poetry",
      skill: "Analyse how poem structure creates meaning.",
      lesson: {
        sections: [
          {
            heading: "Stanza function",
            body: "Each stanza often develops one idea — shifts between stanzas signal progression or change.",
          },
          {
            heading: "Line breaks and pacing",
            body: "End-stopped lines create pauses; enjambment creates flow. Line length affects emphasis and rhythm.",
          },
          {
            heading: "Volta and turns",
            body: "Shift in argument/tone — often at stanza break or marked by 'but', 'yet', 'however'. Dramatic effect.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "Stanzas+line breaks+volta=create progression and emphasis." },
        ],
        workedExample: {
          problem: "Poem's final stanza shifts from hope to despair.",
          solution: "Structural volta — turn signals changed meaning; final lines carry weight after buildup.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-psa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'volta' in poetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Turn/shift in argument" },
              { id: "b", text: "Rhyme scheme" },
              { id: "c", text: "Stanza break" },
              { id: "d", text: "Poem title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volta", statement: "Turn or shift in poem's argument/tone." },
            ],
            steps: [
              { reasoning: "Volta = turn.", working: "turn", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Turn/shift in argument",
            commonErrors: ["Choosing (c) — that's stanza break."],
          },
        },
        {
          id: "cie-ol-fl-psa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do stanza breaks affect meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Stanza breaks", statement: "Signal shifts — new idea, change in tone, emphasis." },
            ],
            steps: [
              { reasoning: "Breaks signal shifts/pauses.", working: "shifts", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Signal shifts — new idea, tone change, emphasis.",
            commonErrors: ["Treating stanzas as just formatting."],
          },
        },
        {
          id: "cie-ol-fl-psa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does line length affect poetic effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Line length", statement: "Short=emphasis/urgency; long=flow/complexity; variation creates rhythm." },
            ],
            steps: [
              { reasoning: "Short lines create emphasis/punch.", working: "short", marks: 1, markCode: "AO2" },
              { reasoning: "Long lines create flow/complexity.", working: "long", marks: 1, markCode: "AO2" },
              { reasoning: "Variation prevents monotony.", working: "variation", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Short=emphasis; long=flow; variation creates rhythm.",
            commonErrors: ["Ignoring line length effects."],
          },
        },
        {
          id: "cie-ol-fl-psa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Structural analysis.",
          parts: [
            { label: "a", prompt: "Define volta.", marks: 1 },
            { label: "b", prompt: "Stanza break effects?", marks: 2 },
            { label: "c", prompt: "Line length effects?", marks: 3 },
            { label: "d", prompt: "How structure creates meaning?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure", statement: "Volta, stanza breaks, line length, meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Turn/shift in argument.", working: "volta", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Shifts, pauses, emphasis.", working: "breaks", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Short=emphasis, long=flow, variation=rhythm.", working: "length", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Structure guides reader through progression — creates emphasis, tension, resolution.", working: "meaning", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) turn (b) shifts+pauses (c) short/long/variation (d) progression+emphasis+tension",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Meaning clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Analysing content without structure."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-poetry-notes-2",
      title: "Poetry interpretation — revision notes",
      summary: "Meaning, tone, mood, structure.",
      sections: [
        {
          heading: "Interpretation",
          body: "Literal→deeper meaning. Tone=speaker's attitude; mood=reader's feeling. Structure: stanza breaks, line length, volta create progression and emphasis.",
        },
      ],
    },
  ],
};
