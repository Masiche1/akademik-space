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
                              "text": "Breaking a big task into smaller steps"
                    },
                    {
                              "id": "b",
                              "text": "Deleting a program"
                    },
                    {
                              "id": "c",
                              "text": "Making the screen bigger"
                    },
                    {
                              "id": "d",
                              "text": "Connecting two computers"
                    }
          ],
          "correctChoiceId": "a"
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
