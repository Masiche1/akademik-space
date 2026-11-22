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
              { id: "a", text: "The play has a sad ending" },
              { id: "b", text: "A character lies to another" },
              {
                id: "c",
                text: "The audience knows something the characters don't",
              },
              { id: "d", text: "The audience laughs at a joke" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cieilit-u2-prd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'soliloquy' in drama is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narration provided by the playwright" },
              { id: "b", text: "Dialogue spoken between two characters" },
              {
                id: "c",
                text: "A character speaking their thoughts aloud while alone on stage",
              },
              { id: "d", text: "A set of stage directions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy",
                statement:
                  "A character speaking thoughts aloud while alone — revealing inner state directly to the audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A soliloquy gives the audience direct access to a character's private thoughts — a key analytical resource in drama.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) A character speaking their thoughts aloud while alone on stage.",
            commonErrors: [
              "Confusing soliloquy with dialogue or aside.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Subtext' in dramatic dialogue refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Instructions written in stage directions" },
              { id: "b", text: "The play's title and author" },
              {
                id: "c",
                text: "What characters imply beneath what they actually say",
              },
              { id: "d", text: "The literal meaning of what is said" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement:
                  "The implied meaning beneath dialogue — what characters mean versus what they say.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtext is the gap between speech and meaning — analysing it reveals character motives and tensions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) What characters imply beneath what they actually say.",
            commonErrors: [
              "Analysing only the literal words of dialogue, ignoring implication.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An 'unreliable narrator' is one who:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never appears as a character in the story" },
              { id: "b", text: "Writes the story entirely in rhyme" },
              { id: "c", text: "Always tells the story in first person" },
              {
                id: "d",
                text: "Cannot be fully trusted, giving a biased or distorted account",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unreliable narrator",
                statement:
                  "A narrator whose account is biased, distorted or untrustworthy — the reader must read between the lines.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An unreliable narrator's account cannot be taken at face value — gaps, contradictions or bias signal the unreliability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Cannot be fully trusted, giving a biased or distorted account.",
            commonErrors: [
              "Assuming the narrator always tells the truth.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In prose analysis, 'setting' is significant because it may:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Mirror or contrast with mood and theme",
              },
              { id: "b", text: "Reveal the author's name" },
              { id: "c", text: "Only indicate the date of the story" },
              { id: "d", text: "Replace the need for characterisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Setting",
                statement:
                  "Time and place can reflect or contrast with character, mood and theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Setting is never neutral — a stormy night can mirror inner turmoil; a peaceful garden can contrast with conflict.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Mirror or contrast with mood and theme.",
            commonErrors: [
              "Describing setting without linking it to mood or meaning.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'flashback' in narrative structure refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of poetic refrain" },
              { id: "b", text: "A passage of dialogue only" },
              {
                id: "c",
                text: "A scene set before the main timeline of the story",
              },
              { id: "d", text: "A sudden ending to the narrative" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flashback",
                statement:
                  "Narrative movement to events before the main timeline — revealing past that shapes the present.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Flashbacks interrupt the main timeline to show earlier events — often explaining character motives or past trauma.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) A scene set before the main timeline of the story.",
            commonErrors: [
              "Confusing flashback with foreshadowing — flashback goes backward, foreshadowing goes forward.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In how many ways does this lesson list for revealing character in prose fiction — through dialogue, action/description and interior thought? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
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
                  "The three channels are dialogue, action/description, and interior thought.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
            commonErrors: [
              "Counting only dialogue and ignoring action and thought.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A five-act tragedy is divided into how many acts? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Five-act structure",
                statement:
                  "Classical tragedy divided into five acts — exposition to catastrophe.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A five-act structure has five acts; the plays studied at IGCSE vary, but the classical model uses five.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
            commonErrors: [
              "Assuming every play has five acts — check the actual structure of the play.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Answer both parts with numbers only.",
          parts: [
            {
              label: "a",
              prompt: "How many elements make up the drama-analysis focus: dialogue, stage directions, dramatic irony and performance?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "How many acts does a three-act play structure have?",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Drama focus",
                statement:
                  "Dialogue + stage directions + dramatic irony + performance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Four elements: dialogue, stage directions, dramatic irony and performance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A three-act structure has three acts — setup, confrontation, resolution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 4  (b) 3",
            commonErrors: [
              "Confusing acts with scenes — count only the acts asked for.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'Prose focus' formula names narrator, characterisation, setting and structure — how many analytical elements is that? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Prose focus",
                statement: "Narrator + characterisation + setting + structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Narrator (1), characterisation (2), setting (3), structure (4) — four elements.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
            commonErrors: [
              "Omitting structure or narrator when counting.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how subtext operates in dramatic dialogue and why it matters for analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Subtext",
                statement:
                  "Characters say one thing and mean another — the gap reveals motive and tension.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtext is the implied meaning beneath spoken words — characters often cannot say what they truly feel or intend.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It creates tension — polite surface language can conceal conflict, deception or longing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysing subtext means asking what a character means versus what they say — and linking it to theme.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Subtext is implied meaning beneath dialogue — analysing it reveals motives and tensions the words hide.",
            commonErrors: [
              "Quoting dialogue without exploring what lies beneath it.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should setting be analysed in relation to character and mood in prose fiction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Setting analysis",
                statement:
                  "Place and time reflect or contrast with character, mood and theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Setting is not backdrop — writers choose time and place deliberately to shape the story's atmosphere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It mirrors or contrasts: a bleak landscape can echo a character's despair; a warm setting can heighten the tragedy of events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Linking setting to mood and theme turns description into analysis — showing how place creates meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Setting shapes mood and echoes or contrasts theme — analyse it in relation to character, not as mere description.",
            commonErrors: [
              "Describing the setting without connecting it to meaning.",
            ],
          },
        },
        {
          id: "cieilit-u2-prd-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan an essay on how a novel uses narrative voice to shape its meaning.",
          parts: [
            {
              label: "a",
              prompt: "Give a thesis identifying the voice and its effect.",
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
                name: "Prose essay planning",
                statement: "Voice + effect → structured paragraphs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The novel's unreliable first-person narrator shapes meaning by filtering events through a biased, self-justifying voice.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Thesis identifies the narrative voice and the specific effect it creates.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Para 1: narrator identity — first/third person, who they are, and how their perspective limits or frames the story.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 2: reliability — evidence of bias, contradiction or distortion; how the reader must question the account.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 3: voice and theme — how the narrative voice develops the novel's central concerns and shapes the ending's impact.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each paragraph embeds short quotations and links voice → effect → meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Thesis: voice + its effect. (b) Paragraphs on narrator identity, reliability, and voice's link to theme.",
            commonErrors: [
              "Summarising the plot instead of analysing how the voice shapes meaning.",
            ],
          },
        },
      ],
    },
  ],
};
