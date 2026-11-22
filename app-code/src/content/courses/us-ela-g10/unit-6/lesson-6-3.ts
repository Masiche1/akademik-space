import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const NARR: TextExtract = {
  title: "Writing Sample: Narrative Essay — The Night the Power Went Out",
  author: "Written for Akademik Space",
  text: "The storm hit at 9 p.m., but I didn't notice until the lights flickered. Within minutes, the entire neighborhood went dark — no streetlights, no porch lights, just the distant sound of rain against windows.\n\nI grabbed a flashlight and wandered to the kitchen. The fridge hummed its last breath, then silence. Outside, my neighbors' windows glowed with candles — small beacons in the darkness. I realized this wasn't just an inconvenience; it was an opportunity.\n\nWe gathered on my porch with neighbors I barely knew — the Hendersons from next door, the Chen family across the street, an elderly couple two houses down. Someone brought hot chocolate. Someone else produced a guitar. We talked about everything and nothing — work, school, the weather, our kids' school projects. For two hours, the power outage created something the neighborhood had been missing: connection.\n\nWhen the lights came back on at 11 p.m., we lingered. The power returned, but something else had changed. We'd shared stories, laughter, and hot chocolate. The storm had knocked out electricity, but it had also knocked down the walls between us. I realized then that sometimes we need darkness to see what matters.",
};

