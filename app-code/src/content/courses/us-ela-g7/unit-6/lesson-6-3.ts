import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const NARPROMPT: TextExtract = {
  title: "Writing Prompt: A Moment That Changed You",
  author: "Written for Akademik Space",
  text: "Write a narrative about a moment that changed you — a small event that seemed ordinary at the time but turned out to matter.\n\nUse sensory details, dialogue where appropriate, and pacing to build tension or significance. Show, don't tell — let readers experience the moment rather than just being told it was important.",
};

const WEAKNARR: TextExtract = {
  title: "Student Draft: The Day I Learned to Ride",
  author: "Written for Akademik Space",
  text: "When I was six, I learned to ride my bike. It was a big day for me. My dad took me to the park and helped me learn. At first I fell a lot, but then I got better. My dad was very proud of me. In the end I could ride all by myself. It was a moment that changed me because I learned that practice makes perfect and you should never give up.",
};

export const lesson63: Lesson = {
  id: "ela7-u6-lesson-6-3",
  code: "6-3",
  title: "Narrative Writing: Story Elements and Craft",
  goal: "I CAN write a narrative with a clear plot, developed characters, sensory details, and a meaningful reflection.",
  standards: ["W.7.3", "W.7.3a", "W.7.3b", "W.7.3c", "W.7.3d", "W.7.3e"],
  vocabulary: [
    {
      term: "Narrative",
      definition: "A story with characters, setting, plot, and resolution.",
    },
    {
      term: "Plot",
      definition: "The sequence of events — beginning, middle, end.",
    },
    {
      term: "Sensory detail",
      definition: "Description using sight, sound, smell, touch, taste.",
    },
    {
      term: "Dialogue",
      definition: "Conversation between characters in a story.",
    },
    {
      term: "Pacing",
      definition:
        "The speed and rhythm of the narrative — slow for tension, fast for action.",
    },
    {
      term: "Reflection",
      definition:
        "Looking back on what the experience meant — often at the end.",
    },
  ],
  concepts: [
    {
      id: "ela7-u6-narr",
      title: "Story elements and showing not telling",
      skill:
        "Develop narrative with plot, characters, sensory details, and meaningful reflection.",
      lesson: {
        sections: [
          {
            heading: "Plot and pacing",
            body: "A narrative needs a clear **plot**: beginning (set the scene), middle (rising action and conflict), end (climax and resolution). **Pacing** controls tension — slow down for important moments ('The wheel wobbled. I gripped the handlebar...'), speed up for routine ('We rode for an hour'). Dialogue breaks up description and reveals character.",
          },
          {
            heading: "Show, don't tell",
            body: "Instead of 'I was nervous,' show it: 'My hands wouldn't stop shaking.' Instead of 'It was a big day,' show significance: 'The training wheels clicked off and the bike felt taller, stranger.' Sensory details make scenes real — what did you see, hear, smell? The draft 'It was a big day' tells; 'The whistle blew and my stomach dropped' shows.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative structure",
            statement:
              "Beginning (scene) → rising action → climax → resolution → reflection.",
          },
          {
            name: "Show don't tell",
            statement:
              "Replace 'I felt X' with actions, sensations, and dialogue that reveal the feeling.",
          },
          {
            name: "Pacing",
            statement:
              "Slow for important moments; fast for routine; dialogue breaks up description.",
          },
        ],
        workedExample: {
          problem:
            "Why is 'It was a big day for me' weak in the bike-riding draft?",
          solution:
            "It tells the reader the day was important instead of showing why. A stronger version would show significance through detail: 'That morning, the training wheels clicked off and the bike felt taller, stranger — like a different animal.' The reader experiences the significance rather than being told about it.",
        },
      },
      questions: [
        {
          id: "ela7-u6-narr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NARPROMPT,
          stem: "What does 'show, don't tell' mean in narrative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write in first person only" },
              {
                id: "b",
                text: "Describe events through actions and details rather than stating feelings",
              },
              { id: "c", text: "Use only dialogue" },
              { id: "d", text: "Make the story as long as possible" },
            ],
            correctChoiceId: "b",
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
                  "'Show' means using actions, sensations, and details to reveal emotion; 'tell' means stating it directly.",
                evidence:
                  "Show, don't tell — let readers experience the moment",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Show through actions and details instead of stating feelings.",
            commonErrors: [
              "Thinking 'show' means only dialogue — it includes all sensory detail.",
            ],
          },
        },
        {
          id: "ela7-u6-narr-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKNARR,
          stem: "Identify two places where the draft 'tells' instead of 'shows.' Rewrite one as a 'show' version.",
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
                  "Tell: 'It was a big day for me.' Show: 'That morning felt different — the training wheels clicked off and the bike felt taller.'",
                evidence: "It was a big day for me",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tell: 'My dad was very proud of me.' Show: 'My dad's hands shook as he steadied the seat — he was grinning so wide I thought his face would split.'",
                evidence: "My dad was very proud of me",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tell: 'I fell a lot.' Show: 'The grass scraped my knees raw and I tasted copper.'",
                evidence: "At first I fell a lot",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example rewrite: 'It was a big day' → 'That morning felt different — the training wheels clicked off and the bike felt taller.' 'My dad was proud' → 'His hands shook as he steadied the seat, grinning so wide.'",
            commonErrors: [
              "Rewriting with different 'telling' words instead of sensory detail.",
            ],
          },
        },
        {
          id: "ela7-u6-narr-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARPROMPT,
          stem: "Write a narrative outline for 'a moment that changed you.' Include: setting, conflict or challenge, climax, resolution, and reflection.",
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
                statement:
                  "The moment should reveal something about growth or understanding.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Setting: where and when — establish sensory details and mood.",
                evidence: "a moment that changed you",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conflict: the challenge or tension that drives the story.",
                evidence: "a small event that seemed ordinary",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "Climax: the turning point where something changes.",
                evidence: "turned out to matter",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Resolution + reflection: what happened after, and what you learned — the 'so what'.",
                evidence: "Show, don't tell",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Setting (backyard, summer afternoon) → Conflict (afraid to try the high dive) → Climax (jumped, scared but did it) → Resolution (landed, didn't drown) → Reflection (realized fear shrinks when you act despite it).",
            commonErrors: [
              "Outline without reflection — the prompt requires showing why the moment mattered.",
            ],
          },
        },
        {
          id: "ela7-u6-narr-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKNARR,
          parts: [
            {
              label: "a",
              prompt: "Name the story's climax (the turning point).",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Rewrite the ending to add reflection that shows what the moment meant.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Climax and reflection",
                statement: "Narratives need turning point and meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The climax is when the narrator rides all by themselves for the first time.",
                evidence: "I could ride all by myself",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example rewrite: 'I didn't know it then, but that wobbling first ride taught me something I'd use forever — that falling is part of learning, and the only way through fear is to keep pedaling.'",
                evidence: "practice makes perfect and you should never give up",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Riding all by himself. (b) Example: 'I didn't know it then, but that wobbling first ride taught me that falling is part of learning — the only way through fear is to keep pedaling.'",
            commonErrors: [
              "Adding reflection that just repeats 'practice makes perfect' without showing what it meant personally.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u6-narr2",
      title: "Pacing and dialogue",
      skill:
        "Use pacing and dialogue to create tension, reveal character, and control narrative rhythm.",
      lesson: {
        sections: [
          {
            heading: "Pacing for effect",
            body: "**Slow pacing** builds tension: short sentences, sensory details, pauses. 'The branch creaked. I froze.' **Fast pacing** covers routine: 'We rode for an hour, past the park, down the hill, around the corner.' The climax should be the slowest, most detailed moment — that's where readers hold their breath.",
          },
          {
            heading: "Dialogue reveals character",
            body: "Dialogue does three jobs: advances plot, reveals character, breaks up description. 'Dad's hands shook as he steadied the seat' shows nervousness; 'Quit while you're ahead' shows encouragement through action. Use dialogue tags and beats ('she said, rubbing her hands on her jeans') to show emotion without stating it.",
          },
        ],
        keyFormulas: [
          {
            name: "Pacing rule",
            statement:
              "Slow for climax/tension; fast for routine; dialogue breaks description.",
          },
          {
            name: "Dialogue jobs",
            statement: "Advance plot + reveal character + control pacing.",
          },
          {
            name: "Sensory anchoring",
            statement:
              "Ground scenes in specific sensory details — what did it look, sound, feel like?",
          },
        ],
        workedExample: {
          problem:
            "How would you slow down the moment the narrator first rides without training wheels?",
          solution:
            "Short sentences, sensory detail, pauses: 'The training wheels clicked off. The bike felt taller, lighter — dangerous. My hands wouldn't stop shaking. Dad's grip on the seat was tight. We rolled forward. The front wheel wobbled. I didn't steer. It wobbled again — then held.' Each fragment builds tension before the resolution.",
        },
      },
      questions: [
        {
          id: "ela7-u6-narr2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WEAKNARR,
          stem: "Which sentence uses pacing effectively to build tension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I rode my bike at the park." },
              { id: "b", text: "Biking is a fun activity for kids." },
              {
                id: "c",
                text: "The wheel wobbled. My hands wouldn't stop shaking. I didn't steer.",
              },
              {
                id: "d",
                text: "I learned to ride a bike when I was six years old.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pacing",
                statement: "Short sentences and fragments slow the moment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Short fragments ('The wheel wobbled. My hands wouldn't stop shaking.') slow the pace and build tension.",
                evidence: "At first I fell a lot",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Fragments and short sentences create tension.",
            commonErrors: ["Choosing (a) — it's neutral, not tense."],
          },
        },
        {
          id: "ela7-u6-narr2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKNARR,
          stem: "Add a dialogue exchange between the narrator and dad that reveals dad's nervousness and the narrator's determination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dialogue",
                statement: "Conversation reveals character and emotion.",
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
                evidence: "I could ride all by myself",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The exchange shows dad's worry through words and the narrator's growth through insistence — character revealed through speech.",
                evidence: "My dad was very proud of me",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Are you sure?' Dad's grip tightened. 'I'm ready,' I said. 'Don't let go.' — dialogue reveals dad's worry and narrator's determination.",
            commonErrors: [
              "Dialogue that just states facts ('I learned to ride') instead of revealing character.",
            ],
          },
        },
        {
          id: "ela7-u6-narr2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NARPROMPT,
          stem: "Write a paragraph describing the climax of 'a moment that changed you' using pacing and sensory detail. Show the tension before the resolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Climactic pacing",
                statement: "Slow down at the turning point.",
              },
              {
                kind: "skill",
                name: "Sensory detail",
                statement: "Ground the moment in physical experience.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "The paragraph slows down — short sentences, fragments, pauses before the key action.",
                evidence: "build tension or significance",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sensory details anchor the moment — what did you see, hear, feel?",
                evidence: "Use sensory details, dialogue where appropriate",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Internal experience shown through physical sensation — 'my stomach dropped', 'hands wouldn't stop shaking'.",
                evidence: "let readers experience the moment",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The turning point lands with weight — the action happens, then a beat of silence or reflection.",
                evidence: "rather than just being told it was important",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The whistle blew. My stomach dropped. The board was higher than it looked from the ground. My hands wouldn't stop shaking. Dad's grip on my shoulder was tight. I jumped. The cold hit my face — then the board, then the water. I came up gasping, but I was smiling. I had done it.'",
            commonErrors: [
              "Writing the climax at the same pace as routine — the moment needs to slow down.",
            ],
          },
        },
        {
          id: "ela7-u6-narr2-q4",
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
              prompt:
                "Explain how your rewrite slows the pace and builds empathy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sensory detail",
                statement:
                  "Physical sensations make readers feel the experience.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'The grass scraped my knees raw, and I tasted copper.'",
                evidence: "At first I fell a lot",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Sensory details make the reader feel the fall — scraping, taste — creating empathy and slowing the pace so the struggle feels real.",
                evidence: "but then I got better",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'The grass scraped my knees raw, and I tasted copper.' (b) Sensory details make readers feel the fall physically, building empathy and slowing the pace.",
            commonErrors: [
              "Adding adjectives without sensory experience — 'I fell badly' still tells.",
            ],
          },
        },
      ],
    },
  ],
};
