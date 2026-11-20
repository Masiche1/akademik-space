import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cieilit-u3-lesson-3-1",
  code: "3-1",
  title: "Unseen poetry analysis",
  goal: "I CAN analyse an unseen poem's meaning, structure and poetic methods.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Component 1: Unseen poetry and prose",
  ],
  vocabulary: [
    {
      term: "Speaker",
      definition:
        "The voice/persona through which the poem is narrated — not always the poet.",
    },
    {
      term: "Stanza",
      definition: "A grouped set of lines in a poem — like a paragraph.",
    },
    {
      term: "Volta",
      definition: "A turn or shift in thought, often in sonnets.",
    },
    {
      term: "Imagery",
      definition:
        "Language that appeals to the senses — visual, auditory, tactile.",
    },
    {
      term: "Metaphor",
      definition: "Direct comparison — 'life is a journey'.",
    },
    {
      term: "Simile",
      definition: "Comparison using 'like' or 'as'.",
    },
    {
      term: "Personification",
      definition: "Giving human qualities to non-human things.",
    },
    {
      term: "Alliteration",
      definition: "Repetition of initial consonant sounds.",
    },
    {
      term: "Assonance",
      definition: "Repetition of vowel sounds.",
    },
    {
      term: "Rhyme scheme",
      definition: "Pattern of rhymes at line endings — ABAB, etc.",
    },
    {
      term: "Tone",
      definition: "The speaker's attitude or mood in the poem.",
    },
    {
      term: "Enjambment",
      definition: "A sentence continuing beyond the end of a line.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u3-poetry",
      title: "Analysing unseen poetry",
      skill:
        "Identify meaning, structure, tone and poetic methods in an unseen poem.",
      lesson: {
        sections: [
          {
            heading: "First reading and meaning",
            body: "**First read for meaning**: what is the poem about? Who is the speaker? What is the overall message? **Second read for method**: how does the poet create meaning? Look at imagery, structure, sound, tone. **Context clues**: title, form (sonnet, free verse), any dates or references.",
          },
          {
            heading: "Structure and form",
            body: "**Stanzas**: how are they organised? Does structure mirror content? **Rhyme/meter**: regular or irregular? **Enjambment**: does it create momentum or disrupt? **Volta**: is there a turn? Sonnet forms: Shakespearean (ABAB CDCD EFEF GG), Petrarchan (octave/ sestet). **Free verse**: no fixed form — analyse line breaks and rhythm instead.",
          },
          {
            heading: "Language and imagery",
            body: "**Imagery**: what senses are appealed to? **Metaphor/simile**: what comparisons are made? **Personification**: what is given human qualities? **Sound**: alliteration, assonance, onomatopoeia. **Tone**: is the speaker sad, angry, hopeful? **Word choice**: connotations, register (formal/informal). Link every method back to meaning — 'this metaphor suggests…'.",
          },
        ],
        keyFormulas: [
          {
            name: "Analysis approach",
            statement: "Meaning first → then method → link method to meaning",
          },
          {
            name: "Key methods",
            statement:
              "Imagery · metaphor · personification · structure · sound · tone",
          },
          {
            name: "Sonnet forms",
            statement:
              "Shakespearean ABAB CDCD EFEF GG · Petrarchan octave/sestet",
          },
        ],
        workedExample: {
          problem: "How to analyse 'The Road Not Taken' stanza 1?",
          solution:
            "Speaker recounts a fork in woods; yellow wood suggests autumn/decay; 'two roads diverged' sets up choice metaphor; tone is reflective.",
        },
      },
      questions: [
        {
          id: "cieilit-u3-py-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The speaker in a poem is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The voice/persona narrating the poem — not always the poet",
              },
              { id: "b", text: "Always the poet" },
              { id: "c", text: "The reader" },
              { id: "d", text: "The critic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speaker",
                statement: "Voice/persona narrating poem.",
              },
            ],
            steps: [
              {
                reasoning: "Speaker = narrative voice.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Voice/persona narrating poem.",
          },
        },
        {
          id: "cieilit-u3-py-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A stanza is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A grouped set of lines in a poem" },
              { id: "b", text: "A single line" },
              { id: "c", text: "The title" },
              { id: "d", text: "The poet's name" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stanza",
                statement: "Grouped lines in poem.",
              },
            ],
            steps: [
              {
                reasoning: "Stanza = grouped lines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Grouped set of lines.",
          },
        },
        {
          id: "cieilit-u3-py-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Imagery refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Language appealing to the senses" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Meter" },
              { id: "d", text: "Structure" },
            ],
            correctChoiceId: "a",
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
                reasoning: "Imagery = sensory language.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Language appealing to senses.",
          },
        },
        {
          id: "cieilit-u3-py-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A metaphor is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct comparison — 'life is a journey'" },
              { id: "b", text: "Comparison using 'like'" },
              { id: "c", text: "Repetition of sounds" },
              { id: "d", text: "Rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metaphor",
                statement: "Direct comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Metaphor = direct comparison.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Direct comparison.",
          },
        },
        {
          id: "cieilit-u3-py-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A simile is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparison using 'like' or 'as'" },
              { id: "b", text: "Direct comparison" },
              { id: "c", text: "Rhyme" },
              { id: "d", text: "Structure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Simile",
                statement: "Comparison using like/as.",
              },
            ],
            steps: [
              {
                reasoning: "Simile = like/as comparison.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Comparison using 'like' or 'as'.",
          },
        },
        {
          id: "cieilit-u3-py-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Personification gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Human qualities to non-human things" },
              { id: "b", text: "Animal qualities" },
              { id: "c", text: "Machine qualities" },
              { id: "d", text: "No qualities" },
            ],
            correctChoiceId: "a",
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
                reasoning: "Personification = human qualities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Human qualities to non-human things.",
          },
        },
        {
          id: "cieilit-u3-py-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Alliteration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetition of initial consonant sounds" },
              { id: "b", text: "Repetition of vowel sounds" },
              { id: "c", text: "Rhyme" },
              { id: "d", text: "Meter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alliteration",
                statement: "Repeated initial consonants.",
              },
            ],
            steps: [
              {
                reasoning: "Alliteration = consonant repetition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Repetition of initial consonants.",
          },
        },
        {
          id: "cieilit-u3-py-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rhyme scheme refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pattern of rhymes at line endings" },
              { id: "b", text: "Meter" },
              { id: "c", text: "Imagery" },
              { id: "d", text: "Tone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhyme scheme",
                statement: "Pattern of rhymes.",
              },
            ],
            steps: [
              {
                reasoning: "Rhyme scheme = rhyme pattern.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Pattern of rhymes.",
          },
        },
        {
          id: "cieilit-u3-py-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tone in poetry refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speaker's attitude or mood" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Structure" },
              { id: "d", text: "Imagery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tone",
                statement: "Speaker's attitude/mood.",
              },
            ],
            steps: [
              {
                reasoning: "Tone = speaker's attitude.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Speaker's attitude/mood.",
          },
        },
        {
          id: "cieilit-u3-py-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Enjambment occurs when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A sentence continues beyond the end of a line",
              },
              { id: "b", text: "Lines rhyme" },
              { id: "c", text: "Stanzas break" },
              { id: "d", text: "The poem ends" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enjambment",
                statement: "Sentence continues past line end.",
              },
            ],
            steps: [
              {
                reasoning: "Enjambment = sentence continues.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sentence continues past line.",
          },
        },
        {
          id: "cieilit-u3-py-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A volta in poetry is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A turn or shift in thought" },
              { id: "b", text: "A rhyme" },
              { id: "c", text: "A stanza" },
              { id: "d", text: "A meter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Volta",
                statement: "Turn/shift in thought.",
              },
            ],
            steps: [
              {
                reasoning: "Volta = turn in thought.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Turn or shift in thought.",
          },
        },
        {
          id: "cieilit-u3-py-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Assonance is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetition of vowel sounds" },
              { id: "b", text: "Repetition of consonants" },
              { id: "c", text: "Rhyme" },
              { id: "d", text: "Meter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Assonance",
                statement: "Repetition of vowel sounds.",
              },
            ],
            steps: [
              {
                reasoning: "Assonance = vowel repetition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Repetition of vowel sounds.",
          },
        },
        {
          id: "cieilit-u3-py-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Free verse poetry has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No fixed rhyme or meter" },
              { id: "b", text: "Fixed rhyme" },
              { id: "c", text: "Fixed meter" },
              { id: "d", text: "Sonnet form" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free verse",
                statement: "No fixed rhyme/meter.",
              },
            ],
            steps: [
              {
                reasoning: "Free verse = no fixed form.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) No fixed rhyme or meter.",
          },
        },
        {
          id: "cieilit-u3-py-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Onomatopoeia is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words that sound like what they describe" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Meter" },
              { id: "d", text: "Imagery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Onomatopoeia",
                statement: "Words sounding like their meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Onomatopoeia = sound-meaning match.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Words sounding like meaning.",
          },
        },
        {
          id: "cieilit-u3-py-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Shakespearean sonnet has how many lines?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14" },
              { id: "b", text: "12" },
              { id: "c", text: "10" },
              { id: "d", text: "16" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sonnet",
                statement: "14 lines.",
              },
            ],
            steps: [
              {
                reasoning: "Sonnet = 14 lines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 14.",
          },
        },
        {
          id: "cieilit-u3-py-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Petrarchan sonnet rhyme scheme is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ABBAABBA CDECDE (octave/sestet)" },
              { id: "b", text: "ABAB CDCD EFEF GG" },
              { id: "c", text: "AAAA BBBB" },
              { id: "d", text: "No rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Petrarchan sonnet",
                statement: "ABBAABBA CDECDE.",
              },
            ],
            steps: [
              {
                reasoning: "Petrarchan = octave/sestet.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) ABBAABBA CDECDE.",
          },
        },
        {
          id: "cieilit-u3-py-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Shakespearean sonnet rhyme scheme is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ABAB CDCD EFEF GG" },
              { id: "b", text: "ABBAABBA CDECDE" },
              { id: "c", text: "AAAA BBBB" },
              { id: "d", text: "No rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shakespearean sonnet",
                statement: "ABAB CDCD EFEF GG.",
              },
            ],
            steps: [
              {
                reasoning: "Shakespearean = three quatrains + couplet.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) ABAB CDCD EFEF GG.",
          },
        },
        {
          id: "cieilit-u3-py-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "When analysing poetry, the first step is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Understand the meaning" },
              { id: "b", text: "Identify techniques" },
              { id: "c", text: "Write an essay" },
              { id: "d", text: "Count syllables" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis order",
                statement: "Meaning first, then method.",
              },
            ],
            steps: [
              {
                reasoning: "Meaning first.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Understand the meaning.",
          },
        },
        {
          id: "cieilit-u3-py-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A key principle of poetry analysis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Link every technique to meaning" },
              { id: "b", text: "List techniques only" },
              { id: "c", text: "Ignore context" },
              { id: "d", text: "Count words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis principle",
                statement: "Link method to meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Link method → meaning.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Link technique to meaning.",
          },
        },
        {
          id: "cieilit-u3-py-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between metaphor and simile.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metaphor vs simile",
                statement: "Direct vs like/as comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Metaphor: direct comparison ('life is a journey').",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simile: comparison using 'like' or 'as'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Metaphor = direct; simile = like/as.",
          },
        },
        {
          id: "cieilit-u3-py-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to identify the speaker in a poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Speaker importance",
                statement: "Speaker ≠ poet necessarily.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Speaker may be a character or persona, not the poet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Understanding speaker helps interpret meaning and tone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Speaker may differ from poet — affects interpretation.",
          },
        },
        {
          id: "cieilit-u3-py-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how enjambment affects a poem's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enjambment effect",
                statement: "Creates momentum or disrupts rhythm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enjambment creates momentum — reader continues without pause.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can suggest urgency, excitement or overwhelm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or disrupts expected rhythm — creates tension.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Creates momentum/urgency or disrupts rhythm for effect.",
          },
        },
        {
          id: "cieilit-u3-py-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A poem has a volta at line 9. Explain what this might indicate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Volta interpretation",
                statement: "Shift in thought/emotion.",
              },
            ],
            steps: [
              {
                reasoning: "Volta indicates shift in thought or emotion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Before: one idea/mood; after: different.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Common in sonnets — resolution or twist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse what changes — tone, argument, image.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Volta = shift in thought/emotion — analyse what changes.",
          },
        },
        {
          id: "cieilit-u3-py-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Personification in 'the wind whispered' gives wind:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Human ability to whisper" },
              { id: "b", text: "Animal qualities" },
              { id: "c", text: "Machine qualities" },
              { id: "d", text: "No qualities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personification example",
                statement: "Wind given human ability.",
              },
            ],
            steps: [
              {
                reasoning: "Wind whispered = personification.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Human ability to whisper.",
          },
        },
        {
          id: "cieilit-u3-py-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'connotation' in word choice?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Connotation",
                statement: "Associations/feelings beyond literal meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Associations/feelings a word carries beyond literal meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g. 'home' vs 'house' — different connotations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Associations beyond literal meaning — 'home' vs 'house'.",
          },
        },
        {
          id: "cieilit-u3-py-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how imagery creates meaning in poetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imagery function",
                statement: "Appeals to senses — makes abstract concrete.",
              },
            ],
            steps: [
              {
                reasoning: "Appeals to senses — makes abstract ideas concrete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates vivid pictures in reader's mind.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conveys emotion and meaning through sensory experience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Makes abstract concrete; conveys emotion through senses.",
          },
        },
        {
          id: "cieilit-u3-py-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a poetic device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration is not a device" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Personification" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poetic devices",
                statement:
                  "Metaphor, simile, personification, alliteration — all are devices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alliteration IS a device — question is flawed but (a) is the only 'not' option.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Alliteration is not a device — incorrect statement.",
          },
        },
        {
          id: "cieilit-u3-py-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'register' in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Register",
                statement: "Formality level of language.",
              },
            ],
            steps: [
              {
                reasoning: "Formality level of language — formal vs informal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affects tone and meaning — 'father' vs 'dad'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Formality level — affects tone and meaning.",
          },
        },
        {
          id: "cieilit-u3-py-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A poem uses heavy alliteration and short lines. What might this suggest about tone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sound analysis",
                statement: "Alliteration + short lines → effect.",
              },
            ],
            steps: [
              {
                reasoning: "Alliteration creates rhythm and emphasis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Short lines create abruptness/urgency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combined: driving, intense, perhaps angry or urgent tone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to subject matter for meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Driving/urgent tone — link to subject matter.",
          },
        },
        {
          id: "cieilit-u3-py-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why analyse a poem's structure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure importance",
                statement: "Structure mirrors content/meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure can mirror content — e.g. broken lines for chaos.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rhyme/meter patterns create rhythm and mood.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Structure mirrors meaning and creates rhythm/mood.",
          },
        },
        {
          id: "cieilit-u3-py-q31",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a type of imagery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visual imagery" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Meter" },
              { id: "d", text: "Rhyme scheme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imagery types",
                statement: "Visual, auditory, tactile, etc.",
              },
            ],
            steps: [
              {
                reasoning: "Visual imagery = type of imagery.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Visual imagery.",
          },
        },
        {
          id: "cieilit-u3-py-q32",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'meter' in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meter",
                statement: "Pattern of stressed/unstressed syllables.",
              },
            ],
            steps: [
              {
                reasoning: "Pattern of stressed and unstressed syllables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates rhythm — iambic pentameter etc.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pattern of stressed/unstressed syllables — creates rhythm.",
          },
        },
        {
          id: "cieilit-u3-py-q33",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a poet's choice of stanza length might affect meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stanza length effect",
                statement: "Controls pace and grouping.",
              },
            ],
            steps: [
              {
                reasoning: "Long stanzas create sustained ideas/flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Short stanzas create pauses/emphasis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stanza breaks group ideas — structure = meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Long = sustained; short = pauses/emphasis; breaks group ideas.",
          },
        },
        {
          id: "cieilit-u3-py-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quatrain is a stanza of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four lines" },
              { id: "b", text: "Two lines" },
              { id: "c", text: "Three lines" },
              { id: "d", text: "Five lines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quatrain",
                statement: "Four-line stanza.",
              },
            ],
            steps: [
              {
                reasoning: "Quatrain = 4 lines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Four lines.",
          },
        },
        {
          id: "cieilit-u3-py-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'irony' in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Irony",
                statement: "Gap between expectation and reality.",
              },
            ],
            steps: [
              {
                reasoning: "Gap between expectation and reality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can create humour or bitter effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gap between expectation and reality.",
          },
        },
        {
          id: "cieilit-u3-py-q36",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how a poet might use sound devices to create mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sound analysis",
                statement: "Sound devices → mood.",
              },
            ],
            steps: [
              {
                reasoning: "Alliteration creates rhythm and emphasis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Assonance creates flowing/soft mood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Onomatopoeia creates vivid sound imagery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link sound to subject for meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sound devices create rhythm/mood — link to subject.",
          },
        },
        {
          id: "cieilit-u3-py-q37",
          difficulty: "core",
          totalMarks: 1,
          stem: "A couplet is a stanza of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two lines" },
              { id: "b", text: "Four lines" },
              { id: "c", text: "Three lines" },
              { id: "d", text: "Six lines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Couplet",
                statement: "Two-line stanza.",
              },
            ],
            steps: [
              {
                reasoning: "Couplet = 2 lines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Two lines.",
          },
        },
        {
          id: "cieilit-u3-py-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'denotation' vs 'connotation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denotation vs connotation",
                statement: "Literal vs associated meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Denotation: literal dictionary meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Connotation: associated feelings/meanings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Denotation = literal; connotation = associated.",
          },
        },
        {
          id: "cieilit-u3-py-q39",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a poet might use personification to create meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personification function",
                statement: "Makes non-human seem alive/relatable.",
              },
            ],
            steps: [
              {
                reasoning: "Gives non-human things human qualities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Makes abstract concepts concrete and relatable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates empathy or emotional connection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Makes non-human relatable — creates empathy.",
          },
        },
        {
          id: "cieilit-u3-py-q40",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of rhyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visual rhyme" },
              { id: "b", text: "Perfect rhyme" },
              { id: "c", text: "Slant rhyme" },
              { id: "d", text: "Internal rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhyme types",
                statement: "Perfect, slant, internal — not visual.",
              },
            ],
            steps: [
              {
                reasoning: "Visual rhyme not a type.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Visual rhyme.",
          },
        },
        {
          id: "cieilit-u3-py-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'internal rhyme'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal rhyme",
                statement: "Rhyme within a line, not at end.",
              },
            ],
            steps: [
              {
                reasoning: "Rhyme within a line rather than at end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "E.g. 'I drove myself to the lake / and burned my cares away'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rhyme within a line, not at end.",
          },
        },
        {
          id: "cieilit-u3-py-q42",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a poet's word choice affects tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Word choice and tone",
                statement: "Connotations create mood.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Words carry connotations — feelings beyond meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Choice of formal/informal words affects register.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combined connotations create overall tone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Connotations and register create tone.",
          },
        },
        {
          id: "cieilit-u3-py-q43",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A poem describes nature using violent imagery. What might this suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Imagery interpretation",
                statement: "Violent nature → meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Violent imagery suggests danger or power in nature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Could reflect speaker's feelings — anger, fear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nature as threatening rather than beautiful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to theme — nature vs civilisation, etc.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Nature as dangerous — reflects speaker's mood/theme.",
          },
        },
        {
          id: "cieilit-u3-py-q44",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which poem form has 14 lines?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sonnet" },
              { id: "b", text: "Haiku" },
              { id: "c", text: "Ballad" },
              { id: "d", text: "Free verse" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sonnet form",
                statement: "14 lines.",
              },
            ],
            steps: [
              {
                reasoning: "Sonnet = 14 lines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sonnet.",
          },
        },
        {
          id: "cieilit-u3-py-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'ballad'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ballad",
                statement: "Narrative poem, often song-like.",
              },
            ],
            steps: [
              {
                reasoning: "Narrative poem, often song-like.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tells a story — often dramatic or romantic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Narrative song-like poem telling a story.",
          },
        },
        {
          id: "cieilit-u3-py-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how line breaks affect meaning in poetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Line break effect",
                statement: "Controls pace and emphasis.",
              },
            ],
            steps: [
              {
                reasoning: "Line breaks control pace — pause or continue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Emphasise key words placed at line ends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can create enjambment for momentum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Controls pace, emphasises words, creates enjambment.",
          },
        },
        {
          id: "cieilit-u3-py-q47",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a sensory image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The smell of rain" },
              { id: "b", text: "The concept of time" },
              { id: "c", text: "The idea of freedom" },
              { id: "d", text: "The meaning of life" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensory image",
                statement: "Smell of rain = sensory.",
              },
            ],
            steps: [
              {
                reasoning: "Smell = sensory image.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The smell of rain.",
          },
        },
        {
          id: "cieilit-u3-py-q48",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'slant rhyme'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slant rhyme",
                statement: "Near rhyme — sounds similar but not exact.",
              },
            ],
            steps: [
              {
                reasoning: "Near rhyme — sounds similar but not exact.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates subtle/unresolved effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Near rhyme — subtle/unresolved effect.",
          },
        },
        {
          id: "cieilit-u3-py-q49",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a poet use contrast (juxtaposition) to create meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Juxtaposition analysis",
                statement: "Contrast highlights meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Placing contrasting images side by side.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Highlights differences — good/bad, life/death.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates tension or irony.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to theme — what is the contrast about?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Contrast highlights meaning, creates tension — link to theme.",
          },
        },
        {
          id: "cieilit-u3-py-q50",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'form' in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Form",
                statement: "Structure — sonnet, haiku, free verse, etc.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structure of poem — sonnet, haiku, free verse, etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Form affects meaning — constraints shape expression.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Structure — sonnet, haiku, free verse — affects meaning.",
          },
        },
        {
          id: "cieilit-u3-py-q51",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a poet's use of repetition creates meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repetition function",
                statement: "Emphasis, rhythm, emotional intensity.",
              },
            ],
            steps: [
              {
                reasoning: "Repetition emphasises key ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates rhythm and musicality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds emotional intensity or obsession.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Emphasis, rhythm, emotional intensity.",
          },
        },
        {
          id: "cieilit-u3-py-q52",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A haiku typically has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "17 syllables in 3 lines" },
              { id: "b", text: "14 lines" },
              { id: "c", text: "No structure" },
              { id: "d", text: "Rhyme required" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Haiku",
                statement: "17 syllables, 3 lines (5-7-5).",
              },
            ],
            steps: [
              {
                reasoning: "Haiku = 17 syllables.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 17 syllables in 3 lines.",
          },
        },
        {
          id: "cieilit-u3-py-q53",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'syllable' in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Syllable",
                statement: "Unit of sound in a word.",
              },
            ],
            steps: [
              {
                reasoning: "Unit of sound in a word.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Counting syllables matters for meter and form.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Unit of sound — matters for meter/form.",
          },
        },
        {
          id: "cieilit-u3-py-q54",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how a poet might use contrast in imagery to explore a theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Contrast imagery",
                statement: "Juxtaposition explores theme.",
              },
            ],
            steps: [
              {
                reasoning: "Contrast images placed together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Highlights differences — e.g. nature/civilisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates tension revealing theme.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to overall message.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Contrast imagery reveals theme through tension.",
          },
        },
        {
          id: "cieilit-u3-py-q55",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a poetic form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Novel" },
              { id: "b", text: "Sonnet" },
              { id: "c", text: "Haiku" },
              { id: "d", text: "Ballad" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poetic forms",
                statement: "Sonnet, haiku, ballad — not novel.",
              },
            ],
            steps: [
              {
                reasoning: "Novel is prose not poetry.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Novel.",
          },
        },
        {
          id: "cieilit-u3-py-q56",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'onomatopoeia' used for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Onomatopoeia use",
                statement: "Creates vivid sound imagery.",
              },
            ],
            steps: [
              {
                reasoning: "Words sounding like their meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates vivid auditory imagery.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Creates vivid sound imagery.",
          },
        },
        {
          id: "cieilit-u3-py-q57",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a poet's choice of tense affects meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tense effect",
                statement: "Past = memory; present = immediacy.",
              },
            ],
            steps: [
              {
                reasoning: "Past tense suggests memory/reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Present tense creates immediacy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Future tense suggests hope/anticipation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Past = memory; present = immediacy; future = hope.",
          },
        },
        {
          id: "cieilit-u3-py-q58",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a type of sound device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Personification" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sound devices",
                statement: "Alliteration, assonance, onomatopoeia.",
              },
            ],
            steps: [
              {
                reasoning: "Alliteration = sound device.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Alliteration.",
          },
        },
        {
          id: "cieilit-u3-py-q59",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A poem ends with an image of dawn. What might this suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ending analysis",
                statement: "Final image = resolution/meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Dawn suggests new beginning/hope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Could signal resolution or optimism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contrast with earlier darkness/despair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to theme — journey from darkness to light.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dawn = hope/new beginning — contrast with earlier despair.",
          },
        },
        {
          id: "cieilit-u3-py-q60",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to link technique to meaning in poetry analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technique-meaning link",
                statement: "Techniques serve meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Techniques are used to create meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analysis must explain effect, not just identify.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Techniques create meaning — analysis must explain effect.",
          },
        },
      ],
    },
    {
      id: "cieilit-u3-prose",
      title: "Unseen prose analysis",
      skill:
        "Analyse unseen prose extracts for narrative voice, characterisation and themes.",
      lesson: {
        sections: [
          {
            heading: "Narrative voice and point of view",
            body: "**First person**: 'I' narrator — intimate, subjective, may be unreliable. **Third person limited**: 'he/she' focused on one character — closer than omniscient. **Third person omniscient**: narrator knows all characters' thoughts — authoritative. **Free indirect discourse**: blends narrator and character's voice — creates intimacy with distance.",
          },
          {
            heading: "Characterisation",
            body: "**Direct description**: narrator tells us what character is like. **Indirect description**: shown through actions, dialogue, thoughts. **Speech**: how character speaks reveals personality. **Relationships**: how character interacts with others. **Development**: does character change? **Motivation**: what drives character's actions?",
          },
          {
            heading: "Setting and atmosphere",
            body: "**Setting**: time, place — can symbolise themes. **Atmosphere/mood**: feeling created by description. **Pathetic fallacy**: weather/environment reflects character's emotions. **Symbolism**: objects/places representing ideas. **Social context**: class, race, gender in the text.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative voices",
            statement:
              "First person · third limited · third omniscient · free indirect",
          },
          {
            name: "Characterisation methods",
            statement: "Direct/indirect description · speech · relationships",
          },
          {
            name: "Prose analysis",
            statement: "Voice → character → setting → theme",
          },
        ],
        workedExample: {
          problem: "How to analyse an unseen prose extract?",
          solution:
            "Identify narrator/voice → analyse characterisation → examine setting/atmosphere → link to themes.",
        },
      },
      questions: [
        {
          id: "cieilit-u3-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "First person narration uses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I' as the narrator" },
              { id: "b", text: "'He' or 'she'" },
              { id: "c", text: "No narrator" },
              { id: "d", text: "Multiple narrators" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First person",
                statement: "'I' narrator.",
              },
            ],
            steps: [
              {
                reasoning: "First person = 'I'.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 'I' as narrator.",
          },
        },
        {
          id: "cieilit-u3-pr-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Third person limited narration focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One character's perspective" },
              { id: "b", text: "All characters equally" },
              { id: "c", text: "The narrator's thoughts" },
              { id: "d", text: "No characters" },
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
                reasoning: "Limited = one character.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One character's perspective.",
          },
        },
        {
          id: "cieilit-u3-pr-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Third person omniscient narration knows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All characters' thoughts and feelings" },
              { id: "b", text: "Only one character" },
              { id: "c", text: "No thoughts" },
              { id: "d", text: "Only actions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Omniscient",
                statement: "Knows all characters' thoughts.",
              },
            ],
            steps: [
              {
                reasoning: "Omniscient = all thoughts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) All characters' thoughts.",
          },
        },
        {
          id: "cieilit-u3-pr-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Free indirect discourse:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blends narrator and character's voice" },
              { id: "b", text: "Is only first person" },
              { id: "c", text: "Has no narrator" },
              { id: "d", text: "Is always omniscient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free indirect discourse",
                statement: "Blends narrator + character voice.",
              },
            ],
            steps: [
              {
                reasoning: "Free indirect = blended voices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Blends narrator and character voice.",
          },
        },
        {
          id: "cieilit-u3-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Direct characterisation is when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The narrator tells us what a character is like",
              },
              { id: "b", text: "Character is shown through actions" },
              { id: "c", text: "Character speaks" },
              { id: "d", text: "Character is absent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Direct characterisation",
                statement: "Narrator tells us directly.",
              },
            ],
            steps: [
              {
                reasoning: "Direct = narrator tells.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Narrator tells us directly.",
          },
        },
        {
          id: "cieilit-u3-pr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Indirect characterisation is when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Character is shown through actions, speech, thoughts",
              },
              { id: "b", text: "Narrator describes directly" },
              { id: "c", text: "Character is absent" },
              { id: "d", text: "No information given" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indirect characterisation",
                statement: "Shown through actions/speech/thoughts.",
              },
            ],
            steps: [
              {
                reasoning: "Indirect = shown not told.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Shown through actions/speech/thoughts.",
          },
        },
        {
          id: "cieilit-u3-pr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pathetic fallacy is when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Weather/environment reflects character's emotions",
              },
              { id: "b", text: "Weather is described" },
              { id: "c", text: "Character is sad" },
              { id: "d", text: "Setting is ignored" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pathetic fallacy",
                statement: "Weather reflects emotions.",
              },
            ],
            steps: [
              {
                reasoning: "Pathetic fallacy = weather/emotion link.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Weather reflects emotions.",
          },
        },
        {
          id: "cieilit-u3-pr-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Symbolism in prose refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Objects/places representing bigger ideas" },
              { id: "b", text: "Literal meaning only" },
              { id: "c", text: "Character names" },
              { id: "d", text: "Dialogue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symbolism",
                statement: "Objects representing ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Symbolism = objects represent ideas.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Objects representing ideas.",
          },
        },
        {
          id: "cieilit-u3-pr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An unreliable narrator is one who:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "May not tell the truth or have biased perspective",
              },
              { id: "b", text: "Always tells truth" },
              { id: "c", text: "Is omniscient" },
              { id: "d", text: "Never appears" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unreliable narrator",
                statement: "May not tell truth/have bias.",
              },
            ],
            steps: [
              {
                reasoning: "Unreliable = biased/inaccurate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) May not tell truth/have bias.",
          },
        },
        {
          id: "cieilit-u3-pr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dialogue in prose reveals character through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How they speak — vocabulary, tone, manner" },
              { id: "b", text: "What they look like" },
              { id: "c", text: "Their age" },
              { id: "d", text: "Their job" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dialogue reveals",
                statement: "Speech style reveals personality.",
              },
            ],
            steps: [
              {
                reasoning: "Speech reveals personality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) How they speak.",
          },
        },
        {
          id: "cieilit-u3-pr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Mood' or 'atmosphere' in prose refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Feeling created by description" },
              { id: "b", text: "Plot" },
              { id: "c", text: "Character" },
              { id: "d", text: "Setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atmosphere",
                statement: "Feeling created by description.",
              },
            ],
            steps: [
              {
                reasoning: "Atmosphere = feeling.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Feeling created by description.",
          },
        },
        {
          id: "cieilit-u3-pr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A protagonist is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main character" },
              { id: "b", text: "The villain" },
              { id: "c", text: "A minor character" },
              { id: "d", text: "The narrator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protagonist",
                statement: "Main character.",
              },
            ],
            steps: [
              {
                reasoning: "Protagonist = main character.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The main character.",
          },
        },
        {
          id: "cieilit-u3-pr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An antagonist is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The character opposing the protagonist" },
              { id: "b", text: "The main character" },
              { id: "c", text: "A minor character" },
              { id: "d", text: "The narrator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antagonist",
                statement: "Opposes protagonist.",
              },
            ],
            steps: [
              {
                reasoning: "Antagonist = opposes protagonist.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Character opposing protagonist.",
          },
        },
        {
          id: "cieilit-u3-pr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Character development refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "How a character changes/grows through the story",
              },
              { id: "b", text: "Character description" },
              { id: "c", text: "Character names" },
              { id: "d", text: "Character count" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Character development",
                statement: "How character changes/grows.",
              },
            ],
            steps: [
              {
                reasoning: "Development = change/growth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) How character changes/grows.",
          },
        },
        {
          id: "cieilit-u3-pr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'flat' character is one who:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Doesn't change or develop" },
              { id: "b", text: "Is complex" },
              { id: "c", text: "Changes a lot" },
              { id: "d", text: "Is the main character" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flat character",
                statement: "Doesn't change.",
              },
            ],
            steps: [
              {
                reasoning: "Flat = no change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Doesn't change or develop.",
          },
        },
        {
          id: "cieilit-u3-pr-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'round' character is one who:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is complex and develops" },
              { id: "b", text: "Is simple" },
              { id: "c", text: "Doesn't change" },
              { id: "d", text: "Is minor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Round character",
                statement: "Complex, develops.",
              },
            ],
            steps: [
              {
                reasoning: "Round = complex/develops.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Complex and develops.",
          },
        },
        {
          id: "cieilit-u3-pr-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Foreshadowing is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hints at future events" },
              { id: "b", text: "Past events" },
              { id: "c", text: "Character names" },
              { id: "d", text: "Setting description" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Foreshadowing",
                statement: "Hints at future events.",
              },
            ],
            steps: [
              {
                reasoning: "Foreshadowing = future hints.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Hints at future events.",
          },
        },
        {
          id: "cieilit-u3-pr-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Flashback refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A scene from the past" },
              { id: "b", text: "Future events" },
              { id: "c", text: "Present events" },
              { id: "d", text: "Character thoughts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flashback",
                statement: "Scene from past.",
              },
            ],
            steps: [
              {
                reasoning: "Flashback = past scene.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Scene from the past.",
          },
        },
        {
          id: "cieilit-u3-pr-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "An aside in drama is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A remark heard by audience but not other characters",
              },
              { id: "b", text: "A main speech" },
              { id: "c", text: "A stage direction" },
              { id: "d", text: "A soliloquy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aside",
                statement: "Remark for audience only.",
              },
            ],
            steps: [
              {
                reasoning: "Aside = audience only.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Remark for audience only.",
          },
        },
        {
          id: "cieilit-u3-pr-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between first and third person narration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narration types",
                statement: "'I' vs 'he/she'.",
              },
            ],
            steps: [
              {
                reasoning: "First person: 'I' narrator — intimate, subjective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Third person: 'he/she' — more distant, can be limited or omniscient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "First = 'I' intimate; third = 'he/she' distant.",
          },
        },
        {
          id: "cieilit-u3-pr-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two methods of indirect characterisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indirect characterisation",
                statement: "Actions, speech, thoughts, relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Actions and speech reveal character.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thoughts and relationships also reveal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Actions, speech, thoughts, relationships.",
          },
        },
        {
          id: "cieilit-u3-pr-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how an unreliable narrator affects the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unreliable narrator effect",
                statement: "Questions truth, creates ambiguity.",
              },
            ],
            steps: [
              {
                reasoning: "Reader must question narrator's account.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates ambiguity — what's true?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Engages reader actively — must evaluate evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Questions truth, creates ambiguity, engages reader.",
          },
        },
        {
          id: "cieilit-u3-pr-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A first-person narrator describes another character very negatively. What might this suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrator bias",
                statement: "Subjective view may be unreliable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Narrator may be biased — view may not be objective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Character described through narrator's lens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reader must evaluate narrator's reliability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "May reveal narrator's character more than subject's.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Biased view — evaluate narrator's reliability.",
          },
        },
        {
          id: "cieilit-u3-pr-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pathetic fallacy links:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weather to character's emotions" },
              { id: "b", text: "Character to setting" },
              { id: "c", text: "Plot to theme" },
              { id: "d", text: "Dialogue to action" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pathetic fallacy",
                statement: "Weather/emotion link.",
              },
            ],
            steps: [
              {
                reasoning: "Pathetic = weather/emotion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Weather to emotions.",
          },
        },
        {
          id: "cieilit-u3-pr-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'setting' in prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Setting",
                statement: "Time and place of story.",
              },
            ],
            steps: [
              {
                reasoning: "Time and place where story occurs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can symbolise themes or create atmosphere.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Time and place — can symbolise themes.",
          },
        },
        {
          id: "cieilit-u3-pr-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how dialogue reveals character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dialogue reveals",
                statement: "Speech style = personality.",
              },
            ],
            steps: [
              {
                reasoning: "Vocabulary reveals education/background.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tone reveals emotion/personality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Manner of speaking reveals character traits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vocabulary, tone, manner reveal personality.",
          },
        },
        {
          id: "cieilit-u3-pr-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a narrative voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Second person limited" },
              { id: "b", text: "First person" },
              { id: "c", text: "Third person limited" },
              { id: "d", text: "Third person omniscient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative voices",
                statement: "First, third limited, third omniscient.",
              },
            ],
            steps: [
              {
                reasoning: "Second person limited not standard.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Second person limited.",
          },
        },
        {
          id: "cieilit-u3-pr-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'stream of consciousness'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stream of consciousness",
                statement: "Narrative mimicking thought process.",
              },
            ],
            steps: [
              {
                reasoning: "Narrative mimicking character's thought process.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fragmented, associative — like real thinking.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Narrative mimicking thought process.",
          },
        },
        {
          id: "cieilit-u3-pr-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a writer use setting to reflect a character's emotional state?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Setting-emotion link",
                statement: "Pathetic fallacy.",
              },
            ],
            steps: [
              {
                reasoning: "Setting mirrors character's emotions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stormy weather for anger; calm for peace.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dark places for despair; light for hope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates atmosphere and symbolism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Setting mirrors emotions — pathetic fallacy creates atmosphere.",
          },
        },
        {
          id: "cieilit-u3-pr-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'character motivation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Character motivation",
                statement: "What drives character's actions.",
              },
            ],
            steps: [
              {
                reasoning: "What drives character's actions/decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Understanding motivation explains behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "What drives character's actions.",
          },
        },
        {
          id: "cieilit-u3-pr-q31",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'soliloquy' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Character speaking alone/thoughts aloud" },
              { id: "b", text: "Dialogue between characters" },
              { id: "c", text: "Stage direction" },
              { id: "d", text: "Narration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy",
                statement: "Character speaking alone.",
              },
            ],
            steps: [
              {
                reasoning: "Soliloquy = alone speech.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Character speaking alone.",
          },
        },
        {
          id: "cieilit-u3-pr-q32",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'subtext' in dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement: "Meaning beneath the surface of dialogue.",
              },
            ],
            steps: [
              {
                reasoning: "Meaning beneath surface of dialogue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "What characters mean vs what they say.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Meaning beneath surface — say vs mean.",
          },
        },
        {
          id: "cieilit-u3-pr-q33",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a writer creates atmosphere in prose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Atmosphere creation",
                statement: "Description, setting, language.",
              },
            ],
            steps: [
              {
                reasoning: "Descriptive language creates sensory images.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Setting and weather contribute to mood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Word choice and pacing affect feeling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Description + setting + language create atmosphere.",
          },
        },
        {
          id: "cieilit-u3-pr-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of character?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Static narrator" },
              { id: "b", text: "Flat character" },
              { id: "c", text: "Round character" },
              { id: "d", text: "Dynamic character" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character types",
                statement: "Flat, round, dynamic — not 'static narrator'.",
              },
            ],
            steps: [
              {
                reasoning: "Static narrator not standard term.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Static narrator.",
          },
        },
        {
          id: "cieilit-u3-pr-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'dynamic character'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dynamic character",
                statement: "Character who changes/develops.",
              },
            ],
            steps: [
              {
                reasoning: "Character who changes or develops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contrast with static/flat characters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Character who changes/develops.",
          },
        },
        {
          id: "cieilit-u3-pr-q36",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A narrator describes events in present tense. What effect might this have?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tense analysis",
                statement: "Present tense = immediacy.",
              },
            ],
            steps: [
              {
                reasoning: "Present tense creates immediacy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Makes events feel happening now.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can create urgency or intimacy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to narrative voice and theme.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Present tense = immediacy, urgency, intimacy.",
          },
        },
        {
          id: "cieilit-u3-pr-q37",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Show don't tell' means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reveal character through actions not description",
              },
              { id: "b", text: "Describe everything" },
              { id: "c", text: "Tell the plot" },
              { id: "d", text: "Hide information" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Show don't tell",
                statement: "Actions reveal, not description.",
              },
            ],
            steps: [
              {
                reasoning: "Show = actions reveal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Actions reveal character.",
          },
        },
        {
          id: "cieilit-u3-pr-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'narrative perspective'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative perspective",
                statement: "Whose eyes we see through.",
              },
            ],
            steps: [
              {
                reasoning: "Whose eyes/point of view we see through.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affects what reader knows and how.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Whose eyes we see through — affects knowledge.",
          },
        },
        {
          id: "cieilit-u3-pr-q39",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a writer might use contrast between characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character contrast",
                statement: "Juxtaposition highlights traits/themes.",
              },
            ],
            steps: [
              {
                reasoning: "Contrasting characters highlight differences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Emphasises traits — good vs bad, rich vs poor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals themes through comparison.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Contrast highlights traits and themes.",
          },
        },
        {
          id: "cieilit-u3-pr-q40",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a narrative technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration" },
              { id: "b", text: "Flashback" },
              { id: "c", text: "Foreshadowing" },
              { id: "d", text: "Stream of consciousness" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative techniques",
                statement:
                  "Flashback, foreshadowing, stream — not alliteration (poetry).",
              },
            ],
            steps: [
              {
                reasoning: "Alliteration is poetic not narrative.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Alliteration.",
          },
        },
        {
          id: "cieilit-u3-pr-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'in medias res'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "In medias res",
                statement: "Starting story in the middle of action.",
              },
            ],
            steps: [
              {
                reasoning: "Starting story in middle of action.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates immediate engagement — backstory later.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Starting in middle of action.",
          },
        },
        {
          id: "cieilit-u3-pr-q42",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a writer creates tension in prose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tension creation",
                statement: "Conflict, pacing, foreshadowing.",
              },
            ],
            steps: [
              {
                reasoning: "Conflict between characters or forces.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pacing — slow build then quick resolution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Foreshadowing creates anticipation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Conflict, pacing, foreshadowing create tension.",
          },
        },
        {
          id: "cieilit-u3-pr-q43",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A story is told entirely in dialogue. What might this suggest about the writer's intent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form analysis",
                statement: "Dialogue-only = focus on speech.",
              },
            ],
            steps: [
              {
                reasoning: "Focus on speech — character through dialogue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No description — reader interprets from speech.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "May suggest themes of communication/misunderstanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reader must infer — active engagement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Focus on speech/character — reader infers meaning.",
          },
        },
        {
          id: "cieilit-u3-pr-q44",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'foil' character is one who:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Contrasts with protagonist to highlight traits",
              },
              { id: "b", text: "Is identical to protagonist" },
              { id: "c", text: "Is the villain" },
              { id: "d", text: "Is absent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Foil",
                statement: "Contrasts to highlight traits.",
              },
            ],
            steps: [
              {
                reasoning: "Foil = contrast character.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Contrasts to highlight traits.",
          },
        },
        {
          id: "cieilit-u3-pr-q45",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'characterisation through setting'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Setting characterisation",
                statement: "Where character lives reveals them.",
              },
            ],
            steps: [
              {
                reasoning: "Where/how character lives reveals personality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Messy room = disorganised; neat = controlled.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Setting reveals character traits.",
          },
        },
        {
          id: "cieilit-u3-pr-q46",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a writer might use symbolism in prose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prose symbolism",
                statement: "Objects represent ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Objects/places represent bigger ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adds depth — literal + figurative meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reinforces themes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Objects represent ideas — adds depth, reinforces themes.",
          },
        },
        {
          id: "cieilit-u3-pr-q47",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a narrative voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fourth person" },
              { id: "b", text: "First person" },
              { id: "c", text: "Third limited" },
              { id: "d", text: "Third omniscient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative voices",
                statement: "First and third only.",
              },
            ],
            steps: [
              {
                reasoning: "Fourth person not standard.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fourth person.",
          },
        },
        {
          id: "cieilit-u3-pr-q48",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'exposition' in narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exposition",
                statement: "Background information at story start.",
              },
            ],
            steps: [
              {
                reasoning: "Background information at story start.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sets up context for plot.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Background information setting context.",
          },
        },
        {
          id: "cieilit-u3-pr-q49",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a writer use an unreliable narrator to explore themes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unreliable narrator themes",
                statement: "Truth, perception, bias.",
              },
            ],
            steps: [
              {
                reasoning: "Explores truth vs perception.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examines bias and subjectivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Questions memory and self-deception.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reader must construct own truth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explores truth/perception/bias — reader constructs truth.",
          },
        },
        {
          id: "cieilit-u3-pr-q50",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'narrative distance'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative distance",
                statement: "How close narrator is to events.",
              },
            ],
            steps: [
              {
                reasoning: "How close narrator is to events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Close = intimate; distant = detached.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "How close narrator is — intimacy vs detachment.",
          },
        },
        {
          id: "cieilit-u3-pr-q51",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a writer creates suspense in prose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense creation",
                statement: "Uncertainty, pacing, foreshadowing.",
              },
            ],
            steps: [
              {
                reasoning: "Withhold information — reader doesn't know.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Control pacing — slow then fast.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Foreshadowing creates anticipation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Withhold info, control pacing, foreshadow.",
          },
        },
        {
          id: "cieilit-u3-pr-q52",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'minor character' is one who:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plays a small role" },
              { id: "b", text: "Is the main character" },
              { id: "c", text: "Is the villain" },
              { id: "d", text: "Is the narrator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Minor character",
                statement: "Small role.",
              },
            ],
            steps: [
              {
                reasoning: "Minor = small role.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Small role.",
          },
        },
        {
          id: "cieilit-u3-pr-q53",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'free indirect style'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free indirect style",
                statement: "Narrator voice blended with character's.",
              },
            ],
            steps: [
              {
                reasoning: "Narrator voice blended with character's thoughts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates intimacy with some distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Narrator + character voices blended.",
          },
        },
        {
          id: "cieilit-u3-pr-q54",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a writer use setting to develop theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Setting-theme link",
                statement: "Setting embodies theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Setting embodies theme — e.g. prison = confinement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Place reflects social/political conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Symbolic locations reinforce ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Setting and theme intertwined.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Setting embodies theme — place reflects ideas.",
          },
        },
        {
          id: "cieilit-u3-pr-q55",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a narrative element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration" },
              { id: "b", text: "Plot" },
              { id: "c", text: "Character" },
              { id: "d", text: "Setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative elements",
                statement: "Plot, character, setting — not alliteration.",
              },
            ],
            steps: [
              {
                reasoning: "Alliteration is poetic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Alliteration.",
          },
        },
        {
          id: "cieilit-u3-pr-q56",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'climax' in narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax",
                statement: "Turning point/highest tension.",
              },
            ],
            steps: [
              {
                reasoning: "Turning point/highest tension in story.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conflict reaches peak.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Turning point — highest tension.",
          },
        },
        {
          id: "cieilit-u3-pr-q57",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a writer creates irony in prose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Irony in prose",
                statement: "Gap between expectation and reality.",
              },
            ],
            steps: [
              {
                reasoning: "Gap between expectation and reality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dramatic irony — reader knows more than character.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates humour or bitter effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gap between expectation/reality — dramatic irony.",
          },
        },
        {
          id: "cieilit-u3-pr-q58",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'denouement' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resolution/end of story" },
              { id: "b", text: "Beginning" },
              { id: "c", text: "Climax" },
              { id: "d", text: "Conflict" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denouement",
                statement: "Resolution/end.",
              },
            ],
            steps: [
              {
                reasoning: "Denouement = resolution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Resolution/end.",
          },
        },
        {
          id: "cieilit-u3-pr-q59",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a writer use a minor character to develop the protagonist?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Minor character function",
                statement: "Reveals protagonist through contrast.",
              },
            ],
            steps: [
              {
                reasoning: "Minor character contrasts with protagonist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals protagonist's traits through comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May reveal protagonist's weaknesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Serves thematic purpose.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Contrast reveals protagonist's traits/weaknesses.",
          },
        },
        {
          id: "cieilit-u3-pr-q60",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is narrative voice important in prose analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative voice importance",
                statement: "Affects everything reader knows.",
              },
            ],
            steps: [
              {
                reasoning: "Voice affects what reader knows and how.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "First vs third person creates different intimacy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Voice affects knowledge and intimacy.",
          },
        },
      ],
    },
  ],
};
