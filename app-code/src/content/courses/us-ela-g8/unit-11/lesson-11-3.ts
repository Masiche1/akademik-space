import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const COMPLIT: TextExtract = {
  title: "Comparative Passage: Two Endings",
  author: "Written for Akademik Space",
  text: "Story A Ending:\n'Maya stood at the door of the new apartment, key in hand. The boxes were still taped shut, but she didn't need to unpack to feel at home. Rose's words echoed: \"Houses don't hold memories. People do.\" She smiled, thinking of the porch light still on at Grandma's house — a small flame of welcome, waiting for her return.\n\nShe wasn't losing a home. She was gaining a place to tell her own stories.'\n\nStory B Ending:\n'Maya signed the lease and took the key. The apartment was clean, modern, empty. She put the box marked \"photos\" on the shelf and stared at the bare walls. Somewhere across town, Rose was probably still sitting at her crossword, waiting for a granddaughter who'd stopped visiting. Maya felt the weight of the key in her palm — heavy with everything she was leaving behind.'",
};

const COMPLIT2: TextExtract = {
  title: "Analysis Task",
  author: "Written for Akademik Space",
  text: "Compare how the two endings develop the theme of memory and legacy differently. Consider tone, imagery, and character perspective.",
};

export const lesson113: Lesson = {
  id: "ela8-u11-lesson-11-3",
  code: "11-3",
  title: "Comparative Literature Analysis",
  goal: "I CAN compare how different texts develop similar themes through different techniques.",
  standards: ["RL.8.9", "RL.8.6", "RL.8.4", "RL.8.2", "RL.8.1"],
  vocabulary: [
    {
      term: "Comparative analysis",
      definition: "Examining similarities and differences between texts.",
    },
    { term: "Tone", definition: "Author's attitude toward subject." },
    {
      term: "Imagery",
      definition: "Descriptive language appealing to senses.",
    },
    { term: "Perspective", definition: "Character's viewpoint or attitude." },
    {
      term: "Theme development",
      definition: "How texts explore central ideas differently.",
    },
    {
      term: "Narrative voice",
      definition: "Distinctive style and attitude of narrator.",
    },
  ],
  concepts: [
    {
      id: "ela8-u11-compare",
      title: "Comparing theme development",
      skill:
        "Analyze how different texts develop similar themes through different techniques.",
      lesson: {
        sections: [
          {
            heading: "Same theme, different approach",
            body: "Both endings explore memory/legacy but differently. Story A: **hopeful tone** — 'gaining a place to tell her own stories' suggests positive growth. Story B: **melancholy tone** — 'weight of the key,' 'everything she was leaving behind' suggests loss and guilt. Same theme (memory/legacy), different emotional outcome — A emphasizes continuity, B emphasizes cost.",
          },
          {
            heading: "Technique comparison",
            body: "Story A uses **rose-colored imagery**: 'porch light still on,' 'small flame of welcome' — warm, inviting. Story B uses **heavy imagery**: 'weight of the key,' 'bare walls' — cold, burdensome. Both use the key symbol but differently — A's key opens new possibilities, B's key weighs down. Tone, imagery, and perspective all serve different thematic emphases.",
          },
        ],
        keyFormulas: [
          {
            name: "Same theme ≠ same treatment",
            statement: "Texts can explore theme differently.",
          },
          {
            name: "Tone reveals attitude",
            statement: "Hopeful vs melancholy shapes meaning.",
          },
          {
            name: "Imagery reinforces tone",
            statement: "Warm vs cold imagery supports emotional direction.",
          },
        ],
        workedExample: {
          problem: "How do the two endings differ in tone?",
          solution:
            "Story A: hopeful — 'gaining a place to tell her own stories.' Story B: melancholy — 'weight of the key,' 'leaving behind.' Same theme, different emotional treatment.",
        },
      },
      questions: [
        {
          id: "ela8-u11-compare-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMPLIT,
          stem: "What is the main difference in tone between the two endings?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are sad" },
              { id: "b", text: "Both are hopeful" },
              { id: "c", text: "Story A is angry, Story B is happy" },
              { id: "d", text: "Story A is hopeful, Story B is melancholy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tone comparison",
                statement: "Emotional attitude difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A: 'gaining a place' (hopeful); B: 'weight of key,' 'leaving behind' (melancholy).",
                evidence: "hopeful vs melancholy",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Story A hopeful, Story B melancholy.",
            commonErrors: ["Missing the tonal contrast."],
          },
        },
        {
          id: "ela8-u11-compare-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMPLIT,
          stem: "How does Story B's imagery differ from Story A's? Explain the effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Imagery comparison",
                statement: "How description creates feeling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Story A: warm imagery — 'porch light,' 'flame of welcome' — inviting, hopeful.",
                evidence: "porch light... flame of welcome",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Story B: cold imagery — 'weight of key,' 'bare walls' — burdensome, lonely.",
                evidence: "weight of the key... bare walls",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: A emphasizes growth/possibility; B emphasizes loss/guilt — same theme, different emotional direction.",
                evidence: "imagery effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "A uses warm imagery (porch light, welcome) creating hope; B uses cold imagery (weight, bare walls) creating melancholy. Same theme, different emotional treatment.",
            commonErrors: [
              "Describing imagery without explaining emotional effect.",
            ],
          },
        },
        {
          id: "ela8-u11-compare-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMPLIT2,
          stem: "Write a comparative analysis paragraph explaining how the two endings develop the theme of memory and legacy differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative analysis",
                statement: "How texts differ in theme development.",
              },
              {
                kind: "skill",
                name: "Multi-element comparison",
                statement: "Tone + imagery + perspective.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Story A: hopeful tone — 'gaining a place to tell her own stories' — emphasizes growth and continuity.",
                evidence: "gaining a place",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Story B: melancholy tone — 'weight of key,' 'leaving behind' — emphasizes loss and guilt.",
                evidence: "weight of the key",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both explore memory/legacy but A emphasizes possibility, B emphasizes cost — different thematic emphases.",
                evidence: "memory and legacy",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              'Example: \'Both endings explore memory and legacy but with different emotional emphases. Story A uses hopeful tone and warm imagery — "porch light," "flame of welcome" — suggesting Maya gains new possibilities while maintaining connection. Story B uses melancholy tone and cold imagery — "weight of the key," "bare walls" — emphasizing loss and guilt. Same theme, different treatment: A explores legacy as continuity, B as cost.\'',
            commonErrors: ["Summarizing both without comparing."],
          },
        },
        {
          id: "ela8-u11-compare-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMPLIT,
          parts: [
            {
              label: "a",
              prompt: "How does the key symbol differently in each ending?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What does this reveal about theme?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Symbol comparison",
                statement: "Same symbol, different meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A: key opens new apartment — possibility; B: key 'weighs down' — burden.",
                evidence: "key in hand... weight of the key",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Reveals theme difference — A: legacy as growth; B: legacy as loss.",
                evidence: "theme difference",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) A: key = possibility; B: key = burden. (b) Theme difference — A: legacy as growth; B: legacy as loss.",
            commonErrors: [
              "Treating symbol as same in both — context changes meaning.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u11-technique",
      title: "Literary technique comparison",
      skill:
        "Compare how different texts use literary techniques to achieve effects.",
      lesson: {
        sections: [
          {
            heading: "Technique effectiveness",
            body: "Different techniques achieve different effects: **first-person unreliable** (collector story) creates suspicion and reader detective work; **third-person limited** (Rose/Maya story) creates empathy and emotional journey. **Warm imagery** (Story A) creates hope; **cold imagery** (Story B) creates melancholy. **Dialogue** reveals character directly; **description** shows indirectly. Choosing technique = choosing reader experience.",
          },
          {
            heading: "Comparing authorial choices",
            body: "Ask: Why did author choose this technique? Collector's first-person forces us to question his 'rescuing' narrative — creates moral ambiguity. Rose/Maya's third-person lets us see both characters' growth — creates emotional connection. Story A's hopeful ending satisfies; Story B's melancholy ending provokes reflection. Technique serves purpose — not just decoration but meaning-making.",
          },
        ],
        keyFormulas: [
          {
            name: "Technique = reader experience",
            statement: "How text is told shapes how it's received.",
          },
          {
            name: "POV choice = meaning",
            statement: "Perspective determines what readers know/feel.",
          },
          {
            name: "Imagery = emotion",
            statement: "Warm/cold imagery creates hopeful/melancholy tone.",
          },
        ],
        workedExample: {
          problem: "Why does Story B's ending feel heavier than Story A's?",
          solution:
            "Cold imagery ('weight,' 'bare walls'), melancholy tone ('leaving behind'), and guilt-laden perspective — all techniques working together to create heavier emotional impact.",
        },
      },
      questions: [
        {
          id: "ela8-u11-technique-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMPLIT,
          stem: "Which technique creates the heavier emotional impact in Story B?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dialogue" },
              { id: "b", text: "Warm imagery" },
              { id: "c", text: "Cold imagery + melancholy tone" },
              { id: "d", text: "First person POV" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technique identification",
                statement: "What creates effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Weight of key,' 'bare walls' — cold imagery + melancholy tone create heaviness.",
                evidence: "weight of the key",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Cold imagery + melancholy tone.",
            commonErrors: ["Missing combination of techniques."],
          },
        },
        {
          id: "ela8-u11-technique-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMPLIT,
          stem: "Compare how first-person unreliable narration (collector story) vs third-person limited (Rose/Maya story) affect reader experience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV comparison",
                statement: "How perspective affects reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First-person unreliable: reader questions narrator, becomes detective — suspicion.",
                evidence: "unreliable narrator",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Third-person limited: reader trusts narrator, empathizes with characters — emotional journey.",
                evidence: "reliable narrator",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Different reader roles: investigator vs empathetic observer.",
                evidence: "reader experience",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "First-person unreliable creates suspicion/detective work; third-person limited creates empathy/emotional journey. Different reader roles and experiences.",
            commonErrors: ["Describing POVs without comparing reader effect."],
          },
        },
        {
          id: "ela8-u11-technique-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMPLIT2,
          stem: "Analyze how authorial choices (tone, imagery, POV) work together to create different effects in the two endings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-technique analysis",
                statement: "How elements work together.",
              },
              {
                kind: "skill",
                name: "Authorial intent",
                statement: "Why these choices?",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Story A: hopeful tone + warm imagery (porch light) + positive framing — creates sense of growth/possibility.",
                evidence: "hopeful tone... warm imagery",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Story B: melancholy tone + cold imagery (weight, bare walls) + guilt framing — creates sense of loss/cost.",
                evidence: "melancholy... cold imagery",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Techniques work together — tone sets attitude, imagery reinforces, perspective guides — creating different thematic emphases.",
                evidence: "work together",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Story A combines hopeful tone, warm imagery, and positive framing to create growth/possibility. Story B combines melancholy tone, cold imagery, and guilt framing to create loss/cost. Techniques work together to create different thematic emphases from same theme.",
            commonErrors: [
              "Analyzing techniques separately — need to show interaction.",
            ],
          },
        },
        {
          id: "ela8-u11-technique-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMPLIT,
          parts: [
            {
              label: "a",
              prompt: "Why does authorial technique choice matter?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give one example of technique serving purpose.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technique purpose",
                statement: "Choices create meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Technique determines reader experience and thematic emphasis — not just decoration.",
                evidence: "technique choice",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Collector's first-person forces reader to question his 'rescuing' narrative — creates moral ambiguity.",
                evidence: "first-person",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Technique determines reader experience/thematic emphasis. (b) First-person forces questioning 'rescuing' narrative — creates ambiguity.",
            commonErrors: [
              "Thinking technique is just style — it creates meaning.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u11-synthesis",
      title: "Literature synthesis and exam readiness",
      skill:
        "Synthesize literary analysis skills for comprehensive exam performance.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive literary analysis",
            body: "Strong analysis connects: **theme** (what it means), **character** (how people change), **structure** (how story unfolds), **craft** (how author creates effects), **POV** (whose perspective). Each element supports the others — theme emerges through character development, structure builds to climax, craft creates emotional impact, POV shapes what readers know. Synthesis = showing how all elements work together.",
          },
          {
            heading: "Exam application",
            body: "For any literary question: identify what's asked (theme? character? craft?), gather evidence (quotes, examples), analyze (how/why it matters), synthesize (connect to bigger meaning). Practice comparing texts — same theme, different treatment. Practice unreliable narrators — question accounts, find gaps. Practice thesis writing — argument, not summary. Literature exams test analysis, not recall.",
          },
        ],
        keyFormulas: [
          {
            name: "Elements interconnected",
            statement: "Theme, character, structure, craft, POV work together.",
          },
          {
            name: "Analysis > summary",
            statement: "Explain how/why, not just what.",
          },
          {
            name: "Synthesis = connections",
            statement: "Show how elements create meaning.",
          },
        ],
        workedExample: {
          problem: "How would you synthesize analysis of the Rose/Maya story?",
          solution:
            "Theme (memory/legacy) emerges through character development (Maya learns, Rose softens), structure (slow pacing builds to Polaroid climax), craft (photo symbols, irony), POV (third-person limited shows both growth). All elements interconnected — story means more than sum of parts.",
        },
      },
      questions: [
        {
          id: "ela8-u11-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMPLIT,
          stem: "What does 'synthesis' mean in literary analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listing literary devices" },
              {
                id: "b",
                text: "Connecting elements to show how they create meaning",
              },
              { id: "c", text: "Summarizing the plot" },
              { id: "d", text: "Memorizing quotes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Connect elements for meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis = showing how theme, character, structure, craft, POV work together.",
                evidence: "synthesis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Connecting elements to show how they create meaning.",
            commonErrors: ["Confusing synthesis with summary."],
          },
        },
        {
          id: "ela8-u11-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMPLIT,
          stem: "Identify three elements that work together in the Rose/Maya story and explain their connection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Element synthesis",
                statement: "How parts create whole.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Theme (memory/legacy) + character (Maya learns, Rose softens) — theme emerges through growth.",
                evidence: "theme and character",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure (slow pacing to Polaroid climax) + craft (photo symbols, irony) — structure builds meaning.",
                evidence: "structure and craft",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "POV (third-person limited) — shows both characters' growth, enables empathy.",
                evidence: "POV",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Theme emerges through character growth; structure builds to Polaroid climax where craft (symbols, irony) delivers meaning; POV enables seeing both characters' development. All interconnected.",
            commonErrors: ["Listing elements without showing connections."],
          },
        },
        {
          id: "ela8-u11-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMPLIT2,
          stem: "Write a comprehensive analysis thesis that synthesizes theme, character, structure, craft, and POV for the Rose/Maya story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive thesis",
                statement: "Integrate all elements.",
              },
              {
                kind: "skill",
                name: "Synthesis argument",
                statement: "How elements create meaning.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Theme: memory/legacy — 'houses don't hold memories. People do.'",
                evidence: "theme",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Character: Maya learns, Rose softens — both grow through relationship.",
                evidence: "character",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: slow pacing builds to Polaroid climax — mirrors emotional journey.",
                evidence: "structure",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Craft + POV: photo symbols, irony, third-person limited — create meaning and empathy.",
                evidence: "craft and POV",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The story explores memory and legacy through interconnected elements: Rose's dialogue states the theme (\"houses don't hold memories. People do\"), Maya and Rose's relationship shows both characters growing, slow pacing builds to the Polaroid climax where photo symbols and irony deliver meaning, and third-person limited POV enables empathy for both. All elements work together to show that legacy lives in people and stories, not places.'",
            commonErrors: [
              "Thesis covering only one element — need synthesis.",
            ],
          },
        },
        {
          id: "ela8-u11-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMPLIT,
          parts: [
            {
              label: "a",
              prompt: "What makes literary analysis 'comprehensive'?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Why is synthesis better than element-by-element analysis?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive analysis",
                statement: "All elements together.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Connects theme, character, structure, craft, POV — shows how they create meaning together.",
                evidence: "comprehensive",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Shows deeper understanding — elements aren't separate, they interact to create meaning.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Connects all elements to show how they create meaning together. (b) Deeper understanding — elements interact, not just coexist.",
            commonErrors: [
              "Analyzing elements separately — misses connections.",
            ],
          },
        },
      ],
    },
  ],
};
