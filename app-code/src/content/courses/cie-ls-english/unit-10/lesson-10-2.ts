import type { Lesson } from "../../../types.ts";

export const lesson1021: Lesson = {
  id: "cile-u10-lesson-10-2",
  code: "10-2",
  title: "Stage 8 Checkpoint — Analysing Writers' Choices",
  goal: "I CAN analyse language and structure at Stage 8 checkpoint standard.",
  standards: ["0861 Checkpoint Stage 8: writers' craft"],
  stage: 8,
  vocabulary: [
    {
      term: "Imagery",
      definition:
        "Language creating mental pictures — simile, metaphor, personification.",
    },
    { term: "Tone", definition: "The writer's attitude towards the subject." },
    {
      term: "Structure",
      definition:
        "How a text is organised — paragraphs, chronological order, flashback.",
    },
    { term: "Effect", definition: "The impact a technique has on the reader." },
  ],
  concepts: [
    {
      id: "cile-u10-s8-language",
      title: "Stage 8 language analysis",
      skill: "Identify techniques and explain their effects.",
      lesson: {
        sections: [
          {
            heading: "Technique + effect",
            body: "Stage 8 questions ask you to name a technique AND explain its effect on the reader. Always link the quotation to an effect — never just spot the technique.",
          },
        ],
        keyFormulas: [
          {
            name: "PEE",
            statement:
              "Point, Evidence, Explanation — the checkpoint analysis chain",
          },
        ],
        workedExample: {
          problem:
            "Quote: 'the open sea stretched dark and glittering'. Technique? Effect?",
          solution:
            "Imagery (visual). Effect: creates a sense of vastness and beauty — the journey ahead feels both exciting and daunting.",
        },
      },
      questions: [
        {
          id: "cile-u10-s8-lang-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What technique is used in 'the open sea stretched dark and glittering'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Imagery" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Alliteration" },
              { id: "d", text: "Onomatopoeia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery",
                statement: "Language creating mental pictures.",
              },
            ],
            steps: [
              {
                reasoning: "Visual description of the sea = imagery.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Imagery",
          },
        },
        {
          id: "cile-u10-s8-lang-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the effect of 'the horn sounded twice, low and patient'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sound imagery",
                statement: "Describing sound creates mood.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Low and patient' personifies the horn — it waits calmly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect: calm, unhurried mood; nothing is rushed.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Links to Tomas's careful, methodical character.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The personified horn creates a calm, patient mood — matching Tomas's unhurried, careful departure.",
          },
        },
        {
          id: "cile-u10-s8-lang-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the effect of 'the crates rattled like dice in a cup'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simile",
                statement: "'like' comparison creates a vivid image.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Simile compares crates to dice — random, tumbling motion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Effect: suggests the cargo is precious/random chance; slight anxiety.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Adds tension as the ferry departs.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The simile makes the crates seem to tumble randomly — creating a sense of precious cargo and slight tension as the ferry leaves.",
          },
        },
        {
          id: "cile-u10-s8-lang-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does the writer use colour imagery in the extract? Give one example and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Colour imagery",
                statement: "Colours carry emotional associations.",
              },
            ],
            steps: [
              {
                reasoning: "'Amber light' — warm, inviting glow of the market.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Yellow raincoat' — bright spot against grey harbour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Dark and glittering' sea — contrast of danger and beauty.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Colours build mood: warmth of home vs vast unknown.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Amber and yellow create warmth and welcome; the 'dark and glittering' sea contrasts with them — warmth of home against the vast, unknown journey.",
          },
        },
      ],
    },
    {
      id: "cile-u10-s8-structure",
      title: "Stage 8 structure checkpoint",
      skill: "Analyse how a text is organised and its effect.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "Stage 8 also tests structural analysis: paragraph order, chronological vs non-chronological, openings and endings, and how structure shapes meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure",
            statement: "Organisation + effect on reader = structural analysis",
          },
        ],
        workedExample: {
          problem:
            "The extract ends with Tomas thinking about sleep. Why is this an effective ending?",
          solution:
            "The quiet, personal ending contrasts with the busy departure — signals relief and transition to rest; gives closure after tension.",
        },
      },
      questions: [
        {
          id: "cile-u10-s8-str-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How is the extract organised?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chronologically" },
              { id: "b", text: "As a flashback" },
              { id: "c", text: "As a list" },
              { id: "d", text: "As an argument" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chronology",
                statement: "Events in time order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dusk → horn → boarding → sea — events unfold in order.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Chronologically",
          },
        },
        {
          id: "cile-u10-s8-str-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What effect does starting with the harbour at dusk create?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Setting",
                statement: "Opening establishes mood and place.",
              },
            ],
            steps: [
              {
                reasoning: "Dusk = transition time — departure mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Salt and diesel' sensory detail grounds the scene.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "It establishes a mood of transition and departure — dusk as the in-between time for a journey beginning.",
          },
        },
        {
          id: "cile-u10-s8-str-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does the writer include the girl waving on the jetty?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character introduction",
                statement: "Side details reveal relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "She is introduced just before departure — personal stakes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Her dog and raincoat add realism and warmth.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Shows Tomas is leaving someone/something behind — emotional weight.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "She humanises the departure — Tomas is not just moving cargo but leaving people he cares about, adding emotional weight.",
          },
        },
        {
          id: "cile-u10-s8-str-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how the ending affects the reader's response to the whole extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ending",
                statement: "Final image shapes overall impression.",
              },
            ],
            steps: [
              {
                reasoning: "Quiet personal thought contrasts with busy action.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Allowed himself to think about sleep' — exhaustion revealed.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Signals the tense departure is over — relief.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Leaves reader with warmth and anticipation, not anxiety.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The quiet ending resolves the tension of departure — the reader feels Tomas's relief and looks forward to rest, giving the extract a warm, satisfying close.",
          },
        },
      ],
    },
    {
      id: "cile-u10-s8-mx",
      title: "Stage 8 mixed checkpoint",
      skill: "Combine language analysis and structural analysis.",
      lesson: {
        sections: [
          {
            heading: "Mixed analysis",
            body: "Checkpoint questions now test both language (imagery, tone, word choice) and structure (paragraphing, chronology, endings). Answer technique questions with technique + effect, and structure questions with organisation + purpose.",
          },
        ],
        keyFormulas: [
          {
            name: "PEE",
            statement:
              "Point, Evidence, Explanation — apply to both language and structure",
          },
        ],
        workedExample: {
          problem:
            "Quote: 'Behind him the crates rattled like dice in a cup.' Technique? Effect?",
          solution:
            "Simile. Effect: the random rattling suggests the cargo — and Tomas's situation — is unsettled and out of his control.",
        },
      },
      questions: [
        {
          id: "cile-u10-s8-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What technique is used in 'the crates rattled like dice in a cup'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Alliteration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simile",
                statement: "Comparison using 'like' or 'as'.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'like dice in a cup' compares crates to dice using 'like'.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Simile",
          },
        },
        {
          id: "cile-u10-s8-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the effect of the short sentence 'He signed the last form, stamped it twice, and climbed aboard.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sentence length",
                statement: "Short sentences can create pace or emphasis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The quick list of actions mirrors Tomas's efficient, no-nonsense manner.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Effect: brisk pace builds momentum towards boarding the ferry.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The brisk sentence matches Tomas's efficient manner and speeds the reader towards the departure.",
          },
        },
        {
          id: "cile-u10-s8-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How is the extract structured, and what effect does this have on the reader?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure",
                statement:
                  "Organisation of a text shapes the reader's experience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chronological order: dusk at the harbour → boarding → open sea.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The steady sequence mirrors the slow build of the journey.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Ending on Tomas thinking about sleep gives a calm, resolved close.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Chronological structure creates a calm, steady build that resolves with Tomas finally relaxing.",
          },
        },
        {
          id: "cile-u10-s8-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the effects of 'the ferry's horn sounded twice, low and patient' and 'the crates rattled like dice in a cup'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Contrast",
                statement: "Comparing two quotations can reveal tone shifts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First quotation: calm, patient mood — personification of the horn.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Second quotation: restless, unsettled mood — simile of rattling dice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Contrast: calm waiting versus anxious movement.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Together they build tension before the resolution at the end.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The patient horn creates calm while the rattling crates create unease; the contrast builds quiet tension that resolves as Tomas boards.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u10-stage8-analysis-notes",
      title: "Stage 8 writers' craft — revision notes",
      summary: "Language techniques, tone and structure analysis.",
      sections: [
        {
          heading: "Language",
          body: "Name the technique (imagery, simile, personification) then explain the effect on reader and character.",
        },
        {
          heading: "Structure",
          body: "Consider order of events, openings, endings and how organisation shapes meaning.",
        },
      ],
    },
  ],
};
