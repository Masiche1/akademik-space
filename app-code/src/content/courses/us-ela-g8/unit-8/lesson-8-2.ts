import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const STRUCT: TextExtract = {
  title: "Excerpt: Analyzing Text Structure and Tone",
  author: "Written for Akademik Space",
  text: "The morning bell rang, and the hallway exploded into motion. Students spilled from classrooms like water through a broken dam, backpacks bouncing, voices overlapping. Maya moved against the current, her steps slow and deliberate. She'd learned that morning what she'd suspected for weeks — the debate team wasn't just about arguments. It was about finding your voice in a world that kept telling you to be quiet.\n\nBy third period, she felt different. Not louder — just present. Like she'd finally arrived at a place she'd been walking toward all along.",
};

const STRUCT2: TextExtract = {
  title: "Figurative Language Passage",
  author: "Written for Akademik Space",
  text: "The old school stood like a sentinel on the hill, watching generations come and go. Its windows were eyes that had seen everything — the joy of first days, the tears of last days, the quiet courage of students who found their voices. Time moved differently there, as if the building itself had learned to wait.",
};

export const lesson82: Lesson = {
  id: "ela8-u8-lesson-8-2",
  code: "8-2",
  title: "Text Structure, Figurative Language, and Tone",
  goal: "I CAN analyze how text structure, figurative language, and tone create meaning and mood.",
  standards: ["RL.8.4", "RL.8.5", "RL.8.9", "RL.8.2"],
  vocabulary: [
    {
      term: "Text structure",
      definition:
        "How ideas are organized — chronological, cause-effect, compare-contrast.",
    },
    {
      term: "Figurative language",
      definition: "Non-literal language — simile, metaphor, personification.",
    },
    {
      term: "Tone",
      definition:
        "Author's attitude toward subject — formal, ironic, nostalgic.",
    },
    {
      term: "Mood",
      definition: "Feeling created for reader — tense, peaceful, hopeful.",
    },
    { term: "Simile", definition: "Comparison using 'like' or 'as.'" },
    {
      term: "Personification",
      definition: "Giving human traits to non-human things.",
    },
  ],
  concepts: [
    {
      id: "ela8-u8-structure",
      title: "Text structure and organization",
      skill:
        "Identify how text is organized and how structure supports meaning.",
      lesson: {
        sections: [
          {
            heading: "Structure types",
            body: "**Chronological** — events in time order. **Cause-effect** — one thing leads to another. **Compare-contrast** — similarities and differences. **Problem-solution** — issue then resolution. **Description** — details about a subject. The excerpt moves chronologically (morning bell → third period) but also shows **character development** — Maya's internal change parallels external action. Structure often mirrors theme: her journey from hallway chaos to classroom clarity mirrors her internal journey from noise to voice.",
          },
          {
            heading: "Structure and meaning",
            body: "Ask: why did the author choose this structure? Chronological emphasizes growth over time; flashback emphasizes memory; problem-solution emphasizes resolution. The hallway 'exploded into motion' contrasts with Maya's 'slow and deliberate' steps — structure mirrors her internal state. Text structure isn't just organization — it's meaning-making.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure = meaning",
            statement: "How text is organized shapes what it means.",
          },
          {
            name: "Chronological",
            statement: "Time order — shows development or sequence.",
          },
          {
            name: "Contrast structure",
            statement:
              "External chaos vs internal calm mirrors character state.",
          },
        ],
        workedExample: {
          problem:
            "How does the excerpt's structure mirror Maya's transformation?",
          solution:
            "External chaos (hallway explosion) contrasts with Maya's deliberate movement — her internal journey from noise to voice parallels her physical journey from crowded hallway to quiet classroom.",
        },
      },
      questions: [
        {
          id: "ela8-u8-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STRUCT,
          stem: "What type of text structure does the excerpt primarily use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compare-contrast" },
              { id: "b", text: "Cause-effect" },
              { id: "c", text: "Problem-solution" },
              { id: "d", text: "Chronological" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chronological structure",
                statement: "Events in time order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Excerpt moves from morning bell to third period — time order.",
                evidence: "morning bell rang... third period",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Chronological — events unfold in time.",
            commonErrors: [
              "Choosing (a) — there's cause-effect but primary structure is chronological.",
            ],
          },
        },
        {
          id: "ela8-u8-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STRUCT,
          stem: "How does the hallway description contrast with Maya's movement? What does this contrast reveal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structural contrast",
                statement: "External vs internal mirrors meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hallway 'exploded into motion' — chaotic, crowded, overwhelming.",
                evidence: "exploded into motion",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Maya's 'slow and deliberate' steps — calm, purposeful, different from crowd.",
                evidence: "slow and deliberate",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Contrast reveals her internal transformation — she's finding her own rhythm amid chaos.",
                evidence: "finding your voice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Hallway chaos vs Maya's deliberate movement — contrast reveals her internal transformation from overwhelmed to purposeful.",
            commonErrors: ["Describing scenes without analyzing contrast."],
          },
        },
        {
          id: "ela8-u8-structure-q3",
          difficulty: "challenge",
          totalMarks: 9,
          extract: STRUCT,
          stem: "Analyze how the excerpt's structure supports its theme of finding your voice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure-theme connection",
                statement: "How organization supports meaning.",
              },
              {
                kind: "skill",
                name: "Evidence-based analysis",
                statement: "Cite specific structural choices.",
              },
            ],
            levels: [
            { level: "Level 4", marks: "8-9", descriptor: "Thorough, precise response that is well supported by carefully chosen textual evidence and explains clearly how the evidence supports the point." },
            { level: "Level 3", marks: "5-7", descriptor: "Clear, adequate response with relevant evidence and some explanation of how it supports the point." },
            { level: "Level 2", marks: "3-4", descriptor: "Partial, general response with some evidence but little explanation." },
            { level: "Level 1", marks: "1-2", descriptor: "Minimal response with little or no evidence from the text." },
          ],
            steps: [
              {
                reasoning:
                  "Chronological structure shows growth over time — morning confusion to third-period clarity.",
                evidence: "By third period, she felt different",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Contrast between external chaos and internal calm mirrors her journey from noise to voice.",
                evidence: "exploded into motion... slow and deliberate",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Final sentence 'arrived at a place she'd been walking toward' — structure completes her journey.",
                evidence: "finally arrived at a place",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure supports theme: her path through chaos mirrors finding voice in noise.",
                evidence: "finding your voice in a world",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Chronological structure shows Maya's growth from hallway chaos to classroom clarity. The contrast between external motion and her deliberate movement mirrors her internal journey — finding voice amid noise. Structure completes when she 'arrives' at self-understanding.",
            commonErrors: ["Describing structure without connecting to theme."],
          },
        },
        {
          id: "ela8-u8-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STRUCT2,
          parts: [
            {
              label: "a",
              prompt:
                "Identify the figurative language in 'stood like a sentinel.'",
              marks: 1,
            },
            { label: "b", prompt: "Explain how it creates mood.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Figurative analysis",
                statement: "How language creates effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Simile — 'like a sentinel' compares building to guard.",
                evidence: "stood like a sentinel",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Sentinel suggests watchfulness, permanence, protection — creates nostalgic, reverent mood.",
                evidence: "watching generations come and go",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Simile. (b) 'Sentinel' suggests watchfulness and permanence — creates nostalgic, reverent mood toward the school.",
            commonErrors: ["Identifying device without explaining effect."],
          },
        },
      ],
    },
    {
      id: "ela8-u8-figurative",
      title: "Figurative language and tone",
      skill:
        "Identify similes, metaphors, personification, and analyze how tone and mood are created.",
      lesson: {
        sections: [
          {
            heading: "Figurative devices",
            body: "**Simile** — 'like/as' comparison: 'students spilled like water.' **Metaphor** — direct comparison: 'the hallway was a battlefield.' **Personification** — human traits to non-human: 'windows were eyes that had seen everything.' **Hyperbole** — exaggeration: 'exploded into motion.' Each device creates imagery — mental pictures that make abstract concrete. 'Windows were eyes' makes the building seem alive, watching history unfold.",
          },
          {
            heading: "Tone vs mood",
            body: "**Tone** = author's attitude (nostalgic, formal, ironic). **Mood** = feeling created for reader (peaceful, tense, hopeful). 'The old school stood like a sentinel' — tone is nostalgic/reverent; mood is peaceful and reflective. 'Hallway exploded into motion' — tone is energetic; mood is chaotic. Author's word choice creates both: 'deliberate' (calm) vs 'exploded' (chaotic).",
          },
        ],
        keyFormulas: [
          {
            name: "Simile vs metaphor",
            statement: "Like/as vs direct comparison.",
          },
          {
            name: "Personification",
            statement: "Human traits to objects/nature.",
          },
          {
            name: "Tone vs mood",
            statement: "Author's attitude vs reader's feeling.",
          },
          {
            name: "Word choice",
            statement: "Specific words create specific effects.",
          },
        ],
        workedExample: {
          problem:
            "What tone and mood does 'The old school stood like a sentinel' create?",
          solution:
            "Tone: nostalgic/reverent — treats building as guardian of memories. Mood: peaceful, reflective — reader feels respect for institution's history.",
        },
      },
      questions: [
        {
          id: "ela8-u8-figurative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STRUCT2,
          stem: "'Windows were eyes that had seen everything' is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personification" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Hyperbole" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personification",
                statement: "Human traits to non-human.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Windows 'seeing' gives human trait (sight/memory) to building.",
                evidence: "windows were eyes",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Personification.",
            commonErrors: [
              "Choosing (b) — metaphor would be 'windows were eyes' without 'like/as' but personification specifically gives human traits.",
            ],
          },
        },
        {
          id: "ela8-u8-figurative-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STRUCT2,
          stem: "Identify two figurative devices and explain their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Device identification",
                statement: "Recognize figurative language.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Simile: 'like a sentinel' — building compared to guard.",
                evidence: "like a sentinel",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Personification: 'windows were eyes that had seen' — building given sight/memory.",
                evidence: "windows were eyes",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: makes building seem alive, watching history — creates reverence.",
                evidence: "seen everything",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Simile ('like a sentinel') and personification ('windows were eyes') — make building seem alive, watching generations, creating reverence.",
            commonErrors: ["Identifying without explaining effect."],
          },
        },
        {
          id: "ela8-u8-figurative-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STRUCT,
          stem: "Analyze how word choice creates tone and mood in the hallway scene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone/mood analysis",
                statement: "Word choice creates effect.",
              },
              {
                kind: "skill",
                name: "Evidence-based",
                statement: "Cite specific words.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "'Exploded into motion' — violent, chaotic word creates energetic, overwhelming mood.",
                evidence: "exploded into motion",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Slow and deliberate' — calm, controlled words contrast with chaos, creating peaceful tone.",
                evidence: "slow and deliberate",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tone shifts from chaotic (crowd) to calm (Maya) — word choice mirrors her internal state.",
                evidence: "felt different",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Exploded into motion' creates chaotic mood; 'slow and deliberate' creates calm contrast — word choice mirrors Maya's transformation from overwhelmed to purposeful.",
            commonErrors: [
              "Describing mood without citing specific word choices.",
            ],
          },
        },
        {
          id: "ela8-u8-figurative-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STRUCT2,
          parts: [
            {
              label: "a",
              prompt: "What is the tone of the passage?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What mood does it create for the reader?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone vs mood",
                statement: "Author attitude vs reader feeling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Nostalgic/reverent — treats school as guardian of memories.",
                evidence: "sentinel... generations come and go",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Peaceful, reflective — reader feels respect for institution's history.",
                evidence: "learned to wait",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Nostalgic/reverent tone. (b) Peaceful, reflective mood.",
            commonErrors: ["Confusing tone (author) with mood (reader)."],
          },
        },
      ],
    },
    {
      id: "ela8-u8-craft",
      title: "Author's craft and word choice",
      skill:
        "Analyze how authors use word choice, imagery, and structure to create meaning.",
      lesson: {
        sections: [
          {
            heading: "Word choice analysis",
            body: "Authors choose words deliberately: 'exploded' vs 'moved', 'deliberate' vs 'slow'. Specific words create specific images. 'Backpacks bouncing, voices overlapping' — concrete details make scene vivid. 'Finding your voice' — abstract phrase made concrete through Maya's journey. Ask: why this word instead of a synonym? What does it add? 'Exploded' implies violence/energy; 'moved' would be neutral.",
          },
          {
            heading: "Imagery and sensory detail",
            body: "**Imagery** appeals to senses: visual ('backpacks bouncing'), auditory ('voices overlapping'), tactile ('hands went cold'). Strong imagery makes readers experience scene, not just read about it. 'Maya's hands went cold' — tactile imagery makes fear physical. Authors use imagery to create empathy — readers feel what characters feel.",
          },
        ],
        keyFormulas: [
          {
            name: "Word choice matters",
            statement: "Specific words create specific effects.",
          },
          {
            name: "Imagery = experience",
            statement: "Sensory details make readers feel scene.",
          },
          {
            name: "Concrete vs abstract",
            statement: "Specific details make abstract ideas tangible.",
          },
        ],
        workedExample: {
          problem:
            "Why does the author use 'exploded into motion' instead of 'moved quickly'?",
          solution:
            "'Exploded' implies violence, energy, chaos — matches hallway's overwhelming energy. 'Moved quickly' would be neutral, losing the sensory impact. Word choice creates mood.",
        },
      },
      questions: [
        {
          id: "ela8-u8-craft-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STRUCT,
          stem: "Which word creates the strongest image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Went" },
              { id: "b", text: "Exploded" },
              { id: "c", text: "Walked" },
              { id: "d", text: "Moved" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word choice",
                statement: "Specific words create vivid images.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Exploded' implies violence/energy — strongest sensory image.",
                evidence: "exploded into motion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Exploded — strongest sensory impact.",
            commonErrors: ["Choosing (a) — 'moved' is too neutral."],
          },
        },
        {
          id: "ela8-u8-craft-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STRUCT,
          stem: "Identify two examples of sensory imagery and explain their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Imagery analysis",
                statement: "Sensory details create experience.",
              },
            ],
            steps: [
              {
                reasoning: "Visual: 'backpacks bouncing' — see the motion.",
                evidence: "backpacks bouncing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Auditory: 'voices overlapping' — hear the chaos.",
                evidence: "voices overlapping",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: makes hallway feel overwhelming — reader experiences chaos.",
                evidence: "exploded into motion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Visual ('backpacks bouncing') and auditory ('voices overlapping') — make hallway feel chaotic, overwhelming.",
            commonErrors: ["Identifying without explaining sensory effect."],
          },
        },
        {
          id: "ela8-u8-craft-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STRUCT,
          stem: "Analyze how the author's word choice creates contrast between chaos and calm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word choice analysis",
                statement: "Specific words create effects.",
              },
              {
                kind: "skill",
                name: "Contrast analysis",
                statement: "Opposing word choices create meaning.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Chaos words: 'exploded', 'spilled', 'bouncing', 'overlapping' — violent, uncontrolled.",
                evidence: "exploded into motion",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Calm words: 'slow', 'deliberate', 'quiet', 'present' — controlled, peaceful.",
                evidence: "slow and deliberate",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Contrast mirrors Maya's transformation — word choice embodies her journey from chaos to clarity.",
                evidence: "felt different",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Chaos words ('exploded', 'spilled') vs calm words ('slow', 'deliberate') — word choice creates contrast mirroring Maya's internal transformation.",
            commonErrors: ["Listing words without analyzing contrast effect."],
          },
        },
        {
          id: "ela8-u8-craft-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STRUCT,
          parts: [
            {
              label: "a",
              prompt:
                "Why is 'finding your voice' more effective than 'becoming confident'?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how concrete language makes abstract ideas clear.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Language precision",
                statement: "Specific beats general.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Finding your voice' is concrete metaphor — implies speaking up; 'becoming confident' is abstract state.",
                evidence: "finding your voice",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Concrete details ('backpacks bouncing') make scene tangible; abstract ('overwhelming') stays vague.",
                evidence: "concrete vs abstract",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Finding your voice' is concrete metaphor implying action; 'becoming confident' is abstract. (b) Concrete details make abstract ideas tangible and vivid.",
            commonErrors: [
              "Thinking abstract is clearer — concrete is more vivid.",
            ],
          },
        },
      ],
    },
  ],
};
