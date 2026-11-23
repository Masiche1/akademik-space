import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpe6-u4-lesson-4-3",
  code: "4-3",
  title: "Narrative Craft and Extended Writing",
  goal: "I CAN write extended narratives with sophisticated craft.",
  standards: ["Year 6 Writing"],
  vocabulary: [
    {
      term: "Pathetic fallacy",
      definition: "Weather reflecting mood: storm for anger.",
    },
    {
      term: "Stream of consciousness",
      definition: "Writing inner thoughts directly.",
    },
    {
      term: "Focalisation",
      definition: "Whose perspective the narrative uses.",
    },
    {
      term: "Circular narrative",
      definition: "Story ends where it began, changed.",
    },
  ],
  concepts: [
    {
      id: "edpe6-u4-craft",
      title: "Advanced narrative techniques",
      skill: "Use pathetic fallacy, focalisation and circular structure.",
      lesson: {
        sections: [
          {
            heading: "Sophisticated techniques",
            body: "Pathetic fallacy mirrors emotion in weather/setting: a storm mirrors inner turmoil. Focalisation controls whose eyes we see through — first person is intimate but limited; third limited follows one character; omniscient knows all. Circular narratives return to the opening, now transformed.",
          },
          {
            heading: "Extended writing",
            body: "Extended narratives (1000+ words) need: strong hook, developed characters, rising tension, satisfying climax, and resolution. Vary paragraph length, use dialogue purposefully, weave description naturally (not info-dumps), and maintain consistent voice throughout.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative craft",
            statement: "Focalisation + pathetic fallacy + structure",
          },
        ],
        workedExample: {
          problem: "How would you show a character's grief through setting?",
          solution:
            "Pathetic fallacy: 'Rain streaked the windows as she sat in silence, the grey light matching her hollow eyes.'",
        },
      },
      questions: [
        {
          id: "edpe6-u4-nc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is pathetic fallacy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sad story" },
              { id: "b", text: "Weather reflecting mood" },
              { id: "c", text: "A type of poem" },
              { id: "d", text: "A character flaw" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pathetic fallacy",
                statement: "Weather = mood.",
              },
            ],
            steps: [
              {
                reasoning: "Setting mirrors emotion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Weather reflecting mood",
            commonErrors: ["Confusing with irony."],
          },
        },
        {
          id: "edpe6-u4-nc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is focalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The story's ending" },
              { id: "b", text: "Whose perspective the narrative uses" },
              { id: "c", text: "A camera angle" },
              { id: "d", text: "A type of dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Focalisation",
                statement: "Narrative perspective.",
              },
            ],
            steps: [
              {
                reasoning: "Focalisation = whose eyes we see through.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Narrative perspective",
            commonErrors: ["Confusing with point of view."],
          },
        },
        {
          id: "edpe6-u4-nc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a circular narrative opening and show how the ending would mirror it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Circular structure",
                statement: "End mirrors start, changed.",
              },
            ],
            steps: [
              {
                reasoning: "Opening sets scene/question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ending returns to same scene, transformed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows character/meaning change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Circular opening + transformed ending",
            commonErrors: ["No transformation."],
          },
        },
        {
          id: "edpe6-u4-nc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan an extended narrative (outline): hook, rising tension, climax, resolution. Include one literary device.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative planning",
                statement: "Complete arc + device.",
              },
            ],
            steps: [
              {
                reasoning: "Hook + character establishment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rising tension to climax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Resolution + literary device used.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Narrative outline with device",
            commonErrors: ["Missing climax or device."],
          },
        },
      ],
    },
    {
      id: "edpe6-u4-editing",
      title: "Advanced Editing and Style",
      skill: "Refine writing for style, precision and impact.",
      lesson: {
        sections: [
          {
            heading: "Style refinement",
            body: "Advanced editing removes redundancy ('she nodded her head' → 'she nodded'), replaces weak verbs ('went' → 'strolled', 'rushed'), eliminates filter words ('she felt that...' → direct experience), and ensures every word earns its place. Read aloud to catch rhythm problems.",
          },
          {
            heading: "Final polish",
            body: "Check: consistency (tense, character names, details), punctuation precision (semi-colons, colons, dashes), paragraph unity, dialogue punctuation, and spelling of sophisticated vocabulary. The goal is writing where style serves meaning — nothing decorative, nothing missing.",
          },
        ],
        keyFormulas: [
          {
            name: "Advanced editing",
            statement: "Remove redundancy + strong verbs + consistency",
          },
        ],
        workedExample: {
          problem: "Improve: 'She walked slowly across the room.'",
          solution:
            "She crept across the room. / She shuffled across the room.",
        },
      },
      questions: [
        {
          id: "edpe6-u4-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'filter word'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A spelling error" },
              { id: "b", text: "A word that distances reader from experience" },
              { id: "c", text: "A type of punctuation" },
              { id: "d", text: "A paragraph break" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Filter word",
                statement: "Distancing word.",
              },
            ],
            steps: [
              {
                reasoning: "'She felt', 'he saw' filter the experience.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Distancing word",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u4-ed-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why replace 'went' with a more precise verb?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It sounds fancier" },
              { id: "b", text: "It shows manner and adds meaning" },
              { id: "c", text: "It's required" },
              { id: "d", text: "It makes sentences longer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precise verbs",
                statement: "Add meaning.",
              },
            ],
            steps: [
              {
                reasoning: "'Strolled' vs 'rushed' shows how.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Shows manner",
            commonErrors: ["Style over meaning."],
          },
        },
        {
          id: "edpe6-u4-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Remove the filter word and improve: 'She felt that the room was cold.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Editing",
                statement: "Direct experience.",
              },
            ],
            steps: [
              { reasoning: "Removes 'felt that'.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "'The cold crept into the room.' or 'Ice formed on the window.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows rather than tells.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Direct sensory description",
            commonErrors: ["Still uses filter."],
          },
        },
        {
          id: "edpe6-u4-ed-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Edit this passage for style: 'The man walked into the room. He looked around. He sat down in the chair.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Style editing",
                statement: "Varied verbs + flow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Replaces repeated 'walked/looked/sat' with varied precise verbs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combines or varies sentences for rhythm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improved version: 'The man entered, eyes scanning the room, before sinking into the chair.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Varied, flowing version",
            commonErrors: ["Minimal improvement."],
          },
        },
      ],
    },
  ],
};
