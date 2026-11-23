import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edxpc-u2-lesson-2-1",
  code: "2-1",
  title: "Algorithms and Sequencing",
  goal: "I CAN give and follow simple instructions in the right order.",
  standards: ["Y1-Y3 Coding basics", "Algorithms"],
  vocabulary: [
    {
      term: "Algorithm",
      definition: "A set of instructions to complete a task, step by step.",
    },
    { term: "Sequence", definition: "The order instructions are given in." },
    {
      term: "Instruction",
      definition: "One step in an algorithm, like 'press the button'.",
    },
    {
      term: "Program",
      definition: "A set of instructions a computer follows.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u2-algorithm",
      title: "What is an Algorithm?",
      skill: "Recognise algorithms in everyday life and in programs.",
      lesson: {
        sections: [
          {
            heading: "Everyday algorithms",
            body: "An algorithm is just a set of steps to do something. Making a sandwich is an algorithm: 1. Get two slices of bread. 2. Spread butter. 3. Add cheese. 4. Put slices together. Brushing your teeth, getting dressed and walking to school are all algorithms — a series of steps in order.",
          },
          {
            heading: "Computers and algorithms",
            body: "Computers follow algorithms too — this is called a program. When you tap an app icon, the tablet follows instructions to open it. Every game, every website and every animation is built from algorithms written by programmers.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the algorithm for making a cup of tea in 3 steps.",
          solution:
            "1. Boil water. 2. Put tea bag in cup. 3. Pour hot water in.",
        },
      },
      questions: [
        {
          id: "edxpc-u2-algo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an algorithm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of computer" },
              { id: "b", text: "A set of steps to do a task" },
              { id: "c", text: "A game" },
              { id: "d", text: "A website" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Algorithm",
                statement: "A set of instructions to complete a task.",
              },
            ],
            steps: [
              {
                reasoning: "An algorithm is a set of steps.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A set of steps",
            commonErrors: ["Thinking an algorithm is a computer part."],
          },
        },
        {
          id: "edxpc-u2-algo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is an algorithm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sandwich" },
              { id: "b", text: "Steps to brush your teeth" },
              { id: "c", text: "A pencil" },
              { id: "d", text: "A school" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Everyday algorithms",
                statement: "Any step-by-step task is an algorithm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Brushing teeth has ordered steps — it is an algorithm.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Steps to brush your teeth",
            commonErrors: ["Choosing objects instead of step lists."],
          },
        },
        {
          id: "edxpc-u2-algo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a 3-step algorithm for making your bed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Writing algorithms",
                statement: "Clear steps in the right order.",
              },
            ],
            steps: [
              {
                reasoning: "First step, e.g. pull up the duvet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second step, e.g. smooth the sheets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Third step, e.g. place the pillows.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 1. Pull up duvet 2. Smooth sheets 3. Place pillows",
            commonErrors: ["Steps out of order or too vague."],
          },
        },
        {
          id: "edxpc-u2-algo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the order of steps in an algorithm matters, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sequence matters",
                statement: "Steps must happen in the right order.",
              },
            ],
            steps: [
              {
                reasoning: "States that order matters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gives a clear example, e.g. putting shoes on before socks does not work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains what goes wrong if the order is wrong.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wrong order = wrong result, e.g. socks before shoes fails",
            commonErrors: ["Saying order does not matter."],
          },
        },
      ],
    },
    {
      id: "edxpc-u2-sequence",
      title: "Sequencing Instructions",
      skill: "Put instructions in the correct order and spot mistakes.",
      lesson: {
        sections: [
          {
            heading: "Following sequences",
            body: "A sequence means doing steps in order, one after another. If instructions are out of order, the result is wrong. For example, to make a sandwich: get bread → add filling → put slices together. If you 'put slices together' first, you cannot add filling.",
          },
          {
            heading: "Spotting sequence mistakes",
            body: "When debugging (finding mistakes), check each step in order. Ask: does this step make sense after the last one? Did we forget a step? Would a computer be confused by this order? A good programmer always checks their sequence before running it.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Order these: (a) Put shoes on, (b) Put socks on, (c) Get dressed.",
          solution: "b, a, c — socks first, then shoes, then finish dressing.",
        },
      },
      questions: [
        {
          id: "edxpc-u2-seq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'in sequence' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All at once" },
              { id: "b", text: "One after another, in order" },
              { id: "c", text: "Very quickly" },
              { id: "d", text: "Randomly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sequence",
                statement: "Steps in order, one after another.",
              },
            ],
            steps: [
              {
                reasoning: "Sequence means ordered steps.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** One after another, in order",
            commonErrors: ["Thinking sequence means speed."],
          },
        },
        {
          id: "edxpc-u2-seq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Put these in order: 1. Eat breakfast, 2. Wake up, 3. Get dressed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1, 2, 3" },
              { id: "b", text: "2, 3, 1" },
              { id: "c", text: "3, 1, 2" },
              { id: "d", text: "2, 1, 3" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering steps",
                statement: "Wake up → dress → eat.",
              },
            ],
            steps: [
              {
                reasoning: "Wake up first, then dress, then eat.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 2, 3, 1",
            commonErrors: ["Eating before waking up."],
          },
        },
        {
          id: "edxpc-u2-seq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A recipe says: 'Mix flour and water, then bake the cake.' What is wrong with this sequence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sequence logic",
                statement: "Steps must make sense in order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A cake cannot be baked before it is mixed — a step is missing or out of order.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Something like 'put mixture in tin' should come before baking.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cake can't bake before it's mixed — steps missing/out of order",
            commonErrors: ["Saying nothing is wrong."],
          },
        },
        {
          id: "edxpc-u2-seq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a 4-step algorithm for brushing your teeth, making sure the order makes sense.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Ordering instructions",
                statement:
                  "Logical order: get items → wet brush → brush → rinse.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First two steps sensible, e.g. get toothbrush and toothpaste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Next step is brushing teeth.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Final step is rinsing.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 1. Get brush + paste 2. Wet brush 3. Brush teeth 4. Rinse",
            commonErrors: ["Rinsing before brushing."],
          },
        },
      ],
    },
  ],
};
