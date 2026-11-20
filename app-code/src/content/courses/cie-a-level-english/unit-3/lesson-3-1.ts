import type { Lesson } from "../../../types.ts";

export const lesson231: Lesson = {
  id: "cial-e-u3-lesson-3-1",
  code: "3-1",
  title: "Poetry: form, structure and rhythm",
  goal: "I CAN analyse how a poem's form, structure and rhythm create meaning and effect.",
  standards: ["9093: poetry analysis"],
  vocabulary: [
    {
      term: "Form",
      definition: "The type of poem: sonnet, ballad, free verse, haiku.",
    },
    {
      term: "Structure",
      definition: "How the poem is organised: stanzas, line lengths, volta.",
    },
    {
      term: "Volta",
      definition: "The 'turn' in a sonnet where argument or tone shifts.",
    },
    {
      term: "Rhyme scheme",
      definition: "Pattern of end rhymes: ABAB, ABBA, etc.",
    },
    {
      term: "Meter",
      definition: "Rhythmic pattern of stressed and unstressed syllables.",
    },
    {
      term: "Enjambment",
      definition: "Running a sentence across a line break without punctuation.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u3-poetry-form",
      title: "Poetic form and structure",
      skill: "Analyse how form and structure shape meaning in poetry.",
      lesson: {
        sections: [
          {
            heading: "Recognising form",
            body: "A sonnet has 14 lines with a volta; a ballad uses quatrains and narrative rhythm; free verse abandons regular meter and rhyme; a villanelle repeats refrains. Form carries meaning — a sonnet's volta signals a turn in argument.",
          },
          {
            heading: "Structure and meaning",
            body: "Stanza breaks mark shifts in focus or tone. Line length affects pace — short lines feel abrupt, long lines flow. Enjambment creates momentum; end-stopped lines create pauses. Punctuation placement controls breath and emphasis.",
          },
          {
            heading: "Rhyme and rhythm",
            body: "Rhyme scheme (ABAB, ABBA) creates musicality and unity. Perfect rhyme satisfies; slant rhyme (near rhyme) creates tension or unease. Meter — iambic pentameter etc. — establishes rhythm; variations break pattern for emphasis.",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry form",
            statement: "Form+structure+rhythm=meaning and effect.",
          },
        ],
        workedExample: {
          problem: "How does a sonnet's volta affect meaning?",
          solution:
            "The volta marks a shift in argument — from problem to resolution, or question to answer. It structures the poem's logical movement.",
        },
      },
      questions: [
        {
          id: "cial-e-u3-pf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'volta' in poetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The turn or shift in argument or tone" },
              { id: "b", text: "The first line" },
              { id: "c", text: "The rhyme scheme" },
              { id: "d", text: "The meter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Volta",
                statement: "The 'turn' where argument or tone shifts.",
              },
            ],
            steps: [
              { reasoning: "Volta = turn in poem.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Turn in argument/tone",
            commonErrors: ["Confusing with rhyme scheme."],
          },
        },
        {
          id: "cial-e-u3-pf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does enjambment affect the reading of a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Enjambment",
                statement:
                  "Running sentence across line break creates momentum and fluidity.",
              },
            ],
            steps: [
              {
                reasoning: "Creates flow — reader continues without pause.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Builds momentum or urgency.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Enjambment creates momentum by flowing across line breaks.",
            commonErrors: ["Confusing with end-stopped lines."],
          },
        },
        {
          id: "cial-e-u3-pf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does rhyme scheme contribute to meaning in a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rhyme scheme",
                statement: "Rhyme creates unity, musicality and emphasis.",
              },
            ],
            steps: [
              {
                reasoning: "Rhyming lines create cohesion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rhyme can emphasise key words.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Slant rhyme creates tension or unease.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Rhyme creates unity and emphasis; slant rhyme adds tension.",
            commonErrors: ["Treating rhyme as decorative only."],
          },
        },
        {
          id: "cial-e-u3-pf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Poetic form and structure.",
          parts: [
            { label: "a", prompt: "Define volta.", marks: 1 },
            {
              label: "b",
              prompt: "How does enjambment affect reading?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does rhyme scheme create meaning?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Analyse how a sonnet's structure shapes its argument.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poetry form",
                statement: "Volta+enjambment+rhyme+sonnet analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Turn in argument/tone.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Creates momentum.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Flows across lines.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Rhyme creates cohesion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Emphasises key words.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "14 lines structure noted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Volta marks argument shift.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Octave/sestet division explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect on meaning clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) turn (b) momentum (c) unity+emphasis (d) sonnet structure analysis",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Enjambment explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Rhyme explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Sonnet analysis.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Describing form without linking to meaning."],
          },
        },
      ],
    },
    {
      id: "cial-e-u3-poetry-language",
      title: "Poetry: imagery, language and voice",
      skill: "Analyse imagery, figurative language and the poetic voice.",
      lesson: {
        sections: [
          {
            heading: "Imagery",
            body: "Poets use visual, auditory, tactile, olfactory and gustatory imagery. Sensory detail creates immersion. Metaphor and simile compare unlike things; personification gives human qualities to non-human; symbolism invests objects with meaning.",
          },
          {
            heading: "Figurative language",
            body: "Metaphor: direct comparison ('all the world's a stage'). Simile: explicit comparison with 'like' or 'as'. Alliteration: repeated consonants. Assonance: repeated vowels. Onomatopoeia: sound-imitating words.",
          },
          {
            heading: "Voice and perspective",
            body: "First person ('I') creates intimacy or subjectivity; third person creates distance or objectivity. The speaker is not necessarily the poet. Tone — ironic, melancholy, celebratory — shapes how readers receive the poem.",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry language",
            statement: "Imagery+figurative language+voice=tone and meaning.",
          },
        ],
        workedExample: {
          problem: "What does personification achieve in 'the wind whispered'?",
          solution:
            "Gives the wind human qualities — creates intimacy and suggests the wind is secretive or gentle.",
        },
      },
      questions: [
        {
          id: "cial-e-u3-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is personification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Giving human qualities to non-human things" },
              { id: "b", text: "Comparing with 'like'" },
              { id: "c", text: "Repeating sounds" },
              { id: "d", text: "Describing with senses" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personification",
                statement: "Human qualities attributed to non-human.",
              },
            ],
            steps: [
              {
                reasoning: "Personification = human attributes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Human qualities to non-human",
            commonErrors: ["Confusing with metaphor."],
          },
        },
        {
          id: "cial-e-u3-pl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does first-person voice affect a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Voice",
                statement: "First person creates intimacy and subjectivity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Creates intimacy — reader shares speaker's perspective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More subjective and personal.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "First person creates intimacy and subjectivity.",
            commonErrors: ["Confusing speaker with poet."],
          },
        },
        {
          id: "cial-e-u3-pl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does imagery create meaning in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery",
                statement:
                  "Sensory detail creates vivid mental pictures and emotional resonance.",
              },
            ],
            steps: [
              {
                reasoning: "Engages senses — sight, sound, touch etc.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creates vivid mental pictures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conveys emotion and atmosphere.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Imagery engages senses, creates vivid pictures and conveys emotion.",
            commonErrors: ["Listing devices without explaining effect."],
          },
        },
        {
          id: "cial-e-u3-pl-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Poetry: imagery and voice.",
          parts: [
            { label: "a", prompt: "Define personification.", marks: 1 },
            {
              label: "b",
              prompt: "How does first-person voice affect meaning?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does imagery create meaning?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Analyse the effect of imagery in a poem of your choice.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poetry language",
                statement: "Personification+voice+imagery+analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Human qualities to non-human.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Creates intimacy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "More subjective.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Engages senses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Creates vivid pictures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Conveys emotion.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Poem chosen and imagery identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to meaning clear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Analytical point made.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) personification (b) intimacy (c) senses+emotion (d) imagery analysis",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Voice explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Imagery explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Effective analysis.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Feature spotting without analysis."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u3-poetry-notes",
      title: "Poetry analysis — revision notes",
      summary:
        "Form, structure, rhythm, imagery, figurative language and voice in poetry.",
      sections: [
        {
          heading: "Form and structure",
          body: "Sonnet=volta; ballad=quatrains; free verse=no regular meter. Stanza breaks mark shifts. Enjambment creates flow; end-stopped lines create pauses.",
        },
        {
          heading: "Language and voice",
          body: "Imagery engages senses; metaphor/simile compare; personification humanises; alliteration/assonance create music. First person=intimacy; third person=distance.",
        },
        {
          heading: "Exam checklist",
          body: "Always link technique to effect and meaning. Consider form AND content. Distinguish speaker from poet.",
        },
      ],
    },
  ],
};