export const lesson63: Lesson = {
  id: "ela10-u6-lesson-6-3",
  code: "6-3",
  title: "Narrative Writing: Plot, Pacing, and Reflection",
  goal: "I CAN write engaging narratives with clear plot, effective pacing, sensory details, and meaningful reflection.",
  standards: [
    "W.9-10.3",
    "W.9-10.3a",
    "W.9-10.3b",
    "W.9-10.3c",
    "W.9-10.3d",
    "W.9-10.3e",
  ],
  vocabulary: [
    { term: "Narrative arc", definition: "Beginning-middle-end structure." },
    { term: "Pacing", definition: "Speed of narrative progression." },
    {
      term: "Sensory detail",
      definition: "Sight, sound, touch, taste, smell.",
    },
    { term: "Reflection", definition: "What narrator learned." },
    {
      term: "Show don't tell",
      definition: "Demonstrate through detail, not state.",
    },
    { term: "Climax", definition: "Turning point of story." },
  ],
  concepts: [
    {
      id: "ela10-u6-plot",
      title: "Plot structure and pacing",
      skill:
        "Develop narratives with clear plot structure and effective pacing.",
      lesson: {
        sections: [
          {
            heading: "Narrative structure",
            body: "Effective narratives follow: **exposition** (setting/context — storm hits at 9 p.m.), **rising action** (problem develops — power outage), **climax** (turning point — neighbors gather, connection forms), **falling action** (resolution — lights return, relationships changed), **denouement** (reflection — 'sometimes we need darkness to see what matters'). Sample essay: storm → outage → gathering → lights return → reflection.",
          },
          {
            heading: "Pacing techniques",
            body: "Control narrative speed: **slow** for important moments (gathering on porch — detailed), **fast** for transitions (storm hits, outage begins — brief), **pause** for reflection (ending — contemplative). Sample essay slows at climax (neighbors gathering, talking) and speeds through setup (storm, outage). Effective pacing guides reader attention to what matters.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative arc",
            statement: "Exposition → rising → climax → falling → reflection.",
          },
          {
            name: "Pacing controls attention",
            statement: "Slow for important, fast for transitions.",
          },
          { name: "Climax = turning point", statement: "Where story changes." },
        ],
        workedExample: {
          problem: "How does the essay pace its narrative?",
          solution:
            "Fast setup (storm, outage) → slow climax (neighbors gathering, detailed conversation) → reflective ending. Pacing guides attention to connection moment.",
        },
      },
      questions: [
        {
          id: "ela10-u6-plot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NARR,
          stem: "What's the climax of the narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storm hits" },
              { id: "b", text: "Neighbors gather on porch" },
              { id: "c", text: "Lights return" },
              { id: "d", text: "Fridge stops" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax",
                statement: "Turning point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Climax = neighbors gather, connection forms — turning point where story changes.",
                evidence: "climax",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Neighbors gather on porch.",
            commonErrors: ["Confusing climax with resolution."],
          },
        },
        {
          id: "ela10-u6-plot-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NARR,
          stem: "How does the essay control pacing in its narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pacing analysis",
                statement: "Speed control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fast setup: storm hits, outage begins — brief, efficient.",
                evidence: "fast",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Slow climax: neighbors gathering, talking — detailed, immersive.",
                evidence: "slow",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflective ending: lights return, meaning contemplated — contemplative pace.",
                evidence: "reflective",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Fast setup (storm/outage) → slow climax (neighbors gathering, detailed) → reflective ending. Pacing guides attention to connection moment.",
            commonErrors: ["Not recognizing pacing variations."],
          },
        },
        {
          id: "ela10-u6-plot-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARR,
          stem: "Analyze how the narrative arc structures the story — how does each part function?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative arc",
                statement: "Structural function.",
              },
              {
                kind: "skill",
                name: "Plot analysis",
                statement: "How parts work.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Exposition: storm + outage establish problem — what's at stake.",
                evidence: "exposition",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rising action: neighbors gather, connection forms — tension builds toward meaning.",
                evidence: "rising",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Climax + reflection: lights return but relationships changed — resolution + meaning.",
                evidence: "climax",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Narrative arc: exposition (storm/outage = problem) → rising action (neighbors gather = connection building) → climax (lights return but changed) → reflection (meaning realized). Each part functions to build toward thematic insight.",
            commonErrors: ["Listing events without analyzing function."],
          },
        },
        {
          id: "ela10-u6-plot-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: NARR,
          parts: [
            {
              label: "a",
              prompt: "What are the five parts of narrative arc?",
              marks: 2,
            },
            { label: "b", prompt: "Which is most important? Why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative arc",
                statement: "Five parts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Exposition, rising action, climax, falling action, denouement/reflection.",
                evidence: "parts",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Climax most important — turning point where story changes; without it, no narrative tension.",
                evidence: "climax",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Exposition, rising action, climax, falling action, denouement. (b) Climax — turning point.",
            commonErrors: ["Omitting denouement/reflection."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-detail",
      title: "Sensory Details and Show Don't Tell",
      skill:
        "Use sensory details and 'show don't tell' techniques to create vivid narratives.",
      lesson: {
        sections: [
          {
            heading: "Sensory detail",
            body: "Vivid narratives engage multiple senses: **sight** ('windows glowed with candles — small beacons'), **sound** ('rain against windows,' 'fridge hummed its last breath'), **touch** (implied — flashlight, porch gathering), **smell/taste** (hot chocolate). Sample essay uses sound ('hummed its last breath,' 'silence') and sight ('glowed with candles — small beacons in darkness') to create atmosphere. Sensory details immerse reader in experience.",
          },
          {
            heading: "Show don't tell",
            body: "Weak: 'I was scared.' Strong: 'The entire neighborhood went dark — no streetlights, no porch lights, just distant rain.' Weak: 'We had fun.' Strong: 'Someone brought hot chocolate. Someone else produced a guitar. We talked about everything and nothing.' Show through action/dialogue/detail rather than stating emotions. Let reader infer feelings from evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Five senses",
            statement: "Sight, sound, touch, smell, taste.",
          },
          { name: "Show = evidence", statement: "Demonstrate, don't state." },
          {
            name: "Sensory immersion",
            statement: "Details create experience.",
          },
        ],
        workedExample: {
          problem: "How does the essay use sensory details?",
          solution:
            "Sound ('fridge hummed its last breath'), sight ('candles — small beacons in darkness'), implied touch (porch gathering). Creates immersive atmosphere.",
        },
      },
      questions: [
        {
          id: "ela10-u6-detail-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NARR,
          stem: "What does 'show don't tell' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never explain" },
              { id: "b", text: "Demonstrate through detail, not state" },
              { id: "c", text: "Use lots of adjectives" },
              { id: "d", text: "Avoid dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Show don't tell",
                statement: "Demonstrate not state.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Show = demonstrate through detail/action; tell = state directly.",
                evidence: "show",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Demonstrate through detail, not state.",
            commonErrors: ["Confusing with avoiding explanation."],
          },
        },
        {
          id: "ela10-u6-detail-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NARR,
          stem: "Identify two sensory details in the essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sensory detail identification",
                statement: "Multiple senses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sound: 'fridge hummed its last breath,' 'silence' — auditory details.",
                evidence: "sound",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sight: 'windows glowed with candles — small beacons in darkness' — visual imagery.",
                evidence: "sight",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: creates immersive atmosphere — reader experiences outage.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Sound ('fridge hummed,' 'silence'), sight ('candles — small beacons'). Creates immersive atmosphere.",
            commonErrors: ["Identifying without analyzing effect."],
          },
        },
        {
          id: "ela10-u6-detail-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARR,
          stem: "Analyze how 'show don't tell' creates emotional impact in the narrative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Show don't tell",
                statement: "Emotional impact.",
              },
              {
                kind: "skill",
                name: "Reader inference",
                statement: "Let reader feel.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Instead of 'I was lonely,' shows 'neighbors I barely knew' gathering — implies connection.",
                evidence: "lonely→connection",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Instead of 'we had fun,' shows 'hot chocolate,' 'guitar,' 'talked about everything and nothing' — implies joy.",
                evidence: "fun→details",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: reader infers emotions from evidence — more powerful than direct statement.",
                evidence: "infer",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Show don't tell creates emotional impact: 'neighbors I barely knew' gathering implies connection (vs stating 'we connected'); 'hot chocolate, guitar, talked' implies joy (vs 'we had fun'). Reader infers emotions from evidence — more powerful than direct statement.",
            commonErrors: ["Thinking telling is clearer."],
          },
        },
        {
          id: "ela10-u6-detail-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: NARR,
          parts: [
            {
              label: "a",
              prompt: "What are the five senses for sensory detail?",
              marks: 2,
            },
            { label: "b", prompt: "Which does the essay use most?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Five senses",
                statement: "Sensory detail types.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sight, sound, touch, smell, taste.",
                evidence: "senses",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Sound and sight primarily — 'hummed,' 'silence,' 'candles glowed.'",
                evidence: "used",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Sight, sound, touch, smell, taste. (b) Sound and sight primarily.",
            commonErrors: ["Omitting senses."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-reflection",
      title: "Narrative Reflection and Meaning",
      skill:
        "Develop meaningful reflections that connect narrative events to broader themes and lessons learned.",
      lesson: {
        sections: [
          {
            heading: "Narrative reflection",
            body: "Effective narratives end with reflection: what did narrator learn? Sample essay: 'The storm had knocked out electricity, but it had also knocked down walls between us... sometimes we need darkness to see what matters.' Reflection connects specific event (power outage) to universal theme (connection, perspective). Without reflection, story is just events; with it, story has meaning.",
          },
          {
            heading: "Thematic significance",
            body: "Reflection reveals theme: outage → connection → 'sometimes we need darkness to see what matters.' Theme isn't stated explicitly ('friendship is important') but implied through reflection. Reader understands: sometimes adversity reveals what truly matters. Effective reflection is earned — comes after narrative has built toward it, not tacked on.",
          },
        ],
        keyFormulas: [
          { name: "Reflection = meaning", statement: "What narrator learned." },
          {
            name: "Theme through reflection",
            statement: "Implied, not stated.",
          },
          { name: "Earned reflection", statement: "Comes after buildup." },
        ],
        workedExample: {
          problem: "What does the narrator learn in the reflection?",
          solution:
            "'Sometimes we need darkness to see what matters' — adversity (power outage) revealed connection/what matters.",
        },
      },
      questions: [
        {
          id: "ela10-u6-reflection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NARR,
          stem: "What does the narrator learn at the end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Power outages are fun" },
              {
                id: "b",
                text: "Sometimes we need darkness to see what matters",
              },
              { id: "c", text: "Neighbors are annoying" },
              { id: "d", text: "Storms are dangerous" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative reflection",
                statement: "Lesson learned.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reflection: 'sometimes we need darkness to see what matters' — adversity revealed connection.",
                evidence: "reflection",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Sometimes we need darkness to see what matters.",
            commonErrors: ["Missing thematic significance."],
          },
        },
        {
          id: "ela10-u6-reflection-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NARR,
          stem: "How does the reflection connect to the narrative's theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme connection",
                statement: "Reflection to theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Event: power outage → neighbors gather → connection forms.",
                evidence: "event",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection: 'sometimes we need darkness to see what matters' — interprets event.",
                evidence: "reflection",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme: adversity reveals connection/what matters — implied through reflection.",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Event (outage→connection) → reflection ('darkness reveals what matters') → theme (adversity reveals connection). Reflection interprets event, reveals theme.",
            commonErrors: ["Not connecting reflection to theme."],
          },
        },
        {
          id: "ela10-u6-reflection-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARR,
          stem: "Analyze why the reflection is 'earned' rather than tacked on.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Earned reflection",
                statement: "Built toward, not added.",
              },
              {
                kind: "skill",
                name: "Narrative buildup",
                statement: "How reflection works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Narrative builds toward reflection: outage → gathering → connection → lights return.",
                evidence: "builds",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reflection connects to specific details: 'darkness' (power outage), 'see what matters' (connection).",
                evidence: "connects",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Earned because narrative has prepared reader — reflection feels inevitable, not arbitrary.",
                evidence: "inevitable",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Reflection is earned: narrative builds toward it (outage→gathering→connection→lights return), connects to specific details ('darkness'=outage, 'see what matters'=connection), and feels inevitable rather than tacked on.",
            commonErrors: ["Thinking any ending statement = reflection."],
          },
        },
        {
          id: "ela10-u6-reflection-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: NARR,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between summary and reflection?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Summary vs reflection",
                statement: "Restate vs interpret.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Summary = restates events; reflection = interprets meaning.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Summary: 'We gathered on porch, talked, lights returned.' Reflection: 'sometimes we need darkness to see what matters.'",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Summary restates; reflection interprets. (b) Summary: 'We gathered, talked, lights returned.' Reflection: 'sometimes we need darkness to see what matters.'",
            commonErrors: ["Confusing the two."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-integrated-r3",
      title: "Integrated Narrative Writing Practice",
      skill:
        "Integrate plot, pacing, sensory details, and reflection in comprehensive narrative writing.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive narrative",
            body: "Effective narratives integrate: **plot** (clear arc), **pacing** (speed control), **sensory details** (immersion), **reflection** (meaning). Sample essay demonstrates all: narrative arc (storm→gathering→lights return→reflection), pacing (fast setup, slow climax), sensory details (sound, sight), reflection ('darkness reveals what matters').",
          },
          {
            heading: "Writing process",
            body: "Draft → revise: outline arc → draft with sensory details → refine pacing → develop reflection → proofread. Peer review: check clarity, engagement, meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Four components",
            statement: "Plot + pacing + sensory + reflection.",
          },
          { name: "Iterative process", statement: "Draft → revise." },
          { name: "Peer review", statement: "Check clarity + engagement." },
        ],
        workedExample: {
          problem: "How would you structure a narrative essay?",
          solution:
            "Outline arc → draft with sensory details → refine pacing → develop reflection → proofread.",
        },
      },
      questions: [
        {
          id: "ela10-u6-integrated-q1-r3",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NARR,
          stem: "What four components make effective narrative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only plot" },
              { id: "b", text: "Plot + pacing + sensory + reflection" },
              { id: "c", text: "Only dialogue" },
              { id: "d", text: "Only setting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Effective narrative",
                statement: "Four components.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plot + pacing + sensory details + reflection = comprehensive narrative.",
                evidence: "components",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Plot + pacing + sensory + reflection.",
            commonErrors: ["Missing components."],
          },
        },
        {
          id: "ela10-u6-integrated-q2-r3",
          difficulty: "core",
          totalMarks: 3,
          extract: NARR,
          stem: "Outline the writing process for a narrative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing process",
                statement: "Iterative approach.",
              },
            ],
            steps: [
              {
                reasoning: "Outline arc: exposition → climax → reflection.",
                evidence: "outline",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Draft: write with sensory details + pacing control.",
                evidence: "draft",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Revise: develop reflection, proofread.",
                evidence: "revise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Outline arc → draft (sensory details + pacing) → revise (develop reflection, proofread).'",
            commonErrors: ["Starting without outlining arc."],
          },
        },
        {
          id: "ela10-u6-integrated-q3-r3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARR,
          stem: "Write a reflection for a narrative about overcoming a challenge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection writing",
                statement: "Meaning extraction.",
              },
              {
                kind: "skill",
                name: "Thematic connection",
                statement: "Event to theme.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Connect to specific event: reference challenge overcome.",
                evidence: "event",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning: "Extract meaning: what did narrator learn?",
                evidence: "meaning",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning: "Universalize: connect personal to broader theme.",
                evidence: "universal",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The challenge taught me that failure isn't the opposite of success — it's part of it. I learned that persistence matters more than talent, and that the struggle itself builds resilience. What seemed like an obstacle became the foundation for growth.'",
            commonErrors: ["Just summarizing events instead of reflecting."],
          },
        },
        {
          id: "ela10-u6-integrated-q4-r3",
          difficulty: "core",
          totalMarks: 4,
          extract: NARR,
          parts: [
            {
              label: "a",
              prompt: "Why is peer review valuable for narrative writing?",
              marks: 2,
            },
            { label: "b", prompt: "What should reviewers check?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Peer review",
                statement: "Feedback value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Identifies unclear plot, weak pacing, missing reflection.",
                evidence: "value",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Check: clarity, engagement, sensory details, reflection quality.",
                evidence: "check",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Identifies unclear plot/weak pacing/missing reflection. (b) Check clarity, engagement, sensory, reflection.",
            commonErrors: ["Thinking peer review = proofreading only."],
          },
        },
      ],
    },
  ],
};
