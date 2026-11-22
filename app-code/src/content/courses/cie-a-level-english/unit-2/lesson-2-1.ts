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
              { id: "a", text: "The ending" },
              { id: "b", text: "The introduction" },
              { id: "c", text: "The first paragraph" },
              {
                id: "d",
                text: "The point of highest tension or turning point",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "cial-e-u2-nc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of exposition in a narrative?",
          response: { type: "mcq", choices: [ { id: "a", text: "It lists the ending" }, { id: "b", text: "It repeats the climax" }, { id: "c", text: "It resolves the conflict" }, { id: "d", text: "It introduces character, setting and situation" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Exposition", statement: "Opening context establishes who, where and what is at stake." }], steps: [{ reasoning: "Exposition supplies initial context.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Introduces context", commonErrors: ["Confusing exposition with resolution."] },
        },
        {
          id: "cial-e-u2-nc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens during rising action?",
          response: { type: "mcq", choices: [ { id: "a", text: "The conflict disappears" }, { id: "b", text: "Characters are introduced for the first time" }, { id: "c", text: "Tension and complications increase toward the climax" }, { id: "d", text: "The story ends quietly" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Rising action", statement: "Complications build pressure before the climax." }], steps: [{ reasoning: "Rising action increases tension.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Tension increases", commonErrors: ["Thinking rising action is the opening."] },
        },
        {
          id: "cial-e-u2-nc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point of view gives the narrator's private thoughts most directly?",
          response: { type: "mcq", choices: [ { id: "a", text: "First person" }, { id: "b", text: "Third-person omniscient" }, { id: "c", text: "Objective report" }, { id: "d", text: "Second-person instructions" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Point of view", statement: "First person gives direct access to one consciousness." }], steps: [{ reasoning: "First person most directly voices private thought.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** First person", commonErrors: ["Confusing omniscient access with intimacy."] },
        },
        {
          id: "cial-e-u2-nc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why use short sentences at a crisis point?",
          response: { type: "mcq", choices: [ { id: "a", text: "To introduce a new character" }, { id: "b", text: "To make the paragraph longer" }, { id: "c", text: "To quicken pace and heighten urgency" }, { id: "d", text: "To explain the backstory" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Sentence pacing", statement: "Short sentences accelerate rhythm and focus attention." }], steps: [{ reasoning: "Short units create urgency at crisis moments.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Quicker pace and urgency", commonErrors: ["Treating sentence length as decorative."] },
        },
        {
          id: "cial-e-u2-nc-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main risk of withholding too much information?",
          response: { type: "mcq", choices: [ { id: "a", text: "The ending becomes circular" }, { id: "b", text: "The reader loses orientation and stops caring" }, { id: "c", text: "The climax arrives too early" }, { id: "d", text: "The reader becomes more suspenseful" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Information control", statement: "Suspense needs enough context to keep the reader invested." }], steps: [{ reasoning: "Excessive withholding destroys orientation rather than creating tension.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Reader loses orientation", commonErrors: ["Assuming more secrecy always means more suspense."] },
        },
        {
          id: "cial-e-u2-nc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages are included in the full narrative arc described in the lesson?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "convention", name: "Narrative arc", statement: "Exposition, rising action, climax, falling action and resolution." }], steps: [{ reasoning: "Five stages are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "5", commonErrors: ["Omitting falling action."] },
        },
        {
          id: "cial-e-u2-nc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many elements are combined in the narrative formula: POV, character, conflict, arc and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "skill", name: "Narrative formula", statement: "POV + character + conflict + arc + pacing." }], steps: [{ reasoning: "Five elements form the formula.", marks: 1, markCode: "AO1" }], finalAnswer: "5", commonErrors: ["Leaving out pacing."] },
        },
        {
          id: "cial-e-u2-nc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many main planning choices should be made before writing: point of view, character, conflict and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "skill", name: "Narrative planning", statement: "POV, character, conflict and arc are planned first." }], steps: [{ reasoning: "Four planning choices are identified.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Planning only the plot outline."] },
        },
        {
          id: "cial-e-u2-nc-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many broad pacing directions are used in narrative control: slowing down and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Pacing", statement: "Slow down for emphasis; speed up through transitions." }], steps: [{ reasoning: "Two pacing directions are used.", marks: 1, markCode: "AO2" }], finalAnswer: "2", commonErrors: ["Thinking pacing only means slowing down."] },
        },
        {
          id: "cial-e-u2-nc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain 'show don't tell' in narrative characterisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Show don't tell", statement: "Action and dialogue reveal character more convincingly than labels." }], steps: [{ reasoning: "A strong answer shows how concrete behaviour lets readers infer traits instead of being told them.", marks: 2, markCode: "AO2" }], finalAnswer: "Characters feel real when their actions, speech and choices demonstrate personality rather than direct description.", commonErrors: ["Listing adjectives as if they were characterisation."] },
        },
        {
          id: "cial-e-u2-nc-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How can pacing sustain suspense without confusing the reader?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Controlled suspense", statement: "Withhold some information while keeping orientation clear." }], steps: [{ reasoning: "A strong answer balances delayed revelation with enough context to guide the reader.", marks: 2, markCode: "AO2" }], finalAnswer: "Suspense works when key outcomes are withheld but enough context is given to keep the reader oriented and anticipating.", commonErrors: ["Equating suspense with total confusion."] },
        },
        {
          id: "cial-e-u2-nc-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plan the key choices for a narrative opening called 'The Storm'.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Narrative opening", statement: "Choose POV, character want, conflict and a hook." }], steps: [{ reasoning: "A strong plan names point of view, a motivated character, a storm-related conflict and an opening that raises tension.", marks: 2, markCode: "AO2" }], finalAnswer: "A strong plan fixes POV, character motivation, central conflict and a hook that immediately engages the storm scenario.", commonErrors: ["Writing a plot summary rather than planning narrative craft."] },
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
              { id: "a", text: "The first sentence" },
              { id: "b", text: "The longest paragraph" },
              { id: "c", text: "The single mood a description creates" },
              { id: "d", text: "The most detailed part" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cial-e-u2-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which detail best supports a 'menacing' dominant impression?",
          response: { type: "mcq", choices: [ { id: "a", text: "Sunlight dancing on water" }, { id: "b", text: "A shadow sliding across the wall" }, { id: "c", text: "A warm loaf cooling on a rack" }, { id: "d", text: "Children laughing in a field" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Dominant impression", statement: "Details must reinforce one mood." }], steps: [{ reasoning: "The sliding shadow carries menace through connotation.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Shadow sliding across the wall", commonErrors: ["Choosing pleasant details for a menacing mood."] },
        },
        {
          id: "cial-e-u2-dc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense is most often neglected in weak description?",
          response: { type: "mcq", choices: [ { id: "a", text: "Sound" }, { id: "b", text: "Touch" }, { id: "c", text: "Sight" }, { id: "d", text: "Smell" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Multi-sensory description", statement: "Smell and touch often add the missing immersive layer." }], steps: [{ reasoning: "Sight is common; smell is frequently omitted.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Smell", commonErrors: ["Assuming visual detail alone creates immersion."] },
        },
        {
          id: "cial-e-u2-dc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the effect of inconsistent connotations?",
          response: { type: "mcq", choices: [ { id: "a", text: "They strengthen the mood" }, { id: "b", text: "They add more facts" }, { id: "c", text: "They weaken the dominant impression" }, { id: "d", text: "They shorten the paragraph" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Connotation consistency", statement: "Conflicting associations blur the intended mood." }], steps: [{ reasoning: "Mixed associations prevent a unified impression.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** They weaken the mood", commonErrors: ["Thinking more detail always helps."] },
        },
        {
          id: "cial-e-u2-dc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organisational method suits a description that follows the eye moving through a room?",
          response: { type: "mcq", choices: [ { id: "a", text: "Cause and effect" }, { id: "b", text: "Chronological summary" }, { id: "c", text: "Spatial" }, { id: "d", text: "Thematic" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Spatial organisation", statement: "Description moves near to far or across locations." }], steps: [{ reasoning: "Eye movement through space fits spatial order.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Spatial", commonErrors: ["Choosing chronological order for a static scene."] },
        },
        {
          id: "cial-e-u2-dc-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are precise verbs stronger than general verbs in description?",
          response: { type: "mcq", choices: [ { id: "a", text: "They convey specific action and mood economically" }, { id: "b", text: "They make the text formal" }, { id: "c", text: "They remove the need for imagery" }, { id: "d", text: "They are always longer" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Precise diction", statement: "Specific verbs carry action, tone and image." }], steps: [{ reasoning: "Precise verbs do more imaginative work per word.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Specific action and mood", commonErrors: ["Using vague verbs such as 'went' or 'got'."] },
        },
        {
          id: "cial-e-u2-dc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many senses does the lesson recommend engaging in description?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Five senses", statement: "Sight, sound, smell, touch and taste." }], steps: [{ reasoning: "Five senses are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "5", commonErrors: ["Using only sight and sound."] },
        },
        {
          id: "cial-e-u2-dc-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many dominant impressions should a controlled description usually sustain?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "definition", name: "Dominant impression", statement: "One unified mood." }], steps: [{ reasoning: "A dominant impression is singular.", marks: 1, markCode: "AO1" }], finalAnswer: "1", commonErrors: ["Trying to create several moods at once."] },
        },
        {
          id: "cial-e-u2-dc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many organisational structures are recommended for descriptive writing?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "convention", name: "Description structure", statement: "Spatial, chronological and thematic." }], steps: [{ reasoning: "Three organising structures are given.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Listing random paragraph order as a structure."] },
        },
        {
          id: "cial-e-u2-dc-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many word classes are highlighted for precise description: verbs and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Precise diction", statement: "Precise verbs and adjectives." }], steps: [{ reasoning: "Two word classes are emphasised.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Focusing only on adjectives."] },
        },
        {
          id: "cial-e-u2-dc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how varying the senses creates immersion.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Multi-sensory immersion", statement: "Sound, smell, touch and taste make a scene feel inhabited." }], steps: [{ reasoning: "A strong answer explains that non-visual senses make the reader feel present rather than merely observe.", marks: 2, markCode: "AO2" }], finalAnswer: "Using several senses makes description immersive by engaging the body and memory, not just the eye.", commonErrors: ["Listing senses without explaining immersion."] },
        },
        {
          id: "cial-e-u2-dc-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How do consistent connotations control the mood of a description?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Connotation and mood", statement: "Word associations steer feeling; consistency reinforces one impression." }], steps: [{ reasoning: "A strong answer shows how choices such as 'slithered' or 'danced' align or conflict with the intended mood.", marks: 2, markCode: "AO2" }], finalAnswer: "Connotations carry emotional associations; keeping them aligned creates a unified mood, while contradictions weaken it.", commonErrors: ["Choosing words for literal meaning only."] },
        },
        {
          id: "cial-e-u2-dc-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write and briefly justify one sentence describing a storm with menace.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Menacing description", statement: "Word choice and imagery should suggest threat." }], steps: [{ reasoning: "A strong sentence uses threatening verbs or images; justification links diction to menace.", marks: 2, markCode: "AO2" }], finalAnswer: "Any sentence where diction and imagery create threat, e.g. 'The storm crouched over the rooftops, breathing cold rain.'", commonErrors: ["Using neutral weather language without menace."] },
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
