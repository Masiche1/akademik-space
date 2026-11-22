import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cieilit-u1-lesson-1-3",
  code: "1-3",
  title: "Close reading of unseen texts",
  goal: "I CAN apply analytical skills to an unseen poem or prose extract under exam conditions.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Section 1: Unseen texts",
  ],
  vocabulary: [
    {
      term: "Unseen text",
      definition:
        "A poem or prose extract not studied in advance, analysed under exam conditions.",
    },
    {
      term: "Close reading",
      definition:
        "Detailed analysis of specific words, images and structures in a text.",
    },
    {
      term: "Form",
      definition:
        "The shape of a poem — sonnet, free verse, haiku — affecting meaning.",
    },
    { term: "Stanza", definition: "A grouped set of lines in a poem." },
    {
      term: "Enjambment",
      definition: "Running a sentence over a line break without punctuation.",
    },
    {
      term: "Caesura",
      definition:
        "A pause within a line of poetry, often marked by punctuation.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u1-unseen",
      title: "Close reading technique",
      skill:
        "Analyse unseen texts systematically — form, language, structure and meaning.",
      lesson: {
        sections: [
          {
            heading: "A systematic approach",
            body: "For unseen texts: (1) **read twice** — first for meaning, second for analysis; (2) **identify form** — poem type, stanza structure, prose style; (3) **annotate** — mark key words, images, shifts in tone; (4) **analyse language** — diction, imagery, sound; (5) **analyse structure** — how the text is organised; (6) **link to meaning** — what is the text about and how do methods create it?",
          },
          {
            heading: "Poetry specifics",
            body: "Note **form** (sonnet? free verse?), **stanza pattern** (regular or varied?), **line breaks and enjambment** (where thoughts spill across lines), **sound** (rhyme, alliteration, rhythm), and **shifts** (where tone or subject changes — often at stanza breaks). Ask: how does the form itself carry meaning?",
          },
          {
            heading: "Prose specifics",
            body: "Note **narrative voice** (who tells, how reliable?), **sentence structure** (long flowing vs short clipped), **description vs dialogue**, and **pacing** (where does tension build?). Look for **turning points** and **ending effects** — how does the extract conclude and why?",
          },
        ],
        keyFormulas: [
          {
            name: "Close reading order",
            statement:
              "Read → form → annotate → language → structure → meaning",
          },
          {
            name: "Shift detection",
            statement:
              "Tone/subject changes often mark structural turning points",
          },
        ],
        workedExample: {
          problem:
            "An unseen poem has three stanzas: nature description, then 'But I remember...', then a personal reflection. What structure is at work?",
          solution:
            "A shift structure — public/external observation moving to private/internal reflection. The 'But' signals a turn; the final stanza personalises the theme.",
        },
      },
      questions: [
        {
          id: "cieilit-u1-uns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The FIRST step in analysing an unseen text should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Annotate every word" },
              { id: "b", text: "Read it carefully to understand the meaning" },
              { id: "c", text: "Identify the rhyme scheme" },
              { id: "d", text: "Count the syllables" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Close reading order",
                statement: "Understand meaning before analysing technique.",
              },
            ],
            steps: [
              {
                reasoning:
                  "You cannot analyse methods meaningfully until you understand what the text is about — read for meaning first.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Read it carefully to understand the meaning.",
            commonErrors: [
              "Annotating techniques before understanding the text.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 'enjambment' and what effect can it create?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enjambment",
                statement:
                  "Sentence running over a line break — creates flow or tension.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enjambment = continuing a sentence across a line break without punctuation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It creates flow — the reader is pulled forward without pause, mimicking continuous action or thought.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alternatively it can create tension when a key word is delayed to the next line.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Running a sentence over a line break — creates flow or delays key words for tension.",
            commonErrors: ["Confusing enjambment with end-stopped lines."],
          },
        },
        {
          id: "cieilit-u1-uns-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is identifying 'shifts' important when analysing an unseen poem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Shift detection",
                statement: "Structural turns reveal development and meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shifts are points where tone, subject or attitude changes — often marked by 'but', 'yet', or stanza breaks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They mark development — the poem moves from one idea to another, building meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Locating shifts helps structure your analysis around the poem's turning points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shifts mark turning points where meaning develops — key for structuring analysis.",
            commonErrors: [
              "Treating a poem as uniform rather than tracking its development.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "You are given an unseen poem about a lighthouse keeper. Outline a close-reading plan.",
          parts: [
            {
              label: "a",
              prompt:
                "List the first three things you would note about the poem's form.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how you would link language analysis to meaning.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Close reading plan",
                statement: "Form → annotation → language-effect-meaning chain.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Note the poem's form: sonnet/free verse/ballad; stanza pattern; line length and rhythm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Check for rhyme, alliteration, sound devices and punctuation patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Identify shifts — where does tone or subject change (isolation → memory → resolution)?",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Select key images/words (e.g. 'the light swept the black water') and analyse their sensory effect.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Link each technique to meaning — e.g. the sweeping light image suggests vigilance or loneliness.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Weave language and structure into an argument about the poem's themes — isolation, duty, time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Form, sound, shifts. (b) Analyse key images and link technique → effect → theme.",
            commonErrors: [
              "Annotating everything without building an argument.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before analysing technique in an unseen text, you should first:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Note every punctuation mark" },
              { id: "b", text: "Identify the rhyme scheme immediately" },
              { id: "c", text: "Count the syllables in each line" },
              {
                id: "d",
                text: "Read carefully to understand what the text is about",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Close reading order",
                statement: "Understand meaning before analysing technique.",
              },
            ],
            steps: [
              {
                reasoning:
                  "You cannot judge a technique's effect until you know what the text means — read for meaning first.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Read carefully to understand what the text is about.",
            commonErrors: [
              "Annotating techniques before understanding the text.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Caesura' in a line of poetry refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A pause within a line, often marked by punctuation",
              },
              { id: "b", text: "The turn in a sonnet" },
              { id: "c", text: "The rhyme at a line's end" },
              { id: "d", text: "A break between two stanzas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Caesura",
                statement:
                  "A pause within a line of poetry, often marked by punctuation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Caesura is a mid-line pause — e.g. 'To be, or not to be' — creating emphasis or disruption.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) A pause within a line, often marked by punctuation.",
            commonErrors: [
              "Confusing caesura with enjambment or a stanza break.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Narrative voice' in an unseen prose extract refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Who tells the story and from what perspective",
              },
              { id: "b", text: "The volume of the dialogue" },
              { id: "c", text: "The accent of the narrator" },
              { id: "d", text: "The description of the setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative voice",
                statement:
                  "Who tells the story and from what perspective — first/third person, reliable/unreliable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Narrative voice covers the narrator's identity, perspective and reliability — key to interpreting the extract.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Who tells the story and from what perspective.",
            commonErrors: [
              "Treating narrative voice as the plot rather than the telling.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'turning point' in an unseen text is best identified by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first line only" },
              { id: "b", text: "The title of the text" },
              {
                id: "c",
                text: "Shifts in tone, subject or attitude",
              },
              { id: "d", text: "The longest sentence in the extract" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Shift detection",
                statement: "Structural turns reveal development and meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Turning points show as changes — 'but', 'yet', a new stanza, or a changed attitude signal the shift.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Shifts in tone, subject or attitude.",
            commonErrors: [
              "Looking for turning points only in the plot, not in tone or structure.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'end-stopped' line in a poem is one that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ends with punctuation and completes a thought",
              },
              { id: "b", text: "Contains a pause in the middle" },
              { id: "c", text: "Repeats the same rhyme sound" },
              {
                id: "d",
                text: "Runs into the next line without punctuation",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "End-stopped line",
                statement:
                  "A line ending with punctuation where the sense completes — the opposite of enjambment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "End-stopped lines finish a unit of sense at the line's end; enjambed lines carry the sentence over.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Ends with punctuation and completes a thought.",
            commonErrors: [
              "Confusing end-stopped lines with enjambed lines.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Prosody' in the study of poetry refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A poet's life and historical context" },
              {
                id: "b",
                text: "Rhythmic and sound patterns such as metre, rhyme and alliteration",
              },
              { id: "c", text: "Only the poem's rhyme scheme" },
              { id: "d", text: "The poem's title and publication details" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prosody",
                statement:
                  "The study of poetic rhythm, metre and sound patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prosody covers how a poem sounds — metre, rhythm, rhyme, alliteration and assonance — not its subject or history.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Rhythmic and sound patterns such as metre, rhyme and alliteration.",
            commonErrors: [
              "Thinking prosody means the poem's subject matter.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an unseen prose extract, 'pacing' refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The speed and rhythm at which events and description unfold",
              },
              { id: "b", text: "The number of characters appearing" },
              { id: "c", text: "The length of the extract in pages" },
              { id: "d", text: "The tense used throughout the extract" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pacing",
                statement:
                  "The speed and rhythm of narrative — where tension builds or releases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pacing is how quickly or slowly the narrative moves — long descriptive passages slow it, short sentences speed it up.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The speed and rhythm at which events and description unfold.",
            commonErrors: [
              "Confusing pacing with plot — pacing is about narrative speed, not events.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main purpose of annotating an unseen text is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Check the text for spelling errors" },
              { id: "b", text: "Underline every single word in the text" },
              {
                id: "c",
                text: "Mark key words, images and shifts so they can be analysed later",
              },
              { id: "d", text: "Rewrite the text in your own words" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Annotation",
                statement:
                  "Marking key words, images and shifts to support close analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Annotation selects the material you will analyse — key words, images, tone changes — rather than marking everything indiscriminately.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Mark key words, images and shifts so they can be analysed later.",
            commonErrors: [
              "Annotating everything — selection is what makes annotation useful.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines does a standard Shakespearean sonnet have? Enter a number.",
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
                  "A sonnet always has 14 lines, arranged in quatrains and a couplet or octave and sestet.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "14",
            commonErrors: [
              "Confusing sonnet line count with stanza count.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Answer both parts with numbers only.",
          parts: [
            {
              label: "a",
              prompt: "How many lines are in the octave of a Petrarchan sonnet?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "How many lines does a haiku have?",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fixed forms",
                statement:
                  "Petrarchan sonnet = octave (8) + sestet (6); haiku = 3 lines.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The Petrarchan octave contains the first 8 lines before the volta.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A haiku has three lines, traditionally 5-7-5 syllables.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 8  (b) 3",
            commonErrors: [
              "Mixing up the octave (8 lines) with the sestet (6 lines).",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does identifying a poem's 'form' matter when analysing an unseen text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form analysis",
                statement: "Form shapes meaning — the poem's shape mirrors its argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Form identifies the poem type — sonnet, free verse, ballad — which sets expectations about structure and conventions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Form carries meaning: a volta in a sonnet marks an argument shift; free verse's irregularity may mirror disorder or spontaneity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Linking form to meaning lets you argue how the poem's shape develops its themes, not just its content.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Form shapes meaning — identifying it lets you link structure to theme, e.g. a volta marking a shift in argument.",
            commonErrors: [
              "Naming the form without explaining how it affects meaning.",
            ],
          },
        },
        {
          id: "cieilit-u1-uns-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "You are given an unseen poem about a thunderstorm. Plan a close-reading response.",
          parts: [
            {
              label: "a",
              prompt:
                "List three structural features you would note and why each matters.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how you would analyse the poem's use of sound.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Close reading plan",
                statement: "Form → sound → effect → meaning chain.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Note the poem's form and stanza pattern — regular quatrains or irregular free verse — and what it suggests about the storm's control or chaos.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Identify shifts — where tone changes from description to fear or awe, often at stanza breaks.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Check line breaks and enjambment — whether the storm's violence spills across lines.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Select sound devices — alliteration ('thunder tore'), assonance, onomatopoeia ('crash', 'boom') — and quote examples.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analyse each device's effect — harsh consonants mimicking the storm, rhythm mimicking thunder's pulse.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Link sound to meaning — the poem makes the reader hear the storm, creating immediacy or fear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Form, shifts, line breaks. (b) Quote sound devices and link their effects to the storm's meaning.",
            commonErrors: [
              "Listing sound devices without linking them to meaning.",
            ],
          },
        },
      ],
    },
  ],
};
