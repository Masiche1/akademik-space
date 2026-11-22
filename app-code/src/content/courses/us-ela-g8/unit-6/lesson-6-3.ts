import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const NARPROMPT: TextExtract = {
  title: "Writing Prompt: A Moment That Changed Everything",
  author: "Written for Akademik Space",
  text: "Write a narrative about a moment that changed everything — a small event that seemed ordinary but turned out to matter profoundly.\n\nUse sensory details, dialogue, pacing, and reflection to show how this moment affected you and what you learned.",
};

const WEAKNARR: TextExtract = {
  title: "Student Draft: The Day I Learned to Ride",
  author: "Written for Akademik Space",
  text: "When I was seven, I learned to ride my bike. My dad helped me. I fell a lot at first. Then I got better. Eventually I could ride without training wheels. It was a big moment for me. I learned that practice makes perfect and you should never give up. It changed me because I realized I could do hard things if I kept trying.",
};

export const lesson63: Lesson = {
  id: "ela8-u6-lesson-6-3",
  code: "6-3",
  title: "Narrative Writing: Story Elements and Craft",
  goal: "I CAN write a narrative with plot, character development, sensory details, pacing, and meaningful reflection.",
  standards: ["W.8.3", "W.8.3a", "W.8.3b", "W.8.3c", "W.8.3d", "W.8.3e"],
  vocabulary: [
    {
      term: "Narrative",
      definition: "A story with characters, setting, plot, and resolution.",
    },
    {
      term: "Plot",
      definition: "Sequence of events — beginning, middle, end.",
    },
    {
      term: "Sensory detail",
      definition: "Description using sight, sound, smell, touch, taste.",
    },
    { term: "Dialogue", definition: "Conversation between characters." },
    { term: "Pacing", definition: "Speed and rhythm of narrative." },
    {
      term: "Reflection",
      definition: "Looking back on what the experience meant.",
    },
  ],
  concepts: [
    {
      id: "ela8-u6-narr",
      title: "Narrative structure and craft",
      skill:
        "Develop narratives with plot, characters, sensory details, pacing, and reflection.",
      lesson: {
        sections: [
          {
            heading: "Plot and pacing",
            body: "A narrative needs clear **plot**: beginning (set scene), middle (rising action/conflict), end (climax, resolution, reflection). **Pacing** controls tension — slow for important moments ('The wheel wobbled. I gripped the handlebar...'), fast for routine ('We rode for an hour'). The climax should be slowest, most detailed — where readers hold their breath.",
          },
          {
            heading: "Show don't tell",
            body: "Instead of 'It was a big moment,' show significance: 'The training wheels clicked off and the bike felt taller, stranger.' Instead of 'I was scared,' show: 'My hands wouldn't stop shaking.' Sensory details make scenes real — what did you see, hear, feel? Grade 8 narratives need **reflection** — not just what happened, but what it MEANT.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative structure",
            statement:
              "Beginning → rising action → climax → resolution → reflection.",
          },
          {
            name: "Show don't tell",
            statement:
              "Actions and sensations reveal emotion better than statements.",
          },
          {
            name: "Pacing",
            statement:
              "Slow for climax; fast for routine; dialogue breaks description.",
          },
        ],
        workedExample: {
          problem:
            "Why is 'It was a big moment for me' weak in the bike-riding draft?",
          solution:
            "It tells significance instead of showing it. Stronger: 'That morning felt different — the training wheels clicked off and the bike felt taller, like a different animal.' Reader experiences significance rather than being told.",
        },
      },
      questions: [
        {
          id: "ela8-u6-narr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NARPROMPT,
          stem: "What does 'show, don't tell' mean in narrative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make it longer" },
              { id: "b", text: "Write in first person" },
              { id: "c", text: "Use only dialogue" },
              {
                id: "d",
                text: "Describe through actions and details, not statements",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Show don't tell",
                statement: "Actions reveal feelings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Show = actions/sensations reveal emotion; tell = state it directly.",
                evidence: "Show, don't tell",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Describe through actions and details, not statements.",
            commonErrors: ["Thinking it means only dialogue."],
          },
        },
        {
          id: "ela8-u6-narr-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKNARR,
          stem: "Identify two places where the draft 'tells' instead of 'shows.' Rewrite one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Show don't tell",
                statement: "Replace statements with sensory detail.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tell: 'It was a big moment for me.' Show: 'The training wheels clicked off and the bike felt taller.'",
                evidence: "It was a big moment for me",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tell: 'I learned that practice makes perfect.' Show: reflection through specific realization.",
                evidence: "practice makes perfect",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rewrite example: 'I didn't know it then, but that wobbling first ride taught me fear shrinks when you keep pedaling.'",
                evidence: "you should never give up",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example rewrite: 'It was a big moment' → 'The training wheels clicked off and the bike felt taller.' 'Practice makes perfect' → 'That wobbling ride taught me fear shrinks when you keep pedaling.'",
            commonErrors: [
              "Rewriting with different 'telling' words — need sensory detail.",
            ],
          },
        },
        {
          id: "ela8-u6-narr-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARPROMPT,
          stem: "Write a narrative outline for 'a moment that changed everything.' Include setting, conflict, climax, resolution, and reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative planning",
                statement: "Plan story elements before writing.",
              },
              {
                kind: "skill",
                name: "Meaningful narrative",
                statement: "Show what the moment meant.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Setting: where/when — establish sensory details and mood.",
                evidence: "a moment that changed everything",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conflict: the challenge or tension driving the story.",
                evidence: "a small event that seemed ordinary",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "Climax: the turning point where something changes.",
                evidence: "turned out to matter profoundly",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Resolution + reflection: what happened after, what you learned — the 'so what'.",
                evidence: "what you learned",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Setting (school cafeteria, lunch period) → Conflict (new student sitting alone) → Climax (sat with them, became friends) → Resolution (still friends) → Reflection (realized small acts of kindness change lives).",
            commonErrors: [
              "Outline without reflection — prompt requires showing meaning.",
            ],
          },
        },
        {
          id: "ela8-u6-narr-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKNARR,
          parts: [
            { label: "a", prompt: "Name the story's climax.", marks: 1 },
            {
              label: "b",
              prompt: "Rewrite the ending to add meaningful reflection.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Climax and reflection",
                statement: "Turning point + meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Climax: riding without training wheels for the first time.",
                evidence: "I could ride without training wheels",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'I didn't know it then, but that wobbling first ride taught me that fear shrinks when you keep pedaling — a lesson I'd use for everything after.'",
                evidence: "It changed me because",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Riding without training wheels. (b) 'That wobbling ride taught me fear shrinks when you keep pedaling — a lesson I'd use for everything after.'",
            commonErrors: [
              "Adding reflection that repeats 'practice makes perfect' without personal meaning.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u6-narr2",
      title: "Dialogue and pacing",
      skill:
        "Use dialogue and pacing to create tension, reveal character, and control rhythm.",
      lesson: {
        sections: [
          {
            heading: "Dialogue functions",
            body: "Dialogue does three jobs: **advances plot** (reveals information), **reveals character** (shows personality through speech), **controls pacing** (breaks up description). 'Dad's hands shook as he steadied the seat' shows nervousness; 'Quit while you're ahead' shows encouragement through action. Use dialogue tags and beats to show emotion without stating it.",
          },
          {
            heading: "Pacing techniques",
            body: "**Slow pacing**: short sentences, fragments, sensory details — 'The wheel wobbled. I froze.' **Fast pacing**: longer sentences covering routine — 'We rode for an hour past the park.' The climax should be slowest — readers need to feel every moment. Dialogue naturally slows pace and reveals character simultaneously.",
          },
        ],
        keyFormulas: [
          {
            name: "Dialogue jobs",
            statement: "Advance plot + reveal character + control pacing.",
          },
          {
            name: "Pacing rule",
            statement:
              "Slow for climax; fast for routine; dialogue breaks description.",
          },
          {
            name: "Sensory anchoring",
            statement: "Ground scenes in physical details.",
          },
        ],
        workedExample: {
          problem:
            "How would you slow down the moment of first riding without training wheels?",
          solution:
            "Short sentences, sensory detail, pauses: 'The training wheels clicked off. The bike felt taller. My hands wouldn't stop shaking. Dad's grip was tight. We rolled forward. The front wheel wobbled. I didn't steer. It wobbled again — then held.' Each fragment builds tension.",
        },
      },
      questions: [
        {
          id: "ela8-u6-narr2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WEAKNARR,
          stem: "What is the main function of dialogue in narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Show off vocabulary" },
              { id: "b", text: "Make it longer" },
              {
                id: "c",
                text: "Advance plot, reveal character, control pacing",
              },
              { id: "d", text: "Fill space" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dialogue function",
                statement: "Plot + character + pacing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dialogue advances plot, reveals character, and controls pacing — not just filler.",
                evidence: "dialogue where appropriate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Advance plot, reveal character, control pacing.",
            commonErrors: [
              "Thinking dialogue is just conversation — it has craft functions.",
            ],
          },
        },
        {
          id: "ela8-u6-narr2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKNARR,
          stem: "Add a dialogue exchange between the narrator and dad that reveals dad's nervousness and narrator's determination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dialogue creation",
                statement: "Conversation reveals character.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dad's nervousness: 'Are you sure? We can always put the training wheels back on.'",
                evidence: "My dad helped me learn",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Narrator's determination: 'I'm ready. Don't let go.'",
                evidence: "I could ride without training wheels",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Exchange reveals dad's worry and narrator's growth through speech.",
                evidence: "I fell a lot at first",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Are you sure?' Dad's grip tightened. 'I'm ready,' I said. 'Don't let go.' — dialogue reveals dad's worry and narrator's determination.",
            commonErrors: [
              "Dialogue that states facts instead of revealing character.",
            ],
          },
        },
        {
          id: "ela8-u6-narr2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARPROMPT,
          stem: "Write a paragraph describing the climax of 'a moment that changed everything' using pacing and sensory detail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Climactic pacing",
                statement: "Slow down at turning point.",
              },
              {
                kind: "skill",
                name: "Sensory detail",
                statement: "Ground in physical experience.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Slow pacing: short sentences, fragments, pauses before key action.",
                evidence: "build tension or significance",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "Sensory details: what did you see, hear, feel?",
                evidence: "Use sensory details",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Internal experience shown physically: 'stomach dropped', 'hands wouldn't stop shaking'.",
                evidence: "let readers experience",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Turning point lands with weight — action happens, then beat of reflection.",
                evidence: "rather than just being told",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The whistle blew. My stomach dropped. The board was higher than it looked. My hands wouldn't stop shaking. Dad's grip was tight. I jumped. The cold hit my face — then the board, then the water. I came up gasping, but I was smiling. I had done it.'",
            commonErrors: [
              "Climax at same pace as routine — needs to slow down.",
            ],
          },
        },
        {
          id: "ela8-u6-narr2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKNARR,
          parts: [
            {
              label: "a",
              prompt: "Rewrite 'I fell a lot' using sensory detail.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how your rewrite affects pacing and empathy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sensory detail",
                statement: "Physical sensations create empathy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'The grass scraped my knees raw, and I tasted copper.'",
                evidence: "I fell a lot",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Sensory details slow the pace and make readers feel the fall — creating empathy.",
                evidence: "but then I got better",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'The grass scraped my knees raw, and I tasted copper.' (b) Sensory details slow pace and create empathy — readers feel the struggle.",
            commonErrors: [
              "Adding adjectives without sensory experience — 'I fell badly' still tells.",
            ],
          },
        },
      ],
    },
  ],
};
