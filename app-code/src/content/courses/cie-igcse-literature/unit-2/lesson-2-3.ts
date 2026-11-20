import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cieilit-u2-lesson-2-3",
  code: "2-3",
  title: "Prose and drama analysis for essays",
  goal: "I CAN write analytical essays on prose fiction and drama.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Section 2: Writing about literature",
  ],
  vocabulary: [
    {
      term: "Narrator",
      definition:
        "The voice telling the story — first/third person, reliable or unreliable.",
    },
    {
      term: "Characterisation",
      definition:
        "How writers reveal character — through dialogue, action, description, thoughts.",
    },
    {
      term: "Setting",
      definition:
        "Time and place of the story — can reflect or contrast with character/mood.",
    },
    {
      term: "Stage directions",
      definition:
        "Instructions in plays indicating movement, tone, lighting, sound.",
    },
    {
      term: "Dramatic irony",
      definition:
        "Audience knows something characters don't — creating tension or humour.",
    },
    {
      term: "Soliloquy",
      definition:
        "A character speaking thoughts aloud while alone on stage — revealing inner state.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u2-prose-drama",
      title: "Analysing prose and drama",
      skill:
        "Write essays analysing narrative techniques in fiction and drama.",
      lesson: {
        sections: [
          {
            heading: "Prose analysis",
            body: "Analyse **narrative voice** — who tells the story and can they be trusted? **Characterisation** — how are characters revealed through dialogue, action, description and interior thought? **Setting** — does place mirror mood or theme? **Structure** — linear, flashback, multiple viewpoints? Focus on how choices reveal meaning, not just what happens.",
          },
          {
            heading: "Drama analysis",
            body: "Drama is meant to be performed — analyse **stage directions** (movement, lighting, sound create meaning), **dialogue** (subtext — what characters mean vs say), **dramatic irony** (audience superiority creating tension), **soliloquies** (inner thoughts revealed), and **structure** (acts, scenes, climax). Ask: how would this play differently on stage?",
          },
          {
            heading: "Essay approach",
            body: "Whether prose or drama: build a **thesis** about theme or technique, use **PEE paragraphs** with embedded evidence (quotes or stage directions), and **link method to meaning**. For drama, remember it is performance — staging choices are part of the text's meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Prose focus",
            statement: "Narrator + characterisation + setting + structure",
          },
          {
            name: "Drama focus",
            statement:
              "Dialogue + stage directions + dramatic irony + performance",
          },
        ],
        workedExample: {
          problem:
            "A play's stage directions say 'lights dim' as a character confesses. What should an essay note?",
          solution:
            "Stage directions are meaning — dimming lights visually isolates the character, creating intimacy or secrecy around the confession. The staging IS the meaning.",
        },
      },
      questions: [
        {
          id: "cieilit-u2-prd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dramatic irony occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The audience laughs at a joke" },
              {
                id: "b",
                text: "The audience knows something the characters don't",
              },
              { id: "c", text: "A character lies to another" },
              { id: "d", text: "The play has a sad ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement:
                  "Audience knowledge exceeding characters' creates tension or humour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dramatic irony = audience knows more than characters — creating anticipation or tragic tension.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The audience knows something the characters don't.",
            commonErrors: [
              "Confusing dramatic irony with situational irony in prose.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways a writer reveals character in prose fiction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Characterisation",
                statement: "Characters revealed through multiple channels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dialogue: what characters say (and don't say) reveals personality, motives and relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Action and description: what characters do and how they look/behave reveals inner state.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interior thought: direct access to a character's mind shows private feelings and contradictions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dialogue, action/description and interior thought reveal character.",
            commonErrors: [
              "Only analysing what characters say, ignoring action and thought.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are stage directions important in drama analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stage directions",
                statement:
                  "Performance instructions carry meaning — not just technical notes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stage directions indicate movement, lighting, sound — they shape how the audience experiences the scene.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They reveal subtext — e.g. a character turning away during a speech shows discomfort or defiance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drama is performed — ignoring stage directions misses half the text's meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stage directions shape performance and reveal subtext — essential for full drama analysis.",
            commonErrors: [
              "Treating stage directions as irrelevant technical notes.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan an essay on how a play uses dramatic irony to develop its themes.",
          parts: [
            {
              label: "a",
              prompt: "Give a thesis identifying the theme and irony's role.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Plan three analytical paragraphs.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Drama essay planning",
                statement: "Theme + dramatic device → integrated paragraphs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Dramatic irony develops the theme of deception — the audience sees truths the characters conceal.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Thesis links theme to the specific dramatic technique.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Para 1: first irony instance — what audience knows, what characters don't, effect created.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 2: second instance — how irony deepens or complicates the theme.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 3: climax/ending — how irony resolves or leaves tension, reinforcing theme.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each paragraph quotes dialogue or stage directions as evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Thesis: theme + irony's role. (b) Paragraphs tracking irony instances through the play's development.",
            commonErrors: [
              "Retelling the plot instead of analysing how irony creates meaning.",
            ],
          },
        },
      ],
    },
  ],
};
