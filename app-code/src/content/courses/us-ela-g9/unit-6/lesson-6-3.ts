import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const PROMPT: TextExtract = {
  title: "Writing Prompt: Narrative About a Turning Point",
  author: "Written for Akademik Space",
  text: "Write a narrative about a moment when you realized something important — a turning point in your understanding. Use narrative techniques: pacing, sensory detail, reflection. Show how the moment changed your perspective, not just tell the reader.\n\nYour narrative should have a clear arc: setup, turning point, reflection.",
};

const DRAFT: TextExtract = {
  title: "Student Narrative Draft",
  author: "Written for Akademik Space",
  text: "I realized I was wrong about something last year. My friend told me I was being unfair. I didn't think I was. But then I thought about it and realized she was right. I learned that I should listen to other people. It changed me.",
};

export const lesson63: Lesson = {
  id: "ela9-u6-lesson-6-3",
  code: "6-3",
  title: "Narrative Writing: Pacing, Sensory Detail, and Reflection",
  goal: "I CAN write narratives that develop plot through pacing, sensory detail, and meaningful reflection.",
  standards: ["W.9-10.3", "W.9-10.3a", "W.9-10.3b", "W.9-10.3c", "W.9-10.3d"],
  vocabulary: [
    {
      term: "Narrative arc",
      definition: "Setup → conflict → resolution structure.",
    },
    {
      term: "Pacing",
      definition: "Speed of narration — when to slow down or speed up.",
    },
    {
      term: "Sensory detail",
      definition: "Sight, sound, smell, touch, taste details.",
    },
    {
      term: "Reflection",
      definition: "Looking back on experience with new understanding.",
    },
    { term: "Turning point", definition: "Moment when something changes." },
    {
      term: "Show don't tell",
      definition: "Reveal through action/detail rather than stating.",
    },
  ],
  concepts: [
    {
      id: "ela9-u6-narr",
      title: "Narrative technique",
      skill:
        "Use pacing, sensory detail, and reflection to create engaging narratives with clear arcs.",
      lesson: {
        sections: [
          {
            heading: "Pacing and sensory detail",
            body: "Pacing controls narrative rhythm: **slow** for key moments (the turning point deserves detail — what did you see, hear, feel?), **fast** for transitions (skip routine days). Sensory detail makes scenes vivid: 'The cafeteria was loud — trays clattering, voices overlapping, smell of reheated pizza. I sat alone...' engages senses rather than just stating 'I ate lunch.' The turning point should be the most detailed moment — readers should feel what you felt.",
          },
          {
            heading: "Reflection and meaning",
            body: "Narrative isn't just what happened — it's what it meant. Reflection connects experience to understanding: 'At the time, I was angry. Now I understand she was trying to protect me from making a mistake. That moment taught me that listening isn't weakness — it's respect.' Reflection should be specific, not generic ('I learned to be better'). Show the thinking that changed.",
          },
        ],
        keyFormulas: [
          {
            name: "Slow for key, fast for routine",
            statement: "Pacing controls focus.",
          },
          {
            name: "Engage senses",
            statement: "Vivid detail > abstract statement.",
          },
          {
            name: "Reflect specifically",
            statement: "Show thinking that changed, not generic lesson.",
          },
        ],
        workedExample: {
          problem: "How would you improve the draft's narrative?",
          solution:
            "Add sensory detail (what did the moment look/sound/feel like?), slow pacing at turning point, specific reflection (what exactly did you realize and why?), narrative arc (setup → turning point → reflection).",
        },
      },
      questions: [
        {
          id: "ela9-u6-narr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "What is the main weakness of the draft's narrative?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Tells instead of shows — no sensory detail or reflection",
              },
              { id: "b", text: "Wrong tense" },
              { id: "c", text: "Too long" },
              { id: "d", text: "Too formal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Show vs tell",
                statement: "Detail over statement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Draft states 'I realized I was wrong' without sensory detail, pacing, or specific reflection.",
                evidence: "tells instead of shows",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Tells instead of shows — no sensory detail or reflection.",
            commonErrors: ["Thinking summary = narrative."],
          },
        },
        {
          id: "ela9-u6-narr-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Rewrite 'My friend told me I was being unfair' with sensory detail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sensory detail",
                statement: "Engage senses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add setting: 'We were sitting on the curb outside school, backpacks between us.'",
                evidence: "setting",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add sensory: 'Her voice was quiet but firm — not angry, just tired of explaining.'",
                evidence: "sensory",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add action: 'She pulled her sleeve over her hands — the gesture she does when she's nervous.'",
                evidence: "action",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'We were sitting on the curb outside school, backpacks between us. Her voice was quiet but firm — not angry, just tired of explaining. She pulled her sleeve over her hands — the gesture she does when she's nervous.'",
            commonErrors: ["Adding adjectives instead of sensory specifics."],
          },
        },
        {
          id: "ela9-u6-narr-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PROMPT,
          stem: "Write an outline for a narrative about a turning point with pacing, sensory detail, and reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative arc",
                statement: "Setup → turning point → reflection.",
              },
              {
                kind: "skill",
                name: "Technique integration",
                statement: "Pacing, detail, reflection.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Setup: context (relationship, situation) — fast pacing, key details only.",
                evidence: "setup",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Turning point: the moment of realization — slow pacing, rich sensory detail.",
                evidence: "turning point",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: what you learned and why it matters — specific, not generic.",
                evidence: "reflection",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Arc: clear beginning-middle-end with meaningful transformation.",
                evidence: "arc",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Setup (friendship context, fast pacing) → Turning point (the conversation — slow pacing, sensory detail: setting, voice, gesture) → Reflection (specific realization: 'listening isn't weakness, it's respect' + why it matters). Arc shows transformation.",
            commonErrors: ["Outline without pacing or sensory detail plan."],
          },
        },
        {
          id: "ela9-u6-narr-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt: "Rewrite 'It changed me' with specific reflection.",
              marks: 2,
            },
            { label: "b", prompt: "Why is yours better?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Specific reflection",
                statement: "Show thinking that changed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'I learned that listening isn't weakness — it's respect. That moment taught me to pause before defending myself.'",
                evidence: "reflection",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Specific lesson + why it matters — not generic 'I changed.'",
                evidence: "better",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'I learned that listening isn't weakness — it's respect. That moment taught me to pause before defending myself.' (b) Specific lesson + why it matters.",
            commonErrors: ["Generic reflection like 'I learned to be better.'"],
          },
        },
      ],
    },
    {
      id: "ela9-u6-dialogue",
      title: "Dialogue and character voice",
      skill:
        "Use dialogue and character voice to reveal personality and advance narrative.",
      lesson: {
        sections: [
          {
            heading: "Dialogue that reveals",
            body: "Effective dialogue does more than convey information — it reveals character and advances plot: 'You're wrong about this,' she said — flat, final. vs 'Are you sure?' she asked, voice dropping — the question hanging between us. The second shows uncertainty, invites response, creates tension. Dialogue should sound like real speech but be purposeful — every line either reveals character, advances plot, or creates tension. Avoid 'talking heads' where characters just exchange information.",
          },
          {
            heading: "Character voice",
            body: "Each character should sound different: your friend might use short sentences when angry, longer explanations when hurt; you might deflect with humor when uncomfortable. Voice reveals personality without stating it: 'Whatever,' I said, kicking at the curb — the dismissal in my voice belying the knot in my stomach. Show voice through word choice, sentence length, and accompanying action — not just 'she said angrily.'",
          },
        ],
        keyFormulas: [
          {
            name: "Dialogue reveals + advances",
            statement: "Every line has purpose.",
          },
          {
            name: "Voice = personality",
            statement: "Word choice + rhythm + action.",
          },
          {
            name: "Show don't label",
            statement: "'Kicking at curb' > 'I was nervous.'",
          },
        ],
        workedExample: {
          problem:
            "How would you write dialogue for the turning point conversation?",
          solution:
            "Short exchanges showing tension: 'You're wrong about this.' / 'Am I?' / 'You always do this — decide without asking.' / 'And you're always right?' — reveals both characters' patterns and creates conflict.",
        },
      },
      questions: [
        {
          id: "ela9-u6-dialogue-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "What should dialogue do in a narrative?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reveal character, advance plot, create tension",
              },
              { id: "b", text: "Explain everything" },
              { id: "c", text: "Just convey information" },
              { id: "d", text: "Fill space" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dialogue purpose",
                statement: "Reveal + advance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effective dialogue reveals character, advances plot, creates tension — not just information exchange.",
                evidence: "dialogue purpose",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Reveal character, advance plot, create tension.",
            commonErrors: ["Writing dialogue as information exchange."],
          },
        },
        {
          id: "ela9-u6-dialogue-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Write a dialogue exchange for the turning point conversation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dialogue writing",
                statement: "Character-revealing exchange.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Short exchanges showing tension: 'You're wrong about this.' / 'Am I?' / 'You always do this — decide without asking.'",
                evidence: "dialogue",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reveals patterns: friend's need to be heard, narrator's defensive response.",
                evidence: "reveals",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Creates tension: 'And you're always right?' — challenging but not explosive.",
                evidence: "tension",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'You're wrong about this.' / 'Am I?' / 'You always do this — decide without asking.' / 'And you're always right?' — reveals both characters' patterns, creates tension without explosion.",
            commonErrors: [
              "Long explanatory dialogue — should be natural speech.",
            ],
          },
        },
        {
          id: "ela9-u6-dialogue-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PROMPT,
          stem: "Write a dialogue excerpt showing character voice differences in a turning point conversation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character voice",
                statement: "Distinct speech patterns.",
              },
              {
                kind: "skill",
                name: "Dialogue subtext",
                statement: "What characters don't say.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Friend's voice: shorter sentences when hurt, questions when seeking validation.",
                evidence: "friend voice",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Narrator's voice: deflection, humor masking discomfort, eventual honesty.",
                evidence: "narrator voice",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Subtext: what characters don't say — 'I didn't know how to respond' vs 'I'm fine.'",
                evidence: "subtext",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: Friend: 'You don't even ask anymore.' (short, hurt) / Narrator: 'I ask. You just don't hear me.' (defensive) / Friend: 'Do I?' (quiet — not rhetorical, genuinely asking) / Narrator: silence — subtext shows realization. Distinct voices, subtext conveys meaning.",
            commonErrors: [
              "Characters speaking identically — no voice distinction.",
            ],
          },
        },
        {
          id: "ela9-u6-dialogue-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            { label: "a", prompt: "What is 'subtext' in dialogue?", marks: 2 },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement: "What characters don't say.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Meaning beneath surface words — what characters really mean vs what they say.",
                evidence: "subtext",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'I'm fine' said while turning away — subtext: 'I'm not fine, don't push.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Meaning beneath surface words. (b) 'I'm fine' while turning away — subtext: 'I'm not fine, don't push.'",
            commonErrors: [
              "Thinking dialogue should state everything explicitly.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u6-reflection",
      title: "Reflection and narrative distance",
      skill: "Use narrative distance to show growth and reflection over time.",
      lesson: {
        sections: [
          {
            heading: "Narrative distance",
            body: "Distance between past self and present narrator creates reflection: 'At the time, I thought she was being dramatic. Now I understand — she was scared for me.' The gap between then and now IS the meaning. Close distance (present tense, immediate experience) creates immediacy but less reflection; distant distance (looking back with wisdom) creates perspective but less immediacy. Effective narratives shift distance — close during the moment, distant during reflection.",
          },
          {
            heading: "Reflection that transforms",
            body: "Reflection should show transformation, not just lesson: 'I used to think listening meant agreeing. That moment taught me listening means understanding even when you disagree. I still don't always get it right, but I try.' Shows ongoing process, not instant mastery. Reflection isn't a tacked-on paragraph — it should emerge naturally from the narrative's events. The reader should feel the shift, not be told about it.",
          },
        ],
        keyFormulas: [
          {
            name: "Distance creates meaning",
            statement: "Past vs present perspective.",
          },
          {
            name: "Show transformation",
            statement: "Ongoing process, not instant lesson.",
          },
          {
            name: "Reflection emerges",
            statement: "From events, not tacked on.",
          },
        ],
        workedExample: {
          problem:
            "How would you use narrative distance in the turning point story?",
          solution:
            "Close distance during the conversation (immediate experience, sensory detail); distant distance during reflection (looking back with new understanding). Shift between the two creates the narrative's meaning.",
        },
      },
      questions: [
        {
          id: "ela9-u6-reflection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "What is 'narrative distance'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time between chapters" },
              { id: "b", text: "How far away characters are" },
              { id: "c", text: "Length of story" },
              {
                id: "d",
                text: "Perspective gap between past self and present narrator",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative distance",
                statement: "Perspective gap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Distance between past experience and present reflection creates meaning.",
                evidence: "narrative distance",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Perspective gap between past self and present narrator.",
            commonErrors: ["Thinking it's about physical distance."],
          },
        },
        {
          id: "ela9-u6-reflection-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Rewrite 'I learned that I should listen to other people' with narrative distance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative distance",
                statement: "Past vs present perspective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add past perspective: 'At the time, I thought she was being dramatic — just another lecture.'",
                evidence: "past",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add present understanding: 'Now I understand she was scared for me — scared I'd make the same mistake she did.'",
                evidence: "present",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Show transformation: 'I still don't always listen well, but I try — and I notice when I'm not.'",
                evidence: "transformation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'At the time, I thought she was being dramatic — just another lecture. Now I understand she was scared for me — scared I'd make the same mistake she did. I still don't always listen well, but I try — and I notice when I'm not.'",
            commonErrors: ["Telling lesson without showing perspective shift."],
          },
        },
        {
          id: "ela9-u6-reflection-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PROMPT,
          stem: "Write a reflection paragraph showing narrative distance and transformation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative distance",
                statement: "Past vs present.",
              },
              {
                kind: "skill",
                name: "Transformation",
                statement: "Ongoing process.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Past perspective: what you thought then — 'I thought she was overreacting.'",
                evidence: "past",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Present understanding: what you know now — 'She was protecting me from repeating her mistake.'",
                evidence: "present",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Transformation: ongoing process — 'I still struggle, but I try differently now.'",
                evidence: "transformation",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'At the time, I thought she was overreacting — another lecture I didn't need. Now I understand she was protecting me from repeating her mistake, the one that cost her the friendship she valued most. I still struggle to listen without defending myself, but I try differently now — I pause, I ask questions, I let her finish before I respond.'",
            commonErrors: [
              "Reflection without distance — same perspective throughout.",
            ],
          },
        },
        {
          id: "ela9-u6-reflection-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt: "Why does narrative distance create meaning?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example from the draft.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Distance meaning",
                statement: "Perspective gap = growth.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Gap between past and present shows growth — reader sees transformation.",
                evidence: "meaning",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Draft lacks distance — 'I realized I was wrong' is present-tense statement, no past perspective.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Gap between past and present shows growth/transformation. (b) Draft lacks distance — 'I realized I was wrong' has no past perspective.",
            commonErrors: [
              "Thinking distance weakens narrative — it strengthens reflection.",
            ],
          },
        },
      ],
    },
  ],
};
