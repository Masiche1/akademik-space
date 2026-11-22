import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const STORY: TextExtract = {
  title: "Short Story Excerpt: The Last Day",
  author: "Written for Akademik Space",
  text: "Grandma Rose had lived in the same house for sixty years. The walls were lined with photographs — generations of birthdays, graduations, weddings. When the realtor's sign went up on the lawn, Maya felt something tighten in her chest.\n\n'They're selling it,' Maya told her grandmother. 'I know,' Rose said, not looking up from her crossword. 'Been thinking about it for months.' Maya sat down beside her. 'But it's our house. Your house. Where I grew up.' Rose finally looked at her. 'Sweetheart, houses don't hold memories. People do. And I'm not going anywhere.'\n\nThat night, Maya helped Rose pack boxes labeled 'kitchen,' 'bedroom,' 'photos.' They worked in silence, the radio playing softly. When they reached the box marked 'photos,' Rose pulled out a faded Polaroid — her and her mother on this same porch, decades ago. 'See,' she said, 'she's still here. In the picture. In me.'",
};

const STORY2: TextExtract = {
  title: "Character Study: Maya and Rose",
  author: "Written for Akademik Space",
  text: "Maya was the granddaughter who visited every Sunday, who learned to make tea the way Rose liked it, who listened to stories about 'the old neighborhood' that no longer existed. She was also the one who'd moved away for college, who called less often now, who'd let the house feel like a stranger's place instead of home.\n\nRose pretended not to notice. She kept the porch light on, just in case. She saved the good cookies for when Maya visited. But sometimes, standing at the window, she wondered if she'd been too proud to ask for help — too stubborn to admit she needed someone.",
};

