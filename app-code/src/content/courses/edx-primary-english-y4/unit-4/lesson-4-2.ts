import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpe4-u4-lesson-4-2",
  code: "4-2",
  title: "Writing Descriptive and Narrative Texts",
  goal: "I CAN write effective descriptions and narratives.",
  standards: ["Year 4 Writing"],
  vocabulary: [
    {
      term: "Sensory detail",
      definition: "Description using the five senses.",
    },
    { term: "Simile", definition: "Comparison using 'like' or 'as'." },
    {
      term: "Metaphor",
      definition: "Direct comparison: 'the snow is a blanket'.",
    },
    { term: "Tension", definition: "Building suspense or worry in a story." },
  ],
  concepts: [
    {
      id: "edpe4-u4-description",
      title: "Descriptive writing",
      skill: "Use sensory detail, similes and metaphors to describe.",
      lesson: {
        sections: [
          {
            heading: "Sensory description",
            body: "Good description uses the five senses: sight, sound, smell, taste, touch. Instead of 'the cake was nice', write 'the warm cake smelled of vanilla and melted chocolate on my tongue'. Show, don't tell — let readers experience it.",
          },
          {
            heading: "Figurative language",
            body: "Similes compare with 'like/as': 'as brave as a lion'. Metaphors say something IS something else: 'the classroom was a zoo'. Personification gives human traits: 'the sun smiled'. These make writing vivid and memorable.",
          },
        ],
        keyFormulas: [
          {
            name: "Description",
            statement: "5 senses + similes + metaphors + personification",
          },
        ],
        workedExample: {
          problem: "Improve: 'The room was cold.'",
          solution:
            "An icy draught crept under the door as frost spider-webbed the window.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the five senses used in description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only sight and sound" },
              { id: "b", text: "Sight, sound, smell, taste, touch" },
              { id: "c", text: "Only sight" },
              { id: "d", text: "Hearing and taste" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Five senses",
                statement: "All five.",
              },
            ],
            steps: [
              {
                reasoning: "Description uses all senses.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** All five senses",
            commonErrors: ["Incomplete list."],
          },
        },
        {
          id: "edpe4-u4-de-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a metaphor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparison using 'like'" },
              { id: "b", text: "Direct comparison: 'X is Y'" },
              { id: "c", text: "A type of rhyme" },
              { id: "d", text: "A poem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metaphor",
                statement: "Direct comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Metaphor says X IS Y without 'like/as'.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Direct comparison",
            commonErrors: ["Confusing with simile."],
          },
        },
        {
          id: "edpe4-u4-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this description: 'The beach was nice.' Use at least two senses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Descriptive writing",
                statement: "Sensory detail.",
              },
            ],
            steps: [
              {
                reasoning: "Adds sight: 'golden sand', 'turquoise waves'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adds sound/smell: 'crashing waves', 'salt air'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vivid, sensory description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sensory beach description",
            commonErrors: ["Only one sense."],
          },
        },
        {
          id: "edpe4-u4-de-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a description of a stormy night using personification and a simile.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Figurative language",
                statement: "Personification + simile.",
              },
            ],
            steps: [
              {
                reasoning: "Personification: 'the wind howled', 'rain lashed'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simile: 'as loud as thunder'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates atmosphere and feeling.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Storm description with figurative language",
            commonErrors: ["Missing one technique."],
          },
        },
      ],
    },
    {
      id: "edpe4-u4-narrative",
      title: "Narrative Structure",
      skill: "Build tension and structure stories effectively.",
      lesson: {
        sections: [
          {
            heading: "Story structure",
            body: "A narrative has: orientation (setting, characters), complication (problem), climax (most tense moment), resolution (problem solved). Vary sentence length for effect: short sentences create tension ('He ran. He ran fast.'), longer ones build description.",
          },
          {
            heading: "Building tension",
            body: "Tension keeps readers hooked. Use: foreshadowing (hints of trouble), pacing (slow then fast), cliffhangers (ending a section on suspense), and sensory details. 'Something moved in the shadows' creates dread without revealing what.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative",
            statement: "Orientation + complication + climax + resolution",
          },
        ],
        workedExample: {
          problem:
            "How do you create tension in a story about a haunted house?",
          solution:
            "Slow descriptions, creaking sounds, shadows moving, characters whispering, then a sudden loud noise.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-na-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the climax of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The beginning" },
              { id: "b", text: "The most tense or exciting moment" },
              { id: "c", text: "The ending" },
              { id: "d", text: "The problem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax",
                statement: "Peak tension.",
              },
            ],
            steps: [
              {
                reasoning: "Climax = most intense moment.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Most tense moment",
            commonErrors: ["Confusing with resolution."],
          },
        },
        {
          id: "edpe4-u4-na-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is foreshadowing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ending a story suddenly" },
              { id: "b", text: "Hinting at future events" },
              { id: "c", text: "Describing the setting" },
              { id: "d", text: "Introducing characters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Foreshadowing",
                statement: "Hints at future.",
              },
            ],
            steps: [
              {
                reasoning: "Foreshadowing = early hints of what's coming.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Hinting at future events",
            commonErrors: ["Confusing with flashback."],
          },
        },
        {
          id: "edpe4-u4-na-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite for tension: 'The boy walked into the dark room.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tension",
                statement: "Sensory + pacing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adds sensory detail: 'shadows', 'cold air', 'creaking floor'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Short sentences for pace: 'He stopped. Listened. Nothing.'",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Creates suspense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tense version with sensory detail",
            commonErrors: ["No tension created."],
          },
        },
        {
          id: "edpe4-u4-na-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sentence length affects tension. Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence craft",
                statement: "Short = fast/tension; long = slow/building.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Short sentences create urgency: 'He ran. He jumped. He landed.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Long sentences slow pace for description or dread.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear example and explanation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Short=fast/tension, long=slow/building",
            commonErrors: ["No example."],
          },
        },
      ],
    },
    {
      id: "edpe4-u4-characters",
      title: "Character Development",
      skill: "Create and develop characters in stories.",
      lesson: {
        sections: [
          {
            heading: "Creating characters",
            body: "Good characters have: personality (brave, shy, cheeky), appearance (but not just looks), motivations (what they want), flaws (weaknesses), and change (how they grow). A character who never changes is flat; one who learns from experience is dynamic.",
          },
          {
            heading: "Showing not telling",
            body: "Don't say 'Tom was angry'. Show it: 'Tom's fists clenched. His face went red. He stamped his foot.' Actions and dialogue reveal character better than labels. What characters say and do tells us who they are.",
          },
        ],
        keyFormulas: [
          {
            name: "Character",
            statement: "Personality + appearance + motivation + flaw + change",
          },
        ],
        workedExample: {
          problem: "Show that a character is nervous without saying 'nervous'.",
          solution:
            "She twisted her hands, avoided eye contact, and kept checking the door.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a character 'dynamic'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They never change" },
              { id: "b", text: "They change and grow" },
              { id: "c", text: "They are funny" },
              { id: "d", text: "They are the main character" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dynamic character",
                statement: "Changes over time.",
              },
            ],
            steps: [
              {
                reasoning: "Dynamic = develops through story.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** They change and grow",
            commonErrors: ["Confusing with static."],
          },
        },
        {
          id: "edpe4-u4-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a character flaw?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A strength" },
              { id: "b", text: "A weakness or fault" },
              { id: "c", text: "A skill" },
              { id: "d", text: "A talent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flaw", statement: "Weakness." },
            ],
            steps: [
              {
                reasoning: "Flaw = character's weakness.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Weakness or fault",
            commonErrors: ["Confusing with strength."],
          },
        },
        {
          id: "edpe4-u4-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show (don't tell) that a character is excited about a school trip.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Show don't tell",
                statement: "Actions/dialogue show emotion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Actions: 'bounced on her toes', 'packed her bag three times'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dialogue: 'I can't wait!', 'Have we left yet?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Excitement shown through behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Actions + dialogue showing excitement",
            commonErrors: ["Just saying 'excited'."],
          },
        },
        {
          id: "edpe4-u4-ch-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Create a character sketch: name, personality, one flaw, and what they want. Then show one action that reveals their personality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character creation",
                statement: "Complete character sketch.",
              },
            ],
            steps: [
              {
                reasoning: "Name + personality trait.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Flaw + motivation identified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Action reveals personality.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete character sketch",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
  ],
};
