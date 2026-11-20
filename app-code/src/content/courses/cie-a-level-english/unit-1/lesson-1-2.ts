import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "cial-e-u1-lesson-1-2",
  code: "1-2",
  title: "Analysing structure and form",
  goal: "I CAN analyse how text structure, openings, endings and narrative form create meaning.",
  standards: ["9093 Paper 2: structure and form"],
  vocabulary: [
    {
      term: "Structure",
      definition:
        "The way a text is organised — chronological, thematic, cyclical.",
    },
    {
      term: "Form",
      definition:
        "The genre or shape of a text: essay, letter, poem, report, narrative.",
    },
    {
      term: "Framing device",
      definition: "An opening and closing that encloses the main content.",
    },
    {
      term: "Circular structure",
      definition: "A text that ends where it began, creating symmetry.",
    },
    {
      term: "Juxtaposition",
      definition: "Placing contrasting elements side by side for effect.",
    },
    {
      term: "Enjambment",
      definition: "Running a sentence across a line break in poetry.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u1-text-structure",
      title: "Text structure and organisation",
      skill:
        "Analyse how texts are organised and how structure creates effect.",
      lesson: {
        sections: [
          {
            heading: "Organisational patterns",
            body: "Texts organise information differently: chronological (time order), thematic (by topic), spatial (by location), problem/solution, cause/effect, compare/contrast. Identifying the pattern reveals the writer's logic — a chronological narrative builds suspense differently from a thematic essay.",
          },
          {
            heading: "Openings and endings",
            body: "Openings establish voice, context and purpose — a question hooks, a statistic shocks, a scene immerses. Endings resolve, linger, surprise or circle back. Analyse what the ending does: does it satisfy, unsettle, or reframe the whole text?",
          },
          {
            heading: "Juxtaposition and contrast",
            body: "Placing unlike elements together creates meaning through contrast: rich/poor, past/present, speech/silence. Structural juxtaposition (scene changes, paragraph breaks) can be as powerful as linguistic devices.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure analysis",
            statement:
              "Pattern+openings+endings+juxtaposition=structural meaning.",
          },
        ],
        workedExample: {
          problem: "A story begins with a funeral and ends with a birth.",
          solution:
            "Circular/contrastive structure — death and birth frame the narrative, suggesting renewal or the cyclical nature of life.",
        },
      },
      questions: [
        {
          id: "cial-e-u1-ts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'circular structure'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A text that ends where it began" },
              { id: "b", text: "A text about circles" },
              { id: "c", text: "A text with no ending" },
              { id: "d", text: "A text organised by theme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circular structure",
                statement:
                  "Ending mirrors or returns to the opening, creating symmetry.",
              },
            ],
            steps: [
              {
                reasoning: "Circular = returns to start.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Ends where it began",
            commonErrors: ["Confusing with chronological structure."],
          },
        },
        {
          id: "cial-e-u1-ts-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and analyse its structure.",
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "She found the letter on a Tuesday, in the pocket of a coat she hadn't worn in years.\n\nIt began simply: 'I should have written sooner.' And ended the same way, the ink faded to the colour of weak tea.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure analysis",
                statement: "Framing device and circularity create meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing: letter within narrative — nested structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Circular echo: 'should have written sooner' at both ends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect: regret and belatedness emphasised.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Framed narrative with circular echo emphasises regret and delay.",
            commonErrors: ["Describing content without analysing structure."],
          },
        },
        {
          id: "cial-e-u1-ts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a text's ending shape the reader's interpretation of the whole?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ending function",
                statement:
                  "Endings resolve, complicate, or reframe — they colour everything before them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resolution satisfies; complication unsettles; reframe changes meaning retroactively.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "A circular ending returns meaning to the opening.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "An open ending leaves interpretation to the reader.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Accurate explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Endings resolve, complicate or reframe — colouring the whole text.",
            commonErrors: [
              "Saying 'the ending is important' without specifics.",
            ],
          },
        },
        {
          id: "cial-e-u1-ts-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Text structure and form.",
          parts: [
            { label: "a", prompt: "Define circular structure.", marks: 1 },
            {
              label: "b",
              prompt: "Identify the structure in the extract about the letter.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How does framing affect meaning?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Name three organisational patterns and their effects.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure",
                statement: "Definition+identification+framing+patterns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Ends where it began.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Framed narrative: letter within story.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Circular echo of 'should have written sooner'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Effect: regret emphasised.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Framing distances or contextualises content.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Creates layers of meaning.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning:
                  "Any three of chronological, thematic, spatial, problem/solution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Effects linked.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Three valid.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) ends=begins (b) framed+circular (c) layers meaning (d) three patterns",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Structure analysed.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Framing explained.",
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
                level: "Level 3",
                marks: "2-3",
                descriptor: "Three patterns+effects.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Two or partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Ignoring structural features."],
          },
        },
      ],
    },
    {
      id: "cial-e-u1-form-devices",
      title: "Form and poetic/dramatic devices",
      skill:
        "Analyse how form (poetry, drama, prose) shapes meaning in unseen texts.",
      lesson: {
        sections: [
          {
            heading: "Poetic form",
            body: "Line breaks, stanza shape, rhyme, rhythm and enjambment are meaning-making choices. A sonnet's constraints, a villanelle's refrains, free verse's openness — form enacts content. Analyse why the poet chose this shape.",
          },
          {
            heading: "Dramatic form",
            body: "Plays use dialogue, stage directions, soliloquies, asides and dramatic irony. Stage directions reveal what characters hide; pauses and gestures carry subtext. Consider how the scene might be performed.",
          },
          {
            heading: "Prose form",
            body: "Prose varies sentence length, paragraph structure and narrative voice. Stream of consciousness mimics thought; short declarative sentences create tension; long periodic sentences build suspense. Voice (first/third person, reliable/unreliable) shapes everything.",
          },
        ],
        keyFormulas: [
          {
            name: "Form analysis",
            statement:
              "Form enacts meaning — analyse why this shape was chosen.",
          },
        ],
        workedExample: {
          problem: "A poem uses irregular line lengths and no rhyme.",
          solution:
            "Free verse — the irregularity mirrors the chaotic or natural subject; absence of rhyme creates openness or realism.",
        },
      },
      questions: [
        {
          id: "cial-e-u1-fd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'enjambment'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Running a sentence across a line break" },
              { id: "b", text: "A type of rhyme" },
              { id: "c", text: "A stage direction" },
              { id: "d", text: "A stanza break" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enjambment",
                statement:
                  "Sentence continues across a line break without punctuation.",
              },
            ],
            steps: [
              {
                reasoning: "Enjambment = line-break mid-sentence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sentence across line break",
            commonErrors: ["Confusing with end-stopped lines."],
          },
        },
        {
          id: "cial-e-u1-fd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the play extract and analyse its form.",
          extract: {
            title: "The Confession",
            author: "Written for Akademik Space",
            source: "Play extract",
            text: "ELENA: (to herself, not looking at DEV) I saw the letter.\n\nDEV: What letter?\n\nELENA: (finally meeting his eyes) The one you think I never found.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic form",
                statement: "Stage directions+dialogue+subtext=create meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stage direction 'to herself' creates secrecy — the audience sees what DEV may not.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Short dialogue + pause builds tension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Dramatic irony: Elena knows about the letter; Dev's 'what letter' is innocent or feigned.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Stage directions and dramatic irony create tension and hidden meaning.",
            commonErrors: ["Ignoring stage directions."],
          },
        },
        {
          id: "cial-e-u1-fd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is 'form enacts meaning' a useful critical approach?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form-function",
                statement:
                  "The shape of a text often mirrors or amplifies its content.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A sonnet's constraints can mirror emotional containment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Free verse's openness can mirror natural or chaotic subjects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Circular structure enacts cyclical themes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate explanation with examples.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Form often mirrors content — the shape enacts the meaning.",
            commonErrors: ["Describing form without linking to meaning."],
          },
        },
        {
          id: "cial-e-u1-fd-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Form and devices.",
          parts: [
            { label: "a", prompt: "Define enjambment.", marks: 1 },
            {
              label: "b",
              prompt: "How do stage directions create meaning?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why might a poet choose free verse?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Analyse the form of the play extract about Elena and Dev.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form",
                statement:
                  "Definition+stage directions+free verse+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sentence across line break.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reveal action and gesture beyond words.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Create subtext — words vs actions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Guide performance and audience reception.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Openness suits natural/chaotic subjects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Absence of rhyme creates realism or freedom.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Stage direction 'to herself' = secrecy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Dramatic irony: Dev's 'what letter' vs Elena's knowledge.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Tension from pause and short dialogue.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) line-break mid-sentence (b) action+subtext (c) openness=freedom (d) secrecy+irony+tension",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Directions analysed.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Free verse explained.",
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
                level: "Level 3",
                marks: "2-3",
                descriptor: "Form analysed.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Ignoring stage directions and form."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u1-structure-notes",
      title: "Structure and form — revision notes",
      summary:
        "Text organisation, openings/endings, form and poetic/dramatic devices.",
      sections: [
        {
          heading: "Structure",
          body: "Chronological, thematic, spatial, problem/solution, circular. Openings hook; endings resolve, complicate or reframe. Juxtaposition creates contrast.",
        },
        {
          heading: "Form",
          body: "Poetry: line breaks, stanzas, enjambment, rhyme. Drama: dialogue, stage directions, subtext, dramatic irony. Prose: sentence length, paragraphing, narrative voice.",
        },
        {
          heading: "Key principle",
          body: "Form enacts meaning — analyse why this shape was chosen, not just what it is.",
        },
        {
          heading: "Exam checklist",
          body: "Did I identify the organisational pattern? Did I analyse openings/endings? Did I consider form's effect on meaning?",
        },
      ],
    },
  ],
};
