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
              { id: "a", text: "Onomatopoeia" },
              { id: "b", text: "Imagery" },
              { id: "c", text: "Alliteration" },
              { id: "d", text: "Rhyme" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cile-u10-s8-lang-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What technique is used in 'the harbour at dusk smelled of salt and diesel'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Olfactory (smell) imagery" },
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
                name: "Sensory imagery",
                statement: "Describing smell creates a vivid, immersive scene.",
              },
            ],
            steps: [
              {
                reasoning: "'Smelled of salt and diesel' appeals to the sense of smell — olfactory imagery.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Olfactory (smell) imagery",
          },
        },
        {
          id: "cile-u10-s8-lang-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the idiom 'for want of a signature' mean in 'he was not about to leave it behind for want of a signature'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because he lacked a signature" },
              { id: "b", text: "Without reading the form" },
              { id: "c", text: "In exchange for signing" },
              { id: "d", text: "Just because of a mere formality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Idiom",
                statement: "'For want of' means 'because of the lack of'.",
              },
            ],
            steps: [
              {
                reasoning: "He will not leave the cello behind merely because a signature is needed.",
                working: "\\text{for want of = because of lack}",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Because he lacked a signature",
          },
        },
        {
          id: "cile-u10-s8-lang-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which detail uses colour imagery in the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The manifest" },
              { id: "b", text: "The ferry's horn" },
              { id: "c", text: "The yellow raincoat" },
              { id: "d", text: "The gangway" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Colour imagery",
                statement: "Named colours create visual pictures and mood.",
              },
            ],
            steps: [
              {
                reasoning: "'Yellow raincoat' is the only named colour in the extract.",
                working: "\\text{yellow}",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** The yellow raincoat",
          },
        },
        {
          id: "cile-u10-s8-lang-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What technique is created by 'stamped it twice' in the final paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetition for emphasis" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Dialogue" },
              { id: "d", text: "Question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Repetition",
                statement: "Repeating an action stresses thoroughness.",
              },
            ],
            steps: [
              {
                reasoning: "Stamping twice repeats the action — emphasising Tomas's careful, official procedure.",
                working: "\\text{repetition}",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Repetition for emphasis",
          },
        },
        {
          id: "cile-u10-s8-lang-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What tone does the final sentence — Tomas 'allowed himself to think about sleep' — convey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Confusion about the journey" },
              { id: "b", text: "Panic and fear" },
              { id: "c", text: "Calm relief after exhaustion" },
              { id: "d", text: "Anger at the ferry company" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tone",
                statement: "The quiet personal thought signals relief and calm.",
              },
            ],
            steps: [
              {
                reasoning: "'Allowed himself' and 'think about sleep' create a peaceful, relieved close.",
                working: "\\text{relief}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Calm relief after exhaustion",
          },
        },
        {
          id: "cile-u10-s8-lang-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many similes (comparisons using 'like' or 'as') appear in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "similes", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simile",
                statement: "A simile compares using 'like' or 'as'.",
              },
            ],
            steps: [
              {
                reasoning: "Search for 'like'/'as': only 'rattled like dice in a cup' qualifies.",
                working: "\\text{like dice}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "There is 1 simile.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cile-u10-s8-lang-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Count imagery types in the extract. Give: (a) the number of similes; (b) the number of images appealing to sound (horn sounding, crates rattling); (c) the number of paragraphs.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 2 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery counting",
                statement: "Identify each image type before counting.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "One simile: 'like dice in a cup'.",
                working: "\\text{1}",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Sound images: 'horn sounded' and 'crates rattled' — 2.",
                working: "\\text{horn; rattled}",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "The extract has 3 paragraphs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) 1 (b) 2 (c) 3",
          },
        },
        {
          id: "cile-u10-s8-lang-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give three counts from the extract: (a) the number of times the cello is mentioned; (b) the number of adjectives describing the sea ('dark and glittering'); (c) the number of cargo item types on the manifest.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 2 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Close reading",
                statement: "Count carefully — check each mention and each descriptor.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cello mentions: 'a single cello' and 'that cello' — 2.",
                working: "\\text{single cello; that cello}",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Sea adjectives: 'dark' and 'glittering' — 2.",
                working: "\\text{dark; glittering}",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Manifest types: tea, coffee, cello — 3.",
                working: "\\text{tea; coffee; cello}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "All counts verified against the text.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) 2 (b) 2 (c) 3",
          },
        },
        {
          id: "cile-u10-s8-lang-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The PEE analysis chain has three parts: Point, Evidence, Explanation. How many of these involve the writer's words specifically?",
          response: {
            type: "numeric",
            parts: [{ label: "parts", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "PEE",
                statement: "Evidence quotes the text; Point and Explanation analyse it.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence directly uses the writer's words; Point names the technique in them.",
                working: "\\text{2}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Explanation discusses effect — it is analysis, not quotation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cile-u10-s8-lang-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the effect of the idiom 'for want of a signature' on the reader's impression of Tomas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Idiom",
                statement: "Idioms add character voice and show determination.",
              },
            ],
            steps: [
              {
                reasoning: "The idiom shows Tomas will not abandon the cello over a mere formality — determination.",
                working: "\\text{determination}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It hints at his character: the cello matters more than paperwork.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "It reveals Tomas's determination — the cello's value outweighs any bureaucratic obstacle, showing how much it means to him.",
          },
        },
        {
          id: "cile-u10-s8-lang-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse the effect of the detail 'a girl in a yellow raincoat' in the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Colour and detail",
                statement: "A bright colour spot against a grey scene draws the eye and warms the mood.",
              },
            ],
            steps: [
              {
                reasoning: "'Yellow' is the only strong colour — a bright spot against the muted harbour.",
                working: "\\text{yellow}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect: the girl visually stands out — she is the emotional focus of the scene.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Warm colour suggests welcome and personal connection amid the cargo work.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The yellow raincoat makes the girl the brightest, most eye-catching figure — signalling that the personal farewell matters more than the cargo.",
          },
        },
        {
          id: "cile-u10-s8-lang-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the opening sentence's sensory imagery ('smelled of salt and diesel', 'at dusk') creates the mood of the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sensory opening",
                statement: "Smell and time-of-day details ground the scene and set mood.",
              },
            ],
            steps: [
              {
                reasoning: "'Smelled of salt and diesel' — smell imagery makes the harbour vivid and working.",
                working: "\\text{olfactory}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Salt' suggests the sea; 'diesel' suggests industry — a working harbour.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "'At dusk' creates a transitional, in-between mood — departure time.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Together they establish a mood of quiet, industrious transition.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The smell imagery makes the working harbour tangible while 'dusk' sets a mood of transition — the extract opens on the threshold of a journey.",
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
              { id: "a", text: "As a flashback" },
              { id: "b", text: "As an argument" },
              { id: "c", text: "As a list" },
              { id: "d", text: "Chronologically" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cile-u10-s8-str-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which paragraph does Tomas board the ferry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paragraph 1" },
              { id: "b", text: "It is not described" },
              { id: "c", text: "Paragraph 3" },
              { id: "d", text: "Paragraph 2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Paragraph function",
                statement: "Each paragraph advances the chronology: harbour, jetty, boarding.",
              },
            ],
            steps: [
              {
                reasoning: "'He signed the last form... and climbed aboard' is in the third paragraph.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Paragraph 3",
          },
        },
        {
          id: "cile-u10-s8-str-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does the writer begin the extract with Tomas alone, counting crates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To establish his careful character and the work before the farewell" },
              { id: "b", text: "To describe a storm" },
              { id: "c", text: "To introduce the ferry timetable" },
              { id: "d", text: "To show he is lazy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Opening function",
                statement: "The opening establishes character and context before the emotional beat.",
              },
            ],
            steps: [
              {
                reasoning: "Counting 'for the third time' shows diligence — his work must be finished before he can leave.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** To establish his careful character and the work before the farewell",
          },
        },
        {
          id: "cile-u10-s8-str-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What effect does the chronological structure have on the reader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It confuses the reader about the timeline" },
              { id: "b", text: "It hides the ending" },
              { id: "c", text: "It lets the reader experience the departure in real time" },
              { id: "d", text: "It repeats the same events" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chronology",
                statement: "Time-order structure mirrors the journey's natural build.",
              },
            ],
            steps: [
              {
                reasoning: "Dusk → horn → boarding → sea lets events unfold naturally, building anticipation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** It lets the reader experience the departure in real time",
          },
        },
        {
          id: "cile-u10-s8-str-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where does the emotional focus of the extract shift?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From fear to anger" },
              { id: "b", text: "It never shifts" },
              { id: "c", text: "From the girl to the cargo" },
              { id: "d", text: "From work and cargo to a personal farewell" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Thematic shift",
                statement: "Paragraph 1 is work-focused; paragraph 2 introduces the personal stake.",
              },
            ],
            steps: [
              {
                reasoning: "Crates and manifest → cello and grandmother → girl waving: the focus moves from labour to people.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** From work and cargo to a personal farewell",
          },
        },
        {
          id: "cile-u10-s8-str-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What structural purpose does ending with Tomas thinking about sleep serve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It returns to the harbour" },
              { id: "b", text: "It introduces a new problem" },
              { id: "c", text: "It summarises the cargo list" },
              { id: "d", text: "It gives quiet closure and releases the tension" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ending",
                statement: "A quiet final image resolves tension and signals transition.",
              },
            ],
            steps: [
              {
                reasoning: "The sleep thought is the calm after the busy departure — closure.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** It gives quiet closure and releases the tension",
          },
        },
        {
          id: "cile-u10-s8-str-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many paragraphs does the extract contain, and what does each roughly cover? Give the number of paragraphs.",
          response: {
            type: "numeric",
            parts: [{ label: "paragraphs", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "Three paragraphs: harbour/work, jetty/farewell, boarding/departure.",
              },
            ],
            steps: [
              {
                reasoning: "Count the paragraph blocks: 3.",
                working: "\\text{3}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each advances the chronology to the next stage.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cile-u10-s8-str-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the paragraph number for each event. Give: (a) the paragraph containing the manifest and crate-counting; (b) the paragraph introducing the girl on the jetty; (c) the paragraph where Tomas boards.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 2 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Paragraph order",
                statement: "The structure moves through three stages in order.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Manifest and counting are in paragraph 1.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "The girl waving is in paragraph 2.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Boarding the ferry is in paragraph 3.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 1 (b) 2 (c) 3",
          },
        },
        {
          id: "cile-u10-s8-str-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many distinct stages does the extract's structure move through?",
          response: {
            type: "numeric",
            parts: [{ label: "stages", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structural stages",
                statement: "Preparation/work → farewell → departure.",
              },
            ],
            steps: [
              {
                reasoning: "Stage 1: counting crates and manifest; stage 2: horn and girl; stage 3: boarding.",
                working: "\\text{3 stages}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each stage is one paragraph.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cile-u10-s8-str-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Count structural elements. Give: (a) the number of paragraphs; (b) the number of distinct locations mentioned (harbour, jetty, open sea); (c) the number of sides of the water the action occurs on.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structural counting",
                statement: "Map the structure: paragraphs, locations, spatial sides.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Three paragraphs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Locations: harbour, far jetty, open sea — 3.",
                working: "\\text{harbour; jetty; sea}",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Tomas on one side, the girl on the other — 2 sides.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "The spatial divide mirrors the emotional separation.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer: "(a) 3 (b) 3 (c) 2",
          },
        },
        {
          id: "cile-u10-s8-str-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the effect of opening the extract with sensory detail ('smelled of salt and diesel').",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sensory opening",
                statement: "Immediate sensory detail immerses the reader in place.",
              },
            ],
            steps: [
              {
                reasoning: "Smell is the most evocative sense — 'salt and diesel' instantly places a working harbour.",
                working: "\\text{olfactory}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It grounds the scene before any action — the reader is 'there' from line one.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The sensory opening immerses the reader immediately — the reader smells the working harbour before a single event happens.",
          },
        },
        {
          id: "cile-u10-s8-str-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse how the extract's structure builds from work, to farewell, to rest.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structural arc",
                statement: "Paragraphs move the reader through labour → emotion → release.",
              },
            ],
            steps: [
              {
                reasoning: "Paragraph 1: methodical work — counting, manifest, cargo.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Paragraph 2: the emotional turn — cello's history, girl waving.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Paragraph 3: release — boarding, glittering sea, thought of sleep.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The three-paragraph structure moves from dutiful labour, through emotional farewell, to quiet release — mirroring the journey from work to rest.",
          },
        },
        {
          id: "cile-u10-s8-str-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How would the extract's effect change if it began with Tomas already on the ferry looking back? Discuss the structural impact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structural alternatives",
                statement: "Chronological build creates anticipation; flash-forward would create mystery.",
              },
            ],
            steps: [
              {
                reasoning: "Current order builds anticipation — reader experiences departure with Tomas.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Starting on the ferry would create mystery about what he left and why.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "But it would lose the emotional build — the cello and girl would arrive as explanation, not experience.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Chronology suits a journey story — events gain weight through sequence.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Chronological order lets the reader feel the departure build; a flash-forward would create curiosity but lose the emotional immersion — the current structure is more effective.",
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
              { id: "a", text: "Metaphor" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Alliteration" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cile-u10-s8-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best combines a language technique and a structural feature of the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration + list structure" },
              { id: "b", text: "Rhyme + flashback structure" },
              { id: "c", text: "Onomatopoeia + argument structure" },
              { id: "d", text: "Simile 'like dice in a cup' + chronological structure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mixed analysis",
                statement: "Identify both language devices and structural organisation.",
              },
            ],
            steps: [
              {
                reasoning: "The simile is a language device; the events unfold in time order — chronological structure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Simile 'like dice in a cup' + chronological structure",
          },
        },
        {
          id: "cile-u10-s8-mx-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What technique and effect does 'stamped it twice' create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetition — emphasises thorough, official procedure" },
              { id: "b", text: "Hyperbole — exaggerates the paperwork" },
              { id: "c", text: "Simile — shows speed" },
              { id: "d", text: "Personification — makes the form alive" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Repetition",
                statement: "Repeating an action stresses care and procedure.",
              },
            ],
            steps: [
              {
                reasoning: "Stamping twice repeats the action — emphasis on methodical work before departure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Repetition — emphasises thorough, official procedure",
          },
        },
        {
          id: "cile-u10-s8-mx-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the structural function of the opening paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To reveal the ending" },
              { id: "b", text: "To introduce the girl immediately" },
              { id: "c", text: "To describe the sea voyage" },
              { id: "d", text: "To establish setting and Tomas's working routine" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Opening",
                statement: "The opening grounds the reader in place and routine.",
              },
            ],
            steps: [
              {
                reasoning: "Paragraph 1 sets the harbour, the smell and Tomas's careful counting — routine before departure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** To establish setting and Tomas's working routine",
          },
        },
        {
          id: "cile-u10-s8-mx-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which structural feature provides closure to the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The manifest list" },
              { id: "b", text: "Tomas's final thought about sleep" },
              { id: "c", text: "The counting of crates" },
              { id: "d", text: "The horn sounding" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Closure",
                statement: "A quiet final image resolves the scene's tension.",
              },
            ],
            steps: [
              {
                reasoning: "Thinking about sleep for the first time in nine days signals the end of the work period — closure.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Tomas's final thought about sleep",
          },
        },
        {
          id: "cile-u10-s8-mx-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What mood does the imagery 'dark and glittering' create for the open sea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Awe mixed with slight apprehension" },
              { id: "b", text: "Boredom" },
              { id: "c", text: "Anger" },
              { id: "d", text: "Nothing — it is just descriptive" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery and mood",
                statement: "'Dark' hints at danger; 'glittering' at beauty — combined, awe.",
              },
            ],
            steps: [
              {
                reasoning: "The contrasting adjectives create a mood of wonder tinged with the unknown.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Awe mixed with slight apprehension",
          },
        },
        {
          id: "cile-u10-s8-mx-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many paragraphs does the extract contain?",
          response: {
            type: "numeric",
            parts: [{ label: "paragraphs", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "Three paragraphs: harbour/work, jetty/farewell, boarding/departure.",
              },
            ],
            steps: [
              {
                reasoning: "Count the paragraph blocks separated by blank lines: 3.",
                working: "\\text{3}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each corresponds to a stage of the departure.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cile-u10-s8-mx-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Count devices in the extract. Give: (a) the number of similes; (b) the number of paragraphs; (c) the number of cargo item types on the manifest.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 3 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mixed counting",
                statement: "Count language devices and structural elements separately.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "One simile: 'like dice in a cup'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Three paragraphs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Tea, coffee, cello — 3 item types.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 1 (b) 3 (c) 3",
          },
        },
        {
          id: "cile-u10-s8-mx-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many main structural stages does the extract pass through?",
          response: {
            type: "numeric",
            parts: [{ label: "stages", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structural stages",
                statement: "Work → farewell → departure.",
              },
            ],
            steps: [
              {
                reasoning: "Counting/work, the jetty farewell, boarding — three stages.",
                working: "\\text{3}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each maps to one paragraph.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cile-u10-s8-mx-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Count combined features. Give: (a) the number of adjectives describing the sea; (b) the number of times the horn sounds; (c) the number of oceans the cello crossed; (d) the number of times Tomas stamped the form.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 2 },
              { label: "c", answer: 3 },
              { label: "d", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence counting",
                statement: "Verify each count against the exact wording.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'dark' and 'glittering' — 2 adjectives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "'sounded twice' — 2 times.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "'across three oceans' — 3.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "'stamped it twice' — 2 times.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) 2 (b) 2 (c) 3 (d) 2",
          },
        },
        {
          id: "cile-u10-s8-mx-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how 'the crates rattled like dice in a cup' uses language to create tension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simile and tension",
                statement: "The simile makes the cargo seem randomly tumbling — unsettled.",
              },
            ],
            steps: [
              {
                reasoning: "'Like dice in a cup' compares crates to tumbling dice — random, unstable motion.",
                working: "\\text{simile}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect: suggests the precious cargo (and Tomas's situation) feels precarious — quiet tension.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The simile turns the crates into tumbling dice — their random rattling mirrors Tomas's unsettled departure and builds quiet tension.",
          },
        },
        {
          id: "cile-u10-s8-mx-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse how the chronological structure mirrors the journey Tomas is about to take.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure and journey",
                statement: "Time-order structure mirrors the voyage's progression.",
              },
            ],
            steps: [
              {
                reasoning: "The extract moves forward in time: dusk counting → horn → boarding → open sea.",
                working: "\\text{chronology}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This mirrors the voyage itself — departure, crossing, arrival.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Ending on the sea ahead makes the reader look forward with Tomas.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The forward-moving structure mirrors the voyage — the reader travels from harbour to open sea alongside Tomas, ending looking ahead with him.",
          },
        },
        {
          id: "cile-u10-s8-mx-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a paragraph analysing how language and structure work together in the final paragraph of the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated analysis",
                statement: "PEE applied to both a language device and a structural feature.",
              },
            ],
            steps: [
              {
                reasoning: "Language: short action sentence 'signed... stamped... climbed aboard' gives brisk pace.",
                working: "\\text{language}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Language: 'dark and glittering' imagery creates awe and possibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Structure: the paragraph resolves the chronological build — work done, departure complete.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Together: brisk actions plus vast imagery plus quiet ending = relief and anticipation.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The final paragraph combines brisk action language, awe-inspiring sea imagery and chronological resolution — together creating a mood of relief and anticipation for the journey.",
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
