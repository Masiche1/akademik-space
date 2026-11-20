import type { Lesson } from "../../../types.ts";

export const lesson511: Lesson = {
  id: "cial-e-u5-lesson-5-1",
  code: "5-1",
  title: "Dramatic conventions and stagecraft",
  goal: "I CAN analyse how drama uses conventions and staging to create meaning.",
  standards: ["9093: drama analysis"],
  vocabulary: [
    {
      term: "Dramatic convention",
      definition:
        "Accepted device of theatre, e.g. soliloquy, aside, dramatic irony.",
    },
    {
      term: "Stagecraft",
      definition:
        "Use of staging, lighting, sound and movement in performance.",
    },
    {
      term: "Soliloquy",
      definition: "Character speaks thoughts aloud alone on stage.",
    },
    {
      term: "Aside",
      definition: "Character speaks to audience, unheard by others on stage.",
    },
    {
      term: "Dramatic irony",
      definition: "Audience knows more than characters, creating tension.",
    },
    {
      term: "Fourth wall",
      definition: "Invisible barrier between stage and audience.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u5-stagecraft",
      title: "Dramatic conventions",
      skill: "Identify and analyse dramatic conventions in plays.",
      lesson: {
        sections: [
          {
            heading: "Key conventions",
            body: "Soliloquy: reveals inner thoughts. Aside: addresses audience directly. Dramatic irony: audience knows what characters don't. Entrances/exits: structure scenes. Prologue/epilogue: frame the action.",
          },
          {
            heading: "Stagecraft",
            body: "Lighting: mood, focus, time. Sound: atmosphere, transitions. Movement: character relationships, tension. Set design: symbolism, period, social context. Costume: characterisation, status.",
          },
          {
            heading: "Structure in drama",
            body: "Acts and scenes organize action. Rising action builds tension. Climax resolves conflict. Denouement wraps up. Entrances/exits mark scene changes and emotional shifts.",
          },
        ],
        keyFormulas: [
          {
            name: "Drama conventions",
            statement: "Soliloquy+aside+irony+staging=theatrical meaning.",
          },
        ],
        workedExample: {
          problem: "How does dramatic irony work in Hamlet?",
          solution:
            "Audience knows Claudius killed Old Hamlet; Hamlet doesn't. Creates tension and suspense.",
        },
      },
      questions: [
        {
          id: "cial-e-u5-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a soliloquy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Character speaks thoughts aloud alone on stage",
              },
              {
                id: "b",
                text: "Character speaks to audience unheard by others",
              },
              { id: "c", text: "Two characters converse" },
              { id: "d", text: "Narrator describes action" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy",
                statement: "Alone on stage, speaking thoughts aloud.",
              },
            ],
            steps: [
              {
                reasoning: "Soliloquy = alone + thoughts.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Alone speaking thoughts aloud",
            commonErrors: ["Confusing with aside."],
          },
        },
        {
          id: "cial-e-u5-dc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does dramatic irony create effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic irony",
                statement:
                  "Audience knowledge creates tension and anticipation.",
              },
            ],
            steps: [
              {
                reasoning: "Audience knows what characters don't.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creates suspense/anticipation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Audience knowledge > character knowledge → tension.",
            commonErrors: ["Saying it confuses the audience."],
          },
        },
        {
          id: "cial-e-u5-dc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does stagecraft contribute to meaning in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stagecraft",
                statement:
                  "Lighting, sound, movement, set create atmosphere and meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Lighting sets mood/focus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sound creates atmosphere.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Movement shows relationships.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Set/costume symbolise context.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Lighting+sound+movement+set create theatrical meaning.",
            commonErrors: ["Ignoring performance elements."],
          },
        },
        {
          id: "cial-e-u5-dc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Dramatic conventions and stagecraft.",
          parts: [
            { label: "a", prompt: "Define soliloquy.", marks: 1 },
            { label: "b", prompt: "How does dramatic irony work?", marks: 2 },
            { label: "c", prompt: "Stagecraft elements?", marks: 3 },
            {
              label: "d",
              prompt: "Analyse a convention in a play you know.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Drama",
                statement: "Conventions+irony+stagecraft+analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Alone speaking thoughts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Audience knows more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Creates tension.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Lighting/sound/movement/set.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Each explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Creates meaning.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Convention identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Textual evidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect analysed.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Judgement reached.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) soliloquy (b) irony effect (c) stagecraft (d) convention analysis",
          },
        },
        {
          id: "cial-e-u5-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an aside in drama?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Character addresses the audience, unheard by others on stage",
              },
              { id: "b", text: "Character speaks alone on stage" },
              { id: "c", text: "Narrator describes the action" },
              { id: "d", text: "Stage direction in brackets" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aside",
                statement: "To audience only, unheard by characters.",
              },
            ],
            steps: [
              {
                reasoning: "Aside = audience only.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Audience only, unheard by characters",
            commonErrors: ["Confusing with soliloquy."],
          },
        },
        {
          id: "cial-e-u5-dc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which convention reveals a character's private thoughts while alone on stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soliloquy" },
              { id: "b", text: "Aside" },
              { id: "c", text: "Prologue" },
              { id: "d", text: "Entrances and exits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy",
                statement: "Alone, thoughts aloud.",
              },
            ],
            steps: [
              {
                reasoning: "Soliloquy = private thoughts.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Soliloquy",
            commonErrors: ["Choosing aside."],
          },
        },
        {
          id: "cial-e-u5-dc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the 'fourth wall' refer to?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Invisible barrier between performers and audience",
              },
              { id: "b", text: "A literal wall in the set" },
              { id: "c", text: "A curtain between acts" },
              { id: "d", text: "A character's monologue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fourth wall",
                statement: "Stage-audience boundary.",
              },
            ],
            steps: [
              {
                reasoning: "Fourth wall = boundary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Barrier between performers and audience",
            commonErrors: ["Thinking it is literal."],
          },
        },
        {
          id: "cial-e-u5-dc-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main function of a prologue or epilogue?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To introduce or comment on the action from outside the main events",
              },
              { id: "b", text: "To list the cast" },
              { id: "c", text: "To replace the climax" },
              { id: "d", text: "To show stage directions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Prologue/epilogue",
                statement: "Frame the action.",
              },
            ],
            steps: [
              {
                reasoning: "Frames action.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Introduce/comment on action",
            commonErrors: ["Thinking it is part of plot."],
          },
        },
        {
          id: "cial-e-u5-dc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do entrances and exits structure a play?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Entrances/exits",
                statement: "Mark scene changes and emotional shifts.",
              },
            ],
            steps: [
              {
                reasoning: "Mark transitions between scenes/characters.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Control pacing and build/release tension.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Entrances/exits mark scene changes, shift focus between characters and control pacing and tension.",
            commonErrors: ["Ignoring their structural role."],
          },
        },
        {
          id: "cial-e-u5-dc-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can lighting create meaning in performance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Lighting",
                statement: "Mood, focus, time, symbolism.",
              },
            ],
            steps: [
              {
                reasoning: "Sets mood and directs audience focus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Signals time/place or symbolises themes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Lighting sets mood, directs focus and can signal time or symbolise themes.",
            commonErrors: ["Treating lighting as decorative only."],
          },
        },
        {
          id: "cial-e-u5-dc-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of stage directions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Stage directions",
                statement: "Guide performance and reveal character/mood.",
              },
            ],
            steps: [
              {
                reasoning: "Reveal characterisation and mood.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Guide actors/director in performance.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Stage directions guide performance and reveal character, mood and relationships.",
            commonErrors: ["Skipping them in analysis."],
          },
        },
        {
          id: "cial-e-u5-dc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how a playwright might use sound to create tension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sound",
                statement:
                  "Atmosphere, transitions and tension through audio effects.",
              },
            ],
            steps: [
              {
                reasoning: "Sound effects build atmosphere and foreshadowing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Silence or abrupt sound creates contrast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Timing of sound controls pacing of a scene.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear link to audience tension.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Sound builds atmosphere, foreshadows events and controls pacing — silence or sudden noise heightens tension.",
            commonErrors: ["Describing sound without linking to tension."],
          },
        },
        {
          id: "cial-e-u5-dc-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does dramatic irony shape the audience's experience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic irony",
                statement:
                  "Audience knowledge creates tension and superior perspective.",
              },
            ],
            steps: [
              {
                reasoning: "Knowledge gap between audience and characters.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creates anticipation and suspense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gives audience a superior/judging position.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Links to themes or character flaws.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Dramatic irony gives the audience superior knowledge, creating suspense and allowing judgement of characters' mistakes.",
            commonErrors: ["Confusing with verbal irony."],
          },
        },
        {
          id: "cial-e-u5-dc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the effects of a soliloquy and an aside.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Soliloquy vs aside",
                statement: "Private thoughts vs direct audience address.",
              },
            ],
            steps: [
              {
                reasoning: "Soliloquy: alone, reveals private thoughts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Aside: audience addressed within company.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different intimacy with audience.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison made.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "A soliloquy reveals private thoughts while alone; an aside directly addresses the audience while others are on stage — different degrees of intimacy.",
            commonErrors: ["Treating them as identical."],
          },
        },
        {
          id: "cial-e-u5-dc-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic conventions in a play you know.",
          parts: [
            { label: "a", prompt: "Define dramatic irony.", marks: 2 },
            { label: "b", prompt: "Two uses of entrances/exits?", marks: 2 },
            { label: "c", prompt: "How does set design symbolise?", marks: 2 },
            {
              label: "d",
              prompt: "Analyse one convention in a named play.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conventions",
                statement: "Irony+entrances+set+analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Audience knows more.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Creates tension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Scene transitions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Emotional/pacing control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Setting reflects theme/context.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Supports meaning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Convention identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evidence from play.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect analysed.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) irony (b) entrances/exits (c) set symbolism (d) convention analysis",
          },
        },
        {
          id: "cial-e-u5-dc-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Stagecraft analysis.",
          parts: [
            { label: "a", prompt: "Lighting effects?", marks: 2 },
            { label: "b", prompt: "Sound effects?", marks: 2 },
            { label: "c", prompt: "Movement and blocking?", marks: 3 },
            {
              label: "d",
              prompt: "Evaluate staging in a play you know.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stagecraft",
                statement: "Lighting+sound+movement+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mood/focus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Time/symbolism.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Atmosphere/foreshadowing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Tension/pacing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Relationships on stage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Physical distance = emotional distance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Movement builds tension.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Staging choice identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect evaluated.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Judgement reached.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) lighting (b) sound (c) movement (d) staging evaluation",
          },
        },
      ],
    },
    {
      id: "cial-e-u5-dramatic-language",
      title: "Character and language in drama",
      skill: "Analyse characterisation through dialogue and dramatic language.",
      lesson: {
        sections: [
          {
            heading: "Dialogue as characterisation",
            body: "Speech reveals character: status, education, personality, relationships. Subtext: what's unsaid matters. Pauses, interruptions, tone convey emotion.",
          },
          {
            heading: "Dramatic language features",
            body: "Verse vs prose: blank verse for nobility, prose for commoners (Shakespeare). Metaphor and imagery in speeches. Rhetorical devices: repetition, antithesis, hyperbole.",
          },
          {
            heading: "Character relationships",
            body: "Power dynamics through dialogue: who speaks, who interrupts, who is silenced. Status markers in language. Relationships revealed through interaction patterns.",
          },
        ],
        keyFormulas: [
          {
            name: "Dramatic language",
            statement:
              "Dialogue+subtext+verse/prose+rhetoric=characterisation.",
          },
        ],
        workedExample: {
          problem: "How does dialogue reveal status in Shakespeare?",
          solution:
            "Nobles speak in blank verse; commoners in prose. Language reflects social hierarchy.",
        },
      },
      questions: [
        {
          id: "cial-e-u5-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'subtext' mean in drama?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is implied but not directly stated" },
              { id: "b", text: "The main plot" },
              { id: "c", text: "Stage directions" },
              { id: "d", text: "Character names" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement: "Implied meaning beneath surface dialogue.",
              },
            ],
            steps: [
              {
                reasoning: "Subtext = unsaid meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Implied but not stated",
            commonErrors: ["Confusing with plot."],
          },
        },
        {
          id: "cial-e-u5-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does verse vs prose indicate character status?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Verse/prose",
                statement: "Verse=nobility, prose=commoners (Shakespeare).",
              },
            ],
            steps: [
              {
                reasoning: "Verse = higher status.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Prose = lower status.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Verse→nobles; prose→commoners.",
            commonErrors: ["Not linking to status."],
          },
        },
        {
          id: "cial-e-u5-cl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does dialogue reveal character relationships?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dialogue",
                statement:
                  "Speech patterns reveal power dynamics and relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Who speaks/interrupts shows power.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Formality level shows relationship.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Silence/absence meaningful.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Power dynamics through speech patterns.",
            commonErrors: ["Ignoring non-verbal cues."],
          },
        },
        {
          id: "cial-e-u5-cl-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Character and language in drama.",
          parts: [
            { label: "a", prompt: "Define subtext.", marks: 1 },
            { label: "b", prompt: "Verse vs prose?", marks: 2 },
            { label: "c", prompt: "Dialogue and relationships?", marks: 3 },
            {
              label: "d",
              prompt: "Analyse a character's speech in a play.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic language",
                statement: "Subtext+verse/prose+dialogue+speech analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Implied meaning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Verse=nobles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Prose=commoners.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Power dynamics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Formality/relationship.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Silence meaningful.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Speech quoted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Language analysed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Character revealed.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Effect clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) subtext (b) verse/prose (c) power dynamics (d) speech analysis",
          },
        },
        {
          id: "cial-e-u5-cl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is blank verse?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Unrhymed lines of iambic pentameter",
              },
              { id: "b", text: "Rhyme and rhythm poetry" },
              { id: "c", text: "Spoken prose dialogue" },
              { id: "d", text: "A stage direction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blank verse",
                statement: "Unrhymed iambic pentameter.",
              },
            ],
            steps: [
              {
                reasoning: "Blank = unrhymed; iambic pentameter.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Unrhymed iambic pentameter",
            commonErrors: ["Confusing with free verse."],
          },
        },
        {
          id: "cial-e-u5-cl-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What might a character's interruption of another suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assertiveness or rising tension" },
              { id: "b", text: "Polite agreement" },
              { id: "c", text: "Lack of education" },
              { id: "d", text: "A stage error" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Interruption",
                statement: "Power and tension in dialogue.",
              },
            ],
            steps: [
              {
                reasoning: "Interruption = power/tension.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Assertiveness or rising tension",
            commonErrors: ["Ignoring dramatic effect."],
          },
        },
        {
          id: "cial-e-u5-cl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which rhetorical device repeats a word or phrase at the start of successive clauses for emphasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anaphora" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Stage direction" },
              { id: "d", text: "Soliloquy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Anaphora",
                statement: "Repetition for emphasis.",
              },
            ],
            steps: [
              {
                reasoning: "Anaphora = initial repetition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Anaphora",
            commonErrors: ["Confusing with epistrophe."],
          },
        },
        {
          id: "cial-e-u5-cl-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In Shakespeare, which characters most often speak in prose rather than verse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower-status or comic characters" },
              { id: "b", text: "Nobles and kings" },
              { id: "c", text: "The chorus" },
              { id: "d", text: "Ghosts only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Verse/prose",
                statement: "Prose marks lower status.",
              },
            ],
            steps: [
              {
                reasoning: "Prose = lower status.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Lower-status or comic characters",
            commonErrors: ["Reversing verse/prose roles."],
          },
        },
        {
          id: "cial-e-u5-cl-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do pauses and silence function in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pause/silence",
                statement: "Creates tension and meaning beyond words.",
              },
            ],
            steps: [
              {
                reasoning: "Silence builds tension/anticipation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pause conveys unspoken emotion/subtext.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Pauses and silence create tension and convey emotion or subtext that dialogue cannot.",
            commonErrors: ["Ignoring non-verbal cues."],
          },
        },
        {
          id: "cial-e-u5-cl-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the effect of rhetorical questions in a dramatic speech?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rhetorical question",
                statement: "Engages audience and emphasises point.",
              },
            ],
            steps: [
              {
                reasoning: "Invites audience agreement/reflection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Emphasises argument without answering.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Rhetorical questions engage the audience and emphasise a point without requiring an answer.",
            commonErrors: ["Treating them as genuine questions."],
          },
        },
        {
          id: "cial-e-u5-cl-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can imagery in a character's speech reveal their nature?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery",
                statement: "Metaphor/simile reveals worldview and emotion.",
              },
            ],
            steps: [
              {
                reasoning: "Imagery shows character's preoccupations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Metaphors reveal inner state/emotion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consistent imagery patterns characterise.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "A character's recurring imagery reveals their preoccupations, emotions and worldview.",
            commonErrors: ["Identifying imagery without effect."],
          },
        },
        {
          id: "cial-e-u5-cl-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how social status is conveyed through language in drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Status markers",
                statement: "Vocabulary, grammar, verse/prose signal status.",
              },
            ],
            steps: [
              {
                reasoning: "Vocabulary level indicates education/status.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Grammar and sentence complexity differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Verse vs prose marks hierarchy.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Status is conveyed through vocabulary, sentence complexity and verse/prose choice.",
            commonErrors: ["Ignoring grammatical features."],
          },
        },
        {
          id: "cial-e-u5-cl-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do relationships emerge through patterns of dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dialogue patterns",
                statement: "Turn-taking, formality, interruption reveal ties.",
              },
            ],
            steps: [
              {
                reasoning: "Who speaks first/interruption shows power.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Formality level indicates closeness/status.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Silence or avoidance reveals tension.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Relationships emerge through turn-taking, formality, interruptions and silences.",
            commonErrors: ["Analysing lines in isolation."],
          },
        },
        {
          id: "cial-e-u5-cl-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of subtext in a play you know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Subtext",
                statement: "Unsaid meaning enriches character and tension.",
              },
            ],
            steps: [
              {
                reasoning: "Subtext identified in a scene.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Explains what is implied.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect on tension/characterisation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Evaluative judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Subtext enriches drama by conveying hidden motives and tensions beneath surface dialogue.",
            commonErrors: ["Re-stating plot instead of analysing."],
          },
        },
        {
          id: "cial-e-u5-cl-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Character and language — extended analysis.",
          parts: [
            { label: "a", prompt: "Define subtext.", marks: 2 },
            { label: "b", prompt: "Verse vs prose?", marks: 2 },
            { label: "c", prompt: "Two power markers in dialogue?", marks: 2 },
            {
              label: "d",
              prompt: "Analyse a character's language in a play you know.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic language",
                statement: "Subtext+verse/prose+power+speech analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Implied meaning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Beneath surface words.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Verse=nobility.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Prose=commoners.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Interruption/tone/vocabulary.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Speech quoted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Language analysed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Character/effect clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) subtext (b) verse/prose (c) power markers (d) speech analysis",
          },
        },
        {
          id: "cial-e-u5-cl-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Dramatic language and characterisation.",
          parts: [
            { label: "a", prompt: "Two rhetorical devices in speeches?", marks: 2 },
            { label: "b", prompt: "How does imagery reveal character?", marks: 3 },
            { label: "c", prompt: "How do relationships show in dialogue?", marks: 2 },
            {
              label: "d",
              prompt: "Analyse a speech in a play you know.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic language",
                statement: "Rhetoric+imagery+relationships+speech analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Anaphora/repetition/antithesis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Effect of each.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Imagery shows preoccupations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Reveals emotion/worldview.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Supports characterisation.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Power dynamics/formality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Silence/interruption.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Speech quoted and analysed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Methods identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect on audience judged.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) rhetoric (b) imagery (c) dialogue relationships (d) speech analysis",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u5-drama-notes",
      title: "Drama analysis — revision notes",
      summary:
        "Conventions, stagecraft, dialogue and characterisation in drama.",
      sections: [
        {
          heading: "Conventions",
          body: "Soliloquy (alone), aside (to audience), dramatic irony (audience knows more). Stagecraft: lighting, sound, movement, set.",
        },
        {
          heading: "Language",
          body: "Dialogue reveals character. Subtext = unsaid meaning. Verse=nobles, prose=commoners (Shakespeare). Power dynamics through speech.",
        },
        {
          heading: "Exam checklist",
          body: "Can you identify conventions? Analyse stagecraft? Link dialogue to character? Discuss subtext?",
        },
      ],
    },
  ],
};
