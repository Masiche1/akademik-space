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
              { id: "c", text: "The meter" },
              { id: "d", text: "The rhyme scheme" },
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
        {
          id: "cial-e-u3-pf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the defining feature of a sonnet?",
          response: { type: "mcq", choices: [ { id: "a", text: "It must be a ballad" }, { id: "b", text: "It has fourteen lines and often a volta" }, { id: "c", text: "It has no stanzas" }, { id: "d", text: "It always has no rhyme" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Sonnet", statement: "Fourteen lines with a possible volta." }], steps: [{ reasoning: "Line count and turn define the sonnet form.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Fourteen lines and often a volta", commonErrors: ["Confusing sonnet with free verse."] },
        },
        {
          id: "cial-e-u3-pf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a volta signal?",
          response: { type: "mcq", choices: [ { id: "a", text: "A turn in argument or tone" }, { id: "b", text: "A change of poet" }, { id: "c", text: "The end of rhyme" }, { id: "d", text: "A stage direction" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Volta", statement: "A structural turn shifts argument or feeling." }], steps: [{ reasoning: "Volta marks a deliberate shift.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Turn in argument or tone", commonErrors: ["Treating the volta as decoration."] },
        },
        {
          id: "cial-e-u3-pf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature characterises a ballad?",
          response: { type: "mcq", choices: [ { id: "a", text: "Quatrains and narrative rhythm" }, { id: "b", text: "Only free verse" }, { id: "c", text: "Fourteen lines only" }, { id: "d", text: "No stanzas" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Ballad", statement: "Narrative quatrains with song-like rhythm." }], steps: [{ reasoning: "Ballads combine stanza form with storytelling.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Quatrains and narrative rhythm", commonErrors: ["Confusing ballad with sonnet."] },
        },
        {
          id: "cial-e-u3-pf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What effect does enjambment usually create?",
          response: { type: "mcq", choices: [ { id: "a", text: "Momentum across the line break" }, { id: "b", text: "Perfect rhyme" }, { id: "c", text: "A fixed metre" }, { id: "d", text: "A pause and closure" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Enjambment", statement: "Running syntax across lines creates flow and momentum." }], steps: [{ reasoning: "Enjambment delays closure.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Momentum across the break", commonErrors: ["Confusing enjambment with end-stopping."] },
        },
        {
          id: "cial-e-u3-pf-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might slant rhyme be used instead of perfect rhyme?",
          response: { type: "mcq", choices: [ { id: "a", text: "It creates tension or unease through near-miss sound" }, { id: "b", text: "It is easier to spell" }, { id: "c", text: "It guarantees a volta" }, { id: "d", text: "It removes all rhythm" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Slant rhyme", statement: "Near rhyme can unsettle or complicate musicality." }], steps: [{ reasoning: "Imperfect rhyme creates sonic tension.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Tension or unease", commonErrors: ["Treating slant rhyme as an error."] },
        },
        {
          id: "cial-e-u3-pf-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines does a conventional sonnet have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 14 }] },
          markscheme: { principles: [{ kind: "convention", name: "Sonnet length", statement: "Fourteen lines." }], steps: [{ reasoning: "A sonnet has fourteen lines.", marks: 1, markCode: "AO1" }], finalAnswer: "14", commonErrors: ["Confusing sonnet length with a stanza count."] },
        },
        {
          id: "cial-e-u3-pf-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the rhyme scheme ABAB, how many lines are there?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "convention", name: "Rhyme scheme", statement: "Each letter marks a line's rhyme sound." }], steps: [{ reasoning: "ABAB has four line positions.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Counting rhyme sounds instead of lines."] },
        },
        {
          id: "cial-e-u3-pf-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In ABAB, how many different end-rhyme sounds are used?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "convention", name: "Rhyme sounds", statement: "A and B are two rhyme sounds." }], steps: [{ reasoning: "ABAB alternates two sounds.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Counting four separate rhymes."] },
        },
        {
          id: "cial-e-u3-pf-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many poetic forms are named in the lesson body: sonnet, ballad, free verse and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Poetic forms", statement: "Sonnet, ballad, free verse and villanelle." }], steps: [{ reasoning: "Four forms are named.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Including haiku from the vocabulary but not the lesson body."] },
        },
        {
          id: "cial-e-u3-pf-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how a volta structures a sonnet's meaning.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Volta function", statement: "The turn separates setup from development or resolution." }], steps: [{ reasoning: "A strong answer links the volta to logical movement, such as problem to answer or question to resolution.", marks: 2, markCode: "AO2" }], finalAnswer: "The volta marks a shift that organises the poem's argument or emotional movement.", commonErrors: ["Identifying the volta without explaining its effect."] },
        },
        {
          id: "cial-e-u3-pf-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the effects of enjambment and end-stopped lines.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "Line endings", statement: "Enjambment flows; end-stopping pauses." }], steps: [{ reasoning: "A strong answer contrasts momentum and breath control with closure and emphasis.", marks: 2, markCode: "AO2" }], finalAnswer: "Enjambment creates flow and momentum; end-stopped lines create pauses, weight and closure.", commonErrors: ["Describing both as the same pause."] },
        },
        {
          id: "cial-e-u3-pf-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate why form should be analysed as meaningful, not decorative.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Form as meaning", statement: "Structural choices shape argument, pace and feeling." }], steps: [{ reasoning: "A strong answer shows how line length, stanza breaks, rhyme and volta enact the poem's subject.", marks: 2, markCode: "AO3" }], finalAnswer: "Form is meaningful because choices of line, stanza, rhyme and turn directly shape pace, emphasis and interpretation.", commonErrors: ["Labelling form without linking it to effect."] },
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
              { id: "a", text: "Comparing with 'like'" },
              { id: "b", text: "Giving human qualities to non-human things" },
              { id: "c", text: "Repeating sounds" },
              { id: "d", text: "Describing with senses" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-e-u3-pl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What distinguishes a simile from a metaphor?",
          response: { type: "mcq", choices: [ { id: "a", text: "A metaphor gives human qualities" }, { id: "b", text: "A metaphor always rhymes" }, { id: "c", text: "A simile uses 'like' or 'as'" }, { id: "d", text: "A simile is only in prose" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Simile", statement: "Explicit comparison using like/as." }], steps: [{ reasoning: "Simile marks comparison openly.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Uses 'like' or 'as'", commonErrors: ["Confusing simile with metaphor."] },
        },
        {
          id: "cial-e-u3-pl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does onomatopoeia do?",
          response: { type: "mcq", choices: [ { id: "a", text: "Marks a volta" }, { id: "b", text: "Uses words that imitate sounds" }, { id: "c", text: "Compares two unlike things" }, { id: "d", text: "Repeats vowels only" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Onomatopoeia", statement: "Sound-imitating words create auditory effect." }], steps: [{ reasoning: "Onomatopoeia makes language echo sound.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Implies sound through words", commonErrors: ["Confusing onomatopoeia with assonance."] },
        },
        {
          id: "cial-e-u3-pl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is the speaker not always the poet?",
          response: { type: "mcq", choices: [ { id: "a", text: "The voice may be constructed, ironic or fictional" }, { id: "b", text: "It makes analysis unnecessary" }, { id: "c", text: "Speakers cannot have feelings" }, { id: "d", text: "Poets never use 'I'" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Speaker vs poet", statement: "The poetic voice is a crafted persona." }], steps: [{ reasoning: "The 'I' is a literary construct, not autobiography by default.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** The voice may be constructed", commonErrors: ["Assuming first person equals the poet."] },
        },
        {
          id: "cial-e-u3-pl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which device repeats initial consonant sounds?",
          response: { type: "mcq", choices: [ { id: "a", text: "Alliteration" }, { id: "b", text: "Metaphor" }, { id: "c", text: "Assonance" }, { id: "d", text: "Volta" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Alliteration", statement: "Repeated consonants create sonic pattern." }], steps: [{ reasoning: "Alliteration repeats consonant sounds.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Alliteration", commonErrors: ["Confusing with assonance."] },
        },
        {
          id: "cial-e-u3-pl-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What effect can first-person voice create?",
          response: { type: "mcq", choices: [ { id: "a", text: "Automatic irony" }, { id: "b", text: "Objective distance only" }, { id: "c", text: "No emotional effect" }, { id: "d", text: "Intimacy and subjectivity" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "First-person voice", statement: "Direct subjectivity creates closeness." }], steps: [{ reasoning: "First person gives access to a personal perspective.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Intimacy and subjectivity", commonErrors: ["Treating voice as neutral."] },
        },
        {
          id: "cial-e-u3-pl-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many senses are used in poetic imagery: visual, auditory, tactile, olfactory and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Imagery senses", statement: "Sight, sound, touch, smell and taste." }], steps: [{ reasoning: "Five sensory modes are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "5", commonErrors: ["Focusing only on visual imagery."] },
        },
        {
          id: "cial-e-u3-pl-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many figurative devices are named across the lesson: metaphor, simile, personification and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Figurative devices", statement: "Metaphor, simile and personification." }], steps: [{ reasoning: "Three core figurative comparisons are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Including sound devices as figurative comparisons."] },
        },
        {
          id: "cial-e-u3-pl-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sound-pattern devices are highlighted: alliteration, assonance and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Sound devices", statement: "Alliteration, assonance and onomatopoeia." }], steps: [{ reasoning: "Three sound devices are named.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Confusing alliteration with assonance."] },
        },
        {
          id: "cial-e-u3-pl-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many broad voice types are contrasted: first person and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Poetic voice", statement: "First person intimacy; third person distance." }], steps: [{ reasoning: "Two broad voice types are contrasted.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Assuming voice equals poet biography."] },
        },
        {
          id: "cial-e-u3-pl-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how sensory imagery creates immersion in poetry.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sensory imagery", statement: "Engaging multiple senses makes the poem felt." }], steps: [{ reasoning: "A strong answer explains that concrete sensory detail makes the reader experience rather than merely observe.", marks: 2, markCode: "AO2" }], finalAnswer: "Sensory imagery immerses the reader by activating sight, sound, touch, smell or taste, making the poem vivid.", commonErrors: ["Listing images without explaining effect."] },
        },
        {
          id: "cial-e-u3-pl-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Distinguish between the speaker and the poet in analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Speaker vs poet", statement: "The voice is constructed and may be ironic or fictional." }], steps: [{ reasoning: "A strong answer treats the speaker as a persona and avoids assuming autobiography.", marks: 2, markCode: "AO3" }], finalAnswer: "The speaker is the poem's constructed voice; the poet is the creator, and the two should not be conflated.", commonErrors: ["Reading every first-person poem as autobiography."] },
        },
        {
          id: "cial-e-u3-pl-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Analyse how personification can shape meaning.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Personification", statement: "Human qualities create intimacy or suggest agency." }], steps: [{ reasoning: "A strong answer links human attributes to effects such as gentleness, menace or secretiveness.", marks: 2, markCode: "AO2" }], finalAnswer: "Personification gives non-human things human behaviour, creating intimacy and suggesting attitudes or agency.", commonErrors: ["Identifying personification without explaining effect."] },
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
