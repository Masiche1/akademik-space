import type { Lesson } from "../../../types.ts";

export const lesson221: Lesson = {
  id: "cial-e-u2-lesson-2-1",
  code: "2-1",
  title: "Composition: narrative and descriptive writing",
  goal: "I CAN write effective narrative and descriptive compositions for exam tasks.",
  standards: ["9093 Paper 1: composition"],
  vocabulary: [
    {
      term: "Narrative arc",
      definition:
        "Exposition, rising action, climax, falling action, resolution.",
    },
    {
      term: "Show don't tell",
      definition: "Revealing character and emotion through detail and action.",
    },
    {
      term: "Sensory detail",
      definition: "Description engaging sight, sound, smell, touch, taste.",
    },
    {
      term: "Point of view",
      definition: "The narrative perspective: first, second or third person.",
    },
    {
      term: "Tension",
      definition: "Suspense created by withheld information and pacing.",
    },
    {
      term: "Dominant impression",
      definition: "The single mood a description creates.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u2-narrative",
      title: "Narrative composition",
      skill: "Plan and write narratives with character, conflict and tension.",
      lesson: {
        sections: [
          {
            heading: "Planning the narrative",
            body: "Before writing: choose point of view, establish character with a want and a fear, define the central conflict, and map the arc — exposition, rising action, climax, resolution. A 5-minute plan prevents rambling.",
          },
          {
            heading: "Character through action",
            body: "Reveal character by what they do and say, not by listing adjectives. Dialogue should sound natural and reveal relationships. Give each main character a motivation that drives their choices.",
          },
          {
            heading: "Pacing and tension",
            body: "Slow down for key moments (detail, interior thought), speed up through transitions. Use short sentences at crisis points. Withhold information to sustain suspense — but give enough to keep the reader oriented.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative",
            statement: "POV+character+conflict+arc+pacing=effective narrative.",
          },
        ],
        workedExample: {
          problem: "Plan a narrative about a missed train.",
          solution:
            "POV: first person. Character: anxious commuter. Conflict: must reach interview. Arc: rush, obstacle, climax (train leaves), resolution (unexpected kindness).",
        },
      },
      questions: [
        {
          id: "cial-e-u2-nc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'climax' of a narrative?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The point of highest tension or turning point",
              },
              { id: "b", text: "The first paragraph" },
              { id: "c", text: "The ending" },
              { id: "d", text: "The introduction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Climax",
                statement: "Highest tension or decisive turning point.",
              },
            ],
            steps: [
              {
                reasoning: "Climax = peak tension.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Highest tension/turning point",
            commonErrors: ["Confusing with resolution."],
          },
        },
        {
          id: "cial-e-u2-nc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should characters be revealed through action rather than description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character through action",
                statement:
                  "Actions demonstrate traits more convincingly than stated adjectives.",
              },
            ],
            steps: [
              {
                reasoning: "Action shows character in context.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Readers infer personality — more engaging.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Action lets readers infer character, making them feel real.",
            commonErrors: ["Listing adjectives instead of showing."],
          },
        },
        {
          id: "cial-e-u2-nc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does withholding information create tension in a narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Withholding information",
                statement:
                  "Unknown outcomes make readers anticipate — that anticipation is suspense.",
              },
            ],
            steps: [
              {
                reasoning: "Reader uncertainty creates anticipation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gradual revelation controls pace.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Too much withholding loses the reader.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Withheld information creates anticipation — suspense through uncertainty.",
            commonErrors: ["Confusing tension with confusion."],
          },
        },
        {
          id: "cial-e-u2-nc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Narrative composition.",
          parts: [
            {
              label: "a",
              prompt: "Name the stages of a narrative arc.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How do you reveal character through action?",
              marks: 3,
            },
            { label: "c", prompt: "How does pacing create tension?", marks: 3 },
            {
              label: "d",
              prompt: "Plan a narrative opening for 'The Storm'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Narrative",
                statement: "Arc+character+pacing+planning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Exposition, rising action, climax, resolution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Four stages named.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Actions/dialogue show traits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Readers infer personality.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "c",
                reasoning: "Slow for key moments, fast for transitions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Short sentences at crisis points.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Withheld information sustains suspense.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "An opening attempted with hook.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Fits the storm theme.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) four stages (b) action reveals (c) pace+tension (d) opening plan",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Stages named.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Action explained.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Pacing explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Opening fits.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Plot summary instead of narrative craft."],
          },
        },
      ],
    },
    {
      id: "cial-e-u2-descriptive",
      title: "Descriptive composition",
      skill:
        "Write vivid descriptions using sensory detail and controlled mood.",
      lesson: {
        sections: [
          {
            heading: "Sensory immersion",
            body: "Engage all five senses: sight ('golden light'), sound ('low hum'), smell ('warm soil'), touch ('rough bark'), taste ('bitter coffee'). Vary the senses — visual-only description is flat. Use precise verbs and adjectives.",
          },
          {
            heading: "Dominant impression",
            body: "Every detail should reinforce one mood: decay, vitality, menace, serenity. Choose connotations that match — 'slithered' for menace, 'danced' for vitality. Inconsistent details weaken the impression.",
          },
          {
            heading: "Structure",
            body: "Organise spatially (near to far), chronologically (as the eye travels), or thematically (by sense or subject). Open with an orienting sentence; close with a line that deepens the mood.",
          },
        ],
        keyFormulas: [
          {
            name: "Description",
            statement:
              "Senses+imagery+precise words+consistent mood=vivid description.",
          },
        ],
        workedExample: {
          problem: "Describe a library with a hushed, reverent mood.",
          solution:
            "'Dust motes drifted in shafts of light. Pages turned like whispers. The silence had weight — you could feel it on your tongue.'",
        },
      },
      questions: [
        {
          id: "cial-e-u2-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'dominant impression'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The single mood a description creates" },
              { id: "b", text: "The first sentence" },
              { id: "c", text: "The longest paragraph" },
              { id: "d", text: "The most detailed part" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dominant impression",
                statement: "The unified mood created by all details.",
              },
            ],
            steps: [
              {
                reasoning: "Impression = overall mood.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Single mood created",
            commonErrors: ["Confusing with structure."],
          },
        },
        {
          id: "cial-e-u2-dc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should description engage more than sight?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Multi-sensory",
                statement: "Multiple senses create immersion.",
              },
            ],
            steps: [
              { reasoning: "Sight alone is flat.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Sound/smell/touch add layers of experience.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Multiple senses create a richer, immersive experience.",
            commonErrors: ["Listing senses without explaining effect."],
          },
        },
        {
          id: "cial-e-u2-dc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do word connotations control the mood of a description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Connotation and mood",
                statement: "Word associations steer the reader's feeling.",
              },
            ],
            steps: [
              {
                reasoning: "'Slithered' vs 'walked' — connotation differs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consistent connotations reinforce the mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Contradictory connotations confuse the impression.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Connotations shape mood; consistency reinforces it.",
            commonErrors: ["Choosing words without considering associations."],
          },
        },
        {
          id: "cial-e-u2-dc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Descriptive composition.",
          parts: [
            { label: "a", prompt: "Define dominant impression.", marks: 1 },
            {
              label: "b",
              prompt: "Name three senses to use and why.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How do connotations control mood?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Write one sentence describing a storm with menace.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Description",
                statement: "Impression+senses+connotation+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Single unified mood.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any three senses named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Each creates immersion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Three valid.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Connotations carry associations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Consistency reinforces mood.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Sentence attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Menace conveyed via word choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effective imagery.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) unified mood (b) three senses (c) connotation=mood (d) menacing sentence",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Three senses+why.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Connotation explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Effective sentence.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempted.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Visual-only description."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u2-composition-notes",
      title: "Narrative and descriptive writing — revision notes",
      summary:
        "Narrative arcs, character, tension, sensory description and mood control.",
      sections: [
        {
          heading: "Narrative",
          body: "Plan: POV, character (want+fear), conflict, arc. Reveal through action. Control pace — slow for key moments, fast for transitions. Withhold information for tension.",
        },
        {
          heading: "Description",
          body: "All five senses. Precise verbs/adjectives. One dominant impression — consistent connotations. Organise spatially, chronologically or thematically.",
        },
        {
          heading: "Exam checklist",
          body: "Is there a clear arc/conflict? Is character shown through action? Are all senses used? Is the mood consistent? Is there a satisfying resolution?",
        },
      ],
    },
  ],
};
