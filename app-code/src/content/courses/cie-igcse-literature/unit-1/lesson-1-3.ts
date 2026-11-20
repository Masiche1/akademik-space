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
              { id: "c", text: "Count the syllables" },
              { id: "d", text: "Identify the rhyme scheme" },
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
      ],
    },
  ],
};
