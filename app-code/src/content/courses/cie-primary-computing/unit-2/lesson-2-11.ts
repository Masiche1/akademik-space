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
                              "text": "A message one sprite sends to all others"
                    },
                    {
                              "id": "b",
                              "text": "A TV channel"
                    },
                    {
                              "id": "c",
                              "text": "A file type"
                    },
                    {
                              "id": "d",
                              "text": "A loop"
                    }
          ],
          "correctChoiceId": "a"
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
