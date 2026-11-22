import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "cipc-u1-lesson-1-4",
  code: "1-4",
  title: "Stage 2 — Decomposition and Simple Programs",
  goal: "I CAN break a big task into small steps and build simple programs using blocks.",
  standards: ["Cambridge Primary Computing 0059 Stage 2: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 2,
  vocabulary: [
    { term: "Decomposition", definition: "Breaking a big problem into smaller parts." },
    { term: "Block", definition: "A puzzle-piece instruction in visual programming." },
    { term: "Sprite", definition: "A character or object in a Scratch program." },
    { term: "Script", definition: "The stack of blocks that makes a sprite act." },
    { term: "Sequence", definition: "Blocks run from top to bottom." },
    { term: "Event", definition: "Something that starts a program, like clicking a flag." },
  ],
  concepts: [
    {
      id: "cipc-u1-s2-program",
      title: "Decomposition and block programming",
      skill: "Break tasks into steps and assemble simple block programs at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Breaking problems down",
            body: "Decomposition means splitting a hard task into small, easy steps — like planning a party: invite guests, buy food, decorate. In computing, you break a program idea into small instructions before building it.",
          },
          {
            heading: "Block programming",
            body: "Scratch uses coloured blocks that snap together like puzzle pieces. Yellow blocks control events, blue blocks move sprites, purple blocks look/sound. Blocks run in order from top to bottom, starting when an event like the green flag is clicked.",
          },
        ],
        keyFormulas: [
          { name: "Decompose", statement: "big task → small steps" },
          { name: "Blocks", statement: "snap together; run top to bottom" },
          { name: "Event", statement: "green flag / key press starts the script" },
        ],
        workedExample: {
          problem: "Decompose 'make the cat walk to the edge and meow' into Scratch blocks.",
          solution: "1. When green flag clicked 2. Move 10 steps 3. Repeat until touching edge 4. Play meow sound. Each block is one small step.",
        },
      },
      questions: [
        {
          id: "cipc-u1-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is decomposition?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Deleting a program"
                    },
                    {
                              "id": "b",
                              "text": "Making the screen bigger"
                    },
                    {
                              "id": "c",
                              "text": "Breaking a big task into smaller steps"
                    },
                    {
                              "id": "d",
                              "text": "Connecting two computers"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Decomposition",
                              "statement": "Split problem into parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decomposition = dividing a problem into manageable steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Breaking a task into small steps"
},
        },
        {
          id: "cipc-u1-dp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the Scratch block that starts most programs and describe what a sprite is.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Events and sprites",
                              "statement": "Starter block and character."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'When green flag clicked' event block.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sprite = character/object that follows scripts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Green flag event; sprite = program character"
},
        },
        {
          id: "cipc-u1-dp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Decompose 'draw a square' into four simple instructions a sprite could follow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decomposition",
                              "statement": "Ordered simple steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Move forward, turn 90°, repeat pattern 4 times.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Steps are small and ordered.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each step is one clear action.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "move → turn 90° → repeat ×4"
},
        },
        {
          id: "cipc-u1-dp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define decomposition with an example. (b) What is a block in Scratch? (c) What is a sprite? (d) What event usually starts a Scratch program? (e) Decompose 'make a sprite say hello and move right' into blocks. (f) Why must blocks be in the right order? (g) What colour are motion blocks in Scratch? (h) Describe how you would test your program.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Programming basics",
                              "statement": "Decomposition, blocks, sprites, events, testing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Splitting task into steps; e.g. party planning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Snapping instruction piece.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Program character/object.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Green flag clicked.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid block sequence (say → move).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Blocks run top-to-bottom — order changes result.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Blue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Click flag and watch for expected behaviour.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Decomposition, blocks, sprites, flag event, sequence order, testing."
},
        },
        {
          id: "cipc-u1-dp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Scratch block starts most programs?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Say hello" },
            { id: "b", text: "Stop all" },
            { id: "c", text: "Move 10 steps" },
            { id: "d", text: "When green flag clicked" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Event block", statement: "Starts the program when triggered." }],
            steps: [
              { reasoning: "The green flag event starts Scratch programs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** When green flag clicked",
          },
        },
        {
          id: "cipc-u1-dp-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a sprite? Name two things you can make a sprite do in Scratch.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sprite", statement: "Character/object that follows blocks." }],
            steps: [
              { reasoning: "Sprite = the character or object on stage that runs the program.", marks: 1, markCode: "M" },
              { reasoning: "Two valid actions: move, say, change colour, play sound.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Sprite is the character; e.g. move and say.",
          },
        },
        {
          id: "cipc-u1-dp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Decompose 'make the sprite walk to the edge of the stage' into three simple instructions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Decomposition", statement: "Break a task into small ordered steps." }],
            steps: [
              { reasoning: "Three simple steps, e.g. 'point right', 'move forward 10 steps', 'repeat until touching edge'.", marks: 1, markCode: "M" },
              { reasoning: "Steps are small, clear and in the right order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. point right; repeat move 10 steps until at edge.",
          },
        },
        {
          id: "cipc-u1-dp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Scratch, blocks are grouped by colour by what they do. Which colour are MOTION blocks?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yellow" },
            { id: "b", text: "Blue" },
            { id: "c", text: "Green" },
            { id: "d", text: "Red" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Scratch blocks", statement: "Motion blocks (move, turn) are blue in Scratch." }],
            steps: [
              { reasoning: "In Scratch, motion blocks (move, turn) are blue.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Blue",
          },
        },
        {
          id: "cipc-u1-dp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sequence of four Scratch-style instructions for: 'when flag clicked, the sprite says Hello, waits 2 seconds, then moves right 50 steps'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing blocks", statement: "Order of instructions matters." }],
            steps: [
              { reasoning: "Event first: 'when green flag clicked'.", marks: 1, markCode: "M" },
              { reasoning: "'say Hello' then 'wait 2 seconds' then 'move right 50 steps' in that order.", marks: 1, markCode: "M" },
              { reasoning: "Correct order so the message shows before the move.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "when flag clicked → say Hello → wait 2 → move right 50",
          },
        },
        {
          id: "cipc-u1-dp-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why must Scratch blocks be connected in the correct order for a program to work?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Order never matters in Scratch" },
            { id: "b", text: "The computer runs blocks from top to bottom, so order changes the result" },
            { id: "c", text: "Colour order decides what runs" },
            { id: "d", text: "Blocks only work in alphabetical order" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequence matters", statement: "Instructions execute in order." }],
            steps: [
              { reasoning: "Programs run instructions in sequence; swapping steps changes what happens.", marks: 1, markCode: "M" },
              { reasoning: "e.g. moving before saying hello gives a different result than saying hello first.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Blocks run in order, so order changes the result",
          },
        },
        {
          id: "cipc-u1-dp-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A program is supposed to make a sprite draw a square but it draws a straight line instead. Suggest two things to check when debugging.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Debugging", statement: "Check for missing or wrong steps." }],
            steps: [
              { reasoning: "Check a turn block is missing or set to 0° — a square needs 90° turns.", marks: 1, markCode: "M" },
              { reasoning: "Check the repeat/loop count — a square needs 4 sides.", marks: 1, markCode: "M" },
              { reasoning: "Debugging = find the missing/wrong block and fix it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check turn angle and repeat count.",
          },
        },
        {
          id: "cipc-u1-dp-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does it mean to 'test' a program? Give one reason testing is important.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Testing", statement: "Run the program and check the result." }],
            steps: [
              { reasoning: "Testing = running the program and checking it does what was planned.", marks: 1, markCode: "M" },
              { reasoning: "Important because it finds bugs/errors before users see them.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Run and check it works; finds errors.",
          },
        },
        {
          id: "cipc-u1-dp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Decompose 'make a sprite clap twice' into two small steps.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Decomposition", statement: "Small ordered steps." }],
            steps: [
              { reasoning: "Step 1: play a clap sound / change costume to clap.", marks: 1, markCode: "M" },
              { reasoning: "Step 2: repeat the clap a second time (or use repeat 2).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clap once, then clap again (repeat 2).",
          },
        },
        {
          id: "cipc-u1-dp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which of these is the correct order to make a sprite say 'Ready', move forward 20, then say 'Go'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Say Ready → say Go → move forward 20" },
            { id: "b", text: "Say Ready → move forward 20 → say Go" },
            { id: "c", text: "Move forward 20 → say Ready → say Go" },
            { id: "d", text: "Say Go → say Ready → move forward 20" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Instructions run in order." }],
            steps: [
              { reasoning: "The task order is say Ready, move, say Go.", marks: 1, markCode: "M" },
              { reasoning: "Only (a) matches that order.", marks: 1, markCode: "M" },
              { reasoning: "Correct sequence selected.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Say Ready → move forward 20 → say Go",
          },
        },
        {
          id: "cipc-u1-dp-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You want a sprite to jump over an obstacle. Decompose the task into four small steps a programmer could turn into blocks.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Decomposition", statement: "Break complex tasks into simple steps." }],
            steps: [
              { reasoning: "e.g. move forward to obstacle, change costume (crouch), move up, move down.", marks: 1, markCode: "M" },
              { reasoning: "Four steps, each simple enough for one or two blocks.", marks: 1, markCode: "M" },
              { reasoning: "Steps in a logical order that achieves the jump.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. approach → crouch → up → down/forward.",
          },
        },
        {
          id: "cipc-u1-dp-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define decomposition with an example. (b) What is a block in Scratch? (c) What is a sprite? (d) What event usually starts a Scratch program? (e) Decompose 'make a sprite say hello and move right' into blocks. (f) Why must blocks be in the right order? (g) What colour are motion blocks in Scratch? (h) Describe how you would test your program.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Programming basics", statement: "Decomposition, blocks, sprites, events, order, testing." }],
            steps: [
              { reasoning: "(a) Breaking a big task into small steps; e.g. drawing a house = draw square + triangle roof.", marks: 1, markCode: "M" },
              { reasoning: "(b) A puzzle-piece instruction the computer runs.", marks: 1, markCode: "M" },
              { reasoning: "(c) The character/object on stage that follows the blocks.", marks: 1, markCode: "M" },
              { reasoning: "(d) 'When green flag clicked' or another event.", marks: 1, markCode: "M" },
              { reasoning: "(e) when flag clicked → say hello → move right.", marks: 1, markCode: "M" },
              { reasoning: "(f) Blocks run top-to-bottom; wrong order gives wrong result.", marks: 1, markCode: "M" },
              { reasoning: "(g) Blue.", marks: 1, markCode: "M" },
              { reasoning: "(h) Run it, check each planned action happens, fix bugs found.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Decomposition, blocks, sprites, event, sequence, order, blue motion blocks, testing.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-dp-notes",
      title: "Decomposition and blocks — notes",
      summary: "Break big tasks into small steps. Scratch blocks snap together and run top to bottom from an event.",
      sections: [
        { heading: "Key idea", body: "Decompose first, then build with ordered blocks." },
        { heading: "Scratch", body: "Green flag event starts scripts; blue = motion; sprites are the actors." },
      ],
    },
  ],
};