export const lesson111: Lesson = {
  id: "ela8-u11-lesson-11-1",
  code: "11-1",
  title: "Theme and Symbolism in Literature",
  goal: "I CAN analyze themes and symbolism in literary texts and explain their significance.",
  standards: ["RL.8.2", "RL.8.4", "RL.8.6", "RL.8.9"],
  vocabulary: [
    { term: "Theme", definition: "Central message or insight about life." },
    {
      term: "Symbolism",
      definition: "Objects or details that represent larger ideas.",
    },
    { term: "Motif", definition: "Recurring element that develops theme." },
    {
      term: "Allegory",
      definition: "Story where characters/events represent abstract ideas.",
    },
    { term: "Irony", definition: "Contrast between expectation and reality." },
    {
      term: "Universal theme",
      definition: "Theme applicable to human experience broadly.",
    },
  ],
  concepts: [
    {
      id: "ela8-u11-theme",
      title: "Theme and symbolism analysis",
      skill: "Identify themes and analyze how symbols develop meaning.",
      lesson: {
        sections: [
          {
            heading: "Theme identification",
            body: "The story's theme isn't just 'grandma is moving' — it's about **memory and legacy**: 'Houses don't hold memories. People do.' Rose teaches Maya that what matters isn't the physical place but the relationships and stories it holds. Theme emerges from dialogue ('houses don't hold memories'), actions (packing photos carefully), and symbols (porch light, Polaroid photos). Universal theme: legacy lives in people and stories, not places.",
          },
          {
            heading: "Symbolism analysis",
            body: "**Symbols** carry meaning beyond literal: photographs = preserved memories; porch light = hope/waiting; boxes labeled 'photos' = what Rose values most; 'old neighborhood that no longer exists' = change/loss. The Polaroid of Rose and her mother mirrors current situation — generations connected through place. Ask: what does this object represent? Why did author choose it? Symbols make abstract themes concrete.",
          },
        ],
        keyFormulas: [
          {
            name: "Theme = insight",
            statement: "What story reveals about life.",
          },
          {
            name: "Symbol = representation",
            statement: "Object represents larger idea.",
          },
          { name: "Universal", statement: "Themes apply beyond story." },
          {
            name: "Evidence-based",
            statement: "Support theme with specific details.",
          },
        ],
        workedExample: {
          problem: "What does the Polaroid symbolize?",
          solution:
            "Memory and legacy — Rose sees her mother in the photo, just as Maya will remember Rose. Symbolizes how people live on through memories and stories, not just places.",
        },
      },
      questions: [
        {
          id: "ela8-u11-theme-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORY,
          stem: "What is the main theme of the story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moving is hard" },
              { id: "b", text: "Memory and legacy live in people, not places" },
              { id: "c", text: "Families should stay together" },
              { id: "d", text: "Grandmothers are wise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theme",
                statement: "Universal insight.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rose's line 'houses don't hold memories. People do' states theme directly.",
                evidence: "houses don't hold memories. People do",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Memory and legacy live in people, not places.",
            commonErrors: ["Choosing (a) — that's plot, not theme."],
          },
        },
        {
          id: "ela8-u11-theme-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STORY,
          stem: "Identify two symbols and explain what they represent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Symbolism",
                statement: "Objects represent ideas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photographs = preserved memories — Rose values them most (separate box).",
                evidence: "box marked 'photos'",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Porch light = hope/waiting — 'kept the porch light on, just in case.'",
                evidence: "porch light on",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Polaroid of Rose and mother = generations connected through place/memory.",
                evidence: "faded Polaroid",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Photographs (memories), porch light (hope/waiting), Polaroid (generational connection).",
            commonErrors: [
              "Identifying objects without explaining symbolic meaning.",
            ],
          },
        },
        {
          id: "ela8-u11-theme-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STORY,
          stem: "Write a paragraph analyzing how the story's theme of memory and legacy is developed through dialogue, action, and symbolism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme analysis",
                statement: "How theme is developed.",
              },
              {
                kind: "skill",
                name: "Multi-element analysis",
                statement: "Dialogue + action + symbol.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Dialogue: 'Houses don't hold memories. People do' — states theme explicitly.",
                evidence: "houses don't hold memories",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Action: packing 'photos' carefully — shows what Rose values; working in silence = shared understanding.",
                evidence: "box labeled 'photos'",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Symbolism: Polaroid of Rose and mother — generations connected through memory/place.",
                evidence: "she's still here. In the picture. In me",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Theme developed through dialogue (Rose's explicit statement), action (careful photo packing), and symbolism (Polaroid showing generational connection). All elements reinforce: memory lives in people/stories, not places.",
            commonErrors: [
              "Analyzing only one element — need dialogue + action + symbol.",
            ],
          },
        },
        {
          id: "ela8-u11-theme-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STORY2,
          parts: [
            {
              label: "a",
              prompt:
                "What does 'old neighborhood that no longer exists' symbolize?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does Rose's 'porch light' detail develop character?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Symbol and character analysis",
                statement: "Details reveal meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Change/loss — neighborhood transformed, like her life circumstances.",
                evidence: "old neighborhood",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Shows hope/waiting — she keeps light on 'just in case' Maya visits; reveals longing.",
                evidence: "porch light on, just in case",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Change/loss — neighborhood transformed. (b) Hope/waiting — reveals Rose's longing for Maya's visits.",
            commonErrors: ["Literal interpretation — need symbolic meaning."],
          },
        },
      ],
    },
    {
      id: "ela8-u11-character",
      title: "Character relationships and development",
      skill: "Analyze how character relationships evolve and reveal theme.",
      lesson: {
        sections: [
          {
            heading: "Relationship dynamics",
            body: "Maya and Rose's relationship shows **generational connection**: Maya learns tea-making, listens to stories — she's preserving Rose's world. But Maya also moved away, calls less — she's drifting. Rose pretends not to notice but keeps porch light on — she waits. Their relationship has tension: love vs distance, memory vs change. The story's turning point — packing photos together — shows them reconnecting through shared memory.",
          },
          {
            heading: "Character development through relationship",
            body: "Maya begins anxious about losing home; ends understanding legacy isn't place but people. Rose begins pretending strength; ends admitting vulnerability ('wondered if she'd been too proud'). Both characters develop through interaction — Maya learns from Rose's wisdom, Rose's pride softens through Maya's presence. Relationships drive character growth — they change each other.",
          },
        ],
        keyFormulas: [
          {
            name: "Relationships drive growth",
            statement: "Characters change through interaction.",
          },
          {
            name: "Tension reveals depth",
            statement: "Love vs distance, memory vs change.",
          },
          {
            name: "Shared experience",
            statement: "Packing photos = reconnecting through memory.",
          },
        ],
        workedExample: {
          problem: "How does the photo-packing scene develop both characters?",
          solution:
            "Maya: moves from anxiety about losing place to understanding legacy is people. Rose: from pretending strength to sharing vulnerable memory. Both grow through shared experience.",
        },
      },
      questions: [
        {
          id: "ela8-u11-character-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORY2,
          stem: "What tension exists in Maya and Rose's relationship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maya doesn't visit" },
              { id: "b", text: "Rose is angry at Maya" },
              {
                id: "c",
                text: "Love vs distance — Maya moved away, Rose waits",
              },
              { id: "d", text: "They don't like each other" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relationship tension",
                statement: "Competing forces.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maya moved away/calls less; Rose keeps porch light on — love persists despite distance.",
                evidence: "moved away... porch light on",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Love vs distance — Maya moved away, Rose waits.",
            commonErrors: ["Thinking they don't care — they do, just distant."],
          },
        },
        {
          id: "ela8-u11-character-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STORY,
          stem: "How does the photo-packing scene develop both characters?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character development",
                statement: "How scenes change characters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maya: moves from anxiety about losing place to understanding legacy is people/stories.",
                evidence: "finding your people",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rose: from pretending strength ('crossword') to sharing vulnerable memory (Polaroid story).",
                evidence: "not looking up from her crossword",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both grow through shared experience — packing photos = reconnecting.",
                evidence: "worked in silence",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Maya learns legacy is people not places; Rose softens from pretending strength to sharing memory. Both develop through shared photo-packing experience.",
            commonErrors: [
              "Describing scene without analyzing character change.",
            ],
          },
        },
        {
          id: "ela8-u11-character-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STORY2,
          stem: "Analyze how Rose's character develops through her relationship with Maya.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character arc analysis",
                statement: "Trace development.",
              },
              {
                kind: "skill",
                name: "Relationship impact",
                statement: "How Maya affects Rose.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Beginning: Rose pretends not to notice Maya's absence — keeps porch light on 'just in case.'",
                evidence: "pretended not to notice",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Middle: She saves cookies, waits at window — hope mixed with pride ('too proud to ask').",
                evidence: "saved the good cookies",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "End: Admits vulnerability — 'wondered if she'd been too proud' — pride softens through connection.",
                evidence: "too proud to ask for help",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Rose begins pretending strength (crossword, porch light 'just in case'), maintains hope (cookies, window-watching), but pride prevents asking for help. Through Maya's visits, she softens — admits vulnerability. Relationship with Maya enables her to let go of pride.",
            commonErrors: [
              "Describing Rose's actions without analyzing development.",
            ],
          },
        },
        {
          id: "ela8-u11-character-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STORY,
          parts: [
            {
              label: "a",
              prompt: "What does Rose's 'crossword' detail reveal?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does it contrast with later vulnerability?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Detail analysis",
                statement: "Small details reveal character.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Shows deflection — she avoids emotional conversation by focusing on puzzle.",
                evidence: "crossword",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Later she shares vulnerable Polaroid story — contrast shows growth from guarded to open.",
                evidence: "she's still here",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Deflection — avoids emotion via puzzle. (b) Contrast: later shares vulnerable memory — shows growth from guarded to open.",
            commonErrors: ["Missing the contrast — need to connect details."],
          },
        },
      ],
    },
    {
      id: "ela8-u11-structure",
      title: "Literary devices and text structure",
      skill:
        "Analyze how literary devices and structure create meaning in fiction.",
      lesson: {
        sections: [
          {
            heading: "Literary devices",
            body: "**Foreshadowing**: 'realtor's sign' hints at change before it's discussed. **Flashback**: Polaroid triggers memory of Rose's mother — connects generations. **Irony**: 'houses don't hold memories' — the house DOES hold memories physically (photos everywhere), but Rose means emotionally. **Motif**: photographs recur — each appearance deepens theme. Devices aren't decoration — they carry meaning.",
          },
          {
            heading: "Structure and pacing",
            body: "Story structure: **exposition** (Maya visits, learns house is selling), **rising action** (conversation about selling, packing begins), **climax** (Polaroid moment — Rose shares memory), **resolution** (understanding legacy). Pacing: slow during packing (intimate, reflective), faster during dialogue (tension). Structure mirrors theme — gradual deepening of understanding, not sudden revelation.",
          },
        ],
        keyFormulas: [
          {
            name: "Devices carry meaning",
            statement: "Foreshadowing, irony, motif develop theme.",
          },
          {
            name: "Structure mirrors theme",
            statement: "Pacing reflects emotional journey.",
          },
          {
            name: "Climax = turning point",
            statement: "Where understanding shifts.",
          },
        ],
        workedExample: {
          problem: "How does the Polaroid scene function as climax?",
          solution:
            "It's the turning point — Rose shares vulnerable memory, connecting generations. Maya (and reader) understands legacy isn't place but people. Climax = moment of deepest meaning.",
        },
      },
      questions: [
        {
          id: "ela8-u11-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORY,
          stem: "What literary device does 'realtor's sign' represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Irony" },
              { id: "b", text: "Flashback" },
              { id: "c", text: "Symbolism" },
              { id: "d", text: "Foreshadowing" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Foreshadowing",
                statement: "Hints at future events.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sign hints at selling/change before it's discussed — foreshadows main conflict.",
                evidence: "realtor's sign",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Foreshadowing.",
            commonErrors: ["Choosing (d) — sign is hint, not symbol."],
          },
        },
        {
          id: "ela8-u11-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STORY,
          stem: "Identify the story's climax and explain why it's the turning point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Climax identification",
                statement: "Turning point of story.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Climax: Polaroid moment — Rose shares memory of her mother, 'she's still here. In me.'",
                evidence: "she's still here. In the picture. In me",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Turning point: deepest moment of connection — understanding legacy shifts from place to people.",
                evidence: "generations connected",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "After this, characters (and reader) understand theme — resolution follows.",
                evidence: "resolution",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Climax: Polaroid moment — Rose shares memory, connecting generations. Turning point because understanding of legacy shifts from place to people/memory.",
            commonErrors: [
              "Choosing selling announcement — that's rising action, not climax.",
            ],
          },
        },
        {
          id: "ela8-u11-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STORY,
          stem: "Analyze how the story's structure and pacing support its theme of memory and legacy.",
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
                name: "Pacing analysis",
                statement: "Speed reflects emotion.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Slow pacing during packing — intimate, reflective, mirrors gradual understanding.",
                evidence: "worked in silence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Dialogue tension earlier — faster pacing shows conflict/discomfort.",
                evidence: "Maya felt something tighten",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure builds to Polaroid climax — deepest moment of connection, then resolution.",
                evidence: "climax",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Slow pacing during packing mirrors intimate reflection; dialogue tension shows conflict; structure builds to Polaroid climax where understanding deepens — pacing and structure mirror emotional journey toward theme.",
            commonErrors: ["Describing structure without connecting to theme."],
          },
        },
        {
          id: "ela8-u11-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STORY,
          parts: [
            { label: "a", prompt: "What is 'irony' in this story?", marks: 2 },
            { label: "b", prompt: "How does it relate to theme?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Irony analysis",
                statement: "Contrast between expectation and reality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Houses don't hold memories' — but house DOES hold memories physically (photos everywhere).",
                evidence: "houses don't hold memories",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Irony reveals theme — memories are in people/stories, not just objects/place.",
                evidence: "people do",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) House holds memories physically but Rose means emotionally — contrast. (b) Reveals theme: memories live in people/stories, not just places.",
            commonErrors: ["Missing the ironic contrast."],
          },
        },
      ],
    },
    {
      id: "ela8-u11-author",
      title: "Author's purpose and point of view",
      skill:
        "Analyze author's purpose, point of view, and how they shape reader understanding.",
      lesson: {
        sections: [
          {
            heading: "Author's purpose",
            body: "The author writes to **explore theme** — what makes a home, what legacy means, how generations connect. Not to entertain primarily, but to make readers reflect on memory and place. The story doesn't preach — it shows through Rose and Maya's experience. Purpose shapes choices: focusing on photos (not furniture), dialogue about memories (not logistics), Polaroid climax (not moving day).",
          },
          {
            heading: "Point of view and reliability",
            body: "Third-person limited follows mostly Maya's perspective — we see her anxiety about losing home, her observations of Rose. But we also get Rose's interiority ('wondered if she'd been too proud') — slight omniscient moments. This dual perspective shows both characters' growth. Author's choice to include Rose's thoughts adds depth — we see her vulnerability that Maya can't.",
          },
        ],
        keyFormulas: [
          {
            name: "Purpose shapes choices",
            statement: "What author wants determines what they include.",
          },
          {
            name: "POV limits knowledge",
            statement: "What readers know depends on perspective.",
          },
          {
            name: "Dual perspective",
            statement: "Shows both characters' growth.",
          },
        ],
        workedExample: {
          problem:
            "How does author's focus on photos (not furniture) serve purpose?",
          solution:
            "Photos represent memory/legacy — focusing on them (not furniture) emphasizes theme: what matters isn't objects but memories/people.",
        },
      },
      questions: [
        {
          id: "ela8-u11-author-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORY,
          stem: "What is the author's primary purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To teach about moving" },
              { id: "b", text: "To describe a house" },
              { id: "c", text: "To explore theme of memory and legacy" },
              { id: "d", text: "To entertain with a moving story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Author's purpose",
                statement: "What author wants to achieve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Story explores memory/legacy theme through characters' experience — not just entertainment.",
                evidence: "houses don't hold memories",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. To explore theme of memory and legacy.",
            commonErrors: [
              "Choosing (a) — entertainment is secondary to theme exploration.",
            ],
          },
        },
        {
          id: "ela8-u11-author-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STORY,
          stem: "How does the author's choice to focus on photos (not furniture) serve the story's purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Authorial choice",
                statement: "What author includes reveals purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photos represent memory/legacy — what Rose values most.",
                evidence: "box marked 'photos'",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Focusing on photos (not furniture) emphasizes theme — memories/people matter, not objects.",
                evidence: "houses don't hold memories",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Author's choice directs reader attention to theme — what matters most.",
                evidence: "purpose",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Photos represent memory/legacy — focusing on them emphasizes theme that people/stories matter, not objects/place.",
            commonErrors: [
              "Describing what's included without explaining why.",
            ],
          },
        },
        {
          id: "ela8-u11-author-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STORY2,
          stem: "Analyze how the author's point of view choices shape our understanding of both characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV analysis",
                statement: "How perspective shapes meaning.",
              },
              {
                kind: "skill",
                name: "Dual character access",
                statement: "Both interiors shown.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Mostly Maya's POV — we see her anxiety, observations of Rose.",
                evidence: "Maya felt something tighten",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "But includes Rose's interiority ('wondered if she'd been too proud') — reveals vulnerability Maya can't see.",
                evidence: "too proud to ask for help",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Dual perspective shows both characters' growth — Maya learns, Rose softens.",
                evidence: "both characters",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Author mostly follows Maya's POV but includes Rose's interiority — shows Maya's anxiety AND Rose's hidden vulnerability. Dual access reveals both characters' growth that single POV couldn't.",
            commonErrors: ["Identifying POV without analyzing its effect."],
          },
        },
        {
          id: "ela8-u11-author-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STORY,
          parts: [
            {
              label: "a",
              prompt:
                "What does 'houses don't hold memories' reveal about Rose's purpose?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does this dialogue serve author's theme?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dialogue analysis",
                statement: "What characters say reveals theme.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Rose is teaching Maya — passing wisdom about what truly matters.",
                evidence: "houses don't hold memories",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "States theme explicitly — memories live in people/stories, not places.",
                evidence: "people do",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Rose teaches Maya wisdom about what matters. (b) States theme explicitly — legacy is people/stories, not places.",
            commonErrors: [
              "Treating dialogue as just conversation — it's thematic statement.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u11-integrated",
      title: "Integrated literature analysis",
      skill:
        "Synthesize theme, character, structure, and craft into comprehensive literary analysis.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive analysis",
            body: "Strong literary analysis connects all elements: theme (memory/legacy), character (Maya's growth, Rose's vulnerability), structure (slow pacing builds to Polaroid climax), craft (symbols, irony, dialogue). Each element supports theme — they're not separate observations but interconnected parts of meaning. Ask: how does each element contribute to overall meaning? How do they work together?",
          },
          {
            heading: "Thesis development",
            body: "Thesis = main argument about text: 'The story explores how memory and legacy live in people, not places, through Maya and Rose's relationship.' Then support with evidence from each element: theme (Rose's dialogue), character (both grow), structure (Polaroid climax), craft (photograph symbols). Thesis isn't summary — it's argument about what text means and how.",
          },
        ],
        keyFormulas: [
          {
            name: "Elements interconnected",
            statement: "Theme, character, structure, craft work together.",
          },
          {
            name: "Thesis = argument",
            statement: "Claim about meaning, not summary.",
          },
          {
            name: "Evidence from all elements",
            statement: "Support thesis with multiple types of evidence.",
          },
        ],
        workedExample: {
          problem: "How would you write a thesis for this story?",
          solution:
            "'The story explores how memory and legacy live in people, not places, through Maya and Rose's relationship — their shared photo-packing reveals that what matters isn't the house but the memories and connections it holds.'",
        },
      },
      questions: [
        {
          id: "ela8-u11-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORY,
          stem: "What elements should a comprehensive literary analysis include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just character names" },
              { id: "b", text: "Just plot summary" },
              { id: "c", text: "Only theme" },
              { id: "d", text: "Theme, character, structure, craft" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive analysis",
                statement: "All elements together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strong analysis connects theme, character, structure, and craft — not just one element.",
                evidence: "comprehensive analysis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Theme, character, structure, craft.",
            commonErrors: ["Analyzing only theme or only character."],
          },
        },
        {
          id: "ela8-u11-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STORY,
          stem: "Write a thesis statement for the story that makes an argument about its meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement: "Argument about meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis must make claim, not just summarize: 'The story explores how memory lives in people, not places.'",
                evidence: "thesis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Include how: 'through Maya and Rose's relationship and shared photo-packing.'",
                evidence: "relationship",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Argument: 'revealing that legacy is carried in stories and connections, not physical space.'",
                evidence: "argument",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The story argues that memory and legacy live in people and stories, not places — Maya and Rose's shared photo-packing reveals that what matters isn't the house but the memories and connections it holds.'",
            commonErrors: ["Writing summary instead of argument."],
          },
        },
        {
          id: "ela8-u11-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STORY,
          stem: "Write a comprehensive analysis paragraph connecting theme, character, structure, and craft in the story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Connect all elements.",
              },
              {
                kind: "skill",
                name: "Evidence synthesis",
                statement: "Use multiple types of evidence.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Theme: memory/legacy — Rose's 'houses don't hold memories. People do.'",
                evidence: "houses don't hold memories",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Character: Maya learns, Rose softens — both grow through relationship.",
                evidence: "both characters",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: slow pacing builds to Polaroid climax — mirrors emotional journey.",
                evidence: "polaroid climax",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Craft: photograph symbols, irony ('houses don't hold memories' but house full of photos), dialogue.",
                evidence: "symbols and irony",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The story's theme of memory and legacy emerges through interconnected elements. Rose's dialogue states it ('houses don't hold memories. People do'), while Maya and Rose's relationship shows both characters growing — Maya learns legacy is people, Rose softens from pride. Slow pacing during photo-packing builds to the Polaroid climax, mirroring their emotional journey. Photograph symbols and irony (house full of memories yet 'doesn't hold' them) reinforce that what matters is people and stories, not places.'",
            commonErrors: ["Analyzing elements separately without connecting."],
          },
        },
        {
          id: "ela8-u11-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STORY,
          parts: [
            {
              label: "a",
              prompt: "What makes a thesis different from a summary?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What evidence types support a literary thesis?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis vs summary",
                statement: "Argument vs retelling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis = argument about meaning; summary = retelling of events.",
                evidence: "thesis vs summary",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Theme evidence (dialogue), character evidence (growth), structural evidence (climax), craft evidence (symbols).",
                evidence: "evidence types",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Thesis = argument; summary = retelling. (b) Theme, character, structure, craft evidence.",
            commonErrors: ["Confusing thesis with plot summary."],
          },
        },
      ],
    },
  ],
};
