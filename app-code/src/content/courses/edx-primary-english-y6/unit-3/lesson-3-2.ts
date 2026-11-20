import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "edpe6-u3-lesson-3-2",
  code: "3-2",
  title: "Narrative Writing",
  goal: "I CAN write engaging narratives with developed characters and satisfying structure.",
  standards: ["Year 6 Writing"],
  vocabulary: [
    {
      term: "Narrative arc",
      definition:
        "Exposition → rising action → climax → falling action → resolution.",
    },
    {
      term: "Characterisation",
      definition:
        "Developing characters through actions, dialogue and thoughts.",
    },
    {
      term: "Pacing",
      definition: "Controlling the speed and rhythm of the story.",
    },
    { term: "Foreshadowing", definition: "Hints about future events." },
  ],
  concepts: [
    {
      id: "edpe6-u3-narrative",
      title: "Narrative craft",
      skill: "Write stories with developed characters and effective structure.",
      lesson: {
        sections: [
          {
            heading: "Character depth",
            body: "Show character through: actions ('she slammed the door'), dialogue ('I don't care,' she lied), thoughts ('If only I could...'), and appearance. Characters should have flaws and growth.",
          },
          {
            heading: "Story structure",
            body: "Hook readers in opening. Build tension through rising action. Climax = turning point. Resolution = satisfying ending. Use foreshadowing to create anticipation.",
          },
        ],
        keyFormulas: [
          { name: "Hook", statement: "Grab attention immediately" },
          { name: "Rising action", statement: "Build tension" },
          { name: "Climax", statement: "Peak moment" },
        ],
        workedExample: {
          problem: "Write an opening that hooks readers for a mystery story.",
          solution:
            "'The body was found at midnight, but the murder weapon hadn't been touched for three days.'",
        },
      },
      questions: [
        {
          id: "edpe6-u3-nv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is foreshadowing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ending" },
              { id: "b", text: "Hints about future events" },
              { id: "c", text: "A flashback" },
              { id: "d", text: "The setting" },
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
              { reasoning: "Foreshadowing = hints.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Hints about future events",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u3-nv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which shows character through dialogue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She was tall" },
              { id: "b", text: "'I don't care,' she lied" },
              { id: "c", text: "She ran fast" },
              { id: "d", text: "She had blue eyes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Characterisation",
                statement: "Dialogue + 'lied' shows character.",
              },
            ],
            steps: [
              {
                reasoning: "Dialogue shows character.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: lied dialogue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'I don't care,' she lied",
            commonErrors: ["Choosing description not dialogue."],
          },
        },
        {
          id: "edpe6-u3-nv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a story opening (3 sentences) that hooks readers for a fantasy adventure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story opening",
                statement: "Hook + intrigue + character.",
              },
            ],
            steps: [
              { reasoning: "Hook created.", marks: 1, markCode: "A" },
              { reasoning: "Intrigue added.", marks: 1, markCode: "A" },
              { reasoning: "Engaging.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'The dragon's roar shook the mountains. Elara clutched her sword, knowing she had to save the kingdom. But the dragon was already turning toward her.'",
            commonErrors: ["Weak or generic opening."],
          },
        },
        {
          id: "edpe6-u3-nv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a story opening and climax (6 sentences total) for: a child discovers a time machine.",
          parts: [
            { label: "a", prompt: "Opening hook (2 sentences)", marks: 1 },
            { label: "b", prompt: "Character introduced", marks: 1 },
            { label: "c", prompt: "Problem/conflict begins", marks: 1 },
            { label: "d", prompt: "Climax moment", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative structure",
                statement: "Hook → character → conflict → climax.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hook present.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Character developed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Conflict started.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Climax reached.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'The clock in the attic ticked backwards. Jake found a machine that glowed with strange energy. When he touched it, he was sucked into a swirling vortex. He landed in ancient Egypt — and realised he'd accidentally changed history.'",
            commonErrors: ["Missing structure or weak climax."],
          },
        },
      ],
    },
    {
      id: "edpe6-u3-descriptive",
      title: "Descriptive writing",
      skill:
        "Write vivid descriptions using sensory detail and figurative language.",
      lesson: {
        sections: [
          {
            heading: "Sensory description",
            body: "Engage all five senses: sight ('golden sunset'), sound ('deafening roar'), smell ('sweet perfume'), touch ('icy wind'), taste ('bitter coffee'). Layer details for richness.",
          },
          {
            heading: "Figurative language",
            body: "Use similes, metaphors, personification to create vivid images: 'The forest was a cathedral of green' not just 'The forest was green'. Show don't tell.",
          },
        ],
        keyFormulas: [
          {
            name: "Five senses",
            statement: "Sight, sound, smell, touch, taste",
          },
          {
            name: "Figurative language",
            statement: "Similes, metaphors, personification",
          },
          { name: "Show don't tell", statement: "Demonstrate not describe" },
        ],
        workedExample: {
          problem: "Describe a beach using two senses.",
          solution:
            "'The waves crashed rhythmically against the shore, their salty spray cooling my skin.'",
        },
      },
      questions: [
        {
          id: "edpe6-u3-ds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the five senses?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only sight and sound" },
              { id: "b", text: "Sight, sound, smell, touch, taste" },
              { id: "c", text: "Sight, sound, touch" },
              { id: "d", text: "All except taste" },
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
              { reasoning: "All senses listed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sight, sound, smell, touch, taste",
            commonErrors: ["Missing senses."],
          },
        },
        {
          id: "edpe6-u3-ds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is more descriptive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The food was nice" },
              { id: "b", text: "The food was delicious" },
              { id: "c", text: "The food was warm and fragrant" },
              { id: "d", text: "The food was good" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Descriptive writing",
                statement: "Sensory details = vivid.",
              },
            ],
            steps: [
              {
                reasoning: "Sensory words identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: warm/fragrant.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** warm and fragrant",
            commonErrors: ["Choosing vague."],
          },
        },
        {
          id: "edpe6-u3-ds-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a descriptive sentence about a forest using two senses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensory description",
                statement: "Two senses used effectively.",
              },
            ],
            steps: [
              { reasoning: "Sense 1 used.", marks: 1, markCode: "A" },
              { reasoning: "Sense 2 used.", marks: 1, markCode: "A" },
              { reasoning: "Vivid and clear.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'Sunlight filtered through the canopy, illuminating dust motes that danced in the air, while birdsong echoed through the silent trees.'",
            commonErrors: ["Only one sense or weak."],
          },
        },
        {
          id: "edpe6-u3-ds-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a descriptive paragraph (4 sentences) about a stormy night using figurative language.",
          parts: [
            { label: "a", prompt: "Setting established", marks: 1 },
            { label: "b", prompt: "Sensory details used", marks: 1 },
            { label: "c", prompt: "Figurative language included", marks: 1 },
            { label: "d", prompt: "Atmosphere created", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Descriptive writing",
                statement: "All elements present.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Setting clear.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Senses used.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Figurative language.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Atmosphere achieved.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Rain hammered against the windows like impatient fingers. Lightning split the sky, casting jagged shadows across the room. The wind howled through the trees, a mournful cry that seemed to echo my own restlessness. Outside, the world was drowning in darkness.'",
            commonErrors: ["Missing elements or weak imagery."],
          },
        },
      ],
    },
  ],
};
