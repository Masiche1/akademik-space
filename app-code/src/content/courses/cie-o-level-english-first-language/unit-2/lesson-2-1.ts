import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "cie-ol-fl-lesson-2-1",
  code: "2-1",
  title: "Poetry: form and structure",
  goal: "I CAN analyse poetic form, structure and sound.",
  standards: ["1119 Reading: poetry"],
  vocabulary: [
    { term: "Stanza", definition: "Group of lines in a poem." },
    { term: "Rhyme scheme", definition: "Pattern of rhymes — ABAB etc." },
    { term: "Meter", definition: "Rhythmic pattern of stressed/unstressed syllables." },
    { term: "Free verse", definition: "Poem without regular rhyme/meter." },
    { term: "Sonnet", definition: "14-line poem with fixed structure." },
    { term: "Volta", definition: "Turn/shift in a poem's argument." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-poetry-form",
      title: "Poetic form and structure",
      skill: "Analyse rhyme, meter, stanza and poetic forms.",
      lesson: {
        sections: [
          {
            heading: "Structure elements",
            body: "Stanzas, line length, rhyme scheme, meter — all shape meaning. Enjambment (running lines) vs end-stopped lines.",
          },
          {
            heading: "Traditional forms",
            body: "Sonnet (14 lines, often volta), ballad (narrative song), haiku (5-7-5), villanelle (repeating refrains).",
          },
          {
            heading: "Free verse",
            body: "No regular rhyme/meter — freedom allows organic expression but still uses rhythm, imagery, line breaks deliberately.",
          },
        ],
        keyFormulas: [
          { name: "Poetic form", statement: "Stanza+rhyme+meter+form=create structure and meaning." },
        ],
        workedExample: {
          problem: "Why might a poet use irregular line lengths?",
          solution: "To mirror natural speech, create emphasis on key lines, or reflect emotional chaos.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'enjambment'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence continues across lines" },
              { id: "b", text: "End of stanza" },
              { id: "c", text: "Rhyme pattern" },
              { id: "d", text: "Poem title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enjambment", statement: "Sentence continues without pause across line breaks." },
            ],
            steps: [
              { reasoning: "Enjambment = run-on lines.", working: "run-on", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sentence continues across lines",
            commonErrors: ["Choosing (b) — that's stanza break."],
          },
        },
        {
          id: "cie-ol-fl-pf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does rhyme scheme affect a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rhyme scheme", statement: "Creates musicality, links ideas, signals structure." },
            ],
            steps: [
              { reasoning: "Creates musicality and links ideas.", working: "musicality", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Creates musicality, links ideas, signals structure.",
            commonErrors: ["Thinking rhyme is only decorative."],
          },
        },
        {
          id: "cie-ol-fl-pf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do poets use fixed forms like sonnets?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fixed forms", statement: "Constraints create focus; tradition carries meaning; volta provides structure." },
            ],
            steps: [
              { reasoning: "Constraints force concision and focus.", working: "constraints", marks: 1, markCode: "AO2" },
              { reasoning: "Tradition adds weight — sonnet expectations.", working: "tradition", marks: 1, markCode: "AO2" },
              { reasoning: "Volta provides dramatic turn/structure.", working: "volta", marks: 1, markCode: "AO2" },
              { reasoning: "Reasons explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Constraints+tradition+volta structure=create focused meaning.",
            commonErrors: ["Thinking forms are arbitrary."],
          },
        },
        {
          id: "cie-ol-fl-pf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Poetic form analysis.",
          parts: [
            { label: "a", prompt: "Define enjambment.", marks: 1 },
            { label: "b", prompt: "Rhyme scheme effects?", marks: 2 },
            { label: "c", prompt: "Why fixed forms?", marks: 3 },
            { label: "d", prompt: "Free verse characteristics?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poetic form", statement: "Enjambment, rhyme, fixed forms, free verse." },
            ],
            steps: [
              { part: "a", reasoning: "Sentence continues across lines.", working: "enjambment", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Musicality, links ideas, structure.", working: "rhyme", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Constraints, tradition, volta.", working: "forms", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple reasons.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "No regular rhyme/meter; deliberate rhythm, imagery, line breaks.", working: "free", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple features.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) run-on lines (b) musicality+links (c) constraints+tradition+volta (d) no rhyme/meter",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Reasons clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Features clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Free verse = no craft — still deliberate."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-poetry-sound",
      title: "Sound devices in poetry",
      skill: "Identify and analyse sound techniques.",
      lesson: {
        sections: [
          {
            heading: "Alliteration and assonance",
            body: "Alliteration: repeated initial consonants ('slippery snake'). Assonance: repeated vowel sounds ('rain in Spain').",
          },
          {
            heading: "Onomatopoeia and consonance",
            body: "Onomatopoeia: words sounding like their meaning ('buzz', 'crash'). Consonance: repeated consonant sounds within words.",
          },
          {
            heading: "Effect of sound",
            body: "Sound creates music, mood, emphasis. Harsh sounds (k, t) for anger; soft sounds (s, l) for calm.",
          },
        ],
        keyFormulas: [
          { name: "Sound devices", statement: "Alliteration+assonance+onomatopoeia+consonance=create music/mood." },
        ],
        workedExample: {
          problem: "'The fair breeze blew' — technique?",
          solution: "Alliteration (f/b) + assonance (ee sound) — creates light, pleasant musicality.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'assonance'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated vowel sounds" },
              { id: "b", text: "Repeated initial consonants" },
              { id: "c", text: "Sound words" },
              { id: "d", text: "Rhyme scheme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Assonance", statement: "Repeated vowel sounds within words." },
            ],
            steps: [
              { reasoning: "Assonance = vowel sounds.", working: "vowel", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Repeated vowel sounds",
            commonErrors: ["Choosing (b) — that's alliteration."],
          },
        },
        {
          id: "cie-ol-fl-ps-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'onomatopoeia'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Onomatopoeia", statement: "Words that sound like their meaning." },
            ],
            steps: [
              { reasoning: "Word sounds like meaning.", working: "sounds", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Words sounding like their meaning — 'buzz', 'crash'.",
            commonErrors: ["Confusing with alliteration."],
          },
        },
        {
          id: "cie-ol-fl-ps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does sound create mood in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sound-mood", statement: "Harsh sounds=anger/tension; soft sounds=calm/peace." },
            ],
            steps: [
              { reasoning: "Harsh consonants (k,t,g) create tension.", working: "harsh", marks: 1, markCode: "AO2" },
              { reasoning: "Soft sounds (s,l,m) create calm.", working: "soft", marks: 1, markCode: "AO2" },
              { reasoning: "Rhythm/pacing affects mood.", working: "rhythm", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Harsh sounds=tension; soft sounds=calm; rhythm affects mood.",
            commonErrors: ["Identifying sound without linking to mood."],
          },
        },
        {
          id: "cie-ol-fl-ps-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Sound device analysis.",
          parts: [
            { label: "a", prompt: "Define assonance.", marks: 1 },
            { label: "b", prompt: "Define onomatopoeia.", marks: 1 },
            { label: "c", prompt: "How sound creates mood?", marks: 3 },
            { label: "d", prompt: "Name sound devices.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sound", statement: "Assonance, onomatopoeia, mood, devices." },
            ],
            steps: [
              { part: "a", reasoning: "Repeated vowel sounds.", working: "assonance", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Words sounding like meaning.", working: "onomatopoeia", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Harsh=tension, soft=calm, rhythm affects mood.", working: "mood", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Alliteration, assonance, onomatopoeia, consonance.", working: "devices", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "All four.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) vowel sounds (b) sound-meaning (c) harsh/soft/rhythm (d) alliteration/assonance/ono/consonance",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "All devices.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Some.", part: "d" },
            ],
            commonErrors: ["Confusing alliteration and assonance."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-poetry-imagery",
      title: "Imagery and symbolism in poetry",
      skill: "Analyse poetic imagery and deeper meaning.",
      lesson: {
        sections: [
          {
            heading: "Sensory imagery",
            body: "Visual, auditory, tactile, olfactory, gustatory — poems create vivid mental pictures through senses.",
          },
          {
            heading: "Figurative language",
            body: "Simile (like/as), metaphor (direct comparison), personification (human qualities), hyperbole (exaggeration).",
          },
          {
            heading: "Symbolism",
            body: "Recurring images carry meaning — dove=peace, rose=love, journey=self-discovery. Interpretation depends on context.",
          },
        ],
        keyFormulas: [
          { name: "Poetic imagery", statement: "Sensory+figurative+symbolic=create layered meaning." },
        ],
        workedExample: {
          problem: "'Hope is the thing with feathers' — technique?",
          solution: "Metaphor — hope compared to bird; personification — 'perches', 'sings'. Suggests hope is fragile but persistent.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'personification' in poetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Giving human qualities to non-human" },
              { id: "b", text: "Comparing with 'like'" },
              { id: "c", text: "Exaggeration" },
              { id: "d", text: "Sound repetition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personification", statement: "Non-human given human qualities/actions." },
            ],
            steps: [
              { reasoning: "Personification = human qualities.", working: "human", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Giving human qualities to non-human",
            commonErrors: ["Choosing (b) — that's simile."],
          },
        },
        {
          id: "cie-ol-fl-pi-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does metaphor differ from simile?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Metaphor vs simile", statement: "Metaphor=direct; simile=like/as comparison." },
            ],
            steps: [
              { reasoning: "Metaphor states directly; simile uses like/as.", working: "direct vs like", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Metaphor=direct comparison; simile=like/as.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "cie-ol-fl-pi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does imagery create meaning in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poetic imagery", statement: "Sensory images create emotional response and symbolic meaning." },
            ],
            steps: [
              { reasoning: "Sensory images create mental pictures.", working: "pictures", marks: 1, markCode: "AO2" },
              { reasoning: "Images carry emotional associations.", working: "emotional", marks: 1, markCode: "AO2" },
              { reasoning: "Recurring images become symbolic.", working: "symbolic", marks: 1, markCode: "AO2" },
              { reasoning: "Explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Pictures+emotional associations+symbolism=create meaning.",
            commonErrors: ["Describing images without analysing effect."],
          },
        },
        {
          id: "cie-ol-fl-pi-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Poetic imagery analysis.",
          parts: [
            { label: "a", prompt: "Define personification.", marks: 1 },
            { label: "b", prompt: "Metaphor vs simile?", marks: 2 },
            { label: "c", prompt: "How imagery creates meaning?", marks: 3 },
            { label: "d", prompt: "Name figurative devices.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Imagery", statement: "Personification, metaphor/simile, meaning, devices." },
            ],
            steps: [
              { part: "a", reasoning: "Human qualities to non-human.", working: "personification", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Metaphor=direct; simile=like/as.", working: "comparison", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Pictures, emotions, symbolism.", working: "imagery", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Simile, metaphor, personification, hyperbole.", working: "devices", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) human qualities (b) direct vs like (c) pictures+emotions+symbolism (d) figurative devices",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Meaning clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Devices listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Imagery without symbolic interpretation."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-poetry-notes-1",
      title: "Poetry — revision notes",
      summary: "Form, sound, imagery in poetry.",
      sections: [
        {
          heading: "Poetry",
          body: "Form: stanza, rhyme, meter, enjambment, volta, sonnet/free verse. Sound: alliteration, assonance, onomatopoeia. Imagery: sensory, figurative (simile/metaphor/personification), symbolic.",
        },
      ],
    },
  ],
};
