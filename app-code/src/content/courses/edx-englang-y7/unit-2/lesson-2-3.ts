import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "el7-u2-lesson-2-3",
  code: "2-3",
  title: "Creative and Descriptive Writing",
  goal: "I CAN write descriptively and creatively using imagery, voice and structure.",
  standards: ["Edexcel KS3 English Language — Writing"],
  vocabulary: [
    {
      term: "Imagery",
      definition:
        "Language appealing to the senses — sight, sound, smell, taste, touch.",
    },
    {
      term: "Show don't tell",
      definition:
        "Revealing character/emotion through action and detail rather than stating it.",
    },
    {
      term: "Narrative voice",
      definition:
        "The perspective and personality through which a story is told.",
    },
    {
      term: "Descriptive writing",
      definition:
        "Writing that paints pictures with words — setting, character, mood.",
    },
  ],
  concepts: [
    {
      id: "el7-u2-description",
      title: "Descriptive Writing",
      skill:
        "Create vivid descriptions using sensory detail and figurative language.",
      lesson: {
        sections: [
          {
            heading: "Sensory description",
            body: "Engage all five senses — not just sight. 'The market stank of overripe fruit and diesel' appeals to smell and sight. **Specificity beats generality**: 'a big dog' → 'a scarred rottweiler with amber eyes'.\n\n**Figurative language**: similes ('cold as ice'), metaphors ('a blanket of snow'), personification ('the wind howled'). Use devices purposefully — each should enhance the image or mood.",
          },
          {
            heading: "Show don't tell",
            body: "Instead of stating emotions: **show through action and detail**. 'She was angry' → 'She crumpled the letter into a tight ball, her knuckles white.'\n\nThis creates **immersion** — readers experience rather than being told. Combine with varied sentence structures: short sentences for tension ('Silence. Then footsteps.'), longer flowing sentences for description and atmosphere.",
          },
        ],
        keyFormulas: [
          {
            name: "Sensory writing",
            statement:
              "Engage sight, sound, smell, taste, touch — specific over general.",
          },
          {
            name: "Show don't tell",
            statement:
              "Reveal through action and detail, not direct statement.",
          },
        ],
        workedExample: {
          problem: "Describe a stormy night using two senses.",
          solution:
            "'Thunder shook the windows while rain hammered the roof — the air smelled of ozone and wet earth.'",
        },
      },
      questions: [
        {
          id: "el7-u2-description-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'show don't tell' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write longer sentences" },
              {
                id: "b",
                text: "Reveal through action and detail rather than stating directly",
              },
              { id: "c", text: "Only use dialogue" },
              { id: "d", text: "Never describe anything" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Show don't tell",
                statement: "Reveal through action/detail instead of stating.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Show = demonstrate via detail; tell = state directly.",
                marks: 2,
                markCode: "AO4",
              },
            ],
            finalAnswer: "**(b)** Reveal through action and detail",
            commonErrors: ["Confusing with description generally."],
          },
        },
        {
          id: "el7-u2-description-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is specificity important in descriptive writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Specificity",
                statement: "Precise detail creates vivid, memorable images.",
              },
            ],
            steps: [
              {
                reasoning: "Vivid images in reader's mind.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creates immersion/engagement.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Distinguishes good from generic writing.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Specific detail creates vivid images, immersing the reader — generic description fails to engage.",
            commonErrors: ["Vague 'makes it better'.", "No reader effect."],
          },
        },
        {
          id: "el7-u2-description-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sentence variety contributes to descriptive writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sentence variety",
                statement:
                  "Short sentences create tension; long create flow — matching rhythm to mood.",
              },
            ],
            steps: [
              {
                reasoning: "Short = punchy, tense, dramatic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Long = flowing, descriptive, atmospheric.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rhythm matches mood/effect.",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Prevents monotony.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer:
              "Sentence variety creates rhythm matching mood — short for tension, long for atmosphere.",
            commonErrors: ["Variety = random view.", "No mood connection."],
          },
        },
        {
          id: "el7-u2-description-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe a character entering a room for the first time, using 'show don't tell'.",
          parts: [
            {
              label: "a",
              prompt: "Use one piece of body language to show emotion.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Use sensory detail about the room.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Avoid stating the character's emotion directly.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Show don't tell",
                statement:
                  "Action + sensory detail, no direct emotion statement.",
              },
            ],
            steps: [
              {
                reasoning: "Body language reveals emotion.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Specific, revealing gesture.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Sensory room detail.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Multiple senses or vivid image.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "No direct emotion stated.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "e.g. 'Her shoulders hunched as she edged through the door, the musty air catching in her throat.'",
            commonErrors: ["'She was nervous' stated.", "Generic description."],
          },
        },
      ],
    },
    {
      id: "el7-u2-narrative",
      title: "Narrative Writing",
      skill:
        "Write engaging narratives with character, setting, plot and viewpoint.",
      lesson: {
        sections: [
          {
            heading: "Narrative elements",
            body: "**Character**: wants, fears, flaws — drive the story. **Setting**: time and place — establishes mood. **Plot**: problem → rising tension → climax → resolution. **Viewpoint**: first person (intimate) or third person (flexible).\n\n**Pacing**: slow for atmosphere and character development, fast for action and tension. Vary scene length — some moments deserve a paragraph, others a sentence.",
          },
          {
            heading: "Engaging openings and endings",
            body: "**Hook the reader**: start mid-action, with dialogue, a surprising fact, or an intriguing image — avoid 'Once upon a time' clichés unless deliberately subverting them.\n\n**Satisfying endings**: resolve the central conflict, echo the opening (cyclical structure), or leave deliberate ambiguity. The ending should feel earned — the reader's investment should pay off.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative elements",
            statement: "Character + setting + plot + viewpoint.",
          },
          {
            name: "Plot arc",
            statement: "Problem → tension → climax → resolution.",
          },
        ],
        workedExample: {
          problem: "Write a hook for a story about a lighthouse keeper.",
          solution:
            "'The light had been dead for three days when Mara finally admitted she couldn't fix it alone.'",
        },
      },
      questions: [
        {
          id: "el7-u2-narrative-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between first and third person narration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are identical" },
              { id: "b", text: "Third person is more honest" },
              { id: "c", text: "First person is longer" },
              {
                id: "d",
                text: "First person = 'I'; third person = 'he/she/they'",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative viewpoint",
                statement:
                  "First person uses 'I'; third person uses he/she/they.",
              },
            ],
            steps: [
              {
                reasoning: "First = I/my; third = he/she/they.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** 'I' vs 'he/she/they'",
            commonErrors: ["Confusing viewpoint."],
          },
        },
        {
          id: "el7-u2-narrative-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do characters need flaws in a narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Character flaws",
                statement:
                  "Flaws create conflict, relatability and character development.",
              },
            ],
            steps: [
              {
                reasoning: "Flaws create conflict/problems.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Make characters relatable/human.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Enable character development/growth.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Flaws drive conflict, make characters relatable and enable growth — perfect characters are boring.",
            commonErrors: ["Flaws unnecessary view.", "No narrative purpose."],
          },
        },
        {
          id: "el7-u2-narrative-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What makes an effective story opening?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Story openings",
                statement:
                  "Hook immediately — action, dialogue, intrigue — establish voice and tension.",
              },
            ],
            steps: [
              {
                reasoning: "Hooks attention immediately.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Establishes voice/tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creates curiosity/intrigue.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Avoids slow exposition.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Effective openings hook immediately — action, dialogue or intrigue — establishing voice and curiosity.",
            commonErrors: ["'Once upon a time' accepted.", "No hook concept."],
          },
        },
        {
          id: "el7-u2-narrative-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan the opening paragraph of a story about a character who discovers a hidden door in their house.",
          parts: [
            {
              label: "a",
              prompt: "Choose a narrative viewpoint and justify it.",
              marks: 2,
            },
            { label: "b", prompt: "Write a hook opening line.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest how to establish setting and mood.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Narrative planning",
                statement: "Viewpoint + hook + setting/mood.",
              },
            ],
            steps: [
              {
                reasoning: "Viewpoint chosen and justified.",
                marks: 2,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Hook line: intriguing, immediate.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Effective opening.",
                marks: 1,
                markCode: "AO4",
                part: "b",
              },
              {
                reasoning: "Setting detail: specific, atmospheric.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "Mood established through detail.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "c" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "c" },
                        ],
            finalAnswer:
              "e.g. Third person limited: 'The door wasn't there yesterday. It stood between the bookcase and the wall, painted the same colour as the plaster.'",
            commonErrors: ["Weak viewpoint justification.", "No hook."],
          },
        },
      ],
    },
  ],
};
