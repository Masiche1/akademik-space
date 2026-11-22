import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "cipc-u2-lesson-2-11",
  code: "2-11",
  title: "Stage 6 — Advanced Programming: Events, Broadcasts and Cloning",
  goal: "I CAN create interactive programs using events, broadcasts and clones.",
  standards: ["Cambridge Primary Computing 0059 Stage 6: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 6,
  vocabulary: [
    { term: "Broadcast", definition: "A message one sprite sends to all others." },
    { term: "Clone", definition: "A copy of a sprite created during the program." },
    { term: "Event handler", definition: "Code that runs when something happens — key press, click." },
    { term: "Trigger", definition: "The event that starts a script." },
    { term: "Parallel scripts", definition: "Multiple scripts running at the same time." },
    { term: "Interaction", definition: "Program responding to user input." },
  ],
  concepts: [
    {
      id: "cipc-u2-s6-adv",
      title: "Events, broadcasts and clones",
      skill: "Build interactive multi-sprite programs at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Events and broadcasts",
            body: "Events trigger scripts: 'when key pressed', 'when sprite clicked'. Broadcasts let sprites communicate — one sprite broadcasts 'game over' and others react. Multiple scripts run in parallel, making programs feel alive.",
          },
          {
            heading: "Clones",
            body: "Cloning creates sprite copies during runtime — perfect for bullets, enemies, particles. Clones inherit the sprite's appearance and can run their own scripts, then delete themselves when done.",
          },
        ],
        keyFormulas: [
          { name: "Broadcast", statement: "sprite → message → all sprites react" },
          { name: "Clone", statement: "runtime copy with own scripts" },
        ],
        workedExample: {
          problem: "Player sprite broadcasts 'hit' when touching enemy. Enemy listens for 'hit' and plays death animation. Explain the flow.",
          solution: "Player detects collision → broadcasts 'hit' → enemy's 'when I receive hit' script runs → plays animation → deletes self.",
        },
      },
      questions: [
        {
          id: "cipc-u2-av-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a broadcast in Scratch?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A loop"
                    },
                    {
                              "id": "b",
                              "text": "A message one sprite sends to all others"
                    },
                    {
                              "id": "c",
                              "text": "A TV channel"
                    },
                    {
                              "id": "d",
                              "text": "A file type"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Broadcast",
                              "statement": "Sprite messaging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Broadcast sends a message all sprites can receive.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Message to all sprites"
},
        },
        {
          id: "cipc-u2-av-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a clone and when would you use one?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Clones",
                              "statement": "Runtime copies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clone = copy of sprite created during program.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use for many similar objects: bullets, enemies.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Runtime copy; e.g. bullets"
},
        },
        {
          id: "cipc-u2-av-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how parallel scripts and events make a game feel interactive. Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interactivity",
                              "statement": "Simultaneous scripts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiple scripts run at once — movement, collision, timer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Events (key press) trigger responses instantly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: arrow keys move while collision script watches.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Parallel scripts + event triggers = responsive"
},
        },
        {
          id: "cipc-u2-av-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define broadcast, clone, event handler, parallel script. (b) How do sprites communicate? (c) Why use clones instead of many sprites? (d) Design a 'pop' effect: balloon clicked → clone confetti. (e) What triggers a 'game over' broadcast? (f) How do clones differ from duplicates? (g) Describe a multi-sprite chase game structure. (h) What should clones do when finished?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Advanced programming",
                              "statement": "Events, broadcasts, clones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Broadcast messages; 'when I receive'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Fewer sprites; clones created/deleted dynamically.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Click event → broadcast → clone confetti sprites.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Collision/lives=0 triggers broadcast.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Clones are temporary runtime copies; duplicates permanent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Player moves, enemy chases via broadcasts/conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Delete themselves after effect ends.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Events, broadcasts, clones, parallel scripts, game design."
},
        },
        {
          id: "cipc-u2-av-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a broadcast in Scratch?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A loop" },
            { id: "b", text: "A message one sprite sends to all others" },
            { id: "c", text: "A loud speaker sound" },
            { id: "d", text: "A type of sprite" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Broadcast", statement: "Message to all sprites." }],
            steps: [
              { reasoning: "Broadcast sends a named message that all listening sprites can react to.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** A message sent to all sprites",
          },
        },
        {
          id: "cipc-u2-av-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a clone in Scratch? When would you use one?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Clone", statement: "Temporary copy of a sprite." }],
            steps: [
              { reasoning: "Clone = a temporary copy of a sprite made during the program.", marks: 1, markCode: "M" },
              { reasoning: "Use for effects like confetti, bullets, or many identical objects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temp sprite copy; e.g. confetti or bullets.",
          },
        },
        {
          id: "cipc-u2-av-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sprite broadcasts 'game over'. How many sprites can react to that broadcast?",
          response: { type: "mcq", choices: [
            { id: "a", text: "None — broadcasts don't reach sprites" },
            { id: "b", text: "Only the sender" },
            { id: "c", text: "Only one sprite" },
            { id: "d", text: "All sprites listening for 'game over'" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Broadcast reach", statement: "All listeners react." }],
            steps: [
              { reasoning: "Every sprite with a 'when I receive game over' block reacts.", marks: 1, markCode: "M" },
              { reasoning: "Broadcasts reach all listening sprites.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** All sprites listening for it",
          },
        },
        {
          id: "cipc-u2-av-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an event handler?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of variable" },
            { id: "b", text: "A loop" },
            { id: "c", text: "An error message" },
            { id: "d", text: "A block that starts code when an event happens" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Event handler", statement: "Code triggered by events." }],
            steps: [
              { reasoning: "Event handler = code that runs when an event (click, key, message) occurs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Code triggered by an event",
          },
        },
        {
          id: "cipc-u2-av-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a broadcast makes sprites communicate. Use 'player hits enemy → broadcast gameover' as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sprite communication", statement: "Broadcasts decouple sprites." }],
            steps: [
              { reasoning: "Player detects collision and broadcasts 'gameover'.", marks: 1, markCode: "M" },
              { reasoning: "Enemy, score keeper, etc. have 'when I receive gameover' handlers.", marks: 1, markCode: "M" },
              { reasoning: "Each reacts independently — sprites don't need direct references.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Broadcast 'gameover'; all listeners react independently.",
          },
        },
        {
          id: "cipc-u2-av-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why use clones instead of placing 50 confetti sprites on stage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Clones are bigger" },
            { id: "b", text: "One sprite makes clones only when needed — less clutter and easier control" },
            { id: "c", text: "Sprites cannot move" },
            { id: "d", text: "Clones cost less money" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Clone efficiency", statement: "Create/destroy on demand." }],
            steps: [
              { reasoning: "One sprite clones confetti when needed, then deletes them — no 50 permanent sprites.", marks: 1, markCode: "M" },
              { reasoning: "Cleaner project and easier to manage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** On-demand copies, less clutter",
          },
        },
        {
          id: "cipc-u2-av-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What should clones do when they finish their job (e.g. confetti lands)? Why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Clone cleanup", statement: "Delete clones to avoid clutter." }],
            steps: [
              { reasoning: "Clones should delete themselves when done (e.g. after landing).", marks: 1, markCode: "M" },
              { reasoning: "Otherwise they keep running and slow the project / cause bugs.", marks: 1, markCode: "M" },
              { reasoning: "'delete this clone' ends their scripts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Delete themselves with 'delete this clone'.",
          },
        },
        {
          id: "cipc-u2-av-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a parallel script?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Parallel script", statement: "Scripts running at the same time." }],
            steps: [
              { reasoning: "Parallel script = separate code stacks running simultaneously.", marks: 1, markCode: "M" },
              { reasoning: "e.g. one script moves the player while another checks collisions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Code stacks running simultaneously.",
          },
        },
        {
          id: "cipc-u2-av-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do clones differ from duplicates (copy-pasted sprites)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Clones vs duplicates", statement: "Temporary dynamic copies vs permanent sprites." }],
            steps: [
              { reasoning: "Clones are created/destroyed by code during runtime; duplicates are permanent sprites.", marks: 1, markCode: "M" },
              { reasoning: "Clones share the original's scripts; duplicates need their own blocks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clones are temporary code-made copies.",
          },
        },
        {
          id: "cipc-u2-av-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Design a 'pop' effect: when the player clicks a balloon, it should burst into confetti. Describe the broadcasts/clones involved.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Effect design", statement: "Event → broadcast → clones." }],
            steps: [
              { reasoning: "Balloon: 'when this sprite clicked' → broadcast 'pop', hide/delete itself.", marks: 1, markCode: "M" },
              { reasoning: "Confetti sprite: 'when I receive pop' → create 10 clones.", marks: 1, markCode: "M" },
              { reasoning: "Each clone flies outward then deletes itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Click → broadcast pop → confetti clones burst out.",
          },
        },
        {
          id: "cipc-u2-av-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe a simple two-sprite chase game structure: how do the sprites communicate using events and broadcasts?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Game structure", statement: "Chaser follows; caught broadcasts end." }],
            steps: [
              { reasoning: "Chaser script: forever move toward player.", marks: 1, markCode: "M" },
              { reasoning: "Player script: move with arrow keys.", marks: 1, markCode: "M" },
              { reasoning: "Collision check broadcasts 'caught' → both stop / show game over.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chaser follows, player moves, collision broadcasts 'caught'.",
          },
        },
        {
          id: "cipc-u2-av-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define broadcast, clone, event handler, parallel script. (b) How do sprites communicate? (c) Why use clones instead of many sprites? (d) Design a 'pop' effect: balloon clicked → clone confetti. (e) What triggers a 'game over' broadcast? (f) How do clones differ from duplicates? (g) Describe a multi-sprite chase game structure. (h) What should clones do when finished?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Advanced programming", statement: "Broadcasts, clones, events, parallel scripts." }],
            steps: [
              { reasoning: "(a) Broadcast=message to all; clone=temp copy; event handler=triggered code; parallel=simultaneous scripts.", marks: 1, markCode: "M" },
              { reasoning: "(b) Via broadcasts — send message, listeners react.", marks: 1, markCode: "M" },
              { reasoning: "(c) Fewer permanent sprites; create/destroy on demand.", marks: 1, markCode: "M" },
              { reasoning: "(d) Click → broadcast pop → confetti clones.", marks: 1, markCode: "M" },
              { reasoning: "(e) e.g. lives reach 0 or collision with enemy.", marks: 1, markCode: "M" },
              { reasoning: "(f) Clones temporary/code-made; duplicates permanent sprites.", marks: 1, markCode: "M" },
              { reasoning: "(g) Chaser follows player; collision broadcasts end.", marks: 1, markCode: "M" },
              { reasoning: "(h) Delete themselves to stop scripts and save resources.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Broadcasts, clones, events, communication, pop effect, game over trigger, clones vs duplicates, chase game, clone cleanup.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-av-notes",
      title: "Advanced programming — notes",
      summary: "Events trigger scripts; broadcasts let sprites communicate; clones create dynamic copies.",
      sections: [
        { heading: "Key idea", body: "Real programs = multiple parallel scripts responding to events." },
        { heading: "Clones", body: "Perfect for temporary effects — remember to delete them." },
      ],
    },
  ],
};
